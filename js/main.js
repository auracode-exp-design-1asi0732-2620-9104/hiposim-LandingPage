document.addEventListener('DOMContentLoaded', () => {
  // ===== SIMULADOR HIPOTECARIO =====
  const sliderValor = document.getElementById('slider-valor');
  const sliderInicial = document.getElementById('slider-inicial');
  const sliderPlazo = document.getElementById('slider-plazo');
  const checkBono = document.getElementById('check-bono');

  const valorDisplay = document.getElementById('valor-display');
  const inicialDisplay = document.getElementById('inicial-display');
  const plazoDisplay = document.getElementById('plazo-display');
  const cuotaDisplay = document.getElementById('cuota-display');
  const prestamoDisplay = document.getElementById('prestamo-display');
  const bonoDisplay = document.getElementById('bono-display');

  function formatMoney(amount) {
    return 'S/ ' + Math.round(amount).toLocaleString('es-PE');
  }

  function formatMoneyExact(amount) {
    return 'S/ ' + amount.toLocaleString('es-PE', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  }

  // Tasa efectiva anual referencial del simulador.
  const TEA_ANUAL = 0.0885;

  // Lee los controles y devuelve los datos del crédito (método francés, cuotas fijas).
  function getSimulation() {
    const valor = parseFloat(sliderValor.value);
    const inicialPorcentaje = parseFloat(sliderInicial.value) / 100;
    const años = parseInt(sliderPlazo.value);
    const meses = años * 12;

    const montoInicial = valor * inicialPorcentaje;
    let bono = 0;

    // Tabla referencial Bono Buen Pagador según valor en Perú
    if (checkBono.checked) {
      if (valor <= 200000) {
        bono = 26400;
      } else if (valor <= 300000) {
        bono = 18200;
      } else if (valor <= 400000) {
        bono = 10000;
      } else {
        bono = 0;
      }
    }

    const montoFinanciar = Math.max(0, valor - montoInicial - bono);
    const tasaMensual = Math.pow(1 + TEA_ANUAL, 1 / 12) - 1;

    // Fórmula de anualidad francesa: Cuota = P * [ i / (1 - (1+i)^-n ) ]
    let cuotaMensual = 0;
    if (montoFinanciar > 0 && meses > 0) {
      cuotaMensual = montoFinanciar * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -meses)));
    }

    return { valor, montoInicial, años, meses, bono, montoFinanciar, tasaMensual, cuotaMensual };
  }

  // Detalle mensual: interés sobre el saldo, amortización y saldo restante. La última cuota cierra el saldo.
  function buildSchedule(simulation) {
    const rows = [];
    let saldo = simulation.montoFinanciar;
    for (let mes = 1; mes <= simulation.meses && saldo > 0; mes++) {
      const interes = saldo * simulation.tasaMensual;
      let amortizacion = simulation.cuotaMensual - interes;
      if (mes === simulation.meses || amortizacion > saldo) amortizacion = saldo;
      saldo = Math.max(0, saldo - amortizacion);
      rows.push({ mes, cuota: interes + amortizacion, interes, amortizacion, saldo });
    }
    return rows;
  }

  function calculateMortgage() {
    const { valor, montoInicial, años, meses, bono, montoFinanciar, cuotaMensual } = getSimulation();

    // Renderizado en DOM
    valorDisplay.innerText = formatMoney(valor);
    inicialDisplay.innerText = `${formatMoney(montoInicial)} (${sliderInicial.value}%)`;
    plazoDisplay.innerText = `${años} años (${meses} meses)`;
    prestamoDisplay.innerText = formatMoney(montoFinanciar);
    bonoDisplay.innerText = bono > 0 ? `+${formatMoney(bono)}` : 'S/ 0 (No aplica)';
    cuotaDisplay.innerText = formatMoney(cuotaMensual);

    // Actualizar aria-valuetext de los sliders
    sliderValor.setAttribute('aria-valuetext', formatMoney(valor));
    sliderInicial.setAttribute('aria-valuetext', `${sliderInicial.value}%`);
    sliderPlazo.setAttribute('aria-valuetext', `${años} años`);
  }

  sliderValor.addEventListener('input', calculateMortgage);
  sliderInicial.addEventListener('input', calculateMortgage);
  sliderPlazo.addEventListener('input', calculateMortgage);
  checkBono.addEventListener('change', calculateMortgage);

  calculateMortgage();

  // ===== CRONOGRAMA COMPLETO (US15) =====
  const scheduleButton = document.getElementById('btn-schedule');
  const scheduleDialog = document.getElementById('schedule-dialog');
  const scheduleBody = document.getElementById('schedule-body');
  const scheduleSummary = document.getElementById('schedule-summary');
  const scheduleClose = document.getElementById('schedule-close');
  const scheduleScroll = document.getElementById('schedule-scroll');

  function renderSchedule() {
    const simulation = getSimulation();
    const rows = buildSchedule(simulation);
    scheduleSummary.textContent = `${rows.length} cuotas mensuales de ${formatMoney(simulation.cuotaMensual)}`;

    const fragment = document.createDocumentFragment();
    rows.forEach((row) => {
      const tr = document.createElement('tr');
      tr.className = 'border-b border-outline-variant/20';
      const month = document.createElement('th');
      month.scope = 'row';
      month.className = 'py-2 pr-3 font-medium text-left';
      month.textContent = String(row.mes);
      tr.appendChild(month);
      [row.cuota, row.interes, row.amortizacion, row.saldo].forEach((amount, index) => {
        const td = document.createElement('td');
        td.className = (index === 3 ? 'py-2 pl-3' : 'py-2 px-3') + ' text-right tabular-nums';
        td.textContent = formatMoneyExact(amount);
        tr.appendChild(td);
      });
      fragment.appendChild(tr);
    });
    scheduleBody.replaceChildren(fragment);
  }

  if (scheduleButton && scheduleDialog) {
    scheduleButton.addEventListener('click', () => {
      renderSchedule();
      if (typeof scheduleDialog.showModal === 'function') {
        scheduleDialog.showModal();
      } else {
        scheduleDialog.setAttribute('open', '');
      }
      scheduleScroll.scrollTop = 0;
      scheduleClose.focus();
    });
    scheduleClose.addEventListener('click', () => scheduleDialog.close());
    // Un clic en el fondo oscuro también cierra el diálogo.
    scheduleDialog.addEventListener('click', (event) => {
      if (event.target === scheduleDialog) scheduleDialog.close();
    });
    // Al cerrar (botón, fondo o Escape) el foco vuelve al botón que lo abrió.
    scheduleDialog.addEventListener('close', () => scheduleButton.focus());
  }

  // ===== FORMULARIO DE CONTACTO (US19) =====
  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contact-name');
  const contactEmail = document.getElementById('contact-email');
  const contactMessage = document.getElementById('contact-message');
  const btnSubmit = document.getElementById('btn-submit');
  const successMessage = document.getElementById('success-message');
  const contactStatus = document.getElementById('contact-status');
  const contactError = document.getElementById('contact-error');
  const config = window.HIPOSIM_CONFIG || {};

  const CONTACT_ERRORS = {
    network: 'No pudimos enviar tu mensaje. Revisa tu conexión e inténtalo de nuevo.',
    server: 'El servicio no está disponible en este momento. Inténtalo de nuevo en unos minutos.',
    tooMany: 'Enviaste varios mensajes seguidos. Espera un minuto e inténtalo de nuevo.',
    invalid: 'Revisa los datos del formulario e inténtalo de nuevo.',
  };

  function showFieldError(field) {
    const error = document.getElementById(`error-${field}`);
    const input = document.getElementById(`contact-${field}`);
    if (error) error.classList.remove('hidden');
    if (input) input.setAttribute('aria-invalid', 'true');
  }

  function clearContactErrors() {
    document.querySelectorAll('[id^="error-"]').forEach((el) => el.classList.add('hidden'));
    [contactName, contactEmail, contactMessage].forEach((input) => input.removeAttribute('aria-invalid'));
    contactError.classList.add('hidden');
    contactError.textContent = '';
  }

  function showContactError(message) {
    contactError.textContent = message;
    contactError.classList.remove('hidden');
  }

  function setSending(sending) {
    btnSubmit.disabled = sending;
    btnSubmit.textContent = sending ? 'Enviando...' : 'Enviar mensaje';
    contactStatus.classList.toggle('hidden', !sending);
  }

  async function sendContactMessage(payload) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), config.contactTimeoutMs || 90000);
    try {
      return await fetch(config.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
    } finally {
      clearTimeout(timer);
    }
  }

  if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      clearContactErrors();

      // Validar campos
      let hasErrors = false;

      if (!contactName.value.trim()) {
        showFieldError('name');
        hasErrors = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!contactEmail.value.trim() || !emailRegex.test(contactEmail.value.trim())) {
        showFieldError('email');
        hasErrors = true;
      }

      if (!contactMessage.value.trim()) {
        showFieldError('message');
        hasErrors = true;
      }

      if (hasErrors) {
        const firstInvalid = contactForm.querySelector('[aria-invalid="true"]');
        if (firstInvalid) firstInvalid.focus();
        return;
      }

      setSending(true);
      let response;
      try {
        response = await sendContactMessage({
          name: contactName.value.trim(),
          email: contactEmail.value.trim(),
          message: contactMessage.value.trim(),
        });
      } catch (error) {
        setSending(false);
        showContactError(CONTACT_ERRORS.network);
        return;
      }
      setSending(false);

      // Solo un 201 real confirma la recepción.
      if (response.status === 201) {
        contactForm.reset();
        contactForm.style.display = 'none';
        successMessage.classList.remove('hidden');
        setTimeout(() => {
          contactForm.style.display = 'block';
          successMessage.classList.add('hidden');
        }, 8000);
        return;
      }

      if (response.status === 400) {
        let fields = [];
        try {
          const problem = await response.json();
          fields = Object.keys(problem.errors || {}).filter((field) => document.getElementById(`error-${field}`));
        } catch (error) {
          fields = [];
        }
        fields.forEach(showFieldError);
        if (fields.length === 0) showContactError(CONTACT_ERRORS.invalid);
        else document.getElementById(`contact-${fields[0]}`).focus();
        return;
      }

      showContactError(response.status === 429 ? CONTACT_ERRORS.tooMany : CONTACT_ERRORS.server);
    });
  }
});
