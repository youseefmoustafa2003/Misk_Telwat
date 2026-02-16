'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "c62a662275429c283915bf176d5168b3",
"assets/AssetManifest.bin.json": "dc7a6033367d391dca180ffa95d8bfc3",
"assets/AssetManifest.json": "90b39e0c3c71b313a00b98bcc687918e",
"assets/assets/audio1.mp3": "6002533b8a099f8ebb89e672f9b03239",
"assets/assets/audio10.mp3": "1ec83b00e9f376bef6ab56548a1177c1",
"assets/assets/audio11.mp3": "31947cd43564701e82a6669b6d080ce2",
"assets/assets/audio12.mp3": "cc760df86e490f6fdabf070179d86fb1",
"assets/assets/audio13.mp3": "40d428ec62929add5da7017c78951066",
"assets/assets/audio14.mp3": "620987746ca6eaa04873a0c5ef3b8152",
"assets/assets/audio15.mp3": "e6c7b29978f1c52dd64f949d1bce5f37",
"assets/assets/audio16.mp3": "a94df649c1f105e4dc9b2e31d6a303cf",
"assets/assets/audio17.mp3": "788010462358eb77fb9aee519659196f",
"assets/assets/audio18.mp3": "706da71b4a56344d193cec9e655c1847",
"assets/assets/audio19.mp3": "6357cf1e56189864a5bcc21cb54c7ef3",
"assets/assets/audio2.mp3": "f85d9ee7db4225c3d9b05ebdec15179b",
"assets/assets/audio20.mp3": "b9ba801ee4095a95ed4e8087c0072b07",
"assets/assets/audio21.mp3": "a7432690ec6bf3633c6f2839b03cd58a",
"assets/assets/audio22.mp3": "3466e0d490d105c50e214f30ee1754a9",
"assets/assets/audio23.mp3": "3663bf68d3379cc096a3aa8e52418af2",
"assets/assets/audio24.mp3": "fbeaa4f1334ccc3832890e4285b2bd63",
"assets/assets/audio25.mp3": "e2f570bb2c5d0a8a1683de40a8ba632d",
"assets/assets/audio26.mp3": "9f58ef36e07fcf269e4687fb45c5ffd1",
"assets/assets/audio27.mp3": "7f0af806983dddb0c841bd956ff60e24",
"assets/assets/audio28.mp3": "f1ec52b905bb6e25be2b5ddd351a9364",
"assets/assets/audio29.mp3": "edceeb9fd5ce129b2476e8b5a481e635",
"assets/assets/audio3.mp3": "00ddf1c8673e124e1a22dedbf8a5004b",
"assets/assets/audio30.mp3": "85a60755adaacdedfae942ac4d9f2aa1",
"assets/assets/audio31.mp3": "2c1fe213c46a7b8f5a47d47d1b095bb6",
"assets/assets/audio32.mp3": "dcd745cd6150ca1142d52c331fc36cd6",
"assets/assets/audio33.mp3": "b8e39073b9ed0012cb39df8451bf0c80",
"assets/assets/audio34.mp3": "2a58937a33f3f6a758a03e425658043d",
"assets/assets/audio35.mp3": "1433d8d908c6d22a451e35b6d33c5e8c",
"assets/assets/audio36.mp3": "d6bb60393f5bdbf9ce095626d5eadf53",
"assets/assets/audio37.mp3": "c03d3e2547ac7429530614a1fa83c22a",
"assets/assets/audio38.mp3": "5a36b0858d6b5d9f9957c62dd14220c6",
"assets/assets/audio39.mp3": "81c3c029f9feb79a2ea34f2ccb47a129",
"assets/assets/audio4.mp3": "4e43785a0a48b09f7522a5af9caef59d",
"assets/assets/audio40.mp3": "1e35c02f8fe5b3b4781af6422562fd82",
"assets/assets/audio41.mp3": "f13e5c05d5b9deecdd6617334f789014",
"assets/assets/audio42.mp3": "74d75c7e66e7a4fa19fd98ce1af299b3",
"assets/assets/audio43.mp3": "0985442342512803f7a1e979d66d093b",
"assets/assets/audio44.mp3": "e0c2a71b7d1413cacd899c4f6e751b9e",
"assets/assets/audio45.mp3": "978a73958160643e07ca4d87aa4a7259",
"assets/assets/audio46.mp3": "8cb686b9040891b51db888031444cf28",
"assets/assets/audio47.mp3": "a13f8f7041d5cb5767c1a51067a1162e",
"assets/assets/audio48.mp3": "51aca0f416c6f58f95b1661a8e967a9f",
"assets/assets/audio49.mp3": "61b032e85644b9eee2e8793210ca2ca2",
"assets/assets/audio5.mp3": "6a543ecc1d656d915ba3505997a6f7c0",
"assets/assets/audio50.mp3": "fc0ba428589c88abbe04e99ddac060cc",
"assets/assets/audio51.mp3": "2d6d83134be28656628be09a1e22ce73",
"assets/assets/audio6.mp3": "2627916efddbbf8dd65205cd6fb52abb",
"assets/assets/audio7.mp3": "2c5e0edde1ac00a5531276ea3df9a0c4",
"assets/assets/audio8.mp3": "deddcde2b1791d223ba6cab26a0c594b",
"assets/assets/audio9.mp3": "8b7a3da777df979ad4e0458e9ba72efc",
"assets/FontManifest.json": "7b2a36307916a9721811788013e65289",
"assets/fonts/MaterialIcons-Regular.otf": "81aa8063a2c51fe671a015f46e1f4237",
"assets/images/download.jpeg": "f471ec10674f314d15c8e8fc96b338fd",
"assets/images/go.jpg": "742a3bdf93c4c58e679b4b800d977670",
"assets/images/p.jpg": "678a0bcfde9c412fdbdb2f4c41f38125",
"assets/NOTICES": "b53e0bd57aa8edaa4e5261ed75689e21",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "140ccb7d34d0a55065fbd422b843add6",
"canvaskit/canvaskit.js.symbols": "58832fbed59e00d2190aa295c4d70360",
"canvaskit/canvaskit.wasm": "07b9f5853202304d3b0749d9306573cc",
"canvaskit/chromium/canvaskit.js": "5e27aae346eee469027c80af0751d53d",
"canvaskit/chromium/canvaskit.js.symbols": "193deaca1a1424049326d4a91ad1d88d",
"canvaskit/chromium/canvaskit.wasm": "24c77e750a7fa6d474198905249ff506",
"canvaskit/skwasm.js": "1ef3ea3a0fec4569e5d531da25f34095",
"canvaskit/skwasm.js.symbols": "0088242d10d7e7d6d2649d1fe1bda7c1",
"canvaskit/skwasm.wasm": "264db41426307cfc7fa44b95a7772109",
"canvaskit/skwasm_heavy.js": "413f5b2b2d9345f37de148e2544f584f",
"canvaskit/skwasm_heavy.js.symbols": "3c01ec03b5de6d62c34e17014d1decd3",
"canvaskit/skwasm_heavy.wasm": "8034ad26ba2485dab2fd49bdd786837b",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "888483df48293866f9f41d3d9274a779",
"flutter_bootstrap.js": "40c8c58fab381b0423b347860bea638b",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "7350b991abcf19ded1af6d5ade7c4927",
"/": "7350b991abcf19ded1af6d5ade7c4927",
"main.dart.js": "18a7eb246832311bf54441507a77a658",
"manifest.json": "86829b1c2531cf6e6d2effd5886cd19c",
"splash/img/dark-1x.png": "1eef2ba90f173b352077e2a0eb0f1eeb",
"splash/img/dark-2x.png": "d4a9a8c0037d8341e503f0b7fcdcaf78",
"splash/img/dark-3x.png": "972a22f0ea03b185e41a7d8d147d01ec",
"splash/img/dark-4x.png": "6dcb65e8b1bf1ea36a4489844716e99b",
"splash/img/light-1x.png": "1eef2ba90f173b352077e2a0eb0f1eeb",
"splash/img/light-2x.png": "d4a9a8c0037d8341e503f0b7fcdcaf78",
"splash/img/light-3x.png": "972a22f0ea03b185e41a7d8d147d01ec",
"splash/img/light-4x.png": "6dcb65e8b1bf1ea36a4489844716e99b",
"version.json": "cb471c1ca60f221b5adf8b08d0598328"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
