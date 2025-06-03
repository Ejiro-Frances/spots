// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (
  modules,
  entry,
  mainEntry,
  parcelRequireName,
  externals,
  distDir,
  publicUrl,
  devServer
) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var importMap = previousRequire.i || {};
  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        if (externals[name]) {
          return externals[name];
        }
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.require = nodeRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.distDir = distDir;
  newRequire.publicUrl = publicUrl;
  newRequire.devServer = devServer;
  newRequire.i = importMap;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  // Only insert newRequire.load when it is actually used.
  // The code in this file is linted against ES5, so dynamic import is not allowed.
  function $parcel$resolve(url) {  url = importMap[url] || url;  return import.meta.resolve(distDir + url);}newRequire.resolve = $parcel$resolve;

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });
    }
  }
})({"9rd3c":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SERVER_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "439701173a9199ea";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "3f16e5825489bde0";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_SERVER_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_SERVER_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ , bundleNotFound = false;
function getHostname() {
    return HMR_HOST || (typeof location !== 'undefined' && location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || (typeof location !== 'undefined' ? location.port : HMR_SERVER_PORT);
}
// eslint-disable-next-line no-redeclare
let WebSocket = globalThis.WebSocket;
if (!WebSocket && typeof module.bundle.root === 'function') try {
    // eslint-disable-next-line no-global-assign
    WebSocket = module.bundle.root('ws');
} catch  {
// ignore.
}
var hostname = getHostname();
var port = getPort();
var protocol = HMR_SECURE || typeof location !== 'undefined' && location.protocol === 'https:' && ![
    'localhost',
    '127.0.0.1',
    '0.0.0.0'
].includes(hostname) ? 'wss' : 'ws';
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if (!parent || !parent.isParcelRequire) {
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        // If we're running in the dev server's node runner, listen for messages on the parent port.
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) {
            parentPort.on('message', async (message)=>{
                try {
                    await handleMessage(message);
                    parentPort.postMessage('updated');
                } catch  {
                    parentPort.postMessage('restart');
                }
            });
            // After the bundle has finished running, notify the dev server that the HMR update is complete.
            queueMicrotask(()=>parentPort.postMessage('ready'));
        }
    } catch  {
        if (typeof WebSocket !== 'undefined') try {
            ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
        } catch (err) {
            // Ignore cloudflare workers error.
            if (err.message && !err.message.includes('Disallowed operation called within global scope')) console.error(err.message);
        }
    }
    if (ws) {
        // $FlowFixMe
        ws.onmessage = async function(event /*: {data: string, ...} */ ) {
            var data /*: HMRMessage */  = JSON.parse(event.data);
            await handleMessage(data);
        };
        if (ws instanceof WebSocket) {
            ws.onerror = function(e) {
                if (e.message) console.error(e.message);
            };
            ws.onclose = function() {
                console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
            };
        }
    }
}
async function handleMessage(data /*: HMRMessage */ ) {
    checkedAssets = {} /*: {|[string]: boolean|} */ ;
    disposedAssets = {} /*: {|[string]: boolean|} */ ;
    assetsToAccept = [];
    assetsToDispose = [];
    bundleNotFound = false;
    if (data.type === 'reload') fullReload();
    else if (data.type === 'update') {
        // Remove error overlay if there is one
        if (typeof document !== 'undefined') removeErrorOverlay();
        let assets = data.assets;
        // Handle HMR Update
        let handled = assets.every((asset)=>{
            return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
        });
        // Dispatch a custom event in case a bundle was not found. This might mean
        // an asset on the server changed and we should reload the page. This event
        // gives the client an opportunity to refresh without losing state
        // (e.g. via React Server Components). If e.preventDefault() is not called,
        // we will trigger a full page reload.
        if (handled && bundleNotFound && assets.some((a)=>a.envHash !== HMR_ENV_HASH) && typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') handled = !window.dispatchEvent(new CustomEvent('parcelhmrreload', {
            cancelable: true
        }));
        if (handled) {
            console.clear();
            // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
            if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
            await hmrApplyUpdates(assets);
            hmrDisposeQueue();
            // Run accept callbacks. This will also re-execute other disposed assets in topological order.
            let processedAssets = {};
            for(let i = 0; i < assetsToAccept.length; i++){
                let id = assetsToAccept[i][1];
                if (!processedAssets[id]) {
                    hmrAccept(assetsToAccept[i][0], id);
                    processedAssets[id] = true;
                }
            }
        } else fullReload();
    }
    if (data.type === 'error') {
        // Log parcel errors to console
        for (let ansiDiagnostic of data.diagnostics.ansi){
            let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
            console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
        }
        if (typeof document !== 'undefined') {
            // Render the fancy html overlay
            removeErrorOverlay();
            var overlay = createErrorOverlay(data.diagnostics.html);
            // $FlowFixMe
            document.body.appendChild(overlay);
        }
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="${protocol === 'wss' ? 'https' : 'http'}://${hostname}:${port}/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if (typeof location !== 'undefined' && 'reload' in location) location.reload();
    else if (typeof extCtx !== 'undefined' && extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
    else try {
        let { workerData, parentPort } = module.bundle.root('node:worker_threads') /*: any*/ ;
        if (workerData !== null && workerData !== void 0 && workerData.__parcel) parentPort.postMessage('restart');
    } catch (err) {
        console.error("[parcel] \u26A0\uFE0F An HMR update was not accepted. Please restart the process.");
    }
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout || typeof document === 'undefined') return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    checkedAssets = {};
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else if (a !== null) {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) {
            bundleNotFound = true;
            return true;
        }
        return hmrAcceptCheckOne(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return null;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    if (!cached) return true;
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
    return false;
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"3y59u":[function(require,module,exports,__globalThis) {
var _displayCardsJs = require("./modules/displayCards.js");
var _focusCardJs = require("./modules/focusCard.js");
var _profileEditorJs = require("./modules/profileEditor.js");
var _previewableCardsJs = require("./modules/previewableCards.js");
var _newPostJs = require("./modules/newPost.js");
const modalEl = document.querySelector(".modal");
const editBtnEl = document.getElementById("editBtn");
const cancelBtn = document.getElementById("cancelBtn");
const modalPost = document.getElementById("postModal");
const newPostBtn = document.querySelector("#post-btn");
const closePostModal = document.getElementById("closeModal");
(0, _displayCardsJs.displayCards)(".container");
(0, _profileEditorJs.updateEditForm)();
(0, _previewableCardsJs.previewableCards)(".container");
(0, _newPostJs.createNewPost)();
(0, _focusCardJs.setAutoFocus)(".container");
// Attach event listeners (ensure elements exist in HTML)
editBtnEl.addEventListener("click", ()=>{
    modalEl.showModal();
});
cancelBtn.addEventListener("click", ()=>modalEl.close());
newPostBtn.addEventListener("click", ()=>modalPost.showModal());
closePostModal.addEventListener("click", ()=>modalPost.close());
// Close modal by clicking outside
window.addEventListener("click", (e)=>{
    if (e.target === modalPost || e.target === modalEl) {
        modalPost.close();
        modalEl.close();
    }
});

},{"./modules/displayCards.js":"uKVVP","./modules/focusCard.js":"bflAi","./modules/profileEditor.js":"3IJaM","./modules/previewableCards.js":"28oUk","./modules/newPost.js":"fcXZA"}],"uKVVP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
// function to create and display cards inside a container
parcelHelpers.export(exports, "displayCards", ()=>displayCards);
var _cardsJs = require("./cards.js");
const style = document.createElement("style");
style.textContent = `
    .like-icon:focus {
      outline: none;
    }

    .like-icon.liked path {
      fill: red;
      stroke: red;
    }
      
    .card-img-container {
    overflow: hidden;
    }

  .card-img {
    transition: transform 0.3s ease-in-out;
  }

  .card.focused .card-img {
    transform: scale(1.1);
  }
  `;
document.head.appendChild(style);
function displayCards(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    container.innerHTML = "";
    (0, _cardsJs.cardsData).forEach((card)=>{
        const cardHTML = `
      <article class="card">
        <div class="card-img-container">
          <img
            src="${card.imgSrc}"
            alt="${card.imgAlt}"
            class="card-img"
            loading="lazy"
          />
        </div>

        <div class="card-description">
          <p class="card-title">${card.title}</p>
          <div class="like">
            <svg
              class="like-icon"
              role="button"
              tabindex="0"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Like button"
            >
              <path
                d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                stroke="#212121"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      </article>
    `;
        container.insertAdjacentHTML("beforeend", cardHTML);
        console.log(card.imgSrc);
    });
    // Event listener for toggling 'liked' class on like icons
    container.addEventListener("click", (e)=>{
        const likeIcon = e.target.closest(".like-icon");
        if (likeIcon) likeIcon.classList.toggle("liked");
    });
}

},{"./cards.js":"lJW7e","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"lJW7e":[function(require,module,exports,__globalThis) {
// Cards Data
// export const cardsData = [
//   {
//     imgSrc: "../../assets/images/card1.svg",
//     imgAlt: "Snow-covered mountains in Val Thorens",
//     title: "Val Thorens",
//   },
//   {
//     imgSrc: "../../assets/images/Card2.png",
//     imgAlt: "Restaurant terrace with a view",
//     title: "Restaurant terrace",
//   },
//   {
//     imgSrc: "../../assets/images/Card3.png",
//     imgAlt: "Outdoor cafe with people",
//     title: "An outdoor cafe",
//   },
//   {
//     imgSrc: "../../assets/images/Card4.png",
//     imgAlt: "A long bridge over a forest",
//     title: "A very long bridge, over the forest...",
//   },
//   {
//     imgSrc: "../../assets/images/Card5.png",
//     imgAlt: "A man walking in a tunnel with morning light shining through",
//     title: "Tunnel with morning light",
//   },
//   {
//     imgSrc: "../../assets/images/Card6.png",
//     imgAlt: "Mountain house",
//     title: "Mountain house",
//   },
// ];
// import Card1 from "../../assets/images/card1.svg";
// console.log(typeof Card1);
// console.log("Card1 import:", Card1);
// import Card2 from "../../assets/images/Card2.png";
// import Card3 from "../../assets/images/Card3.png";
// import Card4 from "../../assets/images/Card4.png";
// import Card5 from "../../assets/images/Card5.png";
// import Card6 from "../../assets/images/Card6.png";
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "cardsData", ()=>cardsData);
const Card1 = new URL(require("aea4c08d0c1a292f")).href;
const Card2 = new URL(require("b0e12621b328569")).href;
const Card3 = new URL(require("97f85fc00336fc29")).href;
const Card4 = new URL(require("5f8d0f97dbcaf10f")).href;
const Card5 = new URL(require("36946a732e91c57b")).href;
const Card6 = new URL(require("9b1f8a764fdb8763")).href;
const cardsData = [
    {
        imgSrc: Card1,
        imgAlt: "Snow-covered mountains in Val Thorens",
        title: "Val Thorens"
    },
    {
        imgSrc: Card2,
        imgAlt: "Restaurant terrace with a view",
        title: "Restaurant terrace"
    },
    {
        imgSrc: Card3,
        imgAlt: "Outdoor cafe with people",
        title: "An outdoor cafe"
    },
    {
        imgSrc: Card4,
        imgAlt: "A long bridge over a forest",
        title: "A very long bridge, over the forest..."
    },
    {
        imgSrc: Card5,
        imgAlt: "A man walking in a tunnel with morning light shining through",
        title: "Tunnel with morning light"
    },
    {
        imgSrc: Card6,
        imgAlt: "Mountain house",
        title: "Mountain house"
    }
];

},{"aea4c08d0c1a292f":"7vAvo","b0e12621b328569":"ecH1J","97f85fc00336fc29":"5GfcG","5f8d0f97dbcaf10f":"1i29e","36946a732e91c57b":"6QHaE","9b1f8a764fdb8763":"jP11f","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"7vAvo":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Card1.4ed886a1.jpg") + "?" + Date.now();

},{}],"ecH1J":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Card2.62d3024d.png") + "?" + Date.now();

},{}],"5GfcG":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Card3.6b8e1f3d.png") + "?" + Date.now();

},{}],"1i29e":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Card4.8c913ea5.png") + "?" + Date.now();

},{}],"6QHaE":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Card5.8a8e39a8.png") + "?" + Date.now();

},{}],"jP11f":[function(require,module,exports,__globalThis) {
module.exports = module.bundle.resolve("Card6.7f7b5fe0.png") + "?" + Date.now();

},{}],"jnFvT":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"bflAi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setAutoFocus", ()=>setAutoFocus);
function setAutoFocus(containerSelector) {
    const container = document.querySelector(containerSelector);
    if (!container) return;
    const firstImgCard = container.querySelector(".card");
    if (firstImgCard) firstImgCard.classList.add("focused");
    container.addEventListener("mouseover", (e)=>{
        const hoveredCard = e.target.closest(".card");
        if (hoveredCard) {
            // Remove focus from all cards
            container.querySelectorAll(".card").forEach((card)=>{
                card.classList.remove("focused");
            });
            // Add focus to hovered card
            hoveredCard.classList.add("focused");
        }
    });
    container.addEventListener("mouseleave", ()=>{
        container.querySelectorAll(".card").forEach((card)=>{
            card.classList.remove("focused");
        });
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"3IJaM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateEditForm", ()=>updateEditForm) // Store original values
 // let originalName = "";
 // let originalTitle = "";
 // Function to open the modal
 // function openEditModal() {
 // Populate modal inputs with original values
 //   document.getElementById("editName").value = originalName;
 //   document.getElementById("editDesc").value = originalTitle;
 //   document.getElementById("editModal").style.display = "block";
 // }
 // Function to hide the modal
 // function closeEditModal() {
 //   document.getElementById("editModal").style.display = "none";
 // }
 // Function to save changes to profile
 // function saveProfile() {
 //   const newName = document.getElementById("editName").value.trim();
 //   const newTitle = document.getElementById("editDesc").value.trim();
 //   if (!newName || !newTitle) {
 //     document.getElementById("profileName").textContent = originalName;
 //     document.getElementById("profileTitle").textContent = originalTitle;
 //     closeEditModal();
 //     return;
 //   }
 //   document.getElementById("profileName").textContent = newName;
 //   document.getElementById("profileTitle").textContent = newTitle;
 //   const fileInput = document.getElementById("editImage");
 //   if (fileInput.files && fileInput.files[0]) {
 //     const reader = new FileReader();
 //     reader.onload = function (e) {
 //       document.getElementById("profileImage").src = e.target.result;
 //     };
 //     reader.readAsDataURL(fileInput.files[0]);
 //   }
 //   closeEditModal();
 // }
 // // Close modal with ESC key
 // document.addEventListener("keydown", (event) => {
 //   if (event.key === "Escape") {
 //     closeEditModal();
 //   }
 // });
 // // Export the module functions
 // export { openEditModal, closeEditModal, saveProfile };
;
const modalEl = document.querySelector(".modal");
const editForm = document.querySelector("#editForm");
const originalName = document.querySelector("#profileName");
const originalDescription = document.querySelector("#profileTitle");
const profileImage = document.getElementById("profileImage");
const newName = document.getElementById("editName");
const newDescription = document.getElementById("editDesc");
const fileInput = document.getElementById("editImage");
const nameError = document.querySelector("#name-error");
const descriptionError = document.querySelector("#description-error");
function updateEditForm() {
    editForm.addEventListener("submit", (e)=>{
        e.preventDefault();
        let hasError = false;
        // validate name
        if (newName.value.trim().length < 2) {
            nameError.classList.remove("hidden");
            nameError.textContent = "Minimum of 2 characters";
            hasError = true;
        } else nameError.classList.add("hidden");
        // validate description
        if (newDescription.value.trim().length < 2) {
            descriptionError.classList.remove("hidden");
            descriptionError.textContent = "Minimum of 2 characters";
            hasError = true;
        } else descriptionError.classList.add("hidden");
        if (hasError) return;
        // Populate modal inputs with original values
        originalName.textContent = newName.value.trim();
        originalDescription.textContent = newDescription.value.trim();
        // update image only if a file is selected
        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result;
            };
            reader.readAsDataURL(fileInput.files[0]);
        }
        modalEl.close();
        editForm.reset();
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"28oUk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "previewableCards", ()=>previewableCards);
var _cardsJs = require("./cards.js");
function previewableCards(containerSelector) {
    const container = document.querySelector(containerSelector);
    const previewableModal = document.querySelector(".previewable-modal");
    let modalOpen = false;
    let clickedImage = null;
    // Delegate click event to child images
    container.addEventListener("click", (event)=>{
        const clickedImg = event.target.closest("img");
        if (!clickedImg) return; // Click wasn't on an image
        // Find the matching card data based on the clicked image src
        const clickedSrc = clickedImg.getAttribute("src");
        // Match using file name only
        const clickedFileName = clickedSrc.split("/").pop();
        const card = (0, _cardsJs.cardsData).find((c)=>c.imgSrc.split("/").pop() === clickedFileName);
        if (!card) {
            console.warn("No card found for image:", clickedSrc);
            return;
        }
        // Save the clicked image
        clickedImage = clickedImg;
        // Clear and show modal
        previewableModal.innerHTML = "";
        previewableModal.showModal();
        modalOpen = true;
        // Add body click listener (delayed to skip the current click)
        setTimeout(()=>{
            previewableModal.classList.add("show");
            document.body.addEventListener("click", bodyClickHandler);
        }, 0);
        // Create and insert the clicked card preview
        const displayPreviewableCard = document.createElement("div");
        displayPreviewableCard.innerHTML = `
         <div class="previewable-images">
          <div class="card-img-container">
            <img
              src="${card.imgSrc}"
              alt="${card.imgAlt}"
              class="card-img preview-img"
            />
          </div>
         <p class="previewable-title">${card.title}</p>
      </div>
         `;
        previewableModal.appendChild(displayPreviewableCard);
        // Close icon
        const deleteIcon = document.createElement("img");
        deleteIcon.src = "./assets/icons/x-close-delete-svgrepo-com.svg";
        deleteIcon.classList.add("delete-icon");
        deleteIcon.addEventListener("click", ()=>{
            closeModal();
        });
        previewableModal.appendChild(deleteIcon);
    });
    // Close when clicking outside modal content
    function bodyClickHandler(event) {
        const isInsideModal = event.target.closest(".previewable-images");
        const isOriginalImage = clickedImage && event.target === clickedImage;
        if (!isInsideModal && !isOriginalImage) closeModal();
    }
    function closeModal() {
        if (!modalOpen) return;
        modalOpen = false;
        previewableModal.close();
        //  previewableModal.classList.remove("show"); // reset animation state
        document.body.removeEventListener("click", bodyClickHandler);
        clickedImage = null;
    }
}

},{"./cards.js":"lJW7e","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}],"fcXZA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "createNewPost", ()=>createNewPost);
var _cardsJs = require("./cards.js");
const modal = document.getElementById("postModal");
const postForm = document.getElementById("newPostForm");
const postImage = document.getElementById("postImage");
const titleInput = document.getElementById("post-title");
const titleError = document.getElementById("post-title-error");
const imgError = document.getElementById("post-img-error");
const customUpload = document.getElementById("customUpload");
const uploadPreview = document.getElementById("uploadPreview");
const uploadText = document.getElementById("uploadText");
// Handle upload box click
customUpload.addEventListener("click", ()=>{
    postImage.click();
});
// Handle image preview on file select
postImage.addEventListener("change", ()=>{
    const file = postImage.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            uploadPreview.src = e.target.result;
            uploadPreview.classList.remove("hidden");
            uploadText.classList.add("hidden");
        };
        reader.readAsDataURL(file);
    }
});
function createNewPost() {
    postForm.addEventListener("submit", function(e) {
        e.preventDefault();
        const title = titleInput.value.trim();
        if (!title) {
            titleError.classList.remove("hidden");
            return;
        }
        if (!postImage.files || !postImage.files[0]) {
            imgError.classList.remove("hidden");
            return;
        }
        const reader = new FileReader();
        reader.onload = function(e) {
            const imageDataUrl = e.target.result;
            // Add the new post to cardsData
            (0, _cardsJs.cardsData).unshift({
                imgSrc: imageDataUrl,
                imgAlt: title,
                title: title
            });
            // Create new card element in DOM as before
            const newCard = document.createElement("div");
            newCard.className = "card";
            newCard.innerHTML = `
        <div class="card-img-container">
          <img class="card-img" src="${imageDataUrl}" alt="${title}" />
        </div>
        <div class="card-description">
          <p class="card-title">${title}</p>
           <div class="like">
            <svg
              class="like-icon"
              role="button"
              tabindex="0"
              width="23"
              height="20"
              viewBox="0 0 23 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-label="Like button"
            >
              <path
                d="M15.9512 1.05664C17.3161 0.856584 18.8067 1.15981 20.1602 2.32812L20.4287 2.57324C22.6597 4.72264 22.3285 8.02556 20.5967 9.89355L20.4248 10.0693L11.5 18.6025L2.57422 10.0693H2.5752C0.754421 8.29659 0.296669 5.00618 2.36328 2.78516L2.57129 2.57324C3.99417 1.20243 5.593 0.843258 7.04883 1.05664C8.5402 1.27524 9.89546 2.09997 10.7266 3.11523L11.5 4.06055L12.2734 3.11523C13.1045 2.09997 14.4598 1.27524 15.9512 1.05664Z"
                stroke="#212121"
                stroke-width="2"
              />
            </svg>
          </div>
        </div>
      `;
            document.querySelector(".container").prepend(newCard);
            const newImg = newCard.querySelector(".card-img");
            // No need to call setupPreview() here because
            // the click event listener is delegated by previewableCards()
            modal.close();
            postForm.reset();
            // Reset preview box
            uploadPreview.classList.add("hidden");
            uploadPreview.src = "";
            uploadText.classList.remove("hidden");
        };
        reader.readAsDataURL(postImage.files[0]);
    });
}

},{"./cards.js":"lJW7e","@parcel/transformer-js/src/esmodule-helpers.js":"jnFvT"}]},["9rd3c","3y59u"], "3y59u", "parcelRequirec6bb", {}, "./", "/")

//# sourceMappingURL=altschool-circle1-insta-spot-assignment-02.5489bde0.js.map
