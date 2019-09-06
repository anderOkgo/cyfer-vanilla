const version = "1.1.12";
const cacheName = `animecream-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.php`,
        `/js/bootstrap.min.js`,
        `/js/datatables.min.js`,
        `/js/FileSaver.js`,
        `/js/jquery-3.3.1.min.js`,
        `/js/bootstrap.min.css`,
        `/images/icons/icon-128x128.png`,
        `/images/icons/icon-144x144.png`,
        `/images/icons/icon-152x152.png`,
        `/images/icons/icon-192x192.png`,
        `/images/icons/icon-384x384.png`,
        `/images/icons/icon-512x512.png`,
        `/images/icons/icon-72x72.png`,
        `/images/icons/icon-96x96.png`
      ])
          .then(() => self.skipWaiting());
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

/*self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});*/
