/* Minification failed. Returning unminified contents.
(5240,4-31): run-time error JS1300: Strict-mode does not allow assignment to undefined variables: '_completion_overloadsActive': _completion_overloadsActive
 */
//     Underscore.js 1.6.0
//     http://underscorejs.org
//     (c) 2009-2014 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.
(function () { var n = this, t = n._, r = {}, e = Array.prototype, u = Object.prototype, i = Function.prototype, a = e.push, o = e.slice, c = e.concat, l = u.toString, f = u.hasOwnProperty, s = e.forEach, p = e.map, h = e.reduce, v = e.reduceRight, g = e.filter, d = e.every, m = e.some, y = e.indexOf, b = e.lastIndexOf, x = Array.isArray, w = Object.keys, _ = i.bind, j = function (n) { return n instanceof j ? n : this instanceof j ? void (this._wrapped = n) : new j(n) }; "undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = j), exports._ = j) : n._ = j, j.VERSION = "1.6.0"; var A = j.each = j.forEach = function (n, t, e) { if (null == n) return n; if (s && n.forEach === s) n.forEach(t, e); else if (n.length === +n.length) { for (var u = 0, i = n.length; i > u; u++) if (t.call(e, n[u], u, n) === r) return } else for (var a = j.keys(n), u = 0, i = a.length; i > u; u++) if (t.call(e, n[a[u]], a[u], n) === r) return; return n }; j.map = j.collect = function (n, t, r) { var e = []; return null == n ? e : p && n.map === p ? n.map(t, r) : (A(n, function (n, u, i) { e.push(t.call(r, n, u, i)) }), e) }; var O = "Reduce of empty array with no initial value"; j.reduce = j.foldl = j.inject = function (n, t, r, e) { var u = arguments.length > 2; if (null == n && (n = []), h && n.reduce === h) return e && (t = j.bind(t, e)), u ? n.reduce(t, r) : n.reduce(t); if (A(n, function (n, i, a) { u ? r = t.call(e, r, n, i, a) : (r = n, u = !0) }), !u) throw new TypeError(O); return r }, j.reduceRight = j.foldr = function (n, t, r, e) { var u = arguments.length > 2; if (null == n && (n = []), v && n.reduceRight === v) return e && (t = j.bind(t, e)), u ? n.reduceRight(t, r) : n.reduceRight(t); var i = n.length; if (i !== +i) { var a = j.keys(n); i = a.length } if (A(n, function (o, c, l) { c = a ? a[--i] : --i, u ? r = t.call(e, r, n[c], c, l) : (r = n[c], u = !0) }), !u) throw new TypeError(O); return r }, j.find = j.detect = function (n, t, r) { var e; return k(n, function (n, u, i) { return t.call(r, n, u, i) ? (e = n, !0) : void 0 }), e }, j.filter = j.select = function (n, t, r) { var e = []; return null == n ? e : g && n.filter === g ? n.filter(t, r) : (A(n, function (n, u, i) { t.call(r, n, u, i) && e.push(n) }), e) }, j.reject = function (n, t, r) { return j.filter(n, function (n, e, u) { return !t.call(r, n, e, u) }, r) }, j.every = j.all = function (n, t, e) { t || (t = j.identity); var u = !0; return null == n ? u : d && n.every === d ? n.every(t, e) : (A(n, function (n, i, a) { return (u = u && t.call(e, n, i, a)) ? void 0 : r }), !!u) }; var k = j.some = j.any = function (n, t, e) { t || (t = j.identity); var u = !1; return null == n ? u : m && n.some === m ? n.some(t, e) : (A(n, function (n, i, a) { return u || (u = t.call(e, n, i, a)) ? r : void 0 }), !!u) }; j.contains = j.include = function (n, t) { return null == n ? !1 : y && n.indexOf === y ? n.indexOf(t) != -1 : k(n, function (n) { return n === t }) }, j.invoke = function (n, t) { var r = o.call(arguments, 2), e = j.isFunction(t); return j.map(n, function (n) { return (e ? t : n[t]).apply(n, r) }) }, j.pluck = function (n, t) { return j.map(n, j.property(t)) }, j.where = function (n, t) { return j.filter(n, j.matches(t)) }, j.findWhere = function (n, t) { return j.find(n, j.matches(t)) }, j.max = function (n, t, r) { if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.max.apply(Math, n); var e = -1 / 0, u = -1 / 0; return A(n, function (n, i, a) { var o = t ? t.call(r, n, i, a) : n; o > u && (e = n, u = o) }), e }, j.min = function (n, t, r) { if (!t && j.isArray(n) && n[0] === +n[0] && n.length < 65535) return Math.min.apply(Math, n); var e = 1 / 0, u = 1 / 0; return A(n, function (n, i, a) { var o = t ? t.call(r, n, i, a) : n; u > o && (e = n, u = o) }), e }, j.shuffle = function (n) { var t, r = 0, e = []; return A(n, function (n) { t = j.random(r++), e[r - 1] = e[t], e[t] = n }), e }, j.sample = function (n, t, r) { return null == t || r ? (n.length !== +n.length && (n = j.values(n)), n[j.random(n.length - 1)]) : j.shuffle(n).slice(0, Math.max(0, t)) }; var E = function (n) { return null == n ? j.identity : j.isFunction(n) ? n : j.property(n) }; j.sortBy = function (n, t, r) { return t = E(t), j.pluck(j.map(n, function (n, e, u) { return { value: n, index: e, criteria: t.call(r, n, e, u) } }).sort(function (n, t) { var r = n.criteria, e = t.criteria; if (r !== e) { if (r > e || r === void 0) return 1; if (e > r || e === void 0) return -1 } return n.index - t.index }), "value") }; var F = function (n) { return function (t, r, e) { var u = {}; return r = E(r), A(t, function (i, a) { var o = r.call(e, i, a, t); n(u, o, i) }), u } }; j.groupBy = F(function (n, t, r) { j.has(n, t) ? n[t].push(r) : n[t] = [r] }), j.indexBy = F(function (n, t, r) { n[t] = r }), j.countBy = F(function (n, t) { j.has(n, t) ? n[t]++ : n[t] = 1 }), j.sortedIndex = function (n, t, r, e) { r = E(r); for (var u = r.call(e, t), i = 0, a = n.length; a > i;) { var o = i + a >>> 1; r.call(e, n[o]) < u ? i = o + 1 : a = o } return i }, j.toArray = function (n) { return n ? j.isArray(n) ? o.call(n) : n.length === +n.length ? j.map(n, j.identity) : j.values(n) : [] }, j.size = function (n) { return null == n ? 0 : n.length === +n.length ? n.length : j.keys(n).length }, j.first = j.head = j.take = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[0] : 0 > t ? [] : o.call(n, 0, t) }, j.initial = function (n, t, r) { return o.call(n, 0, n.length - (null == t || r ? 1 : t)) }, j.last = function (n, t, r) { return null == n ? void 0 : null == t || r ? n[n.length - 1] : o.call(n, Math.max(n.length - t, 0)) }, j.rest = j.tail = j.drop = function (n, t, r) { return o.call(n, null == t || r ? 1 : t) }, j.compact = function (n) { return j.filter(n, j.identity) }; var M = function (n, t, r) { return t && j.every(n, j.isArray) ? c.apply(r, n) : (A(n, function (n) { j.isArray(n) || j.isArguments(n) ? t ? a.apply(r, n) : M(n, t, r) : r.push(n) }), r) }; j.flatten = function (n, t) { return M(n, t, []) }, j.without = function (n) { return j.difference(n, o.call(arguments, 1)) }, j.partition = function (n, t) { var r = [], e = []; return A(n, function (n) { (t(n) ? r : e).push(n) }), [r, e] }, j.uniq = j.unique = function (n, t, r, e) { j.isFunction(t) && (e = r, r = t, t = !1); var u = r ? j.map(n, r, e) : n, i = [], a = []; return A(u, function (r, e) { (t ? e && a[a.length - 1] === r : j.contains(a, r)) || (a.push(r), i.push(n[e])) }), i }, j.union = function () { return j.uniq(j.flatten(arguments, !0)) }, j.intersection = function (n) { var t = o.call(arguments, 1); return j.filter(j.uniq(n), function (n) { return j.every(t, function (t) { return j.contains(t, n) }) }) }, j.difference = function (n) { var t = c.apply(e, o.call(arguments, 1)); return j.filter(n, function (n) { return !j.contains(t, n) }) }, j.zip = function () { for (var n = j.max(j.pluck(arguments, "length").concat(0)), t = new Array(n), r = 0; n > r; r++) t[r] = j.pluck(arguments, "" + r); return t }, j.object = function (n, t) { if (null == n) return {}; for (var r = {}, e = 0, u = n.length; u > e; e++) t ? r[n[e]] = t[e] : r[n[e][0]] = n[e][1]; return r }, j.indexOf = function (n, t, r) { if (null == n) return -1; var e = 0, u = n.length; if (r) { if ("number" != typeof r) return e = j.sortedIndex(n, t), n[e] === t ? e : -1; e = 0 > r ? Math.max(0, u + r) : r } if (y && n.indexOf === y) return n.indexOf(t, r); for (; u > e; e++) if (n[e] === t) return e; return -1 }, j.lastIndexOf = function (n, t, r) { if (null == n) return -1; var e = null != r; if (b && n.lastIndexOf === b) return e ? n.lastIndexOf(t, r) : n.lastIndexOf(t); for (var u = e ? r : n.length; u--;) if (n[u] === t) return u; return -1 }, j.range = function (n, t, r) { arguments.length <= 1 && (t = n || 0, n = 0), r = arguments[2] || 1; for (var e = Math.max(Math.ceil((t - n) / r), 0), u = 0, i = new Array(e) ; e > u;) i[u++] = n, n += r; return i }; var R = function () { }; j.bind = function (n, t) { var r, e; if (_ && n.bind === _) return _.apply(n, o.call(arguments, 1)); if (!j.isFunction(n)) throw new TypeError; return r = o.call(arguments, 2), e = function () { if (!(this instanceof e)) return n.apply(t, r.concat(o.call(arguments))); R.prototype = n.prototype; var u = new R; R.prototype = null; var i = n.apply(u, r.concat(o.call(arguments))); return Object(i) === i ? i : u } }, j.partial = function (n) { var t = o.call(arguments, 1); return function () { for (var r = 0, e = t.slice(), u = 0, i = e.length; i > u; u++) e[u] === j && (e[u] = arguments[r++]); for (; r < arguments.length;) e.push(arguments[r++]); return n.apply(this, e) } }, j.bindAll = function (n) { var t = o.call(arguments, 1); if (0 === t.length) throw new Error("bindAll must be passed function names"); return A(t, function (t) { n[t] = j.bind(n[t], n) }), n }, j.memoize = function (n, t) { var r = {}; return t || (t = j.identity), function () { var e = t.apply(this, arguments); return j.has(r, e) ? r[e] : r[e] = n.apply(this, arguments) } }, j.delay = function (n, t) { var r = o.call(arguments, 2); return setTimeout(function () { return n.apply(null, r) }, t) }, j.defer = function (n) { return j.delay.apply(j, [n, 1].concat(o.call(arguments, 1))) }, j.throttle = function (n, t, r) { var e, u, i, a = null, o = 0; r || (r = {}); var c = function () { o = r.leading === !1 ? 0 : j.now(), a = null, i = n.apply(e, u), e = u = null }; return function () { var l = j.now(); o || r.leading !== !1 || (o = l); var f = t - (l - o); return e = this, u = arguments, 0 >= f ? (clearTimeout(a), a = null, o = l, i = n.apply(e, u), e = u = null) : a || r.trailing === !1 || (a = setTimeout(c, f)), i } }, j.debounce = function (n, t, r) { var e, u, i, a, o, c = function () { var l = j.now() - a; t > l ? e = setTimeout(c, t - l) : (e = null, r || (o = n.apply(i, u), i = u = null)) }; return function () { i = this, u = arguments, a = j.now(); var l = r && !e; return e || (e = setTimeout(c, t)), l && (o = n.apply(i, u), i = u = null), o } }, j.once = function (n) { var t, r = !1; return function () { return r ? t : (r = !0, t = n.apply(this, arguments), n = null, t) } }, j.wrap = function (n, t) { return j.partial(t, n) }, j.compose = function () { var n = arguments; return function () { for (var t = arguments, r = n.length - 1; r >= 0; r--) t = [n[r].apply(this, t)]; return t[0] } }, j.after = function (n, t) { return function () { return --n < 1 ? t.apply(this, arguments) : void 0 } }, j.keys = function (n) { if (!j.isObject(n)) return []; if (w) return w(n); var t = []; for (var r in n) j.has(n, r) && t.push(r); return t }, j.values = function (n) { for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = n[t[u]]; return e }, j.pairs = function (n) { for (var t = j.keys(n), r = t.length, e = new Array(r), u = 0; r > u; u++) e[u] = [t[u], n[t[u]]]; return e }, j.invert = function (n) { for (var t = {}, r = j.keys(n), e = 0, u = r.length; u > e; e++) t[n[r[e]]] = r[e]; return t }, j.functions = j.methods = function (n) { var t = []; for (var r in n) j.isFunction(n[r]) && t.push(r); return t.sort() }, j.extend = function (n) { return A(o.call(arguments, 1), function (t) { if (t) for (var r in t) n[r] = t[r] }), n }, j.pick = function (n) { var t = {}, r = c.apply(e, o.call(arguments, 1)); return A(r, function (r) { r in n && (t[r] = n[r]) }), t }, j.omit = function (n) { var t = {}, r = c.apply(e, o.call(arguments, 1)); for (var u in n) j.contains(r, u) || (t[u] = n[u]); return t }, j.defaults = function (n) { return A(o.call(arguments, 1), function (t) { if (t) for (var r in t) n[r] === void 0 && (n[r] = t[r]) }), n }, j.clone = function (n) { return j.isObject(n) ? j.isArray(n) ? n.slice() : j.extend({}, n) : n }, j.tap = function (n, t) { return t(n), n }; var S = function (n, t, r, e) { if (n === t) return 0 !== n || 1 / n == 1 / t; if (null == n || null == t) return n === t; n instanceof j && (n = n._wrapped), t instanceof j && (t = t._wrapped); var u = l.call(n); if (u != l.call(t)) return !1; switch (u) { case "[object String]": return n == String(t); case "[object Number]": return n != +n ? t != +t : 0 == n ? 1 / n == 1 / t : n == +t; case "[object Date]": case "[object Boolean]": return +n == +t; case "[object RegExp]": return n.source == t.source && n.global == t.global && n.multiline == t.multiline && n.ignoreCase == t.ignoreCase } if ("object" != typeof n || "object" != typeof t) return !1; for (var i = r.length; i--;) if (r[i] == n) return e[i] == t; var a = n.constructor, o = t.constructor; if (a !== o && !(j.isFunction(a) && a instanceof a && j.isFunction(o) && o instanceof o) && "constructor" in n && "constructor" in t) return !1; r.push(n), e.push(t); var c = 0, f = !0; if ("[object Array]" == u) { if (c = n.length, f = c == t.length) for (; c-- && (f = S(n[c], t[c], r, e)) ;); } else { for (var s in n) if (j.has(n, s) && (c++, !(f = j.has(t, s) && S(n[s], t[s], r, e)))) break; if (f) { for (s in t) if (j.has(t, s) && !c--) break; f = !c } } return r.pop(), e.pop(), f }; j.isEqual = function (n, t) { return S(n, t, [], []) }, j.isEmpty = function (n) { if (null == n) return !0; if (j.isArray(n) || j.isString(n)) return 0 === n.length; for (var t in n) if (j.has(n, t)) return !1; return !0 }, j.isElement = function (n) { return !(!n || 1 !== n.nodeType) }, j.isArray = x || function (n) { return "[object Array]" == l.call(n) }, j.isObject = function (n) { return n === Object(n) }, A(["Arguments", "Function", "String", "Number", "Date", "RegExp"], function (n) { j["is" + n] = function (t) { return l.call(t) == "[object " + n + "]" } }), j.isArguments(arguments) || (j.isArguments = function (n) { return !(!n || !j.has(n, "callee")) }), "function" != typeof /./ && (j.isFunction = function (n) { return "function" == typeof n }), j.isFinite = function (n) { return isFinite(n) && !isNaN(parseFloat(n)) }, j.isNaN = function (n) { return j.isNumber(n) && n != +n }, j.isBoolean = function (n) { return n === !0 || n === !1 || "[object Boolean]" == l.call(n) }, j.isNull = function (n) { return null === n }, j.isUndefined = function (n) { return n === void 0 }, j.has = function (n, t) { return f.call(n, t) }, j.noConflict = function () { return n._ = t, this }, j.identity = function (n) { return n }, j.constant = function (n) { return function () { return n } }, j.property = function (n) { return function (t) { return t[n] } }, j.matches = function (n) { return function (t) { if (t === n) return !0; for (var r in n) if (n[r] !== t[r]) return !1; return !0 } }, j.times = function (n, t, r) { for (var e = Array(Math.max(0, n)), u = 0; n > u; u++) e[u] = t.call(r, u); return e }, j.random = function (n, t) { return null == t && (t = n, n = 0), n + Math.floor(Math.random() * (t - n + 1)) }, j.now = Date.now || function () { return (new Date).getTime() }; var T = { escape: { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;" } }; T.unescape = j.invert(T.escape); var I = { escape: new RegExp("[" + j.keys(T.escape).join("") + "]", "g"), unescape: new RegExp("(" + j.keys(T.unescape).join("|") + ")", "g") }; j.each(["escape", "unescape"], function (n) { j[n] = function (t) { return null == t ? "" : ("" + t).replace(I[n], function (t) { return T[n][t] }) } }), j.result = function (n, t) { if (null == n) return void 0; var r = n[t]; return j.isFunction(r) ? r.call(n) : r }, j.mixin = function (n) { A(j.functions(n), function (t) { var r = j[t] = n[t]; j.prototype[t] = function () { var n = [this._wrapped]; return a.apply(n, arguments), z.call(this, r.apply(j, n)) } }) }; var N = 0; j.uniqueId = function (n) { var t = ++N + ""; return n ? n + t : t }, j.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }; var q = /(.)^/, B = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "	": "t", "\u2028": "u2028", "\u2029": "u2029" }, D = /\\|'|\r|\n|\t|\u2028|\u2029/g; j.template = function (n, t, r) { var e; r = j.defaults({}, r, j.templateSettings); var u = new RegExp([(r.escape || q).source, (r.interpolate || q).source, (r.evaluate || q).source].join("|") + "|$", "g"), i = 0, a = "__p+='"; n.replace(u, function (t, r, e, u, o) { return a += n.slice(i, o).replace(D, function (n) { return "\\" + B[n] }), r && (a += "'+\n((__t=(" + r + "))==null?'':_.escape(__t))+\n'"), e && (a += "'+\n((__t=(" + e + "))==null?'':__t)+\n'"), u && (a += "';\n" + u + "\n__p+='"), i = o + t.length, t }), a += "';\n", r.variable || (a = "with(obj||{}){\n" + a + "}\n"), a = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + a + "return __p;\n"; try { e = new Function(r.variable || "obj", "_", a) } catch (o) { throw o.source = a, o } if (t) return e(t, j); var c = function (n) { return e.call(this, n, j) }; return c.source = "function(" + (r.variable || "obj") + "){\n" + a + "}", c }, j.chain = function (n) { return j(n).chain() }; var z = function (n) { return this._chain ? j(n).chain() : n }; j.mixin(j), A(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], function (n) { var t = e[n]; j.prototype[n] = function () { var r = this._wrapped; return t.apply(r, arguments), "shift" != n && "splice" != n || 0 !== r.length || delete r[0], z.call(this, r) } }), A(["concat", "join", "slice"], function (n) { var t = e[n]; j.prototype[n] = function () { return z.call(this, t.apply(this._wrapped, arguments)) } }), j.extend(j.prototype, { chain: function () { return this._chain = !0, this }, value: function () { return this._wrapped } }), "function" == typeof define && define.amd && define("underscore", [], function () { return j }) }).call(this);;/*!

 handlebars v1.3.0

Copyright (C) 2011 by Yehuda Katz

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

@license
*/
/* exported Handlebars */
var Handlebars = (function() {
// handlebars/safe-string.js
var __module4__ = (function() {
  "use strict";
  var __exports__;
  // Build out our basic SafeString type
  function SafeString(string) {
    this.string = string;
  }

  SafeString.prototype.toString = function() {
    return "" + this.string;
  };

  __exports__ = SafeString;
  return __exports__;
})();

// handlebars/utils.js
var __module3__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  /*jshint -W004 */
  var SafeString = __dependency1__;

  var escape = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#x27;",
    "`": "&#x60;"
  };

  var badChars = /[&<>"'`]/g;
  var possible = /[&<>"'`]/;

  function escapeChar(chr) {
    return escape[chr] || "&amp;";
  }

  function extend(obj, value) {
    for(var key in value) {
      if(Object.prototype.hasOwnProperty.call(value, key)) {
        obj[key] = value[key];
      }
    }
  }

  __exports__.extend = extend;var toString = Object.prototype.toString;
  __exports__.toString = toString;
  // Sourced from lodash
  // https://github.com/bestiejs/lodash/blob/master/LICENSE.txt
  var isFunction = function(value) {
    return typeof value === 'function';
  };
  // fallback for older versions of Chrome and Safari
  if (isFunction(/x/)) {
    isFunction = function(value) {
      return typeof value === 'function' && toString.call(value) === '[object Function]';
    };
  }
  var isFunction;
  __exports__.isFunction = isFunction;
  var isArray = Array.isArray || function(value) {
    return (value && typeof value === 'object') ? toString.call(value) === '[object Array]' : false;
  };
  __exports__.isArray = isArray;

  function escapeExpression(string) {
    // don't escape SafeStrings, since they're already safe
    if (string instanceof SafeString) {
      return string.toString();
    } else if (!string && string !== 0) {
      return "";
    }

    // Force a string conversion as this will be done by the append regardless and
    // the regex test will do this transparently behind the scenes, causing issues if
    // an object's to string has escaped characters in it.
    string = "" + string;

    if(!possible.test(string)) { return string; }
    return string.replace(badChars, escapeChar);
  }

  __exports__.escapeExpression = escapeExpression;function isEmpty(value) {
    if (!value && value !== 0) {
      return true;
    } else if (isArray(value) && value.length === 0) {
      return true;
    } else {
      return false;
    }
  }

  __exports__.isEmpty = isEmpty;
  return __exports__;
})(__module4__);

// handlebars/exception.js
var __module5__ = (function() {
  "use strict";
  var __exports__;

  var errorProps = ['description', 'fileName', 'lineNumber', 'message', 'name', 'number', 'stack'];

  function Exception(message, node) {
    var line;
    if (node && node.firstLine) {
      line = node.firstLine;

      message += ' - ' + line + ':' + node.firstColumn;
    }

    var tmp = Error.prototype.constructor.call(this, message);

    // Unfortunately errors are not enumerable in Chrome (at least), so `for prop in tmp` doesn't work.
    for (var idx = 0; idx < errorProps.length; idx++) {
      this[errorProps[idx]] = tmp[errorProps[idx]];
    }

    if (line) {
      this.lineNumber = line;
      this.column = node.firstColumn;
    }
  }

  Exception.prototype = new Error();

  __exports__ = Exception;
  return __exports__;
})();

// handlebars/base.js
var __module2__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;

  var VERSION = "1.3.0";
  __exports__.VERSION = VERSION;var COMPILER_REVISION = 4;
  __exports__.COMPILER_REVISION = COMPILER_REVISION;
  var REVISION_CHANGES = {
    1: '<= 1.0.rc.2', // 1.0.rc.2 is actually rev2 but doesn't report it
    2: '== 1.0.0-rc.3',
    3: '== 1.0.0-rc.4',
    4: '>= 1.0.0'
  };
  __exports__.REVISION_CHANGES = REVISION_CHANGES;
  var isArray = Utils.isArray,
      isFunction = Utils.isFunction,
      toString = Utils.toString,
      objectType = '[object Object]';

  function HandlebarsEnvironment(helpers, partials) {
    this.helpers = helpers || {};
    this.partials = partials || {};

    registerDefaultHelpers(this);
  }

  __exports__.HandlebarsEnvironment = HandlebarsEnvironment;HandlebarsEnvironment.prototype = {
    constructor: HandlebarsEnvironment,

    logger: logger,
    log: log,

    registerHelper: function(name, fn, inverse) {
      if (toString.call(name) === objectType) {
        if (inverse || fn) { throw new Exception('Arg not supported with multiple helpers'); }
        Utils.extend(this.helpers, name);
      } else {
        if (inverse) { fn.not = inverse; }
        this.helpers[name] = fn;
      }
    },

    registerPartial: function(name, str) {
      if (toString.call(name) === objectType) {
        Utils.extend(this.partials,  name);
      } else {
        this.partials[name] = str;
      }
    }
  };

  function registerDefaultHelpers(instance) {
    instance.registerHelper('helperMissing', function(arg) {
      if(arguments.length === 2) {
        return undefined;
      } else {
        throw new Exception("Missing helper: '" + arg + "'");
      }
    });

    instance.registerHelper('blockHelperMissing', function(context, options) {
      var inverse = options.inverse || function() {}, fn = options.fn;

      if (isFunction(context)) { context = context.call(this); }

      if(context === true) {
        return fn(this);
      } else if(context === false || context == null) {
        return inverse(this);
      } else if (isArray(context)) {
        if(context.length > 0) {
          return instance.helpers.each(context, options);
        } else {
          return inverse(this);
        }
      } else {
        return fn(context);
      }
    });

    instance.registerHelper('each', function(context, options) {
      var fn = options.fn, inverse = options.inverse;
      var i = 0, ret = "", data;

      if (isFunction(context)) { context = context.call(this); }

      if (options.data) {
        data = createFrame(options.data);
      }

      if(context && typeof context === 'object') {
        if (isArray(context)) {
          for(var j = context.length; i<j; i++) {
            if (data) {
              data.index = i;
              data.first = (i === 0);
              data.last  = (i === (context.length-1));
            }
            ret = ret + fn(context[i], { data: data });
          }
        } else {
          for(var key in context) {
            if(context.hasOwnProperty(key)) {
              if(data) { 
                data.key = key; 
                data.index = i;
                data.first = (i === 0);
              }
              ret = ret + fn(context[key], {data: data});
              i++;
            }
          }
        }
      }

      if(i === 0){
        ret = inverse(this);
      }

      return ret;
    });

    instance.registerHelper('if', function(conditional, options) {
      if (isFunction(conditional)) { conditional = conditional.call(this); }

      // Default behavior is to render the positive path if the value is truthy and not empty.
      // The `includeZero` option may be set to treat the condtional as purely not empty based on the
      // behavior of isEmpty. Effectively this determines if 0 is handled by the positive path or negative.
      if ((!options.hash.includeZero && !conditional) || Utils.isEmpty(conditional)) {
        return options.inverse(this);
      } else {
        return options.fn(this);
      }
    });

    instance.registerHelper('unless', function(conditional, options) {
      return instance.helpers['if'].call(this, conditional, {fn: options.inverse, inverse: options.fn, hash: options.hash});
    });

    instance.registerHelper('with', function(context, options) {
      if (isFunction(context)) { context = context.call(this); }

      if (!Utils.isEmpty(context)) return options.fn(context);
    });

    instance.registerHelper('log', function(context, options) {
      var level = options.data && options.data.level != null ? parseInt(options.data.level, 10) : 1;
      instance.log(level, context);
    });
  }

  var logger = {
    methodMap: { 0: 'debug', 1: 'info', 2: 'warn', 3: 'error' },

    // State enum
    DEBUG: 0,
    INFO: 1,
    WARN: 2,
    ERROR: 3,
    level: 3,

    // can be overridden in the host environment
    log: function(level, obj) {
      if (logger.level <= level) {
        var method = logger.methodMap[level];
        if (typeof console !== 'undefined' && console[method]) {
          console[method].call(console, obj);
        }
      }
    }
  };
  __exports__.logger = logger;
  function log(level, obj) { logger.log(level, obj); }

  __exports__.log = log;var createFrame = function(object) {
    var obj = {};
    Utils.extend(obj, object);
    return obj;
  };
  __exports__.createFrame = createFrame;
  return __exports__;
})(__module3__, __module5__);

// handlebars/runtime.js
var __module6__ = (function(__dependency1__, __dependency2__, __dependency3__) {
  "use strict";
  var __exports__ = {};
  var Utils = __dependency1__;
  var Exception = __dependency2__;
  var COMPILER_REVISION = __dependency3__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency3__.REVISION_CHANGES;

  function checkRevision(compilerInfo) {
    var compilerRevision = compilerInfo && compilerInfo[0] || 1,
        currentRevision = COMPILER_REVISION;

    if (compilerRevision !== currentRevision) {
      if (compilerRevision < currentRevision) {
        var runtimeVersions = REVISION_CHANGES[currentRevision],
            compilerVersions = REVISION_CHANGES[compilerRevision];
        throw new Exception("Template was precompiled with an older version of Handlebars than the current runtime. "+
              "Please update your precompiler to a newer version ("+runtimeVersions+") or downgrade your runtime to an older version ("+compilerVersions+").");
      } else {
        // Use the embedded version info since the runtime doesn't know about this revision yet
        throw new Exception("Template was precompiled with a newer version of Handlebars than the current runtime. "+
              "Please update your runtime to a newer version ("+compilerInfo[1]+").");
      }
    }
  }

  __exports__.checkRevision = checkRevision;// TODO: Remove this line and break up compilePartial

  function template(templateSpec, env) {
    if (!env) {
      throw new Exception("No environment passed to template");
    }

    // Note: Using env.VM references rather than local var references throughout this section to allow
    // for external users to override these as psuedo-supported APIs.
    var invokePartialWrapper = function(partial, name, context, helpers, partials, data) {
      var result = env.VM.invokePartial.apply(this, arguments);
      if (result != null) { return result; }

      if (env.compile) {
        var options = { helpers: helpers, partials: partials, data: data };
        partials[name] = env.compile(partial, { data: data !== undefined }, env);
        return partials[name](context, options);
      } else {
        throw new Exception("The partial " + name + " could not be compiled when running in runtime-only mode");
      }
    };

    // Just add water
    var container = {
      escapeExpression: Utils.escapeExpression,
      invokePartial: invokePartialWrapper,
      programs: [],
      program: function(i, fn, data) {
        var programWrapper = this.programs[i];
        if(data) {
          programWrapper = program(i, fn, data);
        } else if (!programWrapper) {
          programWrapper = this.programs[i] = program(i, fn);
        }
        return programWrapper;
      },
      merge: function(param, common) {
        var ret = param || common;

        if (param && common && (param !== common)) {
          ret = {};
          Utils.extend(ret, common);
          Utils.extend(ret, param);
        }
        return ret;
      },
      programWithDepth: env.VM.programWithDepth,
      noop: env.VM.noop,
      compilerInfo: null
    };

    return function(context, options) {
      options = options || {};
      var namespace = options.partial ? options : env,
          helpers,
          partials;

      if (!options.partial) {
        helpers = options.helpers;
        partials = options.partials;
      }
      var result = templateSpec.call(
            container,
            namespace, context,
            helpers,
            partials,
            options.data);

      if (!options.partial) {
        env.VM.checkRevision(container.compilerInfo);
      }

      return result;
    };
  }

  __exports__.template = template;function programWithDepth(i, fn, data /*, $depth */) {
    var args = Array.prototype.slice.call(arguments, 3);

    var prog = function(context, options) {
      options = options || {};

      return fn.apply(this, [context, options.data || data].concat(args));
    };
    prog.program = i;
    prog.depth = args.length;
    return prog;
  }

  __exports__.programWithDepth = programWithDepth;function program(i, fn, data) {
    var prog = function(context, options) {
      options = options || {};

      return fn(context, options.data || data);
    };
    prog.program = i;
    prog.depth = 0;
    return prog;
  }

  __exports__.program = program;function invokePartial(partial, name, context, helpers, partials, data) {
    var options = { partial: true, helpers: helpers, partials: partials, data: data };

    if(partial === undefined) {
      throw new Exception("The partial " + name + " could not be found");
    } else if(partial instanceof Function) {
      return partial(context, options);
    }
  }

  __exports__.invokePartial = invokePartial;function noop() { return ""; }

  __exports__.noop = noop;
  return __exports__;
})(__module3__, __module5__, __module2__);

// handlebars.runtime.js
var __module1__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var base = __dependency1__;

  // Each of these augment the Handlebars object. No need to setup here.
  // (This is done to easily share code between commonjs and browse envs)
  var SafeString = __dependency2__;
  var Exception = __dependency3__;
  var Utils = __dependency4__;
  var runtime = __dependency5__;

  // For compatibility and usage outside of module systems, make the Handlebars object a namespace
  var create = function() {
    var hb = new base.HandlebarsEnvironment();

    Utils.extend(hb, base);
    hb.SafeString = SafeString;
    hb.Exception = Exception;
    hb.Utils = Utils;

    hb.VM = runtime;
    hb.template = function(spec) {
      return runtime.template(spec, hb);
    };

    return hb;
  };

  var Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module2__, __module4__, __module5__, __module3__, __module6__);

// handlebars/compiler/ast.js
var __module7__ = (function(__dependency1__) {
  "use strict";
  var __exports__;
  var Exception = __dependency1__;

  function LocationInfo(locInfo){
    locInfo = locInfo || {};
    this.firstLine   = locInfo.first_line;
    this.firstColumn = locInfo.first_column;
    this.lastColumn  = locInfo.last_column;
    this.lastLine    = locInfo.last_line;
  }

  var AST = {
    ProgramNode: function(statements, inverseStrip, inverse, locInfo) {
      var inverseLocationInfo, firstInverseNode;
      if (arguments.length === 3) {
        locInfo = inverse;
        inverse = null;
      } else if (arguments.length === 2) {
        locInfo = inverseStrip;
        inverseStrip = null;
      }

      LocationInfo.call(this, locInfo);
      this.type = "program";
      this.statements = statements;
      this.strip = {};

      if(inverse) {
        firstInverseNode = inverse[0];
        if (firstInverseNode) {
          inverseLocationInfo = {
            first_line: firstInverseNode.firstLine,
            last_line: firstInverseNode.lastLine,
            last_column: firstInverseNode.lastColumn,
            first_column: firstInverseNode.firstColumn
          };
          this.inverse = new AST.ProgramNode(inverse, inverseStrip, inverseLocationInfo);
        } else {
          this.inverse = new AST.ProgramNode(inverse, inverseStrip);
        }
        this.strip.right = inverseStrip.left;
      } else if (inverseStrip) {
        this.strip.left = inverseStrip.right;
      }
    },

    MustacheNode: function(rawParams, hash, open, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "mustache";
      this.strip = strip;

      // Open may be a string parsed from the parser or a passed boolean flag
      if (open != null && open.charAt) {
        // Must use charAt to support IE pre-10
        var escapeFlag = open.charAt(3) || open.charAt(2);
        this.escaped = escapeFlag !== '{' && escapeFlag !== '&';
      } else {
        this.escaped = !!open;
      }

      if (rawParams instanceof AST.SexprNode) {
        this.sexpr = rawParams;
      } else {
        // Support old AST API
        this.sexpr = new AST.SexprNode(rawParams, hash);
      }

      this.sexpr.isRoot = true;

      // Support old AST API that stored this info in MustacheNode
      this.id = this.sexpr.id;
      this.params = this.sexpr.params;
      this.hash = this.sexpr.hash;
      this.eligibleHelper = this.sexpr.eligibleHelper;
      this.isHelper = this.sexpr.isHelper;
    },

    SexprNode: function(rawParams, hash, locInfo) {
      LocationInfo.call(this, locInfo);

      this.type = "sexpr";
      this.hash = hash;

      var id = this.id = rawParams[0];
      var params = this.params = rawParams.slice(1);

      // a mustache is an eligible helper if:
      // * its id is simple (a single part, not `this` or `..`)
      var eligibleHelper = this.eligibleHelper = id.isSimple;

      // a mustache is definitely a helper if:
      // * it is an eligible helper, and
      // * it has at least one parameter or hash segment
      this.isHelper = eligibleHelper && (params.length || hash);

      // if a mustache is an eligible helper but not a definite
      // helper, it is ambiguous, and will be resolved in a later
      // pass or at runtime.
    },

    PartialNode: function(partialName, context, strip, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type         = "partial";
      this.partialName  = partialName;
      this.context      = context;
      this.strip = strip;
    },

    BlockNode: function(mustache, program, inverse, close, locInfo) {
      LocationInfo.call(this, locInfo);

      if(mustache.sexpr.id.original !== close.path.original) {
        throw new Exception(mustache.sexpr.id.original + " doesn't match " + close.path.original, this);
      }

      this.type = 'block';
      this.mustache = mustache;
      this.program  = program;
      this.inverse  = inverse;

      this.strip = {
        left: mustache.strip.left,
        right: close.strip.right
      };

      (program || inverse).strip.left = mustache.strip.right;
      (inverse || program).strip.right = close.strip.left;

      if (inverse && !program) {
        this.isInverse = true;
      }
    },

    ContentNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "content";
      this.string = string;
    },

    HashNode: function(pairs, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "hash";
      this.pairs = pairs;
    },

    IdNode: function(parts, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "ID";

      var original = "",
          dig = [],
          depth = 0;

      for(var i=0,l=parts.length; i<l; i++) {
        var part = parts[i].part;
        original += (parts[i].separator || '') + part;

        if (part === ".." || part === "." || part === "this") {
          if (dig.length > 0) {
            throw new Exception("Invalid path: " + original, this);
          } else if (part === "..") {
            depth++;
          } else {
            this.isScoped = true;
          }
        } else {
          dig.push(part);
        }
      }

      this.original = original;
      this.parts    = dig;
      this.string   = dig.join('.');
      this.depth    = depth;

      // an ID is simple if it only has one part, and that part is not
      // `..` or `this`.
      this.isSimple = parts.length === 1 && !this.isScoped && depth === 0;

      this.stringModeValue = this.string;
    },

    PartialNameNode: function(name, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "PARTIAL_NAME";
      this.name = name.original;
    },

    DataNode: function(id, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "DATA";
      this.id = id;
    },

    StringNode: function(string, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "STRING";
      this.original =
        this.string =
        this.stringModeValue = string;
    },

    IntegerNode: function(integer, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "INTEGER";
      this.original =
        this.integer = integer;
      this.stringModeValue = Number(integer);
    },

    BooleanNode: function(bool, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "BOOLEAN";
      this.bool = bool;
      this.stringModeValue = bool === "true";
    },

    CommentNode: function(comment, locInfo) {
      LocationInfo.call(this, locInfo);
      this.type = "comment";
      this.comment = comment;
    }
  };

  // Must be exported as an object rather than the root of the module as the jison lexer
  // most modify the object to operate properly.
  __exports__ = AST;
  return __exports__;
})(__module5__);

// handlebars/compiler/parser.js
var __module9__ = (function() {
  "use strict";
  var __exports__;
  /* jshint ignore:start */
  /* Jison generated parser */
  var handlebars = (function(){
  var parser = {trace: function trace() { },
  yy: {},
  symbols_: {"error":2,"root":3,"statements":4,"EOF":5,"program":6,"simpleInverse":7,"statement":8,"openInverse":9,"closeBlock":10,"openBlock":11,"mustache":12,"partial":13,"CONTENT":14,"COMMENT":15,"OPEN_BLOCK":16,"sexpr":17,"CLOSE":18,"OPEN_INVERSE":19,"OPEN_ENDBLOCK":20,"path":21,"OPEN":22,"OPEN_UNESCAPED":23,"CLOSE_UNESCAPED":24,"OPEN_PARTIAL":25,"partialName":26,"partial_option0":27,"sexpr_repetition0":28,"sexpr_option0":29,"dataName":30,"param":31,"STRING":32,"INTEGER":33,"BOOLEAN":34,"OPEN_SEXPR":35,"CLOSE_SEXPR":36,"hash":37,"hash_repetition_plus0":38,"hashSegment":39,"ID":40,"EQUALS":41,"DATA":42,"pathSegments":43,"SEP":44,"$accept":0,"$end":1},
  terminals_: {2:"error",5:"EOF",14:"CONTENT",15:"COMMENT",16:"OPEN_BLOCK",18:"CLOSE",19:"OPEN_INVERSE",20:"OPEN_ENDBLOCK",22:"OPEN",23:"OPEN_UNESCAPED",24:"CLOSE_UNESCAPED",25:"OPEN_PARTIAL",32:"STRING",33:"INTEGER",34:"BOOLEAN",35:"OPEN_SEXPR",36:"CLOSE_SEXPR",40:"ID",41:"EQUALS",42:"DATA",44:"SEP"},
  productions_: [0,[3,2],[3,1],[6,2],[6,3],[6,2],[6,1],[6,1],[6,0],[4,1],[4,2],[8,3],[8,3],[8,1],[8,1],[8,1],[8,1],[11,3],[9,3],[10,3],[12,3],[12,3],[13,4],[7,2],[17,3],[17,1],[31,1],[31,1],[31,1],[31,1],[31,1],[31,3],[37,1],[39,3],[26,1],[26,1],[26,1],[30,2],[21,1],[43,3],[43,1],[27,0],[27,1],[28,0],[28,2],[29,0],[29,1],[38,1],[38,2]],
  performAction: function anonymous(yytext,yyleng,yylineno,yy,yystate,$$,_$) {

  var $0 = $$.length - 1;
  switch (yystate) {
  case 1: return new yy.ProgramNode($$[$0-1], this._$); 
  break;
  case 2: return new yy.ProgramNode([], this._$); 
  break;
  case 3:this.$ = new yy.ProgramNode([], $$[$0-1], $$[$0], this._$);
  break;
  case 4:this.$ = new yy.ProgramNode($$[$0-2], $$[$0-1], $$[$0], this._$);
  break;
  case 5:this.$ = new yy.ProgramNode($$[$0-1], $$[$0], [], this._$);
  break;
  case 6:this.$ = new yy.ProgramNode($$[$0], this._$);
  break;
  case 7:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 8:this.$ = new yy.ProgramNode([], this._$);
  break;
  case 9:this.$ = [$$[$0]];
  break;
  case 10: $$[$0-1].push($$[$0]); this.$ = $$[$0-1]; 
  break;
  case 11:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1].inverse, $$[$0-1], $$[$0], this._$);
  break;
  case 12:this.$ = new yy.BlockNode($$[$0-2], $$[$0-1], $$[$0-1].inverse, $$[$0], this._$);
  break;
  case 13:this.$ = $$[$0];
  break;
  case 14:this.$ = $$[$0];
  break;
  case 15:this.$ = new yy.ContentNode($$[$0], this._$);
  break;
  case 16:this.$ = new yy.CommentNode($$[$0], this._$);
  break;
  case 17:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 18:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 19:this.$ = {path: $$[$0-1], strip: stripFlags($$[$0-2], $$[$0])};
  break;
  case 20:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 21:this.$ = new yy.MustacheNode($$[$0-1], null, $$[$0-2], stripFlags($$[$0-2], $$[$0]), this._$);
  break;
  case 22:this.$ = new yy.PartialNode($$[$0-2], $$[$0-1], stripFlags($$[$0-3], $$[$0]), this._$);
  break;
  case 23:this.$ = stripFlags($$[$0-1], $$[$0]);
  break;
  case 24:this.$ = new yy.SexprNode([$$[$0-2]].concat($$[$0-1]), $$[$0], this._$);
  break;
  case 25:this.$ = new yy.SexprNode([$$[$0]], null, this._$);
  break;
  case 26:this.$ = $$[$0];
  break;
  case 27:this.$ = new yy.StringNode($$[$0], this._$);
  break;
  case 28:this.$ = new yy.IntegerNode($$[$0], this._$);
  break;
  case 29:this.$ = new yy.BooleanNode($$[$0], this._$);
  break;
  case 30:this.$ = $$[$0];
  break;
  case 31:$$[$0-1].isHelper = true; this.$ = $$[$0-1];
  break;
  case 32:this.$ = new yy.HashNode($$[$0], this._$);
  break;
  case 33:this.$ = [$$[$0-2], $$[$0]];
  break;
  case 34:this.$ = new yy.PartialNameNode($$[$0], this._$);
  break;
  case 35:this.$ = new yy.PartialNameNode(new yy.StringNode($$[$0], this._$), this._$);
  break;
  case 36:this.$ = new yy.PartialNameNode(new yy.IntegerNode($$[$0], this._$));
  break;
  case 37:this.$ = new yy.DataNode($$[$0], this._$);
  break;
  case 38:this.$ = new yy.IdNode($$[$0], this._$);
  break;
  case 39: $$[$0-2].push({part: $$[$0], separator: $$[$0-1]}); this.$ = $$[$0-2]; 
  break;
  case 40:this.$ = [{part: $$[$0]}];
  break;
  case 43:this.$ = [];
  break;
  case 44:$$[$0-1].push($$[$0]);
  break;
  case 47:this.$ = [$$[$0]];
  break;
  case 48:$$[$0-1].push($$[$0]);
  break;
  }
  },
  table: [{3:1,4:2,5:[1,3],8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[3]},{5:[1,16],8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],22:[1,13],23:[1,14],25:[1,15]},{1:[2,2]},{5:[2,9],14:[2,9],15:[2,9],16:[2,9],19:[2,9],20:[2,9],22:[2,9],23:[2,9],25:[2,9]},{4:20,6:18,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{4:20,6:22,7:19,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,8],22:[1,13],23:[1,14],25:[1,15]},{5:[2,13],14:[2,13],15:[2,13],16:[2,13],19:[2,13],20:[2,13],22:[2,13],23:[2,13],25:[2,13]},{5:[2,14],14:[2,14],15:[2,14],16:[2,14],19:[2,14],20:[2,14],22:[2,14],23:[2,14],25:[2,14]},{5:[2,15],14:[2,15],15:[2,15],16:[2,15],19:[2,15],20:[2,15],22:[2,15],23:[2,15],25:[2,15]},{5:[2,16],14:[2,16],15:[2,16],16:[2,16],19:[2,16],20:[2,16],22:[2,16],23:[2,16],25:[2,16]},{17:23,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:29,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:30,21:24,30:25,40:[1,28],42:[1,27],43:26},{17:31,21:24,30:25,40:[1,28],42:[1,27],43:26},{21:33,26:32,32:[1,34],33:[1,35],40:[1,28],43:26},{1:[2,1]},{5:[2,10],14:[2,10],15:[2,10],16:[2,10],19:[2,10],20:[2,10],22:[2,10],23:[2,10],25:[2,10]},{10:36,20:[1,37]},{4:38,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,7],22:[1,13],23:[1,14],25:[1,15]},{7:39,8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,21],20:[2,6],22:[1,13],23:[1,14],25:[1,15]},{17:23,18:[1,40],21:24,30:25,40:[1,28],42:[1,27],43:26},{10:41,20:[1,37]},{18:[1,42]},{18:[2,43],24:[2,43],28:43,32:[2,43],33:[2,43],34:[2,43],35:[2,43],36:[2,43],40:[2,43],42:[2,43]},{18:[2,25],24:[2,25],36:[2,25]},{18:[2,38],24:[2,38],32:[2,38],33:[2,38],34:[2,38],35:[2,38],36:[2,38],40:[2,38],42:[2,38],44:[1,44]},{21:45,40:[1,28],43:26},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],42:[2,40],44:[2,40]},{18:[1,46]},{18:[1,47]},{24:[1,48]},{18:[2,41],21:50,27:49,40:[1,28],43:26},{18:[2,34],40:[2,34]},{18:[2,35],40:[2,35]},{18:[2,36],40:[2,36]},{5:[2,11],14:[2,11],15:[2,11],16:[2,11],19:[2,11],20:[2,11],22:[2,11],23:[2,11],25:[2,11]},{21:51,40:[1,28],43:26},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,3],22:[1,13],23:[1,14],25:[1,15]},{4:52,8:4,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,5],22:[1,13],23:[1,14],25:[1,15]},{14:[2,23],15:[2,23],16:[2,23],19:[2,23],20:[2,23],22:[2,23],23:[2,23],25:[2,23]},{5:[2,12],14:[2,12],15:[2,12],16:[2,12],19:[2,12],20:[2,12],22:[2,12],23:[2,12],25:[2,12]},{14:[2,18],15:[2,18],16:[2,18],19:[2,18],20:[2,18],22:[2,18],23:[2,18],25:[2,18]},{18:[2,45],21:56,24:[2,45],29:53,30:60,31:54,32:[1,57],33:[1,58],34:[1,59],35:[1,61],36:[2,45],37:55,38:62,39:63,40:[1,64],42:[1,27],43:26},{40:[1,65]},{18:[2,37],24:[2,37],32:[2,37],33:[2,37],34:[2,37],35:[2,37],36:[2,37],40:[2,37],42:[2,37]},{14:[2,17],15:[2,17],16:[2,17],19:[2,17],20:[2,17],22:[2,17],23:[2,17],25:[2,17]},{5:[2,20],14:[2,20],15:[2,20],16:[2,20],19:[2,20],20:[2,20],22:[2,20],23:[2,20],25:[2,20]},{5:[2,21],14:[2,21],15:[2,21],16:[2,21],19:[2,21],20:[2,21],22:[2,21],23:[2,21],25:[2,21]},{18:[1,66]},{18:[2,42]},{18:[1,67]},{8:17,9:5,11:6,12:7,13:8,14:[1,9],15:[1,10],16:[1,12],19:[1,11],20:[2,4],22:[1,13],23:[1,14],25:[1,15]},{18:[2,24],24:[2,24],36:[2,24]},{18:[2,44],24:[2,44],32:[2,44],33:[2,44],34:[2,44],35:[2,44],36:[2,44],40:[2,44],42:[2,44]},{18:[2,46],24:[2,46],36:[2,46]},{18:[2,26],24:[2,26],32:[2,26],33:[2,26],34:[2,26],35:[2,26],36:[2,26],40:[2,26],42:[2,26]},{18:[2,27],24:[2,27],32:[2,27],33:[2,27],34:[2,27],35:[2,27],36:[2,27],40:[2,27],42:[2,27]},{18:[2,28],24:[2,28],32:[2,28],33:[2,28],34:[2,28],35:[2,28],36:[2,28],40:[2,28],42:[2,28]},{18:[2,29],24:[2,29],32:[2,29],33:[2,29],34:[2,29],35:[2,29],36:[2,29],40:[2,29],42:[2,29]},{18:[2,30],24:[2,30],32:[2,30],33:[2,30],34:[2,30],35:[2,30],36:[2,30],40:[2,30],42:[2,30]},{17:68,21:24,30:25,40:[1,28],42:[1,27],43:26},{18:[2,32],24:[2,32],36:[2,32],39:69,40:[1,70]},{18:[2,47],24:[2,47],36:[2,47],40:[2,47]},{18:[2,40],24:[2,40],32:[2,40],33:[2,40],34:[2,40],35:[2,40],36:[2,40],40:[2,40],41:[1,71],42:[2,40],44:[2,40]},{18:[2,39],24:[2,39],32:[2,39],33:[2,39],34:[2,39],35:[2,39],36:[2,39],40:[2,39],42:[2,39],44:[2,39]},{5:[2,22],14:[2,22],15:[2,22],16:[2,22],19:[2,22],20:[2,22],22:[2,22],23:[2,22],25:[2,22]},{5:[2,19],14:[2,19],15:[2,19],16:[2,19],19:[2,19],20:[2,19],22:[2,19],23:[2,19],25:[2,19]},{36:[1,72]},{18:[2,48],24:[2,48],36:[2,48],40:[2,48]},{41:[1,71]},{21:56,30:60,31:73,32:[1,57],33:[1,58],34:[1,59],35:[1,61],40:[1,28],42:[1,27],43:26},{18:[2,31],24:[2,31],32:[2,31],33:[2,31],34:[2,31],35:[2,31],36:[2,31],40:[2,31],42:[2,31]},{18:[2,33],24:[2,33],36:[2,33],40:[2,33]}],
  defaultActions: {3:[2,2],16:[2,1],50:[2,42]},
  parseError: function parseError(str, hash) {
      throw new Error(str);
  },
  parse: function parse(input) {
      var self = this, stack = [0], vstack = [null], lstack = [], table = this.table, yytext = "", yylineno = 0, yyleng = 0, recovering = 0, TERROR = 2, EOF = 1;
      this.lexer.setInput(input);
      this.lexer.yy = this.yy;
      this.yy.lexer = this.lexer;
      this.yy.parser = this;
      if (typeof this.lexer.yylloc == "undefined")
          this.lexer.yylloc = {};
      var yyloc = this.lexer.yylloc;
      lstack.push(yyloc);
      var ranges = this.lexer.options && this.lexer.options.ranges;
      if (typeof this.yy.parseError === "function")
          this.parseError = this.yy.parseError;
      function popStack(n) {
          stack.length = stack.length - 2 * n;
          vstack.length = vstack.length - n;
          lstack.length = lstack.length - n;
      }
      function lex() {
          var token;
          token = self.lexer.lex() || 1;
          if (typeof token !== "number") {
              token = self.symbols_[token] || token;
          }
          return token;
      }
      var symbol, preErrorSymbol, state, action, a, r, yyval = {}, p, len, newState, expected;
      while (true) {
          state = stack[stack.length - 1];
          if (this.defaultActions[state]) {
              action = this.defaultActions[state];
          } else {
              if (symbol === null || typeof symbol == "undefined") {
                  symbol = lex();
              }
              action = table[state] && table[state][symbol];
          }
          if (typeof action === "undefined" || !action.length || !action[0]) {
              var errStr = "";
              if (!recovering) {
                  expected = [];
                  for (p in table[state])
                      if (this.terminals_[p] && p > 2) {
                          expected.push("'" + this.terminals_[p] + "'");
                      }
                  if (this.lexer.showPosition) {
                      errStr = "Parse error on line " + (yylineno + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + expected.join(", ") + ", got '" + (this.terminals_[symbol] || symbol) + "'";
                  } else {
                      errStr = "Parse error on line " + (yylineno + 1) + ": Unexpected " + (symbol == 1?"end of input":"'" + (this.terminals_[symbol] || symbol) + "'");
                  }
                  this.parseError(errStr, {text: this.lexer.match, token: this.terminals_[symbol] || symbol, line: this.lexer.yylineno, loc: yyloc, expected: expected});
              }
          }
          if (action[0] instanceof Array && action.length > 1) {
              throw new Error("Parse Error: multiple actions possible at state: " + state + ", token: " + symbol);
          }
          switch (action[0]) {
          case 1:
              stack.push(symbol);
              vstack.push(this.lexer.yytext);
              lstack.push(this.lexer.yylloc);
              stack.push(action[1]);
              symbol = null;
              if (!preErrorSymbol) {
                  yyleng = this.lexer.yyleng;
                  yytext = this.lexer.yytext;
                  yylineno = this.lexer.yylineno;
                  yyloc = this.lexer.yylloc;
                  if (recovering > 0)
                      recovering--;
              } else {
                  symbol = preErrorSymbol;
                  preErrorSymbol = null;
              }
              break;
          case 2:
              len = this.productions_[action[1]][1];
              yyval.$ = vstack[vstack.length - len];
              yyval._$ = {first_line: lstack[lstack.length - (len || 1)].first_line, last_line: lstack[lstack.length - 1].last_line, first_column: lstack[lstack.length - (len || 1)].first_column, last_column: lstack[lstack.length - 1].last_column};
              if (ranges) {
                  yyval._$.range = [lstack[lstack.length - (len || 1)].range[0], lstack[lstack.length - 1].range[1]];
              }
              r = this.performAction.call(yyval, yytext, yyleng, yylineno, this.yy, action[1], vstack, lstack);
              if (typeof r !== "undefined") {
                  return r;
              }
              if (len) {
                  stack = stack.slice(0, -1 * len * 2);
                  vstack = vstack.slice(0, -1 * len);
                  lstack = lstack.slice(0, -1 * len);
              }
              stack.push(this.productions_[action[1]][0]);
              vstack.push(yyval.$);
              lstack.push(yyval._$);
              newState = table[stack[stack.length - 2]][stack[stack.length - 1]];
              stack.push(newState);
              break;
          case 3:
              return true;
          }
      }
      return true;
  }
  };


  function stripFlags(open, close) {
    return {
      left: open.charAt(2) === '~',
      right: close.charAt(0) === '~' || close.charAt(1) === '~'
    };
  }

  /* Jison generated lexer */
  var lexer = (function(){
  var lexer = ({EOF:1,
  parseError:function parseError(str, hash) {
          if (this.yy.parser) {
              this.yy.parser.parseError(str, hash);
          } else {
              throw new Error(str);
          }
      },
  setInput:function (input) {
          this._input = input;
          this._more = this._less = this.done = false;
          this.yylineno = this.yyleng = 0;
          this.yytext = this.matched = this.match = '';
          this.conditionStack = ['INITIAL'];
          this.yylloc = {first_line:1,first_column:0,last_line:1,last_column:0};
          if (this.options.ranges) this.yylloc.range = [0,0];
          this.offset = 0;
          return this;
      },
  input:function () {
          var ch = this._input[0];
          this.yytext += ch;
          this.yyleng++;
          this.offset++;
          this.match += ch;
          this.matched += ch;
          var lines = ch.match(/(?:\r\n?|\n).*/g);
          if (lines) {
              this.yylineno++;
              this.yylloc.last_line++;
          } else {
              this.yylloc.last_column++;
          }
          if (this.options.ranges) this.yylloc.range[1]++;

          this._input = this._input.slice(1);
          return ch;
      },
  unput:function (ch) {
          var len = ch.length;
          var lines = ch.split(/(?:\r\n?|\n)/g);

          this._input = ch + this._input;
          this.yytext = this.yytext.substr(0, this.yytext.length-len-1);
          //this.yyleng -= len;
          this.offset -= len;
          var oldLines = this.match.split(/(?:\r\n?|\n)/g);
          this.match = this.match.substr(0, this.match.length-1);
          this.matched = this.matched.substr(0, this.matched.length-1);

          if (lines.length-1) this.yylineno -= lines.length-1;
          var r = this.yylloc.range;

          this.yylloc = {first_line: this.yylloc.first_line,
            last_line: this.yylineno+1,
            first_column: this.yylloc.first_column,
            last_column: lines ?
                (lines.length === oldLines.length ? this.yylloc.first_column : 0) + oldLines[oldLines.length - lines.length].length - lines[0].length:
                this.yylloc.first_column - len
            };

          if (this.options.ranges) {
              this.yylloc.range = [r[0], r[0] + this.yyleng - len];
          }
          return this;
      },
  more:function () {
          this._more = true;
          return this;
      },
  less:function (n) {
          this.unput(this.match.slice(n));
      },
  pastInput:function () {
          var past = this.matched.substr(0, this.matched.length - this.match.length);
          return (past.length > 20 ? '...':'') + past.substr(-20).replace(/\n/g, "");
      },
  upcomingInput:function () {
          var next = this.match;
          if (next.length < 20) {
              next += this._input.substr(0, 20-next.length);
          }
          return (next.substr(0,20)+(next.length > 20 ? '...':'')).replace(/\n/g, "");
      },
  showPosition:function () {
          var pre = this.pastInput();
          var c = new Array(pre.length + 1).join("-");
          return pre + this.upcomingInput() + "\n" + c+"^";
      },
  next:function () {
          if (this.done) {
              return this.EOF;
          }
          if (!this._input) this.done = true;

          var token,
              match,
              tempMatch,
              index,
              col,
              lines;
          if (!this._more) {
              this.yytext = '';
              this.match = '';
          }
          var rules = this._currentRules();
          for (var i=0;i < rules.length; i++) {
              tempMatch = this._input.match(this.rules[rules[i]]);
              if (tempMatch && (!match || tempMatch[0].length > match[0].length)) {
                  match = tempMatch;
                  index = i;
                  if (!this.options.flex) break;
              }
          }
          if (match) {
              lines = match[0].match(/(?:\r\n?|\n).*/g);
              if (lines) this.yylineno += lines.length;
              this.yylloc = {first_line: this.yylloc.last_line,
                             last_line: this.yylineno+1,
                             first_column: this.yylloc.last_column,
                             last_column: lines ? lines[lines.length-1].length-lines[lines.length-1].match(/\r?\n?/)[0].length : this.yylloc.last_column + match[0].length};
              this.yytext += match[0];
              this.match += match[0];
              this.matches = match;
              this.yyleng = this.yytext.length;
              if (this.options.ranges) {
                  this.yylloc.range = [this.offset, this.offset += this.yyleng];
              }
              this._more = false;
              this._input = this._input.slice(match[0].length);
              this.matched += match[0];
              token = this.performAction.call(this, this.yy, this, rules[index],this.conditionStack[this.conditionStack.length-1]);
              if (this.done && this._input) this.done = false;
              if (token) return token;
              else return;
          }
          if (this._input === "") {
              return this.EOF;
          } else {
              return this.parseError('Lexical error on line '+(this.yylineno+1)+'. Unrecognized text.\n'+this.showPosition(),
                      {text: "", token: null, line: this.yylineno});
          }
      },
  lex:function lex() {
          var r = this.next();
          if (typeof r !== 'undefined') {
              return r;
          } else {
              return this.lex();
          }
      },
  begin:function begin(condition) {
          this.conditionStack.push(condition);
      },
  popState:function popState() {
          return this.conditionStack.pop();
      },
  _currentRules:function _currentRules() {
          return this.conditions[this.conditionStack[this.conditionStack.length-1]].rules;
      },
  topState:function () {
          return this.conditionStack[this.conditionStack.length-2];
      },
  pushState:function begin(condition) {
          this.begin(condition);
      }});
  lexer.options = {};
  lexer.performAction = function anonymous(yy,yy_,$avoiding_name_collisions,YY_START) {


  function strip(start, end) {
    return yy_.yytext = yy_.yytext.substr(start, yy_.yyleng-end);
  }


  var YYSTATE=YY_START
  switch($avoiding_name_collisions) {
  case 0:
                                     if(yy_.yytext.slice(-2) === "\\\\") {
                                       strip(0,1);
                                       this.begin("mu");
                                     } else if(yy_.yytext.slice(-1) === "\\") {
                                       strip(0,1);
                                       this.begin("emu");
                                     } else {
                                       this.begin("mu");
                                     }
                                     if(yy_.yytext) return 14;
                                   
  break;
  case 1:return 14;
  break;
  case 2:
                                     this.popState();
                                     return 14;
                                   
  break;
  case 3:strip(0,4); this.popState(); return 15;
  break;
  case 4:return 35;
  break;
  case 5:return 36;
  break;
  case 6:return 25;
  break;
  case 7:return 16;
  break;
  case 8:return 20;
  break;
  case 9:return 19;
  break;
  case 10:return 19;
  break;
  case 11:return 23;
  break;
  case 12:return 22;
  break;
  case 13:this.popState(); this.begin('com');
  break;
  case 14:strip(3,5); this.popState(); return 15;
  break;
  case 15:return 22;
  break;
  case 16:return 41;
  break;
  case 17:return 40;
  break;
  case 18:return 40;
  break;
  case 19:return 44;
  break;
  case 20:// ignore whitespace
  break;
  case 21:this.popState(); return 24;
  break;
  case 22:this.popState(); return 18;
  break;
  case 23:yy_.yytext = strip(1,2).replace(/\\"/g,'"'); return 32;
  break;
  case 24:yy_.yytext = strip(1,2).replace(/\\'/g,"'"); return 32;
  break;
  case 25:return 42;
  break;
  case 26:return 34;
  break;
  case 27:return 34;
  break;
  case 28:return 33;
  break;
  case 29:return 40;
  break;
  case 30:yy_.yytext = strip(1,2); return 40;
  break;
  case 31:return 'INVALID';
  break;
  case 32:return 5;
  break;
  }
  };
  lexer.rules = [/^(?:[^\x00]*?(?=(\{\{)))/,/^(?:[^\x00]+)/,/^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/,/^(?:[\s\S]*?--\}\})/,/^(?:\()/,/^(?:\))/,/^(?:\{\{(~)?>)/,/^(?:\{\{(~)?#)/,/^(?:\{\{(~)?\/)/,/^(?:\{\{(~)?\^)/,/^(?:\{\{(~)?\s*else\b)/,/^(?:\{\{(~)?\{)/,/^(?:\{\{(~)?&)/,/^(?:\{\{!--)/,/^(?:\{\{![\s\S]*?\}\})/,/^(?:\{\{(~)?)/,/^(?:=)/,/^(?:\.\.)/,/^(?:\.(?=([=~}\s\/.)])))/,/^(?:[\/.])/,/^(?:\s+)/,/^(?:\}(~)?\}\})/,/^(?:(~)?\}\})/,/^(?:"(\\["]|[^"])*")/,/^(?:'(\\[']|[^'])*')/,/^(?:@)/,/^(?:true(?=([~}\s)])))/,/^(?:false(?=([~}\s)])))/,/^(?:-?[0-9]+(?=([~}\s)])))/,/^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/,/^(?:\[[^\]]*\])/,/^(?:.)/,/^(?:$)/];
  lexer.conditions = {"mu":{"rules":[4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32],"inclusive":false},"emu":{"rules":[2],"inclusive":false},"com":{"rules":[3],"inclusive":false},"INITIAL":{"rules":[0,1,32],"inclusive":true}};
  return lexer;})()
  parser.lexer = lexer;
  function Parser () { this.yy = {}; }Parser.prototype = parser;parser.Parser = Parser;
  return new Parser;
  })();__exports__ = handlebars;
  /* jshint ignore:end */
  return __exports__;
})();

// handlebars/compiler/base.js
var __module8__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__ = {};
  var parser = __dependency1__;
  var AST = __dependency2__;

  __exports__.parser = parser;

  function parse(input) {
    // Just return if an already-compile AST was passed in.
    if(input.constructor === AST.ProgramNode) { return input; }

    parser.yy = AST;
    return parser.parse(input);
  }

  __exports__.parse = parse;
  return __exports__;
})(__module9__, __module7__);

// handlebars/compiler/compiler.js
var __module10__ = (function(__dependency1__) {
  "use strict";
  var __exports__ = {};
  var Exception = __dependency1__;

  function Compiler() {}

  __exports__.Compiler = Compiler;// the foundHelper register will disambiguate helper lookup from finding a
  // function in a context. This is necessary for mustache compatibility, which
  // requires that context functions in blocks are evaluated by blockHelperMissing,
  // and then proceed as if the resulting value was provided to blockHelperMissing.

  Compiler.prototype = {
    compiler: Compiler,

    disassemble: function() {
      var opcodes = this.opcodes, opcode, out = [], params, param;

      for (var i=0, l=opcodes.length; i<l; i++) {
        opcode = opcodes[i];

        if (opcode.opcode === 'DECLARE') {
          out.push("DECLARE " + opcode.name + "=" + opcode.value);
        } else {
          params = [];
          for (var j=0; j<opcode.args.length; j++) {
            param = opcode.args[j];
            if (typeof param === "string") {
              param = "\"" + param.replace("\n", "\\n") + "\"";
            }
            params.push(param);
          }
          out.push(opcode.opcode + " " + params.join(" "));
        }
      }

      return out.join("\n");
    },

    equals: function(other) {
      var len = this.opcodes.length;
      if (other.opcodes.length !== len) {
        return false;
      }

      for (var i = 0; i < len; i++) {
        var opcode = this.opcodes[i],
            otherOpcode = other.opcodes[i];
        if (opcode.opcode !== otherOpcode.opcode || opcode.args.length !== otherOpcode.args.length) {
          return false;
        }
        for (var j = 0; j < opcode.args.length; j++) {
          if (opcode.args[j] !== otherOpcode.args[j]) {
            return false;
          }
        }
      }

      len = this.children.length;
      if (other.children.length !== len) {
        return false;
      }
      for (i = 0; i < len; i++) {
        if (!this.children[i].equals(other.children[i])) {
          return false;
        }
      }

      return true;
    },

    guid: 0,

    compile: function(program, options) {
      this.opcodes = [];
      this.children = [];
      this.depths = {list: []};
      this.options = options;

      // These changes will propagate to the other compiler components
      var knownHelpers = this.options.knownHelpers;
      this.options.knownHelpers = {
        'helperMissing': true,
        'blockHelperMissing': true,
        'each': true,
        'if': true,
        'unless': true,
        'with': true,
        'log': true
      };
      if (knownHelpers) {
        for (var name in knownHelpers) {
          this.options.knownHelpers[name] = knownHelpers[name];
        }
      }

      return this.accept(program);
    },

    accept: function(node) {
      var strip = node.strip || {},
          ret;
      if (strip.left) {
        this.opcode('strip');
      }

      ret = this[node.type](node);

      if (strip.right) {
        this.opcode('strip');
      }

      return ret;
    },

    program: function(program) {
      var statements = program.statements;

      for(var i=0, l=statements.length; i<l; i++) {
        this.accept(statements[i]);
      }
      this.isSimple = l === 1;

      this.depths.list = this.depths.list.sort(function(a, b) {
        return a - b;
      });

      return this;
    },

    compileProgram: function(program) {
      var result = new this.compiler().compile(program, this.options);
      var guid = this.guid++, depth;

      this.usePartial = this.usePartial || result.usePartial;

      this.children[guid] = result;

      for(var i=0, l=result.depths.list.length; i<l; i++) {
        depth = result.depths.list[i];

        if(depth < 2) { continue; }
        else { this.addDepth(depth - 1); }
      }

      return guid;
    },

    block: function(block) {
      var mustache = block.mustache,
          program = block.program,
          inverse = block.inverse;

      if (program) {
        program = this.compileProgram(program);
      }

      if (inverse) {
        inverse = this.compileProgram(inverse);
      }

      var sexpr = mustache.sexpr;
      var type = this.classifySexpr(sexpr);

      if (type === "helper") {
        this.helperSexpr(sexpr, program, inverse);
      } else if (type === "simple") {
        this.simpleSexpr(sexpr);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('blockValue');
      } else {
        this.ambiguousSexpr(sexpr, program, inverse);

        // now that the simple mustache is resolved, we need to
        // evaluate it by executing `blockHelperMissing`
        this.opcode('pushProgram', program);
        this.opcode('pushProgram', inverse);
        this.opcode('emptyHash');
        this.opcode('ambiguousBlockValue');
      }

      this.opcode('append');
    },

    hash: function(hash) {
      var pairs = hash.pairs, pair, val;

      this.opcode('pushHash');

      for(var i=0, l=pairs.length; i<l; i++) {
        pair = pairs[i];
        val  = pair[1];

        if (this.options.stringParams) {
          if(val.depth) {
            this.addDepth(val.depth);
          }
          this.opcode('getContext', val.depth || 0);
          this.opcode('pushStringParam', val.stringModeValue, val.type);

          if (val.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(val);
          }
        } else {
          this.accept(val);
        }

        this.opcode('assignToHash', pair[0]);
      }
      this.opcode('popHash');
    },

    partial: function(partial) {
      var partialName = partial.partialName;
      this.usePartial = true;

      if(partial.context) {
        this.ID(partial.context);
      } else {
        this.opcode('push', 'depth0');
      }

      this.opcode('invokePartial', partialName.name);
      this.opcode('append');
    },

    content: function(content) {
      this.opcode('appendContent', content.string);
    },

    mustache: function(mustache) {
      this.sexpr(mustache.sexpr);

      if(mustache.escaped && !this.options.noEscape) {
        this.opcode('appendEscaped');
      } else {
        this.opcode('append');
      }
    },

    ambiguousSexpr: function(sexpr, program, inverse) {
      var id = sexpr.id,
          name = id.parts[0],
          isBlock = program != null || inverse != null;

      this.opcode('getContext', id.depth);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      this.opcode('invokeAmbiguous', name, isBlock);
    },

    simpleSexpr: function(sexpr) {
      var id = sexpr.id;

      if (id.type === 'DATA') {
        this.DATA(id);
      } else if (id.parts.length) {
        this.ID(id);
      } else {
        // Simplified ID for `this`
        this.addDepth(id.depth);
        this.opcode('getContext', id.depth);
        this.opcode('pushContext');
      }

      this.opcode('resolvePossibleLambda');
    },

    helperSexpr: function(sexpr, program, inverse) {
      var params = this.setupFullMustacheParams(sexpr, program, inverse),
          name = sexpr.id.parts[0];

      if (this.options.knownHelpers[name]) {
        this.opcode('invokeKnownHelper', params.length, name);
      } else if (this.options.knownHelpersOnly) {
        throw new Exception("You specified knownHelpersOnly, but used the unknown helper " + name, sexpr);
      } else {
        this.opcode('invokeHelper', params.length, name, sexpr.isRoot);
      }
    },

    sexpr: function(sexpr) {
      var type = this.classifySexpr(sexpr);

      if (type === "simple") {
        this.simpleSexpr(sexpr);
      } else if (type === "helper") {
        this.helperSexpr(sexpr);
      } else {
        this.ambiguousSexpr(sexpr);
      }
    },

    ID: function(id) {
      this.addDepth(id.depth);
      this.opcode('getContext', id.depth);

      var name = id.parts[0];
      if (!name) {
        this.opcode('pushContext');
      } else {
        this.opcode('lookupOnContext', id.parts[0]);
      }

      for(var i=1, l=id.parts.length; i<l; i++) {
        this.opcode('lookup', id.parts[i]);
      }
    },

    DATA: function(data) {
      this.options.data = true;
      if (data.id.isScoped || data.id.depth) {
        throw new Exception('Scoped data references are not supported: ' + data.original, data);
      }

      this.opcode('lookupData');
      var parts = data.id.parts;
      for(var i=0, l=parts.length; i<l; i++) {
        this.opcode('lookup', parts[i]);
      }
    },

    STRING: function(string) {
      this.opcode('pushString', string.string);
    },

    INTEGER: function(integer) {
      this.opcode('pushLiteral', integer.integer);
    },

    BOOLEAN: function(bool) {
      this.opcode('pushLiteral', bool.bool);
    },

    comment: function() {},

    // HELPERS
    opcode: function(name) {
      this.opcodes.push({ opcode: name, args: [].slice.call(arguments, 1) });
    },

    declare: function(name, value) {
      this.opcodes.push({ opcode: 'DECLARE', name: name, value: value });
    },

    addDepth: function(depth) {
      if(depth === 0) { return; }

      if(!this.depths[depth]) {
        this.depths[depth] = true;
        this.depths.list.push(depth);
      }
    },

    classifySexpr: function(sexpr) {
      var isHelper   = sexpr.isHelper;
      var isEligible = sexpr.eligibleHelper;
      var options    = this.options;

      // if ambiguous, we can possibly resolve the ambiguity now
      if (isEligible && !isHelper) {
        var name = sexpr.id.parts[0];

        if (options.knownHelpers[name]) {
          isHelper = true;
        } else if (options.knownHelpersOnly) {
          isEligible = false;
        }
      }

      if (isHelper) { return "helper"; }
      else if (isEligible) { return "ambiguous"; }
      else { return "simple"; }
    },

    pushParams: function(params) {
      var i = params.length, param;

      while(i--) {
        param = params[i];

        if(this.options.stringParams) {
          if(param.depth) {
            this.addDepth(param.depth);
          }

          this.opcode('getContext', param.depth || 0);
          this.opcode('pushStringParam', param.stringModeValue, param.type);

          if (param.type === 'sexpr') {
            // Subexpressions get evaluated and passed in
            // in string params mode.
            this.sexpr(param);
          }
        } else {
          this[param.type](param);
        }
      }
    },

    setupFullMustacheParams: function(sexpr, program, inverse) {
      var params = sexpr.params;
      this.pushParams(params);

      this.opcode('pushProgram', program);
      this.opcode('pushProgram', inverse);

      if (sexpr.hash) {
        this.hash(sexpr.hash);
      } else {
        this.opcode('emptyHash');
      }

      return params;
    }
  };

  function precompile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + input);
    }

    options = options || {};
    if (!('data' in options)) {
      options.data = true;
    }

    var ast = env.parse(input);
    var environment = new env.Compiler().compile(ast, options);
    return new env.JavaScriptCompiler().compile(environment, options);
  }

  __exports__.precompile = precompile;function compile(input, options, env) {
    if (input == null || (typeof input !== 'string' && input.constructor !== env.AST.ProgramNode)) {
      throw new Exception("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + input);
    }

    options = options || {};

    if (!('data' in options)) {
      options.data = true;
    }

    var compiled;

    function compileInput() {
      var ast = env.parse(input);
      var environment = new env.Compiler().compile(ast, options);
      var templateSpec = new env.JavaScriptCompiler().compile(environment, options, undefined, true);
      return env.template(templateSpec);
    }

    // Template is only compiled on first use and cached after that point.
    return function(context, options) {
      if (!compiled) {
        compiled = compileInput();
      }
      return compiled.call(this, context, options);
    };
  }

  __exports__.compile = compile;
  return __exports__;
})(__module5__);

// handlebars/compiler/javascript-compiler.js
var __module11__ = (function(__dependency1__, __dependency2__) {
  "use strict";
  var __exports__;
  var COMPILER_REVISION = __dependency1__.COMPILER_REVISION;
  var REVISION_CHANGES = __dependency1__.REVISION_CHANGES;
  var log = __dependency1__.log;
  var Exception = __dependency2__;

  function Literal(value) {
    this.value = value;
  }

  function JavaScriptCompiler() {}

  JavaScriptCompiler.prototype = {
    // PUBLIC API: You can override these methods in a subclass to provide
    // alternative compiled forms for name lookup and buffering semantics
    nameLookup: function(parent, name /* , type*/) {
      var wrap,
          ret;
      if (parent.indexOf('depth') === 0) {
        wrap = true;
      }

      if (/^[0-9]+$/.test(name)) {
        ret = parent + "[" + name + "]";
      } else if (JavaScriptCompiler.isValidJavaScriptVariableName(name)) {
        ret = parent + "." + name;
      }
      else {
        ret = parent + "['" + name + "']";
      }

      if (wrap) {
        return '(' + parent + ' && ' + ret + ')';
      } else {
        return ret;
      }
    },

    compilerInfo: function() {
      var revision = COMPILER_REVISION,
          versions = REVISION_CHANGES[revision];
      return "this.compilerInfo = ["+revision+",'"+versions+"'];\n";
    },

    appendToBuffer: function(string) {
      if (this.environment.isSimple) {
        return "return " + string + ";";
      } else {
        return {
          appendToBuffer: true,
          content: string,
          toString: function() { return "buffer += " + string + ";"; }
        };
      }
    },

    initializeBuffer: function() {
      return this.quotedString("");
    },

    namespace: "Handlebars",
    // END PUBLIC API

    compile: function(environment, options, context, asObject) {
      this.environment = environment;
      this.options = options || {};

      log('debug', this.environment.disassemble() + "\n\n");

      this.name = this.environment.name;
      this.isChild = !!context;
      this.context = context || {
        programs: [],
        environments: [],
        aliases: { }
      };

      this.preamble();

      this.stackSlot = 0;
      this.stackVars = [];
      this.registers = { list: [] };
      this.hashes = [];
      this.compileStack = [];
      this.inlineStack = [];

      this.compileChildren(environment, options);

      var opcodes = environment.opcodes, opcode;

      this.i = 0;

      for(var l=opcodes.length; this.i<l; this.i++) {
        opcode = opcodes[this.i];

        if(opcode.opcode === 'DECLARE') {
          this[opcode.name] = opcode.value;
        } else {
          this[opcode.opcode].apply(this, opcode.args);
        }

        // Reset the stripNext flag if it was not set by this operation.
        if (opcode.opcode !== this.stripNext) {
          this.stripNext = false;
        }
      }

      // Flush any trailing content that might be pending.
      this.pushSource('');

      if (this.stackSlot || this.inlineStack.length || this.compileStack.length) {
        throw new Exception('Compile completed with content left on stack');
      }

      return this.createFunctionContext(asObject);
    },

    preamble: function() {
      var out = [];

      if (!this.isChild) {
        var namespace = this.namespace;

        var copies = "helpers = this.merge(helpers, " + namespace + ".helpers);";
        if (this.environment.usePartial) { copies = copies + " partials = this.merge(partials, " + namespace + ".partials);"; }
        if (this.options.data) { copies = copies + " data = data || {};"; }
        out.push(copies);
      } else {
        out.push('');
      }

      if (!this.environment.isSimple) {
        out.push(", buffer = " + this.initializeBuffer());
      } else {
        out.push("");
      }

      // track the last context pushed into place to allow skipping the
      // getContext opcode when it would be a noop
      this.lastContext = 0;
      this.source = out;
    },

    createFunctionContext: function(asObject) {
      var locals = this.stackVars.concat(this.registers.list);

      if(locals.length > 0) {
        this.source[1] = this.source[1] + ", " + locals.join(", ");
      }

      // Generate minimizer alias mappings
      if (!this.isChild) {
        for (var alias in this.context.aliases) {
          if (this.context.aliases.hasOwnProperty(alias)) {
            this.source[1] = this.source[1] + ', ' + alias + '=' + this.context.aliases[alias];
          }
        }
      }

      if (this.source[1]) {
        this.source[1] = "var " + this.source[1].substring(2) + ";";
      }

      // Merge children
      if (!this.isChild) {
        this.source[1] += '\n' + this.context.programs.join('\n') + '\n';
      }

      if (!this.environment.isSimple) {
        this.pushSource("return buffer;");
      }

      var params = this.isChild ? ["depth0", "data"] : ["Handlebars", "depth0", "helpers", "partials", "data"];

      for(var i=0, l=this.environment.depths.list.length; i<l; i++) {
        params.push("depth" + this.environment.depths.list[i]);
      }

      // Perform a second pass over the output to merge content when possible
      var source = this.mergeSource();

      if (!this.isChild) {
        source = this.compilerInfo()+source;
      }

      if (asObject) {
        params.push(source);

        return Function.apply(this, params);
      } else {
        var functionSource = 'function ' + (this.name || '') + '(' + params.join(',') + ') {\n  ' + source + '}';
        log('debug', functionSource + "\n\n");
        return functionSource;
      }
    },
    mergeSource: function() {
      // WARN: We are not handling the case where buffer is still populated as the source should
      // not have buffer append operations as their final action.
      var source = '',
          buffer;
      for (var i = 0, len = this.source.length; i < len; i++) {
        var line = this.source[i];
        if (line.appendToBuffer) {
          if (buffer) {
            buffer = buffer + '\n    + ' + line.content;
          } else {
            buffer = line.content;
          }
        } else {
          if (buffer) {
            source += 'buffer += ' + buffer + ';\n  ';
            buffer = undefined;
          }
          source += line + '\n  ';
        }
      }
      return source;
    },

    // [blockValue]
    //
    // On stack, before: hash, inverse, program, value
    // On stack, after: return value of blockHelperMissing
    //
    // The purpose of this opcode is to take a block of the form
    // `{{#foo}}...{{/foo}}`, resolve the value of `foo`, and
    // replace it on the stack with the result of properly
    // invoking blockHelperMissing.
    blockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      this.replaceStack(function(current) {
        params.splice(1, 0, current);
        return "blockHelperMissing.call(" + params.join(", ") + ")";
      });
    },

    // [ambiguousBlockValue]
    //
    // On stack, before: hash, inverse, program, value
    // Compiler value, before: lastHelper=value of last found helper, if any
    // On stack, after, if no lastHelper: same as [blockValue]
    // On stack, after, if lastHelper: value
    ambiguousBlockValue: function() {
      this.context.aliases.blockHelperMissing = 'helpers.blockHelperMissing';

      var params = ["depth0"];
      this.setupParams(0, params);

      var current = this.topStack();
      params.splice(1, 0, current);

      this.pushSource("if (!" + this.lastHelper + ") { " + current + " = blockHelperMissing.call(" + params.join(", ") + "); }");
    },

    // [appendContent]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Appends the string value of `content` to the current buffer
    appendContent: function(content) {
      if (this.pendingContent) {
        content = this.pendingContent + content;
      }
      if (this.stripNext) {
        content = content.replace(/^\s+/, '');
      }

      this.pendingContent = content;
    },

    // [strip]
    //
    // On stack, before: ...
    // On stack, after: ...
    //
    // Removes any trailing whitespace from the prior content node and flags
    // the next operation for stripping if it is a content node.
    strip: function() {
      if (this.pendingContent) {
        this.pendingContent = this.pendingContent.replace(/\s+$/, '');
      }
      this.stripNext = 'strip';
    },

    // [append]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Coerces `value` to a String and appends it to the current buffer.
    //
    // If `value` is truthy, or 0, it is coerced into a string and appended
    // Otherwise, the empty string is appended
    append: function() {
      // Force anything that is inlined onto the stack so we don't have duplication
      // when we examine local
      this.flushInline();
      var local = this.popStack();
      this.pushSource("if(" + local + " || " + local + " === 0) { " + this.appendToBuffer(local) + " }");
      if (this.environment.isSimple) {
        this.pushSource("else { " + this.appendToBuffer("''") + " }");
      }
    },

    // [appendEscaped]
    //
    // On stack, before: value, ...
    // On stack, after: ...
    //
    // Escape `value` and append it to the buffer
    appendEscaped: function() {
      this.context.aliases.escapeExpression = 'this.escapeExpression';

      this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"));
    },

    // [getContext]
    //
    // On stack, before: ...
    // On stack, after: ...
    // Compiler value, after: lastContext=depth
    //
    // Set the value of the `lastContext` compiler value to the depth
    getContext: function(depth) {
      if(this.lastContext !== depth) {
        this.lastContext = depth;
      }
    },

    // [lookupOnContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext[name], ...
    //
    // Looks up the value of `name` on the current context and pushes
    // it onto the stack.
    lookupOnContext: function(name) {
      this.push(this.nameLookup('depth' + this.lastContext, name, 'context'));
    },

    // [pushContext]
    //
    // On stack, before: ...
    // On stack, after: currentContext, ...
    //
    // Pushes the value of the current context onto the stack.
    pushContext: function() {
      this.pushStackLiteral('depth' + this.lastContext);
    },

    // [resolvePossibleLambda]
    //
    // On stack, before: value, ...
    // On stack, after: resolved value, ...
    //
    // If the `value` is a lambda, replace it on the stack by
    // the return value of the lambda
    resolvePossibleLambda: function() {
      this.context.aliases.functionType = '"function"';

      this.replaceStack(function(current) {
        return "typeof " + current + " === functionType ? " + current + ".apply(depth0) : " + current;
      });
    },

    // [lookup]
    //
    // On stack, before: value, ...
    // On stack, after: value[name], ...
    //
    // Replace the value on the stack with the result of looking
    // up `name` on `value`
    lookup: function(name) {
      this.replaceStack(function(current) {
        return current + " == null || " + current + " === false ? " + current + " : " + this.nameLookup(current, name, 'context');
      });
    },

    // [lookupData]
    //
    // On stack, before: ...
    // On stack, after: data, ...
    //
    // Push the data lookup operator
    lookupData: function() {
      this.pushStackLiteral('data');
    },

    // [pushStringParam]
    //
    // On stack, before: ...
    // On stack, after: string, currentContext, ...
    //
    // This opcode is designed for use in string mode, which
    // provides the string value of a parameter along with its
    // depth rather than resolving it immediately.
    pushStringParam: function(string, type) {
      this.pushStackLiteral('depth' + this.lastContext);

      this.pushString(type);

      // If it's a subexpression, the string result
      // will be pushed after this opcode.
      if (type !== 'sexpr') {
        if (typeof string === 'string') {
          this.pushString(string);
        } else {
          this.pushStackLiteral(string);
        }
      }
    },

    emptyHash: function() {
      this.pushStackLiteral('{}');

      if (this.options.stringParams) {
        this.push('{}'); // hashContexts
        this.push('{}'); // hashTypes
      }
    },
    pushHash: function() {
      if (this.hash) {
        this.hashes.push(this.hash);
      }
      this.hash = {values: [], types: [], contexts: []};
    },
    popHash: function() {
      var hash = this.hash;
      this.hash = this.hashes.pop();

      if (this.options.stringParams) {
        this.push('{' + hash.contexts.join(',') + '}');
        this.push('{' + hash.types.join(',') + '}');
      }

      this.push('{\n    ' + hash.values.join(',\n    ') + '\n  }');
    },

    // [pushString]
    //
    // On stack, before: ...
    // On stack, after: quotedString(string), ...
    //
    // Push a quoted version of `string` onto the stack
    pushString: function(string) {
      this.pushStackLiteral(this.quotedString(string));
    },

    // [push]
    //
    // On stack, before: ...
    // On stack, after: expr, ...
    //
    // Push an expression onto the stack
    push: function(expr) {
      this.inlineStack.push(expr);
      return expr;
    },

    // [pushLiteral]
    //
    // On stack, before: ...
    // On stack, after: value, ...
    //
    // Pushes a value onto the stack. This operation prevents
    // the compiler from creating a temporary variable to hold
    // it.
    pushLiteral: function(value) {
      this.pushStackLiteral(value);
    },

    // [pushProgram]
    //
    // On stack, before: ...
    // On stack, after: program(guid), ...
    //
    // Push a program expression onto the stack. This takes
    // a compile-time guid and converts it into a runtime-accessible
    // expression.
    pushProgram: function(guid) {
      if (guid != null) {
        this.pushStackLiteral(this.programExpression(guid));
      } else {
        this.pushStackLiteral(null);
      }
    },

    // [invokeHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // Pops off the helper's parameters, invokes the helper,
    // and pushes the helper's return value onto the stack.
    //
    // If the helper is not found, `helperMissing` is called.
    invokeHelper: function(paramSize, name, isRoot) {
      this.context.aliases.helperMissing = 'helpers.helperMissing';
      this.useRegister('helper');

      var helper = this.lastHelper = this.setupHelper(paramSize, name, true);
      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');

      var lookup = 'helper = ' + helper.name + ' || ' + nonHelper;
      if (helper.paramsInit) {
        lookup += ',' + helper.paramsInit;
      }

      this.push(
        '('
          + lookup
          + ',helper '
            + '? helper.call(' + helper.callParams + ') '
            + ': helperMissing.call(' + helper.helperMissingParams + '))');

      // Always flush subexpressions. This is both to prevent the compounding size issue that
      // occurs when the code has to be duplicated for inlining and also to prevent errors
      // due to the incorrect options object being passed due to the shared register.
      if (!isRoot) {
        this.flushInline();
      }
    },

    // [invokeKnownHelper]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of helper invocation
    //
    // This operation is used when the helper is known to exist,
    // so a `helperMissing` fallback is not required.
    invokeKnownHelper: function(paramSize, name) {
      var helper = this.setupHelper(paramSize, name);
      this.push(helper.name + ".call(" + helper.callParams + ")");
    },

    // [invokeAmbiguous]
    //
    // On stack, before: hash, inverse, program, params..., ...
    // On stack, after: result of disambiguation
    //
    // This operation is used when an expression like `{{foo}}`
    // is provided, but we don't know at compile-time whether it
    // is a helper or a path.
    //
    // This operation emits more code than the other options,
    // and can be avoided by passing the `knownHelpers` and
    // `knownHelpersOnly` flags at compile-time.
    invokeAmbiguous: function(name, helperCall) {
      this.context.aliases.functionType = '"function"';
      this.useRegister('helper');

      this.emptyHash();
      var helper = this.setupHelper(0, name, helperCall);

      var helperName = this.lastHelper = this.nameLookup('helpers', name, 'helper');

      var nonHelper = this.nameLookup('depth' + this.lastContext, name, 'context');
      var nextStack = this.nextStack();

      if (helper.paramsInit) {
        this.pushSource(helper.paramsInit);
      }
      this.pushSource('if (helper = ' + helperName + ') { ' + nextStack + ' = helper.call(' + helper.callParams + '); }');
      this.pushSource('else { helper = ' + nonHelper + '; ' + nextStack + ' = typeof helper === functionType ? helper.call(' + helper.callParams + ') : helper; }');
    },

    // [invokePartial]
    //
    // On stack, before: context, ...
    // On stack after: result of partial invocation
    //
    // This operation pops off a context, invokes a partial with that context,
    // and pushes the result of the invocation back.
    invokePartial: function(name) {
      var params = [this.nameLookup('partials', name, 'partial'), "'" + name + "'", this.popStack(), "helpers", "partials"];

      if (this.options.data) {
        params.push("data");
      }

      this.context.aliases.self = "this";
      this.push("self.invokePartial(" + params.join(", ") + ")");
    },

    // [assignToHash]
    //
    // On stack, before: value, hash, ...
    // On stack, after: hash, ...
    //
    // Pops a value and hash off the stack, assigns `hash[key] = value`
    // and pushes the hash back onto the stack.
    assignToHash: function(key) {
      var value = this.popStack(),
          context,
          type;

      if (this.options.stringParams) {
        type = this.popStack();
        context = this.popStack();
      }

      var hash = this.hash;
      if (context) {
        hash.contexts.push("'" + key + "': " + context);
      }
      if (type) {
        hash.types.push("'" + key + "': " + type);
      }
      hash.values.push("'" + key + "': (" + value + ")");
    },

    // HELPERS

    compiler: JavaScriptCompiler,

    compileChildren: function(environment, options) {
      var children = environment.children, child, compiler;

      for(var i=0, l=children.length; i<l; i++) {
        child = children[i];
        compiler = new this.compiler();

        var index = this.matchExistingProgram(child);

        if (index == null) {
          this.context.programs.push('');     // Placeholder to prevent name conflicts for nested children
          index = this.context.programs.length;
          child.index = index;
          child.name = 'program' + index;
          this.context.programs[index] = compiler.compile(child, options, this.context);
          this.context.environments[index] = child;
        } else {
          child.index = index;
          child.name = 'program' + index;
        }
      }
    },
    matchExistingProgram: function(child) {
      for (var i = 0, len = this.context.environments.length; i < len; i++) {
        var environment = this.context.environments[i];
        if (environment && environment.equals(child)) {
          return i;
        }
      }
    },

    programExpression: function(guid) {
      this.context.aliases.self = "this";

      if(guid == null) {
        return "self.noop";
      }

      var child = this.environment.children[guid],
          depths = child.depths.list, depth;

      var programParams = [child.index, child.name, "data"];

      for(var i=0, l = depths.length; i<l; i++) {
        depth = depths[i];

        if(depth === 1) { programParams.push("depth0"); }
        else { programParams.push("depth" + (depth - 1)); }
      }

      return (depths.length === 0 ? "self.program(" : "self.programWithDepth(") + programParams.join(", ") + ")";
    },

    register: function(name, val) {
      this.useRegister(name);
      this.pushSource(name + " = " + val + ";");
    },

    useRegister: function(name) {
      if(!this.registers[name]) {
        this.registers[name] = true;
        this.registers.list.push(name);
      }
    },

    pushStackLiteral: function(item) {
      return this.push(new Literal(item));
    },

    pushSource: function(source) {
      if (this.pendingContent) {
        this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent)));
        this.pendingContent = undefined;
      }

      if (source) {
        this.source.push(source);
      }
    },

    pushStack: function(item) {
      this.flushInline();

      var stack = this.incrStack();
      if (item) {
        this.pushSource(stack + " = " + item + ";");
      }
      this.compileStack.push(stack);
      return stack;
    },

    replaceStack: function(callback) {
      var prefix = '',
          inline = this.isInline(),
          stack,
          createdStack,
          usedLiteral;

      // If we are currently inline then we want to merge the inline statement into the
      // replacement statement via ','
      if (inline) {
        var top = this.popStack(true);

        if (top instanceof Literal) {
          // Literals do not need to be inlined
          stack = top.value;
          usedLiteral = true;
        } else {
          // Get or create the current stack name for use by the inline
          createdStack = !this.stackSlot;
          var name = !createdStack ? this.topStackName() : this.incrStack();

          prefix = '(' + this.push(name) + ' = ' + top + '),';
          stack = this.topStack();
        }
      } else {
        stack = this.topStack();
      }

      var item = callback.call(this, stack);

      if (inline) {
        if (!usedLiteral) {
          this.popStack();
        }
        if (createdStack) {
          this.stackSlot--;
        }
        this.push('(' + prefix + item + ')');
      } else {
        // Prevent modification of the context depth variable. Through replaceStack
        if (!/^stack/.test(stack)) {
          stack = this.nextStack();
        }

        this.pushSource(stack + " = (" + prefix + item + ");");
      }
      return stack;
    },

    nextStack: function() {
      return this.pushStack();
    },

    incrStack: function() {
      this.stackSlot++;
      if(this.stackSlot > this.stackVars.length) { this.stackVars.push("stack" + this.stackSlot); }
      return this.topStackName();
    },
    topStackName: function() {
      return "stack" + this.stackSlot;
    },
    flushInline: function() {
      var inlineStack = this.inlineStack;
      if (inlineStack.length) {
        this.inlineStack = [];
        for (var i = 0, len = inlineStack.length; i < len; i++) {
          var entry = inlineStack[i];
          if (entry instanceof Literal) {
            this.compileStack.push(entry);
          } else {
            this.pushStack(entry);
          }
        }
      }
    },
    isInline: function() {
      return this.inlineStack.length;
    },

    popStack: function(wrapped) {
      var inline = this.isInline(),
          item = (inline ? this.inlineStack : this.compileStack).pop();

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        if (!inline) {
          if (!this.stackSlot) {
            throw new Exception('Invalid stack pop');
          }
          this.stackSlot--;
        }
        return item;
      }
    },

    topStack: function(wrapped) {
      var stack = (this.isInline() ? this.inlineStack : this.compileStack),
          item = stack[stack.length - 1];

      if (!wrapped && (item instanceof Literal)) {
        return item.value;
      } else {
        return item;
      }
    },

    quotedString: function(str) {
      return '"' + str
        .replace(/\\/g, '\\\\')
        .replace(/"/g, '\\"')
        .replace(/\n/g, '\\n')
        .replace(/\r/g, '\\r')
        .replace(/\u2028/g, '\\u2028')   // Per Ecma-262 7.3 + 7.8.4
        .replace(/\u2029/g, '\\u2029') + '"';
    },

    setupHelper: function(paramSize, name, missingParams) {
      var params = [],
          paramsInit = this.setupParams(paramSize, params, missingParams);
      var foundHelper = this.nameLookup('helpers', name, 'helper');

      return {
        params: params,
        paramsInit: paramsInit,
        name: foundHelper,
        callParams: ["depth0"].concat(params).join(", "),
        helperMissingParams: missingParams && ["depth0", this.quotedString(name)].concat(params).join(", ")
      };
    },

    setupOptions: function(paramSize, params) {
      var options = [], contexts = [], types = [], param, inverse, program;

      options.push("hash:" + this.popStack());

      if (this.options.stringParams) {
        options.push("hashTypes:" + this.popStack());
        options.push("hashContexts:" + this.popStack());
      }

      inverse = this.popStack();
      program = this.popStack();

      // Avoid setting fn and inverse if neither are set. This allows
      // helpers to do a check for `if (options.fn)`
      if (program || inverse) {
        if (!program) {
          this.context.aliases.self = "this";
          program = "self.noop";
        }

        if (!inverse) {
          this.context.aliases.self = "this";
          inverse = "self.noop";
        }

        options.push("inverse:" + inverse);
        options.push("fn:" + program);
      }

      for(var i=0; i<paramSize; i++) {
        param = this.popStack();
        params.push(param);

        if(this.options.stringParams) {
          types.push(this.popStack());
          contexts.push(this.popStack());
        }
      }

      if (this.options.stringParams) {
        options.push("contexts:[" + contexts.join(",") + "]");
        options.push("types:[" + types.join(",") + "]");
      }

      if(this.options.data) {
        options.push("data:data");
      }

      return options;
    },

    // the params and contexts arguments are passed in arrays
    // to fill in
    setupParams: function(paramSize, params, useRegister) {
      var options = '{' + this.setupOptions(paramSize, params).join(',') + '}';

      if (useRegister) {
        this.useRegister('options');
        params.push('options');
        return 'options=' + options;
      } else {
        params.push(options);
        return '';
      }
    }
  };

  var reservedWords = (
    "break else new var" +
    " case finally return void" +
    " catch for switch while" +
    " continue function this with" +
    " default if throw" +
    " delete in try" +
    " do instanceof typeof" +
    " abstract enum int short" +
    " boolean export interface static" +
    " byte extends long super" +
    " char final native synchronized" +
    " class float package throws" +
    " const goto private transient" +
    " debugger implements protected volatile" +
    " double import public let yield"
  ).split(" ");

  var compilerWords = JavaScriptCompiler.RESERVED_WORDS = {};

  for(var i=0, l=reservedWords.length; i<l; i++) {
    compilerWords[reservedWords[i]] = true;
  }

  JavaScriptCompiler.isValidJavaScriptVariableName = function(name) {
    if(!JavaScriptCompiler.RESERVED_WORDS[name] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(name)) {
      return true;
    }
    return false;
  };

  __exports__ = JavaScriptCompiler;
  return __exports__;
})(__module2__, __module5__);

// handlebars.js
var __module0__ = (function(__dependency1__, __dependency2__, __dependency3__, __dependency4__, __dependency5__) {
  "use strict";
  var __exports__;
  /*globals Handlebars: true */
  var Handlebars = __dependency1__;

  // Compiler imports
  var AST = __dependency2__;
  var Parser = __dependency3__.parser;
  var parse = __dependency3__.parse;
  var Compiler = __dependency4__.Compiler;
  var compile = __dependency4__.compile;
  var precompile = __dependency4__.precompile;
  var JavaScriptCompiler = __dependency5__;

  var _create = Handlebars.create;
  var create = function() {
    var hb = _create();

    hb.compile = function(input, options) {
      return compile(input, options, hb);
    };
    hb.precompile = function (input, options) {
      return precompile(input, options, hb);
    };

    hb.AST = AST;
    hb.Compiler = Compiler;
    hb.JavaScriptCompiler = JavaScriptCompiler;
    hb.Parser = Parser;
    hb.parse = parse;

    return hb;
  };

  Handlebars = create();
  Handlebars.create = create;

  __exports__ = Handlebars;
  return __exports__;
})(__module1__, __module7__, __module8__, __module10__, __module11__);

  return __module0__;
})();
;Tooltip = null;

var nugetPackageManager = (function (self) {
	var _loadingPackage, _loadingVersion, _downloadedVersionId, _currentPackages = [], _packageVersions = {};
	var _searchTimeout = null, _requestDate, _isLoaded = false, _mode = 'desktop', _versions,
	    _onPackageSaved, _onClear,_keyPressDelayTimeout;

	self.init = function (versions, opts) {
		_versions = versions;
		_isLoaded = false;
		opts = $.extend({}, opts);
		_mode = (opts && opts.mode) ? opts.mode : 'desktop';
		_onPackageSaved = opts.onPackageSaved || false;
		_onClear = opts.onClear || false;
		if (_mode == 'desktop') {
			$('body').click(function () { self.setAutoComplete(null); });
			$('body').on('click', '#menu', function () { return false; });

			$('body').on('keyup', ".nuget-panel .new-package", function () { self.setAutoComplete($(this).val()); });
			if (typeof opts.ignoreClick != "boolean" || !opts.ignoreClick)
				$('body').on('click', ".nuget-panel .new-package", function () {
					self.setAutoComplete($(this).val());
					return false;
				});

			/*.change(function () {
                console.log('change', $(this).val());
                setAutoComplete($(this).val());
            })*/;

			$('body').on('click', '.nuget-panel .add-package', function () {
				$('.nuget-panel').addClass('hide-link').removeClass('hide-input');
				$(".nuget-panel .new-package").val('');
			});

			$('body').on('click', '.delete-package', function () {
				var versionId = $(this).closest('li').attr('version-id');
				self.removePackage(versionId);
				collaboration.nugetPackagesChanged(versionId, "remove");
			});
			$('body').on('click', '.version', function () { self.addPackage($(this).attr('package-id'), $(this).attr('version-name')); });
		}

		//Initial packages
		if (_versions && _versions.length > 0) {

			//Check loading packages
			var htmlItems = [], versionIds = [];

			for (var i = 0; i < _versions.length; i++) {
				var version = _versions[i];

				if (!version.IsOnDisk) {
					versionIds.push(version.Id);

					htmlItems.push('<div class="package-loading"><b>' + version.Label + '</b><div class="progress progress-striped" version-id="' + version.Id + '"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="sr-only1">0%</span></div></div></div>');
				}
			}


			//If there are loading packages
			if (htmlItems.length > 0) {

				if (htmlItems.length == 1) $('#preload-dialog .modal-title').text('Loading package and dependencies');
				else $('#preload-dialog .modal-title').text('Loading packages and dependencies');

				$('#preload-dialog .modal-body').html(htmlItems.join('<br/>'));

				var requestDate = new Date(), isError = false;
				var threads = htmlItems.length;

				$.ajax({
					url: '/NuGetPackage/DownloadMissingPackages',
					data: JSON.stringify({ versionIds: versionIds }),
					type: 'POST',
					dataType: 'json',
					contentType: "application/json; charset=utf-8",
					error: function () {
						isError = true;

						//$('#preload-dialog .package-loading .progress').remove();
						$('#preload-dialog .package-loading').append('<p class="error">Operation failed. Please try again or report this to support.</p>');
					}
				});

				function packageProgress() {
					var status = null;
					$.ajax({
						url: '/NuGetPackage/GetDownloadStatuses',
						data: JSON.stringify({ versionIds: versionIds }),
						type: 'POST',
						dataType: 'json',
						contentType: "application/json; charset=utf-8",
						success: function (resp) {
							var completedCnt = 0;
							for (var i in resp.downloadInfo) {
								var obj = resp.downloadInfo[i];

								var progress = $('#preload-dialog .progress[version-id=' + obj.versionId + ']');

								$('.progress-bar', progress).css('width', obj.downloadingPercentage + '%');
								$('.sr-only1', progress).text(obj.downloadingPercentage + '%');

								if (obj.completed) {
									completedCnt++;

									if (completedCnt >= threads) {

										setTimeout(function () {
											$('#preload-dialog').modal("hide");
										}, 1000);

										self.render();

										_isLoaded = true;

										return;
									}
								}
							}

							var responseDate = new Date();
							var diffMs = (requestDate - responseDate);
							var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

							if (diffMins < 2 && !isError) {
								setTimeout(packageProgress, 500);
							}

							if (isError) {
								setTimeout(function () { $('#preload-dialog').modal("hide"); }, 3000);
							}
						},
						error: function () {
							setTimeout(function () { $('#preload-dialog').modal("hide"); }, 3000);
						},
						complete: function () {
						}
					});
				}

				setTimeout(function () { packageProgress(); }, 1000);

				$('#preload-dialog').modal('show');
			}
			else {
				_isLoaded = true;
				self.render();
			}
		}
		else {
			if (_mode == 'mobile')
				$('#nuget .nuget-packages').append('<b>None</b>');
			_isLoaded = true;
		}
	};

	self.isLoaded = function (fl) {
		if (typeof fl == 'boolean')
			_isLoaded = fl;
		return _isLoaded;
	};

	self.render = function () {
		if (_mode == 'desktop') {
			for (var i in _versions) {
				var version = _versions[i];
				var obj = $('.nuget-panel .nuget-packages').append('<li version-id="' + version.Id + '" title="<span class=\'package-tooltip-title\'>' + _.escape(version.Label) + '</span><br/>' + _.escape(version.PackageDescription) + '"><div style="display: inline-block;"><div class="package-name" package-id="' + version.PackageNuGetId + '">' + _.escape(version.Label) + '</div>&nbsp;<a href="javascript:void(0);" class="delete-package"><i class="ui-icon ui-icon-closethick"></i></a></div></li>');

				$.fn.tooltip = $.ui.tooltip;
				$(obj).tooltip({
					content: function () {
						return $(this).prop('title');
					},
					position: {
						my: "left top",
						at: "right top"
					}
				});
			}

			if ($('.nuget-panel .nuget-packages .package').length < 3) {
				if ($('.nuget-panel .nuget-packages .package').length <= 0)
					$('.nuget-panel').addClass('hide-link').removeClass('hide-input');
				else
					$('.nuget-panel').addClass('hide-input').removeClass('hide-link');
			}
			else {
				$('.nuget-panel').addClass('hide-input').addClass('hide-link');
			}
		}
		else if (_mode == 'widget') {
			for (var i in _versions) {
				var version = _versions[i];

				var obj = $('#nuget .nuget-packages').append('<li version-id="' + version.Id + '" title="<span class=\'package-tooltip-title\'>' + version.Label + '</span><br/>' + version.PackageDescription + '"><div style="display: inline-block;"><div class="package-name" package-id="' + version.PackageNuGetId + '">' + version.Label + '</div></div></li>');

				$.fn.tooltip = $.ui.tooltip;
				$(obj).tooltip({
					content: function () {
						return $(this).prop('title');
					},
					position: {
						my: "right top",
						at: "right top"
					}
				});
			}
		}
		else if (_mode == 'mobile') {
			for (var i in _versions) {
				var version = _versions[i];
				$('#nuget .nuget-packages').append('<div class="mobile-package"><span class="name">' + version.Label + '</span><p class="description">' + version.PackageDescription + '</p></div>');//'<div data-role="collapsible" data-collapsed="true"><h3>' + version.Label + '</h3><p>' + version.PackageDescription + '</p></div>');
			}

			if (_versions.length <= 0)
				$('#nuget .nuget-packages').append('<b>None</b>');
		}
	};

	self.removePackage = function (versionId) {
		//var self = $(this), li = self.closest('li'), versionId = li.attr('version-id');
		var li = $('.delete-package').closest('li[version-id="' + versionId + '"]');

		$('#NuGetPackageVersionIds').val(function (i, val) {

			var arr = val.split(';');
			var ind = arr.indexOf(versionId);
			if (ind > -1)
				arr.splice(ind, 1);

			return arr.join(';');
		});

		li.remove();

		fiddle.checkSyntax();

		if ($('.nuget-panel .nuget-packages .package').length <= 0) {
			$('.nuget-panel').addClass('hide-link').removeClass('hide-input');
			$(".nuget-panel .new-package").val('').focus();
		} else {
			$('.nuget-panel').addClass('hide-input').removeClass('hide-link');
		}
	};

	self.savePackage = function (versionInfo) {
		$(".nuget-panel .new-package").val('');
		self.setAutoComplete(null);

		var obj = $('.nuget-panel .nuget-packages').append('<li version-id="' + versionInfo.Id + '" title="<span class=\'package-tooltip-title\'>' + versionInfo.Label + '</span><br/>' + versionInfo.PackageDescription + '"><div style="display: inline-block;"><div class="package-name" package-id="' + versionInfo.PackageNuGetId + '">' + versionInfo.Label + '</div>&nbsp;<a href="#" class="delete-package"><i class="ui-icon ui-icon-closethick"></i></a></div></li>');

		$.fn.tooltip = $.ui.tooltip;
		$(obj).tooltip({
			content: function () {
				return $(this).prop('title');
			},
			position: {
				my: "left top",
				at: "right top"
			}
		});

		$('#NuGetPackageVersionIds').val(function (i, val) {
			return val + (val ? ';' : '') + versionInfo.Id;
		});

		fiddle.checkSyntax();

		if ($('.nuget-panel .nuget-packages .package').length < 3) {
			$('.nuget-panel').addClass('hide-input').removeClass('hide-link');
		}
		else {
			$('.nuget-panel').addClass('hide-input').addClass('hide-link');
		}

		if (typeof _onPackageSaved == "function")
			_onPackageSaved(versionInfo);

	};

	self.addPackage = function (packageId, versionName) {

		var elem = $.grep(_packageVersions[packageId].versions, function (item) { return item.Name == versionName; });
		if (!elem || elem.length != 1)
			throw new Error("Incorrect version name");

		if (_loadingPackage && _loadingPackage.PackageId && _loadingPackage.PackageId == packageId)
			throw new Error("Package is already loading");

		var version = elem[0], isError = false;

		if (version.IsOnDisk) {

			$.ajax({
				url: '/NuGetPackage/GetPackageVersionInfo?packageId=' + packageId + '&versionName=' + version.Name,
				type: 'GET',
				dataType: 'json',
				success: function (resp) {
					if (resp.status == 'ok') {
						self.savePackage(resp.versionInfo);
						collaboration.nugetPackagesChanged(resp.versionInfo, "add");
					}
				}
			});

		}
		else {
			var elem = $.grep(_currentPackages, function (item) { return item.PackageId == packageId; });
			if (!elem || elem.length != 1)
				throw new Error("Incorrect package ID");

			_loadingPackage = elem[0];
			_loadingVersion = version.Name;


			$('#preload-dialog .modal-title').text('Loading package and dependencies');
			$('#preload-dialog .modal-body').html('<div class="package-loading"><b>' + _loadingPackage.Label + ' ' + version.Label + '</b><div class="progress progress-striped"><div class="progress-bar progress-bar-info" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%"><span class="sr-only1">0%</span></div></div></div>');

			$("#preload-dialog").modal('show');


			var requestDate = new Date();

			$.ajax({
				url: '/NuGetPackage/DownloadPackage',
				data: { packageId: _loadingPackage.PackageId, versionName: _loadingVersion },
				type: 'POST',
				dataType: 'json',
				error: function () {
					isError = true;

					//$('#preload-dialog .package-loading .progress').remove();
					$('#preload-dialog .package-loading').append('<p class="error">Operation failed. Please try again or report this to support.</p>');
				}
			});

			function progressCallback() {
				var status = null;
				$.ajax({
					url: '/NuGetPackage/GetDownloadStatus?packageId=' + _loadingPackage.PackageId + '&versionName=' + _loadingVersion,
					type: 'GET',
					dataType: 'json',
					success: function (obj) {
						var progress = $("#preload-dialog .progress");

						$('.progress-bar', progress).css('width', obj.downloadingPercentage + '%');
						$('.sr-only1', progress).text(obj.downloadingPercentage + '%');

						if (obj.completed) {
							setTimeout(function () {
								self.savePackage(obj.version);
								collaboration.nugetPackagesChanged(obj.version, "add");

								delete _packageVersions[_loadingPackage.PackageId];
								_loadingPackage = null;

								$('#preload-dialog').modal("hide");
							}, 1000);
						}
						else {

							var responseDate = new Date();
							var diffMs = (requestDate - responseDate);
							var diffMins = Math.round(((diffMs % 86400000) % 3600000) / 60000);

							if (diffMins < 2 && !isError) {
								setTimeout(function () { progressCallback(); }, 500);
							}

							if (isError) {
								_loadingPackage = null;
								setTimeout(function () { $('#preload-dialog').modal("hide"); }, 3000);
							}
						}
					},
					error: function () {
						setTimeout(function () { $('#preload-dialog').modal("hide"); }, 3000);
					},
					complete: function () {
					}
				});
			}

			setTimeout(function () { progressCallback(); }, 1000);
		}
	};

	self.clear = function (checkSyntax) {
		$('#NuGetPackageVersionIds').val('');
		$('.nuget-panel').addClass('hide-link').removeClass('hide-input');
		$(".nuget-panel .new-package").val('').focus();

		_versions = [];

		if (checkSyntax)
			fiddle.checkSyntax();

		if (typeof _onClear == "function")
			_onClear();
	};

	self.setAutoComplete = function (text) {
		if (!text || text == '') {
			_requestDate = new Date();
			$('#menu').remove();
			$('.nuget-search-spinner').hide();
		} else {
			var curDate = new Date();
			_requestDate = curDate;

			if (_keyPressDelayTimeout) {
				window.clearTimeout(_keyPressDelayTimeout);
				_keyPressDelayTimeout = null;
				//console.log("NuGet. cancelled last timeout");
			}

			var doNuGetSearch = function () {
				$('.nuget-search-spinner').show();
				//console.log("NuGet. Executing a new request for " + text);
				$.ajax({
					url: "/NuGetPackage/GetAutoCompleteItems",
					type: 'GET',
					dataType: "json",
					data: { keyword: text },
					success: function (data) {

						if (curDate != _requestDate) {
							return;
						}

						var curPackages = [];

						$('.nuget-panel .nuget-packages .package-name').each(function () { curPackages.push($(this).attr('package-id')); });

						var filteredItems = $.grep(data, function (item1) {
							return $.grep(curPackages, function (item2) {
								return item2 == item1.PackageId;
							}).length <= 0;
						});

						for (var i in filteredItems)
							filteredItems[i].value = filteredItems[i].Label;

						_currentPackages = filteredItems;

						$('#menu').remove();

						var htmlItems = [];

						$.each(filteredItems, function (i) {
							htmlItems.push('<li title="' + _.escape(filteredItems[i].Description) + '"><a href="#" package-id="' + filteredItems[i].PackageId + '">' + filteredItems[i].Label + '</a><ul><li><div style="width: 150px;text-align: center;font-size: 12px;">Versions loading...<img width="130px" src="/content/images/ajax-loader.gif" /></div></li></ul></li>');
						});

						if (htmlItems.length <= 0) {
							htmlItems.push('<li style="text-align: center;font-size: x-small;padding: 0 20px;">No items found.</li>');
						}

						$('body').append('<ul id="menu">' + htmlItems.join('') + '</ul>');

						$("#menu").menu();

						var offset = $(".new-package").offset();
						offset.top += $(".new-package").height() + 5;
						$("#menu").offset(offset);

						$.fn.tooltip = $.ui.tooltip;
						$('#menu > li').tooltip({
							content: function () {
								return $(this).prop('title');
							},
							position: {
								my: "left top",
								at: "right top"
							},
							show: {
								delay: 30
							}

						});

						var hoverTimeout = null;

						$('#menu > li > a').mouseenter(function () {
							var obj = $(this);


							var packageId = $(obj).attr('package-id');

							$.fn.tooltip = $.ui.tooltip;

							$('#menu > .ui-menu-item').not(obj).tooltip('close');

							var ul = $(obj).next('ul');

							if (!_packageVersions[packageId]) {
								clearTimeout(hoverTimeout);
								hoverTimeout = setTimeout(function () {
									$('ul', obj).html('<li><div style="text-align: center;">Versions loading...<img src="/content/images/ajax-loader.gif" /></div></li>');
									setTimeout(ajustTooltipOffset, 50);
									setTimeout(function () {
										$.ajax({
											url: '/NuGetPackage/GetpackageVersions?packageId=' + packageId,
											type: 'GET',
											dataType: 'json',
											success: function (resp) {
												var versions = '';

												for (var i in resp) {
													var version = resp[i];

													/*var flags = [];
		
													if (version.IsLatest)
														flags.push('latest');
		
													if (version.IsRelease)
														flags.push('stable');*/

													var title = version.Label; // + (flags.length > 0 ? ' (' + flags.join(', ') + ')' : '');

													versions += '<li class="ui-menu-item" role="presentation"><a href="javascript:void(0);" package-id="' + packageId + '" version-name="' + version.Name + '" class="ui-corner-all version">' + title + (version.IsOnDisk ? '<i class="glyphicon glyphicon-ok-sign" title="On disk"></i>' : '') + '</a></li>';
												}

												_packageVersions[packageId] = {
													versions: resp,
													html: versions
												};


												ul.html(versions).css("overflow-y", "auto").css("overflow-x", "hidden");
												setTimeout(ajustTooltipOffset, 100);
											},
										});
									}, 3000);
								}, 100);
							} else {
								ul.html(_packageVersions[packageId].html).css("overflow-y", "auto").css("overflow-x", "hidden");
								setTimeout(ajustTooltipOffset, 100);
							}
						});

						$('#menu > li > a').mouseleave(function () {
							clearTimeout(hoverTimeout);
						});
					},

					complete: function () {
						if (_requestDate == curDate) {
							$('.nuget-search-spinner').hide();
						}
					}
				});
			};

			_keyPressDelayTimeout = window.setTimeout(doNuGetSearch, 500);
		}
	};

	return self;
})({});

function ajustTooltipOffset(event) {
	if ($("#menu").length > 0 && $("#" + $("#menu").attr("aria-activedescendant")).next().length > 0 && $(".ui-tooltip").length > 0) {
		//$(".ui-tooltip").offset({ left: event.pageX + 15, top:event.pageY + 15 });
		var submenu = $("#" + $("#menu").attr("aria-activedescendant")).next();

		$(".ui-tooltip").last().offset({
			left: $("#menu").offset().left + $("#menu").width() + submenu.width() + 9
		});

		//console.log("Submenu offset left:" + submenu.offset().left + " width:" + submenu.width());
		//console.log("ajustTooltipOffset - true");
	} else {
		//console.log("ajustTooltipOffset - false");
	}
}

//$("body").on("mousemove", ajustTooltipOffset);
;var projectTypeLayouts = {
	'Console': [],
	'Script': [],
	'Mvc': ['sections', 'tabs'],
	'Nancy': ['sections', 'tabs']
};

var layoutScripts = {
	'Console': function() {
		$(".layout-container").splitter({
			type: "h",
			minTop: 200,
			minBottom: 140,
			sizeBottom: 200,
			anchorToWindow: true,
			accessKey: "T"
		});

		$(".output-container").splitter({
			type: "v",
			sizeRight: 200,
			minLeft: 100,
			minRight: 100,
			maxRight: 300,
			accessKey: "R"
		});
	},
	'Script': function () {
		$(".layout-container").splitter({
			type: "h",
			minTop: 200,
			minBottom: 140,
			sizeBottom: 200,
			anchorToWindow: true,
			accessKey: "T"
		});

		$(".output-container").splitter({
			type: "v",
			sizeRight: 200,
			minLeft: 100,
			minRight: 100,
			maxRight: 300,
			accessKey: "R"
		});
	},
	'Mvc_sections': function () {
		$(".layout-container").splitter({
			type: "h",
			minTop: 300,
			minBottom: 140,
			sizeBottom: 140,
			anchorToWindow: true
		});

		$(".code-container").splitter({
			type: "h",
			minTop: 150,
			minBottom: 250,
		});

		$(".top-code-container").splitter({
			type: "v",
			minLeft: 100,
			minRight: 100
		});

		$(".bottom-code-container").splitter({
			type: "v",
			minLeft: 100,
			minRight: 100
		});

		$(".output-container").splitter({
			type: "v",
			sizeRight: 200,
			minLeft: 100,
			minRight: 100,
			maxRight: 300
		});
	},
	'Mvc_tabs': function () {
		$(".layout-container").splitter({
			type: "h",
			minTop: 400,
			minBottom: 140,
			sizeBottom: 140,
			anchorToWindow: true
		});

		$(".code-container").splitter({
			type: "v",
			minLeft: 100,
			minRight: 100
		});

		$(".output-container").splitter({
			type: "v",
			sizeRight: 200,
			minLeft: 100,
			minRight: 100,
			maxRight: 200
		});
	},
	'Nancy_sections': function () {
		$(".layout-container").splitter({
			type: "h",
			minTop: 400,
			minBottom: 140,
			sizeBottom: 140,
			anchorToWindow: true
		});

		$(".code-container").splitter({
			type: "h",
			minTop: 200,
			minBottom: 200,
		});

		$(".top-code-container").splitter({
			type: "v",
			minLeft: 100,
			minRight: 100
		});

		$(".bottom-code-container").splitter({
			type: "v",
			minLeft: 100,
			minRight: 100
		});

		$(".output-container").splitter({
			type: "v",
			sizeRight: 200,
			minLeft: 100,
			minRight: 100,
			maxRight: 300
		});
	},
	'Nancy_tabs': function () {
		$(".layout-container").splitter({
			type: "h",
			minTop: 400,
			minBottom: 140,
			sizeBottom: 140,
			anchorToWindow: true
		});

		$(".code-container").splitter({
			type: "v",
			minLeft: 100,
			minRight: 100
		});

		$(".output-container").splitter({
			type: "v",
			sizeRight: 200,
			minLeft: 100,
			minRight: 100,
			maxRight: 300
		});
	}
};

// Main Fiddle model
function Fiddle() {
	var self = this;

	// jQuery selector for DOM container
	var _$container = '.content', _$sidebar = '.sidebar';

	// Compiled templates
	var _mainTmpl, _sidebarTmpl;

	// Editors (CodeMirror)
	var _editors = {};

	var _clearCodeBlocks = false;

	// Initial model
	var _model = {};
	var _isInUserFiddles = false;
	var _default = {
		fiddleId: null,
		language: 'CSharp',
		projectType: 'Console',
		compiler: 'Net45',
		layoutType: null,
		codeBlocks: null,
		isAutoRun: true,
		codeTheme: 'main',
		ownerId: null,
		ownerName: null,
		originalCodeBlocks: null,
		readOnly: false,
	};

	function htmlEncode(input) {
		return input.replace(/&/g, '&amp;')
		  .replace(/</g, '&lt;')
		  .replace(/>/g, '&gt;')
		  .replace(/\//g, '&#x2F;')
		  .replace(/'/g, '&#x27;')
		  .replace(/"/g, '&#x22;');
	}

	function htmlDecode(input) {
		return input.replace(/&amp;/g, '&')
		  .replace(/&lt;/g, '<')
		  .replace(/&gt;/g, '>')
		  .replace(/&#x2F;/g, '/')
		  .replace(/&#x27;/g, "'")
		  .replace(/&#x22;/g, '"');
	}

	function getTemplateSelector(prefix) {
		var arr = [prefix, _model.projectType];

		if (_model.layoutType)
			arr.push(_model.layoutType);

		arr.push('template');

		return ('#' + arr.join('-')).toLowerCase();
	}

	function getMainTemplateSelector() {
		return getTemplateSelector('main');
	}

	function getSidebarTemplateSelector() {
		return getTemplateSelector('sidebar');
	}

	function getProjectTypeId(projectType) {
		return ProjectTypes[projectType];
	} 
	
	function getLanguageId(language) {
		return LanguageIds[language];
	}
	
	function getCompilerId(compiler) {
		return Compilers[compiler];
	}

	self.isInUserFiddles = function(val) {
		if (val != null) {
			_isInUserFiddles = val;
			return;
		}
		return _isInUserFiddles;
	};


	// Init fiddle
	self.init = function (opts) {
		// Destroy old if exist
		self.destroy();

		// Merge params
		$.extend(_model, _default, opts);
		
		if (self.getProjectType() == 'Mvc' || self.getProjectType() == 'Nancy')
			$('#widget-builder').hide();
	};

	self.getFiddleId = function () {
		return _model.fiddleId;
	};

	self.setFiddleId = function (fiddleId, pushState) {
		_model.fiddleId = fiddleId;
		$('#OriginalFiddleId').val(_model.fiddleId);
		if (pushState) {
			if (typeof window.history == "object") {
				if (typeof window.history.pushState == "function") {
					window.history.pushState(null, null, "/" + (fiddleId==null?"":fiddleId));
				}
			}
		}
	};

	self.hasId = function () {
		return _model.fiddleId && _model.fiddleId.length;
	};

	self.getOwnerId = function() {
		return _model.ownerId;
	};

	self.setOwnerName = function (val) {
		_model.ownerName = val;
	};

	self.getOwnerName = function() {
		return _model.ownerName;
	};
	
	self.setOwnerId = function (userId) {
		_model.ownerId = userId;
	};

	self.setLanguage = function (language, isFromCollaboration) {
		isFromCollaboration = typeof isFromCollaboration !== 'undefined' ? isFromCollaboration : false;
		_model.language = language;

		if (collaboration.isEnabled() && isFromCollaboration)
			$('#Language').val(_model.language).change();
	};

	self.getLanguage = function () {
		return _model.language;
	};

	self.setCompiler = function (compiler, isFromCollaboration) {
		isFromCollaboration = typeof isFromCollaboration !== 'undefined' ? isFromCollaboration : false;
		_model.compiler = compiler;

		if (collaboration.isEnabled() && isFromCollaboration)
			$('#Compiler').val(_model.compiler).change();
	};

	self.getCompiler = function () {
		return _model.compiler;
	};

	self.setProjectType = function (projectType, isFromCollaboration) {
		isFromCollaboration = typeof isFromCollaboration !== 'undefined' ? isFromCollaboration : false;
		_model.projectType = projectType;
		if (collaboration.isEnabled() && isFromCollaboration)
			$('#ProjectType').val(_model.projectType).change();

	_model.layoutType = projectTypeLayouts[_model.projectType].length > 0 ? projectTypeLayouts[_model.projectType][0] : null;      
	};

	self.setLayout = function(layoutType, isFromCollaboration) {
		isFromCollaboration = typeof isFromCollaboration !== 'undefined' ? isFromCollaboration : false;
		_model.layoutType = layoutType;

		if (collaboration.isEnabled() && !isFromCollaboration)
			collaboration.optionsChanged({ layoutType: _model.layoutType });
	};

	self.getLayout = function() {
		return _model.layoutType;
	};

	self.clearPackages = function () {
		$('#OriginalNuGetPackageVersionIds').val('');

		nugetPackageManager.clear();
	};

	self.setCodeBlocks = function (codeBlocks, resetOriginal) {

		_model.codeBlocks = codeBlocks;

		if (resetOriginal) {
			if (window.academyCode) {
				_model.originalCodeBlocks = {};
			} else {
				$("input[id*=Original]").val("");
			}
		}

		for (var name in _model.codeBlocks) {

			var txt = _model.codeBlocks[name];
			var eTxt = _.escape(txt);

			$('#' + name).val(txt);
			$('#' + name).html(eTxt);

			if (resetOriginal) {
				if (window.academyCode) {
					_model.originalCodeBlocks[name] = txt;
				} else {
					$('#Original' + name).val(txt);
				}
			}
		}
	};

	self.getCodeBlocks = function () {
		return _model.codeBlocks;
	};

	self.getOriginalCodeBlocks = function() {
		return _model.originalCodeBlocks;
	};

	// Check if code blocks are changed
	self.isCodeBlocksChanged = function () {
		var res = false;
		self.fetchCode();

		for (var name in _model.codeBlocks) {

			var s1 = _.unescape(_model.codeBlocks[name].replace(/\r?\n|\r/g, ''));
			var s2;
			if (env.siteMode == siteModes.full) {
				s2 = _.unescape($('#Original' + name).val().replace(/\r?\n|\r/g, ''));
			} else {
				s2 = _.unescape($('#' + name).val().replace(/\r?\n|\r/g, ''));
			}
			res = s1 != s2;

			if (res) break;
		}

		return res;
	};

	// Set autorun option
	self.setAutoRun = function (isAutoRun, isFromCollaboration) {
		isFromCollaboration = typeof isFromCollaboration !== 'undefined' ? isFromCollaboration : false;
		_model.isAutoRun = isAutoRun;

		if (collaboration.isEnabled() && !isFromCollaboration)
			collaboration.optionsChanged({ isAutorun: isAutoRun });
	};

	self.getAutorun = function () {
		return _model.isAutoRun;
	};

	// Render fiddle
	self.render = function (type, container) {
		_$container = container || _$container;

		// set them to empty array to prevent old data loading
		_editors = {};
		if (type == 'widget') {
			if (_model.projectType == 'Mvc' || _model.projectType == 'Nancy')
				_model.layoutType = 'tabs';

			tmpl = Handlebars.compile($(getTemplateSelector(type)).html());

			$('.widget-content').html(tmpl(_model));

			// Init editors (codemirror)
			_editors = loadEditors('widget', true);
		}
		else if (type == 'mobile') {
			if (_model.projectType == 'Mvc' || _model.projectType == 'Nancy')
				_model.layoutType = 'tabs';

			var tmplName = getTemplateSelector(type);
			var tabs = ['options', 'code-editor', 'run-results'/*, 'share'*/];

			for (var i in tabs) {
				var tabName = tabs[i];

				// Compile template
				tmpl = Handlebars.compile($(tmplName + '_' + tabName).html());

				// Run compiled template and insert results to DOM
				$('#' + tabName + ' [data-role=content]', $(_$container)).html(tmpl(_model));
			}

			$('div[data-role="page"]').trigger('create');

			// Init editors (codemirror)
			_editors = loadEditors('', true);
			
			if (nugetPackageManager.isLoaded())
				nugetPackageManager.render();

		}
		else if (type == 'example') {
			_editors = loadEditors('', true, container);
		}
		else {
			// Compile templates
			_mainTmpl = Handlebars.compile($(getMainTemplateSelector()).html());
			_sidebarTmpl = Handlebars.compile($('#sidebar-template').html());
			
			// Run compiled templates and insert results to DOM
			$(_$container).html(_mainTmpl(_model));
			$(_$sidebar).html(_sidebarTmpl(_model));

			if (nugetPackageManager.isLoaded())
				nugetPackageManager.render();

			// Init layouts (splitter)
			layoutScripts[_model.projectType + (_model.layoutType ? '_' + _model.layoutType : '')]();

			// Init editors (codemirror)
			_editors = loadEditors('', true);
		}

		self.reconfigIndentation();
		self.refreshActionButtons();
		collaboration.reinitialize();
	};
	
	self.getMode = function () {
		var mode = "";

		switch (this.getLanguage()) {
			case "VbNet":
				mode = "vb";
				break;
			case "CSharp":
				mode = "text/x-csharp";
				break;
			case "FSharp":
				mode = "text/x-fsharp";
				break;
		}
		return mode;
	},


	self.reconfigIndentation = function() {
		$.each(_editors, function(i, v) {
			if (_model.language == LanguagesDict[Languages.FSharp]) {
				v.options.indentWithTabs = false;
				v.options.extraKeys.Tab = function (cm) {
					cm.replaceSelection(Array(cm.getOption('indentUnit') + 1).join(" "), "end");
				};
			} else {
				v.options.indentWithTabs = true;
				v.options.extraKeys.Tab = null;
			}
		});
	};

	// Refresh all controls
	self.refresh = function (type) {

		if (!type || type == 'main') {
			// Render all sidebar
			$(_$sidebar).html(_sidebarTmpl(_model));
		}

		for (var name in _editors) {
			var doc = _editors[name].getDoc();
			doc.setValue(_model.codeBlocks[name]);

			if (!window.academyCode) {
				_editors[name].setOption("mode", self.getMode());
			} else {
				var mode = $('#' + name).attr('mode');
				_editors[name].setOption("mode", mode ? mode : CodeRunner.getMode());
			}

			_editors[name].refresh();
		}
		
		self.checkSyntax(true);

		self.reconfigIndentation();
		self.refreshActionButtons();
		collaboration.reinitialize();
	};

	self.getEditors = function () { return _editors; };

	self.getProjectType = function () { return _model.projectType; };

	// Get all code blocks
	self.fetchCode = function (resetId) {
		for (var blockName in _editors) {
			var doc = _editors[blockName].getDoc();
			var text = doc.getValue();
			//var html = $("<div/>").text(text).html();
			
			if (_model.codeBlocks[blockName] != null && (_model.codeBlocks[blockName].replace(/\r?\n|\r/g, '') != text.replace(/\r?\n|\r/g, ''))) {
				if (resetId)
					self.setFiddleId(null);

				$("#" + blockName).empty().append(/*html*/ _.escape(text));
				$("#" + blockName).val(text);
				
				_model.codeBlocks[blockName] = text;
			}
		}
	};

	// Run fiddle code
	self.run = function () {

		if (collaboration.isEnabled())
			collaboration.codeExecuting();

		Terminal.ConsoleInputs = [];
		CodeRunner.addToQueue(true);
	};

	// Run fiddle code with Cache
	self.runUseResultCache = function () {

		if (collaboration.isEnabled())
			collaboration.codeExecuting();

		Terminal.ConsoleInputs = [];
		CodeRunner.addToQueueUseResultCache(true);
	};

	// Check syntax of fiddle's code blocks
	self.checkSyntax = function (force) {

		if (force) {
			clearTimeout(Linter._lintTimer);
			Linter._lintTimer = null;
		}
        for (var name in _editors) {
			// codemirror should be the last parameter as academy uses it and it fails there
            Linter.getSyntaxErrors("", Linter._updateLintingHandler, null, _editors[name]);
        }
	};

	// Save current fiddle's state in session (coockies or localstorage)
	self.saveInSession = function (clearCodeBlocks) {
		//if (!$.cookie)
		//    return;

		if (typeof clearCodeBlocks == 'boolean')
			_clearCodeBlocks = clearCodeBlocks;

		// Save main options
		$.cookie("OriginalFiddleId", _model.fiddleId, { expires: 30 });
		$.cookie("NuGetPackageVersionIds", $("#NuGetPackageVersionIds").val(), { expires: 30 });
		$.cookie("Language", _model.language, { expires: 30 });
		$.cookie("ProjectType", _model.projectType, { expires: 30 });
		$.cookie("IsAutoRun", _model.isAutoRun, { expires: 30 });
		$.cookie("Compiler", _model.compiler, { expires: 30 });

		if (_model.layoutType)
			$.cookie("LayoutType", _model.layoutType, { expires: 30 });

		// Save code blocks
		self.fetchCode();

		for (var blockName in _model.codeBlocks) {
			if (!_clearCodeBlocks) {
				localStorage.removeItem(blockName);
				$.cookie(blockName, "true", { expires: 30 });
				localStorage.setItem(blockName, _model.codeBlocks[blockName]);
			}
			else {
				$.removeCookie(blockName);
				localStorage.removeItem(blockName);
			}
		}

		$.cookie("UseLocalStorage", "true", { expires: 30 });
	};

	// Restore fiddle's code blocks from session (coockies or localstorage)
	self.restoreCodeBlocks = function () {
		if ($.cookie && $.cookie("UseLocalStorage") == "true") {
			$.removeCookie("UseLocalStorage");

			if (_model.fiddleId && _model.fiddleId.length) {
				var blockNames = (_model.projectType == 'Mvc' || _model.projectType == 'Nancy') ? ['Model', 'View', 'Controller'] : [_model.projectType];

				for (var blockName in blockNames) {
					var code = localStorage.getItem(blockName);
					if (code != null && code != "") {
						_model.codeBlocks[blockName] = code;
						localStorage.removeItem(blockName);
					}
				}
			}

		}
	};

	// Share fiddle (save in DB and get url)
	self.share = function () {
	};

	// Destroy fiddle
	self.destroy = function () {

	};

	self.getWidgetRequest = function() {
		var projectType = this.getProjectType();
		var codeBlock = this.getCodeBlocks()[projectType];
		var request = {
			'ProjectTypeId': getProjectTypeId(projectType),
			'CompilerId' : getCompilerId(this.getCompiler()),
			'Fiddle': {
				'FiddleId': this.getFiddleId(),
				'LanguageId': getLanguageId(this.getLanguage()),
				'CodeBlock': codeBlock,
			},
			//'Packages': $.map(initVersions, function (v) { return { 'Package': v.PackageNuGetId, 'Version': v.VersionName }; }) 
		};
		return request;
	};

	self.refreshActionButtons = function() {
		var $save = $("#save-button");
		var $fork = $("#fork-button");
		
		if (fiddle.getFiddleId() == null) {
			$save.show();
			$fork.hide();
		} else if (fiddle.isInUserFiddles() || fiddle.getOwnerId() == null ) {
			$save.show();
			$fork.show();
		} else {
			$save.hide();
			$fork.show();
		}
		
	};

	self.initMeta = function (isInFavorite, hideFork) {
		var $nameContainer = $(".name-container");
		var $countersContainer = $(".counters");
		var $accessTypeContainer = $(".access-type-container");
		var $nameHidden = $("#fiddle-name");
		var $accessTypeHidden = $("#access-type");
		var $favoriteContainer = $(".counter.favorite");
		var $btn = $favoriteContainer.find("i");
		if (fiddle.getFiddleId() == null || fiddle.getOwnerId() == null || fiddle.isInUserFiddles()) {

			var name = $nameHidden.val();

			var $nameTxt = $("<input>").attr("type", "text").val(name).attr("placeholder", "Enter name here...").blur(function() {
				$nameHidden.val($(this).val());
			}).keydown(function(e) { return (e.keyCode != 13); });

			$nameContainer.empty().append($nameTxt);

			$accessTypeContainer.find("ul.dropdown-menu > li > a").off("click").click(function () {
				$accessTypeContainer.find("button span:first-child").text($(this).text());
				$accessTypeHidden.val($(this).data("value"));
			});


			$accessTypeContainer.show();
			if (fiddle.getFiddleId() == null || fiddle.getOwnerId() == null || !fiddle.isInUserFiddles()) {
				$countersContainer.hide();
			} else {
				$countersContainer.css("right", 185);
			}
			
			//disable favorite
			$btn.off("click");
			$btn.removeClass("glyphicon-star-empty");
			$btn.addClass("glyphicon-star");
			$btn.attr("title", "Favorites");
			$btn.css("cursor", "default");

		} else {
			$nameContainer.empty().append($("<span>").append($nameHidden.val().replace("<", "&lt;").replace(">", "&gt;") + " by <a href=\"/Authors/" + self.getOwnerId() + "/" + encodeURI(self.getOwnerName().replace(".", "_")) + "\">" + self.getOwnerName() + "</a>"));
			//favorite
			if(!isInFavorite) {
				$btn.removeClass("glyphicon-star");
				$btn.addClass("glyphicon-star-empty");
				$btn.attr("title", "Add to Favorites");
			} else {
				$btn.removeClass("glyphicon-star-empty");
				$btn.addClass("glyphicon-star");
				$btn.attr("title", "Remove from Favorites");
			}

			$btn.css("cursor", "pointer");
			
			$btn.off("click").click(function () {
					var fav = function(cb, cbFail) {
						$.ajax({
							type: "POST",
							url: "Account/" + (isInFavorite ? "RemoveFromFavorites" : "AddToFavorites"),
							data: { id: self.getFiddleId() },
							success: function(resp) {
								if (resp.IsSuccess) {
									$favoriteContainer.find("span").text(parseInt($favoriteContainer.find("span").text()) + (isInFavorite?-1:1));
									displayNotification(!isInFavorite ? "Added to Favorites" : "Removed from Favorites", "success");
									if (cb != null) cb(resp);
									self.initMeta(!isInFavorite, hideFork);
								} else {
									if (resp.ErrorCode == 401) {
										//TODO: show login popup
										displayNotification('This action requires you to log in', 'warning');
										setupLoginModal(function() {
											fav(function () {
												$("#top-navbar").load(window.location.href + " #top-navbar", function () {
													fiddle.refreshActionButtons();
												});
											},function () {
												$("#top-navbar").load(window.location.href + " #top-navbar", function () {
													fiddle.refreshActionButtons();
													fiddle.initMeta(false, (fiddle.getOwnerId() == null && !fiddle.isInUserFiddles()));
												});
											});
										});
									} else {
										if (resp.ErrorCode == 600)//own fiddle
											fiddle.isInUserFiddles(true);
										
										if (cbFail != null) cbFail(resp);
										
										//display error message
										displayNotification(resp.Message, 'danger');
									}
								}
							}
						});
					};

					fav();
				});
			
			$accessTypeContainer.hide();
			$countersContainer.show();
		}
		
		if(hideFork) {
			$("#fork-button").hide();
		}

		var projectType = self.getProjectType();
		var language = self.getLanguage();
		
		if (projectType == ProjectTypesDict[ProjectTypes.Console] || language == LanguagesDict[Languages.FSharp]) {
			$("#viewil-button").show().addClass("show");
		} else {
			$("#viewil-button").hide().removeClass("show");
		}

		$("#convert-button").hide().removeClass("show");
		
		if ((language == LanguagesDict[Languages.CSharp] || language == LanguagesDict[Languages.VbNet]) &&
		(projectType == ProjectTypesDict[ProjectTypes.Console] || projectType == ProjectTypesDict[ProjectTypes.Script])) {
			var label = "Convert To " + (language == LanguagesDict[Languages.CSharp] ? "VB.NET" : "C#");
			$("#convert-button").html('<span class="glyphicon glyphicon-refresh"></span> '+label);
			$("#convert-button").show().addClass("show");
		}
		
		$("#tidyup-extra").show();
		
		if ($("#tidyup-menu").find("li a.show").length == 0) {
			$("#tidyup-extra").hide();
		}
		
		if ($("#tidyup-button").parent()[0].tagName == "LI")
		    setDefaultItem($("#tidyup-button"));

		// Force the first run, try to use cache whenever if available
		fiddle.runUseResultCache();
	};

	self.isReadOnly = function() {
		return _model.readOnly;
	};

	self.getLearnData = function (codeBlockId) {
		var data = {};
		data.Id = _model.fiddleId;
		data.Language = _model.language;
		data.ProjectType = _model.projectType;
		data.Compiler = _model.compiler;
		data.CodeBlock = _.escape(_model.codeBlocks[codeBlockId]);

		return data;
	};

}

// Main instance
var fiddle = new Fiddle();
;function Version(id, label, packageDesc, packageId, packageName, versionName, isOnDisk) {
	this.Id = id;
	this.Label = label;
	this.PackageDescription = packageDesc;
	this.PackageNuGetId = packageId;
	this.PackageName = packageName;
	this.VersionName = versionName;
	this.IsOnDisk = isOnDisk;
}

function CodeBlocks() {

	this.Collection = [];

	this.Add = function (languageId, fiddleId, code) {
		var codeBlock = {
			LanguageId: languageId,
			FiddleId: fiddleId,
			CodeBlock: code,
		};
		this.Collection.push(codeBlock);
	};

	this.Remove = function (languageId) {
		this.Collection.splice(this.GetIndexById(languageId), 1);
	};

	this.GetById = function (languageId) {
		return this.Collection[this.GetIndexById(languageId)];
	};

	this.GetIndexById = function (languageId) {
		var index = null;
		$.each(this.Collection, function (i, v) {
			if (v.LanguageId == languageId)
				index = i;
		});
		return index;
	};

	this.GetEncodedItems = function () {
		var collection = this.Collection;
		$.each(collection, function (i, v) {
			v.CodeBlock = $("<div/>").text(v.CodeBlock).html().toString();
		});
		return collection;
	};
}

var siteModes = {
	full: 1,
	mobile: 2,
	widget: 3
};

var env = {
	siteMode: siteModes.widget
};

var Languages = {
	CSharp: "C#",
	VbNet: "VB.NET",
	FSharp: "F#"
};

var LanguageIds = {
	CSharp: 1,
	VbNet: 2,
	FSharp: 3
};

var LanguagesDict = {
	1: 'CSharp',
	2: 'VbNet',
	3: 'FSharp'
};

var ProjectTypes = {
	Console: 1,
	Script: 2,
	Mvc: 3,
	Nancy: 4
};


var ProjectTypesDict = {
	1: 'Console',
	2: 'Script',
	3: 'Mvc',
	4: "Nancy"
};

var Compilers = {
	Net45: 1,
	Roslyn: 2,
};

var CompilersDict = {
	1: 'Net45',
	2: 'Roslyn',
	3: 'NetCore22',
};

var initVersions = [];
var codeBlocks = new CodeBlocks();
var currentLanguageId = null;
var projectTypeId = null;
var compilerId = null;

function setCodeBlock(languageId) {

	if (fiddle.getProjectType() != 'Mvc' && fiddle.getProjectType() != 'Nancy') {

		var newFiddle = _.find(fiddles, function (item) { return item.getLanguage() == LanguagesDict[languageId]; });
		if (typeof newFiddle == "undefined")
			throw "Invalid Language ID";

		fiddle = newFiddle;
		fiddle.render('widget');
	}

	currentLanguageId = languageId;

}

function getLangAnchor(language) {
	var anchor = $("<a/>");
	anchor.attr("href", "#");
	anchor.attr("language-id", LanguageIds[language]);
	anchor.append(Languages[language]);
	return anchor;
}

function insertTab(languageId, useRemoveIcon) {

	var codeBlock = codeBlocks.GetById(languageId);
	var li = $("<li/>");
	var anchor = getLangAnchor(LanguagesDict[codeBlock.LanguageId]);
	anchor.click(tabClick);
	li.append(anchor);

	if (useRemoveIcon) {
		var closeSpan = $("<span class=\"glyphicon glyphicon-remove\"></span>");
		closeSpan.click(closeTabClick);
		li.append(closeSpan);
	}

	$("#tabs>li:not(.site-link)").removeClass("active");
	li.addClass("active");
	if (useRemoveIcon) {
		$("#tabs>li.add-new").before(li);
	} else {
		$("#tabs>li.site-link").before(li);
	}
	toggleTabControls();
	setCodeBlock(languageId, 'CodeBlock');
	return anchor;
}

function removetab(languageId) {
	$("#tabs>li > a[language-id='" + languageId + "']").parent().remove();
	$("#tabs>li > a[language-id]").first().click();
	codeBlocks.Remove(languageId);

	var ind = 0;
	for (var name in fiddles) {
		if (fiddles[name].getLanguage() == LanguagesDict[languageId]) {
			fiddles.splice(ind, 1);
			break;
		}
		ind++;
	}

	toggleTabControls();
}

function toggleTabControls() {
	if (codeBlocks.Collection.length > 1) {
		$("#tabs>li:not(.add-new)>.glyphicon").show();
	} else {
		$("#tabs>li:not(.add-new)>.glyphicon").hide();
	}
	fillAdditionalLanguagesDdl();
}

function fillAdditionalLanguagesDdl() {
	var ul = $("#tabs>li.add-new>ul");
	$(ul).empty();
	$.each($.map(LanguagesDict, function (v, i) { return { index: i, value: v }; }), function (i, v) {

		//if (v.index == 3 && fiddle.getProjectType() != 'Script')
			//return;
		
		if (codeBlocks.GetById(v.index) == undefined) {
			var li = $("<li/>");
			var anchor = getLangAnchor(v.value);
			anchor.click(addTabClick);
			li.append(anchor);
			ul.append(li);
		}
	});

	if (ul.children().length == 0) {
		ul.parent().hide();
	} else {
		ul.parent().show();
	}
}

function addTabClick(e) {
	var self = this;
	e.preventDefault();

	fiddle.fetchCode();

	var editors = fiddle.getEditors();

	var currentCode = editors[fiddle.getProjectType()].getValue();
	var codeBlock = codeBlocks.GetById(currentLanguageId);
	if (currentCode != codeBlock.CodeBlock.replace(/\r\n/g, "\n")) {
		codeBlock.FiddleId = null;
		codeBlock.CodeBlock = currentCode;
	}

	var languageId = $(self).attr('language-id');

	if (codeBlocks.GetById(languageId) == undefined) {
		//add new codeBlock, get code from converter
		var currentBlock = codeBlocks.GetById(currentLanguageId);

		codeBlocks.Add(languageId, null, null, null);

		var comp = languageId == LanguageIds.FSharp ? CompilersDict[Compilers.Net45] : fiddle.getCompiler();
		var t = new Fiddle();
		t.init({
			language: LanguagesDict[languageId],
			projectType: languageId == LanguageIds.FSharp ? ProjectTypesDict[ProjectTypes.Script] : fiddle.getProjectType(),
			compiler: comp,
		});
		fiddles.push(t);

		convertCodeBlock(currentBlock, languageId);
	} else {
		insertTab(languageId, true);
	}
}

function convertCodeBlock(primaryCodeBlock, languageId) {
	if (projectTypeId == ProjectTypes.Console && languageId == LanguageIds.FSharp) {
		codeBlocks.GetById(languageId).CodeBlock = "";
	
		fillCodeBlocks(languageId, ProjectTypes.Script, "");
		
		insertTab(languageId, true);
	} else {

		$.ajax("/WidgetBuilder/ConvertFrom", {
			type: "POST",
			data: {
				ProjectTypeId: projectTypeId,
				FromLanguageId: primaryCodeBlock.LanguageId,
				FromCodeBlock: primaryCodeBlock.CodeBlock,
				ToLanguageId: languageId
			},
			success: function (code) {
				codeBlocks.GetById(languageId).CodeBlock = code;

				fillCodeBlocks(languageId, projectTypeId, code);

				insertTab(languageId, true);            
			}
		});
	}
}

function fillCodeBlocks(languageId, projectTypeId, code) {
	var f = _.find(fiddles, function(item) { return item.getLanguage() == LanguagesDict[languageId]; });
	var pr = ProjectTypesDict[projectTypeId];
	var cbs = { };
	cbs[pr] = code;
	f.setCodeBlocks(cbs);
}

function tabClick(e) {
	var self = this;
	e.preventDefault();

	if (fiddle.getProjectType() != 'Mvc' && fiddle.getProjectType() != 'Nancy') {
		fiddle.fetchCode();

		var editors = fiddle.getEditors();

		var currentCode = editors[fiddle.getProjectType()].getValue();
		var codeBlock = codeBlocks.GetById(currentLanguageId);
		if (currentCode != codeBlock.CodeBlock.replace(/\r\n/g, "\n")) {
			codeBlock.FiddleId = null;
			codeBlock.CodeBlock = currentCode;
		}
	}


	$(self).tab('show');

	var languageId = $(self).attr('language-id');

	$('.widget-lang-tabs > li').removeClass('active');

	$(self).closest('li').addClass('active');

	if (languageId != currentLanguageId)
		currentLanguageId = languageId;

	setCodeBlock(currentLanguageId);
}

function closeTabClick(e) {
	var self = this;
	var tabAnchor = $(self).prev();
	var languageId = tabAnchor.attr('language-id');
	var selectFirst = false;
	if (tabAnchor.parent().hasClass("active")) {
		selectFirst = true;
	}
	removetab(languageId);
	if (selectFirst) {
		$("#tabs>li").first().addClass("active");
		setCodeBlock(codeBlocks.Collection[0].LanguageId);
	}
}

function ready(projTypeId, langId, complId) {
	jQuery.ajaxSettings.traditional = true;

	Terminal.Hide();

	currentLanguageId = langId;
	projectTypeId = projTypeId;
	compilerId = complId;

	$('#Language').val(LanguagesDict[langId]);
	$("#ProjectType").val(ProjectTypesDict[projectTypeId]);
	$("#Compiler").val(CompilersDict[compilerId]);

	nugetPackageManager.init(initVersions, { mode: 'widget' });
}

function getCommonRequest(codeBlock) {
	var request = null;
	if (codeBlock != null) {
		request = {
			'ProjectTypeId': projectTypeId,
			'CompilerId': compilerId,
			'Fiddle': codeBlock,
			'Packages': $.map(initVersions, function (v) { return { 'Package': v.PackageNuGetId, 'Version': v.VersionName }; })
		};
	} else {
		request = {
			'ProjectTypeId': projectTypeId,
			'CompilerId': compilerId,
			'Fiddles': codeBlocks.GetEncodedItems(),
			'Packages': $.map(initVersions, function (v) { return { 'Id': v.Id, 'Package': v.PackageNuGetId, 'Version': v.VersionName }; })
		};
	}
	return request;
}
;var CodeRunner = new Object();
$.extend(CodeRunner, {
	isRunning: false,
	queue: null,
	currentSponsor: -1,
	currentSponsorFirstRun : false,
	showResults: function (resp) {
		if ($("#ProjectType").val() == 'Mvc' || $("#ProjectType").val() == 'Nancy') {
			$('#mvc-output-iframe').attr('src', '/MvcPage/' + (resp.HasErrors?"":resp.WebPageHtmlOutputId));
			$('#mvc-output-iframe').next('.section-label').attr('href', '/MvcPage/' + (resp.HasErrors ? "" : resp.WebPageHtmlOutputId));
		}

		if (resp.ConsoleOutput) {
			var outputRawStart = "<fiddle_output_raw>";
			var outputRawEnd = "</fiddle_output_raw>";
			var workingOutput = resp.ConsoleOutput;
			var consoleOutput = "";
			var posStart = -1;

			// check if some output must be show as raw HTML
			while ((posStart = workingOutput.search(outputRawStart)) > -1) {
				var posEnd = workingOutput.search(outputRawEnd);

				// get the start of the string escaped
				var sStart = workingOutput.slice(0, posStart);
				consoleOutput = consoleOutput + Terminal.FormatOutput(_.escape(sStart));

				// get the raw HTML to show
				var sRaw = workingOutput.slice(posStart + outputRawStart.length, posEnd);
				consoleOutput = consoleOutput + sRaw;

				// set the output remaining
				workingOutput = workingOutput.slice(posEnd + outputRawEnd.length);
			}

			// escape the rest of the output
			consoleOutput = consoleOutput + Terminal.FormatOutput(_.escape(workingOutput));

			$('.output').empty().append(consoleOutput);
		} else {
			$('.output').empty();
		}
		$('.output').change();

		Terminal.Clear();
		if (resp.IsConsoleInputRequested) {
			Terminal.InitReadLine();
			if (resp.ConsoleInputLines!=null && resp.ConsoleInputLines.length > 0) {
				Terminal.Input.focus();
			}
		} else {
			Terminal.Hide();
			Terminal.ConsoleInputs = [];
		}
		CodeRunner.showStats(resp.Stats);

		CodeRunner.displaySponsor();
	},
	run: function (item,cb) {
		
		if (item.showOverlay)
			$(".overlay").addClass('show');
		
		$.ajax({
			url: 'https://thingproxy.freeboard.io/fetch/https://dotnetfiddle.net/Home/Run',
			data: JSON.stringify(item.formData),
			type: 'POST',
			dataType: 'json',
			contentType: "application/json; charset=utf-8",
			success: function (resp) {
				if (typeof collaboration !== "undefined")
					collaboration.codeExecuted(resp);
				if (!_.isUndefined(window.academyCode)) {
					academyCode.showResults(resp, item.formData.codeBlockId);
				} else {
					CodeRunner.showResults(resp);
				}
				if (cb != null) {
					cb(resp);
				}
			},
			complete: function () {
				if (item.showOverlay)
					$(".overlay").removeClass('show');
				CodeRunner.isRunning = false;
				CodeRunner.toggleStatsLoader(false, item.loader);
			}
		});
	},
	fetchCode: function () {
		fiddle.fetchCode();
	},
	getMode: function (lang) {
		var mode = "";

		switch (lang || fiddle.getLanguage()) {
			case "VbNet":
				mode = "vb";
				break;
			case "CSharp":
				mode = "text/x-csharp";
				break;
			case "FSharp":
				mode = "text/x-fsharp";
				break;
		}
		return mode;
	},
	addToQueue: function (showOverlay) {

		if (CodeRunner.queue == null)
			CodeRunner.queue = new RunQueue(CodeRunner.queuePushed);
		if (CodeRunner.isRunning)
			CodeRunner.queue.clear();

		CodeRunner.fetchCode();

		var formData = CodeRunner.getFormData();

		CodeRunner.queue.push({ formData: formData, showOverlay: showOverlay });
	},
	addToQueueUseResultCache: function (showOverlay) {

		if (CodeRunner.queue == null)
			CodeRunner.queue = new RunQueue(CodeRunner.queuePushed);
		if (CodeRunner.isRunning)
			CodeRunner.queue.clear();

		CodeRunner.fetchCode();

		var formData = CodeRunner.getFormData();
		formData.UseResultCache = true;

		CodeRunner.queue.push({ formData: formData, showOverlay: showOverlay });
	},
	getFormData: function (fetch, resetId) {
		if (fetch)
			fiddle.fetchCode(resetId);
		
		var codeBlocks = fiddle.getCodeBlocks();

		var original = $("#Original" + fiddle.getProjectType()).val(); //$("<div/>").html($("#Original" + fiddle.getProjectType()).val()).text();
		var codeBlock = _.escape(codeBlocks[fiddle.getProjectType()]);//$("<div/>").text($("#" + fiddle.getProjectType()).text()).html().toString();

		var language = fiddle.getLanguage();
		var projectType = fiddle.getProjectType();
		var originalId = fiddle.getFiddleId();
		var compiler = fiddle.getCompiler();
		var nuGetPackageVersionIds = $('#NuGetPackageVersionIds').val();
		var originalNuGetPackageVersionIds = $('#OriginalNuGetPackageVersionIds').val();
		var timeOffset = $("#timezone").val();
		var formData = {
			CodeBlock: codeBlock,
			OriginalCodeBlock: original,
			Language: language,
			Compiler: compiler,
			ProjectType: projectType,
			OriginalFiddleId: originalId,
			NuGetPackageVersionIds: nuGetPackageVersionIds,
			OriginalNuGetPackageVersionIds: originalNuGetPackageVersionIds,
			TimeOffset: timeOffset,
			ConsoleInputLines: Terminal.ConsoleInputs,
			MvcViewEngine: 'Razor',
			MvcCodeBlock: {
				Model: "",
				View: "",
				Controller: ""
			},
			OriginalMvcCodeBlock: {
				Model: "",
				View: "",
				Controller: ""
			},
			UseResultCache: false,
		};
		
		if (projectType == 'Mvc' || projectType == 'Nancy') {
			formData.MvcCodeBlock = {
				Model: _.escape(codeBlocks['Model']),//$("<div/>").text($("#Model").text()).html().toString(),
				View: _.escape(codeBlocks['View']),//$("<div/>").text($("#View").text()).html().toString(),
				Controller: _.escape(codeBlocks['Controller'])//$("<div/>").text($("#Controller").text()).html().toString()
			};
			formData.OriginalMvcCodeBlock = {
				Model: $("<div/>").text($("#OriginalModel").val()).html().toString(),
				View: $("<div/>").text($("#OriginalView").val()).html().toString(),
				Controller: $("<div/>").text($("#OriginalController").val()).html().toString()
			};
		}

		return formData;
	},
	queuePushed: function (obj) {
		if (CodeRunner.isRunning) {
			setTimeout(function () { CodeRunner.queuePushed(obj); }, 100);
		} else {
			// Block threads
			CodeRunner.isRunning = true;
			var queueItem = CodeRunner.queue.pull();
			if (queueItem) {
				CodeRunner.toggleStatsLoader(true, queueItem.loader || obj.loader);
				CodeRunner.run(queueItem);
			} else
				CodeRunner.isRunning = false; // Unblock threads if queue is empty
		}
	},
	showStats: function (stats) {
		if ($(".stats-pane").length > 0) {
			var statsHtml = "<table>";

			if (stats.IsResultCache) {
				statsHtml += "<tr style='background-color: #fff3cd; font-weight: bold;'><td>Cached Result</td><td>";
			}

			statsHtml += "<tr><td>Last Run: </td><td>" + stats.RunAt + "</td></tr>" +
				"<tr><td>Compile: </td><td>" + stats.CompileTime + "</td></tr>" +
				"<tr><td>Execute: </td><td>" + stats.ExecuteTime + "</td></tr>" +
				"<tr><td>Memory: </td><td>" + stats.MemoryUsage + "</td></tr>" +
				"<tr><td>CPU: </td><td>" + stats.CpuUsage + "</td></tr>" +
				"</table>";

			$(".stats-pane #stats").empty().append(statsHtml).show();
		}

		if ($("#resultCache").length > 0) {
			if (stats.IsResultCache) {
				$("#resultCache").show();
			} else {
				$("#resultCache").hide();
			}
		}
	},
	toggleStatsLoader: function (show, loader) {
		//console.log("show: " + show + ", current: " + loader.is(":visible"), { loader:loader, caller:arguments.callee.caller });
		if (typeof loader == "undefined")
			loader = $("#stats-loader");
		if (show != null) {
			if (show) loader.show();
			else loader.hide();
		} else {
			if ((typeof AutoRunner == 'undefined' || !AutoRunner.isRunningByOther) && !CodeRunner.isRunning) {
				loader.hide();
			} else
				loader.show();
		}
	},
	displaySponsor: function () {
		// Stick with first sponsor on first run to avoid screen glitch
		if (CodeRunner.currentSponsorFirstRun) {
			CodeRunner.currentSponsorFirstRun = false;
			return;
		}

		// make current sponsor fade out
		if (CodeRunner.currentSponsor != -1) {
			$("#sponsor-" + CodeRunner.currentSponsor).hide();
		} else {
			CodeRunner.currentSponsorFirstRun = true;
		}

		var sponsorCount = 5;

		// select new sponsor
		var random = Math.floor(Math.random() * 100);
		var newSponsor = random % sponsorCount;

		if (newSponsor == CodeRunner.currentSponsor) {
			newSponsor = ((newSponsor + 1) % sponsorCount);
		}
		CodeRunner.currentSponsor = newSponsor;

		// make new sponsor fade in
		$("#sponsor-" + CodeRunner.currentSponsor).fadeIn("slow");
	}
});

function RunQueue(handler) {
	this.queue = [];
	this.mutationHandler = handler || function (obj) { };
	this.callHandler = function (obj) {
		if (typeof this.mutationHandler === 'function') {
			this.mutationHandler(obj);
		}
	};
	this.push = function (obj) {
		this.queue.push(obj);
		this.callHandler(obj);
	};

	this.pull = function (obj) {
		return this.queue.shift(obj);
	};

	this.clear = function (obj) {
		this.queue = [];
	};
}

CodeRunner.displaySponsor();
;var Linter = new Object();

$.extend(Linter, {
	_ERROR_SEVERITY: 0,
	_lintTimer: null,
	_delayedRun: null,
	_result: [],
	_updateLintingHandler: null,
	_startup: true,
	_lastObj: null,
	getSyntaxErrors: function (value, updateLinting, options, cm) {
		if (Linter._startup && (options || cm.options.lint).startup) {
			Linter._startup = false;
		}
			Linter._updateLintingHandler = updateLinting;
			if (!Linter._lintTimer) {
				Linter.getValidatorResultsAsync(cm, updateLinting);
				Linter.startTimer(cm);
			} else
				Linter._delayedRun = true;
	},
	startTimer: function (cm) {
		Linter._lintTimer = setTimeout(function () {
			Linter._lintTimer = null;
			if (Linter._delayedRun) {
				Linter.getSyntaxErrors("", Linter._updateLintingHandler, null, cm);
			}
			Linter._delayedRun = false;
		}, 3000);
	},
	getValidatorResultsAsync: function(cm, updateLinting) {
	    var found = [];
        
	    if (!nugetPackageManager.isLoaded()) {
		    var func = this;
		    setTimeout(function () { Linter.getValidatorResultsAsync(cm, updateLinting); }, 500);
		    return;
	    }
        
		//send ajax request to syntax validator
	    var syntaxData = _.isUndefined(window.academyCode) ? CodeRunner.getFormData(true, false) : academyCode.getFormData(cm.options.codeBlockId, true, false);
		if (!syntaxData)
			return;
		
	    syntaxData.FileType = null;

	    if (JSON.stringify(Linter._lastObj) == JSON.stringify(syntaxData))
	        return;

	    Linter._lastObj = syntaxData;
       
	    $.ajax({
			url: "https://thingproxy.freeboard.io/fetch/https://dotnetfiddle.net/Home/GetSyntaxErrors",
			method: "POST",
			async: true,
			dataType: 'json',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify(syntaxData),
			success: function (data) {

			    function getErrors(cm, errors) {
			        var found = [];
			        if (errors == null) found = [];
			        else {
			            $.each(errors, function (index, value) {
			            	var startChar = value.Column;
			            	var line = cm.getLine(value.Line);
			            	if (!line) return;
			                var lineLength = cm.getLine(value.Line).length;
			                var token = cm.getTokenAt({ line: value.Line, ch: startChar });
			                while (/^[\t ]*$/mig.test(token.string) && startChar < lineLength) {
			                    startChar = startChar + 1;
			                    token = cm.getTokenAt({ line: value.Line, ch: startChar });
			                }
			                found.push({
			                    from: { line: value.Line, ch: token.start },
			                    to: { line: value.Line, ch: token.end },
			                    message: value.ErrorMessage,
			                    severity: value.Severity == Linter._ERROR_SEVERITY ? "error" : "warning"
			                });
			            });
			        }

			        return found;
			    }

			    function containError(errors) { //we check severity level, maybe it's just warning
				    if (!errors || !errors.length)
				    	return false;
				    
			    	for (var i = 0; i < errors.length; i++) {
			    		if (errors[i].severity == 'error')
			    			return true;
			    	}
				    return false;
			    }

				var currentFiddle = _.isUndefined(window.academyCode) ? fiddle : academyCode.getFiddle(cm.options.codeBlockId);
				var editors = currentFiddle.getEditors();
			    var hasErrors = false;
			    for (var name in editors) {

			    	var t = ((currentFiddle.getProjectType() == 'Mvc' || currentFiddle.getProjectType() == 'Nancy') ? name : '') + 'Errors';
			        var errors = getErrors(editors[name], data[t]);

			        hasErrors = hasErrors || containError(errors);

			        if (typeof updateLinting == 'function')
			            updateLinting(editors[name], errors);
			    }

			    if (typeof AutoRunner != 'undefined' && !hasErrors && !Linter._startup) {
			    	var editors = currentFiddle.getEditors();
			        var theme;

			        for (var name in editors) {
			            theme = editors[name].getOption("theme");
			            break;
			        }

                    if (window.academyCode) {
                        AutoRunner.handleAutorun(true, cm.getOption('codeBlockId'));
                    } else {
                        AutoRunner.handleAutorun(false);
                    }
			    }

			    /*if ($("#ProjectType").val() != 'Mvc') {
			        Linter._result = getErrors(cm, data.Errors);

			        if (typeof updateLinting == 'function')
			            updateLinting(cm, Linter._result);

			        if (typeof AutoRunner != 'undefined' && Linter._result.length == 0 && !Linter._startup) {

			            // TODO: solve this shit
			            AutoRunner.handleAutorun(false);
			        }
			    }
			    else {
                   
			        var modelErrors =  getErrors(myMirror['Model'], data.ModelErrors);
			        var controllerErrors = getErrors(myMirror['Controller'], data.ControllerErrors);

			        if (typeof updateLinting == 'function') {
			            updateLinting(myMirror['Model'], modelErrors);
			            updateLinting(myMirror['Controller'], controllerErrors);
			        }
					
			        if (typeof AutoRunner != 'undefined' && modelErrors.length == 0 && controllerErrors.length == 0 && !Linter._startup) {
			            AutoRunner.handleAutorun(false);
			        }
				}*/

			    if (Linter._startup) {
			        Linter._startup = false;
			    }
			}
		});
	}
});
;(function () {
	"use strict";
	var Pos = CodeMirror.Pos;
	var Found = [];
	var Token = null;
	

	function filter(array, token) {
		return array.filter(function (foundItem) {
			return foundItem.Name.toUpperCase().indexOf(token.toUpperCase()) >= 0;
		});
	}
	
	function getItemIndexByName(arr, name) {
		for (var i = 0; i < arr.length; i++) {
			if (arr[i].Name == name) {
				return i;
			}
		}
		return -1;
	}

	function ConstructorOrOverload(params, returnType, description) {
		this.Params = params;
		this.Returns = returnType;
		this.Description = description;
	}

	function toResult(found, cursor) {
		if (Token.string != "." && Token.string != " " && Token.string != "(") {
			found = filter(found, Token.string);
		}

		var found1 = [];
		//group by name
		for (var i = 0; i < found.length; i++) {
			var item = found[i];
			var existingItemId = getItemIndexByName(found1, item.Name);
			if (existingItemId < 0) {
				item.ConstructorsOrOverloads = [];
				item.ConstructorsOrOverloads.push(new ConstructorOrOverload(item.Params, item.Type, item.Description));
				found1.push(item);
			} else {
				found1[existingItemId].ConstructorsOrOverloads.push(new ConstructorOrOverload(item.Params, item.Type, item.Description));
			}
		}

		var result = {
			list: found1,
			from: Pos(cursor.line, (Token.string != "." && Token.string != " ") ? Token.start : cursor.ch),
			to: Pos(cursor.line, (Token.string != "." && Token.string != " ") ? Token.end : cursor.ch)
		};

		//if (env.siteMode != siteModes.mobile) {
		//    CodeMirror.on(result, 'select', function(item, el) {
		//	    $('.ui-tooltip').remove();
		//	    $('.CodeMirror-hint').tooltip('close');
		//	    $(el).tooltip('open');
		//    });

		//    CodeMirror.on(result, 'close', function(item, el) {
		//	    $('.ui-tooltip').remove();
		//	    $('.CodeMirror-hint').tooltip('close');
		//    });
		//}

		//do not forget about local variables
		return result;
	}

	function getAutocompleteItems(cm, cb, o, pos) {

		var doc = cm.getDoc();
		var docCode = doc.getValue();
		var cursor = cm.getCursor();
		
		if(pos!=null) {
			cursor = pos;
		}
		var cursorPositionInCode = null;

		var codeLines = docCode.split("\n");

		var cursorLine = codeLines[cursor.line];
		var linePartBeforeCursor = cursorLine.substring(0, cursor.ch);

		var newToken = cm.getTokenAt(Pos(cursor.line, cursor.ch));

		codeLines[cursor.line] = linePartBeforeCursor;

		var codeBeforeCursor = codeLines.slice(0, cursor.line + 1).join("\n");


		cursorPositionInCode = codeBeforeCursor.length;

		if (doc.mode.name == "vb") {
			if (newToken.string.length > 1 && (newToken.string.indexOf(".") == 0 || newToken.string.indexOf(" ") == 0)) {
				newToken.string = newToken.string.substring(1, newToken.string.length);
				newToken.start++;
			}
		}

		if (Found.length > 0) {
			if (newToken.string == "("
				|| newToken.string == "."
				|| newToken.string == " "
				|| (Token.string != "."
					&& Token.string != " "
					&& newToken.string.toUpperCase().indexOf(Token.string.toUpperCase()) < 0
				)
				|| filter(Found, newToken.string).length == 0) {
				Found = [];
			}
		}

		Token = newToken;

		if (Found.length == 0) {
			//alert("GetAutoComplete nuGetPackageVersionIds: " + $("#NuGetPackageVersionIds").val());
			
			var autoCompleteData = _.isUndefined(window.academyCode) ? CodeRunner.getFormData() : academyCode.getFormData(cm.options.codeBlockId);

			var mirrors = fiddle.getEditors();
			for (var name in mirrors) {
				if (mirrors[name] == cm) {
					autoCompleteData.FileType = name;
					break;
				}
			}

			autoCompleteData.Position = cursorPositionInCode;
			autoCompleteData.CodeBlock = $("<div/>").text(docCode).html();
			//console.log('()', cm);
			$.ajax("https://thingproxy.freeboard.io/fetch/https://dotnetfiddle.net/Home/GetAutoComplete", {
				method: "POST",
				async: true,
				dataType: 'json',
				contentType: 'application/json; charset=utf-8',
				data: JSON.stringify(autoCompleteData),
				success: function (data) {
					Found = data;
					cb(toResult(Found, cursor));
				}
			});
		} else {
			cb(toResult(Found, cursor));
		}

		//return result;
	}

	function getTokenType(cm, cb) {
		
		var doc = cm.getDoc();
		var cursor = cm.getCursor();

		var docCode = doc.getValue();
		var codeLines = docCode.split("\n");

		var cursorLine = codeLines[cursor.line];
		var linePartBeforeCursor = cursorLine.substring(0, cursor.ch);

		var newToken = cm.getTokenAt(Pos(cursor.line, cursor.ch));

		codeLines[cursor.line] = linePartBeforeCursor;

		var codeBeforeCursor = codeLines.slice(0, cursor.line + 1).join("\n");

		var cursorPositionInCode = codeBeforeCursor.length;

		if (doc.mode.name == "vb") {
			if (newToken.string.length > 1 && (newToken.string.indexOf(".") == 0 || newToken.string.indexOf(" ") == 0)) {
				newToken.string = newToken.string.substring(1, newToken.string.length);
				newToken.start++;
			}
		}
		
		var tokenData = _.isUndefined(window.academyCode) ? CodeRunner.getFormData() : academyCode.getFormData(cm.options.codeBlockId);
		var mirrors = fiddle.getEditors();

		for (var name in mirrors) {
			if (mirrors[name] == cm) {
				tokenData.FileType = name;
				break;
			}
		}

		tokenData.Position = cursorPositionInCode;
		tokenData.CodeBlock = $("<div/>").text(docCode).html();

		$.ajax("https://thingproxy.freeboard.io/fetch/https://dotnetfiddle.net/Home/GetTokenType", {
			method: "POST",
			async: true,
			dataType: 'json',
			contentType: 'application/json; charset=utf-8',
			data: JSON.stringify(tokenData),
			success: function (type) {
				cb(cm, type);
			}
		});
	}
	
	
	function highlightArgument(cm, typeResult) {
	
		if (typeResult == null) {
			//if(myMirror.getMode().name=="fsharp") {
			//	//highlight by count


			//	return;
			//}
			return;
		}
	
		if (!typeResult.IsInsideArgumentList) {
			$(".hint-overloads").remove();
			_completion_overloadsActive = false;
			return;
		}

		var args = typeResult.RawArgumentsList;
		var doc = cm.getDoc();
		var cursor = doc.getCursor();
	
		var tokenUnderCursor = cm.getTokenAt(cursor);
   
		//replace generics
		var reg = /<[ ,.\w]*>\(\)/g;
		var regmatch = reg.exec(args);
		while (regmatch!=null) {
			args = args.replace(regmatch[0], Array(regmatch[0].length).join("?"));
			regmatch = reg.exec(args);
		}

		//replace literals
		var reg = /"([^"]*)"/g;
		//replace escaped "
		args = args.replace("\\\"", '??');
		var regmatch = reg.exec(args);
		while (regmatch!=null) {
			args = args.replace(regmatch[1], Array(regmatch[1].length).join("?"));
			regmatch = reg.exec(args);
		}
	
		//replace empty ()
		args = args != null ? args.replace(/\( *\)/g, "") : null;
	
		var cursorPos = cursor.ch - typeResult.ParentChar;
		var argsBeforeCur = args != null ? args.substring(0, cursorPos) : "";
		var tokenPos = argsBeforeCur.split(",").length - 1;

		var argsArray = args != null ? $.map(args.split(","), $.trim) : [];
	
		var count = argsArray.length;
	
		//console.log("A: " + arguments + " T:" + tokenUnderCursor.string + " P: " + tokenPos);

		$(".hint-overloads-item-param").removeClass("bold");
		$(".hint-overloads-item-param-description").remove();

		$.each($(".hint-overloads-item"), function (i, v) {
			var params = $(v).find(".hint-overloads-item-param");
			if ((count > 1 || argsArray[0] != '') && params.length < count) {
				//console.log("CASE 1: arg:'" + argsArray[0]+"' count:"+count);
				$(v).addClass("grayed");
				return;
			}

			var grayout = false;

			if (typeResult != null && typeResult.PreviousArgumentListTokenTypes != null) {
				for (var j = 0; j < typeResult.PreviousArgumentListTokenTypes.length; j++) {
					var type = typeResult.PreviousArgumentListTokenTypes[j];
					if (!(type == null || $(params[j]).attr("type").match(/object/i) || $(params[j]).attr("type") == type))
						grayout = true;
				}
			}

			if (grayout) {
				$(v).addClass("grayed");
				return;
			}

			$(v).removeClass("grayed");

			if (params != null && params.length > 0) {
				if (typeResult == null || typeResult.Type == null || $(params[tokenPos >= 0 ? tokenPos : (count - 1)]).attr("type") == typeResult.Type || $(params[tokenPos >= 0 ? tokenPos : (count - 1)]).attr("type").match(/object/i)) {
					$(params[tokenPos >= 0 ? tokenPos : (count - 1)]).addClass("bold");
					$(v).append($("<span/>").addClass("hint-overloads-item-param-description").append("<b>" + $(params[tokenPos >= 0 ? tokenPos : (count - 1)]).attr("Name") + "</b>:" + $(params[tokenPos >= 0 ? tokenPos : (count - 1)]).attr("Description").replace('<paramref name="', '<b>').replace(/" ?\/>/, '</b>')));
				}
			}
		});

		$(".hint-overloads-item").removeClass("active");
		$($(".hint-overloads-item").not(".grayed")[0]).addClass("active");
		$(".hint-overloads-item.active").parent().scrollTop($(".hint-overloads-item.active").parent().scrollTop() + ($(".hint-overloads-item.active").position() || { top: 0 }).top);
	};

	CodeMirror.registerHelper("hint", "vbcsharp", getAutocompleteItems);
	
	CodeMirror.registerHelper("hint", "getTokenType", getTokenType);
	
	CodeMirror.registerHelper("hint", "highlightArgument", highlightArgument);
	
})();

CodeMirror.commands.spaceautocomplete = function (cm, e) {
	var cur = cm.getCursor();
	cm.replaceSelection(cm.getSelection() + " ");
	cm.setCursor({ line: cur.line, ch: cur.ch + 1 });

	var cursor = cm.getCursor();
	var token = cm.getTokenAt({ line: cursor.line, ch: cursor.ch - 1 });
	if (token.string.toUpperCase() != "NEW" && token.string.toUpperCase() != "USING" && token.string.toUpperCase() != "IMPORTS" && token.string.toUpperCase() != "OPEN") {
		return;
	}
	CodeMirror.showHint(cm, CodeMirror.hint.vbcsharp, { async: true });
};

CodeMirror.commands.autocomplete = function (cm) {
	CodeMirror.showHint(cm, CodeMirror.hint.vbcsharp, { async: true });
};

CodeMirror.commands.dotautocomplete = function (cm) {
	var cur = cm.getCursor();
	cm.replaceSelection(cm.getSelection() + ".");
	cm.setCursor({ line: cur.line, ch: cur.ch + 1 });
	CodeMirror.showHint(cm, CodeMirror.hint.vbcsharp, { async: true });
};

CodeMirror.commands.commaOverloads = function (cm) {
	var cur = cm.getCursor();
	cm.replaceSelection(cm.getSelection() + ",");
	cm.setCursor({ line: cur.line, ch: cur.ch + 1 });
	var tokenTypeUnderCur = cm.getTokenTypeAt(cm.getCursor());
	if (tokenTypeUnderCur != "string") {
		CodeMirror.showOverloads(cm, CodeMirror.hint.getTokenType, { async: true, hint: CodeMirror.hint.vbcsharp });
	}
};

;var tokenTypeTimer = null;

function loadEditors(theme, startupRun, textAreas) {
	var mirrors = null;

	if (!textAreas) {
		textAreas = $('.code-block');
	}
	
	textAreas.each(function () {
		var self = $(this);
		var id = $(self).attr('id');
		var mode = '';
		var readOnly = false;
		if (window.academyCode) {
			var accademyFiddle = academyCode.getFiddle(id);
			mode = accademyFiddle.getMode();
			readOnly = accademyFiddle.isReadOnly();
		} else {
			mode = $(self).attr('mode');
			mode = mode || CodeRunner.getMode();
		}

		var codeMirror = CodeMirror(function (elt) {
			$(self).closest('div').append(elt);
		}, {
			value: $(self).val(),
			mode: mode,
			lineNumbers: true,
			indentUnit: 4,
			indentWithTabs: true,
			lint: {
				getAnnotations: Linter.getSyntaxErrors,
				async: true,
				startup: startupRun != null && startupRun
			},
			
			extraKeys: {
				"Ctrl-Space": "autocomplete",
				"'.'": "dotautocomplete",
				"' '": "spaceautocomplete",
				"','": "commaOverloads",
				"Ctrl-Q": "commentSelection",
				"Ctrl-U": "uncommentSelection"
			},
			theme: theme != null ? theme : "default",
			gutters: ["CodeMirror-lint-markers"],
			readOnly: readOnly,
			codeBlockId: id,
		});

		//codeMirror.setOption("value", _.unescape($(self).val()));
		
		//codeMirror.setOption("value", '123');

		/*codeMirror.on("keyup", Hinter.handleNewKeyword);*/

		codeMirror.on("keyup", function (cm, event) {
			var c = String.fromCharCode(event.keyCode);
			if (c != ",") {
				if ($(".hint-overloads").length > 0 && $("ul.CodeMirror-hints").length == 0) {

					if (tokenTypeTimer != null) clearTimeout(tokenTypeTimer);
					tokenTypeTimer = setTimeout(function () {

						CodeMirror.hint.getTokenType(cm, CodeMirror.hint.highlightArgument);
					}, 200);
				}
			}
		});

		codeMirror.on("endCompletion", function () { codeMirror.focus(); });
		codeMirror.setSize('100%');
		codeMirror.on("keydown", function () {
			$('.hint-overloads .back-to-list.active').remove();
		});

		mirrors = mirrors || {};

		mirrors[id] = codeMirror;
	});

	//Eric this only works if explicitely called. Doesn't work in initializer            

	return mirrors;
}
;