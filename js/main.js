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

  function calculateMortgage() {
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

    // Tasa TCEA referencial ~ 8.85% anual
    const tceaAnual = 0.0885;
    const tasaMensual = Math.pow(1 + tceaAnual, 1 / 12) - 1;

    // Fórmula de anualidad francesa: Cuota = P * [ i / (1 - (1+i)^-n ) ]
    let cuotaMensual = 0;
    if (montoFinanciar > 0 && meses > 0) {
      cuotaMensual = montoFinanciar * (tasaMensual / (1 - Math.pow(1 + tasaMensual, -meses)));
    }

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

  // ===== FORMULARIO DE CONTACTO =====
  const contactForm = document.getElementById('contact-form');
  const contactName = document.getElementById('contact-name');
  const contactEmail = document.getElementById('contact-email');
  const contactMessage = document.getElementById('contact-message');
  const btnSubmit = document.getElementById('btn-submit');
  const successMessage = document.getElementById('success-message');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      // Limpiar errores previos
      document.querySelectorAll('[id^="error-"]').forEach(el => el.classList.add('hidden'));

      // Validar campos
      let hasErrors = false;

      if (!contactName.value.trim()) {
        document.getElementById('error-name').classList.remove('hidden');
        hasErrors = true;
      }

      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!contactEmail.value.trim() || !emailRegex.test(contactEmail.value)) {
        document.getElementById('error-email').classList.remove('hidden');
        hasErrors = true;
      }

      if (!contactMessage.value.trim()) {
        document.getElementById('error-message').classList.remove('hidden');
        hasErrors = true;
      }

      if (hasErrors) {
        return;
      }

      // Si todos los campos son válidos, mostrar mensaje de éxito
      btnSubmit.disabled = true;
      btnSubmit.textContent = 'Enviando...';

      // Simular envío (en producción, enviar a un servidor)
      setTimeout(() => {
        contactForm.style.display = 'none';
        successMessage.classList.remove('hidden');

        // Resetear después de 5 segundos para permitir otro envío
        setTimeout(() => {
          contactForm.reset();
          contactForm.style.display = 'block';
          successMessage.classList.add('hidden');
          btnSubmit.disabled = false;
          btnSubmit.textContent = 'Enviar mensaje';
        }, 5000);
      }, 800);
    });
  }
});
