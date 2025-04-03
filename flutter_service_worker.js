'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "9995eb000e7178660f75a1c0c361a397",
".git/config": "60cae96aa62ffda311fd4e3ed5a310e7",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "6052d62200430fe8e74092ed13956230",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "235184e74edf0f9471b190efb8acfb56",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c25b1a364cecaf0bc20dc8c02b8996ad",
".git/logs/refs/heads/main": "76c86f812b5b0d6e3d6b3e4e942695b2",
".git/logs/refs/remotes/origin/main": "1c44880aed4646cddae0acc416f4e007",
".git/objects/02/d379985de129bf1118143f9405993014d84a88": "49a3fd720a605cdff3cce75df2a0f8a8",
".git/objects/04/06d39dde8fa44af77db5a4e9c13b9ea4ce1cb0": "08d64329d6ad419be9f0313396b59db2",
".git/objects/05/a9058f513cce5faf1704e06e3c150688b0a01f": "e8d02f60cf87abd4c1de4b153dd696dc",
".git/objects/0b/0fc4cd70683b22befdb832ebb8146567697972": "51db54ba800ffea5c94d65d6be19cfd3",
".git/objects/10/c8bb84d9a4b38f029996fc2fb568478fd269c7": "436f01b2212a9b213ab3de090198fd71",
".git/objects/14/4efb7425f74d5c73a93a4e451e28659509abea": "ec4183605b3782d186147694a528aaf1",
".git/objects/16/abc0d05b14eaa41db3e748051ae501d7e884fb": "ba3ed3f67ec3faed935ec200017ccdff",
".git/objects/1f/843312088b24eb2b1c2ebf56940e3c629cee97": "f558650a12e51842da924b4c8f6a7f93",
".git/objects/23/3f572dadd3e496ec2180e86562d93c147ff310": "bf75c6544a517313d4627afb3e3b6f77",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/2c/6ab2dc249f00820f7becc3a310feb0a3a59d0b": "59899686a644f7032cb2b436e8041533",
".git/objects/32/d7749749057dffa1697c5fdc2bb1395849787f": "7783dfb318392841018b6790d49df820",
".git/objects/37/e11dd7760051c57e8ed0342ecce2410475bdf9": "fe80320d42d47e2131193dced530f7ca",
".git/objects/3b/fe5e242a7f2496b28554fe2bc39a337cc4b01d": "709c5ee1f2068b8ee538151ee542a8b7",
".git/objects/3f/20e56477270b03de01fe70dadf2b9375d1a1ff": "531627a1b837cbd1291a54088b0e8e91",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/4c/7ef1d8b1eff61fcd2a082de7ca568eab918c0f": "aa77eca82ff5d7790c38359fb77a36ad",
".git/objects/4c/eb45919b1555f3ee7859f44c974e0db555283d": "7bac557c9e1044d13dc70f71c671d0d5",
".git/objects/5e/a697b3aeb11eac03ebcb950188285662c1f720": "1585741a2eda4ea94b25491d2d9918fa",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/6c/71838731028c9091b33cbdbb2b5edc322c01b0": "5bc2f112373e0f9d007e22e0d02de476",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/78/71aba044b6173fcf409a222851f7ff43d1a9b7": "3a6c3332a9e11045151a8062b9dab696",
".git/objects/82/c84abb7d88d3e589110e929d78bc2d4293febe": "a5cc9312efb453e36a09041950c31209",
".git/objects/84/e05e4f647350942728188ffa38c4b5b8fda82e": "e09e5c44b9bdc45f6e90f380a7ad12f7",
".git/objects/85/a7467a701edf7bff02af0e19f128794741da23": "4e98a969d4f4da184ccb9f955e5fa2e8",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/59773bee8314a8ffb4431593d0fb49f52e34c6": "2eb993d30677573ffd0e58484cc6a514",
".git/objects/8e/04944ea135922c4d8958ccccdc50d501ca7b14": "f6b878863b3d5d747f05dc160b054fa1",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/9b/712d279b110b195a6141e2d7354bd4636736db": "5fd7058c31764f2a6f558a41196b0071",
".git/objects/a1/a6e9121f1e9fbda6a2aa6a06a6787542d515ec": "895ed5944b202b5cd433eb2b2d62dd0b",
".git/objects/aa/cf0fd4532a611c357087795f6e416313794ac7": "96b6d7e3721a894f58cc33af5e668965",
".git/objects/ad/d519a3e02218761217e482bf314abc3597c2e8": "815f11510f73590ecc865cec50d012e8",
".git/objects/ae/3d4116d2ddf32d95a462fc89e39c6b170e89be": "19aa38c16bc1a0859f8712ed60217ff7",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/b0/cee7d71e04bd385a7cb152f7658f6fe69135db": "f00eb78ebab8b744704d90a93d8c3656",
".git/objects/b0/ff575d49b7b5aaccf34e0f34e8f790730255f1": "4b1bbb08023e3ac55222c2f1f710746f",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/c7/39e69b0ce0339668afc4c969afebbcd3cbdf8d": "c7a9f77c1842900a92466800b764a555",
".git/objects/d0/2fcd3c46b56e79fc3113e7c1aa7e2581747aab": "9ca5bffbe71198d40aa74475f1d1dba7",
".git/objects/d3/bcec740257492afff03602854be6c731fa7efd": "5093a3f0c5296d57d40d56052e63ff12",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d9/be75033576922b35d1f94da29f7d9d8d68a7b8": "80861fd754b122dd545c886438beb66c",
".git/objects/dc/30cc03cabb1f6fc5f548c3fb5ebf3bab03bcab": "5114909039cf2a94a45f872701c0fc2e",
".git/objects/e3/696df85bc9c0c6b7e63c467578ac85de6dc434": "cf89a9179d0fb49ffc1b81624aeaf080",
".git/objects/e8/8fedd1c9a2ab7f3edde8c51a22d53c3e0a52f6": "a8ff4a7e187e938b44707e48ed18cb52",
".git/objects/eb/805159b1d2f33f6a103861eb6658c9e12c77f0": "3b5c7c8b55709906c86c4480242527a1",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/f0/5f8d4c0020250dcc62657f29d8362a6a2d9cf0": "01900ab8204acde46d03fd1999347745",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ff/a0832eb76425a6bf77702a48f4541e8b8319dd": "d9dacf8a3b813660573ecf80db16fa1c",
".git/refs/heads/main": "370d9a1aeef21c2b076e843ac4cba19f",
".git/refs/remotes/origin/main": "370d9a1aeef21c2b076e843ac4cba19f",
"apple-touch-icon.png": "6fb229e3f87827bcc141d5fb9e97346d",
"assets/AssetManifest.bin": "617dbb085ba20573842573256e5c3a09",
"assets/AssetManifest.bin.json": "5be7372dca77ff3eb4bf15a899142a15",
"assets/AssetManifest.json": "a77bbca8d31dffffe103a9b0f8562aa1",
"assets/assets/default-avatar.png": "c6f8d4508a574c97f8b6608f3f9f2dcf",
"assets/assets/roundel.png": "b69cc30c72923916ed6189a4429adf93",
"assets/FontManifest.json": "6b53bbac7e12ce88331411914c31782e",
"assets/fonts/MaterialIcons-Regular.otf": "0b49e3f47d5be0e54f6e96dcff976607",
"assets/NOTICES": "2ed7c892aae8f8dc52d4c7cf3b1776a3",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon-16x16.png": "88904d8c19ee2c58295f29362ef2db12",
"favicon.ico": "c08ba9bcfe0684c55125c4121c91020f",
"favicon.png": "5f982ce7b752fec02a807c3c0a42c528",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "0e20998138d69ee6a5830f5bdfe2b298",
"icons/Icon-192.png": "e56fab671c10b0b87651b0075271e308",
"icons/Icon-512.png": "e3f70e5aa32bbdea2c61d58b57ebeb4b",
"icons/Icon-maskable-192.png": "e56fab671c10b0b87651b0075271e308",
"icons/Icon-maskable-512.png": "e3f70e5aa32bbdea2c61d58b57ebeb4b",
"index.html": "3476766b9faf92417fe00d7bba9f9881",
"/": "3476766b9faf92417fe00d7bba9f9881",
"main.dart.js": "fdb0d1c77a62243e6d5efcb2aef6f3d6",
"manifest.json": "8c40e373e7f4b569304bd1d6873ccdd6",
"site.webmanifest": "053100cb84a50d2ae7f5492f7dd7f25e",
"version.json": "cc14f71a8d66493e69ce114f072b7d66"};
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
