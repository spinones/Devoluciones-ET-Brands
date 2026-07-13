// Service worker minimo: su unico proposito es cumplir el requisito tecnico
// que necesita el navegador para ofrecer "Agregar a pantalla de inicio".
// No cachea nada de forma agresiva a proposito, para que la app siempre
// muestre datos frescos de la planilla en vez de una version vieja guardada.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Deja pasar todas las peticiones directo a la red, sin cache propio.
  event.respondWith(fetch(event.request).catch(() => caches.match(event.request)));
});
