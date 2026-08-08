/* Golfclub Bostalsee – Golf-Zocken · Service Worker
   Bei jeder inhaltlichen Änderung an index.html die Versionsnummer hochzählen,
   damit alte Caches ersetzt werden. */
const CACHE = 'golf-bostalsee-v1';
const ASSETS = ['./', './index.html'];

// App-Shell beim Installieren vorab cachen
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE)
      .then((c) => c.addAll(ASSETS))
      .then(() => self.skipWaiting())
  );
});

// Alte Cache-Versionen beim Aktivieren aufräumen
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  if (req.method !== 'GET') return;

  // Seitenaufrufe: online zuerst (immer aktuelle App), offline aus dem Cache
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html').then((r) => r || caches.match('./')))
    );
    return;
  }

  // Übrige Anfragen: aus dem Cache liefern, im Hintergrund auffrischen
  e.respondWith(
    caches.match(req).then((cached) => {
      const fetching = fetch(req)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put(req, copy));
          return res;
        })
        .catch(() => cached);
      return cached || fetching;
    })
  );
});
