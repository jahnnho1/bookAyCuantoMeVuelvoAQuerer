import 'cookie';
import { bold, red, yellow, dim, blue } from 'kleur/colors';
import './chunks/astro_sWy1iNKM.mjs';
import 'clsx';
import { compile } from 'path-to-regexp';

const dateTimeFormat = new Intl.DateTimeFormat([], {
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hour12: false
});
const levels = {
  debug: 20,
  info: 30,
  warn: 40,
  error: 50,
  silent: 90
};
function log(opts, level, label, message, newLine = true) {
  const logLevel = opts.level;
  const dest = opts.dest;
  const event = {
    label,
    level,
    message,
    newLine
  };
  if (!isLogLevelEnabled(logLevel, level)) {
    return;
  }
  dest.write(event);
}
function isLogLevelEnabled(configuredLogLevel, level) {
  return levels[configuredLogLevel] <= levels[level];
}
function info(opts, label, message, newLine = true) {
  return log(opts, "info", label, message, newLine);
}
function warn(opts, label, message, newLine = true) {
  return log(opts, "warn", label, message, newLine);
}
function error(opts, label, message, newLine = true) {
  return log(opts, "error", label, message, newLine);
}
function debug(...args) {
  if ("_astroGlobalDebug" in globalThis) {
    globalThis._astroGlobalDebug(...args);
  }
}
function getEventPrefix({ level, label }) {
  const timestamp = `${dateTimeFormat.format(/* @__PURE__ */ new Date())}`;
  const prefix = [];
  if (level === "error" || level === "warn") {
    prefix.push(bold(timestamp));
    prefix.push(`[${level.toUpperCase()}]`);
  } else {
    prefix.push(timestamp);
  }
  if (label) {
    prefix.push(`[${label}]`);
  }
  if (level === "error") {
    return red(prefix.join(" "));
  }
  if (level === "warn") {
    return yellow(prefix.join(" "));
  }
  if (prefix.length === 1) {
    return dim(prefix[0]);
  }
  return dim(prefix[0]) + " " + blue(prefix.splice(1).join(" "));
}
if (typeof process !== "undefined") {
  let proc = process;
  if ("argv" in proc && Array.isArray(proc.argv)) {
    if (proc.argv.includes("--verbose")) ; else if (proc.argv.includes("--silent")) ; else ;
  }
}
class Logger {
  options;
  constructor(options) {
    this.options = options;
  }
  info(label, message, newLine = true) {
    info(this.options, label, message, newLine);
  }
  warn(label, message, newLine = true) {
    warn(this.options, label, message, newLine);
  }
  error(label, message, newLine = true) {
    error(this.options, label, message, newLine);
  }
  debug(label, ...messages) {
    debug(label, ...messages);
  }
  level() {
    return this.options.level;
  }
  forkIntegrationLogger(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
}
class AstroIntegrationLogger {
  options;
  label;
  constructor(logging, label) {
    this.options = logging;
    this.label = label;
  }
  /**
   * Creates a new logger instance with a new label, but the same log options.
   */
  fork(label) {
    return new AstroIntegrationLogger(this.options, label);
  }
  info(message) {
    info(this.options, this.label, message);
  }
  warn(message) {
    warn(this.options, this.label, message);
  }
  error(message) {
    error(this.options, this.label, message);
  }
  debug(message) {
    debug(this.label, message);
  }
}

function getRouteGenerator(segments, addTrailingSlash) {
  const template = segments.map((segment) => {
    return "/" + segment.map((part) => {
      if (part.spread) {
        return `:${part.content.slice(3)}(.*)?`;
      } else if (part.dynamic) {
        return `:${part.content}`;
      } else {
        return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
      }
    }).join("");
  }).join("");
  let trailing = "";
  if (addTrailingSlash === "always" && segments.length) {
    trailing = "/";
  }
  const toPath = compile(template + trailing);
  return (params) => {
    const path = toPath(params);
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware(_, next) {
      return next();
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes
  };
}

const manifest = deserializeManifest({"adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/.pnpm/astro@4.7.0_@types+node@17.0.45/node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/blog/tag/[tag]/[...page]","isIndex":false,"type":"page","pattern":"^\\/blog\\/tag\\/([^/]+?)(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"tag","dynamic":false,"spread":false}],[{"content":"tag","dynamic":true,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["tag","...page"],"component":"src/pages/blog/tag/[tag]/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/blog/[...page]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...page","dynamic":true,"spread":true}]],"params":["...page"],"component":"src/pages/blog/[...page].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/blog/[...slug]","isIndex":false,"type":"page","pattern":"^\\/blog(?:\\/(.*?))?\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/blog/[...slug].astro","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo1","isIndex":false,"type":"page","pattern":"^\\/capitulo1\\/?$","segments":[[{"content":"capitulo1","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo1.mdx","pathname":"/capitulo1","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo10","isIndex":false,"type":"page","pattern":"^\\/capitulo10\\/?$","segments":[[{"content":"capitulo10","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo10.mdx","pathname":"/capitulo10","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo2","isIndex":false,"type":"page","pattern":"^\\/capitulo2\\/?$","segments":[[{"content":"capitulo2","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo2.mdx","pathname":"/capitulo2","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo3","isIndex":false,"type":"page","pattern":"^\\/capitulo3\\/?$","segments":[[{"content":"capitulo3","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo3.mdx","pathname":"/capitulo3","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo4","isIndex":false,"type":"page","pattern":"^\\/capitulo4\\/?$","segments":[[{"content":"capitulo4","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo4.mdx","pathname":"/capitulo4","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo5","isIndex":false,"type":"page","pattern":"^\\/capitulo5\\/?$","segments":[[{"content":"capitulo5","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo5.mdx","pathname":"/capitulo5","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo6","isIndex":false,"type":"page","pattern":"^\\/capitulo6\\/?$","segments":[[{"content":"capitulo6","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo6.mdx","pathname":"/capitulo6","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo7","isIndex":false,"type":"page","pattern":"^\\/capitulo7\\/?$","segments":[[{"content":"capitulo7","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo7.mdx","pathname":"/capitulo7","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo8","isIndex":false,"type":"page","pattern":"^\\/capitulo8\\/?$","segments":[[{"content":"capitulo8","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo8.mdx","pathname":"/capitulo8","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/capitulo9","isIndex":false,"type":"page","pattern":"^\\/capitulo9\\/?$","segments":[[{"content":"capitulo9","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/capitulo9.mdx","pathname":"/capitulo9","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/rss.xml","isIndex":false,"type":"endpoint","pattern":"^\\/rss\\.xml\\/?$","segments":[[{"content":"rss.xml","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/rss.xml.js","pathname":"/rss.xml","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.C-CvH07E.js"}],"styles":[{"type":"external","src":"/_astro/_page_.XBaAljkY.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.mdx","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"site":"https://www.github.com/jahnnho","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/clymo/proyectos/lectorLibro/src/pages/blog/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/blog/tag/[tag]/[...page].astro",{"propagation":"in-tree","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo1.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo10.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo2.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo3.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo4.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo5.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo6.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo7.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo8.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/capitulo9.mdx",{"propagation":"none","containsHead":true}],["/home/clymo/proyectos/lectorLibro/src/pages/index.mdx",{"propagation":"none","containsHead":true}],["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/clymo/proyectos/lectorLibro/src/pages/rss.xml.js",{"propagation":"in-tree","containsHead":false}],["\u0000@astro-page:src/pages/rss.xml@_@js",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var i=t=>{let e=async()=>{await(await t())()};\"requestIdleCallback\"in window?window.requestIdleCallback(e):setTimeout(e,200)};(self.Astro||(self.Astro={})).idle=i;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000noop-middleware":"_noop-middleware.mjs","/src/pages/blog/[...slug].astro":"chunks/pages/__XXH-Rghq.mjs","/src/pages/capitulo1.mdx":"chunks/pages/capitulo1_De-qqTNn.mjs","/src/pages/capitulo10.mdx":"chunks/pages/capitulo10_hXZ49K6c.mjs","/src/pages/capitulo2.mdx":"chunks/pages/capitulo2_NHrwsgKi.mjs","/src/pages/capitulo3.mdx":"chunks/pages/capitulo3_CkpZ-HEn.mjs","/src/pages/capitulo4.mdx":"chunks/pages/capitulo4_BPVxtyjw.mjs","/src/pages/capitulo5.mdx":"chunks/pages/capitulo5_kqdhCZX2.mjs","/src/pages/capitulo6.mdx":"chunks/pages/capitulo6_CpRl84RB.mjs","/src/pages/capitulo7.mdx":"chunks/pages/capitulo7_CsUBEyjC.mjs","/src/pages/capitulo8.mdx":"chunks/pages/capitulo8_C5o_88Xm.mjs","/src/pages/capitulo9.mdx":"chunks/pages/capitulo9_CTK_Oi1L.mjs","/node_modules/.pnpm/astro@4.7.0_@types+node@17.0.45/node_modules/astro/dist/assets/endpoint/generic.js":"chunks/pages/generic_CukMpmxb.mjs","/src/pages/index.mdx":"chunks/pages/index_sQaHzlT0.mjs","/src/pages/rss.xml.js":"chunks/pages/rss_Dcu9fWXG.mjs","\u0000@astrojs-manifest":"manifest_DaBJSSJh.mjs","\u0000@astro-page:node_modules/.pnpm/astro@4.7.0_@types+node@17.0.45/node_modules/astro/dist/assets/endpoint/generic@_@js":"chunks/generic_DmSxhgXP.mjs","\u0000@astro-page:src/pages/blog/tag/[tag]/[...page]@_@astro":"chunks/_.._ChOGHmdF.mjs","\u0000@astro-page:src/pages/blog/[...page]@_@astro":"chunks/_.._0ryIP3Rl.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"chunks/_.._xQyy-9Qi.mjs","\u0000@astro-page:src/pages/capitulo1@_@mdx":"chunks/capitulo1_DNKvANOU.mjs","\u0000@astro-page:src/pages/capitulo10@_@mdx":"chunks/capitulo10_CvtudIsG.mjs","\u0000@astro-page:src/pages/capitulo2@_@mdx":"chunks/capitulo2_DYCZ5maU.mjs","\u0000@astro-page:src/pages/capitulo3@_@mdx":"chunks/capitulo3_BfjzhpKc.mjs","\u0000@astro-page:src/pages/capitulo4@_@mdx":"chunks/capitulo4_BJJX6UEA.mjs","\u0000@astro-page:src/pages/capitulo5@_@mdx":"chunks/capitulo5_Cdd2rLdl.mjs","\u0000@astro-page:src/pages/capitulo6@_@mdx":"chunks/capitulo6_BJkqGgta.mjs","\u0000@astro-page:src/pages/capitulo7@_@mdx":"chunks/capitulo7_CqfHww80.mjs","\u0000@astro-page:src/pages/capitulo8@_@mdx":"chunks/capitulo8_B_-J0JK4.mjs","\u0000@astro-page:src/pages/capitulo9@_@mdx":"chunks/capitulo9_DmEk1vuF.mjs","\u0000@astro-page:src/pages/rss.xml@_@js":"chunks/rss_DElP3-qQ.mjs","\u0000@astro-page:src/pages/index@_@mdx":"chunks/index_DDo4apiZ.mjs","/home/clymo/proyectos/lectorLibro/src/content/blog/markdown-style-guide.md?astroContentCollectionEntry=true":"chunks/markdown-style-guide_721p3kxQ.mjs","/home/clymo/proyectos/lectorLibro/src/content/blog/using-mdx.mdx?astroContentCollectionEntry=true":"chunks/using-mdx_DvC-kXks.mjs","/home/clymo/proyectos/lectorLibro/src/content/blog/markdown-style-guide.md?astroPropagatedAssets":"chunks/markdown-style-guide_DtnKr4zs.mjs","/home/clymo/proyectos/lectorLibro/src/content/blog/using-mdx.mdx?astroPropagatedAssets":"chunks/using-mdx_BKNf9bcU.mjs","/home/clymo/proyectos/lectorLibro/src/content/blog/markdown-style-guide.md":"chunks/markdown-style-guide_CAEEOeub.mjs","/home/clymo/proyectos/lectorLibro/src/content/blog/using-mdx.mdx":"chunks/using-mdx_BV3t9r8S.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.C-CvH07E.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/KaTeX_Caligraphic-Bold.Dq_IR9rO.woff2","/_astro/KaTeX_AMS-Regular.BQhdFMY1.woff2","/_astro/KaTeX_Caligraphic-Regular.Di6jR-x-.woff2","/_astro/KaTeX_Fraktur-Bold.CL6g_b3V.woff2","/_astro/KaTeX_Fraktur-Regular.CTYiF6lA.woff2","/_astro/KaTeX_Main-Bold.Cx986IdX.woff2","/_astro/KaTeX_Main-BoldItalic.DxDJ3AOS.woff2","/_astro/KaTeX_Main-Italic.NWA7e6Wa.woff2","/_astro/KaTeX_Main-Regular.B22Nviop.woff2","/_astro/KaTeX_Math-BoldItalic.CZnvNsCZ.woff2","/_astro/KaTeX_Math-Italic.t53AETM-.woff2","/_astro/KaTeX_SansSerif-Bold.D1sUS0GD.woff2","/_astro/KaTeX_SansSerif-Italic.C3H0VqGB.woff2","/_astro/KaTeX_SansSerif-Regular.DDBCnlJ7.woff2","/_astro/KaTeX_Script-Regular.D3wIWfF6.woff2","/_astro/KaTeX_Size1-Regular.mCD8mA8B.woff2","/_astro/KaTeX_Size2-Regular.Dy4dx90m.woff2","/_astro/KaTeX_Size4-Regular.Dl5lxZxV.woff2","/_astro/KaTeX_Typewriter-Regular.CO6r4hn1.woff2","/_astro/KaTeX_Caligraphic-Bold.BEiXGLvX.woff","/_astro/KaTeX_Caligraphic-Regular.CTRA-rTL.woff","/_astro/KaTeX_AMS-Regular.DMm9YOAa.woff","/_astro/KaTeX_Fraktur-Bold.BsDP51OF.woff","/_astro/KaTeX_Fraktur-Regular.Dxdc4cR9.woff","/_astro/KaTeX_Main-Bold.Jm3AIy58.woff","/_astro/KaTeX_Main-BoldItalic.SpSLRI95.woff","/_astro/KaTeX_Main-Italic.BMLOBm91.woff","/_astro/KaTeX_Main-Regular.Dr94JaBh.woff","/_astro/KaTeX_Math-BoldItalic.iY-2wyZ7.woff","/_astro/KaTeX_Math-Italic.DA0__PXp.woff","/_astro/KaTeX_SansSerif-Bold.DbIhKOiC.woff","/_astro/KaTeX_Script-Regular.D5yQViql.woff","/_astro/KaTeX_SansSerif-Regular.CS6fqUqJ.woff","/_astro/KaTeX_SansSerif-Italic.DN2j7dab.woff","/_astro/KaTeX_Size1-Regular.C195tn64.woff","/_astro/KaTeX_Size2-Regular.oD1tc_U0.woff","/_astro/KaTeX_Size3-Regular.CTq5MqoE.woff","/_astro/KaTeX_Size4-Regular.BF-4gkZK.woff","/_astro/KaTeX_Typewriter-Regular.C0xS9mPB.woff","/_astro/KaTeX_Caligraphic-Bold.ATXxdsX0.ttf","/_astro/KaTeX_Caligraphic-Regular.wX97UBjC.ttf","/_astro/KaTeX_AMS-Regular.DRggAlZN.ttf","/_astro/KaTeX_Fraktur-Bold.BdnERNNW.ttf","/_astro/KaTeX_Fraktur-Regular.CB_wures.ttf","/_astro/KaTeX_Main-Bold.waoOVXN0.ttf","/_astro/KaTeX_Main-BoldItalic.DzxPMmG6.ttf","/_astro/KaTeX_Main-Italic.3WenGoN9.ttf","/_astro/KaTeX_Main-Regular.ypZvNtVU.ttf","/_astro/KaTeX_Math-BoldItalic.B3XSjfu4.ttf","/_astro/KaTeX_Math-Italic.flOr_0UB.ttf","/_astro/KaTeX_SansSerif-Bold.CFMepnvq.ttf","/_astro/KaTeX_Script-Regular.C5JkGWo-.ttf","/_astro/KaTeX_SansSerif-Regular.BNo7hRIc.ttf","/_astro/KaTeX_SansSerif-Italic.YYjJ1zSn.ttf","/_astro/KaTeX_Size1-Regular.Dbsnue_I.ttf","/_astro/KaTeX_Size2-Regular.B7gKUWhC.ttf","/_astro/KaTeX_Size3-Regular.DgpXs0kz.ttf","/_astro/KaTeX_Size4-Regular.DWFBv043.ttf","/_astro/KaTeX_Typewriter-Regular.D3Ib7_Hf.ttf","/_astro/_page_.XBaAljkY.css","/a1.webp","/a1.webp:Zone.Identifier","/cap2.webp","/cap2.webp:Zone.Identifier","/capitulo1.ogg","/favicon.svg","/home.webp","/profile.webp","/view.png","/_astro/hoisted.C-CvH07E.js","/fonts/CascadiaCode.woff2"],"buildFormat":"directory","checkOrigin":false});

export { AstroIntegrationLogger as A, Logger as L, getEventPrefix as g, levels as l, manifest };
