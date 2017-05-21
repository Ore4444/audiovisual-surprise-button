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
    "url": "/images/agam.webp",
    "revision": "79964036d66a497e7c2a818cec43e45f"
  },
  {
    "url": "/images/aviv.webp",
    "revision": "b0194468990b10e4576a868224940f24"
  },
  {
    "url": "/images/avraham.webp",
    "revision": "cff1cf3b2a4d0d1a9cfc13a85b5b22b8"
  },
  {
    "url": "/images/ayellet.webp",
    "revision": "4cd3f5717939377a1703ce4316791466"
  },
  {
    "url": "/images/eden.webp",
    "revision": "f0581b42b6c6059e18de9ac7a3c141bf"
  },
  {
    "url": "/images/gilad.webp",
    "revision": "69b3150c45b5d147437efacc10466acb"
  },
  {
    "url": "/images/gita.webp",
    "revision": "9252d586dc3a451b0d1dbedd0187c43d"
  },
  {
    "url": "/images/hila.webp",
    "revision": "7a087a904afc35b568ebff39a056d34e"
  },
  {
    "url": "/images/ilana.webp",
    "revision": "c000186b8d7b9261bfe74398ebcdf845"
  },
  {
    "url": "/images/itay.webp",
    "revision": "065f6ab229544d5c879508da0a545702"
  },
  {
    "url": "/images/lizz.webp",
    "revision": "66a075cdb40019d74654e3817232021b"
  },
  {
    "url": "/images/mali.webp",
    "revision": "6baaa6871f59b60d83f10f016732a652"
  },
  {
    "url": "/images/margalit.webp",
    "revision": "6854f3901354790d5c9df513e0a96390"
  },
  {
    "url": "/images/noga.webp",
    "revision": "e8e73a14e5d5bcd1acc9d111716e9358"
  },
  {
    "url": "/images/ore.webp",
    "revision": "b51f246634b7a9e4c15f4783b04e624b"
  },
  {
    "url": "/images/rami.webp",
    "revision": "50dfcce96d82f7519bef0575b0847d2b"
  },
  {
    "url": "/images/rome.webp",
    "revision": "f0f01f0d469d786ef33f47c4198ceb26"
  },
  {
    "url": "/images/shalev.webp",
    "revision": "9fff6f56bba6630b8ba4959465c71455"
  },
  {
    "url": "/images/shlomi.webp",
    "revision": "1fcedb4e5454b71c4e924ef27e59807f"
  },
  {
    "url": "/images/toam.webp",
    "revision": "1720cf92af48d9d3678efca968f8d794"
  },
  {
    "url": "/images/tsuf.webp",
    "revision": "aa635f63fa05f21c2969e351d4c7f390"
  },
  {
    "url": "/images/yossi.webp",
    "revision": "7a057e52988d95734c52295b525d375f"
  },
  {
    "url": "/index.css",
    "revision": "d8b36b615092fda758d39cbcff976edd"
  },
  {
    "url": "/index.html",
    "revision": "4c085080690a60bf4cb9cebdb9082cd7"
  },
  {
    "url": "/index.js",
    "revision": "21a333ff9bd570576e36f3fb17c875e3"
  },
  {
    "url": "/sounds/agam.mp3",
    "revision": "9481aa378366ac4f760ad96bf21b7c56"
  },
  {
    "url": "/sounds/aviv.mp3",
    "revision": "3c9bb76928598a2d63956f87b88185c5"
  },
  {
    "url": "/sounds/avraham.mp3",
    "revision": "e8bc9145dac5a097f4613117c294d28c"
  },
  {
    "url": "/sounds/ayellet.mp3",
    "revision": "104cc3fc02b9e50d37ddd9c160b3c12c"
  },
  {
    "url": "/sounds/eden.mp3",
    "revision": "019f5751e4d1f851d981cac36bf89537"
  },
  {
    "url": "/sounds/gilad.mp3",
    "revision": "eb75134c1183e4cfb3b3e72891bba328"
  },
  {
    "url": "/sounds/gita.mp3",
    "revision": "4f834c70b9ed44450147d03900ce4bdb"
  },
  {
    "url": "/sounds/hila.mp3",
    "revision": "a670d6451ce37fe26fc9934595e2c41c"
  },
  {
    "url": "/sounds/ilana.mp3",
    "revision": "888b383eeb30826aca7cff396ac47a63"
  },
  {
    "url": "/sounds/itay.mp3",
    "revision": "3c6508d778e798ee0ee3eeec9c6cdb9b"
  },
  {
    "url": "/sounds/lizz.mp3",
    "revision": "988f6d9ed8f972156c3b868564c8a63f"
  },
  {
    "url": "/sounds/mali.mp3",
    "revision": "9680aa9f5079bdf98e55b2a75e38c1ab"
  },
  {
    "url": "/sounds/margalit.mp3",
    "revision": "4d9323fba745378c703d62ba982a1581"
  },
  {
    "url": "/sounds/monira.mp3",
    "revision": "d7db012eb21e334bd7dae7e9366ee48d"
  },
  {
    "url": "/sounds/noga.mp3",
    "revision": "6cf421baa74d425c5657675206399884"
  },
  {
    "url": "/sounds/ore.mp3",
    "revision": "74db881f39d1f28c9448f7749dc75719"
  },
  {
    "url": "/sounds/rami.mp3",
    "revision": "23d799f943cf47759c86b1d2118bd655"
  },
  {
    "url": "/sounds/rome.mp3",
    "revision": "7f5b6fa1a4bc2674be733c18e2afca37"
  },
  {
    "url": "/sounds/shalev.mp3",
    "revision": "15838618ba428b06700098193f9605dd"
  },
  {
    "url": "/sounds/shlomi.mp3",
    "revision": "e1bf94c07955dfd1b7eba95429f6302d"
  },
  {
    "url": "/sounds/toam.mp3",
    "revision": "42b05b60a5bb821f6165be62cb3c9874"
  },
  {
    "url": "/sounds/tsuf.mp3",
    "revision": "68e440c48ec7d4e4e9fe315268c83bc2"
  },
  {
    "url": "/sounds/yossi.mp3",
    "revision": "3aa4c1e17d3112aa01249bfdfb691eec"
  },
  {
    "url": "/sw/sw.js",
    "revision": "a48c7425a20cf45e4f95528b3e58f22a"
  },
  {
    "url": "/sw/workbox-sw.prod.v1.0.0.js",
    "revision": "9029a00430d1c6ccf363f3ad77c45d42"
  }
];

const workboxSW = new self.WorkboxSW();
workboxSW.precache(fileManifest);
