/**
 * Eventos de uso anónimos del Landing (TS10a).
 *
 * Sirven para medir los experimentos del Capítulo VIII. Reglas:
 * - Solo se envían los nombres de la lista cerrada EVENTS, con las propiedades permitidas de cada uno.
 * - Nunca viajan datos personales: ni el contenido del formulario de contacto, ni nombres, ni correos.
 * - La sesión es un identificador aleatorio que vive solo mientras la pestaña está abierta.
 * - Respeta "No rastrear" del navegador y la opción de desactivarlo (localStorage hiposim.analytics = "off").
 * - Si el envío falla, no pasa nada: el Landing sigue funcionando igual.
 *
 * Contrato (TS09): POST {eventsEndpoint} con { sessionId, source, name, properties }.
 * Si Gustavo cambia los nombres de los campos, solo hay que ajustar buildPayload.
 */
(function (root, factory) {
  const api = factory(root);
  if (typeof module === 'object' && module.exports) {
    module.exports = api; // pruebas en Node
  } else {
    root.HipoSimEvents = api;
  }
})(typeof window !== 'undefined' ? window : globalThis, function (root) {
  const SOURCE = 'landing';
  const SESSION_KEY = 'hiposim.sessionId';
  const OPT_OUT_KEY = 'hiposim.analytics';
  const MAX_TEXT = 40;

  // Lista cerrada: nombre del evento -> propiedades permitidas.
  const EVENTS = {
    page_viewed: ['language'],
    simulation_started: [],
    simulation_completed: ['propertyValue', 'downPaymentPercent', 'termYears', 'bonus'],
    schedule_opened: ['termYears'],
    language_changed: ['language'],
    contact_message_sent: [],
  };

  function randomId() {
    const c = root.crypto;
    if (c && typeof c.randomUUID === 'function') return c.randomUUID();
    // Respaldo para navegadores sin randomUUID: suficiente para distinguir sesiones, no es secreto.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (ch) => {
      const r = (Math.random() * 16) | 0;
      return (ch === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
  }

  let memorySessionId = null;

  function getSessionId() {
    try {
      let id = root.sessionStorage.getItem(SESSION_KEY);
      if (!id) {
        id = randomId();
        root.sessionStorage.setItem(SESSION_KEY, id);
      }
      return id;
    } catch (error) {
      // Almacenamiento no disponible: la sesión dura lo que dure esta página.
      if (!memorySessionId) memorySessionId = randomId();
      return memorySessionId;
    }
  }

  // La persona desactivó la medición desde el aviso o desde la Política de Privacidad.
  function isOptedOut() {
    try {
      return root.localStorage.getItem(OPT_OUT_KEY) === 'off';
    } catch (error) {
      return false; // almacenamiento no disponible
    }
  }

  function setOptOut(optedOut) {
    try {
      if (optedOut) root.localStorage.setItem(OPT_OUT_KEY, 'off');
      else root.localStorage.removeItem(OPT_OUT_KEY);
    } catch (error) {
      /* almacenamiento no disponible: la elección vale solo para esta página */
    }
  }

  // El navegador pide que no se rastree: se respeta sin preguntar.
  function isDoNotTrack() {
    const nav = root.navigator || {};
    return nav.doNotTrack === '1' || root.doNotTrack === '1';
  }

  function isDisabled() {
    return isOptedOut() || isDoNotTrack();
  }

  // Deja pasar solo las propiedades permitidas y de tipo simple.
  function cleanProperties(name, properties) {
    const allowed = EVENTS[name] || [];
    const result = {};
    const source = properties || {};
    allowed.forEach((key) => {
      const value = source[key];
      if (typeof value === 'number' && Number.isFinite(value)) result[key] = value;
      else if (typeof value === 'boolean') result[key] = value;
      else if (typeof value === 'string') result[key] = value.slice(0, MAX_TEXT);
    });
    return result;
  }

  function buildPayload(name, properties) {
    return {
      sessionId: getSessionId(),
      source: SOURCE,
      name,
      properties: cleanProperties(name, properties),
    };
  }

  function track(name, properties) {
    if (!Object.prototype.hasOwnProperty.call(EVENTS, name)) return false;
    const config = root.HIPOSIM_CONFIG || {};
    if (!config.eventsEndpoint || isDisabled()) return false;
    if (typeof root.fetch !== 'function') return false;

    try {
      const request = root.fetch(config.eventsEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(buildPayload(name, properties)),
        keepalive: true, // sigue enviándose aunque la persona cierre la pestaña
      });
      // Un fallo del servidor o de la red nunca debe verse ni afectar al Landing.
      if (request && typeof request.catch === 'function') request.catch(() => {});
      return true;
    } catch (error) {
      return false;
    }
  }

  return { EVENTS, track, buildPayload, getSessionId, isDisabled, isOptedOut, setOptOut, isDoNotTrack };
});
