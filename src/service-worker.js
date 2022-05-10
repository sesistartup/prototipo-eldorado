import {precacheAndRoute} from 'workbox-precaching';

precacheAndRoute(self.__WB_MANIFEST);

self.addEventListener('install', () => self.skipWaiting())

self.addEventListener('fetch', () => {})

self.addEventListener('activate', () => {
  self.clients.matchAll({ type: 'window' }).then(windowClients => {
    for (const windowClient of windowClients) {
      // Force open pages to refresh, so that they have a chance to load the
      // fresh navigation response from the local dev server.
      windowClient.navigate(windowClient.url)
    }
  })
})

self.addEventListener('push', event => {
  const data = event.data.json();
  console.log(data)
  self.registration.showNotification(data.title, {
    body: 'Verifique a APR',
    vibrate: [200, 100, 200]
  });
});