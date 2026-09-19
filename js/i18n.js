// Diccionarios de traducción: es_419 (Español Latinoamérica) e en_US (Inglés)
const i18nDictionary = {
  es_419: {
    // Navegación
    'nav.inicio': 'Inicio',
    'nav.producto': 'Producto',
    'nav.beneficios': 'Beneficios',
    'nav.preguntas': 'Preguntas',
    'nav.ingresar': 'Ingresar',
    'nav.simular': 'Simular ahora',

    // Hero
    'hero.independiente': '100% Independiente',
    'hero.regulacion': 'Regulación SBS referencial',
    'hero.bono': 'Cálculo Bono Mivivienda',
    'hero.headline': 'Conoce el costo real de tu crédito hipotecario antes de hablar con un banco',
    'hero.subtitle': 'Compara de forma 100% independiente la TCEA real, seguros obligatorios y beneficios estatales como el Bono del Buen Pagador en Perú. Sin sesgo comercial y sin intermediarios.',
    'hero.cta': 'Simular ahora (gratis y sin registro)',
    'hero.comisiones': 'Comisiones ocultas',
    'hero.cobros': 'Sin cobros ni registro',
    'hero.formula': 'Fórmula francesa oficial',

    // Simulador
    'sim.titulo': 'Simulador Hipotecario Interactivo',
    'sim.moneda': 'Moneda: Soles (S/)',
    'sim.valor': 'Valor de la vivienda',
    'sim.inicial': 'Cuota Inicial',
    'sim.plazo': 'Plazo del financiamiento',
    'sim.bono': 'Aplicar Bono Buen Pagador (BBP)',
    'sim.bono.desc': 'Subsidio Mivivienda según rango del inmueble',
    'sim.cuota': 'Cuota Mensual Proyectada',
    'sim.mes': '/ mes (incluye desgravamen)',
    'sim.tcea': 'TCEA estimada',
    'sim.tcea.info': '¿Qué es TCEA? Tasa de Costo Efectivo Anual: incluye intereses, seguro de desgravamen, seguro de inmueble y comisiones totales.',
    'sim.prestamo': 'Préstamo neto',
    'sim.bono.bbp': 'Bono Buen Pagador',
    'sim.cronograma': 'Ver cronograma completo',
    'sim.nota': '*TCEA referencial basada en el promedio del sistema bancario supervisado por la SBS.',
    'sim.metodo': 'Método Francés Ordinario',

    // Cómo funciona
    'howtworks.title': '¿Cómo funciona HipoSim?',
    'howtworks.desc': 'En sólo cuatro pasos sencillos obtén una radiografía completa de tus futuras cuotas sin ceder tus datos a intermediarios comerciales.',
    'howtworks.paso1': 'Datos de la vivienda',
    'howtworks.paso1.desc': 'Indica el precio del inmueble en soles o dólares y si aplica a proyecto Mivivienda o certificación de Vivienda Sostenible.',
    'howtworks.paso2': 'Condiciones de crédito',
    'howtworks.paso2.desc': 'Elige tu cuota inicial desde el 10%, el plazo en años deseado y evalúa alternativas con o sin periodos de gracia.',
    'howtworks.paso3': 'Comparación transparente',
    'howtworks.paso3.desc': 'HipoSim calcula cuotas bajo el método francés, seguros de desgravamen reales, pólizas de inmueble y gastos notariales típicos.',
    'howtworks.paso4': 'Decisión informada',
    'howtworks.paso4.desc': 'Accede a tu cronograma de amortización detallado, compara el Costo Total del Crédito y negocia con ventaja frente a los bancos.',

    // Beneficios
    'benefits.title': 'Beneficios Estatales y Programa Mivivienda',
    'benefits.desc': 'Diseñado especialmente para compradores primerizos de 25 a 40 años: aprovecha subsidios estatales no reembolsables para reducir tu cuota mensual.',
    'benefits.bbp': 'Bono del Buen Pagador (BBP)',
    'benefits.bbp.desc': 'Subsidio directo no reembolsable del Estado peruano otorgado a través del Fondo Mivivienda que complementa tu cuota inicial y reduce el capital financiado.',
    'benefits.bbp.check1': 'No requiere devolución si cumples tus cuotas',
    'benefits.bbp.check2': 'Se aplica directamente al monto de tu crédito',
    'benefits.sostenible': 'Bono Mivivienda Sostenible',
    'benefits.sostenible.desc': 'Beneficio adicional para proyectos inmobiliarios certificados como sostenibles o eco-amigables, que incorporan griferías de bajo consumo y luces LED.',
    'benefits.sostenible.check1': 'Ahorro de hasta 30% en recibos de luz y agua',
    'benefits.sostenible.check2': 'Tasa de interés preferencial en bancos asociados',
    'benefits.nuevo': 'Nuevo Crédito Mivivienda',
    'benefits.nuevo.desc': 'Línea de crédito hipotecario para viviendas con valor tope establecido anualmente, ofreciendo tasas fijas en soles y plazos de pago entre 5 y 25 años.',
    'benefits.nuevo.check1': 'Cuota inicial mínima desde el 7.5%',
    'benefits.nuevo.check2': 'Crédito otorgado 100% en moneda local (soles)',
    'benefits.aplica': 'Ver si calificas al bono',

    // CTA Final
    'cta.free': '100% Gratuito y de libre acceso',
    'cta.headline': 'Toma el control de tu mayor decisión financiera sin presiones comerciales',
    'cta.desc': 'Compara las tasas reales en el mercado peruano en menos de 2 minutos. Sin agentes insistentes ni llamadas spam.',
    'cta.btn': 'Empieza tu simulación gratuita ahora',
    'cta.nota': 'No se requiere tarjeta de crédito ni registro previo para simular.',

    // Footer
    'footer.desc': 'HipoSim Perú es una plataforma tecnológica e informativa independiente. No es una entidad bancaria ni financiera, no otorga créditos directamente ni capta fondos del público. Los cálculos se basan en fórmulas financieras estándar y metodologías de la SBS (Superintendencia de Banca, Seguros y AFP).',
    'footer.nav': 'Navegación',
    'footer.transp': 'Transparencia',
    'footer.terminos': 'Términos y Condiciones',
    'footer.privacidad': 'Privacidad',
    'footer.metodologia': 'Metodología SBS',
    'footer.transparencia': 'Transparencia Financiera',
    'footer.faq': 'Preguntas Frecuentes',
    'footer.contacto': 'Contacto',
    'footer.copyright': '© 2026 HipoSim Perú. Plataforma de simulación y cálculo financiero independiente sin afiliación a entidades bancarias comerciales.',
    'footer.lima': 'Lima, Perú',
  },
  en_US: {
    // Navigation
    'nav.inicio': 'Home',
    'nav.producto': 'Product',
    'nav.beneficios': 'Benefits',
    'nav.preguntas': 'FAQ',
    'nav.ingresar': 'Sign In',
    'nav.simular': 'Simulate Now',

    // Hero
    'hero.independiente': '100% Independent',
    'hero.regulacion': 'SBS Regulatory Reference',
    'hero.bono': 'Good Payer Bonus Calculation',
    'hero.headline': 'Know the real cost of your mortgage before talking to a bank',
    'hero.subtitle': 'Compare independently the real APR (TCEA), mandatory insurance and state benefits like the Good Payer Bonus in Peru. No commercial bias and no intermediaries.',
    'hero.cta': 'Simulate Now (free and no registration)',
    'hero.comisiones': 'Hidden Commissions',
    'hero.cobros': 'No charges or registration',
    'hero.formula': 'Official French method',

    // Simulator
    'sim.titulo': 'Interactive Mortgage Simulator',
    'sim.moneda': 'Currency: Peruvian Soles (S/)',
    'sim.valor': 'Property Value',
    'sim.inicial': 'Down Payment',
    'sim.plazo': 'Financing Period',
    'sim.bono': 'Apply Good Payer Bonus (BBP)',
    'sim.bono.desc': 'Mivivienda subsidy depending on property range',
    'sim.cuota': 'Projected Monthly Payment',
    'sim.mes': '/ month (includes life insurance)',
    'sim.tcea': 'Estimated APR',
    'sim.tcea.info': 'What is APR (TCEA)? Annual Effective Rate: includes interest, life insurance, property insurance and total fees.',
    'sim.prestamo': 'Net Loan',
    'sim.bono.bbp': 'Good Payer Bonus',
    'sim.cronograma': 'View full amortization schedule',
    'sim.nota': '*Reference APR based on the average of the banking system supervised by SBS.',
    'sim.metodo': 'Ordinary French Method',

    // How it works
    'howtworks.title': 'How does HipoSim work?',
    'howtworks.desc': 'In just four simple steps, get a complete breakdown of your future payments without giving your data to commercial intermediaries.',
    'howtworks.paso1': 'Property information',
    'howtworks.paso1.desc': 'Indicate the price of the property in soles or dollars and whether it applies to a Mivivienda project or Sustainable Housing certification.',
    'howtworks.paso2': 'Credit conditions',
    'howtworks.paso2.desc': 'Choose your down payment from 10%, desired loan period and evaluate alternatives with or without grace periods.',
    'howtworks.paso3': 'Transparent comparison',
    'howtworks.paso3.desc': 'HipoSim calculates payments using the French method, real life insurance, property policies and typical notarial expenses.',
    'howtworks.paso4': 'Informed decision',
    'howtworks.paso4.desc': 'Access your detailed amortization schedule, compare total credit cost and negotiate with advantage against banks.',

    // Benefits
    'benefits.title': 'State Benefits and Mivivienda Program',
    'benefits.desc': 'Specially designed for first-time home buyers aged 25 to 40: take advantage of non-reimbursable state subsidies to reduce your monthly payment.',
    'benefits.bbp': 'Good Payer Bonus (BBP)',
    'benefits.bbp.desc': 'Direct non-reimbursable subsidy from the Peruvian government granted through Mivivienda Fund that complements your down payment and reduces financed capital.',
    'benefits.bbp.check1': 'No repayment required if you meet your payments',
    'benefits.bbp.check2': 'Applied directly to your credit amount',
    'benefits.sostenible': 'Sustainable Mivivienda Bonus',
    'benefits.sostenible.desc': 'Additional benefit for real estate projects certified as sustainable or eco-friendly, incorporating low-consumption fixtures and LED lights.',
    'benefits.sostenible.check1': 'Up to 30% savings on electricity and water bills',
    'benefits.sostenible.check2': 'Preferential interest rate in associated banks',
    'benefits.nuevo': 'New Mivivienda Credit',
    'benefits.nuevo.desc': 'Mortgage credit line for homes with annual value ceiling, offering fixed rates in soles and payment terms between 5 and 25 years.',
    'benefits.nuevo.check1': 'Minimum down payment from 7.5%',
    'benefits.nuevo.check2': 'Credit granted 100% in local currency (soles)',
    'benefits.aplica': 'Check if you qualify for bonus',

    // Final CTA
    'cta.free': '100% Free and open access',
    'cta.headline': 'Take control of your biggest financial decision without commercial pressure',
    'cta.desc': 'Compare real rates in the Peruvian market in less than 2 minutes. No pushy agents or spam calls.',
    'cta.btn': 'Start your free simulation now',
    'cta.nota': 'No credit card or prior registration required to simulate.',

    // Footer
    'footer.desc': 'HipoSim Peru is an independent technology and information platform. It is not a banking or financial entity, does not grant loans directly or raise funds from the public. Calculations are based on standard financial formulas and SBS (Superintendence of Banking, Insurance and AFP) methodologies.',
    'footer.nav': 'Navigation',
    'footer.transp': 'Transparency',
    'footer.terminos': 'Terms and Conditions',
    'footer.privacidad': 'Privacy',
    'footer.metodologia': 'SBS Methodology',
    'footer.transparencia': 'Financial Transparency',
    'footer.faq': 'Frequently Asked Questions',
    'footer.contacto': 'Contact',
    'footer.copyright': '© 2026 HipoSim Peru. Independent simulation and financial calculation platform with no affiliation to commercial banking entities.',
    'footer.lima': 'Lima, Peru',
  }
};

// Idioma por defecto: se puede cambiar a "en_US"
const DEFAULT_LANGUAGE = 'es_419';

class I18nManager {
  constructor() {
    this.currentLanguage = this.getSavedLanguage() || DEFAULT_LANGUAGE;
    this.init();
  }

  getSavedLanguage() {
    return localStorage.getItem('hiposim_language');
  }

  setSavedLanguage(lang) {
    localStorage.setItem('hiposim_language', lang);
  }

  setLanguage(lang) {
    if (i18nDictionary[lang]) {
      this.currentLanguage = lang;
      this.setSavedLanguage(lang);
      document.documentElement.lang = lang === 'es_419' ? 'es' : 'en';
      this.updateDOM();
      this.updateLanguageSelector();
    }
  }

  updateLanguageSelector() {
    const langEs = document.getElementById('lang-es');
    const langEn = document.getElementById('lang-en');
    if (langEs && langEn) {
      if (this.currentLanguage === 'es_419') {
        langEs.classList.add('active');
        langEn.classList.remove('active');
      } else {
        langEn.classList.add('active');
        langEs.classList.remove('active');
      }
    }
  }

  t(key, fallback = key) {
    const dict = i18nDictionary[this.currentLanguage];
    return dict && dict[key] ? dict[key] : fallback;
  }

  updateDOM() {
    // Actualizar atributo data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      el.textContent = this.t(key);
    });

    // Actualizar atributos data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
      const key = el.getAttribute('data-i18n-placeholder');
      el.placeholder = this.t(key);
    });

    // Actualizar atributos data-i18n-title
    document.querySelectorAll('[data-i18n-title]').forEach(el => {
      const key = el.getAttribute('data-i18n-title');
      el.title = this.t(key);
    });

    // Actualizar atributos data-i18n-aria-label
    document.querySelectorAll('[data-i18n-aria-label]').forEach(el => {
      const key = el.getAttribute('data-i18n-aria-label');
      el.setAttribute('aria-label', this.t(key));
    });
  }

  init() {
    document.documentElement.lang = this.currentLanguage === 'es_419' ? 'es' : 'en';
    this.updateDOM();
    this.updateLanguageSelector();
  }

  getAvailableLanguages() {
    return Object.keys(i18nDictionary).map(lang => ({
      code: lang,
      name: lang === 'es_419' ? 'Español' : 'English'
    }));
  }
}

// Instancia global
window.i18n = new I18nManager();

// Exportar para módulos
if (typeof module !== 'undefined' && module.exports) {
  module.exports = I18nManager;
}
