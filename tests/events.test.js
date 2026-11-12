// Pruebas de js/events.js (TS10a). Se corren con:  node --test tests/
const test = require('node:test');
const assert = require('node:assert/strict');

function memoryStorage() {
  const data = new Map();
  return {
    getItem: (key) => (data.has(key) ? data.get(key) : null),
    setItem: (key, value) => data.set(key, String(value)),
    removeItem: (key) => data.delete(key),
  };
}

const ENDPOINT = 'https://example.test/api/events';
let calls;

// Cada prueba parte de un navegador limpio y con un fetch que anota lo que se envía.
function freshBrowser(overrides = {}) {
  calls = [];
  globalThis.HIPOSIM_CONFIG = { eventsEndpoint: ENDPOINT };
  globalThis.sessionStorage = memoryStorage();
  globalThis.localStorage = memoryStorage();
  globalThis.fetch = (url, options) => {
    calls.push({ url, options, body: JSON.parse(options.body) });
    return Promise.resolve({ status: 201 });
  };
  Object.defineProperty(globalThis, 'navigator', { value: { doNotTrack: null }, configurable: true, writable: true });
  Object.assign(globalThis, overrides);
}

const events = require('../js/events.js');

test('envía un evento permitido con la forma del contrato', () => {
  freshBrowser();

  assert.equal(events.track('page_viewed', { language: 'es_419' }), true);

  assert.equal(calls.length, 1);
  assert.equal(calls[0].url, ENDPOINT);
  assert.equal(calls[0].options.method, 'POST');
  assert.equal(calls[0].options.keepalive, true);
  assert.equal(calls[0].body.name, 'page_viewed');
  assert.equal(calls[0].body.source, 'landing');
  assert.deepEqual(calls[0].body.properties, { language: 'es_419' });
  assert.match(calls[0].body.sessionId, /^[0-9a-f-]{36}$/);
});

test('ignora un nombre que no está en la lista cerrada', () => {
  freshBrowser();

  assert.equal(events.track('boton_secreto'), false);
  assert.equal(calls.length, 0);
});

test('descarta las propiedades que no están permitidas, como datos personales', () => {
  freshBrowser();

  events.track('contact_message_sent', { email: 'ana@example.com', name: 'Ana', message: 'hola' });
  events.track('simulation_completed', { propertyValue: 280000, termYears: 20, bonus: true, phone: '987654321' });

  assert.deepEqual(calls[0].body.properties, {});
  assert.deepEqual(calls[1].body.properties, { propertyValue: 280000, termYears: 20, bonus: true });
});

test('acorta los textos largos y descarta valores que no son simples', () => {
  freshBrowser();

  events.track('page_viewed', { language: 'x'.repeat(100) });
  events.track('simulation_completed', { propertyValue: { raro: true }, termYears: NaN });

  assert.equal(calls[0].body.properties.language.length, 40);
  assert.deepEqual(calls[1].body.properties, {});
});

test('la sesión se mantiene durante la visita', () => {
  freshBrowser();

  events.track('page_viewed');
  events.track('schedule_opened', { termYears: 20 });

  assert.equal(calls[0].body.sessionId, calls[1].body.sessionId);
});

test('no envía nada si no hay dirección configurada', () => {
  freshBrowser();
  globalThis.HIPOSIM_CONFIG = {};

  assert.equal(events.track('page_viewed'), false);
  assert.equal(calls.length, 0);
});

test('respeta que la persona haya desactivado la recolección', () => {
  freshBrowser();
  globalThis.localStorage.setItem('hiposim.analytics', 'off');

  assert.equal(events.track('page_viewed'), false);
  assert.equal(calls.length, 0);
});

test('respeta "No rastrear" del navegador', () => {
  freshBrowser();
  Object.defineProperty(globalThis, 'navigator', { value: { doNotTrack: '1' }, configurable: true, writable: true });

  assert.equal(events.track('page_viewed'), false);
  assert.equal(calls.length, 0);
});

test('desactivar y volver a activar la medición se recuerda', () => {
  freshBrowser();
  assert.equal(events.isOptedOut(), false);

  events.setOptOut(true);
  assert.equal(events.isOptedOut(), true);
  assert.equal(events.track('page_viewed'), false);
  assert.equal(calls.length, 0);

  events.setOptOut(false);
  assert.equal(events.isOptedOut(), false);
  assert.equal(events.track('page_viewed'), true);
  assert.equal(calls.length, 1);
});

test('distingue "No rastrear" de la elección de la persona', () => {
  freshBrowser();
  Object.defineProperty(globalThis, 'navigator', { value: { doNotTrack: '1' }, configurable: true, writable: true });

  assert.equal(events.isDoNotTrack(), true);
  assert.equal(events.isOptedOut(), false);
  assert.equal(events.isDisabled(), true);
});

test('un fallo de red o del servidor no rompe la página', async () => {
  freshBrowser();
  globalThis.fetch = () => Promise.reject(new Error('sin red'));

  assert.doesNotThrow(() => events.track('page_viewed'));
  // Espera un ciclo para confirmar que el rechazo quedó atendido y no escapa como error.
  await new Promise((resolve) => setImmediate(resolve));

  globalThis.fetch = () => {
    throw new Error('fetch roto');
  };
  assert.equal(events.track('page_viewed'), false);
});
