/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "5b1ff0a1424bdca08b82e9344e23e332"
  },
  {
    "url": "assets/css/0.styles.ada0ae99.css",
    "revision": "90d34e7928e4f973f3d19d935c9c0a87"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.690d32b2.js",
    "revision": "868cdbd75b4d73db342b41ce62e8795f"
  },
  {
    "url": "assets/js/11.96548483.js",
    "revision": "18a7aba2a23f93bada76e0e80e350df3"
  },
  {
    "url": "assets/js/12.d6f9fe4f.js",
    "revision": "a21e4088079d91fb2e943355267f4b55"
  },
  {
    "url": "assets/js/13.010ccbe7.js",
    "revision": "f78713edac5fcd92c4ff6baf829f890b"
  },
  {
    "url": "assets/js/14.0f940128.js",
    "revision": "90a774c4da99a15220479133e5e91265"
  },
  {
    "url": "assets/js/15.a33bab72.js",
    "revision": "eb29b7d337bed22246047f05b82b55fc"
  },
  {
    "url": "assets/js/16.f2b05f5c.js",
    "revision": "56971f477f1873d0fca9e1ab220b68b7"
  },
  {
    "url": "assets/js/17.a781eaeb.js",
    "revision": "e601c166e596089710a7715e3bafbbef"
  },
  {
    "url": "assets/js/18.c9e31d19.js",
    "revision": "7f813832b516ee1175b18d53c259014e"
  },
  {
    "url": "assets/js/19.42becb7b.js",
    "revision": "2bfd0d0d4db6f87520dad39993595896"
  },
  {
    "url": "assets/js/2.d389a78a.js",
    "revision": "c4c4d0b8f7f037261b681be90a286cc4"
  },
  {
    "url": "assets/js/20.40cd2d33.js",
    "revision": "5ffa2bca1d7c81889b86d76b70b39829"
  },
  {
    "url": "assets/js/21.3c59a637.js",
    "revision": "c631c75587afee44d03c7fef9e7714cb"
  },
  {
    "url": "assets/js/22.64abd33f.js",
    "revision": "f5004490676dd12d7fd32f87108e218a"
  },
  {
    "url": "assets/js/23.6f0880c8.js",
    "revision": "cbe8e798a7e70eff247e94446afa5378"
  },
  {
    "url": "assets/js/24.93910bbc.js",
    "revision": "dce031a7c9cb588678847cd6c986ec86"
  },
  {
    "url": "assets/js/26.8a6f2acd.js",
    "revision": "193268fcbcb08179d1a79a567793fe12"
  },
  {
    "url": "assets/js/3.99ab3818.js",
    "revision": "0ca9cab1042df05a02e0236b6b73b417"
  },
  {
    "url": "assets/js/4.a7373c76.js",
    "revision": "ccd0d168fee61e0e41940544eebb30dd"
  },
  {
    "url": "assets/js/5.c69150fc.js",
    "revision": "83f716164dc960900558a8145b73e5bd"
  },
  {
    "url": "assets/js/6.34345f0a.js",
    "revision": "8107d3f52ae8f269085e5c4ac3c494c3"
  },
  {
    "url": "assets/js/7.d79bbdfc.js",
    "revision": "b88da973410679b701231cd40030ae15"
  },
  {
    "url": "assets/js/8.34f3f1dc.js",
    "revision": "ddf973af40b9b9b43f25a30cb9808b10"
  },
  {
    "url": "assets/js/9.1e886583.js",
    "revision": "8e5cc579f15b728b806145414f04d994"
  },
  {
    "url": "assets/js/app.346855ab.js",
    "revision": "71c888d544b9ede74ef041b4df166f9e"
  },
  {
    "url": "conclusion/index.html",
    "revision": "fb876dfde428cf49d3c304a4fac67bfc"
  },
  {
    "url": "design/index.html",
    "revision": "9195f0db57642baae8f89d5cb9865913"
  },
  {
    "url": "index.html",
    "revision": "aaa501f5eb9ffe2409461d6cb6ae9e85"
  },
  {
    "url": "intro/index.html",
    "revision": "065471e3ea87c98863e367b60de69660"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "a2213b6967f9c864136e21c5ade99efe"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "320335786b12b03157ba38887b6f34bb"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "9476c2c9ac4bdb38fc9c53b75c98e0fc"
  },
  {
    "url": "software/index.html",
    "revision": "5cd6ae1522e0ba19e99eb5d5dad815ac"
  },
  {
    "url": "test/index.html",
    "revision": "e0d5bfab8989752011572375d31645ae"
  },
  {
    "url": "use cases/index.html",
    "revision": "76e1ebf1c08c695d3141eeca598f1264"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
