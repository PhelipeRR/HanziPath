const CACHE = 'hanzipath-v1'
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.add('/'))))
self.addEventListener('fetch', event => { if (event.request.method === 'GET') event.respondWith(caches.match(event.request).then(cached => cached || fetch(event.request))) })
