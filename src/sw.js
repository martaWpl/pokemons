'use strict';
importScripts('./build/sw-toolbox.js');

self.addEventListener("fetch", event => {
  event.respondWith(
  fetch(event.request)
    .catch(() => {return fetch("/offline.html");});
);
});
// /*
// self.toolbox.options.cache = {
//   name: 'pokemon-cache'
// };
// */
// // pre-cache our key assets
// self.toolbox.precache(
//   [
//     './build/main.ffb61ff9509e3e351e53.js',
//     './build/runtime.a66f828dca56eeb90e02.js',
//     './build/styles.a306765e7dd7dbb1af16.css',
//     './build/polyfills.2f4a59095805af02bd79.js',
//     'index.html',
//     'manifest.json'
//   ]
// );
//
// // dynamically cache any other local assets
// self.toolbox.router.any('/*', self.toolbox.fastest);
//
// // for any other requests go to the network, cache,
// // and then only use that cached resource if your user goes offline
// self.toolbox.router.default = self.toolbox.networkFirst;
//
// self.addEventListener('fetch', (event)=> {
//   event.respondWith( caches.match(event.request)
//   .then((response)=> response || fetch(event.request)));
// });
//
