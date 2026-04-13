/*
 * Placeholder service worker to satisfy legacy /sw.js requests.
 * This intentionally performs no caching or offline behavior.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', () => {
  // No-op: network requests pass through unchanged.
});
