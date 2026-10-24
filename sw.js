const CACHE_NAME = 'latam-colab-v1';
const assetsToCache = [
  'index.html',
  'manifest.json',
  'logo.png',
  'eu.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(assetsToCache);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
