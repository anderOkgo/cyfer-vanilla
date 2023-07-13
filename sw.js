const version = "1.1";
const cacheName = `cyfer-${version}`;
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        `/`,
        `/index.html`,
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

/*self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      })
    );
});*/

/*self.addEventListener('activate', function(event) {

  var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});*/

/*self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});*/

/*self.addEventListener('fetch', event => {
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});*/
