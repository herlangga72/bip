if(!self.define){const e=e=>{"require"!==e&&(e+=".js");let s=Promise.resolve();return r[e]||(s=new Promise((async s=>{if("document"in self){const r=document.createElement("script");r.src=e,document.head.appendChild(r),r.onload=s}else importScripts(e),s()}))),s.then((()=>{if(!r[e])throw new Error(`Module ${e} didn’t register its module`);return r[e]}))},s=(s,r)=>{Promise.all(s.map(e)).then((e=>r(1===e.length?e[0]:e)))},r={require:Promise.resolve(s)};self.define=(s,i,a)=>{r[s]||(r[s]=Promise.resolve().then((()=>{let r={};const c={uri:location.origin+s.slice(1)};return Promise.all(i.map((s=>{switch(s){case"exports":return r;case"module":return c;default:return e(s)}}))).then((e=>{const s=a(...e);return r.default||(r.default=s),r}))})))}}define("./sw.js",["./workbox-afb9f189"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/_fallback.4f81ce6e.js",revision:"98cbe9552d1f3636d9f361980fe68b82"},{url:"assets/_layout.b8c1272e.js",revision:"1dbe185eca018a425ec52c73c8ea5d24"},{url:"assets/_reset.30a7728c.js",revision:"7d86b2fc07bba5788932f8a72192d601"},{url:"assets/_reset.37d4d4b6.js",revision:"103f489db4c7d7160b06471511709cca"},{url:"assets/Grid.bf542392.js",revision:"b24e71dcf77a6d38cd2d8eb5decb0399"},{url:"assets/HeaderUtilities.c4385ce8.js",revision:"b03798553fd0fd97bb36cd30733fa738"},{url:"assets/in.5f80155f.js",revision:"523fd5bdccc2b5b6b12b2be693583185"},{url:"assets/index.687a3e46.js",revision:"184b99470f754baa5740e2b68b11e875"},{url:"assets/index.9b871eb0.js",revision:"e9693c8e9633f5b3bce642e1d18859b2"},{url:"assets/index.dca60344.js",revision:"9978c542365a7f7d33b791cdaea6b20f"},{url:"assets/index.de7d8e24.js",revision:"fc7240e5d399b2bd87f31ce2b1305d03"},{url:"assets/Link.7fd37498.js",revision:"8a1ac7f07718f5c1aaeb2c8621b20e48"},{url:"assets/out.475e6c86.js",revision:"3160e113e79814f23377e815eba8031a"},{url:"assets/overview.94744abf.js",revision:"4089a8e491f1f126086604081806ee93"},{url:"assets/pelaksanaan.6b37c94f.js",revision:"b55c8ec7a85fe82b9db14c638a447dc8"},{url:"assets/peserta.568edad2.js",revision:"6fc6e40b766c65d4df6ef892fd6e612c"},{url:"assets/profile.61fb0f6d.js",revision:"bb890e646b0e04af787a2a0e7768120e"},{url:"assets/SkipToContent.8c8b01f2.js",revision:"82db4d10c03e73cd51fa45e9b2ecdccd"},{url:"assets/style.94c4fcf5.css",revision:"e88d88a94c63ea7dd8a53bc864ae3c4a"},{url:"assets/Tile.8a5ca8b4.js",revision:"79a391bf6d097c7c6f9198435c8ae4b4"},{url:"assets/users.b39c0bf2.js",revision:"627f9c9684a90957dfee8cb19957127a"},{url:"assets/vendor.efda23c2.js",revision:"932790537987dd2a905d161dbc7b1663"},{url:"index.html",revision:"be068f8bfe5d0bf4adfdb034424f5b48"},{url:"manifest.webmanifest",revision:"0ea38775bdef7081a654136b25474f2f"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map