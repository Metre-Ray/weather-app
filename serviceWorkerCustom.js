/* eslint-disable */

const filesToCache = [
  '/',
  'index.html',
  '404.html',
  'offline.html',
];

const staticCacheName = 'weather-search-cache';

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName)
    .then(cache => {
      return cache.addAll(filesToCache);
    })
  );
  // event.waitUntil(self.skipWaiting());
});

self.addEventListener('fetch', event => {
  if(!(event.request.url.includes('http'))) {   // skip requests like "chrome-extension://xyz"
    return;
  }
  event.respondWith(
    // fetch first
    fetch(event.request).then(response => {
      if (response.status === 404) {
        return caches.match('404.html');
      }
      console.log('got response');
      caches.open(staticCacheName).then(cache => {
        cache.put(event.request.url, response.clone());
      });
      return response.clone();
    })
      .catch(_ => {
        console.log('catch block');
        return caches.match(event.request).then(response => {
          if (response) {
              console.log('Found ', event.request.url, ' in cache');
              return response;
            }
            return caches.match('offline.html').then(resp => resp);
        });
      })

    // cache first
    // caches.match(event.request).then(response => {
    //   if (response) {
    //     console.log('Found ', event.request.url, ' in cache');
    //     return response;
    //   }
    //   return fetch(event.request).then(response => {
    //       if (response.status === 404) {
    //         return caches.match('404.html');
    //       }
    //       return caches.open(staticCacheName).then(cache => {
    //         cache.put(event.request.url, response.clone());
    //         return response;
    //       });
    //     });
    // }).catch(_ => {
    //   return caches.match('pages/offline.html');
    // })
  );
});

self.addEventListener('message', (event) => {
  if (event.data.type === 'CACHE_URLS') {
    event.waitUntil(
      caches.open(staticCacheName)
        .then( (cache) => {
          return cache.addAll(event.data.payload);
        })
    );
  }
});

