// 學舌 Polly service worker：讓 app 可以安裝到主畫面、出現在分享選單
// 不做離線快取；只轉手自己網站的頁面請求，Firebase 等外部連線完全不經過這裡
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => {
  const req = event.request;
  if (req.method !== 'GET' || req.mode !== 'navigate') return;
  event.respondWith(fetch(req));
});
