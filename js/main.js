document.addEventListener('DOMContentLoaded', () => {
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
  }

  sliderValor.addEventListener('input', calculateMortgage);
  sliderInicial.addEventListener('input', calculateMortgage);
  sliderPlazo.addEventListener('input', calculateMortgage);
  checkBono.addEventListener('change', calculateMortgage);

  calculateMortgage();
});
