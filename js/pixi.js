/*!
 * pixi.js - v7.3.1
 * Compiled Fri, 22 Sep 2023 18:50:32 UTC
 *
 * pixi.js is licensed under the MIT License.
 * http://www.opensource.org/licenses/mit-license
 */
var PIXI = function(_) {
    "use strict";
    var _e = (i => (i[i.WEBGL_LEGACY = 0] = "WEBGL_LEGACY", i[i.WEBGL = 1] = "WEBGL", i[i.WEBGL2 = 2] = "WEBGL2", i))(_e || {}),
      or = (i => (i[i.UNKNOWN = 0] = "UNKNOWN", i[i.WEBGL = 1] = "WEBGL", i[i.CANVAS = 2] = "CANVAS", i))(or || {}),
      Zs = (i => (i[i.COLOR = 16384] = "COLOR", i[i.DEPTH = 256] = "DEPTH", i[i.STENCIL = 1024] = "STENCIL", i))(Zs || {}),
      H = (i => (i[i.NORMAL = 0] = "NORMAL", i[i.ADD = 1] = "ADD", i[i.MULTIPLY = 2] = "MULTIPLY", i[i.SCREEN = 3] = "SCREEN", i[i.OVERLAY = 4] = "OVERLAY", i[i.DARKEN = 5] = "DARKEN", i[i.LIGHTEN = 6] = "LIGHTEN", i[i.COLOR_DODGE = 7] = "COLOR_DODGE", i[i.COLOR_BURN = 8] = "COLOR_BURN", i[i.HARD_LIGHT = 9] = "HARD_LIGHT", i[i.SOFT_LIGHT = 10] = "SOFT_LIGHT", i[i.DIFFERENCE = 11] = "DIFFERENCE", i[i.EXCLUSION = 12] = "EXCLUSION", i[i.HUE = 13] = "HUE", i[i.SATURATION = 14] = "SATURATION", i[i.COLOR = 15] = "COLOR", i[i.LUMINOSITY = 16] = "LUMINOSITY", i[i.NORMAL_NPM = 17] = "NORMAL_NPM", i[i.ADD_NPM = 18] = "ADD_NPM", i[i.SCREEN_NPM = 19] = "SCREEN_NPM", i[i.NONE = 20] = "NONE", i[i.SRC_OVER = 0] = "SRC_OVER", i[i.SRC_IN = 21] = "SRC_IN", i[i.SRC_OUT = 22] = "SRC_OUT", i[i.SRC_ATOP = 23] = "SRC_ATOP", i[i.DST_OVER = 24] = "DST_OVER", i[i.DST_IN = 25] = "DST_IN", i[i.DST_OUT = 26] = "DST_OUT", i[i.DST_ATOP = 27] = "DST_ATOP", i[i.ERASE = 26] = "ERASE", i[i.SUBTRACT = 28] = "SUBTRACT", i[i.XOR = 29] = "XOR", i))(H || {}),
      Lt = (i => (i[i.POINTS = 0] = "POINTS", i[i.LINES = 1] = "LINES", i[i.LINE_LOOP = 2] = "LINE_LOOP", i[i.LINE_STRIP = 3] = "LINE_STRIP", i[i.TRIANGLES = 4] = "TRIANGLES", i[i.TRIANGLE_STRIP = 5] = "TRIANGLE_STRIP", i[i.TRIANGLE_FAN = 6] = "TRIANGLE_FAN", i))(Lt || {}),
      A = (i => (i[i.RGBA = 6408] = "RGBA", i[i.RGB = 6407] = "RGB", i[i.RG = 33319] = "RG", i[i.RED = 6403] = "RED", i[i.RGBA_INTEGER = 36249] = "RGBA_INTEGER", i[i.RGB_INTEGER = 36248] = "RGB_INTEGER", i[i.RG_INTEGER = 33320] = "RG_INTEGER", i[i.RED_INTEGER = 36244] = "RED_INTEGER", i[i.ALPHA = 6406] = "ALPHA", i[i.LUMINANCE = 6409] = "LUMINANCE", i[i.LUMINANCE_ALPHA = 6410] = "LUMINANCE_ALPHA", i[i.DEPTH_COMPONENT = 6402] = "DEPTH_COMPONENT", i[i.DEPTH_STENCIL = 34041] = "DEPTH_STENCIL", i))(A || {}),
      Ie = (i => (i[i.TEXTURE_2D = 3553] = "TEXTURE_2D", i[i.TEXTURE_CUBE_MAP = 34067] = "TEXTURE_CUBE_MAP", i[i.TEXTURE_2D_ARRAY = 35866] = "TEXTURE_2D_ARRAY", i[i.TEXTURE_CUBE_MAP_POSITIVE_X = 34069] = "TEXTURE_CUBE_MAP_POSITIVE_X", i[i.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070] = "TEXTURE_CUBE_MAP_NEGATIVE_X", i[i.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071] = "TEXTURE_CUBE_MAP_POSITIVE_Y", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072] = "TEXTURE_CUBE_MAP_NEGATIVE_Y", i[i.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073] = "TEXTURE_CUBE_MAP_POSITIVE_Z", i[i.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074] = "TEXTURE_CUBE_MAP_NEGATIVE_Z", i))(Ie || {}),
      k = (i => (i[i.UNSIGNED_BYTE = 5121] = "UNSIGNED_BYTE", i[i.UNSIGNED_SHORT = 5123] = "UNSIGNED_SHORT", i[i.UNSIGNED_SHORT_5_6_5 = 33635] = "UNSIGNED_SHORT_5_6_5", i[i.UNSIGNED_SHORT_4_4_4_4 = 32819] = "UNSIGNED_SHORT_4_4_4_4", i[i.UNSIGNED_SHORT_5_5_5_1 = 32820] = "UNSIGNED_SHORT_5_5_5_1", i[i.UNSIGNED_INT = 5125] = "UNSIGNED_INT", i[i.UNSIGNED_INT_10F_11F_11F_REV = 35899] = "UNSIGNED_INT_10F_11F_11F_REV", i[i.UNSIGNED_INT_2_10_10_10_REV = 33640] = "UNSIGNED_INT_2_10_10_10_REV", i[i.UNSIGNED_INT_24_8 = 34042] = "UNSIGNED_INT_24_8", i[i.UNSIGNED_INT_5_9_9_9_REV = 35902] = "UNSIGNED_INT_5_9_9_9_REV", i[i.BYTE = 5120] = "BYTE", i[i.SHORT = 5122] = "SHORT", i[i.INT = 5124] = "INT", i[i.FLOAT = 5126] = "FLOAT", i[i.FLOAT_32_UNSIGNED_INT_24_8_REV = 36269] = "FLOAT_32_UNSIGNED_INT_24_8_REV", i[i.HALF_FLOAT = 36193] = "HALF_FLOAT", i))(k || {}),
      D = (i => (i[i.FLOAT = 0] = "FLOAT", i[i.INT = 1] = "INT", i[i.UINT = 2] = "UINT", i))(D || {}),
      zt = (i => (i[i.NEAREST = 0] = "NEAREST", i[i.LINEAR = 1] = "LINEAR", i))(zt || {}),
      Wt = (i => (i[i.CLAMP = 33071] = "CLAMP", i[i.REPEAT = 10497] = "REPEAT", i[i.MIRRORED_REPEAT = 33648] = "MIRRORED_REPEAT", i))(Wt || {}),
      Ut = (i => (i[i.OFF = 0] = "OFF", i[i.POW2 = 1] = "POW2", i[i.ON = 2] = "ON", i[i.ON_MANUAL = 3] = "ON_MANUAL", i))(Ut || {}),
      bt = (i => (i[i.NPM = 0] = "NPM", i[i.UNPACK = 1] = "UNPACK", i[i.PMA = 2] = "PMA", i[i.NO_PREMULTIPLIED_ALPHA = 0] = "NO_PREMULTIPLIED_ALPHA", i[i.PREMULTIPLY_ON_UPLOAD = 1] = "PREMULTIPLY_ON_UPLOAD", i[i.PREMULTIPLIED_ALPHA = 2] = "PREMULTIPLIED_ALPHA", i))(bt || {}),
      kt = (i => (i[i.NO = 0] = "NO", i[i.YES = 1] = "YES", i[i.AUTO = 2] = "AUTO", i[i.BLEND = 0] = "BLEND", i[i.CLEAR = 1] = "CLEAR", i[i.BLIT = 2] = "BLIT", i))(kt || {}),
      Qs = (i => (i[i.AUTO = 0] = "AUTO", i[i.MANUAL = 1] = "MANUAL", i))(Qs || {}),
      At = (i => (i.LOW = "lowp", i.MEDIUM = "mediump", i.HIGH = "highp", i))(At || {}),
      ht = (i => (i[i.NONE = 0] = "NONE", i[i.SCISSOR = 1] = "SCISSOR", i[i.STENCIL = 2] = "STENCIL", i[i.SPRITE = 3] = "SPRITE", i[i.COLOR = 4] = "COLOR", i))(ht || {}),
      na = (i => (i[i.RED = 1] = "RED", i[i.GREEN = 2] = "GREEN", i[i.BLUE = 4] = "BLUE", i[i.ALPHA = 8] = "ALPHA", i))(na || {}),
      at = (i => (i[i.NONE = 0] = "NONE", i[i.LOW = 2] = "LOW", i[i.MEDIUM = 4] = "MEDIUM", i[i.HIGH = 8] = "HIGH", i))(at || {}),
      Gt = (i => (i[i.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER", i[i.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", i[i.UNIFORM_BUFFER = 35345] = "UNIFORM_BUFFER", i))(Gt || {});
    const aa = {
        createCanvas: (i, t) => {
          const e = document.createElement("canvas");
          return e.width = i, e.height = t, e
        },
        getCanvasRenderingContext2D: () => CanvasRenderingContext2D,
        getWebGLRenderingContext: () => WebGLRenderingContext,
        getNavigator: () => navigator,
        getBaseUrl: () => {
          var i;
          return (i = document.baseURI) != null ? i : window.location.href
        },
        getFontFaceSet: () => document.fonts,
        fetch: (i, t) => fetch(i, t),
        parseXML: i => new DOMParser().parseFromString(i, "text/xml")
      },
      O = {
        ADAPTER: aa,
        RESOLUTION: 1,
        CREATE_IMAGE_BITMAP: !1,
        ROUND_PIXELS: !1
      };
    var hr = /iPhone/i,
      oa = /iPod/i,
      ha = /iPad/i,
      la = /\biOS-universal(?:.+)Mac\b/i,
      lr = /\bAndroid(?:.+)Mobile\b/i,
      ua = /Android/i,
      $e = /(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i,
      Js = /Silk/i,
      ie = /Windows Phone/i,
      ca = /\bWindows(?:.+)ARM\b/i,
      da = /BlackBerry/i,
      fa = /BB10/i,
      pa = /Opera Mini/i,
      ma = /\b(CriOS|Chrome)(?:.+)Mobile/i,
      ga = /Mobile(?:.+)Firefox\b/i,
      _a = function(i) {
        return typeof i != "undefined" && i.platform === "MacIntel" && typeof i.maxTouchPoints == "number" && i.maxTouchPoints > 1 && typeof MSStream == "undefined"
      };
  
    function du(i) {
      return function(t) {
        return t.test(i)
      }
    }
  
    function va(i) {
      var t = {
        userAgent: "",
        platform: "",
        maxTouchPoints: 0
      };
      !i && typeof navigator != "undefined" ? t = {
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        maxTouchPoints: navigator.maxTouchPoints || 0
      } : typeof i == "string" ? t.userAgent = i : i && i.userAgent && (t = {
        userAgent: i.userAgent,
        platform: i.platform,
        maxTouchPoints: i.maxTouchPoints || 0
      });
      var e = t.userAgent,
        s = e.split("[FBAN");
      typeof s[1] != "undefined" && (e = s[0]), s = e.split("Twitter"), typeof s[1] != "undefined" && (e = s[0]);
      var r = du(e),
        n = {
          apple: {
            phone: r(hr) && !r(ie),
            ipod: r(oa),
            tablet: !r(hr) && (r(ha) || _a(t)) && !r(ie),
            universal: r(la),
            device: (r(hr) || r(oa) || r(ha) || r(la) || _a(t)) && !r(ie)
          },
          amazon: {
            phone: r($e),
            tablet: !r($e) && r(Js),
            device: r($e) || r(Js)
          },
          android: {
            phone: !r(ie) && r($e) || !r(ie) && r(lr),
            tablet: !r(ie) && !r($e) && !r(lr) && (r(Js) || r(ua)),
            device: !r(ie) && (r($e) || r(Js) || r(lr) || r(ua)) || r(/\bokhttp\b/i)
          },
          windows: {
            phone: r(ie),
            tablet: r(ca),
            device: r(ie) || r(ca)
          },
          other: {
            blackberry: r(da),
            blackberry10: r(fa),
            opera: r(pa),
            firefox: r(ga),
            chrome: r(ma),
            device: r(da) || r(fa) || r(pa) || r(ga) || r(ma)
          },
          any: !1,
          phone: !1,
          tablet: !1
        };
      return n.any = n.apple.device || n.android.device || n.windows.device || n.other.device, n.phone = n.apple.phone || n.android.phone || n.windows.phone, n.tablet = n.apple.tablet || n.android.tablet || n.windows.tablet, n
    }
    var ya;
    const $t = ((ya = va.default) != null ? ya : va)(globalThis.navigator);
    O.RETINA_PREFIX = /@([0-9\.]+)x/, O.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT = !1;
    var ur = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
  
    function He(i) {
      return i && i.__esModule && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
    }
  
    function Lm(i) {
      return i && Object.prototype.hasOwnProperty.call(i, "default") ? i.default : i
    }
  
    function Um(i) {
      return i && Object.prototype.hasOwnProperty.call(i, "default") && Object.keys(i).length === 1 ? i.default : i
    }
  
    function km(i) {
      if (i.__esModule) return i;
      var t = i.default;
      if (typeof t == "function") {
        var e = function s() {
          if (this instanceof s) {
            var r = [null];
            r.push.apply(r, arguments);
            var n = Function.bind.apply(t, r);
            return new n
          }
          return t.apply(this, arguments)
        };
        e.prototype = t.prototype
      } else e = {};
      return Object.defineProperty(e, "__esModule", {
        value: !0
      }), Object.keys(i).forEach(function(s) {
        var r = Object.getOwnPropertyDescriptor(i, s);
        Object.defineProperty(e, s, r.get ? r : {
          enumerable: !0,
          get: function() {
            return i[s]
          }
        })
      }), e
    }
    var cr = {
        exports: {}
      },
      Gm = cr.exports;
    (function(i) {
      "use strict";
      var t = Object.prototype.hasOwnProperty,
        e = "~";
  
      function s() {}
      Object.create && (s.prototype = Object.create(null), new s().__proto__ || (e = !1));
  
      function r(h, l, u) {
        this.fn = h, this.context = l, this.once = u || !1
      }
  
      function n(h, l, u, c, d) {
        if (typeof u != "function") throw new TypeError("The listener must be a function");
        var f = new r(u, c || h, d),
          p = e ? e + l : l;
        return h._events[p] ? h._events[p].fn ? h._events[p] = [h._events[p], f] : h._events[p].push(f) : (h._events[p] = f, h._eventsCount++), h
      }
  
      function a(h, l) {
        --h._eventsCount === 0 ? h._events = new s : delete h._events[l]
      }
  
      function o() {
        this._events = new s, this._eventsCount = 0
      }
      o.prototype.eventNames = function() {
        var l = [],
          u, c;
        if (this._eventsCount === 0) return l;
        for (c in u = this._events) t.call(u, c) && l.push(e ? c.slice(1) : c);
        return Object.getOwnPropertySymbols ? l.concat(Object.getOwnPropertySymbols(u)) : l
      }, o.prototype.listeners = function(l) {
        var u = e ? e + l : l,
          c = this._events[u];
        if (!c) return [];
        if (c.fn) return [c.fn];
        for (var d = 0, f = c.length, p = new Array(f); d < f; d++) p[d] = c[d].fn;
        return p
      }, o.prototype.listenerCount = function(l) {
        var u = e ? e + l : l,
          c = this._events[u];
        return c ? c.fn ? 1 : c.length : 0
      }, o.prototype.emit = function(l, u, c, d, f, p) {
        var m = e ? e + l : l;
        if (!this._events[m]) return !1;
        var g = this._events[m],
          y = arguments.length,
          b, v;
        if (g.fn) {
          switch (g.once && this.removeListener(l, g.fn, void 0, !0), y) {
            case 1:
              return g.fn.call(g.context), !0;
            case 2:
              return g.fn.call(g.context, u), !0;
            case 3:
              return g.fn.call(g.context, u, c), !0;
            case 4:
              return g.fn.call(g.context, u, c, d), !0;
            case 5:
              return g.fn.call(g.context, u, c, d, f), !0;
            case 6:
              return g.fn.call(g.context, u, c, d, f, p), !0
          }
          for (v = 1, b = new Array(y - 1); v < y; v++) b[v - 1] = arguments[v];
          g.fn.apply(g.context, b)
        } else {
          var x = g.length,
            E;
          for (v = 0; v < x; v++) switch (g[v].once && this.removeListener(l, g[v].fn, void 0, !0), y) {
            case 1:
              g[v].fn.call(g[v].context);
              break;
            case 2:
              g[v].fn.call(g[v].context, u);
              break;
            case 3:
              g[v].fn.call(g[v].context, u, c);
              break;
            case 4:
              g[v].fn.call(g[v].context, u, c, d);
              break;
            default:
              if (!b)
                for (E = 1, b = new Array(y - 1); E < y; E++) b[E - 1] = arguments[E];
              g[v].fn.apply(g[v].context, b)
          }
        }
        return !0
      }, o.prototype.on = function(l, u, c) {
        return n(this, l, u, c, !1)
      }, o.prototype.once = function(l, u, c) {
        return n(this, l, u, c, !0)
      }, o.prototype.removeListener = function(l, u, c, d) {
        var f = e ? e + l : l;
        if (!this._events[f]) return this;
        if (!u) return a(this, f), this;
        var p = this._events[f];
        if (p.fn) p.fn === u && (!d || p.once) && (!c || p.context === c) && a(this, f);
        else {
          for (var m = 0, g = [], y = p.length; m < y; m++)(p[m].fn !== u || d && !p[m].once || c && p[m].context !== c) && g.push(p[m]);
          g.length ? this._events[f] = g.length === 1 ? g[0] : g : a(this, f)
        }
        return this
      }, o.prototype.removeAllListeners = function(l) {
        var u;
        return l ? (u = e ? e + l : l, this._events[u] && a(this, u)) : (this._events = new s, this._eventsCount = 0), this
      }, o.prototype.off = o.prototype.removeListener, o.prototype.addListener = o.prototype.on, o.prefixed = e, o.EventEmitter = o, i.exports = o
    })(cr);
    var fu = cr.exports,
      Ve = He(fu),
      ti = {
        exports: {}
      },
      $m = ti.exports;
    ti.exports = ei;
    var Hm = ti.exports.default = ei;
  
    function ei(i, t, e) {
      e = e || 2;
      var s = t && t.length,
        r = s ? t[0] * e : i.length,
        n = xa(i, 0, r, e, !0),
        a = [];
      if (!n || n.next === n.prev) return a;
      var o, h, l, u, c, d, f;
      if (s && (n = vu(i, t, n, e)), i.length > 80 * e) {
        o = l = i[0], h = u = i[1];
        for (var p = e; p < r; p += e) c = i[p], d = i[p + 1], c < o && (o = c), d < h && (h = d), c > l && (l = c), d > u && (u = d);
        f = Math.max(l - o, u - h), f = f !== 0 ? 32767 / f : 0
      }
      return ns(n, a, e, o, h, f, 0), a
    }
  
    function xa(i, t, e, s, r) {
      var n, a;
      if (r === pr(i, t, e, s) > 0)
        for (n = t; n < e; n += s) a = Ea(n, i[n], i[n + 1], a);
      else
        for (n = e - s; n >= t; n -= s) a = Ea(n, i[n], i[n + 1], a);
      return a && si(a, a.next) && (os(a), a = a.next), a
    }
  
    function Re(i, t) {
      if (!i) return i;
      t || (t = i);
      var e = i,
        s;
      do
        if (s = !1, !e.steiner && (si(e, e.next) || rt(e.prev, e, e.next) === 0)) {
          if (os(e), e = t = e.prev, e === e.next) break;
          s = !0
        } else e = e.next; while (s || e !== t);
      return t
    }
  
    function ns(i, t, e, s, r, n, a) {
      if (i) {
        !a && n && Eu(i, s, r, n);
        for (var o = i, h, l; i.prev !== i.next;) {
          if (h = i.prev, l = i.next, n ? mu(i, s, r, n) : pu(i)) {
            t.push(h.i / e | 0), t.push(i.i / e | 0), t.push(l.i / e | 0), os(i), i = l.next, o = l.next;
            continue
          }
          if (i = l, i === o) {
            a ? a === 1 ? (i = gu(Re(i), t, e), ns(i, t, e, s, r, n, 2)) : a === 2 && _u(i, t, e, s, r, n) : ns(Re(i), t, e, s, r, n, 1);
            break
          }
        }
      }
    }
  
    function pu(i) {
      var t = i.prev,
        e = i,
        s = i.next;
      if (rt(t, e, s) >= 0) return !1;
      for (var r = t.x, n = e.x, a = s.x, o = t.y, h = e.y, l = s.y, u = r < n ? r < a ? r : a : n < a ? n : a, c = o < h ? o < l ? o : l : h < l ? h : l, d = r > n ? r > a ? r : a : n > a ? n : a, f = o > h ? o > l ? o : l : h > l ? h : l, p = s.next; p !== t;) {
        if (p.x >= u && p.x <= d && p.y >= c && p.y <= f && Xe(r, o, n, h, a, l, p.x, p.y) && rt(p.prev, p, p.next) >= 0) return !1;
        p = p.next
      }
      return !0
    }
  
    function mu(i, t, e, s) {
      var r = i.prev,
        n = i,
        a = i.next;
      if (rt(r, n, a) >= 0) return !1;
      for (var o = r.x, h = n.x, l = a.x, u = r.y, c = n.y, d = a.y, f = o < h ? o < l ? o : l : h < l ? h : l, p = u < c ? u < d ? u : d : c < d ? c : d, m = o > h ? o > l ? o : l : h > l ? h : l, g = u > c ? u > d ? u : d : c > d ? c : d, y = dr(f, p, t, e, s), b = dr(m, g, t, e, s), v = i.prevZ, x = i.nextZ; v && v.z >= y && x && x.z <= b;) {
        if (v.x >= f && v.x <= m && v.y >= p && v.y <= g && v !== r && v !== a && Xe(o, u, h, c, l, d, v.x, v.y) && rt(v.prev, v, v.next) >= 0 || (v = v.prevZ, x.x >= f && x.x <= m && x.y >= p && x.y <= g && x !== r && x !== a && Xe(o, u, h, c, l, d, x.x, x.y) && rt(x.prev, x, x.next) >= 0)) return !1;
        x = x.nextZ
      }
      for (; v && v.z >= y;) {
        if (v.x >= f && v.x <= m && v.y >= p && v.y <= g && v !== r && v !== a && Xe(o, u, h, c, l, d, v.x, v.y) && rt(v.prev, v, v.next) >= 0) return !1;
        v = v.prevZ
      }
      for (; x && x.z <= b;) {
        if (x.x >= f && x.x <= m && x.y >= p && x.y <= g && x !== r && x !== a && Xe(o, u, h, c, l, d, x.x, x.y) && rt(x.prev, x, x.next) >= 0) return !1;
        x = x.nextZ
      }
      return !0
    }
  
    function gu(i, t, e) {
      var s = i;
      do {
        var r = s.prev,
          n = s.next.next;
        !si(r, n) && ba(r, s, s.next, n) && as(r, n) && as(n, r) && (t.push(r.i / e | 0), t.push(s.i / e | 0), t.push(n.i / e | 0), os(s), os(s.next), s = i = n), s = s.next
      } while (s !== i);
      return Re(s)
    }
  
    function _u(i, t, e, s, r, n) {
      var a = i;
      do {
        for (var o = a.next.next; o !== a.prev;) {
          if (a.i !== o.i && Su(a, o)) {
            var h = Ta(a, o);
            a = Re(a, a.next), h = Re(h, h.next), ns(a, t, e, s, r, n, 0), ns(h, t, e, s, r, n, 0);
            return
          }
          o = o.next
        }
        a = a.next
      } while (a !== i)
    }
  
    function vu(i, t, e, s) {
      var r = [],
        n, a, o, h, l;
      for (n = 0, a = t.length; n < a; n++) o = t[n] * s, h = n < a - 1 ? t[n + 1] * s : i.length, l = xa(i, o, h, s, !1), l === l.next && (l.steiner = !0), r.push(wu(l));
      for (r.sort(yu), n = 0; n < r.length; n++) e = xu(r[n], e);
      return e
    }
  
    function yu(i, t) {
      return i.x - t.x
    }
  
    function xu(i, t) {
      var e = bu(i, t);
      if (!e) return t;
      var s = Ta(e, i);
      return Re(s, s.next), Re(e, e.next)
    }
  
    function bu(i, t) {
      var e = t,
        s = i.x,
        r = i.y,
        n = -1 / 0,
        a;
      do {
        if (r <= e.y && r >= e.next.y && e.next.y !== e.y) {
          var o = e.x + (r - e.y) * (e.next.x - e.x) / (e.next.y - e.y);
          if (o <= s && o > n && (n = o, a = e.x < e.next.x ? e : e.next, o === s)) return a
        }
        e = e.next
      } while (e !== t);
      if (!a) return null;
      var h = a,
        l = a.x,
        u = a.y,
        c = 1 / 0,
        d;
      e = a;
      do s >= e.x && e.x >= l && s !== e.x && Xe(r < u ? s : n, r, l, u, r < u ? n : s, r, e.x, e.y) && (d = Math.abs(r - e.y) / (s - e.x), as(e, i) && (d < c || d === c && (e.x > a.x || e.x === a.x && Tu(a, e))) && (a = e, c = d)), e = e.next; while (e !== h);
      return a
    }
  
    function Tu(i, t) {
      return rt(i.prev, i, t.prev) < 0 && rt(t.next, i, i.next) < 0
    }
  
    function Eu(i, t, e, s) {
      var r = i;
      do r.z === 0 && (r.z = dr(r.x, r.y, t, e, s)), r.prevZ = r.prev, r.nextZ = r.next, r = r.next; while (r !== i);
      r.prevZ.nextZ = null, r.prevZ = null, Au(r)
    }
  
    function Au(i) {
      var t, e, s, r, n, a, o, h, l = 1;
      do {
        for (e = i, i = null, n = null, a = 0; e;) {
          for (a++, s = e, o = 0, t = 0; t < l && (o++, s = s.nextZ, !!s); t++);
          for (h = l; o > 0 || h > 0 && s;) o !== 0 && (h === 0 || !s || e.z <= s.z) ? (r = e, e = e.nextZ, o--) : (r = s, s = s.nextZ, h--), n ? n.nextZ = r : i = r, r.prevZ = n, n = r;
          e = s
        }
        n.nextZ = null, l *= 2
      } while (a > 1);
      return i
    }
  
    function dr(i, t, e, s, r) {
      return i = (i - e) * r | 0, t = (t - s) * r | 0, i = (i | i << 8) & 16711935, i = (i | i << 4) & 252645135, i = (i | i << 2) & 858993459, i = (i | i << 1) & 1431655765, t = (t | t << 8) & 16711935, t = (t | t << 4) & 252645135, t = (t | t << 2) & 858993459, t = (t | t << 1) & 1431655765, i | t << 1
    }
  
    function wu(i) {
      var t = i,
        e = i;
      do(t.x < e.x || t.x === e.x && t.y < e.y) && (e = t), t = t.next; while (t !== i);
      return e
    }
  
    function Xe(i, t, e, s, r, n, a, o) {
      return (r - a) * (t - o) >= (i - a) * (n - o) && (i - a) * (s - o) >= (e - a) * (t - o) && (e - a) * (n - o) >= (r - a) * (s - o)
    }
  
    function Su(i, t) {
      return i.next.i !== t.i && i.prev.i !== t.i && !Iu(i, t) && (as(i, t) && as(t, i) && Ru(i, t) && (rt(i.prev, i, t.prev) || rt(i, t.prev, t)) || si(i, t) && rt(i.prev, i, i.next) > 0 && rt(t.prev, t, t.next) > 0)
    }
  
    function rt(i, t, e) {
      return (t.y - i.y) * (e.x - t.x) - (t.x - i.x) * (e.y - t.y)
    }
  
    function si(i, t) {
      return i.x === t.x && i.y === t.y
    }
  
    function ba(i, t, e, s) {
      var r = ri(rt(i, t, e)),
        n = ri(rt(i, t, s)),
        a = ri(rt(e, s, i)),
        o = ri(rt(e, s, t));
      return !!(r !== n && a !== o || r === 0 && ii(i, e, t) || n === 0 && ii(i, s, t) || a === 0 && ii(e, i, s) || o === 0 && ii(e, t, s))
    }
  
    function ii(i, t, e) {
      return t.x <= Math.max(i.x, e.x) && t.x >= Math.min(i.x, e.x) && t.y <= Math.max(i.y, e.y) && t.y >= Math.min(i.y, e.y)
    }
  
    function ri(i) {
      return i > 0 ? 1 : i < 0 ? -1 : 0
    }
  
    function Iu(i, t) {
      var e = i;
      do {
        if (e.i !== i.i && e.next.i !== i.i && e.i !== t.i && e.next.i !== t.i && ba(e, e.next, i, t)) return !0;
        e = e.next
      } while (e !== i);
      return !1
    }
  
    function as(i, t) {
      return rt(i.prev, i, i.next) < 0 ? rt(i, t, i.next) >= 0 && rt(i, i.prev, t) >= 0 : rt(i, t, i.prev) < 0 || rt(i, i.next, t) < 0
    }
  
    function Ru(i, t) {
      var e = i,
        s = !1,
        r = (i.x + t.x) / 2,
        n = (i.y + t.y) / 2;
      do e.y > n != e.next.y > n && e.next.y !== e.y && r < (e.next.x - e.x) * (n - e.y) / (e.next.y - e.y) + e.x && (s = !s), e = e.next; while (e !== i);
      return s
    }
  
    function Ta(i, t) {
      var e = new fr(i.i, i.x, i.y),
        s = new fr(t.i, t.x, t.y),
        r = i.next,
        n = t.prev;
      return i.next = t, t.prev = i, e.next = r, r.prev = e, s.next = e, e.prev = s, n.next = s, s.prev = n, s
    }
  
    function Ea(i, t, e, s) {
      var r = new fr(i, t, e);
      return s ? (r.next = s.next, r.prev = s, s.next.prev = r, s.next = r) : (r.prev = r, r.next = r), r
    }
  
    function os(i) {
      i.next.prev = i.prev, i.prev.next = i.next, i.prevZ && (i.prevZ.nextZ = i.nextZ), i.nextZ && (i.nextZ.prevZ = i.prevZ)
    }
  
    function fr(i, t, e) {
      this.i = i, this.x = t, this.y = e, this.prev = null, this.next = null, this.z = 0, this.prevZ = null, this.nextZ = null, this.steiner = !1
    }
    ei.deviation = function(i, t, e, s) {
      var r = t && t.length,
        n = r ? t[0] * e : i.length,
        a = Math.abs(pr(i, 0, n, e));
      if (r)
        for (var o = 0, h = t.length; o < h; o++) {
          var l = t[o] * e,
            u = o < h - 1 ? t[o + 1] * e : i.length;
          a -= Math.abs(pr(i, l, u, e))
        }
      var c = 0;
      for (o = 0; o < s.length; o += 3) {
        var d = s[o] * e,
          f = s[o + 1] * e,
          p = s[o + 2] * e;
        c += Math.abs((i[d] - i[p]) * (i[f + 1] - i[d + 1]) - (i[d] - i[f]) * (i[p + 1] - i[d + 1]))
      }
      return a === 0 && c === 0 ? 0 : Math.abs((c - a) / a)
    };
  
    function pr(i, t, e, s) {
      for (var r = 0, n = t, a = e - s; n < e; n += s) r += (i[a] - i[n]) * (i[n + 1] + i[a + 1]), a = n;
      return r
    }
    ei.flatten = function(i) {
      for (var t = i[0][0].length, e = {
          vertices: [],
          holes: [],
          dimensions: t
        }, s = 0, r = 0; r < i.length; r++) {
        for (var n = 0; n < i[r].length; n++)
          for (var a = 0; a < t; a++) e.vertices.push(i[r][n][a]);
        r > 0 && (s += i[r - 1].length, e.holes.push(s))
      }
      return e
    };
    var Cu = ti.exports,
      Aa = He(Cu),
      hs = {},
      ni = {
        exports: {}
      }; /*! https://mths.be/punycode v1.3.2 by @mathias */
    var Vm = ni.exports;
    (function(i, t) {
      (function(e) {
        var s = t && !t.nodeType && t,
          r = i && !i.nodeType && i,
          n = typeof ur == "object" && ur;
        (n.global === n || n.window === n || n.self === n) && (e = n);
        var a, o = 2147483647,
          h = 36,
          l = 1,
          u = 26,
          c = 38,
          d = 700,
          f = 72,
          p = 128,
          m = "-",
          g = /^xn--/,
          y = /[^\x20-\x7E]/,
          b = /[\x2E\u3002\uFF0E\uFF61]/g,
          v = {
            overflow: "Overflow: input needs wider integers to process",
            "not-basic": "Illegal input >= 0x80 (not a basic code point)",
            "invalid-input": "Invalid input"
          },
          x = h - l,
          E = Math.floor,
          M = String.fromCharCode,
          S;
  
        function w(P) {
          throw RangeError(v[P])
        }
  
        function F(P, C) {
          for (var K = P.length, Q = []; K--;) Q[K] = C(P[K]);
          return Q
        }
  
        function G(P, C) {
          var K = P.split("@"),
            Q = "";
          K.length > 1 && (Q = K[0] + "@", P = K[1]), P = P.replace(b, ".");
          var J = P.split("."),
            mt = F(J, C).join(".");
          return Q + mt
        }
  
        function Y(P) {
          for (var C = [], K = 0, Q = P.length, J, mt; K < Q;) J = P.charCodeAt(K++), J >= 55296 && J <= 56319 && K < Q ? (mt = P.charCodeAt(K++), (mt & 64512) == 56320 ? C.push(((J & 1023) << 10) + (mt & 1023) + 65536) : (C.push(J), K--)) : C.push(J);
          return C
        }
  
        function N(P) {
          return F(P, function(C) {
            var K = "";
            return C > 65535 && (C -= 65536, K += M(C >>> 10 & 1023 | 55296), C = 56320 | C & 1023), K += M(C), K
          }).join("")
        }
  
        function T(P) {
          return P - 48 < 10 ? P - 22 : P - 65 < 26 ? P - 65 : P - 97 < 26 ? P - 97 : h
        }
  
        function I(P, C) {
          return P + 22 + 75 * (P < 26) - ((C != 0) << 5)
        }
  
        function $(P, C, K) {
          var Q = 0;
          for (P = K ? E(P / d) : P >> 1, P += E(P / C); P > x * u >> 1; Q += h) P = E(P / x);
          return E(Q + (x + 1) * P / (P + c))
        }
  
        function W(P) {
          var C = [],
            K = P.length,
            Q, J = 0,
            mt = p,
            lt = f,
            gt, xt, Ct, _t, it, ut, ct, te, ee;
          for (gt = P.lastIndexOf(m), gt < 0 && (gt = 0), xt = 0; xt < gt; ++xt) P.charCodeAt(xt) >= 128 && w("not-basic"), C.push(P.charCodeAt(xt));
          for (Ct = gt > 0 ? gt + 1 : 0; Ct < K;) {
            for (_t = J, it = 1, ut = h; Ct >= K && w("invalid-input"), ct = T(P.charCodeAt(Ct++)), (ct >= h || ct > E((o - J) / it)) && w("overflow"), J += ct * it, te = ut <= lt ? l : ut >= lt + u ? u : ut - lt, !(ct < te); ut += h) ee = h - te, it > E(o / ee) && w("overflow"), it *= ee;
            Q = C.length + 1, lt = $(J - _t, Q, _t == 0), E(J / Q) > o - mt && w("overflow"), mt += E(J / Q), J %= Q, C.splice(J++, 0, mt)
          }
          return N(C)
        }
  
        function V(P) {
          var C, K, Q, J, mt, lt, gt, xt, Ct, _t, it, ut = [],
            ct, te, ee, js;
          for (P = Y(P), ct = P.length, C = p, K = 0, mt = f, lt = 0; lt < ct; ++lt) it = P[lt], it < 128 && ut.push(M(it));
          for (Q = J = ut.length, J && ut.push(m); Q < ct;) {
            for (gt = o, lt = 0; lt < ct; ++lt) it = P[lt], it >= C && it < gt && (gt = it);
            for (te = Q + 1, gt - C > E((o - K) / te) && w("overflow"), K += (gt - C) * te, C = gt, lt = 0; lt < ct; ++lt)
              if (it = P[lt], it < C && ++K > o && w("overflow"), it == C) {
                for (xt = K, Ct = h; _t = Ct <= mt ? l : Ct >= mt + u ? u : Ct - mt, !(xt < _t); Ct += h) js = xt - _t, ee = h - _t, ut.push(M(I(_t + js % ee, 0))), xt = E(js / ee);
                ut.push(M(I(xt, 0))), mt = $(K, te, Q == J), K = 0, ++Q
              }++ K, ++C
          }
          return ut.join("")
        }
  
        function z(P) {
          return G(P, function(C) {
            return g.test(C) ? W(C.slice(4).toLowerCase()) : C
          })
        }
  
        function ot(P) {
          return G(P, function(C) {
            return y.test(C) ? "xn--" + V(C) : C
          })
        }
        if (a = {
            version: "1.3.2",
            ucs2: {
              decode: Y,
              encode: N
            },
            decode: W,
            encode: V,
            toASCII: ot,
            toUnicode: z
          }, s && r)
          if (i.exports == s) r.exports = a;
          else
            for (S in a) a.hasOwnProperty(S) && (s[S] = a[S]);
        else e.punycode = a
      })(ur)
    })(ni, ni.exports);
    var wa = ni.exports,
      Xm = He(wa),
      Sa = {
        isString: function(i) {
          return typeof i == "string"
        },
        isObject: function(i) {
          return typeof i == "object" && i !== null
        },
        isNull: function(i) {
          return i === null
        },
        isNullOrUndefined: function(i) {
          return i == null
        }
      },
      jm = He(Sa),
      ls = {};
  
    function Pu(i, t) {
      return Object.prototype.hasOwnProperty.call(i, t)
    }
    var Ia = function(i, t, e, s) {
        t = t || "&", e = e || "=";
        var r = {};
        if (typeof i != "string" || i.length === 0) return r;
        var n = /\+/g;
        i = i.split(t);
        var a = 1e3;
        s && typeof s.maxKeys == "number" && (a = s.maxKeys);
        var o = i.length;
        a > 0 && o > a && (o = a);
        for (var h = 0; h < o; ++h) {
          var l = i[h].replace(n, "%20"),
            u = l.indexOf(e),
            c, d, f, p;
          u >= 0 ? (c = l.substr(0, u), d = l.substr(u + 1)) : (c = l, d = ""), f = decodeURIComponent(c), p = decodeURIComponent(d), Pu(r, f) ? Array.isArray(r[f]) ? r[f].push(p) : r[f] = [r[f], p] : r[f] = p
        }
        return r
      },
      zm = He(Ia),
      us = function(i) {
        switch (typeof i) {
          case "string":
            return i;
          case "boolean":
            return i ? "true" : "false";
          case "number":
            return isFinite(i) ? i : "";
          default:
            return ""
        }
      },
      Ra = function(i, t, e, s) {
        return t = t || "&", e = e || "=", i === null && (i = void 0), typeof i == "object" ? Object.keys(i).map(function(r) {
          var n = encodeURIComponent(us(r)) + e;
          return Array.isArray(i[r]) ? i[r].map(function(a) {
            return n + encodeURIComponent(us(a))
          }).join(t) : n + encodeURIComponent(us(i[r]))
        }).join(t) : s ? encodeURIComponent(us(s)) + e + encodeURIComponent(us(i)) : ""
      },
      Wm = He(Ra),
      Mu, Du, Ym = ls.decode = Du = ls.parse = Ia,
      qm = ls.encode = Mu = ls.stringify = Ra,
      Ou = wa,
      Yt = Sa,
      Bu = hs.parse = cs,
      Fu = hs.resolve = zu,
      Km = hs.resolveObject = Wu,
      Nu = hs.format = ju,
      Zm = hs.Url = Mt;
  
    function Mt() {
      this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
    }
    var Lu = /^([a-z0-9.+-]+:)/i,
      Uu = /:[0-9]*$/,
      ku = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,
      Gu = ["<", ">", '"', "`", " ", "\r", `
  `, "	"],
      $u = ["{", "}", "|", "\\", "^", "`"].concat(Gu),
      mr = ["'"].concat($u),
      Ca = ["%", "/", "?", ";", "#"].concat(mr),
      Pa = ["/", "?", "#"],
      Hu = 255,
      Ma = /^[+a-z0-9A-Z_-]{0,63}$/,
      Vu = /^([+a-z0-9A-Z_-]{0,63})(.*)$/,
      Xu = {
        javascript: !0,
        "javascript:": !0
      },
      gr = {
        javascript: !0,
        "javascript:": !0
      },
      je = {
        http: !0,
        https: !0,
        ftp: !0,
        gopher: !0,
        file: !0,
        "http:": !0,
        "https:": !0,
        "ftp:": !0,
        "gopher:": !0,
        "file:": !0
      },
      _r = ls;
  
    function cs(i, t, e) {
      if (i && Yt.isObject(i) && i instanceof Mt) return i;
      var s = new Mt;
      return s.parse(i, t, e), s
    }
    Mt.prototype.parse = function(i, t, e) {
      if (!Yt.isString(i)) throw new TypeError("Parameter 'url' must be a string, not " + typeof i);
      var s = i.indexOf("?"),
        r = s !== -1 && s < i.indexOf("#") ? "?" : "#",
        n = i.split(r),
        a = /\\/g;
      n[0] = n[0].replace(a, "/"), i = n.join(r);
      var o = i;
      if (o = o.trim(), !e && i.split("#").length === 1) {
        var h = ku.exec(o);
        if (h) return this.path = o, this.href = o, this.pathname = h[1], h[2] ? (this.search = h[2], t ? this.query = _r.parse(this.search.substr(1)) : this.query = this.search.substr(1)) : t && (this.search = "", this.query = {}), this
      }
      var l = Lu.exec(o);
      if (l) {
        l = l[0];
        var u = l.toLowerCase();
        this.protocol = u, o = o.substr(l.length)
      }
      if (e || l || o.match(/^\/\/[^@\/]+@[^@\/]+/)) {
        var c = o.substr(0, 2) === "//";
        c && !(l && gr[l]) && (o = o.substr(2), this.slashes = !0)
      }
      if (!gr[l] && (c || l && !je[l])) {
        for (var d = -1, f = 0; f < Pa.length; f++) {
          var p = o.indexOf(Pa[f]);
          p !== -1 && (d === -1 || p < d) && (d = p)
        }
        var m, g;
        d === -1 ? g = o.lastIndexOf("@") : g = o.lastIndexOf("@", d), g !== -1 && (m = o.slice(0, g), o = o.slice(g + 1), this.auth = decodeURIComponent(m)), d = -1;
        for (var f = 0; f < Ca.length; f++) {
          var p = o.indexOf(Ca[f]);
          p !== -1 && (d === -1 || p < d) && (d = p)
        }
        d === -1 && (d = o.length), this.host = o.slice(0, d), o = o.slice(d), this.parseHost(), this.hostname = this.hostname || "";
        var y = this.hostname[0] === "[" && this.hostname[this.hostname.length - 1] === "]";
        if (!y)
          for (var b = this.hostname.split(/\./), f = 0, v = b.length; f < v; f++) {
            var x = b[f];
            if (x && !x.match(Ma)) {
              for (var E = "", M = 0, S = x.length; M < S; M++) x.charCodeAt(M) > 127 ? E += "x" : E += x[M];
              if (!E.match(Ma)) {
                var w = b.slice(0, f),
                  F = b.slice(f + 1),
                  G = x.match(Vu);
                G && (w.push(G[1]), F.unshift(G[2])), F.length && (o = "/" + F.join(".") + o), this.hostname = w.join(".");
                break
              }
            }
          }
        this.hostname.length > Hu ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), y || (this.hostname = Ou.toASCII(this.hostname));
        var Y = this.port ? ":" + this.port : "",
          N = this.hostname || "";
        this.host = N + Y, this.href += this.host, y && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), o[0] !== "/" && (o = "/" + o))
      }
      if (!Xu[u])
        for (var f = 0, v = mr.length; f < v; f++) {
          var T = mr[f];
          if (o.indexOf(T) !== -1) {
            var I = encodeURIComponent(T);
            I === T && (I = escape(T)), o = o.split(T).join(I)
          }
        }
      var $ = o.indexOf("#");
      $ !== -1 && (this.hash = o.substr($), o = o.slice(0, $));
      var W = o.indexOf("?");
      if (W !== -1 ? (this.search = o.substr(W), this.query = o.substr(W + 1), t && (this.query = _r.parse(this.query)), o = o.slice(0, W)) : t && (this.search = "", this.query = {}), o && (this.pathname = o), je[u] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
        var Y = this.pathname || "",
          V = this.search || "";
        this.path = Y + V
      }
      return this.href = this.format(), this
    };
  
    function ju(i) {
      return Yt.isString(i) && (i = cs(i)), i instanceof Mt ? i.format() : Mt.prototype.format.call(i)
    }
    Mt.prototype.format = function() {
      var i = this.auth || "";
      i && (i = encodeURIComponent(i), i = i.replace(/%3A/i, ":"), i += "@");
      var t = this.protocol || "",
        e = this.pathname || "",
        s = this.hash || "",
        r = !1,
        n = "";
      this.host ? r = i + this.host : this.hostname && (r = i + (this.hostname.indexOf(":") === -1 ? this.hostname : "[" + this.hostname + "]"), this.port && (r += ":" + this.port)), this.query && Yt.isObject(this.query) && Object.keys(this.query).length && (n = _r.stringify(this.query));
      var a = this.search || n && "?" + n || "";
      return t && t.substr(-1) !== ":" && (t += ":"), this.slashes || (!t || je[t]) && r !== !1 ? (r = "//" + (r || ""), e && e.charAt(0) !== "/" && (e = "/" + e)) : r || (r = ""), s && s.charAt(0) !== "#" && (s = "#" + s), a && a.charAt(0) !== "?" && (a = "?" + a), e = e.replace(/[?#]/g, function(o) {
        return encodeURIComponent(o)
      }), a = a.replace("#", "%23"), t + r + e + a + s
    };
  
    function zu(i, t) {
      return cs(i, !1, !0).resolve(t)
    }
    Mt.prototype.resolve = function(i) {
      return this.resolveObject(cs(i, !1, !0)).format()
    };
  
    function Wu(i, t) {
      return i ? cs(i, !1, !0).resolveObject(t) : t
    }
    Mt.prototype.resolveObject = function(i) {
      if (Yt.isString(i)) {
        var t = new Mt;
        t.parse(i, !1, !0), i = t
      }
      for (var e = new Mt, s = Object.keys(this), r = 0; r < s.length; r++) {
        var n = s[r];
        e[n] = this[n]
      }
      if (e.hash = i.hash, i.href === "") return e.href = e.format(), e;
      if (i.slashes && !i.protocol) {
        for (var a = Object.keys(i), o = 0; o < a.length; o++) {
          var h = a[o];
          h !== "protocol" && (e[h] = i[h])
        }
        return je[e.protocol] && e.hostname && !e.pathname && (e.path = e.pathname = "/"), e.href = e.format(), e
      }
      if (i.protocol && i.protocol !== e.protocol) {
        if (!je[i.protocol]) {
          for (var l = Object.keys(i), u = 0; u < l.length; u++) {
            var c = l[u];
            e[c] = i[c]
          }
          return e.href = e.format(), e
        }
        if (e.protocol = i.protocol, !i.host && !gr[i.protocol]) {
          for (var v = (i.pathname || "").split("/"); v.length && !(i.host = v.shift()););
          i.host || (i.host = ""), i.hostname || (i.hostname = ""), v[0] !== "" && v.unshift(""), v.length < 2 && v.unshift(""), e.pathname = v.join("/")
        } else e.pathname = i.pathname;
        if (e.search = i.search, e.query = i.query, e.host = i.host || "", e.auth = i.auth, e.hostname = i.hostname || i.host, e.port = i.port, e.pathname || e.search) {
          var d = e.pathname || "",
            f = e.search || "";
          e.path = d + f
        }
        return e.slashes = e.slashes || i.slashes, e.href = e.format(), e
      }
      var p = e.pathname && e.pathname.charAt(0) === "/",
        m = i.host || i.pathname && i.pathname.charAt(0) === "/",
        g = m || p || e.host && i.pathname,
        y = g,
        b = e.pathname && e.pathname.split("/") || [],
        v = i.pathname && i.pathname.split("/") || [],
        x = e.protocol && !je[e.protocol];
      if (x && (e.hostname = "", e.port = null, e.host && (b[0] === "" ? b[0] = e.host : b.unshift(e.host)), e.host = "", i.protocol && (i.hostname = null, i.port = null, i.host && (v[0] === "" ? v[0] = i.host : v.unshift(i.host)), i.host = null), g = g && (v[0] === "" || b[0] === "")), m) e.host = i.host || i.host === "" ? i.host : e.host, e.hostname = i.hostname || i.hostname === "" ? i.hostname : e.hostname, e.search = i.search, e.query = i.query, b = v;
      else if (v.length) b || (b = []), b.pop(), b = b.concat(v), e.search = i.search, e.query = i.query;
      else if (!Yt.isNullOrUndefined(i.search)) {
        if (x) {
          e.hostname = e.host = b.shift();
          var E = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
          E && (e.auth = E.shift(), e.host = e.hostname = E.shift())
        }
        return e.search = i.search, e.query = i.query, (!Yt.isNull(e.pathname) || !Yt.isNull(e.search)) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.href = e.format(), e
      }
      if (!b.length) return e.pathname = null, e.search ? e.path = "/" + e.search : e.path = null, e.href = e.format(), e;
      for (var M = b.slice(-1)[0], S = (e.host || i.host || b.length > 1) && (M === "." || M === "..") || M === "", w = 0, F = b.length; F >= 0; F--) M = b[F], M === "." ? b.splice(F, 1) : M === ".." ? (b.splice(F, 1), w++) : w && (b.splice(F, 1), w--);
      if (!g && !y)
        for (; w--; w) b.unshift("..");
      g && b[0] !== "" && (!b[0] || b[0].charAt(0) !== "/") && b.unshift(""), S && b.join("/").substr(-1) !== "/" && b.push("");
      var G = b[0] === "" || b[0] && b[0].charAt(0) === "/";
      if (x) {
        e.hostname = e.host = G ? "" : b.length ? b.shift() : "";
        var E = e.host && e.host.indexOf("@") > 0 ? e.host.split("@") : !1;
        E && (e.auth = E.shift(), e.host = e.hostname = E.shift())
      }
      return g = g || e.host && b.length, g && !G && b.unshift(""), b.length ? e.pathname = b.join("/") : (e.pathname = null, e.path = null), (!Yt.isNull(e.pathname) || !Yt.isNull(e.search)) && (e.path = (e.pathname ? e.pathname : "") + (e.search ? e.search : "")), e.auth = i.auth || e.auth, e.slashes = e.slashes || i.slashes, e.href = e.format(), e
    }, Mt.prototype.parseHost = function() {
      var i = this.host,
        t = Uu.exec(i);
      t && (t = t[0], t !== ":" && (this.port = t.substr(1)), i = i.substr(0, i.length - t.length)), i && (this.hostname = i)
    };
    const Da = {};
  
    function Oa(i, t, e = 3) {
      if (Da[t]) return;
      let s = new Error().stack;
      typeof s == "undefined" ? console.warn("PixiJS Deprecation Warning: ", `${t}
  Deprecated since v${i}`) : (s = s.split(`
  `).splice(e).join(`
  `), console.groupCollapsed ? (console.groupCollapsed("%cPixiJS Deprecation Warning: %c%s", "color:#614108;background:#fffbe6", "font-weight:normal;color:#614108;background:#fffbe6", `${t}
  Deprecated since v${i}`), console.warn(s), console.groupEnd()) : (console.warn("PixiJS Deprecation Warning: ", `${t}
  Deprecated since v${i}`), console.warn(s))), Da[t] = !0
    }
    const Yu = {
      get parse() {
        return Bu
      },
      get format() {
        return Nu
      },
      get resolve() {
        return Fu
      }
    };
  
    function Ht(i) {
      if (typeof i != "string") throw new TypeError(`Path must be a string. Received ${JSON.stringify(i)}`)
    }
  
    function ds(i) {
      return i.split("?")[0].split("#")[0]
    }
  
    function qu(i) {
      return i.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")
    }
  
    function Ku(i, t, e) {
      return i.replace(new RegExp(qu(t), "g"), e)
    }
  
    function Zu(i, t) {
      let e = "",
        s = 0,
        r = -1,
        n = 0,
        a = -1;
      for (let o = 0; o <= i.length; ++o) {
        if (o < i.length) a = i.charCodeAt(o);
        else {
          if (a === 47) break;
          a = 47
        }
        if (a === 47) {
          if (!(r === o - 1 || n === 1))
            if (r !== o - 1 && n === 2) {
              if (e.length < 2 || s !== 2 || e.charCodeAt(e.length - 1) !== 46 || e.charCodeAt(e.length - 2) !== 46) {
                if (e.length > 2) {
                  const h = e.lastIndexOf("/");
                  if (h !== e.length - 1) {
                    h === -1 ? (e = "", s = 0) : (e = e.slice(0, h), s = e.length - 1 - e.lastIndexOf("/")), r = o, n = 0;
                    continue
                  }
                } else if (e.length === 2 || e.length === 1) {
                  e = "", s = 0, r = o, n = 0;
                  continue
                }
              }
              t && (e.length > 0 ? e += "/.." : e = "..", s = 2)
            } else e.length > 0 ? e += `/${i.slice(r+1,o)}` : e = i.slice(r + 1, o), s = o - r - 1;
          r = o, n = 0
        } else a === 46 && n !== -1 ? ++n : n = -1
      }
      return e
    }
    const vt = {
      toPosix(i) {
        return Ku(i, "\\", "/")
      },
      isUrl(i) {
        return /^https?:/.test(this.toPosix(i))
      },
      isDataUrl(i) {
        return /^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(i)
      },
      isBlobUrl(i) {
        return i.startsWith("blob:")
      },
      hasProtocol(i) {
        return /^[^/:]+:/.test(this.toPosix(i))
      },
      getProtocol(i) {
        Ht(i), i = this.toPosix(i);
        const t = /^file:\/\/\//.exec(i);
        if (t) return t[0];
        const e = /^[^/:]+:\/{0,2}/.exec(i);
        return e ? e[0] : ""
      },
      toAbsolute(i, t, e) {
        if (Ht(i), this.isDataUrl(i) || this.isBlobUrl(i)) return i;
        const s = ds(this.toPosix(t != null ? t : O.ADAPTER.getBaseUrl())),
          r = ds(this.toPosix(e != null ? e : this.rootname(s)));
        return i = this.toPosix(i), i.startsWith("/") ? vt.join(r, i.slice(1)) : this.isAbsolute(i) ? i : this.join(s, i)
      },
      normalize(i) {
        if (Ht(i), i.length === 0) return ".";
        if (this.isDataUrl(i) || this.isBlobUrl(i)) return i;
        i = this.toPosix(i);
        let t = "";
        const e = i.startsWith("/");
        this.hasProtocol(i) && (t = this.rootname(i), i = i.slice(t.length));
        const s = i.endsWith("/");
        return i = Zu(i, !1), i.length > 0 && s && (i += "/"), e ? `/${i}` : t + i
      },
      isAbsolute(i) {
        return Ht(i), i = this.toPosix(i), this.hasProtocol(i) ? !0 : i.startsWith("/")
      },
      join(...i) {
        var t;
        if (i.length === 0) return ".";
        let e;
        for (let s = 0; s < i.length; ++s) {
          const r = i[s];
          if (Ht(r), r.length > 0)
            if (e === void 0) e = r;
            else {
              const n = (t = i[s - 1]) != null ? t : "";
              this.extname(n) ? e += `/../${r}` : e += `/${r}`
            }
        }
        return e === void 0 ? "." : this.normalize(e)
      },
      dirname(i) {
        if (Ht(i), i.length === 0) return ".";
        i = this.toPosix(i);
        let t = i.charCodeAt(0);
        const e = t === 47;
        let s = -1,
          r = !0;
        const n = this.getProtocol(i),
          a = i;
        i = i.slice(n.length);
        for (let o = i.length - 1; o >= 1; --o)
          if (t = i.charCodeAt(o), t === 47) {
            if (!r) {
              s = o;
              break
            }
          } else r = !1;
        return s === -1 ? e ? "/" : this.isUrl(a) ? n + i : n : e && s === 1 ? "//" : n + i.slice(0, s)
      },
      rootname(i) {
        Ht(i), i = this.toPosix(i);
        let t = "";
        if (i.startsWith("/") ? t = "/" : t = this.getProtocol(i), this.isUrl(i)) {
          const e = i.indexOf("/", t.length);
          e !== -1 ? t = i.slice(0, e) : t = i, t.endsWith("/") || (t += "/")
        }
        return t
      },
      basename(i, t) {
        Ht(i), t && Ht(t), i = ds(this.toPosix(i));
        let e = 0,
          s = -1,
          r = !0,
          n;
        if (t !== void 0 && t.length > 0 && t.length <= i.length) {
          if (t.length === i.length && t === i) return "";
          let a = t.length - 1,
            o = -1;
          for (n = i.length - 1; n >= 0; --n) {
            const h = i.charCodeAt(n);
            if (h === 47) {
              if (!r) {
                e = n + 1;
                break
              }
            } else o === -1 && (r = !1, o = n + 1), a >= 0 && (h === t.charCodeAt(a) ? --a === -1 && (s = n) : (a = -1, s = o))
          }
          return e === s ? s = o : s === -1 && (s = i.length), i.slice(e, s)
        }
        for (n = i.length - 1; n >= 0; --n)
          if (i.charCodeAt(n) === 47) {
            if (!r) {
              e = n + 1;
              break
            }
          } else s === -1 && (r = !1, s = n + 1);
        return s === -1 ? "" : i.slice(e, s)
      },
      extname(i) {
        Ht(i), i = ds(this.toPosix(i));
        let t = -1,
          e = 0,
          s = -1,
          r = !0,
          n = 0;
        for (let a = i.length - 1; a >= 0; --a) {
          const o = i.charCodeAt(a);
          if (o === 47) {
            if (!r) {
              e = a + 1;
              break
            }
            continue
          }
          s === -1 && (r = !1, s = a + 1), o === 46 ? t === -1 ? t = a : n !== 1 && (n = 1) : t !== -1 && (n = -1)
        }
        return t === -1 || s === -1 || n === 0 || n === 1 && t === s - 1 && t === e + 1 ? "" : i.slice(t, s)
      },
      parse(i) {
        Ht(i);
        const t = {
          root: "",
          dir: "",
          base: "",
          ext: "",
          name: ""
        };
        if (i.length === 0) return t;
        i = ds(this.toPosix(i));
        let e = i.charCodeAt(0);
        const s = this.isAbsolute(i);
        let r;
        const n = "";
        t.root = this.rootname(i), s || this.hasProtocol(i) ? r = 1 : r = 0;
        let a = -1,
          o = 0,
          h = -1,
          l = !0,
          u = i.length - 1,
          c = 0;
        for (; u >= r; --u) {
          if (e = i.charCodeAt(u), e === 47) {
            if (!l) {
              o = u + 1;
              break
            }
            continue
          }
          h === -1 && (l = !1, h = u + 1), e === 46 ? a === -1 ? a = u : c !== 1 && (c = 1) : a !== -1 && (c = -1)
        }
        return a === -1 || h === -1 || c === 0 || c === 1 && a === h - 1 && a === o + 1 ? h !== -1 && (o === 0 && s ? t.base = t.name = i.slice(1, h) : t.base = t.name = i.slice(o, h)) : (o === 0 && s ? (t.name = i.slice(1, a), t.base = i.slice(1, h)) : (t.name = i.slice(o, a), t.base = i.slice(o, h)), t.ext = i.slice(a, h)), t.dir = this.dirname(i), n && (t.dir = n + t.dir), t
      },
      sep: "/",
      delimiter: ":"
    };
    let vr;
    async function Ba() {
      return vr != null || (vr = (async () => {
        var i;
        const t = document.createElement("canvas").getContext("webgl");
        if (!t) return bt.UNPACK;
        const e = await new Promise(a => {
          const o = document.createElement("video");
          o.onloadeddata = () => a(o), o.onerror = () => a(null), o.autoplay = !1, o.crossOrigin = "anonymous", o.preload = "auto", o.src = "data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=", o.load()
        });
        if (!e) return bt.UNPACK;
        const s = t.createTexture();
        t.bindTexture(t.TEXTURE_2D, s);
        const r = t.createFramebuffer();
        t.bindFramebuffer(t.FRAMEBUFFER, r), t.framebufferTexture2D(t.FRAMEBUFFER, t.COLOR_ATTACHMENT0, t.TEXTURE_2D, s, 0), t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL, !1), t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL, t.NONE), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, t.RGBA, t.UNSIGNED_BYTE, e);
        const n = new Uint8Array(4);
        return t.readPixels(0, 0, 1, 1, t.RGBA, t.UNSIGNED_BYTE, n), t.deleteFramebuffer(r), t.deleteTexture(s), (i = t.getExtension("WEBGL_lose_context")) == null || i.loseContext(), n[0] <= n[3] ? bt.PMA : bt.UNPACK
      })()), vr
    }
  
    function Qu() {}
  
    function Ju() {}
    let yr;
  
    function Fa() {
      return typeof yr == "undefined" && (yr = function() {
        var i;
        const t = {
          stencil: !0,
          failIfMajorPerformanceCaveat: O.FAIL_IF_MAJOR_PERFORMANCE_CAVEAT
        };
        try {
          if (!O.ADAPTER.getWebGLRenderingContext()) return !1;
          const e = O.ADAPTER.createCanvas();
          let s = e.getContext("webgl", t) || e.getContext("experimental-webgl", t);
          const r = !!((i = s == null ? void 0 : s.getContextAttributes()) != null && i.stencil);
          if (s) {
            const n = s.getExtension("WEBGL_lose_context");
            n && n.loseContext()
          }
          return s = null, r
        } catch (e) {
          return !1
        }
      }()), yr
    }
    var tc = {
        grad: .9,
        turn: 360,
        rad: 360 / (2 * Math.PI)
      },
      re = function(i) {
        return typeof i == "string" ? i.length > 0 : typeof i == "number"
      },
      dt = function(i, t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = Math.pow(10, t)), Math.round(e * i) / e + 0
      },
      Dt = function(i, t, e) {
        return t === void 0 && (t = 0), e === void 0 && (e = 1), i > e ? e : i > t ? i : t
      },
      Na = function(i) {
        return (i = isFinite(i) ? i % 360 : 0) > 0 ? i : i + 360
      },
      La = function(i) {
        return {
          r: Dt(i.r, 0, 255),
          g: Dt(i.g, 0, 255),
          b: Dt(i.b, 0, 255),
          a: Dt(i.a)
        }
      },
      xr = function(i) {
        return {
          r: dt(i.r),
          g: dt(i.g),
          b: dt(i.b),
          a: dt(i.a, 3)
        }
      },
      ec = /^#([0-9a-f]{3,8})$/i,
      ai = function(i) {
        var t = i.toString(16);
        return t.length < 2 ? "0" + t : t
      },
      Ua = function(i) {
        var t = i.r,
          e = i.g,
          s = i.b,
          r = i.a,
          n = Math.max(t, e, s),
          a = n - Math.min(t, e, s),
          o = a ? n === t ? (e - s) / a : n === e ? 2 + (s - t) / a : 4 + (t - e) / a : 0;
        return {
          h: 60 * (o < 0 ? o + 6 : o),
          s: n ? a / n * 100 : 0,
          v: n / 255 * 100,
          a: r
        }
      },
      ka = function(i) {
        var t = i.h,
          e = i.s,
          s = i.v,
          r = i.a;
        t = t / 360 * 6, e /= 100, s /= 100;
        var n = Math.floor(t),
          a = s * (1 - e),
          o = s * (1 - (t - n) * e),
          h = s * (1 - (1 - t + n) * e),
          l = n % 6;
        return {
          r: 255 * [s, o, a, a, h, s][l],
          g: 255 * [h, s, s, o, a, a][l],
          b: 255 * [a, a, h, s, s, o][l],
          a: r
        }
      },
      Ga = function(i) {
        return {
          h: Na(i.h),
          s: Dt(i.s, 0, 100),
          l: Dt(i.l, 0, 100),
          a: Dt(i.a)
        }
      },
      $a = function(i) {
        return {
          h: dt(i.h),
          s: dt(i.s),
          l: dt(i.l),
          a: dt(i.a, 3)
        }
      },
      Ha = function(i) {
        return ka((e = (t = i).s, {
          h: t.h,
          s: (e *= ((s = t.l) < 50 ? s : 100 - s) / 100) > 0 ? 2 * e / (s + e) * 100 : 0,
          v: s + e,
          a: t.a
        }));
        var t, e, s
      },
      fs = function(i) {
        return {
          h: (t = Ua(i)).h,
          s: (r = (200 - (e = t.s)) * (s = t.v) / 100) > 0 && r < 200 ? e * s / 100 / (r <= 100 ? r : 200 - r) * 100 : 0,
          l: r / 2,
          a: t.a
        };
        var t, e, s, r
      },
      sc = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
      ic = /^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
      rc = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
      nc = /^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i,
      br = {
        string: [
          [function(i) {
            var t = ec.exec(i);
            return t ? (i = t[1]).length <= 4 ? {
              r: parseInt(i[0] + i[0], 16),
              g: parseInt(i[1] + i[1], 16),
              b: parseInt(i[2] + i[2], 16),
              a: i.length === 4 ? dt(parseInt(i[3] + i[3], 16) / 255, 2) : 1
            } : i.length === 6 || i.length === 8 ? {
              r: parseInt(i.substr(0, 2), 16),
              g: parseInt(i.substr(2, 2), 16),
              b: parseInt(i.substr(4, 2), 16),
              a: i.length === 8 ? dt(parseInt(i.substr(6, 2), 16) / 255, 2) : 1
            } : null : null
          }, "hex"],
          [function(i) {
            var t = rc.exec(i) || nc.exec(i);
            return t ? t[2] !== t[4] || t[4] !== t[6] ? null : La({
              r: Number(t[1]) / (t[2] ? 100 / 255 : 1),
              g: Number(t[3]) / (t[4] ? 100 / 255 : 1),
              b: Number(t[5]) / (t[6] ? 100 / 255 : 1),
              a: t[7] === void 0 ? 1 : Number(t[7]) / (t[8] ? 100 : 1)
            }) : null
          }, "rgb"],
          [function(i) {
            var t = sc.exec(i) || ic.exec(i);
            if (!t) return null;
            var e, s, r = Ga({
              h: (e = t[1], s = t[2], s === void 0 && (s = "deg"), Number(e) * (tc[s] || 1)),
              s: Number(t[3]),
              l: Number(t[4]),
              a: t[5] === void 0 ? 1 : Number(t[5]) / (t[6] ? 100 : 1)
            });
            return Ha(r)
          }, "hsl"]
        ],
        object: [
          [function(i) {
            var t = i.r,
              e = i.g,
              s = i.b,
              r = i.a,
              n = r === void 0 ? 1 : r;
            return re(t) && re(e) && re(s) ? La({
              r: Number(t),
              g: Number(e),
              b: Number(s),
              a: Number(n)
            }) : null
          }, "rgb"],
          [function(i) {
            var t = i.h,
              e = i.s,
              s = i.l,
              r = i.a,
              n = r === void 0 ? 1 : r;
            if (!re(t) || !re(e) || !re(s)) return null;
            var a = Ga({
              h: Number(t),
              s: Number(e),
              l: Number(s),
              a: Number(n)
            });
            return Ha(a)
          }, "hsl"],
          [function(i) {
            var t = i.h,
              e = i.s,
              s = i.v,
              r = i.a,
              n = r === void 0 ? 1 : r;
            if (!re(t) || !re(e) || !re(s)) return null;
            var a = function(o) {
              return {
                h: Na(o.h),
                s: Dt(o.s, 0, 100),
                v: Dt(o.v, 0, 100),
                a: Dt(o.a)
              }
            }({
              h: Number(t),
              s: Number(e),
              v: Number(s),
              a: Number(n)
            });
            return ka(a)
          }, "hsv"]
        ]
      },
      Va = function(i, t) {
        for (var e = 0; e < t.length; e++) {
          var s = t[e][0](i);
          if (s) return [s, t[e][1]]
        }
        return [null, void 0]
      },
      Xa = function(i) {
        return typeof i == "string" ? Va(i.trim(), br.string) : typeof i == "object" && i !== null ? Va(i, br.object) : [null, void 0]
      },
      Qm = function(i) {
        return Xa(i)[1]
      },
      Tr = function(i, t) {
        var e = fs(i);
        return {
          h: e.h,
          s: Dt(e.s + 100 * t, 0, 100),
          l: e.l,
          a: e.a
        }
      },
      Er = function(i) {
        return (299 * i.r + 587 * i.g + 114 * i.b) / 1e3 / 255
      },
      ja = function(i, t) {
        var e = fs(i);
        return {
          h: e.h,
          s: e.s,
          l: Dt(e.l + 100 * t, 0, 100),
          a: e.a
        }
      },
      oi = function() {
        function i(t) {
          this.parsed = Xa(t)[0], this.rgba = this.parsed || {
            r: 0,
            g: 0,
            b: 0,
            a: 1
          }
        }
        return i.prototype.isValid = function() {
          return this.parsed !== null
        }, i.prototype.brightness = function() {
          return dt(Er(this.rgba), 2)
        }, i.prototype.isDark = function() {
          return Er(this.rgba) < .5
        }, i.prototype.isLight = function() {
          return Er(this.rgba) >= .5
        }, i.prototype.toHex = function() {
          return t = xr(this.rgba), e = t.r, s = t.g, r = t.b, a = (n = t.a) < 1 ? ai(dt(255 * n)) : "", "#" + ai(e) + ai(s) + ai(r) + a;
          var t, e, s, r, n, a
        }, i.prototype.toRgb = function() {
          return xr(this.rgba)
        }, i.prototype.toRgbString = function() {
          return t = xr(this.rgba), e = t.r, s = t.g, r = t.b, (n = t.a) < 1 ? "rgba(" + e + ", " + s + ", " + r + ", " + n + ")" : "rgb(" + e + ", " + s + ", " + r + ")";
          var t, e, s, r, n
        }, i.prototype.toHsl = function() {
          return $a(fs(this.rgba))
        }, i.prototype.toHslString = function() {
          return t = $a(fs(this.rgba)), e = t.h, s = t.s, r = t.l, (n = t.a) < 1 ? "hsla(" + e + ", " + s + "%, " + r + "%, " + n + ")" : "hsl(" + e + ", " + s + "%, " + r + "%)";
          var t, e, s, r, n
        }, i.prototype.toHsv = function() {
          return t = Ua(this.rgba), {
            h: dt(t.h),
            s: dt(t.s),
            v: dt(t.v),
            a: dt(t.a, 3)
          };
          var t
        }, i.prototype.invert = function() {
          return qt({
            r: 255 - (t = this.rgba).r,
            g: 255 - t.g,
            b: 255 - t.b,
            a: t.a
          });
          var t
        }, i.prototype.saturate = function(t) {
          return t === void 0 && (t = .1), qt(Tr(this.rgba, t))
        }, i.prototype.desaturate = function(t) {
          return t === void 0 && (t = .1), qt(Tr(this.rgba, -t))
        }, i.prototype.grayscale = function() {
          return qt(Tr(this.rgba, -1))
        }, i.prototype.lighten = function(t) {
          return t === void 0 && (t = .1), qt(ja(this.rgba, t))
        }, i.prototype.darken = function(t) {
          return t === void 0 && (t = .1), qt(ja(this.rgba, -t))
        }, i.prototype.rotate = function(t) {
          return t === void 0 && (t = 15), this.hue(this.hue() + t)
        }, i.prototype.alpha = function(t) {
          return typeof t == "number" ? qt({
            r: (e = this.rgba).r,
            g: e.g,
            b: e.b,
            a: t
          }) : dt(this.rgba.a, 3);
          var e
        }, i.prototype.hue = function(t) {
          var e = fs(this.rgba);
          return typeof t == "number" ? qt({
            h: t,
            s: e.s,
            l: e.l,
            a: e.a
          }) : dt(e.h)
        }, i.prototype.isEqual = function(t) {
          return this.toHex() === qt(t).toHex()
        }, i
      }(),
      qt = function(i) {
        return i instanceof oi ? i : new oi(i)
      },
      za = [],
      ac = function(i) {
        i.forEach(function(t) {
          za.indexOf(t) < 0 && (t(oi, br), za.push(t))
        })
      },
      Jm = function() {
        return new oi({
          r: 255 * Math.random(),
          g: 255 * Math.random(),
          b: 255 * Math.random()
        })
      };
  
    function oc(i, t) {
      var e = {
          white: "#ffffff",
          bisque: "#ffe4c4",
          blue: "#0000ff",
          cadetblue: "#5f9ea0",
          chartreuse: "#7fff00",
          chocolate: "#d2691e",
          coral: "#ff7f50",
          antiquewhite: "#faebd7",
          aqua: "#00ffff",
          azure: "#f0ffff",
          whitesmoke: "#f5f5f5",
          papayawhip: "#ffefd5",
          plum: "#dda0dd",
          blanchedalmond: "#ffebcd",
          black: "#000000",
          gold: "#ffd700",
          goldenrod: "#daa520",
          gainsboro: "#dcdcdc",
          cornsilk: "#fff8dc",
          cornflowerblue: "#6495ed",
          burlywood: "#deb887",
          aquamarine: "#7fffd4",
          beige: "#f5f5dc",
          crimson: "#dc143c",
          cyan: "#00ffff",
          darkblue: "#00008b",
          darkcyan: "#008b8b",
          darkgoldenrod: "#b8860b",
          darkkhaki: "#bdb76b",
          darkgray: "#a9a9a9",
          darkgreen: "#006400",
          darkgrey: "#a9a9a9",
          peachpuff: "#ffdab9",
          darkmagenta: "#8b008b",
          darkred: "#8b0000",
          darkorchid: "#9932cc",
          darkorange: "#ff8c00",
          darkslateblue: "#483d8b",
          gray: "#808080",
          darkslategray: "#2f4f4f",
          darkslategrey: "#2f4f4f",
          deeppink: "#ff1493",
          deepskyblue: "#00bfff",
          wheat: "#f5deb3",
          firebrick: "#b22222",
          floralwhite: "#fffaf0",
          ghostwhite: "#f8f8ff",
          darkviolet: "#9400d3",
          magenta: "#ff00ff",
          green: "#008000",
          dodgerblue: "#1e90ff",
          grey: "#808080",
          honeydew: "#f0fff0",
          hotpink: "#ff69b4",
          blueviolet: "#8a2be2",
          forestgreen: "#228b22",
          lawngreen: "#7cfc00",
          indianred: "#cd5c5c",
          indigo: "#4b0082",
          fuchsia: "#ff00ff",
          brown: "#a52a2a",
          maroon: "#800000",
          mediumblue: "#0000cd",
          lightcoral: "#f08080",
          darkturquoise: "#00ced1",
          lightcyan: "#e0ffff",
          ivory: "#fffff0",
          lightyellow: "#ffffe0",
          lightsalmon: "#ffa07a",
          lightseagreen: "#20b2aa",
          linen: "#faf0e6",
          mediumaquamarine: "#66cdaa",
          lemonchiffon: "#fffacd",
          lime: "#00ff00",
          khaki: "#f0e68c",
          mediumseagreen: "#3cb371",
          limegreen: "#32cd32",
          mediumspringgreen: "#00fa9a",
          lightskyblue: "#87cefa",
          lightblue: "#add8e6",
          midnightblue: "#191970",
          lightpink: "#ffb6c1",
          mistyrose: "#ffe4e1",
          moccasin: "#ffe4b5",
          mintcream: "#f5fffa",
          lightslategray: "#778899",
          lightslategrey: "#778899",
          navajowhite: "#ffdead",
          navy: "#000080",
          mediumvioletred: "#c71585",
          powderblue: "#b0e0e6",
          palegoldenrod: "#eee8aa",
          oldlace: "#fdf5e6",
          paleturquoise: "#afeeee",
          mediumturquoise: "#48d1cc",
          mediumorchid: "#ba55d3",
          rebeccapurple: "#663399",
          lightsteelblue: "#b0c4de",
          mediumslateblue: "#7b68ee",
          thistle: "#d8bfd8",
          tan: "#d2b48c",
          orchid: "#da70d6",
          mediumpurple: "#9370db",
          purple: "#800080",
          pink: "#ffc0cb",
          skyblue: "#87ceeb",
          springgreen: "#00ff7f",
          palegreen: "#98fb98",
          red: "#ff0000",
          yellow: "#ffff00",
          slateblue: "#6a5acd",
          lavenderblush: "#fff0f5",
          peru: "#cd853f",
          palevioletred: "#db7093",
          violet: "#ee82ee",
          teal: "#008080",
          slategray: "#708090",
          slategrey: "#708090",
          aliceblue: "#f0f8ff",
          darkseagreen: "#8fbc8f",
          darkolivegreen: "#556b2f",
          greenyellow: "#adff2f",
          seagreen: "#2e8b57",
          seashell: "#fff5ee",
          tomato: "#ff6347",
          silver: "#c0c0c0",
          sienna: "#a0522d",
          lavender: "#e6e6fa",
          lightgreen: "#90ee90",
          orange: "#ffa500",
          orangered: "#ff4500",
          steelblue: "#4682b4",
          royalblue: "#4169e1",
          turquoise: "#40e0d0",
          yellowgreen: "#9acd32",
          salmon: "#fa8072",
          saddlebrown: "#8b4513",
          sandybrown: "#f4a460",
          rosybrown: "#bc8f8f",
          darksalmon: "#e9967a",
          lightgoldenrodyellow: "#fafad2",
          snow: "#fffafa",
          lightgrey: "#d3d3d3",
          lightgray: "#d3d3d3",
          dimgray: "#696969",
          dimgrey: "#696969",
          olivedrab: "#6b8e23",
          olive: "#808000"
        },
        s = {};
      for (var r in e) s[e[r]] = r;
      var n = {};
      i.prototype.toName = function(a) {
        if (!(this.rgba.a || this.rgba.r || this.rgba.g || this.rgba.b)) return "transparent";
        var o, h, l = s[this.toHex()];
        if (l) return l;
        if (a != null && a.closest) {
          var u = this.toRgb(),
            c = 1 / 0,
            d = "black";
          if (!n.length)
            for (var f in e) n[f] = new i(e[f]).toRgb();
          for (var p in e) {
            var m = (o = u, h = n[p], Math.pow(o.r - h.r, 2) + Math.pow(o.g - h.g, 2) + Math.pow(o.b - h.b, 2));
            m < c && (c = m, d = p)
          }
          return d
        }
      }, t.string.push([function(a) {
        var o = a.toLowerCase(),
          h = o === "transparent" ? "#0000" : e[o];
        return h ? new i(h).toRgb() : null
      }, "name"])
    }
    var hc = Object.defineProperty,
      Wa = Object.getOwnPropertySymbols,
      lc = Object.prototype.hasOwnProperty,
      uc = Object.prototype.propertyIsEnumerable,
      Ya = (i, t, e) => t in i ? hc(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      cc = (i, t) => {
        for (var e in t || (t = {})) lc.call(t, e) && Ya(i, e, t[e]);
        if (Wa)
          for (var e of Wa(t)) uc.call(t, e) && Ya(i, e, t[e]);
        return i
      };
    ac([oc]);
    const ze = class sr {
      constructor(t = 16777215) {
        this._value = null, this._components = new Float32Array(4), this._components.fill(1), this._int = 16777215, this.value = t
      }
      get red() {
        return this._components[0]
      }
      get green() {
        return this._components[1]
      }
      get blue() {
        return this._components[2]
      }
      get alpha() {
        return this._components[3]
      }
      setValue(t) {
        return this.value = t, this
      }
      set value(t) {
        if (t instanceof sr) this._value = this.cloneSource(t._value), this._int = t._int, this._components.set(t._components);
        else {
          if (t === null) throw new Error("Cannot set PIXI.Color#value to null");
          (this._value === null || !this.isSourceEqual(this._value, t)) && (this.normalize(t), this._value = this.cloneSource(t))
        }
      }
      get value() {
        return this._value
      }
      cloneSource(t) {
        return typeof t == "string" || typeof t == "number" || t instanceof Number || t === null ? t : Array.isArray(t) || ArrayBuffer.isView(t) ? t.slice(0) : typeof t == "object" && t !== null ? cc({}, t) : t
      }
      isSourceEqual(t, e) {
        const s = typeof t;
        if (s !== typeof e) return !1;
        if (s === "number" || s === "string" || t instanceof Number) return t === e;
        if (Array.isArray(t) && Array.isArray(e) || ArrayBuffer.isView(t) && ArrayBuffer.isView(e)) return t.length !== e.length ? !1 : t.every((r, n) => r === e[n]);
        if (t !== null && e !== null) {
          const r = Object.keys(t),
            n = Object.keys(e);
          return r.length !== n.length ? !1 : r.every(a => t[a] === e[a])
        }
        return t === e
      }
      toRgba() {
        const [t, e, s, r] = this._components;
        return {
          r: t,
          g: e,
          b: s,
          a: r
        }
      }
      toRgb() {
        const [t, e, s] = this._components;
        return {
          r: t,
          g: e,
          b: s
        }
      }
      toRgbaString() {
        const [t, e, s] = this.toUint8RgbArray();
        return `rgba(${t},${e},${s},${this.alpha})`
      }
      toUint8RgbArray(t) {
        const [e, s, r] = this._components;
        return t = t != null ? t : [], t[0] = Math.round(e * 255), t[1] = Math.round(s * 255), t[2] = Math.round(r * 255), t
      }
      toRgbArray(t) {
        t = t != null ? t : [];
        const [e, s, r] = this._components;
        return t[0] = e, t[1] = s, t[2] = r, t
      }
      toNumber() {
        return this._int
      }
      toLittleEndianNumber() {
        const t = this._int;
        return (t >> 16) + (t & 65280) + ((t & 255) << 16)
      }
      multiply(t) {
        const [e, s, r, n] = sr.temp.setValue(t)._components;
        return this._components[0] *= e, this._components[1] *= s, this._components[2] *= r, this._components[3] *= n, this.refreshInt(), this._value = null, this
      }
      premultiply(t, e = !0) {
        return e && (this._components[0] *= t, this._components[1] *= t, this._components[2] *= t), this._components[3] = t, this.refreshInt(), this._value = null, this
      }
      toPremultiplied(t, e = !0) {
        if (t === 1) return (255 << 24) + this._int;
        if (t === 0) return e ? 0 : this._int;
        let s = this._int >> 16 & 255,
          r = this._int >> 8 & 255,
          n = this._int & 255;
        return e && (s = s * t + .5 | 0, r = r * t + .5 | 0, n = n * t + .5 | 0), (t * 255 << 24) + (s << 16) + (r << 8) + n
      }
      toHex() {
        const t = this._int.toString(16);
        return `#${"000000".substring(0,6-t.length)+t}`
      }
      toHexa() {
        const t = Math.round(this._components[3] * 255).toString(16);
        return this.toHex() + "00".substring(0, 2 - t.length) + t
      }
      setAlpha(t) {
        return this._components[3] = this._clamp(t), this
      }
      round(t) {
        const [e, s, r] = this._components;
        return this._components[0] = Math.round(e * t) / t, this._components[1] = Math.round(s * t) / t, this._components[2] = Math.round(r * t) / t, this.refreshInt(), this._value = null, this
      }
      toArray(t) {
        t = t != null ? t : [];
        const [e, s, r, n] = this._components;
        return t[0] = e, t[1] = s, t[2] = r, t[3] = n, t
      }
      normalize(t) {
        let e, s, r, n;
        if ((typeof t == "number" || t instanceof Number) && t >= 0 && t <= 16777215) {
          const a = t;
          e = (a >> 16 & 255) / 255, s = (a >> 8 & 255) / 255, r = (a & 255) / 255, n = 1
        } else if ((Array.isArray(t) || t instanceof Float32Array) && t.length >= 3 && t.length <= 4) t = this._clamp(t), [e, s, r, n = 1] = t;
        else if ((t instanceof Uint8Array || t instanceof Uint8ClampedArray) && t.length >= 3 && t.length <= 4) t = this._clamp(t, 0, 255), [e, s, r, n = 255] = t, e /= 255, s /= 255, r /= 255, n /= 255;
        else if (typeof t == "string" || typeof t == "object") {
          if (typeof t == "string") {
            const o = sr.HEX_PATTERN.exec(t);
            o && (t = `#${o[2]}`)
          }
          const a = qt(t);
          a.isValid() && ({
            r: e,
            g: s,
            b: r,
            a: n
          } = a.rgba, e /= 255, s /= 255, r /= 255)
        }
        if (e !== void 0) this._components[0] = e, this._components[1] = s, this._components[2] = r, this._components[3] = n, this.refreshInt();
        else throw new Error(`Unable to convert color ${t}`)
      }
      refreshInt() {
        this._clamp(this._components);
        const [t, e, s] = this._components;
        this._int = (t * 255 << 16) + (e * 255 << 8) + (s * 255 | 0)
      }
      _clamp(t, e = 0, s = 1) {
        return typeof t == "number" ? Math.min(Math.max(t, e), s) : (t.forEach((r, n) => {
          t[n] = Math.min(Math.max(r, e), s)
        }), t)
      }
    };
    ze.shared = new ze, ze.temp = new ze, ze.HEX_PATTERN = /^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;
    let Z = ze;
  
    function dc(i, t = []) {
      return Z.shared.setValue(i).toRgbArray(t)
    }
  
    function qa(i) {
      return Z.shared.setValue(i).toHex()
    }
  
    function fc(i) {
      return Z.shared.setValue(i).toNumber()
    }
  
    function Ka(i) {
      return Z.shared.setValue(i).toNumber()
    }
  
    function pc() {
      const i = [],
        t = [];
      for (let s = 0; s < 32; s++) i[s] = s, t[s] = s;
      i[H.NORMAL_NPM] = H.NORMAL, i[H.ADD_NPM] = H.ADD, i[H.SCREEN_NPM] = H.SCREEN, t[H.NORMAL] = H.NORMAL_NPM, t[H.ADD] = H.ADD_NPM, t[H.SCREEN] = H.SCREEN_NPM;
      const e = [];
      return e.push(t), e.push(i), e
    }
    const Ar = pc();
  
    function wr(i, t) {
      return Ar[t ? 1 : 0][i]
    }
  
    function mc(i, t, e, s = !0) {
      return Z.shared.setValue(i).premultiply(t, s).toArray(e != null ? e : new Float32Array(4))
    }
  
    function gc(i, t) {
      return Z.shared.setValue(i).toPremultiplied(t)
    }
  
    function _c(i, t, e, s = !0) {
      return Z.shared.setValue(i).premultiply(t, s).toArray(e != null ? e : new Float32Array(4))
    }
    const Za = /^\s*data:(?:([\w-]+)\/([\w+.-]+))?(?:;charset=([\w-]+))?(?:;(base64))?,(.*)/i;
  
    function Qa(i, t = null) {
      const e = i * 6;
      if (t = t || new Uint16Array(e), t.length !== e) throw new Error(`Out buffer length is incorrect, got ${t.length} and expected ${e}`);
      for (let s = 0, r = 0; s < e; s += 6, r += 4) t[s + 0] = r + 0, t[s + 1] = r + 1, t[s + 2] = r + 2, t[s + 3] = r + 0, t[s + 4] = r + 2, t[s + 5] = r + 3;
      return t
    }
  
    function hi(i) {
      if (i.BYTES_PER_ELEMENT === 4) return i instanceof Float32Array ? "Float32Array" : i instanceof Uint32Array ? "Uint32Array" : "Int32Array";
      if (i.BYTES_PER_ELEMENT === 2) {
        if (i instanceof Uint16Array) return "Uint16Array"
      } else if (i.BYTES_PER_ELEMENT === 1 && i instanceof Uint8Array) return "Uint8Array";
      return null
    }
    const vc = {
      Float32Array,
      Uint32Array,
      Int32Array,
      Uint8Array
    };
  
    function yc(i, t) {
      let e = 0,
        s = 0;
      const r = {};
      for (let h = 0; h < i.length; h++) s += t[h], e += i[h].length;
      const n = new ArrayBuffer(e * 4);
      let a = null,
        o = 0;
      for (let h = 0; h < i.length; h++) {
        const l = t[h],
          u = i[h],
          c = hi(u);
        r[c] || (r[c] = new vc[c](n)), a = r[c];
        for (let d = 0; d < u.length; d++) {
          const f = (d / l | 0) * s + o,
            p = d % l;
          a[f + p] = u[d]
        }
        o += l
      }
      return new Float32Array(n)
    }
  
    function ps(i) {
      return i += i === 0 ? 1 : 0, --i, i |= i >>> 1, i |= i >>> 2, i |= i >>> 4, i |= i >>> 8, i |= i >>> 16, i + 1
    }
  
    function Sr(i) {
      return !(i & i - 1) && !!i
    }
  
    function Ir(i) {
      let t = (i > 65535 ? 1 : 0) << 4;
      i >>>= t;
      let e = (i > 255 ? 1 : 0) << 3;
      return i >>>= e, t |= e, e = (i > 15 ? 1 : 0) << 2, i >>>= e, t |= e, e = (i > 3 ? 1 : 0) << 1, i >>>= e, t |= e, t | i >> 1
    }
  
    function Ce(i, t, e) {
      const s = i.length;
      let r;
      if (t >= s || e === 0) return;
      e = t + e > s ? s - t : e;
      const n = s - e;
      for (r = t; r < n; ++r) i[r] = i[r + e];
      i.length = n
    }
  
    function ne(i) {
      return i === 0 ? 0 : i < 0 ? -1 : 1
    }
    let xc = 0;
  
    function ve() {
      return ++xc
    }
    const Rr = class {
      constructor(t, e, s, r) {
        this.left = t, this.top = e, this.right = s, this.bottom = r
      }
      get width() {
        return this.right - this.left
      }
      get height() {
        return this.bottom - this.top
      }
      isEmpty() {
        return this.left === this.right || this.top === this.bottom
      }
    };
    Rr.EMPTY = new Rr(0, 0, 0, 0);
    let Cr = Rr;
    const Pr = {},
      Tt = Object.create(null),
      wt = Object.create(null);
  
    function bc() {
      let i;
      for (i in Tt) Tt[i].destroy();
      for (i in wt) wt[i].destroy()
    }
  
    function Tc() {
      let i;
      for (i in Tt) delete Tt[i];
      for (i in wt) delete wt[i]
    }
    class Ja {
      constructor(t, e, s) {
        this._canvas = O.ADAPTER.createCanvas(), this._context = this._canvas.getContext("2d"), this.resolution = s || O.RESOLUTION, this.resize(t, e)
      }
      clear() {
        this._checkDestroyed(), this._context.setTransform(1, 0, 0, 1, 0, 0), this._context.clearRect(0, 0, this._canvas.width, this._canvas.height)
      }
      resize(t, e) {
        this._checkDestroyed(), this._canvas.width = Math.round(t * this.resolution), this._canvas.height = Math.round(e * this.resolution)
      }
      destroy() {
        this._context = null, this._canvas = null
      }
      get width() {
        return this._checkDestroyed(), this._canvas.width
      }
      set width(t) {
        this._checkDestroyed(), this._canvas.width = Math.round(t)
      }
      get height() {
        return this._checkDestroyed(), this._canvas.height
      }
      set height(t) {
        this._checkDestroyed(), this._canvas.height = Math.round(t)
      }
      get canvas() {
        return this._checkDestroyed(), this._canvas
      }
      get context() {
        return this._checkDestroyed(), this._context
      }
      _checkDestroyed() {
        this._canvas
      }
    }
  
    function to(i, t, e) {
      for (let s = 0, r = 4 * e * t; s < t; ++s, r += 4)
        if (i[r + 3] !== 0) return !1;
      return !0
    }
  
    function eo(i, t, e, s, r) {
      const n = 4 * t;
      for (let a = s, o = s * n + 4 * e; a <= r; ++a, o += n)
        if (i[o + 3] !== 0) return !1;
      return !0
    }
  
    function so(i) {
      const {
        width: t,
        height: e
      } = i, s = i.getContext("2d", {
        willReadFrequently: !0
      });
      if (s === null) throw new TypeError("Failed to get canvas 2D context");
      const r = s.getImageData(0, 0, t, e).data;
      let n = 0,
        a = 0,
        o = t - 1,
        h = e - 1;
      for (; a < e && to(r, t, a);) ++a;
      if (a === e) return Cr.EMPTY;
      for (; to(r, t, h);) --h;
      for (; eo(r, t, n, a, h);) ++n;
      for (; eo(r, t, o, a, h);) --o;
      return ++o, ++h, new Cr(n, a, o, h)
    }
  
    function io(i) {
      const t = so(i),
        {
          width: e,
          height: s
        } = t;
      let r = null;
      if (!t.isEmpty()) {
        const n = i.getContext("2d");
        if (n === null) throw new TypeError("Failed to get canvas 2D context");
        r = n.getImageData(t.left, t.top, e, s)
      }
      return {
        width: e,
        height: s,
        data: r
      }
    }
  
    function Ec(i) {
      const t = Za.exec(i);
      if (t) return {
        mediaType: t[1] ? t[1].toLowerCase() : void 0,
        subType: t[2] ? t[2].toLowerCase() : void 0,
        charset: t[3] ? t[3].toLowerCase() : void 0,
        encoding: t[4] ? t[4].toLowerCase() : void 0,
        data: t[5]
      }
    }
  
    function ro(i, t = globalThis.location) {
      if (i.startsWith("data:")) return "";
      t = t || globalThis.location;
      const e = new URL(i, document.baseURI);
      return e.hostname !== t.hostname || e.port !== t.port || e.protocol !== t.protocol ? "anonymous" : ""
    }
  
    function Kt(i, t = 1) {
      var e;
      const s = (e = O.RETINA_PREFIX) == null ? void 0 : e.exec(i);
      return s ? parseFloat(s[1]) : t
    }
    var Ac = {
        __proto__: null,
        BaseTextureCache: wt,
        BoundingBox: Cr,
        CanvasRenderTarget: Ja,
        DATA_URI: Za,
        EventEmitter: Ve,
        ProgramCache: Pr,
        TextureCache: Tt,
        clearTextureCache: Tc,
        correctBlendMode: wr,
        createIndicesForQuads: Qa,
        decomposeDataUri: Ec,
        deprecation: Oa,
        destroyTextureCache: bc,
        detectVideoAlphaMode: Ba,
        determineCrossOrigin: ro,
        earcut: Aa,
        getBufferType: hi,
        getCanvasBoundingBox: so,
        getResolutionOfUrl: Kt,
        hex2rgb: dc,
        hex2string: qa,
        interleaveTypedArrays: yc,
        isMobile: $t,
        isPow2: Sr,
        isWebGLSupported: Fa,
        log2: Ir,
        nextPow2: ps,
        path: vt,
        premultiplyBlendMode: Ar,
        premultiplyRgba: mc,
        premultiplyTint: gc,
        premultiplyTintToRgba: _c,
        removeItems: Ce,
        rgb2hex: Ka,
        sayHello: Ju,
        sign: ne,
        skipHello: Qu,
        string2hex: fc,
        trimCanvas: io,
        uid: ve,
        url: Yu
      },
      wc = Object.defineProperty,
      Sc = Object.defineProperties,
      Ic = Object.getOwnPropertyDescriptors,
      no = Object.getOwnPropertySymbols,
      Rc = Object.prototype.hasOwnProperty,
      Cc = Object.prototype.propertyIsEnumerable,
      ao = (i, t, e) => t in i ? wc(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      oo = (i, t) => {
        for (var e in t || (t = {})) Rc.call(t, e) && ao(i, e, t[e]);
        if (no)
          for (var e of no(t)) Cc.call(t, e) && ao(i, e, t[e]);
        return i
      },
      Pc = (i, t) => Sc(i, Ic(t)),
      R = (i => (i.Renderer = "renderer", i.Application = "application", i.RendererSystem = "renderer-webgl-system", i.RendererPlugin = "renderer-webgl-plugin", i.CanvasRendererSystem = "renderer-canvas-system", i.CanvasRendererPlugin = "renderer-canvas-plugin", i.Asset = "asset", i.LoadParser = "load-parser", i.ResolveParser = "resolve-parser", i.CacheParser = "cache-parser", i.DetectionParser = "detection-parser", i))(R || {});
    const Mr = i => {
        if (typeof i == "function" || typeof i == "object" && i.extension) {
          const t = typeof i.extension != "object" ? {
            type: i.extension
          } : i.extension;
          i = Pc(oo({}, t), {
            ref: i
          })
        }
        if (typeof i == "object") i = oo({}, i);
        else throw new Error("Invalid extension type");
        return typeof i.type == "string" && (i.type = [i.type]), i
      },
      ho = (i, t) => {
        var e;
        return (e = Mr(i).priority) != null ? e : t
      },
      L = {
        _addHandlers: {},
        _removeHandlers: {},
        _queue: {},
        remove(...i) {
          return i.map(Mr).forEach(t => {
            t.type.forEach(e => {
              var s, r;
              return (r = (s = this._removeHandlers)[e]) == null ? void 0 : r.call(s, t)
            })
          }), this
        },
        add(...i) {
          return i.map(Mr).forEach(t => {
            t.type.forEach(e => {
              const s = this._addHandlers,
                r = this._queue;
              s[e] ? s[e](t) : (r[e] = r[e] || [], r[e].push(t))
            })
          }), this
        },
        handle(i, t, e) {
          const s = this._addHandlers,
            r = this._removeHandlers;
          s[i] = t, r[i] = e;
          const n = this._queue;
          return n[i] && (n[i].forEach(a => t(a)), delete n[i]), this
        },
        handleByMap(i, t) {
          return this.handle(i, e => {
            t[e.name] = e.ref
          }, e => {
            delete t[e.name]
          })
        },
        handleByList(i, t, e = -1) {
          return this.handle(i, s => {
            t.includes(s.ref) || (t.push(s.ref), t.sort((r, n) => ho(n, e) - ho(r, e)))
          }, s => {
            const r = t.indexOf(s.ref);
            r !== -1 && t.splice(r, 1)
          })
        }
      };
    class li {
      constructor(t) {
        typeof t == "number" ? this.rawBinaryData = new ArrayBuffer(t) : t instanceof Uint8Array ? this.rawBinaryData = t.buffer : this.rawBinaryData = t, this.uint32View = new Uint32Array(this.rawBinaryData), this.float32View = new Float32Array(this.rawBinaryData)
      }
      get int8View() {
        return this._int8View || (this._int8View = new Int8Array(this.rawBinaryData)), this._int8View
      }
      get uint8View() {
        return this._uint8View || (this._uint8View = new Uint8Array(this.rawBinaryData)), this._uint8View
      }
      get int16View() {
        return this._int16View || (this._int16View = new Int16Array(this.rawBinaryData)), this._int16View
      }
      get uint16View() {
        return this._uint16View || (this._uint16View = new Uint16Array(this.rawBinaryData)), this._uint16View
      }
      get int32View() {
        return this._int32View || (this._int32View = new Int32Array(this.rawBinaryData)), this._int32View
      }
      view(t) {
        return this[`${t}View`]
      }
      destroy() {
        this.rawBinaryData = null, this._int8View = null, this._uint8View = null, this._int16View = null, this._uint16View = null, this._int32View = null, this.uint32View = null, this.float32View = null
      }
      static sizeOf(t) {
        switch (t) {
          case "int8":
          case "uint8":
            return 1;
          case "int16":
          case "uint16":
            return 2;
          case "int32":
          case "uint32":
          case "float32":
            return 4;
          default:
            throw new Error(`${t} isn't a valid view type`)
        }
      }
    }
    const Mc = ["precision mediump float;", "void main(void){", "float test = 0.1;", "%forloop%", "gl_FragColor = vec4(0.0);", "}"].join(`
  `);
  
    function Dc(i) {
      let t = "";
      for (let e = 0; e < i; ++e) e > 0 && (t += `
  else `), e < i - 1 && (t += `if(test == ${e}.0){}`);
      return t
    }
  
    function lo(i, t) {
      if (i === 0) throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`");
      const e = t.createShader(t.FRAGMENT_SHADER);
      for (;;) {
        const s = Mc.replace(/%forloop%/gi, Dc(i));
        if (t.shaderSource(e, s), t.compileShader(e), !t.getShaderParameter(e, t.COMPILE_STATUS)) i = i / 2 | 0;
        else break
      }
      return i
    }
    const Dr = 0,
      Or = 1,
      Br = 2,
      Fr = 3,
      Nr = 4,
      Lr = 5;
    class Zt {
      constructor() {
        this.data = 0, this.blendMode = H.NORMAL, this.polygonOffset = 0, this.blend = !0, this.depthMask = !0
      }
      get blend() {
        return !!(this.data & 1 << Dr)
      }
      set blend(t) {
        !!(this.data & 1 << Dr) !== t && (this.data ^= 1 << Dr)
      }
      get offsets() {
        return !!(this.data & 1 << Or)
      }
      set offsets(t) {
        !!(this.data & 1 << Or) !== t && (this.data ^= 1 << Or)
      }
      get culling() {
        return !!(this.data & 1 << Br)
      }
      set culling(t) {
        !!(this.data & 1 << Br) !== t && (this.data ^= 1 << Br)
      }
      get depthTest() {
        return !!(this.data & 1 << Fr)
      }
      set depthTest(t) {
        !!(this.data & 1 << Fr) !== t && (this.data ^= 1 << Fr)
      }
      get depthMask() {
        return !!(this.data & 1 << Lr)
      }
      set depthMask(t) {
        !!(this.data & 1 << Lr) !== t && (this.data ^= 1 << Lr)
      }
      get clockwiseFrontFace() {
        return !!(this.data & 1 << Nr)
      }
      set clockwiseFrontFace(t) {
        !!(this.data & 1 << Nr) !== t && (this.data ^= 1 << Nr)
      }
      get blendMode() {
        return this._blendMode
      }
      set blendMode(t) {
        this.blend = t !== H.NONE, this._blendMode = t
      }
      get polygonOffset() {
        return this._polygonOffset
      }
      set polygonOffset(t) {
        this.offsets = !!t, this._polygonOffset = t
      }
      static for2d() {
        const t = new Zt;
        return t.depthTest = !1, t.blend = !0, t
      }
    }
    const ui = [];
  
    function Ur(i, t) {
      if (!i) return null;
      let e = "";
      if (typeof i == "string") {
        const s = /\.(\w{3,4})(?:$|\?|#)/i.exec(i);
        s && (e = s[1].toLowerCase())
      }
      for (let s = ui.length - 1; s >= 0; --s) {
        const r = ui[s];
        if (r.test && r.test(i, e)) return new r(i, t)
      }
      throw new Error("Unrecognized source type to auto-detect Resource")
    }
    class St {
      constructor(t) {
        this.items = [], this._name = t, this._aliasCount = 0
      }
      emit(t, e, s, r, n, a, o, h) {
        if (arguments.length > 8) throw new Error("max arguments reached");
        const {
          name: l,
          items: u
        } = this;
        this._aliasCount++;
        for (let c = 0, d = u.length; c < d; c++) u[c][l](t, e, s, r, n, a, o, h);
        return u === this.items && this._aliasCount--, this
      }
      ensureNonAliasedItems() {
        this._aliasCount > 0 && this.items.length > 1 && (this._aliasCount = 0, this.items = this.items.slice(0))
      }
      add(t) {
        return t[this._name] && (this.ensureNonAliasedItems(), this.remove(t), this.items.push(t)), this
      }
      remove(t) {
        const e = this.items.indexOf(t);
        return e !== -1 && (this.ensureNonAliasedItems(), this.items.splice(e, 1)), this
      }
      contains(t) {
        return this.items.includes(t)
      }
      removeAll() {
        return this.ensureNonAliasedItems(), this.items.length = 0, this
      }
      destroy() {
        this.removeAll(), this.items = null, this._name = null
      }
      get empty() {
        return this.items.length === 0
      }
      get name() {
        return this._name
      }
    }
    Object.defineProperties(St.prototype, {
      dispatch: {
        value: St.prototype.emit
      },
      run: {
        value: St.prototype.emit
      }
    });
    class We {
      constructor(t = 0, e = 0) {
        this._width = t, this._height = e, this.destroyed = !1, this.internal = !1, this.onResize = new St("setRealSize"), this.onUpdate = new St("update"), this.onError = new St("onError")
      }
      bind(t) {
        this.onResize.add(t), this.onUpdate.add(t), this.onError.add(t), (this._width || this._height) && this.onResize.emit(this._width, this._height)
      }
      unbind(t) {
        this.onResize.remove(t), this.onUpdate.remove(t), this.onError.remove(t)
      }
      resize(t, e) {
        (t !== this._width || e !== this._height) && (this._width = t, this._height = e, this.onResize.emit(t, e))
      }
      get valid() {
        return !!this._width && !!this._height
      }
      update() {
        this.destroyed || this.onUpdate.emit()
      }
      load() {
        return Promise.resolve(this)
      }
      get width() {
        return this._width
      }
      get height() {
        return this._height
      }
      style(t, e, s) {
        return !1
      }
      dispose() {}
      destroy() {
        this.destroyed || (this.destroyed = !0, this.dispose(), this.onError.removeAll(), this.onError = null, this.onResize.removeAll(), this.onResize = null, this.onUpdate.removeAll(), this.onUpdate = null)
      }
      static test(t, e) {
        return !1
      }
    }
    class ms extends We {
      constructor(t, e) {
        var s;
        const {
          width: r,
          height: n
        } = e || {};
        if (!r || !n) throw new Error("BufferResource width or height invalid");
        super(r, n), this.data = t, this.unpackAlignment = (s = e.unpackAlignment) != null ? s : 4
      }
      upload(t, e, s) {
        const r = t.gl;
        r.pixelStorei(r.UNPACK_ALIGNMENT, this.unpackAlignment), r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === bt.UNPACK);
        const n = e.realWidth,
          a = e.realHeight;
        return s.width === n && s.height === a ? r.texSubImage2D(e.target, 0, 0, 0, n, a, e.format, s.type, this.data) : (s.width = n, s.height = a, r.texImage2D(e.target, 0, s.internalFormat, n, a, 0, e.format, s.type, this.data)), !0
      }
      dispose() {
        this.data = null
      }
      static test(t) {
        return t === null || t instanceof Int8Array || t instanceof Uint8Array || t instanceof Uint8ClampedArray || t instanceof Int16Array || t instanceof Uint16Array || t instanceof Int32Array || t instanceof Uint32Array || t instanceof Float32Array
      }
    }
    var Oc = Object.defineProperty,
      uo = Object.getOwnPropertySymbols,
      Bc = Object.prototype.hasOwnProperty,
      Fc = Object.prototype.propertyIsEnumerable,
      co = (i, t, e) => t in i ? Oc(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Nc = (i, t) => {
        for (var e in t || (t = {})) Bc.call(t, e) && co(i, e, t[e]);
        if (uo)
          for (var e of uo(t)) Fc.call(t, e) && co(i, e, t[e]);
        return i
      };
    const Lc = {
        scaleMode: zt.NEAREST,
        alphaMode: bt.NPM
      },
      kr = class es extends Ve {
        constructor(t = null, e = null) {
          super(), e = Object.assign({}, es.defaultOptions, e);
          const {
            alphaMode: s,
            mipmap: r,
            anisotropicLevel: n,
            scaleMode: a,
            width: o,
            height: h,
            wrapMode: l,
            format: u,
            type: c,
            target: d,
            resolution: f,
            resourceOptions: p
          } = e;
          t && !(t instanceof We) && (t = Ur(t, p), t.internal = !0), this.resolution = f || O.RESOLUTION, this.width = Math.round((o || 0) * this.resolution) / this.resolution, this.height = Math.round((h || 0) * this.resolution) / this.resolution, this._mipmap = r, this.anisotropicLevel = n, this._wrapMode = l, this._scaleMode = a, this.format = u, this.type = c, this.target = d, this.alphaMode = s, this.uid = ve(), this.touched = 0, this.isPowerOfTwo = !1, this._refreshPOT(), this._glTextures = {}, this.dirtyId = 0, this.dirtyStyleId = 0, this.cacheId = null, this.valid = o > 0 && h > 0, this.textureCacheIds = [], this.destroyed = !1, this.resource = null, this._batchEnabled = 0, this._batchLocation = 0, this.parentTextureArray = null, this.setResource(t)
        }
        get realWidth() {
          return Math.round(this.width * this.resolution)
        }
        get realHeight() {
          return Math.round(this.height * this.resolution)
        }
        get mipmap() {
          return this._mipmap
        }
        set mipmap(t) {
          this._mipmap !== t && (this._mipmap = t, this.dirtyStyleId++)
        }
        get scaleMode() {
          return this._scaleMode
        }
        set scaleMode(t) {
          this._scaleMode !== t && (this._scaleMode = t, this.dirtyStyleId++)
        }
        get wrapMode() {
          return this._wrapMode
        }
        set wrapMode(t) {
          this._wrapMode !== t && (this._wrapMode = t, this.dirtyStyleId++)
        }
        setStyle(t, e) {
          let s;
          return t !== void 0 && t !== this.scaleMode && (this.scaleMode = t, s = !0), e !== void 0 && e !== this.mipmap && (this.mipmap = e, s = !0), s && this.dirtyStyleId++, this
        }
        setSize(t, e, s) {
          return s = s || this.resolution, this.setRealSize(t * s, e * s, s)
        }
        setRealSize(t, e, s) {
          return this.resolution = s || this.resolution, this.width = Math.round(t) / this.resolution, this.height = Math.round(e) / this.resolution, this._refreshPOT(), this.update(), this
        }
        _refreshPOT() {
          this.isPowerOfTwo = Sr(this.realWidth) && Sr(this.realHeight)
        }
        setResolution(t) {
          const e = this.resolution;
          return e === t ? this : (this.resolution = t, this.valid && (this.width = Math.round(this.width * e) / t, this.height = Math.round(this.height * e) / t, this.emit("update", this)), this._refreshPOT(), this)
        }
        setResource(t) {
          if (this.resource === t) return this;
          if (this.resource) throw new Error("Resource can be set only once");
          return t.bind(this), this.resource = t, this
        }
        update() {
          this.valid ? (this.dirtyId++, this.dirtyStyleId++, this.emit("update", this)) : this.width > 0 && this.height > 0 && (this.valid = !0, this.emit("loaded", this), this.emit("update", this))
        }
        onError(t) {
          this.emit("error", this, t)
        }
        destroy() {
          this.resource && (this.resource.unbind(this), this.resource.internal && this.resource.destroy(), this.resource = null), this.cacheId && (delete wt[this.cacheId], delete Tt[this.cacheId], this.cacheId = null), this.valid = !1, this.dispose(), es.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0, this.emit("destroyed", this), this.removeAllListeners()
        }
        dispose() {
          this.emit("dispose", this)
        }
        castToBaseTexture() {
          return this
        }
        static from(t, e, s = O.STRICT_TEXTURE_CACHE) {
          const r = typeof t == "string";
          let n = null;
          if (r) n = t;
          else {
            if (!t._pixiId) {
              const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
              t._pixiId = `${o}_${ve()}`
            }
            n = t._pixiId
          }
          let a = wt[n];
          if (r && s && !a) throw new Error(`The cacheId "${n}" does not exist in BaseTextureCache.`);
          return a || (a = new es(t, e), a.cacheId = n, es.addToCache(a, n)), a
        }
        static fromBuffer(t, e, s, r) {
          t = t || new Float32Array(e * s * 4);
          const n = new ms(t, Nc({
            width: e,
            height: s
          }, r == null ? void 0 : r.resourceOptions));
          let a, o;
          return t instanceof Float32Array ? (a = A.RGBA, o = k.FLOAT) : t instanceof Int32Array ? (a = A.RGBA_INTEGER, o = k.INT) : t instanceof Uint32Array ? (a = A.RGBA_INTEGER, o = k.UNSIGNED_INT) : t instanceof Int16Array ? (a = A.RGBA_INTEGER, o = k.SHORT) : t instanceof Uint16Array ? (a = A.RGBA_INTEGER, o = k.UNSIGNED_SHORT) : t instanceof Int8Array ? (a = A.RGBA, o = k.BYTE) : (a = A.RGBA, o = k.UNSIGNED_BYTE), n.internal = !0, new es(n, Object.assign({}, Lc, {
            type: o,
            format: a
          }, r))
        }
        static addToCache(t, e) {
          e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e), wt[e] && wt[e] !== t && console.warn(`BaseTexture added to the cache with an id [${e}] that already had an entry`), wt[e] = t)
        }
        static removeFromCache(t) {
          if (typeof t == "string") {
            const e = wt[t];
            if (e) {
              const s = e.textureCacheIds.indexOf(t);
              return s > -1 && e.textureCacheIds.splice(s, 1), delete wt[t], e
            }
          } else if (t != null && t.textureCacheIds) {
            for (let e = 0; e < t.textureCacheIds.length; ++e) delete wt[t.textureCacheIds[e]];
            return t.textureCacheIds.length = 0, t
          }
          return null
        }
      };
    kr.defaultOptions = {
      mipmap: Ut.POW2,
      anisotropicLevel: 0,
      scaleMode: zt.LINEAR,
      wrapMode: Wt.CLAMP,
      alphaMode: bt.UNPACK,
      target: Ie.TEXTURE_2D,
      format: A.RGBA,
      type: k.UNSIGNED_BYTE
    }, kr._globalBatch = 0;
    let X = kr;
    class ci {
      constructor() {
        this.texArray = null, this.blend = 0, this.type = Lt.TRIANGLES, this.start = 0, this.size = 0, this.data = null
      }
    }
    let Uc = 0;
    class nt {
      constructor(t, e = !0, s = !1) {
        this.data = t || new Float32Array(1), this._glBuffers = {}, this._updateID = 0, this.index = s, this.static = e, this.id = Uc++, this.disposeRunner = new St("disposeBuffer")
      }
      update(t) {
        t instanceof Array && (t = new Float32Array(t)), this.data = t || this.data, this._updateID++
      }
      dispose() {
        this.disposeRunner.emit(this, !1)
      }
      destroy() {
        this.dispose(), this.data = null
      }
      set index(t) {
        this.type = t ? Gt.ELEMENT_ARRAY_BUFFER : Gt.ARRAY_BUFFER
      }
      get index() {
        return this.type === Gt.ELEMENT_ARRAY_BUFFER
      }
      static from(t) {
        return t instanceof Array && (t = new Float32Array(t)), new nt(t)
      }
    }
    class gs {
      constructor(t, e = 0, s = !1, r = k.FLOAT, n, a, o, h = 1) {
        this.buffer = t, this.size = e, this.normalized = s, this.type = r, this.stride = n, this.start = a, this.instance = o, this.divisor = h
      }
      destroy() {
        this.buffer = null
      }
      static from(t, e, s, r, n) {
        return new gs(t, e, s, r, n)
      }
    }
    const kc = {
      Float32Array,
      Uint32Array,
      Int32Array,
      Uint8Array
    };
  
    function Gc(i, t) {
      let e = 0,
        s = 0;
      const r = {};
      for (let h = 0; h < i.length; h++) s += t[h], e += i[h].length;
      const n = new ArrayBuffer(e * 4);
      let a = null,
        o = 0;
      for (let h = 0; h < i.length; h++) {
        const l = t[h],
          u = i[h],
          c = hi(u);
        r[c] || (r[c] = new kc[c](n)), a = r[c];
        for (let d = 0; d < u.length; d++) {
          const f = (d / l | 0) * s + o,
            p = d % l;
          a[f + p] = u[d]
        }
        o += l
      }
      return new Float32Array(n)
    }
    const fo = {
      5126: 4,
      5123: 2,
      5121: 1
    };
    let $c = 0;
    const Hc = {
      Float32Array,
      Uint32Array,
      Int32Array,
      Uint8Array,
      Uint16Array
    };
    class ae {
      constructor(t = [], e = {}) {
        this.buffers = t, this.indexBuffer = null, this.attributes = e, this.glVertexArrayObjects = {}, this.id = $c++, this.instanced = !1, this.instanceCount = 1, this.disposeRunner = new St("disposeGeometry"), this.refCount = 0
      }
      addAttribute(t, e, s = 0, r = !1, n, a, o, h = !1) {
        if (!e) throw new Error("You must pass a buffer when creating an attribute");
        e instanceof nt || (e instanceof Array && (e = new Float32Array(e)), e = new nt(e));
        const l = t.split("|");
        if (l.length > 1) {
          for (let c = 0; c < l.length; c++) this.addAttribute(l[c], e, s, r, n);
          return this
        }
        let u = this.buffers.indexOf(e);
        return u === -1 && (this.buffers.push(e), u = this.buffers.length - 1), this.attributes[t] = new gs(u, s, r, n, a, o, h), this.instanced = this.instanced || h, this
      }
      getAttribute(t) {
        return this.attributes[t]
      }
      getBuffer(t) {
        return this.buffers[this.getAttribute(t).buffer]
      }
      addIndex(t) {
        return t instanceof nt || (t instanceof Array && (t = new Uint16Array(t)), t = new nt(t)), t.type = Gt.ELEMENT_ARRAY_BUFFER, this.indexBuffer = t, this.buffers.includes(t) || this.buffers.push(t), this
      }
      getIndex() {
        return this.indexBuffer
      }
      interleave() {
        if (this.buffers.length === 1 || this.buffers.length === 2 && this.indexBuffer) return this;
        const t = [],
          e = [],
          s = new nt;
        let r;
        for (r in this.attributes) {
          const n = this.attributes[r],
            a = this.buffers[n.buffer];
          t.push(a.data), e.push(n.size * fo[n.type] / 4), n.buffer = 0
        }
        for (s.data = Gc(t, e), r = 0; r < this.buffers.length; r++) this.buffers[r] !== this.indexBuffer && this.buffers[r].destroy();
        return this.buffers = [s], this.indexBuffer && this.buffers.push(this.indexBuffer), this
      }
      getSize() {
        for (const t in this.attributes) {
          const e = this.attributes[t];
          return this.buffers[e.buffer].data.length / (e.stride / 4 || e.size)
        }
        return 0
      }
      dispose() {
        this.disposeRunner.emit(this, !1)
      }
      destroy() {
        this.dispose(), this.buffers = null, this.indexBuffer = null, this.attributes = null
      }
      clone() {
        const t = new ae;
        for (let e = 0; e < this.buffers.length; e++) t.buffers[e] = new nt(this.buffers[e].data.slice(0));
        for (const e in this.attributes) {
          const s = this.attributes[e];
          t.attributes[e] = new gs(s.buffer, s.size, s.normalized, s.type, s.stride, s.start, s.instance)
        }
        return this.indexBuffer && (t.indexBuffer = t.buffers[this.buffers.indexOf(this.indexBuffer)], t.indexBuffer.type = Gt.ELEMENT_ARRAY_BUFFER), t
      }
      static merge(t) {
        const e = new ae,
          s = [],
          r = [],
          n = [];
        let a;
        for (let o = 0; o < t.length; o++) {
          a = t[o];
          for (let h = 0; h < a.buffers.length; h++) r[h] = r[h] || 0, r[h] += a.buffers[h].data.length, n[h] = 0
        }
        for (let o = 0; o < a.buffers.length; o++) s[o] = new Hc[hi(a.buffers[o].data)](r[o]), e.buffers[o] = new nt(s[o]);
        for (let o = 0; o < t.length; o++) {
          a = t[o];
          for (let h = 0; h < a.buffers.length; h++) s[h].set(a.buffers[h].data, n[h]), n[h] += a.buffers[h].data.length
        }
        if (e.attributes = a.attributes, a.indexBuffer) {
          e.indexBuffer = e.buffers[a.buffers.indexOf(a.indexBuffer)], e.indexBuffer.type = Gt.ELEMENT_ARRAY_BUFFER;
          let o = 0,
            h = 0,
            l = 0,
            u = 0;
          for (let c = 0; c < a.buffers.length; c++)
            if (a.buffers[c] !== a.indexBuffer) {
              u = c;
              break
            } for (const c in a.attributes) {
            const d = a.attributes[c];
            (d.buffer | 0) === u && (h += d.size * fo[d.type] / 4)
          }
          for (let c = 0; c < t.length; c++) {
            const d = t[c].indexBuffer.data;
            for (let f = 0; f < d.length; f++) e.indexBuffer.data[f + l] += o;
            o += t[c].buffers[u].data.length / h, l += d.length
          }
        }
        return e
      }
    }
    class Gr extends ae {
      constructor(t = !1) {
        super(), this._buffer = new nt(null, t, !1), this._indexBuffer = new nt(null, t, !0), this.addAttribute("aVertexPosition", this._buffer, 2, !1, k.FLOAT).addAttribute("aTextureCoord", this._buffer, 2, !1, k.FLOAT).addAttribute("aColor", this._buffer, 4, !0, k.UNSIGNED_BYTE).addAttribute("aTextureId", this._buffer, 1, !0, k.FLOAT).addIndex(this._indexBuffer)
      }
    }
    const _s = Math.PI * 2,
      po = 180 / Math.PI,
      mo = Math.PI / 180;
    var ft = (i => (i[i.POLY = 0] = "POLY", i[i.RECT = 1] = "RECT", i[i.CIRC = 2] = "CIRC", i[i.ELIP = 3] = "ELIP", i[i.RREC = 4] = "RREC", i))(ft || {});
    class q {
      constructor(t = 0, e = 0) {
        this.x = 0, this.y = 0, this.x = t, this.y = e
      }
      clone() {
        return new q(this.x, this.y)
      }
      copyFrom(t) {
        return this.set(t.x, t.y), this
      }
      copyTo(t) {
        return t.set(this.x, this.y), t
      }
      equals(t) {
        return t.x === this.x && t.y === this.y
      }
      set(t = 0, e = t) {
        return this.x = t, this.y = e, this
      }
    }
    const di = [new q, new q, new q, new q];
    class j {
      constructor(t = 0, e = 0, s = 0, r = 0) {
        this.x = Number(t), this.y = Number(e), this.width = Number(s), this.height = Number(r), this.type = ft.RECT
      }
      get left() {
        return this.x
      }
      get right() {
        return this.x + this.width
      }
      get top() {
        return this.y
      }
      get bottom() {
        return this.y + this.height
      }
      static get EMPTY() {
        return new j(0, 0, 0, 0)
      }
      clone() {
        return new j(this.x, this.y, this.width, this.height)
      }
      copyFrom(t) {
        return this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height, this
      }
      copyTo(t) {
        return t.x = this.x, t.y = this.y, t.width = this.width, t.height = this.height, t
      }
      contains(t, e) {
        return this.width <= 0 || this.height <= 0 ? !1 : t >= this.x && t < this.x + this.width && e >= this.y && e < this.y + this.height
      }
      intersects(t, e) {
        if (!e) {
          const w = this.x < t.x ? t.x : this.x;
          if ((this.right > t.right ? t.right : this.right) <= w) return !1;
          const F = this.y < t.y ? t.y : this.y;
          return (this.bottom > t.bottom ? t.bottom : this.bottom) > F
        }
        const s = this.left,
          r = this.right,
          n = this.top,
          a = this.bottom;
        if (r <= s || a <= n) return !1;
        const o = di[0].set(t.left, t.top),
          h = di[1].set(t.left, t.bottom),
          l = di[2].set(t.right, t.top),
          u = di[3].set(t.right, t.bottom);
        if (l.x <= o.x || h.y <= o.y) return !1;
        const c = Math.sign(e.a * e.d - e.b * e.c);
        if (c === 0 || (e.apply(o, o), e.apply(h, h), e.apply(l, l), e.apply(u, u), Math.max(o.x, h.x, l.x, u.x) <= s || Math.min(o.x, h.x, l.x, u.x) >= r || Math.max(o.y, h.y, l.y, u.y) <= n || Math.min(o.y, h.y, l.y, u.y) >= a)) return !1;
        const d = c * (h.y - o.y),
          f = c * (o.x - h.x),
          p = d * s + f * n,
          m = d * r + f * n,
          g = d * s + f * a,
          y = d * r + f * a;
        if (Math.max(p, m, g, y) <= d * o.x + f * o.y || Math.min(p, m, g, y) >= d * u.x + f * u.y) return !1;
        const b = c * (o.y - l.y),
          v = c * (l.x - o.x),
          x = b * s + v * n,
          E = b * r + v * n,
          M = b * s + v * a,
          S = b * r + v * a;
        return !(Math.max(x, E, M, S) <= b * o.x + v * o.y || Math.min(x, E, M, S) >= b * u.x + v * u.y)
      }
      pad(t = 0, e = t) {
        return this.x -= t, this.y -= e, this.width += t * 2, this.height += e * 2, this
      }
      fit(t) {
        const e = Math.max(this.x, t.x),
          s = Math.min(this.x + this.width, t.x + t.width),
          r = Math.max(this.y, t.y),
          n = Math.min(this.y + this.height, t.y + t.height);
        return this.x = e, this.width = Math.max(s - e, 0), this.y = r, this.height = Math.max(n - r, 0), this
      }
      ceil(t = 1, e = .001) {
        const s = Math.ceil((this.x + this.width - e) * t) / t,
          r = Math.ceil((this.y + this.height - e) * t) / t;
        return this.x = Math.floor((this.x + e) * t) / t, this.y = Math.floor((this.y + e) * t) / t, this.width = s - this.x, this.height = r - this.y, this
      }
      enlarge(t) {
        const e = Math.min(this.x, t.x),
          s = Math.max(this.x + this.width, t.x + t.width),
          r = Math.min(this.y, t.y),
          n = Math.max(this.y + this.height, t.y + t.height);
        return this.x = e, this.width = s - e, this.y = r, this.height = n - r, this
      }
    }
    class fi {
      constructor(t = 0, e = 0, s = 0) {
        this.x = t, this.y = e, this.radius = s, this.type = ft.CIRC
      }
      clone() {
        return new fi(this.x, this.y, this.radius)
      }
      contains(t, e) {
        if (this.radius <= 0) return !1;
        const s = this.radius * this.radius;
        let r = this.x - t,
          n = this.y - e;
        return r *= r, n *= n, r + n <= s
      }
      getBounds() {
        return new j(this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2)
      }
    }
    class pi {
      constructor(t = 0, e = 0, s = 0, r = 0) {
        this.x = t, this.y = e, this.width = s, this.height = r, this.type = ft.ELIP
      }
      clone() {
        return new pi(this.x, this.y, this.width, this.height)
      }
      contains(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        let s = (t - this.x) / this.width,
          r = (e - this.y) / this.height;
        return s *= s, r *= r, s + r <= 1
      }
      getBounds() {
        return new j(this.x - this.width, this.y - this.height, this.width, this.height)
      }
    }
    class Pe {
      constructor(...t) {
        let e = Array.isArray(t[0]) ? t[0] : t;
        if (typeof e[0] != "number") {
          const s = [];
          for (let r = 0, n = e.length; r < n; r++) s.push(e[r].x, e[r].y);
          e = s
        }
        this.points = e, this.type = ft.POLY, this.closeStroke = !0
      }
      clone() {
        const t = this.points.slice(),
          e = new Pe(t);
        return e.closeStroke = this.closeStroke, e
      }
      contains(t, e) {
        let s = !1;
        const r = this.points.length / 2;
        for (let n = 0, a = r - 1; n < r; a = n++) {
          const o = this.points[n * 2],
            h = this.points[n * 2 + 1],
            l = this.points[a * 2],
            u = this.points[a * 2 + 1];
          h > e != u > e && t < (l - o) * ((e - h) / (u - h)) + o && (s = !s)
        }
        return s
      }
    }
    class mi {
      constructor(t = 0, e = 0, s = 0, r = 0, n = 20) {
        this.x = t, this.y = e, this.width = s, this.height = r, this.radius = n, this.type = ft.RREC
      }
      clone() {
        return new mi(this.x, this.y, this.width, this.height, this.radius)
      }
      contains(t, e) {
        if (this.width <= 0 || this.height <= 0) return !1;
        if (t >= this.x && t <= this.x + this.width && e >= this.y && e <= this.y + this.height) {
          const s = Math.max(0, Math.min(this.radius, Math.min(this.width, this.height) / 2));
          if (e >= this.y + s && e <= this.y + this.height - s || t >= this.x + s && t <= this.x + this.width - s) return !0;
          let r = t - (this.x + s),
            n = e - (this.y + s);
          const a = s * s;
          if (r * r + n * n <= a || (r = t - (this.x + this.width - s), r * r + n * n <= a) || (n = e - (this.y + this.height - s), r * r + n * n <= a) || (r = t - (this.x + s), r * r + n * n <= a)) return !0
        }
        return !1
      }
    }
    class tt {
      constructor(t = 1, e = 0, s = 0, r = 1, n = 0, a = 0) {
        this.array = null, this.a = t, this.b = e, this.c = s, this.d = r, this.tx = n, this.ty = a
      }
      fromArray(t) {
        this.a = t[0], this.b = t[1], this.c = t[3], this.d = t[4], this.tx = t[2], this.ty = t[5]
      }
      set(t, e, s, r, n, a) {
        return this.a = t, this.b = e, this.c = s, this.d = r, this.tx = n, this.ty = a, this
      }
      toArray(t, e) {
        this.array || (this.array = new Float32Array(9));
        const s = e || this.array;
        return t ? (s[0] = this.a, s[1] = this.b, s[2] = 0, s[3] = this.c, s[4] = this.d, s[5] = 0, s[6] = this.tx, s[7] = this.ty, s[8] = 1) : (s[0] = this.a, s[1] = this.c, s[2] = this.tx, s[3] = this.b, s[4] = this.d, s[5] = this.ty, s[6] = 0, s[7] = 0, s[8] = 1), s
      }
      apply(t, e) {
        e = e || new q;
        const s = t.x,
          r = t.y;
        return e.x = this.a * s + this.c * r + this.tx, e.y = this.b * s + this.d * r + this.ty, e
      }
      applyInverse(t, e) {
        e = e || new q;
        const s = 1 / (this.a * this.d + this.c * -this.b),
          r = t.x,
          n = t.y;
        return e.x = this.d * s * r + -this.c * s * n + (this.ty * this.c - this.tx * this.d) * s, e.y = this.a * s * n + -this.b * s * r + (-this.ty * this.a + this.tx * this.b) * s, e
      }
      translate(t, e) {
        return this.tx += t, this.ty += e, this
      }
      scale(t, e) {
        return this.a *= t, this.d *= e, this.c *= t, this.b *= e, this.tx *= t, this.ty *= e, this
      }
      rotate(t) {
        const e = Math.cos(t),
          s = Math.sin(t),
          r = this.a,
          n = this.c,
          a = this.tx;
        return this.a = r * e - this.b * s, this.b = r * s + this.b * e, this.c = n * e - this.d * s, this.d = n * s + this.d * e, this.tx = a * e - this.ty * s, this.ty = a * s + this.ty * e, this
      }
      append(t) {
        const e = this.a,
          s = this.b,
          r = this.c,
          n = this.d;
        return this.a = t.a * e + t.b * r, this.b = t.a * s + t.b * n, this.c = t.c * e + t.d * r, this.d = t.c * s + t.d * n, this.tx = t.tx * e + t.ty * r + this.tx, this.ty = t.tx * s + t.ty * n + this.ty, this
      }
      setTransform(t, e, s, r, n, a, o, h, l) {
        return this.a = Math.cos(o + l) * n, this.b = Math.sin(o + l) * n, this.c = -Math.sin(o - h) * a, this.d = Math.cos(o - h) * a, this.tx = t - (s * this.a + r * this.c), this.ty = e - (s * this.b + r * this.d), this
      }
      prepend(t) {
        const e = this.tx;
        if (t.a !== 1 || t.b !== 0 || t.c !== 0 || t.d !== 1) {
          const s = this.a,
            r = this.c;
          this.a = s * t.a + this.b * t.c, this.b = s * t.b + this.b * t.d, this.c = r * t.a + this.d * t.c, this.d = r * t.b + this.d * t.d
        }
        return this.tx = e * t.a + this.ty * t.c + t.tx, this.ty = e * t.b + this.ty * t.d + t.ty, this
      }
      decompose(t) {
        const e = this.a,
          s = this.b,
          r = this.c,
          n = this.d,
          a = t.pivot,
          o = -Math.atan2(-r, n),
          h = Math.atan2(s, e),
          l = Math.abs(o + h);
        return l < 1e-5 || Math.abs(_s - l) < 1e-5 ? (t.rotation = h, t.skew.x = t.skew.y = 0) : (t.rotation = 0, t.skew.x = o, t.skew.y = h), t.scale.x = Math.sqrt(e * e + s * s), t.scale.y = Math.sqrt(r * r + n * n), t.position.x = this.tx + (a.x * e + a.y * r), t.position.y = this.ty + (a.x * s + a.y * n), t
      }
      invert() {
        const t = this.a,
          e = this.b,
          s = this.c,
          r = this.d,
          n = this.tx,
          a = t * r - e * s;
        return this.a = r / a, this.b = -e / a, this.c = -s / a, this.d = t / a, this.tx = (s * this.ty - r * n) / a, this.ty = -(t * this.ty - e * n) / a, this
      }
      identity() {
        return this.a = 1, this.b = 0, this.c = 0, this.d = 1, this.tx = 0, this.ty = 0, this
      }
      clone() {
        const t = new tt;
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
      }
      copyTo(t) {
        return t.a = this.a, t.b = this.b, t.c = this.c, t.d = this.d, t.tx = this.tx, t.ty = this.ty, t
      }
      copyFrom(t) {
        return this.a = t.a, this.b = t.b, this.c = t.c, this.d = t.d, this.tx = t.tx, this.ty = t.ty, this
      }
      static get IDENTITY() {
        return new tt
      }
      static get TEMP_MATRIX() {
        return new tt
      }
    }
    const Me = [1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1, 0, 1],
      De = [0, 1, 1, 1, 0, -1, -1, -1, 0, 1, 1, 1, 0, -1, -1, -1],
      Oe = [0, -1, -1, -1, 0, 1, 1, 1, 0, 1, 1, 1, 0, -1, -1, -1],
      Be = [1, 1, 0, -1, -1, -1, 0, 1, -1, -1, 0, 1, 1, 1, 0, -1],
      $r = [],
      go = [],
      gi = Math.sign;
  
    function Vc() {
      for (let i = 0; i < 16; i++) {
        const t = [];
        $r.push(t);
        for (let e = 0; e < 16; e++) {
          const s = gi(Me[i] * Me[e] + Oe[i] * De[e]),
            r = gi(De[i] * Me[e] + Be[i] * De[e]),
            n = gi(Me[i] * Oe[e] + Oe[i] * Be[e]),
            a = gi(De[i] * Oe[e] + Be[i] * Be[e]);
          for (let o = 0; o < 16; o++)
            if (Me[o] === s && De[o] === r && Oe[o] === n && Be[o] === a) {
              t.push(o);
              break
            }
        }
      }
      for (let i = 0; i < 16; i++) {
        const t = new tt;
        t.set(Me[i], De[i], Oe[i], Be[i], 0, 0), go.push(t)
      }
    }
    Vc();
    const et = {
      E: 0,
      SE: 1,
      S: 2,
      SW: 3,
      W: 4,
      NW: 5,
      N: 6,
      NE: 7,
      MIRROR_VERTICAL: 8,
      MAIN_DIAGONAL: 10,
      MIRROR_HORIZONTAL: 12,
      REVERSE_DIAGONAL: 14,
      uX: i => Me[i],
      uY: i => De[i],
      vX: i => Oe[i],
      vY: i => Be[i],
      inv: i => i & 8 ? i & 15 : -i & 7,
      add: (i, t) => $r[i][t],
      sub: (i, t) => $r[i][et.inv(t)],
      rotate180: i => i ^ 4,
      isVertical: i => (i & 3) === 2,
      byDirection: (i, t) => Math.abs(i) * 2 <= Math.abs(t) ? t >= 0 ? et.S : et.N : Math.abs(t) * 2 <= Math.abs(i) ? i > 0 ? et.E : et.W : t > 0 ? i > 0 ? et.SE : et.SW : i > 0 ? et.NE : et.NW,
      matrixAppendRotationInv: (i, t, e = 0, s = 0) => {
        const r = go[et.inv(t)];
        r.tx = e, r.ty = s, i.append(r)
      }
    };
    class oe {
      constructor(t, e, s = 0, r = 0) {
        this._x = s, this._y = r, this.cb = t, this.scope = e
      }
      clone(t = this.cb, e = this.scope) {
        return new oe(t, e, this._x, this._y)
      }
      set(t = 0, e = t) {
        return (this._x !== t || this._y !== e) && (this._x = t, this._y = e, this.cb.call(this.scope)), this
      }
      copyFrom(t) {
        return (this._x !== t.x || this._y !== t.y) && (this._x = t.x, this._y = t.y, this.cb.call(this.scope)), this
      }
      copyTo(t) {
        return t.set(this._x, this._y), t
      }
      equals(t) {
        return t.x === this._x && t.y === this._y
      }
      get x() {
        return this._x
      }
      set x(t) {
        this._x !== t && (this._x = t, this.cb.call(this.scope))
      }
      get y() {
        return this._y
      }
      set y(t) {
        this._y !== t && (this._y = t, this.cb.call(this.scope))
      }
    }
    const Hr = class {
      constructor() {
        this.worldTransform = new tt, this.localTransform = new tt, this.position = new oe(this.onChange, this, 0, 0), this.scale = new oe(this.onChange, this, 1, 1), this.pivot = new oe(this.onChange, this, 0, 0), this.skew = new oe(this.updateSkew, this, 0, 0), this._rotation = 0, this._cx = 1, this._sx = 0, this._cy = 0, this._sy = 1, this._localID = 0, this._currentLocalID = 0, this._worldID = 0, this._parentID = 0
      }
      onChange() {
        this._localID++
      }
      updateSkew() {
        this._cx = Math.cos(this._rotation + this.skew.y), this._sx = Math.sin(this._rotation + this.skew.y), this._cy = -Math.sin(this._rotation - this.skew.x), this._sy = Math.cos(this._rotation - this.skew.x), this._localID++
      }
      updateLocalTransform() {
        const t = this.localTransform;
        this._localID !== this._currentLocalID && (t.a = this._cx * this.scale.x, t.b = this._sx * this.scale.x, t.c = this._cy * this.scale.y, t.d = this._sy * this.scale.y, t.tx = this.position.x - (this.pivot.x * t.a + this.pivot.y * t.c), t.ty = this.position.y - (this.pivot.x * t.b + this.pivot.y * t.d), this._currentLocalID = this._localID, this._parentID = -1)
      }
      updateTransform(t) {
        const e = this.localTransform;
        if (this._localID !== this._currentLocalID && (e.a = this._cx * this.scale.x, e.b = this._sx * this.scale.x, e.c = this._cy * this.scale.y, e.d = this._sy * this.scale.y, e.tx = this.position.x - (this.pivot.x * e.a + this.pivot.y * e.c), e.ty = this.position.y - (this.pivot.x * e.b + this.pivot.y * e.d), this._currentLocalID = this._localID, this._parentID = -1), this._parentID !== t._worldID) {
          const s = t.worldTransform,
            r = this.worldTransform;
          r.a = e.a * s.a + e.b * s.c, r.b = e.a * s.b + e.b * s.d, r.c = e.c * s.a + e.d * s.c, r.d = e.c * s.b + e.d * s.d, r.tx = e.tx * s.a + e.ty * s.c + s.tx, r.ty = e.tx * s.b + e.ty * s.d + s.ty, this._parentID = t._worldID, this._worldID++
        }
      }
      setFromMatrix(t) {
        t.decompose(this), this._localID++
      }
      get rotation() {
        return this._rotation
      }
      set rotation(t) {
        this._rotation !== t && (this._rotation = t, this.updateSkew())
      }
    };
    Hr.IDENTITY = new Hr;
    let _i = Hr;
    var Xc = `varying vec2 vTextureCoord;
  
  uniform sampler2D uSampler;
  
  void main(void){
     gl_FragColor *= texture2D(uSampler, vTextureCoord);
  }`,
      jc = `attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat3 projectionMatrix;
  
  varying vec2 vTextureCoord;
  
  void main(void){
     gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
     vTextureCoord = aTextureCoord;
  }
  `;
  
    function _o(i, t, e) {
      const s = i.createShader(t);
      return i.shaderSource(s, e), i.compileShader(s), s
    }
  
    function Vr(i) {
      const t = new Array(i);
      for (let e = 0; e < t.length; e++) t[e] = !1;
      return t
    }
  
    function vo(i, t) {
      switch (i) {
        case "float":
          return 0;
        case "vec2":
          return new Float32Array(2 * t);
        case "vec3":
          return new Float32Array(3 * t);
        case "vec4":
          return new Float32Array(4 * t);
        case "int":
        case "uint":
        case "sampler2D":
        case "sampler2DArray":
          return 0;
        case "ivec2":
          return new Int32Array(2 * t);
        case "ivec3":
          return new Int32Array(3 * t);
        case "ivec4":
          return new Int32Array(4 * t);
        case "uvec2":
          return new Uint32Array(2 * t);
        case "uvec3":
          return new Uint32Array(3 * t);
        case "uvec4":
          return new Uint32Array(4 * t);
        case "bool":
          return !1;
        case "bvec2":
          return Vr(2 * t);
        case "bvec3":
          return Vr(3 * t);
        case "bvec4":
          return Vr(4 * t);
        case "mat2":
          return new Float32Array([1, 0, 0, 1]);
        case "mat3":
          return new Float32Array([1, 0, 0, 0, 1, 0, 0, 0, 1]);
        case "mat4":
          return new Float32Array([1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1])
      }
      return null
    }
    const Fe = [{
        test: i => i.type === "float" && i.size === 1 && !i.isArray,
        code: i => `
              if(uv["${i}"] !== ud["${i}"].value)
              {
                  ud["${i}"].value = uv["${i}"]
                  gl.uniform1f(ud["${i}"].location, uv["${i}"])
              }
              `
      }, {
        test: (i, t) => (i.type === "sampler2D" || i.type === "samplerCube" || i.type === "sampler2DArray") && i.size === 1 && !i.isArray && (t == null || t.castToBaseTexture !== void 0),
        code: i => `t = syncData.textureCount++;
  
              renderer.texture.bind(uv["${i}"], t);
  
              if(ud["${i}"].value !== t)
              {
                  ud["${i}"].value = t;
                  gl.uniform1i(ud["${i}"].location, t);
  ; // eslint-disable-line max-len
              }`
      }, {
        test: (i, t) => i.type === "mat3" && i.size === 1 && !i.isArray && t.a !== void 0,
        code: i => `
              gl.uniformMatrix3fv(ud["${i}"].location, false, uv["${i}"].toArray(true));
              `,
        codeUbo: i => `
                  var ${i}_matrix = uv.${i}.toArray(true);
  
                  data[offset] = ${i}_matrix[0];
                  data[offset+1] = ${i}_matrix[1];
                  data[offset+2] = ${i}_matrix[2];
          
                  data[offset + 4] = ${i}_matrix[3];
                  data[offset + 5] = ${i}_matrix[4];
                  data[offset + 6] = ${i}_matrix[5];
          
                  data[offset + 8] = ${i}_matrix[6];
                  data[offset + 9] = ${i}_matrix[7];
                  data[offset + 10] = ${i}_matrix[8];
              `
      }, {
        test: (i, t) => i.type === "vec2" && i.size === 1 && !i.isArray && t.x !== void 0,
        code: i => `
                  cv = ud["${i}"].value;
                  v = uv["${i}"];
  
                  if(cv[0] !== v.x || cv[1] !== v.y)
                  {
                      cv[0] = v.x;
                      cv[1] = v.y;
                      gl.uniform2f(ud["${i}"].location, v.x, v.y);
                  }`,
        codeUbo: i => `
                  v = uv.${i};
  
                  data[offset] = v.x;
                  data[offset+1] = v.y;
              `
      }, {
        test: i => i.type === "vec2" && i.size === 1 && !i.isArray,
        code: i => `
                  cv = ud["${i}"].value;
                  v = uv["${i}"];
  
                  if(cv[0] !== v[0] || cv[1] !== v[1])
                  {
                      cv[0] = v[0];
                      cv[1] = v[1];
                      gl.uniform2f(ud["${i}"].location, v[0], v[1]);
                  }
              `
      }, {
        test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.width !== void 0,
        code: i => `
                  cv = ud["${i}"].value;
                  v = uv["${i}"];
  
                  if(cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height)
                  {
                      cv[0] = v.x;
                      cv[1] = v.y;
                      cv[2] = v.width;
                      cv[3] = v.height;
                      gl.uniform4f(ud["${i}"].location, v.x, v.y, v.width, v.height)
                  }`,
        codeUbo: i => `
                      v = uv.${i};
  
                      data[offset] = v.x;
                      data[offset+1] = v.y;
                      data[offset+2] = v.width;
                      data[offset+3] = v.height;
                  `
      }, {
        test: (i, t) => i.type === "vec4" && i.size === 1 && !i.isArray && t.red !== void 0,
        code: i => `
                  cv = ud["${i}"].value;
                  v = uv["${i}"];
  
                  if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha)
                  {
                      cv[0] = v.red;
                      cv[1] = v.green;
                      cv[2] = v.blue;
                      cv[3] = v.alpha;
                      gl.uniform4f(ud["${i}"].location, v.red, v.green, v.blue, v.alpha)
                  }`,
        codeUbo: i => `
                      v = uv.${i};
  
                      data[offset] = v.red;
                      data[offset+1] = v.green;
                      data[offset+2] = v.blue;
                      data[offset+3] = v.alpha;
                  `
      }, {
        test: (i, t) => i.type === "vec3" && i.size === 1 && !i.isArray && t.red !== void 0,
        code: i => `
                  cv = ud["${i}"].value;
                  v = uv["${i}"];
  
                  if(cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.a)
                  {
                      cv[0] = v.red;
                      cv[1] = v.green;
                      cv[2] = v.blue;
      
                      gl.uniform3f(ud["${i}"].location, v.red, v.green, v.blue)
                  }`,
        codeUbo: i => `
                      v = uv.${i};
  
                      data[offset] = v.red;
                      data[offset+1] = v.green;
                      data[offset+2] = v.blue;
                  `
      }, {
        test: i => i.type === "vec4" && i.size === 1 && !i.isArray,
        code: i => `
                  cv = ud["${i}"].value;
                  v = uv["${i}"];
  
                  if(cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
                  {
                      cv[0] = v[0];
                      cv[1] = v[1];
                      cv[2] = v[2];
                      cv[3] = v[3];
  
                      gl.uniform4f(ud["${i}"].location, v[0], v[1], v[2], v[3])
                  }`
      }],
      zc = {
        float: `
      if (cv !== v)
      {
          cu.value = v;
          gl.uniform1f(location, v);
      }`,
        vec2: `
      if (cv[0] !== v[0] || cv[1] !== v[1])
      {
          cv[0] = v[0];
          cv[1] = v[1];
  
          gl.uniform2f(location, v[0], v[1])
      }`,
        vec3: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
  
          gl.uniform3f(location, v[0], v[1], v[2])
      }`,
        vec4: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
          cv[3] = v[3];
  
          gl.uniform4f(location, v[0], v[1], v[2], v[3]);
      }`,
        int: `
      if (cv !== v)
      {
          cu.value = v;
  
          gl.uniform1i(location, v);
      }`,
        ivec2: `
      if (cv[0] !== v[0] || cv[1] !== v[1])
      {
          cv[0] = v[0];
          cv[1] = v[1];
  
          gl.uniform2i(location, v[0], v[1]);
      }`,
        ivec3: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
  
          gl.uniform3i(location, v[0], v[1], v[2]);
      }`,
        ivec4: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
          cv[3] = v[3];
  
          gl.uniform4i(location, v[0], v[1], v[2], v[3]);
      }`,
        uint: `
      if (cv !== v)
      {
          cu.value = v;
  
          gl.uniform1ui(location, v);
      }`,
        uvec2: `
      if (cv[0] !== v[0] || cv[1] !== v[1])
      {
          cv[0] = v[0];
          cv[1] = v[1];
  
          gl.uniform2ui(location, v[0], v[1]);
      }`,
        uvec3: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
  
          gl.uniform3ui(location, v[0], v[1], v[2]);
      }`,
        uvec4: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
          cv[3] = v[3];
  
          gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
      }`,
        bool: `
      if (cv !== v)
      {
          cu.value = v;
          gl.uniform1i(location, v);
      }`,
        bvec2: `
      if (cv[0] != v[0] || cv[1] != v[1])
      {
          cv[0] = v[0];
          cv[1] = v[1];
  
          gl.uniform2i(location, v[0], v[1]);
      }`,
        bvec3: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
  
          gl.uniform3i(location, v[0], v[1], v[2]);
      }`,
        bvec4: `
      if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3])
      {
          cv[0] = v[0];
          cv[1] = v[1];
          cv[2] = v[2];
          cv[3] = v[3];
  
          gl.uniform4i(location, v[0], v[1], v[2], v[3]);
      }`,
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        sampler2D: `
      if (cv !== v)
      {
          cu.value = v;
  
          gl.uniform1i(location, v);
      }`,
        samplerCube: `
      if (cv !== v)
      {
          cu.value = v;
  
          gl.uniform1i(location, v);
      }`,
        sampler2DArray: `
      if (cv !== v)
      {
          cu.value = v;
  
          gl.uniform1i(location, v);
      }`
      },
      Wc = {
        float: "gl.uniform1fv(location, v)",
        vec2: "gl.uniform2fv(location, v)",
        vec3: "gl.uniform3fv(location, v)",
        vec4: "gl.uniform4fv(location, v)",
        mat4: "gl.uniformMatrix4fv(location, false, v)",
        mat3: "gl.uniformMatrix3fv(location, false, v)",
        mat2: "gl.uniformMatrix2fv(location, false, v)",
        int: "gl.uniform1iv(location, v)",
        ivec2: "gl.uniform2iv(location, v)",
        ivec3: "gl.uniform3iv(location, v)",
        ivec4: "gl.uniform4iv(location, v)",
        uint: "gl.uniform1uiv(location, v)",
        uvec2: "gl.uniform2uiv(location, v)",
        uvec3: "gl.uniform3uiv(location, v)",
        uvec4: "gl.uniform4uiv(location, v)",
        bool: "gl.uniform1iv(location, v)",
        bvec2: "gl.uniform2iv(location, v)",
        bvec3: "gl.uniform3iv(location, v)",
        bvec4: "gl.uniform4iv(location, v)",
        sampler2D: "gl.uniform1iv(location, v)",
        samplerCube: "gl.uniform1iv(location, v)",
        sampler2DArray: "gl.uniform1iv(location, v)"
      };
  
    function Yc(i, t) {
      var e;
      const s = [`
          var v = null;
          var cv = null;
          var cu = null;
          var t = 0;
          var gl = renderer.gl;
      `];
      for (const r in i.uniforms) {
        const n = t[r];
        if (!n) {
          ((e = i.uniforms[r]) == null ? void 0 : e.group) === !0 && (i.uniforms[r].ubo ? s.push(`
                          renderer.shader.syncUniformBufferGroup(uv.${r}, '${r}');
                      `) : s.push(`
                          renderer.shader.syncUniformGroup(uv.${r}, syncData);
                      `));
          continue
        }
        const a = i.uniforms[r];
        let o = !1;
        for (let h = 0; h < Fe.length; h++)
          if (Fe[h].test(n, a)) {
            s.push(Fe[h].code(r, a)), o = !0;
            break
          } if (!o) {
          const h = (n.size === 1 && !n.isArray ? zc : Wc)[n.type].replace("location", `ud["${r}"].location`);
          s.push(`
              cu = ud["${r}"];
              cv = cu.value;
              v = uv["${r}"];
              ${h};`)
        }
      }
      return new Function("ud", "uv", "renderer", "syncData", s.join(`
  `))
    }
    const yo = {};
    let vs = yo;
  
    function xo() {
      if (vs === yo || vs != null && vs.isContextLost()) {
        const i = O.ADAPTER.createCanvas();
        let t;
        O.PREFER_ENV >= _e.WEBGL2 && (t = i.getContext("webgl2", {})), t || (t = i.getContext("webgl", {}) || i.getContext("experimental-webgl", {}), t ? t.getExtension("WEBGL_draw_buffers") : t = null), vs = t
      }
      return vs
    }
    let vi;
  
    function qc() {
      if (!vi) {
        vi = At.MEDIUM;
        const i = xo();
        i && i.getShaderPrecisionFormat && (vi = i.getShaderPrecisionFormat(i.FRAGMENT_SHADER, i.HIGH_FLOAT).precision ? At.HIGH : At.MEDIUM)
      }
      return vi
    }
  
    function bo(i, t) {
      const e = i.getShaderSource(t).split(`
  `).map((l, u) => `${u}: ${l}`),
        s = i.getShaderInfoLog(t),
        r = s.split(`
  `),
        n = {},
        a = r.map(l => parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/, "$1"))).filter(l => l && !n[l] ? (n[l] = !0, !0) : !1),
        o = [""];
      a.forEach(l => {
        e[l - 1] = `%c${e[l-1]}%c`, o.push("background: #FF0000; color:#FFFFFF; font-size: 10px", "font-size: 10px")
      });
      const h = e.join(`
  `);
      o[0] = h, console.error(s), console.groupCollapsed("click to view full shader code"), console.warn(...o), console.groupEnd()
    }
  
    function Kc(i, t, e, s) {
      i.getProgramParameter(t, i.LINK_STATUS) || (i.getShaderParameter(e, i.COMPILE_STATUS) || bo(i, e), i.getShaderParameter(s, i.COMPILE_STATUS) || bo(i, s), console.error("PixiJS Error: Could not initialize shader."), i.getProgramInfoLog(t) !== "" && console.warn("PixiJS Warning: gl.getProgramInfoLog()", i.getProgramInfoLog(t)))
    }
    const Zc = {
      float: 1,
      vec2: 2,
      vec3: 3,
      vec4: 4,
      int: 1,
      ivec2: 2,
      ivec3: 3,
      ivec4: 4,
      uint: 1,
      uvec2: 2,
      uvec3: 3,
      uvec4: 4,
      bool: 1,
      bvec2: 2,
      bvec3: 3,
      bvec4: 4,
      mat2: 4,
      mat3: 9,
      mat4: 16,
      sampler2D: 1
    };
  
    function To(i) {
      return Zc[i]
    }
    let yi = null;
    const Eo = {
      FLOAT: "float",
      FLOAT_VEC2: "vec2",
      FLOAT_VEC3: "vec3",
      FLOAT_VEC4: "vec4",
      INT: "int",
      INT_VEC2: "ivec2",
      INT_VEC3: "ivec3",
      INT_VEC4: "ivec4",
      UNSIGNED_INT: "uint",
      UNSIGNED_INT_VEC2: "uvec2",
      UNSIGNED_INT_VEC3: "uvec3",
      UNSIGNED_INT_VEC4: "uvec4",
      BOOL: "bool",
      BOOL_VEC2: "bvec2",
      BOOL_VEC3: "bvec3",
      BOOL_VEC4: "bvec4",
      FLOAT_MAT2: "mat2",
      FLOAT_MAT3: "mat3",
      FLOAT_MAT4: "mat4",
      SAMPLER_2D: "sampler2D",
      INT_SAMPLER_2D: "sampler2D",
      UNSIGNED_INT_SAMPLER_2D: "sampler2D",
      SAMPLER_CUBE: "samplerCube",
      INT_SAMPLER_CUBE: "samplerCube",
      UNSIGNED_INT_SAMPLER_CUBE: "samplerCube",
      SAMPLER_2D_ARRAY: "sampler2DArray",
      INT_SAMPLER_2D_ARRAY: "sampler2DArray",
      UNSIGNED_INT_SAMPLER_2D_ARRAY: "sampler2DArray"
    };
  
    function Ao(i, t) {
      if (!yi) {
        const e = Object.keys(Eo);
        yi = {};
        for (let s = 0; s < e.length; ++s) {
          const r = e[s];
          yi[i[r]] = Eo[r]
        }
      }
      return yi[t]
    }
  
    function wo(i, t, e) {
      if (i.substring(0, 9) !== "precision") {
        let s = t;
        return t === At.HIGH && e !== At.HIGH && (s = At.MEDIUM), `precision ${s} float;
  ${i}`
      } else if (e !== At.HIGH && i.substring(0, 15) === "precision highp") return i.replace("precision highp", "precision mediump");
      return i
    }
    let ys;
  
    function So() {
      if (typeof ys == "boolean") return ys;
      try {
        ys = new Function("param1", "param2", "param3", "return param1[param2] === param3;")({
          a: "b"
        }, "a", "b") === !0
      } catch (i) {
        ys = !1
      }
      return ys
    }
    let Qc = 0;
    const xi = {},
      Xr = class ss {
        constructor(t, e, s = "pixi-shader", r = {}) {
          this.extra = {}, this.id = Qc++, this.vertexSrc = t || ss.defaultVertexSrc, this.fragmentSrc = e || ss.defaultFragmentSrc, this.vertexSrc = this.vertexSrc.trim(), this.fragmentSrc = this.fragmentSrc.trim(), this.extra = r, this.vertexSrc.substring(0, 8) !== "#version" && (s = s.replace(/\s+/g, "-"), xi[s] ? (xi[s]++, s += `-${xi[s]}`) : xi[s] = 1, this.vertexSrc = `#define SHADER_NAME ${s}
  ${this.vertexSrc}`, this.fragmentSrc = `#define SHADER_NAME ${s}
  ${this.fragmentSrc}`, this.vertexSrc = wo(this.vertexSrc, ss.defaultVertexPrecision, At.HIGH), this.fragmentSrc = wo(this.fragmentSrc, ss.defaultFragmentPrecision, qc())), this.glPrograms = {}, this.syncUniforms = null
        }
        static get defaultVertexSrc() {
          return jc
        }
        static get defaultFragmentSrc() {
          return Xc
        }
        static from(t, e, s) {
          const r = t + e;
          let n = Pr[r];
          return n || (Pr[r] = n = new ss(t, e, s)), n
        }
      };
    Xr.defaultVertexPrecision = At.HIGH, Xr.defaultFragmentPrecision = $t.apple.device ? At.HIGH : At.MEDIUM;
    let Qt = Xr,
      Jc = 0;
    class Ot {
      constructor(t, e, s) {
        this.group = !0, this.syncUniforms = {}, this.dirtyId = 0, this.id = Jc++, this.static = !!e, this.ubo = !!s, t instanceof nt ? (this.buffer = t, this.buffer.type = Gt.UNIFORM_BUFFER, this.autoManage = !1, this.ubo = !0) : (this.uniforms = t, this.ubo && (this.buffer = new nt(new Float32Array(1)), this.buffer.type = Gt.UNIFORM_BUFFER, this.autoManage = !0))
      }
      update() {
        this.dirtyId++, !this.autoManage && this.buffer && this.buffer.update()
      }
      add(t, e, s) {
        if (!this.ubo) this.uniforms[t] = new Ot(e, s);
        else throw new Error("[UniformGroup] uniform groups in ubo mode cannot be modified, or have uniform groups nested in them")
      }
      static from(t, e, s) {
        return new Ot(t, e, s)
      }
      static uboFrom(t, e) {
        return new Ot(t, e != null ? e : !0, !0)
      }
    }
    class Vt {
      constructor(t, e) {
        this.uniformBindCount = 0, this.program = t, e ? e instanceof Ot ? this.uniformGroup = e : this.uniformGroup = new Ot(e) : this.uniformGroup = new Ot({}), this.disposeRunner = new St("disposeShader")
      }
      checkUniformExists(t, e) {
        if (e.uniforms[t]) return !0;
        for (const s in e.uniforms) {
          const r = e.uniforms[s];
          if (r.group === !0 && this.checkUniformExists(t, r)) return !0
        }
        return !1
      }
      destroy() {
        this.uniformGroup = null, this.disposeRunner.emit(this), this.disposeRunner.destroy()
      }
      get uniforms() {
        return this.uniformGroup.uniforms
      }
      static from(t, e, s) {
        const r = Qt.from(t, e);
        return new Vt(r, s)
      }
    }
    class Io {
      constructor(t, e) {
        if (this.vertexSrc = t, this.fragTemplate = e, this.programCache = {}, this.defaultGroupCache = {}, !e.includes("%count%")) throw new Error('Fragment template must contain "%count%".');
        if (!e.includes("%forloop%")) throw new Error('Fragment template must contain "%forloop%".')
      }
      generateShader(t) {
        if (!this.programCache[t]) {
          const s = new Int32Array(t);
          for (let n = 0; n < t; n++) s[n] = n;
          this.defaultGroupCache[t] = Ot.from({
            uSamplers: s
          }, !0);
          let r = this.fragTemplate;
          r = r.replace(/%count%/gi, `${t}`), r = r.replace(/%forloop%/gi, this.generateSampleSrc(t)), this.programCache[t] = new Qt(this.vertexSrc, r)
        }
        const e = {
          tint: new Float32Array([1, 1, 1, 1]),
          translationMatrix: new tt,
          default: this.defaultGroupCache[t]
        };
        return new Vt(this.programCache[t], e)
      }
      generateSampleSrc(t) {
        let e = "";
        e += `
  `, e += `
  `;
        for (let s = 0; s < t; s++) s > 0 && (e += `
  else `), s < t - 1 && (e += `if(vTextureId < ${s}.5)`), e += `
  {`, e += `
      color = texture2D(uSamplers[${s}], vTextureCoord);`, e += `
  }`;
        return e += `
  `, e += `
  `, e
      }
    }
    class bi {
      constructor() {
        this.elements = [], this.ids = [], this.count = 0
      }
      clear() {
        for (let t = 0; t < this.count; t++) this.elements[t] = null;
        this.count = 0
      }
    }
  
    function td() {
      return !$t.apple.device
    }
  
    function ed(i) {
      let t = !0;
      const e = O.ADAPTER.getNavigator();
      if ($t.tablet || $t.phone) {
        if ($t.apple.device) {
          const s = e.userAgent.match(/OS (\d+)_(\d+)?/);
          s && parseInt(s[1], 10) < 11 && (t = !1)
        }
        if ($t.android.device) {
          const s = e.userAgent.match(/Android\s([0-9.]*)/);
          s && parseInt(s[1], 10) < 7 && (t = !1)
        }
      }
      return t ? i : 4
    }
    class xs {
      constructor(t) {
        this.renderer = t
      }
      flush() {}
      destroy() {
        this.renderer = null
      }
      start() {}
      stop() {
        this.flush()
      }
      render(t) {}
    }
    var sd = `varying vec2 vTextureCoord;
  varying vec4 vColor;
  varying float vTextureId;
  uniform sampler2D uSamplers[%count%];
  
  void main(void){
      vec4 color;
      %forloop%
      gl_FragColor = color * vColor;
  }
  `,
      id = `precision highp float;
  attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  attribute vec4 aColor;
  attribute float aTextureId;
  
  uniform mat3 projectionMatrix;
  uniform mat3 translationMatrix;
  uniform vec4 tint;
  
  varying vec2 vTextureCoord;
  varying vec4 vColor;
  varying float vTextureId;
  
  void main(void){
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  
      vTextureCoord = aTextureCoord;
      vTextureId = aTextureId;
      vColor = aColor * tint;
  }
  `;
    const bs = class jt extends xs {
      constructor(t) {
        super(t), this.setShaderGenerator(), this.geometryClass = Gr, this.vertexSize = 6, this.state = Zt.for2d(), this.size = jt.defaultBatchSize * 4, this._vertexCount = 0, this._indexCount = 0, this._bufferedElements = [], this._bufferedTextures = [], this._bufferSize = 0, this._shader = null, this._packedGeometries = [], this._packedGeometryPoolSize = 2, this._flushId = 0, this._aBuffers = {}, this._iBuffers = {}, this.maxTextures = 1, this.renderer.on("prerender", this.onPrerender, this), t.runners.contextChange.add(this), this._dcIndex = 0, this._aIndex = 0, this._iIndex = 0, this._attributeBuffer = null, this._indexBuffer = null, this._tempBoundTextures = []
      }
      static get defaultMaxTextures() {
        var t;
        return this._defaultMaxTextures = (t = this._defaultMaxTextures) != null ? t : ed(32), this._defaultMaxTextures
      }
      static set defaultMaxTextures(t) {
        this._defaultMaxTextures = t
      }
      static get canUploadSameBuffer() {
        var t;
        return this._canUploadSameBuffer = (t = this._canUploadSameBuffer) != null ? t : td(), this._canUploadSameBuffer
      }
      static set canUploadSameBuffer(t) {
        this._canUploadSameBuffer = t
      }
      get MAX_TEXTURES() {
        return this.maxTextures
      }
      static get defaultVertexSrc() {
        return id
      }
      static get defaultFragmentTemplate() {
        return sd
      }
      setShaderGenerator({
        vertex: t = jt.defaultVertexSrc,
        fragment: e = jt.defaultFragmentTemplate
      } = {}) {
        this.shaderGenerator = new Io(t, e)
      }
      contextChange() {
        const t = this.renderer.gl;
        O.PREFER_ENV === _e.WEBGL_LEGACY ? this.maxTextures = 1 : (this.maxTextures = Math.min(t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS), jt.defaultMaxTextures), this.maxTextures = lo(this.maxTextures, t)), this._shader = this.shaderGenerator.generateShader(this.maxTextures);
        for (let e = 0; e < this._packedGeometryPoolSize; e++) this._packedGeometries[e] = new this.geometryClass;
        this.initFlushBuffers()
      }
      initFlushBuffers() {
        const {
          _drawCallPool: t,
          _textureArrayPool: e
        } = jt, s = this.size / 4, r = Math.floor(s / this.maxTextures) + 1;
        for (; t.length < s;) t.push(new ci);
        for (; e.length < r;) e.push(new bi);
        for (let n = 0; n < this.maxTextures; n++) this._tempBoundTextures[n] = null
      }
      onPrerender() {
        this._flushId = 0
      }
      render(t) {
        t._texture.valid && (this._vertexCount + t.vertexData.length / 2 > this.size && this.flush(), this._vertexCount += t.vertexData.length / 2, this._indexCount += t.indices.length, this._bufferedTextures[this._bufferSize] = t._texture.baseTexture, this._bufferedElements[this._bufferSize++] = t)
      }
      buildTexturesAndDrawCalls() {
        const {
          _bufferedTextures: t,
          maxTextures: e
        } = this, s = jt._textureArrayPool, r = this.renderer.batch, n = this._tempBoundTextures, a = this.renderer.textureGC.count;
        let o = ++X._globalBatch,
          h = 0,
          l = s[0],
          u = 0;
        r.copyBoundTextures(n, e);
        for (let c = 0; c < this._bufferSize; ++c) {
          const d = t[c];
          t[c] = null, d._batchEnabled !== o && (l.count >= e && (r.boundArray(l, n, o, e), this.buildDrawCalls(l, u, c), u = c, l = s[++h], ++o), d._batchEnabled = o, d.touched = a, l.elements[l.count++] = d)
        }
        l.count > 0 && (r.boundArray(l, n, o, e), this.buildDrawCalls(l, u, this._bufferSize), ++h, ++o);
        for (let c = 0; c < n.length; c++) n[c] = null;
        X._globalBatch = o
      }
      buildDrawCalls(t, e, s) {
        const {
          _bufferedElements: r,
          _attributeBuffer: n,
          _indexBuffer: a,
          vertexSize: o
        } = this, h = jt._drawCallPool;
        let l = this._dcIndex,
          u = this._aIndex,
          c = this._iIndex,
          d = h[l];
        d.start = this._iIndex, d.texArray = t;
        for (let f = e; f < s; ++f) {
          const p = r[f],
            m = p._texture.baseTexture,
            g = Ar[m.alphaMode ? 1 : 0][p.blendMode];
          r[f] = null, e < f && d.blend !== g && (d.size = c - d.start, e = f, d = h[++l], d.texArray = t, d.start = c), this.packInterleavedGeometry(p, n, a, u, c), u += p.vertexData.length / 2 * o, c += p.indices.length, d.blend = g
        }
        e < s && (d.size = c - d.start, ++l), this._dcIndex = l, this._aIndex = u, this._iIndex = c
      }
      bindAndClearTexArray(t) {
        const e = this.renderer.texture;
        for (let s = 0; s < t.count; s++) e.bind(t.elements[s], t.ids[s]), t.elements[s] = null;
        t.count = 0
      }
      updateGeometry() {
        const {
          _packedGeometries: t,
          _attributeBuffer: e,
          _indexBuffer: s
        } = this;
        jt.canUploadSameBuffer ? (t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(s), this.renderer.geometry.updateBuffers()) : (this._packedGeometryPoolSize <= this._flushId && (this._packedGeometryPoolSize++, t[this._flushId] = new this.geometryClass), t[this._flushId]._buffer.update(e.rawBinaryData), t[this._flushId]._indexBuffer.update(s), this.renderer.geometry.bind(t[this._flushId]), this.renderer.geometry.updateBuffers(), this._flushId++)
      }
      drawBatches() {
        const t = this._dcIndex,
          {
            gl: e,
            state: s
          } = this.renderer,
          r = jt._drawCallPool;
        let n = null;
        for (let a = 0; a < t; a++) {
          const {
            texArray: o,
            type: h,
            size: l,
            start: u,
            blend: c
          } = r[a];
          n !== o && (n = o, this.bindAndClearTexArray(o)), this.state.blendMode = c, s.set(this.state), e.drawElements(h, l, e.UNSIGNED_SHORT, u * 2)
        }
      }
      flush() {
        this._vertexCount !== 0 && (this._attributeBuffer = this.getAttributeBuffer(this._vertexCount), this._indexBuffer = this.getIndexBuffer(this._indexCount), this._aIndex = 0, this._iIndex = 0, this._dcIndex = 0, this.buildTexturesAndDrawCalls(), this.updateGeometry(), this.drawBatches(), this._bufferSize = 0, this._vertexCount = 0, this._indexCount = 0)
      }
      start() {
        this.renderer.state.set(this.state), this.renderer.texture.ensureSamplerType(this.maxTextures), this.renderer.shader.bind(this._shader), jt.canUploadSameBuffer && this.renderer.geometry.bind(this._packedGeometries[this._flushId])
      }
      stop() {
        this.flush()
      }
      destroy() {
        for (let t = 0; t < this._packedGeometryPoolSize; t++) this._packedGeometries[t] && this._packedGeometries[t].destroy();
        this.renderer.off("prerender", this.onPrerender, this), this._aBuffers = null, this._iBuffers = null, this._packedGeometries = null, this._attributeBuffer = null, this._indexBuffer = null, this._shader && (this._shader.destroy(), this._shader = null), super.destroy()
      }
      getAttributeBuffer(t) {
        const e = ps(Math.ceil(t / 8)),
          s = Ir(e),
          r = e * 8;
        this._aBuffers.length <= s && (this._iBuffers.length = s + 1);
        let n = this._aBuffers[r];
        return n || (this._aBuffers[r] = n = new li(r * this.vertexSize * 4)), n
      }
      getIndexBuffer(t) {
        const e = ps(Math.ceil(t / 12)),
          s = Ir(e),
          r = e * 12;
        this._iBuffers.length <= s && (this._iBuffers.length = s + 1);
        let n = this._iBuffers[s];
        return n || (this._iBuffers[s] = n = new Uint16Array(r)), n
      }
      packInterleavedGeometry(t, e, s, r, n) {
        const {
          uint32View: a,
          float32View: o
        } = e, h = r / this.vertexSize, l = t.uvs, u = t.indices, c = t.vertexData, d = t._texture.baseTexture._batchLocation, f = Math.min(t.worldAlpha, 1), p = Z.shared.setValue(t._tintRGB).toPremultiplied(f, t._texture.baseTexture.alphaMode > 0);
        for (let m = 0; m < c.length; m += 2) o[r++] = c[m], o[r++] = c[m + 1], o[r++] = l[m], o[r++] = l[m + 1], a[r++] = p, o[r++] = d;
        for (let m = 0; m < u.length; m++) s[n++] = h + u[m]
      }
    };
    bs.defaultBatchSize = 4096, bs.extension = {
      name: "batch",
      type: R.RendererPlugin
    }, bs._drawCallPool = [], bs._textureArrayPool = [];
    let ye = bs;
    L.add(ye);
    var rd = `varying vec2 vTextureCoord;
  
  uniform sampler2D uSampler;
  
  void main(void){
     gl_FragColor = texture2D(uSampler, vTextureCoord);
  }
  `,
      nd = `attribute vec2 aVertexPosition;
  
  uniform mat3 projectionMatrix;
  
  varying vec2 vTextureCoord;
  
  uniform vec4 inputSize;
  uniform vec4 outputFrame;
  
  vec4 filterVertexPosition( void )
  {
      vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
  
      return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
  }
  
  vec2 filterTextureCoord( void )
  {
      return aVertexPosition * (outputFrame.zw * inputSize.zw);
  }
  
  void main(void)
  {
      gl_Position = filterVertexPosition();
      vTextureCoord = filterTextureCoord();
  }
  `;
    const jr = class zs extends Vt {
      constructor(t, e, s) {
        const r = Qt.from(t || zs.defaultVertexSrc, e || zs.defaultFragmentSrc);
        super(r, s), this.padding = 0, this.resolution = zs.defaultResolution, this.multisample = zs.defaultMultisample, this.enabled = !0, this.autoFit = !0, this.state = new Zt
      }
      apply(t, e, s, r, n) {
        t.applyFilter(this, e, s, r)
      }
      get blendMode() {
        return this.state.blendMode
      }
      set blendMode(t) {
        this.state.blendMode = t
      }
      get resolution() {
        return this._resolution
      }
      set resolution(t) {
        this._resolution = t
      }
      static get defaultVertexSrc() {
        return nd
      }
      static get defaultFragmentSrc() {
        return rd
      }
    };
    jr.defaultResolution = 1, jr.defaultMultisample = at.NONE;
    let yt = jr;
    class Ts {
      constructor() {
        this.clearBeforeRender = !0, this._backgroundColor = new Z(0), this.alpha = 1
      }
      init(t) {
        this.clearBeforeRender = t.clearBeforeRender;
        const {
          backgroundColor: e,
          background: s,
          backgroundAlpha: r
        } = t, n = s != null ? s : e;
        n !== void 0 && (this.color = n), this.alpha = r
      }
      get color() {
        return this._backgroundColor.value
      }
      set color(t) {
        this._backgroundColor.setValue(t)
      }
      get alpha() {
        return this._backgroundColor.alpha
      }
      set alpha(t) {
        this._backgroundColor.setAlpha(t)
      }
      get backgroundColor() {
        return this._backgroundColor
      }
      destroy() {}
    }
    Ts.defaultOptions = {
      backgroundAlpha: 1,
      backgroundColor: 0,
      clearBeforeRender: !0
    }, Ts.extension = {
      type: [R.RendererSystem, R.CanvasRendererSystem],
      name: "background"
    }, L.add(Ts);
    class zr {
      constructor(t) {
        this.renderer = t, this.emptyRenderer = new xs(t), this.currentRenderer = this.emptyRenderer
      }
      setObjectRenderer(t) {
        this.currentRenderer !== t && (this.currentRenderer.stop(), this.currentRenderer = t, this.currentRenderer.start())
      }
      flush() {
        this.setObjectRenderer(this.emptyRenderer)
      }
      reset() {
        this.setObjectRenderer(this.emptyRenderer)
      }
      copyBoundTextures(t, e) {
        const {
          boundTextures: s
        } = this.renderer.texture;
        for (let r = e - 1; r >= 0; --r) t[r] = s[r] || null, t[r] && (t[r]._batchLocation = r)
      }
      boundArray(t, e, s, r) {
        const {
          elements: n,
          ids: a,
          count: o
        } = t;
        let h = 0;
        for (let l = 0; l < o; l++) {
          const u = n[l],
            c = u._batchLocation;
          if (c >= 0 && c < r && e[c] === u) {
            a[l] = c;
            continue
          }
          for (; h < r;) {
            const d = e[h];
            if (d && d._batchEnabled === s && d._batchLocation === h) {
              h++;
              continue
            }
            a[l] = h, u._batchLocation = h, e[h] = u;
            break
          }
        }
      }
      destroy() {
        this.renderer = null
      }
    }
    zr.extension = {
      type: R.RendererSystem,
      name: "batch"
    }, L.add(zr);
    let Ro = 0;
    class Es {
      constructor(t) {
        this.renderer = t, this.webGLVersion = 1, this.extensions = {}, this.supports = {
          uint32Indices: !1
        }, this.handleContextLost = this.handleContextLost.bind(this), this.handleContextRestored = this.handleContextRestored.bind(this)
      }
      get isLost() {
        return !this.gl || this.gl.isContextLost()
      }
      contextChange(t) {
        this.gl = t, this.renderer.gl = t, this.renderer.CONTEXT_UID = Ro++
      }
      init(t) {
        if (t.context) this.initFromContext(t.context);
        else {
          const e = this.renderer.background.alpha < 1,
            s = t.premultipliedAlpha;
          this.preserveDrawingBuffer = t.preserveDrawingBuffer, this.useContextAlpha = t.useContextAlpha, this.powerPreference = t.powerPreference, this.initFromOptions({
            alpha: e,
            premultipliedAlpha: s,
            antialias: t.antialias,
            stencil: !0,
            preserveDrawingBuffer: t.preserveDrawingBuffer,
            powerPreference: t.powerPreference
          })
        }
      }
      initFromContext(t) {
        this.gl = t, this.validateContext(t), this.renderer.gl = t, this.renderer.CONTEXT_UID = Ro++, this.renderer.runners.contextChange.emit(t);
        const e = this.renderer.view;
        e.addEventListener !== void 0 && (e.addEventListener("webglcontextlost", this.handleContextLost, !1), e.addEventListener("webglcontextrestored", this.handleContextRestored, !1))
      }
      initFromOptions(t) {
        const e = this.createContext(this.renderer.view, t);
        this.initFromContext(e)
      }
      createContext(t, e) {
        let s;
        if (O.PREFER_ENV >= _e.WEBGL2 && (s = t.getContext("webgl2", e)), s) this.webGLVersion = 2;
        else if (this.webGLVersion = 1, s = t.getContext("webgl", e) || t.getContext("experimental-webgl", e), !s) throw new Error("This browser does not support WebGL. Try using the canvas renderer");
        return this.gl = s, this.getExtensions(), this.gl
      }
      getExtensions() {
        const {
          gl: t
        } = this, e = {
          loseContext: t.getExtension("WEBGL_lose_context"),
          anisotropicFiltering: t.getExtension("EXT_texture_filter_anisotropic"),
          floatTextureLinear: t.getExtension("OES_texture_float_linear"),
          s3tc: t.getExtension("WEBGL_compressed_texture_s3tc"),
          s3tc_sRGB: t.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
          etc: t.getExtension("WEBGL_compressed_texture_etc"),
          etc1: t.getExtension("WEBGL_compressed_texture_etc1"),
          pvrtc: t.getExtension("WEBGL_compressed_texture_pvrtc") || t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
          atc: t.getExtension("WEBGL_compressed_texture_atc"),
          astc: t.getExtension("WEBGL_compressed_texture_astc")
        };
        this.webGLVersion === 1 ? Object.assign(this.extensions, e, {
          drawBuffers: t.getExtension("WEBGL_draw_buffers"),
          depthTexture: t.getExtension("WEBGL_depth_texture"),
          vertexArrayObject: t.getExtension("OES_vertex_array_object") || t.getExtension("MOZ_OES_vertex_array_object") || t.getExtension("WEBKIT_OES_vertex_array_object"),
          uint32ElementIndex: t.getExtension("OES_element_index_uint"),
          floatTexture: t.getExtension("OES_texture_float"),
          floatTextureLinear: t.getExtension("OES_texture_float_linear"),
          textureHalfFloat: t.getExtension("OES_texture_half_float"),
          textureHalfFloatLinear: t.getExtension("OES_texture_half_float_linear")
        }) : this.webGLVersion === 2 && Object.assign(this.extensions, e, {
          colorBufferFloat: t.getExtension("EXT_color_buffer_float")
        })
      }
      handleContextLost(t) {
        t.preventDefault(), setTimeout(() => {
          this.gl.isContextLost() && this.extensions.loseContext && this.extensions.loseContext.restoreContext()
        }, 0)
      }
      handleContextRestored() {
        this.renderer.runners.contextChange.emit(this.gl)
      }
      destroy() {
        const t = this.renderer.view;
        this.renderer = null, t.removeEventListener !== void 0 && (t.removeEventListener("webglcontextlost", this.handleContextLost), t.removeEventListener("webglcontextrestored", this.handleContextRestored)), this.gl.useProgram(null), this.extensions.loseContext && this.extensions.loseContext.loseContext()
      }
      postrender() {
        this.renderer.objectRenderer.renderingToScreen && this.gl.flush()
      }
      validateContext(t) {
        const e = t.getContextAttributes(),
          s = "WebGL2RenderingContext" in globalThis && t instanceof globalThis.WebGL2RenderingContext;
        s && (this.webGLVersion = 2), e && !e.stencil && console.warn("Provided WebGL context does not have a stencil buffer, masks may not render correctly");
        const r = s || !!t.getExtension("OES_element_index_uint");
        this.supports.uint32Indices = r, r || console.warn("Provided WebGL context does not support 32 index buffer, complex graphics may not render correctly")
      }
    }
    Es.defaultOptions = {
      context: null,
      antialias: !1,
      premultipliedAlpha: !0,
      preserveDrawingBuffer: !1,
      powerPreference: "default"
    }, Es.extension = {
      type: R.RendererSystem,
      name: "context"
    }, L.add(Es);
    class Ti {
      constructor(t, e) {
        if (this.width = Math.round(t), this.height = Math.round(e), !this.width || !this.height) throw new Error("Framebuffer width or height is zero");
        this.stencil = !1, this.depth = !1, this.dirtyId = 0, this.dirtyFormat = 0, this.dirtySize = 0, this.depthTexture = null, this.colorTextures = [], this.glFramebuffers = {}, this.disposeRunner = new St("disposeFramebuffer"), this.multisample = at.NONE
      }
      get colorTexture() {
        return this.colorTextures[0]
      }
      addColorTexture(t = 0, e) {
        return this.colorTextures[t] = e || new X(null, {
          scaleMode: zt.NEAREST,
          resolution: 1,
          mipmap: Ut.OFF,
          width: this.width,
          height: this.height
        }), this.dirtyId++, this.dirtyFormat++, this
      }
      addDepthTexture(t) {
        return this.depthTexture = t || new X(null, {
          scaleMode: zt.NEAREST,
          resolution: 1,
          width: this.width,
          height: this.height,
          mipmap: Ut.OFF,
          format: A.DEPTH_COMPONENT,
          type: k.UNSIGNED_SHORT
        }), this.dirtyId++, this.dirtyFormat++, this
      }
      enableDepth() {
        return this.depth = !0, this.dirtyId++, this.dirtyFormat++, this
      }
      enableStencil() {
        return this.stencil = !0, this.dirtyId++, this.dirtyFormat++, this
      }
      resize(t, e) {
        if (t = Math.round(t), e = Math.round(e), !t || !e) throw new Error("Framebuffer width and height must not be zero");
        if (!(t === this.width && e === this.height)) {
          this.width = t, this.height = e, this.dirtyId++, this.dirtySize++;
          for (let s = 0; s < this.colorTextures.length; s++) {
            const r = this.colorTextures[s],
              n = r.resolution;
            r.setSize(t / n, e / n)
          }
          if (this.depthTexture) {
            const s = this.depthTexture.resolution;
            this.depthTexture.setSize(t / s, e / s)
          }
        }
      }
      dispose() {
        this.disposeRunner.emit(this, !1)
      }
      destroyDepthTexture() {
        this.depthTexture && (this.depthTexture.destroy(), this.depthTexture = null, ++this.dirtyId, ++this.dirtyFormat)
      }
    }
    class Wr extends X {
      constructor(t = {}) {
        var e, s, r;
        if (typeof t == "number") {
          const n = arguments[0],
            a = arguments[1],
            o = arguments[2],
            h = arguments[3];
          t = {
            width: n,
            height: a,
            scaleMode: o,
            resolution: h
          }
        }
        t.width = (e = t.width) != null ? e : 100, t.height = (s = t.height) != null ? s : 100, (r = t.multisample) != null || (t.multisample = at.NONE), super(null, t), this.mipmap = Ut.OFF, this.valid = !0, this._clear = new Z([0, 0, 0, 0]), this.framebuffer = new Ti(this.realWidth, this.realHeight).addColorTexture(0, this), this.framebuffer.multisample = t.multisample, this.maskStack = [], this.filterStack = [{}]
      }
      set clearColor(t) {
        this._clear.setValue(t)
      }
      get clearColor() {
        return this._clear.value
      }
      get clear() {
        return this._clear
      }
      get multisample() {
        return this.framebuffer.multisample
      }
      set multisample(t) {
        this.framebuffer.multisample = t
      }
      resize(t, e) {
        this.framebuffer.resize(t * this.resolution, e * this.resolution), this.setRealSize(this.framebuffer.width, this.framebuffer.height)
      }
      dispose() {
        this.framebuffer.dispose(), super.dispose()
      }
      destroy() {
        super.destroy(), this.framebuffer.destroyDepthTexture(), this.framebuffer = null
      }
    }
    class he extends We {
      constructor(t) {
        const e = t,
          s = e.naturalWidth || e.videoWidth || e.width,
          r = e.naturalHeight || e.videoHeight || e.height;
        super(s, r), this.source = t, this.noSubImage = !1
      }
      static crossOrigin(t, e, s) {
        s === void 0 && !e.startsWith("data:") ? t.crossOrigin = ro(e) : s !== !1 && (t.crossOrigin = typeof s == "string" ? s : "anonymous")
      }
      upload(t, e, s, r) {
        const n = t.gl,
          a = e.realWidth,
          o = e.realHeight;
        if (r = r || this.source, typeof HTMLImageElement != "undefined" && r instanceof HTMLImageElement) {
          if (!r.complete || r.naturalWidth === 0) return !1
        } else if (typeof HTMLVideoElement != "undefined" && r instanceof HTMLVideoElement && r.readyState <= 1) return !1;
        return n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL, e.alphaMode === bt.UNPACK), !this.noSubImage && e.target === n.TEXTURE_2D && s.width === a && s.height === o ? n.texSubImage2D(n.TEXTURE_2D, 0, 0, 0, e.format, s.type, r) : (s.width = a, s.height = o, n.texImage2D(e.target, 0, s.internalFormat, e.format, s.type, r)), !0
      }
      update() {
        if (this.destroyed) return;
        const t = this.source,
          e = t.naturalWidth || t.videoWidth || t.width,
          s = t.naturalHeight || t.videoHeight || t.height;
        this.resize(e, s), super.update()
      }
      dispose() {
        this.source = null
      }
    }
    class Yr extends he {
      constructor(t, e) {
        var s;
        if (e = e || {}, typeof t == "string") {
          const r = new Image;
          he.crossOrigin(r, t, e.crossorigin), r.src = t, t = r
        }
        super(t), !t.complete && this._width && this._height && (this._width = 0, this._height = 0), this.url = t.src, this._process = null, this.preserveBitmap = !1, this.createBitmap = ((s = e.createBitmap) != null ? s : O.CREATE_IMAGE_BITMAP) && !!globalThis.createImageBitmap, this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null, this.bitmap = null, this._load = null, e.autoLoad !== !1 && this.load()
      }
      load(t) {
        return this._load ? this._load : (t !== void 0 && (this.createBitmap = t), this._load = new Promise((e, s) => {
          const r = this.source;
          this.url = r.src;
          const n = () => {
            this.destroyed || (r.onload = null, r.onerror = null, this.update(), this._load = null, this.createBitmap ? e(this.process()) : e(this))
          };
          r.complete && r.src ? n() : (r.onload = n, r.onerror = a => {
            s(a), this.onError.emit(a)
          })
        }), this._load)
      }
      process() {
        const t = this.source;
        if (this._process !== null) return this._process;
        if (this.bitmap !== null || !globalThis.createImageBitmap) return Promise.resolve(this);
        const e = globalThis.createImageBitmap,
          s = !t.crossOrigin || t.crossOrigin === "anonymous";
        return this._process = fetch(t.src, {
          mode: s ? "cors" : "no-cors"
        }).then(r => r.blob()).then(r => e(r, 0, 0, t.width, t.height, {
          premultiplyAlpha: this.alphaMode === null || this.alphaMode === bt.UNPACK ? "premultiply" : "none"
        })).then(r => this.destroyed ? Promise.reject() : (this.bitmap = r, this.update(), this._process = null, Promise.resolve(this))), this._process
      }
      upload(t, e, s) {
        if (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode), !this.createBitmap) return super.upload(t, e, s);
        if (!this.bitmap && (this.process(), !this.bitmap)) return !1;
        if (super.upload(t, e, s, this.bitmap), !this.preserveBitmap) {
          let r = !0;
          const n = e._glTextures;
          for (const a in n) {
            const o = n[a];
            if (o !== s && o.dirtyId !== e.dirtyId) {
              r = !1;
              break
            }
          }
          r && (this.bitmap.close && this.bitmap.close(), this.bitmap = null)
        }
        return !0
      }
      dispose() {
        this.source.onload = null, this.source.onerror = null, super.dispose(), this.bitmap && (this.bitmap.close(), this.bitmap = null), this._process = null, this._load = null
      }
      static test(t) {
        return typeof HTMLImageElement != "undefined" && (typeof t == "string" || t instanceof HTMLImageElement)
      }
    }
    class qr {
      constructor() {
        this.x0 = 0, this.y0 = 0, this.x1 = 1, this.y1 = 0, this.x2 = 1, this.y2 = 1, this.x3 = 0, this.y3 = 1, this.uvsFloat32 = new Float32Array(8)
      }
      set(t, e, s) {
        const r = e.width,
          n = e.height;
        if (s) {
          const a = t.width / 2 / r,
            o = t.height / 2 / n,
            h = t.x / r + a,
            l = t.y / n + o;
          s = et.add(s, et.NW), this.x0 = h + a * et.uX(s), this.y0 = l + o * et.uY(s), s = et.add(s, 2), this.x1 = h + a * et.uX(s), this.y1 = l + o * et.uY(s), s = et.add(s, 2), this.x2 = h + a * et.uX(s), this.y2 = l + o * et.uY(s), s = et.add(s, 2), this.x3 = h + a * et.uX(s), this.y3 = l + o * et.uY(s)
        } else this.x0 = t.x / r, this.y0 = t.y / n, this.x1 = (t.x + t.width) / r, this.y1 = t.y / n, this.x2 = (t.x + t.width) / r, this.y2 = (t.y + t.height) / n, this.x3 = t.x / r, this.y3 = (t.y + t.height) / n;
        this.uvsFloat32[0] = this.x0, this.uvsFloat32[1] = this.y0, this.uvsFloat32[2] = this.x1, this.uvsFloat32[3] = this.y1, this.uvsFloat32[4] = this.x2, this.uvsFloat32[5] = this.y2, this.uvsFloat32[6] = this.x3, this.uvsFloat32[7] = this.y3
      }
    }
    const Co = new qr;
  
    function Ei(i) {
      i.destroy = function() {}, i.on = function() {}, i.once = function() {}, i.emit = function() {}
    }
    class B extends Ve {
      constructor(t, e, s, r, n, a, o) {
        if (super(), this.noFrame = !1, e || (this.noFrame = !0, e = new j(0, 0, 1, 1)), t instanceof B && (t = t.baseTexture), this.baseTexture = t, this._frame = e, this.trim = r, this.valid = !1, this.destroyed = !1, this._uvs = Co, this.uvMatrix = null, this.orig = s || e, this._rotate = Number(n || 0), n === !0) this._rotate = 2;
        else if (this._rotate % 2 !== 0) throw new Error("attempt to use diamond-shaped UVs. If you are sure, set rotation manually");
        this.defaultAnchor = a ? new q(a.x, a.y) : new q(0, 0), this.defaultBorders = o, this._updateID = 0, this.textureCacheIds = [], t.valid ? this.noFrame ? t.valid && this.onBaseTextureUpdated(t) : this.frame = e : t.once("loaded", this.onBaseTextureUpdated, this), this.noFrame && t.on("update", this.onBaseTextureUpdated, this)
      }
      update() {
        this.baseTexture.resource && this.baseTexture.resource.update()
      }
      onBaseTextureUpdated(t) {
        if (this.noFrame) {
          if (!this.baseTexture.valid) return;
          this._frame.width = t.width, this._frame.height = t.height, this.valid = !0, this.updateUvs()
        } else this.frame = this._frame;
        this.emit("update", this)
      }
      destroy(t) {
        if (this.baseTexture) {
          if (t) {
            const {
              resource: e
            } = this.baseTexture;
            e != null && e.url && Tt[e.url] && B.removeFromCache(e.url), this.baseTexture.destroy()
          }
          this.baseTexture.off("loaded", this.onBaseTextureUpdated, this), this.baseTexture.off("update", this.onBaseTextureUpdated, this), this.baseTexture = null
        }
        this._frame = null, this._uvs = null, this.trim = null, this.orig = null, this.valid = !1, B.removeFromCache(this), this.textureCacheIds = null, this.destroyed = !0, this.emit("destroyed", this), this.removeAllListeners()
      }
      clone() {
        var t;
        const e = this._frame.clone(),
          s = this._frame === this.orig ? e : this.orig.clone(),
          r = new B(this.baseTexture, !this.noFrame && e, s, (t = this.trim) == null ? void 0 : t.clone(), this.rotate, this.defaultAnchor, this.defaultBorders);
        return this.noFrame && (r._frame = e), r
      }
      updateUvs() {
        this._uvs === Co && (this._uvs = new qr), this._uvs.set(this._frame, this.baseTexture, this.rotate), this._updateID++
      }
      static from(t, e = {}, s = O.STRICT_TEXTURE_CACHE) {
        const r = typeof t == "string";
        let n = null;
        if (r) n = t;
        else if (t instanceof X) {
          if (!t.cacheId) {
            const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
            t.cacheId = `${o}-${ve()}`, X.addToCache(t, t.cacheId)
          }
          n = t.cacheId
        } else {
          if (!t._pixiId) {
            const o = (e == null ? void 0 : e.pixiIdPrefix) || "pixiid";
            t._pixiId = `${o}_${ve()}`
          }
          n = t._pixiId
        }
        let a = Tt[n];
        if (r && s && !a) throw new Error(`The cacheId "${n}" does not exist in TextureCache.`);
        return !a && !(t instanceof X) ? (e.resolution || (e.resolution = Kt(t)), a = new B(new X(t, e)), a.baseTexture.cacheId = n, X.addToCache(a.baseTexture, n), B.addToCache(a, n)) : !a && t instanceof X && (a = new B(t), B.addToCache(a, n)), a
      }
      static fromURL(t, e) {
        const s = Object.assign({
            autoLoad: !1
          }, e == null ? void 0 : e.resourceOptions),
          r = B.from(t, Object.assign({
            resourceOptions: s
          }, e), !1),
          n = r.baseTexture.resource;
        return r.baseTexture.valid ? Promise.resolve(r) : n.load().then(() => Promise.resolve(r))
      }
      static fromBuffer(t, e, s, r) {
        return new B(X.fromBuffer(t, e, s, r))
      }
      static fromLoader(t, e, s, r) {
        const n = new X(t, Object.assign({
            scaleMode: X.defaultOptions.scaleMode,
            resolution: Kt(e)
          }, r)),
          {
            resource: a
          } = n;
        a instanceof Yr && (a.url = e);
        const o = new B(n);
        return s || (s = e), X.addToCache(o.baseTexture, s), B.addToCache(o, s), s !== e && (X.addToCache(o.baseTexture, e), B.addToCache(o, e)), o.baseTexture.valid ? Promise.resolve(o) : new Promise(h => {
          o.baseTexture.once("loaded", () => h(o))
        })
      }
      static addToCache(t, e) {
        e && (t.textureCacheIds.includes(e) || t.textureCacheIds.push(e), Tt[e] && Tt[e] !== t && console.warn(`Texture added to the cache with an id [${e}] that already had an entry`), Tt[e] = t)
      }
      static removeFromCache(t) {
        if (typeof t == "string") {
          const e = Tt[t];
          if (e) {
            const s = e.textureCacheIds.indexOf(t);
            return s > -1 && e.textureCacheIds.splice(s, 1), delete Tt[t], e
          }
        } else if (t != null && t.textureCacheIds) {
          for (let e = 0; e < t.textureCacheIds.length; ++e) Tt[t.textureCacheIds[e]] === t && delete Tt[t.textureCacheIds[e]];
          return t.textureCacheIds.length = 0, t
        }
        return null
      }
      get resolution() {
        return this.baseTexture.resolution
      }
      get frame() {
        return this._frame
      }
      set frame(t) {
        this._frame = t, this.noFrame = !1;
        const {
          x: e,
          y: s,
          width: r,
          height: n
        } = t, a = e + r > this.baseTexture.width, o = s + n > this.baseTexture.height;
        if (a || o) {
          const h = a && o ? "and" : "or",
            l = `X: ${e} + ${r} = ${e+r} > ${this.baseTexture.width}`,
            u = `Y: ${s} + ${n} = ${s+n} > ${this.baseTexture.height}`;
          throw new Error(`Texture Error: frame does not fit inside the base Texture dimensions: ${l} ${h} ${u}`)
        }
        this.valid = r && n && this.baseTexture.valid, !this.trim && !this.rotate && (this.orig = t), this.valid && this.updateUvs()
      }
      get rotate() {
        return this._rotate
      }
      set rotate(t) {
        this._rotate = t, this.valid && this.updateUvs()
      }
      get width() {
        return this.orig.width
      }
      get height() {
        return this.orig.height
      }
      castToBaseTexture() {
        return this.baseTexture
      }
      static get EMPTY() {
        return B._EMPTY || (B._EMPTY = new B(new X), Ei(B._EMPTY), Ei(B._EMPTY.baseTexture)), B._EMPTY
      }
      static get WHITE() {
        if (!B._WHITE) {
          const t = O.ADAPTER.createCanvas(16, 16),
            e = t.getContext("2d");
          t.width = 16, t.height = 16, e.fillStyle = "white", e.fillRect(0, 0, 16, 16), B._WHITE = new B(X.from(t)), Ei(B._WHITE), Ei(B._WHITE.baseTexture)
        }
        return B._WHITE
      }
    }
    class xe extends B {
      constructor(t, e) {
        super(t, e), this.valid = !0, this.filterFrame = null, this.filterPoolKey = null, this.updateUvs()
      }
      get framebuffer() {
        return this.baseTexture.framebuffer
      }
      get multisample() {
        return this.framebuffer.multisample
      }
      set multisample(t) {
        this.framebuffer.multisample = t
      }
      resize(t, e, s = !0) {
        const r = this.baseTexture.resolution,
          n = Math.round(t * r) / r,
          a = Math.round(e * r) / r;
        this.valid = n > 0 && a > 0, this._frame.width = this.orig.width = n, this._frame.height = this.orig.height = a, s && this.baseTexture.resize(n, a), this.updateUvs()
      }
      setResolution(t) {
        const {
          baseTexture: e
        } = this;
        e.resolution !== t && (e.setResolution(t), this.resize(e.width, e.height, !1))
      }
      static create(t) {
        return new xe(new Wr(t))
      }
    }
    class Kr {
      constructor(t) {
        this.texturePool = {}, this.textureOptions = t || {}, this.enableFullScreen = !1, this._pixelsWidth = 0, this._pixelsHeight = 0
      }
      createTexture(t, e, s = at.NONE) {
        const r = new Wr(Object.assign({
          width: t,
          height: e,
          resolution: 1,
          multisample: s
        }, this.textureOptions));
        return new xe(r)
      }
      getOptimalTexture(t, e, s = 1, r = at.NONE) {
        let n;
        t = Math.max(Math.ceil(t * s - 1e-6), 1), e = Math.max(Math.ceil(e * s - 1e-6), 1), !this.enableFullScreen || t !== this._pixelsWidth || e !== this._pixelsHeight ? (t = ps(t), e = ps(e), n = ((t & 65535) << 16 | e & 65535) >>> 0, r > 1 && (n += r * 4294967296)) : n = r > 1 ? -r : -1, this.texturePool[n] || (this.texturePool[n] = []);
        let a = this.texturePool[n].pop();
        return a || (a = this.createTexture(t, e, r)), a.filterPoolKey = n, a.setResolution(s), a
      }
      getFilterTexture(t, e, s) {
        const r = this.getOptimalTexture(t.width, t.height, e || t.resolution, s || at.NONE);
        return r.filterFrame = t.filterFrame, r
      }
      returnTexture(t) {
        const e = t.filterPoolKey;
        t.filterFrame = null, this.texturePool[e].push(t)
      }
      returnFilterTexture(t) {
        this.returnTexture(t)
      }
      clear(t) {
        if (t = t !== !1, t)
          for (const e in this.texturePool) {
            const s = this.texturePool[e];
            if (s)
              for (let r = 0; r < s.length; r++) s[r].destroy(!0)
          }
        this.texturePool = {}
      }
      setScreenSize(t) {
        if (!(t.width === this._pixelsWidth && t.height === this._pixelsHeight)) {
          this.enableFullScreen = t.width > 0 && t.height > 0;
          for (const e in this.texturePool) {
            if (!(Number(e) < 0)) continue;
            const s = this.texturePool[e];
            if (s)
              for (let r = 0; r < s.length; r++) s[r].destroy(!0);
            this.texturePool[e] = []
          }
          this._pixelsWidth = t.width, this._pixelsHeight = t.height
        }
      }
    }
    Kr.SCREEN_KEY = -1;
    class Po extends ae {
      constructor() {
        super(), this.addAttribute("aVertexPosition", new Float32Array([0, 0, 1, 0, 1, 1, 0, 1])).addIndex([0, 1, 3, 2])
      }
    }
    class Zr extends ae {
      constructor() {
        super(), this.vertices = new Float32Array([-1, -1, 1, -1, 1, 1, -1, 1]), this.uvs = new Float32Array([0, 0, 1, 0, 1, 1, 0, 1]), this.vertexBuffer = new nt(this.vertices), this.uvBuffer = new nt(this.uvs), this.addAttribute("aVertexPosition", this.vertexBuffer).addAttribute("aTextureCoord", this.uvBuffer).addIndex([0, 1, 2, 0, 2, 3])
      }
      map(t, e) {
        let s = 0,
          r = 0;
        return this.uvs[0] = s, this.uvs[1] = r, this.uvs[2] = s + e.width / t.width, this.uvs[3] = r, this.uvs[4] = s + e.width / t.width, this.uvs[5] = r + e.height / t.height, this.uvs[6] = s, this.uvs[7] = r + e.height / t.height, s = e.x, r = e.y, this.vertices[0] = s, this.vertices[1] = r, this.vertices[2] = s + e.width, this.vertices[3] = r, this.vertices[4] = s + e.width, this.vertices[5] = r + e.height, this.vertices[6] = s, this.vertices[7] = r + e.height, this.invalidate(), this
      }
      invalidate() {
        return this.vertexBuffer._updateID++, this.uvBuffer._updateID++, this
      }
    }
    class Mo {
      constructor() {
        this.renderTexture = null, this.target = null, this.legacy = !1, this.resolution = 1, this.multisample = at.NONE, this.sourceFrame = new j, this.destinationFrame = new j, this.bindingSourceFrame = new j, this.bindingDestinationFrame = new j, this.filters = [], this.transform = null
      }
      clear() {
        this.target = null, this.filters = null, this.renderTexture = null
      }
    }
    const Ai = [new q, new q, new q, new q],
      Qr = new tt;
    class Jr {
      constructor(t) {
        this.renderer = t, this.defaultFilterStack = [{}], this.texturePool = new Kr, this.statePool = [], this.quad = new Po, this.quadUv = new Zr, this.tempRect = new j, this.activeState = {}, this.globalUniforms = new Ot({
          outputFrame: new j,
          inputSize: new Float32Array(4),
          inputPixel: new Float32Array(4),
          inputClamp: new Float32Array(4),
          resolution: 1,
          filterArea: new Float32Array(4),
          filterClamp: new Float32Array(4)
        }, !0), this.forceClear = !1, this.useMaxPadding = !1
      }
      init() {
        this.texturePool.setScreenSize(this.renderer.view)
      }
      push(t, e) {
        var s, r, n, a;
        const o = this.renderer,
          h = this.defaultFilterStack,
          l = this.statePool.pop() || new Mo,
          u = o.renderTexture;
        let c, d;
        if (u.current) {
          const x = u.current;
          c = x.resolution, d = x.multisample
        } else c = o.resolution, d = o.multisample;
        let f = e[0].resolution || c,
          p = (s = e[0].multisample) != null ? s : d,
          m = e[0].padding,
          g = e[0].autoFit,
          y = (r = e[0].legacy) != null ? r : !0;
        for (let x = 1; x < e.length; x++) {
          const E = e[x];
          f = Math.min(f, E.resolution || c), p = Math.min(p, (n = E.multisample) != null ? n : d), m = this.useMaxPadding ? Math.max(m, E.padding) : m + E.padding, g = g && E.autoFit, y = y || ((a = E.legacy) != null ? a : !0)
        }
        h.length === 1 && (this.defaultFilterStack[0].renderTexture = u.current), h.push(l), l.resolution = f, l.multisample = p, l.legacy = y, l.target = t, l.sourceFrame.copyFrom(t.filterArea || t.getBounds(!0)), l.sourceFrame.pad(m);
        const b = this.tempRect.copyFrom(u.sourceFrame);
        o.projection.transform && this.transformAABB(Qr.copyFrom(o.projection.transform).invert(), b), g ? (l.sourceFrame.fit(b), (l.sourceFrame.width <= 0 || l.sourceFrame.height <= 0) && (l.sourceFrame.width = 0, l.sourceFrame.height = 0)) : l.sourceFrame.intersects(b) || (l.sourceFrame.width = 0, l.sourceFrame.height = 0), this.roundFrame(l.sourceFrame, u.current ? u.current.resolution : o.resolution, u.sourceFrame, u.destinationFrame, o.projection.transform), l.renderTexture = this.getOptimalFilterTexture(l.sourceFrame.width, l.sourceFrame.height, f, p), l.filters = e, l.destinationFrame.width = l.renderTexture.width, l.destinationFrame.height = l.renderTexture.height;
        const v = this.tempRect;
        v.x = 0, v.y = 0, v.width = l.sourceFrame.width, v.height = l.sourceFrame.height, l.renderTexture.filterFrame = l.sourceFrame, l.bindingSourceFrame.copyFrom(u.sourceFrame), l.bindingDestinationFrame.copyFrom(u.destinationFrame), l.transform = o.projection.transform, o.projection.transform = null, u.bind(l.renderTexture, l.sourceFrame, v), o.framebuffer.clear(0, 0, 0, 0)
      }
      pop() {
        const t = this.defaultFilterStack,
          e = t.pop(),
          s = e.filters;
        this.activeState = e;
        const r = this.globalUniforms.uniforms;
        r.outputFrame = e.sourceFrame, r.resolution = e.resolution;
        const n = r.inputSize,
          a = r.inputPixel,
          o = r.inputClamp;
        if (n[0] = e.destinationFrame.width, n[1] = e.destinationFrame.height, n[2] = 1 / n[0], n[3] = 1 / n[1], a[0] = Math.round(n[0] * e.resolution), a[1] = Math.round(n[1] * e.resolution), a[2] = 1 / a[0], a[3] = 1 / a[1], o[0] = .5 * a[2], o[1] = .5 * a[3], o[2] = e.sourceFrame.width * n[2] - .5 * a[2], o[3] = e.sourceFrame.height * n[3] - .5 * a[3], e.legacy) {
          const l = r.filterArea;
          l[0] = e.destinationFrame.width, l[1] = e.destinationFrame.height, l[2] = e.sourceFrame.x, l[3] = e.sourceFrame.y, r.filterClamp = r.inputClamp
        }
        this.globalUniforms.update();
        const h = t[t.length - 1];
        if (this.renderer.framebuffer.blit(), s.length === 1) s[0].apply(this, e.renderTexture, h.renderTexture, kt.BLEND, e), this.returnFilterTexture(e.renderTexture);
        else {
          let l = e.renderTexture,
            u = this.getOptimalFilterTexture(l.width, l.height, e.resolution);
          u.filterFrame = l.filterFrame;
          let c = 0;
          for (c = 0; c < s.length - 1; ++c) {
            c === 1 && e.multisample > 1 && (u = this.getOptimalFilterTexture(l.width, l.height, e.resolution), u.filterFrame = l.filterFrame), s[c].apply(this, l, u, kt.CLEAR, e);
            const d = l;
            l = u, u = d
          }
          s[c].apply(this, l, h.renderTexture, kt.BLEND, e), c > 1 && e.multisample > 1 && this.returnFilterTexture(e.renderTexture), this.returnFilterTexture(l), this.returnFilterTexture(u)
        }
        e.clear(), this.statePool.push(e)
      }
      bindAndClear(t, e = kt.CLEAR) {
        const {
          renderTexture: s,
          state: r
        } = this.renderer;
        if (t === this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? this.renderer.projection.transform = this.activeState.transform : this.renderer.projection.transform = null, t != null && t.filterFrame) {
          const a = this.tempRect;
          a.x = 0, a.y = 0, a.width = t.filterFrame.width, a.height = t.filterFrame.height, s.bind(t, t.filterFrame, a)
        } else t !== this.defaultFilterStack[this.defaultFilterStack.length - 1].renderTexture ? s.bind(t) : this.renderer.renderTexture.bind(t, this.activeState.bindingSourceFrame, this.activeState.bindingDestinationFrame);
        const n = r.stateId & 1 || this.forceClear;
        (e === kt.CLEAR || e === kt.BLIT && n) && this.renderer.framebuffer.clear(0, 0, 0, 0)
      }
      applyFilter(t, e, s, r) {
        const n = this.renderer;
        n.state.set(t.state), this.bindAndClear(s, r), t.uniforms.uSampler = e, t.uniforms.filterGlobals = this.globalUniforms, n.shader.bind(t), t.legacy = !!t.program.attributeData.aTextureCoord, t.legacy ? (this.quadUv.map(e._frame, e.filterFrame), n.geometry.bind(this.quadUv), n.geometry.draw(Lt.TRIANGLES)) : (n.geometry.bind(this.quad), n.geometry.draw(Lt.TRIANGLE_STRIP))
      }
      calculateSpriteMatrix(t, e) {
        const {
          sourceFrame: s,
          destinationFrame: r
        } = this.activeState, {
          orig: n
        } = e._texture, a = t.set(r.width, 0, 0, r.height, s.x, s.y), o = e.worldTransform.copyTo(tt.TEMP_MATRIX);
        return o.invert(), a.prepend(o), a.scale(1 / n.width, 1 / n.height), a.translate(e.anchor.x, e.anchor.y), a
      }
      destroy() {
        this.renderer = null, this.texturePool.clear(!1)
      }
      getOptimalFilterTexture(t, e, s = 1, r = at.NONE) {
        return this.texturePool.getOptimalTexture(t, e, s, r)
      }
      getFilterTexture(t, e, s) {
        if (typeof t == "number") {
          const n = t;
          t = e, e = n
        }
        t = t || this.activeState.renderTexture;
        const r = this.texturePool.getOptimalTexture(t.width, t.height, e || t.resolution, s || at.NONE);
        return r.filterFrame = t.filterFrame, r
      }
      returnFilterTexture(t) {
        this.texturePool.returnTexture(t)
      }
      emptyPool() {
        this.texturePool.clear(!0)
      }
      resize() {
        this.texturePool.setScreenSize(this.renderer.view)
      }
      transformAABB(t, e) {
        const s = Ai[0],
          r = Ai[1],
          n = Ai[2],
          a = Ai[3];
        s.set(e.left, e.top), r.set(e.left, e.bottom), n.set(e.right, e.top), a.set(e.right, e.bottom), t.apply(s, s), t.apply(r, r), t.apply(n, n), t.apply(a, a);
        const o = Math.min(s.x, r.x, n.x, a.x),
          h = Math.min(s.y, r.y, n.y, a.y),
          l = Math.max(s.x, r.x, n.x, a.x),
          u = Math.max(s.y, r.y, n.y, a.y);
        e.x = o, e.y = h, e.width = l - o, e.height = u - h
      }
      roundFrame(t, e, s, r, n) {
        if (!(t.width <= 0 || t.height <= 0 || s.width <= 0 || s.height <= 0)) {
          if (n) {
            const {
              a,
              b: o,
              c: h,
              d: l
            } = n;
            if ((Math.abs(o) > 1e-4 || Math.abs(h) > 1e-4) && (Math.abs(a) > 1e-4 || Math.abs(l) > 1e-4)) return
          }
          n = n ? Qr.copyFrom(n) : Qr.identity(), n.translate(-s.x, -s.y).scale(r.width / s.width, r.height / s.height).translate(r.x, r.y), this.transformAABB(n, t), t.ceil(e), this.transformAABB(n.invert(), t)
        }
      }
    }
    Jr.extension = {
      type: R.RendererSystem,
      name: "filter"
    }, L.add(Jr);
    class Do {
      constructor(t) {
        this.framebuffer = t, this.stencil = null, this.dirtyId = -1, this.dirtyFormat = -1, this.dirtySize = -1, this.multisample = at.NONE, this.msaaBuffer = null, this.blitFramebuffer = null, this.mipLevel = 0
      }
    }
    const ad = new j;
    class tn {
      constructor(t) {
        this.renderer = t, this.managedFramebuffers = [], this.unknownFramebuffer = new Ti(10, 10), this.msaaSamples = null
      }
      contextChange() {
        this.disposeAll(!0);
        const t = this.gl = this.renderer.gl;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.current = this.unknownFramebuffer, this.viewport = new j, this.hasMRT = !0, this.writeDepthTexture = !0, this.renderer.context.webGLVersion === 1) {
          let e = this.renderer.context.extensions.drawBuffers,
            s = this.renderer.context.extensions.depthTexture;
          O.PREFER_ENV === _e.WEBGL_LEGACY && (e = null, s = null), e ? t.drawBuffers = r => e.drawBuffersWEBGL(r) : (this.hasMRT = !1, t.drawBuffers = () => {}), s || (this.writeDepthTexture = !1)
        } else this.msaaSamples = t.getInternalformatParameter(t.RENDERBUFFER, t.RGBA8, t.SAMPLES)
      }
      bind(t, e, s = 0) {
        const {
          gl: r
        } = this;
        if (t) {
          const n = t.glFramebuffers[this.CONTEXT_UID] || this.initFramebuffer(t);
          this.current !== t && (this.current = t, r.bindFramebuffer(r.FRAMEBUFFER, n.framebuffer)), n.mipLevel !== s && (t.dirtyId++, t.dirtyFormat++, n.mipLevel = s), n.dirtyId !== t.dirtyId && (n.dirtyId = t.dirtyId, n.dirtyFormat !== t.dirtyFormat ? (n.dirtyFormat = t.dirtyFormat, n.dirtySize = t.dirtySize, this.updateFramebuffer(t, s)) : n.dirtySize !== t.dirtySize && (n.dirtySize = t.dirtySize, this.resizeFramebuffer(t)));
          for (let a = 0; a < t.colorTextures.length; a++) {
            const o = t.colorTextures[a];
            this.renderer.texture.unbind(o.parentTextureArray || o)
          }
          if (t.depthTexture && this.renderer.texture.unbind(t.depthTexture), e) {
            const a = e.width >> s,
              o = e.height >> s,
              h = a / e.width;
            this.setViewport(e.x * h, e.y * h, a, o)
          } else {
            const a = t.width >> s,
              o = t.height >> s;
            this.setViewport(0, 0, a, o)
          }
        } else this.current && (this.current = null, r.bindFramebuffer(r.FRAMEBUFFER, null)), e ? this.setViewport(e.x, e.y, e.width, e.height) : this.setViewport(0, 0, this.renderer.width, this.renderer.height)
      }
      setViewport(t, e, s, r) {
        const n = this.viewport;
        t = Math.round(t), e = Math.round(e), s = Math.round(s), r = Math.round(r), (n.width !== s || n.height !== r || n.x !== t || n.y !== e) && (n.x = t, n.y = e, n.width = s, n.height = r, this.gl.viewport(t, e, s, r))
      }
      get size() {
        return this.current ? {
          x: 0,
          y: 0,
          width: this.current.width,
          height: this.current.height
        } : {
          x: 0,
          y: 0,
          width: this.renderer.width,
          height: this.renderer.height
        }
      }
      clear(t, e, s, r, n = Zs.COLOR | Zs.DEPTH) {
        const {
          gl: a
        } = this;
        a.clearColor(t, e, s, r), a.clear(n)
      }
      initFramebuffer(t) {
        const {
          gl: e
        } = this, s = new Do(e.createFramebuffer());
        return s.multisample = this.detectSamples(t.multisample), t.glFramebuffers[this.CONTEXT_UID] = s, this.managedFramebuffers.push(t), t.disposeRunner.add(this), s
      }
      resizeFramebuffer(t) {
        const {
          gl: e
        } = this, s = t.glFramebuffers[this.CONTEXT_UID];
        if (s.stencil) {
          e.bindRenderbuffer(e.RENDERBUFFER, s.stencil);
          let a;
          this.renderer.context.webGLVersion === 1 ? a = e.DEPTH_STENCIL : t.depth && t.stencil ? a = e.DEPTH24_STENCIL8 : t.depth ? a = e.DEPTH_COMPONENT24 : a = e.STENCIL_INDEX8, s.msaaBuffer ? e.renderbufferStorageMultisample(e.RENDERBUFFER, s.multisample, a, t.width, t.height) : e.renderbufferStorage(e.RENDERBUFFER, a, t.width, t.height)
        }
        const r = t.colorTextures;
        let n = r.length;
        e.drawBuffers || (n = Math.min(n, 1));
        for (let a = 0; a < n; a++) {
          const o = r[a],
            h = o.parentTextureArray || o;
          this.renderer.texture.bind(h, 0), a === 0 && s.msaaBuffer && (e.bindRenderbuffer(e.RENDERBUFFER, s.msaaBuffer), e.renderbufferStorageMultisample(e.RENDERBUFFER, s.multisample, h._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height))
        }
        t.depthTexture && this.writeDepthTexture && this.renderer.texture.bind(t.depthTexture, 0)
      }
      updateFramebuffer(t, e) {
        const {
          gl: s
        } = this, r = t.glFramebuffers[this.CONTEXT_UID], n = t.colorTextures;
        let a = n.length;
        s.drawBuffers || (a = Math.min(a, 1)), r.multisample > 1 && this.canMultisampleFramebuffer(t) ? r.msaaBuffer = r.msaaBuffer || s.createRenderbuffer() : r.msaaBuffer && (s.deleteRenderbuffer(r.msaaBuffer), r.msaaBuffer = null, r.blitFramebuffer && (r.blitFramebuffer.dispose(), r.blitFramebuffer = null));
        const o = [];
        for (let h = 0; h < a; h++) {
          const l = n[h],
            u = l.parentTextureArray || l;
          this.renderer.texture.bind(u, 0), h === 0 && r.msaaBuffer ? (s.bindRenderbuffer(s.RENDERBUFFER, r.msaaBuffer), s.renderbufferStorageMultisample(s.RENDERBUFFER, r.multisample, u._glTextures[this.CONTEXT_UID].internalFormat, t.width, t.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0, s.RENDERBUFFER, r.msaaBuffer)) : (s.framebufferTexture2D(s.FRAMEBUFFER, s.COLOR_ATTACHMENT0 + h, l.target, u._glTextures[this.CONTEXT_UID].texture, e), o.push(s.COLOR_ATTACHMENT0 + h))
        }
        if (o.length > 1 && s.drawBuffers(o), t.depthTexture && this.writeDepthTexture) {
          const h = t.depthTexture;
          this.renderer.texture.bind(h, 0), s.framebufferTexture2D(s.FRAMEBUFFER, s.DEPTH_ATTACHMENT, s.TEXTURE_2D, h._glTextures[this.CONTEXT_UID].texture, e)
        }
        if ((t.stencil || t.depth) && !(t.depthTexture && this.writeDepthTexture)) {
          r.stencil = r.stencil || s.createRenderbuffer();
          let h, l;
          this.renderer.context.webGLVersion === 1 ? (h = s.DEPTH_STENCIL_ATTACHMENT, l = s.DEPTH_STENCIL) : t.depth && t.stencil ? (h = s.DEPTH_STENCIL_ATTACHMENT, l = s.DEPTH24_STENCIL8) : t.depth ? (h = s.DEPTH_ATTACHMENT, l = s.DEPTH_COMPONENT24) : (h = s.STENCIL_ATTACHMENT, l = s.STENCIL_INDEX8), s.bindRenderbuffer(s.RENDERBUFFER, r.stencil), r.msaaBuffer ? s.renderbufferStorageMultisample(s.RENDERBUFFER, r.multisample, l, t.width, t.height) : s.renderbufferStorage(s.RENDERBUFFER, l, t.width, t.height), s.framebufferRenderbuffer(s.FRAMEBUFFER, h, s.RENDERBUFFER, r.stencil)
        } else r.stencil && (s.deleteRenderbuffer(r.stencil), r.stencil = null)
      }
      canMultisampleFramebuffer(t) {
        return this.renderer.context.webGLVersion !== 1 && t.colorTextures.length <= 1 && !t.depthTexture
      }
      detectSamples(t) {
        const {
          msaaSamples: e
        } = this;
        let s = at.NONE;
        if (t <= 1 || e === null) return s;
        for (let r = 0; r < e.length; r++)
          if (e[r] <= t) {
            s = e[r];
            break
          } return s === 1 && (s = at.NONE), s
      }
      blit(t, e, s) {
        const {
          current: r,
          renderer: n,
          gl: a,
          CONTEXT_UID: o
        } = this;
        if (n.context.webGLVersion !== 2 || !r) return;
        const h = r.glFramebuffers[o];
        if (!h) return;
        if (!t) {
          if (!h.msaaBuffer) return;
          const u = r.colorTextures[0];
          if (!u) return;
          h.blitFramebuffer || (h.blitFramebuffer = new Ti(r.width, r.height), h.blitFramebuffer.addColorTexture(0, u)), t = h.blitFramebuffer, t.colorTextures[0] !== u && (t.colorTextures[0] = u, t.dirtyId++, t.dirtyFormat++), (t.width !== r.width || t.height !== r.height) && (t.width = r.width, t.height = r.height, t.dirtyId++, t.dirtySize++)
        }
        e || (e = ad, e.width = r.width, e.height = r.height), s || (s = e);
        const l = e.width === s.width && e.height === s.height;
        this.bind(t), a.bindFramebuffer(a.READ_FRAMEBUFFER, h.framebuffer), a.blitFramebuffer(e.left, e.top, e.right, e.bottom, s.left, s.top, s.right, s.bottom, a.COLOR_BUFFER_BIT, l ? a.NEAREST : a.LINEAR), a.bindFramebuffer(a.READ_FRAMEBUFFER, t.glFramebuffers[this.CONTEXT_UID].framebuffer)
      }
      disposeFramebuffer(t, e) {
        const s = t.glFramebuffers[this.CONTEXT_UID],
          r = this.gl;
        if (!s) return;
        delete t.glFramebuffers[this.CONTEXT_UID];
        const n = this.managedFramebuffers.indexOf(t);
        n >= 0 && this.managedFramebuffers.splice(n, 1), t.disposeRunner.remove(this), e || (r.deleteFramebuffer(s.framebuffer), s.msaaBuffer && r.deleteRenderbuffer(s.msaaBuffer), s.stencil && r.deleteRenderbuffer(s.stencil)), s.blitFramebuffer && this.disposeFramebuffer(s.blitFramebuffer, e)
      }
      disposeAll(t) {
        const e = this.managedFramebuffers;
        this.managedFramebuffers = [];
        for (let s = 0; s < e.length; s++) this.disposeFramebuffer(e[s], t)
      }
      forceStencil() {
        const t = this.current;
        if (!t) return;
        const e = t.glFramebuffers[this.CONTEXT_UID];
        if (!e || e.stencil && t.stencil) return;
        t.stencil = !0;
        const s = t.width,
          r = t.height,
          n = this.gl,
          a = e.stencil = n.createRenderbuffer();
        n.bindRenderbuffer(n.RENDERBUFFER, a);
        let o, h;
        this.renderer.context.webGLVersion === 1 ? (o = n.DEPTH_STENCIL_ATTACHMENT, h = n.DEPTH_STENCIL) : t.depth ? (o = n.DEPTH_STENCIL_ATTACHMENT, h = n.DEPTH24_STENCIL8) : (o = n.STENCIL_ATTACHMENT, h = n.STENCIL_INDEX8), e.msaaBuffer ? n.renderbufferStorageMultisample(n.RENDERBUFFER, e.multisample, h, s, r) : n.renderbufferStorage(n.RENDERBUFFER, h, s, r), n.framebufferRenderbuffer(n.FRAMEBUFFER, o, n.RENDERBUFFER, a)
      }
      reset() {
        this.current = this.unknownFramebuffer, this.viewport = new j
      }
      destroy() {
        this.renderer = null
      }
    }
    tn.extension = {
      type: R.RendererSystem,
      name: "framebuffer"
    }, L.add(tn);
    const en = {
      5126: 4,
      5123: 2,
      5121: 1
    };
    class sn {
      constructor(t) {
        this.renderer = t, this._activeGeometry = null, this._activeVao = null, this.hasVao = !0, this.hasInstance = !0, this.canUseUInt32ElementIndex = !1, this.managedGeometries = {}
      }
      contextChange() {
        this.disposeAll(!0);
        const t = this.gl = this.renderer.gl,
          e = this.renderer.context;
        if (this.CONTEXT_UID = this.renderer.CONTEXT_UID, e.webGLVersion !== 2) {
          let s = this.renderer.context.extensions.vertexArrayObject;
          O.PREFER_ENV === _e.WEBGL_LEGACY && (s = null), s ? (t.createVertexArray = () => s.createVertexArrayOES(), t.bindVertexArray = r => s.bindVertexArrayOES(r), t.deleteVertexArray = r => s.deleteVertexArrayOES(r)) : (this.hasVao = !1, t.createVertexArray = () => null, t.bindVertexArray = () => null, t.deleteVertexArray = () => null)
        }
        if (e.webGLVersion !== 2) {
          const s = t.getExtension("ANGLE_instanced_arrays");
          s ? (t.vertexAttribDivisor = (r, n) => s.vertexAttribDivisorANGLE(r, n), t.drawElementsInstanced = (r, n, a, o, h) => s.drawElementsInstancedANGLE(r, n, a, o, h), t.drawArraysInstanced = (r, n, a, o) => s.drawArraysInstancedANGLE(r, n, a, o)) : this.hasInstance = !1
        }
        this.canUseUInt32ElementIndex = e.webGLVersion === 2 || !!e.extensions.uint32ElementIndex
      }
      bind(t, e) {
        e = e || this.renderer.shader.shader;
        const {
          gl: s
        } = this;
        let r = t.glVertexArrayObjects[this.CONTEXT_UID],
          n = !1;
        r || (this.managedGeometries[t.id] = t, t.disposeRunner.add(this), t.glVertexArrayObjects[this.CONTEXT_UID] = r = {}, n = !0);
        const a = r[e.program.id] || this.initGeometryVao(t, e, n);
        this._activeGeometry = t, this._activeVao !== a && (this._activeVao = a, this.hasVao ? s.bindVertexArray(a) : this.activateVao(t, e.program)), this.updateBuffers()
      }
      reset() {
        this.unbind()
      }
      updateBuffers() {
        const t = this._activeGeometry,
          e = this.renderer.buffer;
        for (let s = 0; s < t.buffers.length; s++) {
          const r = t.buffers[s];
          e.update(r)
        }
      }
      checkCompatibility(t, e) {
        const s = t.attributes,
          r = e.attributeData;
        for (const n in r)
          if (!s[n]) throw new Error(`shader and geometry incompatible, geometry missing the "${n}" attribute`)
      }
      getSignature(t, e) {
        const s = t.attributes,
          r = e.attributeData,
          n = ["g", t.id];
        for (const a in s) r[a] && n.push(a, r[a].location);
        return n.join("-")
      }
      initGeometryVao(t, e, s = !0) {
        const r = this.gl,
          n = this.CONTEXT_UID,
          a = this.renderer.buffer,
          o = e.program;
        o.glPrograms[n] || this.renderer.shader.generateProgram(e), this.checkCompatibility(t, o);
        const h = this.getSignature(t, o),
          l = t.glVertexArrayObjects[this.CONTEXT_UID];
        let u = l[h];
        if (u) return l[o.id] = u, u;
        const c = t.buffers,
          d = t.attributes,
          f = {},
          p = {};
        for (const m in c) f[m] = 0, p[m] = 0;
        for (const m in d) !d[m].size && o.attributeData[m] ? d[m].size = o.attributeData[m].size : d[m].size || console.warn(`PIXI Geometry attribute '${m}' size cannot be determined (likely the bound shader does not have the attribute)`), f[d[m].buffer] += d[m].size * en[d[m].type];
        for (const m in d) {
          const g = d[m],
            y = g.size;
          g.stride === void 0 && (f[g.buffer] === y * en[g.type] ? g.stride = 0 : g.stride = f[g.buffer]), g.start === void 0 && (g.start = p[g.buffer], p[g.buffer] += y * en[g.type])
        }
        u = r.createVertexArray(), r.bindVertexArray(u);
        for (let m = 0; m < c.length; m++) {
          const g = c[m];
          a.bind(g), s && g._glBuffers[n].refCount++
        }
        return this.activateVao(t, o), l[o.id] = u, l[h] = u, r.bindVertexArray(null), a.unbind(Gt.ARRAY_BUFFER), u
      }
      disposeGeometry(t, e) {
        var s;
        if (!this.managedGeometries[t.id]) return;
        delete this.managedGeometries[t.id];
        const r = t.glVertexArrayObjects[this.CONTEXT_UID],
          n = this.gl,
          a = t.buffers,
          o = (s = this.renderer) == null ? void 0 : s.buffer;
        if (t.disposeRunner.remove(this), !!r) {
          if (o)
            for (let h = 0; h < a.length; h++) {
              const l = a[h]._glBuffers[this.CONTEXT_UID];
              l && (l.refCount--, l.refCount === 0 && !e && o.dispose(a[h], e))
            }
          if (!e) {
            for (const h in r)
              if (h[0] === "g") {
                const l = r[h];
                this._activeVao === l && this.unbind(), n.deleteVertexArray(l)
              }
          }
          delete t.glVertexArrayObjects[this.CONTEXT_UID]
        }
      }
      disposeAll(t) {
        const e = Object.keys(this.managedGeometries);
        for (let s = 0; s < e.length; s++) this.disposeGeometry(this.managedGeometries[e[s]], t)
      }
      activateVao(t, e) {
        const s = this.gl,
          r = this.CONTEXT_UID,
          n = this.renderer.buffer,
          a = t.buffers,
          o = t.attributes;
        t.indexBuffer && n.bind(t.indexBuffer);
        let h = null;
        for (const l in o) {
          const u = o[l],
            c = a[u.buffer],
            d = c._glBuffers[r];
          if (e.attributeData[l]) {
            h !== d && (n.bind(c), h = d);
            const f = e.attributeData[l].location;
            if (s.enableVertexAttribArray(f), s.vertexAttribPointer(f, u.size, u.type || s.FLOAT, u.normalized, u.stride, u.start), u.instance)
              if (this.hasInstance) s.vertexAttribDivisor(f, u.divisor);
              else throw new Error("geometry error, GPU Instancing is not supported on this device")
          }
        }
      }
      draw(t, e, s, r) {
        const {
          gl: n
        } = this, a = this._activeGeometry;
        if (a.indexBuffer) {
          const o = a.indexBuffer.data.BYTES_PER_ELEMENT,
            h = o === 2 ? n.UNSIGNED_SHORT : n.UNSIGNED_INT;
          o === 2 || o === 4 && this.canUseUInt32ElementIndex ? a.instanced ? n.drawElementsInstanced(t, e || a.indexBuffer.data.length, h, (s || 0) * o, r || 1) : n.drawElements(t, e || a.indexBuffer.data.length, h, (s || 0) * o) : console.warn("unsupported index buffer type: uint32")
        } else a.instanced ? n.drawArraysInstanced(t, s, e || a.getSize(), r || 1) : n.drawArrays(t, s, e || a.getSize());
        return this
      }
      unbind() {
        this.gl.bindVertexArray(null), this._activeVao = null, this._activeGeometry = null
      }
      destroy() {
        this.renderer = null
      }
    }
    sn.extension = {
      type: R.RendererSystem,
      name: "geometry"
    }, L.add(sn);
    const Oo = new tt;
    class wi {
      constructor(t, e) {
        this._texture = t, this.mapCoord = new tt, this.uClampFrame = new Float32Array(4), this.uClampOffset = new Float32Array(2), this._textureID = -1, this._updateID = 0, this.clampOffset = 0, this.clampMargin = typeof e == "undefined" ? .5 : e, this.isSimple = !1
      }
      get texture() {
        return this._texture
      }
      set texture(t) {
        this._texture = t, this._textureID = -1
      }
      multiplyUvs(t, e) {
        e === void 0 && (e = t);
        const s = this.mapCoord;
        for (let r = 0; r < t.length; r += 2) {
          const n = t[r],
            a = t[r + 1];
          e[r] = n * s.a + a * s.c + s.tx, e[r + 1] = n * s.b + a * s.d + s.ty
        }
        return e
      }
      update(t) {
        const e = this._texture;
        if (!e || !e.valid || !t && this._textureID === e._updateID) return !1;
        this._textureID = e._updateID, this._updateID++;
        const s = e._uvs;
        this.mapCoord.set(s.x1 - s.x0, s.y1 - s.y0, s.x3 - s.x0, s.y3 - s.y0, s.x0, s.y0);
        const r = e.orig,
          n = e.trim;
        n && (Oo.set(r.width / n.width, 0, 0, r.height / n.height, -n.x / n.width, -n.y / n.height), this.mapCoord.append(Oo));
        const a = e.baseTexture,
          o = this.uClampFrame,
          h = this.clampMargin / a.resolution,
          l = this.clampOffset;
        return o[0] = (e._frame.x + h + l) / a.width, o[1] = (e._frame.y + h + l) / a.height, o[2] = (e._frame.x + e._frame.width - h + l) / a.width, o[3] = (e._frame.y + e._frame.height - h + l) / a.height, this.uClampOffset[0] = l / a.realWidth, this.uClampOffset[1] = l / a.realHeight, this.isSimple = e._frame.width === a.width && e._frame.height === a.height && e.rotate === 0, !0
      }
    }
    var od = `varying vec2 vMaskCoord;
  varying vec2 vTextureCoord;
  
  uniform sampler2D uSampler;
  uniform sampler2D mask;
  uniform float alpha;
  uniform float npmAlpha;
  uniform vec4 maskClamp;
  
  void main(void)
  {
      float clip = step(3.5,
          step(maskClamp.x, vMaskCoord.x) +
          step(maskClamp.y, vMaskCoord.y) +
          step(vMaskCoord.x, maskClamp.z) +
          step(vMaskCoord.y, maskClamp.w));
  
      vec4 original = texture2D(uSampler, vTextureCoord);
      vec4 masky = texture2D(mask, vMaskCoord);
      float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);
  
      original *= (alphaMul * masky.r * alpha * clip);
  
      gl_FragColor = original;
  }
  `,
      hd = `attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat3 projectionMatrix;
  uniform mat3 otherMatrix;
  
  varying vec2 vMaskCoord;
  varying vec2 vTextureCoord;
  
  void main(void)
  {
      gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  
      vTextureCoord = aTextureCoord;
      vMaskCoord = ( otherMatrix * vec3( aTextureCoord, 1.0)  ).xy;
  }
  `;
    class Bo extends yt {
      constructor(t, e, s) {
        let r = null;
        typeof t != "string" && e === void 0 && s === void 0 && (r = t, t = void 0, e = void 0, s = void 0), super(t || hd, e || od, s), this.maskSprite = r, this.maskMatrix = new tt
      }
      get maskSprite() {
        return this._maskSprite
      }
      set maskSprite(t) {
        this._maskSprite = t, this._maskSprite && (this._maskSprite.renderable = !1)
      }
      apply(t, e, s, r) {
        const n = this._maskSprite,
          a = n._texture;
        a.valid && (a.uvMatrix || (a.uvMatrix = new wi(a, 0)), a.uvMatrix.update(), this.uniforms.npmAlpha = a.baseTexture.alphaMode ? 0 : 1, this.uniforms.mask = a, this.uniforms.otherMatrix = t.calculateSpriteMatrix(this.maskMatrix, n).prepend(a.uvMatrix.mapCoord), this.uniforms.alpha = n.worldAlpha, this.uniforms.maskClamp = a.uvMatrix.uClampFrame, t.applyFilter(this, e, s, r))
      }
    }
    class Fo {
      constructor(t = null) {
        this.type = ht.NONE, this.autoDetect = !0, this.maskObject = t || null, this.pooled = !1, this.isMaskData = !0, this.resolution = null, this.multisample = yt.defaultMultisample, this.enabled = !0, this.colorMask = 15, this._filters = null, this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null, this._scissorRectLocal = null, this._colorMask = 15, this._target = null
      }
      get filter() {
        return this._filters ? this._filters[0] : null
      }
      set filter(t) {
        t ? this._filters ? this._filters[0] = t : this._filters = [t] : this._filters = null
      }
      reset() {
        this.pooled && (this.maskObject = null, this.type = ht.NONE, this.autoDetect = !0), this._target = null, this._scissorRectLocal = null
      }
      copyCountersOrReset(t) {
        t ? (this._stencilCounter = t._stencilCounter, this._scissorCounter = t._scissorCounter, this._scissorRect = t._scissorRect) : (this._stencilCounter = 0, this._scissorCounter = 0, this._scissorRect = null)
      }
    }
    class rn {
      constructor(t) {
        this.renderer = t, this.enableScissor = !0, this.alphaMaskPool = [], this.maskDataPool = [], this.maskStack = [], this.alphaMaskIndex = 0
      }
      setMaskStack(t) {
        this.maskStack = t, this.renderer.scissor.setMaskStack(t), this.renderer.stencil.setMaskStack(t)
      }
      push(t, e) {
        let s = e;
        if (!s.isMaskData) {
          const n = this.maskDataPool.pop() || new Fo;
          n.pooled = !0, n.maskObject = e, s = n
        }
        const r = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null;
        if (s.copyCountersOrReset(r), s._colorMask = r ? r._colorMask : 15, s.autoDetect && this.detect(s), s._target = t, s.type !== ht.SPRITE && this.maskStack.push(s), s.enabled) switch (s.type) {
          case ht.SCISSOR:
            this.renderer.scissor.push(s);
            break;
          case ht.STENCIL:
            this.renderer.stencil.push(s);
            break;
          case ht.SPRITE:
            s.copyCountersOrReset(null), this.pushSpriteMask(s);
            break;
          case ht.COLOR:
            this.pushColorMask(s);
            break;
          default:
            break
        }
        s.type === ht.SPRITE && this.maskStack.push(s)
      }
      pop(t) {
        const e = this.maskStack.pop();
        if (!(!e || e._target !== t)) {
          if (e.enabled) switch (e.type) {
            case ht.SCISSOR:
              this.renderer.scissor.pop(e);
              break;
            case ht.STENCIL:
              this.renderer.stencil.pop(e.maskObject);
              break;
            case ht.SPRITE:
              this.popSpriteMask(e);
              break;
            case ht.COLOR:
              this.popColorMask(e);
              break;
            default:
              break
          }
          if (e.reset(), e.pooled && this.maskDataPool.push(e), this.maskStack.length !== 0) {
            const s = this.maskStack[this.maskStack.length - 1];
            s.type === ht.SPRITE && s._filters && (s._filters[0].maskSprite = s.maskObject)
          }
        }
      }
      detect(t) {
        const e = t.maskObject;
        e ? e.isSprite ? t.type = ht.SPRITE : this.enableScissor && this.renderer.scissor.testScissor(t) ? t.type = ht.SCISSOR : t.type = ht.STENCIL : t.type = ht.COLOR
      }
      pushSpriteMask(t) {
        const {
          maskObject: e
        } = t, s = t._target;
        let r = t._filters;
        r || (r = this.alphaMaskPool[this.alphaMaskIndex], r || (r = this.alphaMaskPool[this.alphaMaskIndex] = [new Bo])), r[0].resolution = t.resolution, r[0].multisample = t.multisample, r[0].maskSprite = e;
        const n = s.filterArea;
        s.filterArea = e.getBounds(!0), this.renderer.filter.push(s, r), s.filterArea = n, t._filters || this.alphaMaskIndex++
      }
      popSpriteMask(t) {
        this.renderer.filter.pop(), t._filters ? t._filters[0].maskSprite = null : (this.alphaMaskIndex--, this.alphaMaskPool[this.alphaMaskIndex][0].maskSprite = null)
      }
      pushColorMask(t) {
        const e = t._colorMask,
          s = t._colorMask = e & t.colorMask;
        s !== e && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)
      }
      popColorMask(t) {
        const e = t._colorMask,
          s = this.maskStack.length > 0 ? this.maskStack[this.maskStack.length - 1]._colorMask : 15;
        s !== e && this.renderer.gl.colorMask((s & 1) !== 0, (s & 2) !== 0, (s & 4) !== 0, (s & 8) !== 0)
      }
      destroy() {
        this.renderer = null
      }
    }
    rn.extension = {
      type: R.RendererSystem,
      name: "mask"
    }, L.add(rn);
    class No {
      constructor(t) {
        this.renderer = t, this.maskStack = [], this.glConst = 0
      }
      getStackLength() {
        return this.maskStack.length
      }
      setMaskStack(t) {
        const {
          gl: e
        } = this.renderer, s = this.getStackLength();
        this.maskStack = t;
        const r = this.getStackLength();
        r !== s && (r === 0 ? e.disable(this.glConst) : (e.enable(this.glConst), this._useCurrent()))
      }
      _useCurrent() {}
      destroy() {
        this.renderer = null, this.maskStack = null
      }
    }
    const Lo = new tt,
      Uo = [],
      ko = class ir extends No {
        constructor(t) {
          super(t), this.glConst = O.ADAPTER.getWebGLRenderingContext().SCISSOR_TEST
        }
        getStackLength() {
          const t = this.maskStack[this.maskStack.length - 1];
          return t ? t._scissorCounter : 0
        }
        calcScissorRect(t) {
          var e;
          if (t._scissorRectLocal) return;
          const s = t._scissorRect,
            {
              maskObject: r
            } = t,
            {
              renderer: n
            } = this,
            a = n.renderTexture,
            o = r.getBounds(!0, (e = Uo.pop()) != null ? e : new j);
          this.roundFrameToPixels(o, a.current ? a.current.resolution : n.resolution, a.sourceFrame, a.destinationFrame, n.projection.transform), s && o.fit(s), t._scissorRectLocal = o
        }
        static isMatrixRotated(t) {
          if (!t) return !1;
          const {
            a: e,
            b: s,
            c: r,
            d: n
          } = t;
          return (Math.abs(s) > 1e-4 || Math.abs(r) > 1e-4) && (Math.abs(e) > 1e-4 || Math.abs(n) > 1e-4)
        }
        testScissor(t) {
          const {
            maskObject: e
          } = t;
          if (!e.isFastRect || !e.isFastRect() || ir.isMatrixRotated(e.worldTransform) || ir.isMatrixRotated(this.renderer.projection.transform)) return !1;
          this.calcScissorRect(t);
          const s = t._scissorRectLocal;
          return s.width > 0 && s.height > 0
        }
        roundFrameToPixels(t, e, s, r, n) {
          ir.isMatrixRotated(n) || (n = n ? Lo.copyFrom(n) : Lo.identity(), n.translate(-s.x, -s.y).scale(r.width / s.width, r.height / s.height).translate(r.x, r.y), this.renderer.filter.transformAABB(n, t), t.fit(r), t.x = Math.round(t.x * e), t.y = Math.round(t.y * e), t.width = Math.round(t.width * e), t.height = Math.round(t.height * e))
        }
        push(t) {
          t._scissorRectLocal || this.calcScissorRect(t);
          const {
            gl: e
          } = this.renderer;
          t._scissorRect || e.enable(e.SCISSOR_TEST), t._scissorCounter++, t._scissorRect = t._scissorRectLocal, this._useCurrent()
        }
        pop(t) {
          const {
            gl: e
          } = this.renderer;
          t && Uo.push(t._scissorRectLocal), this.getStackLength() > 0 ? this._useCurrent() : e.disable(e.SCISSOR_TEST)
        }
        _useCurrent() {
          const t = this.maskStack[this.maskStack.length - 1]._scissorRect;
          let e;
          this.renderer.renderTexture.current ? e = t.y : e = this.renderer.height - t.height - t.y, this.renderer.gl.scissor(t.x, e, t.width, t.height)
        }
      };
    ko.extension = {
      type: R.RendererSystem,
      name: "scissor"
    };
    let Go = ko;
    L.add(Go);
    class nn extends No {
      constructor(t) {
        super(t), this.glConst = O.ADAPTER.getWebGLRenderingContext().STENCIL_TEST
      }
      getStackLength() {
        const t = this.maskStack[this.maskStack.length - 1];
        return t ? t._stencilCounter : 0
      }
      push(t) {
        const e = t.maskObject,
          {
            gl: s
          } = this.renderer,
          r = t._stencilCounter;
        r === 0 && (this.renderer.framebuffer.forceStencil(), s.clearStencil(0), s.clear(s.STENCIL_BUFFER_BIT), s.enable(s.STENCIL_TEST)), t._stencilCounter++;
        const n = t._colorMask;
        n !== 0 && (t._colorMask = 0, s.colorMask(!1, !1, !1, !1)), s.stencilFunc(s.EQUAL, r, 4294967295), s.stencilOp(s.KEEP, s.KEEP, s.INCR), e.renderable = !0, e.render(this.renderer), this.renderer.batch.flush(), e.renderable = !1, n !== 0 && (t._colorMask = n, s.colorMask((n & 1) !== 0, (n & 2) !== 0, (n & 4) !== 0, (n & 8) !== 0)), this._useCurrent()
      }
      pop(t) {
        const e = this.renderer.gl;
        if (this.getStackLength() === 0) e.disable(e.STENCIL_TEST);
        else {
          const s = this.maskStack.length !== 0 ? this.maskStack[this.maskStack.length - 1] : null,
            r = s ? s._colorMask : 15;
          r !== 0 && (s._colorMask = 0, e.colorMask(!1, !1, !1, !1)), e.stencilOp(e.KEEP, e.KEEP, e.DECR), t.renderable = !0, t.render(this.renderer), this.renderer.batch.flush(), t.renderable = !1, r !== 0 && (s._colorMask = r, e.colorMask((r & 1) !== 0, (r & 2) !== 0, (r & 4) !== 0, (r & 8) !== 0)), this._useCurrent()
        }
      }
      _useCurrent() {
        const t = this.renderer.gl;
        t.stencilFunc(t.EQUAL, this.getStackLength(), 4294967295), t.stencilOp(t.KEEP, t.KEEP, t.KEEP)
      }
    }
    nn.extension = {
      type: R.RendererSystem,
      name: "stencil"
    }, L.add(nn);
    class an {
      constructor(t) {
        this.renderer = t, this.plugins = {}
      }
      init() {
        const t = this.rendererPlugins;
        for (const e in t) this.plugins[e] = new t[e](this.renderer)
      }
      destroy() {
        for (const t in this.plugins) this.plugins[t].destroy(), this.plugins[t] = null
      }
    }
    an.extension = {
      type: [R.RendererSystem, R.CanvasRendererSystem],
      name: "_plugin"
    }, L.add(an);
    class on {
      constructor(t) {
        this.renderer = t, this.destinationFrame = null, this.sourceFrame = null, this.defaultFrame = null, this.projectionMatrix = new tt, this.transform = null
      }
      update(t, e, s, r) {
        this.destinationFrame = t || this.destinationFrame || this.defaultFrame, this.sourceFrame = e || this.sourceFrame || t, this.calculateProjection(this.destinationFrame, this.sourceFrame, s, r), this.transform && this.projectionMatrix.append(this.transform);
        const n = this.renderer;
        n.globalUniforms.uniforms.projectionMatrix = this.projectionMatrix, n.globalUniforms.update(), n.shader.shader && n.shader.syncUniformGroup(n.shader.shader.uniforms.globals)
      }
      calculateProjection(t, e, s, r) {
        const n = this.projectionMatrix,
          a = r ? -1 : 1;
        n.identity(), n.a = 1 / e.width * 2, n.d = a * (1 / e.height * 2), n.tx = -1 - e.x * n.a, n.ty = -a - e.y * n.d
      }
      setTransform(t) {}
      destroy() {
        this.renderer = null
      }
    }
    on.extension = {
      type: R.RendererSystem,
      name: "projection"
    }, L.add(on);
    var $o = Object.getOwnPropertySymbols,
      ld = Object.prototype.hasOwnProperty,
      ud = Object.prototype.propertyIsEnumerable,
      cd = (i, t) => {
        var e = {};
        for (var s in i) ld.call(i, s) && t.indexOf(s) < 0 && (e[s] = i[s]);
        if (i != null && $o)
          for (var s of $o(i)) t.indexOf(s) < 0 && ud.call(i, s) && (e[s] = i[s]);
        return e
      };
    const dd = new _i,
      Ho = new j;
    class hn {
      constructor(t) {
        this.renderer = t, this._tempMatrix = new tt
      }
      generateTexture(t, e) {
        var s;
        const r = e || {},
          {
            region: n
          } = r,
          a = cd(r, ["region"]),
          o = (n == null ? void 0 : n.copyTo(Ho)) || t.getLocalBounds(Ho, !0),
          h = a.resolution || this.renderer.resolution;
        o.width = Math.max(o.width, 1 / h), o.height = Math.max(o.height, 1 / h), a.width = o.width, a.height = o.height, a.resolution = h, (s = a.multisample) != null || (a.multisample = this.renderer.multisample);
        const l = xe.create(a);
        this._tempMatrix.tx = -o.x, this._tempMatrix.ty = -o.y;
        const u = t.transform;
        return t.transform = dd, this.renderer.render(t, {
          renderTexture: l,
          transform: this._tempMatrix,
          skipUpdateTransform: !!t.parent,
          blit: !0
        }), t.transform = u, l
      }
      destroy() {}
    }
    hn.extension = {
      type: [R.RendererSystem, R.CanvasRendererSystem],
      name: "textureGenerator"
    }, L.add(hn);
    const Ne = new j,
      As = new j;
    class ln {
      constructor(t) {
        this.renderer = t, this.defaultMaskStack = [], this.current = null, this.sourceFrame = new j, this.destinationFrame = new j, this.viewportFrame = new j
      }
      contextChange() {
        var t;
        const e = (t = this.renderer) == null ? void 0 : t.gl.getContextAttributes();
        this._rendererPremultipliedAlpha = !!(e && e.alpha && e.premultipliedAlpha)
      }
      bind(t = null, e, s) {
        const r = this.renderer;
        this.current = t;
        let n, a, o;
        t ? (n = t.baseTexture, o = n.resolution, e || (Ne.width = t.frame.width, Ne.height = t.frame.height, e = Ne), s || (As.x = t.frame.x, As.y = t.frame.y, As.width = e.width, As.height = e.height, s = As), a = n.framebuffer) : (o = r.resolution, e || (Ne.width = r._view.screen.width, Ne.height = r._view.screen.height, e = Ne), s || (s = Ne, s.width = e.width, s.height = e.height));
        const h = this.viewportFrame;
        h.x = s.x * o, h.y = s.y * o, h.width = s.width * o, h.height = s.height * o, t || (h.y = r.view.height - (h.y + h.height)), h.ceil(), this.renderer.framebuffer.bind(a, h), this.renderer.projection.update(s, e, o, !a), t ? this.renderer.mask.setMaskStack(n.maskStack) : this.renderer.mask.setMaskStack(this.defaultMaskStack), this.sourceFrame.copyFrom(e), this.destinationFrame.copyFrom(s)
      }
      clear(t, e) {
        const s = this.current ? this.current.baseTexture.clear : this.renderer.background.backgroundColor,
          r = Z.shared.setValue(t || s);
        (this.current && this.current.baseTexture.alphaMode > 0 || !this.current && this._rendererPremultipliedAlpha) && r.premultiply(r.alpha);
        const n = this.destinationFrame,
          a = this.current ? this.current.baseTexture : this.renderer._view.screen,
          o = n.width !== a.width || n.height !== a.height;
        if (o) {
          let {
            x: h,
            y: l,
            width: u,
            height: c
          } = this.viewportFrame;
          h = Math.round(h), l = Math.round(l), u = Math.round(u), c = Math.round(c), this.renderer.gl.enable(this.renderer.gl.SCISSOR_TEST), this.renderer.gl.scissor(h, l, u, c)
        }
        this.renderer.framebuffer.clear(r.red, r.green, r.blue, r.alpha, e), o && this.renderer.scissor.pop()
      }
      resize() {
        this.bind(null)
      }
      reset() {
        this.bind(null)
      }
      destroy() {
        this.renderer = null
      }
    }
    ln.extension = {
      type: R.RendererSystem,
      name: "renderTexture"
    }, L.add(ln);
    class fd {}
    class Vo {
      constructor(t, e) {
        this.program = t, this.uniformData = e, this.uniformGroups = {}, this.uniformDirtyGroups = {}, this.uniformBufferBindings = {}
      }
      destroy() {
        this.uniformData = null, this.uniformGroups = null, this.uniformDirtyGroups = null, this.uniformBufferBindings = null, this.program = null
      }
    }
  
    function pd(i, t) {
      const e = {},
        s = t.getProgramParameter(i, t.ACTIVE_ATTRIBUTES);
      for (let r = 0; r < s; r++) {
        const n = t.getActiveAttrib(i, r);
        if (n.name.startsWith("gl_")) continue;
        const a = Ao(t, n.type),
          o = {
            type: a,
            name: n.name,
            size: To(a),
            location: t.getAttribLocation(i, n.name)
          };
        e[n.name] = o
      }
      return e
    }
  
    function md(i, t) {
      const e = {},
        s = t.getProgramParameter(i, t.ACTIVE_UNIFORMS);
      for (let r = 0; r < s; r++) {
        const n = t.getActiveUniform(i, r),
          a = n.name.replace(/\[.*?\]$/, ""),
          o = !!n.name.match(/\[.*?\]$/),
          h = Ao(t, n.type);
        e[a] = {
          name: a,
          index: r,
          type: h,
          size: n.size,
          isArray: o,
          value: vo(h, n.size)
        }
      }
      return e
    }
  
    function Xo(i, t) {
      var e;
      const s = _o(i, i.VERTEX_SHADER, t.vertexSrc),
        r = _o(i, i.FRAGMENT_SHADER, t.fragmentSrc),
        n = i.createProgram();
      i.attachShader(n, s), i.attachShader(n, r);
      const a = (e = t.extra) == null ? void 0 : e.transformFeedbackVaryings;
      if (a && (typeof i.transformFeedbackVaryings != "function" || i.transformFeedbackVaryings(n, a.names, a.bufferMode === "separate" ? i.SEPARATE_ATTRIBS : i.INTERLEAVED_ATTRIBS)), i.linkProgram(n), i.getProgramParameter(n, i.LINK_STATUS) || Kc(i, n, s, r), t.attributeData = pd(n, i), t.uniformData = md(n, i), !/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(t.vertexSrc)) {
        const h = Object.keys(t.attributeData);
        h.sort((l, u) => l > u ? 1 : -1);
        for (let l = 0; l < h.length; l++) t.attributeData[h[l]].location = l, i.bindAttribLocation(n, l, h[l]);
        i.linkProgram(n)
      }
      i.deleteShader(s), i.deleteShader(r);
      const o = {};
      for (const h in t.uniformData) {
        const l = t.uniformData[h];
        o[h] = {
          location: i.getUniformLocation(n, h),
          value: vo(l.type, l.size)
        }
      }
      return new Vo(n, o)
    }
  
    function gd(i, t, e, s, r) {
      e.buffer.update(r)
    }
    const _d = {
        float: `
          data[offset] = v;
      `,
        vec2: `
          data[offset] = v[0];
          data[offset+1] = v[1];
      `,
        vec3: `
          data[offset] = v[0];
          data[offset+1] = v[1];
          data[offset+2] = v[2];
  
      `,
        vec4: `
          data[offset] = v[0];
          data[offset+1] = v[1];
          data[offset+2] = v[2];
          data[offset+3] = v[3];
      `,
        mat2: `
          data[offset] = v[0];
          data[offset+1] = v[1];
  
          data[offset+4] = v[2];
          data[offset+5] = v[3];
      `,
        mat3: `
          data[offset] = v[0];
          data[offset+1] = v[1];
          data[offset+2] = v[2];
  
          data[offset + 4] = v[3];
          data[offset + 5] = v[4];
          data[offset + 6] = v[5];
  
          data[offset + 8] = v[6];
          data[offset + 9] = v[7];
          data[offset + 10] = v[8];
      `,
        mat4: `
          for(var i = 0; i < 16; i++)
          {
              data[offset + i] = v[i];
          }
      `
      },
      jo = {
        float: 4,
        vec2: 8,
        vec3: 12,
        vec4: 16,
        int: 4,
        ivec2: 8,
        ivec3: 12,
        ivec4: 16,
        uint: 4,
        uvec2: 8,
        uvec3: 12,
        uvec4: 16,
        bool: 4,
        bvec2: 8,
        bvec3: 12,
        bvec4: 16,
        mat2: 16 * 2,
        mat3: 16 * 3,
        mat4: 16 * 4
      };
  
    function zo(i) {
      const t = i.map(n => ({
        data: n,
        offset: 0,
        dataLen: 0,
        dirty: 0
      }));
      let e = 0,
        s = 0,
        r = 0;
      for (let n = 0; n < t.length; n++) {
        const a = t[n];
        if (e = jo[a.data.type], a.data.size > 1 && (e = Math.max(e, 16) * a.data.size), a.dataLen = e, s % e !== 0 && s < 16) {
          const o = s % e % 16;
          s += o, r += o
        }
        s + e > 16 ? (r = Math.ceil(r / 16) * 16, a.offset = r, r += e, s = e) : (a.offset = r, s += e, r += e)
      }
      return r = Math.ceil(r / 16) * 16, {
        uboElements: t,
        size: r
      }
    }
  
    function Wo(i, t) {
      const e = [];
      for (const s in i) t[s] && e.push(t[s]);
      return e.sort((s, r) => s.index - r.index), e
    }
  
    function Yo(i, t) {
      if (!i.autoManage) return {
        size: 0,
        syncFunc: gd
      };
      const e = Wo(i.uniforms, t),
        {
          uboElements: s,
          size: r
        } = zo(e),
        n = [`
      var v = null;
      var v2 = null;
      var cv = null;
      var t = 0;
      var gl = renderer.gl
      var index = 0;
      var data = buffer.data;
      `];
      for (let a = 0; a < s.length; a++) {
        const o = s[a],
          h = i.uniforms[o.data.name],
          l = o.data.name;
        let u = !1;
        for (let c = 0; c < Fe.length; c++) {
          const d = Fe[c];
          if (d.codeUbo && d.test(o.data, h)) {
            n.push(`offset = ${o.offset/4};`, Fe[c].codeUbo(o.data.name, h)), u = !0;
            break
          }
        }
        if (!u)
          if (o.data.size > 1) {
            const c = To(o.data.type),
              d = Math.max(jo[o.data.type] / 16, 1),
              f = c / d,
              p = (4 - f % 4) % 4;
            n.push(`
                  cv = ud.${l}.value;
                  v = uv.${l};
                  offset = ${o.offset/4};
  
                  t = 0;
  
                  for(var i=0; i < ${o.data.size*d}; i++)
                  {
                      for(var j = 0; j < ${f}; j++)
                      {
                          data[offset++] = v[t++];
                      }
                      offset += ${p};
                  }
  
                  `)
          } else {
            const c = _d[o.data.type];
            n.push(`
                  cv = ud.${l}.value;
                  v = uv.${l};
                  offset = ${o.offset/4};
                  ${c};
                  `)
          }
      }
      return n.push(`
         renderer.buffer.update(buffer);
      `), {
        size: r,
        syncFunc: new Function("ud", "uv", "renderer", "syncData", "buffer", n.join(`
  `))
      }
    }
    let vd = 0;
    const Si = {
      textureCount: 0,
      uboCount: 0
    };
    class un {
      constructor(t) {
        this.destroyed = !1, this.renderer = t, this.systemCheck(), this.gl = null, this.shader = null, this.program = null, this.cache = {}, this._uboCache = {}, this.id = vd++
      }
      systemCheck() {
        if (!So()) throw new Error("Current environment does not allow unsafe-eval, please use @pixi/unsafe-eval module to enable support.")
      }
      contextChange(t) {
        this.gl = t, this.reset()
      }
      bind(t, e) {
        t.disposeRunner.add(this), t.uniforms.globals = this.renderer.globalUniforms;
        const s = t.program,
          r = s.glPrograms[this.renderer.CONTEXT_UID] || this.generateProgram(t);
        return this.shader = t, this.program !== s && (this.program = s, this.gl.useProgram(r.program)), e || (Si.textureCount = 0, Si.uboCount = 0, this.syncUniformGroup(t.uniformGroup, Si)), r
      }
      setUniforms(t) {
        const e = this.shader.program,
          s = e.glPrograms[this.renderer.CONTEXT_UID];
        e.syncUniforms(s.uniformData, t, this.renderer)
      }
      syncUniformGroup(t, e) {
        const s = this.getGlProgram();
        (!t.static || t.dirtyId !== s.uniformDirtyGroups[t.id]) && (s.uniformDirtyGroups[t.id] = t.dirtyId, this.syncUniforms(t, s, e))
      }
      syncUniforms(t, e, s) {
        (t.syncUniforms[this.shader.program.id] || this.createSyncGroups(t))(e.uniformData, t.uniforms, this.renderer, s)
      }
      createSyncGroups(t) {
        const e = this.getSignature(t, this.shader.program.uniformData, "u");
        return this.cache[e] || (this.cache[e] = Yc(t, this.shader.program.uniformData)), t.syncUniforms[this.shader.program.id] = this.cache[e], t.syncUniforms[this.shader.program.id]
      }
      syncUniformBufferGroup(t, e) {
        const s = this.getGlProgram();
        if (!t.static || t.dirtyId !== 0 || !s.uniformGroups[t.id]) {
          t.dirtyId = 0;
          const r = s.uniformGroups[t.id] || this.createSyncBufferGroup(t, s, e);
          t.buffer.update(), r(s.uniformData, t.uniforms, this.renderer, Si, t.buffer)
        }
        this.renderer.buffer.bindBufferBase(t.buffer, s.uniformBufferBindings[e])
      }
      createSyncBufferGroup(t, e, s) {
        const {
          gl: r
        } = this.renderer;
        this.renderer.buffer.bind(t.buffer);
        const n = this.gl.getUniformBlockIndex(e.program, s);
        e.uniformBufferBindings[s] = this.shader.uniformBindCount, r.uniformBlockBinding(e.program, n, this.shader.uniformBindCount), this.shader.uniformBindCount++;
        const a = this.getSignature(t, this.shader.program.uniformData, "ubo");
        let o = this._uboCache[a];
        if (o || (o = this._uboCache[a] = Yo(t, this.shader.program.uniformData)), t.autoManage) {
          const h = new Float32Array(o.size / 4);
          t.buffer.update(h)
        }
        return e.uniformGroups[t.id] = o.syncFunc, e.uniformGroups[t.id]
      }
      getSignature(t, e, s) {
        const r = t.uniforms,
          n = [`${s}-`];
        for (const a in r) n.push(a), e[a] && n.push(e[a].type);
        return n.join("-")
      }
      getGlProgram() {
        return this.shader ? this.shader.program.glPrograms[this.renderer.CONTEXT_UID] : null
      }
      generateProgram(t) {
        const e = this.gl,
          s = t.program,
          r = Xo(e, s);
        return s.glPrograms[this.renderer.CONTEXT_UID] = r, r
      }
      reset() {
        this.program = null, this.shader = null
      }
      disposeShader(t) {
        this.shader === t && (this.shader = null)
      }
      destroy() {
        this.renderer = null, this.destroyed = !0
      }
    }
    un.extension = {
      type: R.RendererSystem,
      name: "shader"
    }, L.add(un);
    class ws {
      constructor(t) {
        this.renderer = t
      }
      run(t) {
        const {
          renderer: e
        } = this;
        e.runners.init.emit(e.options), t.hello && console.log(`PixiJS 7.3.1 - ${e.rendererLogId} - https://pixijs.com`), e.resize(e.screen.width, e.screen.height)
      }
      destroy() {}
    }
    ws.defaultOptions = {
      hello: !1
    }, ws.extension = {
      type: [R.RendererSystem, R.CanvasRendererSystem],
      name: "startup"
    }, L.add(ws);
  
    function yd(i, t = []) {
      return t[H.NORMAL] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.ADD] = [i.ONE, i.ONE], t[H.MULTIPLY] = [i.DST_COLOR, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.SCREEN] = [i.ONE, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.OVERLAY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.DARKEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.LIGHTEN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.COLOR_DODGE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.COLOR_BURN] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.HARD_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.SOFT_LIGHT] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.DIFFERENCE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.EXCLUSION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.HUE] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.SATURATION] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.COLOR] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.LUMINOSITY] = [i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.NONE] = [0, 0], t[H.NORMAL_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_ALPHA, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.ADD_NPM] = [i.SRC_ALPHA, i.ONE, i.ONE, i.ONE], t[H.SCREEN_NPM] = [i.SRC_ALPHA, i.ONE_MINUS_SRC_COLOR, i.ONE, i.ONE_MINUS_SRC_ALPHA], t[H.SRC_IN] = [i.DST_ALPHA, i.ZERO], t[H.SRC_OUT] = [i.ONE_MINUS_DST_ALPHA, i.ZERO], t[H.SRC_ATOP] = [i.DST_ALPHA, i.ONE_MINUS_SRC_ALPHA], t[H.DST_OVER] = [i.ONE_MINUS_DST_ALPHA, i.ONE], t[H.DST_IN] = [i.ZERO, i.SRC_ALPHA], t[H.DST_OUT] = [i.ZERO, i.ONE_MINUS_SRC_ALPHA], t[H.DST_ATOP] = [i.ONE_MINUS_DST_ALPHA, i.SRC_ALPHA], t[H.XOR] = [i.ONE_MINUS_DST_ALPHA, i.ONE_MINUS_SRC_ALPHA], t[H.SUBTRACT] = [i.ONE, i.ONE, i.ONE, i.ONE, i.FUNC_REVERSE_SUBTRACT, i.FUNC_ADD], t
    }
    const xd = 0,
      bd = 1,
      Td = 2,
      Ed = 3,
      Ad = 4,
      wd = 5,
      qo = class Qn {
        constructor() {
          this.gl = null, this.stateId = 0, this.polygonOffset = 0, this.blendMode = H.NONE, this._blendEq = !1, this.map = [], this.map[xd] = this.setBlend, this.map[bd] = this.setOffset, this.map[Td] = this.setCullFace, this.map[Ed] = this.setDepthTest, this.map[Ad] = this.setFrontFace, this.map[wd] = this.setDepthMask, this.checks = [], this.defaultState = new Zt, this.defaultState.blend = !0
        }
        contextChange(t) {
          this.gl = t, this.blendModes = yd(t), this.set(this.defaultState), this.reset()
        }
        set(t) {
          if (t = t || this.defaultState, this.stateId !== t.data) {
            let e = this.stateId ^ t.data,
              s = 0;
            for (; e;) e & 1 && this.map[s].call(this, !!(t.data & 1 << s)), e = e >> 1, s++;
            this.stateId = t.data
          }
          for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t)
        }
        forceState(t) {
          t = t || this.defaultState;
          for (let e = 0; e < this.map.length; e++) this.map[e].call(this, !!(t.data & 1 << e));
          for (let e = 0; e < this.checks.length; e++) this.checks[e](this, t);
          this.stateId = t.data
        }
        setBlend(t) {
          this.updateCheck(Qn.checkBlendMode, t), this.gl[t ? "enable" : "disable"](this.gl.BLEND)
        }
        setOffset(t) {
          this.updateCheck(Qn.checkPolygonOffset, t), this.gl[t ? "enable" : "disable"](this.gl.POLYGON_OFFSET_FILL)
        }
        setDepthTest(t) {
          this.gl[t ? "enable" : "disable"](this.gl.DEPTH_TEST)
        }
        setDepthMask(t) {
          this.gl.depthMask(t)
        }
        setCullFace(t) {
          this.gl[t ? "enable" : "disable"](this.gl.CULL_FACE)
        }
        setFrontFace(t) {
          this.gl.frontFace(this.gl[t ? "CW" : "CCW"])
        }
        setBlendMode(t) {
          if (t === this.blendMode) return;
          this.blendMode = t;
          const e = this.blendModes[t],
            s = this.gl;
          e.length === 2 ? s.blendFunc(e[0], e[1]) : s.blendFuncSeparate(e[0], e[1], e[2], e[3]), e.length === 6 ? (this._blendEq = !0, s.blendEquationSeparate(e[4], e[5])) : this._blendEq && (this._blendEq = !1, s.blendEquationSeparate(s.FUNC_ADD, s.FUNC_ADD))
        }
        setPolygonOffset(t, e) {
          this.gl.polygonOffset(t, e)
        }
        reset() {
          this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL, !1), this.forceState(this.defaultState), this._blendEq = !0, this.blendMode = -1, this.setBlendMode(0)
        }
        updateCheck(t, e) {
          const s = this.checks.indexOf(t);
          e && s === -1 ? this.checks.push(t) : !e && s !== -1 && this.checks.splice(s, 1)
        }
        static checkBlendMode(t, e) {
          t.setBlendMode(e.blendMode)
        }
        static checkPolygonOffset(t, e) {
          t.setPolygonOffset(1, e.polygonOffset)
        }
        destroy() {
          this.gl = null
        }
      };
    qo.extension = {
      type: R.RendererSystem,
      name: "state"
    };
    let Ko = qo;
    L.add(Ko);
    class Zo extends Ve {
      constructor() {
        super(...arguments), this.runners = {}, this._systemsHash = {}
      }
      setup(t) {
        var e;
        this.addRunners(...t.runners);
        const s = ((e = t.priority) != null ? e : []).filter(n => t.systems[n]),
          r = [...s, ...Object.keys(t.systems).filter(n => !s.includes(n))];
        for (const n of r) this.addSystem(t.systems[n], n)
      }
      addRunners(...t) {
        t.forEach(e => {
          this.runners[e] = new St(e)
        })
      }
      addSystem(t, e) {
        const s = new t(this);
        if (this[e]) throw new Error(`Whoops! The name "${e}" is already in use`);
        this[e] = s, this._systemsHash[e] = s;
        for (const r in this.runners) this.runners[r].add(s);
        return this
      }
      emitWithCustomOptions(t, e) {
        const s = Object.keys(this._systemsHash);
        t.items.forEach(r => {
          const n = s.find(a => this._systemsHash[a] === r);
          r[t.name](e[n])
        })
      }
      destroy() {
        Object.values(this.runners).forEach(t => {
          t.destroy()
        }), this._systemsHash = {}
      }
    }
    const Ss = class rr {
      constructor(t) {
        this.renderer = t, this.count = 0, this.checkCount = 0, this.maxIdle = rr.defaultMaxIdle, this.checkCountMax = rr.defaultCheckCountMax, this.mode = rr.defaultMode
      }
      postrender() {
        this.renderer.objectRenderer.renderingToScreen && (this.count++, this.mode !== Qs.MANUAL && (this.checkCount++, this.checkCount > this.checkCountMax && (this.checkCount = 0, this.run())))
      }
      run() {
        const t = this.renderer.texture,
          e = t.managedTextures;
        let s = !1;
        for (let r = 0; r < e.length; r++) {
          const n = e[r];
          n.resource && this.count - n.touched > this.maxIdle && (t.destroyTexture(n, !0), e[r] = null, s = !0)
        }
        if (s) {
          let r = 0;
          for (let n = 0; n < e.length; n++) e[n] !== null && (e[r++] = e[n]);
          e.length = r
        }
      }
      unload(t) {
        const e = this.renderer.texture,
          s = t._texture;
        s && !s.framebuffer && e.destroyTexture(s);
        for (let r = t.children.length - 1; r >= 0; r--) this.unload(t.children[r])
      }
      destroy() {
        this.renderer = null
      }
    };
    Ss.defaultMode = Qs.AUTO, Ss.defaultMaxIdle = 3600, Ss.defaultCheckCountMax = 600, Ss.extension = {
      type: R.RendererSystem,
      name: "textureGC"
    };
    let be = Ss;
    L.add(be);
    class Ii {
      constructor(t) {
        this.texture = t, this.width = -1, this.height = -1, this.dirtyId = -1, this.dirtyStyleId = -1, this.mipmap = !1, this.wrapMode = 33071, this.type = k.UNSIGNED_BYTE, this.internalFormat = A.RGBA, this.samplerType = 0
      }
    }
  
    function Sd(i) {
      let t;
      return "WebGL2RenderingContext" in globalThis && i instanceof globalThis.WebGL2RenderingContext ? t = {
        [i.RGB]: D.FLOAT,
        [i.RGBA]: D.FLOAT,
        [i.ALPHA]: D.FLOAT,
        [i.LUMINANCE]: D.FLOAT,
        [i.LUMINANCE_ALPHA]: D.FLOAT,
        [i.R8]: D.FLOAT,
        [i.R8_SNORM]: D.FLOAT,
        [i.RG8]: D.FLOAT,
        [i.RG8_SNORM]: D.FLOAT,
        [i.RGB8]: D.FLOAT,
        [i.RGB8_SNORM]: D.FLOAT,
        [i.RGB565]: D.FLOAT,
        [i.RGBA4]: D.FLOAT,
        [i.RGB5_A1]: D.FLOAT,
        [i.RGBA8]: D.FLOAT,
        [i.RGBA8_SNORM]: D.FLOAT,
        [i.RGB10_A2]: D.FLOAT,
        [i.RGB10_A2UI]: D.FLOAT,
        [i.SRGB8]: D.FLOAT,
        [i.SRGB8_ALPHA8]: D.FLOAT,
        [i.R16F]: D.FLOAT,
        [i.RG16F]: D.FLOAT,
        [i.RGB16F]: D.FLOAT,
        [i.RGBA16F]: D.FLOAT,
        [i.R32F]: D.FLOAT,
        [i.RG32F]: D.FLOAT,
        [i.RGB32F]: D.FLOAT,
        [i.RGBA32F]: D.FLOAT,
        [i.R11F_G11F_B10F]: D.FLOAT,
        [i.RGB9_E5]: D.FLOAT,
        [i.R8I]: D.INT,
        [i.R8UI]: D.UINT,
        [i.R16I]: D.INT,
        [i.R16UI]: D.UINT,
        [i.R32I]: D.INT,
        [i.R32UI]: D.UINT,
        [i.RG8I]: D.INT,
        [i.RG8UI]: D.UINT,
        [i.RG16I]: D.INT,
        [i.RG16UI]: D.UINT,
        [i.RG32I]: D.INT,
        [i.RG32UI]: D.UINT,
        [i.RGB8I]: D.INT,
        [i.RGB8UI]: D.UINT,
        [i.RGB16I]: D.INT,
        [i.RGB16UI]: D.UINT,
        [i.RGB32I]: D.INT,
        [i.RGB32UI]: D.UINT,
        [i.RGBA8I]: D.INT,
        [i.RGBA8UI]: D.UINT,
        [i.RGBA16I]: D.INT,
        [i.RGBA16UI]: D.UINT,
        [i.RGBA32I]: D.INT,
        [i.RGBA32UI]: D.UINT,
        [i.DEPTH_COMPONENT16]: D.FLOAT,
        [i.DEPTH_COMPONENT24]: D.FLOAT,
        [i.DEPTH_COMPONENT32F]: D.FLOAT,
        [i.DEPTH_STENCIL]: D.FLOAT,
        [i.DEPTH24_STENCIL8]: D.FLOAT,
        [i.DEPTH32F_STENCIL8]: D.FLOAT
      } : t = {
        [i.RGB]: D.FLOAT,
        [i.RGBA]: D.FLOAT,
        [i.ALPHA]: D.FLOAT,
        [i.LUMINANCE]: D.FLOAT,
        [i.LUMINANCE_ALPHA]: D.FLOAT,
        [i.DEPTH_STENCIL]: D.FLOAT
      }, t
    }
  
    function Id(i) {
      let t;
      return "WebGL2RenderingContext" in globalThis && i instanceof globalThis.WebGL2RenderingContext ? t = {
        [k.UNSIGNED_BYTE]: {
          [A.RGBA]: i.RGBA8,
          [A.RGB]: i.RGB8,
          [A.RG]: i.RG8,
          [A.RED]: i.R8,
          [A.RGBA_INTEGER]: i.RGBA8UI,
          [A.RGB_INTEGER]: i.RGB8UI,
          [A.RG_INTEGER]: i.RG8UI,
          [A.RED_INTEGER]: i.R8UI,
          [A.ALPHA]: i.ALPHA,
          [A.LUMINANCE]: i.LUMINANCE,
          [A.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
        },
        [k.BYTE]: {
          [A.RGBA]: i.RGBA8_SNORM,
          [A.RGB]: i.RGB8_SNORM,
          [A.RG]: i.RG8_SNORM,
          [A.RED]: i.R8_SNORM,
          [A.RGBA_INTEGER]: i.RGBA8I,
          [A.RGB_INTEGER]: i.RGB8I,
          [A.RG_INTEGER]: i.RG8I,
          [A.RED_INTEGER]: i.R8I
        },
        [k.UNSIGNED_SHORT]: {
          [A.RGBA_INTEGER]: i.RGBA16UI,
          [A.RGB_INTEGER]: i.RGB16UI,
          [A.RG_INTEGER]: i.RG16UI,
          [A.RED_INTEGER]: i.R16UI,
          [A.DEPTH_COMPONENT]: i.DEPTH_COMPONENT16
        },
        [k.SHORT]: {
          [A.RGBA_INTEGER]: i.RGBA16I,
          [A.RGB_INTEGER]: i.RGB16I,
          [A.RG_INTEGER]: i.RG16I,
          [A.RED_INTEGER]: i.R16I
        },
        [k.UNSIGNED_INT]: {
          [A.RGBA_INTEGER]: i.RGBA32UI,
          [A.RGB_INTEGER]: i.RGB32UI,
          [A.RG_INTEGER]: i.RG32UI,
          [A.RED_INTEGER]: i.R32UI,
          [A.DEPTH_COMPONENT]: i.DEPTH_COMPONENT24
        },
        [k.INT]: {
          [A.RGBA_INTEGER]: i.RGBA32I,
          [A.RGB_INTEGER]: i.RGB32I,
          [A.RG_INTEGER]: i.RG32I,
          [A.RED_INTEGER]: i.R32I
        },
        [k.FLOAT]: {
          [A.RGBA]: i.RGBA32F,
          [A.RGB]: i.RGB32F,
          [A.RG]: i.RG32F,
          [A.RED]: i.R32F,
          [A.DEPTH_COMPONENT]: i.DEPTH_COMPONENT32F
        },
        [k.HALF_FLOAT]: {
          [A.RGBA]: i.RGBA16F,
          [A.RGB]: i.RGB16F,
          [A.RG]: i.RG16F,
          [A.RED]: i.R16F
        },
        [k.UNSIGNED_SHORT_5_6_5]: {
          [A.RGB]: i.RGB565
        },
        [k.UNSIGNED_SHORT_4_4_4_4]: {
          [A.RGBA]: i.RGBA4
        },
        [k.UNSIGNED_SHORT_5_5_5_1]: {
          [A.RGBA]: i.RGB5_A1
        },
        [k.UNSIGNED_INT_2_10_10_10_REV]: {
          [A.RGBA]: i.RGB10_A2,
          [A.RGBA_INTEGER]: i.RGB10_A2UI
        },
        [k.UNSIGNED_INT_10F_11F_11F_REV]: {
          [A.RGB]: i.R11F_G11F_B10F
        },
        [k.UNSIGNED_INT_5_9_9_9_REV]: {
          [A.RGB]: i.RGB9_E5
        },
        [k.UNSIGNED_INT_24_8]: {
          [A.DEPTH_STENCIL]: i.DEPTH24_STENCIL8
        },
        [k.FLOAT_32_UNSIGNED_INT_24_8_REV]: {
          [A.DEPTH_STENCIL]: i.DEPTH32F_STENCIL8
        }
      } : t = {
        [k.UNSIGNED_BYTE]: {
          [A.RGBA]: i.RGBA,
          [A.RGB]: i.RGB,
          [A.ALPHA]: i.ALPHA,
          [A.LUMINANCE]: i.LUMINANCE,
          [A.LUMINANCE_ALPHA]: i.LUMINANCE_ALPHA
        },
        [k.UNSIGNED_SHORT_5_6_5]: {
          [A.RGB]: i.RGB
        },
        [k.UNSIGNED_SHORT_4_4_4_4]: {
          [A.RGBA]: i.RGBA
        },
        [k.UNSIGNED_SHORT_5_5_5_1]: {
          [A.RGBA]: i.RGBA
        }
      }, t
    }
    class cn {
      constructor(t) {
        this.renderer = t, this.boundTextures = [], this.currentLocation = -1, this.managedTextures = [], this._unknownBoundTextures = !1, this.unknownTexture = new X, this.hasIntegerTextures = !1
      }
      contextChange() {
        const t = this.gl = this.renderer.gl;
        this.CONTEXT_UID = this.renderer.CONTEXT_UID, this.webGLVersion = this.renderer.context.webGLVersion, this.internalFormats = Id(t), this.samplerTypes = Sd(t);
        const e = t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS);
        this.boundTextures.length = e;
        for (let r = 0; r < e; r++) this.boundTextures[r] = null;
        this.emptyTextures = {};
        const s = new Ii(t.createTexture());
        t.bindTexture(t.TEXTURE_2D, s.texture), t.texImage2D(t.TEXTURE_2D, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, new Uint8Array(4)), this.emptyTextures[t.TEXTURE_2D] = s, this.emptyTextures[t.TEXTURE_CUBE_MAP] = new Ii(t.createTexture()), t.bindTexture(t.TEXTURE_CUBE_MAP, this.emptyTextures[t.TEXTURE_CUBE_MAP].texture);
        for (let r = 0; r < 6; r++) t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X + r, 0, t.RGBA, 1, 1, 0, t.RGBA, t.UNSIGNED_BYTE, null);
        t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MAG_FILTER, t.LINEAR), t.texParameteri(t.TEXTURE_CUBE_MAP, t.TEXTURE_MIN_FILTER, t.LINEAR);
        for (let r = 0; r < this.boundTextures.length; r++) this.bind(null, r)
      }
      bind(t, e = 0) {
        const {
          gl: s
        } = this;
        if (t = t == null ? void 0 : t.castToBaseTexture(), t != null && t.valid && !t.parentTextureArray) {
          t.touched = this.renderer.textureGC.count;
          const r = t._glTextures[this.CONTEXT_UID] || this.initTexture(t);
          this.boundTextures[e] !== t && (this.currentLocation !== e && (this.currentLocation = e, s.activeTexture(s.TEXTURE0 + e)), s.bindTexture(t.target, r.texture)), r.dirtyId !== t.dirtyId ? (this.currentLocation !== e && (this.currentLocation = e, s.activeTexture(s.TEXTURE0 + e)), this.updateTexture(t)) : r.dirtyStyleId !== t.dirtyStyleId && this.updateTextureStyle(t), this.boundTextures[e] = t
        } else this.currentLocation !== e && (this.currentLocation = e, s.activeTexture(s.TEXTURE0 + e)), s.bindTexture(s.TEXTURE_2D, this.emptyTextures[s.TEXTURE_2D].texture), this.boundTextures[e] = null
      }
      reset() {
        this._unknownBoundTextures = !0, this.hasIntegerTextures = !1, this.currentLocation = -1;
        for (let t = 0; t < this.boundTextures.length; t++) this.boundTextures[t] = this.unknownTexture
      }
      unbind(t) {
        const {
          gl: e,
          boundTextures: s
        } = this;
        if (this._unknownBoundTextures) {
          this._unknownBoundTextures = !1;
          for (let r = 0; r < s.length; r++) s[r] === this.unknownTexture && this.bind(null, r)
        }
        for (let r = 0; r < s.length; r++) s[r] === t && (this.currentLocation !== r && (e.activeTexture(e.TEXTURE0 + r), this.currentLocation = r), e.bindTexture(t.target, this.emptyTextures[t.target].texture), s[r] = null)
      }
      ensureSamplerType(t) {
        const {
          boundTextures: e,
          hasIntegerTextures: s,
          CONTEXT_UID: r
        } = this;
        if (s)
          for (let n = t - 1; n >= 0; --n) {
            const a = e[n];
            a && a._glTextures[r].samplerType !== D.FLOAT && this.renderer.texture.unbind(a)
          }
      }
      initTexture(t) {
        const e = new Ii(this.gl.createTexture());
        return e.dirtyId = -1, t._glTextures[this.CONTEXT_UID] = e, this.managedTextures.push(t), t.on("dispose", this.destroyTexture, this), e
      }
      initTextureType(t, e) {
        var s, r, n;
        e.internalFormat = (r = (s = this.internalFormats[t.type]) == null ? void 0 : s[t.format]) != null ? r : t.format, e.samplerType = (n = this.samplerTypes[e.internalFormat]) != null ? n : D.FLOAT, this.webGLVersion === 2 && t.type === k.HALF_FLOAT ? e.type = this.gl.HALF_FLOAT : e.type = t.type
      }
      updateTexture(t) {
        var e;
        const s = t._glTextures[this.CONTEXT_UID];
        if (!s) return;
        const r = this.renderer;
        if (this.initTextureType(t, s), (e = t.resource) != null && e.upload(r, t, s)) s.samplerType !== D.FLOAT && (this.hasIntegerTextures = !0);
        else {
          const n = t.realWidth,
            a = t.realHeight,
            o = r.gl;
          (s.width !== n || s.height !== a || s.dirtyId < 0) && (s.width = n, s.height = a, o.texImage2D(t.target, 0, s.internalFormat, n, a, 0, t.format, s.type, null))
        }
        t.dirtyStyleId !== s.dirtyStyleId && this.updateTextureStyle(t), s.dirtyId = t.dirtyId
      }
      destroyTexture(t, e) {
        const {
          gl: s
        } = this;
        if (t = t.castToBaseTexture(), t._glTextures[this.CONTEXT_UID] && (this.unbind(t), s.deleteTexture(t._glTextures[this.CONTEXT_UID].texture), t.off("dispose", this.destroyTexture, this), delete t._glTextures[this.CONTEXT_UID], !e)) {
          const r = this.managedTextures.indexOf(t);
          r !== -1 && Ce(this.managedTextures, r, 1)
        }
      }
      updateTextureStyle(t) {
        var e;
        const s = t._glTextures[this.CONTEXT_UID];
        s && ((t.mipmap === Ut.POW2 || this.webGLVersion !== 2) && !t.isPowerOfTwo ? s.mipmap = !1 : s.mipmap = t.mipmap >= 1, this.webGLVersion !== 2 && !t.isPowerOfTwo ? s.wrapMode = Wt.CLAMP : s.wrapMode = t.wrapMode, (e = t.resource) != null && e.style(this.renderer, t, s) || this.setStyle(t, s), s.dirtyStyleId = t.dirtyStyleId)
      }
      setStyle(t, e) {
        const s = this.gl;
        if (e.mipmap && t.mipmap !== Ut.ON_MANUAL && s.generateMipmap(t.target), s.texParameteri(t.target, s.TEXTURE_WRAP_S, e.wrapMode), s.texParameteri(t.target, s.TEXTURE_WRAP_T, e.wrapMode), e.mipmap) {
          s.texParameteri(t.target, s.TEXTURE_MIN_FILTER, t.scaleMode === zt.LINEAR ? s.LINEAR_MIPMAP_LINEAR : s.NEAREST_MIPMAP_NEAREST);
          const r = this.renderer.context.extensions.anisotropicFiltering;
          if (r && t.anisotropicLevel > 0 && t.scaleMode === zt.LINEAR) {
            const n = Math.min(t.anisotropicLevel, s.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT));
            s.texParameterf(t.target, r.TEXTURE_MAX_ANISOTROPY_EXT, n)
          }
        } else s.texParameteri(t.target, s.TEXTURE_MIN_FILTER, t.scaleMode === zt.LINEAR ? s.LINEAR : s.NEAREST);
        s.texParameteri(t.target, s.TEXTURE_MAG_FILTER, t.scaleMode === zt.LINEAR ? s.LINEAR : s.NEAREST)
      }
      destroy() {
        this.renderer = null
      }
    }
    cn.extension = {
      type: R.RendererSystem,
      name: "texture"
    }, L.add(cn);
    class dn {
      constructor(t) {
        this.renderer = t
      }
      contextChange() {
        this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
      }
      bind(t) {
        const {
          gl: e,
          CONTEXT_UID: s
        } = this, r = t._glTransformFeedbacks[s] || this.createGLTransformFeedback(t);
        e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, r)
      }
      unbind() {
        const {
          gl: t
        } = this;
        t.bindTransformFeedback(t.TRANSFORM_FEEDBACK, null)
      }
      beginTransformFeedback(t, e) {
        const {
          gl: s,
          renderer: r
        } = this;
        e && r.shader.bind(e), s.beginTransformFeedback(t)
      }
      endTransformFeedback() {
        const {
          gl: t
        } = this;
        t.endTransformFeedback()
      }
      createGLTransformFeedback(t) {
        const {
          gl: e,
          renderer: s,
          CONTEXT_UID: r
        } = this, n = e.createTransformFeedback();
        t._glTransformFeedbacks[r] = n, e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, n);
        for (let a = 0; a < t.buffers.length; a++) {
          const o = t.buffers[a];
          o && (s.buffer.update(o), o._glBuffers[r].refCount++, e.bindBufferBase(e.TRANSFORM_FEEDBACK_BUFFER, a, o._glBuffers[r].buffer || null))
        }
        return e.bindTransformFeedback(e.TRANSFORM_FEEDBACK, null), t.disposeRunner.add(this), n
      }
      disposeTransformFeedback(t, e) {
        const s = t._glTransformFeedbacks[this.CONTEXT_UID],
          r = this.gl;
        t.disposeRunner.remove(this);
        const n = this.renderer.buffer;
        if (n)
          for (let a = 0; a < t.buffers.length; a++) {
            const o = t.buffers[a];
            if (!o) continue;
            const h = o._glBuffers[this.CONTEXT_UID];
            h && (h.refCount--, h.refCount === 0 && !e && n.dispose(o, e))
          }
        s && (e || r.deleteTransformFeedback(s), delete t._glTransformFeedbacks[this.CONTEXT_UID])
      }
      destroy() {
        this.renderer = null
      }
    }
    dn.extension = {
      type: R.RendererSystem,
      name: "transformFeedback"
    }, L.add(dn);
    class Is {
      constructor(t) {
        this.renderer = t
      }
      init(t) {
        this.screen = new j(0, 0, t.width, t.height), this.element = t.view || O.ADAPTER.createCanvas(), this.resolution = t.resolution || O.RESOLUTION, this.autoDensity = !!t.autoDensity
      }
      resizeView(t, e) {
        this.element.width = Math.round(t * this.resolution), this.element.height = Math.round(e * this.resolution);
        const s = this.element.width / this.resolution,
          r = this.element.height / this.resolution;
        this.screen.width = s, this.screen.height = r, this.autoDensity && (this.element.style.width = `${s}px`, this.element.style.height = `${r}px`), this.renderer.emit("resize", s, r), this.renderer.runners.resize.emit(this.screen.width, this.screen.height)
      }
      destroy(t) {
        var e;
        t && ((e = this.element.parentNode) == null || e.removeChild(this.element)), this.renderer = null, this.element = null, this.screen = null
      }
    }
    Is.defaultOptions = {
      width: 800,
      height: 600,
      resolution: void 0,
      autoDensity: !1
    }, Is.extension = {
      type: [R.RendererSystem, R.CanvasRendererSystem],
      name: "_view"
    }, L.add(Is);
    var Rd = Object.defineProperty,
      Qo = Object.getOwnPropertySymbols,
      Cd = Object.prototype.hasOwnProperty,
      Pd = Object.prototype.propertyIsEnumerable,
      Jo = (i, t, e) => t in i ? Rd(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Ri = (i, t) => {
        for (var e in t || (t = {})) Cd.call(t, e) && Jo(i, e, t[e]);
        if (Qo)
          for (var e of Qo(t)) Pd.call(t, e) && Jo(i, e, t[e]);
        return i
      };
    O.PREFER_ENV = _e.WEBGL2, O.STRICT_TEXTURE_CACHE = !1, O.RENDER_OPTIONS = Ri(Ri(Ri(Ri({}, Es.defaultOptions), Ts.defaultOptions), Is.defaultOptions), ws.defaultOptions), Object.defineProperties(O, {
      WRAP_MODE: {
        get() {
          return X.defaultOptions.wrapMode
        },
        set(i) {
          X.defaultOptions.wrapMode = i
        }
      },
      SCALE_MODE: {
        get() {
          return X.defaultOptions.scaleMode
        },
        set(i) {
          X.defaultOptions.scaleMode = i
        }
      },
      MIPMAP_TEXTURES: {
        get() {
          return X.defaultOptions.mipmap
        },
        set(i) {
          X.defaultOptions.mipmap = i
        }
      },
      ANISOTROPIC_LEVEL: {
        get() {
          return X.defaultOptions.anisotropicLevel
        },
        set(i) {
          X.defaultOptions.anisotropicLevel = i
        }
      },
      FILTER_RESOLUTION: {
        get() {
          return yt.defaultResolution
        },
        set(i) {
          yt.defaultResolution = i
        }
      },
      FILTER_MULTISAMPLE: {
        get() {
          return yt.defaultMultisample
        },
        set(i) {
          yt.defaultMultisample = i
        }
      },
      SPRITE_MAX_TEXTURES: {
        get() {
          return ye.defaultMaxTextures
        },
        set(i) {
          ye.defaultMaxTextures = i
        }
      },
      SPRITE_BATCH_SIZE: {
        get() {
          return ye.defaultBatchSize
        },
        set(i) {
          ye.defaultBatchSize = i
        }
      },
      CAN_UPLOAD_SAME_BUFFER: {
        get() {
          return ye.canUploadSameBuffer
        },
        set(i) {
          ye.canUploadSameBuffer = i
        }
      },
      GC_MODE: {
        get() {
          return be.defaultMode
        },
        set(i) {
          be.defaultMode = i
        }
      },
      GC_MAX_IDLE: {
        get() {
          return be.defaultMaxIdle
        },
        set(i) {
          be.defaultMaxIdle = i
        }
      },
      GC_MAX_CHECK_COUNT: {
        get() {
          return be.defaultCheckCountMax
        },
        set(i) {
          be.defaultCheckCountMax = i
        }
      },
      PRECISION_VERTEX: {
        get() {
          return Qt.defaultVertexPrecision
        },
        set(i) {
          Qt.defaultVertexPrecision = i
        }
      },
      PRECISION_FRAGMENT: {
        get() {
          return Qt.defaultFragmentPrecision
        },
        set(i) {
          Qt.defaultFragmentPrecision = i
        }
      }
    });
    var le = (i => (i[i.INTERACTION = 50] = "INTERACTION", i[i.HIGH = 25] = "HIGH", i[i.NORMAL = 0] = "NORMAL", i[i.LOW = -25] = "LOW", i[i.UTILITY = -50] = "UTILITY", i))(le || {});
    class fn {
      constructor(t, e = null, s = 0, r = !1) {
        this.next = null, this.previous = null, this._destroyed = !1, this.fn = t, this.context = e, this.priority = s, this.once = r
      }
      match(t, e = null) {
        return this.fn === t && this.context === e
      }
      emit(t) {
        this.fn && (this.context ? this.fn.call(this.context, t) : this.fn(t));
        const e = this.next;
        return this.once && this.destroy(!0), this._destroyed && (this.next = null), e
      }
      connect(t) {
        this.previous = t, t.next && (t.next.previous = this), this.next = t.next, t.next = this
      }
      destroy(t = !1) {
        this._destroyed = !0, this.fn = null, this.context = null, this.previous && (this.previous.next = this.next), this.next && (this.next.previous = this.previous);
        const e = this.next;
        return this.next = t ? null : e, this.previous = null, e
      }
    }
    const th = class Pt {
      constructor() {
        this.autoStart = !1, this.deltaTime = 1, this.lastTime = -1, this.speed = 1, this.started = !1, this._requestId = null, this._maxElapsedMS = 100, this._minElapsedMS = 0, this._protected = !1, this._lastFrame = -1, this._head = new fn(null, null, 1 / 0), this.deltaMS = 1 / Pt.targetFPMS, this.elapsedMS = 1 / Pt.targetFPMS, this._tick = t => {
          this._requestId = null, this.started && (this.update(t), this.started && this._requestId === null && this._head.next && (this._requestId = requestAnimationFrame(this._tick)))
        }
      }
      _requestIfNeeded() {
        this._requestId === null && this._head.next && (this.lastTime = performance.now(), this._lastFrame = this.lastTime, this._requestId = requestAnimationFrame(this._tick))
      }
      _cancelIfNeeded() {
        this._requestId !== null && (cancelAnimationFrame(this._requestId), this._requestId = null)
      }
      _startIfPossible() {
        this.started ? this._requestIfNeeded() : this.autoStart && this.start()
      }
      add(t, e, s = le.NORMAL) {
        return this._addListener(new fn(t, e, s))
      }
      addOnce(t, e, s = le.NORMAL) {
        return this._addListener(new fn(t, e, s, !0))
      }
      _addListener(t) {
        let e = this._head.next,
          s = this._head;
        if (!e) t.connect(s);
        else {
          for (; e;) {
            if (t.priority > e.priority) {
              t.connect(s);
              break
            }
            s = e, e = e.next
          }
          t.previous || t.connect(s)
        }
        return this._startIfPossible(), this
      }
      remove(t, e) {
        let s = this._head.next;
        for (; s;) s.match(t, e) ? s = s.destroy() : s = s.next;
        return this._head.next || this._cancelIfNeeded(), this
      }
      get count() {
        if (!this._head) return 0;
        let t = 0,
          e = this._head;
        for (; e = e.next;) t++;
        return t
      }
      start() {
        this.started || (this.started = !0, this._requestIfNeeded())
      }
      stop() {
        this.started && (this.started = !1, this._cancelIfNeeded())
      }
      destroy() {
        if (!this._protected) {
          this.stop();
          let t = this._head.next;
          for (; t;) t = t.destroy(!0);
          this._head.destroy(), this._head = null
        }
      }
      update(t = performance.now()) {
        let e;
        if (t > this.lastTime) {
          if (e = this.elapsedMS = t - this.lastTime, e > this._maxElapsedMS && (e = this._maxElapsedMS), e *= this.speed, this._minElapsedMS) {
            const n = t - this._lastFrame | 0;
            if (n < this._minElapsedMS) return;
            this._lastFrame = t - n % this._minElapsedMS
          }
          this.deltaMS = e, this.deltaTime = this.deltaMS * Pt.targetFPMS;
          const s = this._head;
          let r = s.next;
          for (; r;) r = r.emit(this.deltaTime);
          s.next || this._cancelIfNeeded()
        } else this.deltaTime = this.deltaMS = this.elapsedMS = 0;
        this.lastTime = t
      }
      get FPS() {
        return 1e3 / this.elapsedMS
      }
      get minFPS() {
        return 1e3 / this._maxElapsedMS
      }
      set minFPS(t) {
        const e = Math.min(this.maxFPS, t),
          s = Math.min(Math.max(0, e) / 1e3, Pt.targetFPMS);
        this._maxElapsedMS = 1 / s
      }
      get maxFPS() {
        return this._minElapsedMS ? Math.round(1e3 / this._minElapsedMS) : 0
      }
      set maxFPS(t) {
        if (t === 0) this._minElapsedMS = 0;
        else {
          const e = Math.max(this.minFPS, t);
          this._minElapsedMS = 1 / (e / 1e3)
        }
      }
      static get shared() {
        if (!Pt._shared) {
          const t = Pt._shared = new Pt;
          t.autoStart = !0, t._protected = !0
        }
        return Pt._shared
      }
      static get system() {
        if (!Pt._system) {
          const t = Pt._system = new Pt;
          t.autoStart = !0, t._protected = !0
        }
        return Pt._system
      }
    };
    th.targetFPMS = .06;
    let pt = th;
    Object.defineProperties(O, {
      TARGET_FPMS: {
        get() {
          return pt.targetFPMS
        },
        set(i) {
          pt.targetFPMS = i
        }
      }
    });
    class pn {
      static init(t) {
        t = Object.assign({
          autoStart: !0,
          sharedTicker: !1
        }, t), Object.defineProperty(this, "ticker", {
          set(e) {
            this._ticker && this._ticker.remove(this.render, this), this._ticker = e, e && e.add(this.render, this, le.LOW)
          },
          get() {
            return this._ticker
          }
        }), this.stop = () => {
          this._ticker.stop()
        }, this.start = () => {
          this._ticker.start()
        }, this._ticker = null, this.ticker = t.sharedTicker ? pt.shared : new pt, t.autoStart && this.start()
      }
      static destroy() {
        if (this._ticker) {
          const t = this._ticker;
          this.ticker = null, t.destroy()
        }
      }
    }
    pn.extension = R.Application, L.add(pn);
    const eh = [];
    L.handleByList(R.Renderer, eh);
  
    function sh(i) {
      for (const t of eh)
        if (t.test(i)) return new t(i);
      throw new Error("Unable to auto-detect a suitable renderer.")
    }
    var Md = `attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat3 projectionMatrix;
  
  varying vec2 vTextureCoord;
  
  void main(void)
  {
      gl_Position = vec4((projectionMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
      vTextureCoord = aTextureCoord;
  }`,
      Dd = `attribute vec2 aVertexPosition;
  
  uniform mat3 projectionMatrix;
  
  varying vec2 vTextureCoord;
  
  uniform vec4 inputSize;
  uniform vec4 outputFrame;
  
  vec4 filterVertexPosition( void )
  {
      vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
  
      return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
  }
  
  vec2 filterTextureCoord( void )
  {
      return aVertexPosition * (outputFrame.zw * inputSize.zw);
  }
  
  void main(void)
  {
      gl_Position = filterVertexPosition();
      vTextureCoord = filterTextureCoord();
  }
  `;
    const ih = Md,
      mn = Dd;
    class gn {
      constructor(t) {
        this.renderer = t
      }
      contextChange(t) {
        let e;
        if (this.renderer.context.webGLVersion === 1) {
          const s = t.getParameter(t.FRAMEBUFFER_BINDING);
          t.bindFramebuffer(t.FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.FRAMEBUFFER, s)
        } else {
          const s = t.getParameter(t.DRAW_FRAMEBUFFER_BINDING);
          t.bindFramebuffer(t.DRAW_FRAMEBUFFER, null), e = t.getParameter(t.SAMPLES), t.bindFramebuffer(t.DRAW_FRAMEBUFFER, s)
        }
        e >= at.HIGH ? this.multisample = at.HIGH : e >= at.MEDIUM ? this.multisample = at.MEDIUM : e >= at.LOW ? this.multisample = at.LOW : this.multisample = at.NONE
      }
      destroy() {}
    }
    gn.extension = {
      type: R.RendererSystem,
      name: "_multisample"
    }, L.add(gn);
    class Od {
      constructor(t) {
        this.buffer = t || null, this.updateID = -1, this.byteLength = -1, this.refCount = 0
      }
    }
    class _n {
      constructor(t) {
        this.renderer = t, this.managedBuffers = {}, this.boundBufferBases = {}
      }
      destroy() {
        this.renderer = null
      }
      contextChange() {
        this.disposeAll(!0), this.gl = this.renderer.gl, this.CONTEXT_UID = this.renderer.CONTEXT_UID
      }
      bind(t) {
        const {
          gl: e,
          CONTEXT_UID: s
        } = this, r = t._glBuffers[s] || this.createGLBuffer(t);
        e.bindBuffer(t.type, r.buffer)
      }
      unbind(t) {
        const {
          gl: e
        } = this;
        e.bindBuffer(t, null)
      }
      bindBufferBase(t, e) {
        const {
          gl: s,
          CONTEXT_UID: r
        } = this;
        if (this.boundBufferBases[e] !== t) {
          const n = t._glBuffers[r] || this.createGLBuffer(t);
          this.boundBufferBases[e] = t, s.bindBufferBase(s.UNIFORM_BUFFER, e, n.buffer)
        }
      }
      bindBufferRange(t, e, s) {
        const {
          gl: r,
          CONTEXT_UID: n
        } = this;
        s = s || 0;
        const a = t._glBuffers[n] || this.createGLBuffer(t);
        r.bindBufferRange(r.UNIFORM_BUFFER, e || 0, a.buffer, s * 256, 256)
      }
      update(t) {
        const {
          gl: e,
          CONTEXT_UID: s
        } = this, r = t._glBuffers[s] || this.createGLBuffer(t);
        if (t._updateID !== r.updateID)
          if (r.updateID = t._updateID, e.bindBuffer(t.type, r.buffer), r.byteLength >= t.data.byteLength) e.bufferSubData(t.type, 0, t.data);
          else {
            const n = t.static ? e.STATIC_DRAW : e.DYNAMIC_DRAW;
            r.byteLength = t.data.byteLength, e.bufferData(t.type, t.data, n)
          }
      }
      dispose(t, e) {
        if (!this.managedBuffers[t.id]) return;
        delete this.managedBuffers[t.id];
        const s = t._glBuffers[this.CONTEXT_UID],
          r = this.gl;
        t.disposeRunner.remove(this), s && (e || r.deleteBuffer(s.buffer), delete t._glBuffers[this.CONTEXT_UID])
      }
      disposeAll(t) {
        const e = Object.keys(this.managedBuffers);
        for (let s = 0; s < e.length; s++) this.dispose(this.managedBuffers[e[s]], t)
      }
      createGLBuffer(t) {
        const {
          CONTEXT_UID: e,
          gl: s
        } = this;
        return t._glBuffers[e] = new Od(s.createBuffer()), this.managedBuffers[t.id] = t, t.disposeRunner.add(this), t._glBuffers[e]
      }
    }
    _n.extension = {
      type: R.RendererSystem,
      name: "buffer"
    }, L.add(_n);
    class vn {
      constructor(t) {
        this.renderer = t
      }
      render(t, e) {
        const s = this.renderer;
        let r, n, a, o;
        if (e && (r = e.renderTexture, n = e.clear, a = e.transform, o = e.skipUpdateTransform), this.renderingToScreen = !r, s.runners.prerender.emit(), s.emit("prerender"), s.projection.transform = a, !s.context.isLost) {
          if (r || (this.lastObjectRendered = t), !o) {
            const h = t.enableTempParent();
            t.updateTransform(), t.disableTempParent(h)
          }
          s.renderTexture.bind(r), s.batch.currentRenderer.start(), (n != null ? n : s.background.clearBeforeRender) && s.renderTexture.clear(), t.render(s), s.batch.currentRenderer.flush(), r && (e.blit && s.framebuffer.blit(), r.baseTexture.update()), s.runners.postrender.emit(), s.projection.transform = null, s.emit("postrender")
        }
      }
      destroy() {
        this.renderer = null, this.lastObjectRendered = null
      }
    }
    vn.extension = {
      type: R.RendererSystem,
      name: "objectRenderer"
    }, L.add(vn);
    const Ci = class Jn extends Zo {
      constructor(t) {
        super(), this.type = or.WEBGL, t = Object.assign({}, O.RENDER_OPTIONS, t), this.gl = null, this.CONTEXT_UID = 0, this.globalUniforms = new Ot({
          projectionMatrix: new tt
        }, !0);
        const e = {
          runners: ["init", "destroy", "contextChange", "resolutionChange", "reset", "update", "postrender", "prerender", "resize"],
          systems: Jn.__systems,
          priority: ["_view", "textureGenerator", "background", "_plugin", "startup", "context", "state", "texture", "buffer", "geometry", "framebuffer", "transformFeedback", "mask", "scissor", "stencil", "projection", "textureGC", "filter", "renderTexture", "batch", "objectRenderer", "_multisample"]
        };
        this.setup(e), "useContextAlpha" in t && (t.premultipliedAlpha = t.useContextAlpha && t.useContextAlpha !== "notMultiplied", t.backgroundAlpha = t.useContextAlpha === !1 ? 1 : t.backgroundAlpha), this._plugin.rendererPlugins = Jn.__plugins, this.options = t, this.startup.run(this.options)
      }
      static test(t) {
        return t != null && t.forceCanvas ? !1 : Fa()
      }
      render(t, e) {
        this.objectRenderer.render(t, e)
      }
      resize(t, e) {
        this._view.resizeView(t, e)
      }
      reset() {
        return this.runners.reset.emit(), this
      }
      clear() {
        this.renderTexture.bind(), this.renderTexture.clear()
      }
      destroy(t = !1) {
        this.runners.destroy.items.reverse(), this.emitWithCustomOptions(this.runners.destroy, {
          _view: t
        }), super.destroy()
      }
      get plugins() {
        return this._plugin.plugins
      }
      get multisample() {
        return this._multisample.multisample
      }
      get width() {
        return this._view.element.width
      }
      get height() {
        return this._view.element.height
      }
      get resolution() {
        return this._view.resolution
      }
      set resolution(t) {
        this._view.resolution = t, this.runners.resolutionChange.emit(t)
      }
      get autoDensity() {
        return this._view.autoDensity
      }
      get view() {
        return this._view.element
      }
      get screen() {
        return this._view.screen
      }
      get lastObjectRendered() {
        return this.objectRenderer.lastObjectRendered
      }
      get renderingToScreen() {
        return this.objectRenderer.renderingToScreen
      }
      get rendererLogId() {
        return `WebGL ${this.context.webGLVersion}`
      }
      get clearBeforeRender() {
        return this.background.clearBeforeRender
      }
      get useContextAlpha() {
        return this.context.useContextAlpha
      }
      get preserveDrawingBuffer() {
        return this.context.preserveDrawingBuffer
      }
      get backgroundColor() {
        return this.background.color
      }
      set backgroundColor(t) {
        this.background.color = t
      }
      get backgroundAlpha() {
        return this.background.alpha
      }
      set backgroundAlpha(t) {
        this.background.alpha = t
      }
      get powerPreference() {
        return this.context.powerPreference
      }
      generateTexture(t, e) {
        return this.textureGenerator.generateTexture(t, e)
      }
    };
    Ci.extension = {
      type: R.Renderer,
      priority: 1
    }, Ci.__plugins = {}, Ci.__systems = {};
    let Pi = Ci;
    L.handleByMap(R.RendererPlugin, Pi.__plugins), L.handleByMap(R.RendererSystem, Pi.__systems), L.add(Pi);
    class yn extends We {
      constructor(t, e) {
        const {
          width: s,
          height: r
        } = e || {};
        super(s, r), this.items = [], this.itemDirtyIds = [];
        for (let n = 0; n < t; n++) {
          const a = new X;
          this.items.push(a), this.itemDirtyIds.push(-2)
        }
        this.length = t, this._load = null, this.baseTexture = null
      }
      initFromArray(t, e) {
        for (let s = 0; s < this.length; s++) t[s] && (t[s].castToBaseTexture ? this.addBaseTextureAt(t[s].castToBaseTexture(), s) : t[s] instanceof We ? this.addResourceAt(t[s], s) : this.addResourceAt(Ur(t[s], e), s))
      }
      dispose() {
        for (let t = 0, e = this.length; t < e; t++) this.items[t].destroy();
        this.items = null, this.itemDirtyIds = null, this._load = null
      }
      addResourceAt(t, e) {
        if (!this.items[e]) throw new Error(`Index ${e} is out of bounds`);
        return t.valid && !this.valid && this.resize(t.width, t.height), this.items[e].setResource(t), this
      }
      bind(t) {
        if (this.baseTexture !== null) throw new Error("Only one base texture per TextureArray is allowed");
        super.bind(t);
        for (let e = 0; e < this.length; e++) this.items[e].parentTextureArray = t, this.items[e].on("update", t.update, t)
      }
      unbind(t) {
        super.unbind(t);
        for (let e = 0; e < this.length; e++) this.items[e].parentTextureArray = null, this.items[e].off("update", t.update, t)
      }
      load() {
        if (this._load) return this._load;
        const t = this.items.map(e => e.resource).filter(e => e).map(e => e.load());
        return this._load = Promise.all(t).then(() => {
          const {
            realWidth: e,
            realHeight: s
          } = this.items[0];
          return this.resize(e, s), this.update(), Promise.resolve(this)
        }), this._load
      }
    }
    class rh extends yn {
      constructor(t, e) {
        const {
          width: s,
          height: r
        } = e || {};
        let n, a;
        Array.isArray(t) ? (n = t, a = t.length) : a = t, super(a, {
          width: s,
          height: r
        }), n && this.initFromArray(n, e)
      }
      addBaseTextureAt(t, e) {
        if (t.resource) this.addResourceAt(t.resource, e);
        else throw new Error("ArrayResource does not support RenderTexture");
        return this
      }
      bind(t) {
        super.bind(t), t.target = Ie.TEXTURE_2D_ARRAY
      }
      upload(t, e, s) {
        const {
          length: r,
          itemDirtyIds: n,
          items: a
        } = this, {
          gl: o
        } = t;
        s.dirtyId < 0 && o.texImage3D(o.TEXTURE_2D_ARRAY, 0, s.internalFormat, this._width, this._height, r, 0, e.format, s.type, null);
        for (let h = 0; h < r; h++) {
          const l = a[h];
          n[h] < l.dirtyId && (n[h] = l.dirtyId, l.valid && o.texSubImage3D(o.TEXTURE_2D_ARRAY, 0, 0, 0, h, l.resource.width, l.resource.height, 1, e.format, s.type, l.resource.source))
        }
        return !0
      }
    }
    class nh extends he {
      constructor(t) {
        super(t)
      }
      static test(t) {
        const {
          OffscreenCanvas: e
        } = globalThis;
        return e && t instanceof e ? !0 : globalThis.HTMLCanvasElement && t instanceof HTMLCanvasElement
      }
    }
    const ah = class Ws extends yn {
      constructor(t, e) {
        const {
          width: s,
          height: r,
          autoLoad: n,
          linkBaseTexture: a
        } = e || {};
        if (t && t.length !== Ws.SIDES) throw new Error(`Invalid length. Got ${t.length}, expected 6`);
        super(6, {
          width: s,
          height: r
        });
        for (let o = 0; o < Ws.SIDES; o++) this.items[o].target = Ie.TEXTURE_CUBE_MAP_POSITIVE_X + o;
        this.linkBaseTexture = a !== !1, t && this.initFromArray(t, e), n !== !1 && this.load()
      }
      bind(t) {
        super.bind(t), t.target = Ie.TEXTURE_CUBE_MAP
      }
      addBaseTextureAt(t, e, s) {
        if (s === void 0 && (s = this.linkBaseTexture), !this.items[e]) throw new Error(`Index ${e} is out of bounds`);
        if (!this.linkBaseTexture || t.parentTextureArray || Object.keys(t._glTextures).length > 0)
          if (t.resource) this.addResourceAt(t.resource, e);
          else throw new Error("CubeResource does not support copying of renderTexture.");
        else t.target = Ie.TEXTURE_CUBE_MAP_POSITIVE_X + e, t.parentTextureArray = this.baseTexture, this.items[e] = t;
        return t.valid && !this.valid && this.resize(t.realWidth, t.realHeight), this.items[e] = t, this
      }
      upload(t, e, s) {
        const r = this.itemDirtyIds;
        for (let n = 0; n < Ws.SIDES; n++) {
          const a = this.items[n];
          (r[n] < a.dirtyId || s.dirtyId < e.dirtyId) && (a.valid && a.resource ? (a.resource.upload(t, a, s), r[n] = a.dirtyId) : r[n] < -1 && (t.gl.texImage2D(a.target, 0, s.internalFormat, e.realWidth, e.realHeight, 0, e.format, s.type, null), r[n] = -1))
        }
        return !0
      }
      static test(t) {
        return Array.isArray(t) && t.length === Ws.SIDES
      }
    };
    ah.SIDES = 6;
    let oh = ah;
    class Le extends he {
      constructor(t, e) {
        var s, r;
        e = e || {};
        let n, a, o;
        typeof t == "string" ? (n = Le.EMPTY, a = t, o = !0) : (n = t, a = null, o = !1), super(n), this.url = a, this.crossOrigin = (s = e.crossOrigin) != null ? s : !0, this.alphaMode = typeof e.alphaMode == "number" ? e.alphaMode : null, this.ownsImageBitmap = (r = e.ownsImageBitmap) != null ? r : o, this._load = null, e.autoLoad !== !1 && this.load()
      }
      load() {
        return this._load ? this._load : (this._load = new Promise(async (t, e) => {
          if (this.url === null) {
            t(this);
            return
          }
          try {
            const s = await O.ADAPTER.fetch(this.url, {
              mode: this.crossOrigin ? "cors" : "no-cors"
            });
            if (this.destroyed) return;
            const r = await s.blob();
            if (this.destroyed) return;
            const n = await createImageBitmap(r, {
              premultiplyAlpha: this.alphaMode === null || this.alphaMode === bt.UNPACK ? "premultiply" : "none"
            });
            if (this.destroyed) {
              n.close();
              return
            }
            this.source = n, this.update(), t(this)
          } catch (s) {
            if (this.destroyed) return;
            e(s), this.onError.emit(s)
          }
        }), this._load)
      }
      upload(t, e, s) {
        return this.source instanceof ImageBitmap ? (typeof this.alphaMode == "number" && (e.alphaMode = this.alphaMode), super.upload(t, e, s)) : (this.load(), !1)
      }
      dispose() {
        this.ownsImageBitmap && this.source instanceof ImageBitmap && this.source.close(), super.dispose(), this._load = null
      }
      static test(t) {
        return !!globalThis.createImageBitmap && typeof ImageBitmap != "undefined" && (typeof t == "string" || t instanceof ImageBitmap)
      }
      static get EMPTY() {
        var t;
        return Le._EMPTY = (t = Le._EMPTY) != null ? t : O.ADAPTER.createCanvas(0, 0), Le._EMPTY
      }
    }
    const xn = class nr extends he {
      constructor(t, e) {
        e = e || {}, super(O.ADAPTER.createCanvas()), this._width = 0, this._height = 0, this.svg = t, this.scale = e.scale || 1, this._overrideWidth = e.width, this._overrideHeight = e.height, this._resolve = null, this._crossorigin = e.crossorigin, this._load = null, e.autoLoad !== !1 && this.load()
      }
      load() {
        return this._load ? this._load : (this._load = new Promise(t => {
          if (this._resolve = () => {
              this.update(), t(this)
            }, nr.SVG_XML.test(this.svg.trim())) {
            if (!btoa) throw new Error("Your browser doesn't support base64 conversions.");
            this.svg = `data:image/svg+xml;base64,${btoa(unescape(encodeURIComponent(this.svg)))}`
          }
          this._loadSvg()
        }), this._load)
      }
      _loadSvg() {
        const t = new Image;
        he.crossOrigin(t, this.svg, this._crossorigin), t.src = this.svg, t.onerror = e => {
          this._resolve && (t.onerror = null, this.onError.emit(e))
        }, t.onload = () => {
          if (!this._resolve) return;
          const e = t.width,
            s = t.height;
          if (!e || !s) throw new Error("The SVG image must have width and height defined (in pixels), canvas API needs them.");
          let r = e * this.scale,
            n = s * this.scale;
          (this._overrideWidth || this._overrideHeight) && (r = this._overrideWidth || this._overrideHeight / s * e, n = this._overrideHeight || this._overrideWidth / e * s), r = Math.round(r), n = Math.round(n);
          const a = this.source;
          a.width = r, a.height = n, a._pixiId = `canvas_${ve()}`, a.getContext("2d").drawImage(t, 0, 0, e, s, 0, 0, r, n), this._resolve(), this._resolve = null
        }
      }
      static getSize(t) {
        const e = nr.SVG_SIZE.exec(t),
          s = {};
        return e && (s[e[1]] = Math.round(parseFloat(e[3])), s[e[5]] = Math.round(parseFloat(e[7]))), s
      }
      dispose() {
        super.dispose(), this._resolve = null, this._crossorigin = null
      }
      static test(t, e) {
        return e === "svg" || typeof t == "string" && t.startsWith("data:image/svg+xml") || typeof t == "string" && nr.SVG_XML.test(t)
      }
    };
    xn.SVG_XML = /^(<\?xml[^?]+\?>)?\s*(<!--[^(-->)]*-->)?\s*\<svg/m, xn.SVG_SIZE = /<svg[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*(?:\s(width|height)=('|")(\d*(?:\.\d+)?)(?:px)?('|"))[^>]*>/i;
    let Mi = xn;
    const bn = class ta extends he {
      constructor(t, e) {
        if (e = e || {}, !(t instanceof HTMLVideoElement)) {
          const s = document.createElement("video");
          e.autoLoad !== !1 && s.setAttribute("preload", "auto"), e.playsinline !== !1 && (s.setAttribute("webkit-playsinline", ""), s.setAttribute("playsinline", "")), e.muted === !0 && (s.setAttribute("muted", ""), s.muted = !0), e.loop === !0 && s.setAttribute("loop", ""), e.autoPlay !== !1 && s.setAttribute("autoplay", ""), typeof t == "string" && (t = [t]);
          const r = t[0].src || t[0];
          he.crossOrigin(s, r, e.crossorigin);
          for (let n = 0; n < t.length; ++n) {
            const a = document.createElement("source");
            let {
              src: o,
              mime: h
            } = t[n];
            if (o = o || t[n], o.startsWith("data:")) h = o.slice(5, o.indexOf(";"));
            else if (!o.startsWith("blob:")) {
              const l = o.split("?").shift().toLowerCase(),
                u = l.slice(l.lastIndexOf(".") + 1);
              h = h || ta.MIME_TYPES[u] || `video/${u}`
            }
            a.src = o, h && (a.type = h), s.appendChild(a)
          }
          t = s
        }
        super(t), this.noSubImage = !0, this._autoUpdate = !0, this._isConnectedToTicker = !1, this._updateFPS = e.updateFPS || 0, this._msToNextUpdate = 0, this.autoPlay = e.autoPlay !== !1, this._videoFrameRequestCallback = this._videoFrameRequestCallback.bind(this), this._videoFrameRequestCallbackHandle = null, this._load = null, this._resolve = null, this._reject = null, this._onCanPlay = this._onCanPlay.bind(this), this._onError = this._onError.bind(this), this._onPlayStart = this._onPlayStart.bind(this), this._onPlayStop = this._onPlayStop.bind(this), this._onSeeked = this._onSeeked.bind(this), e.autoLoad !== !1 && this.load()
      }
      update(t = 0) {
        if (!this.destroyed) {
          if (this._updateFPS) {
            const e = pt.shared.elapsedMS * this.source.playbackRate;
            this._msToNextUpdate = Math.floor(this._msToNextUpdate - e)
          }(!this._updateFPS || this._msToNextUpdate <= 0) && (super.update(), this._msToNextUpdate = this._updateFPS ? Math.floor(1e3 / this._updateFPS) : 0)
        }
      }
      _videoFrameRequestCallback() {
        this.update(), this.destroyed ? this._videoFrameRequestCallbackHandle = null : this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback)
      }
      load() {
        if (this._load) return this._load;
        const t = this.source;
        return (t.readyState === t.HAVE_ENOUGH_DATA || t.readyState === t.HAVE_FUTURE_DATA) && t.width && t.height && (t.complete = !0), t.addEventListener("play", this._onPlayStart), t.addEventListener("pause", this._onPlayStop), t.addEventListener("seeked", this._onSeeked), this._isSourceReady() ? this._onCanPlay() : (t.addEventListener("canplay", this._onCanPlay), t.addEventListener("canplaythrough", this._onCanPlay), t.addEventListener("error", this._onError, !0)), this._load = new Promise((e, s) => {
          this.valid ? e(this) : (this._resolve = e, this._reject = s, t.load())
        }), this._load
      }
      _onError(t) {
        this.source.removeEventListener("error", this._onError, !0), this.onError.emit(t), this._reject && (this._reject(t), this._reject = null, this._resolve = null)
      }
      _isSourcePlaying() {
        const t = this.source;
        return !t.paused && !t.ended && this._isSourceReady()
      }
      _isSourceReady() {
        return this.source.readyState > 2
      }
      _onPlayStart() {
        this.valid || this._onCanPlay(), this._configureAutoUpdate()
      }
      _onPlayStop() {
        this._configureAutoUpdate()
      }
      _onSeeked() {
        this._autoUpdate && !this._isSourcePlaying() && (this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0)
      }
      _onCanPlay() {
        const t = this.source;
        t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay);
        const e = this.valid;
        this._msToNextUpdate = 0, this.update(), this._msToNextUpdate = 0, !e && this._resolve && (this._resolve(this), this._resolve = null, this._reject = null), this._isSourcePlaying() ? this._onPlayStart() : this.autoPlay && t.play()
      }
      dispose() {
        this._configureAutoUpdate();
        const t = this.source;
        t && (t.removeEventListener("play", this._onPlayStart), t.removeEventListener("pause", this._onPlayStop), t.removeEventListener("seeked", this._onSeeked), t.removeEventListener("canplay", this._onCanPlay), t.removeEventListener("canplaythrough", this._onCanPlay), t.removeEventListener("error", this._onError, !0), t.pause(), t.src = "", t.load()), super.dispose()
      }
      get autoUpdate() {
        return this._autoUpdate
      }
      set autoUpdate(t) {
        t !== this._autoUpdate && (this._autoUpdate = t, this._configureAutoUpdate())
      }
      get updateFPS() {
        return this._updateFPS
      }
      set updateFPS(t) {
        t !== this._updateFPS && (this._updateFPS = t, this._configureAutoUpdate())
      }
      _configureAutoUpdate() {
        this._autoUpdate && this._isSourcePlaying() ? !this._updateFPS && this.source.requestVideoFrameCallback ? (this._isConnectedToTicker && (pt.shared.remove(this.update, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0), this._videoFrameRequestCallbackHandle === null && (this._videoFrameRequestCallbackHandle = this.source.requestVideoFrameCallback(this._videoFrameRequestCallback))) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker || (pt.shared.add(this.update, this), this._isConnectedToTicker = !0, this._msToNextUpdate = 0)) : (this._videoFrameRequestCallbackHandle !== null && (this.source.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle), this._videoFrameRequestCallbackHandle = null), this._isConnectedToTicker && (pt.shared.remove(this.update, this), this._isConnectedToTicker = !1, this._msToNextUpdate = 0))
      }
      static test(t, e) {
        return globalThis.HTMLVideoElement && t instanceof HTMLVideoElement || ta.TYPES.includes(e)
      }
    };
    bn.TYPES = ["mp4", "m4v", "webm", "ogg", "ogv", "h264", "avi", "mov"], bn.MIME_TYPES = {
      ogv: "video/ogg",
      mov: "video/quicktime",
      m4v: "video/mp4"
    };
    let Tn = bn;
    ui.push(Le, Yr, nh, Tn, Mi, ms, oh, rh);
    class Bd {
      constructor() {
        this._glTransformFeedbacks = {}, this.buffers = [], this.disposeRunner = new St("disposeTransformFeedback")
      }
      bindBuffer(t, e) {
        this.buffers[t] = e
      }
      destroy() {
        this.disposeRunner.emit(this, !1)
      }
    }
    const Fd = "7.3.1";
    class Rs {
      constructor() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0, this.rect = null, this.updateID = -1
      }
      isEmpty() {
        return this.minX > this.maxX || this.minY > this.maxY
      }
      clear() {
        this.minX = 1 / 0, this.minY = 1 / 0, this.maxX = -1 / 0, this.maxY = -1 / 0
      }
      getRectangle(t) {
        return this.minX > this.maxX || this.minY > this.maxY ? j.EMPTY : (t = t || new j(0, 0, 1, 1), t.x = this.minX, t.y = this.minY, t.width = this.maxX - this.minX, t.height = this.maxY - this.minY, t)
      }
      addPoint(t) {
        this.minX = Math.min(this.minX, t.x), this.maxX = Math.max(this.maxX, t.x), this.minY = Math.min(this.minY, t.y), this.maxY = Math.max(this.maxY, t.y)
      }
      addPointMatrix(t, e) {
        const {
          a: s,
          b: r,
          c: n,
          d: a,
          tx: o,
          ty: h
        } = t, l = s * e.x + n * e.y + o, u = r * e.x + a * e.y + h;
        this.minX = Math.min(this.minX, l), this.maxX = Math.max(this.maxX, l), this.minY = Math.min(this.minY, u), this.maxY = Math.max(this.maxY, u)
      }
      addQuad(t) {
        let e = this.minX,
          s = this.minY,
          r = this.maxX,
          n = this.maxY,
          a = t[0],
          o = t[1];
        e = a < e ? a : e, s = o < s ? o : s, r = a > r ? a : r, n = o > n ? o : n, a = t[2], o = t[3], e = a < e ? a : e, s = o < s ? o : s, r = a > r ? a : r, n = o > n ? o : n, a = t[4], o = t[5], e = a < e ? a : e, s = o < s ? o : s, r = a > r ? a : r, n = o > n ? o : n, a = t[6], o = t[7], e = a < e ? a : e, s = o < s ? o : s, r = a > r ? a : r, n = o > n ? o : n, this.minX = e, this.minY = s, this.maxX = r, this.maxY = n
      }
      addFrame(t, e, s, r, n) {
        this.addFrameMatrix(t.worldTransform, e, s, r, n)
      }
      addFrameMatrix(t, e, s, r, n) {
        const a = t.a,
          o = t.b,
          h = t.c,
          l = t.d,
          u = t.tx,
          c = t.ty;
        let d = this.minX,
          f = this.minY,
          p = this.maxX,
          m = this.maxY,
          g = a * e + h * s + u,
          y = o * e + l * s + c;
        d = g < d ? g : d, f = y < f ? y : f, p = g > p ? g : p, m = y > m ? y : m, g = a * r + h * s + u, y = o * r + l * s + c, d = g < d ? g : d, f = y < f ? y : f, p = g > p ? g : p, m = y > m ? y : m, g = a * e + h * n + u, y = o * e + l * n + c, d = g < d ? g : d, f = y < f ? y : f, p = g > p ? g : p, m = y > m ? y : m, g = a * r + h * n + u, y = o * r + l * n + c, d = g < d ? g : d, f = y < f ? y : f, p = g > p ? g : p, m = y > m ? y : m, this.minX = d, this.minY = f, this.maxX = p, this.maxY = m
      }
      addVertexData(t, e, s) {
        let r = this.minX,
          n = this.minY,
          a = this.maxX,
          o = this.maxY;
        for (let h = e; h < s; h += 2) {
          const l = t[h],
            u = t[h + 1];
          r = l < r ? l : r, n = u < n ? u : n, a = l > a ? l : a, o = u > o ? u : o
        }
        this.minX = r, this.minY = n, this.maxX = a, this.maxY = o
      }
      addVertices(t, e, s, r) {
        this.addVerticesMatrix(t.worldTransform, e, s, r)
      }
      addVerticesMatrix(t, e, s, r, n = 0, a = n) {
        const o = t.a,
          h = t.b,
          l = t.c,
          u = t.d,
          c = t.tx,
          d = t.ty;
        let f = this.minX,
          p = this.minY,
          m = this.maxX,
          g = this.maxY;
        for (let y = s; y < r; y += 2) {
          const b = e[y],
            v = e[y + 1],
            x = o * b + l * v + c,
            E = u * v + h * b + d;
          f = Math.min(f, x - n), m = Math.max(m, x + n), p = Math.min(p, E - a), g = Math.max(g, E + a)
        }
        this.minX = f, this.minY = p, this.maxX = m, this.maxY = g
      }
      addBounds(t) {
        const e = this.minX,
          s = this.minY,
          r = this.maxX,
          n = this.maxY;
        this.minX = t.minX < e ? t.minX : e, this.minY = t.minY < s ? t.minY : s, this.maxX = t.maxX > r ? t.maxX : r, this.maxY = t.maxY > n ? t.maxY : n
      }
      addBoundsMask(t, e) {
        const s = t.minX > e.minX ? t.minX : e.minX,
          r = t.minY > e.minY ? t.minY : e.minY,
          n = t.maxX < e.maxX ? t.maxX : e.maxX,
          a = t.maxY < e.maxY ? t.maxY : e.maxY;
        if (s <= n && r <= a) {
          const o = this.minX,
            h = this.minY,
            l = this.maxX,
            u = this.maxY;
          this.minX = s < o ? s : o, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = a > u ? a : u
        }
      }
      addBoundsMatrix(t, e) {
        this.addFrameMatrix(e, t.minX, t.minY, t.maxX, t.maxY)
      }
      addBoundsArea(t, e) {
        const s = t.minX > e.x ? t.minX : e.x,
          r = t.minY > e.y ? t.minY : e.y,
          n = t.maxX < e.x + e.width ? t.maxX : e.x + e.width,
          a = t.maxY < e.y + e.height ? t.maxY : e.y + e.height;
        if (s <= n && r <= a) {
          const o = this.minX,
            h = this.minY,
            l = this.maxX,
            u = this.maxY;
          this.minX = s < o ? s : o, this.minY = r < h ? r : h, this.maxX = n > l ? n : l, this.maxY = a > u ? a : u
        }
      }
      pad(t = 0, e = t) {
        this.isEmpty() || (this.minX -= t, this.maxX += t, this.minY -= e, this.maxY += e)
      }
      addFramePad(t, e, s, r, n, a) {
        t -= n, e -= a, s += n, r += a, this.minX = this.minX < t ? this.minX : t, this.maxX = this.maxX > s ? this.maxX : s, this.minY = this.minY < e ? this.minY : e, this.maxY = this.maxY > r ? this.maxY : r
      }
    }
    class st extends Ve {
      constructor() {
        super(), this.tempDisplayObjectParent = null, this.transform = new _i, this.alpha = 1, this.visible = !0, this.renderable = !0, this.cullable = !1, this.cullArea = null, this.parent = null, this.worldAlpha = 1, this._lastSortedIndex = 0, this._zIndex = 0, this.filterArea = null, this.filters = null, this._enabledFilters = null, this._bounds = new Rs, this._localBounds = null, this._boundsID = 0, this._boundsRect = null, this._localBoundsRect = null, this._mask = null, this._maskRefCount = 0, this._destroyed = !1, this.isSprite = !1, this.isMask = !1
      }
      static mixin(t) {
        const e = Object.keys(t);
        for (let s = 0; s < e.length; ++s) {
          const r = e[s];
          Object.defineProperty(st.prototype, r, Object.getOwnPropertyDescriptor(t, r))
        }
      }
      get destroyed() {
        return this._destroyed
      }
      _recursivePostUpdateTransform() {
        this.parent ? (this.parent._recursivePostUpdateTransform(), this.transform.updateTransform(this.parent.transform)) : this.transform.updateTransform(this._tempDisplayObjectParent.transform)
      }
      updateTransform() {
        this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha
      }
      getBounds(t, e) {
        return t || (this.parent ? (this._recursivePostUpdateTransform(), this.updateTransform()) : (this.parent = this._tempDisplayObjectParent, this.updateTransform(), this.parent = null)), this._bounds.updateID !== this._boundsID && (this.calculateBounds(), this._bounds.updateID = this._boundsID), e || (this._boundsRect || (this._boundsRect = new j), e = this._boundsRect), this._bounds.getRectangle(e)
      }
      getLocalBounds(t) {
        var e;
        t || (this._localBoundsRect || (this._localBoundsRect = new j), t = this._localBoundsRect), this._localBounds || (this._localBounds = new Rs);
        const s = this.transform,
          r = this.parent;
        this.parent = null, this._tempDisplayObjectParent.worldAlpha = (e = r == null ? void 0 : r.worldAlpha) != null ? e : 1, this.transform = this._tempDisplayObjectParent.transform;
        const n = this._bounds,
          a = this._boundsID;
        this._bounds = this._localBounds;
        const o = this.getBounds(!1, t);
        return this.parent = r, this.transform = s, this._bounds = n, this._bounds.updateID += this._boundsID - a, o
      }
      toGlobal(t, e, s = !1) {
        return s || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.apply(t, e)
      }
      toLocal(t, e, s, r) {
        return e && (t = e.toGlobal(t, s, r)), r || (this._recursivePostUpdateTransform(), this.parent ? this.displayObjectUpdateTransform() : (this.parent = this._tempDisplayObjectParent, this.displayObjectUpdateTransform(), this.parent = null)), this.worldTransform.applyInverse(t, s)
      }
      setParent(t) {
        if (!t || !t.addChild) throw new Error("setParent: Argument must be a Container");
        return t.addChild(this), t
      }
      removeFromParent() {
        var t;
        (t = this.parent) == null || t.removeChild(this)
      }
      setTransform(t = 0, e = 0, s = 1, r = 1, n = 0, a = 0, o = 0, h = 0, l = 0) {
        return this.position.x = t, this.position.y = e, this.scale.x = s || 1, this.scale.y = r || 1, this.rotation = n, this.skew.x = a, this.skew.y = o, this.pivot.x = h, this.pivot.y = l, this
      }
      destroy(t) {
        this.removeFromParent(), this._destroyed = !0, this.transform = null, this.parent = null, this._bounds = null, this.mask = null, this.cullArea = null, this.filters = null, this.filterArea = null, this.hitArea = null, this.eventMode = "auto", this.interactiveChildren = !1, this.emit("destroyed"), this.removeAllListeners()
      }
      get _tempDisplayObjectParent() {
        return this.tempDisplayObjectParent === null && (this.tempDisplayObjectParent = new hh), this.tempDisplayObjectParent
      }
      enableTempParent() {
        const t = this.parent;
        return this.parent = this._tempDisplayObjectParent, t
      }
      disableTempParent(t) {
        this.parent = t
      }
      get x() {
        return this.position.x
      }
      set x(t) {
        this.transform.position.x = t
      }
      get y() {
        return this.position.y
      }
      set y(t) {
        this.transform.position.y = t
      }
      get worldTransform() {
        return this.transform.worldTransform
      }
      get localTransform() {
        return this.transform.localTransform
      }
      get position() {
        return this.transform.position
      }
      set position(t) {
        this.transform.position.copyFrom(t)
      }
      get scale() {
        return this.transform.scale
      }
      set scale(t) {
        this.transform.scale.copyFrom(t)
      }
      get pivot() {
        return this.transform.pivot
      }
      set pivot(t) {
        this.transform.pivot.copyFrom(t)
      }
      get skew() {
        return this.transform.skew
      }
      set skew(t) {
        this.transform.skew.copyFrom(t)
      }
      get rotation() {
        return this.transform.rotation
      }
      set rotation(t) {
        this.transform.rotation = t
      }
      get angle() {
        return this.transform.rotation * po
      }
      set angle(t) {
        this.transform.rotation = t * mo
      }
      get zIndex() {
        return this._zIndex
      }
      set zIndex(t) {
        this._zIndex = t, this.parent && (this.parent.sortDirty = !0)
      }
      get worldVisible() {
        let t = this;
        do {
          if (!t.visible) return !1;
          t = t.parent
        } while (t);
        return !0
      }
      get mask() {
        return this._mask
      }
      set mask(t) {
        if (this._mask !== t) {
          if (this._mask) {
            const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
            e && (e._maskRefCount--, e._maskRefCount === 0 && (e.renderable = !0, e.isMask = !1))
          }
          if (this._mask = t, this._mask) {
            const e = this._mask.isMaskData ? this._mask.maskObject : this._mask;
            e && (e._maskRefCount === 0 && (e.renderable = !1, e.isMask = !0), e._maskRefCount++)
          }
        }
      }
    }
    class hh extends st {
      constructor() {
        super(...arguments), this.sortDirty = null
      }
    }
    st.prototype.displayObjectUpdateTransform = st.prototype.updateTransform;
    const Nd = new tt;
  
    function Ld(i, t) {
      return i.zIndex === t.zIndex ? i._lastSortedIndex - t._lastSortedIndex : i.zIndex - t.zIndex
    }
    const lh = class ea extends st {
      constructor() {
        super(), this.children = [], this.sortableChildren = ea.defaultSortableChildren, this.sortDirty = !1
      }
      onChildrenChange(t) {}
      addChild(...t) {
        if (t.length > 1)
          for (let e = 0; e < t.length; e++) this.addChild(t[e]);
        else {
          const e = t[0];
          e.parent && e.parent.removeChild(e), e.parent = this, this.sortDirty = !0, e.transform._parentID = -1, this.children.push(e), this._boundsID++, this.onChildrenChange(this.children.length - 1), this.emit("childAdded", e, this, this.children.length - 1), e.emit("added", this)
        }
        return t[0]
      }
      addChildAt(t, e) {
        if (e < 0 || e > this.children.length) throw new Error(`${t}addChildAt: The index ${e} supplied is out of bounds ${this.children.length}`);
        return t.parent && t.parent.removeChild(t), t.parent = this, this.sortDirty = !0, t.transform._parentID = -1, this.children.splice(e, 0, t), this._boundsID++, this.onChildrenChange(e), t.emit("added", this), this.emit("childAdded", t, this, e), t
      }
      swapChildren(t, e) {
        if (t === e) return;
        const s = this.getChildIndex(t),
          r = this.getChildIndex(e);
        this.children[s] = e, this.children[r] = t, this.onChildrenChange(s < r ? s : r)
      }
      getChildIndex(t) {
        const e = this.children.indexOf(t);
        if (e === -1) throw new Error("The supplied DisplayObject must be a child of the caller");
        return e
      }
      setChildIndex(t, e) {
        if (e < 0 || e >= this.children.length) throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`);
        const s = this.getChildIndex(t);
        Ce(this.children, s, 1), this.children.splice(e, 0, t), this.onChildrenChange(e)
      }
      getChildAt(t) {
        if (t < 0 || t >= this.children.length) throw new Error(`getChildAt: Index (${t}) does not exist.`);
        return this.children[t]
      }
      removeChild(...t) {
        if (t.length > 1)
          for (let e = 0; e < t.length; e++) this.removeChild(t[e]);
        else {
          const e = t[0],
            s = this.children.indexOf(e);
          if (s === -1) return null;
          e.parent = null, e.transform._parentID = -1, Ce(this.children, s, 1), this._boundsID++, this.onChildrenChange(s), e.emit("removed", this), this.emit("childRemoved", e, this, s)
        }
        return t[0]
      }
      removeChildAt(t) {
        const e = this.getChildAt(t);
        return e.parent = null, e.transform._parentID = -1, Ce(this.children, t, 1), this._boundsID++, this.onChildrenChange(t), e.emit("removed", this), this.emit("childRemoved", e, this, t), e
      }
      removeChildren(t = 0, e = this.children.length) {
        const s = t,
          r = e,
          n = r - s;
        let a;
        if (n > 0 && n <= r) {
          a = this.children.splice(s, n);
          for (let o = 0; o < a.length; ++o) a[o].parent = null, a[o].transform && (a[o].transform._parentID = -1);
          this._boundsID++, this.onChildrenChange(t);
          for (let o = 0; o < a.length; ++o) a[o].emit("removed", this), this.emit("childRemoved", a[o], this, o);
          return a
        } else if (n === 0 && this.children.length === 0) return [];
        throw new RangeError("removeChildren: numeric values are outside the acceptable range.")
      }
      sortChildren() {
        let t = !1;
        for (let e = 0, s = this.children.length; e < s; ++e) {
          const r = this.children[e];
          r._lastSortedIndex = e, !t && r.zIndex !== 0 && (t = !0)
        }
        t && this.children.length > 1 && this.children.sort(Ld), this.sortDirty = !1
      }
      updateTransform() {
        this.sortableChildren && this.sortDirty && this.sortChildren(), this._boundsID++, this.transform.updateTransform(this.parent.transform), this.worldAlpha = this.alpha * this.parent.worldAlpha;
        for (let t = 0, e = this.children.length; t < e; ++t) {
          const s = this.children[t];
          s.visible && s.updateTransform()
        }
      }
      calculateBounds() {
        this._bounds.clear(), this._calculateBounds();
        for (let t = 0; t < this.children.length; t++) {
          const e = this.children[t];
          if (!(!e.visible || !e.renderable))
            if (e.calculateBounds(), e._mask) {
              const s = e._mask.isMaskData ? e._mask.maskObject : e._mask;
              s ? (s.calculateBounds(), this._bounds.addBoundsMask(e._bounds, s._bounds)) : this._bounds.addBounds(e._bounds)
            } else e.filterArea ? this._bounds.addBoundsArea(e._bounds, e.filterArea) : this._bounds.addBounds(e._bounds)
        }
        this._bounds.updateID = this._boundsID
      }
      getLocalBounds(t, e = !1) {
        const s = super.getLocalBounds(t);
        if (!e)
          for (let r = 0, n = this.children.length; r < n; ++r) {
            const a = this.children[r];
            a.visible && a.updateTransform()
          }
        return s
      }
      _calculateBounds() {}
      _renderWithCulling(t) {
        const e = t.renderTexture.sourceFrame;
        if (!(e.width > 0 && e.height > 0)) return;
        let s, r;
        this.cullArea ? (s = this.cullArea, r = this.worldTransform) : this._render !== ea.prototype._render && (s = this.getBounds(!0));
        const n = t.projection.transform;
        if (n && (r ? (r = Nd.copyFrom(r), r.prepend(n)) : r = n), s && e.intersects(s, r)) this._render(t);
        else if (this.cullArea) return;
        for (let a = 0, o = this.children.length; a < o; ++a) {
          const h = this.children[a],
            l = h.cullable;
          h.cullable = l || !this.cullArea, h.render(t), h.cullable = l
        }
      }
      render(t) {
        var e;
        if (!(!this.visible || this.worldAlpha <= 0 || !this.renderable))
          if (this._mask || (e = this.filters) != null && e.length) this.renderAdvanced(t);
          else if (this.cullable) this._renderWithCulling(t);
        else {
          this._render(t);
          for (let s = 0, r = this.children.length; s < r; ++s) this.children[s].render(t)
        }
      }
      renderAdvanced(t) {
        var e, s, r;
        const n = this.filters,
          a = this._mask;
        if (n) {
          this._enabledFilters || (this._enabledFilters = []), this._enabledFilters.length = 0;
          for (let h = 0; h < n.length; h++) n[h].enabled && this._enabledFilters.push(n[h])
        }
        const o = n && ((e = this._enabledFilters) == null ? void 0 : e.length) || a && (!a.isMaskData || a.enabled && (a.autoDetect || a.type !== ht.NONE));
        if (o && t.batch.flush(), n && (s = this._enabledFilters) != null && s.length && t.filter.push(this, this._enabledFilters), a && t.mask.push(this, this._mask), this.cullable) this._renderWithCulling(t);
        else {
          this._render(t);
          for (let h = 0, l = this.children.length; h < l; ++h) this.children[h].render(t)
        }
        o && t.batch.flush(), a && t.mask.pop(this), n && (r = this._enabledFilters) != null && r.length && t.filter.pop()
      }
      _render(t) {}
      destroy(t) {
        super.destroy(), this.sortDirty = !1;
        const e = typeof t == "boolean" ? t : t == null ? void 0 : t.children,
          s = this.removeChildren(0, this.children.length);
        if (e)
          for (let r = 0; r < s.length; ++r) s[r].destroy(t)
      }
      get width() {
        return this.scale.x * this.getLocalBounds().width
      }
      set width(t) {
        const e = this.getLocalBounds().width;
        e !== 0 ? this.scale.x = t / e : this.scale.x = 1, this._width = t
      }
      get height() {
        return this.scale.y * this.getLocalBounds().height
      }
      set height(t) {
        const e = this.getLocalBounds().height;
        e !== 0 ? this.scale.y = t / e : this.scale.y = 1, this._height = t
      }
    };
    lh.defaultSortableChildren = !1;
    let It = lh;
    It.prototype.containerUpdateTransform = It.prototype.updateTransform, Object.defineProperties(O, {
      SORTABLE_CHILDREN: {
        get() {
          return It.defaultSortableChildren
        },
        set(i) {
          It.defaultSortableChildren = i
        }
      }
    });
    const Cs = new q,
      Ud = new Uint16Array([0, 1, 2, 0, 2, 3]);
    class ue extends It {
      constructor(t) {
        super(), this._anchor = new oe(this._onAnchorUpdate, this, t ? t.defaultAnchor.x : 0, t ? t.defaultAnchor.y : 0), this._texture = null, this._width = 0, this._height = 0, this._tintColor = new Z(16777215), this._tintRGB = null, this.tint = 16777215, this.blendMode = H.NORMAL, this._cachedTint = 16777215, this.uvs = null, this.texture = t || B.EMPTY, this.vertexData = new Float32Array(8), this.vertexTrimmedData = null, this._transformID = -1, this._textureID = -1, this._transformTrimmedID = -1, this._textureTrimmedID = -1, this.indices = Ud, this.pluginName = "batch", this.isSprite = !0, this._roundPixels = O.ROUND_PIXELS
      }
      _onTextureUpdate() {
        this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this._width && (this.scale.x = ne(this.scale.x) * this._width / this._texture.orig.width), this._height && (this.scale.y = ne(this.scale.y) * this._height / this._texture.orig.height)
      }
      _onAnchorUpdate() {
        this._transformID = -1, this._transformTrimmedID = -1
      }
      calculateVertices() {
        const t = this._texture;
        if (this._transformID === this.transform._worldID && this._textureID === t._updateID) return;
        this._textureID !== t._updateID && (this.uvs = this._texture._uvs.uvsFloat32), this._transformID = this.transform._worldID, this._textureID = t._updateID;
        const e = this.transform.worldTransform,
          s = e.a,
          r = e.b,
          n = e.c,
          a = e.d,
          o = e.tx,
          h = e.ty,
          l = this.vertexData,
          u = t.trim,
          c = t.orig,
          d = this._anchor;
        let f = 0,
          p = 0,
          m = 0,
          g = 0;
        if (u ? (p = u.x - d._x * c.width, f = p + u.width, g = u.y - d._y * c.height, m = g + u.height) : (p = -d._x * c.width, f = p + c.width, g = -d._y * c.height, m = g + c.height), l[0] = s * p + n * g + o, l[1] = a * g + r * p + h, l[2] = s * f + n * g + o, l[3] = a * g + r * f + h, l[4] = s * f + n * m + o, l[5] = a * m + r * f + h, l[6] = s * p + n * m + o, l[7] = a * m + r * p + h, this._roundPixels) {
          const y = O.RESOLUTION;
          for (let b = 0; b < l.length; ++b) l[b] = Math.round(l[b] * y) / y
        }
      }
      calculateTrimmedVertices() {
        if (!this.vertexTrimmedData) this.vertexTrimmedData = new Float32Array(8);
        else if (this._transformTrimmedID === this.transform._worldID && this._textureTrimmedID === this._texture._updateID) return;
        this._transformTrimmedID = this.transform._worldID, this._textureTrimmedID = this._texture._updateID;
        const t = this._texture,
          e = this.vertexTrimmedData,
          s = t.orig,
          r = this._anchor,
          n = this.transform.worldTransform,
          a = n.a,
          o = n.b,
          h = n.c,
          l = n.d,
          u = n.tx,
          c = n.ty,
          d = -r._x * s.width,
          f = d + s.width,
          p = -r._y * s.height,
          m = p + s.height;
        if (e[0] = a * d + h * p + u, e[1] = l * p + o * d + c, e[2] = a * f + h * p + u, e[3] = l * p + o * f + c, e[4] = a * f + h * m + u, e[5] = l * m + o * f + c, e[6] = a * d + h * m + u, e[7] = l * m + o * d + c, this._roundPixels) {
          const g = O.RESOLUTION;
          for (let y = 0; y < e.length; ++y) e[y] = Math.round(e[y] * g) / g
        }
      }
      _render(t) {
        this.calculateVertices(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this)
      }
      _calculateBounds() {
        const t = this._texture.trim,
          e = this._texture.orig;
        !t || t.width === e.width && t.height === e.height ? (this.calculateVertices(), this._bounds.addQuad(this.vertexData)) : (this.calculateTrimmedVertices(), this._bounds.addQuad(this.vertexTrimmedData))
      }
      getLocalBounds(t) {
        return this.children.length === 0 ? (this._localBounds || (this._localBounds = new Rs), this._localBounds.minX = this._texture.orig.width * -this._anchor._x, this._localBounds.minY = this._texture.orig.height * -this._anchor._y, this._localBounds.maxX = this._texture.orig.width * (1 - this._anchor._x), this._localBounds.maxY = this._texture.orig.height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new j), t = this._localBoundsRect), this._localBounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
      }
      containsPoint(t) {
        this.worldTransform.applyInverse(t, Cs);
        const e = this._texture.orig.width,
          s = this._texture.orig.height,
          r = -e * this.anchor.x;
        let n = 0;
        return Cs.x >= r && Cs.x < r + e && (n = -s * this.anchor.y, Cs.y >= n && Cs.y < n + s)
      }
      destroy(t) {
        if (super.destroy(t), this._texture.off("update", this._onTextureUpdate, this), this._anchor = null, typeof t == "boolean" ? t : t == null ? void 0 : t.texture) {
          const e = typeof t == "boolean" ? t : t == null ? void 0 : t.baseTexture;
          this._texture.destroy(!!e)
        }
        this._texture = null
      }
      static from(t, e) {
        const s = t instanceof B ? t : B.from(t, e);
        return new ue(s)
      }
      set roundPixels(t) {
        this._roundPixels !== t && (this._transformID = -1, this._transformTrimmedID = -1), this._roundPixels = t
      }
      get roundPixels() {
        return this._roundPixels
      }
      get width() {
        return Math.abs(this.scale.x) * this._texture.orig.width
      }
      set width(t) {
        const e = ne(this.scale.x) || 1;
        this.scale.x = e * t / this._texture.orig.width, this._width = t
      }
      get height() {
        return Math.abs(this.scale.y) * this._texture.orig.height
      }
      set height(t) {
        const e = ne(this.scale.y) || 1;
        this.scale.y = e * t / this._texture.orig.height, this._height = t
      }
      get anchor() {
        return this._anchor
      }
      set anchor(t) {
        this._anchor.copyFrom(t)
      }
      get tint() {
        return this._tintColor.value
      }
      set tint(t) {
        this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber()
      }
      get tintValue() {
        return this._tintColor.toNumber()
      }
      get texture() {
        return this._texture
      }
      set texture(t) {
        this._texture !== t && (this._texture && this._texture.off("update", this._onTextureUpdate, this), this._texture = t || B.EMPTY, this._cachedTint = 16777215, this._textureID = -1, this._textureTrimmedID = -1, t && (t.baseTexture.valid ? this._onTextureUpdate() : t.once("update", this._onTextureUpdate, this)))
      }
    }
    const uh = new tt;
    st.prototype._cacheAsBitmap = !1, st.prototype._cacheData = null, st.prototype._cacheAsBitmapResolution = null, st.prototype._cacheAsBitmapMultisample = null;
    class kd {
      constructor() {
        this.textureCacheId = null, this.originalRender = null, this.originalRenderCanvas = null, this.originalCalculateBounds = null, this.originalGetLocalBounds = null, this.originalUpdateTransform = null, this.originalDestroy = null, this.originalMask = null, this.originalFilterArea = null, this.originalContainsPoint = null, this.sprite = null
      }
    }
    Object.defineProperties(st.prototype, {
      cacheAsBitmapResolution: {
        get() {
          return this._cacheAsBitmapResolution
        },
        set(i) {
          i !== this._cacheAsBitmapResolution && (this._cacheAsBitmapResolution = i, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
        }
      },
      cacheAsBitmapMultisample: {
        get() {
          return this._cacheAsBitmapMultisample
        },
        set(i) {
          i !== this._cacheAsBitmapMultisample && (this._cacheAsBitmapMultisample = i, this.cacheAsBitmap && (this.cacheAsBitmap = !1, this.cacheAsBitmap = !0))
        }
      },
      cacheAsBitmap: {
        get() {
          return this._cacheAsBitmap
        },
        set(i) {
          if (this._cacheAsBitmap === i) return;
          this._cacheAsBitmap = i;
          let t;
          i ? (this._cacheData || (this._cacheData = new kd), t = this._cacheData, t.originalRender = this.render, t.originalRenderCanvas = this.renderCanvas, t.originalUpdateTransform = this.updateTransform, t.originalCalculateBounds = this.calculateBounds, t.originalGetLocalBounds = this.getLocalBounds, t.originalDestroy = this.destroy, t.originalContainsPoint = this.containsPoint, t.originalMask = this._mask, t.originalFilterArea = this.filterArea, this.render = this._renderCached, this.renderCanvas = this._renderCachedCanvas, this.destroy = this._cacheAsBitmapDestroy) : (t = this._cacheData, t.sprite && this._destroyCachedDisplayObject(), this.render = t.originalRender, this.renderCanvas = t.originalRenderCanvas, this.calculateBounds = t.originalCalculateBounds, this.getLocalBounds = t.originalGetLocalBounds, this.destroy = t.originalDestroy, this.updateTransform = t.originalUpdateTransform, this.containsPoint = t.originalContainsPoint, this._mask = t.originalMask, this.filterArea = t.originalFilterArea)
        }
      }
    }), st.prototype._renderCached = function(i) {
      !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObject(i), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._render(i))
    }, st.prototype._initCachedDisplayObject = function(i) {
      var t, e, s;
      if ((t = this._cacheData) != null && t.sprite) return;
      const r = this.alpha;
      this.alpha = 1, i.batch.flush();
      const n = this.getLocalBounds(new j, !0);
      if ((e = this.filters) != null && e.length) {
        const m = this.filters[0].padding;
        n.pad(m)
      }
      const a = this.cacheAsBitmapResolution || i.resolution;
      n.ceil(a), n.width = Math.max(n.width, 1 / a), n.height = Math.max(n.height, 1 / a);
      const o = i.renderTexture.current,
        h = i.renderTexture.sourceFrame.clone(),
        l = i.renderTexture.destinationFrame.clone(),
        u = i.projection.transform,
        c = xe.create({
          width: n.width,
          height: n.height,
          resolution: a,
          multisample: (s = this.cacheAsBitmapMultisample) != null ? s : i.multisample
        }),
        d = `cacheAsBitmap_${ve()}`;
      this._cacheData.textureCacheId = d, X.addToCache(c.baseTexture, d), B.addToCache(c, d);
      const f = this.transform.localTransform.copyTo(uh).invert().translate(-n.x, -n.y);
      this.render = this._cacheData.originalRender, i.render(this, {
        renderTexture: c,
        clear: !0,
        transform: f,
        skipUpdateTransform: !1
      }), i.framebuffer.blit(), i.projection.transform = u, i.renderTexture.bind(o, h, l), this.render = this._renderCached, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = r;
      const p = new ue(c);
      p.transform.worldTransform = this.transform.worldTransform, p.anchor.x = -(n.x / n.width), p.anchor.y = -(n.y / n.height), p.alpha = r, p._bounds = this._bounds, this._cacheData.sprite = p, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.enableTempParent(), this.updateTransform(), this.disableTempParent(null)), this.containsPoint = p.containsPoint.bind(p)
    }, st.prototype._renderCachedCanvas = function(i) {
      !this.visible || this.worldAlpha <= 0 || !this.renderable || (this._initCachedDisplayObjectCanvas(i), this._cacheData.sprite.worldAlpha = this.worldAlpha, this._cacheData.sprite._renderCanvas(i))
    }, st.prototype._initCachedDisplayObjectCanvas = function(i) {
      var t;
      if ((t = this._cacheData) != null && t.sprite) return;
      const e = this.getLocalBounds(new j, !0),
        s = this.alpha;
      this.alpha = 1;
      const r = i.canvasContext.activeContext,
        n = i._projTransform,
        a = this.cacheAsBitmapResolution || i.resolution;
      e.ceil(a), e.width = Math.max(e.width, 1 / a), e.height = Math.max(e.height, 1 / a);
      const o = xe.create({
          width: e.width,
          height: e.height,
          resolution: a
        }),
        h = `cacheAsBitmap_${ve()}`;
      this._cacheData.textureCacheId = h, X.addToCache(o.baseTexture, h), B.addToCache(o, h);
      const l = uh;
      this.transform.localTransform.copyTo(l), l.invert(), l.tx -= e.x, l.ty -= e.y, this.renderCanvas = this._cacheData.originalRenderCanvas, i.render(this, {
        renderTexture: o,
        clear: !0,
        transform: l,
        skipUpdateTransform: !1
      }), i.canvasContext.activeContext = r, i._projTransform = n, this.renderCanvas = this._renderCachedCanvas, this.updateTransform = this.displayObjectUpdateTransform, this.calculateBounds = this._calculateCachedBounds, this.getLocalBounds = this._getCachedLocalBounds, this._mask = null, this.filterArea = null, this.alpha = s;
      const u = new ue(o);
      u.transform.worldTransform = this.transform.worldTransform, u.anchor.x = -(e.x / e.width), u.anchor.y = -(e.y / e.height), u.alpha = s, u._bounds = this._bounds, this._cacheData.sprite = u, this.transform._parentID = -1, this.parent ? this.updateTransform() : (this.parent = i._tempDisplayObjectParent, this.updateTransform(), this.parent = null), this.containsPoint = u.containsPoint.bind(u)
    }, st.prototype._calculateCachedBounds = function() {
      this._bounds.clear(), this._cacheData.sprite.transform._worldID = this.transform._worldID, this._cacheData.sprite._calculateBounds(), this._bounds.updateID = this._boundsID
    }, st.prototype._getCachedLocalBounds = function() {
      return this._cacheData.sprite.getLocalBounds(null)
    }, st.prototype._destroyCachedDisplayObject = function() {
      this._cacheData.sprite._texture.destroy(!0), this._cacheData.sprite = null, X.removeFromCache(this._cacheData.textureCacheId), B.removeFromCache(this._cacheData.textureCacheId), this._cacheData.textureCacheId = null
    }, st.prototype._cacheAsBitmapDestroy = function(i) {
      this.cacheAsBitmap = !1, this.destroy(i)
    }, st.prototype.name = null, It.prototype.getChildByName = function(i, t) {
      for (let e = 0, s = this.children.length; e < s; e++)
        if (this.children[e].name === i) return this.children[e];
      if (t)
        for (let e = 0, s = this.children.length; e < s; e++) {
          const r = this.children[e];
          if (!r.getChildByName) continue;
          const n = r.getChildByName(i, !0);
          if (n) return n
        }
      return null
    }, st.prototype.getGlobalPosition = function(i = new q, t = !1) {
      return this.parent ? this.parent.toGlobal(this.position, i, t) : (i.x = this.position.x, i.y = this.position.y), i
    };
    var Gd = `varying vec2 vTextureCoord;
  
  uniform sampler2D uSampler;
  uniform float uAlpha;
  
  void main(void)
  {
     gl_FragColor = texture2D(uSampler, vTextureCoord) * uAlpha;
  }
  `;
    class ch extends yt {
      constructor(t = 1) {
        super(ih, Gd, {
          uAlpha: 1
        }), this.alpha = t
      }
      get alpha() {
        return this.uniforms.uAlpha
      }
      set alpha(t) {
        this.uniforms.uAlpha = t
      }
    }
    const $d = {
        5: [.153388, .221461, .250301],
        7: [.071303, .131514, .189879, .214607],
        9: [.028532, .067234, .124009, .179044, .20236],
        11: [.0093, .028002, .065984, .121703, .175713, .198596],
        13: [.002406, .009255, .027867, .065666, .121117, .174868, .197641],
        15: [489e-6, .002403, .009246, .02784, .065602, .120999, .174697, .197448]
      },
      Hd = ["varying vec2 vBlurTexCoords[%size%];", "uniform sampler2D uSampler;", "void main(void)", "{", "    gl_FragColor = vec4(0.0);", "    %blur%", "}"].join(`
  `);
  
    function Vd(i) {
      const t = $d[i],
        e = t.length;
      let s = Hd,
        r = "";
      const n = "gl_FragColor += texture2D(uSampler, vBlurTexCoords[%index%]) * %value%;";
      let a;
      for (let o = 0; o < i; o++) {
        let h = n.replace("%index%", o.toString());
        a = o, o >= e && (a = i - o - 1), h = h.replace("%value%", t[a].toString()), r += h, r += `
  `
      }
      return s = s.replace("%blur%", r), s = s.replace("%size%", i.toString()), s
    }
    const Xd = `
      attribute vec2 aVertexPosition;
  
      uniform mat3 projectionMatrix;
  
      uniform float strength;
  
      varying vec2 vBlurTexCoords[%size%];
  
      uniform vec4 inputSize;
      uniform vec4 outputFrame;
  
      vec4 filterVertexPosition( void )
      {
          vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
  
          return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
      }
  
      vec2 filterTextureCoord( void )
      {
          return aVertexPosition * (outputFrame.zw * inputSize.zw);
      }
  
      void main(void)
      {
          gl_Position = filterVertexPosition();
  
          vec2 textureCoord = filterTextureCoord();
          %blur%
      }`;
  
    function jd(i, t) {
      const e = Math.ceil(i / 2);
      let s = Xd,
        r = "",
        n;
      t ? n = "vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * strength, 0.0);" : n = "vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * strength);";
      for (let a = 0; a < i; a++) {
        let o = n.replace("%index%", a.toString());
        o = o.replace("%sampleIndex%", `${a-(e-1)}.0`), r += o, r += `
  `
      }
      return s = s.replace("%blur%", r), s = s.replace("%size%", i.toString()), s
    }
    class Di extends yt {
      constructor(t, e = 8, s = 4, r = yt.defaultResolution, n = 5) {
        const a = jd(n, t),
          o = Vd(n);
        super(a, o), this.horizontal = t, this.resolution = r, this._quality = 0, this.quality = s, this.blur = e
      }
      apply(t, e, s, r) {
        if (s ? this.horizontal ? this.uniforms.strength = 1 / s.width * (s.width / e.width) : this.uniforms.strength = 1 / s.height * (s.height / e.height) : this.horizontal ? this.uniforms.strength = 1 / t.renderer.width * (t.renderer.width / e.width) : this.uniforms.strength = 1 / t.renderer.height * (t.renderer.height / e.height), this.uniforms.strength *= this.strength, this.uniforms.strength /= this.passes, this.passes === 1) t.applyFilter(this, e, s, r);
        else {
          const n = t.getFilterTexture(),
            a = t.renderer;
          let o = e,
            h = n;
          this.state.blend = !1, t.applyFilter(this, o, h, kt.CLEAR);
          for (let l = 1; l < this.passes - 1; l++) {
            t.bindAndClear(o, kt.BLIT), this.uniforms.uSampler = h;
            const u = h;
            h = o, o = u, a.shader.bind(this), a.geometry.draw(5)
          }
          this.state.blend = !0, t.applyFilter(this, h, s, r), t.returnFilterTexture(n)
        }
      }
      get blur() {
        return this.strength
      }
      set blur(t) {
        this.padding = 1 + Math.abs(t) * 2, this.strength = t
      }
      get quality() {
        return this._quality
      }
      set quality(t) {
        this._quality = t, this.passes = t
      }
    }
    class dh extends yt {
      constructor(t = 8, e = 4, s = yt.defaultResolution, r = 5) {
        super(), this._repeatEdgePixels = !1, this.blurXFilter = new Di(!0, t, e, s, r), this.blurYFilter = new Di(!1, t, e, s, r), this.resolution = s, this.quality = e, this.blur = t, this.repeatEdgePixels = !1
      }
      apply(t, e, s, r) {
        const n = Math.abs(this.blurXFilter.strength),
          a = Math.abs(this.blurYFilter.strength);
        if (n && a) {
          const o = t.getFilterTexture();
          this.blurXFilter.apply(t, e, o, kt.CLEAR), this.blurYFilter.apply(t, o, s, r), t.returnFilterTexture(o)
        } else a ? this.blurYFilter.apply(t, e, s, r) : this.blurXFilter.apply(t, e, s, r)
      }
      updatePadding() {
        this._repeatEdgePixels ? this.padding = 0 : this.padding = Math.max(Math.abs(this.blurXFilter.strength), Math.abs(this.blurYFilter.strength)) * 2
      }
      get blur() {
        return this.blurXFilter.blur
      }
      set blur(t) {
        this.blurXFilter.blur = this.blurYFilter.blur = t, this.updatePadding()
      }
      get quality() {
        return this.blurXFilter.quality
      }
      set quality(t) {
        this.blurXFilter.quality = this.blurYFilter.quality = t
      }
      get blurX() {
        return this.blurXFilter.blur
      }
      set blurX(t) {
        this.blurXFilter.blur = t, this.updatePadding()
      }
      get blurY() {
        return this.blurYFilter.blur
      }
      set blurY(t) {
        this.blurYFilter.blur = t, this.updatePadding()
      }
      get blendMode() {
        return this.blurYFilter.blendMode
      }
      set blendMode(t) {
        this.blurYFilter.blendMode = t
      }
      get repeatEdgePixels() {
        return this._repeatEdgePixels
      }
      set repeatEdgePixels(t) {
        this._repeatEdgePixels = t, this.updatePadding()
      }
    }
    var zd = `varying vec2 vTextureCoord;
  uniform sampler2D uSampler;
  uniform float m[20];
  uniform float uAlpha;
  
  void main(void)
  {
      vec4 c = texture2D(uSampler, vTextureCoord);
  
      if (uAlpha == 0.0) {
          gl_FragColor = c;
          return;
      }
  
      // Un-premultiply alpha before applying the color matrix. See issue #3539.
      if (c.a > 0.0) {
        c.rgb /= c.a;
      }
  
      vec4 result;
  
      result.r = (m[0] * c.r);
          result.r += (m[1] * c.g);
          result.r += (m[2] * c.b);
          result.r += (m[3] * c.a);
          result.r += m[4];
  
      result.g = (m[5] * c.r);
          result.g += (m[6] * c.g);
          result.g += (m[7] * c.b);
          result.g += (m[8] * c.a);
          result.g += m[9];
  
      result.b = (m[10] * c.r);
         result.b += (m[11] * c.g);
         result.b += (m[12] * c.b);
         result.b += (m[13] * c.a);
         result.b += m[14];
  
      result.a = (m[15] * c.r);
         result.a += (m[16] * c.g);
         result.a += (m[17] * c.b);
         result.a += (m[18] * c.a);
         result.a += m[19];
  
      vec3 rgb = mix(c.rgb, result.rgb, uAlpha);
  
      // Premultiply alpha again.
      rgb *= result.a;
  
      gl_FragColor = vec4(rgb, result.a);
  }
  `;
    class Oi extends yt {
      constructor() {
        const t = {
          m: new Float32Array([1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0]),
          uAlpha: 1
        };
        super(mn, zd, t), this.alpha = 1
      }
      _loadMatrix(t, e = !1) {
        let s = t;
        e && (this._multiply(s, this.uniforms.m, t), s = this._colorMatrix(s)), this.uniforms.m = s
      }
      _multiply(t, e, s) {
        return t[0] = e[0] * s[0] + e[1] * s[5] + e[2] * s[10] + e[3] * s[15], t[1] = e[0] * s[1] + e[1] * s[6] + e[2] * s[11] + e[3] * s[16], t[2] = e[0] * s[2] + e[1] * s[7] + e[2] * s[12] + e[3] * s[17], t[3] = e[0] * s[3] + e[1] * s[8] + e[2] * s[13] + e[3] * s[18], t[4] = e[0] * s[4] + e[1] * s[9] + e[2] * s[14] + e[3] * s[19] + e[4], t[5] = e[5] * s[0] + e[6] * s[5] + e[7] * s[10] + e[8] * s[15], t[6] = e[5] * s[1] + e[6] * s[6] + e[7] * s[11] + e[8] * s[16], t[7] = e[5] * s[2] + e[6] * s[7] + e[7] * s[12] + e[8] * s[17], t[8] = e[5] * s[3] + e[6] * s[8] + e[7] * s[13] + e[8] * s[18], t[9] = e[5] * s[4] + e[6] * s[9] + e[7] * s[14] + e[8] * s[19] + e[9], t[10] = e[10] * s[0] + e[11] * s[5] + e[12] * s[10] + e[13] * s[15], t[11] = e[10] * s[1] + e[11] * s[6] + e[12] * s[11] + e[13] * s[16], t[12] = e[10] * s[2] + e[11] * s[7] + e[12] * s[12] + e[13] * s[17], t[13] = e[10] * s[3] + e[11] * s[8] + e[12] * s[13] + e[13] * s[18], t[14] = e[10] * s[4] + e[11] * s[9] + e[12] * s[14] + e[13] * s[19] + e[14], t[15] = e[15] * s[0] + e[16] * s[5] + e[17] * s[10] + e[18] * s[15], t[16] = e[15] * s[1] + e[16] * s[6] + e[17] * s[11] + e[18] * s[16], t[17] = e[15] * s[2] + e[16] * s[7] + e[17] * s[12] + e[18] * s[17], t[18] = e[15] * s[3] + e[16] * s[8] + e[17] * s[13] + e[18] * s[18], t[19] = e[15] * s[4] + e[16] * s[9] + e[17] * s[14] + e[18] * s[19] + e[19], t
      }
      _colorMatrix(t) {
        const e = new Float32Array(t);
        return e[4] /= 255, e[9] /= 255, e[14] /= 255, e[19] /= 255, e
      }
      brightness(t, e) {
        const s = [t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e)
      }
      tint(t, e) {
        const [s, r, n] = Z.shared.setValue(t).toArray(), a = [s, 0, 0, 0, 0, 0, r, 0, 0, 0, 0, 0, n, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(a, e)
      }
      greyscale(t, e) {
        const s = [t, t, t, 0, 0, t, t, t, 0, 0, t, t, t, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e)
      }
      blackAndWhite(t) {
        const e = [.3, .6, .1, 0, 0, .3, .6, .1, 0, 0, .3, .6, .1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      hue(t, e) {
        t = (t || 0) / 180 * Math.PI;
        const s = Math.cos(t),
          r = Math.sin(t),
          n = Math.sqrt,
          a = 1 / 3,
          o = n(a),
          h = s + (1 - s) * a,
          l = a * (1 - s) - o * r,
          u = a * (1 - s) + o * r,
          c = a * (1 - s) + o * r,
          d = s + a * (1 - s),
          f = a * (1 - s) - o * r,
          p = a * (1 - s) - o * r,
          m = a * (1 - s) + o * r,
          g = s + a * (1 - s),
          y = [h, l, u, 0, 0, c, d, f, 0, 0, p, m, g, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(y, e)
      }
      contrast(t, e) {
        const s = (t || 0) + 1,
          r = -.5 * (s - 1),
          n = [s, 0, 0, 0, r, 0, s, 0, 0, r, 0, 0, s, 0, r, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
      }
      saturate(t = 0, e) {
        const s = t * 2 / 3 + 1,
          r = (s - 1) * -.5,
          n = [s, r, r, 0, 0, r, s, r, 0, 0, r, r, s, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(n, e)
      }
      desaturate() {
        this.saturate(-1)
      }
      negative(t) {
        const e = [-1, 0, 0, 1, 0, 0, -1, 0, 1, 0, 0, 0, -1, 1, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      sepia(t) {
        const e = [.393, .7689999, .18899999, 0, 0, .349, .6859999, .16799999, 0, 0, .272, .5339999, .13099999, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      technicolor(t) {
        const e = [1.9125277891456083, -.8545344976951645, -.09155508482755585, 0, 11.793603434377337, -.3087833385928097, 1.7658908555458428, -.10601743074722245, 0, -70.35205161461398, -.231103377548616, -.7501899197440212, 1.847597816108189, 0, 30.950940869491138, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      polaroid(t) {
        const e = [1.438, -.062, -.062, 0, 0, -.122, 1.378, -.122, 0, 0, -.016, -.016, 1.483, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      toBGR(t) {
        const e = [0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      kodachrome(t) {
        const e = [1.1285582396593525, -.3967382283601348, -.03992559172921793, 0, 63.72958762196502, -.16404339962244616, 1.0835251566291304, -.05498805115633132, 0, 24.732407896706203, -.16786010706155763, -.5603416277695248, 1.6014850761964943, 0, 35.62982807460946, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      browni(t) {
        const e = [.5997023498159715, .34553243048391263, -.2708298674538042, 0, 47.43192855600873, -.037703249837783157, .8609577587992641, .15059552388459913, 0, -36.96841498319127, .24113635128153335, -.07441037908422492, .44972182064877153, 0, -7.562075277591283, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      vintage(t) {
        const e = [.6279345635605994, .3202183420819367, -.03965408211312453, 0, 9.651285835294123, .02578397704808868, .6441188644374771, .03259127616149294, 0, 7.462829176470591, .0466055556782719, -.0851232987247891, .5241648018700465, 0, 5.159190588235296, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      colorTone(t, e, s, r, n) {
        t = t || .2, e = e || .15, s = s || 16770432, r = r || 3375104;
        const a = Z.shared,
          [o, h, l] = a.setValue(s).toArray(),
          [u, c, d] = a.setValue(r).toArray(),
          f = [.3, .59, .11, 0, 0, o, h, l, t, 0, u, c, d, e, 0, o - u, h - c, l - d, 0, 0];
        this._loadMatrix(f, n)
      }
      night(t, e) {
        t = t || .1;
        const s = [t * -2, -t, 0, 0, 0, -t, 0, t, 0, 0, 0, t, t * 2, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e)
      }
      predator(t, e) {
        const s = [11.224130630493164 * t, -4.794486999511719 * t, -2.8746118545532227 * t, 0 * t, .40342438220977783 * t, -3.6330697536468506 * t, 9.193157196044922 * t, -2.951810836791992 * t, 0 * t, -1.316135048866272 * t, -3.2184197902679443 * t, -4.2375030517578125 * t, 7.476448059082031 * t, 0 * t, .8044459223747253 * t, 0, 0, 0, 1, 0];
        this._loadMatrix(s, e)
      }
      lsd(t) {
        const e = [2, -.4, .5, 0, 0, -.5, 2, -.4, 0, 0, -.4, -.5, 3, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(e, t)
      }
      reset() {
        const t = [1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0];
        this._loadMatrix(t, !1)
      }
      get matrix() {
        return this.uniforms.m
      }
      set matrix(t) {
        this.uniforms.m = t
      }
      get alpha() {
        return this.uniforms.uAlpha
      }
      set alpha(t) {
        this.uniforms.uAlpha = t
      }
    }
    Oi.prototype.grayscale = Oi.prototype.greyscale;
    var Wd = `varying vec2 vFilterCoord;
  varying vec2 vTextureCoord;
  
  uniform vec2 scale;
  uniform mat2 rotation;
  uniform sampler2D uSampler;
  uniform sampler2D mapSampler;
  
  uniform highp vec4 inputSize;
  uniform vec4 inputClamp;
  
  void main(void)
  {
    vec4 map =  texture2D(mapSampler, vFilterCoord);
  
    map -= 0.5;
    map.xy = scale * inputSize.zw * (rotation * map.xy);
  
    gl_FragColor = texture2D(uSampler, clamp(vec2(vTextureCoord.x + map.x, vTextureCoord.y + map.y), inputClamp.xy, inputClamp.zw));
  }
  `,
      Yd = `attribute vec2 aVertexPosition;
  
  uniform mat3 projectionMatrix;
  uniform mat3 filterMatrix;
  
  varying vec2 vTextureCoord;
  varying vec2 vFilterCoord;
  
  uniform vec4 inputSize;
  uniform vec4 outputFrame;
  
  vec4 filterVertexPosition( void )
  {
      vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
  
      return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
  }
  
  vec2 filterTextureCoord( void )
  {
      return aVertexPosition * (outputFrame.zw * inputSize.zw);
  }
  
  void main(void)
  {
      gl_Position = filterVertexPosition();
      vTextureCoord = filterTextureCoord();
      vFilterCoord = ( filterMatrix * vec3( vTextureCoord, 1.0)  ).xy;
  }
  `;
    class fh extends yt {
      constructor(t, e) {
        const s = new tt;
        t.renderable = !1, super(Yd, Wd, {
          mapSampler: t._texture,
          filterMatrix: s,
          scale: {
            x: 1,
            y: 1
          },
          rotation: new Float32Array([1, 0, 0, 1])
        }), this.maskSprite = t, this.maskMatrix = s, e == null && (e = 20), this.scale = new q(e, e)
      }
      apply(t, e, s, r) {
        this.uniforms.filterMatrix = t.calculateSpriteMatrix(this.maskMatrix, this.maskSprite), this.uniforms.scale.x = this.scale.x, this.uniforms.scale.y = this.scale.y;
        const n = this.maskSprite.worldTransform,
          a = Math.sqrt(n.a * n.a + n.b * n.b),
          o = Math.sqrt(n.c * n.c + n.d * n.d);
        a !== 0 && o !== 0 && (this.uniforms.rotation[0] = n.a / a, this.uniforms.rotation[1] = n.b / a, this.uniforms.rotation[2] = n.c / o, this.uniforms.rotation[3] = n.d / o), t.applyFilter(this, e, s, r)
      }
      get map() {
        return this.uniforms.mapSampler
      }
      set map(t) {
        this.uniforms.mapSampler = t
      }
    }
    var qd = `varying vec2 v_rgbNW;
  varying vec2 v_rgbNE;
  varying vec2 v_rgbSW;
  varying vec2 v_rgbSE;
  varying vec2 v_rgbM;
  
  varying vec2 vFragCoord;
  uniform sampler2D uSampler;
  uniform highp vec4 inputSize;
  
  
  /**
   Basic FXAA implementation based on the code on geeks3d.com with the
   modification that the texture2DLod stuff was removed since it's
   unsupported by WebGL.
  
   --
  
   From:
   https://github.com/mitsuhiko/webgl-meincraft
  
   Copyright (c) 2011 by Armin Ronacher.
  
   Some rights reserved.
  
   Redistribution and use in source and binary forms, with or without
   modification, are permitted provided that the following conditions are
   met:
  
   * Redistributions of source code must retain the above copyright
   notice, this list of conditions and the following disclaimer.
  
   * Redistributions in binary form must reproduce the above
   copyright notice, this list of conditions and the following
   disclaimer in the documentation and/or other materials provided
   with the distribution.
  
   * The names of the contributors may not be used to endorse or
   promote products derived from this software without specific
   prior written permission.
  
   THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
   "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
   LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
   A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT
   OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL,
   SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT
   LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE,
   DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY
   THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT
   (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
   OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
   */
  
  #ifndef FXAA_REDUCE_MIN
  #define FXAA_REDUCE_MIN   (1.0/ 128.0)
  #endif
  #ifndef FXAA_REDUCE_MUL
  #define FXAA_REDUCE_MUL   (1.0 / 8.0)
  #endif
  #ifndef FXAA_SPAN_MAX
  #define FXAA_SPAN_MAX     8.0
  #endif
  
  //optimized version for mobile, where dependent
  //texture reads can be a bottleneck
  vec4 fxaa(sampler2D tex, vec2 fragCoord, vec2 inverseVP,
            vec2 v_rgbNW, vec2 v_rgbNE,
            vec2 v_rgbSW, vec2 v_rgbSE,
            vec2 v_rgbM) {
      vec4 color;
      vec3 rgbNW = texture2D(tex, v_rgbNW).xyz;
      vec3 rgbNE = texture2D(tex, v_rgbNE).xyz;
      vec3 rgbSW = texture2D(tex, v_rgbSW).xyz;
      vec3 rgbSE = texture2D(tex, v_rgbSE).xyz;
      vec4 texColor = texture2D(tex, v_rgbM);
      vec3 rgbM  = texColor.xyz;
      vec3 luma = vec3(0.299, 0.587, 0.114);
      float lumaNW = dot(rgbNW, luma);
      float lumaNE = dot(rgbNE, luma);
      float lumaSW = dot(rgbSW, luma);
      float lumaSE = dot(rgbSE, luma);
      float lumaM  = dot(rgbM,  luma);
      float lumaMin = min(lumaM, min(min(lumaNW, lumaNE), min(lumaSW, lumaSE)));
      float lumaMax = max(lumaM, max(max(lumaNW, lumaNE), max(lumaSW, lumaSE)));
  
      mediump vec2 dir;
      dir.x = -((lumaNW + lumaNE) - (lumaSW + lumaSE));
      dir.y =  ((lumaNW + lumaSW) - (lumaNE + lumaSE));
  
      float dirReduce = max((lumaNW + lumaNE + lumaSW + lumaSE) *
                            (0.25 * FXAA_REDUCE_MUL), FXAA_REDUCE_MIN);
  
      float rcpDirMin = 1.0 / (min(abs(dir.x), abs(dir.y)) + dirReduce);
      dir = min(vec2(FXAA_SPAN_MAX, FXAA_SPAN_MAX),
                max(vec2(-FXAA_SPAN_MAX, -FXAA_SPAN_MAX),
                    dir * rcpDirMin)) * inverseVP;
  
      vec3 rgbA = 0.5 * (
                         texture2D(tex, fragCoord * inverseVP + dir * (1.0 / 3.0 - 0.5)).xyz +
                         texture2D(tex, fragCoord * inverseVP + dir * (2.0 / 3.0 - 0.5)).xyz);
      vec3 rgbB = rgbA * 0.5 + 0.25 * (
                                       texture2D(tex, fragCoord * inverseVP + dir * -0.5).xyz +
                                       texture2D(tex, fragCoord * inverseVP + dir * 0.5).xyz);
  
      float lumaB = dot(rgbB, luma);
      if ((lumaB < lumaMin) || (lumaB > lumaMax))
          color = vec4(rgbA, texColor.a);
      else
          color = vec4(rgbB, texColor.a);
      return color;
  }
  
  void main() {
  
        vec4 color;
  
        color = fxaa(uSampler, vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
  
        gl_FragColor = color;
  }
  `,
      Kd = `
  attribute vec2 aVertexPosition;
  
  uniform mat3 projectionMatrix;
  
  varying vec2 v_rgbNW;
  varying vec2 v_rgbNE;
  varying vec2 v_rgbSW;
  varying vec2 v_rgbSE;
  varying vec2 v_rgbM;
  
  varying vec2 vFragCoord;
  
  uniform vec4 inputSize;
  uniform vec4 outputFrame;
  
  vec4 filterVertexPosition( void )
  {
      vec2 position = aVertexPosition * max(outputFrame.zw, vec2(0.)) + outputFrame.xy;
  
      return vec4((projectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);
  }
  
  void texcoords(vec2 fragCoord, vec2 inverseVP,
                 out vec2 v_rgbNW, out vec2 v_rgbNE,
                 out vec2 v_rgbSW, out vec2 v_rgbSE,
                 out vec2 v_rgbM) {
      v_rgbNW = (fragCoord + vec2(-1.0, -1.0)) * inverseVP;
      v_rgbNE = (fragCoord + vec2(1.0, -1.0)) * inverseVP;
      v_rgbSW = (fragCoord + vec2(-1.0, 1.0)) * inverseVP;
      v_rgbSE = (fragCoord + vec2(1.0, 1.0)) * inverseVP;
      v_rgbM = vec2(fragCoord * inverseVP);
  }
  
  void main(void) {
  
     gl_Position = filterVertexPosition();
  
     vFragCoord = aVertexPosition * outputFrame.zw;
  
     texcoords(vFragCoord, inputSize.zw, v_rgbNW, v_rgbNE, v_rgbSW, v_rgbSE, v_rgbM);
  }
  `;
    class ph extends yt {
      constructor() {
        super(Kd, qd)
      }
    }
    var Zd = `precision highp float;
  
  varying vec2 vTextureCoord;
  varying vec4 vColor;
  
  uniform float uNoise;
  uniform float uSeed;
  uniform sampler2D uSampler;
  
  float rand(vec2 co)
  {
      return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
  }
  
  void main()
  {
      vec4 color = texture2D(uSampler, vTextureCoord);
      float randomValue = rand(gl_FragCoord.xy * uSeed);
      float diff = (randomValue - 0.5) * uNoise;
  
      // Un-premultiply alpha before applying the color matrix. See issue #3539.
      if (color.a > 0.0) {
          color.rgb /= color.a;
      }
  
      color.r += diff;
      color.g += diff;
      color.b += diff;
  
      // Premultiply alpha again.
      color.rgb *= color.a;
  
      gl_FragColor = color;
  }
  `;
    class mh extends yt {
      constructor(t = .5, e = Math.random()) {
        super(mn, Zd, {
          uNoise: 0,
          uSeed: 0
        }), this.noise = t, this.seed = e
      }
      get noise() {
        return this.uniforms.uNoise
      }
      set noise(t) {
        this.uniforms.uNoise = t
      }
      get seed() {
        return this.uniforms.uSeed
      }
      set seed(t) {
        this.uniforms.uSeed = t
      }
    }
    const En = {
      AlphaFilter: ch,
      BlurFilter: dh,
      BlurFilterPass: Di,
      ColorMatrixFilter: Oi,
      DisplacementFilter: fh,
      FXAAFilter: ph,
      NoiseFilter: mh
    };
    Object.entries(En).forEach(([i, t]) => {
      Object.defineProperty(En, i, {
        get() {
          return Oa("7.1.0", `filters.${i} has moved to ${i}`), t
        }
      })
    });
    let Qd = class {
      constructor() {
        this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0
      }
      init(t) {
        this.removeTickerListener(), this.events = t, this.interactionFrequency = 10, this._deltaTime = 0, this._didMove = !1, this.tickerAdded = !1, this._pauseUpdate = !0
      }
      get pauseUpdate() {
        return this._pauseUpdate
      }
      set pauseUpdate(t) {
        this._pauseUpdate = t
      }
      addTickerListener() {
        this.tickerAdded || !this.domElement || (pt.system.add(this.tickerUpdate, this, le.INTERACTION), this.tickerAdded = !0)
      }
      removeTickerListener() {
        this.tickerAdded && (pt.system.remove(this.tickerUpdate, this), this.tickerAdded = !1)
      }
      pointerMoved() {
        this._didMove = !0
      }
      update() {
        if (!this.domElement || this._pauseUpdate) return;
        if (this._didMove) {
          this._didMove = !1;
          return
        }
        const t = this.events.rootPointerEvent;
        this.events.supportsTouchEvents && t.pointerType === "touch" || globalThis.document.dispatchEvent(new PointerEvent("pointermove", {
          clientX: t.clientX,
          clientY: t.clientY
        }))
      }
      tickerUpdate(t) {
        this._deltaTime += t, !(this._deltaTime < this.interactionFrequency) && (this._deltaTime = 0, this.update())
      }
    };
    const Te = new Qd;
    class Ye {
      constructor(t) {
        this.bubbles = !0, this.cancelBubble = !0, this.cancelable = !1, this.composed = !1, this.defaultPrevented = !1, this.eventPhase = Ye.prototype.NONE, this.propagationStopped = !1, this.propagationImmediatelyStopped = !1, this.layer = new q, this.page = new q, this.NONE = 0, this.CAPTURING_PHASE = 1, this.AT_TARGET = 2, this.BUBBLING_PHASE = 3, this.manager = t
      }
      get layerX() {
        return this.layer.x
      }
      get layerY() {
        return this.layer.y
      }
      get pageX() {
        return this.page.x
      }
      get pageY() {
        return this.page.y
      }
      get data() {
        return this
      }
      composedPath() {
        return this.manager && (!this.path || this.path[this.path.length - 1] !== this.target) && (this.path = this.target ? this.manager.propagationPath(this.target) : []), this.path
      }
      initEvent(t, e, s) {
        throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
      }
      initUIEvent(t, e, s, r, n) {
        throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")
      }
      preventDefault() {
        this.nativeEvent instanceof Event && this.nativeEvent.cancelable && this.nativeEvent.preventDefault(), this.defaultPrevented = !0
      }
      stopImmediatePropagation() {
        this.propagationImmediatelyStopped = !0
      }
      stopPropagation() {
        this.propagationStopped = !0
      }
    }
    class Ps extends Ye {
      constructor() {
        super(...arguments), this.client = new q, this.movement = new q, this.offset = new q, this.global = new q, this.screen = new q
      }
      get clientX() {
        return this.client.x
      }
      get clientY() {
        return this.client.y
      }
      get x() {
        return this.clientX
      }
      get y() {
        return this.clientY
      }
      get movementX() {
        return this.movement.x
      }
      get movementY() {
        return this.movement.y
      }
      get offsetX() {
        return this.offset.x
      }
      get offsetY() {
        return this.offset.y
      }
      get globalX() {
        return this.global.x
      }
      get globalY() {
        return this.global.y
      }
      get screenX() {
        return this.screen.x
      }
      get screenY() {
        return this.screen.y
      }
      getLocalPosition(t, e, s) {
        return t.worldTransform.applyInverse(s || this.global, e)
      }
      getModifierState(t) {
        return "getModifierState" in this.nativeEvent && this.nativeEvent.getModifierState(t)
      }
      initMouseEvent(t, e, s, r, n, a, o, h, l, u, c, d, f, p, m) {
        throw new Error("Method not implemented.")
      }
    }
    class Bt extends Ps {
      constructor() {
        super(...arguments), this.width = 0, this.height = 0, this.isPrimary = !1
      }
      getCoalescedEvents() {
        return this.type === "pointermove" || this.type === "mousemove" || this.type === "touchmove" ? [this] : []
      }
      getPredictedEvents() {
        throw new Error("getPredictedEvents is not supported!")
      }
    }
    class Ue extends Ps {
      constructor() {
        super(...arguments), this.DOM_DELTA_PIXEL = 0, this.DOM_DELTA_LINE = 1, this.DOM_DELTA_PAGE = 2
      }
    }
    Ue.DOM_DELTA_PIXEL = 0, Ue.DOM_DELTA_LINE = 1, Ue.DOM_DELTA_PAGE = 2;
    const Jd = 2048,
      tf = new q,
      An = new q;
    class gh {
      constructor(t) {
        this.dispatch = new Ve, this.moveOnAll = !1, this.enableGlobalMoveEvents = !0, this.mappingState = {
          trackingData: {}
        }, this.eventPool = new Map, this._allInteractiveElements = [], this._hitElements = [], this._isPointerMoveEvent = !1, this.rootTarget = t, this.hitPruneFn = this.hitPruneFn.bind(this), this.hitTestFn = this.hitTestFn.bind(this), this.mapPointerDown = this.mapPointerDown.bind(this), this.mapPointerMove = this.mapPointerMove.bind(this), this.mapPointerOut = this.mapPointerOut.bind(this), this.mapPointerOver = this.mapPointerOver.bind(this), this.mapPointerUp = this.mapPointerUp.bind(this), this.mapPointerUpOutside = this.mapPointerUpOutside.bind(this), this.mapWheel = this.mapWheel.bind(this), this.mappingTable = {}, this.addEventMapping("pointerdown", this.mapPointerDown), this.addEventMapping("pointermove", this.mapPointerMove), this.addEventMapping("pointerout", this.mapPointerOut), this.addEventMapping("pointerleave", this.mapPointerOut), this.addEventMapping("pointerover", this.mapPointerOver), this.addEventMapping("pointerup", this.mapPointerUp), this.addEventMapping("pointerupoutside", this.mapPointerUpOutside), this.addEventMapping("wheel", this.mapWheel)
      }
      addEventMapping(t, e) {
        this.mappingTable[t] || (this.mappingTable[t] = []), this.mappingTable[t].push({
          fn: e,
          priority: 0
        }), this.mappingTable[t].sort((s, r) => s.priority - r.priority)
      }
      dispatchEvent(t, e) {
        t.propagationStopped = !1, t.propagationImmediatelyStopped = !1, this.propagate(t, e), this.dispatch.emit(e || t.type, t)
      }
      mapEvent(t) {
        if (!this.rootTarget) return;
        const e = this.mappingTable[t.type];
        if (e)
          for (let s = 0, r = e.length; s < r; s++) e[s].fn(t);
        else console.warn(`[EventBoundary]: Event mapping not defined for ${t.type}`)
      }
      hitTest(t, e) {
        Te.pauseUpdate = !0;
        const s = this._isPointerMoveEvent && this.enableGlobalMoveEvents ? "hitTestMoveRecursive" : "hitTestRecursive",
          r = this[s](this.rootTarget, this.rootTarget.eventMode, tf.set(t, e), this.hitTestFn, this.hitPruneFn);
        return r && r[0]
      }
      propagate(t, e) {
        if (!t.target) return;
        const s = t.composedPath();
        t.eventPhase = t.CAPTURING_PHASE;
        for (let r = 0, n = s.length - 1; r < n; r++)
          if (t.currentTarget = s[r], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped) return;
        if (t.eventPhase = t.AT_TARGET, t.currentTarget = t.target, this.notifyTarget(t, e), !(t.propagationStopped || t.propagationImmediatelyStopped)) {
          t.eventPhase = t.BUBBLING_PHASE;
          for (let r = s.length - 2; r >= 0; r--)
            if (t.currentTarget = s[r], this.notifyTarget(t, e), t.propagationStopped || t.propagationImmediatelyStopped) return
        }
      }
      all(t, e, s = this._allInteractiveElements) {
        if (s.length === 0) return;
        t.eventPhase = t.BUBBLING_PHASE;
        const r = Array.isArray(e) ? e : [e];
        for (let n = s.length - 1; n >= 0; n--) r.forEach(a => {
          t.currentTarget = s[n], this.notifyTarget(t, a)
        })
      }
      propagationPath(t) {
        const e = [t];
        for (let s = 0; s < Jd && t !== this.rootTarget; s++) {
          if (!t.parent) throw new Error("Cannot find propagation path to disconnected target");
          e.push(t.parent), t = t.parent
        }
        return e.reverse(), e
      }
      hitTestMoveRecursive(t, e, s, r, n, a = !1) {
        let o = !1;
        if (this._interactivePrune(t)) return null;
        if ((t.eventMode === "dynamic" || e === "dynamic") && (Te.pauseUpdate = !1), t.interactiveChildren && t.children) {
          const u = t.children;
          for (let c = u.length - 1; c >= 0; c--) {
            const d = u[c],
              f = this.hitTestMoveRecursive(d, this._isInteractive(e) ? e : d.eventMode, s, r, n, a || n(t, s));
            if (f) {
              if (f.length > 0 && !f[f.length - 1].parent) continue;
              const p = t.isInteractive();
              (f.length > 0 || p) && (p && this._allInteractiveElements.push(t), f.push(t)), this._hitElements.length === 0 && (this._hitElements = f), o = !0
            }
          }
        }
        const h = this._isInteractive(e),
          l = t.isInteractive();
        return l && l && this._allInteractiveElements.push(t), a || this._hitElements.length > 0 ? null : o ? this._hitElements : h && !n(t, s) && r(t, s) ? l ? [t] : [] : null
      }
      hitTestRecursive(t, e, s, r, n) {
        if (this._interactivePrune(t) || n(t, s)) return null;
        if ((t.eventMode === "dynamic" || e === "dynamic") && (Te.pauseUpdate = !1), t.interactiveChildren && t.children) {
          const h = t.children;
          for (let l = h.length - 1; l >= 0; l--) {
            const u = h[l],
              c = this.hitTestRecursive(u, this._isInteractive(e) ? e : u.eventMode, s, r, n);
            if (c) {
              if (c.length > 0 && !c[c.length - 1].parent) continue;
              const d = t.isInteractive();
              return (c.length > 0 || d) && c.push(t), c
            }
          }
        }
        const a = this._isInteractive(e),
          o = t.isInteractive();
        return a && r(t, s) ? o ? [t] : [] : null
      }
      _isInteractive(t) {
        return t === "static" || t === "dynamic"
      }
      _interactivePrune(t) {
        return !!(!t || t.isMask || !t.visible || !t.renderable || t.eventMode === "none" || t.eventMode === "passive" && !t.interactiveChildren || t.isMask)
      }
      hitPruneFn(t, e) {
        var s;
        if (t.hitArea && (t.worldTransform.applyInverse(e, An), !t.hitArea.contains(An.x, An.y))) return !0;
        if (t._mask) {
          const r = t._mask.isMaskData ? t._mask.maskObject : t._mask;
          if (r && !((s = r.containsPoint) != null && s.call(r, e))) return !0
        }
        return !1
      }
      hitTestFn(t, e) {
        return t.eventMode === "passive" ? !1 : t.hitArea ? !0 : t.containsPoint ? t.containsPoint(e) : !1
      }
      notifyTarget(t, e) {
        var s, r;
        e = e != null ? e : t.type;
        const n = `on${e}`;
        (r = (s = t.currentTarget)[n]) == null || r.call(s, t);
        const a = t.eventPhase === t.CAPTURING_PHASE || t.eventPhase === t.AT_TARGET ? `${e}capture` : e;
        this.notifyListeners(t, a), t.eventPhase === t.AT_TARGET && this.notifyListeners(t, e)
      }
      mapPointerDown(t) {
        if (!(t instanceof Bt)) {
          console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
          return
        }
        const e = this.createPointerEvent(t);
        if (this.dispatchEvent(e, "pointerdown"), e.pointerType === "touch") this.dispatchEvent(e, "touchstart");
        else if (e.pointerType === "mouse" || e.pointerType === "pen") {
          const r = e.button === 2;
          this.dispatchEvent(e, r ? "rightdown" : "mousedown")
        }
        const s = this.trackingData(t.pointerId);
        s.pressTargetsByButton[t.button] = e.composedPath(), this.freeEvent(e)
      }
      mapPointerMove(t) {
        var e, s, r;
        if (!(t instanceof Bt)) {
          console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
          return
        }
        this._allInteractiveElements.length = 0, this._hitElements.length = 0, this._isPointerMoveEvent = !0;
        const n = this.createPointerEvent(t);
        this._isPointerMoveEvent = !1;
        const a = n.pointerType === "mouse" || n.pointerType === "pen",
          o = this.trackingData(t.pointerId),
          h = this.findMountedTarget(o.overTargets);
        if (((e = o.overTargets) == null ? void 0 : e.length) > 0 && h !== n.target) {
          const c = t.type === "mousemove" ? "mouseout" : "pointerout",
            d = this.createPointerEvent(t, c, h);
          if (this.dispatchEvent(d, "pointerout"), a && this.dispatchEvent(d, "mouseout"), !n.composedPath().includes(h)) {
            const f = this.createPointerEvent(t, "pointerleave", h);
            for (f.eventPhase = f.AT_TARGET; f.target && !n.composedPath().includes(f.target);) f.currentTarget = f.target, this.notifyTarget(f), a && this.notifyTarget(f, "mouseleave"), f.target = f.target.parent;
            this.freeEvent(f)
          }
          this.freeEvent(d)
        }
        if (h !== n.target) {
          const c = t.type === "mousemove" ? "mouseover" : "pointerover",
            d = this.clonePointerEvent(n, c);
          this.dispatchEvent(d, "pointerover"), a && this.dispatchEvent(d, "mouseover");
          let f = h == null ? void 0 : h.parent;
          for (; f && f !== this.rootTarget.parent && f !== n.target;) f = f.parent;
          if (!f || f === this.rootTarget.parent) {
            const p = this.clonePointerEvent(n, "pointerenter");
            for (p.eventPhase = p.AT_TARGET; p.target && p.target !== h && p.target !== this.rootTarget.parent;) p.currentTarget = p.target, this.notifyTarget(p), a && this.notifyTarget(p, "mouseenter"), p.target = p.target.parent;
            this.freeEvent(p)
          }
          this.freeEvent(d)
        }
        const l = [],
          u = (s = this.enableGlobalMoveEvents) != null ? s : !0;
        this.moveOnAll ? l.push("pointermove") : this.dispatchEvent(n, "pointermove"), u && l.push("globalpointermove"), n.pointerType === "touch" && (this.moveOnAll ? l.splice(1, 0, "touchmove") : this.dispatchEvent(n, "touchmove"), u && l.push("globaltouchmove")), a && (this.moveOnAll ? l.splice(1, 0, "mousemove") : this.dispatchEvent(n, "mousemove"), u && l.push("globalmousemove"), this.cursor = (r = n.target) == null ? void 0 : r.cursor), l.length > 0 && this.all(n, l), this._allInteractiveElements.length = 0, this._hitElements.length = 0, o.overTargets = n.composedPath(), this.freeEvent(n)
      }
      mapPointerOver(t) {
        var e;
        if (!(t instanceof Bt)) {
          console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
          return
        }
        const s = this.trackingData(t.pointerId),
          r = this.createPointerEvent(t),
          n = r.pointerType === "mouse" || r.pointerType === "pen";
        this.dispatchEvent(r, "pointerover"), n && this.dispatchEvent(r, "mouseover"), r.pointerType === "mouse" && (this.cursor = (e = r.target) == null ? void 0 : e.cursor);
        const a = this.clonePointerEvent(r, "pointerenter");
        for (a.eventPhase = a.AT_TARGET; a.target && a.target !== this.rootTarget.parent;) a.currentTarget = a.target, this.notifyTarget(a), n && this.notifyTarget(a, "mouseenter"), a.target = a.target.parent;
        s.overTargets = r.composedPath(), this.freeEvent(r), this.freeEvent(a)
      }
      mapPointerOut(t) {
        if (!(t instanceof Bt)) {
          console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
          return
        }
        const e = this.trackingData(t.pointerId);
        if (e.overTargets) {
          const s = t.pointerType === "mouse" || t.pointerType === "pen",
            r = this.findMountedTarget(e.overTargets),
            n = this.createPointerEvent(t, "pointerout", r);
          this.dispatchEvent(n), s && this.dispatchEvent(n, "mouseout");
          const a = this.createPointerEvent(t, "pointerleave", r);
          for (a.eventPhase = a.AT_TARGET; a.target && a.target !== this.rootTarget.parent;) a.currentTarget = a.target, this.notifyTarget(a), s && this.notifyTarget(a, "mouseleave"), a.target = a.target.parent;
          e.overTargets = null, this.freeEvent(n), this.freeEvent(a)
        }
        this.cursor = null
      }
      mapPointerUp(t) {
        if (!(t instanceof Bt)) {
          console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
          return
        }
        const e = performance.now(),
          s = this.createPointerEvent(t);
        if (this.dispatchEvent(s, "pointerup"), s.pointerType === "touch") this.dispatchEvent(s, "touchend");
        else if (s.pointerType === "mouse" || s.pointerType === "pen") {
          const o = s.button === 2;
          this.dispatchEvent(s, o ? "rightup" : "mouseup")
        }
        const r = this.trackingData(t.pointerId),
          n = this.findMountedTarget(r.pressTargetsByButton[t.button]);
        let a = n;
        if (n && !s.composedPath().includes(n)) {
          let o = n;
          for (; o && !s.composedPath().includes(o);) {
            if (s.currentTarget = o, this.notifyTarget(s, "pointerupoutside"), s.pointerType === "touch") this.notifyTarget(s, "touchendoutside");
            else if (s.pointerType === "mouse" || s.pointerType === "pen") {
              const h = s.button === 2;
              this.notifyTarget(s, h ? "rightupoutside" : "mouseupoutside")
            }
            o = o.parent
          }
          delete r.pressTargetsByButton[t.button], a = o
        }
        if (a) {
          const o = this.clonePointerEvent(s, "click");
          o.target = a, o.path = null, r.clicksByButton[t.button] || (r.clicksByButton[t.button] = {
            clickCount: 0,
            target: o.target,
            timeStamp: e
          });
          const h = r.clicksByButton[t.button];
          if (h.target === o.target && e - h.timeStamp < 200 ? ++h.clickCount : h.clickCount = 1, h.target = o.target, h.timeStamp = e, o.detail = h.clickCount, o.pointerType === "mouse") {
            const l = o.button === 2;
            this.dispatchEvent(o, l ? "rightclick" : "click")
          } else o.pointerType === "touch" && this.dispatchEvent(o, "tap");
          this.dispatchEvent(o, "pointertap"), this.freeEvent(o)
        }
        this.freeEvent(s)
      }
      mapPointerUpOutside(t) {
        if (!(t instanceof Bt)) {
          console.warn("EventBoundary cannot map a non-pointer event as a pointer event");
          return
        }
        const e = this.trackingData(t.pointerId),
          s = this.findMountedTarget(e.pressTargetsByButton[t.button]),
          r = this.createPointerEvent(t);
        if (s) {
          let n = s;
          for (; n;) r.currentTarget = n, this.notifyTarget(r, "pointerupoutside"), r.pointerType === "touch" ? this.notifyTarget(r, "touchendoutside") : (r.pointerType === "mouse" || r.pointerType === "pen") && this.notifyTarget(r, r.button === 2 ? "rightupoutside" : "mouseupoutside"), n = n.parent;
          delete e.pressTargetsByButton[t.button]
        }
        this.freeEvent(r)
      }
      mapWheel(t) {
        if (!(t instanceof Ue)) {
          console.warn("EventBoundary cannot map a non-wheel event as a wheel event");
          return
        }
        const e = this.createWheelEvent(t);
        this.dispatchEvent(e), this.freeEvent(e)
      }
      findMountedTarget(t) {
        if (!t) return null;
        let e = t[0];
        for (let s = 1; s < t.length && t[s].parent === e; s++) e = t[s];
        return e
      }
      createPointerEvent(t, e, s) {
        var r;
        const n = this.allocateEvent(Bt);
        return this.copyPointerData(t, n), this.copyMouseData(t, n), this.copyData(t, n), n.nativeEvent = t.nativeEvent, n.originalEvent = t, n.target = (r = s != null ? s : this.hitTest(n.global.x, n.global.y)) != null ? r : this._hitElements[0], typeof e == "string" && (n.type = e), n
      }
      createWheelEvent(t) {
        const e = this.allocateEvent(Ue);
        return this.copyWheelData(t, e), this.copyMouseData(t, e), this.copyData(t, e), e.nativeEvent = t.nativeEvent, e.originalEvent = t, e.target = this.hitTest(e.global.x, e.global.y), e
      }
      clonePointerEvent(t, e) {
        const s = this.allocateEvent(Bt);
        return s.nativeEvent = t.nativeEvent, s.originalEvent = t.originalEvent, this.copyPointerData(t, s), this.copyMouseData(t, s), this.copyData(t, s), s.target = t.target, s.path = t.composedPath().slice(), s.type = e != null ? e : s.type, s
      }
      copyWheelData(t, e) {
        e.deltaMode = t.deltaMode, e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ
      }
      copyPointerData(t, e) {
        t instanceof Bt && e instanceof Bt && (e.pointerId = t.pointerId, e.width = t.width, e.height = t.height, e.isPrimary = t.isPrimary, e.pointerType = t.pointerType, e.pressure = t.pressure, e.tangentialPressure = t.tangentialPressure, e.tiltX = t.tiltX, e.tiltY = t.tiltY, e.twist = t.twist)
      }
      copyMouseData(t, e) {
        t instanceof Ps && e instanceof Ps && (e.altKey = t.altKey, e.button = t.button, e.buttons = t.buttons, e.client.copyFrom(t.client), e.ctrlKey = t.ctrlKey, e.metaKey = t.metaKey, e.movement.copyFrom(t.movement), e.screen.copyFrom(t.screen), e.shiftKey = t.shiftKey, e.global.copyFrom(t.global))
      }
      copyData(t, e) {
        e.isTrusted = t.isTrusted, e.srcElement = t.srcElement, e.timeStamp = performance.now(), e.type = t.type, e.detail = t.detail, e.view = t.view, e.which = t.which, e.layer.copyFrom(t.layer), e.page.copyFrom(t.page)
      }
      trackingData(t) {
        return this.mappingState.trackingData[t] || (this.mappingState.trackingData[t] = {
          pressTargetsByButton: {},
          clicksByButton: {},
          overTarget: null
        }), this.mappingState.trackingData[t]
      }
      allocateEvent(t) {
        this.eventPool.has(t) || this.eventPool.set(t, []);
        const e = this.eventPool.get(t).pop() || new t(this);
        return e.eventPhase = e.NONE, e.currentTarget = null, e.path = null, e.target = null, e
      }
      freeEvent(t) {
        if (t.manager !== this) throw new Error("It is illegal to free an event not managed by this EventBoundary!");
        const e = t.constructor;
        this.eventPool.has(e) || this.eventPool.set(e, []), this.eventPool.get(e).push(t)
      }
      notifyListeners(t, e) {
        const s = t.currentTarget._events[e];
        if (s && t.currentTarget.isInteractive())
          if ("fn" in s) s.once && t.currentTarget.removeListener(e, s.fn, void 0, !0), s.fn.call(s.context, t);
          else
            for (let r = 0, n = s.length; r < n && !t.propagationImmediatelyStopped; r++) s[r].once && t.currentTarget.removeListener(e, s[r].fn, void 0, !0), s[r].fn.call(s[r].context, t)
      }
    }
    var ef = Object.defineProperty,
      _h = Object.getOwnPropertySymbols,
      sf = Object.prototype.hasOwnProperty,
      rf = Object.prototype.propertyIsEnumerable,
      vh = (i, t, e) => t in i ? ef(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      nf = (i, t) => {
        for (var e in t || (t = {})) sf.call(t, e) && vh(i, e, t[e]);
        if (_h)
          for (var e of _h(t)) rf.call(t, e) && vh(i, e, t[e]);
        return i
      };
    const af = 1,
      of = {
        touchstart: "pointerdown",
        touchend: "pointerup",
        touchendoutside: "pointerupoutside",
        touchmove: "pointermove",
        touchcancel: "pointercancel"
      },
      wn = class sa {
        constructor(t) {
          this.supportsTouchEvents = "ontouchstart" in globalThis, this.supportsPointerEvents = !!globalThis.PointerEvent, this.domElement = null, this.resolution = 1, this.renderer = t, this.rootBoundary = new gh(null), Te.init(this), this.autoPreventDefault = !0, this.eventsAdded = !1, this.rootPointerEvent = new Bt(null), this.rootWheelEvent = new Ue(null), this.cursorStyles = {
            default: "inherit",
            pointer: "pointer"
          }, this.features = new Proxy(nf({}, sa.defaultEventFeatures), {
            set: (e, s, r) => (s === "globalMove" && (this.rootBoundary.enableGlobalMoveEvents = r), e[s] = r, !0)
          }), this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onPointerOverOut = this.onPointerOverOut.bind(this), this.onWheel = this.onWheel.bind(this)
        }
        static get defaultEventMode() {
          return this._defaultEventMode
        }
        init(t) {
          var e, s;
          const {
            view: r,
            resolution: n
          } = this.renderer;
          this.setTargetElement(r), this.resolution = n, sa._defaultEventMode = (e = t.eventMode) != null ? e : "auto", Object.assign(this.features, (s = t.eventFeatures) != null ? s : {}), this.rootBoundary.enableGlobalMoveEvents = this.features.globalMove
        }
        resolutionChange(t) {
          this.resolution = t
        }
        destroy() {
          this.setTargetElement(null), this.renderer = null
        }
        setCursor(t) {
          t = t || "default";
          let e = !0;
          if (globalThis.OffscreenCanvas && this.domElement instanceof OffscreenCanvas && (e = !1), this.currentCursor === t) return;
          this.currentCursor = t;
          const s = this.cursorStyles[t];
          if (s) switch (typeof s) {
            case "string":
              e && (this.domElement.style.cursor = s);
              break;
            case "function":
              s(t);
              break;
            case "object":
              e && Object.assign(this.domElement.style, s);
              break
          } else e && typeof t == "string" && !Object.prototype.hasOwnProperty.call(this.cursorStyles, t) && (this.domElement.style.cursor = t)
        }
        get pointer() {
          return this.rootPointerEvent
        }
        onPointerDown(t) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          const e = this.normalizeToPointerData(t);
          this.autoPreventDefault && e[0].isNormalized && (t.cancelable || !("cancelable" in t)) && t.preventDefault();
          for (let s = 0, r = e.length; s < r; s++) {
            const n = e[s],
              a = this.bootstrapEvent(this.rootPointerEvent, n);
            this.rootBoundary.mapEvent(a)
          }
          this.setCursor(this.rootBoundary.cursor)
        }
        onPointerMove(t) {
          if (!this.features.move) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, Te.pointerMoved();
          const e = this.normalizeToPointerData(t);
          for (let s = 0, r = e.length; s < r; s++) {
            const n = this.bootstrapEvent(this.rootPointerEvent, e[s]);
            this.rootBoundary.mapEvent(n)
          }
          this.setCursor(this.rootBoundary.cursor)
        }
        onPointerUp(t) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          let e = t.target;
          t.composedPath && t.composedPath().length > 0 && (e = t.composedPath()[0]);
          const s = e !== this.domElement ? "outside" : "",
            r = this.normalizeToPointerData(t);
          for (let n = 0, a = r.length; n < a; n++) {
            const o = this.bootstrapEvent(this.rootPointerEvent, r[n]);
            o.type += s, this.rootBoundary.mapEvent(o)
          }
          this.setCursor(this.rootBoundary.cursor)
        }
        onPointerOverOut(t) {
          if (!this.features.click) return;
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered;
          const e = this.normalizeToPointerData(t);
          for (let s = 0, r = e.length; s < r; s++) {
            const n = this.bootstrapEvent(this.rootPointerEvent, e[s]);
            this.rootBoundary.mapEvent(n)
          }
          this.setCursor(this.rootBoundary.cursor)
        }
        onWheel(t) {
          if (!this.features.wheel) return;
          const e = this.normalizeWheelEvent(t);
          this.rootBoundary.rootTarget = this.renderer.lastObjectRendered, this.rootBoundary.mapEvent(e)
        }
        setTargetElement(t) {
          this.removeEvents(), this.domElement = t, Te.domElement = t, this.addEvents()
        }
        addEvents() {
          if (this.eventsAdded || !this.domElement) return;
          Te.addTickerListener();
          const t = this.domElement.style;
          t && (globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "none", t.msTouchAction = "none") : this.supportsPointerEvents && (t.touchAction = "none")), this.supportsPointerEvents ? (globalThis.document.addEventListener("pointermove", this.onPointerMove, !0), this.domElement.addEventListener("pointerdown", this.onPointerDown, !0), this.domElement.addEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.addEventListener("pointerover", this.onPointerOverOut, !0), globalThis.addEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.addEventListener("mousemove", this.onPointerMove, !0), this.domElement.addEventListener("mousedown", this.onPointerDown, !0), this.domElement.addEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.addEventListener("mouseover", this.onPointerOverOut, !0), globalThis.addEventListener("mouseup", this.onPointerUp, !0), this.supportsTouchEvents && (this.domElement.addEventListener("touchstart", this.onPointerDown, !0), this.domElement.addEventListener("touchend", this.onPointerUp, !0), this.domElement.addEventListener("touchmove", this.onPointerMove, !0))), this.domElement.addEventListener("wheel", this.onWheel, {
            passive: !0,
            capture: !0
          }), this.eventsAdded = !0
        }
        removeEvents() {
          if (!this.eventsAdded || !this.domElement) return;
          Te.removeTickerListener();
          const t = this.domElement.style;
          globalThis.navigator.msPointerEnabled ? (t.msContentZooming = "", t.msTouchAction = "") : this.supportsPointerEvents && (t.touchAction = ""), this.supportsPointerEvents ? (globalThis.document.removeEventListener("pointermove", this.onPointerMove, !0), this.domElement.removeEventListener("pointerdown", this.onPointerDown, !0), this.domElement.removeEventListener("pointerleave", this.onPointerOverOut, !0), this.domElement.removeEventListener("pointerover", this.onPointerOverOut, !0), globalThis.removeEventListener("pointerup", this.onPointerUp, !0)) : (globalThis.document.removeEventListener("mousemove", this.onPointerMove, !0), this.domElement.removeEventListener("mousedown", this.onPointerDown, !0), this.domElement.removeEventListener("mouseout", this.onPointerOverOut, !0), this.domElement.removeEventListener("mouseover", this.onPointerOverOut, !0), globalThis.removeEventListener("mouseup", this.onPointerUp, !0), this.supportsTouchEvents && (this.domElement.removeEventListener("touchstart", this.onPointerDown, !0), this.domElement.removeEventListener("touchend", this.onPointerUp, !0), this.domElement.removeEventListener("touchmove", this.onPointerMove, !0))), this.domElement.removeEventListener("wheel", this.onWheel, !0), this.domElement = null, this.eventsAdded = !1
        }
        mapPositionToPoint(t, e, s) {
          const r = this.domElement.isConnected ? this.domElement.getBoundingClientRect() : {
              x: 0,
              y: 0,
              width: this.domElement.width,
              height: this.domElement.height,
              left: 0,
              top: 0
            },
            n = 1 / this.resolution;
          t.x = (e - r.left) * (this.domElement.width / r.width) * n, t.y = (s - r.top) * (this.domElement.height / r.height) * n
        }
        normalizeToPointerData(t) {
          const e = [];
          if (this.supportsTouchEvents && t instanceof TouchEvent)
            for (let s = 0, r = t.changedTouches.length; s < r; s++) {
              const n = t.changedTouches[s];
              typeof n.button == "undefined" && (n.button = 0), typeof n.buttons == "undefined" && (n.buttons = 1), typeof n.isPrimary == "undefined" && (n.isPrimary = t.touches.length === 1 && t.type === "touchstart"), typeof n.width == "undefined" && (n.width = n.radiusX || 1), typeof n.height == "undefined" && (n.height = n.radiusY || 1), typeof n.tiltX == "undefined" && (n.tiltX = 0), typeof n.tiltY == "undefined" && (n.tiltY = 0), typeof n.pointerType == "undefined" && (n.pointerType = "touch"), typeof n.pointerId == "undefined" && (n.pointerId = n.identifier || 0), typeof n.pressure == "undefined" && (n.pressure = n.force || .5), typeof n.twist == "undefined" && (n.twist = 0), typeof n.tangentialPressure == "undefined" && (n.tangentialPressure = 0), typeof n.layerX == "undefined" && (n.layerX = n.offsetX = n.clientX), typeof n.layerY == "undefined" && (n.layerY = n.offsetY = n.clientY), n.isNormalized = !0, n.type = t.type, e.push(n)
            } else if (!globalThis.MouseEvent || t instanceof MouseEvent && (!this.supportsPointerEvents || !(t instanceof globalThis.PointerEvent))) {
              const s = t;
              typeof s.isPrimary == "undefined" && (s.isPrimary = !0), typeof s.width == "undefined" && (s.width = 1), typeof s.height == "undefined" && (s.height = 1), typeof s.tiltX == "undefined" && (s.tiltX = 0), typeof s.tiltY == "undefined" && (s.tiltY = 0), typeof s.pointerType == "undefined" && (s.pointerType = "mouse"), typeof s.pointerId == "undefined" && (s.pointerId = af), typeof s.pressure == "undefined" && (s.pressure = .5), typeof s.twist == "undefined" && (s.twist = 0), typeof s.tangentialPressure == "undefined" && (s.tangentialPressure = 0), s.isNormalized = !0, e.push(s)
            } else e.push(t);
          return e
        }
        normalizeWheelEvent(t) {
          const e = this.rootWheelEvent;
          return this.transferMouseData(e, t), e.deltaX = t.deltaX, e.deltaY = t.deltaY, e.deltaZ = t.deltaZ, e.deltaMode = t.deltaMode, this.mapPositionToPoint(e.screen, t.clientX, t.clientY), e.global.copyFrom(e.screen), e.offset.copyFrom(e.screen), e.nativeEvent = t, e.type = t.type, e
        }
        bootstrapEvent(t, e) {
          return t.originalEvent = null, t.nativeEvent = e, t.pointerId = e.pointerId, t.width = e.width, t.height = e.height, t.isPrimary = e.isPrimary, t.pointerType = e.pointerType, t.pressure = e.pressure, t.tangentialPressure = e.tangentialPressure, t.tiltX = e.tiltX, t.tiltY = e.tiltY, t.twist = e.twist, this.transferMouseData(t, e), this.mapPositionToPoint(t.screen, e.clientX, e.clientY), t.global.copyFrom(t.screen), t.offset.copyFrom(t.screen), t.isTrusted = e.isTrusted, t.type === "pointerleave" && (t.type = "pointerout"), t.type.startsWith("mouse") && (t.type = t.type.replace("mouse", "pointer")), t.type.startsWith("touch") && (t.type = of [t.type] || t.type), t
        }
        transferMouseData(t, e) {
          t.isTrusted = e.isTrusted, t.srcElement = e.srcElement, t.timeStamp = performance.now(), t.type = e.type, t.altKey = e.altKey, t.button = e.button, t.buttons = e.buttons, t.client.x = e.clientX, t.client.y = e.clientY, t.ctrlKey = e.ctrlKey, t.metaKey = e.metaKey, t.movement.x = e.movementX, t.movement.y = e.movementY, t.page.x = e.pageX, t.page.y = e.pageY, t.relatedTarget = null, t.shiftKey = e.shiftKey
        }
      };
    wn.extension = {
      name: "events",
      type: [R.RendererSystem, R.CanvasRendererSystem]
    }, wn.defaultEventFeatures = {
      move: !0,
      globalMove: !0,
      click: !0,
      wheel: !0
    };
    let Bi = wn;
    L.add(Bi);
  
    function yh(i) {
      return i === "dynamic" || i === "static"
    }
    const xh = {
      onclick: null,
      onmousedown: null,
      onmouseenter: null,
      onmouseleave: null,
      onmousemove: null,
      onglobalmousemove: null,
      onmouseout: null,
      onmouseover: null,
      onmouseup: null,
      onmouseupoutside: null,
      onpointercancel: null,
      onpointerdown: null,
      onpointerenter: null,
      onpointerleave: null,
      onpointermove: null,
      onglobalpointermove: null,
      onpointerout: null,
      onpointerover: null,
      onpointertap: null,
      onpointerup: null,
      onpointerupoutside: null,
      onrightclick: null,
      onrightdown: null,
      onrightup: null,
      onrightupoutside: null,
      ontap: null,
      ontouchcancel: null,
      ontouchend: null,
      ontouchendoutside: null,
      ontouchmove: null,
      onglobaltouchmove: null,
      ontouchstart: null,
      onwheel: null,
      _internalInteractive: void 0,
      get interactive() {
        var i;
        return (i = this._internalInteractive) != null ? i : yh(Bi.defaultEventMode)
      },
      set interactive(i) {
        this._internalInteractive = i, this.eventMode = i ? "static" : "auto"
      },
      _internalEventMode: void 0,
      get eventMode() {
        var i;
        return (i = this._internalEventMode) != null ? i : Bi.defaultEventMode
      },
      set eventMode(i) {
        this._internalInteractive = yh(i), this._internalEventMode = i
      },
      isInteractive() {
        return this.eventMode === "static" || this.eventMode === "dynamic"
      },
      interactiveChildren: !0,
      hitArea: null,
      addEventListener(i, t, e) {
        const s = typeof e == "boolean" && e || typeof e == "object" && e.capture,
          r = typeof t == "function" ? void 0 : t;
        i = s ? `${i}capture` : i, t = typeof t == "function" ? t : t.handleEvent, this.on(i, t, r)
      },
      removeEventListener(i, t, e) {
        const s = typeof e == "boolean" && e || typeof e == "object" && e.capture,
          r = typeof t == "function" ? void 0 : t;
        i = s ? `${i}capture` : i, t = typeof t == "function" ? t : t.handleEvent, this.off(i, t, r)
      },
      dispatchEvent(i) {
        if (!(i instanceof Ye)) throw new Error("DisplayObject cannot propagate events outside of the Federated Events API");
        return i.defaultPrevented = !1, i.path = null, i.target = this, i.manager.dispatchEvent(i), !i.defaultPrevented
      }
    };
    st.mixin(xh);
    const bh = {
      accessible: !1,
      accessibleTitle: null,
      accessibleHint: null,
      tabIndex: 0,
      _accessibleActive: !1,
      _accessibleDiv: null,
      accessibleType: "button",
      accessiblePointerEvents: "auto",
      accessibleChildren: !0,
      renderId: -1
    };
    st.mixin(bh);
    const hf = 9,
      Fi = 100,
      lf = 0,
      uf = 0,
      Th = 2,
      Eh = 1,
      cf = -1e3,
      df = -1e3,
      ff = 2;
    class Sn {
      constructor(t) {
        this.debug = !1, this._isActive = !1, this._isMobileAccessibility = !1, this.pool = [], this.renderId = 0, this.children = [], this.androidUpdateCount = 0, this.androidUpdateFrequency = 500, this._hookDiv = null, ($t.tablet || $t.phone) && this.createTouchHook();
        const e = document.createElement("div");
        e.style.width = `${Fi}px`, e.style.height = `${Fi}px`, e.style.position = "absolute", e.style.top = `${lf}px`, e.style.left = `${uf}px`, e.style.zIndex = Th.toString(), this.div = e, this.renderer = t, this._onKeyDown = this._onKeyDown.bind(this), this._onMouseMove = this._onMouseMove.bind(this), globalThis.addEventListener("keydown", this._onKeyDown, !1)
      }
      get isActive() {
        return this._isActive
      }
      get isMobileAccessibility() {
        return this._isMobileAccessibility
      }
      createTouchHook() {
        const t = document.createElement("button");
        t.style.width = `${Eh}px`, t.style.height = `${Eh}px`, t.style.position = "absolute", t.style.top = `${cf}px`, t.style.left = `${df}px`, t.style.zIndex = ff.toString(), t.style.backgroundColor = "#FF0000", t.title = "select to enable accessibility for this content", t.addEventListener("focus", () => {
          this._isMobileAccessibility = !0, this.activate(), this.destroyTouchHook()
        }), document.body.appendChild(t), this._hookDiv = t
      }
      destroyTouchHook() {
        this._hookDiv && (document.body.removeChild(this._hookDiv), this._hookDiv = null)
      }
      activate() {
        var t;
        this._isActive || (this._isActive = !0, globalThis.document.addEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown, !1), this.renderer.on("postrender", this.update, this), (t = this.renderer.view.parentNode) == null || t.appendChild(this.div))
      }
      deactivate() {
        var t;
        !this._isActive || this._isMobileAccessibility || (this._isActive = !1, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.addEventListener("keydown", this._onKeyDown, !1), this.renderer.off("postrender", this.update), (t = this.div.parentNode) == null || t.removeChild(this.div))
      }
      updateAccessibleObjects(t) {
        if (!t.visible || !t.accessibleChildren) return;
        t.accessible && t.isInteractive() && (t._accessibleActive || this.addChild(t), t.renderId = this.renderId);
        const e = t.children;
        if (e)
          for (let s = 0; s < e.length; s++) this.updateAccessibleObjects(e[s])
      }
      update() {
        const t = performance.now();
        if ($t.android.device && t < this.androidUpdateCount || (this.androidUpdateCount = t + this.androidUpdateFrequency, !this.renderer.renderingToScreen)) return;
        this.renderer.lastObjectRendered && this.updateAccessibleObjects(this.renderer.lastObjectRendered);
        const {
          x: e,
          y: s,
          width: r,
          height: n
        } = this.renderer.view.getBoundingClientRect(), {
          width: a,
          height: o,
          resolution: h
        } = this.renderer, l = r / a * h, u = n / o * h;
        let c = this.div;
        c.style.left = `${e}px`, c.style.top = `${s}px`, c.style.width = `${a}px`, c.style.height = `${o}px`;
        for (let d = 0; d < this.children.length; d++) {
          const f = this.children[d];
          if (f.renderId !== this.renderId) f._accessibleActive = !1, Ce(this.children, d, 1), this.div.removeChild(f._accessibleDiv), this.pool.push(f._accessibleDiv), f._accessibleDiv = null, d--;
          else {
            c = f._accessibleDiv;
            let p = f.hitArea;
            const m = f.worldTransform;
            f.hitArea ? (c.style.left = `${(m.tx+p.x*m.a)*l}px`, c.style.top = `${(m.ty+p.y*m.d)*u}px`, c.style.width = `${p.width*m.a*l}px`, c.style.height = `${p.height*m.d*u}px`) : (p = f.getBounds(), this.capHitArea(p), c.style.left = `${p.x*l}px`, c.style.top = `${p.y*u}px`, c.style.width = `${p.width*l}px`, c.style.height = `${p.height*u}px`, c.title !== f.accessibleTitle && f.accessibleTitle !== null && (c.title = f.accessibleTitle), c.getAttribute("aria-label") !== f.accessibleHint && f.accessibleHint !== null && c.setAttribute("aria-label", f.accessibleHint)), (f.accessibleTitle !== c.title || f.tabIndex !== c.tabIndex) && (c.title = f.accessibleTitle, c.tabIndex = f.tabIndex, this.debug && this.updateDebugHTML(c))
          }
        }
        this.renderId++
      }
      updateDebugHTML(t) {
        t.innerHTML = `type: ${t.type}</br> title : ${t.title}</br> tabIndex: ${t.tabIndex}`
      }
      capHitArea(t) {
        t.x < 0 && (t.width += t.x, t.x = 0), t.y < 0 && (t.height += t.y, t.y = 0);
        const {
          width: e,
          height: s
        } = this.renderer;
        t.x + t.width > e && (t.width = e - t.x), t.y + t.height > s && (t.height = s - t.y)
      }
      addChild(t) {
        let e = this.pool.pop();
        e || (e = document.createElement("button"), e.style.width = `${Fi}px`, e.style.height = `${Fi}px`, e.style.backgroundColor = this.debug ? "rgba(255,255,255,0.5)" : "transparent", e.style.position = "absolute", e.style.zIndex = Th.toString(), e.style.borderStyle = "none", navigator.userAgent.toLowerCase().includes("chrome") ? e.setAttribute("aria-live", "off") : e.setAttribute("aria-live", "polite"), navigator.userAgent.match(/rv:.*Gecko\//) ? e.setAttribute("aria-relevant", "additions") : e.setAttribute("aria-relevant", "text"), e.addEventListener("click", this._onClick.bind(this)), e.addEventListener("focus", this._onFocus.bind(this)), e.addEventListener("focusout", this._onFocusOut.bind(this))), e.style.pointerEvents = t.accessiblePointerEvents, e.type = t.accessibleType, t.accessibleTitle && t.accessibleTitle !== null ? e.title = t.accessibleTitle : (!t.accessibleHint || t.accessibleHint === null) && (e.title = `displayObject ${t.tabIndex}`), t.accessibleHint && t.accessibleHint !== null && e.setAttribute("aria-label", t.accessibleHint), this.debug && this.updateDebugHTML(e), t._accessibleActive = !0, t._accessibleDiv = e, e.displayObject = t, this.children.push(t), this.div.appendChild(t._accessibleDiv), t._accessibleDiv.tabIndex = t.tabIndex
      }
      _dispatchEvent(t, e) {
        const {
          displayObject: s
        } = t.target, r = this.renderer.events.rootBoundary, n = Object.assign(new Ye(r), {
          target: s
        });
        r.rootTarget = this.renderer.lastObjectRendered, e.forEach(a => r.dispatchEvent(n, a))
      }
      _onClick(t) {
        this._dispatchEvent(t, ["click", "pointertap", "tap"])
      }
      _onFocus(t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "assertive"), this._dispatchEvent(t, ["mouseover"])
      }
      _onFocusOut(t) {
        t.target.getAttribute("aria-live") || t.target.setAttribute("aria-live", "polite"), this._dispatchEvent(t, ["mouseout"])
      }
      _onKeyDown(t) {
        t.keyCode === hf && this.activate()
      }
      _onMouseMove(t) {
        t.movementX === 0 && t.movementY === 0 || this.deactivate()
      }
      destroy() {
        this.destroyTouchHook(), this.div = null, globalThis.document.removeEventListener("mousemove", this._onMouseMove, !0), globalThis.removeEventListener("keydown", this._onKeyDown), this.pool = null, this.children = null, this.renderer = null
      }
    }
    Sn.extension = {
      name: "accessibility",
      type: [R.RendererPlugin, R.CanvasRendererPlugin]
    }, L.add(Sn);
    const Ah = class ia {
      constructor(t) {
        this.stage = new It, t = Object.assign({
          forceCanvas: !1
        }, t), this.renderer = sh(t), ia._plugins.forEach(e => {
          e.init.call(this, t)
        })
      }
      render() {
        this.renderer.render(this.stage)
      }
      get view() {
        var t;
        return (t = this.renderer) == null ? void 0 : t.view
      }
      get screen() {
        var t;
        return (t = this.renderer) == null ? void 0 : t.screen
      }
      destroy(t, e) {
        const s = ia._plugins.slice(0);
        s.reverse(), s.forEach(r => {
          r.destroy.call(this)
        }), this.stage.destroy(e), this.stage = null, this.renderer.destroy(t), this.renderer = null
      }
    };
    Ah._plugins = [];
    let wh = Ah;
    L.handleByList(R.Application, wh._plugins);
    class In {
      static init(t) {
        Object.defineProperty(this, "resizeTo", {
          set(e) {
            globalThis.removeEventListener("resize", this.queueResize), this._resizeTo = e, e && (globalThis.addEventListener("resize", this.queueResize), this.resize())
          },
          get() {
            return this._resizeTo
          }
        }), this.queueResize = () => {
          this._resizeTo && (this.cancelResize(), this._resizeId = requestAnimationFrame(() => this.resize()))
        }, this.cancelResize = () => {
          this._resizeId && (cancelAnimationFrame(this._resizeId), this._resizeId = null)
        }, this.resize = () => {
          if (!this._resizeTo) return;
          this.cancelResize();
          let e, s;
          if (this._resizeTo === globalThis.window) e = globalThis.innerWidth, s = globalThis.innerHeight;
          else {
            const {
              clientWidth: r,
              clientHeight: n
            } = this._resizeTo;
            e = r, s = n
          }
          this.renderer.resize(e, s), this.render()
        }, this._resizeId = null, this._resizeTo = null, this.resizeTo = t.resizeTo || null
      }
      static destroy() {
        globalThis.removeEventListener("resize", this.queueResize), this.cancelResize(), this.cancelResize = null, this.queueResize = null, this.resizeTo = null, this.resize = null
      }
    }
    In.extension = R.Application, L.add(In);
    const Sh = {
      loader: R.LoadParser,
      resolver: R.ResolveParser,
      cache: R.CacheParser,
      detection: R.DetectionParser
    };
    L.handle(R.Asset, i => {
      const t = i.ref;
      Object.entries(Sh).filter(([e]) => !!t[e]).forEach(([e, s]) => {
        var r;
        return L.add(Object.assign(t[e], {
          extension: (r = t[e].extension) != null ? r : s
        }))
      })
    }, i => {
      const t = i.ref;
      Object.keys(Sh).filter(e => !!t[e]).forEach(e => L.remove(t[e]))
    });
    class pf {
      constructor(t, e = !1) {
        this._loader = t, this._assetList = [], this._isLoading = !1, this._maxConcurrent = 1, this.verbose = e
      }
      add(t) {
        t.forEach(e => {
          this._assetList.push(e)
        }), this.verbose && console.log("[BackgroundLoader] assets: ", this._assetList), this._isActive && !this._isLoading && this._next()
      }
      async _next() {
        if (this._assetList.length && this._isActive) {
          this._isLoading = !0;
          const t = [],
            e = Math.min(this._assetList.length, this._maxConcurrent);
          for (let s = 0; s < e; s++) t.push(this._assetList.pop());
          await this._loader.load(t), this._isLoading = !1, this._next()
        }
      }
      get active() {
        return this._isActive
      }
      set active(t) {
        this._isActive !== t && (this._isActive = t, t && !this._isLoading && this._next())
      }
    }
  
    function ke(i, t) {
      if (Array.isArray(t)) {
        for (const e of t)
          if (i.startsWith(`data:${e}`)) return !0;
        return !1
      }
      return i.startsWith(`data:${t}`)
    }
  
    function ce(i, t) {
      const e = i.split("?")[0],
        s = vt.extname(e).toLowerCase();
      return Array.isArray(t) ? t.includes(s) : s === t
    }
    const Ft = (i, t, e = !1) => (Array.isArray(i) || (i = [i]), t ? i.map(s => typeof s == "string" || e ? t(s) : s) : i),
      Ni = (i, t) => {
        const e = t.split("?")[1];
        return e && (i += `?${e}`), i
      };
  
    function Ih(i, t, e, s, r) {
      const n = t[e];
      for (let a = 0; a < n.length; a++) {
        const o = n[a];
        e < t.length - 1 ? Ih(i.replace(s[e], o), t, e + 1, s, r) : r.push(i.replace(s[e], o))
      }
    }
  
    function Rh(i) {
      const t = /\{(.*?)\}/g,
        e = i.match(t),
        s = [];
      if (e) {
        const r = [];
        e.forEach(n => {
          const a = n.substring(1, n.length - 1).split(",");
          r.push(a)
        }), Ih(i, r, 0, e, s)
      } else s.push(i);
      return s
    }
    const Ms = i => !Array.isArray(i);
    let mf = class {
      constructor() {
        this._parsers = [], this._cache = new Map, this._cacheMap = new Map
      }
      reset() {
        this._cacheMap.clear(), this._cache.clear()
      }
      has(t) {
        return this._cache.has(t)
      }
      get(t) {
        return this._cache.get(t)
      }
      set(t, e) {
        const s = Ft(t);
        let r;
        for (let o = 0; o < this.parsers.length; o++) {
          const h = this.parsers[o];
          if (h.test(e)) {
            r = h.getCacheableAssets(s, e);
            break
          }
        }
        r || (r = {}, s.forEach(o => {
          r[o] = e
        }));
        const n = Object.keys(r),
          a = {
            cacheKeys: n,
            keys: s
          };
        if (s.forEach(o => {
            this._cacheMap.set(o, a)
          }), n.forEach(o => {
            this._cache.has(o) && this._cache.get(o), this._cache.set(o, r[o])
          }), e instanceof B) {
          const o = e;
          s.forEach(h => {
            o.baseTexture !== B.EMPTY.baseTexture && X.addToCache(o.baseTexture, h), B.addToCache(o, h)
          })
        }
      }
      remove(t) {
        if (!this._cacheMap.has(t)) return;
        const e = this._cacheMap.get(t);
        e.cacheKeys.forEach(s => {
          this._cache.delete(s)
        }), e.keys.forEach(s => {
          this._cacheMap.delete(s)
        })
      }
      get parsers() {
        return this._parsers
      }
    };
    const Ee = new mf;
    var gf = Object.defineProperty,
      _f = Object.defineProperties,
      vf = Object.getOwnPropertyDescriptors,
      Ch = Object.getOwnPropertySymbols,
      yf = Object.prototype.hasOwnProperty,
      xf = Object.prototype.propertyIsEnumerable,
      Ph = (i, t, e) => t in i ? gf(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      bf = (i, t) => {
        for (var e in t || (t = {})) yf.call(t, e) && Ph(i, e, t[e]);
        if (Ch)
          for (var e of Ch(t)) xf.call(t, e) && Ph(i, e, t[e]);
        return i
      },
      Tf = (i, t) => _f(i, vf(t));
    class Ef {
      constructor() {
        this._parsers = [], this._parsersValidated = !1, this.parsers = new Proxy(this._parsers, {
          set: (t, e, s) => (this._parsersValidated = !1, t[e] = s, !0)
        }), this.promiseCache = {}
      }
      reset() {
        this._parsersValidated = !1, this.promiseCache = {}
      }
      _getLoadPromiseAndParser(t, e) {
        const s = {
          promise: null,
          parser: null
        };
        return s.promise = (async () => {
          var r, n;
          let a = null,
            o = null;
          if (e.loadParser && (o = this._parserHash[e.loadParser]), !o) {
            for (let h = 0; h < this.parsers.length; h++) {
              const l = this.parsers[h];
              if (l.load && (r = l.test) != null && r.call(l, t, e, this)) {
                o = l;
                break
              }
            }
            if (!o) return null
          }
          a = await o.load(t, e, this), s.parser = o;
          for (let h = 0; h < this.parsers.length; h++) {
            const l = this.parsers[h];
            l.parse && l.parse && await ((n = l.testParse) == null ? void 0 : n.call(l, a, e, this)) && (a = await l.parse(a, e, this) || a, s.parser = l)
          }
          return a
        })(), s
      }
      async load(t, e) {
        this._parsersValidated || this._validateParsers();
        let s = 0;
        const r = {},
          n = Ms(t),
          a = Ft(t, l => ({
            alias: [l],
            src: l
          })),
          o = a.length,
          h = a.map(async l => {
            const u = vt.toAbsolute(l.src);
            if (!r[l.src]) try {
              this.promiseCache[u] || (this.promiseCache[u] = this._getLoadPromiseAndParser(u, l)), r[l.src] = await this.promiseCache[u].promise, e && e(++s / o)
            } catch (c) {
              throw delete this.promiseCache[u], delete r[l.src], new Error(`[Loader.load] Failed to load ${u}.
  ${c}`)
            }
          });
        return await Promise.all(h), n ? r[a[0].src] : r
      }
      async unload(t) {
        const e = Ft(t, s => ({
          alias: [s],
          src: s
        })).map(async s => {
          var r, n;
          const a = vt.toAbsolute(s.src),
            o = this.promiseCache[a];
          if (o) {
            const h = await o.promise;
            delete this.promiseCache[a], (n = (r = o.parser) == null ? void 0 : r.unload) == null || n.call(r, h, s, this)
          }
        });
        await Promise.all(e)
      }
      _validateParsers() {
        this._parsersValidated = !0, this._parserHash = this._parsers.filter(t => t.name).reduce((t, e) => (t[e.name], Tf(bf({}, t), {
          [e.name]: e
        })), {})
      }
    }
    var Nt = (i => (i[i.Low = 0] = "Low", i[i.Normal = 1] = "Normal", i[i.High = 2] = "High", i))(Nt || {});
    const Af = ".json",
      wf = "application/json",
      Mh = {
        extension: {
          type: R.LoadParser,
          priority: Nt.Low
        },
        name: "loadJson",
        test(i) {
          return ke(i, wf) || ce(i, Af)
        },
        async load(i) {
          return await (await O.ADAPTER.fetch(i)).json()
        }
      };
    L.add(Mh);
    const Sf = ".txt",
      If = "text/plain",
      Dh = {
        name: "loadTxt",
        extension: {
          type: R.LoadParser,
          priority: Nt.Low
        },
        test(i) {
          return ke(i, If) || ce(i, Sf)
        },
        async load(i) {
          return await (await O.ADAPTER.fetch(i)).text()
        }
      };
    L.add(Dh);
    var Rf = Object.defineProperty,
      Cf = Object.defineProperties,
      Pf = Object.getOwnPropertyDescriptors,
      Oh = Object.getOwnPropertySymbols,
      Mf = Object.prototype.hasOwnProperty,
      Df = Object.prototype.propertyIsEnumerable,
      Bh = (i, t, e) => t in i ? Rf(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Of = (i, t) => {
        for (var e in t || (t = {})) Mf.call(t, e) && Bh(i, e, t[e]);
        if (Oh)
          for (var e of Oh(t)) Df.call(t, e) && Bh(i, e, t[e]);
        return i
      },
      Bf = (i, t) => Cf(i, Pf(t));
    const Ff = ["normal", "bold", "100", "200", "300", "400", "500", "600", "700", "800", "900"],
      Nf = [".ttf", ".otf", ".woff", ".woff2"],
      Lf = ["font/ttf", "font/otf", "font/woff", "font/woff2"],
      Uf = /^(--|-?[A-Z_])[0-9A-Z_-]*$/i;
  
    function Fh(i) {
      const t = vt.extname(i),
        e = vt.basename(i, t).replace(/(-|_)/g, " ").toLowerCase().split(" ").map(n => n.charAt(0).toUpperCase() + n.slice(1));
      let s = e.length > 0;
      for (const n of e)
        if (!n.match(Uf)) {
          s = !1;
          break
        } let r = e.join(" ");
      return s || (r = `"${r.replace(/[\\"]/g,"\\$&")}"`), r
    }
    const Nh = {
      extension: {
        type: R.LoadParser,
        priority: Nt.Low
      },
      name: "loadWebFont",
      test(i) {
        return ke(i, Lf) || ce(i, Nf)
      },
      async load(i, t) {
        var e, s, r, n, a, o;
        const h = O.ADAPTER.getFontFaceSet();
        if (h) {
          const l = [],
            u = (s = (e = t.data) == null ? void 0 : e.family) != null ? s : Fh(i),
            c = (a = (n = (r = t.data) == null ? void 0 : r.weights) == null ? void 0 : n.filter(f => Ff.includes(f))) != null ? a : ["normal"],
            d = (o = t.data) != null ? o : {};
          for (let f = 0; f < c.length; f++) {
            const p = c[f],
              m = new FontFace(u, `url(${encodeURI(i)})`, Bf(Of({}, d), {
                weight: p
              }));
            await m.load(), h.add(m), l.push(m)
          }
          return l.length === 1 ? l[0] : l
        }
        return null
      },
      unload(i) {
        (Array.isArray(i) ? i : [i]).forEach(t => O.ADAPTER.getFontFaceSet().delete(t))
      }
    };
    L.add(Nh);
    let Lh = 0,
      Rn;
    const kf = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=",
      Gf = {
        id: "checkImageBitmap",
        code: `
      async function checkImageBitmap()
      {
          try
          {
              if (typeof createImageBitmap !== 'function') return false;
  
              const response = await fetch('${kf}');
              const imageBlob =  await response.blob();
              const imageBitmap = await createImageBitmap(imageBlob);
  
              return imageBitmap.width === 1 && imageBitmap.height === 1;
          }
          catch (e)
          {
              return false;
          }
      }
      checkImageBitmap().then((result) => { self.postMessage(result); });
      `
      },
      $f = {
        id: "loadImageBitmap",
        code: `
      async function loadImageBitmap(url)
      {
          const response = await fetch(url);
  
          if (!response.ok)
          {
              throw new Error(\`[WorkerManager.loadImageBitmap] Failed to fetch \${url}: \`
                  + \`\${response.status} \${response.statusText}\`);
          }
  
          const imageBlob =  await response.blob();
          const imageBitmap = await createImageBitmap(imageBlob);
  
          return imageBitmap;
      }
      self.onmessage = async (event) =>
      {
          try
          {
              const imageBitmap = await loadImageBitmap(event.data.data[0]);
  
              self.postMessage({
                  data: imageBitmap,
                  uuid: event.data.uuid,
                  id: event.data.id,
              }, [imageBitmap]);
          }
          catch(e)
          {
              self.postMessage({
                  error: e,
                  uuid: event.data.uuid,
                  id: event.data.id,
              });
          }
      };`
      };
    let Cn, Hf = class {
      constructor() {
        this._initialized = !1, this._createdWorkers = 0, this.workerPool = [], this.queue = [], this.resolveHash = {}
      }
      isImageBitmapSupported() {
        return this._isImageBitmapSupported !== void 0 ? this._isImageBitmapSupported : (this._isImageBitmapSupported = new Promise(t => {
          const e = URL.createObjectURL(new Blob([Gf.code], {
              type: "application/javascript"
            })),
            s = new Worker(e);
          s.addEventListener("message", r => {
            s.terminate(), URL.revokeObjectURL(e), t(r.data)
          })
        }), this._isImageBitmapSupported)
      }
      loadImageBitmap(t) {
        return this._run("loadImageBitmap", [t])
      }
      async _initWorkers() {
        this._initialized || (this._initialized = !0)
      }
      getWorker() {
        Rn === void 0 && (Rn = navigator.hardwareConcurrency || 4);
        let t = this.workerPool.pop();
        return !t && this._createdWorkers < Rn && (Cn || (Cn = URL.createObjectURL(new Blob([$f.code], {
          type: "application/javascript"
        }))), this._createdWorkers++, t = new Worker(Cn), t.addEventListener("message", e => {
          this.complete(e.data), this.returnWorker(e.target), this.next()
        })), t
      }
      returnWorker(t) {
        this.workerPool.push(t)
      }
      complete(t) {
        t.error !== void 0 ? this.resolveHash[t.uuid].reject(t.error) : this.resolveHash[t.uuid].resolve(t.data), this.resolveHash[t.uuid] = null
      }
      async _run(t, e) {
        await this._initWorkers();
        const s = new Promise((r, n) => {
          this.queue.push({
            id: t,
            arguments: e,
            resolve: r,
            reject: n
          })
        });
        return this.next(), s
      }
      next() {
        if (!this.queue.length) return;
        const t = this.getWorker();
        if (!t) return;
        const e = this.queue.pop(),
          s = e.id;
        this.resolveHash[Lh] = {
          resolve: e.resolve,
          reject: e.reject
        }, t.postMessage({
          data: e.arguments,
          uuid: Lh++,
          id: s
        })
      }
    };
    const Uh = new Hf;
  
    function qe(i, t, e) {
      i.resource.internal = !0;
      const s = new B(i),
        r = () => {
          delete t.promiseCache[e], Ee.has(e) && Ee.remove(e)
        };
      return s.baseTexture.once("destroyed", () => {
        e in t.promiseCache && (console.warn("[Assets] A BaseTexture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the BaseTexture."), r())
      }), s.once("destroyed", () => {
        i.destroyed || (console.warn("[Assets] A Texture managed by Assets was destroyed instead of unloaded! Use Assets.unload() instead of destroying the Texture."), r())
      }), s
    }
    var Vf = Object.defineProperty,
      kh = Object.getOwnPropertySymbols,
      Xf = Object.prototype.hasOwnProperty,
      jf = Object.prototype.propertyIsEnumerable,
      Gh = (i, t, e) => t in i ? Vf(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      $h = (i, t) => {
        for (var e in t || (t = {})) Xf.call(t, e) && Gh(i, e, t[e]);
        if (kh)
          for (var e of kh(t)) jf.call(t, e) && Gh(i, e, t[e]);
        return i
      };
    const zf = [".jpeg", ".jpg", ".png", ".webp", ".avif"],
      Wf = ["image/jpeg", "image/png", "image/webp", "image/avif"];
    async function Hh(i) {
      const t = await O.ADAPTER.fetch(i);
      if (!t.ok) throw new Error(`[loadImageBitmap] Failed to fetch ${i}: ${t.status} ${t.statusText}`);
      const e = await t.blob();
      return await createImageBitmap(e)
    }
    const Ds = {
      name: "loadTextures",
      extension: {
        type: R.LoadParser,
        priority: Nt.High
      },
      config: {
        preferWorkers: !0,
        preferCreateImageBitmap: !0,
        crossOrigin: "anonymous"
      },
      test(i) {
        return ke(i, Wf) || ce(i, zf)
      },
      async load(i, t, e) {
        var s, r;
        const n = globalThis.createImageBitmap && this.config.preferCreateImageBitmap;
        let a;
        n ? this.config.preferWorkers && await Uh.isImageBitmapSupported() ? a = await Uh.loadImageBitmap(i) : a = await Hh(i) : a = await new Promise((l, u) => {
          const c = new Image;
          c.crossOrigin = this.config.crossOrigin, c.src = i, c.complete ? l(c) : (c.onload = () => l(c), c.onerror = d => u(d))
        });
        const o = $h({}, t.data);
        (s = o.resolution) != null || (o.resolution = Kt(i)), n && ((r = o.resourceOptions) == null ? void 0 : r.ownsImageBitmap) === void 0 && (o.resourceOptions = $h({}, o.resourceOptions), o.resourceOptions.ownsImageBitmap = !0);
        const h = new X(a, o);
        return h.resource.src = i, qe(h, e, i)
      },
      unload(i) {
        i.destroy(!0)
      }
    };
    L.add(Ds);
    var Yf = Object.defineProperty,
      Vh = Object.getOwnPropertySymbols,
      qf = Object.prototype.hasOwnProperty,
      Kf = Object.prototype.propertyIsEnumerable,
      Xh = (i, t, e) => t in i ? Yf(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Zf = (i, t) => {
        for (var e in t || (t = {})) qf.call(t, e) && Xh(i, e, t[e]);
        if (Vh)
          for (var e of Vh(t)) Kf.call(t, e) && Xh(i, e, t[e]);
        return i
      };
    const Qf = ".svg",
      Jf = "image/svg+xml",
      jh = {
        extension: {
          type: R.LoadParser,
          priority: Nt.High
        },
        name: "loadSVG",
        test(i) {
          return ke(i, Jf) || ce(i, Qf)
        },
        async testParse(i) {
          return Mi.test(i)
        },
        async parse(i, t, e) {
          var s;
          const r = new Mi(i, (s = t == null ? void 0 : t.data) == null ? void 0 : s.resourceOptions);
          await r.load();
          const n = new X(r, Zf({
            resolution: Kt(i)
          }, t == null ? void 0 : t.data));
          return n.resource.src = t.src, qe(n, e, t.src)
        },
        async load(i, t) {
          return (await O.ADAPTER.fetch(i)).text()
        },
        unload: Ds.unload
      };
    L.add(jh);
    var tp = Object.defineProperty,
      zh = Object.getOwnPropertySymbols,
      ep = Object.prototype.hasOwnProperty,
      sp = Object.prototype.propertyIsEnumerable,
      Wh = (i, t, e) => t in i ? tp(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Yh = (i, t) => {
        for (var e in t || (t = {})) ep.call(t, e) && Wh(i, e, t[e]);
        if (zh)
          for (var e of zh(t)) sp.call(t, e) && Wh(i, e, t[e]);
        return i
      };
    const ip = [".mp4", ".m4v", ".webm", ".ogv"],
      rp = ["video/mp4", "video/webm", "video/ogg"],
      qh = {
        name: "loadVideo",
        extension: {
          type: R.LoadParser,
          priority: Nt.High
        },
        config: {
          defaultAutoPlay: !0
        },
        test(i) {
          return ke(i, rp) || ce(i, ip)
        },
        async load(i, t, e) {
          var s;
          let r;
          const n = await (await O.ADAPTER.fetch(i)).blob(),
            a = URL.createObjectURL(n);
          try {
            const o = Yh({
                autoPlay: this.config.defaultAutoPlay
              }, (s = t == null ? void 0 : t.data) == null ? void 0 : s.resourceOptions),
              h = new Tn(a, o);
            await h.load();
            const l = new X(h, Yh({
              alphaMode: await Ba(),
              resolution: Kt(i)
            }, t == null ? void 0 : t.data));
            l.resource.src = i, r = qe(l, e, i), r.baseTexture.once("destroyed", () => {
              URL.revokeObjectURL(a)
            })
          } catch (o) {
            throw URL.revokeObjectURL(a), o
          }
          return r
        },
        unload(i) {
          i.destroy(!0)
        }
      };
    L.add(qh);
    var np = Object.defineProperty,
      ap = Object.defineProperties,
      op = Object.getOwnPropertyDescriptors,
      Kh = Object.getOwnPropertySymbols,
      hp = Object.prototype.hasOwnProperty,
      lp = Object.prototype.propertyIsEnumerable,
      Zh = (i, t, e) => t in i ? np(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Ke = (i, t) => {
        for (var e in t || (t = {})) hp.call(t, e) && Zh(i, e, t[e]);
        if (Kh)
          for (var e of Kh(t)) lp.call(t, e) && Zh(i, e, t[e]);
        return i
      },
      Qh = (i, t) => ap(i, op(t));
    class up {
      constructor() {
        this._defaultBundleIdentifierOptions = {
          connector: "-",
          createBundleAssetId: (t, e) => `${t}${this._bundleIdConnector}${e}`,
          extractAssetIdFromBundle: (t, e) => e.replace(`${t}${this._bundleIdConnector}`, "")
        }, this._bundleIdConnector = this._defaultBundleIdentifierOptions.connector, this._createBundleAssetId = this._defaultBundleIdentifierOptions.createBundleAssetId, this._extractAssetIdFromBundle = this._defaultBundleIdentifierOptions.extractAssetIdFromBundle, this._assetMap = {}, this._preferredOrder = [], this._parsers = [], this._resolverHash = {}, this._bundles = {}
      }
      setBundleIdentifier(t) {
        var e, s, r;
        if (this._bundleIdConnector = (e = t.connector) != null ? e : this._bundleIdConnector, this._createBundleAssetId = (s = t.createBundleAssetId) != null ? s : this._createBundleAssetId, this._extractAssetIdFromBundle = (r = t.extractAssetIdFromBundle) != null ? r : this._extractAssetIdFromBundle, this._extractAssetIdFromBundle("foo", this._createBundleAssetId("foo", "bar")) !== "bar") throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")
      }
      prefer(...t) {
        t.forEach(e => {
          this._preferredOrder.push(e), e.priority || (e.priority = Object.keys(e.params))
        }), this._resolverHash = {}
      }
      set basePath(t) {
        this._basePath = t
      }
      get basePath() {
        return this._basePath
      }
      set rootPath(t) {
        this._rootPath = t
      }
      get rootPath() {
        return this._rootPath
      }
      get parsers() {
        return this._parsers
      }
      reset() {
        this.setBundleIdentifier(this._defaultBundleIdentifierOptions), this._assetMap = {}, this._preferredOrder = [], this._resolverHash = {}, this._rootPath = null, this._basePath = null, this._manifest = null, this._bundles = {}, this._defaultSearchParams = null
      }
      setDefaultSearchParams(t) {
        if (typeof t == "string") this._defaultSearchParams = t;
        else {
          const e = t;
          this._defaultSearchParams = Object.keys(e).map(s => `${encodeURIComponent(s)}=${encodeURIComponent(e[s])}`).join("&")
        }
      }
      getAlias(t) {
        const {
          alias: e,
          name: s,
          src: r,
          srcs: n
        } = t;
        return Ft(e || s || r || n, a => {
          var o;
          return typeof a == "string" ? a : Array.isArray(a) ? a.map(h => {
            var l, u;
            return (u = (l = h == null ? void 0 : h.src) != null ? l : h == null ? void 0 : h.srcs) != null ? u : h
          }) : a != null && a.src || a != null && a.srcs ? (o = a.src) != null ? o : a.srcs : a
        }, !0)
      }
      addManifest(t) {
        this._manifest, this._manifest = t, t.bundles.forEach(e => {
          this.addBundle(e.name, e.assets)
        })
      }
      addBundle(t, e) {
        const s = [];
        Array.isArray(e) ? e.forEach(r => {
          var n, a;
          const o = (n = r.src) != null ? n : r.srcs,
            h = (a = r.alias) != null ? a : r.name;
          let l;
          if (typeof h == "string") {
            const u = this._createBundleAssetId(t, h);
            s.push(u), l = [h, u]
          } else {
            const u = h.map(c => this._createBundleAssetId(t, c));
            s.push(...u), l = [...h, ...u]
          }
          this.add(Qh(Ke({}, r), {
            alias: l,
            src: o
          }))
        }) : Object.keys(e).forEach(r => {
          var n;
          const a = [r, this._createBundleAssetId(t, r)];
          if (typeof e[r] == "string") this.add({
            alias: a,
            src: e[r]
          });
          else if (Array.isArray(e[r])) this.add({
            alias: a,
            src: e[r]
          });
          else {
            const o = e[r],
              h = (n = o.src) != null ? n : o.srcs;
            this.add(Qh(Ke({}, o), {
              alias: a,
              src: Array.isArray(h) ? h : [h]
            }))
          }
          s.push(...a)
        }), this._bundles[t] = s
      }
      add(t, e, s, r, n) {
        const a = [];
        typeof t == "string" || Array.isArray(t) && typeof t[0] == "string" ? a.push({
          alias: t,
          src: e,
          data: s,
          format: r,
          loadParser: n
        }) : Array.isArray(t) ? a.push(...t) : a.push(t);
        let o;
        Ft(a).forEach(h => {
          const {
            src: l,
            srcs: u
          } = h;
          let {
            data: c,
            format: d,
            loadParser: f
          } = h;
          const p = Ft(l || u).map(y => typeof y == "string" ? Rh(y) : Array.isArray(y) ? y : [y]),
            m = this.getAlias(h),
            g = [];
          p.forEach(y => {
            y.forEach(b => {
              var v, x, E;
              let M = {};
              if (typeof b != "object") {
                M.src = b;
                for (let S = 0; S < this._parsers.length; S++) {
                  const w = this._parsers[S];
                  if (w.test(b)) {
                    M = w.parse(b);
                    break
                  }
                }
              } else c = (v = b.data) != null ? v : c, d = (x = b.format) != null ? x : d, f = (E = b.loadParser) != null ? E : f, M = Ke(Ke({}, M), b);
              if (!m) throw new Error(`[Resolver] alias is undefined for this asset: ${M.src}`);
              M = this.buildResolvedAsset(M, {
                aliases: m,
                data: c,
                format: d,
                loadParser: f
              }), g.push(M)
            })
          }), m.forEach(y => {
            this._assetMap[y] = g
          })
        })
      }
      resolveBundle(t) {
        const e = Ms(t);
        t = Ft(t);
        const s = {};
        return t.forEach(r => {
          const n = this._bundles[r];
          if (n) {
            const a = this.resolve(n),
              o = {};
            for (const h in a) {
              const l = a[h];
              o[this._extractAssetIdFromBundle(r, h)] = l
            }
            s[r] = o
          }
        }), e ? s[t[0]] : s
      }
      resolveUrl(t) {
        const e = this.resolve(t);
        if (typeof t != "string") {
          const s = {};
          for (const r in e) s[r] = e[r].src;
          return s
        }
        return e.src
      }
      resolve(t) {
        const e = Ms(t);
        t = Ft(t);
        const s = {};
        return t.forEach(r => {
          var n;
          if (!this._resolverHash[r])
            if (this._assetMap[r]) {
              let a = this._assetMap[r];
              const o = a[0],
                h = this._getPreferredOrder(a);
              h == null || h.priority.forEach(l => {
                h.params[l].forEach(u => {
                  const c = a.filter(d => d[l] ? d[l] === u : !1);
                  c.length && (a = c)
                })
              }), this._resolverHash[r] = (n = a[0]) != null ? n : o
            } else this._resolverHash[r] = this.buildResolvedAsset({
              alias: [r],
              src: r
            }, {});
          s[r] = this._resolverHash[r]
        }), e ? s[t[0]] : s
      }
      hasKey(t) {
        return !!this._assetMap[t]
      }
      hasBundle(t) {
        return !!this._bundles[t]
      }
      _getPreferredOrder(t) {
        for (let e = 0; e < t.length; e++) {
          const s = t[0],
            r = this._preferredOrder.find(n => n.params.format.includes(s.format));
          if (r) return r
        }
        return this._preferredOrder[0]
      }
      _appendDefaultSearchParams(t) {
        if (!this._defaultSearchParams) return t;
        const e = /\?/.test(t) ? "&" : "?";
        return `${t}${e}${this._defaultSearchParams}`
      }
      buildResolvedAsset(t, e) {
        var s;
        const {
          aliases: r,
          data: n,
          loadParser: a,
          format: o
        } = e;
        return (this._basePath || this._rootPath) && (t.src = vt.toAbsolute(t.src, this._basePath, this._rootPath)), t.alias = (s = r != null ? r : t.alias) != null ? s : [t.src], t.src = this._appendDefaultSearchParams(t.src), t.data = Ke(Ke({}, n || {}), t.data), t.loadParser = a != null ? a : t.loadParser, t.format = o != null ? o : t.src.split(".").pop(), t.srcs = t.src, t.name = t.alias, t
      }
    }
    class Jh {
      constructor() {
        this._detections = [], this._initialized = !1, this.resolver = new up, this.loader = new Ef, this.cache = Ee, this._backgroundLoader = new pf(this.loader), this._backgroundLoader.active = !0, this.reset()
      }
      async init(t = {}) {
        var e, s, r;
        if (this._initialized) return;
        if (this._initialized = !0, t.defaultSearchParams && this.resolver.setDefaultSearchParams(t.defaultSearchParams), t.basePath && (this.resolver.basePath = t.basePath), t.bundleIdentifier && this.resolver.setBundleIdentifier(t.bundleIdentifier), t.manifest) {
          let h = t.manifest;
          typeof h == "string" && (h = await this.load(h)), this.resolver.addManifest(h)
        }
        const n = (s = (e = t.texturePreference) == null ? void 0 : e.resolution) != null ? s : 1,
          a = typeof n == "number" ? [n] : n,
          o = await this._detectFormats({
            preferredFormats: (r = t.texturePreference) == null ? void 0 : r.format,
            skipDetections: t.skipDetections,
            detections: this._detections
          });
        this.resolver.prefer({
          params: {
            format: o,
            resolution: a
          }
        }), t.preferences && this.setPreferences(t.preferences)
      }
      add(t, e, s, r, n) {
        this.resolver.add(t, e, s, r, n)
      }
      async load(t, e) {
        this._initialized || await this.init();
        const s = Ms(t),
          r = Ft(t).map(o => {
            if (typeof o != "string") {
              const h = this.resolver.getAlias(o);
              return h.some(l => !this.resolver.hasKey(l)) && this.add(o), Array.isArray(h) ? h[0] : h
            }
            return this.resolver.hasKey(o) || this.add({
              alias: o,
              src: o
            }), o
          }),
          n = this.resolver.resolve(r),
          a = await this._mapLoadToResolve(n, e);
        return s ? a[r[0]] : a
      }
      addBundle(t, e) {
        this.resolver.addBundle(t, e)
      }
      async loadBundle(t, e) {
        this._initialized || await this.init();
        let s = !1;
        typeof t == "string" && (s = !0, t = [t]);
        const r = this.resolver.resolveBundle(t),
          n = {},
          a = Object.keys(r);
        let o = 0,
          h = 0;
        const l = () => {
            e == null || e(++o / h)
          },
          u = a.map(c => {
            const d = r[c];
            return h += Object.keys(d).length, this._mapLoadToResolve(d, l).then(f => {
              n[c] = f
            })
          });
        return await Promise.all(u), s ? n[t[0]] : n
      }
      async backgroundLoad(t) {
        this._initialized || await this.init(), typeof t == "string" && (t = [t]);
        const e = this.resolver.resolve(t);
        this._backgroundLoader.add(Object.values(e))
      }
      async backgroundLoadBundle(t) {
        this._initialized || await this.init(), typeof t == "string" && (t = [t]);
        const e = this.resolver.resolveBundle(t);
        Object.values(e).forEach(s => {
          this._backgroundLoader.add(Object.values(s))
        })
      }
      reset() {
        this.resolver.reset(), this.loader.reset(), this.cache.reset(), this._initialized = !1
      }
      get(t) {
        if (typeof t == "string") return Ee.get(t);
        const e = {};
        for (let s = 0; s < t.length; s++) e[s] = Ee.get(t[s]);
        return e
      }
      async _mapLoadToResolve(t, e) {
        const s = Object.values(t),
          r = Object.keys(t);
        this._backgroundLoader.active = !1;
        const n = await this.loader.load(s, e);
        this._backgroundLoader.active = !0;
        const a = {};
        return s.forEach((o, h) => {
          const l = n[o.src],
            u = [o.src];
          o.alias && u.push(...o.alias), a[r[h]] = l, Ee.set(u, l)
        }), a
      }
      async unload(t) {
        this._initialized || await this.init();
        const e = Ft(t).map(r => typeof r != "string" ? r.src : r),
          s = this.resolver.resolve(e);
        await this._unloadFromResolved(s)
      }
      async unloadBundle(t) {
        this._initialized || await this.init(), t = Ft(t);
        const e = this.resolver.resolveBundle(t),
          s = Object.keys(e).map(r => this._unloadFromResolved(e[r]));
        await Promise.all(s)
      }
      async _unloadFromResolved(t) {
        const e = Object.values(t);
        e.forEach(s => {
          Ee.remove(s.src)
        }), await this.loader.unload(e)
      }
      async _detectFormats(t) {
        let e = [];
        t.preferredFormats && (e = Array.isArray(t.preferredFormats) ? t.preferredFormats : [t.preferredFormats]);
        for (const s of t.detections) t.skipDetections || await s.test() ? e = await s.add(e) : t.skipDetections || (e = await s.remove(e));
        return e = e.filter((s, r) => e.indexOf(s) === r), e
      }
      get detections() {
        return this._detections
      }
      get preferWorkers() {
        return Ds.config.preferWorkers
      }
      set preferWorkers(t) {
        this.setPreferences({
          preferWorkers: t
        })
      }
      setPreferences(t) {
        this.loader.parsers.forEach(e => {
          e.config && Object.keys(e.config).filter(s => s in t).forEach(s => {
            e.config[s] = t[s]
          })
        })
      }
    }
    const Os = new Jh;
    L.handleByList(R.LoadParser, Os.loader.parsers).handleByList(R.ResolveParser, Os.resolver.parsers).handleByList(R.CacheParser, Os.cache.parsers).handleByList(R.DetectionParser, Os.detections);
    const tl = {
      extension: R.CacheParser,
      test: i => Array.isArray(i) && i.every(t => t instanceof B),
      getCacheableAssets: (i, t) => {
        const e = {};
        return i.forEach(s => {
          t.forEach((r, n) => {
            e[s + (n === 0 ? "" : n + 1)] = r
          })
        }), e
      }
    };
    L.add(tl);
    const el = {
      extension: {
        type: R.DetectionParser,
        priority: 1
      },
      test: async () => {
        const i = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A=";
        return new Promise(t => {
          const e = new Image;
          e.onload = () => {
            t(!0)
          }, e.onerror = () => {
            t(!1)
          }, e.src = i
        })
      },
      add: async i => [...i, "avif"],
      remove: async i => i.filter(t => t !== "avif")
    };
    L.add(el);
    const sl = {
      extension: {
        type: R.DetectionParser,
        priority: 0
      },
      test: async () => {
        const i = "data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA=";
        return new Promise(t => {
          const e = new Image;
          e.onload = () => {
            t(!0)
          }, e.onerror = () => {
            t(!1)
          }, e.src = i
        })
      },
      add: async i => [...i, "webp"],
      remove: async i => i.filter(t => t !== "webp")
    };
    L.add(sl);
    const il = ["png", "jpg", "jpeg"],
      rl = {
        extension: {
          type: R.DetectionParser,
          priority: -1
        },
        test: () => Promise.resolve(!0),
        add: async i => [...i, ...il],
        remove: async i => i.filter(t => !il.includes(t))
      };
    L.add(rl);
    const cp = "WorkerGlobalScope" in globalThis && globalThis instanceof globalThis.WorkerGlobalScope;
  
    function Pn(i) {
      return cp ? !1 : document.createElement("video").canPlayType(i) !== ""
    }
    const nl = {
      extension: {
        type: R.DetectionParser,
        priority: 0
      },
      test: async () => Pn("video/webm"),
      add: async i => [...i, "webm"],
      remove: async i => i.filter(t => t !== "webm")
    };
    L.add(nl);
    const al = {
      extension: {
        type: R.DetectionParser,
        priority: 0
      },
      test: async () => Pn("video/mp4"),
      add: async i => [...i, "mp4", "m4v"],
      remove: async i => i.filter(t => t !== "mp4" && t !== "m4v")
    };
    L.add(al);
    const ol = {
      extension: {
        type: R.DetectionParser,
        priority: 0
      },
      test: async () => Pn("video/ogg"),
      add: async i => [...i, "ogv"],
      remove: async i => i.filter(t => t !== "ogv")
    };
    L.add(ol);
    const hl = {
      extension: R.ResolveParser,
      test: Ds.test,
      parse: i => {
        var t, e;
        return {
          resolution: parseFloat((e = (t = O.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) != null ? e : "1"),
          format: i.split(".").pop(),
          src: i
        }
      }
    };
    L.add(hl);
    var Et = (i => (i[i.COMPRESSED_RGB_S3TC_DXT1_EXT = 33776] = "COMPRESSED_RGB_S3TC_DXT1_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT1_EXT = 33777] = "COMPRESSED_RGBA_S3TC_DXT1_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT3_EXT = 33778] = "COMPRESSED_RGBA_S3TC_DXT3_EXT", i[i.COMPRESSED_RGBA_S3TC_DXT5_EXT = 33779] = "COMPRESSED_RGBA_S3TC_DXT5_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT = 35917] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT = 35918] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT", i[i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT = 35919] = "COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT", i[i.COMPRESSED_SRGB_S3TC_DXT1_EXT = 35916] = "COMPRESSED_SRGB_S3TC_DXT1_EXT", i[i.COMPRESSED_R11_EAC = 37488] = "COMPRESSED_R11_EAC", i[i.COMPRESSED_SIGNED_R11_EAC = 37489] = "COMPRESSED_SIGNED_R11_EAC", i[i.COMPRESSED_RG11_EAC = 37490] = "COMPRESSED_RG11_EAC", i[i.COMPRESSED_SIGNED_RG11_EAC = 37491] = "COMPRESSED_SIGNED_RG11_EAC", i[i.COMPRESSED_RGB8_ETC2 = 37492] = "COMPRESSED_RGB8_ETC2", i[i.COMPRESSED_RGBA8_ETC2_EAC = 37496] = "COMPRESSED_RGBA8_ETC2_EAC", i[i.COMPRESSED_SRGB8_ETC2 = 37493] = "COMPRESSED_SRGB8_ETC2", i[i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC = 37497] = "COMPRESSED_SRGB8_ALPHA8_ETC2_EAC", i[i.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37494] = "COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2", i[i.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2 = 37495] = "COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2", i[i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG = 35840] = "COMPRESSED_RGB_PVRTC_4BPPV1_IMG", i[i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG = 35842] = "COMPRESSED_RGBA_PVRTC_4BPPV1_IMG", i[i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG = 35841] = "COMPRESSED_RGB_PVRTC_2BPPV1_IMG", i[i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG = 35843] = "COMPRESSED_RGBA_PVRTC_2BPPV1_IMG", i[i.COMPRESSED_RGB_ETC1_WEBGL = 36196] = "COMPRESSED_RGB_ETC1_WEBGL", i[i.COMPRESSED_RGB_ATC_WEBGL = 35986] = "COMPRESSED_RGB_ATC_WEBGL", i[i.COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL = 35986] = "COMPRESSED_RGBA_ATC_EXPLICIT_ALPHA_WEBGL", i[i.COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL = 34798] = "COMPRESSED_RGBA_ATC_INTERPOLATED_ALPHA_WEBGL", i[i.COMPRESSED_RGBA_ASTC_4x4_KHR = 37808] = "COMPRESSED_RGBA_ASTC_4x4_KHR", i))(Et || {});
    const Bs = {
      33776: .5,
      33777: .5,
      33778: 1,
      33779: 1,
      35916: .5,
      35917: .5,
      35918: 1,
      35919: 1,
      37488: .5,
      37489: .5,
      37490: 1,
      37491: 1,
      37492: .5,
      37496: 1,
      37493: .5,
      37497: 1,
      37494: .5,
      37495: .5,
      35840: .5,
      35842: .5,
      35841: .25,
      35843: .25,
      36196: .5,
      35986: .5,
      35986: 1,
      34798: 1,
      37808: 1
    };
    let de, Ze;
  
    function ll() {
      Ze = {
        s3tc: de.getExtension("WEBGL_compressed_texture_s3tc"),
        s3tc_sRGB: de.getExtension("WEBGL_compressed_texture_s3tc_srgb"),
        etc: de.getExtension("WEBGL_compressed_texture_etc"),
        etc1: de.getExtension("WEBGL_compressed_texture_etc1"),
        pvrtc: de.getExtension("WEBGL_compressed_texture_pvrtc") || de.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),
        atc: de.getExtension("WEBGL_compressed_texture_atc"),
        astc: de.getExtension("WEBGL_compressed_texture_astc")
      }
    }
    const ul = {
      extension: {
        type: R.DetectionParser,
        priority: 2
      },
      test: async () => {
        const i = O.ADAPTER.createCanvas().getContext("webgl");
        return i ? (de = i, !0) : !1
      },
      add: async i => {
        Ze || ll();
        const t = [];
        for (const e in Ze) Ze[e] && t.push(e);
        return [...t, ...i]
      },
      remove: async i => (Ze || ll(), i.filter(t => !(t in Ze)))
    };
    L.add(ul);
    class cl extends ms {
      constructor(t, e = {
        width: 1,
        height: 1,
        autoLoad: !0
      }) {
        let s, r;
        typeof t == "string" ? (s = t, r = new Uint8Array) : (s = null, r = t), super(r, e), this.origin = s, this.buffer = r ? new li(r) : null, this._load = null, this.loaded = !1, this.origin !== null && e.autoLoad !== !1 && this.load(), this.origin === null && this.buffer && (this._load = Promise.resolve(this), this.loaded = !0, this.onBlobLoaded(this.buffer.rawBinaryData))
      }
      onBlobLoaded(t) {}
      load() {
        return this._load ? this._load : (this._load = fetch(this.origin).then(t => t.blob()).then(t => t.arrayBuffer()).then(t => (this.data = new Uint32Array(t), this.buffer = new li(t), this.loaded = !0, this.onBlobLoaded(t), this.update(), this)), this._load)
      }
    }
    class Ae extends cl {
      constructor(t, e) {
        super(t, e), this.format = e.format, this.levels = e.levels || 1, this._width = e.width, this._height = e.height, this._extension = Ae._formatToExtension(this.format), (e.levelBuffers || this.buffer) && (this._levelBuffers = e.levelBuffers || Ae._createLevelBuffers(t instanceof Uint8Array ? t : this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height))
      }
      upload(t, e, s) {
        const r = t.gl;
        if (!t.context.extensions[this._extension]) throw new Error(`${this._extension} textures are not supported on the current machine`);
        if (!this._levelBuffers) return !1;
        r.pixelStorei(r.UNPACK_ALIGNMENT, 4);
        for (let n = 0, a = this.levels; n < a; n++) {
          const {
            levelID: o,
            levelWidth: h,
            levelHeight: l,
            levelBuffer: u
          } = this._levelBuffers[n];
          r.compressedTexImage2D(r.TEXTURE_2D, o, this.format, h, l, 0, u)
        }
        return !0
      }
      onBlobLoaded() {
        this._levelBuffers = Ae._createLevelBuffers(this.buffer.uint8View, this.format, this.levels, 4, 4, this.width, this.height)
      }
      static _formatToExtension(t) {
        if (t >= 33776 && t <= 33779) return "s3tc";
        if (t >= 37488 && t <= 37497) return "etc";
        if (t >= 35840 && t <= 35843) return "pvrtc";
        if (t >= 36196) return "etc1";
        if (t >= 35986 && t <= 34798) return "atc";
        throw new Error("Invalid (compressed) texture format given!")
      }
      static _createLevelBuffers(t, e, s, r, n, a, o) {
        const h = new Array(s);
        let l = t.byteOffset,
          u = a,
          c = o,
          d = u + r - 1 & ~(r - 1),
          f = c + n - 1 & ~(n - 1),
          p = d * f * Bs[e];
        for (let m = 0; m < s; m++) h[m] = {
          levelID: m,
          levelWidth: s > 1 ? u : d,
          levelHeight: s > 1 ? c : f,
          levelBuffer: new Uint8Array(t.buffer, l, p)
        }, l += p, u = u >> 1 || 1, c = c >> 1 || 1, d = u + r - 1 & ~(r - 1), f = c + n - 1 & ~(n - 1), p = d * f * Bs[e];
        return h
      }
    }
    const Mn = 4,
      Li = 124,
      dp = 32,
      dl = 20,
      fp = 542327876,
      Ui = {
        SIZE: 1,
        FLAGS: 2,
        HEIGHT: 3,
        WIDTH: 4,
        MIPMAP_COUNT: 7,
        PIXEL_FORMAT: 19
      },
      pp = {
        SIZE: 0,
        FLAGS: 1,
        FOURCC: 2,
        RGB_BITCOUNT: 3,
        R_BIT_MASK: 4,
        G_BIT_MASK: 5,
        B_BIT_MASK: 6,
        A_BIT_MASK: 7
      },
      ki = {
        DXGI_FORMAT: 0,
        RESOURCE_DIMENSION: 1,
        MISC_FLAG: 2,
        ARRAY_SIZE: 3,
        MISC_FLAGS2: 4
      },
      mp = 1,
      gp = 2,
      _p = 4,
      vp = 64,
      yp = 512,
      xp = 131072,
      bp = 827611204,
      Tp = 861165636,
      Ep = 894720068,
      Ap = 808540228,
      wp = 4,
      Sp = {
        [bp]: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        [Tp]: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        [Ep]: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT
      },
      Ip = {
        70: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        71: Et.COMPRESSED_RGBA_S3TC_DXT1_EXT,
        73: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        74: Et.COMPRESSED_RGBA_S3TC_DXT3_EXT,
        76: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        77: Et.COMPRESSED_RGBA_S3TC_DXT5_EXT,
        72: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,
        75: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,
        78: Et.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT
      };
  
    function fl(i) {
      const t = new Uint32Array(i);
      if (t[0] !== fp) throw new Error("Invalid DDS file magic word");
      const e = new Uint32Array(i, 0, Li / Uint32Array.BYTES_PER_ELEMENT),
        s = e[Ui.HEIGHT],
        r = e[Ui.WIDTH],
        n = e[Ui.MIPMAP_COUNT],
        a = new Uint32Array(i, Ui.PIXEL_FORMAT * Uint32Array.BYTES_PER_ELEMENT, dp / Uint32Array.BYTES_PER_ELEMENT),
        o = a[mp];
      if (o & _p) {
        const h = a[pp.FOURCC];
        if (h !== Ap) {
          const b = Sp[h],
            v = Mn + Li,
            x = new Uint8Array(i, v);
          return [new Ae(x, {
            format: b,
            width: r,
            height: s,
            levels: n
          })]
        }
        const l = Mn + Li,
          u = new Uint32Array(t.buffer, l, dl / Uint32Array.BYTES_PER_ELEMENT),
          c = u[ki.DXGI_FORMAT],
          d = u[ki.RESOURCE_DIMENSION],
          f = u[ki.MISC_FLAG],
          p = u[ki.ARRAY_SIZE],
          m = Ip[c];
        if (m === void 0) throw new Error(`DDSParser cannot parse texture data with DXGI format ${c}`);
        if (f === wp) throw new Error("DDSParser does not support cubemap textures");
        if (d === 6) throw new Error("DDSParser does not supported 3D texture data");
        const g = new Array,
          y = Mn + Li + dl;
        if (p === 1) g.push(new Uint8Array(i, y));
        else {
          const b = Bs[m];
          let v = 0,
            x = r,
            E = s;
          for (let S = 0; S < n; S++) {
            const w = Math.max(1, x + 3 & -4),
              F = Math.max(1, E + 3 & -4),
              G = w * F * b;
            v += G, x = x >>> 1, E = E >>> 1
          }
          let M = y;
          for (let S = 0; S < p; S++) g.push(new Uint8Array(i, M, v)), M += v
        }
        return g.map(b => new Ae(b, {
          format: m,
          width: r,
          height: s,
          levels: n
        }))
      }
      throw o & vp ? new Error("DDSParser does not support uncompressed texture data.") : o & yp ? new Error("DDSParser does not supported YUV uncompressed texture data.") : o & xp ? new Error("DDSParser does not support single-channel (lumninance) texture data!") : o & gp ? new Error("DDSParser does not support single-channel (alpha) texture data!") : new Error("DDSParser failed to load a texture file due to an unknown reason!")
    }
    const pl = [171, 75, 84, 88, 32, 49, 49, 187, 13, 10, 26, 10],
      Rp = 67305985,
      Xt = {
        FILE_IDENTIFIER: 0,
        ENDIANNESS: 12,
        GL_TYPE: 16,
        GL_TYPE_SIZE: 20,
        GL_FORMAT: 24,
        GL_INTERNAL_FORMAT: 28,
        GL_BASE_INTERNAL_FORMAT: 32,
        PIXEL_WIDTH: 36,
        PIXEL_HEIGHT: 40,
        PIXEL_DEPTH: 44,
        NUMBER_OF_ARRAY_ELEMENTS: 48,
        NUMBER_OF_FACES: 52,
        NUMBER_OF_MIPMAP_LEVELS: 56,
        BYTES_OF_KEY_VALUE_DATA: 60
      },
      Dn = 64,
      On = {
        [k.UNSIGNED_BYTE]: 1,
        [k.UNSIGNED_SHORT]: 2,
        [k.INT]: 4,
        [k.UNSIGNED_INT]: 4,
        [k.FLOAT]: 4,
        [k.HALF_FLOAT]: 8
      },
      ml = {
        [A.RGBA]: 4,
        [A.RGB]: 3,
        [A.RG]: 2,
        [A.RED]: 1,
        [A.LUMINANCE]: 1,
        [A.LUMINANCE_ALPHA]: 2,
        [A.ALPHA]: 1
      },
      gl = {
        [k.UNSIGNED_SHORT_4_4_4_4]: 2,
        [k.UNSIGNED_SHORT_5_5_5_1]: 2,
        [k.UNSIGNED_SHORT_5_6_5]: 2
      };
  
    function _l(i, t, e = !1) {
      const s = new DataView(t);
      if (!Cp(i, s)) return null;
      const r = s.getUint32(Xt.ENDIANNESS, !0) === Rp,
        n = s.getUint32(Xt.GL_TYPE, r),
        a = s.getUint32(Xt.GL_FORMAT, r),
        o = s.getUint32(Xt.GL_INTERNAL_FORMAT, r),
        h = s.getUint32(Xt.PIXEL_WIDTH, r),
        l = s.getUint32(Xt.PIXEL_HEIGHT, r) || 1,
        u = s.getUint32(Xt.PIXEL_DEPTH, r) || 1,
        c = s.getUint32(Xt.NUMBER_OF_ARRAY_ELEMENTS, r) || 1,
        d = s.getUint32(Xt.NUMBER_OF_FACES, r),
        f = s.getUint32(Xt.NUMBER_OF_MIPMAP_LEVELS, r),
        p = s.getUint32(Xt.BYTES_OF_KEY_VALUE_DATA, r);
      if (l === 0 || u !== 1) throw new Error("Only 2D textures are supported");
      if (d !== 1) throw new Error("CubeTextures are not supported by KTXLoader yet!");
      if (c !== 1) throw new Error("WebGL does not support array textures");
      const m = 4,
        g = 4,
        y = h + 3 & -4,
        b = l + 3 & -4,
        v = new Array(c);
      let x = h * l;
      n === 0 && (x = y * b);
      let E;
      if (n !== 0 ? On[n] ? E = On[n] * ml[a] : E = gl[n] : E = Bs[o], E === void 0) throw new Error("Unable to resolve the pixel format stored in the *.ktx file!");
      const M = e ? Mp(s, p, r) : null;
      let S = x * E,
        w = h,
        F = l,
        G = y,
        Y = b,
        N = Dn + p;
      for (let T = 0; T < f; T++) {
        const I = s.getUint32(N, r);
        let $ = N + 4;
        for (let W = 0; W < c; W++) {
          let V = v[W];
          V || (V = v[W] = new Array(f)), V[T] = {
            levelID: T,
            levelWidth: f > 1 || n !== 0 ? w : G,
            levelHeight: f > 1 || n !== 0 ? F : Y,
            levelBuffer: new Uint8Array(t, $, S)
          }, $ += S
        }
        N += I + 4, N = N % 4 !== 0 ? N + 4 - N % 4 : N, w = w >> 1 || 1, F = F >> 1 || 1, G = w + m - 1 & ~(m - 1), Y = F + g - 1 & ~(g - 1), S = G * Y * E
      }
      return n !== 0 ? {
        uncompressed: v.map(T => {
          let I = T[0].levelBuffer,
            $ = !1;
          return n === k.FLOAT ? I = new Float32Array(T[0].levelBuffer.buffer, T[0].levelBuffer.byteOffset, T[0].levelBuffer.byteLength / 4) : n === k.UNSIGNED_INT ? ($ = !0, I = new Uint32Array(T[0].levelBuffer.buffer, T[0].levelBuffer.byteOffset, T[0].levelBuffer.byteLength / 4)) : n === k.INT && ($ = !0, I = new Int32Array(T[0].levelBuffer.buffer, T[0].levelBuffer.byteOffset, T[0].levelBuffer.byteLength / 4)), {
            resource: new ms(I, {
              width: T[0].levelWidth,
              height: T[0].levelHeight
            }),
            type: n,
            format: $ ? Pp(a) : a
          }
        }),
        kvData: M
      } : {
        compressed: v.map(T => new Ae(null, {
          format: o,
          width: h,
          height: l,
          levels: f,
          levelBuffers: T
        })),
        kvData: M
      }
    }
  
    function Cp(i, t) {
      for (let e = 0; e < pl.length; e++)
        if (t.getUint8(e) !== pl[e]) return !1;
      return !0
    }
  
    function Pp(i) {
      switch (i) {
        case A.RGBA:
          return A.RGBA_INTEGER;
        case A.RGB:
          return A.RGB_INTEGER;
        case A.RG:
          return A.RG_INTEGER;
        case A.RED:
          return A.RED_INTEGER;
        default:
          return i
      }
    }
  
    function Mp(i, t, e) {
      const s = new Map;
      let r = 0;
      for (; r < t;) {
        const n = i.getUint32(Dn + r, e),
          a = Dn + r + 4,
          o = 3 - (n + 3) % 4;
        if (n === 0 || n > t - r) {
          console.error("KTXLoader: keyAndValueByteSize out of bounds");
          break
        }
        let h = 0;
        for (; h < n && i.getUint8(a + h) !== 0; h++);
        if (h === -1) {
          console.error("KTXLoader: Failed to find null byte terminating kvData key");
          break
        }
        const l = new TextDecoder().decode(new Uint8Array(i.buffer, a, h)),
          u = new DataView(i.buffer, a + h + 1, n - h - 1);
        s.set(l, u), r += 4 + n + o
      }
      return s
    }
    var Dp = Object.defineProperty,
      vl = Object.getOwnPropertySymbols,
      Op = Object.prototype.hasOwnProperty,
      Bp = Object.prototype.propertyIsEnumerable,
      yl = (i, t, e) => t in i ? Dp(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Fp = (i, t) => {
        for (var e in t || (t = {})) Op.call(t, e) && yl(i, e, t[e]);
        if (vl)
          for (var e of vl(t)) Bp.call(t, e) && yl(i, e, t[e]);
        return i
      };
    const xl = {
      extension: {
        type: R.LoadParser,
        priority: Nt.High
      },
      name: "loadDDS",
      test(i) {
        return ce(i, ".dds")
      },
      async load(i, t, e) {
        const s = await (await O.ADAPTER.fetch(i)).arrayBuffer(),
          r = fl(s).map(n => {
            const a = new X(n, Fp({
              mipmap: Ut.OFF,
              alphaMode: bt.NO_PREMULTIPLIED_ALPHA,
              resolution: Kt(i)
            }, t.data));
            return qe(a, e, i)
          });
        return r.length === 1 ? r[0] : r
      },
      unload(i) {
        Array.isArray(i) ? i.forEach(t => t.destroy(!0)) : i.destroy(!0)
      }
    };
    L.add(xl);
    var Np = Object.defineProperty,
      bl = Object.getOwnPropertySymbols,
      Lp = Object.prototype.hasOwnProperty,
      Up = Object.prototype.propertyIsEnumerable,
      Tl = (i, t, e) => t in i ? Np(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      kp = (i, t) => {
        for (var e in t || (t = {})) Lp.call(t, e) && Tl(i, e, t[e]);
        if (bl)
          for (var e of bl(t)) Up.call(t, e) && Tl(i, e, t[e]);
        return i
      };
    const El = {
      extension: {
        type: R.LoadParser,
        priority: Nt.High
      },
      name: "loadKTX",
      test(i) {
        return ce(i, ".ktx")
      },
      async load(i, t, e) {
        const s = await (await O.ADAPTER.fetch(i)).arrayBuffer(),
          {
            compressed: r,
            uncompressed: n,
            kvData: a
          } = _l(i, s),
          o = r != null ? r : n,
          h = kp({
            mipmap: Ut.OFF,
            alphaMode: bt.NO_PREMULTIPLIED_ALPHA,
            resolution: Kt(i)
          }, t.data),
          l = o.map(u => {
            var c;
            o === n && Object.assign(h, {
              type: u.type,
              format: u.format
            });
            const d = (c = u.resource) != null ? c : u,
              f = new X(d, h);
            return f.ktxKeyValueData = a, qe(f, e, i)
          });
        return l.length === 1 ? l[0] : l
      },
      unload(i) {
        Array.isArray(i) ? i.forEach(t => t.destroy(!0)) : i.destroy(!0)
      }
    };
    L.add(El);
    const Al = {
      extension: R.ResolveParser,
      test: i => {
        const t = i.split("?")[0].split(".").pop();
        return ["basis", "ktx", "dds"].includes(t)
      },
      parse: i => {
        var t, e, s, r;
        if (i.split("?")[0].split(".").pop() === "ktx") {
          const n = [".s3tc.ktx", ".s3tc_sRGB.ktx", ".etc.ktx", ".etc1.ktx", ".pvrt.ktx", ".atc.ktx", ".astc.ktx"];
          if (n.some(a => i.endsWith(a))) return {
            resolution: parseFloat((e = (t = O.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) != null ? e : "1"),
            format: n.find(a => i.endsWith(a)),
            src: i
          }
        }
        return {
          resolution: parseFloat((r = (s = O.RETINA_PREFIX.exec(i)) == null ? void 0 : s[1]) != null ? r : "1"),
          format: i.split(".").pop(),
          src: i
        }
      }
    };
    L.add(Al);
    const Gi = new j,
      Gp = 4,
      wl = class Ys {
        constructor(t) {
          this.renderer = t, this._rendererPremultipliedAlpha = !1
        }
        contextChange() {
          var t;
          const e = (t = this.renderer) == null ? void 0 : t.gl.getContextAttributes();
          this._rendererPremultipliedAlpha = !!(e && e.alpha && e.premultipliedAlpha)
        }
        async image(t, e, s, r) {
          const n = new Image;
          return n.src = await this.base64(t, e, s, r), n
        }
        async base64(t, e, s, r) {
          const n = this.canvas(t, r);
          if (n.toBlob !== void 0) return new Promise((a, o) => {
            n.toBlob(h => {
              if (!h) {
                o(new Error("ICanvas.toBlob failed!"));
                return
              }
              const l = new FileReader;
              l.onload = () => a(l.result), l.onerror = o, l.readAsDataURL(h)
            }, e, s)
          });
          if (n.toDataURL !== void 0) return n.toDataURL(e, s);
          if (n.convertToBlob !== void 0) {
            const a = await n.convertToBlob({
              type: e,
              quality: s
            });
            return new Promise((o, h) => {
              const l = new FileReader;
              l.onload = () => o(l.result), l.onerror = h, l.readAsDataURL(a)
            })
          }
          throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")
        }
        canvas(t, e) {
          const {
            pixels: s,
            width: r,
            height: n,
            flipY: a,
            premultipliedAlpha: o
          } = this._rawPixels(t, e);
          a && Ys._flipY(s, r, n), o && Ys._unpremultiplyAlpha(s);
          const h = new Ja(r, n, 1),
            l = new ImageData(new Uint8ClampedArray(s.buffer), r, n);
          return h.context.putImageData(l, 0, 0), h.canvas
        }
        pixels(t, e) {
          const {
            pixels: s,
            width: r,
            height: n,
            flipY: a,
            premultipliedAlpha: o
          } = this._rawPixels(t, e);
          return a && Ys._flipY(s, r, n), o && Ys._unpremultiplyAlpha(s), s
        }
        _rawPixels(t, e) {
          const s = this.renderer;
          if (!s) throw new Error("The Extract has already been destroyed");
          let r, n = !1,
            a = !1,
            o, h = !1;
          t && (t instanceof xe ? o = t : (o = s.generateTexture(t, {
            region: e,
            resolution: s.resolution,
            multisample: s.multisample
          }), h = !0, e && (Gi.width = e.width, Gi.height = e.height, e = Gi)));
          const l = s.gl;
          if (o) {
            if (r = o.baseTexture.resolution, e = e != null ? e : o.frame, n = !1, a = o.baseTexture.alphaMode > 0 && o.baseTexture.format === A.RGBA, !h) {
              s.renderTexture.bind(o);
              const f = o.framebuffer.glFramebuffers[s.CONTEXT_UID];
              f.blitFramebuffer && s.framebuffer.bind(f.blitFramebuffer)
            }
          } else r = s.resolution, e || (e = Gi, e.width = s.width / r, e.height = s.height / r), n = !0, a = this._rendererPremultipliedAlpha, s.renderTexture.bind();
          const u = Math.max(Math.round(e.width * r), 1),
            c = Math.max(Math.round(e.height * r), 1),
            d = new Uint8Array(Gp * u * c);
          return l.readPixels(Math.round(e.x * r), Math.round(e.y * r), u, c, l.RGBA, l.UNSIGNED_BYTE, d), h && (o == null || o.destroy(!0)), {
            pixels: d,
            width: u,
            height: c,
            flipY: n,
            premultipliedAlpha: a
          }
        }
        destroy() {
          this.renderer = null
        }
        static _flipY(t, e, s) {
          const r = e << 2,
            n = s >> 1,
            a = new Uint8Array(r);
          for (let o = 0; o < n; o++) {
            const h = o * r,
              l = (s - o - 1) * r;
            a.set(t.subarray(h, h + r)), t.copyWithin(h, l, l + r), t.set(a, l)
          }
        }
        static _unpremultiplyAlpha(t) {
          t instanceof Uint8ClampedArray && (t = new Uint8Array(t.buffer));
          const e = t.length;
          for (let s = 0; s < e; s += 4) {
            const r = t[s + 3];
            if (r !== 0) {
              const n = 255.001 / r;
              t[s] = t[s] * n + .5, t[s + 1] = t[s + 1] * n + .5, t[s + 2] = t[s + 2] * n + .5
            }
          }
        }
      };
    wl.extension = {
      name: "extract",
      type: R.RendererSystem
    };
    let Sl = wl;
    L.add(Sl);
    const Fs = {
      build(i) {
        const t = i.points;
        let e, s, r, n, a, o;
        if (i.type === ft.CIRC) {
          const p = i.shape;
          e = p.x, s = p.y, a = o = p.radius, r = n = 0
        } else if (i.type === ft.ELIP) {
          const p = i.shape;
          e = p.x, s = p.y, a = p.width, o = p.height, r = n = 0
        } else {
          const p = i.shape,
            m = p.width / 2,
            g = p.height / 2;
          e = p.x + m, s = p.y + g, a = o = Math.max(0, Math.min(p.radius, Math.min(m, g))), r = m - a, n = g - o
        }
        if (!(a >= 0 && o >= 0 && r >= 0 && n >= 0)) {
          t.length = 0;
          return
        }
        const h = Math.ceil(2.3 * Math.sqrt(a + o)),
          l = h * 8 + (r ? 4 : 0) + (n ? 4 : 0);
        if (t.length = l, l === 0) return;
        if (h === 0) {
          t.length = 8, t[0] = t[6] = e + r, t[1] = t[3] = s + n, t[2] = t[4] = e - r, t[5] = t[7] = s - n;
          return
        }
        let u = 0,
          c = h * 4 + (r ? 2 : 0) + 2,
          d = c,
          f = l; {
          const p = r + a,
            m = n,
            g = e + p,
            y = e - p,
            b = s + m;
          if (t[u++] = g, t[u++] = b, t[--c] = b, t[--c] = y, n) {
            const v = s - m;
            t[d++] = y, t[d++] = v, t[--f] = v, t[--f] = g
          }
        }
        for (let p = 1; p < h; p++) {
          const m = Math.PI / 2 * (p / h),
            g = r + Math.cos(m) * a,
            y = n + Math.sin(m) * o,
            b = e + g,
            v = e - g,
            x = s + y,
            E = s - y;
          t[u++] = b, t[u++] = x, t[--c] = x, t[--c] = v, t[d++] = v, t[d++] = E, t[--f] = E, t[--f] = b
        } {
          const p = r,
            m = n + o,
            g = e + p,
            y = e - p,
            b = s + m,
            v = s - m;
          t[u++] = g, t[u++] = b, t[--f] = v, t[--f] = g, r && (t[u++] = y, t[u++] = b, t[--f] = v, t[--f] = y)
        }
      },
      triangulate(i, t) {
        const e = i.points,
          s = t.points,
          r = t.indices;
        if (e.length === 0) return;
        let n = s.length / 2;
        const a = n;
        let o, h;
        if (i.type !== ft.RREC) {
          const u = i.shape;
          o = u.x, h = u.y
        } else {
          const u = i.shape;
          o = u.x + u.width / 2, h = u.y + u.height / 2
        }
        const l = i.matrix;
        s.push(i.matrix ? l.a * o + l.c * h + l.tx : o, i.matrix ? l.b * o + l.d * h + l.ty : h), n++, s.push(e[0], e[1]);
        for (let u = 2; u < e.length; u += 2) s.push(e[u], e[u + 1]), r.push(n++, a, n);
        r.push(a + 1, a, n)
      }
    };
  
    function Il(i, t = !1) {
      const e = i.length;
      if (e < 6) return;
      let s = 0;
      for (let r = 0, n = i[e - 2], a = i[e - 1]; r < e; r += 2) {
        const o = i[r],
          h = i[r + 1];
        s += (o - n) * (h + a), n = o, a = h
      }
      if (!t && s > 0 || t && s <= 0) {
        const r = e / 2;
        for (let n = r + r % 2; n < e; n += 2) {
          const a = e - n - 2,
            o = e - n - 1,
            h = n,
            l = n + 1;
          [i[a], i[h]] = [i[h], i[a]], [i[o], i[l]] = [i[l], i[o]]
        }
      }
    }
    const Bn = {
        build(i) {
          i.points = i.shape.points.slice()
        },
        triangulate(i, t) {
          let e = i.points;
          const s = i.holes,
            r = t.points,
            n = t.indices;
          if (e.length >= 6) {
            Il(e, !1);
            const a = [];
            for (let l = 0; l < s.length; l++) {
              const u = s[l];
              Il(u.points, !0), a.push(e.length / 2), e = e.concat(u.points)
            }
            const o = Aa(e, a, 2);
            if (!o) return;
            const h = r.length / 2;
            for (let l = 0; l < o.length; l += 3) n.push(o[l] + h), n.push(o[l + 1] + h), n.push(o[l + 2] + h);
            for (let l = 0; l < e.length; l++) r.push(e[l])
          }
        }
      },
      Rl = {
        build(i) {
          const t = i.shape,
            e = t.x,
            s = t.y,
            r = t.width,
            n = t.height,
            a = i.points;
          a.length = 0, r >= 0 && n >= 0 && a.push(e, s, e + r, s, e + r, s + n, e, s + n)
        },
        triangulate(i, t) {
          const e = i.points,
            s = t.points;
          if (e.length === 0) return;
          const r = s.length / 2;
          s.push(e[0], e[1], e[2], e[3], e[6], e[7], e[4], e[5]), t.indices.push(r, r + 1, r + 2, r + 1, r + 2, r + 3)
        }
      },
      Cl = {
        build(i) {
          Fs.build(i)
        },
        triangulate(i, t) {
          Fs.triangulate(i, t)
        }
      };
    var Rt = (i => (i.MITER = "miter", i.BEVEL = "bevel", i.ROUND = "round", i))(Rt || {}),
      fe = (i => (i.BUTT = "butt", i.ROUND = "round", i.SQUARE = "square", i))(fe || {});
    const we = {
        adaptive: !0,
        maxLength: 10,
        minSegments: 8,
        maxSegments: 2048,
        epsilon: 1e-4,
        _segmentsCount(i, t = 20) {
          if (!this.adaptive || !i || isNaN(i)) return t;
          let e = Math.ceil(i / this.maxLength);
          return e < this.minSegments ? e = this.minSegments : e > this.maxSegments && (e = this.maxSegments), e
        }
      },
      $p = we;
    class Fn {
      static curveTo(t, e, s, r, n, a) {
        const o = a[a.length - 2],
          h = a[a.length - 1] - e,
          l = o - t,
          u = r - e,
          c = s - t,
          d = Math.abs(h * c - l * u);
        if (d < 1e-8 || n === 0) return (a[a.length - 2] !== t || a[a.length - 1] !== e) && a.push(t, e), null;
        const f = h * h + l * l,
          p = u * u + c * c,
          m = h * u + l * c,
          g = n * Math.sqrt(f) / d,
          y = n * Math.sqrt(p) / d,
          b = g * m / f,
          v = y * m / p,
          x = g * c + y * l,
          E = g * u + y * h,
          M = l * (y + b),
          S = h * (y + b),
          w = c * (g + v),
          F = u * (g + v),
          G = Math.atan2(S - E, M - x),
          Y = Math.atan2(F - E, w - x);
        return {
          cx: x + t,
          cy: E + e,
          radius: n,
          startAngle: G,
          endAngle: Y,
          anticlockwise: l * u > c * h
        }
      }
      static arc(t, e, s, r, n, a, o, h, l) {
        const u = o - a,
          c = we._segmentsCount(Math.abs(u) * n, Math.ceil(Math.abs(u) / _s) * 40),
          d = u / (c * 2),
          f = d * 2,
          p = Math.cos(d),
          m = Math.sin(d),
          g = c - 1,
          y = g % 1 / g;
        for (let b = 0; b <= g; ++b) {
          const v = b + y * b,
            x = d + a + f * v,
            E = Math.cos(x),
            M = -Math.sin(x);
          l.push((p * E + m * M) * n + s, (p * -M + m * E) * n + r)
        }
      }
    }
    class Pl {
      constructor() {
        this.reset()
      }
      begin(t, e, s) {
        this.reset(), this.style = t, this.start = e, this.attribStart = s
      }
      end(t, e) {
        this.attribSize = e - this.attribStart, this.size = t - this.start
      }
      reset() {
        this.style = null, this.size = 0, this.start = 0, this.attribStart = 0, this.attribSize = 0
      }
    }
    class $i {
      static curveLength(t, e, s, r, n, a, o, h) {
        let l = 0,
          u = 0,
          c = 0,
          d = 0,
          f = 0,
          p = 0,
          m = 0,
          g = 0,
          y = 0,
          b = 0,
          v = 0,
          x = t,
          E = e;
        for (let M = 1; M <= 10; ++M) u = M / 10, c = u * u, d = c * u, f = 1 - u, p = f * f, m = p * f, g = m * t + 3 * p * u * s + 3 * f * c * n + d * o, y = m * e + 3 * p * u * r + 3 * f * c * a + d * h, b = x - g, v = E - y, x = g, E = y, l += Math.sqrt(b * b + v * v);
        return l
      }
      static curveTo(t, e, s, r, n, a, o) {
        const h = o[o.length - 2],
          l = o[o.length - 1];
        o.length -= 2;
        const u = we._segmentsCount($i.curveLength(h, l, t, e, s, r, n, a));
        let c = 0,
          d = 0,
          f = 0,
          p = 0,
          m = 0;
        o.push(h, l);
        for (let g = 1, y = 0; g <= u; ++g) y = g / u, c = 1 - y, d = c * c, f = d * c, p = y * y, m = p * y, o.push(f * h + 3 * d * y * t + 3 * c * p * s + m * n, f * l + 3 * d * y * e + 3 * c * p * r + m * a)
      }
    }
  
    function Ml(i, t, e, s, r, n, a, o) {
      const h = i - e * r,
        l = t - s * r,
        u = i + e * n,
        c = t + s * n;
      let d, f;
      a ? (d = s, f = -e) : (d = -s, f = e);
      const p = h + d,
        m = l + f,
        g = u + d,
        y = c + f;
      return o.push(p, m, g, y), 2
    }
  
    function Ge(i, t, e, s, r, n, a, o) {
      const h = e - i,
        l = s - t;
      let u = Math.atan2(h, l),
        c = Math.atan2(r - i, n - t);
      o && u < c ? u += Math.PI * 2 : !o && u > c && (c += Math.PI * 2);
      let d = u;
      const f = c - u,
        p = Math.abs(f),
        m = Math.sqrt(h * h + l * l),
        g = (15 * p * Math.sqrt(m) / Math.PI >> 0) + 1,
        y = f / g;
      if (d += y, o) {
        a.push(i, t, e, s);
        for (let b = 1, v = d; b < g; b++, v += y) a.push(i, t, i + Math.sin(v) * m, t + Math.cos(v) * m);
        a.push(i, t, r, n)
      } else {
        a.push(e, s, i, t);
        for (let b = 1, v = d; b < g; b++, v += y) a.push(i + Math.sin(v) * m, t + Math.cos(v) * m, i, t);
        a.push(r, n, i, t)
      }
      return g * 2
    }
  
    function Hp(i, t) {
      const e = i.shape;
      let s = i.points || e.points.slice();
      const r = t.closePointEps;
      if (s.length === 0) return;
      const n = i.lineStyle,
        a = new q(s[0], s[1]),
        o = new q(s[s.length - 2], s[s.length - 1]),
        h = e.type !== ft.POLY || e.closeStroke,
        l = Math.abs(a.x - o.x) < r && Math.abs(a.y - o.y) < r;
      if (h) {
        s = s.slice(), l && (s.pop(), s.pop(), o.set(s[s.length - 2], s[s.length - 1]));
        const V = (a.x + o.x) * .5,
          z = (o.y + a.y) * .5;
        s.unshift(V, z), s.push(V, z)
      }
      const u = t.points,
        c = s.length / 2;
      let d = s.length;
      const f = u.length / 2,
        p = n.width / 2,
        m = p * p,
        g = n.miterLimit * n.miterLimit;
      let y = s[0],
        b = s[1],
        v = s[2],
        x = s[3],
        E = 0,
        M = 0,
        S = -(b - x),
        w = y - v,
        F = 0,
        G = 0,
        Y = Math.sqrt(S * S + w * w);
      S /= Y, w /= Y, S *= p, w *= p;
      const N = n.alignment,
        T = (1 - N) * 2,
        I = N * 2;
      h || (n.cap === fe.ROUND ? d += Ge(y - S * (T - I) * .5, b - w * (T - I) * .5, y - S * T, b - w * T, y + S * I, b + w * I, u, !0) + 2 : n.cap === fe.SQUARE && (d += Ml(y, b, S, w, T, I, !0, u))), u.push(y - S * T, b - w * T, y + S * I, b + w * I);
      for (let V = 1; V < c - 1; ++V) {
        y = s[(V - 1) * 2], b = s[(V - 1) * 2 + 1], v = s[V * 2], x = s[V * 2 + 1], E = s[(V + 1) * 2], M = s[(V + 1) * 2 + 1], S = -(b - x), w = y - v, Y = Math.sqrt(S * S + w * w), S /= Y, w /= Y, S *= p, w *= p, F = -(x - M), G = v - E, Y = Math.sqrt(F * F + G * G), F /= Y, G /= Y, F *= p, G *= p;
        const z = v - y,
          ot = b - x,
          P = v - E,
          C = M - x,
          K = z * P + ot * C,
          Q = ot * P - C * z,
          J = Q < 0;
        if (Math.abs(Q) < .001 * Math.abs(K)) {
          u.push(v - S * T, x - w * T, v + S * I, x + w * I), K >= 0 && (n.join === Rt.ROUND ? d += Ge(v, x, v - S * T, x - w * T, v - F * T, x - G * T, u, !1) + 4 : d += 2, u.push(v - F * I, x - G * I, v + F * T, x + G * T));
          continue
        }
        const mt = (-S + y) * (-w + x) - (-S + v) * (-w + b),
          lt = (-F + E) * (-G + x) - (-F + v) * (-G + M),
          gt = (z * lt - P * mt) / Q,
          xt = (C * mt - ot * lt) / Q,
          Ct = (gt - v) * (gt - v) + (xt - x) * (xt - x),
          _t = v + (gt - v) * T,
          it = x + (xt - x) * T,
          ut = v - (gt - v) * I,
          ct = x - (xt - x) * I,
          te = Math.min(z * z + ot * ot, P * P + C * C),
          ee = J ? T : I,
          js = te + ee * ee * m,
          Fm = Ct <= js;
        let er = n.join;
        if (er === Rt.MITER && Ct / m > g && (er = Rt.BEVEL), Fm) switch (er) {
          case Rt.MITER: {
            u.push(_t, it, ut, ct);
            break
          }
          case Rt.BEVEL: {
            J ? u.push(_t, it, v + S * I, x + w * I, _t, it, v + F * I, x + G * I) : u.push(v - S * T, x - w * T, ut, ct, v - F * T, x - G * T, ut, ct), d += 2;
            break
          }
          case Rt.ROUND: {
            J ? (u.push(_t, it, v + S * I, x + w * I), d += Ge(v, x, v + S * I, x + w * I, v + F * I, x + G * I, u, !0) + 4, u.push(_t, it, v + F * I, x + G * I)) : (u.push(v - S * T, x - w * T, ut, ct), d += Ge(v, x, v - S * T, x - w * T, v - F * T, x - G * T, u, !1) + 4, u.push(v - F * T, x - G * T, ut, ct));
            break
          }
        } else {
          switch (u.push(v - S * T, x - w * T, v + S * I, x + w * I), er) {
            case Rt.MITER: {
              J ? u.push(ut, ct, ut, ct) : u.push(_t, it, _t, it), d += 2;
              break
            }
            case Rt.ROUND: {
              J ? d += Ge(v, x, v + S * I, x + w * I, v + F * I, x + G * I, u, !0) + 2 : d += Ge(v, x, v - S * T, x - w * T, v - F * T, x - G * T, u, !1) + 2;
              break
            }
          }
          u.push(v - F * T, x - G * T, v + F * I, x + G * I), d += 2
        }
      }
      y = s[(c - 2) * 2], b = s[(c - 2) * 2 + 1], v = s[(c - 1) * 2], x = s[(c - 1) * 2 + 1], S = -(b - x), w = y - v, Y = Math.sqrt(S * S + w * w), S /= Y, w /= Y, S *= p, w *= p, u.push(v - S * T, x - w * T, v + S * I, x + w * I), h || (n.cap === fe.ROUND ? d += Ge(v - S * (T - I) * .5, x - w * (T - I) * .5, v - S * T, x - w * T, v + S * I, x + w * I, u, !1) + 2 : n.cap === fe.SQUARE && (d += Ml(v, x, S, w, T, I, !1, u)));
      const $ = t.indices,
        W = we.epsilon * we.epsilon;
      for (let V = f; V < d + f - 2; ++V) y = u[V * 2], b = u[V * 2 + 1], v = u[(V + 1) * 2], x = u[(V + 1) * 2 + 1], E = u[(V + 2) * 2], M = u[(V + 2) * 2 + 1], !(Math.abs(y * (x - M) + v * (M - b) + E * (b - x)) < W) && $.push(V, V + 1, V + 2)
    }
  
    function Vp(i, t) {
      let e = 0;
      const s = i.shape,
        r = i.points || s.points,
        n = s.type !== ft.POLY || s.closeStroke;
      if (r.length === 0) return;
      const a = t.points,
        o = t.indices,
        h = r.length / 2,
        l = a.length / 2;
      let u = l;
      for (a.push(r[0], r[1]), e = 1; e < h; e++) a.push(r[e * 2], r[e * 2 + 1]), o.push(u, u + 1), u++;
      n && o.push(u, l)
    }
  
    function Nn(i, t) {
      i.lineStyle.native ? Vp(i, t) : Hp(i, t)
    }
    class Hi {
      static curveLength(t, e, s, r, n, a) {
        const o = t - 2 * s + n,
          h = e - 2 * r + a,
          l = 2 * s - 2 * t,
          u = 2 * r - 2 * e,
          c = 4 * (o * o + h * h),
          d = 4 * (o * l + h * u),
          f = l * l + u * u,
          p = 2 * Math.sqrt(c + d + f),
          m = Math.sqrt(c),
          g = 2 * c * m,
          y = 2 * Math.sqrt(f),
          b = d / m;
        return (g * p + m * d * (p - y) + (4 * f * c - d * d) * Math.log((2 * m + b + p) / (b + y))) / (4 * g)
      }
      static curveTo(t, e, s, r, n) {
        const a = n[n.length - 2],
          o = n[n.length - 1],
          h = we._segmentsCount(Hi.curveLength(a, o, t, e, s, r));
        let l = 0,
          u = 0;
        for (let c = 1; c <= h; ++c) {
          const d = c / h;
          l = a + (t - a) * d, u = o + (e - o) * d, n.push(l + (t + (s - t) * d - l) * d, u + (e + (r - e) * d - u) * d)
        }
      }
    }
    const Vi = {
        [ft.POLY]: Bn,
        [ft.CIRC]: Fs,
        [ft.ELIP]: Fs,
        [ft.RECT]: Rl,
        [ft.RREC]: Cl
      },
      Ln = [],
      Ns = [];
    class Ls {
      constructor(t, e = null, s = null, r = null) {
        this.points = [], this.holes = [], this.shape = t, this.lineStyle = s, this.fillStyle = e, this.matrix = r, this.type = t.type
      }
      clone() {
        return new Ls(this.shape, this.fillStyle, this.lineStyle, this.matrix)
      }
      destroy() {
        this.shape = null, this.holes.length = 0, this.holes = null, this.points.length = 0, this.points = null, this.lineStyle = null, this.fillStyle = null
      }
    }
    const Qe = new q,
      Dl = class hu extends Gr {
        constructor() {
          super(), this.closePointEps = 1e-4, this.boundsPadding = 0, this.uvsFloat32 = null, this.indicesUint16 = null, this.batchable = !1, this.points = [], this.colors = [], this.uvs = [], this.indices = [], this.textureIds = [], this.graphicsData = [], this.drawCalls = [], this.batchDirty = -1, this.batches = [], this.dirty = 0, this.cacheDirty = -1, this.clearDirty = 0, this.shapeIndex = 0, this._bounds = new Rs, this.boundsDirty = -1
        }
        get bounds() {
          return this.updateBatches(), this.boundsDirty !== this.dirty && (this.boundsDirty = this.dirty, this.calculateBounds()), this._bounds
        }
        invalidate() {
          this.boundsDirty = -1, this.dirty++, this.batchDirty++, this.shapeIndex = 0, this.points.length = 0, this.colors.length = 0, this.uvs.length = 0, this.indices.length = 0, this.textureIds.length = 0;
          for (let t = 0; t < this.drawCalls.length; t++) this.drawCalls[t].texArray.clear(), Ns.push(this.drawCalls[t]);
          this.drawCalls.length = 0;
          for (let t = 0; t < this.batches.length; t++) {
            const e = this.batches[t];
            e.reset(), Ln.push(e)
          }
          this.batches.length = 0
        }
        clear() {
          return this.graphicsData.length > 0 && (this.invalidate(), this.clearDirty++, this.graphicsData.length = 0), this
        }
        drawShape(t, e = null, s = null, r = null) {
          const n = new Ls(t, e, s, r);
          return this.graphicsData.push(n), this.dirty++, this
        }
        drawHole(t, e = null) {
          if (!this.graphicsData.length) return null;
          const s = new Ls(t, null, null, e),
            r = this.graphicsData[this.graphicsData.length - 1];
          return s.lineStyle = r.lineStyle, r.holes.push(s), this.dirty++, this
        }
        destroy() {
          super.destroy();
          for (let t = 0; t < this.graphicsData.length; ++t) this.graphicsData[t].destroy();
          this.points.length = 0, this.points = null, this.colors.length = 0, this.colors = null, this.uvs.length = 0, this.uvs = null, this.indices.length = 0, this.indices = null, this.indexBuffer.destroy(), this.indexBuffer = null, this.graphicsData.length = 0, this.graphicsData = null, this.drawCalls.length = 0, this.drawCalls = null, this.batches.length = 0, this.batches = null, this._bounds = null
        }
        containsPoint(t) {
          const e = this.graphicsData;
          for (let s = 0; s < e.length; ++s) {
            const r = e[s];
            if (r.fillStyle.visible && r.shape && (r.matrix ? r.matrix.applyInverse(t, Qe) : Qe.copyFrom(t), r.shape.contains(Qe.x, Qe.y))) {
              let n = !1;
              if (r.holes) {
                for (let a = 0; a < r.holes.length; a++)
                  if (r.holes[a].shape.contains(Qe.x, Qe.y)) {
                    n = !0;
                    break
                  }
              }
              if (!n) return !0
            }
          }
          return !1
        }
        updateBatches() {
          if (!this.graphicsData.length) {
            this.batchable = !0;
            return
          }
          if (!this.validateBatching()) return;
          this.cacheDirty = this.dirty;
          const t = this.uvs,
            e = this.graphicsData;
          let s = null,
            r = null;
          this.batches.length > 0 && (s = this.batches[this.batches.length - 1], r = s.style);
          for (let h = this.shapeIndex; h < e.length; h++) {
            this.shapeIndex++;
            const l = e[h],
              u = l.fillStyle,
              c = l.lineStyle;
            Vi[l.type].build(l), l.matrix && this.transformPoints(l.points, l.matrix), (u.visible || c.visible) && this.processHoles(l.holes);
            for (let d = 0; d < 2; d++) {
              const f = d === 0 ? u : c;
              if (!f.visible) continue;
              const p = f.texture.baseTexture,
                m = this.indices.length,
                g = this.points.length / 2;
              p.wrapMode = Wt.REPEAT, d === 0 ? this.processFill(l) : this.processLine(l);
              const y = this.points.length / 2 - g;
              y !== 0 && (s && !this._compareStyles(r, f) && (s.end(m, g), s = null), s || (s = Ln.pop() || new Pl, s.begin(f, m, g), this.batches.push(s), r = f), this.addUvs(this.points, t, f.texture, g, y, f.matrix))
            }
          }
          const n = this.indices.length,
            a = this.points.length / 2;
          if (s && s.end(n, a), this.batches.length === 0) {
            this.batchable = !0;
            return
          }
          const o = a > 65535;
          this.indicesUint16 && this.indices.length === this.indicesUint16.length && o === this.indicesUint16.BYTES_PER_ELEMENT > 2 ? this.indicesUint16.set(this.indices) : this.indicesUint16 = o ? new Uint32Array(this.indices) : new Uint16Array(this.indices), this.batchable = this.isBatchable(), this.batchable ? this.packBatches() : this.buildDrawCalls()
        }
        _compareStyles(t, e) {
          return !(!t || !e || t.texture.baseTexture !== e.texture.baseTexture || t.color + t.alpha !== e.color + e.alpha || !!t.native != !!e.native)
        }
        validateBatching() {
          if (this.dirty === this.cacheDirty || !this.graphicsData.length) return !1;
          for (let t = 0, e = this.graphicsData.length; t < e; t++) {
            const s = this.graphicsData[t],
              r = s.fillStyle,
              n = s.lineStyle;
            if (r && !r.texture.baseTexture.valid || n && !n.texture.baseTexture.valid) return !1
          }
          return !0
        }
        packBatches() {
          this.batchDirty++, this.uvsFloat32 = new Float32Array(this.uvs);
          const t = this.batches;
          for (let e = 0, s = t.length; e < s; e++) {
            const r = t[e];
            for (let n = 0; n < r.size; n++) {
              const a = r.start + n;
              this.indicesUint16[a] = this.indicesUint16[a] - r.attribStart
            }
          }
        }
        isBatchable() {
          if (this.points.length > 65535 * 2) return !1;
          const t = this.batches;
          for (let e = 0; e < t.length; e++)
            if (t[e].style.native) return !1;
          return this.points.length < hu.BATCHABLE_SIZE * 2
        }
        buildDrawCalls() {
          let t = ++X._globalBatch;
          for (let c = 0; c < this.drawCalls.length; c++) this.drawCalls[c].texArray.clear(), Ns.push(this.drawCalls[c]);
          this.drawCalls.length = 0;
          const e = this.colors,
            s = this.textureIds;
          let r = Ns.pop();
          r || (r = new ci, r.texArray = new bi), r.texArray.count = 0, r.start = 0, r.size = 0, r.type = Lt.TRIANGLES;
          let n = 0,
            a = null,
            o = 0,
            h = !1,
            l = Lt.TRIANGLES,
            u = 0;
          this.drawCalls.push(r);
          for (let c = 0; c < this.batches.length; c++) {
            const d = this.batches[c],
              f = 8,
              p = d.style,
              m = p.texture.baseTexture;
            h !== !!p.native && (h = !!p.native, l = h ? Lt.LINES : Lt.TRIANGLES, a = null, n = f, t++), a !== m && (a = m, m._batchEnabled !== t && (n === f && (t++, n = 0, r.size > 0 && (r = Ns.pop(), r || (r = new ci, r.texArray = new bi), this.drawCalls.push(r)), r.start = u, r.size = 0, r.texArray.count = 0, r.type = l), m.touched = 1, m._batchEnabled = t, m._batchLocation = n, m.wrapMode = Wt.REPEAT, r.texArray.elements[r.texArray.count++] = m, n++)), r.size += d.size, u += d.size, o = m._batchLocation, this.addColors(e, p.color, p.alpha, d.attribSize, d.attribStart), this.addTextureIds(s, o, d.attribSize, d.attribStart)
          }
          X._globalBatch = t, this.packAttributes()
        }
        packAttributes() {
          const t = this.points,
            e = this.uvs,
            s = this.colors,
            r = this.textureIds,
            n = new ArrayBuffer(t.length * 3 * 4),
            a = new Float32Array(n),
            o = new Uint32Array(n);
          let h = 0;
          for (let l = 0; l < t.length / 2; l++) a[h++] = t[l * 2], a[h++] = t[l * 2 + 1], a[h++] = e[l * 2], a[h++] = e[l * 2 + 1], o[h++] = s[l], a[h++] = r[l];
          this._buffer.update(n), this._indexBuffer.update(this.indicesUint16)
        }
        processFill(t) {
          t.holes.length ? Bn.triangulate(t, this) : Vi[t.type].triangulate(t, this)
        }
        processLine(t) {
          Nn(t, this);
          for (let e = 0; e < t.holes.length; e++) Nn(t.holes[e], this)
        }
        processHoles(t) {
          for (let e = 0; e < t.length; e++) {
            const s = t[e];
            Vi[s.type].build(s), s.matrix && this.transformPoints(s.points, s.matrix)
          }
        }
        calculateBounds() {
          const t = this._bounds;
          t.clear(), t.addVertexData(this.points, 0, this.points.length), t.pad(this.boundsPadding, this.boundsPadding)
        }
        transformPoints(t, e) {
          for (let s = 0; s < t.length / 2; s++) {
            const r = t[s * 2],
              n = t[s * 2 + 1];
            t[s * 2] = e.a * r + e.c * n + e.tx, t[s * 2 + 1] = e.b * r + e.d * n + e.ty
          }
        }
        addColors(t, e, s, r, n = 0) {
          const a = Z.shared.setValue(e).toLittleEndianNumber(),
            o = Z.shared.setValue(a).toPremultiplied(s);
          t.length = Math.max(t.length, n + r);
          for (let h = 0; h < r; h++) t[n + h] = o
        }
        addTextureIds(t, e, s, r = 0) {
          t.length = Math.max(t.length, r + s);
          for (let n = 0; n < s; n++) t[r + n] = e
        }
        addUvs(t, e, s, r, n, a = null) {
          let o = 0;
          const h = e.length,
            l = s.frame;
          for (; o < n;) {
            let c = t[(r + o) * 2],
              d = t[(r + o) * 2 + 1];
            if (a) {
              const f = a.a * c + a.c * d + a.tx;
              d = a.b * c + a.d * d + a.ty, c = f
            }
            o++, e.push(c / l.width, d / l.height)
          }
          const u = s.baseTexture;
          (l.width < u.width || l.height < u.height) && this.adjustUvs(e, s, h, n)
        }
        adjustUvs(t, e, s, r) {
          const n = e.baseTexture,
            a = 1e-6,
            o = s + r * 2,
            h = e.frame,
            l = h.width / n.width,
            u = h.height / n.height;
          let c = h.x / h.width,
            d = h.y / h.height,
            f = Math.floor(t[s] + a),
            p = Math.floor(t[s + 1] + a);
          for (let m = s + 2; m < o; m += 2) f = Math.min(f, Math.floor(t[m] + a)), p = Math.min(p, Math.floor(t[m + 1] + a));
          c -= f, d -= p;
          for (let m = s; m < o; m += 2) t[m] = (t[m] + c) * l, t[m + 1] = (t[m + 1] + d) * u
        }
      };
    Dl.BATCHABLE_SIZE = 100;
    let Ol = Dl;
    class Us {
      constructor() {
        this.color = 16777215, this.alpha = 1, this.texture = B.WHITE, this.matrix = null, this.visible = !1, this.reset()
      }
      clone() {
        const t = new Us;
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t
      }
      reset() {
        this.color = 16777215, this.alpha = 1, this.texture = B.WHITE, this.matrix = null, this.visible = !1
      }
      destroy() {
        this.texture = null, this.matrix = null
      }
    }
    class Xi extends Us {
      constructor() {
        super(...arguments), this.width = 0, this.alignment = .5, this.native = !1, this.cap = fe.BUTT, this.join = Rt.MITER, this.miterLimit = 10
      }
      clone() {
        const t = new Xi;
        return t.color = this.color, t.alpha = this.alpha, t.texture = this.texture, t.matrix = this.matrix, t.visible = this.visible, t.width = this.width, t.alignment = this.alignment, t.native = this.native, t.cap = this.cap, t.join = this.join, t.miterLimit = this.miterLimit, t
      }
      reset() {
        super.reset(), this.color = 0, this.alignment = .5, this.width = 0, this.native = !1, this.cap = fe.BUTT, this.join = Rt.MITER, this.miterLimit = 10
      }
    }
    const Un = {},
      kn = class ar extends It {
        constructor(t = null) {
          super(), this.shader = null, this.pluginName = "batch", this.currentPath = null, this.batches = [], this.batchTint = -1, this.batchDirty = -1, this.vertexData = null, this._fillStyle = new Us, this._lineStyle = new Xi, this._matrix = null, this._holeMode = !1, this.state = Zt.for2d(), this._geometry = t || new Ol, this._geometry.refCount++, this._transformID = -1, this._tintColor = new Z(16777215), this.blendMode = H.NORMAL
        }
        get geometry() {
          return this._geometry
        }
        clone() {
          return this.finishPoly(), new ar(this._geometry)
        }
        set blendMode(t) {
          this.state.blendMode = t
        }
        get blendMode() {
          return this.state.blendMode
        }
        get tint() {
          return this._tintColor.value
        }
        set tint(t) {
          this._tintColor.setValue(t)
        }
        get fill() {
          return this._fillStyle
        }
        get line() {
          return this._lineStyle
        }
        lineStyle(t = null, e = 0, s, r = .5, n = !1) {
          return typeof t == "number" && (t = {
            width: t,
            color: e,
            alpha: s,
            alignment: r,
            native: n
          }), this.lineTextureStyle(t)
        }
        lineTextureStyle(t) {
          const e = {
            width: 0,
            texture: B.WHITE,
            color: t != null && t.texture ? 16777215 : 0,
            matrix: null,
            alignment: .5,
            native: !1,
            cap: fe.BUTT,
            join: Rt.MITER,
            miterLimit: 10
          };
          t = Object.assign(e, t), this.normalizeColor(t), this.currentPath && this.startPoly();
          const s = t.width > 0 && t.alpha > 0;
          return s ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._lineStyle, {
            visible: s
          }, t)) : this._lineStyle.reset(), this
        }
        startPoly() {
          if (this.currentPath) {
            const t = this.currentPath.points,
              e = this.currentPath.points.length;
            e > 2 && (this.drawShape(this.currentPath), this.currentPath = new Pe, this.currentPath.closeStroke = !1, this.currentPath.points.push(t[e - 2], t[e - 1]))
          } else this.currentPath = new Pe, this.currentPath.closeStroke = !1
        }
        finishPoly() {
          this.currentPath && (this.currentPath.points.length > 2 ? (this.drawShape(this.currentPath), this.currentPath = null) : this.currentPath.points.length = 0)
        }
        moveTo(t, e) {
          return this.startPoly(), this.currentPath.points[0] = t, this.currentPath.points[1] = e, this
        }
        lineTo(t, e) {
          this.currentPath || this.moveTo(0, 0);
          const s = this.currentPath.points,
            r = s[s.length - 2],
            n = s[s.length - 1];
          return (r !== t || n !== e) && s.push(t, e), this
        }
        _initCurve(t = 0, e = 0) {
          this.currentPath ? this.currentPath.points.length === 0 && (this.currentPath.points = [t, e]) : this.moveTo(t, e)
        }
        quadraticCurveTo(t, e, s, r) {
          this._initCurve();
          const n = this.currentPath.points;
          return n.length === 0 && this.moveTo(0, 0), Hi.curveTo(t, e, s, r, n), this
        }
        bezierCurveTo(t, e, s, r, n, a) {
          return this._initCurve(), $i.curveTo(t, e, s, r, n, a, this.currentPath.points), this
        }
        arcTo(t, e, s, r, n) {
          this._initCurve(t, e);
          const a = this.currentPath.points,
            o = Fn.curveTo(t, e, s, r, n, a);
          if (o) {
            const {
              cx: h,
              cy: l,
              radius: u,
              startAngle: c,
              endAngle: d,
              anticlockwise: f
            } = o;
            this.arc(h, l, u, c, d, f)
          }
          return this
        }
        arc(t, e, s, r, n, a = !1) {
          if (r === n) return this;
          if (!a && n <= r ? n += _s : a && r <= n && (r += _s), n - r === 0) return this;
          const o = t + Math.cos(r) * s,
            h = e + Math.sin(r) * s,
            l = this._geometry.closePointEps;
          let u = this.currentPath ? this.currentPath.points : null;
          if (u) {
            const c = Math.abs(u[u.length - 2] - o),
              d = Math.abs(u[u.length - 1] - h);
            c < l && d < l || u.push(o, h)
          } else this.moveTo(o, h), u = this.currentPath.points;
          return Fn.arc(o, h, t, e, s, r, n, a, u), this
        }
        beginFill(t = 0, e) {
          return this.beginTextureFill({
            texture: B.WHITE,
            color: t,
            alpha: e
          })
        }
        normalizeColor(t) {
          var e, s;
          const r = Z.shared.setValue((e = t.color) != null ? e : 0);
          t.color = r.toNumber(), (s = t.alpha) != null || (t.alpha = r.alpha)
        }
        beginTextureFill(t) {
          const e = {
            texture: B.WHITE,
            color: 16777215,
            matrix: null
          };
          t = Object.assign(e, t), this.normalizeColor(t), this.currentPath && this.startPoly();
          const s = t.alpha > 0;
          return s ? (t.matrix && (t.matrix = t.matrix.clone(), t.matrix.invert()), Object.assign(this._fillStyle, {
            visible: s
          }, t)) : this._fillStyle.reset(), this
        }
        endFill() {
          return this.finishPoly(), this._fillStyle.reset(), this
        }
        drawRect(t, e, s, r) {
          return this.drawShape(new j(t, e, s, r))
        }
        drawRoundedRect(t, e, s, r, n) {
          return this.drawShape(new mi(t, e, s, r, n))
        }
        drawCircle(t, e, s) {
          return this.drawShape(new fi(t, e, s))
        }
        drawEllipse(t, e, s, r) {
          return this.drawShape(new pi(t, e, s, r))
        }
        drawPolygon(...t) {
          let e, s = !0;
          const r = t[0];
          r.points ? (s = r.closeStroke, e = r.points) : Array.isArray(t[0]) ? e = t[0] : e = t;
          const n = new Pe(e);
          return n.closeStroke = s, this.drawShape(n), this
        }
        drawShape(t) {
          return this._holeMode ? this._geometry.drawHole(t, this._matrix) : this._geometry.drawShape(t, this._fillStyle.clone(), this._lineStyle.clone(), this._matrix), this
        }
        clear() {
          return this._geometry.clear(), this._lineStyle.reset(), this._fillStyle.reset(), this._boundsID++, this._matrix = null, this._holeMode = !1, this.currentPath = null, this
        }
        isFastRect() {
          const t = this._geometry.graphicsData;
          return t.length === 1 && t[0].shape.type === ft.RECT && !t[0].matrix && !t[0].holes.length && !(t[0].lineStyle.visible && t[0].lineStyle.width)
        }
        _render(t) {
          this.finishPoly();
          const e = this._geometry;
          e.updateBatches(), e.batchable ? (this.batchDirty !== e.batchDirty && this._populateBatches(), this._renderBatched(t)) : (t.batch.flush(), this._renderDirect(t))
        }
        _populateBatches() {
          const t = this._geometry,
            e = this.blendMode,
            s = t.batches.length;
          this.batchTint = -1, this._transformID = -1, this.batchDirty = t.batchDirty, this.batches.length = s, this.vertexData = new Float32Array(t.points);
          for (let r = 0; r < s; r++) {
            const n = t.batches[r],
              a = n.style.color,
              o = new Float32Array(this.vertexData.buffer, n.attribStart * 4 * 2, n.attribSize * 2),
              h = new Float32Array(t.uvsFloat32.buffer, n.attribStart * 4 * 2, n.attribSize * 2),
              l = new Uint16Array(t.indicesUint16.buffer, n.start * 2, n.size),
              u = {
                vertexData: o,
                blendMode: e,
                indices: l,
                uvs: h,
                _batchRGB: Z.shared.setValue(a).toRgbArray(),
                _tintRGB: a,
                _texture: n.style.texture,
                alpha: n.style.alpha,
                worldAlpha: 1
              };
            this.batches[r] = u
          }
        }
        _renderBatched(t) {
          if (this.batches.length) {
            t.batch.setObjectRenderer(t.plugins[this.pluginName]), this.calculateVertices(), this.calculateTints();
            for (let e = 0, s = this.batches.length; e < s; e++) {
              const r = this.batches[e];
              r.worldAlpha = this.worldAlpha * r.alpha, t.plugins[this.pluginName].render(r)
            }
          }
        }
        _renderDirect(t) {
          const e = this._resolveDirectShader(t),
            s = this._geometry,
            r = this.worldAlpha,
            n = e.uniforms,
            a = s.drawCalls;
          n.translationMatrix = this.transform.worldTransform, Z.shared.setValue(this._tintColor).premultiply(r).toArray(n.tint), t.shader.bind(e), t.geometry.bind(s, e), t.state.set(this.state);
          for (let o = 0, h = a.length; o < h; o++) this._renderDrawCallDirect(t, s.drawCalls[o])
        }
        _renderDrawCallDirect(t, e) {
          const {
            texArray: s,
            type: r,
            size: n,
            start: a
          } = e, o = s.count;
          for (let h = 0; h < o; h++) t.texture.bind(s.elements[h], h);
          t.geometry.draw(r, n, a)
        }
        _resolveDirectShader(t) {
          let e = this.shader;
          const s = this.pluginName;
          if (!e) {
            if (!Un[s]) {
              const {
                maxTextures: r
              } = t.plugins[s], n = new Int32Array(r);
              for (let h = 0; h < r; h++) n[h] = h;
              const a = {
                  tint: new Float32Array([1, 1, 1, 1]),
                  translationMatrix: new tt,
                  default: Ot.from({
                    uSamplers: n
                  }, !0)
                },
                o = t.plugins[s]._shader.program;
              Un[s] = new Vt(o, a)
            }
            e = Un[s]
          }
          return e
        }
        _calculateBounds() {
          this.finishPoly();
          const t = this._geometry;
          if (!t.graphicsData.length) return;
          const {
            minX: e,
            minY: s,
            maxX: r,
            maxY: n
          } = t.bounds;
          this._bounds.addFrame(this.transform, e, s, r, n)
        }
        containsPoint(t) {
          return this.worldTransform.applyInverse(t, ar._TEMP_POINT), this._geometry.containsPoint(ar._TEMP_POINT)
        }
        calculateTints() {
          if (this.batchTint !== this.tint) {
            this.batchTint = this._tintColor.toNumber();
            for (let t = 0; t < this.batches.length; t++) {
              const e = this.batches[t];
              e._tintRGB = Z.shared.setValue(this._tintColor).multiply(e._batchRGB).toLittleEndianNumber()
            }
          }
        }
        calculateVertices() {
          const t = this.transform._worldID;
          if (this._transformID === t) return;
          this._transformID = t;
          const e = this.transform.worldTransform,
            s = e.a,
            r = e.b,
            n = e.c,
            a = e.d,
            o = e.tx,
            h = e.ty,
            l = this._geometry.points,
            u = this.vertexData;
          let c = 0;
          for (let d = 0; d < l.length; d += 2) {
            const f = l[d],
              p = l[d + 1];
            u[c++] = s * f + n * p + o, u[c++] = a * p + r * f + h
          }
        }
        closePath() {
          const t = this.currentPath;
          return t && (t.closeStroke = !0, this.finishPoly()), this
        }
        setMatrix(t) {
          return this._matrix = t, this
        }
        beginHole() {
          return this.finishPoly(), this._holeMode = !0, this
        }
        endHole() {
          return this.finishPoly(), this._holeMode = !1, this
        }
        destroy(t) {
          this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose(), this._matrix = null, this.currentPath = null, this._lineStyle.destroy(), this._lineStyle = null, this._fillStyle.destroy(), this._fillStyle = null, this._geometry = null, this.shader = null, this.vertexData = null, this.batches.length = 0, this.batches = null, super.destroy(t)
        }
      };
    kn.curves = we, kn._TEMP_POINT = new q;
    let Gn = kn;
    const Xp = {
      buildPoly: Bn,
      buildCircle: Fs,
      buildRectangle: Rl,
      buildRoundedRectangle: Cl,
      buildLine: Nn,
      ArcUtils: Fn,
      BezierUtils: $i,
      QuadraticUtils: Hi,
      BatchPart: Pl,
      FILL_COMMANDS: Vi,
      BATCH_POOL: Ln,
      DRAW_CALL_POOL: Ns
    };
    class Bl {
      constructor(t, e) {
        this.uvBuffer = t, this.uvMatrix = e, this.data = null, this._bufferUpdateId = -1, this._textureUpdateId = -1, this._updateID = 0
      }
      update(t) {
        if (!t && this._bufferUpdateId === this.uvBuffer._updateID && this._textureUpdateId === this.uvMatrix._updateID) return;
        this._bufferUpdateId = this.uvBuffer._updateID, this._textureUpdateId = this.uvMatrix._updateID;
        const e = this.uvBuffer.data;
        (!this.data || this.data.length !== e.length) && (this.data = new Float32Array(e.length)), this.uvMatrix.multiplyUvs(e, this.data), this._updateID++
      }
    }
    const $n = new q,
      Fl = new Pe,
      Nl = class lu extends It {
        constructor(t, e, s, r = Lt.TRIANGLES) {
          super(), this.geometry = t, this.shader = e, this.state = s || Zt.for2d(), this.drawMode = r, this.start = 0, this.size = 0, this.uvs = null, this.indices = null, this.vertexData = new Float32Array(1), this.vertexDirty = -1, this._transformID = -1, this._roundPixels = O.ROUND_PIXELS, this.batchUvs = null
        }
        get geometry() {
          return this._geometry
        }
        set geometry(t) {
          this._geometry !== t && (this._geometry && (this._geometry.refCount--, this._geometry.refCount === 0 && this._geometry.dispose()), this._geometry = t, this._geometry && this._geometry.refCount++, this.vertexDirty = -1)
        }
        get uvBuffer() {
          return this.geometry.buffers[1]
        }
        get verticesBuffer() {
          return this.geometry.buffers[0]
        }
        set material(t) {
          this.shader = t
        }
        get material() {
          return this.shader
        }
        set blendMode(t) {
          this.state.blendMode = t
        }
        get blendMode() {
          return this.state.blendMode
        }
        set roundPixels(t) {
          this._roundPixels !== t && (this._transformID = -1), this._roundPixels = t
        }
        get roundPixels() {
          return this._roundPixels
        }
        get tint() {
          return "tint" in this.shader ? this.shader.tint : null
        }
        set tint(t) {
          this.shader.tint = t
        }
        get tintValue() {
          return this.shader.tintValue
        }
        get texture() {
          return "texture" in this.shader ? this.shader.texture : null
        }
        set texture(t) {
          this.shader.texture = t
        }
        _render(t) {
          const e = this.geometry.buffers[0].data;
          this.shader.batchable && this.drawMode === Lt.TRIANGLES && e.length < lu.BATCHABLE_SIZE * 2 ? this._renderToBatch(t) : this._renderDefault(t)
        }
        _renderDefault(t) {
          const e = this.shader;
          e.alpha = this.worldAlpha, e.update && e.update(), t.batch.flush(), e.uniforms.translationMatrix = this.transform.worldTransform.toArray(!0), t.shader.bind(e), t.state.set(this.state), t.geometry.bind(this.geometry, e), t.geometry.draw(this.drawMode, this.size, this.start, this.geometry.instanceCount)
        }
        _renderToBatch(t) {
          const e = this.geometry,
            s = this.shader;
          s.uvMatrix && (s.uvMatrix.update(), this.calculateUvs()), this.calculateVertices(), this.indices = e.indexBuffer.data, this._tintRGB = s._tintRGB, this._texture = s.texture;
          const r = this.material.pluginName;
          t.batch.setObjectRenderer(t.plugins[r]), t.plugins[r].render(this)
        }
        calculateVertices() {
          const t = this.geometry.buffers[0],
            e = t.data,
            s = t._updateID;
          if (s === this.vertexDirty && this._transformID === this.transform._worldID) return;
          this._transformID = this.transform._worldID, this.vertexData.length !== e.length && (this.vertexData = new Float32Array(e.length));
          const r = this.transform.worldTransform,
            n = r.a,
            a = r.b,
            o = r.c,
            h = r.d,
            l = r.tx,
            u = r.ty,
            c = this.vertexData;
          for (let d = 0; d < c.length / 2; d++) {
            const f = e[d * 2],
              p = e[d * 2 + 1];
            c[d * 2] = n * f + o * p + l, c[d * 2 + 1] = a * f + h * p + u
          }
          if (this._roundPixels) {
            const d = O.RESOLUTION;
            for (let f = 0; f < c.length; ++f) c[f] = Math.round(c[f] * d) / d
          }
          this.vertexDirty = s
        }
        calculateUvs() {
          const t = this.geometry.buffers[1],
            e = this.shader;
          e.uvMatrix.isSimple ? this.uvs = t.data : (this.batchUvs || (this.batchUvs = new Bl(t, e.uvMatrix)), this.batchUvs.update(), this.uvs = this.batchUvs.data)
        }
        _calculateBounds() {
          this.calculateVertices(), this._bounds.addVertexData(this.vertexData, 0, this.vertexData.length)
        }
        containsPoint(t) {
          if (!this.getBounds().contains(t.x, t.y)) return !1;
          this.worldTransform.applyInverse(t, $n);
          const e = this.geometry.getBuffer("aVertexPosition").data,
            s = Fl.points,
            r = this.geometry.getIndex().data,
            n = r.length,
            a = this.drawMode === 4 ? 3 : 1;
          for (let o = 0; o + 2 < n; o += a) {
            const h = r[o] * 2,
              l = r[o + 1] * 2,
              u = r[o + 2] * 2;
            if (s[0] = e[h], s[1] = e[h + 1], s[2] = e[l], s[3] = e[l + 1], s[4] = e[u], s[5] = e[u + 1], Fl.contains($n.x, $n.y)) return !0
          }
          return !1
        }
        destroy(t) {
          super.destroy(t), this._cachedTexture && (this._cachedTexture.destroy(), this._cachedTexture = null), this.geometry = null, this.shader = null, this.state = null, this.uvs = null, this.indices = null, this.vertexData = null
        }
      };
    Nl.BATCHABLE_SIZE = 100;
    let Je = Nl;
    class ks extends ae {
      constructor(t, e, s) {
        super();
        const r = new nt(t),
          n = new nt(e, !0),
          a = new nt(s, !0, !0);
        this.addAttribute("aVertexPosition", r, 2, !1, k.FLOAT).addAttribute("aTextureCoord", n, 2, !1, k.FLOAT).addIndex(a), this._updateId = -1
      }
      get vertexDirtyId() {
        return this.buffers[0]._updateID
      }
    }
    var jp = `varying vec2 vTextureCoord;
  uniform vec4 uColor;
  
  uniform sampler2D uSampler;
  
  void main(void)
  {
      gl_FragColor = texture2D(uSampler, vTextureCoord) * uColor;
  }
  `,
      zp = `attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat3 projectionMatrix;
  uniform mat3 translationMatrix;
  uniform mat3 uTextureMatrix;
  
  varying vec2 vTextureCoord;
  
  void main(void)
  {
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  
      vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;
  }
  `;
    class ts extends Vt {
      constructor(t, e) {
        const s = {
          uSampler: t,
          alpha: 1,
          uTextureMatrix: tt.IDENTITY,
          uColor: new Float32Array([1, 1, 1, 1])
        };
        e = Object.assign({
          tint: 16777215,
          alpha: 1,
          pluginName: "batch"
        }, e), e.uniforms && Object.assign(s, e.uniforms), super(e.program || Qt.from(zp, jp), s), this._colorDirty = !1, this.uvMatrix = new wi(t), this.batchable = e.program === void 0, this.pluginName = e.pluginName, this._tintColor = new Z(e.tint), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0, this.alpha = e.alpha
      }
      get texture() {
        return this.uniforms.uSampler
      }
      set texture(t) {
        this.uniforms.uSampler !== t && (!this.uniforms.uSampler.baseTexture.alphaMode != !t.baseTexture.alphaMode && (this._colorDirty = !0), this.uniforms.uSampler = t, this.uvMatrix.texture = t)
      }
      set alpha(t) {
        t !== this._alpha && (this._alpha = t, this._colorDirty = !0)
      }
      get alpha() {
        return this._alpha
      }
      set tint(t) {
        t !== this.tint && (this._tintColor.setValue(t), this._tintRGB = this._tintColor.toLittleEndianNumber(), this._colorDirty = !0)
      }
      get tint() {
        return this._tintColor.value
      }
      get tintValue() {
        return this._tintColor.toNumber()
      }
      update() {
        if (this._colorDirty) {
          this._colorDirty = !1;
          const t = this.texture.baseTexture.alphaMode;
          Z.shared.setValue(this._tintColor).premultiply(this._alpha, t).toArray(this.uniforms.uColor)
        }
        this.uvMatrix.update() && (this.uniforms.uTextureMatrix = this.uvMatrix.mapCoord)
      }
    }
    class Ll extends ks {
      constructor(t = 100, e = 100, s = 10, r = 10) {
        super(), this.segWidth = s, this.segHeight = r, this.width = t, this.height = e, this.build()
      }
      build() {
        const t = this.segWidth * this.segHeight,
          e = [],
          s = [],
          r = [],
          n = this.segWidth - 1,
          a = this.segHeight - 1,
          o = this.width / n,
          h = this.height / a;
        for (let u = 0; u < t; u++) {
          const c = u % this.segWidth,
            d = u / this.segWidth | 0;
          e.push(c * o, d * h), s.push(c / n, d / a)
        }
        const l = n * a;
        for (let u = 0; u < l; u++) {
          const c = u % n,
            d = u / n | 0,
            f = d * this.segWidth + c,
            p = d * this.segWidth + c + 1,
            m = (d + 1) * this.segWidth + c,
            g = (d + 1) * this.segWidth + c + 1;
          r.push(f, p, m, p, g, m)
        }
        this.buffers[0].data = new Float32Array(e), this.buffers[1].data = new Float32Array(s), this.indexBuffer.data = new Uint16Array(r), this.buffers[0].update(), this.buffers[1].update(), this.indexBuffer.update()
      }
    }
    class Ul extends ks {
      constructor(t = 200, e, s = 0) {
        super(new Float32Array(e.length * 4), new Float32Array(e.length * 4), new Uint16Array((e.length - 1) * 6)), this.points = e, this._width = t, this.textureScale = s, this.build()
      }
      get width() {
        return this._width
      }
      build() {
        const t = this.points;
        if (!t) return;
        const e = this.getBuffer("aVertexPosition"),
          s = this.getBuffer("aTextureCoord"),
          r = this.getIndex();
        if (t.length < 1) return;
        e.data.length / 4 !== t.length && (e.data = new Float32Array(t.length * 4), s.data = new Float32Array(t.length * 4), r.data = new Uint16Array((t.length - 1) * 6));
        const n = s.data,
          a = r.data;
        n[0] = 0, n[1] = 0, n[2] = 0, n[3] = 1;
        let o = 0,
          h = t[0];
        const l = this._width * this.textureScale,
          u = t.length;
        for (let d = 0; d < u; d++) {
          const f = d * 4;
          if (this.textureScale > 0) {
            const p = h.x - t[d].x,
              m = h.y - t[d].y,
              g = Math.sqrt(p * p + m * m);
            h = t[d], o += g / l
          } else o = d / (u - 1);
          n[f] = o, n[f + 1] = 0, n[f + 2] = o, n[f + 3] = 1
        }
        let c = 0;
        for (let d = 0; d < u - 1; d++) {
          const f = d * 2;
          a[c++] = f, a[c++] = f + 1, a[c++] = f + 2, a[c++] = f + 2, a[c++] = f + 1, a[c++] = f + 3
        }
        s.update(), r.update(), this.updateVertices()
      }
      updateVertices() {
        const t = this.points;
        if (t.length < 1) return;
        let e = t[0],
          s, r = 0,
          n = 0;
        const a = this.buffers[0].data,
          o = t.length,
          h = this.textureScale > 0 ? this.textureScale * this._width / 2 : this._width / 2;
        for (let l = 0; l < o; l++) {
          const u = t[l],
            c = l * 4;
          l < t.length - 1 ? s = t[l + 1] : s = u, n = -(s.x - e.x), r = s.y - e.y;
          let d = (1 - l / (o - 1)) * 10;
          d > 1 && (d = 1);
          const f = Math.sqrt(r * r + n * n);
          f < 1e-6 ? (r = 0, n = 0) : (r /= f, n /= f, r *= h, n *= h), a[c] = u.x + r, a[c + 1] = u.y + n, a[c + 2] = u.x - r, a[c + 3] = u.y - n, e = u
        }
        this.buffers[0].update()
      }
      update() {
        this.textureScale > 0 ? this.build() : this.updateVertices()
      }
    }
    class kl extends Je {
      constructor(t, e, s) {
        const r = new Ll(t.width, t.height, e, s),
          n = new ts(B.WHITE);
        super(r, n), this.texture = t, this.autoResize = !0
      }
      textureUpdated() {
        this._textureID = this.shader.texture._updateID;
        const t = this.geometry,
          {
            width: e,
            height: s
          } = this.shader.texture;
        this.autoResize && (t.width !== e || t.height !== s) && (t.width = this.shader.texture.width, t.height = this.shader.texture.height, t.build())
      }
      set texture(t) {
        this.shader.texture !== t && (this.shader.texture = t, this._textureID = -1, t.baseTexture.valid ? this.textureUpdated() : t.once("update", this.textureUpdated, this))
      }
      get texture() {
        return this.shader.texture
      }
      _render(t) {
        this._textureID !== this.shader.texture._updateID && this.textureUpdated(), super._render(t)
      }
      destroy(t) {
        this.shader.texture.off("update", this.textureUpdated, this), super.destroy(t)
      }
    }
    const ji = 10;
    class Wp extends kl {
      constructor(t, e, s, r, n) {
        var a, o, h, l, u, c, d, f;
        super(B.WHITE, 4, 4), this._origWidth = t.orig.width, this._origHeight = t.orig.height, this._width = this._origWidth, this._height = this._origHeight, this._leftWidth = (o = e != null ? e : (a = t.defaultBorders) == null ? void 0 : a.left) != null ? o : ji, this._rightWidth = (l = r != null ? r : (h = t.defaultBorders) == null ? void 0 : h.right) != null ? l : ji, this._topHeight = (c = s != null ? s : (u = t.defaultBorders) == null ? void 0 : u.top) != null ? c : ji, this._bottomHeight = (f = n != null ? n : (d = t.defaultBorders) == null ? void 0 : d.bottom) != null ? f : ji, this.texture = t
      }
      textureUpdated() {
        this._textureID = this.shader.texture._updateID, this._refresh()
      }
      get vertices() {
        return this.geometry.getBuffer("aVertexPosition").data
      }
      set vertices(t) {
        this.geometry.getBuffer("aVertexPosition").data = t
      }
      updateHorizontalVertices() {
        const t = this.vertices,
          e = this._getMinScale();
        t[9] = t[11] = t[13] = t[15] = this._topHeight * e, t[17] = t[19] = t[21] = t[23] = this._height - this._bottomHeight * e, t[25] = t[27] = t[29] = t[31] = this._height
      }
      updateVerticalVertices() {
        const t = this.vertices,
          e = this._getMinScale();
        t[2] = t[10] = t[18] = t[26] = this._leftWidth * e, t[4] = t[12] = t[20] = t[28] = this._width - this._rightWidth * e, t[6] = t[14] = t[22] = t[30] = this._width
      }
      _getMinScale() {
        const t = this._leftWidth + this._rightWidth,
          e = this._width > t ? 1 : this._width / t,
          s = this._topHeight + this._bottomHeight,
          r = this._height > s ? 1 : this._height / s;
        return Math.min(e, r)
      }
      get width() {
        return this._width
      }
      set width(t) {
        this._width = t, this._refresh()
      }
      get height() {
        return this._height
      }
      set height(t) {
        this._height = t, this._refresh()
      }
      get leftWidth() {
        return this._leftWidth
      }
      set leftWidth(t) {
        this._leftWidth = t, this._refresh()
      }
      get rightWidth() {
        return this._rightWidth
      }
      set rightWidth(t) {
        this._rightWidth = t, this._refresh()
      }
      get topHeight() {
        return this._topHeight
      }
      set topHeight(t) {
        this._topHeight = t, this._refresh()
      }
      get bottomHeight() {
        return this._bottomHeight
      }
      set bottomHeight(t) {
        this._bottomHeight = t, this._refresh()
      }
      _refresh() {
        const t = this.texture,
          e = this.geometry.buffers[1].data;
        this._origWidth = t.orig.width, this._origHeight = t.orig.height;
        const s = 1 / this._origWidth,
          r = 1 / this._origHeight;
        e[0] = e[8] = e[16] = e[24] = 0, e[1] = e[3] = e[5] = e[7] = 0, e[6] = e[14] = e[22] = e[30] = 1, e[25] = e[27] = e[29] = e[31] = 1, e[2] = e[10] = e[18] = e[26] = s * this._leftWidth, e[4] = e[12] = e[20] = e[28] = 1 - s * this._rightWidth, e[9] = e[11] = e[13] = e[15] = r * this._topHeight, e[17] = e[19] = e[21] = e[23] = 1 - r * this._bottomHeight, this.updateHorizontalVertices(), this.updateVerticalVertices(), this.geometry.buffers[0].update(), this.geometry.buffers[1].update()
      }
    }
    class Yp extends Je {
      constructor(t = B.EMPTY, e, s, r, n) {
        const a = new ks(e, s, r);
        a.getBuffer("aVertexPosition").static = !1;
        const o = new ts(t);
        super(a, o, null, n), this.autoUpdate = !0
      }
      get vertices() {
        return this.geometry.getBuffer("aVertexPosition").data
      }
      set vertices(t) {
        this.geometry.getBuffer("aVertexPosition").data = t
      }
      _render(t) {
        this.autoUpdate && this.geometry.getBuffer("aVertexPosition").update(), super._render(t)
      }
    }
    class qp extends Je {
      constructor(t, e, s = 0) {
        const r = new Ul(t.height, e, s),
          n = new ts(t);
        s > 0 && (t.baseTexture.wrapMode = Wt.REPEAT), super(r, n), this.autoUpdate = !0
      }
      _render(t) {
        const e = this.geometry;
        (this.autoUpdate || e._width !== this.shader.texture.height) && (e._width = this.shader.texture.height, e.update()), super._render(t)
      }
    }
    class Kp extends It {
      constructor(t = 1500, e, s = 16384, r = !1) {
        super();
        const n = 16384;
        s > n && (s = n), this._properties = [!1, !0, !1, !1, !1], this._maxSize = t, this._batchSize = s, this._buffers = null, this._bufferUpdateIDs = [], this._updateID = 0, this.interactiveChildren = !1, this.blendMode = H.NORMAL, this.autoResize = r, this.roundPixels = !0, this.baseTexture = null, this.setProperties(e), this._tintColor = new Z(0), this.tintRgb = new Float32Array(3), this.tint = 16777215
      }
      setProperties(t) {
        t && (this._properties[0] = "vertices" in t || "scale" in t ? !!t.vertices || !!t.scale : this._properties[0], this._properties[1] = "position" in t ? !!t.position : this._properties[1], this._properties[2] = "rotation" in t ? !!t.rotation : this._properties[2], this._properties[3] = "uvs" in t ? !!t.uvs : this._properties[3], this._properties[4] = "tint" in t || "alpha" in t ? !!t.tint || !!t.alpha : this._properties[4])
      }
      updateTransform() {
        this.displayObjectUpdateTransform()
      }
      get tint() {
        return this._tintColor.value
      }
      set tint(t) {
        this._tintColor.setValue(t), this._tintColor.toRgbArray(this.tintRgb)
      }
      render(t) {
        !this.visible || this.worldAlpha <= 0 || !this.children.length || !this.renderable || (this.baseTexture || (this.baseTexture = this.children[0]._texture.baseTexture, this.baseTexture.valid || this.baseTexture.once("update", () => this.onChildrenChange(0))), t.batch.setObjectRenderer(t.plugins.particle), t.plugins.particle.render(this))
      }
      onChildrenChange(t) {
        const e = Math.floor(t / this._batchSize);
        for (; this._bufferUpdateIDs.length < e;) this._bufferUpdateIDs.push(0);
        this._bufferUpdateIDs[e] = ++this._updateID
      }
      dispose() {
        if (this._buffers) {
          for (let t = 0; t < this._buffers.length; ++t) this._buffers[t].destroy();
          this._buffers = null
        }
      }
      destroy(t) {
        super.destroy(t), this.dispose(), this._properties = null, this._buffers = null, this._bufferUpdateIDs = null
      }
    }
    class Gl {
      constructor(t, e, s) {
        this.geometry = new ae, this.indexBuffer = null, this.size = s, this.dynamicProperties = [], this.staticProperties = [];
        for (let r = 0; r < t.length; ++r) {
          let n = t[r];
          n = {
            attributeName: n.attributeName,
            size: n.size,
            uploadFunction: n.uploadFunction,
            type: n.type || k.FLOAT,
            offset: n.offset
          }, e[r] ? this.dynamicProperties.push(n) : this.staticProperties.push(n)
        }
        this.staticStride = 0, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.dynamicStride = 0, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this._updateID = 0, this.initBuffers()
      }
      initBuffers() {
        const t = this.geometry;
        let e = 0;
        this.indexBuffer = new nt(Qa(this.size), !0, !0), t.addIndex(this.indexBuffer), this.dynamicStride = 0;
        for (let a = 0; a < this.dynamicProperties.length; ++a) {
          const o = this.dynamicProperties[a];
          o.offset = e, e += o.size, this.dynamicStride += o.size
        }
        const s = new ArrayBuffer(this.size * this.dynamicStride * 4 * 4);
        this.dynamicData = new Float32Array(s), this.dynamicDataUint32 = new Uint32Array(s), this.dynamicBuffer = new nt(this.dynamicData, !1, !1);
        let r = 0;
        this.staticStride = 0;
        for (let a = 0; a < this.staticProperties.length; ++a) {
          const o = this.staticProperties[a];
          o.offset = r, r += o.size, this.staticStride += o.size
        }
        const n = new ArrayBuffer(this.size * this.staticStride * 4 * 4);
        this.staticData = new Float32Array(n), this.staticDataUint32 = new Uint32Array(n), this.staticBuffer = new nt(this.staticData, !0, !1);
        for (let a = 0; a < this.dynamicProperties.length; ++a) {
          const o = this.dynamicProperties[a];
          t.addAttribute(o.attributeName, this.dynamicBuffer, 0, o.type === k.UNSIGNED_BYTE, o.type, this.dynamicStride * 4, o.offset * 4)
        }
        for (let a = 0; a < this.staticProperties.length; ++a) {
          const o = this.staticProperties[a];
          t.addAttribute(o.attributeName, this.staticBuffer, 0, o.type === k.UNSIGNED_BYTE, o.type, this.staticStride * 4, o.offset * 4)
        }
      }
      uploadDynamic(t, e, s) {
        for (let r = 0; r < this.dynamicProperties.length; r++) {
          const n = this.dynamicProperties[r];
          n.uploadFunction(t, e, s, n.type === k.UNSIGNED_BYTE ? this.dynamicDataUint32 : this.dynamicData, this.dynamicStride, n.offset)
        }
        this.dynamicBuffer._updateID++
      }
      uploadStatic(t, e, s) {
        for (let r = 0; r < this.staticProperties.length; r++) {
          const n = this.staticProperties[r];
          n.uploadFunction(t, e, s, n.type === k.UNSIGNED_BYTE ? this.staticDataUint32 : this.staticData, this.staticStride, n.offset)
        }
        this.staticBuffer._updateID++
      }
      destroy() {
        this.indexBuffer = null, this.dynamicProperties = null, this.dynamicBuffer = null, this.dynamicData = null, this.dynamicDataUint32 = null, this.staticProperties = null, this.staticBuffer = null, this.staticData = null, this.staticDataUint32 = null, this.geometry.destroy()
      }
    }
    var Zp = `varying vec2 vTextureCoord;
  varying vec4 vColor;
  
  uniform sampler2D uSampler;
  
  void main(void){
      vec4 color = texture2D(uSampler, vTextureCoord) * vColor;
      gl_FragColor = color;
  }`,
      Qp = `attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  attribute vec4 aColor;
  
  attribute vec2 aPositionCoord;
  attribute float aRotation;
  
  uniform mat3 translationMatrix;
  uniform vec4 uColor;
  
  varying vec2 vTextureCoord;
  varying vec4 vColor;
  
  void main(void){
      float x = (aVertexPosition.x) * cos(aRotation) - (aVertexPosition.y) * sin(aRotation);
      float y = (aVertexPosition.x) * sin(aRotation) + (aVertexPosition.y) * cos(aRotation);
  
      vec2 v = vec2(x, y);
      v = v + aPositionCoord;
  
      gl_Position = vec4((translationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);
  
      vTextureCoord = aTextureCoord;
      vColor = aColor * uColor;
  }
  `;
    class Hn extends xs {
      constructor(t) {
        super(t), this.shader = null, this.properties = null, this.tempMatrix = new tt, this.properties = [{
          attributeName: "aVertexPosition",
          size: 2,
          uploadFunction: this.uploadVertices,
          offset: 0
        }, {
          attributeName: "aPositionCoord",
          size: 2,
          uploadFunction: this.uploadPosition,
          offset: 0
        }, {
          attributeName: "aRotation",
          size: 1,
          uploadFunction: this.uploadRotation,
          offset: 0
        }, {
          attributeName: "aTextureCoord",
          size: 2,
          uploadFunction: this.uploadUvs,
          offset: 0
        }, {
          attributeName: "aColor",
          size: 1,
          type: k.UNSIGNED_BYTE,
          uploadFunction: this.uploadTint,
          offset: 0
        }], this.shader = Vt.from(Qp, Zp, {}), this.state = Zt.for2d()
      }
      render(t) {
        const e = t.children,
          s = t._maxSize,
          r = t._batchSize,
          n = this.renderer;
        let a = e.length;
        if (a === 0) return;
        a > s && !t.autoResize && (a = s);
        let o = t._buffers;
        o || (o = t._buffers = this.generateBuffers(t));
        const h = e[0]._texture.baseTexture,
          l = h.alphaMode > 0;
        this.state.blendMode = wr(t.blendMode, l), n.state.set(this.state);
        const u = n.gl,
          c = t.worldTransform.copyTo(this.tempMatrix);
        c.prepend(n.globalUniforms.uniforms.projectionMatrix), this.shader.uniforms.translationMatrix = c.toArray(!0), this.shader.uniforms.uColor = Z.shared.setValue(t.tintRgb).premultiply(t.worldAlpha, l).toArray(this.shader.uniforms.uColor), this.shader.uniforms.uSampler = h, this.renderer.shader.bind(this.shader);
        let d = !1;
        for (let f = 0, p = 0; f < a; f += r, p += 1) {
          let m = a - f;
          m > r && (m = r), p >= o.length && o.push(this._generateOneMoreBuffer(t));
          const g = o[p];
          g.uploadDynamic(e, f, m);
          const y = t._bufferUpdateIDs[p] || 0;
          d = d || g._updateID < y, d && (g._updateID = t._updateID, g.uploadStatic(e, f, m)), n.geometry.bind(g.geometry), u.drawElements(u.TRIANGLES, m * 6, u.UNSIGNED_SHORT, 0)
        }
      }
      generateBuffers(t) {
        const e = [],
          s = t._maxSize,
          r = t._batchSize,
          n = t._properties;
        for (let a = 0; a < s; a += r) e.push(new Gl(this.properties, n, r));
        return e
      }
      _generateOneMoreBuffer(t) {
        const e = t._batchSize,
          s = t._properties;
        return new Gl(this.properties, s, e)
      }
      uploadVertices(t, e, s, r, n, a) {
        let o = 0,
          h = 0,
          l = 0,
          u = 0;
        for (let c = 0; c < s; ++c) {
          const d = t[e + c],
            f = d._texture,
            p = d.scale.x,
            m = d.scale.y,
            g = f.trim,
            y = f.orig;
          g ? (h = g.x - d.anchor.x * y.width, o = h + g.width, u = g.y - d.anchor.y * y.height, l = u + g.height) : (o = y.width * (1 - d.anchor.x), h = y.width * -d.anchor.x, l = y.height * (1 - d.anchor.y), u = y.height * -d.anchor.y), r[a] = h * p, r[a + 1] = u * m, r[a + n] = o * p, r[a + n + 1] = u * m, r[a + n * 2] = o * p, r[a + n * 2 + 1] = l * m, r[a + n * 3] = h * p, r[a + n * 3 + 1] = l * m, a += n * 4
        }
      }
      uploadPosition(t, e, s, r, n, a) {
        for (let o = 0; o < s; o++) {
          const h = t[e + o].position;
          r[a] = h.x, r[a + 1] = h.y, r[a + n] = h.x, r[a + n + 1] = h.y, r[a + n * 2] = h.x, r[a + n * 2 + 1] = h.y, r[a + n * 3] = h.x, r[a + n * 3 + 1] = h.y, a += n * 4
        }
      }
      uploadRotation(t, e, s, r, n, a) {
        for (let o = 0; o < s; o++) {
          const h = t[e + o].rotation;
          r[a] = h, r[a + n] = h, r[a + n * 2] = h, r[a + n * 3] = h, a += n * 4
        }
      }
      uploadUvs(t, e, s, r, n, a) {
        for (let o = 0; o < s; ++o) {
          const h = t[e + o]._texture._uvs;
          h ? (r[a] = h.x0, r[a + 1] = h.y0, r[a + n] = h.x1, r[a + n + 1] = h.y1, r[a + n * 2] = h.x2, r[a + n * 2 + 1] = h.y2, r[a + n * 3] = h.x3, r[a + n * 3 + 1] = h.y3, a += n * 4) : (r[a] = 0, r[a + 1] = 0, r[a + n] = 0, r[a + n + 1] = 0, r[a + n * 2] = 0, r[a + n * 2 + 1] = 0, r[a + n * 3] = 0, r[a + n * 3 + 1] = 0, a += n * 4)
        }
      }
      uploadTint(t, e, s, r, n, a) {
        for (let o = 0; o < s; ++o) {
          const h = t[e + o],
            l = Z.shared.setValue(h._tintRGB).toPremultiplied(h.alpha, h.texture.baseTexture.alphaMode > 0);
          r[a] = l, r[a + n] = l, r[a + n * 2] = l, r[a + n * 3] = l, a += n * 4
        }
      }
      destroy() {
        super.destroy(), this.shader && (this.shader.destroy(), this.shader = null), this.tempMatrix = null
      }
    }
    Hn.extension = {
      name: "particle",
      type: R.RendererPlugin
    }, L.add(Hn);
    var Gs = (i => (i[i.LINEAR_VERTICAL = 0] = "LINEAR_VERTICAL", i[i.LINEAR_HORIZONTAL = 1] = "LINEAR_HORIZONTAL", i))(Gs || {});
    const zi = {
        willReadFrequently: !0
      },
      Jt = class U {
        static get experimentalLetterSpacingSupported() {
          let t = U._experimentalLetterSpacingSupported;
          if (t !== void 0) {
            const e = O.ADAPTER.getCanvasRenderingContext2D().prototype;
            t = U._experimentalLetterSpacingSupported = "letterSpacing" in e || "textLetterSpacing" in e
          }
          return t
        }
        constructor(t, e, s, r, n, a, o, h, l) {
          this.text = t, this.style = e, this.width = s, this.height = r, this.lines = n, this.lineWidths = a, this.lineHeight = o, this.maxLineWidth = h, this.fontProperties = l
        }
        static measureText(t, e, s, r = U._canvas) {
          s = s == null ? e.wordWrap : s;
          const n = e.toFontString(),
            a = U.measureFont(n);
          a.fontSize === 0 && (a.fontSize = e.fontSize, a.ascent = e.fontSize);
          const o = r.getContext("2d", zi);
          o.font = n;
          const h = (s ? U.wordWrap(t, e, r) : t).split(/(?:\r\n|\r|\n)/),
            l = new Array(h.length);
          let u = 0;
          for (let p = 0; p < h.length; p++) {
            const m = U._measureText(h[p], e.letterSpacing, o);
            l[p] = m, u = Math.max(u, m)
          }
          let c = u + e.strokeThickness;
          e.dropShadow && (c += e.dropShadowDistance);
          const d = e.lineHeight || a.fontSize + e.strokeThickness;
          let f = Math.max(d, a.fontSize + e.strokeThickness * 2) + e.leading + (h.length - 1) * (d + e.leading);
          return e.dropShadow && (f += e.dropShadowDistance), new U(t, e, c, f, h, l, d + e.leading, u, a)
        }
        static _measureText(t, e, s) {
          let r = !1;
          U.experimentalLetterSpacingSupported && (U.experimentalLetterSpacing ? (s.letterSpacing = `${e}px`, s.textLetterSpacing = `${e}px`, r = !0) : (s.letterSpacing = "0px", s.textLetterSpacing = "0px"));
          let n = s.measureText(t).width;
          return n > 0 && (r ? n -= e : n += (U.graphemeSegmenter(t).length - 1) * e), n
        }
        static wordWrap(t, e, s = U._canvas) {
          const r = s.getContext("2d", zi);
          let n = 0,
            a = "",
            o = "";
          const h = Object.create(null),
            {
              letterSpacing: l,
              whiteSpace: u
            } = e,
            c = U.collapseSpaces(u),
            d = U.collapseNewlines(u);
          let f = !c;
          const p = e.wordWrapWidth + l,
            m = U.tokenize(t);
          for (let g = 0; g < m.length; g++) {
            let y = m[g];
            if (U.isNewline(y)) {
              if (!d) {
                o += U.addLine(a), f = !c, a = "", n = 0;
                continue
              }
              y = " "
            }
            if (c) {
              const v = U.isBreakingSpace(y),
                x = U.isBreakingSpace(a[a.length - 1]);
              if (v && x) continue
            }
            const b = U.getFromCache(y, l, h, r);
            if (b > p)
              if (a !== "" && (o += U.addLine(a), a = "", n = 0), U.canBreakWords(y, e.breakWords)) {
                const v = U.wordWrapSplit(y);
                for (let x = 0; x < v.length; x++) {
                  let E = v[x],
                    M = E,
                    S = 1;
                  for (; v[x + S];) {
                    const F = v[x + S];
                    if (!U.canBreakChars(M, F, y, x, e.breakWords)) E += F;
                    else break;
                    M = F, S++
                  }
                  x += S - 1;
                  const w = U.getFromCache(E, l, h, r);
                  w + n > p && (o += U.addLine(a), f = !1, a = "", n = 0), a += E, n += w
                }
              } else {
                a.length > 0 && (o += U.addLine(a), a = "", n = 0);
                const v = g === m.length - 1;
                o += U.addLine(y, !v), f = !1, a = "", n = 0
              }
            else b + n > p && (f = !1, o += U.addLine(a), a = "", n = 0), (a.length > 0 || !U.isBreakingSpace(y) || f) && (a += y, n += b)
          }
          return o += U.addLine(a, !1), o
        }
        static addLine(t, e = !0) {
          return t = U.trimRight(t), t = e ? `${t}
  ` : t, t
        }
        static getFromCache(t, e, s, r) {
          let n = s[t];
          return typeof n != "number" && (n = U._measureText(t, e, r) + e, s[t] = n), n
        }
        static collapseSpaces(t) {
          return t === "normal" || t === "pre-line"
        }
        static collapseNewlines(t) {
          return t === "normal"
        }
        static trimRight(t) {
          if (typeof t != "string") return "";
          for (let e = t.length - 1; e >= 0; e--) {
            const s = t[e];
            if (!U.isBreakingSpace(s)) break;
            t = t.slice(0, -1)
          }
          return t
        }
        static isNewline(t) {
          return typeof t != "string" ? !1 : U._newlines.includes(t.charCodeAt(0))
        }
        static isBreakingSpace(t, e) {
          return typeof t != "string" ? !1 : U._breakingSpaces.includes(t.charCodeAt(0))
        }
        static tokenize(t) {
          const e = [];
          let s = "";
          if (typeof t != "string") return e;
          for (let r = 0; r < t.length; r++) {
            const n = t[r],
              a = t[r + 1];
            if (U.isBreakingSpace(n, a) || U.isNewline(n)) {
              s !== "" && (e.push(s), s = ""), e.push(n);
              continue
            }
            s += n
          }
          return s !== "" && e.push(s), e
        }
        static canBreakWords(t, e) {
          return e
        }
        static canBreakChars(t, e, s, r, n) {
          return !0
        }
        static wordWrapSplit(t) {
          return U.graphemeSegmenter(t)
        }
        static measureFont(t) {
          if (U._fonts[t]) return U._fonts[t];
          const e = {
              ascent: 0,
              descent: 0,
              fontSize: 0
            },
            s = U._canvas,
            r = U._context;
          r.font = t;
          const n = U.METRICS_STRING + U.BASELINE_SYMBOL,
            a = Math.ceil(r.measureText(n).width);
          let o = Math.ceil(r.measureText(U.BASELINE_SYMBOL).width);
          const h = Math.ceil(U.HEIGHT_MULTIPLIER * o);
          if (o = o * U.BASELINE_MULTIPLIER | 0, a === 0 || h === 0) return U._fonts[t] = e, e;
          s.width = a, s.height = h, r.fillStyle = "#f00", r.fillRect(0, 0, a, h), r.font = t, r.textBaseline = "alphabetic", r.fillStyle = "#000", r.fillText(n, 0, o);
          const l = r.getImageData(0, 0, a, h).data,
            u = l.length,
            c = a * 4;
          let d = 0,
            f = 0,
            p = !1;
          for (d = 0; d < o; ++d) {
            for (let m = 0; m < c; m += 4)
              if (l[f + m] !== 255) {
                p = !0;
                break
              } if (!p) f += c;
            else break
          }
          for (e.ascent = o - d, f = u - c, p = !1, d = h; d > o; --d) {
            for (let m = 0; m < c; m += 4)
              if (l[f + m] !== 255) {
                p = !0;
                break
              } if (!p) f -= c;
            else break
          }
          return e.descent = d - o, e.fontSize = e.ascent + e.descent, U._fonts[t] = e, e
        }
        static clearMetrics(t = "") {
          t ? delete U._fonts[t] : U._fonts = {}
        }
        static get _canvas() {
          if (!U.__canvas) {
            let t;
            try {
              const e = new OffscreenCanvas(0, 0),
                s = e.getContext("2d", zi);
              if (s != null && s.measureText) return U.__canvas = e, e;
              t = O.ADAPTER.createCanvas()
            } catch (e) {
              t = O.ADAPTER.createCanvas()
            }
            t.width = t.height = 10, U.__canvas = t
          }
          return U.__canvas
        }
        static get _context() {
          return U.__context || (U.__context = U._canvas.getContext("2d", zi)), U.__context
        }
      };
    Jt.METRICS_STRING = "|\xC9q\xC5", Jt.BASELINE_SYMBOL = "M", Jt.BASELINE_MULTIPLIER = 1.4, Jt.HEIGHT_MULTIPLIER = 2, Jt.graphemeSegmenter = (() => {
      if (typeof(Intl == null ? void 0 : Intl.Segmenter) == "function") {
        const i = new Intl.Segmenter;
        return t => [...i.segment(t)].map(e => e.segment)
      }
      return i => [...i]
    })(), Jt.experimentalLetterSpacing = !1, Jt._fonts = {}, Jt._newlines = [10, 13], Jt._breakingSpaces = [9, 32, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8200, 8201, 8202, 8287, 12288];
    let pe = Jt;
    const Jp = ["serif", "sans-serif", "monospace", "cursive", "fantasy", "system-ui"],
      $l = class qs {
        constructor(t) {
          this.styleID = 0, this.reset(), Xn(this, t, t)
        }
        clone() {
          const t = {};
          return Xn(t, this, qs.defaultStyle), new qs(t)
        }
        reset() {
          Xn(this, qs.defaultStyle, qs.defaultStyle)
        }
        get align() {
          return this._align
        }
        set align(t) {
          this._align !== t && (this._align = t, this.styleID++)
        }
        get breakWords() {
          return this._breakWords
        }
        set breakWords(t) {
          this._breakWords !== t && (this._breakWords = t, this.styleID++)
        }
        get dropShadow() {
          return this._dropShadow
        }
        set dropShadow(t) {
          this._dropShadow !== t && (this._dropShadow = t, this.styleID++)
        }
        get dropShadowAlpha() {
          return this._dropShadowAlpha
        }
        set dropShadowAlpha(t) {
          this._dropShadowAlpha !== t && (this._dropShadowAlpha = t, this.styleID++)
        }
        get dropShadowAngle() {
          return this._dropShadowAngle
        }
        set dropShadowAngle(t) {
          this._dropShadowAngle !== t && (this._dropShadowAngle = t, this.styleID++)
        }
        get dropShadowBlur() {
          return this._dropShadowBlur
        }
        set dropShadowBlur(t) {
          this._dropShadowBlur !== t && (this._dropShadowBlur = t, this.styleID++)
        }
        get dropShadowColor() {
          return this._dropShadowColor
        }
        set dropShadowColor(t) {
          const e = Vn(t);
          this._dropShadowColor !== e && (this._dropShadowColor = e, this.styleID++)
        }
        get dropShadowDistance() {
          return this._dropShadowDistance
        }
        set dropShadowDistance(t) {
          this._dropShadowDistance !== t && (this._dropShadowDistance = t, this.styleID++)
        }
        get fill() {
          return this._fill
        }
        set fill(t) {
          const e = Vn(t);
          this._fill !== e && (this._fill = e, this.styleID++)
        }
        get fillGradientType() {
          return this._fillGradientType
        }
        set fillGradientType(t) {
          this._fillGradientType !== t && (this._fillGradientType = t, this.styleID++)
        }
        get fillGradientStops() {
          return this._fillGradientStops
        }
        set fillGradientStops(t) {
          tm(this._fillGradientStops, t) || (this._fillGradientStops = t, this.styleID++)
        }
        get fontFamily() {
          return this._fontFamily
        }
        set fontFamily(t) {
          this.fontFamily !== t && (this._fontFamily = t, this.styleID++)
        }
        get fontSize() {
          return this._fontSize
        }
        set fontSize(t) {
          this._fontSize !== t && (this._fontSize = t, this.styleID++)
        }
        get fontStyle() {
          return this._fontStyle
        }
        set fontStyle(t) {
          this._fontStyle !== t && (this._fontStyle = t, this.styleID++)
        }
        get fontVariant() {
          return this._fontVariant
        }
        set fontVariant(t) {
          this._fontVariant !== t && (this._fontVariant = t, this.styleID++)
        }
        get fontWeight() {
          return this._fontWeight
        }
        set fontWeight(t) {
          this._fontWeight !== t && (this._fontWeight = t, this.styleID++)
        }
        get letterSpacing() {
          return this._letterSpacing
        }
        set letterSpacing(t) {
          this._letterSpacing !== t && (this._letterSpacing = t, this.styleID++)
        }
        get lineHeight() {
          return this._lineHeight
        }
        set lineHeight(t) {
          this._lineHeight !== t && (this._lineHeight = t, this.styleID++)
        }
        get leading() {
          return this._leading
        }
        set leading(t) {
          this._leading !== t && (this._leading = t, this.styleID++)
        }
        get lineJoin() {
          return this._lineJoin
        }
        set lineJoin(t) {
          this._lineJoin !== t && (this._lineJoin = t, this.styleID++)
        }
        get miterLimit() {
          return this._miterLimit
        }
        set miterLimit(t) {
          this._miterLimit !== t && (this._miterLimit = t, this.styleID++)
        }
        get padding() {
          return this._padding
        }
        set padding(t) {
          this._padding !== t && (this._padding = t, this.styleID++)
        }
        get stroke() {
          return this._stroke
        }
        set stroke(t) {
          const e = Vn(t);
          this._stroke !== e && (this._stroke = e, this.styleID++)
        }
        get strokeThickness() {
          return this._strokeThickness
        }
        set strokeThickness(t) {
          this._strokeThickness !== t && (this._strokeThickness = t, this.styleID++)
        }
        get textBaseline() {
          return this._textBaseline
        }
        set textBaseline(t) {
          this._textBaseline !== t && (this._textBaseline = t, this.styleID++)
        }
        get trim() {
          return this._trim
        }
        set trim(t) {
          this._trim !== t && (this._trim = t, this.styleID++)
        }
        get whiteSpace() {
          return this._whiteSpace
        }
        set whiteSpace(t) {
          this._whiteSpace !== t && (this._whiteSpace = t, this.styleID++)
        }
        get wordWrap() {
          return this._wordWrap
        }
        set wordWrap(t) {
          this._wordWrap !== t && (this._wordWrap = t, this.styleID++)
        }
        get wordWrapWidth() {
          return this._wordWrapWidth
        }
        set wordWrapWidth(t) {
          this._wordWrapWidth !== t && (this._wordWrapWidth = t, this.styleID++)
        }
        toFontString() {
          const t = typeof this.fontSize == "number" ? `${this.fontSize}px` : this.fontSize;
          let e = this.fontFamily;
          Array.isArray(this.fontFamily) || (e = this.fontFamily.split(","));
          for (let s = e.length - 1; s >= 0; s--) {
            let r = e[s].trim();
            !/([\"\'])[^\'\"]+\1/.test(r) && !Jp.includes(r) && (r = `"${r}"`), e[s] = r
          }
          return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${t} ${e.join(",")}`
        }
      };
    $l.defaultStyle = {
      align: "left",
      breakWords: !1,
      dropShadow: !1,
      dropShadowAlpha: 1,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 0,
      dropShadowColor: "black",
      dropShadowDistance: 5,
      fill: "black",
      fillGradientType: Gs.LINEAR_VERTICAL,
      fillGradientStops: [],
      fontFamily: "Arial",
      fontSize: 26,
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      leading: 0,
      letterSpacing: 0,
      lineHeight: 0,
      lineJoin: "miter",
      miterLimit: 10,
      padding: 0,
      stroke: "black",
      strokeThickness: 0,
      textBaseline: "alphabetic",
      trim: !1,
      whiteSpace: "pre",
      wordWrap: !1,
      wordWrapWidth: 100
    };
    let me = $l;
  
    function Vn(i) {
      const t = Z.shared,
        e = s => {
          const r = t.setValue(s);
          return r.alpha === 1 ? r.toHex() : r.toRgbaString()
        };
      return Array.isArray(i) ? i.map(e) : e(i)
    }
  
    function tm(i, t) {
      if (!Array.isArray(i) || !Array.isArray(t) || i.length !== t.length) return !1;
      for (let e = 0; e < i.length; ++e)
        if (i[e] !== t[e]) return !1;
      return !0
    }
  
    function Xn(i, t, e) {
      for (const s in e) Array.isArray(t[s]) ? i[s] = t[s].slice() : i[s] = t[s]
    }
    const em = {
        texture: !0,
        children: !1,
        baseTexture: !0
      },
      Hl = class ra extends ue {
        constructor(t, e, s) {
          var r;
          let n = !1;
          s || (s = O.ADAPTER.createCanvas(), n = !0), s.width = 3, s.height = 3;
          const a = B.from(s);
          a.orig = new j, a.trim = new j, super(a), this._ownCanvas = n, this.canvas = s, this.context = s.getContext("2d", {
            willReadFrequently: !0
          }), this._resolution = (r = ra.defaultResolution) != null ? r : O.RESOLUTION, this._autoResolution = ra.defaultAutoResolution, this._text = null, this._style = null, this._styleListener = null, this._font = "", this.text = t, this.style = e, this.localStyleID = -1
        }
        static get experimentalLetterSpacing() {
          return pe.experimentalLetterSpacing
        }
        static set experimentalLetterSpacing(t) {
          pe.experimentalLetterSpacing = t
        }
        updateText(t) {
          const e = this._style;
          if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), !this.dirty && t) return;
          this._font = this._style.toFontString();
          const s = this.context,
            r = pe.measureText(this._text || " ", this._style, this._style.wordWrap, this.canvas),
            n = r.width,
            a = r.height,
            o = r.lines,
            h = r.lineHeight,
            l = r.lineWidths,
            u = r.maxLineWidth,
            c = r.fontProperties;
          this.canvas.width = Math.ceil(Math.ceil(Math.max(1, n) + e.padding * 2) * this._resolution), this.canvas.height = Math.ceil(Math.ceil(Math.max(1, a) + e.padding * 2) * this._resolution), s.scale(this._resolution, this._resolution), s.clearRect(0, 0, this.canvas.width, this.canvas.height), s.font = this._font, s.lineWidth = e.strokeThickness, s.textBaseline = e.textBaseline, s.lineJoin = e.lineJoin, s.miterLimit = e.miterLimit;
          let d, f;
          const p = e.dropShadow ? 2 : 1;
          for (let m = 0; m < p; ++m) {
            const g = e.dropShadow && m === 0,
              y = g ? Math.ceil(Math.max(1, a) + e.padding * 2) : 0,
              b = y * this._resolution;
            if (g) {
              s.fillStyle = "black", s.strokeStyle = "black";
              const x = e.dropShadowColor,
                E = e.dropShadowBlur * this._resolution,
                M = e.dropShadowDistance * this._resolution;
              s.shadowColor = Z.shared.setValue(x).setAlpha(e.dropShadowAlpha).toRgbaString(), s.shadowBlur = E, s.shadowOffsetX = Math.cos(e.dropShadowAngle) * M, s.shadowOffsetY = Math.sin(e.dropShadowAngle) * M + b
            } else s.fillStyle = this._generateFillStyle(e, o, r), s.strokeStyle = e.stroke, s.shadowColor = "black", s.shadowBlur = 0, s.shadowOffsetX = 0, s.shadowOffsetY = 0;
            let v = (h - c.fontSize) / 2;
            h - c.fontSize < 0 && (v = 0);
            for (let x = 0; x < o.length; x++) d = e.strokeThickness / 2, f = e.strokeThickness / 2 + x * h + c.ascent + v, e.align === "right" ? d += u - l[x] : e.align === "center" && (d += (u - l[x]) / 2), e.stroke && e.strokeThickness && this.drawLetterSpacing(o[x], d + e.padding, f + e.padding - y, !0), e.fill && this.drawLetterSpacing(o[x], d + e.padding, f + e.padding - y)
          }
          this.updateTexture()
        }
        drawLetterSpacing(t, e, s, r = !1) {
          const n = this._style.letterSpacing;
          let a = !1;
          if (pe.experimentalLetterSpacingSupported && (pe.experimentalLetterSpacing ? (this.context.letterSpacing = `${n}px`, this.context.textLetterSpacing = `${n}px`, a = !0) : (this.context.letterSpacing = "0px", this.context.textLetterSpacing = "0px")), n === 0 || a) {
            r ? this.context.strokeText(t, e, s) : this.context.fillText(t, e, s);
            return
          }
          let o = e;
          const h = pe.graphemeSegmenter(t);
          let l = this.context.measureText(t).width,
            u = 0;
          for (let c = 0; c < h.length; ++c) {
            const d = h[c];
            r ? this.context.strokeText(d, o, s) : this.context.fillText(d, o, s);
            let f = "";
            for (let p = c + 1; p < h.length; ++p) f += h[p];
            u = this.context.measureText(f).width, o += l - u + n, l = u
          }
        }
        updateTexture() {
          const t = this.canvas;
          if (this._style.trim) {
            const a = io(t);
            a.data && (t.width = a.width, t.height = a.height, this.context.putImageData(a.data, 0, 0))
          }
          const e = this._texture,
            s = this._style,
            r = s.trim ? 0 : s.padding,
            n = e.baseTexture;
          e.trim.width = e._frame.width = t.width / this._resolution, e.trim.height = e._frame.height = t.height / this._resolution, e.trim.x = -r, e.trim.y = -r, e.orig.width = e._frame.width - r * 2, e.orig.height = e._frame.height - r * 2, this._onTextureUpdate(), n.setRealSize(t.width, t.height, this._resolution), e.updateUvs(), this.dirty = !1
        }
        _render(t) {
          this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._render(t)
        }
        updateTransform() {
          this.updateText(!0), super.updateTransform()
        }
        getBounds(t, e) {
          return this.updateText(!0), this._textureID === -1 && (t = !1), super.getBounds(t, e)
        }
        getLocalBounds(t) {
          return this.updateText(!0), super.getLocalBounds.call(this, t)
        }
        _calculateBounds() {
          this.calculateVertices(), this._bounds.addQuad(this.vertexData)
        }
        _generateFillStyle(t, e, s) {
          const r = t.fill;
          if (Array.isArray(r)) {
            if (r.length === 1) return r[0]
          } else return r;
          let n;
          const a = t.dropShadow ? t.dropShadowDistance : 0,
            o = t.padding || 0,
            h = this.canvas.width / this._resolution - a - o * 2,
            l = this.canvas.height / this._resolution - a - o * 2,
            u = r.slice(),
            c = t.fillGradientStops.slice();
          if (!c.length) {
            const d = u.length + 1;
            for (let f = 1; f < d; ++f) c.push(f / d)
          }
          if (u.unshift(r[0]), c.unshift(0), u.push(r[r.length - 1]), c.push(1), t.fillGradientType === Gs.LINEAR_VERTICAL) {
            n = this.context.createLinearGradient(h / 2, o, h / 2, l + o);
            const d = s.fontProperties.fontSize + t.strokeThickness;
            for (let f = 0; f < e.length; f++) {
              const p = s.lineHeight * (f - 1) + d,
                m = s.lineHeight * f;
              let g = m;
              f > 0 && p > m && (g = (m + p) / 2);
              const y = m + d,
                b = s.lineHeight * (f + 1);
              let v = y;
              f + 1 < e.length && b < y && (v = (y + b) / 2);
              const x = (v - g) / l;
              for (let E = 0; E < u.length; E++) {
                let M = 0;
                typeof c[E] == "number" ? M = c[E] : M = E / u.length;
                let S = Math.min(1, Math.max(0, g / l + M * x));
                S = Number(S.toFixed(5)), n.addColorStop(S, u[E])
              }
            }
          } else {
            n = this.context.createLinearGradient(o, l / 2, h + o, l / 2);
            const d = u.length + 1;
            let f = 1;
            for (let p = 0; p < u.length; p++) {
              let m;
              typeof c[p] == "number" ? m = c[p] : m = f / d, n.addColorStop(m, u[p]), f++
            }
          }
          return n
        }
        destroy(t) {
          typeof t == "boolean" && (t = {
            children: t
          }), t = Object.assign({}, em, t), super.destroy(t), this._ownCanvas && (this.canvas.height = this.canvas.width = 0), this.context = null, this.canvas = null, this._style = null
        }
        get width() {
          return this.updateText(!0), Math.abs(this.scale.x) * this._texture.orig.width
        }
        set width(t) {
          this.updateText(!0);
          const e = ne(this.scale.x) || 1;
          this.scale.x = e * t / this._texture.orig.width, this._width = t
        }
        get height() {
          return this.updateText(!0), Math.abs(this.scale.y) * this._texture.orig.height
        }
        set height(t) {
          this.updateText(!0);
          const e = ne(this.scale.y) || 1;
          this.scale.y = e * t / this._texture.orig.height, this._height = t
        }
        get style() {
          return this._style
        }
        set style(t) {
          t = t || {}, t instanceof me ? this._style = t : this._style = new me(t), this.localStyleID = -1, this.dirty = !0
        }
        get text() {
          return this._text
        }
        set text(t) {
          t = String(t == null ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
        }
        get resolution() {
          return this._resolution
        }
        set resolution(t) {
          this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
        }
      };
    Hl.defaultAutoResolution = !0;
    let jn = Hl;
    class Vl {
      constructor(t) {
        this.maxItemsPerFrame = t, this.itemsLeft = 0
      }
      beginFrame() {
        this.itemsLeft = this.maxItemsPerFrame
      }
      allowedToUpload() {
        return this.itemsLeft-- > 0
      }
    }
  
    function sm(i, t) {
      var e;
      let s = !1;
      if ((e = i == null ? void 0 : i._textures) != null && e.length) {
        for (let r = 0; r < i._textures.length; r++)
          if (i._textures[r] instanceof B) {
            const n = i._textures[r].baseTexture;
            t.includes(n) || (t.push(n), s = !0)
          }
      }
      return s
    }
  
    function im(i, t) {
      if (i.baseTexture instanceof X) {
        const e = i.baseTexture;
        return t.includes(e) || t.push(e), !0
      }
      return !1
    }
  
    function rm(i, t) {
      if (i._texture && i._texture instanceof B) {
        const e = i._texture.baseTexture;
        return t.includes(e) || t.push(e), !0
      }
      return !1
    }
  
    function nm(i, t) {
      return t instanceof jn ? (t.updateText(!0), !0) : !1
    }
  
    function am(i, t) {
      if (t instanceof me) {
        const e = t.toFontString();
        return pe.measureFont(e), !0
      }
      return !1
    }
  
    function om(i, t) {
      if (i instanceof jn) {
        t.includes(i.style) || t.push(i.style), t.includes(i) || t.push(i);
        const e = i._texture.baseTexture;
        return t.includes(e) || t.push(e), !0
      }
      return !1
    }
  
    function hm(i, t) {
      return i instanceof me ? (t.includes(i) || t.push(i), !0) : !1
    }
    const Xl = class uu {
      constructor(t) {
        this.limiter = new Vl(uu.uploadsPerFrame), this.renderer = t, this.uploadHookHelper = null, this.queue = [], this.addHooks = [], this.uploadHooks = [], this.completes = [], this.ticking = !1, this.delayedTick = () => {
          this.queue && this.prepareItems()
        }, this.registerFindHook(om), this.registerFindHook(hm), this.registerFindHook(sm), this.registerFindHook(im), this.registerFindHook(rm), this.registerUploadHook(nm), this.registerUploadHook(am)
      }
      upload(t) {
        return new Promise(e => {
          t && this.add(t), this.queue.length ? (this.completes.push(e), this.ticking || (this.ticking = !0, pt.system.addOnce(this.tick, this, le.UTILITY))) : e()
        })
      }
      tick() {
        setTimeout(this.delayedTick, 0)
      }
      prepareItems() {
        for (this.limiter.beginFrame(); this.queue.length && this.limiter.allowedToUpload();) {
          const t = this.queue[0];
          let e = !1;
          if (t && !t._destroyed) {
            for (let s = 0, r = this.uploadHooks.length; s < r; s++)
              if (this.uploadHooks[s](this.uploadHookHelper, t)) {
                this.queue.shift(), e = !0;
                break
              }
          }
          e || this.queue.shift()
        }
        if (this.queue.length) pt.system.addOnce(this.tick, this, le.UTILITY);
        else {
          this.ticking = !1;
          const t = this.completes.slice(0);
          this.completes.length = 0;
          for (let e = 0, s = t.length; e < s; e++) t[e]()
        }
      }
      registerFindHook(t) {
        return t && this.addHooks.push(t), this
      }
      registerUploadHook(t) {
        return t && this.uploadHooks.push(t), this
      }
      add(t) {
        for (let e = 0, s = this.addHooks.length; e < s && !this.addHooks[e](t, this.queue); e++);
        if (t instanceof It)
          for (let e = t.children.length - 1; e >= 0; e--) this.add(t.children[e]);
        return this
      }
      destroy() {
        this.ticking && pt.system.remove(this.tick, this), this.ticking = !1, this.addHooks = null, this.uploadHooks = null, this.renderer = null, this.completes = null, this.queue = null, this.limiter = null, this.uploadHookHelper = null
      }
    };
    Xl.uploadsPerFrame = 4;
    let Wi = Xl;
    Object.defineProperties(O, {
      UPLOADS_PER_FRAME: {
        get() {
          return Wi.uploadsPerFrame
        },
        set(i) {
          Wi.uploadsPerFrame = i
        }
      }
    });
  
    function jl(i, t) {
      return t instanceof X ? (t._glTextures[i.CONTEXT_UID] || i.texture.bind(t), !0) : !1
    }
  
    function lm(i, t) {
      if (!(t instanceof Gn)) return !1;
      const {
        geometry: e
      } = t;
      t.finishPoly(), e.updateBatches();
      const {
        batches: s
      } = e;
      for (let r = 0; r < s.length; r++) {
        const {
          texture: n
        } = s[r].style;
        n && jl(i, n.baseTexture)
      }
      return e.batchable || i.geometry.bind(e, t._resolveDirectShader(i)), !0
    }
  
    function um(i, t) {
      return i instanceof Gn ? (t.push(i), !0) : !1
    }
    class zn extends Wi {
      constructor(t) {
        super(t), this.uploadHookHelper = this.renderer, this.registerFindHook(um), this.registerUploadHook(jl), this.registerUploadHook(lm)
      }
    }
    zn.extension = {
      name: "prepare",
      type: R.RendererSystem
    }, L.add(zn);
    class cm {
      constructor(t) {
        this.maxMilliseconds = t, this.frameStart = 0
      }
      beginFrame() {
        this.frameStart = Date.now()
      }
      allowedToUpload() {
        return Date.now() - this.frameStart < this.maxMilliseconds
      }
    }
    class Yi extends ue {
      constructor(t, e = !0) {
        super(t[0] instanceof B ? t[0] : t[0].texture), this._textures = null, this._durations = null, this._autoUpdate = e, this._isConnectedToTicker = !1, this.animationSpeed = 1, this.loop = !0, this.updateAnchor = !1, this.onComplete = null, this.onFrameChange = null, this.onLoop = null, this._currentTime = 0, this._playing = !1, this._previousFrame = null, this.textures = t
      }
      stop() {
        this._playing && (this._playing = !1, this._autoUpdate && this._isConnectedToTicker && (pt.shared.remove(this.update, this), this._isConnectedToTicker = !1))
      }
      play() {
        this._playing || (this._playing = !0, this._autoUpdate && !this._isConnectedToTicker && (pt.shared.add(this.update, this, le.HIGH), this._isConnectedToTicker = !0))
      }
      gotoAndStop(t) {
        this.stop(), this.currentFrame = t
      }
      gotoAndPlay(t) {
        this.currentFrame = t, this.play()
      }
      update(t) {
        if (!this._playing) return;
        const e = this.animationSpeed * t,
          s = this.currentFrame;
        if (this._durations !== null) {
          let r = this._currentTime % 1 * this._durations[this.currentFrame];
          for (r += e / 60 * 1e3; r < 0;) this._currentTime--, r += this._durations[this.currentFrame];
          const n = Math.sign(this.animationSpeed * t);
          for (this._currentTime = Math.floor(this._currentTime); r >= this._durations[this.currentFrame];) r -= this._durations[this.currentFrame] * n, this._currentTime += n;
          this._currentTime += r / this._durations[this.currentFrame]
        } else this._currentTime += e;
        this._currentTime < 0 && !this.loop ? (this.gotoAndStop(0), this.onComplete && this.onComplete()) : this._currentTime >= this._textures.length && !this.loop ? (this.gotoAndStop(this._textures.length - 1), this.onComplete && this.onComplete()) : s !== this.currentFrame && (this.loop && this.onLoop && (this.animationSpeed > 0 && this.currentFrame < s || this.animationSpeed < 0 && this.currentFrame > s) && this.onLoop(), this.updateTexture())
      }
      updateTexture() {
        const t = this.currentFrame;
        this._previousFrame !== t && (this._previousFrame = t, this._texture = this._textures[t], this._textureID = -1, this._textureTrimmedID = -1, this._cachedTint = 16777215, this.uvs = this._texture._uvs.uvsFloat32, this.updateAnchor && this._anchor.copyFrom(this._texture.defaultAnchor), this.onFrameChange && this.onFrameChange(this.currentFrame))
      }
      destroy(t) {
        this.stop(), super.destroy(t), this.onComplete = null, this.onFrameChange = null, this.onLoop = null
      }
      static fromFrames(t) {
        const e = [];
        for (let s = 0; s < t.length; ++s) e.push(B.from(t[s]));
        return new Yi(e)
      }
      static fromImages(t) {
        const e = [];
        for (let s = 0; s < t.length; ++s) e.push(B.from(t[s]));
        return new Yi(e)
      }
      get totalFrames() {
        return this._textures.length
      }
      get textures() {
        return this._textures
      }
      set textures(t) {
        if (t[0] instanceof B) this._textures = t, this._durations = null;
        else {
          this._textures = [], this._durations = [];
          for (let e = 0; e < t.length; e++) this._textures.push(t[e].texture), this._durations.push(t[e].time)
        }
        this._previousFrame = null, this.gotoAndStop(0), this.updateTexture()
      }
      get currentFrame() {
        let t = Math.floor(this._currentTime) % this._textures.length;
        return t < 0 && (t += this._textures.length), t
      }
      set currentFrame(t) {
        if (t < 0 || t > this.totalFrames - 1) throw new Error(`[AnimatedSprite]: Invalid frame index value ${t}, expected to be between 0 and totalFrames ${this.totalFrames}.`);
        const e = this.currentFrame;
        this._currentTime = t, e !== this.currentFrame && this.updateTexture()
      }
      get playing() {
        return this._playing
      }
      get autoUpdate() {
        return this._autoUpdate
      }
      set autoUpdate(t) {
        t !== this._autoUpdate && (this._autoUpdate = t, !this._autoUpdate && this._isConnectedToTicker ? (pt.shared.remove(this.update, this), this._isConnectedToTicker = !1) : this._autoUpdate && !this._isConnectedToTicker && this._playing && (pt.shared.add(this.update, this), this._isConnectedToTicker = !0))
      }
    }
    const $s = new q;
    class Wn extends ue {
      constructor(t, e = 100, s = 100) {
        super(t), this.tileTransform = new _i, this._width = e, this._height = s, this.uvMatrix = this.texture.uvMatrix || new wi(t), this.pluginName = "tilingSprite", this.uvRespectAnchor = !1
      }
      get clampMargin() {
        return this.uvMatrix.clampMargin
      }
      set clampMargin(t) {
        this.uvMatrix.clampMargin = t, this.uvMatrix.update(!0)
      }
      get tileScale() {
        return this.tileTransform.scale
      }
      set tileScale(t) {
        this.tileTransform.scale.copyFrom(t)
      }
      get tilePosition() {
        return this.tileTransform.position
      }
      set tilePosition(t) {
        this.tileTransform.position.copyFrom(t)
      }
      _onTextureUpdate() {
        this.uvMatrix && (this.uvMatrix.texture = this._texture), this._cachedTint = 16777215
      }
      _render(t) {
        const e = this._texture;
        !e || !e.valid || (this.tileTransform.updateLocalTransform(), this.uvMatrix.update(), t.batch.setObjectRenderer(t.plugins[this.pluginName]), t.plugins[this.pluginName].render(this))
      }
      _calculateBounds() {
        const t = this._width * -this._anchor._x,
          e = this._height * -this._anchor._y,
          s = this._width * (1 - this._anchor._x),
          r = this._height * (1 - this._anchor._y);
        this._bounds.addFrame(this.transform, t, e, s, r)
      }
      getLocalBounds(t) {
        return this.children.length === 0 ? (this._bounds.minX = this._width * -this._anchor._x, this._bounds.minY = this._height * -this._anchor._y, this._bounds.maxX = this._width * (1 - this._anchor._x), this._bounds.maxY = this._height * (1 - this._anchor._y), t || (this._localBoundsRect || (this._localBoundsRect = new j), t = this._localBoundsRect), this._bounds.getRectangle(t)) : super.getLocalBounds.call(this, t)
      }
      containsPoint(t) {
        this.worldTransform.applyInverse(t, $s);
        const e = this._width,
          s = this._height,
          r = -e * this.anchor._x;
        if ($s.x >= r && $s.x < r + e) {
          const n = -s * this.anchor._y;
          if ($s.y >= n && $s.y < n + s) return !0
        }
        return !1
      }
      destroy(t) {
        super.destroy(t), this.tileTransform = null, this.uvMatrix = null
      }
      static from(t, e) {
        const s = t instanceof B ? t : B.from(t, e);
        return new Wn(s, e.width, e.height)
      }
      get width() {
        return this._width
      }
      set width(t) {
        this._width = t
      }
      get height() {
        return this._height
      }
      set height(t) {
        this._height = t
      }
    }
    var dm = `#version 300 es
  #define SHADER_NAME Tiling-Sprite-100
  
  precision lowp float;
  
  in vec2 vTextureCoord;
  
  out vec4 fragmentColor;
  
  uniform sampler2D uSampler;
  uniform vec4 uColor;
  uniform mat3 uMapCoord;
  uniform vec4 uClampFrame;
  uniform vec2 uClampOffset;
  
  void main(void)
  {
      vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
      coord = (uMapCoord * vec3(coord, 1.0)).xy;
      vec2 unclamped = coord;
      coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
  
      vec4 texSample = texture(uSampler, coord, unclamped == coord ? 0.0f : -32.0f);// lod-bias very negative to force lod 0
  
      fragmentColor = texSample * uColor;
  }
  `,
      fm = `#version 300 es
  #define SHADER_NAME Tiling-Sprite-300
  
  precision lowp float;
  
  in vec2 aVertexPosition;
  in vec2 aTextureCoord;
  
  uniform mat3 projectionMatrix;
  uniform mat3 translationMatrix;
  uniform mat3 uTransform;
  
  out vec2 vTextureCoord;
  
  void main(void)
  {
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  
      vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
  }
  `,
      pm = `#version 100
  #ifdef GL_EXT_shader_texture_lod
      #extension GL_EXT_shader_texture_lod : enable
  #endif
  #define SHADER_NAME Tiling-Sprite-100
  
  precision lowp float;
  
  varying vec2 vTextureCoord;
  
  uniform sampler2D uSampler;
  uniform vec4 uColor;
  uniform mat3 uMapCoord;
  uniform vec4 uClampFrame;
  uniform vec2 uClampOffset;
  
  void main(void)
  {
      vec2 coord = vTextureCoord + ceil(uClampOffset - vTextureCoord);
      coord = (uMapCoord * vec3(coord, 1.0)).xy;
      vec2 unclamped = coord;
      coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);
  
      #ifdef GL_EXT_shader_texture_lod
          vec4 texSample = unclamped == coord
              ? texture2D(uSampler, coord) 
              : texture2DLodEXT(uSampler, coord, 0);
      #else
          vec4 texSample = texture2D(uSampler, coord);
      #endif
  
      gl_FragColor = texSample * uColor;
  }
  `,
      zl = `#version 100
  #define SHADER_NAME Tiling-Sprite-100
  
  precision lowp float;
  
  attribute vec2 aVertexPosition;
  attribute vec2 aTextureCoord;
  
  uniform mat3 projectionMatrix;
  uniform mat3 translationMatrix;
  uniform mat3 uTransform;
  
  varying vec2 vTextureCoord;
  
  void main(void)
  {
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);
  
      vTextureCoord = (uTransform * vec3(aTextureCoord, 1.0)).xy;
  }
  `,
      mm = `#version 100
  #define SHADER_NAME Tiling-Sprite-Simple-100
  
  precision lowp float;
  
  varying vec2 vTextureCoord;
  
  uniform sampler2D uSampler;
  uniform vec4 uColor;
  
  void main(void)
  {
      vec4 texSample = texture2D(uSampler, vTextureCoord);
      gl_FragColor = texSample * uColor;
  }
  `;
    const qi = new tt;
    class Yn extends xs {
      constructor(t) {
        super(t), t.runners.contextChange.add(this), this.quad = new Zr, this.state = Zt.for2d()
      }
      contextChange() {
        const t = this.renderer,
          e = {
            globals: t.globalUniforms
          };
        this.simpleShader = Vt.from(zl, mm, e), this.shader = t.context.webGLVersion > 1 ? Vt.from(fm, dm, e) : Vt.from(zl, pm, e)
      }
      render(t) {
        const e = this.renderer,
          s = this.quad;
        let r = s.vertices;
        r[0] = r[6] = t._width * -t.anchor.x, r[1] = r[3] = t._height * -t.anchor.y, r[2] = r[4] = t._width * (1 - t.anchor.x), r[5] = r[7] = t._height * (1 - t.anchor.y);
        const n = t.uvRespectAnchor ? t.anchor.x : 0,
          a = t.uvRespectAnchor ? t.anchor.y : 0;
        r = s.uvs, r[0] = r[6] = -n, r[1] = r[3] = -a, r[2] = r[4] = 1 - n, r[5] = r[7] = 1 - a, s.invalidate();
        const o = t._texture,
          h = o.baseTexture,
          l = h.alphaMode > 0,
          u = t.tileTransform.localTransform,
          c = t.uvMatrix;
        let d = h.isPowerOfTwo && o.frame.width === h.width && o.frame.height === h.height;
        d && (h._glTextures[e.CONTEXT_UID] ? d = h.wrapMode !== Wt.CLAMP : h.wrapMode === Wt.CLAMP && (h.wrapMode = Wt.REPEAT));
        const f = d ? this.simpleShader : this.shader,
          p = o.width,
          m = o.height,
          g = t._width,
          y = t._height;
        qi.set(u.a * p / g, u.b * p / y, u.c * m / g, u.d * m / y, u.tx / g, u.ty / y), qi.invert(), d ? qi.prepend(c.mapCoord) : (f.uniforms.uMapCoord = c.mapCoord.toArray(!0), f.uniforms.uClampFrame = c.uClampFrame, f.uniforms.uClampOffset = c.uClampOffset), f.uniforms.uTransform = qi.toArray(!0), f.uniforms.uColor = Z.shared.setValue(t.tint).premultiply(t.worldAlpha, l).toArray(f.uniforms.uColor), f.uniforms.translationMatrix = t.transform.worldTransform.toArray(!0), f.uniforms.uSampler = o, e.shader.bind(f), e.geometry.bind(s), this.state.blendMode = wr(t.blendMode, l), e.state.set(this.state), e.geometry.draw(this.renderer.gl.TRIANGLES, 6, 0)
      }
    }
    Yn.extension = {
      name: "tilingSprite",
      type: R.RendererPlugin
    }, L.add(Yn);
    const Wl = class Ks {
      constructor(t, e, s = null) {
        this.linkedSheets = [], this._texture = t instanceof B ? t : null, this.baseTexture = t instanceof X ? t : this._texture.baseTexture, this.textures = {}, this.animations = {}, this.data = e;
        const r = this.baseTexture.resource;
        this.resolution = this._updateResolution(s || (r ? r.url : null)), this._frames = this.data.frames, this._frameKeys = Object.keys(this._frames), this._batchIndex = 0, this._callback = null
      }
      _updateResolution(t = null) {
        const {
          scale: e
        } = this.data.meta;
        let s = Kt(t, null);
        return s === null && (s = parseFloat(e != null ? e : "1")), s !== 1 && this.baseTexture.setResolution(s), s
      }
      parse() {
        return new Promise(t => {
          this._callback = t, this._batchIndex = 0, this._frameKeys.length <= Ks.BATCH_SIZE ? (this._processFrames(0), this._processAnimations(), this._parseComplete()) : this._nextBatch()
        })
      }
      _processFrames(t) {
        let e = t;
        const s = Ks.BATCH_SIZE;
        for (; e - t < s && e < this._frameKeys.length;) {
          const r = this._frameKeys[e],
            n = this._frames[r],
            a = n.frame;
          if (a) {
            let o = null,
              h = null;
            const l = n.trimmed !== !1 && n.sourceSize ? n.sourceSize : n.frame,
              u = new j(0, 0, Math.floor(l.w) / this.resolution, Math.floor(l.h) / this.resolution);
            n.rotated ? o = new j(Math.floor(a.x) / this.resolution, Math.floor(a.y) / this.resolution, Math.floor(a.h) / this.resolution, Math.floor(a.w) / this.resolution) : o = new j(Math.floor(a.x) / this.resolution, Math.floor(a.y) / this.resolution, Math.floor(a.w) / this.resolution, Math.floor(a.h) / this.resolution), n.trimmed !== !1 && n.spriteSourceSize && (h = new j(Math.floor(n.spriteSourceSize.x) / this.resolution, Math.floor(n.spriteSourceSize.y) / this.resolution, Math.floor(a.w) / this.resolution, Math.floor(a.h) / this.resolution)), this.textures[r] = new B(this.baseTexture, o, u, h, n.rotated ? 2 : 0, n.anchor, n.borders), B.addToCache(this.textures[r], r.toString())
          }
          e++
        }
      }
      _processAnimations() {
        const t = this.data.animations || {};
        for (const e in t) {
          this.animations[e] = [];
          for (let s = 0; s < t[e].length; s++) {
            const r = t[e][s];
            this.animations[e].push(this.textures[r])
          }
        }
      }
      _parseComplete() {
        const t = this._callback;
        this._callback = null, this._batchIndex = 0, t.call(this, this.textures)
      }
      _nextBatch() {
        this._processFrames(this._batchIndex * Ks.BATCH_SIZE), this._batchIndex++, setTimeout(() => {
          this._batchIndex * Ks.BATCH_SIZE < this._frameKeys.length ? this._nextBatch() : (this._processAnimations(), this._parseComplete())
        }, 0)
      }
      destroy(t = !1) {
        var e;
        for (const s in this.textures) this.textures[s].destroy();
        this._frames = null, this._frameKeys = null, this.data = null, this.textures = null, t && ((e = this._texture) == null || e.destroy(), this.baseTexture.destroy()), this._texture = null, this.baseTexture = null, this.linkedSheets = []
      }
    };
    Wl.BATCH_SIZE = 1e3;
    let qn = Wl;
    const gm = ["jpg", "png", "jpeg", "avif", "webp"];
  
    function Yl(i, t, e) {
      const s = {};
      if (i.forEach(r => {
          s[r] = t
        }), Object.keys(t.textures).forEach(r => {
          s[r] = t.textures[r]
        }), !e) {
        const r = vt.dirname(i[0]);
        t.linkedSheets.forEach((n, a) => {
          const o = Yl([`${r}/${t.data.meta.related_multi_packs[a]}`], n, !0);
          Object.assign(s, o)
        })
      }
      return s
    }
    const ql = {
      extension: R.Asset,
      cache: {
        test: i => i instanceof qn,
        getCacheableAssets: (i, t) => Yl(i, t, !1)
      },
      resolver: {
        test: i => {
          const t = i.split("?")[0].split("."),
            e = t.pop(),
            s = t.pop();
          return e === "json" && gm.includes(s)
        },
        parse: i => {
          var t, e;
          const s = i.split(".");
          return {
            resolution: parseFloat((e = (t = O.RETINA_PREFIX.exec(i)) == null ? void 0 : t[1]) != null ? e : "1"),
            format: s[s.length - 2],
            src: i
          }
        }
      },
      loader: {
        name: "spritesheetLoader",
        extension: {
          type: R.LoadParser,
          priority: Nt.Normal
        },
        async testParse(i, t) {
          return vt.extname(t.src).toLowerCase() === ".json" && !!i.frames
        },
        async parse(i, t, e) {
          var s, r;
          let n = vt.dirname(t.src);
          n && n.lastIndexOf("/") !== n.length - 1 && (n += "/");
          let a = n + i.meta.image;
          a = Ni(a, t.src);
          const o = (await e.load([a]))[a],
            h = new qn(o.baseTexture, i, t.src);
          await h.parse();
          const l = (s = i == null ? void 0 : i.meta) == null ? void 0 : s.related_multi_packs;
          if (Array.isArray(l)) {
            const u = [];
            for (const d of l) {
              if (typeof d != "string") continue;
              let f = n + d;
              (r = t.data) != null && r.ignoreMultiPack || (f = Ni(f, t.src), u.push(e.load({
                src: f,
                data: {
                  ignoreMultiPack: !0
                }
              })))
            }
            const c = await Promise.all(u);
            h.linkedSheets = c, c.forEach(d => {
              d.linkedSheets = [h].concat(h.linkedSheets.filter(f => f !== d))
            })
          }
          return h
        },
        unload(i) {
          i.destroy(!0)
        }
      }
    };
    L.add(ql);
    class Hs {
      constructor() {
        this.info = [], this.common = [], this.page = [], this.char = [], this.kerning = [], this.distanceField = []
      }
    }
    class Vs {
      static test(t) {
        return typeof t == "string" && t.startsWith("info face=")
      }
      static parse(t) {
        const e = t.match(/^[a-z]+\s+.+$/gm),
          s = {
            info: [],
            common: [],
            page: [],
            char: [],
            chars: [],
            kerning: [],
            kernings: [],
            distanceField: []
          };
        for (const n in e) {
          const a = e[n].match(/^[a-z]+/gm)[0],
            o = e[n].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm),
            h = {};
          for (const l in o) {
            const u = o[l].split("="),
              c = u[0],
              d = u[1].replace(/"/gm, ""),
              f = parseFloat(d),
              p = isNaN(f) ? d : f;
            h[c] = p
          }
          s[a].push(h)
        }
        const r = new Hs;
        return s.info.forEach(n => r.info.push({
          face: n.face,
          size: parseInt(n.size, 10)
        })), s.common.forEach(n => r.common.push({
          lineHeight: parseInt(n.lineHeight, 10)
        })), s.page.forEach(n => r.page.push({
          id: parseInt(n.id, 10),
          file: n.file
        })), s.char.forEach(n => r.char.push({
          id: parseInt(n.id, 10),
          page: parseInt(n.page, 10),
          x: parseInt(n.x, 10),
          y: parseInt(n.y, 10),
          width: parseInt(n.width, 10),
          height: parseInt(n.height, 10),
          xoffset: parseInt(n.xoffset, 10),
          yoffset: parseInt(n.yoffset, 10),
          xadvance: parseInt(n.xadvance, 10)
        })), s.kerning.forEach(n => r.kerning.push({
          first: parseInt(n.first, 10),
          second: parseInt(n.second, 10),
          amount: parseInt(n.amount, 10)
        })), s.distanceField.forEach(n => r.distanceField.push({
          distanceRange: parseInt(n.distanceRange, 10),
          fieldType: n.fieldType
        })), r
      }
    }
    class Ki {
      static test(t) {
        const e = t;
        return typeof t != "string" && "getElementsByTagName" in t && e.getElementsByTagName("page").length && e.getElementsByTagName("info")[0].getAttribute("face") !== null
      }
      static parse(t) {
        const e = new Hs,
          s = t.getElementsByTagName("info"),
          r = t.getElementsByTagName("common"),
          n = t.getElementsByTagName("page"),
          a = t.getElementsByTagName("char"),
          o = t.getElementsByTagName("kerning"),
          h = t.getElementsByTagName("distanceField");
        for (let l = 0; l < s.length; l++) e.info.push({
          face: s[l].getAttribute("face"),
          size: parseInt(s[l].getAttribute("size"), 10)
        });
        for (let l = 0; l < r.length; l++) e.common.push({
          lineHeight: parseInt(r[l].getAttribute("lineHeight"), 10)
        });
        for (let l = 0; l < n.length; l++) e.page.push({
          id: parseInt(n[l].getAttribute("id"), 10) || 0,
          file: n[l].getAttribute("file")
        });
        for (let l = 0; l < a.length; l++) {
          const u = a[l];
          e.char.push({
            id: parseInt(u.getAttribute("id"), 10),
            page: parseInt(u.getAttribute("page"), 10) || 0,
            x: parseInt(u.getAttribute("x"), 10),
            y: parseInt(u.getAttribute("y"), 10),
            width: parseInt(u.getAttribute("width"), 10),
            height: parseInt(u.getAttribute("height"), 10),
            xoffset: parseInt(u.getAttribute("xoffset"), 10),
            yoffset: parseInt(u.getAttribute("yoffset"), 10),
            xadvance: parseInt(u.getAttribute("xadvance"), 10)
          })
        }
        for (let l = 0; l < o.length; l++) e.kerning.push({
          first: parseInt(o[l].getAttribute("first"), 10),
          second: parseInt(o[l].getAttribute("second"), 10),
          amount: parseInt(o[l].getAttribute("amount"), 10)
        });
        for (let l = 0; l < h.length; l++) e.distanceField.push({
          fieldType: h[l].getAttribute("fieldType"),
          distanceRange: parseInt(h[l].getAttribute("distanceRange"), 10)
        });
        return e
      }
    }
    class Zi {
      static test(t) {
        return typeof t == "string" && t.includes("<font>") ? Ki.test(O.ADAPTER.parseXML(t)) : !1
      }
      static parse(t) {
        return Ki.parse(O.ADAPTER.parseXML(t))
      }
    }
    const Kn = [Vs, Ki, Zi];
  
    function Kl(i) {
      for (let t = 0; t < Kn.length; t++)
        if (Kn[t].test(i)) return Kn[t];
      return null
    }
  
    function _m(i, t, e, s, r, n) {
      const a = e.fill;
      if (Array.isArray(a)) {
        if (a.length === 1) return a[0]
      } else return a;
      let o;
      const h = e.dropShadow ? e.dropShadowDistance : 0,
        l = e.padding || 0,
        u = i.width / s - h - l * 2,
        c = i.height / s - h - l * 2,
        d = a.slice(),
        f = e.fillGradientStops.slice();
      if (!f.length) {
        const p = d.length + 1;
        for (let m = 1; m < p; ++m) f.push(m / p)
      }
      if (d.unshift(a[0]), f.unshift(0), d.push(a[a.length - 1]), f.push(1), e.fillGradientType === Gs.LINEAR_VERTICAL) {
        o = t.createLinearGradient(u / 2, l, u / 2, c + l);
        let p = 0;
        const m = (n.fontProperties.fontSize + e.strokeThickness) / c;
        for (let g = 0; g < r.length; g++) {
          const y = n.lineHeight * g;
          for (let b = 0; b < d.length; b++) {
            let v = 0;
            typeof f[b] == "number" ? v = f[b] : v = b / d.length;
            const x = y / c + v * m;
            let E = Math.max(p, x);
            E = Math.min(E, 1), o.addColorStop(E, d[b]), p = E
          }
        }
      } else {
        o = t.createLinearGradient(l, c / 2, u + l, c / 2);
        const p = d.length + 1;
        let m = 1;
        for (let g = 0; g < d.length; g++) {
          let y;
          typeof f[g] == "number" ? y = f[g] : y = m / p, o.addColorStop(y, d[g]), m++
        }
      }
      return o
    }
  
    function vm(i, t, e, s, r, n, a) {
      const o = e.text,
        h = e.fontProperties;
      t.translate(s, r), t.scale(n, n);
      const l = a.strokeThickness / 2,
        u = -(a.strokeThickness / 2);
      if (t.font = a.toFontString(), t.lineWidth = a.strokeThickness, t.textBaseline = a.textBaseline, t.lineJoin = a.lineJoin, t.miterLimit = a.miterLimit, t.fillStyle = _m(i, t, a, n, [o], e), t.strokeStyle = a.stroke, a.dropShadow) {
        const c = a.dropShadowColor,
          d = a.dropShadowBlur * n,
          f = a.dropShadowDistance * n;
        t.shadowColor = Z.shared.setValue(c).setAlpha(a.dropShadowAlpha).toRgbaString(), t.shadowBlur = d, t.shadowOffsetX = Math.cos(a.dropShadowAngle) * f, t.shadowOffsetY = Math.sin(a.dropShadowAngle) * f
      } else t.shadowColor = "black", t.shadowBlur = 0, t.shadowOffsetX = 0, t.shadowOffsetY = 0;
      a.stroke && a.strokeThickness && t.strokeText(o, l, u + e.lineHeight - h.descent), a.fill && t.fillText(o, l, u + e.lineHeight - h.descent), t.setTransform(1, 0, 0, 1, 0, 0), t.fillStyle = "rgba(0, 0, 0, 0)"
    }
  
    function Qi(i) {
      return i.codePointAt ? i.codePointAt(0) : i.charCodeAt(0)
    }
  
    function Zl(i) {
      return Array.from ? Array.from(i) : i.split("")
    }
  
    function ym(i) {
      typeof i == "string" && (i = [i]);
      const t = [];
      for (let e = 0, s = i.length; e < s; e++) {
        const r = i[e];
        if (Array.isArray(r)) {
          if (r.length !== 2) throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${r.length}.`);
          const n = r[0].charCodeAt(0),
            a = r[1].charCodeAt(0);
          if (a < n) throw new Error("[BitmapFont]: Invalid character range.");
          for (let o = n, h = a; o <= h; o++) t.push(String.fromCharCode(o))
        } else t.push(...Zl(r))
      }
      if (t.length === 0) throw new Error("[BitmapFont]: Empty set when resolving characters.");
      return t
    }
    var xm = Object.defineProperty,
      Ji = Object.getOwnPropertySymbols,
      Ql = Object.prototype.hasOwnProperty,
      Jl = Object.prototype.propertyIsEnumerable,
      tu = (i, t, e) => t in i ? xm(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      bm = (i, t) => {
        for (var e in t || (t = {})) Ql.call(t, e) && tu(i, e, t[e]);
        if (Ji)
          for (var e of Ji(t)) Jl.call(t, e) && tu(i, e, t[e]);
        return i
      },
      Tm = (i, t) => {
        var e = {};
        for (var s in i) Ql.call(i, s) && t.indexOf(s) < 0 && (e[s] = i[s]);
        if (i != null && Ji)
          for (var s of Ji(i)) t.indexOf(s) < 0 && Jl.call(i, s) && (e[s] = i[s]);
        return e
      };
    const Se = class se {
      constructor(t, e, s) {
        var r, n;
        const [a] = t.info, [o] = t.common, [h] = t.page, [l] = t.distanceField, u = Kt(h.file), c = {};
        this._ownsTextures = s, this.font = a.face, this.size = a.size, this.lineHeight = o.lineHeight / u, this.chars = {}, this.pageTextures = c;
        for (let d = 0; d < t.page.length; d++) {
          const {
            id: f,
            file: p
          } = t.page[d];
          c[f] = e instanceof Array ? e[d] : e[p], l != null && l.fieldType && l.fieldType !== "none" && (c[f].baseTexture.alphaMode = bt.NO_PREMULTIPLIED_ALPHA, c[f].baseTexture.mipmap = Ut.OFF)
        }
        for (let d = 0; d < t.char.length; d++) {
          const {
            id: f,
            page: p
          } = t.char[d];
          let {
            x: m,
            y: g,
            width: y,
            height: b,
            xoffset: v,
            yoffset: x,
            xadvance: E
          } = t.char[d];
          m /= u, g /= u, y /= u, b /= u, v /= u, x /= u, E /= u;
          const M = new j(m + c[p].frame.x / u, g + c[p].frame.y / u, y, b);
          this.chars[f] = {
            xOffset: v,
            yOffset: x,
            xAdvance: E,
            kerning: {},
            texture: new B(c[p].baseTexture, M),
            page: p
          }
        }
        for (let d = 0; d < t.kerning.length; d++) {
          let {
            first: f,
            second: p,
            amount: m
          } = t.kerning[d];
          f /= u, p /= u, m /= u, this.chars[p] && (this.chars[p].kerning[f] = m)
        }
        this.distanceFieldRange = l == null ? void 0 : l.distanceRange, this.distanceFieldType = (n = (r = l == null ? void 0 : l.fieldType) == null ? void 0 : r.toLowerCase()) != null ? n : "none"
      }
      destroy() {
        for (const t in this.chars) this.chars[t].texture.destroy(), this.chars[t].texture = null;
        for (const t in this.pageTextures) this._ownsTextures && this.pageTextures[t].destroy(!0), this.pageTextures[t] = null;
        this.chars = null, this.pageTextures = null
      }
      static install(t, e, s) {
        let r;
        if (t instanceof Hs) r = t;
        else {
          const a = Kl(t);
          if (!a) throw new Error("Unrecognized data format for font.");
          r = a.parse(t)
        }
        e instanceof B && (e = [e]);
        const n = new se(r, e, s);
        return se.available[n.font] = n, n
      }
      static uninstall(t) {
        const e = se.available[t];
        if (!e) throw new Error(`No font found named '${t}'`);
        e.destroy(), delete se.available[t]
      }
      static from(t, e, s) {
        if (!t) throw new Error("[BitmapFont] Property `name` is required.");
        const r = Object.assign({}, se.defaultOptions, s),
          {
            chars: n,
            padding: a,
            resolution: o,
            textureWidth: h,
            textureHeight: l
          } = r,
          u = Tm(r, ["chars", "padding", "resolution", "textureWidth", "textureHeight"]),
          c = ym(n),
          d = e instanceof me ? e : new me(e),
          f = h,
          p = new Hs;
        p.info[0] = {
          face: d.fontFamily,
          size: d.fontSize
        }, p.common[0] = {
          lineHeight: d.fontSize
        };
        let m = 0,
          g = 0,
          y, b, v, x = 0;
        const E = [],
          M = [];
        for (let w = 0; w < c.length; w++) {
          y || (y = O.ADAPTER.createCanvas(), y.width = h, y.height = l, b = y.getContext("2d"), v = new X(y, bm({
            resolution: o
          }, u)), E.push(v), M.push(new B(v)), p.page.push({
            id: M.length - 1,
            file: ""
          }));
          const F = c[w],
            G = pe.measureText(F, d, !1, y),
            Y = G.width,
            N = Math.ceil(G.height),
            T = Math.ceil((d.fontStyle === "italic" ? 2 : 1) * Y);
          if (g >= l - N * o) {
            if (g === 0) throw new Error(`[BitmapFont] textureHeight ${l}px is too small (fontFamily: '${d.fontFamily}', fontSize: ${d.fontSize}px, char: '${F}')`);
            --w, y = null, b = null, v = null, g = 0, m = 0, x = 0;
            continue
          }
          if (x = Math.max(N + G.fontProperties.descent, x), T * o + m >= f) {
            if (m === 0) throw new Error(`[BitmapFont] textureWidth ${h}px is too small (fontFamily: '${d.fontFamily}', fontSize: ${d.fontSize}px, char: '${F}')`);
            --w, g += x * o, g = Math.ceil(g), m = 0, x = 0;
            continue
          }
          vm(y, b, G, m, g, o, d);
          const I = Qi(G.text);
          p.char.push({
            id: I,
            page: M.length - 1,
            x: m / o,
            y: g / o,
            width: T,
            height: N,
            xoffset: 0,
            yoffset: 0,
            xadvance: Y - (d.dropShadow ? d.dropShadowDistance : 0) - (d.stroke ? d.strokeThickness : 0)
          }), m += (T + 2 * a) * o, m = Math.ceil(m)
        }
        if (!(s != null && s.skipKerning))
          for (let w = 0, F = c.length; w < F; w++) {
            const G = c[w];
            for (let Y = 0; Y < F; Y++) {
              const N = c[Y],
                T = b.measureText(G).width,
                I = b.measureText(N).width,
                $ = b.measureText(G + N).width - (T + I);
              $ && p.kerning.push({
                first: Qi(G),
                second: Qi(N),
                amount: $
              })
            }
          }
        const S = new se(p, M, !0);
        return se.available[t] !== void 0 && se.uninstall(t), se.available[t] = S, S
      }
    };
    Se.ALPHA = [
      ["a", "z"],
      ["A", "Z"], " "
    ], Se.NUMERIC = [
      ["0", "9"]
    ], Se.ALPHANUMERIC = [
      ["a", "z"],
      ["A", "Z"],
      ["0", "9"], " "
    ], Se.ASCII = [
      [" ", "~"]
    ], Se.defaultOptions = {
      resolution: 1,
      textureWidth: 512,
      textureHeight: 512,
      padding: 4,
      chars: Se.ALPHANUMERIC
    }, Se.available = {};
    let ge = Se;
    var Em = `// Pixi texture info\r
  varying vec2 vTextureCoord;\r
  uniform sampler2D uSampler;\r
  \r
  // Tint\r
  uniform vec4 uColor;\r
  \r
  // on 2D applications fwidth is screenScale / glyphAtlasScale * distanceFieldRange\r
  uniform float uFWidth;\r
  \r
  void main(void) {\r
  \r
    // To stack MSDF and SDF we need a non-pre-multiplied-alpha texture.\r
    vec4 texColor = texture2D(uSampler, vTextureCoord);\r
  \r
    // MSDF\r
    float median = texColor.r + texColor.g + texColor.b -\r
                    min(texColor.r, min(texColor.g, texColor.b)) -\r
                    max(texColor.r, max(texColor.g, texColor.b));\r
    // SDF\r
    median = min(median, texColor.a);\r
  \r
    float screenPxDistance = uFWidth * (median - 0.5);\r
    float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);\r
    if (median < 0.01) {\r
      alpha = 0.0;\r
    } else if (median > 0.99) {\r
      alpha = 1.0;\r
    }\r
  \r
    // Gamma correction for coverage-like alpha\r
    float luma = dot(uColor.rgb, vec3(0.299, 0.587, 0.114));\r
    float gamma = mix(1.0, 1.0 / 2.2, luma);\r
    float coverage = pow(uColor.a * alpha, gamma);  \r
  \r
    // NPM Textures, NPM outputs\r
    gl_FragColor = vec4(uColor.rgb, coverage);\r
  }\r
  `,
      Am = `// Mesh material default fragment\r
  attribute vec2 aVertexPosition;\r
  attribute vec2 aTextureCoord;\r
  \r
  uniform mat3 projectionMatrix;\r
  uniform mat3 translationMatrix;\r
  uniform mat3 uTextureMatrix;\r
  \r
  varying vec2 vTextureCoord;\r
  \r
  void main(void)\r
  {\r
      gl_Position = vec4((projectionMatrix * translationMatrix * vec3(aVertexPosition, 1.0)).xy, 0.0, 1.0);\r
  \r
      vTextureCoord = (uTextureMatrix * vec3(aTextureCoord, 1.0)).xy;\r
  }\r
  `;
    const eu = [],
      su = [],
      iu = [],
      ru = class cu extends It {
        constructor(t, e = {}) {
          super();
          const {
            align: s,
            tint: r,
            maxWidth: n,
            letterSpacing: a,
            fontName: o,
            fontSize: h
          } = Object.assign({}, cu.styleDefaults, e);
          if (!ge.available[o]) throw new Error(`Missing BitmapFont "${o}"`);
          this._activePagesMeshData = [], this._textWidth = 0, this._textHeight = 0, this._align = s, this._tintColor = new Z(r), this._font = void 0, this._fontName = o, this._fontSize = h, this.text = t, this._maxWidth = n, this._maxLineHeight = 0, this._letterSpacing = a, this._anchor = new oe(() => {
            this.dirty = !0
          }, this, 0, 0), this._roundPixels = O.ROUND_PIXELS, this.dirty = !0, this._resolution = O.RESOLUTION, this._autoResolution = !0, this._textureCache = {}
        }
        updateText() {
          var t;
          const e = ge.available[this._fontName],
            s = this.fontSize,
            r = s / e.size,
            n = new q,
            a = [],
            o = [],
            h = [],
            l = this._text.replace(/(?:\r\n|\r)/g, `
  `) || " ",
            u = Zl(l),
            c = this._maxWidth * e.size / s,
            d = e.distanceFieldType === "none" ? eu : su;
          let f = null,
            p = 0,
            m = 0,
            g = 0,
            y = -1,
            b = 0,
            v = 0,
            x = 0,
            E = 0;
          for (let N = 0; N < u.length; N++) {
            const T = u[N],
              I = Qi(T);
            if (/(?:\s)/.test(T) && (y = N, b = p, E++), T === "\r" || T === `
  `) {
              o.push(p), h.push(-1), m = Math.max(m, p), ++g, ++v, n.x = 0, n.y += e.lineHeight, f = null, E = 0;
              continue
            }
            const $ = e.chars[I];
            if (!$) continue;
            f && $.kerning[f] && (n.x += $.kerning[f]);
            const W = iu.pop() || {
              texture: B.EMPTY,
              line: 0,
              charCode: 0,
              prevSpaces: 0,
              position: new q
            };
            W.texture = $.texture, W.line = g, W.charCode = I, W.position.x = Math.round(n.x + $.xOffset + this._letterSpacing / 2), W.position.y = Math.round(n.y + $.yOffset), W.prevSpaces = E, a.push(W), p = W.position.x + Math.max($.xAdvance - $.xOffset, $.texture.orig.width), n.x += $.xAdvance + this._letterSpacing, x = Math.max(x, $.yOffset + $.texture.height), f = I, y !== -1 && c > 0 && n.x > c && (++v, Ce(a, 1 + y - v, 1 + N - y), N = y, y = -1, o.push(b), h.push(a.length > 0 ? a[a.length - 1].prevSpaces : 0), m = Math.max(m, b), g++, n.x = 0, n.y += e.lineHeight, f = null, E = 0)
          }
          const M = u[u.length - 1];
          M !== "\r" && M !== `
  ` && (/(?:\s)/.test(M) && (p = b), o.push(p), m = Math.max(m, p), h.push(-1));
          const S = [];
          for (let N = 0; N <= g; N++) {
            let T = 0;
            this._align === "right" ? T = m - o[N] : this._align === "center" ? T = (m - o[N]) / 2 : this._align === "justify" && (T = h[N] < 0 ? 0 : (m - o[N]) / h[N]), S.push(T)
          }
          const w = a.length,
            F = {},
            G = [],
            Y = this._activePagesMeshData;
          d.push(...Y);
          for (let N = 0; N < w; N++) {
            const T = a[N].texture,
              I = T.baseTexture.uid;
            if (!F[I]) {
              let $ = d.pop();
              if (!$) {
                const V = new ks;
                let z, ot;
                e.distanceFieldType === "none" ? (z = new ts(B.EMPTY), ot = H.NORMAL) : (z = new ts(B.EMPTY, {
                  program: Qt.from(Am, Em),
                  uniforms: {
                    uFWidth: 0
                  }
                }), ot = H.NORMAL_NPM);
                const P = new Je(V, z);
                P.blendMode = ot, $ = {
                  index: 0,
                  indexCount: 0,
                  vertexCount: 0,
                  uvsCount: 0,
                  total: 0,
                  mesh: P,
                  vertices: null,
                  uvs: null,
                  indices: null
                }
              }
              $.index = 0, $.indexCount = 0, $.vertexCount = 0, $.uvsCount = 0, $.total = 0;
              const {
                _textureCache: W
              } = this;
              W[I] = W[I] || new B(T.baseTexture), $.mesh.texture = W[I], $.mesh.tint = this._tintColor.value, G.push($), F[I] = $
            }
            F[I].total++
          }
          for (let N = 0; N < Y.length; N++) G.includes(Y[N]) || this.removeChild(Y[N].mesh);
          for (let N = 0; N < G.length; N++) G[N].mesh.parent !== this && this.addChild(G[N].mesh);
          this._activePagesMeshData = G;
          for (const N in F) {
            const T = F[N],
              I = T.total;
            if (!(((t = T.indices) == null ? void 0 : t.length) > 6 * I) || T.vertices.length < Je.BATCHABLE_SIZE * 2) T.vertices = new Float32Array(4 * 2 * I), T.uvs = new Float32Array(4 * 2 * I), T.indices = new Uint16Array(6 * I);
            else {
              const $ = T.total,
                W = T.vertices;
              for (let V = $ * 4 * 2; V < W.length; V++) W[V] = 0
            }
            T.mesh.size = 6 * I
          }
          for (let N = 0; N < w; N++) {
            const T = a[N];
            let I = T.position.x + S[T.line] * (this._align === "justify" ? T.prevSpaces : 1);
            this._roundPixels && (I = Math.round(I));
            const $ = I * r,
              W = T.position.y * r,
              V = T.texture,
              z = F[V.baseTexture.uid],
              ot = V.frame,
              P = V._uvs,
              C = z.index++;
            z.indices[C * 6 + 0] = 0 + C * 4, z.indices[C * 6 + 1] = 1 + C * 4, z.indices[C * 6 + 2] = 2 + C * 4, z.indices[C * 6 + 3] = 0 + C * 4, z.indices[C * 6 + 4] = 2 + C * 4, z.indices[C * 6 + 5] = 3 + C * 4, z.vertices[C * 8 + 0] = $, z.vertices[C * 8 + 1] = W, z.vertices[C * 8 + 2] = $ + ot.width * r, z.vertices[C * 8 + 3] = W, z.vertices[C * 8 + 4] = $ + ot.width * r, z.vertices[C * 8 + 5] = W + ot.height * r, z.vertices[C * 8 + 6] = $, z.vertices[C * 8 + 7] = W + ot.height * r, z.uvs[C * 8 + 0] = P.x0, z.uvs[C * 8 + 1] = P.y0, z.uvs[C * 8 + 2] = P.x1, z.uvs[C * 8 + 3] = P.y1, z.uvs[C * 8 + 4] = P.x2, z.uvs[C * 8 + 5] = P.y2, z.uvs[C * 8 + 6] = P.x3, z.uvs[C * 8 + 7] = P.y3
          }
          this._textWidth = m * r, this._textHeight = (n.y + e.lineHeight) * r;
          for (const N in F) {
            const T = F[N];
            if (this.anchor.x !== 0 || this.anchor.y !== 0) {
              let V = 0;
              const z = this._textWidth * this.anchor.x,
                ot = this._textHeight * this.anchor.y;
              for (let P = 0; P < T.total; P++) T.vertices[V++] -= z, T.vertices[V++] -= ot, T.vertices[V++] -= z, T.vertices[V++] -= ot, T.vertices[V++] -= z, T.vertices[V++] -= ot, T.vertices[V++] -= z, T.vertices[V++] -= ot
            }
            this._maxLineHeight = x * r;
            const I = T.mesh.geometry.getBuffer("aVertexPosition"),
              $ = T.mesh.geometry.getBuffer("aTextureCoord"),
              W = T.mesh.geometry.getIndex();
            I.data = T.vertices, $.data = T.uvs, W.data = T.indices, I.update(), $.update(), W.update()
          }
          for (let N = 0; N < a.length; N++) iu.push(a[N]);
          this._font = e, this.dirty = !1
        }
        updateTransform() {
          this.validate(), this.containerUpdateTransform()
        }
        _render(t) {
          this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0);
          const {
            distanceFieldRange: e,
            distanceFieldType: s,
            size: r
          } = ge.available[this._fontName];
          if (s !== "none") {
            const {
              a: n,
              b: a,
              c: o,
              d: h
            } = this.worldTransform, l = Math.sqrt(n * n + a * a), u = Math.sqrt(o * o + h * h), c = (Math.abs(l) + Math.abs(u)) / 2, d = this.fontSize / r, f = t._view.resolution;
            for (const p of this._activePagesMeshData) p.mesh.shader.uniforms.uFWidth = c * e * d * f
          }
          super._render(t)
        }
        getLocalBounds() {
          return this.validate(), super.getLocalBounds()
        }
        validate() {
          const t = ge.available[this._fontName];
          if (!t) throw new Error(`Missing BitmapFont "${this._fontName}"`);
          this._font !== t && (this.dirty = !0), this.dirty && this.updateText()
        }
        get tint() {
          return this._tintColor.value
        }
        set tint(t) {
          if (this.tint !== t) {
            this._tintColor.setValue(t);
            for (let e = 0; e < this._activePagesMeshData.length; e++) this._activePagesMeshData[e].mesh.tint = t
          }
        }
        get align() {
          return this._align
        }
        set align(t) {
          this._align !== t && (this._align = t, this.dirty = !0)
        }
        get fontName() {
          return this._fontName
        }
        set fontName(t) {
          if (!ge.available[t]) throw new Error(`Missing BitmapFont "${t}"`);
          this._fontName !== t && (this._fontName = t, this.dirty = !0)
        }
        get fontSize() {
          var t;
          return (t = this._fontSize) != null ? t : ge.available[this._fontName].size
        }
        set fontSize(t) {
          this._fontSize !== t && (this._fontSize = t, this.dirty = !0)
        }
        get anchor() {
          return this._anchor
        }
        set anchor(t) {
          typeof t == "number" ? this._anchor.set(t) : this._anchor.copyFrom(t)
        }
        get text() {
          return this._text
        }
        set text(t) {
          t = String(t == null ? "" : t), this._text !== t && (this._text = t, this.dirty = !0)
        }
        get maxWidth() {
          return this._maxWidth
        }
        set maxWidth(t) {
          this._maxWidth !== t && (this._maxWidth = t, this.dirty = !0)
        }
        get maxLineHeight() {
          return this.validate(), this._maxLineHeight
        }
        get textWidth() {
          return this.validate(), this._textWidth
        }
        get letterSpacing() {
          return this._letterSpacing
        }
        set letterSpacing(t) {
          this._letterSpacing !== t && (this._letterSpacing = t, this.dirty = !0)
        }
        get roundPixels() {
          return this._roundPixels
        }
        set roundPixels(t) {
          t !== this._roundPixels && (this._roundPixels = t, this.dirty = !0)
        }
        get textHeight() {
          return this.validate(), this._textHeight
        }
        get resolution() {
          return this._resolution
        }
        set resolution(t) {
          this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
        }
        destroy(t) {
          const {
            _textureCache: e
          } = this, s = ge.available[this._fontName].distanceFieldType === "none" ? eu : su;
          s.push(...this._activePagesMeshData);
          for (const r of this._activePagesMeshData) this.removeChild(r.mesh);
          this._activePagesMeshData = [], s.filter(r => e[r.mesh.texture.baseTexture.uid]).forEach(r => {
            r.mesh.texture = B.EMPTY
          });
          for (const r in e) e[r].destroy(), delete e[r];
          this._font = null, this._tintColor = null, this._textureCache = null, super.destroy(t)
        }
      };
    ru.styleDefaults = {
      align: "left",
      tint: 16777215,
      maxWidth: 0,
      letterSpacing: 0
    };
    let wm = ru;
    const Sm = [".xml", ".fnt"],
      nu = {
        extension: {
          type: R.LoadParser,
          priority: Nt.Normal
        },
        name: "loadBitmapFont",
        test(i) {
          return Sm.includes(vt.extname(i).toLowerCase())
        },
        async testParse(i) {
          return Vs.test(i) || Zi.test(i)
        },
        async parse(i, t, e) {
          const s = Vs.test(i) ? Vs.parse(i) : Zi.parse(i),
            {
              src: r
            } = t,
            {
              page: n
            } = s,
            a = [];
          for (let l = 0; l < n.length; ++l) {
            const u = n[l].file;
            let c = vt.join(vt.dirname(r), u);
            c = Ni(c, r), a.push(c)
          }
          const o = await e.load(a),
            h = a.map(l => o[l]);
          return ge.install(s, h, !0)
        },
        async load(i, t) {
          return (await O.ADAPTER.fetch(i)).text()
        },
        unload(i) {
          i.destroy()
        }
      };
    L.add(nu);
    var Im = Object.defineProperty,
      Rm = Object.defineProperties,
      Cm = Object.getOwnPropertyDescriptors,
      au = Object.getOwnPropertySymbols,
      Pm = Object.prototype.hasOwnProperty,
      Mm = Object.prototype.propertyIsEnumerable,
      ou = (i, t, e) => t in i ? Im(i, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: e
      }) : i[t] = e,
      Dm = (i, t) => {
        for (var e in t || (t = {})) Pm.call(t, e) && ou(i, e, t[e]);
        if (au)
          for (var e of au(t)) Mm.call(t, e) && ou(i, e, t[e]);
        return i
      },
      Om = (i, t) => Rm(i, Cm(t));
    const Zn = class is extends me {
      constructor() {
        super(...arguments), this._fonts = [], this._overrides = [], this._stylesheet = "", this.fontsDirty = !1
      }
      static from(t) {
        return new is(Object.keys(is.defaultOptions).reduce((e, s) => Om(Dm({}, e), {
          [s]: t[s]
        }), {}))
      }
      cleanFonts() {
        this._fonts.length > 0 && (this._fonts.forEach(t => {
          URL.revokeObjectURL(t.src), t.refs--, t.refs === 0 && (t.fontFace && document.fonts.delete(t.fontFace), delete is.availableFonts[t.originalUrl])
        }), this.fontFamily = "Arial", this._fonts.length = 0, this.styleID++, this.fontsDirty = !0)
      }
      loadFont(t, e = {}) {
        const {
          availableFonts: s
        } = is;
        if (s[t]) {
          const r = s[t];
          return this._fonts.push(r), r.refs++, this.styleID++, this.fontsDirty = !0, Promise.resolve()
        }
        return O.ADAPTER.fetch(t).then(r => r.blob()).then(async r => new Promise((n, a) => {
          const o = URL.createObjectURL(r),
            h = new FileReader;
          h.onload = () => n([o, h.result]), h.onerror = a, h.readAsDataURL(r)
        })).then(async ([r, n]) => {
          const a = Object.assign({
            family: vt.basename(t, vt.extname(t)),
            weight: "normal",
            style: "normal",
            display: "auto",
            src: r,
            dataSrc: n,
            refs: 1,
            originalUrl: t,
            fontFace: null
          }, e);
          s[t] = a, this._fonts.push(a), this.styleID++;
          const o = new FontFace(a.family, `url(${a.src})`, {
            weight: a.weight,
            style: a.style,
            display: a.display
          });
          a.fontFace = o, await o.load(), document.fonts.add(o), await document.fonts.ready, this.styleID++, this.fontsDirty = !0
        })
      }
      addOverride(...t) {
        const e = t.filter(s => !this._overrides.includes(s));
        e.length > 0 && (this._overrides.push(...e), this.styleID++)
      }
      removeOverride(...t) {
        const e = t.filter(s => this._overrides.includes(s));
        e.length > 0 && (this._overrides = this._overrides.filter(s => !e.includes(s)), this.styleID++)
      }
      toCSS(t) {
        return [`transform: scale(${t})`, "transform-origin: top left", "display: inline-block", `color: ${this.normalizeColor(this.fill)}`, `font-size: ${this.fontSize}px`, `font-family: ${this.fontFamily}`, `font-weight: ${this.fontWeight}`, `font-style: ${this.fontStyle}`, `font-variant: ${this.fontVariant}`, `letter-spacing: ${this.letterSpacing}px`, `text-align: ${this.align}`, `padding: ${this.padding}px`, `white-space: ${this.whiteSpace}`, ...this.lineHeight ? [`line-height: ${this.lineHeight}px`] : [], ...this.wordWrap ? [`word-wrap: ${this.breakWords?"break-all":"break-word"}`, `max-width: ${this.wordWrapWidth}px`] : [], ...this.strokeThickness ? [`-webkit-text-stroke-width: ${this.strokeThickness}px`, `-webkit-text-stroke-color: ${this.normalizeColor(this.stroke)}`, `text-stroke-width: ${this.strokeThickness}px`, `text-stroke-color: ${this.normalizeColor(this.stroke)}`, "paint-order: stroke"] : [], ...this.dropShadow ? [this.dropShadowToCSS()] : [], ...this._overrides].join(";")
      }
      toGlobalCSS() {
        return this._fonts.reduce((t, e) => `${t}
              @font-face {
                  font-family: "${e.family}";
                  src: url('${e.dataSrc}');
                  font-weight: ${e.weight};
                  font-style: ${e.style};
                  font-display: ${e.display};
              }`, this._stylesheet)
      }
      get stylesheet() {
        return this._stylesheet
      }
      set stylesheet(t) {
        this._stylesheet !== t && (this._stylesheet = t, this.styleID++)
      }
      normalizeColor(t) {
        return Array.isArray(t) && (t = Ka(t)), typeof t == "number" ? qa(t) : t
      }
      dropShadowToCSS() {
        let t = this.normalizeColor(this.dropShadowColor);
        const e = this.dropShadowAlpha,
          s = Math.round(Math.cos(this.dropShadowAngle) * this.dropShadowDistance),
          r = Math.round(Math.sin(this.dropShadowAngle) * this.dropShadowDistance);
        t.startsWith("#") && e < 1 && (t += (e * 255 | 0).toString(16).padStart(2, "0"));
        const n = `${s}px ${r}px`;
        return this.dropShadowBlur > 0 ? `text-shadow: ${n} ${this.dropShadowBlur}px ${t}` : `text-shadow: ${n} ${t}`
      }
      reset() {
        Object.assign(this, is.defaultOptions)
      }
      onBeforeDraw() {
        const {
          fontsDirty: t
        } = this;
        return this.fontsDirty = !1, this.isSafari && this._fonts.length > 0 && t ? new Promise(e => setTimeout(e, 100)) : Promise.resolve()
      }
      get isSafari() {
        const {
          userAgent: t
        } = O.ADAPTER.getNavigator();
        return /^((?!chrome|android).)*safari/i.test(t)
      }
      set fillGradientStops(t) {
        console.warn("[HTMLTextStyle] fillGradientStops is not supported by HTMLText")
      }
      get fillGradientStops() {
        return super.fillGradientStops
      }
      set fillGradientType(t) {
        console.warn("[HTMLTextStyle] fillGradientType is not supported by HTMLText")
      }
      get fillGradientType() {
        return super.fillGradientType
      }
      set miterLimit(t) {
        console.warn("[HTMLTextStyle] miterLimit is not supported by HTMLText")
      }
      get miterLimit() {
        return super.miterLimit
      }
      set trim(t) {
        console.warn("[HTMLTextStyle] trim is not supported by HTMLText")
      }
      get trim() {
        return super.trim
      }
      set textBaseline(t) {
        console.warn("[HTMLTextStyle] textBaseline is not supported by HTMLText")
      }
      get textBaseline() {
        return super.textBaseline
      }
      set leading(t) {
        console.warn("[HTMLTextStyle] leading is not supported by HTMLText")
      }
      get leading() {
        return super.leading
      }
      set lineJoin(t) {
        console.warn("[HTMLTextStyle] lineJoin is not supported by HTMLText")
      }
      get lineJoin() {
        return super.lineJoin
      }
    };
    Zn.availableFonts = {}, Zn.defaultOptions = {
      align: "left",
      breakWords: !1,
      dropShadow: !1,
      dropShadowAlpha: 1,
      dropShadowAngle: Math.PI / 6,
      dropShadowBlur: 0,
      dropShadowColor: "black",
      dropShadowDistance: 5,
      fill: "black",
      fontFamily: "Arial",
      fontSize: 26,
      fontStyle: "normal",
      fontVariant: "normal",
      fontWeight: "normal",
      letterSpacing: 0,
      lineHeight: 0,
      padding: 0,
      stroke: "black",
      strokeThickness: 0,
      whiteSpace: "normal",
      wordWrap: !1,
      wordWrapWidth: 100
    };
    let tr = Zn;
    const Xs = class rs extends ue {
      constructor(t = "", e = {}) {
        var s;
        super(B.EMPTY), this._text = null, this._style = null, this._autoResolution = !0, this.localStyleID = -1, this.dirty = !1, this._updateID = 0, this.ownsStyle = !1;
        const r = new Image,
          n = B.from(r, {
            scaleMode: O.SCALE_MODE,
            resourceOptions: {
              autoLoad: !1
            }
          });
        n.orig = new j, n.trim = new j, this.texture = n;
        const a = "http://www.w3.org/2000/svg",
          o = "http://www.w3.org/1999/xhtml",
          h = document.createElementNS(a, "svg"),
          l = document.createElementNS(a, "foreignObject"),
          u = document.createElementNS(o, "div"),
          c = document.createElementNS(o, "style");
        l.setAttribute("width", "10000"), l.setAttribute("height", "10000"), l.style.overflow = "hidden", h.appendChild(l), this.maxWidth = rs.defaultMaxWidth, this.maxHeight = rs.defaultMaxHeight, this._domElement = u, this._styleElement = c, this._svgRoot = h, this._foreignObject = l, this._foreignObject.appendChild(c), this._foreignObject.appendChild(u), this._image = r, this._loadImage = new Image, this._autoResolution = rs.defaultAutoResolution, this._resolution = (s = rs.defaultResolution) != null ? s : O.RESOLUTION, this.text = t, this.style = e
      }
      measureText(t) {
        var e, s;
        const {
          text: r,
          style: n,
          resolution: a
        } = Object.assign({
          text: this._text,
          style: this._style,
          resolution: this._resolution
        }, t);
        Object.assign(this._domElement, {
          innerHTML: r,
          style: n.toCSS(a)
        }), this._styleElement.textContent = n.toGlobalCSS(), document.body.appendChild(this._svgRoot);
        const o = this._domElement.getBoundingClientRect();
        this._svgRoot.remove();
        const {
          width: h,
          height: l
        } = o, u = Math.min(this.maxWidth, Math.ceil(h)), c = Math.min(this.maxHeight, Math.ceil(l));
        return this._svgRoot.setAttribute("width", u.toString()), this._svgRoot.setAttribute("height", c.toString()), r !== this._text && (this._domElement.innerHTML = this._text), n !== this._style && (Object.assign(this._domElement, {
          style: (e = this._style) == null ? void 0 : e.toCSS(a)
        }), this._styleElement.textContent = (s = this._style) == null ? void 0 : s.toGlobalCSS()), {
          width: u + n.padding * 2,
          height: c + n.padding * 2
        }
      }
      async updateText(t = !0) {
        const {
          style: e,
          _image: s,
          _loadImage: r
        } = this;
        if (this.localStyleID !== e.styleID && (this.dirty = !0, this.localStyleID = e.styleID), !this.dirty && t) return;
        const {
          width: n,
          height: a
        } = this.measureText();
        s.width = r.width = Math.ceil(Math.max(1, n)), s.height = r.height = Math.ceil(Math.max(1, a)), this._updateID++;
        const o = this._updateID;
        await new Promise(h => {
          r.onload = async () => {
            if (o < this._updateID) {
              h();
              return
            }
            await e.onBeforeDraw(), s.src = r.src, r.onload = null, r.src = "", this.updateTexture(), h()
          };
          const l = new XMLSerializer().serializeToString(this._svgRoot);
          r.src = `data:image/svg+xml;charset=utf8,${encodeURIComponent(l)}`
        })
      }
      get source() {
        return this._image
      }
      updateTexture() {
        const {
          style: t,
          texture: e,
          _image: s,
          resolution: r
        } = this, {
          padding: n
        } = t, {
          baseTexture: a
        } = e;
        e.trim.width = e._frame.width = s.width / r, e.trim.height = e._frame.height = s.height / r, e.trim.x = -n, e.trim.y = -n, e.orig.width = e._frame.width - n * 2, e.orig.height = e._frame.height - n * 2, this._onTextureUpdate(), a.setRealSize(s.width, s.height, r), this.dirty = !1
      }
      _render(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._render(t)
      }
      _renderCanvas(t) {
        this._autoResolution && this._resolution !== t.resolution && (this._resolution = t.resolution, this.dirty = !0), this.updateText(!0), super._renderCanvas(t)
      }
      getLocalBounds(t) {
        return this.updateText(!0), super.getLocalBounds(t)
      }
      _calculateBounds() {
        this.updateText(!0), this.calculateVertices(), this._bounds.addQuad(this.vertexData)
      }
      _onStyleChange() {
        this.dirty = !0
      }
      destroy(t) {
        var e, s, r, n, a;
        typeof t == "boolean" && (t = {
          children: t
        }), t = Object.assign({}, rs.defaultDestroyOptions, t), super.destroy(t);
        const o = null;
        this.ownsStyle && ((e = this._style) == null || e.cleanFonts()), this._style = o, (s = this._svgRoot) == null || s.remove(), this._svgRoot = o, (r = this._domElement) == null || r.remove(), this._domElement = o, (n = this._foreignObject) == null || n.remove(), this._foreignObject = o, (a = this._styleElement) == null || a.remove(), this._styleElement = o, this._loadImage.src = "", this._loadImage.onload = null, this._loadImage = o, this._image.src = "", this._image = o
      }
      get width() {
        return this.updateText(!0), Math.abs(this.scale.x) * this._image.width / this.resolution
      }
      set width(t) {
        this.updateText(!0);
        const e = ne(this.scale.x) || 1;
        this.scale.x = e * t / this._image.width / this.resolution, this._width = t
      }
      get height() {
        return this.updateText(!0), Math.abs(this.scale.y) * this._image.height / this.resolution
      }
      set height(t) {
        this.updateText(!0);
        const e = ne(this.scale.y) || 1;
        this.scale.y = e * t / this._image.height / this.resolution, this._height = t
      }
      get style() {
        return this._style
      }
      set style(t) {
        this._style !== t && (t = t || {}, t instanceof tr ? (this.ownsStyle = !1, this._style = t) : t instanceof me ? (console.warn("[HTMLText] Cloning TextStyle, if this is not what you want, use HTMLTextStyle"), this.ownsStyle = !0, this._style = tr.from(t)) : (this.ownsStyle = !0, this._style = new tr(t)), this.localStyleID = -1, this.dirty = !0)
      }
      get text() {
        return this._text
      }
      set text(t) {
        t = String(t === "" || t === null || t === void 0 ? " " : t), t = this.sanitiseText(t), this._text !== t && (this._text = t, this.dirty = !0)
      }
      get resolution() {
        return this._resolution
      }
      set resolution(t) {
        this._autoResolution = !1, this._resolution !== t && (this._resolution = t, this.dirty = !0)
      }
      sanitiseText(t) {
        return t.replace(/<br>/gi, "<br/>").replace(/<hr>/gi, "<hr/>").replace(/&nbsp;/gi, "&#160;")
      }
    };
    Xs.defaultDestroyOptions = {
      texture: !0,
      children: !1,
      baseTexture: !0
    }, Xs.defaultMaxWidth = 2024, Xs.defaultMaxHeight = 2024, Xs.defaultAutoResolution = !0;
    let Bm = Xs;
    return _.ALPHA_MODES = bt, _.AbstractMultiResource = yn, _.AccessibilityManager = Sn, _.AlphaFilter = ch, _.AnimatedSprite = Yi, _.Application = wh, _.ArrayResource = rh, _.Assets = Os, _.AssetsClass = Jh, _.Attribute = gs, _.BLEND_MODES = H, _.BUFFER_BITS = Zs, _.BUFFER_TYPE = Gt, _.BackgroundSystem = Ts, _.BaseImageResource = he, _.BasePrepare = Wi, _.BaseRenderTexture = Wr, _.BaseTexture = X, _.BatchDrawCall = ci, _.BatchGeometry = Gr, _.BatchRenderer = ye, _.BatchShaderGenerator = Io, _.BatchSystem = zr, _.BatchTextureArray = bi, _.BitmapFont = ge, _.BitmapFontData = Hs, _.BitmapText = wm, _.BlobResource = cl, _.BlurFilter = dh, _.BlurFilterPass = Di, _.Bounds = Rs, _.BrowserAdapter = aa, _.Buffer = nt, _.BufferResource = ms, _.BufferSystem = _n, _.CLEAR_MODES = kt, _.COLOR_MASK_BITS = na, _.Cache = Ee, _.CanvasResource = nh, _.Circle = fi, _.Color = Z, _.ColorMatrixFilter = Oi, _.CompressedTextureResource = Ae, _.Container = It, _.ContextSystem = Es, _.CountLimiter = Vl, _.CubeResource = oh, _.DEG_TO_RAD = mo, _.DRAW_MODES = Lt, _.DisplacementFilter = fh, _.DisplayObject = st, _.ENV = _e, _.Ellipse = pi, _.EventBoundary = gh, _.EventSystem = Bi, _.ExtensionType = R, _.Extract = Sl, _.FORMATS = A, _.FORMATS_TO_COMPONENTS = ml, _.FXAAFilter = ph, _.FederatedDisplayObject = xh, _.FederatedEvent = Ye, _.FederatedMouseEvent = Ps, _.FederatedPointerEvent = Bt, _.FederatedWheelEvent = Ue, _.FillStyle = Us, _.Filter = yt, _.FilterState = Mo, _.FilterSystem = Jr, _.Framebuffer = Ti, _.FramebufferSystem = tn, _.GC_MODES = Qs, _.GLFramebuffer = Do, _.GLProgram = Vo, _.GLTexture = Ii, _.GRAPHICS_CURVES = $p, _.GenerateTextureSystem = hn, _.Geometry = ae, _.GeometrySystem = sn, _.Graphics = Gn, _.GraphicsData = Ls, _.GraphicsGeometry = Ol, _.HTMLText = Bm, _.HTMLTextStyle = tr, _.IGLUniformData = fd, _.INSTALLED = ui, _.INTERNAL_FORMATS = Et, _.INTERNAL_FORMAT_TO_BYTES_PER_PIXEL = Bs, _.ImageBitmapResource = Le, _.ImageResource = Yr, _.LINE_CAP = fe, _.LINE_JOIN = Rt, _.LineStyle = Xi, _.LoaderParserPriority = Nt, _.MASK_TYPES = ht, _.MIPMAP_MODES = Ut, _.MSAA_QUALITY = at, _.MaskData = Fo, _.MaskSystem = rn, _.Matrix = tt, _.Mesh = Je, _.MeshBatchUvs = Bl, _.MeshGeometry = ks, _.MeshMaterial = ts, _.MultisampleSystem = gn, _.NineSlicePlane = Wp, _.NoiseFilter = mh, _.ObjectRenderer = xs, _.ObjectRendererSystem = vn, _.ObservablePoint = oe, _.PI_2 = _s, _.PRECISION = At, _.ParticleContainer = Kp, _.ParticleRenderer = Hn, _.PlaneGeometry = Ll, _.PluginSystem = an, _.Point = q, _.Polygon = Pe, _.Prepare = zn, _.Program = Qt, _.ProjectionSystem = on, _.Quad = Po, _.QuadUv = Zr, _.RAD_TO_DEG = po, _.RENDERER_TYPE = or, _.Rectangle = j, _.RenderTexture = xe, _.RenderTexturePool = Kr, _.RenderTextureSystem = ln, _.Renderer = Pi, _.ResizePlugin = In, _.Resource = We, _.RopeGeometry = Ul, _.RoundedRectangle = mi, _.Runner = St, _.SAMPLER_TYPES = D, _.SCALE_MODES = zt, _.SHAPES = ft, _.SVGResource = Mi, _.ScissorSystem = Go, _.Shader = Vt, _.ShaderSystem = un, _.SimpleMesh = Yp, _.SimplePlane = kl, _.SimpleRope = qp, _.Sprite = ue, _.SpriteMaskFilter = Bo, _.Spritesheet = qn, _.StartupSystem = ws, _.State = Zt, _.StateSystem = Ko, _.StencilSystem = nn, _.SystemManager = Zo, _.TARGETS = Ie, _.TEXT_GRADIENT = Gs, _.TYPES = k, _.TYPES_TO_BYTES_PER_COMPONENT = On, _.TYPES_TO_BYTES_PER_PIXEL = gl, _.TemporaryDisplayObject = hh, _.Text = jn, _.TextFormat = Vs, _.TextMetrics = pe, _.TextStyle = me, _.Texture = B, _.TextureGCSystem = be, _.TextureMatrix = wi, _.TextureSystem = cn, _.TextureUvs = qr, _.Ticker = pt, _.TickerPlugin = pn, _.TilingSprite = Wn, _.TilingSpriteRenderer = Yn, _.TimeLimiter = cm, _.Transform = _i, _.TransformFeedback = Bd, _.TransformFeedbackSystem = dn, _.UPDATE_PRIORITY = le, _.UniformGroup = Ot, _.VERSION = Fd, _.VideoResource = Tn, _.ViewSystem = Is, _.ViewableBuffer = li, _.WRAP_MODES = Wt, _.XMLFormat = Ki, _.XMLStringFormat = Zi, _.accessibleTarget = bh, _.autoDetectFormat = Kl, _.autoDetectRenderer = sh, _.autoDetectResource = Ur, _.cacheTextureArray = tl, _.checkDataUrl = ke, _.checkExtension = ce, _.checkMaxIfStatementsInShader = lo, _.convertToList = Ft, _.copySearchParams = Ni, _.createStringVariations = Rh, _.createTexture = qe, _.createUBOElements = zo, _.curves = we, _.defaultFilterVertex = mn, _.defaultVertex = ih, _.detectAvif = el, _.detectCompressedTextures = ul, _.detectDefaults = rl, _.detectMp4 = al, _.detectOgv = ol, _.detectWebm = nl, _.detectWebp = sl, _.extensions = L, _.filters = En, _.generateProgram = Xo, _.generateUniformBufferSync = Yo, _.getFontFamilyName = Fh, _.getTestContext = xo, _.getUBOData = Wo, _.graphicsUtils = Xp, _.groupD8 = et, _.isMobile = $t, _.isSingleItem = Ms, _.loadBitmapFont = nu, _.loadDDS = xl, _.loadImageBitmap = Hh, _.loadJson = Mh, _.loadKTX = El, _.loadSVG = jh, _.loadTextures = Ds, _.loadTxt = Dh, _.loadVideo = qh, _.loadWebFont = Nh, _.parseDDS = fl, _.parseKTX = _l, _.resolveCompressedTextureUrl = Al, _.resolveTextureUrl = hl, _.settings = O, _.spritesheetAsset = ql, _.uniformParsers = Fe, _.unsafeEvalSupported = So, _.utils = Ac, _
  }({});
  //# sourceMappingURL=pixi.min.js.map