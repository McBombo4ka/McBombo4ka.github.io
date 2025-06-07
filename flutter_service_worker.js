'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "d5bcb44065a73ee02be24083f73471a5",
"assets/AssetManifest.bin.json": "8fe2acfad8e85eb8ac732c4811fae07c",
"assets/AssetManifest.json": "110f886079c90558e5be9482d08d89e0",
"assets/assets/images/cleaning.jpg": "8cf938b835c516fe145ea7539c5a87f1",
"assets/assets/images/delux.png": "2f0a7befc71ae879f3190550a8ae758a",
"assets/assets/images/economy.png": "6b36068b166a5a85075b1d5c45d56525",
"assets/assets/images/four_stars.png": "d497635efddea56dde58be9cb21f44bd",
"assets/assets/images/hub/ai_logo.png": "93393b21d334a15e1cbeae029274b499",
"assets/assets/images/hub/moon.png": "161f7f6409cf9e3abdb0af1b49f75d4d",
"assets/assets/images/hub/morty.png": "21fc7f7f123b39d0439e5cc0b01b278e",
"assets/assets/images/hub/rick.png": "686af840c28ed0a44802b694cc366def",
"assets/assets/images/hub/wsh.png": "46456ff1fabfedbf7417cb2ac499fdee",
"assets/assets/images/march/march_1.jpg": "0ee2adca71710589def57cf66bbb8c4e",
"assets/assets/images/march/march_2.jpg": "363e2e2109ffeb6ca93271fb300021b0",
"assets/assets/images/march/march_3.jpg": "8ec9c63a8dbafd14df622f061a423cc3",
"assets/assets/images/march/march_4.jpg": "dca7b13d0d5ab61de779906b5c19c6a6",
"assets/assets/images/march/march_5.jpg": "9ec7915110063a6271a4e5a29ef36f88",
"assets/assets/images/march/march_6.jpg": "d2fbd578c1e9d823a2bfe5bbef50e0db",
"assets/assets/images/march/march_7.jpg": "a1527a4606169761fc0bc545610c0b74",
"assets/assets/images/march/march_8.jpg": "651ff84c770c29d8c9ea2991e6cfb4b2",
"assets/assets/images/news/fond.jpg": "308e846f55fbc1649323f8625868c4c6",
"assets/assets/images/news/music.jpg": "9a7455d102bbc37a1bae336b02096c1c",
"assets/assets/images/news/restoraunt.jpg": "b5cc3dc1ade32e58f6a21f2831c59573",
"assets/assets/images/news/spa.jpg": "1e453147957dded0297459960d2b5a90",
"assets/assets/images/offers/offer1.jpg": "d82f5a16dc13b97b1967dc661ecedd80",
"assets/assets/images/offers/offer2.jpg": "de6ff3b6ef02d786f1ad0cc966728e2d",
"assets/assets/images/offers/offer3.jpg": "748dd1e15aaafc002777be6e59c556c9",
"assets/assets/images/premium-classic.png": "21f7153261a2bb59aaa553ebf86b3b92",
"assets/assets/images/premium-delux.png": "02d740ab5c56795ff7a80fdbba34885e",
"assets/assets/images/premium_classic/premium_classic_1.jpg": "f96cc3bf06171648273e87d641261e2d",
"assets/assets/images/premium_classic/premium_classic_2.jpg": "02a291d1208e7c45c43a7a6dd1b2bbcb",
"assets/assets/images/premium_classic/premium_classic_3.jpg": "7c3f909795ff02a9d6cbb5c1bc743af8",
"assets/assets/images/premium_classic/premium_classic_4.jpg": "9bb59b965670ce838ebc1407fe665e84",
"assets/assets/images/premium_delux/premium_delux_1.jpg": "1a2a7b2e6c8ebb85f82ffc7e1d812a4c",
"assets/assets/images/premium_delux/premium_delux_2.jpg": "3f83d8133fbe6680cd1852151a0a7fc8",
"assets/assets/images/premium_delux/premium_delux_3.jpg": "f5c0bbbebd724212e28ef4fe8026138b",
"assets/assets/images/premium_delux/premium_delux_4.jpg": "c0a6200e3cf0ec6fbdc9d9d5b67966f5",
"assets/assets/images/reg_im/blue_1.jpg": "355d5b0cc2f0a1cf102a0def1a63dbf4",
"assets/assets/images/reg_im/blue_2.jpg": "64aa9586c04712e10d39d868f0f5d7a7",
"assets/assets/images/reg_im/blue_3.jpg": "7caf5d78c4f15ab48f25e04c8dda3c30",
"assets/assets/images/reg_im/blue_4.jpg": "6741eefb3e3d459a0fe7309a9a8edea5",
"assets/assets/images/reg_im/blue_5.jpg": "75d35b55dc80a9ab77fc7adeb2944598",
"assets/assets/images/reg_im/blue_6.jpg": "1c1dacadcb72fb6b34379f92b7c4e04d",
"assets/assets/images/reg_im/blue_7.jpg": "421727002bbfef292f26ded277b831b1",
"assets/assets/images/review/review_1.jpg": "b319a92164cc2dbd5ef506482b4a4037",
"assets/assets/images/review/review_2.jpg": "7d59b5636f07ef1d9ece48de80ea1a57",
"assets/assets/images/review/review_3.jpg": "722b4db59aa55c399556f9535f93eb42",
"assets/assets/images/review/review_4.jpg": "5ddd07f9e9cf4521d99d937cae64bb7b",
"assets/assets/images/review/review_5.jpg": "fba1c5f76f8cec643ff48d208779bb2f",
"assets/assets/images/review/review_6.jpg": "1cb13099fc8ae42ba9cfce2bcbc2bba6",
"assets/assets/images/standart-classic.png": "ef72e9a281a89eac33b8f30d150372b7",
"assets/assets/images/standart-superior.png": "2d53dc6682d3d3d00f2ed26a95322360",
"assets/assets/images/standart_superior/standart_superior_1.jpg": "4f57a334164cf7a1f9d48328500de4fe",
"assets/assets/images/standart_superior/standart_superior_2.jpg": "9e3e288695df48cf7b754f0ea42d1a2f",
"assets/assets/images/standart_superior/standart_superior_3.jpg": "3947f11bda303b0a0ce2a3945b5a5dbe",
"assets/assets/images/standart_superior/standart_superior_4.jpg": "747b9fecfcea76772a15affde5e68874",
"assets/assets/videos/hotel_video.mp4": "ce43a5da7ff93078bbd311f6e857c3f0",
"assets/FontManifest.json": "ac17d198371eb7edece1375eaade5b73",
"assets/fonts/Basic-Font.ttf": "01680e29f4abaa617b84843c92fae508",
"assets/fonts/Cool-font.ttf": "8a5da53db3a7ce602aa92fe5045e8a8b",
"assets/fonts/MaterialIcons-Regular.otf": "bc44b352de4abb508a2fa39ddd878b02",
"assets/NOTICES": "f5912e8ac6100a149199c914c25b52ff",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "e79b2ed663549ebeb35b51f88f8f6903",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "bf98e5bf535f40f530700d0aa556bd72",
"/": "bf98e5bf535f40f530700d0aa556bd72",
"main.dart.js": "76a53b742531f314e08886e5aac8d2f1",
"manifest.json": "2f87dd701a5fa93ad9248bb39a7e6df5",
"script.js": "1faf3afc7b4992fefe4288b263a4b9da",
"version.json": "4253438bc60fe7c002ae02a333433d5a"};
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
