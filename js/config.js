// Configuración del Landing. Cambia aquí la dirección de la API si se despliega en otro lugar.
window.HIPOSIM_CONFIG = {
  // POST {name, email, message}: 201 con {id, createdAt}; 400 con problem+json y errors por campo.
  contactEndpoint: 'https://hiposim-api.onrender.com/api/contact-messages',
  // El plan gratuito del servidor puede tardar cerca de un minuto en la primera petición.
  contactTimeoutMs: 90000,
};
