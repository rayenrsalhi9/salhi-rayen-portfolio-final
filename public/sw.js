const CACHE = "portfolio-v1";

self.addEventListener("install", (event) => {
  event.waitUntil(self.skipWaiting());
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request)
      .then((res) => {
        const cacheRes = res.ok && res.status < 400 ? res.clone() : null;
        if (cacheRes) {
          event.waitUntil(caches.open(CACHE).then((c) => c.put(event.request, cacheRes)));
        }
        return res;
      })
      .catch(() => caches.match(event.request))
  );
});
