const CACHE_NAME = 'taxi-fuad-pwa-v1';
const urlsToCache = [
  '/',
  '/index.html',
  'https://taxituzlafuad.com/'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
      .catch(() => caches.match('/index.html'))  // fallback na tvoju stranicu ako nema neta
  );
});