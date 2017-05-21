importScripts('workbox-sw.prod.v1.0.0.js');

/**
 * DO NOT EDIT THE FILE MANIFEST ENTRY
 *
 * The method precache() does the following:
 * 1. Cache URLs in the manifest to a local cache.
 * 2. When a network request is made for any of these URLs the response
 *    will ALWAYS comes from the cache, NEVER the network.
 * 3. When the service worker changes ONLY assets with a revision change are
 *    updated, old cache entries are left as is.
 *
 * By changing the file manifest manually, your users may end up not receiving
 * new versions of files because the revision hasn't changed.
 *
 * Please use workbox-build or some other tool / approach to generate the file
 * manifest which accounts for changes to local files and update the revision
 * accordingly.
 */
const fileManifest = [
  {
    "url": "/audiovisual-surprise-button/images/agam.webp",
    "revision": "79964036d66a497e7c2a818cec43e45f"
  },
  {
    "url": "/audiovisual-surprise-button/images/aviv.webp",
    "revision": "b0194468990b10e4576a868224940f24"
  },
  {
    "url": "/audiovisual-surprise-button/images/avraham.webp",
    "revision": "cff1cf3b2a4d0d1a9cfc13a85b5b22b8"
  },
  {
    "url": "/audiovisual-surprise-button/images/ayellet.webp",
    "revision": "4cd3f5717939377a1703ce4316791466"
  },
  {
    "url": "/audiovisual-surprise-button/images/eden.webp",
    "revision": "f0581b42b6c6059e18de9ac7a3c141bf"
  },
  {
    "url": "/audiovisual-surprise-button/images/gilad.webp",
    "revision": "69b3150c45b5d147437efacc10466acb"
  },
  {
    "url": "/audiovisual-surprise-button/images/gita.webp",
    "revision": "9252d586dc3a451b0d1dbedd0187c43d"
  },
  {
    "url": "/audiovisual-surprise-button/images/hila.webp",
    "revision": "7a087a904afc35b568ebff39a056d34e"
  },
  {
    "url": "/audiovisual-surprise-button/images/ilana.webp",
    "revision": "c000186b8d7b9261bfe74398ebcdf845"
  },
  {
    "url": "/audiovisual-surprise-button/images/itay.webp",
    "revision": "065f6ab229544d5c879508da0a545702"
  },
  {
    "url": "/audiovisual-surprise-button/images/lizz.webp",
    "revision": "66a075cdb40019d74654e3817232021b"
  },
  {
    "url": "/audiovisual-surprise-button/images/mali.webp",
    "revision": "6baaa6871f59b60d83f10f016732a652"
  },
  {
    "url": "/audiovisual-surprise-button/images/margalit.webp",
    "revision": "6854f3901354790d5c9df513e0a96390"
  },
  {
    "url": "/audiovisual-surprise-button/images/noga.webp",
    "revision": "e8e73a14e5d5bcd1acc9d111716e9358"
  },
  {
    "url": "/audiovisual-surprise-button/images/ore.webp",
    "revision": "b51f246634b7a9e4c15f4783b04e624b"
  },
  {
    "url": "/audiovisual-surprise-button/images/rami.webp",
    "revision": "50dfcce96d82f7519bef0575b0847d2b"
  },
  {
    "url": "/audiovisual-surprise-button/images/rome.webp",
    "revision": "f0f01f0d469d786ef33f47c4198ceb26"
  },
  {
    "url": "/audiovisual-surprise-button/images/shalev.webp",
    "revision": "9fff6f56bba6630b8ba4959465c71455"
  },
  {
    "url": "/audiovisual-surprise-button/images/shlomi.webp",
    "revision": "1fcedb4e5454b71c4e924ef27e59807f"
  },
  {
    "url": "/audiovisual-surprise-button/images/toam.webp",
    "revision": "1720cf92af48d9d3678efca968f8d794"
  },
  {
    "url": "/audiovisual-surprise-button/images/tsuf.webp",
    "revision": "aa635f63fa05f21c2969e351d4c7f390"
  },
  {
    "url": "/audiovisual-surprise-button/images/yossi.webp",
    "revision": "7a057e52988d95734c52295b525d375f"
  },
  {
    "url": "/audiovisual-surprise-button/index.css",
    "revision": "d8b36b615092fda758d39cbcff976edd"
  },
  {
    "url": "/audiovisual-surprise-button/index.html",
    "revision": "4c085080690a60bf4cb9cebdb9082cd7"
  },
  {
    "url": "/audiovisual-surprise-button/index.js",
    "revision": "263d399b5f02e12c6dcaa66eab708b9b"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/agam.mp3",
    "revision": "9481aa378366ac4f760ad96bf21b7c56"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/aviv.mp3",
    "revision": "3c9bb76928598a2d63956f87b88185c5"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/avraham.mp3",
    "revision": "e8bc9145dac5a097f4613117c294d28c"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/ayellet.mp3",
    "revision": "104cc3fc02b9e50d37ddd9c160b3c12c"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/eden.mp3",
    "revision": "019f5751e4d1f851d981cac36bf89537"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/gilad.mp3",
    "revision": "eb75134c1183e4cfb3b3e72891bba328"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/gita.mp3",
    "revision": "4f834c70b9ed44450147d03900ce4bdb"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/hila.mp3",
    "revision": "a670d6451ce37fe26fc9934595e2c41c"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/ilana.mp3",
    "revision": "888b383eeb30826aca7cff396ac47a63"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/itay.mp3",
    "revision": "3c6508d778e798ee0ee3eeec9c6cdb9b"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/lizz.mp3",
    "revision": "988f6d9ed8f972156c3b868564c8a63f"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/mali.mp3",
    "revision": "9680aa9f5079bdf98e55b2a75e38c1ab"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/margalit.mp3",
    "revision": "4d9323fba745378c703d62ba982a1581"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/monira.mp3",
    "revision": "d7db012eb21e334bd7dae7e9366ee48d"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/noga.mp3",
    "revision": "6cf421baa74d425c5657675206399884"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/ore.mp3",
    "revision": "74db881f39d1f28c9448f7749dc75719"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/rami.mp3",
    "revision": "23d799f943cf47759c86b1d2118bd655"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/rome.mp3",
    "revision": "7f5b6fa1a4bc2674be733c18e2afca37"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/shalev.mp3",
    "revision": "15838618ba428b06700098193f9605dd"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/shlomi.mp3",
    "revision": "e1bf94c07955dfd1b7eba95429f6302d"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/toam.mp3",
    "revision": "42b05b60a5bb821f6165be62cb3c9874"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/tsuf.mp3",
    "revision": "68e440c48ec7d4e4e9fe315268c83bc2"
  },
  {
    "url": "/audiovisual-surprise-button/sounds/yossi.mp3",
    "revision": "3aa4c1e17d3112aa01249bfdfb691eec"
  },
  {
    "url": "/audiovisual-surprise-button/sw.js",
    "revision": "ebdc49067d8234cc354e8ad65e2a517b"
  },
  {
    "url": "/audiovisual-surprise-button/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
