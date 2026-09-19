// Sistema i18n: es_419 (Español, idioma base del HTML) e en_US (Inglés).
// El HTML está escrito en español; al elegir inglés se traducen los nodos de texto
// y atributos (aria-label, placeholder, alt, title) usando el diccionario EN_TEXT.
// Un MutationObserver traduce también el contenido que actualiza main.js.

const EN_TEXT = {
  // Meta
  'HipoSim | Simulador Independiente de Crédito Hipotecario en Perú': 'HipoSim | Independent Mortgage Simulator in Peru',
  'Simulador hipotecario independiente en Perú. Calcula la TCEA real, seguros y beneficios estatales (Bono Mivivienda) sin sesgo comercial ni registro obligatorio.': 'Independent mortgage simulator in Peru. Calculate the real TCEA (APR), insurance and state benefits (Mivivienda Bonus) with no commercial bias and no mandatory registration.',

  // Navegación / header
  'HipoSim: Simulador Hipotecario - Ir a inicio': 'HipoSim: Mortgage Simulator - Go to home',
  'HipoSim Logo': 'HipoSim Logo',
  'Navegación principal': 'Main navigation',
  'Inicio': 'Home',
  'Producto': 'Product',
  'Beneficios': 'Benefits',
  'Preguntas': 'FAQ',
  'Ingresar': 'Sign in',
  'Ingresar a mi cuenta': 'Sign in to my account',
  'Simular ahora': 'Simulate now',
  'Ir al simulador hipotecario gratuito': 'Go to the free mortgage simulator',
  'Ir al simulador hipotecario gratuito y sin registro': 'Go to the free mortgage simulator, no registration',

  // Hero
  '100% Independiente': '100% Independent',
  'Regulación SBS referencial': 'Reference SBS regulation',
  'Cálculo Bono Mivivienda': 'Mivivienda Bonus calculation',
  'Conoce el costo real de tu crédito hipotecario antes de hablar con un banco': 'Know the real cost of your mortgage before talking to a bank',
  'Compara de forma 100% independiente la TCEA real, seguros obligatorios y beneficios estatales como el Bono del Buen Pagador en Perú. Sin sesgo comercial y sin intermediarios.': 'Compare, 100% independently, the real TCEA (APR), mandatory insurance and state benefits such as the Good Payer Bonus in Peru. No commercial bias and no intermediaries.',
  'Simular ahora (gratis y sin registro)': 'Simulate now (free, no registration)',
  'Comisiones ocultas': 'Hidden fees',
  'Sin cobros ni registro': 'No charges or registration',
  'Fórmula francesa oficial': 'Official French formula',

  // Simulador
  'Simulador Hipotecario Interactivo': 'Interactive Mortgage Simulator',
  'Moneda: Soles (S/)': 'Currency: Soles (S/)',
  'Valor de la vivienda': 'Home value',
  'Valor de la vivienda seleccionado': 'Selected home value',
  'Ajusta el valor de la vivienda entre 120,000 y 800,000 soles': 'Adjust the home value between 120,000 and 800,000 soles',
  'Cuota Inicial': 'Down payment',
  'Cuota inicial seleccionada': 'Selected down payment',
  'Ajusta el porcentaje de cuota inicial entre 10% y 40%': 'Adjust the down payment percentage between 10% and 40%',
  '10% (mínimo)': '10% (minimum)',
  'Plazo del financiamiento': 'Loan term',
  'Plazo seleccionado': 'Selected term',
  'Ajusta el plazo del financiamiento entre 5 y 30 años': 'Adjust the loan term between 5 and 30 years',
  'Aplicar Bono Buen Pagador (BBP)': 'Apply Good Payer Bonus (BBP)',
  'Subsidio Mivivienda según rango del inmueble': 'Mivivienda subsidy based on property range',
  'Resultados de la simulación hipotecaria': 'Mortgage simulation results',
  'Cuota Mensual Proyectada': 'Projected Monthly Payment',
  'Cuota mensual': 'Monthly payment',
  '/ mes (incluye desgravamen)': '/ month (includes life insurance)',
  'TCEA estimada': 'Estimated TCEA (APR)',
  '¿Qué es TCEA? Tasa de Costo Efectivo Anual: incluye intereses, seguro de desgravamen, seguro de inmueble y comisiones totales.': 'What is TCEA? Annual Effective Cost Rate: includes interest, life insurance, property insurance and total fees.',
  'Préstamo neto': 'Net loan',
  'Bono Buen Pagador': 'Good Payer Bonus',
  'S/ 0 (No aplica)': 'S/ 0 (Not applicable)',
  'Ver cronograma completo': 'View full schedule',
  '*TCEA referencial basada en el promedio del sistema bancario supervisado por la SBS.': '*Reference TCEA based on the average of the banking system supervised by the SBS.',
  'Método Francés Ordinario': 'Ordinary French Method',

  // Cómo funciona
  'Metodología Clara': 'Clear Methodology',
  '¿Cómo funciona HipoSim?': 'How does HipoSim work?',
  'En sólo cuatro pasos sencillos obtén una radiografía completa de tus futuras cuotas sin ceder tus datos a intermediarios comerciales.': 'In just four simple steps, get a complete picture of your future payments without handing your data to commercial intermediaries.',
  'Datos de la vivienda': 'Home details',
  'Indica el precio del inmueble en soles o dólares y si aplica a proyecto Mivivienda o certificación de Vivienda Sostenible.': 'Enter the property price in soles or dollars and whether it qualifies for a Mivivienda project or Sustainable Housing certification.',
  'Soles / Dólares': 'Soles / Dollars',
  'Condiciones de crédito': 'Loan conditions',
  'Elige tu cuota inicial desde el 10%, el plazo en años deseado y evalúa alternativas con o sin periodos de gracia.': 'Choose your down payment from 10%, the term in years you want, and compare options with or without grace periods.',
  'Inicial flexible': 'Flexible down payment',
  'Comparación transparente': 'Transparent comparison',
  'HipoSim calcula cuotas bajo el método francés, seguros de desgravamen reales, pólizas de inmueble y gastos notariales típicos.': 'HipoSim calculates payments under the French method, real life insurance, property policies and typical notary fees.',
  'TCEA desglosada': 'Itemized TCEA',
  'Decisión informada': 'Informed decision',
  'Accede a tu cronograma de amortización detallado, compara el Costo Total del Crédito y negocia con ventaja frente a los bancos.': 'Access your detailed amortization schedule, compare the Total Cost of Credit and negotiate from a position of strength with banks.',
  'Poder de negociación': 'Negotiating power',

  // Diferenciación
  'Transparencia Radical': 'Radical Transparency',
  'HipoSim vs. Simuladores Bancarios Tradicionales': 'HipoSim vs. Traditional Bank Simulators',
  'Entiende por qué los portales bancarios habituales protegen sus márgenes comerciales mientras que HipoSim defiende tu bolsillo.': 'Understand why typical bank portals protect their commercial margins while HipoSim protects your wallet.',
  'Simuladores Bancarios': 'Bank Simulators',
  'BCP, Interbank, BBVA, Scotiabank, etc.': 'BCP, Interbank, BBVA, Scotiabank, etc.',
  'Sesgo exclusivo hacia su propio producto:': 'Bias toward their own product only:',
  'Jamás te informarán si otra entidad ofrece un crédito más barato para tu perfil.': 'They will never tell you if another institution offers a cheaper loan for your profile.',
  'Comisiones y seguros en letra chica:': 'Fees and insurance in fine print:',
  'Destacan la TEA en grande y ocultan el impacto de los seguros obligatorios que elevan la TCEA.': 'They highlight the TEA in big letters and hide the impact of mandatory insurance that raises the TCEA.',
  'Barreras de prospección:': 'Lead-capture barriers:',
  'Te obligan a ingresar tu DNI, correo electrónico y número telefónico para iniciar un asedio de llamadas de ventas.': 'They force you to enter your ID, email and phone number so they can start a barrage of sales calls.',
  'Opacidad en subsidios:': 'Opaque subsidies:',
  'No aplican de forma inmediata o transparente los cálculos del Bono del Buen Pagador ni Mivivienda Sostenible.': 'They do not apply the Good Payer Bonus or Sustainable Mivivienda calculations immediately or transparently.',
  'Tu aliado independiente': 'Your independent ally',
  'HipoSim Perú': 'HipoSim Peru',
  '100% Imparcial y sin intermediarios': '100% Impartial and no intermediaries',
  '100% Imparcial e independiente:': '100% Impartial and independent:',
  'No cobramos comisiones de ningún banco ni colocamos créditos, garantizando cálculos objetivos.': 'We charge no commissions from any bank and do not place loans, guaranteeing objective calculations.',
  'TCEA desglosada al céntimo:': 'TCEA itemized to the cent:',
  'Transparencia total que separa el capital, intereses, seguro de desgravamen y seguro de todo riesgo.': 'Full transparency separating principal, interest, life insurance and all-risk insurance.',
  'Simulación anónima e inmediata:': 'Anonymous, instant simulation:',
  'Pruébalo sin registro obligatorio, sin llamadas no solicitadas ni spam en tu WhatsApp.': 'Try it with no mandatory registration, no unsolicited calls and no spam on your WhatsApp.',
  'Integración de subsidios estatales:': 'State subsidy integration:',
  'Aplica automáticamente las tablas vigentes del BBP y Mivivienda Sostenible vigentes en el Perú.': 'Automatically applies the current BBP and Sustainable Mivivienda tables in force in Peru.',

  // Beneficios
  'Apoyo del Estado Peruano': 'Support from the Peruvian State',
  'Beneficios Estatales y Programa Mivivienda': 'State Benefits and Mivivienda Program',
  'Diseñado especialmente para compradores primerizos de 25 a 40 años: aprovecha subsidios estatales no reembolsables para reducir tu cuota mensual.': 'Designed especially for first-time buyers aged 25 to 40: take advantage of non-refundable state subsidies to lower your monthly payment.',
  'Ver si calificas al bono': 'Check if you qualify for the bonus',
  'Hasta S/ 26,400': 'Up to S/ 26,400',
  'Bono del Buen Pagador (BBP)': 'Good Payer Bonus (BBP)',
  'Subsidio directo no reembolsable del Estado peruano otorgado a través del Fondo Mivivienda que complementa tu cuota inicial y reduce el capital financiado.': 'Direct, non-refundable subsidy from the Peruvian State granted through the Mivivienda Fund that complements your down payment and reduces the financed principal.',
  'No requiere devolución si cumples tus cuotas': 'No repayment required if you keep up with your payments',
  'Se aplica directamente al monto de tu crédito': 'Applied directly to your loan amount',
  'Ahorro extra hasta S/ 5,800': 'Extra savings up to S/ 5,800',
  'Bono Mivivienda Sostenible': 'Sustainable Mivivienda Bonus',
  'Beneficio adicional para proyectos inmobiliarios certificados como sostenibles o eco-amigables, que incorporan griferías de bajo consumo y luces LED.': 'Additional benefit for real estate projects certified as sustainable or eco-friendly, featuring low-flow fixtures and LED lighting.',
  'Ahorro de hasta 30% en recibos de luz y agua': 'Up to 30% savings on electricity and water bills',
  'Tasa de interés preferencial en bancos asociados': 'Preferential interest rate at partner banks',
  'Hasta S/ 464,300': 'Up to S/ 464,300',
  'Nuevo Crédito Mivivienda': 'New Mivivienda Loan',
  'Línea de crédito hipotecario para viviendas con valor tope establecido anualmente, ofreciendo tasas fijas en soles y plazos de pago entre 5 y 25 años.': 'Mortgage credit line for homes under an annually set value cap, offering fixed rates in soles and repayment terms of 5 to 25 years.',
  'Cuota inicial mínima desde el 7.5%': 'Minimum down payment from 7.5%',
  'Crédito otorgado 100% en moneda local (soles)': 'Loan granted 100% in local currency (soles)',

  // Funcionalidades avanzadas
  'Herramientas Profesionales': 'Professional Tools',
  'Lleva tu simulación al siguiente nivel': 'Take your simulation to the next level',
  'Crea tu cuenta gratuita para acceder a funciones avanzadas que te darán el control completo ante las negociaciones bancarias.': 'Create your free account to access advanced features that give you full control in bank negotiations.',
  'Comparador de 3 escenarios': '3-scenario comparator',
  'Evalúa lado a lado diferentes porcentajes de cuota inicial y plazos para visualizar con exactitud cuántos miles de soles ahorras en intereses acumulados.': 'Compare different down payment percentages and terms side by side to see exactly how many thousands of soles you save in accumulated interest.',
  'Optimiza tu ahorro': 'Optimize your savings',
  'Historial guardado': 'Saved history',
  'Guarda tus simulaciones favoritas en tu panel y actualízalas automáticamente cuando la SBS publique variaciones en las tasas de interés referenciales.': 'Save your favorite simulations in your dashboard and update them automatically when the SBS publishes changes to reference interest rates.',
  'Monitoreo continuo': 'Continuous monitoring',
  'Exportar informe PDF para negociar': 'Export PDF report to negotiate',
  'Descarga una ficha técnica en PDF con el cronograma y desglose de TCEA para presentarla en ventanilla y exigir a tu banco que iguale o mejore la tasa.': 'Download a PDF fact sheet with the schedule and TCEA breakdown to present at the bank counter and demand that your bank match or beat the rate.',
  'Ficha para ventanilla bancaria': 'Bank counter fact sheet',

  // FAQ
  'Dudas Frecuentes': 'Common Questions',
  'Preguntas Frecuentes': 'Frequently Asked Questions',
  'Encontramos las preguntas más comunes sobre el simulador, la TCEA y los beneficios estatales.': 'Here are the most common questions about the simulator, the TCEA and state benefits.',
  '¿Qué es la TCEA y por qué es importante?': 'What is the TCEA and why does it matter?',
  'La TCEA (Tasa de Costo Efectivo Anual) es el costo real del crédito, incluyendo intereses, seguros obligatorios (desgravamen e inmueble) y comisiones. Es más importante que la TEA porque refleja lo que realmente pagarás. Los bancos destacan la TEA pero ocultan la TCEA en letra chica.': 'The TCEA (Annual Effective Cost Rate) is the real cost of the loan, including interest, mandatory insurance (life and property) and fees. It matters more than the TEA because it reflects what you will actually pay. Banks highlight the TEA but hide the TCEA in the fine print.',
  '¿Necesito registrarme para usar el simulador?': 'Do I need to register to use the simulator?',
  'No. HipoSim es 100% gratuito y sin registro. Puedes simular cuantas veces quieras sin que se guarde tu información. Los bancos te exigen datos para contactarte; nosotros no.': 'No. HipoSim is 100% free with no registration. You can simulate as many times as you want without your information being saved. Banks demand your data to contact you; we do not.',
  '¿Qué es el Bono del Buen Pagador (BBP)?': 'What is the Good Payer Bonus (BBP)?',
  'Es un subsidio directo del Estado peruano para compradores de primera vivienda. No requiere devolución si cumples tus cuotas. Depende del precio de la vivienda: hasta S/ 26,400 para inmuebles hasta S/ 200,000.': 'It is a direct subsidy from the Peruvian State for first-time home buyers. No repayment is required if you keep up with your payments. It depends on the home price: up to S/ 26,400 for properties up to S/ 200,000.',
  '¿Los cálculos de HipoSim son exactos?': 'Are HipoSim calculations exact?',
  'Los resultados son referenciales y se basan en la TCEA promedio del sistema bancario supervisado por la SBS. Las tasas exactas varían según tu perfil crediticio (edad, ingresos, deuda). Usa estos números para negociar con ventaja en el banco.': 'Results are for reference and are based on the average TCEA of the banking system supervised by the SBS. Exact rates vary depending on your credit profile (age, income, debt). Use these numbers to negotiate from a position of strength at the bank.',
  '¿Qué pasará con mis datos si genero una simulación?': 'What happens to my data if I run a simulation?',
  'HipoSim no guarda datos personales. Sin registro, no hay datos. Si compartes tu simulación con una inmobiliaria o banco, eso es decisión tuya. Leé nuestra': 'HipoSim does not store personal data. No registration, no data. If you share your simulation with a real estate agency or bank, that is your decision. Read our',
  'Política de Privacidad': 'Privacy Policy',
  'para más detalles.': 'for more details.',

  // Contacto
  'Comunícate con Nosotros': 'Get in Touch',
  'Contacto': 'Contact',
  '¿Preguntas o sugerencias? Escríbenos y te responderemos en 24 horas.': 'Questions or suggestions? Write to us and we will reply within 24 hours.',
  'Nombre completo': 'Full name',
  'Tu nombre': 'Your name',
  'El nombre es obligatorio': 'Name is required',
  'Correo electrónico': 'Email',
  'tu@correo.com': 'you@email.com',
  'El correo es obligatorio y válido': 'A valid email is required',
  'Mensaje': 'Message',
  'Cuéntanos tu pregunta o sugerencia...': 'Tell us your question or suggestion...',
  'El mensaje es obligatorio': 'Message is required',
  'Enviar mensaje': 'Send message',
  'Enviando...': 'Sending...',
  '¡Gracias! Tu mensaje fue enviado exitosamente. Te responderemos pronto.': 'Thank you! Your message was sent successfully. We will reply soon.',

  // Términos y condiciones
  'Términos y Condiciones': 'Terms and Conditions',
  '1. Naturaleza del Servicio': '1. Nature of the Service',
  'HipoSim Perú es una plataforma de simulación y cálculo financiero informativa e independiente. No es una entidad bancaria ni financiera. No otorgamos créditos directamente, no captamos fondos del público, y no realizamos intermediación financiera.': 'HipoSim Peru is an independent, informational financial simulation and calculation platform. It is not a bank or financial institution. We do not grant loans directly, do not raise funds from the public, and do not engage in financial intermediation.',
  '2. Carácter Referencial de los Cálculos': '2. Reference Nature of Calculations',
  'Todos los resultados del simulador son referenciales. Se basan en fórmulas estándar del sistema financiero peruano y en tasas promedio supervisadas por la SBS. Las tasas, seguros y plazos exactos que ofrezcas los bancos pueden variar según tu perfil crediticio.': 'All simulator results are for reference only. They are based on standard formulas of the Peruvian financial system and on average rates supervised by the SBS. The exact rates, insurance and terms offered by banks may vary depending on your credit profile.',
  '3. Simulación Anónima y Datos Personales': '3. Anonymous Simulation and Personal Data',
  'Por defecto, el simulador no requiere registro ni almacenamiento de datos personales. Los datos que ingreses en el simulador no se guardan en nuestros servidores a menos que tú explícitamente autorices compartir tu simulación con una inmobiliaria o entidad bancaria.': 'By default, the simulator requires no registration or storage of personal data. Data you enter in the simulator is not saved on our servers unless you explicitly authorize sharing your simulation with a real estate agency or bank.',
  '4. Conexión con Inmobiliarias (Opcional)': '4. Connection with Real Estate Agencies (Optional)',
  'Cualquier conexión o compartición de tu simulación con inmobiliarias, bancos u otros terceros ocurre únicamente si tú autorizas explícitamente. No hacemos comparticiones automáticas ni a solicitud de terceros sin tu consentimiento escrito.': 'Any connection or sharing of your simulation with real estate agencies, banks or other third parties occurs only if you explicitly authorize it. We make no automatic sharing, nor at the request of third parties, without your written consent.',
  '5. Limitaciones de Responsabilidad': '5. Limitation of Liability',
  'HipoSim actúa como herramienta educativa. No nos hacemos responsables por decisiones de crédito que tomes basándote en nuestros cálculos. Siempre consulta con un asesor financiero independiente y con las entidades bancarias directamente antes de firmar un contrato de crédito.': 'HipoSim acts as an educational tool. We are not responsible for credit decisions you make based on our calculations. Always consult an independent financial advisor and the banks directly before signing a loan contract.',
  '6. Uso Prohibido': '6. Prohibited Use',
  'No está permitido usar HipoSim para fines fraudulentos, lavado de dinero, o cualquier actividad ilegal. Nos reservamos el derecho de suspender acceso a usuarios que violen estos términos.': 'HipoSim may not be used for fraudulent purposes, money laundering, or any illegal activity. We reserve the right to suspend access for users who violate these terms.',

  // Privacidad
  'Cumplimiento Normativo': 'Regulatory Compliance',
  'HipoSim Perú cumple la Ley N° 29733 de Protección de Datos Personales y sus reglamentaciones. Este documento explica cómo protegemos tus derechos.': 'HipoSim Peru complies with Law No. 29733 on Personal Data Protection and its regulations. This document explains how we protect your rights.',
  'Datos que Recopilamos': 'Data We Collect',
  'En el uso anónimo del simulador, no recopilamos datos personales. Si decides registrarte en futuras funcionalidades avanzadas, podemos recopilar: nombre, correo electrónico, teléfono y datos de simulaciones guardadas.': 'When you use the simulator anonymously, we collect no personal data. If you choose to register for future advanced features, we may collect: name, email, phone and saved simulation data.',
  'Cómo Usamos Tus Datos': 'How We Use Your Data',
  'Usamos los datos solo para: (a) mejorar el servicio, (b) contactarte con actualizaciones si lo autorizas, (c) responder tus consultas, (d) cumplir obligaciones legales. Nunca vendemos ni alquilamos tus datos a terceros.': 'We use data only to: (a) improve the service, (b) contact you with updates if you authorize it, (c) answer your inquiries, (d) meet legal obligations. We never sell or rent your data to third parties.',
  'Compartición de Datos con Terceros': 'Sharing Data with Third Parties',
  'Compartimos tu simulación con inmobiliarias o bancos': 'We share your simulation with real estate agencies or banks',
  'únicamente si tú autorizas explícitamente': 'only if you explicitly authorize it',
  '. No hay compartición automática. Tú controlas si y cuándo tu información se envía a terceros.': '. There is no automatic sharing. You control if and when your information is sent to third parties.',
  'Tus Derechos': 'Your Rights',
  'Conforme la Ley N° 29733, tienes derechos de acceso, rectificación, cancela, oposición y portabilidad de tus datos. Para ejercer estos derechos, contacta directamente a nuestro equipo a través del formulario de contacto.': 'Under Law No. 29733, you have rights of access, rectification, cancellation, opposition and portability of your data. To exercise these rights, contact our team directly through the contact form.',
  'Seguridad': 'Security',
  'Usamos encriptación y estándares de seguridad de la industria para proteger tus datos. Sin embargo, ningún sistema es 100% seguro. Si detectas un incidente, notifícanos inmediatamente.': 'We use encryption and industry security standards to protect your data. However, no system is 100% secure. If you detect an incident, notify us immediately.',

  // CTA final
  '100% Gratuito y de libre acceso': '100% Free and open access',
  'Toma el control de tu mayor decisión financiera sin presiones comerciales': 'Take control of your biggest financial decision without commercial pressure',
  'Compara las tasas reales en el mercado peruano en menos de 2 minutos. Sin agentes insistentes ni llamadas spam.': 'Compare real rates in the Peruvian market in under 2 minutes. No pushy agents or spam calls.',
  'Empieza tu simulación gratuita ahora': 'Start your free simulation now',
  'No se requiere tarjeta de crédito ni registro previo para simular.': 'No credit card or prior registration is required to simulate.',

  // Footer
  'HipoSim Logo Oficial': 'HipoSim Official Logo',
  'HipoSim Perú es una plataforma tecnológica e informativa independiente. No es una entidad bancaria ni financiera, no otorga créditos directamente ni capta fondos del público. Los cálculos se basan en fórmulas financieras estándar y metodologías de la SBS (Superintendencia de Banca, Seguros y AFP).': 'HipoSim Peru is an independent technology and information platform. It is not a bank or financial institution, does not grant loans directly and does not raise funds from the public. Calculations are based on standard financial formulas and SBS (Superintendency of Banking, Insurance and AFP) methodologies.',
  'Navegación': 'Navigation',
  'Transparencia': 'Transparency',
  'Privacidad': 'Privacy',
  'Metodología SBS': 'SBS Methodology',
  'Transparencia Financiera': 'Financial Transparency',
  '© 2026 HipoSim Perú. Plataforma de simulación y cálculo financiero independiente sin afiliación a entidades bancarias comerciales.': '© 2026 HipoSim Peru. Independent financial simulation and calculation platform with no affiliation to commercial banking institutions.',
  'Lima, Perú': 'Lima, Peru',
};

// Reglas para textos generados dinámicamente por main.js
const EN_PATTERNS = [
  [/^(\d+) años \((\d+) meses\)$/, '$1 years ($2 months)'],
  [/^(\d+) años$/, '$1 years'],
];

const ATTRS = ['aria-label', 'placeholder', 'alt', 'title', 'aria-valuetext'];
const SKIP_SELECTOR = '.material-symbols-outlined, script, style, textarea, noscript';
const DEFAULT_LANGUAGE = 'es_419';
const STORAGE_KEY = 'hiposim_language';

const normalize = (s) => s.replace(/\s+/g, ' ').trim();

function translateEn(orig) {
  const key = normalize(orig);
  if (!key) return orig;
  let out = EN_TEXT[key];
  if (out === undefined) {
    for (const [re, rep] of EN_PATTERNS) {
      if (re.test(key)) { out = key.replace(re, rep); break; }
    }
  }
  if (out === undefined) return orig;
  const lead = orig.match(/^\s*/)[0];
  const trail = orig.match(/\s*$/)[0];
  return lead + out + trail;
}

class I18nManager {
  constructor() {
    this.currentLanguage = this.getSavedLanguage() || DEFAULT_LANGUAGE;
    this.textStore = new WeakMap();  // nodo de texto -> {orig, out}
    this.attrStore = new WeakMap();  // elemento -> {attr: {orig, out}}
    this.pending = false;
    this.observer = null;
    this.origTitle = null;
    this.origDescription = null;
  }

  getSavedLanguage() {
    try {
      const lang = localStorage.getItem(STORAGE_KEY);
      return lang === 'es_419' || lang === 'en_US' ? lang : null;
    } catch (e) {
      return null;
    }
  }

  setSavedLanguage(lang) {
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) { /* almacenamiento no disponible */ }
  }

  setLanguage(lang) {
    if (lang !== 'es_419' && lang !== 'en_US') return;
    this.currentLanguage = lang;
    this.setSavedLanguage(lang);
    this.apply();
  }

  t(orig) {
    return this.currentLanguage === 'en_US' ? translateEn(orig) : orig;
  }

  translateTextNode(node) {
    let rec = this.textStore.get(node);
    // Si otro script cambió el texto, el nuevo valor es el original
    if (!rec || node.data !== rec.out) rec = { orig: node.data, out: node.data };
    const target = this.t(rec.orig);
    if (node.data !== target) node.data = target;
    rec.out = target;
    this.textStore.set(node, rec);
  }

  translateAttrs(el) {
    let recs = this.attrStore.get(el);
    if (!recs) { recs = {}; this.attrStore.set(el, recs); }
    for (const attr of ATTRS) {
      if (!el.hasAttribute(attr)) continue;
      const current = el.getAttribute(attr);
      let rec = recs[attr];
      if (!rec || current !== rec.out) rec = { orig: current, out: current };
      const target = this.t(rec.orig);
      if (current !== target) el.setAttribute(attr, target);
      rec.out = target;
      recs[attr] = rec;
    }
  }

  translateHead() {
    if (this.origTitle === null) this.origTitle = document.title;
    document.title = this.t(this.origTitle);
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      if (this.origDescription === null) this.origDescription = meta.getAttribute('content');
      meta.setAttribute('content', this.t(this.origDescription));
    }
  }

  apply() {
    document.documentElement.lang = this.currentLanguage === 'es_419' ? 'es' : 'en';
    this.translateHead();

    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);
    nodes.forEach((node) => {
      if (node.parentElement && !node.parentElement.closest(SKIP_SELECTOR)) this.translateTextNode(node);
    });

    document.querySelectorAll(ATTRS.map((a) => `[${a}]`).join(',')).forEach((el) => this.translateAttrs(el));
    this.updateLanguageSelector();
  }

  updateLanguageSelector() {
    const es = document.getElementById('lang-es-header');
    const en = document.getElementById('lang-en-header');
    if (!es || !en) return;
    const isEs = this.currentLanguage === 'es_419';
    es.classList.toggle('active', isEs);
    en.classList.toggle('active', !isEs);
    es.setAttribute('aria-pressed', String(isEs));
    en.setAttribute('aria-pressed', String(!isEs));
  }

  scheduleApply() {
    if (this.pending) return;
    this.pending = true;
    queueMicrotask(() => {
      this.pending = false;
      this.apply();
    });
  }

  init() {
    this.apply();
    // Traduce el contenido que main.js actualiza dinámicamente
    this.observer = new MutationObserver(() => {
      if (this.currentLanguage === 'en_US') this.scheduleApply();
    });
    this.observer.observe(document.body, {
      subtree: true,
      childList: true,
      characterData: true,
      attributes: true,
      attributeFilter: ATTRS,
    });
  }

  getAvailableLanguages() {
    return [
      { code: 'es_419', name: 'Español' },
      { code: 'en_US', name: 'English' },
    ];
  }
}

// Instancia global disponible de inmediato para los onclick del header
window.i18n = new I18nManager();

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => window.i18n.init());
} else {
  window.i18n.init();
}
