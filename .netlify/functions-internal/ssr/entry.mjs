import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DPtkQsmZ.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BnZZtI5t.mjs');
const _page1 = () => import('./chunks/_.._AlSlhUfj.mjs');
const _page2 = () => import('./chunks/_.._CxdRoBZl.mjs');
const _page3 = () => import('./chunks/_.._B24S8taC.mjs');
const _page4 = () => import('./chunks/capitulo1_B2LzBTTU.mjs');
const _page5 = () => import('./chunks/capitulo10_KWwd2LEo.mjs');
const _page6 = () => import('./chunks/capitulo2_D9OYtdGk.mjs');
const _page7 = () => import('./chunks/capitulo3_B45FXHnf.mjs');
const _page8 = () => import('./chunks/capitulo4_CKoBiCb2.mjs');
const _page9 = () => import('./chunks/capitulo5_BGOozJPa.mjs');
const _page10 = () => import('./chunks/capitulo6_DTcY0xmW.mjs');
const _page11 = () => import('./chunks/capitulo7_CsKTM-x4.mjs');
const _page12 = () => import('./chunks/capitulo8_Brand27m.mjs');
const _page13 = () => import('./chunks/capitulo9_Bg4mL5M0.mjs');
const _page14 = () => import('./chunks/rss_B03JID2U.mjs');
const _page15 = () => import('./chunks/index_Bk2A-e-6.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/blog/tag/[tag]/[...page].astro", _page1],
    ["src/pages/blog/[...page].astro", _page2],
    ["src/pages/blog/[...slug].astro", _page3],
    ["src/pages/capitulo1.mdx", _page4],
    ["src/pages/capitulo10.mdx", _page5],
    ["src/pages/capitulo2.mdx", _page6],
    ["src/pages/capitulo3.mdx", _page7],
    ["src/pages/capitulo4.mdx", _page8],
    ["src/pages/capitulo5.mdx", _page9],
    ["src/pages/capitulo6.mdx", _page10],
    ["src/pages/capitulo7.mdx", _page11],
    ["src/pages/capitulo8.mdx", _page12],
    ["src/pages/capitulo9.mdx", _page13],
    ["src/pages/rss.xml.js", _page14],
    ["src/pages/index.mdx", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "f389a202-0864-407a-93ef-ffd0ea63651b"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
