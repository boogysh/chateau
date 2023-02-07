"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","147dab3642f9182f64286caf6a79b0b6"],["static/js/main.08535de5.js","28b5a044ed07a1ae8a5fd5775b44b6d0"],["static/media/american_express.36e82cfe.jpg","36e82cfe5e5df40043a17d088ed1f255"],["static/media/canal.4ae686ac.jpg","4ae686ac940cb5d30405d2d096d782a0"],["static/media/cb.14784cb4.jpg","14784cb499ca6e4dd2c80d60299de3c0"],["static/media/chateau_f3.651d045e.png","651d045ea0d5c08f19486b0e000a0ed4"],["static/media/entree_chateau.1a642d95.jpg","1a642d951cc72cd47117c0e98666aefb"],["static/media/ext.c4cd5e51.jpg","c4cd5e51c8044b6adfd08ba8756679bc"],["static/media/ext_1.3dfe694b.jpg","3dfe694b31594229c0ef779c859cc26e"],["static/media/ext_3.d8a4dcf9.jpg","d8a4dcf926014b9bdd1f73efc00f771a"],["static/media/int_napoleon.5ba93eba.jpg","5ba93eba6125b413c824161de13c83b6"],["static/media/int_napoleon_2.64939538.jpg","64939538811f3783cb49f1e2706bd0c9"],["static/media/int_pape.46f34dfd.jpg","46f34dfdff1d5413e0c22a1cd87a0abf"],["static/media/jardin_diane.d3761f08.jpg","d3761f084a0a861fbe5259c5fb6eb042"],["static/media/master.a47f017d.jpg","a47f017d96d67044c4c613dcb672ad25"],["static/media/napoleon.837ee0ee.jpg","837ee0ee2f2fc13cc8f4c9ce269b3ebe"],["static/media/parterre.9cd94a37.jpg","9cd94a37c4ad4d41511a628352f2c773"],["static/media/porteBois.f5e8d77f.jpg","f5e8d77f06c60640a0fc37d6ab3211a1"],["static/media/porte_doree.d76aa557.jpg","d76aa5573fb5381c4e055962b0ca8cc6"],["static/media/tickets.b5c3ed87.png","b5c3ed871c5b0640147fc559ec16a0c0"],["static/media/visa.f564cfed.jpg","f564cfed1262819fd4645e31eee71beb"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,n){var c=new URL(e);return n&&c.pathname.match(n)||(c.search+=(c.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),c.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),c=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),c]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var n=new Request(a,{credentials:"same-origin"});return fetch(n).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);t=urlsToCacheKeys.has(a);t||(a=addDirectoryIndex(a,"index.html"),t=urlsToCacheKeys.has(a));!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL("/chateau/index.html",self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});