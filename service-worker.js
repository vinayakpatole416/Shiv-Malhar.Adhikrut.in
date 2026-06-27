const CACHE_NAME = 'shivmalhar-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/trust.html',
  '/society.html',
  '/gramseva.html',
  '/siddhivinayak.html',
  '/candidate.html',
  '/admin.html',
  '/38259_2.jpg'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(urlsToCache);
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
