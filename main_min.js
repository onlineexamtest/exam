var requirejs, require, define;
if (function(e) {
    function t(e, t) {
        return v.call(e, t)
    }
    function n(e, t) {
        var n, r, i, o, s, a, l, u, c, h, d, f = t && t.split("/"), p = m.map, g = p && p["*"] || {};
        if (e && "." === e.charAt(0))
            if (t) {
                for (f = f.slice(0, f.length - 1),
                e = e.split("/"),
                s = e.length - 1,
                m.nodeIdCompat && b.test(e[s]) && (e[s] = e[s].replace(b, "")),
                e = f.concat(e),
                c = 0; c < e.length; c += 1)
                    if (d = e[c],
                    "." === d)
                        e.splice(c, 1),
                        c -= 1;
                    else if (".." === d) {
                        if (1 === c && (".." === e[2] || ".." === e[0]))
                            break;
                        c > 0 && (e.splice(c - 1, 2),
                        c -= 2)
                    }
                e = e.join("/")
            } else
                0 === e.indexOf("./") && (e = e.substring(2));
        if ((f || g) && p) {
            for (n = e.split("/"),
            c = n.length; c > 0; c -= 1) {
                if (r = n.slice(0, c).join("/"),
                f)
                    for (h = f.length; h > 0; h -= 1)
                        if (i = p[f.slice(0, h).join("/")],
                        i && (i = i[r])) {
                            o = i,
                            a = c;
                            break
                        }
                if (o)
                    break;
                !l && g && g[r] && (l = g[r],
                u = c)
            }
            !o && l && (o = l,
            a = u),
            o && (n.splice(0, a, o),
            e = n.join("/"))
        }
        return e
    }
    function r(t, n) {
        return function() {
            var r = y.call(arguments, 0);
            return "string" != typeof r[0] && 1 === r.length && r.push(null),
            c.apply(e, r.concat([t, n]))
        }
    }
    function i(e) {
        return function(t) {
            return n(t, e)
        }
    }
    function o(e) {
        return function(t) {
            f[e] = t
        }
    }
    function s(n) {
        if (t(p, n)) {
            var r = p[n];
            delete p[n],
            g[n] = !0,
            u.apply(e, r)
        }
        if (!t(f, n) && !t(g, n))
            throw new Error("No " + n);
        return f[n]
    }
    function a(e) {
        var t, n = e ? e.indexOf("!") : -1;
        return n > -1 && (t = e.substring(0, n),
        e = e.substring(n + 1, e.length)),
        [t, e]
    }
    function l(e) {
        return function() {
            return m && m.config && m.config[e] || {}
        }
    }
    var u, c, h, d, f = {}, p = {}, m = {}, g = {}, v = Object.prototype.hasOwnProperty, y = [].slice, b = /\.js$/;
    h = function(e, t) {
        var r, o = a(e), l = o[0];
        return e = o[1],
        l && (l = n(l, t),
        r = s(l)),
        l ? e = r && r.normalize ? r.normalize(e, i(t)) : n(e, t) : (e = n(e, t),
        o = a(e),
        l = o[0],
        e = o[1],
        l && (r = s(l))),
        {
            f: l ? l + "!" + e : e,
            n: e,
            pr: l,
            p: r
        }
    }
    ,
    d = {
        require: function(e) {
            return r(e)
        },
        exports: function(e) {
            var t = f[e];
            return "undefined" != typeof t ? t : f[e] = {}
        },
        module: function(e) {
            return {
                id: e,
                uri: "",
                exports: f[e],
                config: l(e)
            }
        }
    },
    u = function(n, i, a, l) {
        var u, c, m, v, y, b, x = [], w = typeof a;
        if (l = l || n,
        "undefined" === w || "function" === w) {
            for (i = !i.length && a.length ? ["require", "exports", "module"] : i,
            y = 0; y < i.length; y += 1)
                if (v = h(i[y], l),
                c = v.f,
                "require" === c)
                    x[y] = d.require(n);
                else if ("exports" === c)
                    x[y] = d.exports(n),
                    b = !0;
                else if ("module" === c)
                    u = x[y] = d.module(n);
                else if (t(f, c) || t(p, c) || t(g, c))
                    x[y] = s(c);
                else {
                    if (!v.p)
                        throw new Error(n + " missing " + c);
                    v.p.load(v.n, r(l, !0), o(c), {}),
                    x[y] = f[c]
                }
            m = a ? a.apply(f[n], x) : void 0,
            n && (u && u.exports !== e && u.exports !== f[n] ? f[n] = u.exports : m === e && b || (f[n] = m))
        } else
            n && (f[n] = a)
    }
    ,
    requirejs = require = c = function(t, n, r, i, o) {
        if ("string" == typeof t)
            return d[t] ? d[t](n) : s(h(t, n).f);
        if (!t.splice) {
            if (m = t,
            m.deps && c(m.deps, m.callback),
            !n)
                return;
            n.splice ? (t = n,
            n = r,
            r = null) : t = e
        }
        return n = n || function() {}
        ,
        "function" == typeof r && (r = i,
        i = o),
        i ? u(e, t, n, r) : setTimeout(function() {
            u(e, t, n, r)
        }, 4),
        c
    }
    ,
    c.config = function(e) {
        return c(e)
    }
    ,
    requirejs._defined = f,
    define = function(e, n, r) {
        n.splice || (r = n,
        n = []),
        t(f, e) || t(p, e) || (p[e] = [e, n, r])
    }
    ,
    define.amd = {
        jQuery: !0
    }
}(),
define("../node_modules/almond/almond", function() {}),
function(e, t) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
        if (!e.document)
            throw new Error("jQuery requires a window with a document");
        return t(e)
    }
    : t(e)
}("undefined" != typeof window ? window : this, function(e, t) {
    function n(e) {
        var t = !!e && "length"in e && e.length
          , n = fe.type(e);
        return "function" === n || fe.isWindow(e) ? !1 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }
    function r(e, t, n) {
        if (fe.isFunction(t))
            return fe.grep(e, function(e, r) {
                return !!t.call(e, r, e) !== n
            });
        if (t.nodeType)
            return fe.grep(e, function(e) {
                return e === t !== n
            });
        if ("string" == typeof t) {
            if (ke.test(t))
                return fe.filter(t, e, n);
            t = fe.filter(t, e)
        }
        return fe.grep(e, function(e) {
            return fe.inArray(e, t) > -1 !== n
        })
    }
    function i(e, t) {
        do
            e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function o(e) {
        var t = {};
        return fe.each(e.match(Ne) || [], function(e, n) {
            t[n] = !0
        }),
        t
    }
    function s() {
        re.addEventListener ? (re.removeEventListener("DOMContentLoaded", a),
        e.removeEventListener("load", a)) : (re.detachEvent("onreadystatechange", a),
        e.detachEvent("onload", a))
    }
    function a() {
        (re.addEventListener || "load" === e.event.type || "complete" === re.readyState) && (s(),
        fe.ready())
    }
    function l(e, t, n) {
        if (void 0 === n && 1 === e.nodeType) {
            var r = "data-" + t.replace(Ie, "-$1").toLowerCase();
            if (n = e.getAttribute(r),
            "string" == typeof n) {
                try {
                    n = "true" === n ? !0 : "false" === n ? !1 : "null" === n ? null : +n + "" === n ? +n : Oe.test(n) ? fe.parseJSON(n) : n
                } catch (i) {}
                fe.data(e, t, n)
            } else
                n = void 0
        }
        return n
    }
    function u(e) {
        var t;
        for (t in e)
            if (("data" !== t || !fe.isEmptyObject(e[t])) && "toJSON" !== t)
                return !1;
        return !0
    }
    function c(e, t, n, r) {
        if (De(e)) {
            var i, o, s = fe.expando, a = e.nodeType, l = a ? fe.cache : e, u = a ? e[s] : e[s] && s;
            if (u && l[u] && (r || l[u].data) || void 0 !== n || "string" != typeof t)
                return u || (u = a ? e[s] = ne.pop() || fe.guid++ : s),
                l[u] || (l[u] = a ? {} : {
                    toJSON: fe.noop
                }),
                ("object" == typeof t || "function" == typeof t) && (r ? l[u] = fe.extend(l[u], t) : l[u].data = fe.extend(l[u].data, t)),
                o = l[u],
                r || (o.data || (o.data = {}),
                o = o.data),
                void 0 !== n && (o[fe.camelCase(t)] = n),
                "string" == typeof t ? (i = o[t],
                null == i && (i = o[fe.camelCase(t)])) : i = o,
                i
        }
    }
    function h(e, t, n) {
        if (De(e)) {
            var r, i, o = e.nodeType, s = o ? fe.cache : e, a = o ? e[fe.expando] : fe.expando;
            if (s[a]) {
                if (t && (r = n ? s[a] : s[a].data)) {
                    fe.isArray(t) ? t = t.concat(fe.map(t, fe.camelCase)) : t in r ? t = [t] : (t = fe.camelCase(t),
                    t = t in r ? [t] : t.split(" ")),
                    i = t.length;
                    for (; i--; )
                        delete r[t[i]];
                    if (n ? !u(r) : !fe.isEmptyObject(r))
                        return
                }
                (n || (delete s[a].data,
                u(s[a]))) && (o ? fe.cleanData([e], !0) : he.deleteExpando || s != s.window ? delete s[a] : s[a] = void 0)
            }
        }
    }
    function d(e, t, n, r) {
        var i, o = 1, s = 20, a = r ? function() {
            return r.cur()
        }
        : function() {
            return fe.css(e, t, "")
        }
        , l = a(), u = n && n[3] || (fe.cssNumber[t] ? "" : "px"), c = (fe.cssNumber[t] || "px" !== u && +l) && He.exec(fe.css(e, t));
        if (c && c[3] !== u) {
            u = u || c[3],
            n = n || [],
            c = +l || 1;
            do
                o = o || ".5",
                c /= o,
                fe.style(e, t, c + u);
            while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0,
        i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
        r && (r.unit = u,
        r.start = c,
        r.end = i)),
        i
    }
    function f(e) {
        var t = Ue.split("|")
          , n = e.createDocumentFragment();
        if (n.createElement)
            for (; t.length; )
                n.createElement(t.pop());
        return n
    }
    function p(e, t) {
        var n, r, i = 0, o = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : void 0;
        if (!o)
            for (o = [],
            n = e.childNodes || e; null != (r = n[i]); i++)
                !t || fe.nodeName(r, t) ? o.push(r) : fe.merge(o, p(r, t));
        return void 0 === t || t && fe.nodeName(e, t) ? fe.merge([e], o) : o
    }
    function m(e, t) {
        for (var n, r = 0; null != (n = e[r]); r++)
            fe._data(n, "globalEval", !t || fe._data(t[r], "globalEval"))
    }
    function g(e) {
        $e.test(e.type) && (e.defaultChecked = e.checked)
    }
    function v(e, t, n, r, i) {
        for (var o, s, a, l, u, c, h, d = e.length, v = f(t), y = [], b = 0; d > b; b++)
            if (s = e[b],
            s || 0 === s)
                if ("object" === fe.type(s))
                    fe.merge(y, s.nodeType ? [s] : s);
                else if (Ve.test(s)) {
                    for (l = l || v.appendChild(t.createElement("div")),
                    u = (je.exec(s) || ["", ""])[1].toLowerCase(),
                    h = ze[u] || ze._default,
                    l.innerHTML = h[1] + fe.htmlPrefilter(s) + h[2],
                    o = h[0]; o--; )
                        l = l.lastChild;
                    if (!he.leadingWhitespace && We.test(s) && y.push(t.createTextNode(We.exec(s)[0])),
                    !he.tbody)
                        for (s = "table" !== u || Xe.test(s) ? "<table>" !== h[1] || Xe.test(s) ? 0 : l : l.firstChild,
                        o = s && s.childNodes.length; o--; )
                            fe.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (fe.merge(y, l.childNodes),
                    l.textContent = ""; l.firstChild; )
                        l.removeChild(l.firstChild);
                    l = v.lastChild
                } else
                    y.push(t.createTextNode(s));
        for (l && v.removeChild(l),
        he.appendChecked || fe.grep(p(y, "input"), g),
        b = 0; s = y[b++]; )
            if (r && fe.inArray(s, r) > -1)
                i && i.push(s);
            else if (a = fe.contains(s.ownerDocument, s),
            l = p(v.appendChild(s), "script"),
            a && m(l),
            n)
                for (o = 0; s = l[o++]; )
                    Be.test(s.type || "") && n.push(s);
        return l = null,
        v
    }
    function y() {
        return !0
    }
    function b() {
        return !1
    }
    function x() {
        try {
            return re.activeElement
        } catch (e) {}
    }
    function w(e, t, n, r, i, o) {
        var s, a;
        if ("object" == typeof t) {
            "string" != typeof n && (r = r || n,
            n = void 0);
            for (a in t)
                w(e, a, n, r, t[a], o);
            return e
        }
        if (null == r && null == i ? (i = n,
        r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
        r = void 0) : (i = r,
        r = n,
        n = void 0)),
        i === !1)
            i = b;
        else if (!i)
            return e;
        return 1 === o && (s = i,
        i = function(e) {
            return fe().off(e),
            s.apply(this, arguments)
        }
        ,
        i.guid = s.guid || (s.guid = fe.guid++)),
        e.each(function() {
            fe.event.add(this, t, i, r, n)
        })
    }
    function _(e, t) {
        return fe.nodeName(e, "table") && fe.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function k(e) {
        return e.type = (null !== fe.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function S(e) {
        var t = it.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function C(e, t) {
        if (1 === t.nodeType && fe.hasData(e)) {
            var n, r, i, o = fe._data(e), s = fe._data(t, o), a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a)
                    for (r = 0,
                    i = a[n].length; i > r; r++)
                        fe.event.add(t, n, a[n][r])
            }
            s.data && (s.data = fe.extend({}, s.data))
        }
    }
    function T(e, t) {
        var n, r, i;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(),
            !he.noCloneEvent && t[fe.expando]) {
                i = fe._data(t);
                for (r in i.events)
                    fe.removeEvent(t, r, i.handle);
                t.removeAttribute(fe.expando)
            }
            "script" === n && t.text !== e.text ? (k(t).text = e.text,
            S(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML),
            he.html5Clone && e.innerHTML && !fe.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && $e.test(e.type) ? (t.defaultChecked = t.checked = e.checked,
            t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected : ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function L(e, t, n, r) {
        t = oe.apply([], t);
        var i, o, s, a, l, u, c = 0, h = e.length, d = h - 1, f = t[0], m = fe.isFunction(f);
        if (m || h > 1 && "string" == typeof f && !he.checkClone && rt.test(f))
            return e.each(function(i) {
                var o = e.eq(i);
                m && (t[0] = f.call(this, i, o.html())),
                L(o, t, n, r)
            });
        if (h && (u = v(t, e[0].ownerDocument, !1, e, r),
        i = u.firstChild,
        1 === u.childNodes.length && (u = i),
        i || r)) {
            for (a = fe.map(p(u, "script"), k),
            s = a.length; h > c; c++)
                o = u,
                c !== d && (o = fe.clone(o, !0, !0),
                s && fe.merge(a, p(o, "script"))),
                n.call(e[c], o, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument,
                fe.map(a, S),
                c = 0; s > c; c++)
                    o = a[c],
                    Be.test(o.type || "") && !fe._data(o, "globalEval") && fe.contains(l, o) && (o.src ? fe._evalUrl && fe._evalUrl(o.src) : fe.globalEval((o.text || o.textContent || o.innerHTML || "").replace(ot, "")));
            u = i = null
        }
        return e
    }
    function E(e, t, n) {
        for (var r, i = t ? fe.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
            n || 1 !== r.nodeType || fe.cleanData(p(r)),
            r.parentNode && (n && fe.contains(r.ownerDocument, r) && m(p(r, "script")),
            r.parentNode.removeChild(r));
        return e
    }
    function N(e, t) {
        var n = fe(t.createElement(e)).appendTo(t.body)
          , r = fe.css(n[0], "display");
        return n.detach(),
        r
    }
    function A(e) {
        var t = re
          , n = ut[e];
        return n || (n = N(e, t),
        "none" !== n && n || (lt = (lt || fe("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement),
        t = (lt[0].contentWindow || lt[0].contentDocument).document,
        t.write(),
        t.close(),
        n = N(e, t),
        lt.detach()),
        ut[e] = n),
        n
    }
    function M(e, t) {
        return {
            get: function() {
                return e() ? void delete this.get : (this.get = t).apply(this, arguments)
            }
        }
    }
    function D(e) {
        if (e in St)
            return e;
        for (var t = e.charAt(0).toUpperCase() + e.slice(1), n = kt.length; n--; )
            if (e = kt[n] + t,
            e in St)
                return e
    }
    function O(e, t) {
        for (var n, r, i, o = [], s = 0, a = e.length; a > s; s++)
            r = e[s],
            r.style && (o[s] = fe._data(r, "olddisplay"),
            n = r.style.display,
            t ? (o[s] || "none" !== n || (r.style.display = ""),
            "" === r.style.display && qe(r) && (o[s] = fe._data(r, "olddisplay", A(r.nodeName)))) : (i = qe(r),
            (n && "none" !== n || !i) && fe._data(r, "olddisplay", i ? n : fe.css(r, "display"))));
        for (s = 0; a > s; s++)
            r = e[s],
            r.style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[s] || "" : "none"));
        return e
    }
    function I(e, t, n) {
        var r = xt.exec(t);
        return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t
    }
    function P(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)
            "margin" === n && (s += fe.css(e, n + Re[o], !0, i)),
            r ? ("content" === n && (s -= fe.css(e, "padding" + Re[o], !0, i)),
            "margin" !== n && (s -= fe.css(e, "border" + Re[o] + "Width", !0, i))) : (s += fe.css(e, "padding" + Re[o], !0, i),
            "padding" !== n && (s += fe.css(e, "border" + Re[o] + "Width", !0, i)));
        return s
    }
    function H(e, t, n) {
        var r = !0
          , i = "width" === t ? e.offsetWidth : e.offsetHeight
          , o = pt(e)
          , s = he.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, o);
        if (0 >= i || null == i) {
            if (i = mt(e, t, o),
            (0 > i || null == i) && (i = e.style[t]),
            ht.test(i))
                return i;
            r = s && (he.boxSizingReliable() || i === e.style[t]),
            i = parseFloat(i) || 0
        }
        return i + P(e, t, n || (s ? "border" : "content"), r, o) + "px"
    }
    function R(e, t, n, r, i) {
        return new R.prototype.init(e,t,n,r,i)
    }
    function q() {
        return e.setTimeout(function() {
            Ct = void 0
        }),
        Ct = fe.now()
    }
    function F(e, t) {
        var n, r = {
            height: e
        }, i = 0;
        for (t = t ? 1 : 0; 4 > i; i += 2 - t)
            n = Re[i],
            r["margin" + n] = r["padding" + n] = e;
        return t && (r.opacity = r.width = e),
        r
    }
    function $(e, t, n) {
        for (var r, i = (W.tweeners[t] || []).concat(W.tweeners["*"]), o = 0, s = i.length; s > o; o++)
            if (r = i[o].call(n, t, e))
                return r
    }
    function j(e, t, n) {
        var r, i, o, s, a, l, u, c, h = this, d = {}, f = e.style, p = e.nodeType && qe(e), m = fe._data(e, "fxshow");
        n.queue || (a = fe._queueHooks(e, "fx"),
        null == a.unqueued && (a.unqueued = 0,
        l = a.empty.fire,
        a.empty.fire = function() {
            a.unqueued || l()
        }
        ),
        a.unqueued++,
        h.always(function() {
            h.always(function() {
                a.unqueued--,
                fe.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height"in t || "width"in t) && (n.overflow = [f.overflow, f.overflowX, f.overflowY],
        u = fe.css(e, "display"),
        c = "none" === u ? fe._data(e, "olddisplay") || A(e.nodeName) : u,
        "inline" === c && "none" === fe.css(e, "float") && (he.inlineBlockNeedsLayout && "inline" !== A(e.nodeName) ? f.zoom = 1 : f.display = "inline-block")),
        n.overflow && (f.overflow = "hidden",
        he.shrinkWrapBlocks() || h.always(function() {
            f.overflow = n.overflow[0],
            f.overflowX = n.overflow[1],
            f.overflowY = n.overflow[2]
        }));
        for (r in t)
            if (i = t[r],
            Lt.exec(i)) {
                if (delete t[r],
                o = o || "toggle" === i,
                i === (p ? "hide" : "show")) {
                    if ("show" !== i || !m || void 0 === m[r])
                        continue;
                    p = !0
                }
                d[r] = m && m[r] || fe.style(e, r)
            } else
                u = void 0;
        if (fe.isEmptyObject(d))
            "inline" === ("none" === u ? A(e.nodeName) : u) && (f.display = u);
        else {
            m ? "hidden"in m && (p = m.hidden) : m = fe._data(e, "fxshow", {}),
            o && (m.hidden = !p),
            p ? fe(e).show() : h.done(function() {
                fe(e).hide()
            }),
            h.done(function() {
                var t;
                fe._removeData(e, "fxshow");
                for (t in d)
                    fe.style(e, t, d[t])
            });
            for (r in d)
                s = $(p ? m[r] : 0, r, h),
                r in m || (m[r] = s.start,
                p && (s.end = s.start,
                s.start = "width" === r || "height" === r ? 1 : 0))
        }
    }
    function B(e, t) {
        var n, r, i, o, s;
        for (n in e)
            if (r = fe.camelCase(n),
            i = t[r],
            o = e[n],
            fe.isArray(o) && (i = o[1],
            o = e[n] = o[0]),
            n !== r && (e[r] = o,
            delete e[n]),
            s = fe.cssHooks[r],
            s && "expand"in s) {
                o = s.expand(o),
                delete e[r];
                for (n in o)
                    n in e || (e[n] = o[n],
                    t[n] = i)
            } else
                t[r] = i
    }
    function W(e, t, n) {
        var r, i, o = 0, s = W.prefilters.length, a = fe.Deferred().always(function() {
            delete l.elem
        }), l = function() {
            if (i)
                return !1;
            for (var t = Ct || q(), n = Math.max(0, u.startTime + u.duration - t), r = n / u.duration || 0, o = 1 - r, s = 0, l = u.tweens.length; l > s; s++)
                u.tweens[s].run(o);
            return a.notifyWith(e, [u, o, n]),
            1 > o && l ? n : (a.resolveWith(e, [u]),
            !1)
        }, u = a.promise({
            elem: e,
            props: fe.extend({}, t),
            opts: fe.extend(!0, {
                specialEasing: {},
                easing: fe.easing._default
            }, n),
            originalProperties: t,
            originalOptions: n,
            startTime: Ct || q(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var r = fe.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);
                return u.tweens.push(r),
                r
            },
            stop: function(t) {
                var n = 0
                  , r = t ? u.tweens.length : 0;
                if (i)
                    return this;
                for (i = !0; r > n; n++)
                    u.tweens[n].run(1);
                return t ? (a.notifyWith(e, [u, 1, 0]),
                a.resolveWith(e, [u, t])) : a.rejectWith(e, [u, t]),
                this
            }
        }), c = u.props;
        for (B(c, u.opts.specialEasing); s > o; o++)
            if (r = W.prefilters[o].call(u, e, c, u.opts))
                return fe.isFunction(r.stop) && (fe._queueHooks(u.elem, u.opts.queue).stop = fe.proxy(r.stop, r)),
                r;
        return fe.map(c, $, u),
        fe.isFunction(u.opts.start) && u.opts.start.call(e, u),
        fe.fx.timer(fe.extend(l, {
            elem: e,
            anim: u,
            queue: u.opts.queue
        })),
        u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }
    function U(e) {
        return fe.attr(e, "class") || ""
    }
    function z(e) {
        return function(t, n) {
            "string" != typeof t && (n = t,
            t = "*");
            var r, i = 0, o = t.toLowerCase().match(Ne) || [];
            if (fe.isFunction(n))
                for (; r = o[i++]; )
                    "+" === r.charAt(0) ? (r = r.slice(1) || "*",
                    (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n)
        }
    }
    function V(e, t, n, r) {
        function i(a) {
            var l;
            return o[a] = !0,
            fe.each(e[a] || [], function(e, a) {
                var u = a(t, n, r);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (t.dataTypes.unshift(u),
                i(u),
                !1)
            }),
            l
        }
        var o = {}
          , s = e === Yt;
        return i(t.dataTypes[0]) || !o["*"] && i("*")
    }
    function X(e, t) {
        var n, r, i = fe.ajaxSettings.flatOptions || {};
        for (r in t)
            void 0 !== t[r] && ((i[r] ? e : n || (n = {}))[r] = t[r]);
        return n && fe.extend(!0, e, n),
        e
    }
    function Q(e, t, n) {
        for (var r, i, o, s, a = e.contents, l = e.dataTypes; "*" === l[0]; )
            l.shift(),
            void 0 === i && (i = e.mimeType || t.getResponseHeader("Content-Type"));
        if (i)
            for (s in a)
                if (a[s] && a[s].test(i)) {
                    l.unshift(s);
                    break
                }
        if (l[0]in n)
            o = l[0];
        else {
            for (s in n) {
                if (!l[0] || e.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                r || (r = s)
            }
            o = o || r
        }
        return o ? (o !== l[0] && l.unshift(o),
        n[o]) : void 0
    }
    function G(e, t, n, r) {
        var i, o, s, a, l, u = {}, c = e.dataTypes.slice();
        if (c[1])
            for (s in e.converters)
                u[s.toLowerCase()] = e.converters[s];
        for (o = c.shift(); o; )
            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
            !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
            l = o,
            o = c.shift())
                if ("*" === o)
                    o = l;
                else if ("*" !== l && l !== o) {
                    if (s = u[l + " " + o] || u["* " + o],
                    !s)
                        for (i in u)
                            if (a = i.split(" "),
                            a[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                s === !0 ? s = u[i] : u[i] !== !0 && (o = a[0],
                                c.unshift(a[1]));
                                break
                            }
                    if (s !== !0)
                        if (s && e["throws"])
                            t = s(t);
                        else
                            try {
                                t = s(t)
                            } catch (h) {
                                return {
                                    state: "parsererror",
                                    error: s ? h : "No conversion from " + l + " to " + o
                                }
                            }
                }
        return {
            state: "success",
            data: t
        }
    }
    function K(e) {
        return e.style && e.style.display || fe.css(e, "display")
    }
    function J(e) {
        if (!fe.contains(e.ownerDocument || re, e))
            return !0;
        for (; e && 1 === e.nodeType; ) {
            if ("none" === K(e) || "hidden" === e.type)
                return !0;
            e = e.parentNode
        }
        return !1
    }
    function Y(e, t, n, r) {
        var i;
        if (fe.isArray(t))
            fe.each(t, function(t, i) {
                n || rn.test(e) ? r(e, i) : Y(e + "[" + ("object" == typeof i && null != i ? t : "") + "]", i, n, r)
            });
        else if (n || "object" !== fe.type(t))
            r(e, t);
        else
            for (i in t)
                Y(e + "[" + i + "]", t[i], n, r)
    }
    function Z() {
        try {
            return new e.XMLHttpRequest
        } catch (t) {}
    }
    function ee() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch (t) {}
    }
    function te(e) {
        return fe.isWindow(e) ? e : 9 === e.nodeType ? e.defaultView || e.parentWindow : !1
    }
    var ne = []
      , re = e.document
      , ie = ne.slice
      , oe = ne.concat
      , se = ne.push
      , ae = ne.indexOf
      , le = {}
      , ue = le.toString
      , ce = le.hasOwnProperty
      , he = {}
      , de = "1.12.4"
      , fe = function(e, t) {
        return new fe.fn.init(e,t)
    }
      , pe = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
      , me = /^-ms-/
      , ge = /-([\da-z])/gi
      , ve = function(e, t) {
        return t.toUpperCase()
    };
    fe.fn = fe.prototype = {
        jquery: de,
        constructor: fe,
        selector: "",
        length: 0,
        toArray: function() {
            return ie.call(this)
        },
        get: function(e) {
            return null != e ? 0 > e ? this[e + this.length] : this[e] : ie.call(this)
        },
        pushStack: function(e) {
            var t = fe.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e) {
            return fe.each(this, e)
        },
        map: function(e) {
            return this.pushStack(fe.map(this, function(t, n) {
                return e.call(t, n, t)
            }))
        },
        slice: function() {
            return this.pushStack(ie.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq(-1)
        },
        eq: function(e) {
            var t = this.length
              , n = +e + (0 > e ? t : 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        end: function() {
            return this.prevObject || this.constructor()
        },
        push: se,
        sort: ne.sort,
        splice: ne.splice
    },
    fe.extend = fe.fn.extend = function() {
        var e, t, n, r, i, o, s = arguments[0] || {}, a = 1, l = arguments.length, u = !1;
        for ("boolean" == typeof s && (u = s,
        s = arguments[a] || {},
        a++),
        "object" == typeof s || fe.isFunction(s) || (s = {}),
        a === l && (s = this,
        a--); l > a; a++)
            if (null != (i = arguments[a]))
                for (r in i)
                    e = s[r],
                    n = i[r],
                    s !== n && (u && n && (fe.isPlainObject(n) || (t = fe.isArray(n))) ? (t ? (t = !1,
                    o = e && fe.isArray(e) ? e : []) : o = e && fe.isPlainObject(e) ? e : {},
                    s[r] = fe.extend(u, o, n)) : void 0 !== n && (s[r] = n));
        return s
    }
    ,
    fe.extend({
        expando: "jQuery" + (de + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function(e) {
            throw new Error(e)
        },
        noop: function() {},
        isFunction: function(e) {
            return "function" === fe.type(e)
        },
        isArray: Array.isArray || function(e) {
            return "array" === fe.type(e)
        }
        ,
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            var t = e && e.toString();
            return !fe.isArray(e) && t - parseFloat(t) + 1 >= 0
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e)
                return !1;
            return !0
        },
        isPlainObject: function(e) {
            var t;
            if (!e || "object" !== fe.type(e) || e.nodeType || fe.isWindow(e))
                return !1;
            try {
                if (e.constructor && !ce.call(e, "constructor") && !ce.call(e.constructor.prototype, "isPrototypeOf"))
                    return !1
            } catch (n) {
                return !1
            }
            if (!he.ownFirst)
                for (t in e)
                    return ce.call(e, t);
            for (t in e)
                ;
            return void 0 === t || ce.call(e, t)
        },
        type: function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? le[ue.call(e)] || "object" : typeof e
        },
        globalEval: function(t) {
            t && fe.trim(t) && (e.execScript || function(t) {
                e.eval.call(e, t)
            }
            )(t)
        },
        camelCase: function(e) {
            return e.replace(me, "ms-").replace(ge, ve)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t) {
            var r, i = 0;
            if (n(e))
                for (r = e.length; r > i && t.call(e[i], i, e[i]) !== !1; i++)
                    ;
            else
                for (i in e)
                    if (t.call(e[i], i, e[i]) === !1)
                        break;
            return e
        },
        trim: function(e) {
            return null == e ? "" : (e + "").replace(pe, "")
        },
        makeArray: function(e, t) {
            var r = t || [];
            return null != e && (n(Object(e)) ? fe.merge(r, "string" == typeof e ? [e] : e) : se.call(r, e)),
            r
        },
        inArray: function(e, t, n) {
            var r;
            if (t) {
                if (ae)
                    return ae.call(t, e, n);
                for (r = t.length,
                n = n ? 0 > n ? Math.max(0, r + n) : n : 0; r > n; n++)
                    if (n in t && t[n] === e)
                        return n
            }
            return -1
        },
        merge: function(e, t) {
            for (var n = +t.length, r = 0, i = e.length; n > r; )
                e[i++] = t[r++];
            if (n !== n)
                for (; void 0 !== t[r]; )
                    e[i++] = t[r++];
            return e.length = i,
            e
        },
        grep: function(e, t, n) {
            for (var r, i = [], o = 0, s = e.length, a = !n; s > o; o++)
                r = !t(e[o], o),
                r !== a && i.push(e[o]);
            return i
        },
        map: function(e, t, r) {
            var i, o, s = 0, a = [];
            if (n(e))
                for (i = e.length; i > s; s++)
                    o = t(e[s], s, r),
                    null != o && a.push(o);
            else
                for (s in e)
                    o = t(e[s], s, r),
                    null != o && a.push(o);
            return oe.apply([], a)
        },
        guid: 1,
        proxy: function(e, t) {
            var n, r, i;
            return "string" == typeof t && (i = e[t],
            t = e,
            e = i),
            fe.isFunction(e) ? (n = ie.call(arguments, 2),
            r = function() {
                return e.apply(t || this, n.concat(ie.call(arguments)))
            }
            ,
            r.guid = e.guid = e.guid || fe.guid++,
            r) : void 0
        },
        now: function() {
            return +new Date
        },
        support: he
    }),
    "function" == typeof Symbol && (fe.fn[Symbol.iterator] = ne[Symbol.iterator]),
    fe.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
        le["[object " + t + "]"] = t.toLowerCase()
    });
    var ye = function(e) {
        function t(e, t, n, r) {
            var i, o, s, a, l, u, h, f, p = t && t.ownerDocument, m = t ? t.nodeType : 9;
            if (n = n || [],
            "string" != typeof e || !e || 1 !== m && 9 !== m && 11 !== m)
                return n;
            if (!r && ((t ? t.ownerDocument || t : $) !== D && M(t),
            t = t || D,
            I)) {
                if (11 !== m && (u = ve.exec(e)))
                    if (i = u[1]) {
                        if (9 === m) {
                            if (!(s = t.getElementById(i)))
                                return n;
                            if (s.id === i)
                                return n.push(s),
                                n
                        } else if (p && (s = p.getElementById(i)) && q(t, s) && s.id === i)
                            return n.push(s),
                            n
                    } else {
                        if (u[2])
                            return Y.apply(n, t.getElementsByTagName(e)),
                            n;
                        if ((i = u[3]) && w.getElementsByClassName && t.getElementsByClassName)
                            return Y.apply(n, t.getElementsByClassName(i)),
                            n
                    }
                if (w.qsa && !z[e + " "] && (!P || !P.test(e))) {
                    if (1 !== m)
                        p = t,
                        f = e;
                    else if ("object" !== t.nodeName.toLowerCase()) {
                        for ((a = t.getAttribute("id")) ? a = a.replace(be, "\\$&") : t.setAttribute("id", a = F),
                        h = C(e),
                        o = h.length,
                        l = de.test(a) ? "#" + a : "[id='" + a + "']"; o--; )
                            h[o] = l + " " + d(h[o]);
                        f = h.join(","),
                        p = ye.test(e) && c(t.parentNode) || t
                    }
                    if (f)
                        try {
                            return Y.apply(n, p.querySelectorAll(f)),
                            n
                        } catch (g) {} finally {
                            a === F && t.removeAttribute("id")
                        }
                }
            }
            return L(e.replace(ae, "$1"), t, n, r)
        }
        function n() {
            function e(n, r) {
                return t.push(n + " ") > _.cacheLength && delete e[t.shift()],
                e[n + " "] = r
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[F] = !0,
            e
        }
        function i(e) {
            var t = D.createElement("div");
            try {
                return !!e(t)
            } catch (n) {
                return !1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function o(e, t) {
            for (var n = e.split("|"), r = n.length; r--; )
                _.attrHandle[n[r]] = t
        }
        function s(e, t) {
            var n = t && e
              , r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || X) - (~e.sourceIndex || X);
            if (r)
                return r;
            if (n)
                for (; n = n.nextSibling; )
                    if (n === t)
                        return -1;
            return e ? 1 : -1
        }
        function a(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, r) {
                    for (var i, o = e([], n.length, t), s = o.length; s--; )
                        n[i = o[s]] && (n[i] = !(r[i] = n[i]))
                })
            })
        }
        function c(e) {
            return e && "undefined" != typeof e.getElementsByTagName && e
        }
        function h() {}
        function d(e) {
            for (var t = 0, n = e.length, r = ""; n > t; t++)
                r += e[t].value;
            return r
        }
        function f(e, t, n) {
            var r = t.dir
              , i = n && "parentNode" === r
              , o = B++;
            return t.first ? function(t, n, o) {
                for (; t = t[r]; )
                    if (1 === t.nodeType || i)
                        return e(t, n, o)
            }
            : function(t, n, s) {
                var a, l, u, c = [j, o];
                if (s) {
                    for (; t = t[r]; )
                        if ((1 === t.nodeType || i) && e(t, n, s))
                            return !0
                } else
                    for (; t = t[r]; )
                        if (1 === t.nodeType || i) {
                            if (u = t[F] || (t[F] = {}),
                            l = u[t.uniqueID] || (u[t.uniqueID] = {}),
                            (a = l[r]) && a[0] === j && a[1] === o)
                                return c[2] = a[2];
                            if (l[r] = c,
                            c[2] = e(t, n, s))
                                return !0
                        }
            }
        }
        function p(e) {
            return e.length > 1 ? function(t, n, r) {
                for (var i = e.length; i--; )
                    if (!e[i](t, n, r))
                        return !1;
                return !0
            }
            : e[0]
        }
        function m(e, n, r) {
            for (var i = 0, o = n.length; o > i; i++)
                t(e, n[i], r);
            return r
        }
        function g(e, t, n, r, i) {
            for (var o, s = [], a = 0, l = e.length, u = null != t; l > a; a++)
                (o = e[a]) && (!n || n(o, r, i)) && (s.push(o),
                u && t.push(a));
            return s
        }
        function v(e, t, n, i, o, s) {
            return i && !i[F] && (i = v(i)),
            o && !o[F] && (o = v(o, s)),
            r(function(r, s, a, l) {
                var u, c, h, d = [], f = [], p = s.length, v = r || m(t || "*", a.nodeType ? [a] : a, []), y = !e || !r && t ? v : g(v, d, e, a, l), b = n ? o || (r ? e : p || i) ? [] : s : y;
                if (n && n(y, b, a, l),
                i)
                    for (u = g(b, f),
                    i(u, [], a, l),
                    c = u.length; c--; )
                        (h = u[c]) && (b[f[c]] = !(y[f[c]] = h));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (u = [],
                            c = b.length; c--; )
                                (h = b[c]) && u.push(y[c] = h);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--; )
                            (h = b[c]) && (u = o ? ee(r, h) : d[c]) > -1 && (r[u] = !(s[u] = h))
                    }
                } else
                    b = g(b === s ? b.splice(p, b.length) : b),
                    o ? o(null, s, b, l) : Y.apply(s, b)
            })
        }
        function y(e) {
            for (var t, n, r, i = e.length, o = _.relative[e[0].type], s = o || _.relative[" "], a = o ? 1 : 0, l = f(function(e) {
                return e === t
            }, s, !0), u = f(function(e) {
                return ee(t, e) > -1
            }, s, !0), c = [function(e, n, r) {
                var i = !o && (r || n !== E) || ((t = n).nodeType ? l(e, n, r) : u(e, n, r));
                return t = null,
                i
            }
            ]; i > a; a++)
                if (n = _.relative[e[a].type])
                    c = [f(p(c), n)];
                else {
                    if (n = _.filter[e[a].type].apply(null, e[a].matches),
                    n[F]) {
                        for (r = ++a; i > r && !_.relative[e[r].type]; r++)
                            ;
                        return v(a > 1 && p(c), a > 1 && d(e.slice(0, a - 1).concat({
                            value: " " === e[a - 2].type ? "*" : ""
                        })).replace(ae, "$1"), n, r > a && y(e.slice(a, r)), i > r && y(e = e.slice(r)), i > r && d(e))
                    }
                    c.push(n)
                }
            return p(c)
        }
        function b(e, n) {
            var i = n.length > 0
              , o = e.length > 0
              , s = function(r, s, a, l, u) {
                var c, h, d, f = 0, p = "0", m = r && [], v = [], y = E, b = r || o && _.find.TAG("*", u), x = j += null == y ? 1 : Math.random() || .1, w = b.length;
                for (u && (E = s === D || s || u); p !== w && null != (c = b[p]); p++) {
                    if (o && c) {
                        for (h = 0,
                        s || c.ownerDocument === D || (M(c),
                        a = !I); d = e[h++]; )
                            if (d(c, s || D, a)) {
                                l.push(c);
                                break
                            }
                        u && (j = x)
                    }
                    i && ((c = !d && c) && f--,
                    r && m.push(c))
                }
                if (f += p,
                i && p !== f) {
                    for (h = 0; d = n[h++]; )
                        d(m, v, s, a);
                    if (r) {
                        if (f > 0)
                            for (; p--; )
                                m[p] || v[p] || (v[p] = K.call(l));
                        v = g(v)
                    }
                    Y.apply(l, v),
                    u && !r && v.length > 0 && f + n.length > 1 && t.uniqueSort(l)
                }
                return u && (j = x,
                E = y),
                m
            };
            return i ? r(s) : s
        }
        var x, w, _, k, S, C, T, L, E, N, A, M, D, O, I, P, H, R, q, F = "sizzle" + 1 * new Date, $ = e.document, j = 0, B = 0, W = n(), U = n(), z = n(), V = function(e, t) {
            return e === t && (A = !0),
            0
        }, X = 1 << 31, Q = {}.hasOwnProperty, G = [], K = G.pop, J = G.push, Y = G.push, Z = G.slice, ee = function(e, t) {
            for (var n = 0, r = e.length; r > n; n++)
                if (e[n] === t)
                    return n;
            return -1
        }, te = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", ne = "[\\x20\\t\\r\\n\\f]", re = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", ie = "\\[" + ne + "*(" + re + ")(?:" + ne + "*([*^$|!~]?=)" + ne + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + re + "))|)" + ne + "*\\]", oe = ":(" + re + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + ie + ")*)|.*)\\)|)", se = new RegExp(ne + "+","g"), ae = new RegExp("^" + ne + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ne + "+$","g"), le = new RegExp("^" + ne + "*," + ne + "*"), ue = new RegExp("^" + ne + "*([>+~]|" + ne + ")" + ne + "*"), ce = new RegExp("=" + ne + "*([^\\]'\"]*?)" + ne + "*\\]","g"), he = new RegExp(oe), de = new RegExp("^" + re + "$"), fe = {
            ID: new RegExp("^#(" + re + ")"),
            CLASS: new RegExp("^\\.(" + re + ")"),
            TAG: new RegExp("^(" + re + "|[*])"),
            ATTR: new RegExp("^" + ie),
            PSEUDO: new RegExp("^" + oe),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ne + "*(even|odd|(([+-]|)(\\d*)n|)" + ne + "*(?:([+-]|)" + ne + "*(\\d+)|))" + ne + "*\\)|)","i"),
            bool: new RegExp("^(?:" + te + ")$","i"),
            needsContext: new RegExp("^" + ne + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ne + "*((?:-\\d)?\\d*)" + ne + "*\\)|)(?=[^-]|$)","i")
        }, pe = /^(?:input|select|textarea|button)$/i, me = /^h\d$/i, ge = /^[^{]+\{\s*\[native \w/, ve = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ye = /[+~]/, be = /'|\\/g, xe = new RegExp("\\\\([\\da-f]{1,6}" + ne + "?|(" + ne + ")|.)","ig"), we = function(e, t, n) {
            var r = "0x" + t - 65536;
            return r !== r || n ? t : 0 > r ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320)
        }, _e = function() {
            M()
        };
        try {
            Y.apply(G = Z.call($.childNodes), $.childNodes),
            G[$.childNodes.length].nodeType
        } catch (ke) {
            Y = {
                apply: G.length ? function(e, t) {
                    J.apply(e, Z.call(t))
                }
                : function(e, t) {
                    for (var n = e.length, r = 0; e[n++] = t[r++]; )
                        ;
                    e.length = n - 1
                }
            }
        }
        w = t.support = {},
        S = t.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName : !1
        }
        ,
        M = t.setDocument = function(e) {
            var t, n, r = e ? e.ownerDocument || e : $;
            return r !== D && 9 === r.nodeType && r.documentElement ? (D = r,
            O = D.documentElement,
            I = !S(D),
            (n = D.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", _e, !1) : n.attachEvent && n.attachEvent("onunload", _e)),
            w.attributes = i(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }),
            w.getElementsByTagName = i(function(e) {
                return e.appendChild(D.createComment("")),
                !e.getElementsByTagName("*").length
            }),
            w.getElementsByClassName = ge.test(D.getElementsByClassName),
            w.getById = i(function(e) {
                return O.appendChild(e).id = F,
                !D.getElementsByName || !D.getElementsByName(F).length
            }),
            w.getById ? (_.find.ID = function(e, t) {
                if ("undefined" != typeof t.getElementById && I) {
                    var n = t.getElementById(e);
                    return n ? [n] : []
                }
            }
            ,
            _.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }
            ) : (delete _.find.ID,
            _.filter.ID = function(e) {
                var t = e.replace(xe, we);
                return function(e) {
                    var n = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }
            ),
            _.find.TAG = w.getElementsByTagName ? function(e, t) {
                return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : w.qsa ? t.querySelectorAll(e) : void 0
            }
            : function(e, t) {
                var n, r = [], i = 0, o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[i++]; )
                        1 === n.nodeType && r.push(n);
                    return r
                }
                return o
            }
            ,
            _.find.CLASS = w.getElementsByClassName && function(e, t) {
                return "undefined" != typeof t.getElementsByClassName && I ? t.getElementsByClassName(e) : void 0
            }
            ,
            H = [],
            P = [],
            (w.qsa = ge.test(D.querySelectorAll)) && (i(function(e) {
                O.appendChild(e).innerHTML = "<a id='" + F + "'></a><select id='" + F + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                e.querySelectorAll("[msallowcapture^='']").length && P.push("[*^$]=" + ne + "*(?:''|\"\")"),
                e.querySelectorAll("[selected]").length || P.push("\\[" + ne + "*(?:value|" + te + ")"),
                e.querySelectorAll("[id~=" + F + "-]").length || P.push("~="),
                e.querySelectorAll(":checked").length || P.push(":checked"),
                e.querySelectorAll("a#" + F + "+*").length || P.push(".#.+[+~]")
            }),
            i(function(e) {
                var t = D.createElement("input");
                t.setAttribute("type", "hidden"),
                e.appendChild(t).setAttribute("name", "D"),
                e.querySelectorAll("[name=d]").length && P.push("name" + ne + "*[*^$|!~]?="),
                e.querySelectorAll(":enabled").length || P.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                P.push(",.*:")
            })),
            (w.matchesSelector = ge.test(R = O.matches || O.webkitMatchesSelector || O.mozMatchesSelector || O.oMatchesSelector || O.msMatchesSelector)) && i(function(e) {
                w.disconnectedMatch = R.call(e, "div"),
                R.call(e, "[s!='']:x"),
                H.push("!=", oe)
            }),
            P = P.length && new RegExp(P.join("|")),
            H = H.length && new RegExp(H.join("|")),
            t = ge.test(O.compareDocumentPosition),
            q = t || ge.test(O.contains) ? function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement : e
                  , r = t && t.parentNode;
                return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
            }
            : function(e, t) {
                if (t)
                    for (; t = t.parentNode; )
                        if (t === e)
                            return !0;
                return !1
            }
            ,
            V = t ? function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                return n ? n : (n = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1,
                1 & n || !w.sortDetached && t.compareDocumentPosition(e) === n ? e === D || e.ownerDocument === $ && q($, e) ? -1 : t === D || t.ownerDocument === $ && q($, t) ? 1 : N ? ee(N, e) - ee(N, t) : 0 : 4 & n ? -1 : 1)
            }
            : function(e, t) {
                if (e === t)
                    return A = !0,
                    0;
                var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], l = [t];
                if (!i || !o)
                    return e === D ? -1 : t === D ? 1 : i ? -1 : o ? 1 : N ? ee(N, e) - ee(N, t) : 0;
                if (i === o)
                    return s(e, t);
                for (n = e; n = n.parentNode; )
                    a.unshift(n);
                for (n = t; n = n.parentNode; )
                    l.unshift(n);
                for (; a[r] === l[r]; )
                    r++;
                return r ? s(a[r], l[r]) : a[r] === $ ? -1 : l[r] === $ ? 1 : 0
            }
            ,
            D) : D
        }
        ,
        t.matches = function(e, n) {
            return t(e, null, null, n)
        }
        ,
        t.matchesSelector = function(e, n) {
            if ((e.ownerDocument || e) !== D && M(e),
            n = n.replace(ce, "='$1']"),
            w.matchesSelector && I && !z[n + " "] && (!H || !H.test(n)) && (!P || !P.test(n)))
                try {
                    var r = R.call(e, n);
                    if (r || w.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                        return r
                } catch (i) {}
            return t(n, D, null, [e]).length > 0
        }
        ,
        t.contains = function(e, t) {
            return (e.ownerDocument || e) !== D && M(e),
            q(e, t)
        }
        ,
        t.attr = function(e, t) {
            (e.ownerDocument || e) !== D && M(e);
            var n = _.attrHandle[t.toLowerCase()]
              , r = n && Q.call(_.attrHandle, t.toLowerCase()) ? n(e, t, !I) : void 0;
            return void 0 !== r ? r : w.attributes || !I ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }
        ,
        t.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        }
        ,
        t.uniqueSort = function(e) {
            var t, n = [], r = 0, i = 0;
            if (A = !w.detectDuplicates,
            N = !w.sortStable && e.slice(0),
            e.sort(V),
            A) {
                for (; t = e[i++]; )
                    t === e[i] && (r = n.push(i));
                for (; r--; )
                    e.splice(n[r], 1)
            }
            return N = null,
            e
        }
        ,
        k = t.getText = function(e) {
            var t, n = "", r = 0, i = e.nodeType;
            if (i) {
                if (1 === i || 9 === i || 11 === i) {
                    if ("string" == typeof e.textContent)
                        return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling)
                        n += k(e)
                } else if (3 === i || 4 === i)
                    return e.nodeValue
            } else
                for (; t = e[r++]; )
                    n += k(t);
            return n
        }
        ,
        _ = t.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: fe,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(xe, we),
                    e[3] = (e[3] || e[4] || e[5] || "").replace(xe, we),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || t.error(e[0]),
                    e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                    e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && t.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var t, n = !e[6] && e[2];
                    return fe.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && he.test(n) && (t = C(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                    e[2] = n.slice(0, t)),
                    e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(xe, we).toLowerCase();
                    return "*" === e ? function() {
                        return !0
                    }
                    : function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = W[e + " "];
                    return t || (t = new RegExp("(^|" + ne + ")" + e + "(" + ne + "|$)")) && W(e, function(e) {
                        return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, n, r) {
                    return function(i) {
                        var o = t.attr(i, e);
                        return null == o ? "!=" === n : n ? (o += "",
                        "=" === n ? o === r : "!=" === n ? o !== r : "^=" === n ? r && 0 === o.indexOf(r) : "*=" === n ? r && o.indexOf(r) > -1 : "$=" === n ? r && o.slice(-r.length) === r : "~=" === n ? (" " + o.replace(se, " ") + " ").indexOf(r) > -1 : "|=" === n ? o === r || o.slice(0, r.length + 1) === r + "-" : !1) : !0
                    }
                },
                CHILD: function(e, t, n, r, i) {
                    var o = "nth" !== e.slice(0, 3)
                      , s = "last" !== e.slice(-4)
                      , a = "of-type" === t;
                    return 1 === r && 0 === i ? function(e) {
                        return !!e.parentNode
                    }
                    : function(t, n, l) {
                        var u, c, h, d, f, p, m = o !== s ? "nextSibling" : "previousSibling", g = t.parentNode, v = a && t.nodeName.toLowerCase(), y = !l && !a, b = !1;
                        if (g) {
                            if (o) {
                                for (; m; ) {
                                    for (d = t; d = d[m]; )
                                        if (a ? d.nodeName.toLowerCase() === v : 1 === d.nodeType)
                                            return !1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return !0
                            }
                            if (p = [s ? g.firstChild : g.lastChild],
                            s && y) {
                                for (d = g,
                                h = d[F] || (d[F] = {}),
                                c = h[d.uniqueID] || (h[d.uniqueID] = {}),
                                u = c[e] || [],
                                f = u[0] === j && u[1],
                                b = f && u[2],
                                d = f && g.childNodes[f]; d = ++f && d && d[m] || (b = f = 0) || p.pop(); )
                                    if (1 === d.nodeType && ++b && d === t) {
                                        c[e] = [j, f, b];
                                        break
                                    }
                            } else if (y && (d = t,
                            h = d[F] || (d[F] = {}),
                            c = h[d.uniqueID] || (h[d.uniqueID] = {}),
                            u = c[e] || [],
                            f = u[0] === j && u[1],
                            b = f),
                            b === !1)
                                for (; (d = ++f && d && d[m] || (b = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v : 1 !== d.nodeType) || !++b || (y && (h = d[F] || (d[F] = {}),
                                c = h[d.uniqueID] || (h[d.uniqueID] = {}),
                                c[e] = [j, b]),
                                d !== t)); )
                                    ;
                            return b -= i,
                            b === r || b % r === 0 && b / r >= 0
                        }
                    }
                },
                PSEUDO: function(e, n) {
                    var i, o = _.pseudos[e] || _.setFilters[e.toLowerCase()] || t.error("unsupported pseudo: " + e);
                    return o[F] ? o(n) : o.length > 1 ? (i = [e, e, "", n],
                    _.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, t) {
                        for (var r, i = o(e, n), s = i.length; s--; )
                            r = ee(e, i[s]),
                            e[r] = !(t[r] = i[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }
                    ) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = []
                      , n = []
                      , i = T(e.replace(ae, "$1"));
                    return i[F] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--; )
                            (o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        t[0] = null,
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(n) {
                        return t(e, n).length > 0
                    }
                }),
                contains: r(function(e) {
                    return e = e.replace(xe, we),
                    function(t) {
                        return (t.textContent || t.innerText || k(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return de.test(e || "") || t.error("unsupported lang: " + e),
                    e = e.replace(xe, we).toLowerCase(),
                    function(t) {
                        var n;
                        do
                            if (n = I ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang"))
                                return n = n.toLowerCase(),
                                n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return !1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === O
                },
                focus: function(e) {
                    return e === D.activeElement && (!D.hasFocus || D.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling)
                        if (e.nodeType < 6)
                            return !1;
                    return !0
                },
                parent: function(e) {
                    return !_.pseudos.empty(e)
                },
                header: function(e) {
                    return me.test(e.nodeName)
                },
                input: function(e) {
                    return pe.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t : n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2)
                        e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; --r >= 0; )
                        e.push(r);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var r = 0 > n ? n + t : n; ++r < t; )
                        e.push(r);
                    return e
                })
            }
        },
        _.pseudos.nth = _.pseudos.eq;
        for (x in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        })
            _.pseudos[x] = a(x);
        for (x in {
            submit: !0,
            reset: !0
        })
            _.pseudos[x] = l(x);
        return h.prototype = _.filters = _.pseudos,
        _.setFilters = new h,
        C = t.tokenize = function(e, n) {
            var r, i, o, s, a, l, u, c = U[e + " "];
            if (c)
                return n ? 0 : c.slice(0);
            for (a = e,
            l = [],
            u = _.preFilter; a; ) {
                (!r || (i = le.exec(a))) && (i && (a = a.slice(i[0].length) || a),
                l.push(o = [])),
                r = !1,
                (i = ue.exec(a)) && (r = i.shift(),
                o.push({
                    value: r,
                    type: i[0].replace(ae, " ")
                }),
                a = a.slice(r.length));
                for (s in _.filter)
                    !(i = fe[s].exec(a)) || u[s] && !(i = u[s](i)) || (r = i.shift(),
                    o.push({
                        value: r,
                        type: s,
                        matches: i
                    }),
                    a = a.slice(r.length));
                if (!r)
                    break
            }
            return n ? a.length : a ? t.error(e) : U(e, l).slice(0)
        }
        ,
        T = t.compile = function(e, t) {
            var n, r = [], i = [], o = z[e + " "];
            if (!o) {
                for (t || (t = C(e)),
                n = t.length; n--; )
                    o = y(t[n]),
                    o[F] ? r.push(o) : i.push(o);
                o = z(e, b(i, r)),
                o.selector = e
            }
            return o
        }
        ,
        L = t.select = function(e, t, n, r) {
            var i, o, s, a, l, u = "function" == typeof e && e, h = !r && C(e = u.selector || e);
            if (n = n || [],
            1 === h.length) {
                if (o = h[0] = h[0].slice(0),
                o.length > 2 && "ID" === (s = o[0]).type && w.getById && 9 === t.nodeType && I && _.relative[o[1].type]) {
                    if (t = (_.find.ID(s.matches[0].replace(xe, we), t) || [])[0],
                    !t)
                        return n;
                    u && (t = t.parentNode),
                    e = e.slice(o.shift().value.length)
                }
                for (i = fe.needsContext.test(e) ? 0 : o.length; i-- && (s = o[i],
                !_.relative[a = s.type]); )
                    if ((l = _.find[a]) && (r = l(s.matches[0].replace(xe, we), ye.test(o[0].type) && c(t.parentNode) || t))) {
                        if (o.splice(i, 1),
                        e = r.length && d(o),
                        !e)
                            return Y.apply(n, r),
                            n;
                        break
                    }
            }
            return (u || T(e, h))(r, t, !I, n, !t || ye.test(e) && c(t.parentNode) || t),
            n
        }
        ,
        w.sortStable = F.split("").sort(V).join("") === F,
        w.detectDuplicates = !!A,
        M(),
        w.sortDetached = i(function(e) {
            return 1 & e.compareDocumentPosition(D.createElement("div"))
        }),
        i(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        w.attributes && i(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || o("value", function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        i(function(e) {
            return null == e.getAttribute("disabled")
        }) || o(te, function(e, t, n) {
            var r;
            return n ? void 0 : e[t] === !0 ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
        }),
        t
    }(e);
    fe.find = ye,
    fe.expr = ye.selectors,
    fe.expr[":"] = fe.expr.pseudos,
    fe.uniqueSort = fe.unique = ye.uniqueSort,
    fe.text = ye.getText,
    fe.isXMLDoc = ye.isXML,
    fe.contains = ye.contains;
    var be = function(e, t, n) {
        for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType; )
            if (1 === e.nodeType) {
                if (i && fe(e).is(n))
                    break;
                r.push(e)
            }
        return r
    }
      , xe = function(e, t) {
        for (var n = []; e; e = e.nextSibling)
            1 === e.nodeType && e !== t && n.push(e);
        return n
    }
      , we = fe.expr.match.needsContext
      , _e = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/
      , ke = /^.[^:#\[\.,]*$/;
    fe.filter = function(e, t, n) {
        var r = t[0];
        return n && (e = ":not(" + e + ")"),
        1 === t.length && 1 === r.nodeType ? fe.find.matchesSelector(r, e) ? [r] : [] : fe.find.matches(e, fe.grep(t, function(e) {
            return 1 === e.nodeType
        }))
    }
    ,
    fe.fn.extend({
        find: function(e) {
            var t, n = [], r = this, i = r.length;
            if ("string" != typeof e)
                return this.pushStack(fe(e).filter(function() {
                    for (t = 0; i > t; t++)
                        if (fe.contains(r[t], this))
                            return !0
                }));
            for (t = 0; i > t; t++)
                fe.find(e, r[t], n);
            return n = this.pushStack(i > 1 ? fe.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e : e,
            n
        },
        filter: function(e) {
            return this.pushStack(r(this, e || [], !1))
        },
        not: function(e) {
            return this.pushStack(r(this, e || [], !0))
        },
        is: function(e) {
            return !!r(this, "string" == typeof e && we.test(e) ? fe(e) : e || [], !1).length
        }
    });
    var Se, Ce = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, Te = fe.fn.init = function(e, t, n) {
        var r, i;
        if (!e)
            return this;
        if (n = n || Se,
        "string" == typeof e) {
            if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : Ce.exec(e),
            !r || !r[1] && t)
                return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
            if (r[1]) {
                if (t = t instanceof fe ? t[0] : t,
                fe.merge(this, fe.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : re, !0)),
                _e.test(r[1]) && fe.isPlainObject(t))
                    for (r in t)
                        fe.isFunction(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                return this
            }
            if (i = re.getElementById(r[2]),
            i && i.parentNode) {
                if (i.id !== r[2])
                    return Se.find(e);
                this.length = 1,
                this[0] = i
            }
            return this.context = re,
            this.selector = e,
            this
        }
        return e.nodeType ? (this.context = this[0] = e,
        this.length = 1,
        this) : fe.isFunction(e) ? "undefined" != typeof n.ready ? n.ready(e) : e(fe) : (void 0 !== e.selector && (this.selector = e.selector,
        this.context = e.context),
        fe.makeArray(e, this))
    }
    ;
    Te.prototype = fe.fn,
    Se = fe(re);
    var Le = /^(?:parents|prev(?:Until|All))/
      , Ee = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    fe.fn.extend({
        has: function(e) {
            var t, n = fe(e, this), r = n.length;
            return this.filter(function() {
                for (t = 0; r > t; t++)
                    if (fe.contains(this, n[t]))
                        return !0
            })
        },
        closest: function(e, t) {
            for (var n, r = 0, i = this.length, o = [], s = we.test(e) || "string" != typeof e ? fe(e, t || this.context) : 0; i > r; r++)
                for (n = this[r]; n && n !== t; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && fe.find.matchesSelector(n, e))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? fe.uniqueSort(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? fe.inArray(this[0], fe(e)) : fe.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function(e, t) {
            return this.pushStack(fe.uniqueSort(fe.merge(this.get(), fe(e, t))))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
        }
    }),
    fe.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t : null
        },
        parents: function(e) {
            return be(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return be(e, "parentNode", n)
        },
        next: function(e) {
            return i(e, "nextSibling")
        },
        prev: function(e) {
            return i(e, "previousSibling")
        },
        nextAll: function(e) {
            return be(e, "nextSibling")
        },
        prevAll: function(e) {
            return be(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return be(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return be(e, "previousSibling", n)
        },
        siblings: function(e) {
            return xe((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return xe(e.firstChild)
        },
        contents: function(e) {
            return fe.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document : fe.merge([], e.childNodes)
        }
    }, function(e, t) {
        fe.fn[e] = function(n, r) {
            var i = fe.map(this, t, n);
            return "Until" !== e.slice(-5) && (r = n),
            r && "string" == typeof r && (i = fe.filter(r, i)),
            this.length > 1 && (Ee[e] || (i = fe.uniqueSort(i)),
            Le.test(e) && (i = i.reverse())),
            this.pushStack(i)
        }
    });
    var Ne = /\S+/g;
    fe.Callbacks = function(e) {
        e = "string" == typeof e ? o(e) : fe.extend({}, e);
        var t, n, r, i, s = [], a = [], l = -1, u = function() {
            for (i = e.once,
            r = t = !0; a.length; l = -1)
                for (n = a.shift(); ++l < s.length; )
                    s[l].apply(n[0], n[1]) === !1 && e.stopOnFalse && (l = s.length,
                    n = !1);
            e.memory || (n = !1),
            t = !1,
            i && (s = n ? [] : "")
        }, c = {
            add: function() {
                return s && (n && !t && (l = s.length - 1,
                a.push(n)),
                function r(t) {
                    fe.each(t, function(t, n) {
                        fe.isFunction(n) ? e.unique && c.has(n) || s.push(n) : n && n.length && "string" !== fe.type(n) && r(n)
                    })
                }(arguments),
                n && !t && u()),
                this
            },
            remove: function() {
                return fe.each(arguments, function(e, t) {
                    for (var n; (n = fe.inArray(t, s, n)) > -1; )
                        s.splice(n, 1),
                        l >= n && l--
                }),
                this
            },
            has: function(e) {
                return e ? fe.inArray(e, s) > -1 : s.length > 0
            },
            empty: function() {
                return s && (s = []),
                this
            },
            disable: function() {
                return i = a = [],
                s = n = "",
                this
            },
            disabled: function() {
                return !s
            },
            lock: function() {
                return i = !0,
                n || c.disable(),
                this
            },
            locked: function() {
                return !!i
            },
            fireWith: function(e, n) {
                return i || (n = n || [],
                n = [e, n.slice ? n.slice() : n],
                a.push(n),
                t || u()),
                this
            },
            fire: function() {
                return c.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !!r
            }
        };
        return c
    }
    ,
    fe.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", fe.Callbacks("once memory"), "resolved"], ["reject", "fail", fe.Callbacks("once memory"), "rejected"], ["notify", "progress", fe.Callbacks("memory")]]
              , n = "pending"
              , r = {
                state: function() {
                    return n
                },
                always: function() {
                    return i.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return fe.Deferred(function(n) {
                        fe.each(t, function(t, o) {
                            var s = fe.isFunction(e[t]) && e[t];
                            i[o[1]](function() {
                                var e = s && s.apply(this, arguments);
                                e && fe.isFunction(e.promise) ? e.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === r ? n.promise() : this, s ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? fe.extend(e, r) : r
                }
            }
              , i = {};
            return r.pipe = r.then,
            fe.each(t, function(e, o) {
                var s = o[2]
                  , a = o[3];
                r[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                }, t[1 ^ e][2].disable, t[2][2].lock),
                i[o[0]] = function() {
                    return i[o[0] + "With"](this === i ? r : this, arguments),
                    this
                }
                ,
                i[o[0] + "With"] = s.fireWith
            }),
            r.promise(i),
            e && e.call(i, i),
            i
        },
        when: function(e) {
            var t, n, r, i = 0, o = ie.call(arguments), s = o.length, a = 1 !== s || e && fe.isFunction(e.promise) ? s : 0, l = 1 === a ? e : fe.Deferred(), u = function(e, n, r) {
                return function(i) {
                    n[e] = this,
                    r[e] = arguments.length > 1 ? ie.call(arguments) : i,
                    r === t ? l.notifyWith(n, r) : --a || l.resolveWith(n, r)
                }
            };
            if (s > 1)
                for (t = new Array(s),
                n = new Array(s),
                r = new Array(s); s > i; i++)
                    o[i] && fe.isFunction(o[i].promise) ? o[i].promise().progress(u(i, n, t)).done(u(i, r, o)).fail(l.reject) : --a;
            return a || l.resolveWith(r, o),
            l.promise()
        }
    });
    var Ae;
    fe.fn.ready = function(e) {
        return fe.ready.promise().done(e),
        this
    }
    ,
    fe.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? fe.readyWait++ : fe.ready(!0)
        },
        ready: function(e) {
            (e === !0 ? --fe.readyWait : fe.isReady) || (fe.isReady = !0,
            e !== !0 && --fe.readyWait > 0 || (Ae.resolveWith(re, [fe]),
            fe.fn.triggerHandler && (fe(re).triggerHandler("ready"),
            fe(re).off("ready"))))
        }
    }),
    fe.ready.promise = function(t) {
        if (!Ae)
            if (Ae = fe.Deferred(),
            "complete" === re.readyState || "loading" !== re.readyState && !re.documentElement.doScroll)
                e.setTimeout(fe.ready);
            else if (re.addEventListener)
                re.addEventListener("DOMContentLoaded", a),
                e.addEventListener("load", a);
            else {
                re.attachEvent("onreadystatechange", a),
                e.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == e.frameElement && re.documentElement
                } catch (r) {}
                n && n.doScroll && !function i() {
                    if (!fe.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (t) {
                            return e.setTimeout(i, 50)
                        }
                        s(),
                        fe.ready()
                    }
                }()
            }
        return Ae.promise(t)
    }
    ,
    fe.ready.promise();
    var Me;
    for (Me in fe(he))
        break;
    he.ownFirst = "0" === Me,
    he.inlineBlockNeedsLayout = !1,
    fe(function() {
        var e, t, n, r;
        n = re.getElementsByTagName("body")[0],
        n && n.style && (t = re.createElement("div"),
        r = re.createElement("div"),
        r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
        n.appendChild(r).appendChild(t),
        "undefined" != typeof t.style.zoom && (t.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1",
        he.inlineBlockNeedsLayout = e = 3 === t.offsetWidth,
        e && (n.style.zoom = 1)),
        n.removeChild(r))
    }),
    function() {
        var e = re.createElement("div");
        he.deleteExpando = !0;
        try {
            delete e.test
        } catch (t) {
            he.deleteExpando = !1
        }
        e = null
    }();
    var De = function(e) {
        var t = fe.noData[(e.nodeName + " ").toLowerCase()]
          , n = +e.nodeType || 1;
        return 1 !== n && 9 !== n ? !1 : !t || t !== !0 && e.getAttribute("classid") === t
    }
      , Oe = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
      , Ie = /([A-Z])/g;
    fe.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? fe.cache[e[fe.expando]] : e[fe.expando],
            !!e && !u(e)
        },
        data: function(e, t, n) {
            return c(e, t, n)
        },
        removeData: function(e, t) {
            return h(e, t)
        },
        _data: function(e, t, n) {
            return c(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return h(e, t, !0)
        }
    }),
    fe.fn.extend({
        data: function(e, t) {
            var n, r, i, o = this[0], s = o && o.attributes;
            if (void 0 === e) {
                if (this.length && (i = fe.data(o),
                1 === o.nodeType && !fe._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--; )
                        s[n] && (r = s[n].name,
                        0 === r.indexOf("data-") && (r = fe.camelCase(r.slice(5)),
                        l(o, r, i[r])));
                    fe._data(o, "parsedAttrs", !0)
                }
                return i
            }
            return "object" == typeof e ? this.each(function() {
                fe.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                fe.data(this, e, t)
            }) : o ? l(o, e, fe.data(o, e)) : void 0
        },
        removeData: function(e) {
            return this.each(function() {
                fe.removeData(this, e)
            })
        }
    }),
    fe.extend({
        queue: function(e, t, n) {
            var r;
            return e ? (t = (t || "fx") + "queue",
            r = fe._data(e, t),
            n && (!r || fe.isArray(n) ? r = fe._data(e, t, fe.makeArray(n)) : r.push(n)),
            r || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = fe.queue(e, t)
              , r = n.length
              , i = n.shift()
              , o = fe._queueHooks(e, t)
              , s = function() {
                fe.dequeue(e, t)
            };
            "inprogress" === i && (i = n.shift(),
            r--),
            i && ("fx" === t && n.unshift("inprogress"),
            delete o.stop,
            i.call(e, s, o)),
            !r && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return fe._data(e, n) || fe._data(e, n, {
                empty: fe.Callbacks("once memory").add(function() {
                    fe._removeData(e, t + "queue"),
                    fe._removeData(e, n)
                })
            })
        }
    }),
    fe.fn.extend({
        queue: function(e, t) {
            var n = 2;
            return "string" != typeof e && (t = e,
            e = "fx",
            n--),
            arguments.length < n ? fe.queue(this[0], e) : void 0 === t ? this : this.each(function() {
                var n = fe.queue(this, e, t);
                fe._queueHooks(this, e),
                "fx" === e && "inprogress" !== n[0] && fe.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                fe.dequeue(this, e)
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, t) {
            var n, r = 1, i = fe.Deferred(), o = this, s = this.length, a = function() {
                --r || i.resolveWith(o, [o])
            };
            for ("string" != typeof e && (t = e,
            e = void 0),
            e = e || "fx"; s--; )
                n = fe._data(o[s], e + "queueHooks"),
                n && n.empty && (r++,
                n.empty.add(a));
            return a(),
            i.promise(t)
        }
    }),
    function() {
        var e;
        he.shrinkWrapBlocks = function() {
            if (null != e)
                return e;
            e = !1;
            var t, n, r;
            return n = re.getElementsByTagName("body")[0],
            n && n.style ? (t = re.createElement("div"),
            r = re.createElement("div"),
            r.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px",
            n.appendChild(r).appendChild(t),
            "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1",
            t.appendChild(re.createElement("div")).style.width = "5px",
            e = 3 !== t.offsetWidth),
            n.removeChild(r),
            e) : void 0
        }
    }();
    var Pe = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
      , He = new RegExp("^(?:([+-])=|)(" + Pe + ")([a-z%]*)$","i")
      , Re = ["Top", "Right", "Bottom", "Left"]
      , qe = function(e, t) {
        return e = t || e,
        "none" === fe.css(e, "display") || !fe.contains(e.ownerDocument, e)
    }
      , Fe = function(e, t, n, r, i, o, s) {
        var a = 0
          , l = e.length
          , u = null == n;
        if ("object" === fe.type(n)) {
            i = !0;
            for (a in n)
                Fe(e, t, a, n[a], !0, o, s)
        } else if (void 0 !== r && (i = !0,
        fe.isFunction(r) || (s = !0),
        u && (s ? (t.call(e, r),
        t = null) : (u = t,
        t = function(e, t, n) {
            return u.call(fe(e), n)
        }
        )),
        t))
            for (; l > a; a++)
                t(e[a], n, s ? r : r.call(e[a], a, t(e[a], n)));
        return i ? e : u ? t.call(e) : l ? t(e[0], n) : o
    }
      , $e = /^(?:checkbox|radio)$/i
      , je = /<([\w:-]+)/
      , Be = /^$|\/(?:java|ecma)script/i
      , We = /^\s+/
      , Ue = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    !function() {
        var e = re.createElement("div")
          , t = re.createDocumentFragment()
          , n = re.createElement("input");
        e.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        he.leadingWhitespace = 3 === e.firstChild.nodeType,
        he.tbody = !e.getElementsByTagName("tbody").length,
        he.htmlSerialize = !!e.getElementsByTagName("link").length,
        he.html5Clone = "<:nav></:nav>" !== re.createElement("nav").cloneNode(!0).outerHTML,
        n.type = "checkbox",
        n.checked = !0,
        t.appendChild(n),
        he.appendChecked = n.checked,
        e.innerHTML = "<textarea>x</textarea>",
        he.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue,
        t.appendChild(e),
        n = re.createElement("input"),
        n.setAttribute("type", "radio"),
        n.setAttribute("checked", "checked"),
        n.setAttribute("name", "t"),
        e.appendChild(n),
        he.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked,
        he.noCloneEvent = !!e.addEventListener,
        e[fe.expando] = 1,
        he.attributes = !e.getAttribute(fe.expando)
    }();
    var ze = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: he.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    ze.optgroup = ze.option,
    ze.tbody = ze.tfoot = ze.colgroup = ze.caption = ze.thead,
    ze.th = ze.td;
    var Ve = /<|&#?\w+;/
      , Xe = /<tbody/i;
    !function() {
        var t, n, r = re.createElement("div");
        for (t in {
            submit: !0,
            change: !0,
            focusin: !0
        })
            n = "on" + t,
            (he[t] = n in e) || (r.setAttribute(n, "t"),
            he[t] = r.attributes[n].expando === !1);
        r = null
    }();
    var Qe = /^(?:input|select|textarea)$/i
      , Ge = /^key/
      , Ke = /^(?:mouse|pointer|contextmenu|drag|drop)|click/
      , Je = /^(?:focusinfocus|focusoutblur)$/
      , Ye = /^([^.]*)(?:\.(.+)|)/;
    fe.event = {
        global: {},
        add: function(e, t, n, r, i) {
            var o, s, a, l, u, c, h, d, f, p, m, g = fe._data(e);
            if (g) {
                for (n.handler && (l = n,
                n = l.handler,
                i = l.selector),
                n.guid || (n.guid = fe.guid++),
                (s = g.events) || (s = g.events = {}),
                (c = g.handle) || (c = g.handle = function(e) {
                    return "undefined" == typeof fe || e && fe.event.triggered === e.type ? void 0 : fe.event.dispatch.apply(c.elem, arguments)
                }
                ,
                c.elem = e),
                t = (t || "").match(Ne) || [""],
                a = t.length; a--; )
                    o = Ye.exec(t[a]) || [],
                    f = m = o[1],
                    p = (o[2] || "").split(".").sort(),
                    f && (u = fe.event.special[f] || {},
                    f = (i ? u.delegateType : u.bindType) || f,
                    u = fe.event.special[f] || {},
                    h = fe.extend({
                        type: f,
                        origType: m,
                        data: r,
                        handler: n,
                        guid: n.guid,
                        selector: i,
                        needsContext: i && fe.expr.match.needsContext.test(i),
                        namespace: p.join(".")
                    }, l),
                    (d = s[f]) || (d = s[f] = [],
                    d.delegateCount = 0,
                    u.setup && u.setup.call(e, r, p, c) !== !1 || (e.addEventListener ? e.addEventListener(f, c, !1) : e.attachEvent && e.attachEvent("on" + f, c))),
                    u.add && (u.add.call(e, h),
                    h.handler.guid || (h.handler.guid = n.guid)),
                    i ? d.splice(d.delegateCount++, 0, h) : d.push(h),
                    fe.event.global[f] = !0);
                e = null
            }
        },
        remove: function(e, t, n, r, i) {
            var o, s, a, l, u, c, h, d, f, p, m, g = fe.hasData(e) && fe._data(e);
            if (g && (c = g.events)) {
                for (t = (t || "").match(Ne) || [""],
                u = t.length; u--; )
                    if (a = Ye.exec(t[u]) || [],
                    f = m = a[1],
                    p = (a[2] || "").split(".").sort(),
                    f) {
                        for (h = fe.event.special[f] || {},
                        f = (r ? h.delegateType : h.bindType) || f,
                        d = c[f] || [],
                        a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                        l = o = d.length; o--; )
                            s = d[o],
                            !i && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || r && r !== s.selector && ("**" !== r || !s.selector) || (d.splice(o, 1),
                            s.selector && d.delegateCount--,
                            h.remove && h.remove.call(e, s));
                        l && !d.length && (h.teardown && h.teardown.call(e, p, g.handle) !== !1 || fe.removeEvent(e, f, g.handle),
                        delete c[f])
                    } else
                        for (f in c)
                            fe.event.remove(e, f + t[u], n, r, !0);
                fe.isEmptyObject(c) && (delete g.handle,
                fe._removeData(e, "events"))
            }
        },
        trigger: function(t, n, r, i) {
            var o, s, a, l, u, c, h, d = [r || re], f = ce.call(t, "type") ? t.type : t, p = ce.call(t, "namespace") ? t.namespace.split(".") : [];
            if (a = c = r = r || re,
            3 !== r.nodeType && 8 !== r.nodeType && !Je.test(f + fe.event.triggered) && (f.indexOf(".") > -1 && (p = f.split("."),
            f = p.shift(),
            p.sort()),
            s = f.indexOf(":") < 0 && "on" + f,
            t = t[fe.expando] ? t : new fe.Event(f,"object" == typeof t && t),
            t.isTrigger = i ? 2 : 3,
            t.namespace = p.join("."),
            t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
            t.result = void 0,
            t.target || (t.target = r),
            n = null == n ? [t] : fe.makeArray(n, [t]),
            u = fe.event.special[f] || {},
            i || !u.trigger || u.trigger.apply(r, n) !== !1)) {
                if (!i && !u.noBubble && !fe.isWindow(r)) {
                    for (l = u.delegateType || f,
                    Je.test(l + f) || (a = a.parentNode); a; a = a.parentNode)
                        d.push(a),
                        c = a;
                    c === (r.ownerDocument || re) && d.push(c.defaultView || c.parentWindow || e)
                }
                for (h = 0; (a = d[h++]) && !t.isPropagationStopped(); )
                    t.type = h > 1 ? l : u.bindType || f,
                    o = (fe._data(a, "events") || {})[t.type] && fe._data(a, "handle"),
                    o && o.apply(a, n),
                    o = s && a[s],
                    o && o.apply && De(a) && (t.result = o.apply(a, n),
                    t.result === !1 && t.preventDefault());
                if (t.type = f,
                !i && !t.isDefaultPrevented() && (!u._default || u._default.apply(d.pop(), n) === !1) && De(r) && s && r[f] && !fe.isWindow(r)) {
                    c = r[s],
                    c && (r[s] = null),
                    fe.event.triggered = f;
                    try {
                        r[f]()
                    } catch (m) {}
                    fe.event.triggered = void 0,
                    c && (r[s] = c)
                }
                return t.result
            }
        },
        dispatch: function(e) {
            e = fe.event.fix(e);
            var t, n, r, i, o, s = [], a = ie.call(arguments), l = (fe._data(this, "events") || {})[e.type] || [], u = fe.event.special[e.type] || {};
            if (a[0] = e,
            e.delegateTarget = this,
            !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (s = fe.event.handlers.call(this, e, l),
                t = 0; (i = s[t++]) && !e.isPropagationStopped(); )
                    for (e.currentTarget = i.elem,
                    n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped(); )
                        (!e.rnamespace || e.rnamespace.test(o.namespace)) && (e.handleObj = o,
                        e.data = o.data,
                        r = ((fe.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, a),
                        void 0 !== r && (e.result = r) === !1 && (e.preventDefault(),
                        e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, t) {
            var n, r, i, o, s = [], a = t.delegateCount, l = e.target;
            if (a && l.nodeType && ("click" !== e.type || isNaN(e.button) || e.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (l.disabled !== !0 || "click" !== e.type)) {
                        for (r = [],
                        n = 0; a > n; n++)
                            o = t[n],
                            i = o.selector + " ",
                            void 0 === r[i] && (r[i] = o.needsContext ? fe(i, this).index(l) > -1 : fe.find(i, this, null, [l]).length),
                            r[i] && r.push(o);
                        r.length && s.push({
                            elem: l,
                            handlers: r
                        })
                    }
            return a < t.length && s.push({
                elem: this,
                handlers: t.slice(a)
            }),
            s
        },
        fix: function(e) {
            if (e[fe.expando])
                return e;
            var t, n, r, i = e.type, o = e, s = this.fixHooks[i];
            for (s || (this.fixHooks[i] = s = Ke.test(i) ? this.mouseHooks : Ge.test(i) ? this.keyHooks : {}),
            r = s.props ? this.props.concat(s.props) : this.props,
            e = new fe.Event(o),
            t = r.length; t--; )
                n = r[t],
                e[n] = o[n];
            return e.target || (e.target = o.srcElement || re),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, t) {
                var n, r, i, o = t.button, s = t.fromElement;
                return null == e.pageX && null != t.clientX && (r = e.target.ownerDocument || re,
                i = r.documentElement,
                n = r.body,
                e.pageX = t.clientX + (i && i.scrollLeft || n && n.scrollLeft || 0) - (i && i.clientLeft || n && n.clientLeft || 0),
                e.pageY = t.clientY + (i && i.scrollTop || n && n.scrollTop || 0) - (i && i.clientTop || n && n.clientTop || 0)),
                !e.relatedTarget && s && (e.relatedTarget = s === e.target ? t.toElement : s),
                e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== x() && this.focus)
                        try {
                            return this.focus(),
                            !1
                        } catch (e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === x() && this.blur ? (this.blur(),
                    !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return fe.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(),
                    !1) : void 0
                },
                _default: function(e) {
                    return fe.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n) {
            var r = fe.extend(new fe.Event, n, {
                type: e,
                isSimulated: !0
            });
            fe.event.trigger(r, null, t),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    fe.removeEvent = re.removeEventListener ? function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n)
    }
    : function(e, t, n) {
        var r = "on" + t;
        e.detachEvent && ("undefined" == typeof e[r] && (e[r] = null),
        e.detachEvent(r, n))
    }
    ,
    fe.Event = function(e, t) {
        return this instanceof fe.Event ? (e && e.type ? (this.originalEvent = e,
        this.type = e.type,
        this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && e.returnValue === !1 ? y : b) : this.type = e,
        t && fe.extend(this, t),
        this.timeStamp = e && e.timeStamp || fe.now(),
        void (this[fe.expando] = !0)) : new fe.Event(e,t)
    }
    ,
    fe.Event.prototype = {
        constructor: fe.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = y,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = y,
            e && !this.isSimulated && (e.stopPropagation && e.stopPropagation(),
            e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            var e = this.originalEvent;
            this.isImmediatePropagationStopped = y,
            e && e.stopImmediatePropagation && e.stopImmediatePropagation(),
            this.stopPropagation()
        }
    },
    fe.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function(e, t) {
        fe.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, r = this, i = e.relatedTarget, o = e.handleObj;
                return (!i || i !== r && !fe.contains(r, i)) && (e.type = o.origType,
                n = o.handler.apply(this, arguments),
                e.type = t),
                n
            }
        }
    }),
    he.submit || (fe.event.special.submit = {
        setup: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.add(this, "click._submit keypress._submit", function(e) {
                var t = e.target
                  , n = fe.nodeName(t, "input") || fe.nodeName(t, "button") ? fe.prop(t, "form") : void 0;
                n && !fe._data(n, "submit") && (fe.event.add(n, "submit._submit", function(e) {
                    e._submitBubble = !0
                }),
                fe._data(n, "submit", !0))
            })
        },
        postDispatch: function(e) {
            e._submitBubble && (delete e._submitBubble,
            this.parentNode && !e.isTrigger && fe.event.simulate("submit", this.parentNode, e))
        },
        teardown: function() {
            return fe.nodeName(this, "form") ? !1 : void fe.event.remove(this, "._submit")
        }
    }),
    he.change || (fe.event.special.change = {
        setup: function() {
            return Qe.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (fe.event.add(this, "propertychange._change", function(e) {
                "checked" === e.originalEvent.propertyName && (this._justChanged = !0)
            }),
            fe.event.add(this, "click._change", function(e) {
                this._justChanged && !e.isTrigger && (this._justChanged = !1),
                fe.event.simulate("change", this, e)
            })),
            !1) : void fe.event.add(this, "beforeactivate._change", function(e) {
                var t = e.target;
                Qe.test(t.nodeName) && !fe._data(t, "change") && (fe.event.add(t, "change._change", function(e) {
                    !this.parentNode || e.isSimulated || e.isTrigger || fe.event.simulate("change", this.parentNode, e)
                }),
                fe._data(t, "change", !0))
            })
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return fe.event.remove(this, "._change"),
            !Qe.test(this.nodeName)
        }
    }),
    he.focusin || fe.each({
        focus: "focusin",
        blur: "focusout"
    }, function(e, t) {
        var n = function(e) {
            fe.event.simulate(t, e.target, fe.event.fix(e))
        };
        fe.event.special[t] = {
            setup: function() {
                var r = this.ownerDocument || this
                  , i = fe._data(r, t);
                i || r.addEventListener(e, n, !0),
                fe._data(r, t, (i || 0) + 1)
            },
            teardown: function() {
                var r = this.ownerDocument || this
                  , i = fe._data(r, t) - 1;
                i ? fe._data(r, t, i) : (r.removeEventListener(e, n, !0),
                fe._removeData(r, t))
            }
        }
    }),
    fe.fn.extend({
        on: function(e, t, n, r) {
            return w(this, e, t, n, r)
        },
        one: function(e, t, n, r) {
            return w(this, e, t, n, r, 1)
        },
        off: function(e, t, n) {
            var r, i;
            if (e && e.preventDefault && e.handleObj)
                return r = e.handleObj,
                fe(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                this;
            if ("object" == typeof e) {
                for (i in e)
                    this.off(i, t, e[i]);
                return this
            }
            return (t === !1 || "function" == typeof t) && (n = t,
            t = void 0),
            n === !1 && (n = b),
            this.each(function() {
                fe.event.remove(this, e, n, t)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                fe.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? fe.event.trigger(e, t, n, !0) : void 0
        }
    });
    var Ze = / jQuery\d+="(?:null|\d+)"/g
      , et = new RegExp("<(?:" + Ue + ")[\\s/>]","i")
      , tt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi
      , nt = /<script|<style|<link/i
      , rt = /checked\s*(?:[^=]|=\s*.checked.)/i
      , it = /^true\/(.*)/
      , ot = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
      , st = f(re)
      , at = st.appendChild(re.createElement("div"));
    fe.extend({
        htmlPrefilter: function(e) {
            return e.replace(tt, "<$1></$2>")
        },
        clone: function(e, t, n) {
            var r, i, o, s, a, l = fe.contains(e.ownerDocument, e);
            if (he.html5Clone || fe.isXMLDoc(e) || !et.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (at.innerHTML = e.outerHTML,
            at.removeChild(o = at.firstChild)),
            !(he.noCloneEvent && he.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || fe.isXMLDoc(e)))
                for (r = p(o),
                a = p(e),
                s = 0; null != (i = a[s]); ++s)
                    r[s] && T(i, r[s]);
            if (t)
                if (n)
                    for (a = a || p(e),
                    r = r || p(o),
                    s = 0; null != (i = a[s]); s++)
                        C(i, r[s]);
                else
                    C(e, o);
            return r = p(o, "script"),
            r.length > 0 && m(r, !l && p(e, "script")),
            r = a = i = null,
            o
        },
        cleanData: function(e, t) {
            for (var n, r, i, o, s = 0, a = fe.expando, l = fe.cache, u = he.attributes, c = fe.event.special; null != (n = e[s]); s++)
                if ((t || De(n)) && (i = n[a],
                o = i && l[i])) {
                    if (o.events)
                        for (r in o.events)
                            c[r] ? fe.event.remove(n, r) : fe.removeEvent(n, r, o.handle);
                    l[i] && (delete l[i],
                    u || "undefined" == typeof n.removeAttribute ? n[a] = void 0 : n.removeAttribute(a),
                    ne.push(i))
                }
        }
    }),
    fe.fn.extend({
        domManip: L,
        detach: function(e) {
            return E(this, e, !0)
        },
        remove: function(e) {
            return E(this, e)
        },
        text: function(e) {
            return Fe(this, function(e) {
                return void 0 === e ? fe.text(this) : this.empty().append((this[0] && this[0].ownerDocument || re).createTextNode(e))
            }, null, e, arguments.length)
        },
        append: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return L(this, arguments, function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = _(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return L(this, arguments, function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && fe.cleanData(p(e, !1)); e.firstChild; )
                    e.removeChild(e.firstChild);
                e.options && fe.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e : t,
            this.map(function() {
                return fe.clone(this, e, t)
            })
        },
        html: function(e) {
            return Fe(this, function(e) {
                var t = this[0] || {}
                  , n = 0
                  , r = this.length;
                if (void 0 === e)
                    return 1 === t.nodeType ? t.innerHTML.replace(Ze, "") : void 0;
                if ("string" == typeof e && !nt.test(e) && (he.htmlSerialize || !et.test(e)) && (he.leadingWhitespace || !We.test(e)) && !ze[(je.exec(e) || ["", ""])[1].toLowerCase()]) {
                    e = fe.htmlPrefilter(e);
                    try {
                        for (; r > n; n++)
                            t = this[n] || {},
                            1 === t.nodeType && (fe.cleanData(p(t, !1)),
                            t.innerHTML = e);
                        t = 0
                    } catch (i) {}
                }
                t && this.empty().append(e)
            }, null, e, arguments.length)
        },
        replaceWith: function() {
            var e = [];
            return L(this, arguments, function(t) {
                var n = this.parentNode;
                fe.inArray(this, e) < 0 && (fe.cleanData(p(this)),
                n && n.replaceChild(t, this))
            }, e)
        }
    }),
    fe.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function(e, t) {
        fe.fn[e] = function(e) {
            for (var n, r = 0, i = [], o = fe(e), s = o.length - 1; s >= r; r++)
                n = r === s ? this : this.clone(!0),
                fe(o[r])[t](n),
                se.apply(i, n.get());
            return this.pushStack(i)
        }
    });
    var lt, ut = {
        HTML: "block",
        BODY: "block"
    }, ct = /^margin/, ht = new RegExp("^(" + Pe + ")(?!px)[a-z%]+$","i"), dt = function(e, t, n, r) {
        var i, o, s = {};
        for (o in t)
            s[o] = e.style[o],
            e.style[o] = t[o];
        i = n.apply(e, r || []);
        for (o in t)
            e.style[o] = s[o];
        return i
    }, ft = re.documentElement;
    !function() {
        function t() {
            var t, c, h = re.documentElement;
            h.appendChild(l),
            u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",
            n = i = a = !1,
            r = s = !0,
            e.getComputedStyle && (c = e.getComputedStyle(u),
            n = "1%" !== (c || {}).top,
            a = "2px" === (c || {}).marginLeft,
            i = "4px" === (c || {
                width: "4px"
            }).width,
            u.style.marginRight = "50%",
            r = "4px" === (c || {
                marginRight: "4px"
            }).marginRight,
            t = u.appendChild(re.createElement("div")),
            t.style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
            t.style.marginRight = t.style.width = "0",
            u.style.width = "1px",
            s = !parseFloat((e.getComputedStyle(t) || {}).marginRight),
            u.removeChild(t)),
            u.style.display = "none",
            o = 0 === u.getClientRects().length,
            o && (u.style.display = "",
            u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>",
            u.childNodes[0].style.borderCollapse = "separate",
            t = u.getElementsByTagName("td"),
            t[0].style.cssText = "margin:0;border:0;padding:0;display:none",
            o = 0 === t[0].offsetHeight,
            o && (t[0].style.display = "",
            t[1].style.display = "none",
            o = 0 === t[0].offsetHeight)),
            h.removeChild(l)
        }
        var n, r, i, o, s, a, l = re.createElement("div"), u = re.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5",
        he.opacity = "0.5" === u.style.opacity,
        he.cssFloat = !!u.style.cssFloat,
        u.style.backgroundClip = "content-box",
        u.cloneNode(!0).style.backgroundClip = "",
        he.clearCloneStyle = "content-box" === u.style.backgroundClip,
        l = re.createElement("div"),
        l.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",
        u.innerHTML = "",
        l.appendChild(u),
        he.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing,
        fe.extend(he, {
            reliableHiddenOffsets: function() {
                return null == n && t(),
                o
            },
            boxSizingReliable: function() {
                return null == n && t(),
                i
            },
            pixelMarginRight: function() {
                return null == n && t(),
                r
            },
            pixelPosition: function() {
                return null == n && t(),
                n
            },
            reliableMarginRight: function() {
                return null == n && t(),
                s
            },
            reliableMarginLeft: function() {
                return null == n && t(),
                a
            }
        }))
    }();
    var pt, mt, gt = /^(top|right|bottom|left)$/;
    e.getComputedStyle ? (pt = function(t) {
        var n = t.ownerDocument.defaultView;
        return n && n.opener || (n = e),
        n.getComputedStyle(t)
    }
    ,
    mt = function(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || pt(e),
        s = n ? n.getPropertyValue(t) || n[t] : void 0,
        "" !== s && void 0 !== s || fe.contains(e.ownerDocument, e) || (s = fe.style(e, t)),
        n && !he.pixelMarginRight() && ht.test(s) && ct.test(t) && (r = a.width,
        i = a.minWidth,
        o = a.maxWidth,
        a.minWidth = a.maxWidth = a.width = s,
        s = n.width,
        a.width = r,
        a.minWidth = i,
        a.maxWidth = o),
        void 0 === s ? s : s + ""
    }
    ) : ft.currentStyle && (pt = function(e) {
        return e.currentStyle
    }
    ,
    mt = function(e, t, n) {
        var r, i, o, s, a = e.style;
        return n = n || pt(e),
        s = n ? n[t] : void 0,
        null == s && a && a[t] && (s = a[t]),
        ht.test(s) && !gt.test(t) && (r = a.left,
        i = e.runtimeStyle,
        o = i && i.left,
        o && (i.left = e.currentStyle.left),
        a.left = "fontSize" === t ? "1em" : s,
        s = a.pixelLeft + "px",
        a.left = r,
        o && (i.left = o)),
        void 0 === s ? s : s + "" || "auto"
    }
    );
    var vt = /alpha\([^)]*\)/i
      , yt = /opacity\s*=\s*([^)]*)/i
      , bt = /^(none|table(?!-c[ea]).+)/
      , xt = new RegExp("^(" + Pe + ")(.*)$","i")
      , wt = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }
      , _t = {
        letterSpacing: "0",
        fontWeight: "400"
    }
      , kt = ["Webkit", "O", "Moz", "ms"]
      , St = re.createElement("div").style;
    fe.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = mt(e, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": he.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function(e, t, n, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var i, o, s, a = fe.camelCase(t), l = e.style;
                if (t = fe.cssProps[a] || (fe.cssProps[a] = D(a) || a),
                s = fe.cssHooks[t] || fe.cssHooks[a],
                void 0 === n)
                    return s && "get"in s && void 0 !== (i = s.get(e, !1, r)) ? i : l[t];
                if (o = typeof n,
                "string" === o && (i = He.exec(n)) && i[1] && (n = d(e, t, i),
                o = "number"),
                null != n && n === n && ("number" === o && (n += i && i[3] || (fe.cssNumber[a] ? "" : "px")),
                he.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                !(s && "set"in s && void 0 === (n = s.set(e, n, r)))))
                    try {
                        l[t] = n
                    } catch (u) {}
            }
        },
        css: function(e, t, n, r) {
            var i, o, s, a = fe.camelCase(t);
            return t = fe.cssProps[a] || (fe.cssProps[a] = D(a) || a),
            s = fe.cssHooks[t] || fe.cssHooks[a],
            s && "get"in s && (o = s.get(e, !0, n)),
            void 0 === o && (o = mt(e, t, r)),
            "normal" === o && t in _t && (o = _t[t]),
            "" === n || n ? (i = parseFloat(o),
            n === !0 || isFinite(i) ? i || 0 : o) : o
        }
    }),
    fe.each(["height", "width"], function(e, t) {
        fe.cssHooks[t] = {
            get: function(e, n, r) {
                return n ? bt.test(fe.css(e, "display")) && 0 === e.offsetWidth ? dt(e, wt, function() {
                    return H(e, t, r)
                }) : H(e, t, r) : void 0
            },
            set: function(e, n, r) {
                var i = r && pt(e);
                return I(e, n, r ? P(e, t, r, he.boxSizing && "border-box" === fe.css(e, "boxSizing", !1, i), i) : 0)
            }
        }
    }),
    he.opacity || (fe.cssHooks.opacity = {
        get: function(e, t) {
            return yt.test((t && e.currentStyle ? e.currentStyle.filter : e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : t ? "1" : ""
        },
        set: function(e, t) {
            var n = e.style
              , r = e.currentStyle
              , i = fe.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")" : ""
              , o = r && r.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === fe.trim(o.replace(vt, "")) && n.removeAttribute && (n.removeAttribute("filter"),
            "" === t || r && !r.filter) || (n.filter = vt.test(o) ? o.replace(vt, i) : o + " " + i)
        }
    }),
    fe.cssHooks.marginRight = M(he.reliableMarginRight, function(e, t) {
        return t ? dt(e, {
            display: "inline-block"
        }, mt, [e, "marginRight"]) : void 0
    }),
    fe.cssHooks.marginLeft = M(he.reliableMarginLeft, function(e, t) {
        return t ? (parseFloat(mt(e, "marginLeft")) || (fe.contains(e.ownerDocument, e) ? e.getBoundingClientRect().left - dt(e, {
            marginLeft: 0
        }, function() {
            return e.getBoundingClientRect().left
        }) : 0)) + "px" : void 0
    }),
    fe.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function(e, t) {
        fe.cssHooks[e + t] = {
            expand: function(n) {
                for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; 4 > r; r++)
                    i[e + Re[r] + t] = o[r] || o[r - 2] || o[0];
                return i
            }
        },
        ct.test(e) || (fe.cssHooks[e + t].set = I)
    }),
    fe.fn.extend({
        css: function(e, t) {
            return Fe(this, function(e, t, n) {
                var r, i, o = {}, s = 0;
                if (fe.isArray(t)) {
                    for (r = pt(e),
                    i = t.length; i > s; s++)
                        o[t[s]] = fe.css(e, t[s], !1, r);
                    return o
                }
                return void 0 !== n ? fe.style(e, t, n) : fe.css(e, t)
            }, e, t, arguments.length > 1)
        },
        show: function() {
            return O(this, !0)
        },
        hide: function() {
            return O(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                qe(this) ? fe(this).show() : fe(this).hide()
            })
        }
    }),
    fe.Tween = R,
    R.prototype = {
        constructor: R,
        init: function(e, t, n, r, i, o) {
            this.elem = e,
            this.prop = n,
            this.easing = i || fe.easing._default,
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = r,
            this.unit = o || (fe.cssNumber[n] ? "" : "px")
        },
        cur: function() {
            var e = R.propHooks[this.prop];
            return e && e.get ? e.get(this) : R.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = R.propHooks[this.prop];
            return this.options.duration ? this.pos = t = fe.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : R.propHooks._default.set(this),
            this
        }
    },
    R.prototype.init.prototype = R.prototype,
    R.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = fe.css(e.elem, e.prop, ""),
                t && "auto" !== t ? t : 0)
            },
            set: function(e) {
                fe.fx.step[e.prop] ? fe.fx.step[e.prop](e) : 1 !== e.elem.nodeType || null == e.elem.style[fe.cssProps[e.prop]] && !fe.cssHooks[e.prop] ? e.elem[e.prop] = e.now : fe.style(e.elem, e.prop, e.now + e.unit)
            }
        }
    },
    R.propHooks.scrollTop = R.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    fe.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return .5 - Math.cos(e * Math.PI) / 2
        },
        _default: "swing"
    },
    fe.fx = R.prototype.init,
    fe.fx.step = {};
    var Ct, Tt, Lt = /^(?:toggle|show|hide)$/, Et = /queueHooks$/;
    fe.Animation = fe.extend(W, {
        tweeners: {
            "*": [function(e, t) {
                var n = this.createTween(e, t);
                return d(n.elem, e, He.exec(t), n),
                n
            }
            ]
        },
        tweener: function(e, t) {
            fe.isFunction(e) ? (t = e,
            e = ["*"]) : e = e.match(Ne);
            for (var n, r = 0, i = e.length; i > r; r++)
                n = e[r],
                W.tweeners[n] = W.tweeners[n] || [],
                W.tweeners[n].unshift(t)
        },
        prefilters: [j],
        prefilter: function(e, t) {
            t ? W.prefilters.unshift(e) : W.prefilters.push(e)
        }
    }),
    fe.speed = function(e, t, n) {
        var r = e && "object" == typeof e ? fe.extend({}, e) : {
            complete: n || !n && t || fe.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !fe.isFunction(t) && t
        };
        return r.duration = fe.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in fe.fx.speeds ? fe.fx.speeds[r.duration] : fe.fx.speeds._default,
        (null == r.queue || r.queue === !0) && (r.queue = "fx"),
        r.old = r.complete,
        r.complete = function() {
            fe.isFunction(r.old) && r.old.call(this),
            r.queue && fe.dequeue(this, r.queue)
        }
        ,
        r
    }
    ,
    fe.fn.extend({
        fadeTo: function(e, t, n, r) {
            return this.filter(qe).css("opacity", 0).show().end().animate({
                opacity: t
            }, e, n, r)
        },
        animate: function(e, t, n, r) {
            var i = fe.isEmptyObject(e)
              , o = fe.speed(t, n, r)
              , s = function() {
                var t = W(this, fe.extend({}, e), o);
                (i || fe._data(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            i || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, t, n) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(n)
            };
            return "string" != typeof e && (n = t,
            t = e,
            e = void 0),
            t && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0
                  , i = null != e && e + "queueHooks"
                  , o = fe.timers
                  , s = fe._data(this);
                if (i)
                    s[i] && s[i].stop && r(s[i]);
                else
                    for (i in s)
                        s[i] && s[i].stop && Et.test(i) && r(s[i]);
                for (i = o.length; i--; )
                    o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n),
                    t = !1,
                    o.splice(i, 1));
                (t || !n) && fe.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = fe._data(this), r = n[e + "queue"], i = n[e + "queueHooks"], o = fe.timers, s = r ? r.length : 0;
                for (n.finish = !0,
                fe.queue(this, e, []),
                i && i.stop && i.stop.call(this, !0),
                t = o.length; t--; )
                    o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0),
                    o.splice(t, 1));
                for (t = 0; s > t; t++)
                    r[t] && r[t].finish && r[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    fe.each(["toggle", "show", "hide"], function(e, t) {
        var n = fe.fn[t];
        fe.fn[t] = function(e, r, i) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(F(t, !0), e, r, i)
        }
    }),
    fe.each({
        slideDown: F("show"),
        slideUp: F("hide"),
        slideToggle: F("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function(e, t) {
        fe.fn[e] = function(e, n, r) {
            return this.animate(t, e, n, r)
        }
    }),
    fe.timers = [],
    fe.fx.tick = function() {
        var e, t = fe.timers, n = 0;
        for (Ct = fe.now(); n < t.length; n++)
            e = t[n],
            e() || t[n] !== e || t.splice(n--, 1);
        t.length || fe.fx.stop(),
        Ct = void 0
    }
    ,
    fe.fx.timer = function(e) {
        fe.timers.push(e),
        e() ? fe.fx.start() : fe.timers.pop()
    }
    ,
    fe.fx.interval = 13,
    fe.fx.start = function() {
        Tt || (Tt = e.setInterval(fe.fx.tick, fe.fx.interval))
    }
    ,
    fe.fx.stop = function() {
        e.clearInterval(Tt),
        Tt = null
    }
    ,
    fe.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    fe.fn.delay = function(t, n) {
        return t = fe.fx ? fe.fx.speeds[t] || t : t,
        n = n || "fx",
        this.queue(n, function(n, r) {
            var i = e.setTimeout(n, t);
            r.stop = function() {
                e.clearTimeout(i)
            }
        })
    }
    ,
    function() {
        var e, t = re.createElement("input"), n = re.createElement("div"), r = re.createElement("select"), i = r.appendChild(re.createElement("option"));
        n = re.createElement("div"),
        n.setAttribute("className", "t"),
        n.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
        e = n.getElementsByTagName("a")[0],
        t.setAttribute("type", "checkbox"),
        n.appendChild(t),
        e = n.getElementsByTagName("a")[0],
        e.style.cssText = "top:1px",
        he.getSetAttribute = "t" !== n.className,
        he.style = /top/.test(e.getAttribute("style")),
        he.hrefNormalized = "/a" === e.getAttribute("href"),
        he.checkOn = !!t.value,
        he.optSelected = i.selected,
        he.enctype = !!re.createElement("form").enctype,
        r.disabled = !0,
        he.optDisabled = !i.disabled,
        t = re.createElement("input"),
        t.setAttribute("value", ""),
        he.input = "" === t.getAttribute("value"),
        t.value = "t",
        t.setAttribute("type", "radio"),
        he.radioValue = "t" === t.value
    }();
    var Nt = /\r/g
      , At = /[\x20\t\r\n\f]+/g;
    fe.fn.extend({
        val: function(e) {
            var t, n, r, i = this[0];
            {
                if (arguments.length)
                    return r = fe.isFunction(e),
                    this.each(function(n) {
                        var i;
                        1 === this.nodeType && (i = r ? e.call(this, n, fe(this).val()) : e,
                        null == i ? i = "" : "number" == typeof i ? i += "" : fe.isArray(i) && (i = fe.map(i, function(e) {
                            return null == e ? "" : e + ""
                        })),
                        t = fe.valHooks[this.type] || fe.valHooks[this.nodeName.toLowerCase()],
                        t && "set"in t && void 0 !== t.set(this, i, "value") || (this.value = i))
                    });
                if (i)
                    return t = fe.valHooks[i.type] || fe.valHooks[i.nodeName.toLowerCase()],
                    t && "get"in t && void 0 !== (n = t.get(i, "value")) ? n : (n = i.value,
                    "string" == typeof n ? n.replace(Nt, "") : null == n ? "" : n)
            }
        }
    }),
    fe.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = fe.find.attr(e, "value");
                    return null != t ? t : fe.trim(fe.text(e)).replace(At, " ")
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || 0 > i, s = o ? null : [], a = o ? i + 1 : r.length, l = 0 > i ? a : o ? i : 0; a > l; l++)
                        if (n = r[l],
                        (n.selected || l === i) && (he.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !fe.nodeName(n.parentNode, "optgroup"))) {
                            if (t = fe(n).val(),
                            o)
                                return t;
                            s.push(t)
                        }
                    return s
                },
                set: function(e, t) {
                    for (var n, r, i = e.options, o = fe.makeArray(t), s = i.length; s--; )
                        if (r = i[s],
                        fe.inArray(fe.valHooks.option.get(r), o) > -1)
                            try {
                                r.selected = n = !0
                            } catch (a) {
                                r.scrollHeight
                            }
                        else
                            r.selected = !1;
                    return n || (e.selectedIndex = -1),
                    i
                }
            }
        }
    }),
    fe.each(["radio", "checkbox"], function() {
        fe.valHooks[this] = {
            set: function(e, t) {
                return fe.isArray(t) ? e.checked = fe.inArray(fe(e).val(), t) > -1 : void 0
            }
        },
        he.checkOn || (fe.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on" : e.value
        }
        )
    });
    var Mt, Dt, Ot = fe.expr.attrHandle, It = /^(?:checked|selected)$/i, Pt = he.getSetAttribute, Ht = he.input;
    fe.fn.extend({
        attr: function(e, t) {
            return Fe(this, fe.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                fe.removeAttr(this, e)
            })
        }
    }),
    fe.extend({
        attr: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return "undefined" == typeof e.getAttribute ? fe.prop(e, t, n) : (1 === o && fe.isXMLDoc(e) || (t = t.toLowerCase(),
                i = fe.attrHooks[t] || (fe.expr.match.bool.test(t) ? Dt : Mt)),
                void 0 !== n ? null === n ? void fe.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : (r = fe.find.attr(e, t),
                null == r ? void 0 : r))
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!he.radioValue && "radio" === t && fe.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        removeAttr: function(e, t) {
            var n, r, i = 0, o = t && t.match(Ne);
            if (o && 1 === e.nodeType)
                for (; n = o[i++]; )
                    r = fe.propFix[n] || n,
                    fe.expr.match.bool.test(n) ? Ht && Pt || !It.test(n) ? e[r] = !1 : e[fe.camelCase("default-" + n)] = e[r] = !1 : fe.attr(e, n, ""),
                    e.removeAttribute(Pt ? n : r)
        }
    }),
    Dt = {
        set: function(e, t, n) {
            return t === !1 ? fe.removeAttr(e, n) : Ht && Pt || !It.test(n) ? e.setAttribute(!Pt && fe.propFix[n] || n, n) : e[fe.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    fe.each(fe.expr.match.bool.source.match(/\w+/g), function(e, t) {
        var n = Ot[t] || fe.find.attr;
        Ht && Pt || !It.test(t) ? Ot[t] = function(e, t, r) {
            var i, o;
            return r || (o = Ot[t],
            Ot[t] = i,
            i = null != n(e, t, r) ? t.toLowerCase() : null,
            Ot[t] = o),
            i
        }
        : Ot[t] = function(e, t, n) {
            return n ? void 0 : e[fe.camelCase("default-" + t)] ? t.toLowerCase() : null
        }
    }),
    Ht && Pt || (fe.attrHooks.value = {
        set: function(e, t, n) {
            return fe.nodeName(e, "input") ? void (e.defaultValue = t) : Mt && Mt.set(e, t, n)
        }
    }),
    Pt || (Mt = {
        set: function(e, t, n) {
            var r = e.getAttributeNode(n);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(n)),
            r.value = t += "",
            "value" === n || t === e.getAttribute(n) ? t : void 0
        }
    },
    Ot.id = Ot.name = Ot.coords = function(e, t, n) {
        var r;
        return n ? void 0 : (r = e.getAttributeNode(t)) && "" !== r.value ? r.value : null
    }
    ,
    fe.valHooks.button = {
        get: function(e, t) {
            var n = e.getAttributeNode(t);
            return n && n.specified ? n.value : void 0
        },
        set: Mt.set
    },
    fe.attrHooks.contenteditable = {
        set: function(e, t, n) {
            Mt.set(e, "" === t ? !1 : t, n)
        }
    },
    fe.each(["width", "height"], function(e, t) {
        fe.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"),
                n) : void 0
            }
        }
    })),
    he.style || (fe.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || void 0
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    });
    var Rt = /^(?:input|select|textarea|button|object)$/i
      , qt = /^(?:a|area)$/i;
    fe.fn.extend({
        prop: function(e, t) {
            return Fe(this, fe.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = fe.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = void 0,
                    delete this[e]
                } catch (t) {}
            })
        }
    }),
    fe.extend({
        prop: function(e, t, n) {
            var r, i, o = e.nodeType;
            if (3 !== o && 8 !== o && 2 !== o)
                return 1 === o && fe.isXMLDoc(e) || (t = fe.propFix[t] || t,
                i = fe.propHooks[t]),
                void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = fe.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Rt.test(e.nodeName) || qt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }),
    he.hrefNormalized || fe.each(["href", "src"], function(e, t) {
        fe.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    he.optSelected || (fe.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex),
            null
        },
        set: function(e) {
            var t = e.parentNode;
            t && (t.selectedIndex,
            t.parentNode && t.parentNode.selectedIndex)
        }
    }),
    fe.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
        fe.propFix[this.toLowerCase()] = this
    }),
    he.enctype || (fe.propFix.enctype = "encoding");
    var Ft = /[\t\r\n\f]/g;
    fe.fn.extend({
        addClass: function(e) {
            var t, n, r, i, o, s, a, l = 0;
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).addClass(e.call(this, t, U(this)))
                });
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++]; )
                    if (i = U(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Ft, " ")) {
                        for (s = 0; o = t[s++]; )
                            r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                        a = fe.trim(r),
                        i !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function(e) {
            var t, n, r, i, o, s, a, l = 0;
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).removeClass(e.call(this, t, U(this)))
                });
            if (!arguments.length)
                return this.attr("class", "");
            if ("string" == typeof e && e)
                for (t = e.match(Ne) || []; n = this[l++]; )
                    if (i = U(n),
                    r = 1 === n.nodeType && (" " + i + " ").replace(Ft, " ")) {
                        for (s = 0; o = t[s++]; )
                            for (; r.indexOf(" " + o + " ") > -1; )
                                r = r.replace(" " + o + " ", " ");
                        a = fe.trim(r),
                        i !== a && fe.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : fe.isFunction(e) ? this.each(function(n) {
                fe(this).toggleClass(e.call(this, n, U(this), t), t)
            }) : this.each(function() {
                var t, r, i, o;
                if ("string" === n)
                    for (r = 0,
                    i = fe(this),
                    o = e.match(Ne) || []; t = o[r++]; )
                        i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
                else
                    (void 0 === e || "boolean" === n) && (t = U(this),
                    t && fe._data(this, "__className__", t),
                    fe.attr(this, "class", t || e === !1 ? "" : fe._data(this, "__className__") || ""))
            })
        },
        hasClass: function(e) {
            var t, n, r = 0;
            for (t = " " + e + " "; n = this[r++]; )
                if (1 === n.nodeType && (" " + U(n) + " ").replace(Ft, " ").indexOf(t) > -1)
                    return !0;
            return !1
        }
    }),
    fe.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(e, t) {
        fe.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    fe.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        }
    });
    var $t = e.location
      , jt = fe.now()
      , Bt = /\?/
      , Wt = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    fe.parseJSON = function(t) {
        if (e.JSON && e.JSON.parse)
            return e.JSON.parse(t + "");
        var n, r = null, i = fe.trim(t + "");
        return i && !fe.trim(i.replace(Wt, function(e, t, i, o) {
            return n && t && (r = 0),
            0 === r ? e : (n = i || t,
            r += !o - !i,
            "")
        })) ? Function("return " + i)() : fe.error("Invalid JSON: " + t)
    }
    ,
    fe.parseXML = function(t) {
        var n, r;
        if (!t || "string" != typeof t)
            return null;
        try {
            e.DOMParser ? (r = new e.DOMParser,
            n = r.parseFromString(t, "text/xml")) : (n = new e.ActiveXObject("Microsoft.XMLDOM"),
            n.async = "false",
            n.loadXML(t))
        } catch (i) {
            n = void 0
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || fe.error("Invalid XML: " + t),
        n
    }
    ;
    var Ut = /#.*$/
      , zt = /([?&])_=[^&]*/
      , Vt = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm
      , Xt = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
      , Qt = /^(?:GET|HEAD)$/
      , Gt = /^\/\//
      , Kt = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
      , Jt = {}
      , Yt = {}
      , Zt = "*/".concat("*")
      , en = $t.href
      , tn = Kt.exec(en.toLowerCase()) || [];
    fe.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: en,
            type: "GET",
            isLocal: Xt.test(tn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Zt,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": fe.parseJSON,
                "text xml": fe.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? X(X(e, fe.ajaxSettings), t) : X(fe.ajaxSettings, e)
        },
        ajaxPrefilter: z(Jt),
        ajaxTransport: z(Yt),
        ajax: function(t, n) {
            function r(t, n, r, i) {
                var o, h, y, b, w, k = n;
                2 !== x && (x = 2,
                l && e.clearTimeout(l),
                c = void 0,
                a = i || "",
                _.readyState = t > 0 ? 4 : 0,
                o = t >= 200 && 300 > t || 304 === t,
                r && (b = Q(d, _, r)),
                b = G(d, b, _, o),
                o ? (d.ifModified && (w = _.getResponseHeader("Last-Modified"),
                w && (fe.lastModified[s] = w),
                w = _.getResponseHeader("etag"),
                w && (fe.etag[s] = w)),
                204 === t || "HEAD" === d.type ? k = "nocontent" : 304 === t ? k = "notmodified" : (k = b.state,
                h = b.data,
                y = b.error,
                o = !y)) : (y = k,
                (t || !k) && (k = "error",
                0 > t && (t = 0))),
                _.status = t,
                _.statusText = (n || k) + "",
                o ? m.resolveWith(f, [h, k, _]) : m.rejectWith(f, [_, k, y]),
                _.statusCode(v),
                v = void 0,
                u && p.trigger(o ? "ajaxSuccess" : "ajaxError", [_, d, o ? h : y]),
                g.fireWith(f, [_, k]),
                u && (p.trigger("ajaxComplete", [_, d]),
                --fe.active || fe.event.trigger("ajaxStop")))
            }
            "object" == typeof t && (n = t,
            t = void 0),
            n = n || {};
            var i, o, s, a, l, u, c, h, d = fe.ajaxSetup({}, n), f = d.context || d, p = d.context && (f.nodeType || f.jquery) ? fe(f) : fe.event, m = fe.Deferred(), g = fe.Callbacks("once memory"), v = d.statusCode || {}, y = {}, b = {}, x = 0, w = "canceled", _ = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === x) {
                        if (!h)
                            for (h = {}; t = Vt.exec(a); )
                                h[t[1].toLowerCase()] = t[2];
                        t = h[e.toLowerCase()]
                    }
                    return null == t ? null : t
                },
                getAllResponseHeaders: function() {
                    return 2 === x ? a : null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return x || (e = b[n] = b[n] || e,
                    y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return x || (d.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e)
                        if (2 > x)
                            for (t in e)
                                v[t] = [v[t], e[t]];
                        else
                            _.always(e[_.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || w;
                    return c && c.abort(t),
                    r(0, t),
                    this
                }
            };
            if (m.promise(_).complete = g.add,
            _.success = _.done,
            _.error = _.fail,
            d.url = ((t || d.url || en) + "").replace(Ut, "").replace(Gt, tn[1] + "//"),
            d.type = n.method || n.type || d.method || d.type,
            d.dataTypes = fe.trim(d.dataType || "*").toLowerCase().match(Ne) || [""],
            null == d.crossDomain && (i = Kt.exec(d.url.toLowerCase()),
            d.crossDomain = !(!i || i[1] === tn[1] && i[2] === tn[2] && (i[3] || ("http:" === i[1] ? "80" : "443")) === (tn[3] || ("http:" === tn[1] ? "80" : "443")))),
            d.data && d.processData && "string" != typeof d.data && (d.data = fe.param(d.data, d.traditional)),
            V(Jt, d, n, _),
            2 === x)
                return _;
            u = fe.event && d.global,
            u && 0 === fe.active++ && fe.event.trigger("ajaxStart"),
            d.type = d.type.toUpperCase(),
            d.hasContent = !Qt.test(d.type),
            s = d.url,
            d.hasContent || (d.data && (s = d.url += (Bt.test(s) ? "&" : "?") + d.data,
            delete d.data),
            d.cache === !1 && (d.url = zt.test(s) ? s.replace(zt, "$1_=" + jt++) : s + (Bt.test(s) ? "&" : "?") + "_=" + jt++)),
            d.ifModified && (fe.lastModified[s] && _.setRequestHeader("If-Modified-Since", fe.lastModified[s]),
            fe.etag[s] && _.setRequestHeader("If-None-Match", fe.etag[s])),
            (d.data && d.hasContent && d.contentType !== !1 || n.contentType) && _.setRequestHeader("Content-Type", d.contentType),
            _.setRequestHeader("Accept", d.dataTypes[0] && d.accepts[d.dataTypes[0]] ? d.accepts[d.dataTypes[0]] + ("*" !== d.dataTypes[0] ? ", " + Zt + "; q=0.01" : "") : d.accepts["*"]);
            for (o in d.headers)
                _.setRequestHeader(o, d.headers[o]);
            if (d.beforeSend && (d.beforeSend.call(f, _, d) === !1 || 2 === x))
                return _.abort();
            w = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            })
                _[o](d[o]);
            if (c = V(Yt, d, n, _)) {
                if (_.readyState = 1,
                u && p.trigger("ajaxSend", [_, d]),
                2 === x)
                    return _;
                d.async && d.timeout > 0 && (l = e.setTimeout(function() {
                    _.abort("timeout")
                }, d.timeout));
                try {
                    x = 1,
                    c.send(y, r)
                } catch (k) {
                    if (!(2 > x))
                        throw k;
                    r(-1, k)
                }
            } else
                r(-1, "No Transport");
            return _
        },
        getJSON: function(e, t, n) {
            return fe.get(e, t, n, "json")
        },
        getScript: function(e, t) {
            return fe.get(e, void 0, t, "script")
        }
    }),
    fe.each(["get", "post"], function(e, t) {
        fe[t] = function(e, n, r, i) {
            return fe.isFunction(n) && (i = i || r,
            r = n,
            n = void 0),
            fe.ajax(fe.extend({
                url: e,
                type: t,
                dataType: i,
                data: n,
                success: r
            }, fe.isPlainObject(e) && e))
        }
    }),
    fe._evalUrl = function(e) {
        return fe.ajax({
            url: e,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }
    ,
    fe.fn.extend({
        wrapAll: function(e) {
            if (fe.isFunction(e))
                return this.each(function(t) {
                    fe(this).wrapAll(e.call(this, t))
                });
            if (this[0]) {
                var t = fe(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType; )
                        e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return fe.isFunction(e) ? this.each(function(t) {
                fe(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = fe(this)
                  , n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = fe.isFunction(e);
            return this.each(function(n) {
                fe(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                fe.nodeName(this, "body") || fe(this).replaceWith(this.childNodes)
            }).end()
        }
    }),
    fe.expr.filters.hidden = function(e) {
        return he.reliableHiddenOffsets() ? e.offsetWidth <= 0 && e.offsetHeight <= 0 && !e.getClientRects().length : J(e)
    }
    ,
    fe.expr.filters.visible = function(e) {
        return !fe.expr.filters.hidden(e)
    }
    ;
    var nn = /%20/g
      , rn = /\[\]$/
      , on = /\r?\n/g
      , sn = /^(?:submit|button|image|reset|file)$/i
      , an = /^(?:input|select|textarea|keygen)/i;
    fe.param = function(e, t) {
        var n, r = [], i = function(e, t) {
            t = fe.isFunction(t) ? t() : null == t ? "" : t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (void 0 === t && (t = fe.ajaxSettings && fe.ajaxSettings.traditional),
        fe.isArray(e) || e.jquery && !fe.isPlainObject(e))
            fe.each(e, function() {
                i(this.name, this.value)
            });
        else
            for (n in e)
                Y(n, e[n], t, i);
        return r.join("&").replace(nn, "+")
    }
    ,
    fe.fn.extend({
        serialize: function() {
            return fe.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = fe.prop(this, "elements");
                return e ? fe.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !fe(this).is(":disabled") && an.test(this.nodeName) && !sn.test(e) && (this.checked || !$e.test(e))
            }).map(function(e, t) {
                var n = fe(this).val();
                return null == n ? null : fe.isArray(n) ? fe.map(n, function(e) {
                    return {
                        name: t.name,
                        value: e.replace(on, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(on, "\r\n")
                }
            }).get()
        }
    }),
    fe.ajaxSettings.xhr = void 0 !== e.ActiveXObject ? function() {
        return this.isLocal ? ee() : re.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || ee()
    }
    : Z;
    var ln = 0
      , un = {}
      , cn = fe.ajaxSettings.xhr();
    e.attachEvent && e.attachEvent("onunload", function() {
        for (var e in un)
            un[e](void 0, !0)
    }),
    he.cors = !!cn && "withCredentials"in cn,
    cn = he.ajax = !!cn,
    cn && fe.ajaxTransport(function(t) {
        if (!t.crossDomain || he.cors) {
            var n;
            return {
                send: function(r, i) {
                    var o, s = t.xhr(), a = ++ln;
                    if (s.open(t.type, t.url, t.async, t.username, t.password),
                    t.xhrFields)
                        for (o in t.xhrFields)
                            s[o] = t.xhrFields[o];
                    t.mimeType && s.overrideMimeType && s.overrideMimeType(t.mimeType),
                    t.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    for (o in r)
                        void 0 !== r[o] && s.setRequestHeader(o, r[o] + "");
                    s.send(t.hasContent && t.data || null),
                    n = function(e, r) {
                        var o, l, u;
                        if (n && (r || 4 === s.readyState))
                            if (delete un[a],
                            n = void 0,
                            s.onreadystatechange = fe.noop,
                            r)
                                4 !== s.readyState && s.abort();
                            else {
                                u = {},
                                o = s.status,
                                "string" == typeof s.responseText && (u.text = s.responseText);
                                try {
                                    l = s.statusText
                                } catch (c) {
                                    l = ""
                                }
                                o || !t.isLocal || t.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                            }
                        u && i(o, l, u, s.getAllResponseHeaders())
                    }
                    ,
                    t.async ? 4 === s.readyState ? e.setTimeout(n) : s.onreadystatechange = un[a] = n : n()
                },
                abort: function() {
                    n && n(void 0, !0)
                }
            }
        }
    }),
    fe.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function(e) {
                return fe.globalEval(e),
                e
            }
        }
    }),
    fe.ajaxPrefilter("script", function(e) {
        void 0 === e.cache && (e.cache = !1),
        e.crossDomain && (e.type = "GET",
        e.global = !1)
    }),
    fe.ajaxTransport("script", function(e) {
        if (e.crossDomain) {
            var t, n = re.head || fe("head")[0] || re.documentElement;
            return {
                send: function(r, i) {
                    t = re.createElement("script"),
                    t.async = !0,
                    e.scriptCharset && (t.charset = e.scriptCharset),
                    t.src = e.url,
                    t.onload = t.onreadystatechange = function(e, n) {
                        (n || !t.readyState || /loaded|complete/.test(t.readyState)) && (t.onload = t.onreadystatechange = null,
                        t.parentNode && t.parentNode.removeChild(t),
                        t = null,
                        n || i(200, "success"))
                    }
                    ,
                    n.insertBefore(t, n.firstChild)
                },
                abort: function() {
                    t && t.onload(void 0, !0)
                }
            }
        }
    });
    var hn = []
      , dn = /(=)\?(?=&|$)|\?\?/;
    fe.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = hn.pop() || fe.expando + "_" + jt++;
            return this[e] = !0,
            e
        }
    }),
    fe.ajaxPrefilter("json jsonp", function(t, n, r) {
        var i, o, s, a = t.jsonp !== !1 && (dn.test(t.url) ? "url" : "string" == typeof t.data && 0 === (t.contentType || "").indexOf("application/x-www-form-urlencoded") && dn.test(t.data) && "data");
        return a || "jsonp" === t.dataTypes[0] ? (i = t.jsonpCallback = fe.isFunction(t.jsonpCallback) ? t.jsonpCallback() : t.jsonpCallback,
        a ? t[a] = t[a].replace(dn, "$1" + i) : t.jsonp !== !1 && (t.url += (Bt.test(t.url) ? "&" : "?") + t.jsonp + "=" + i),
        t.converters["script json"] = function() {
            return s || fe.error(i + " was not called"),
            s[0]
        }
        ,
        t.dataTypes[0] = "json",
        o = e[i],
        e[i] = function() {
            s = arguments
        }
        ,
        r.always(function() {
            void 0 === o ? fe(e).removeProp(i) : e[i] = o,
            t[i] && (t.jsonpCallback = n.jsonpCallback,
            hn.push(i)),
            s && fe.isFunction(o) && o(s[0]),
            s = o = void 0
        }),
        "script") : void 0
    }),
    fe.parseHTML = function(e, t, n) {
        if (!e || "string" != typeof e)
            return null;
        "boolean" == typeof t && (n = t,
        t = !1),
        t = t || re;
        var r = _e.exec(e)
          , i = !n && [];
        return r ? [t.createElement(r[1])] : (r = v([e], t, i),
        i && i.length && fe(i).remove(),
        fe.merge([], r.childNodes))
    }
    ;
    var fn = fe.fn.load;
    fe.fn.load = function(e, t, n) {
        if ("string" != typeof e && fn)
            return fn.apply(this, arguments);
        var r, i, o, s = this, a = e.indexOf(" ");
        return a > -1 && (r = fe.trim(e.slice(a, e.length)),
        e = e.slice(0, a)),
        fe.isFunction(t) ? (n = t,
        t = void 0) : t && "object" == typeof t && (i = "POST"),
        s.length > 0 && fe.ajax({
            url: e,
            type: i || "GET",
            dataType: "html",
            data: t
        }).done(function(e) {
            o = arguments,
            s.html(r ? fe("<div>").append(fe.parseHTML(e)).find(r) : e)
        }).always(n && function(e, t) {
            s.each(function() {
                n.apply(this, o || [e.responseText, t, e])
            })
        }
        ),
        this
    }
    ,
    fe.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
        fe.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    fe.expr.filters.animated = function(e) {
        return fe.grep(fe.timers, function(t) {
            return e === t.elem
        }).length
    }
    ,
    fe.offset = {
        setOffset: function(e, t, n) {
            var r, i, o, s, a, l, u, c = fe.css(e, "position"), h = fe(e), d = {};
            "static" === c && (e.style.position = "relative"),
            a = h.offset(),
            o = fe.css(e, "top"),
            l = fe.css(e, "left"),
            u = ("absolute" === c || "fixed" === c) && fe.inArray("auto", [o, l]) > -1,
            u ? (r = h.position(),
            s = r.top,
            i = r.left) : (s = parseFloat(o) || 0,
            i = parseFloat(l) || 0),
            fe.isFunction(t) && (t = t.call(e, n, fe.extend({}, a))),
            null != t.top && (d.top = t.top - a.top + s),
            null != t.left && (d.left = t.left - a.left + i),
            "using"in t ? t.using.call(e, d) : h.css(d)
        }
    },
    fe.fn.extend({
        offset: function(e) {
            if (arguments.length)
                return void 0 === e ? this : this.each(function(t) {
                    fe.offset.setOffset(this, e, t)
                });
            var t, n, r = {
                top: 0,
                left: 0
            }, i = this[0], o = i && i.ownerDocument;
            if (o)
                return t = o.documentElement,
                fe.contains(t, i) ? ("undefined" != typeof i.getBoundingClientRect && (r = i.getBoundingClientRect()),
                n = te(o),
                {
                    top: r.top + (n.pageYOffset || t.scrollTop) - (t.clientTop || 0),
                    left: r.left + (n.pageXOffset || t.scrollLeft) - (t.clientLeft || 0)
                }) : r
        },
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                }, r = this[0];
                return "fixed" === fe.css(r, "position") ? t = r.getBoundingClientRect() : (e = this.offsetParent(),
                t = this.offset(),
                fe.nodeName(e[0], "html") || (n = e.offset()),
                n.top += fe.css(e[0], "borderTopWidth", !0),
                n.left += fe.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - fe.css(r, "marginTop", !0),
                    left: t.left - n.left - fe.css(r, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent; e && !fe.nodeName(e, "html") && "static" === fe.css(e, "position"); )
                    e = e.offsetParent;
                return e || ft
            })
        }
    }),
    fe.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function(e, t) {
        var n = /Y/.test(t);
        fe.fn[e] = function(r) {
            return Fe(this, function(e, r, i) {
                var o = te(e);
                return void 0 === i ? o ? t in o ? o[t] : o.document.documentElement[r] : e[r] : void (o ? o.scrollTo(n ? fe(o).scrollLeft() : i, n ? i : fe(o).scrollTop()) : e[r] = i)
            }, e, r, arguments.length, null)
        }
    }),
    fe.each(["top", "left"], function(e, t) {
        fe.cssHooks[t] = M(he.pixelPosition, function(e, n) {
            return n ? (n = mt(e, t),
            ht.test(n) ? fe(e).position()[t] + "px" : n) : void 0
        })
    }),
    fe.each({
        Height: "height",
        Width: "width"
    }, function(e, t) {
        fe.each({
            padding: "inner" + e,
            content: t,
            "": "outer" + e
        }, function(n, r) {
            fe.fn[r] = function(r, i) {
                var o = arguments.length && (n || "boolean" != typeof r)
                  , s = n || (r === !0 || i === !0 ? "margin" : "border");
                return Fe(this, function(t, n, r) {
                    var i;
                    return fe.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement,
                    Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? fe.css(t, n, s) : fe.style(t, n, r, s)
                }, t, o ? r : void 0, o, null)
            }
        })
    }),
    fe.fn.extend({
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, r) {
            return this.on(t, e, n, r)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    }),
    fe.fn.size = function() {
        return this.length
    }
    ,
    fe.fn.andSelf = fe.fn.addBack,
    "function" == typeof define && define.amd && define("jquery", [], function() {
        return fe
    });
    var pn = e.jQuery
      , mn = e.$;
    return fe.noConflict = function(t) {
        return e.$ === fe && (e.$ = mn),
        t && e.jQuery === fe && (e.jQuery = pn),
        fe
    }
    ,
    t || (e.jQuery = e.$ = fe),
    fe
}),
function() {
    function e(e, t) {
        if (e !== t) {
            var n = null === e
              , r = e === w
              , i = e === e
              , o = null === t
              , s = t === w
              , a = t === t;
            if (e > t && !o || !i || n && !s && a || r && a)
                return 1;
            if (t > e && !n || !a || o && !r && i || s && i)
                return -1
        }
        return 0
    }
    function t(e, t, n) {
        for (var r = e.length, i = n ? r : -1; n ? i-- : ++i < r; )
            if (t(e[i], i, e))
                return i;
        return -1
    }
    function n(e, t, n) {
        if (t !== t)
            return d(e, n);
        for (var r = n - 1, i = e.length; ++r < i; )
            if (e[r] === t)
                return r;
        return -1
    }
    function r(e) {
        return "function" == typeof e || !1
    }
    function i(e) {
        return "string" == typeof e ? e : null == e ? "" : e + ""
    }
    function o(e, t) {
        for (var n = -1, r = e.length; ++n < r && t.indexOf(e.charAt(n)) > -1; )
            ;
        return n
    }
    function s(e, t) {
        for (var n = e.length; n-- && t.indexOf(e.charAt(n)) > -1; )
            ;
        return n
    }
    function a(t, n) {
        return e(t.criteria, n.criteria) || t.index - n.index
    }
    function l(t, n, r) {
        for (var i = -1, o = t.criteria, s = n.criteria, a = o.length, l = r.length; ++i < a; ) {
            var u = e(o[i], s[i]);
            if (u)
                return i >= l ? u : u * (r[i] ? 1 : -1)
        }
        return t.index - n.index
    }
    function u(e) {
        return Be[e]
    }
    function c(e) {
        return We[e]
    }
    function h(e) {
        return "\\" + Ve[e]
    }
    function d(e, t, n) {
        for (var r = e.length, i = t + (n ? 0 : -1); n ? i-- : ++i < r; ) {
            var o = e[i];
            if (o !== o)
                return i
        }
        return -1
    }
    function f(e) {
        return !!e && "object" == typeof e
    }
    function p(e) {
        return 160 >= e && e >= 9 && 13 >= e || 32 == e || 160 == e || 5760 == e || 6158 == e || e >= 8192 && (8202 >= e || 8232 == e || 8233 == e || 8239 == e || 8287 == e || 12288 == e || 65279 == e)
    }
    function m(e, t) {
        for (var n = -1, r = e.length, i = -1, o = []; ++n < r; )
            e[n] === t && (e[n] = $,
            o[++i] = n);
        return o
    }
    function g(e, t) {
        for (var n, r = -1, i = e.length, o = -1, s = []; ++r < i; ) {
            var a = e[r]
              , l = t ? t(a, r, e) : a;
            r && n === l || (n = l,
            s[++o] = a)
        }
        return s
    }
    function v(e) {
        for (var t = -1, n = e.length; ++t < n && p(e.charCodeAt(t)); )
            ;
        return t
    }
    function y(e) {
        for (var t = e.length; t-- && p(e.charCodeAt(t)); )
            ;
        return t
    }
    function b(e) {
        return Ue[e]
    }
    function x(p) {
        function X(e) {
            if (f(e) && !La(e) && !(e instanceof Be)) {
                if (e instanceof Z)
                    return e;
                if (Go.call(e, "__chain__") && Go.call(e, "__wrapped__"))
                    return ur(e)
            }
            return new Z(e)
        }
        function J() {}
        function Z(e, t, n) {
            this.__wrapped__ = e,
            this.__actions__ = n || [],
            this.__chain__ = !!t
        }
        function Be(e) {
            this.__wrapped__ = e,
            this.__actions__ = null,
            this.__dir__ = 1,
            this.__dropCount__ = 0,
            this.__filtered__ = !1,
            this.__iteratees__ = null,
            this.__takeCount__ = Cs,
            this.__views__ = null
        }
        function We() {
            var e = this.__actions__
              , t = this.__iteratees__
              , n = this.__views__
              , r = new Be(this.__wrapped__);
            return r.__actions__ = e ? nt(e) : null,
            r.__dir__ = this.__dir__,
            r.__filtered__ = this.__filtered__,
            r.__iteratees__ = t ? nt(t) : null,
            r.__takeCount__ = this.__takeCount__,
            r.__views__ = n ? nt(n) : null,
            r
        }
        function Ue() {
            if (this.__filtered__) {
                var e = new Be(this);
                e.__dir__ = -1,
                e.__filtered__ = !0
            } else
                e = this.clone(),
                e.__dir__ *= -1;
            return e
        }
        function ze() {
            var e = this.__wrapped__.value();
            if (!La(e))
                return tn(e, this.__actions__);
            var t = this.__dir__
              , n = 0 > t
              , r = Bn(0, e.length, this.__views__)
              , i = r.start
              , o = r.end
              , s = o - i
              , a = n ? o : i - 1
              , l = bs(s, this.__takeCount__)
              , u = this.__iteratees__
              , c = u ? u.length : 0
              , h = 0
              , d = [];
            e: for (; s-- && l > h; ) {
                a += t;
                for (var f = -1, p = e[a]; ++f < c; ) {
                    var m = u[f]
                      , g = m.iteratee
                      , v = m.type;
                    if (v == H) {
                        if (m.done && (n ? a > m.index : a < m.index) && (m.count = 0,
                        m.done = !1),
                        m.index = a,
                        !m.done) {
                            var y = m.limit;
                            if (!(m.done = y > -1 ? m.count++ >= y : !g(p)))
                                continue e
                        }
                    } else {
                        var b = g(p);
                        if (v == q)
                            p = b;
                        else if (!b) {
                            if (v == R)
                                continue e;
                            break e
                        }
                    }
                }
                d[h++] = p
            }
            return d
        }
        function Ve() {
            this.__data__ = {}
        }
        function Xe(e) {
            return this.has(e) && delete this.__data__[e]
        }
        function Qe(e) {
            return "__proto__" == e ? w : this.__data__[e]
        }
        function Ge(e) {
            return "__proto__" != e && Go.call(this.__data__, e)
        }
        function Ke(e, t) {
            return "__proto__" != e && (this.__data__[e] = t),
            this
        }
        function Je(e) {
            var t = e ? e.length : 0;
            for (this.data = {
                hash: ps(null),
                set: new ls
            }; t--; )
                this.push(e[t])
        }
        function Ye(e, t) {
            var n = e.data
              , r = "string" == typeof t || Ei(t) ? n.set.has(t) : n.hash[t];
            return r ? 0 : -1
        }
        function tt(e) {
            var t = this.data;
            "string" == typeof e || Ei(e) ? t.set.add(e) : t.hash[e] = !0
        }
        function nt(e, t) {
            var n = -1
              , r = e.length;
            for (t || (t = Io(r)); ++n < r; )
                t[n] = e[n];
            return t
        }
        function rt(e, t) {
            for (var n = -1, r = e.length; ++n < r && t(e[n], n, e) !== !1; )
                ;
            return e
        }
        function it(e, t) {
            for (var n = e.length; n-- && t(e[n], n, e) !== !1; )
                ;
            return e
        }
        function ot(e, t) {
            for (var n = -1, r = e.length; ++n < r; )
                if (!t(e[n], n, e))
                    return !1;
            return !0
        }
        function st(e, t, n, r) {
            for (var i = -1, o = e.length, s = r, a = s; ++i < o; ) {
                var l = e[i]
                  , u = +t(l);
                n(u, s) && (s = u,
                a = l)
            }
            return a
        }
        function at(e, t) {
            for (var n = -1, r = e.length, i = -1, o = []; ++n < r; ) {
                var s = e[n];
                t(s, n, e) && (o[++i] = s)
            }
            return o
        }
        function lt(e, t) {
            for (var n = -1, r = e.length, i = Io(r); ++n < r; )
                i[n] = t(e[n], n, e);
            return i
        }
        function ut(e, t, n, r) {
            var i = -1
              , o = e.length;
            for (r && o && (n = e[++i]); ++i < o; )
                n = t(n, e[i], i, e);
            return n
        }
        function ct(e, t, n, r) {
            var i = e.length;
            for (r && i && (n = e[--i]); i--; )
                n = t(n, e[i], i, e);
            return n
        }
        function ht(e, t) {
            for (var n = -1, r = e.length; ++n < r; )
                if (t(e[n], n, e))
                    return !0;
            return !1
        }
        function dt(e) {
            for (var t = e.length, n = 0; t--; )
                n += +e[t] || 0;
            return n
        }
        function ft(e, t) {
            return e === w ? t : e
        }
        function pt(e, t, n, r) {
            return e !== w && Go.call(r, n) ? e : t
        }
        function mt(e, t, n) {
            for (var r = -1, i = Fa(t), o = i.length; ++r < o; ) {
                var s = i[r]
                  , a = e[s]
                  , l = n(a, t[s], s, e, t);
                (l === l ? l === a : a !== a) && (a !== w || s in e) || (e[s] = l)
            }
            return e
        }
        function gt(e, t) {
            return null == t ? e : yt(t, Fa(t), e)
        }
        function vt(e, t) {
            for (var n = -1, r = null == e, i = !r && Xn(e), o = i ? e.length : 0, s = t.length, a = Io(s); ++n < s; ) {
                var l = t[n];
                i ? a[n] = Qn(l, o) ? e[l] : w : a[n] = r ? w : e[l]
            }
            return a
        }
        function yt(e, t, n) {
            n || (n = {});
            for (var r = -1, i = t.length; ++r < i; ) {
                var o = t[r];
                n[o] = e[o]
            }
            return n
        }
        function bt(e, t, n) {
            var r = typeof e;
            return "function" == r ? t === w ? e : on(e, t, n) : null == e ? wo : "object" == r ? qt(e) : t === w ? Lo(e) : Ft(e, t)
        }
        function xt(e, t, n, r, i, o, s) {
            var a;
            if (n && (a = i ? n(e, r, i) : n(e)),
            a !== w)
                return a;
            if (!Ei(e))
                return e;
            var l = La(e);
            if (l) {
                if (a = Wn(e),
                !t)
                    return nt(e, a)
            } else {
                var u = Jo.call(e)
                  , c = u == V;
                if (u != G && u != j && (!c || i))
                    return $e[u] ? zn(e, u, t) : i ? e : {};
                if (a = Un(c ? {} : e),
                !t)
                    return gt(a, e)
            }
            o || (o = []),
            s || (s = []);
            for (var h = o.length; h--; )
                if (o[h] == e)
                    return s[h];
            return o.push(e),
            s.push(a),
            (l ? rt : At)(e, function(r, i) {
                a[i] = xt(r, t, n, i, e, o, s)
            }),
            a
        }
        function wt(e, t, n) {
            if ("function" != typeof e)
                throw new Wo(F);
            return us(function() {
                e.apply(w, n)
            }, t)
        }
        function _t(e, t) {
            var r = e ? e.length : 0
              , i = [];
            if (!r)
                return i;
            var o = -1
              , s = Fn()
              , a = s == n
              , l = a && t.length >= 200 ? $s(t) : null
              , u = t.length;
            l && (s = Ye,
            a = !1,
            t = l);
            e: for (; ++o < r; ) {
                var c = e[o];
                if (a && c === c) {
                    for (var h = u; h--; )
                        if (t[h] === c)
                            continue e;
                    i.push(c)
                } else
                    s(t, c, 0) < 0 && i.push(c)
            }
            return i
        }
        function kt(e, t) {
            var n = !0;
            return Ps(e, function(e, r, i) {
                return n = !!t(e, r, i)
            }),
            n
        }
        function St(e, t, n, r) {
            var i = r
              , o = i;
            return Ps(e, function(e, s, a) {
                var l = +t(e, s, a);
                (n(l, i) || l === r && l === o) && (i = l,
                o = e)
            }),
            o
        }
        function Ct(e, t, n, r) {
            var i = e.length;
            for (n = null == n ? 0 : +n || 0,
            0 > n && (n = -n > i ? 0 : i + n),
            r = r === w || r > i ? i : +r || 0,
            0 > r && (r += i),
            i = n > r ? 0 : r >>> 0,
            n >>>= 0; i > n; )
                e[n++] = t;
            return e
        }
        function Tt(e, t) {
            var n = [];
            return Ps(e, function(e, r, i) {
                t(e, r, i) && n.push(e)
            }),
            n
        }
        function Lt(e, t, n, r) {
            var i;
            return n(e, function(e, n, o) {
                return t(e, n, o) ? (i = r ? n : e,
                !1) : void 0
            }),
            i
        }
        function Et(e, t, n) {
            for (var r = -1, i = e.length, o = -1, s = []; ++r < i; ) {
                var a = e[r];
                if (f(a) && Xn(a) && (n || La(a) || wi(a))) {
                    t && (a = Et(a, t, n));
                    for (var l = -1, u = a.length; ++l < u; )
                        s[++o] = a[l]
                } else
                    n || (s[++o] = a)
            }
            return s
        }
        function Nt(e, t) {
            return Rs(e, t, Xi)
        }
        function At(e, t) {
            return Rs(e, t, Fa)
        }
        function Mt(e, t) {
            return qs(e, t, Fa)
        }
        function Dt(e, t) {
            for (var n = -1, r = t.length, i = -1, o = []; ++n < r; ) {
                var s = t[n];
                Na(e[s]) && (o[++i] = s)
            }
            return o
        }
        function Ot(e, t, n) {
            if (null != e) {
                n !== w && n in ar(e) && (t = [n]);
                for (var r = 0, i = t.length; null != e && i > r; )
                    e = e[t[r++]];
                return r && r == i ? e : w
            }
        }
        function It(e, t, n, r, i, o) {
            return e === t ? !0 : null == e || null == t || !Ei(e) && !f(t) ? e !== e && t !== t : Pt(e, t, It, n, r, i, o)
        }
        function Pt(e, t, n, r, i, o, s) {
            var a = La(e)
              , l = La(t)
              , u = B
              , c = B;
            a || (u = Jo.call(e),
            u == j ? u = G : u != G && (a = Hi(e))),
            l || (c = Jo.call(t),
            c == j ? c = G : c != G && (l = Hi(t)));
            var h = u == G
              , d = c == G
              , f = u == c;
            if (f && !a && !h)
                return Pn(e, t, u);
            if (!i) {
                var p = h && Go.call(e, "__wrapped__")
                  , m = d && Go.call(t, "__wrapped__");
                if (p || m)
                    return n(p ? e.value() : e, m ? t.value() : t, r, i, o, s)
            }
            if (!f)
                return !1;
            o || (o = []),
            s || (s = []);
            for (var g = o.length; g--; )
                if (o[g] == e)
                    return s[g] == t;
            o.push(e),
            s.push(t);
            var v = (a ? In : Hn)(e, t, n, r, i, o, s);
            return o.pop(),
            s.pop(),
            v
        }
        function Ht(e, t, n) {
            var r = t.length
              , i = r
              , o = !n;
            if (null == e)
                return !i;
            for (e = ar(e); r--; ) {
                var s = t[r];
                if (o && s[2] ? s[1] !== e[s[0]] : !(s[0]in e))
                    return !1
            }
            for (; ++r < i; ) {
                s = t[r];
                var a = s[0]
                  , l = e[a]
                  , u = s[1];
                if (o && s[2]) {
                    if (l === w && !(a in e))
                        return !1
                } else {
                    var c = n ? n(l, u, a) : w;
                    if (!(c === w ? It(u, l, n, !0) : c))
                        return !1
                }
            }
            return !0
        }
        function Rt(e, t) {
            var n = -1
              , r = Xn(e) ? Io(e.length) : [];
            return Ps(e, function(e, i, o) {
                r[++n] = t(e, i, o)
            }),
            r
        }
        function qt(e) {
            var t = $n(e);
            if (1 == t.length && t[0][2]) {
                var n = t[0][0]
                  , r = t[0][1];
                return function(e) {
                    return null == e ? !1 : e[n] === r && (r !== w || n in ar(e))
                }
            }
            return function(e) {
                return Ht(e, t)
            }
        }
        function Ft(e, t) {
            var n = La(e)
              , r = Kn(e) && Zn(t)
              , i = e + "";
            return e = lr(e),
            function(o) {
                if (null == o)
                    return !1;
                var s = i;
                if (o = ar(o),
                (n || !r) && !(s in o)) {
                    if (o = 1 == e.length ? o : Ot(o, Xt(e, 0, -1)),
                    null == o)
                        return !1;
                    s = _r(e),
                    o = ar(o)
                }
                return o[s] === t ? t !== w || s in o : It(t, o[s], w, !0)
            }
        }
        function $t(e, t, n, r, i) {
            if (!Ei(e))
                return e;
            var o = Xn(t) && (La(t) || Hi(t))
              , s = o ? null : Fa(t);
            return rt(s || t, function(a, l) {
                if (s && (l = a,
                a = t[l]),
                f(a))
                    r || (r = []),
                    i || (i = []),
                    jt(e, t, l, $t, n, r, i);
                else {
                    var u = e[l]
                      , c = n ? n(u, a, l, e, t) : w
                      , h = c === w;
                    h && (c = a),
                    c === w && (!o || l in e) || !h && (c === c ? c === u : u !== u) || (e[l] = c)
                }
            }),
            e
        }
        function jt(e, t, n, r, i, o, s) {
            for (var a = o.length, l = t[n]; a--; )
                if (o[a] == l)
                    return void (e[n] = s[a]);
            var u = e[n]
              , c = i ? i(u, l, n, e, t) : w
              , h = c === w;
            h && (c = l,
            Xn(l) && (La(l) || Hi(l)) ? c = La(u) ? u : Xn(u) ? nt(u) : [] : Aa(l) || wi(l) ? c = wi(u) ? ji(u) : Aa(u) ? u : {} : h = !1),
            o.push(l),
            s.push(c),
            h ? e[n] = r(c, l, i, o, s) : (c === c ? c !== u : u === u) && (e[n] = c)
        }
        function Bt(e) {
            return function(t) {
                return null == t ? w : t[e]
            }
        }
        function Wt(e) {
            var t = e + "";
            return e = lr(e),
            function(n) {
                return Ot(n, e, t)
            }
        }
        function Ut(e, t) {
            for (var n = e ? t.length : 0; n--; ) {
                var r = t[n];
                if (r != i && Qn(r)) {
                    var i = r;
                    cs.call(e, r, 1)
                }
            }
            return e
        }
        function zt(e, t) {
            return e + is(ks() * (t - e + 1))
        }
        function Vt(e, t, n, r, i) {
            return i(e, function(e, i, o) {
                n = r ? (r = !1,
                e) : t(n, e, i, o)
            }),
            n
        }
        function Xt(e, t, n) {
            var r = -1
              , i = e.length;
            t = null == t ? 0 : +t || 0,
            0 > t && (t = -t > i ? 0 : i + t),
            n = n === w || n > i ? i : +n || 0,
            0 > n && (n += i),
            i = t > n ? 0 : n - t >>> 0,
            t >>>= 0;
            for (var o = Io(i); ++r < i; )
                o[r] = e[r + t];
            return o
        }
        function Qt(e, t) {
            var n;
            return Ps(e, function(e, r, i) {
                return n = t(e, r, i),
                !n
            }),
            !!n
        }
        function Gt(e, t) {
            var n = e.length;
            for (e.sort(t); n--; )
                e[n] = e[n].value;
            return e
        }
        function Kt(e, t, n) {
            var r = Rn()
              , i = -1;
            t = lt(t, function(e) {
                return r(e)
            });
            var o = Rt(e, function(e) {
                var n = lt(t, function(t) {
                    return t(e)
                });
                return {
                    criteria: n,
                    index: ++i,
                    value: e
                }
            });
            return Gt(o, function(e, t) {
                return l(e, t, n)
            })
        }
        function Jt(e, t) {
            var n = 0;
            return Ps(e, function(e, r, i) {
                n += +t(e, r, i) || 0
            }),
            n
        }
        function Yt(e, t) {
            var r = -1
              , i = Fn()
              , o = e.length
              , s = i == n
              , a = s && o >= 200
              , l = a ? $s() : null
              , u = [];
            l ? (i = Ye,
            s = !1) : (a = !1,
            l = t ? [] : u);
            e: for (; ++r < o; ) {
                var c = e[r]
                  , h = t ? t(c, r, e) : c;
                if (s && c === c) {
                    for (var d = l.length; d--; )
                        if (l[d] === h)
                            continue e;
                    t && l.push(h),
                    u.push(c)
                } else
                    i(l, h, 0) < 0 && ((t || a) && l.push(h),
                    u.push(c))
            }
            return u
        }
        function Zt(e, t) {
            for (var n = -1, r = t.length, i = Io(r); ++n < r; )
                i[n] = e[t[n]];
            return i
        }
        function en(e, t, n, r) {
            for (var i = e.length, o = r ? i : -1; (r ? o-- : ++o < i) && t(e[o], o, e); )
                ;
            return n ? Xt(e, r ? 0 : o, r ? o + 1 : i) : Xt(e, r ? o + 1 : 0, r ? i : o)
        }
        function tn(e, t) {
            var n = e;
            n instanceof Be && (n = n.value());
            for (var r = -1, i = t.length; ++r < i; ) {
                var o = [n]
                  , s = t[r];
                as.apply(o, s.args),
                n = s.func.apply(s.thisArg, o)
            }
            return n
        }
        function nn(e, t, n) {
            var r = 0
              , i = e ? e.length : r;
            if ("number" == typeof t && t === t && Es >= i) {
                for (; i > r; ) {
                    var o = r + i >>> 1
                      , s = e[o];
                    (n ? t >= s : t > s) && null !== s ? r = o + 1 : i = o
                }
                return i
            }
            return rn(e, t, wo, n)
        }
        function rn(e, t, n, r) {
            t = n(t);
            for (var i = 0, o = e ? e.length : 0, s = t !== t, a = null === t, l = t === w; o > i; ) {
                var u = is((i + o) / 2)
                  , c = n(e[u])
                  , h = c !== w
                  , d = c === c;
                if (s)
                    var f = d || r;
                else
                    f = a ? d && h && (r || null != c) : l ? d && (r || h) : null == c ? !1 : r ? t >= c : t > c;
                f ? i = u + 1 : o = u
            }
            return bs(o, Ls)
        }
        function on(e, t, n) {
            if ("function" != typeof e)
                return wo;
            if (t === w)
                return e;
            switch (n) {
            case 1:
                return function(n) {
                    return e.call(t, n)
                }
                ;
            case 3:
                return function(n, r, i) {
                    return e.call(t, n, r, i)
                }
                ;
            case 4:
                return function(n, r, i, o) {
                    return e.call(t, n, r, i, o)
                }
                ;
            case 5:
                return function(n, r, i, o, s) {
                    return e.call(t, n, r, i, o, s)
                }
            }
            return function() {
                return e.apply(t, arguments)
            }
        }
        function sn(e) {
            return ts.call(e, 0)
        }
        function an(e, t, n) {
            for (var r = n.length, i = -1, o = ys(e.length - r, 0), s = -1, a = t.length, l = Io(o + a); ++s < a; )
                l[s] = t[s];
            for (; ++i < r; )
                l[n[i]] = e[i];
            for (; o--; )
                l[s++] = e[i++];
            return l
        }
        function ln(e, t, n) {
            for (var r = -1, i = n.length, o = -1, s = ys(e.length - i, 0), a = -1, l = t.length, u = Io(s + l); ++o < s; )
                u[o] = e[o];
            for (var c = o; ++a < l; )
                u[c + a] = t[a];
            for (; ++r < i; )
                u[c + n[r]] = e[o++];
            return u
        }
        function un(e, t) {
            return function(n, r, i) {
                var o = t ? t() : {};
                if (r = Rn(r, i, 3),
                La(n))
                    for (var s = -1, a = n.length; ++s < a; ) {
                        var l = n[s];
                        e(o, l, r(l, s, n), n)
                    }
                else
                    Ps(n, function(t, n, i) {
                        e(o, t, r(t, n, i), i)
                    });
                return o
            }
        }
        function cn(e) {
            return fi(function(t, n) {
                var r = -1
                  , i = null == t ? 0 : n.length
                  , o = i > 2 ? n[i - 2] : w
                  , s = i > 2 ? n[2] : w
                  , a = i > 1 ? n[i - 1] : w;
                for ("function" == typeof o ? (o = on(o, a, 5),
                i -= 2) : (o = "function" == typeof a ? a : w,
                i -= o ? 1 : 0),
                s && Gn(n[0], n[1], s) && (o = 3 > i ? w : o,
                i = 1); ++r < i; ) {
                    var l = n[r];
                    l && e(t, l, o)
                }
                return t
            })
        }
        function hn(e, t) {
            return function(n, r) {
                var i = n ? Bs(n) : 0;
                if (!Yn(i))
                    return e(n, r);
                for (var o = t ? i : -1, s = ar(n); (t ? o-- : ++o < i) && r(s[o], o, s) !== !1; )
                    ;
                return n
            }
        }
        function dn(e) {
            return function(t, n, r) {
                for (var i = ar(t), o = r(t), s = o.length, a = e ? s : -1; e ? a-- : ++a < s; ) {
                    var l = o[a];
                    if (n(i[l], l, i) === !1)
                        break
                }
                return t
            }
        }
        function fn(e, t) {
            function n() {
                var i = this && this !== Ze && this instanceof n ? r : e;
                return i.apply(t, arguments)
            }
            var r = mn(e);
            return n
        }
        function pn(e) {
            return function(t) {
                for (var n = -1, r = yo(ro(t)), i = r.length, o = ""; ++n < i; )
                    o = e(o, r[n], n);
                return o
            }
        }
        function mn(e) {
            return function() {
                var t = arguments;
                switch (t.length) {
                case 0:
                    return new e;
                case 1:
                    return new e(t[0]);
                case 2:
                    return new e(t[0],t[1]);
                case 3:
                    return new e(t[0],t[1],t[2]);
                case 4:
                    return new e(t[0],t[1],t[2],t[3]);
                case 5:
                    return new e(t[0],t[1],t[2],t[3],t[4])
                }
                var n = Is(e.prototype)
                  , r = e.apply(n, t);
                return Ei(r) ? r : n
            }
        }
        function gn(e) {
            function t(n, r, i) {
                i && Gn(n, r, i) && (r = null);
                var o = On(n, e, null, null, null, null, null, r);
                return o.placeholder = t.placeholder,
                o
            }
            return t
        }
        function vn(e, t) {
            return function(n, r, i) {
                if (i && Gn(n, r, i) && (r = null),
                r = Rn(r, i, 3),
                1 == r.length) {
                    n = sr(n);
                    var o = st(n, r, e, t);
                    if (!n.length || o !== t)
                        return o
                }
                return St(n, r, e, t)
            }
        }
        function yn(e, n) {
            return function(r, i, o) {
                if (i = Rn(i, o, 3),
                La(r)) {
                    var s = t(r, i, n);
                    return s > -1 ? r[s] : w
                }
                return Lt(r, i, e)
            }
        }
        function bn(e) {
            return function(n, r, i) {
                return n && n.length ? (r = Rn(r, i, 3),
                t(n, r, e)) : -1
            }
        }
        function xn(e) {
            return function(t, n, r) {
                return n = Rn(n, r, 3),
                Lt(t, n, e, !0)
            }
        }
        function wn(e) {
            return function() {
                for (var t, n = arguments.length, r = e ? n : -1, i = 0, o = Io(n); e ? r-- : ++r < n; ) {
                    var s = o[i++] = arguments[r];
                    if ("function" != typeof s)
                        throw new Wo(F);
                    !t && Z.prototype.thru && "wrapper" == qn(s) && (t = new Z([]))
                }
                for (r = t ? -1 : n; ++r < n; ) {
                    s = o[r];
                    var a = qn(s)
                      , l = "wrapper" == a ? js(s) : null;
                    t = l && Jn(l[0]) && l[1] == (A | T | E | M) && !l[4].length && 1 == l[9] ? t[qn(l[0])].apply(t, l[3]) : 1 == s.length && Jn(s) ? t[a]() : t.thru(s)
                }
                return function() {
                    var e = arguments;
                    if (t && 1 == e.length && La(e[0]))
                        return t.plant(e[0]).value();
                    for (var r = 0, i = n ? o[r].apply(this, e) : e[0]; ++r < n; )
                        i = o[r].call(this, i);
                    return i
                }
            }
        }
        function _n(e, t) {
            return function(n, r, i) {
                return "function" == typeof r && i === w && La(n) ? e(n, r) : t(n, on(r, i, 3))
            }
        }
        function kn(e) {
            return function(t, n, r) {
                return ("function" != typeof n || r !== w) && (n = on(n, r, 3)),
                e(t, n, Xi)
            }
        }
        function Sn(e) {
            return function(t, n, r) {
                return ("function" != typeof n || r !== w) && (n = on(n, r, 3)),
                e(t, n)
            }
        }
        function Cn(e) {
            return function(t, n, r) {
                var i = {};
                return n = Rn(n, r, 3),
                At(t, function(t, r, o) {
                    var s = n(t, r, o);
                    r = e ? s : r,
                    t = e ? t : s,
                    i[r] = t
                }),
                i
            }
        }
        function Tn(e) {
            return function(t, n, r) {
                return t = i(t),
                (e ? t : "") + An(t, n, r) + (e ? "" : t)
            }
        }
        function Ln(e) {
            var t = fi(function(n, r) {
                var i = m(r, t.placeholder);
                return On(n, e, null, r, i)
            });
            return t
        }
        function En(e, t) {
            return function(n, r, i, o) {
                var s = arguments.length < 3;
                return "function" == typeof r && o === w && La(n) ? e(n, r, i, s) : Vt(n, Rn(r, o, 4), i, s, t)
            }
        }
        function Nn(e, t, n, r, i, o, s, a, l, u) {
            function c() {
                for (var b = arguments.length, x = b, _ = Io(b); x--; )
                    _[x] = arguments[x];
                if (r && (_ = an(_, r, i)),
                o && (_ = ln(_, o, s)),
                p || v) {
                    var C = c.placeholder
                      , T = m(_, C);
                    if (b -= T.length,
                    u > b) {
                        var L = a ? nt(a) : null
                          , A = ys(u - b, 0)
                          , M = p ? T : null
                          , D = p ? null : T
                          , O = p ? _ : null
                          , I = p ? null : _;
                        t |= p ? E : N,
                        t &= ~(p ? N : E),
                        g || (t &= ~(k | S));
                        var P = [e, t, n, O, M, I, D, L, l, A]
                          , H = Nn.apply(w, P);
                        return Jn(e) && Ws(H, P),
                        H.placeholder = C,
                        H
                    }
                }
                var R = d ? n : this
                  , q = f ? R[e] : e;
                return a && (_ = rr(_, a)),
                h && l < _.length && (_.length = l),
                this && this !== Ze && this instanceof c && (q = y || mn(e)),
                q.apply(R, _)
            }
            var h = t & A
              , d = t & k
              , f = t & S
              , p = t & T
              , g = t & C
              , v = t & L
              , y = f ? null : mn(e);
            return c
        }
        function An(e, t, n) {
            var r = e.length;
            if (t = +t,
            r >= t || !gs(t))
                return "";
            var i = t - r;
            return n = null == n ? " " : n + "",
            uo(n, ns(i / n.length)).slice(0, i)
        }
        function Mn(e, t, n, r) {
            function i() {
                for (var t = -1, a = arguments.length, l = -1, u = r.length, c = Io(a + u); ++l < u; )
                    c[l] = r[l];
                for (; a--; )
                    c[l++] = arguments[++t];
                var h = this && this !== Ze && this instanceof i ? s : e;
                return h.apply(o ? n : this, c)
            }
            var o = t & k
              , s = mn(e);
            return i
        }
        function Dn(e) {
            return function(t, n, r, i) {
                var o = Rn(r);
                return null == r && o === bt ? nn(t, n, e) : rn(t, n, o(r, i, 1), e)
            }
        }
        function On(e, t, n, r, i, o, s, a) {
            var l = t & S;
            if (!l && "function" != typeof e)
                throw new Wo(F);
            var u = r ? r.length : 0;
            if (u || (t &= ~(E | N),
            r = i = null),
            u -= i ? i.length : 0,
            t & N) {
                var c = r
                  , h = i;
                r = i = null
            }
            var d = l ? null : js(e)
              , f = [e, t, n, r, i, c, h, o, s, a];
            if (d && (er(f, d),
            t = f[1],
            a = f[9]),
            f[9] = null == a ? l ? 0 : e.length : ys(a - u, 0) || 0,
            t == k)
                var p = fn(f[0], f[2]);
            else
                p = t != E && t != (k | E) || f[4].length ? Nn.apply(w, f) : Mn.apply(w, f);
            var m = d ? Fs : Ws;
            return m(p, f)
        }
        function In(e, t, n, r, i, o, s) {
            var a = -1
              , l = e.length
              , u = t.length;
            if (l != u && !(i && u > l))
                return !1;
            for (; ++a < l; ) {
                var c = e[a]
                  , h = t[a]
                  , d = r ? r(i ? h : c, i ? c : h, a) : w;
                if (d !== w) {
                    if (d)
                        continue;
                    return !1
                }
                if (i) {
                    if (!ht(t, function(e) {
                        return c === e || n(c, e, r, i, o, s)
                    }))
                        return !1
                } else if (c !== h && !n(c, h, r, i, o, s))
                    return !1
            }
            return !0
        }
        function Pn(e, t, n) {
            switch (n) {
            case W:
            case U:
                return +e == +t;
            case z:
                return e.name == t.name && e.message == t.message;
            case Q:
                return e != +e ? t != +t : e == +t;
            case K:
            case Y:
                return e == t + ""
            }
            return !1
        }
        function Hn(e, t, n, r, i, o, s) {
            var a = Fa(e)
              , l = a.length
              , u = Fa(t)
              , c = u.length;
            if (l != c && !i)
                return !1;
            for (var h = l; h--; ) {
                var d = a[h];
                if (!(i ? d in t : Go.call(t, d)))
                    return !1
            }
            for (var f = i; ++h < l; ) {
                d = a[h];
                var p = e[d]
                  , m = t[d]
                  , g = r ? r(i ? m : p, i ? p : m, d) : w;
                if (!(g === w ? n(p, m, r, i, o, s) : g))
                    return !1;
                f || (f = "constructor" == d)
            }
            if (!f) {
                var v = e.constructor
                  , y = t.constructor;
                if (v != y && "constructor"in e && "constructor"in t && !("function" == typeof v && v instanceof v && "function" == typeof y && y instanceof y))
                    return !1
            }
            return !0
        }
        function Rn(e, t, n) {
            var r = X.callback || bo;
            return r = r === bo ? bt : r,
            n ? r(e, t, n) : r
        }
        function qn(e) {
            for (var t = e.name, n = Ds[t], r = n ? n.length : 0; r--; ) {
                var i = n[r]
                  , o = i.func;
                if (null == o || o == e)
                    return i.name
            }
            return t
        }
        function Fn(e, t, r) {
            var i = X.indexOf || xr;
            return i = i === xr ? n : i,
            e ? i(e, t, r) : i
        }
        function $n(e) {
            for (var t = Qi(e), n = t.length; n--; )
                t[n][2] = Zn(t[n][1]);
            return t
        }
        function jn(e, t) {
            var n = null == e ? w : e[t];
            return Mi(n) ? n : w
        }
        function Bn(e, t, n) {
            for (var r = -1, i = n ? n.length : 0; ++r < i; ) {
                var o = n[r]
                  , s = o.size;
                switch (o.type) {
                case "drop":
                    e += s;
                    break;
                case "dropRight":
                    t -= s;
                    break;
                case "take":
                    t = bs(t, e + s);
                    break;
                case "takeRight":
                    e = ys(e, t - s)
                }
            }
            return {
                start: e,
                end: t
            }
        }
        function Wn(e) {
            var t = e.length
              , n = new e.constructor(t);
            return t && "string" == typeof e[0] && Go.call(e, "index") && (n.index = e.index,
            n.input = e.input),
            n
        }
        function Un(e) {
            var t = e.constructor;
            return "function" == typeof t && t instanceof t || (t = $o),
            new t
        }
        function zn(e, t, n) {
            var r = e.constructor;
            switch (t) {
            case ee:
                return sn(e);
            case W:
            case U:
                return new r(+e);
            case te:
            case ne:
            case re:
            case ie:
            case oe:
            case se:
            case ae:
            case le:
            case ue:
                var i = e.buffer;
                return new r(n ? sn(i) : i,e.byteOffset,e.length);
            case Q:
            case Y:
                return new r(e);
            case K:
                var o = new r(e.source,Ee.exec(e));
                o.lastIndex = e.lastIndex
            }
            return o
        }
        function Vn(e, t, n) {
            null == e || Kn(t, e) || (t = lr(t),
            e = 1 == t.length ? e : Ot(e, Xt(t, 0, -1)),
            t = _r(t));
            var r = null == e ? e : e[t];
            return null == r ? w : r.apply(e, n)
        }
        function Xn(e) {
            return null != e && Yn(Bs(e))
        }
        function Qn(e, t) {
            return e = "number" == typeof e || Me.test(e) ? +e : -1,
            t = null == t ? As : t,
            e > -1 && e % 1 == 0 && t > e
        }
        function Gn(e, t, n) {
            if (!Ei(n))
                return !1;
            var r = typeof t;
            if ("number" == r ? Xn(n) && Qn(t, n.length) : "string" == r && t in n) {
                var i = n[t];
                return e === e ? e === i : i !== i
            }
            return !1
        }
        function Kn(e, t) {
            var n = typeof e;
            if ("string" == n && we.test(e) || "number" == n)
                return !0;
            if (La(e))
                return !1;
            var r = !xe.test(e);
            return r || null != t && e in ar(t)
        }
        function Jn(e) {
            var t = qn(e);
            if (!(t in Be.prototype))
                return !1;
            var n = X[t];
            if (e === n)
                return !0;
            var r = js(n);
            return !!r && e === r[0]
        }
        function Yn(e) {
            return "number" == typeof e && e > -1 && e % 1 == 0 && As >= e
        }
        function Zn(e) {
            return e === e && !Ei(e)
        }
        function er(e, t) {
            var n = e[1]
              , r = t[1]
              , i = n | r
              , o = A > i
              , s = r == A && n == T || r == A && n == M && e[7].length <= t[8] || r == (A | M) && n == T;
            if (!o && !s)
                return e;
            r & k && (e[2] = t[2],
            i |= n & k ? 0 : C);
            var a = t[3];
            if (a) {
                var l = e[3];
                e[3] = l ? an(l, a, t[4]) : nt(a),
                e[4] = l ? m(e[3], $) : nt(t[4])
            }
            return a = t[5],
            a && (l = e[5],
            e[5] = l ? ln(l, a, t[6]) : nt(a),
            e[6] = l ? m(e[5], $) : nt(t[6])),
            a = t[7],
            a && (e[7] = nt(a)),
            r & A && (e[8] = null == e[8] ? t[8] : bs(e[8], t[8])),
            null == e[9] && (e[9] = t[9]),
            e[0] = t[0],
            e[1] = i,
            e
        }
        function tr(e, t) {
            e = ar(e);
            for (var n = -1, r = t.length, i = {}; ++n < r; ) {
                var o = t[n];
                o in e && (i[o] = e[o])
            }
            return i
        }
        function nr(e, t) {
            var n = {};
            return Nt(e, function(e, r, i) {
                t(e, r, i) && (n[r] = e)
            }),
            n
        }
        function rr(e, t) {
            for (var n = e.length, r = bs(t.length, n), i = nt(e); r--; ) {
                var o = t[r];
                e[r] = Qn(o, n) ? i[o] : w
            }
            return e
        }
        function ir(e) {
            var t;
            X.support;
            if (!f(e) || Jo.call(e) != G || !Go.call(e, "constructor") && (t = e.constructor,
            "function" == typeof t && !(t instanceof t)))
                return !1;
            var n;
            return Nt(e, function(e, t) {
                n = t
            }),
            n === w || Go.call(e, n)
        }
        function or(e) {
            for (var t = Xi(e), n = t.length, r = n && e.length, i = !!r && Yn(r) && (La(e) || wi(e)), o = -1, s = []; ++o < n; ) {
                var a = t[o];
                (i && Qn(a, r) || Go.call(e, a)) && s.push(a)
            }
            return s
        }
        function sr(e) {
            return null == e ? [] : Xn(e) ? Ei(e) ? e : $o(e) : Yi(e)
        }
        function ar(e) {
            return Ei(e) ? e : $o(e)
        }
        function lr(e) {
            if (La(e))
                return e;
            var t = [];
            return i(e).replace(_e, function(e, n, r, i) {
                t.push(r ? i.replace(Te, "$1") : n || e)
            }),
            t
        }
        function ur(e) {
            return e instanceof Be ? e.clone() : new Z(e.__wrapped__,e.__chain__,nt(e.__actions__))
        }
        function cr(e, t, n) {
            t = (n ? Gn(e, t, n) : null == t) ? 1 : ys(+t || 1, 1);
            for (var r = 0, i = e ? e.length : 0, o = -1, s = Io(ns(i / t)); i > r; )
                s[++o] = Xt(e, r, r += t);
            return s
        }
        function hr(e) {
            for (var t = -1, n = e ? e.length : 0, r = -1, i = []; ++t < n; ) {
                var o = e[t];
                o && (i[++r] = o)
            }
            return i
        }
        function dr(e, t, n) {
            var r = e ? e.length : 0;
            return r ? ((n ? Gn(e, t, n) : null == t) && (t = 1),
            Xt(e, 0 > t ? 0 : t)) : []
        }
        function fr(e, t, n) {
            var r = e ? e.length : 0;
            return r ? ((n ? Gn(e, t, n) : null == t) && (t = 1),
            t = r - (+t || 0),
            Xt(e, 0, 0 > t ? 0 : t)) : []
        }
        function pr(e, t, n) {
            return e && e.length ? en(e, Rn(t, n, 3), !0, !0) : []
        }
        function mr(e, t, n) {
            return e && e.length ? en(e, Rn(t, n, 3), !0) : []
        }
        function gr(e, t, n, r) {
            var i = e ? e.length : 0;
            return i ? (n && "number" != typeof n && Gn(e, t, n) && (n = 0,
            r = i),
            Ct(e, t, n, r)) : []
        }
        function vr(e) {
            return e ? e[0] : w
        }
        function yr(e, t, n) {
            var r = e ? e.length : 0;
            return n && Gn(e, t, n) && (t = !1),
            r ? Et(e, t) : []
        }
        function br(e) {
            var t = e ? e.length : 0;
            return t ? Et(e, !0) : []
        }
        function xr(e, t, r) {
            var i = e ? e.length : 0;
            if (!i)
                return -1;
            if ("number" == typeof r)
                r = 0 > r ? ys(i + r, 0) : r;
            else if (r) {
                var o = nn(e, t)
                  , s = e[o];
                return (t === t ? t === s : s !== s) ? o : -1
            }
            return n(e, t, r || 0)
        }
        function wr(e) {
            return fr(e, 1)
        }
        function _r(e) {
            var t = e ? e.length : 0;
            return t ? e[t - 1] : w
        }
        function kr(e, t, n) {
            var r = e ? e.length : 0;
            if (!r)
                return -1;
            var i = r;
            if ("number" == typeof n)
                i = (0 > n ? ys(r + n, 0) : bs(n || 0, r - 1)) + 1;
            else if (n) {
                i = nn(e, t, !0) - 1;
                var o = e[i];
                return (t === t ? t === o : o !== o) ? i : -1
            }
            if (t !== t)
                return d(e, i, !0);
            for (; i--; )
                if (e[i] === t)
                    return i;
            return -1
        }
        function Sr() {
            var e = arguments
              , t = e[0];
            if (!t || !t.length)
                return t;
            for (var n = 0, r = Fn(), i = e.length; ++n < i; )
                for (var o = 0, s = e[n]; (o = r(t, s, o)) > -1; )
                    cs.call(t, o, 1);
            return t
        }
        function Cr(e, t, n) {
            var r = [];
            if (!e || !e.length)
                return r;
            var i = -1
              , o = []
              , s = e.length;
            for (t = Rn(t, n, 3); ++i < s; ) {
                var a = e[i];
                t(a, i, e) && (r.push(a),
                o.push(i))
            }
            return Ut(e, o),
            r
        }
        function Tr(e) {
            return dr(e, 1)
        }
        function Lr(e, t, n) {
            var r = e ? e.length : 0;
            return r ? (n && "number" != typeof n && Gn(e, t, n) && (t = 0,
            n = r),
            Xt(e, t, n)) : []
        }
        function Er(e, t, n) {
            var r = e ? e.length : 0;
            return r ? ((n ? Gn(e, t, n) : null == t) && (t = 1),
            Xt(e, 0, 0 > t ? 0 : t)) : []
        }
        function Nr(e, t, n) {
            var r = e ? e.length : 0;
            return r ? ((n ? Gn(e, t, n) : null == t) && (t = 1),
            t = r - (+t || 0),
            Xt(e, 0 > t ? 0 : t)) : []
        }
        function Ar(e, t, n) {
            return e && e.length ? en(e, Rn(t, n, 3), !1, !0) : []
        }
        function Mr(e, t, n) {
            return e && e.length ? en(e, Rn(t, n, 3)) : []
        }
        function Dr(e, t, r, i) {
            var o = e ? e.length : 0;
            if (!o)
                return [];
            null != t && "boolean" != typeof t && (i = r,
            r = Gn(e, t, i) ? null : t,
            t = !1);
            var s = Rn();
            return (null != r || s !== bt) && (r = s(r, i, 3)),
            t && Fn() == n ? g(e, r) : Yt(e, r)
        }
        function Or(e) {
            if (!e || !e.length)
                return [];
            var t = -1
              , n = 0;
            e = at(e, function(e) {
                return Xn(e) ? (n = ys(e.length, n),
                !0) : void 0
            });
            for (var r = Io(n); ++t < n; )
                r[t] = lt(e, Bt(t));
            return r
        }
        function Ir(e, t, n) {
            var r = e ? e.length : 0;
            if (!r)
                return [];
            var i = Or(e);
            return null == t ? i : (t = on(t, n, 4),
            lt(i, function(e) {
                return ut(e, t, w, !0)
            }))
        }
        function Pr() {
            for (var e = -1, t = arguments.length; ++e < t; ) {
                var n = arguments[e];
                if (Xn(n))
                    var r = r ? _t(r, n).concat(_t(n, r)) : n
            }
            return r ? Yt(r) : []
        }
        function Hr(e, t) {
            var n = -1
              , r = e ? e.length : 0
              , i = {};
            for (!r || t || La(e[0]) || (t = []); ++n < r; ) {
                var o = e[n];
                t ? i[o] = t[n] : o && (i[o[0]] = o[1])
            }
            return i
        }
        function Rr(e) {
            var t = X(e);
            return t.__chain__ = !0,
            t
        }
        function qr(e, t, n) {
            return t.call(n, e),
            e
        }
        function Fr(e, t, n) {
            return t.call(n, e)
        }
        function $r() {
            return Rr(this)
        }
        function jr() {
            return new Z(this.value(),this.__chain__)
        }
        function Br(e) {
            for (var t, n = this; n instanceof J; ) {
                var r = ur(n);
                t ? i.__wrapped__ = r : t = r;
                var i = r;
                n = n.__wrapped__
            }
            return i.__wrapped__ = e,
            t
        }
        function Wr() {
            var e = this.__wrapped__;
            return e instanceof Be ? (this.__actions__.length && (e = new Be(this)),
            new Z(e.reverse(),this.__chain__)) : this.thru(function(e) {
                return e.reverse()
            })
        }
        function Ur() {
            return this.value() + ""
        }
        function zr() {
            return tn(this.__wrapped__, this.__actions__)
        }
        function Vr(e, t, n) {
            var r = La(e) ? ot : kt;
            return n && Gn(e, t, n) && (t = null),
            ("function" != typeof t || n !== w) && (t = Rn(t, n, 3)),
            r(e, t)
        }
        function Xr(e, t, n) {
            var r = La(e) ? at : Tt;
            return t = Rn(t, n, 3),
            r(e, t)
        }
        function Qr(e, t) {
            return ra(e, qt(t))
        }
        function Gr(e, t, n, r) {
            var i = e ? Bs(e) : 0;
            return Yn(i) || (e = Yi(e),
            i = e.length),
            i ? (n = "number" != typeof n || r && Gn(t, n, r) ? 0 : 0 > n ? ys(i + n, 0) : n || 0,
            "string" == typeof e || !La(e) && Pi(e) ? i > n && e.indexOf(t, n) > -1 : Fn(e, t, n) > -1) : !1
        }
        function Kr(e, t, n) {
            var r = La(e) ? lt : Rt;
            return t = Rn(t, n, 3),
            r(e, t)
        }
        function Jr(e, t) {
            return Kr(e, Lo(t))
        }
        function Yr(e, t, n) {
            var r = La(e) ? at : Tt;
            return t = Rn(t, n, 3),
            r(e, function(e, n, r) {
                return !t(e, n, r)
            })
        }
        function Zr(e, t, n) {
            if (n ? Gn(e, t, n) : null == t) {
                e = sr(e);
                var r = e.length;
                return r > 0 ? e[zt(0, r - 1)] : w
            }
            var i = -1
              , o = $i(e)
              , r = o.length
              , s = r - 1;
            for (t = bs(0 > t ? 0 : +t || 0, r); ++i < t; ) {
                var a = zt(i, s)
                  , l = o[a];
                o[a] = o[i],
                o[i] = l
            }
            return o.length = t,
            o
        }
        function ei(e) {
            return Zr(e, Cs)
        }
        function ti(e) {
            var t = e ? Bs(e) : 0;
            return Yn(t) ? t : Fa(e).length
        }
        function ni(e, t, n) {
            var r = La(e) ? ht : Qt;
            return n && Gn(e, t, n) && (t = null),
            ("function" != typeof t || n !== w) && (t = Rn(t, n, 3)),
            r(e, t)
        }
        function ri(e, t, n) {
            if (null == e)
                return [];
            n && Gn(e, t, n) && (t = null);
            var r = -1;
            t = Rn(t, n, 3);
            var i = Rt(e, function(e, n, i) {
                return {
                    criteria: t(e, n, i),
                    index: ++r,
                    value: e
                }
            });
            return Gt(i, a)
        }
        function ii(e, t, n, r) {
            return null == e ? [] : (r && Gn(t, n, r) && (n = null),
            La(t) || (t = null == t ? [] : [t]),
            La(n) || (n = null == n ? [] : [n]),
            Kt(e, t, n))
        }
        function oi(e, t) {
            return Xr(e, qt(t))
        }
        function si(e, t) {
            if ("function" != typeof t) {
                if ("function" != typeof e)
                    throw new Wo(F);
                var n = e;
                e = t,
                t = n
            }
            return e = gs(e = +e) ? e : 0,
            function() {
                return --e < 1 ? t.apply(this, arguments) : void 0
            }
        }
        function ai(e, t, n) {
            return n && Gn(e, t, n) && (t = null),
            t = e && null == t ? e.length : ys(+t || 0, 0),
            On(e, A, null, null, null, null, t)
        }
        function li(e, t) {
            var n;
            if ("function" != typeof t) {
                if ("function" != typeof e)
                    throw new Wo(F);
                var r = e;
                e = t,
                t = r
            }
            return function() {
                return --e > 0 && (n = t.apply(this, arguments)),
                1 >= e && (t = null),
                n
            }
        }
        function ui(e, t, n) {
            function r() {
                d && rs(d),
                l && rs(l),
                l = d = f = w
            }
            function i() {
                var n = t - (pa() - c);
                if (0 >= n || n > t) {
                    l && rs(l);
                    var r = f;
                    l = d = f = w,
                    r && (p = pa(),
                    u = e.apply(h, a),
                    d || l || (a = h = null))
                } else
                    d = us(i, n)
            }
            function o() {
                d && rs(d),
                l = d = f = w,
                (g || m !== t) && (p = pa(),
                u = e.apply(h, a),
                d || l || (a = h = null))
            }
            function s() {
                if (a = arguments,
                c = pa(),
                h = this,
                f = g && (d || !v),
                m === !1)
                    var n = v && !d;
                else {
                    l || v || (p = c);
                    var r = m - (c - p)
                      , s = 0 >= r || r > m;
                    s ? (l && (l = rs(l)),
                    p = c,
                    u = e.apply(h, a)) : l || (l = us(o, r))
                }
                return s && d ? d = rs(d) : d || t === m || (d = us(i, t)),
                n && (s = !0,
                u = e.apply(h, a)),
                !s || d || l || (a = h = null),
                u
            }
            var a, l, u, c, h, d, f, p = 0, m = !1, g = !0;
            if ("function" != typeof e)
                throw new Wo(F);
            if (t = 0 > t ? 0 : +t || 0,
            n === !0) {
                var v = !0;
                g = !1
            } else
                Ei(n) && (v = n.leading,
                m = "maxWait"in n && ys(+n.maxWait || 0, t),
                g = "trailing"in n ? n.trailing : g);
            return s.cancel = r,
            s
        }
        function ci(e, t) {
            if ("function" != typeof e || t && "function" != typeof t)
                throw new Wo(F);
            var n = function() {
                var r = arguments
                  , i = t ? t.apply(this, r) : r[0]
                  , o = n.cache;
                if (o.has(i))
                    return o.get(i);
                var s = e.apply(this, r);
                return n.cache = o.set(i, s),
                s
            };
            return n.cache = new ci.Cache,
            n
        }
        function hi(e) {
            if ("function" != typeof e)
                throw new Wo(F);
            return function() {
                return !e.apply(this, arguments)
            }
        }
        function di(e) {
            return li(2, e)
        }
        function fi(e, t) {
            if ("function" != typeof e)
                throw new Wo(F);
            return t = ys(t === w ? e.length - 1 : +t || 0, 0),
            function() {
                for (var n = arguments, r = -1, i = ys(n.length - t, 0), o = Io(i); ++r < i; )
                    o[r] = n[t + r];
                switch (t) {
                case 0:
                    return e.call(this, o);
                case 1:
                    return e.call(this, n[0], o);
                case 2:
                    return e.call(this, n[0], n[1], o)
                }
                var s = Io(t + 1);
                for (r = -1; ++r < t; )
                    s[r] = n[r];
                return s[t] = o,
                e.apply(this, s)
            }
        }
        function pi(e) {
            if ("function" != typeof e)
                throw new Wo(F);
            return function(t) {
                return e.apply(this, t)
            }
        }
        function mi(e, t, n) {
            var r = !0
              , i = !0;
            if ("function" != typeof e)
                throw new Wo(F);
            return n === !1 ? r = !1 : Ei(n) && (r = "leading"in n ? !!n.leading : r,
            i = "trailing"in n ? !!n.trailing : i),
            je.leading = r,
            je.maxWait = +t,
            je.trailing = i,
            ui(e, t, je)
        }
        function gi(e, t) {
            return t = null == t ? wo : t,
            On(t, E, null, [e], [])
        }
        function vi(e, t, n, r) {
            return t && "boolean" != typeof t && Gn(e, t, n) ? t = !1 : "function" == typeof t && (r = n,
            n = t,
            t = !1),
            "function" == typeof n ? xt(e, t, on(n, r, 1)) : xt(e, t)
        }
        function yi(e, t, n) {
            return "function" == typeof t ? xt(e, !0, on(t, n, 1)) : xt(e, !0)
        }
        function bi(e, t) {
            return e > t
        }
        function xi(e, t) {
            return e >= t
        }
        function wi(e) {
            return f(e) && Xn(e) && Jo.call(e) == j
        }
        function _i(e) {
            return e === !0 || e === !1 || f(e) && Jo.call(e) == W
        }
        function ki(e) {
            return f(e) && Jo.call(e) == U
        }
        function Si(e) {
            return !!e && 1 === e.nodeType && f(e) && Jo.call(e).indexOf("Element") > -1
        }
        function Ci(e) {
            return null == e ? !0 : Xn(e) && (La(e) || Pi(e) || wi(e) || f(e) && Na(e.splice)) ? !e.length : !Fa(e).length
        }
        function Ti(e, t, n, r) {
            n = "function" == typeof n ? on(n, r, 3) : w;
            var i = n ? n(e, t) : w;
            return i === w ? It(e, t, n) : !!i
        }
        function Li(e) {
            return f(e) && "string" == typeof e.message && Jo.call(e) == z
        }
        function Ei(e) {
            var t = typeof e;
            return !!e && ("object" == t || "function" == t)
        }
        function Ni(e, t, n, r) {
            return n = "function" == typeof n ? on(n, r, 3) : w,
            Ht(e, $n(t), n)
        }
        function Ai(e) {
            return Oi(e) && e != +e
        }
        function Mi(e) {
            return null == e ? !1 : Jo.call(e) == V ? Zo.test(Qo.call(e)) : f(e) && Ae.test(e)
        }
        function Di(e) {
            return null === e
        }
        function Oi(e) {
            return "number" == typeof e || f(e) && Jo.call(e) == Q
        }
        function Ii(e) {
            return f(e) && Jo.call(e) == K
        }
        function Pi(e) {
            return "string" == typeof e || f(e) && Jo.call(e) == Y
        }
        function Hi(e) {
            return f(e) && Yn(e.length) && !!Fe[Jo.call(e)]
        }
        function Ri(e) {
            return e === w
        }
        function qi(e, t) {
            return t > e
        }
        function Fi(e, t) {
            return t >= e
        }
        function $i(e) {
            var t = e ? Bs(e) : 0;
            return Yn(t) ? t ? nt(e) : [] : Yi(e)
        }
        function ji(e) {
            return yt(e, Xi(e))
        }
        function Bi(e, t, n) {
            var r = Is(e);
            return n && Gn(e, t, n) && (t = null),
            t ? gt(r, t) : r
        }
        function Wi(e) {
            return Dt(e, Xi(e))
        }
        function Ui(e, t, n) {
            var r = null == e ? w : Ot(e, lr(t), t + "");
            return r === w ? n : r
        }
        function zi(e, t) {
            if (null == e)
                return !1;
            var n = Go.call(e, t);
            if (!n && !Kn(t)) {
                if (t = lr(t),
                e = 1 == t.length ? e : Ot(e, Xt(t, 0, -1)),
                null == e)
                    return !1;
                t = _r(t),
                n = Go.call(e, t)
            }
            return n || Yn(e.length) && Qn(t, e.length) && (La(e) || wi(e))
        }
        function Vi(e, t, n) {
            n && Gn(e, t, n) && (t = null);
            for (var r = -1, i = Fa(e), o = i.length, s = {}; ++r < o; ) {
                var a = i[r]
                  , l = e[a];
                t ? Go.call(s, l) ? s[l].push(a) : s[l] = [a] : s[l] = a
            }
            return s
        }
        function Xi(e) {
            if (null == e)
                return [];
            Ei(e) || (e = $o(e));
            var t = e.length;
            t = t && Yn(t) && (La(e) || wi(e)) && t || 0;
            for (var n = e.constructor, r = -1, i = "function" == typeof n && n.prototype === e, o = Io(t), s = t > 0; ++r < t; )
                o[r] = r + "";
            for (var a in e)
                s && Qn(a, t) || "constructor" == a && (i || !Go.call(e, a)) || o.push(a);
            return o
        }
        function Qi(e) {
            e = ar(e);
            for (var t = -1, n = Fa(e), r = n.length, i = Io(r); ++t < r; ) {
                var o = n[t];
                i[t] = [o, e[o]]
            }
            return i
        }
        function Gi(e, t, n) {
            var r = null == e ? w : e[t];
            return r === w && (null == e || Kn(t, e) || (t = lr(t),
            e = 1 == t.length ? e : Ot(e, Xt(t, 0, -1)),
            r = null == e ? w : e[_r(t)]),
            r = r === w ? n : r),
            Na(r) ? r.call(e) : r
        }
        function Ki(e, t, n) {
            if (null == e)
                return e;
            var r = t + "";
            t = null != e[r] || Kn(t, e) ? [r] : lr(t);
            for (var i = -1, o = t.length, s = o - 1, a = e; null != a && ++i < o; ) {
                var l = t[i];
                Ei(a) && (i == s ? a[l] = n : null == a[l] && (a[l] = Qn(t[i + 1]) ? [] : {})),
                a = a[l]
            }
            return e
        }
        function Ji(e, t, n, r) {
            var i = La(e) || Hi(e);
            if (t = Rn(t, r, 4),
            null == n)
                if (i || Ei(e)) {
                    var o = e.constructor;
                    n = i ? La(e) ? new o : [] : Is(Na(o) ? o.prototype : null)
                } else
                    n = {};
            return (i ? rt : At)(e, function(e, r, i) {
                return t(n, e, r, i)
            }),
            n
        }
        function Yi(e) {
            return Zt(e, Fa(e))
        }
        function Zi(e) {
            return Zt(e, Xi(e))
        }
        function eo(e, t, n) {
            return t = +t || 0,
            "undefined" == typeof n ? (n = t,
            t = 0) : n = +n || 0,
            e >= bs(t, n) && e < ys(t, n)
        }
        function to(e, t, n) {
            n && Gn(e, t, n) && (t = n = null);
            var r = null == e
              , i = null == t;
            if (null == n && (i && "boolean" == typeof e ? (n = e,
            e = 1) : "boolean" == typeof t && (n = t,
            i = !0)),
            r && i && (t = 1,
            i = !1),
            e = +e || 0,
            i ? (t = e,
            e = 0) : t = +t || 0,
            n || e % 1 || t % 1) {
                var o = ks();
                return bs(e + o * (t - e + ss("1e-" + ((o + "").length - 1))), t)
            }
            return zt(e, t)
        }
        function no(e) {
            return e = i(e),
            e && e.charAt(0).toUpperCase() + e.slice(1)
        }
        function ro(e) {
            return e = i(e),
            e && e.replace(De, u).replace(Ce, "")
        }
        function io(e, t, n) {
            e = i(e),
            t += "";
            var r = e.length;
            return n = n === w ? r : bs(0 > n ? 0 : +n || 0, r),
            n -= t.length,
            n >= 0 && e.indexOf(t, n) == n
        }
        function oo(e) {
            return e = i(e),
            e && ge.test(e) ? e.replace(pe, c) : e
        }
        function so(e) {
            return e = i(e),
            e && Se.test(e) ? e.replace(ke, "\\$&") : e
        }
        function ao(e, t, n) {
            e = i(e),
            t = +t;
            var r = e.length;
            if (r >= t || !gs(t))
                return e;
            var o = (t - r) / 2
              , s = is(o)
              , a = ns(o);
            return n = An("", a, n),
            n.slice(0, s) + e + n
        }
        function lo(e, t, n) {
            return n && Gn(e, t, n) && (t = 0),
            _s(e, t)
        }
        function uo(e, t) {
            var n = "";
            if (e = i(e),
            t = +t,
            1 > t || !e || !gs(t))
                return n;
            do
                t % 2 && (n += e),
                t = is(t / 2),
                e += e;
            while (t);
            return n
        }
        function co(e, t, n) {
            return e = i(e),
            n = null == n ? 0 : bs(0 > n ? 0 : +n || 0, e.length),
            e.lastIndexOf(t, n) == n
        }
        function ho(e, t, n) {
            var r = X.templateSettings;
            n && Gn(e, t, n) && (t = n = null),
            e = i(e),
            t = mt(gt({}, n || t), r, pt);
            var o, s, a = mt(gt({}, t.imports), r.imports, pt), l = Fa(a), u = Zt(a, l), c = 0, d = t.interpolate || Oe, f = "__p += '", p = jo((t.escape || Oe).source + "|" + d.source + "|" + (d === be ? Le : Oe).source + "|" + (t.evaluate || Oe).source + "|$", "g"), m = "//# sourceURL=" + ("sourceURL"in t ? t.sourceURL : "lodash.templateSources[" + ++qe + "]") + "\n";
            e.replace(p, function(t, n, r, i, a, l) {
                return r || (r = i),
                f += e.slice(c, l).replace(Ie, h),
                n && (o = !0,
                f += "' +\n__e(" + n + ") +\n'"),
                a && (s = !0,
                f += "';\n" + a + ";\n__p += '"),
                r && (f += "' +\n((__t = (" + r + ")) == null ? '' : __t) +\n'"),
                c = l + t.length,
                t
            }),
            f += "';\n";
            var g = t.variable;
            g || (f = "with (obj) {\n" + f + "\n}\n"),
            f = (s ? f.replace(ce, "") : f).replace(he, "$1").replace(de, "$1;"),
            f = "function(" + (g || "obj") + ") {\n" + (g ? "" : "obj || (obj = {});\n") + "var __t, __p = ''" + (o ? ", __e = _.escape" : "") + (s ? ", __j = Array.prototype.join;\nfunction print() { __p += __j.call(arguments, '') }\n" : ";\n") + f + "return __p\n}";
            var v = Ja(function() {
                return Ro(l, m + "return " + f).apply(w, u)
            });
            if (v.source = f,
            Li(v))
                throw v;
            return v
        }
        function fo(e, t, n) {
            var r = e;
            return (e = i(e)) ? (n ? Gn(r, t, n) : null == t) ? e.slice(v(e), y(e) + 1) : (t += "",
            e.slice(o(e, t), s(e, t) + 1)) : e
        }
        function po(e, t, n) {
            var r = e;
            return e = i(e),
            e ? (n ? Gn(r, t, n) : null == t) ? e.slice(v(e)) : e.slice(o(e, t + "")) : e
        }
        function mo(e, t, n) {
            var r = e;
            return e = i(e),
            e ? (n ? Gn(r, t, n) : null == t) ? e.slice(0, y(e) + 1) : e.slice(0, s(e, t + "") + 1) : e
        }
        function go(e, t, n) {
            n && Gn(e, t, n) && (t = null);
            var r = D
              , o = O;
            if (null != t)
                if (Ei(t)) {
                    var s = "separator"in t ? t.separator : s;
                    r = "length"in t ? +t.length || 0 : r,
                    o = "omission"in t ? i(t.omission) : o
                } else
                    r = +t || 0;
            if (e = i(e),
            r >= e.length)
                return e;
            var a = r - o.length;
            if (1 > a)
                return o;
            var l = e.slice(0, a);
            if (null == s)
                return l + o;
            if (Ii(s)) {
                if (e.slice(a).search(s)) {
                    var u, c, h = e.slice(0, a);
                    for (s.global || (s = jo(s.source, (Ee.exec(s) || "") + "g")),
                    s.lastIndex = 0; u = s.exec(h); )
                        c = u.index;
                    l = l.slice(0, null == c ? a : c)
                }
            } else if (e.indexOf(s, a) != a) {
                var d = l.lastIndexOf(s);
                d > -1 && (l = l.slice(0, d))
            }
            return l + o
        }
        function vo(e) {
            return e = i(e),
            e && me.test(e) ? e.replace(fe, b) : e
        }
        function yo(e, t, n) {
            return n && Gn(e, t, n) && (t = null),
            e = i(e),
            e.match(t || Pe) || []
        }
        function bo(e, t, n) {
            return n && Gn(e, t, n) && (t = null),
            f(e) ? _o(e) : bt(e, t)
        }
        function xo(e) {
            return function() {
                return e
            }
        }
        function wo(e) {
            return e
        }
        function _o(e) {
            return qt(xt(e, !0))
        }
        function ko(e, t) {
            return Ft(e, xt(t, !0))
        }
        function So(e, t, n) {
            if (null == n) {
                var r = Ei(t)
                  , i = r ? Fa(t) : null
                  , o = i && i.length ? Dt(t, i) : null;
                (o ? o.length : r) || (o = !1,
                n = t,
                t = e,
                e = this)
            }
            o || (o = Dt(t, Fa(t)));
            var s = !0
              , a = -1
              , l = Na(e)
              , u = o.length;
            n === !1 ? s = !1 : Ei(n) && "chain"in n && (s = n.chain);
            for (; ++a < u; ) {
                var c = o[a]
                  , h = t[c];
                e[c] = h,
                l && (e.prototype[c] = function(t) {
                    return function() {
                        var n = this.__chain__;
                        if (s || n) {
                            var r = e(this.__wrapped__)
                              , i = r.__actions__ = nt(this.__actions__);
                            return i.push({
                                func: t,
                                args: arguments,
                                thisArg: e
                            }),
                            r.__chain__ = n,
                            r
                        }
                        var o = [this.value()];
                        return as.apply(o, arguments),
                        t.apply(e, o)
                    }
                }(h))
            }
            return e
        }
        function Co() {
            return p._ = Yo,
            this
        }
        function To() {}
        function Lo(e) {
            return Kn(e) ? Bt(e) : Wt(e)
        }
        function Eo(e) {
            return function(t) {
                return Ot(e, lr(t), t + "")
            }
        }
        function No(e, t, n) {
            n && Gn(e, t, n) && (t = n = null),
            e = +e || 0,
            n = null == n ? 1 : +n || 0,
            null == t ? (t = e,
            e = 0) : t = +t || 0;
            for (var r = -1, i = ys(ns((t - e) / (n || 1)), 0), o = Io(i); ++r < i; )
                o[r] = e,
                e += n;
            return o
        }
        function Ao(e, t, n) {
            if (e = is(e),
            1 > e || !gs(e))
                return [];
            var r = -1
              , i = Io(bs(e, Ts));
            for (t = on(t, n, 1); ++r < e; )
                Ts > r ? i[r] = t(r) : t(r);
            return i
        }
        function Mo(e) {
            var t = ++Ko;
            return i(e) + t
        }
        function Do(e, t) {
            return (+e || 0) + (+t || 0)
        }
        function Oo(e, t, n) {
            n && Gn(e, t, n) && (t = null);
            var r = Rn()
              , i = null == t;
            return i && r === bt || (i = !1,
            t = r(t, n, 3)),
            i ? dt(La(e) ? e : sr(e)) : Jt(e, t)
        }
        p = p ? et.defaults(Ze.Object(), p, et.pick(Ze, Re)) : Ze;
        var Io = p.Array
          , Po = p.Date
          , Ho = p.Error
          , Ro = p.Function
          , qo = p.Math
          , Fo = p.Number
          , $o = p.Object
          , jo = p.RegExp
          , Bo = p.String
          , Wo = p.TypeError
          , Uo = Io.prototype
          , zo = $o.prototype
          , Vo = Bo.prototype
          , Xo = (Xo = p.window) ? Xo.document : null
          , Qo = Ro.prototype.toString
          , Go = zo.hasOwnProperty
          , Ko = 0
          , Jo = zo.toString
          , Yo = p._
          , Zo = jo("^" + so(Qo.call(Go)).replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$")
          , es = jn(p, "ArrayBuffer")
          , ts = jn(es && new es(0), "slice")
          , ns = qo.ceil
          , rs = p.clearTimeout
          , is = qo.floor
          , os = jn($o, "getPrototypeOf")
          , ss = p.parseFloat
          , as = Uo.push
          , ls = jn(p, "Set")
          , us = p.setTimeout
          , cs = Uo.splice
          , hs = jn(p, "Uint8Array")
          , ds = jn(p, "WeakMap")
          , fs = function() {
            try {
                var e = jn(p, "Float64Array")
                  , t = new e(new es(10),0,1) && e
            } catch (n) {}
            return t || null
        }()
          , ps = jn($o, "create")
          , ms = jn(Io, "isArray")
          , gs = p.isFinite
          , vs = jn($o, "keys")
          , ys = qo.max
          , bs = qo.min
          , xs = jn(Po, "now")
          , ws = jn(Fo, "isFinite")
          , _s = p.parseInt
          , ks = qo.random
          , Ss = Fo.NEGATIVE_INFINITY
          , Cs = Fo.POSITIVE_INFINITY
          , Ts = 4294967295
          , Ls = Ts - 1
          , Es = Ts >>> 1
          , Ns = fs ? fs.BYTES_PER_ELEMENT : 0
          , As = 9007199254740991
          , Ms = ds && new ds
          , Ds = {}
          , Os = X.support = {};
        !function(e) {
            var t = function() {
                this.x = e
            }
              , n = [];
            t.prototype = {
                valueOf: e,
                y: e
            };
            for (var r in new t)
                n.push(r);
            try {
                Os.dom = 11 === Xo.createDocumentFragment().nodeType
            } catch (i) {
                Os.dom = !1
            }
        }(1, 0),
        X.templateSettings = {
            escape: ve,
            evaluate: ye,
            interpolate: be,
            variable: "",
            imports: {
                _: X
            }
        };
        var Is = function() {
            function e() {}
            return function(t) {
                if (Ei(t)) {
                    e.prototype = t;
                    var n = new e;
                    e.prototype = null
                }
                return n || {}
            }
        }()
          , Ps = hn(At)
          , Hs = hn(Mt, !0)
          , Rs = dn()
          , qs = dn(!0)
          , Fs = Ms ? function(e, t) {
            return Ms.set(e, t),
            e
        }
        : wo;
        ts || (sn = es && hs ? function(e) {
            var t = e.byteLength
              , n = fs ? is(t / Ns) : 0
              , r = n * Ns
              , i = new es(t);
            if (n) {
                var o = new fs(i,0,n);
                o.set(new fs(e,0,n))
            }
            return t != r && (o = new hs(i,r),
            o.set(new hs(e,r))),
            i
        }
        : xo(null));
        var $s = ps && ls ? function(e) {
            return new Je(e)
        }
        : xo(null)
          , js = Ms ? function(e) {
            return Ms.get(e)
        }
        : To
          , Bs = Bt("length")
          , Ws = function() {
            var e = 0
              , t = 0;
            return function(n, r) {
                var i = pa()
                  , o = P - (i - t);
                if (t = i,
                o > 0) {
                    if (++e >= I)
                        return n
                } else
                    e = 0;
                return Fs(n, r)
            }
        }()
          , Us = fi(function(e, t) {
            return Xn(e) ? _t(e, Et(t, !1, !0)) : []
        })
          , zs = bn()
          , Vs = bn(!0)
          , Xs = fi(function(e) {
            for (var t = e.length, r = t, i = Io(h), o = Fn(), s = o == n, a = []; r--; ) {
                var l = e[r] = Xn(l = e[r]) ? l : [];
                i[r] = s && l.length >= 120 ? $s(r && l) : null
            }
            var u = e[0]
              , c = -1
              , h = u ? u.length : 0
              , d = i[0];
            e: for (; ++c < h; )
                if (l = u[c],
                (d ? Ye(d, l) : o(a, l, 0)) < 0) {
                    for (var r = t; --r; ) {
                        var f = i[r];
                        if ((f ? Ye(f, l) : o(e[r], l, 0)) < 0)
                            continue e
                    }
                    d && d.push(l),
                    a.push(l)
                }
            return a
        })
          , Qs = fi(function(t, n) {
            n = Et(n);
            var r = vt(t, n);
            return Ut(t, n.sort(e)),
            r
        })
          , Gs = Dn()
          , Ks = Dn(!0)
          , Js = fi(function(e) {
            return Yt(Et(e, !1, !0))
        })
          , Ys = fi(function(e, t) {
            return Xn(e) ? _t(e, t) : []
        })
          , Zs = fi(Or)
          , ea = fi(function(e) {
            var t = e.length
              , n = t > 2 ? e[t - 2] : w
              , r = t > 1 ? e[t - 1] : w;
            return t > 2 && "function" == typeof n ? t -= 2 : (n = t > 1 && "function" == typeof r ? (--t,
            r) : w,
            r = w),
            e.length = t,
            Ir(e, n, r)
        })
          , ta = fi(function(e, t) {
            return vt(e, Et(t))
        })
          , na = un(function(e, t, n) {
            Go.call(e, n) ? ++e[n] : e[n] = 1
        })
          , ra = yn(Ps)
          , ia = yn(Hs, !0)
          , oa = _n(rt, Ps)
          , sa = _n(it, Hs)
          , aa = un(function(e, t, n) {
            Go.call(e, n) ? e[n].push(t) : e[n] = [t]
        })
          , la = un(function(e, t, n) {
            e[n] = t
        })
          , ua = fi(function(e, t, n) {
            var r = -1
              , i = "function" == typeof t
              , o = Kn(t)
              , s = Xn(e) ? Io(e.length) : [];
            return Ps(e, function(e) {
                var a = i ? t : o && null != e ? e[t] : null;
                s[++r] = a ? a.apply(e, n) : Vn(e, t, n)
            }),
            s
        })
          , ca = un(function(e, t, n) {
            e[n ? 0 : 1].push(t)
        }, function() {
            return [[], []]
        })
          , ha = En(ut, Ps)
          , da = En(ct, Hs)
          , fa = fi(function(e, t) {
            if (null == e)
                return [];
            var n = t[2];
            return n && Gn(t[0], t[1], n) && (t.length = 1),
            Kt(e, Et(t), [])
        })
          , pa = xs || function() {
            return (new Po).getTime()
        }
          , ma = fi(function(e, t, n) {
            var r = k;
            if (n.length) {
                var i = m(n, ma.placeholder);
                r |= E
            }
            return On(e, r, t, n, i)
        })
          , ga = fi(function(e, t) {
            t = t.length ? Et(t) : Wi(e);
            for (var n = -1, r = t.length; ++n < r; ) {
                var i = t[n];
                e[i] = On(e[i], k, e)
            }
            return e
        })
          , va = fi(function(e, t, n) {
            var r = k | S;
            if (n.length) {
                var i = m(n, va.placeholder);
                r |= E
            }
            return On(t, r, e, n, i)
        })
          , ya = gn(T)
          , ba = gn(L)
          , xa = fi(function(e, t) {
            return wt(e, 1, t)
        })
          , wa = fi(function(e, t, n) {
            return wt(e, t, n)
        })
          , _a = wn()
          , ka = wn(!0)
          , Sa = Ln(E)
          , Ca = Ln(N)
          , Ta = fi(function(e, t) {
            return On(e, M, null, null, null, Et(t))
        })
          , La = ms || function(e) {
            return f(e) && Yn(e.length) && Jo.call(e) == B
        }
        ;
        Os.dom || (Si = function(e) {
            return !!e && 1 === e.nodeType && f(e) && !Aa(e)
        }
        );
        var Ea = ws || function(e) {
            return "number" == typeof e && gs(e)
        }
          , Na = r(/x/) || hs && !r(hs) ? function(e) {
            return Jo.call(e) == V
        }
        : r
          , Aa = os ? function(e) {
            if (!e || Jo.call(e) != G)
                return !1;
            var t = jn(e, "valueOf")
              , n = t && (n = os(t)) && os(n);
            return n ? e == n || os(e) == n : ir(e)
        }
        : ir
          , Ma = cn(function(e, t, n) {
            return n ? mt(e, t, n) : gt(e, t)
        })
          , Da = fi(function(e) {
            var t = e[0];
            return null == t ? t : (e.push(ft),
            Ma.apply(w, e))
        })
          , Oa = xn(At)
          , Ia = xn(Mt)
          , Pa = kn(Rs)
          , Ha = kn(qs)
          , Ra = Sn(At)
          , qa = Sn(Mt)
          , Fa = vs ? function(e) {
            var t = null == e ? null : e.constructor;
            return "function" == typeof t && t.prototype === e || "function" != typeof e && Xn(e) ? or(e) : Ei(e) ? vs(e) : []
        }
        : or
          , $a = Cn(!0)
          , ja = Cn()
          , Ba = cn($t)
          , Wa = fi(function(e, t) {
            if (null == e)
                return {};
            if ("function" != typeof t[0]) {
                var t = lt(Et(t), Bo);
                return tr(e, _t(Xi(e), t))
            }
            var n = on(t[0], t[1], 3);
            return nr(e, function(e, t, r) {
                return !n(e, t, r)
            })
        })
          , Ua = fi(function(e, t) {
            return null == e ? {} : "function" == typeof t[0] ? nr(e, on(t[0], t[1], 3)) : tr(e, Et(t))
        })
          , za = pn(function(e, t, n) {
            return t = t.toLowerCase(),
            e + (n ? t.charAt(0).toUpperCase() + t.slice(1) : t)
        })
          , Va = pn(function(e, t, n) {
            return e + (n ? "-" : "") + t.toLowerCase()
        })
          , Xa = Tn()
          , Qa = Tn(!0);
        8 != _s(He + "08") && (lo = function(e, t, n) {
            return (n ? Gn(e, t, n) : null == t) ? t = 0 : t && (t = +t),
            e = fo(e),
            _s(e, t || (Ne.test(e) ? 16 : 10))
        }
        );
        var Ga = pn(function(e, t, n) {
            return e + (n ? "_" : "") + t.toLowerCase()
        })
          , Ka = pn(function(e, t, n) {
            return e + (n ? " " : "") + (t.charAt(0).toUpperCase() + t.slice(1))
        })
          , Ja = fi(function(e, t) {
            try {
                return e.apply(w, t)
            } catch (n) {
                return Li(n) ? n : new Ho(n)
            }
        })
          , Ya = fi(function(e, t) {
            return function(n) {
                return Vn(n, e, t)
            }
        })
          , Za = fi(function(e, t) {
            return function(n) {
                return Vn(e, n, t)
            }
        })
          , el = vn(bi, Ss)
          , tl = vn(qi, Cs);
        return X.prototype = J.prototype,
        Z.prototype = Is(J.prototype),
        Z.prototype.constructor = Z,
        Be.prototype = Is(J.prototype),
        Be.prototype.constructor = Be,
        Ve.prototype["delete"] = Xe,
        Ve.prototype.get = Qe,
        Ve.prototype.has = Ge,
        Ve.prototype.set = Ke,
        Je.prototype.push = tt,
        ci.Cache = Ve,
        X.after = si,
        X.ary = ai,
        X.assign = Ma,
        X.at = ta,
        X.before = li,
        X.bind = ma,
        X.bindAll = ga,
        X.bindKey = va,
        X.callback = bo,
        X.chain = Rr,
        X.chunk = cr,
        X.compact = hr,
        X.constant = xo,
        X.countBy = na,
        X.create = Bi,
        X.curry = ya,
        X.curryRight = ba,
        X.debounce = ui,
        X.defaults = Da,
        X.defer = xa,
        X.delay = wa,
        X.difference = Us,
        X.drop = dr,
        X.dropRight = fr,
        X.dropRightWhile = pr,
        X.dropWhile = mr,
        X.fill = gr,
        X.filter = Xr,
        X.flatten = yr,
        X.flattenDeep = br,
        X.flow = _a,
        X.flowRight = ka,
        X.forEach = oa,
        X.forEachRight = sa,
        X.forIn = Pa,
        X.forInRight = Ha,
        X.forOwn = Ra,
        X.forOwnRight = qa,
        X.functions = Wi,
        X.groupBy = aa,
        X.indexBy = la,
        X.initial = wr,
        X.intersection = Xs,
        X.invert = Vi,
        X.invoke = ua,
        X.keys = Fa,
        X.keysIn = Xi,
        X.map = Kr,
        X.mapKeys = $a,
        X.mapValues = ja,
        X.matches = _o,
        X.matchesProperty = ko,
        X.memoize = ci,
        X.merge = Ba,
        X.method = Ya,
        X.methodOf = Za,
        X.mixin = So,
        X.negate = hi,
        X.omit = Wa,
        X.once = di,
        X.pairs = Qi,
        X.partial = Sa,
        X.partialRight = Ca,
        X.partition = ca,
        X.pick = Ua,
        X.pluck = Jr,
        X.property = Lo,
        X.propertyOf = Eo,
        X.pull = Sr,
        X.pullAt = Qs,
        X.range = No,
        X.rearg = Ta,
        X.reject = Yr,
        X.remove = Cr,
        X.rest = Tr,
        X.restParam = fi,
        X.set = Ki,
        X.shuffle = ei,
        X.slice = Lr,
        X.sortBy = ri,
        X.sortByAll = fa,
        X.sortByOrder = ii,
        X.spread = pi,
        X.take = Er,
        X.takeRight = Nr,
        X.takeRightWhile = Ar,
        X.takeWhile = Mr,
        X.tap = qr,
        X.throttle = mi,
        X.thru = Fr,
        X.times = Ao,
        X.toArray = $i,
        X.toPlainObject = ji,
        X.transform = Ji,
        X.union = Js,
        X.uniq = Dr,
        X.unzip = Or,
        X.unzipWith = Ir,
        X.values = Yi,
        X.valuesIn = Zi,
        X.where = oi,
        X.without = Ys,
        X.wrap = gi,
        X.xor = Pr,
        X.zip = Zs,
        X.zipObject = Hr,
        X.zipWith = ea,
        X.backflow = ka,
        X.collect = Kr,
        X.compose = ka,
        X.each = oa,
        X.eachRight = sa,
        X.extend = Ma,
        X.iteratee = bo,
        X.methods = Wi,
        X.object = Hr,
        X.select = Xr,
        X.tail = Tr,
        X.unique = Dr,
        So(X, X),
        X.add = Do,
        X.attempt = Ja,
        X.camelCase = za,
        X.capitalize = no,
        X.clone = vi,
        X.cloneDeep = yi,
        X.deburr = ro,
        X.endsWith = io,
        X.escape = oo,
        X.escapeRegExp = so,
        X.every = Vr,
        X.find = ra,
        X.findIndex = zs,
        X.findKey = Oa,
        X.findLast = ia,
        X.findLastIndex = Vs,
        X.findLastKey = Ia,
        X.findWhere = Qr,
        X.first = vr,
        X.get = Ui,
        X.gt = bi,
        X.gte = xi,
        X.has = zi,
        X.identity = wo,
        X.includes = Gr,
        X.indexOf = xr,
        X.inRange = eo,
        X.isArguments = wi,
        X.isArray = La,
        X.isBoolean = _i,
        X.isDate = ki,
        X.isElement = Si,
        X.isEmpty = Ci,
        X.isEqual = Ti,
        X.isError = Li,
        X.isFinite = Ea,
        X.isFunction = Na,
        X.isMatch = Ni,
        X.isNaN = Ai,
        X.isNative = Mi,
        X.isNull = Di,
        X.isNumber = Oi,
        X.isObject = Ei,
        X.isPlainObject = Aa,
        X.isRegExp = Ii,
        X.isString = Pi,
        X.isTypedArray = Hi,
        X.isUndefined = Ri,
        X.kebabCase = Va,
        X.last = _r,
        X.lastIndexOf = kr,
        X.lt = qi,
        X.lte = Fi,
        X.max = el,
        X.min = tl,
        X.noConflict = Co,
        X.noop = To,
        X.now = pa,
        X.pad = ao,
        X.padLeft = Xa,
        X.padRight = Qa,
        X.parseInt = lo,
        X.random = to,
        X.reduce = ha,
        X.reduceRight = da,
        X.repeat = uo,
        X.result = Gi,
        X.runInContext = x,
        X.size = ti,
        X.snakeCase = Ga,
        X.some = ni,
        X.sortedIndex = Gs,
        X.sortedLastIndex = Ks,
        X.startCase = Ka,
        X.startsWith = co,
        X.sum = Oo,
        X.template = ho,
        X.trim = fo,
        X.trimLeft = po,
        X.trimRight = mo,
        X.trunc = go,
        X.unescape = vo,
        X.uniqueId = Mo,
        X.words = yo,
        X.all = Vr,
        X.any = ni,
        X.contains = Gr,
        X.eq = Ti,
        X.detect = ra,
        X.foldl = ha,
        X.foldr = da,
        X.head = vr,
        X.include = Gr,
        X.inject = ha,
        So(X, function() {
            var e = {};
            return At(X, function(t, n) {
                X.prototype[n] || (e[n] = t)
            }),
            e
        }(), !1),
        X.sample = Zr,
        X.prototype.sample = function(e) {
            return this.__chain__ || null != e ? this.thru(function(t) {
                return Zr(t, e)
            }) : Zr(this.value())
        }
        ,
        X.VERSION = _,
        rt(["bind", "bindKey", "curry", "curryRight", "partial", "partialRight"], function(e) {
            X[e].placeholder = X
        }),
        rt(["dropWhile", "filter", "map", "takeWhile"], function(e, t) {
            var n = t != q
              , r = t == H;
            Be.prototype[e] = function(e, i) {
                var o = this.__filtered__
                  , s = o && r ? new Be(this) : this.clone()
                  , a = s.__iteratees__ || (s.__iteratees__ = []);
                return a.push({
                    done: !1,
                    count: 0,
                    index: 0,
                    iteratee: Rn(e, i, 1),
                    limit: -1,
                    type: t
                }),
                s.__filtered__ = o || n,
                s
            }
        }),
        rt(["drop", "take"], function(e, t) {
            var n = e + "While";
            Be.prototype[e] = function(n) {
                var r = this.__filtered__
                  , i = r && !t ? this.dropWhile() : this.clone();
                if (n = null == n ? 1 : ys(is(n) || 0, 0),
                r)
                    t ? i.__takeCount__ = bs(i.__takeCount__, n) : _r(i.__iteratees__).limit = n;
                else {
                    var o = i.__views__ || (i.__views__ = []);
                    o.push({
                        size: n,
                        type: e + (i.__dir__ < 0 ? "Right" : "")
                    })
                }
                return i
            }
            ,
            Be.prototype[e + "Right"] = function(t) {
                return this.reverse()[e](t).reverse()
            }
            ,
            Be.prototype[e + "RightWhile"] = function(e, t) {
                return this.reverse()[n](e, t).reverse()
            }
        }),
        rt(["first", "last"], function(e, t) {
            var n = "take" + (t ? "Right" : "");
            Be.prototype[e] = function() {
                return this[n](1).value()[0]
            }
        }),
        rt(["initial", "rest"], function(e, t) {
            var n = "drop" + (t ? "" : "Right");
            Be.prototype[e] = function() {
                return this[n](1)
            }
        }),
        rt(["pluck", "where"], function(e, t) {
            var n = t ? "filter" : "map"
              , r = t ? qt : Lo;
            Be.prototype[e] = function(e) {
                return this[n](r(e))
            }
        }),
        Be.prototype.compact = function() {
            return this.filter(wo)
        }
        ,
        Be.prototype.reject = function(e, t) {
            return e = Rn(e, t, 1),
            this.filter(function(t) {
                return !e(t)
            })
        }
        ,
        Be.prototype.slice = function(e, t) {
            e = null == e ? 0 : +e || 0;
            var n = this;
            return 0 > e ? n = this.takeRight(-e) : e && (n = this.drop(e)),
            t !== w && (t = +t || 0,
            n = 0 > t ? n.dropRight(-t) : n.take(t - e)),
            n
        }
        ,
        Be.prototype.toArray = function() {
            return this.drop(0)
        }
        ,
        At(Be.prototype, function(e, t) {
            var n = X[t];
            if (n) {
                var r = /^(?:filter|map|reject)|While$/.test(t)
                  , i = /^(?:first|last)$/.test(t);
                X.prototype[t] = function() {
                    var t = arguments
                      , o = this.__chain__
                      , s = this.__wrapped__
                      , a = !!this.__actions__.length
                      , l = s instanceof Be
                      , u = t[0]
                      , c = l || La(s);
                    c && r && "function" == typeof u && 1 != u.length && (l = c = !1);
                    var h = l && !a;
                    if (i && !o)
                        return h ? e.call(s) : n.call(X, this.value());
                    var d = function(e) {
                        var r = [e];
                        return as.apply(r, t),
                        n.apply(X, r)
                    };
                    if (c) {
                        var f = h ? s : new Be(this)
                          , p = e.apply(f, t);
                        if (!i && (a || p.__actions__)) {
                            var m = p.__actions__ || (p.__actions__ = []);
                            m.push({
                                func: Fr,
                                args: [d],
                                thisArg: X
                            })
                        }
                        return new Z(p,o)
                    }
                    return this.thru(d)
                }
            }
        }),
        rt(["concat", "join", "pop", "push", "replace", "shift", "sort", "splice", "split", "unshift"], function(e) {
            var t = (/^(?:replace|split)$/.test(e) ? Vo : Uo)[e]
              , n = /^(?:push|sort|unshift)$/.test(e) ? "tap" : "thru"
              , r = /^(?:join|pop|replace|shift)$/.test(e);
            X.prototype[e] = function() {
                var e = arguments;
                return r && !this.__chain__ ? t.apply(this.value(), e) : this[n](function(n) {
                    return t.apply(n, e)
                })
            }
        }),
        At(Be.prototype, function(e, t) {
            var n = X[t];
            if (n) {
                var r = n.name
                  , i = Ds[r] || (Ds[r] = []);
                i.push({
                    name: t,
                    func: n
                })
            }
        }),
        Ds[Nn(null, S).name] = [{
            name: "wrapper",
            func: null
        }],
        Be.prototype.clone = We,
        Be.prototype.reverse = Ue,
        Be.prototype.value = ze,
        X.prototype.chain = $r,
        X.prototype.commit = jr,
        X.prototype.plant = Br,
        X.prototype.reverse = Wr,
        X.prototype.toString = Ur,
        X.prototype.run = X.prototype.toJSON = X.prototype.valueOf = X.prototype.value = zr,
        X.prototype.collect = X.prototype.map,
        X.prototype.head = X.prototype.first,
        X.prototype.select = X.prototype.filter,
        X.prototype.tail = X.prototype.rest,
        X
    }
    var w, _ = "3.9.3", k = 1, S = 2, C = 4, T = 8, L = 16, E = 32, N = 64, A = 128, M = 256, D = 30, O = "...", I = 150, P = 16, H = 0, R = 1, q = 2, F = "Expected a function", $ = "__lodash_placeholder__", j = "[object Arguments]", B = "[object Array]", W = "[object Boolean]", U = "[object Date]", z = "[object Error]", V = "[object Function]", X = "[object Map]", Q = "[object Number]", G = "[object Object]", K = "[object RegExp]", J = "[object Set]", Y = "[object String]", Z = "[object WeakMap]", ee = "[object ArrayBuffer]", te = "[object Float32Array]", ne = "[object Float64Array]", re = "[object Int8Array]", ie = "[object Int16Array]", oe = "[object Int32Array]", se = "[object Uint8Array]", ae = "[object Uint8ClampedArray]", le = "[object Uint16Array]", ue = "[object Uint32Array]", ce = /\b__p \+= '';/g, he = /\b(__p \+=) '' \+/g, de = /(__e\(.*?\)|\b__t\)) \+\n'';/g, fe = /&(?:amp|lt|gt|quot|#39|#96);/g, pe = /[&<>"'`]/g, me = RegExp(fe.source), ge = RegExp(pe.source), ve = /<%-([\s\S]+?)%>/g, ye = /<%([\s\S]+?)%>/g, be = /<%=([\s\S]+?)%>/g, xe = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/, we = /^\w*$/, _e = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g, ke = /[.*+?^${}()|[\]\/\\]/g, Se = RegExp(ke.source), Ce = /[\u0300-\u036f\ufe20-\ufe23]/g, Te = /\\(\\)?/g, Le = /\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g, Ee = /\w*$/, Ne = /^0[xX]/, Ae = /^\[object .+?Constructor\]$/, Me = /^\d+$/, De = /[\xc0-\xd6\xd8-\xde\xdf-\xf6\xf8-\xff]/g, Oe = /($^)/, Ie = /['\n\r\u2028\u2029\\]/g, Pe = function() {
        var e = "[A-Z\\xc0-\\xd6\\xd8-\\xde]"
          , t = "[a-z\\xdf-\\xf6\\xf8-\\xff]+";
        return RegExp(e + "+(?=" + e + t + ")|" + e + "?" + t + "|" + e + "+|[0-9]+", "g")
    }(), He = " 	\x0B\f \ufeff\n\r\u2028\u2029 ᠎             　", Re = ["Array", "ArrayBuffer", "Date", "Error", "Float32Array", "Float64Array", "Function", "Int8Array", "Int16Array", "Int32Array", "Math", "Number", "Object", "RegExp", "Set", "String", "_", "clearTimeout", "document", "isFinite", "parseFloat", "parseInt", "setTimeout", "TypeError", "Uint8Array", "Uint8ClampedArray", "Uint16Array", "Uint32Array", "WeakMap", "window"], qe = -1, Fe = {};
    Fe[te] = Fe[ne] = Fe[re] = Fe[ie] = Fe[oe] = Fe[se] = Fe[ae] = Fe[le] = Fe[ue] = !0,
    Fe[j] = Fe[B] = Fe[ee] = Fe[W] = Fe[U] = Fe[z] = Fe[V] = Fe[X] = Fe[Q] = Fe[G] = Fe[K] = Fe[J] = Fe[Y] = Fe[Z] = !1;
    var $e = {};
    $e[j] = $e[B] = $e[ee] = $e[W] = $e[U] = $e[te] = $e[ne] = $e[re] = $e[ie] = $e[oe] = $e[Q] = $e[G] = $e[K] = $e[Y] = $e[se] = $e[ae] = $e[le] = $e[ue] = !0,
    $e[z] = $e[V] = $e[X] = $e[J] = $e[Z] = !1;
    var je = {
        leading: !1,
        maxWait: 0,
        trailing: !1
    }
      , Be = {
        "À": "A",
        "Á": "A",
        "Â": "A",
        "Ã": "A",
        "Ä": "A",
        "Å": "A",
        "à": "a",
        "á": "a",
        "â": "a",
        "ã": "a",
        "ä": "a",
        "å": "a",
        "Ç": "C",
        "ç": "c",
        "Ð": "D",
        "ð": "d",
        "È": "E",
        "É": "E",
        "Ê": "E",
        "Ë": "E",
        "è": "e",
        "é": "e",
        "ê": "e",
        "ë": "e",
        "Ì": "I",
        "Í": "I",
        "Î": "I",
        "Ï": "I",
        "ì": "i",
        "í": "i",
        "î": "i",
        "ï": "i",
        "Ñ": "N",
        "ñ": "n",
        "Ò": "O",
        "Ó": "O",
        "Ô": "O",
        "Õ": "O",
        "Ö": "O",
        "Ø": "O",
        "ò": "o",
        "ó": "o",
        "ô": "o",
        "õ": "o",
        "ö": "o",
        "ø": "o",
        "Ù": "U",
        "Ú": "U",
        "Û": "U",
        "Ü": "U",
        "ù": "u",
        "ú": "u",
        "û": "u",
        "ü": "u",
        "Ý": "Y",
        "ý": "y",
        "ÿ": "y",
        "Æ": "Ae",
        "æ": "ae",
        "Þ": "Th",
        "þ": "th",
        "ß": "ss"
    }
      , We = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#39;",
        "`": "&#96;"
    }
      , Ue = {
        "&amp;": "&",
        "&lt;": "<",
        "&gt;": ">",
        "&quot;": '"',
        "&#39;": "'",
        "&#96;": "`"
    }
      , ze = {
        "function": !0,
        object: !0
    }
      , Ve = {
        "\\": "\\",
        "'": "'",
        "\n": "n",
        "\r": "r",
        "\u2028": "u2028",
        "\u2029": "u2029"
    }
      , Xe = ze[typeof exports] && exports && !exports.nodeType && exports
      , Qe = ze[typeof module] && module && !module.nodeType && module
      , Ge = Xe && Qe && "object" == typeof global && global && global.Object && global
      , Ke = ze[typeof self] && self && self.Object && self
      , Je = ze[typeof window] && window && window.Object && window
      , Ye = Qe && Qe.exports === Xe && Xe
      , Ze = Ge || Je !== (this && this.window) && Je || Ke || this
      , et = x();
    "function" == typeof define && "object" == typeof define.amd && define.amd ? (Ze._ = et,
    define("underscore", [], function() {
        return et
    })) : Xe && Qe ? Ye ? (Qe.exports = et)._ = et : Xe._ = et : Ze._ = et
}
.call(this),
define("utils/browserEngines/sqlite_driver", [], function() {
    var e = function() {
        return this
    };
    return e.prototype.getSchemaStructure = function(e) {
        var t = "select * from sqlite_master where type IN ('table', 'view') and name != '__WebKitDatabaseInfoTable__' order by type,name"
          , n = function(t) {
            var n = {}
              , r = [];
            for (var i in t[0].RESULTS.COLUMNS)
                n[t[0].RESULTS.COLUMNS[i]] = i;
            for (var o in t[0].RESULTS.DATA) {
                var s = t[0].RESULTS.DATA[o][n.sql]
                  , a = t[0].RESULTS.DATA[o][n.name]
                  , l = t[0].RESULTS.DATA[o][n.type]
                  , u = {
                    table_name: a,
                    table_type: l,
                    columns: []
                };
                if ("table" == l) {
                    var c = /^[\s\S]*?\(([\s\S]*)\)$/.exec(s)[1].split(/,\s*/);
                    for (var h in c) {
                        var d = c[h].replace(/(^\s*)|(\s*$)/, "").split(/\s+/);
                        u.columns.push({
                            name: d.shift(),
                            type: d.join(" ")
                        })
                    }
                }
                r.push(u)
            }
            e.callback(r)
        };
        this.executeQuery({
            sql: t,
            success: n
        })
    }
    ,
    e.prototype.splitStatement = function(e, t) {
        t || (t = ";");
        var n = t.replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1")
          , r = e ? e.split(new RegExp(n + "s*\r?(\n|$)")) : [];
        return r
    }
    ,
    e
}),
define("utils/browserEngines/sqljs_driver", ["jquery", "./sqlite_driver"], function(e, t) {
    var n = function() {
        return this.db = null,
        this
    };
    return e.extend(n.prototype, t.prototype),
    n.prototype.buildSchema = function(n) {
        var r = this;
        try {
            var i = function() {
                r.db = new window.SQL.Database,
                e.each(t.prototype.splitStatement.call(this, n.ddl, n.statement_separator), function(e, t) {
                    r.db.exec(t)
                }),
                n.success()
            };
            void 0 === window.SQL ? (window.define_tmp = window.define,
            window.define = void 0,
            e.getScript("node_modules/sql.js/js/sql.js", function(e, t, n) {
                window.define = window.define_tmp,
                i()
            }).fail(function(e, t, r) {
                n.error("Your browser does not work with SQL.js.  Try using a different browser (Chrome, Safari, Firefox, IE 10, etc...), or a newer version of your current one.")
            })) : (r.db && r.db.close(),
            i())
        } catch (o) {
            n.error(o)
        }
    }
    ,
    n.prototype.executeQuery = function(t) {
        var n = this;
        try {
            if (!n.db)
                throw "Database Schema not available!";
            var r = [];
            n.db.exec("BEGIN TRANSACTION"),
            e.each(this.splitStatement(t.sql, t.statement_separator), function(t, i) {
                if (e.trim(i).length) {
                    var o = new Date
                      , s = [];
                    try {
                        s = n.db.exec(i);
                        var a = {
                            SUCCEEDED: !0,
                            STATEMENT: i,
                            EXECUTIONTIME: new Date - o,
                            RESULTS: {
                                COLUMNS: [],
                                DATA: []
                            },
                            EXECUTIONPLAN: {
                                COLUMNS: [],
                                DATA: []
                            }
                        };
                        s.length && e.each(s, function() {
                            a.RESULTS.COLUMNS = this.columns,
                            a.RESULTS.DATA = this.values
                        });
                        try {
                            exectionPlanArray = n.db.exec("EXPLAIN QUERY PLAN " + i),
                            exectionPlanArray.length && e.each(exectionPlanArray, function() {
                                a.EXECUTIONPLAN.COLUMNS = this.columns,
                                a.EXECUTIONPLAN.DATA = this.values
                            })
                        } catch (l) {}
                        r.push(a)
                    } catch (l) {
                        var a = {
                            SUCCEEDED: !1,
                            EXECUTIONTIME: new Date - o,
                            ERRORMESSAGE: l
                        };
                        return r.push(a),
                        !1
                    }
                }
            }),
            n.db.exec("ROLLBACK TRANSACTION"),
            t.success(r)
        } catch (i) {
            t.error(i)
        }
    }
    ,
    n
}),
define("utils/browserEngines/websql_driver", ["jquery", "./sqlite_driver"], function(e, t) {
    var n = function() {
        return this.db = null,
        this.ddl = [],
        this.nativeSQLite = void 0 !== window.openDatabase,
        this
    };
    return e.extend(n.prototype, t.prototype),
    n.prototype.buildSchema = function(e) {
        var t = this;
        try {
            t.nativeSQLite ? (t.db = openDatabase(e.short_code, "1.0", e.short_code, 1024 * e.ddl.length),
            t.db.transaction(function(n) {
                var r = t.splitStatement(e.ddl, e.statement_separator);
                t.ddl = r;
                var i = 0
                  , o = r[i]
                  , s = function(t, l) {
                    if (i < r.length - 1) {
                        do
                            i++,
                            o = r[i];
                        while (i < r.length - 1 && o.match(/^\s*$/));
                        o.match(/^\s*$/) ? (n.executeSql("intentional failure used to rollback transaction"),
                        e.success()) : n.executeSql(o, [], s, a)
                    } else
                        n.executeSql("intentional failure used to rollback transaction"),
                        e.success()
                }
                  , a = function(t, n) {
                    return "not an error" != n.message ? e.error(n.message) : e.success(),
                    !0
                };
                o ? n.executeSql(o, [], s, a) : e.success()
            })) : e.error("SQLite (WebSQL) not available in your browser. Try either using a webkit-based browser (such as Safari or Chrome) or using the SQLite (SQL.js) database type.")
        } catch (n) {
            e.error(n)
        }
    }
    ,
    n.prototype.executeQuery = function(t) {
        var n = this;
        try {
            if (null == n.db)
                throw "You need to build the schema before you can run a query.";
            var r = [];
            n.db.transaction(function(i) {
                var o = function(e, h) {
                    for (var d = {
                        STATEMENT: u,
                        SUCCEEDED: !0,
                        EXECUTIONTIME: new Date - c,
                        RESULTS: {
                            COLUMNS: [],
                            DATA: []
                        },
                        EXECUTIONPLAN: {
                            COLUMNS: [],
                            DATA: []
                        }
                    }, f = 0; f < h.rows.length; f++) {
                        var p = []
                          , m = h.rows.item(f);
                        if (0 == f)
                            for (col in m)
                                d.RESULTS.COLUMNS.push(col);
                        for (var g = 0; g < d.RESULTS.COLUMNS.length; g++)
                            null === m[d.RESULTS.COLUMNS[g]] ? p.push("(null)") : p.push(m[d.RESULTS.COLUMNS[g]]);
                        d.RESULTS.DATA.push(p)
                    }
                    i.executeSql("EXPLAIN QUERY PLAN " + u, [], function(e, c) {
                        for (var h = 0; h < c.rows.length; h++) {
                            var f = []
                              , p = c.rows.item(h);
                            if (0 == h)
                                for (col in p)
                                    d.EXECUTIONPLAN.COLUMNS.push(col);
                            for (var m = 0; m < d.EXECUTIONPLAN.COLUMNS.length; m++)
                                f.push(p[d.EXECUTIONPLAN.COLUMNS[m]]);
                            d.EXECUTIONPLAN.DATA.push(f)
                        }
                        if (l > n.ddl.length - 1 && r.push(d),
                        l < a.length - 1) {
                            do
                                l++,
                                u = a[l];
                            while (l < a.length - 1 && u.match(/^\s*$/));
                            u.match(/^\s*$/) ? (i.executeSql("intentional failure used to rollback transaction"),
                            t.success(r)) : i.executeSql(u, [], o, s)
                        } else
                            i.executeSql("intentional failure used to rollback transaction"),
                            t.success(r)
                    }, function(e, c) {
                        if (l > n.ddl.length - 1 && r.push(d),
                        l < a.length - 1) {
                            do
                                l++,
                                u = a[l];
                            while (l < a.length - 1 && u.match(/^\s*$/));
                            u.match(/^\s*$/) ? (i.executeSql("intentional failure used to rollback transaction"),
                            t.success(r)) : i.executeSql(u, [], o, s)
                        } else
                            i.executeSql("intentional failure used to rollback transaction"),
                            t.success(r)
                    })
                }
                  , s = function(e, n) {
                    if ("not an error" != n.message) {
                        var i = {
                            SUCCEEDED: !1,
                            EXECUTIONTIME: new Date - c,
                            ERRORMESSAGE: n.message
                        };
                        r.push(i)
                    }
                    return t.success(r),
                    !0
                }
                  , a = n.ddl.slice(0);
                e.each(n.splitStatement(t.sql, t.statement_separator), function(e, t) {
                    a.push(t)
                });
                var l = 0
                  , u = a[l]
                  , c = new Date;
                i.executeSql(u, [], o, s)
            })
        } catch (i) {
            t.error(i)
        }
    }
    ,
    n
}),
define("utils/browserEngines/engines", ["./sqljs_driver", "./websql_driver"], function(e, t) {
    return {
        sqljs: new e,
        websql: new t
    }
}),
define("fiddle_backbone/models/OpenIDMResource", ["jquery"], function(e) {
    return {
        serviceCall: function(t) {
            return "undefined" != typeof t.data && "string" != typeof t.data && (t.data = JSON.stringify(t.data)),
            t.type = t.type || "GET",
            t.headers = t.headers || {
                "X-OpenIDM-Username": "anonymous",
                "X-OpenIDM-Password": "anonymous",
                "X-OpenIDM-NoSession": "true"
            },
            e.ajax({
                type: t.type,
                url: "https://cors.bridged.cc/http://sqlfiddle.com/backend" + t.url,
                headers: e.extend({}, t.headers, {
                    "Content-Type": "application/json"
                }),
                dataType: "json",
                data: t.data
            }).fail(function(e, t, n) {
                413 !== e.status && alert("Oops! Something went wrong. Try it again and if this keeps happening, email admin@sqlfiddle.com about it.")
            })
        }
    }
}),
function(e, t) {
    if ("function" == typeof define && define.amd)
        define("Backbone", ["underscore", "jquery", "exports"], function(n, r, i) {
            e.Backbone = t(e, i, n, r)
        });
    else if ("undefined" != typeof exports) {
        var n = require("underscore");
        t(e, exports, n)
    } else
        e.Backbone = t(e, {}, e._, e.jQuery || e.Zepto || e.ender || e.$)
}(this, function(e, t, n, r) {
    var i = e.Backbone
      , o = []
      , s = (o.push,
    o.slice);
    o.splice;
    t.VERSION = "1.1.2",
    t.$ = r,
    t.noConflict = function() {
        return e.Backbone = i,
        this
    }
    ,
    t.emulateHTTP = !1,
    t.emulateJSON = !1;
    var a = t.Events = {
        on: function(e, t, n) {
            if (!u(this, "on", e, [t, n]) || !t)
                return this;
            this._events || (this._events = {});
            var r = this._events[e] || (this._events[e] = []);
            return r.push({
                callback: t,
                context: n,
                ctx: n || this
            }),
            this
        },
        once: function(e, t, r) {
            if (!u(this, "once", e, [t, r]) || !t)
                return this;
            var i = this
              , o = n.once(function() {
                i.off(e, o),
                t.apply(this, arguments)
            });
            return o._callback = t,
            this.on(e, o, r)
        },
        off: function(e, t, r) {
            var i, o, s, a, l, c, h, d;
            if (!this._events || !u(this, "off", e, [t, r]))
                return this;
            if (!e && !t && !r)
                return this._events = void 0,
                this;
            for (a = e ? [e] : n.keys(this._events),
            l = 0,
            c = a.length; c > l; l++)
                if (e = a[l],
                s = this._events[e]) {
                    if (this._events[e] = i = [],
                    t || r)
                        for (h = 0,
                        d = s.length; d > h; h++)
                            o = s[h],
                            (t && t !== o.callback && t !== o.callback._callback || r && r !== o.context) && i.push(o);
                    i.length || delete this._events[e]
                }
            return this
        },
        trigger: function(e) {
            if (!this._events)
                return this;
            var t = s.call(arguments, 1);
            if (!u(this, "trigger", e, t))
                return this;
            var n = this._events[e]
              , r = this._events.all;
            return n && c(n, t),
            r && c(r, arguments),
            this
        },
        stopListening: function(e, t, r) {
            var i = this._listeningTo;
            if (!i)
                return this;
            var o = !t && !r;
            r || "object" != typeof t || (r = this),
            e && ((i = {})[e._listenId] = e);
            for (var s in i)
                e = i[s],
                e.off(t, r, this),
                (o || n.isEmpty(e._events)) && delete this._listeningTo[s];
            return this
        }
    }
      , l = /\s+/
      , u = function(e, t, n, r) {
        if (!n)
            return !0;
        if ("object" == typeof n) {
            for (var i in n)
                e[t].apply(e, [i, n[i]].concat(r));
            return !1
        }
        if (l.test(n)) {
            for (var o = n.split(l), s = 0, a = o.length; a > s; s++)
                e[t].apply(e, [o[s]].concat(r));
            return !1
        }
        return !0
    }
      , c = function(e, t) {
        var n, r = -1, i = e.length, o = t[0], s = t[1], a = t[2];
        switch (t.length) {
        case 0:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx);
            return;
        case 1:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o);
            return;
        case 2:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o, s);
            return;
        case 3:
            for (; ++r < i; )
                (n = e[r]).callback.call(n.ctx, o, s, a);
            return;
        default:
            for (; ++r < i; )
                (n = e[r]).callback.apply(n.ctx, t);
            return
        }
    }
      , h = {
        listenTo: "on",
        listenToOnce: "once"
    };
    n.each(h, function(e, t) {
        a[t] = function(t, r, i) {
            var o = this._listeningTo || (this._listeningTo = {})
              , s = t._listenId || (t._listenId = n.uniqueId("l"));
            return o[s] = t,
            i || "object" != typeof r || (i = this),
            t[e](r, i, this),
            this
        }
    }),
    a.bind = a.on,
    a.unbind = a.off,
    n.extend(t, a);
    var d = t.Model = function(e, t) {
        var r = e || {};
        t || (t = {}),
        this.cid = n.uniqueId("c"),
        this.attributes = {},
        t.collection && (this.collection = t.collection),
        t.parse && (r = this.parse(r, t) || {}),
        r = n.defaults({}, r, n.result(this, "defaults")),
        this.set(r, t),
        this.changed = {},
        this.initialize.apply(this, arguments)
    }
    ;
    n.extend(d.prototype, a, {
        changed: null,
        validationError: null,
        idAttribute: "id",
        initialize: function() {},
        toJSON: function(e) {
            return n.clone(this.attributes)
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        get: function(e) {
            return this.attributes[e]
        },
        escape: function(e) {
            return n.escape(this.get(e))
        },
        has: function(e) {
            return null != this.get(e)
        },
        set: function(e, t, r) {
            var i, o, s, a, l, u, c, h;
            if (null == e)
                return this;
            if ("object" == typeof e ? (o = e,
            r = t) : (o = {})[e] = t,
            r || (r = {}),
            !this._validate(o, r))
                return !1;
            s = r.unset,
            l = r.silent,
            a = [],
            u = this._changing,
            this._changing = !0,
            u || (this._previousAttributes = n.clone(this.attributes),
            this.changed = {}),
            h = this.attributes,
            c = this._previousAttributes,
            this.idAttribute in o && (this.id = o[this.idAttribute]);
            for (i in o)
                t = o[i],
                n.isEqual(h[i], t) || a.push(i),
                n.isEqual(c[i], t) ? delete this.changed[i] : this.changed[i] = t,
                s ? delete h[i] : h[i] = t;
            if (!l) {
                a.length && (this._pending = r);
                for (var d = 0, f = a.length; f > d; d++)
                    this.trigger("change:" + a[d], this, h[a[d]], r)
            }
            if (u)
                return this;
            if (!l)
                for (; this._pending; )
                    r = this._pending,
                    this._pending = !1,
                    this.trigger("change", this, r);
            return this._pending = !1,
            this._changing = !1,
            this
        },
        unset: function(e, t) {
            return this.set(e, void 0, n.extend({}, t, {
                unset: !0
            }))
        },
        clear: function(e) {
            var t = {};
            for (var r in this.attributes)
                t[r] = void 0;
            return this.set(t, n.extend({}, e, {
                unset: !0
            }))
        },
        hasChanged: function(e) {
            return null == e ? !n.isEmpty(this.changed) : n.has(this.changed, e)
        },
        changedAttributes: function(e) {
            if (!e)
                return this.hasChanged() ? n.clone(this.changed) : !1;
            var t, r = !1, i = this._changing ? this._previousAttributes : this.attributes;
            for (var o in e)
                n.isEqual(i[o], t = e[o]) || ((r || (r = {}))[o] = t);
            return r
        },
        previous: function(e) {
            return null != e && this._previousAttributes ? this._previousAttributes[e] : null
        },
        previousAttributes: function() {
            return n.clone(this._previousAttributes)
        },
        fetch: function(e) {
            e = e ? n.clone(e) : {},
            void 0 === e.parse && (e.parse = !0);
            var t = this
              , r = e.success;
            return e.success = function(n) {
                return t.set(t.parse(n, e), e) ? (r && r(t, n, e),
                void t.trigger("sync", t, n, e)) : !1
            }
            ,
            R(this, e),
            this.sync("read", this, e)
        },
        save: function(e, t, r) {
            var i, o, s, a = this.attributes;
            if (null == e || "object" == typeof e ? (i = e,
            r = t) : (i = {})[e] = t,
            r = n.extend({
                validate: !0
            }, r),
            i && !r.wait) {
                if (!this.set(i, r))
                    return !1
            } else if (!this._validate(i, r))
                return !1;
            i && r.wait && (this.attributes = n.extend({}, a, i)),
            void 0 === r.parse && (r.parse = !0);
            var l = this
              , u = r.success;
            return r.success = function(e) {
                l.attributes = a;
                var t = l.parse(e, r);
                return r.wait && (t = n.extend(i || {}, t)),
                n.isObject(t) && !l.set(t, r) ? !1 : (u && u(l, e, r),
                void l.trigger("sync", l, e, r))
            }
            ,
            R(this, r),
            o = this.isNew() ? "create" : r.patch ? "patch" : "update",
            "patch" === o && (r.attrs = i),
            s = this.sync(o, this, r),
            i && r.wait && (this.attributes = a),
            s
        },
        destroy: function(e) {
            e = e ? n.clone(e) : {};
            var t = this
              , r = e.success
              , i = function() {
                t.trigger("destroy", t, t.collection, e)
            };
            if (e.success = function(n) {
                (e.wait || t.isNew()) && i(),
                r && r(t, n, e),
                t.isNew() || t.trigger("sync", t, n, e)
            }
            ,
            this.isNew())
                return e.success(),
                !1;
            R(this, e);
            var o = this.sync("delete", this, e);
            return e.wait || i(),
            o
        },
        url: function() {
            var e = n.result(this, "urlRoot") || n.result(this.collection, "url") || H();
            return this.isNew() ? e : e.replace(/([^\/])$/, "$1/") + encodeURIComponent(this.id)
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.attributes)
        },
        isNew: function() {
            return !this.has(this.idAttribute)
        },
        isValid: function(e) {
            return this._validate({}, n.extend(e || {}, {
                validate: !0
            }))
        },
        _validate: function(e, t) {
            if (!t.validate || !this.validate)
                return !0;
            e = n.extend({}, this.attributes, e);
            var r = this.validationError = this.validate(e, t) || null;
            return r ? (this.trigger("invalid", this, r, n.extend(t, {
                validationError: r
            })),
            !1) : !0
        }
    });
    var f = ["keys", "values", "pairs", "invert", "pick", "omit"];
    n.each(f, function(e) {
        d.prototype[e] = function() {
            var t = s.call(arguments);
            return t.unshift(this.attributes),
            n[e].apply(n, t)
        }
    });
    var p = t.Collection = function(e, t) {
        t || (t = {}),
        t.model && (this.model = t.model),
        void 0 !== t.comparator && (this.comparator = t.comparator),
        this._reset(),
        this.initialize.apply(this, arguments),
        e && this.reset(e, n.extend({
            silent: !0
        }, t))
    }
      , m = {
        add: !0,
        remove: !0,
        merge: !0
    }
      , g = {
        add: !0,
        remove: !1
    };
    n.extend(p.prototype, a, {
        model: d,
        initialize: function() {},
        toJSON: function(e) {
            return this.map(function(t) {
                return t.toJSON(e)
            })
        },
        sync: function() {
            return t.sync.apply(this, arguments)
        },
        add: function(e, t) {
            return this.set(e, n.extend({
                merge: !1
            }, t, g))
        },
        remove: function(e, t) {
            var r = !n.isArray(e);
            e = r ? [e] : n.clone(e),
            t || (t = {});
            var i, o, s, a;
            for (i = 0,
            o = e.length; o > i; i++)
                a = e[i] = this.get(e[i]),
                a && (delete this._byId[a.id],
                delete this._byId[a.cid],
                s = this.indexOf(a),
                this.models.splice(s, 1),
                this.length--,
                t.silent || (t.index = s,
                a.trigger("remove", a, this, t)),
                this._removeReference(a, t));
            return r ? e[0] : e
        },
        set: function(e, t) {
            t = n.defaults({}, t, m),
            t.parse && (e = this.parse(e, t));
            var r = !n.isArray(e);
            e = r ? e ? [e] : [] : n.clone(e);
            var i, o, s, a, l, u, c, h = t.at, f = this.model, p = this.comparator && null == h && t.sort !== !1, g = n.isString(this.comparator) ? this.comparator : null, v = [], y = [], b = {}, x = t.add, w = t.merge, _ = t.remove, k = !p && x && _ ? [] : !1;
            for (i = 0,
            o = e.length; o > i; i++) {
                if (l = e[i] || {},
                s = l instanceof d ? a = l : l[f.prototype.idAttribute || "id"],
                u = this.get(s))
                    _ && (b[u.cid] = !0),
                    w && (l = l === a ? a.attributes : l,
                    t.parse && (l = u.parse(l, t)),
                    u.set(l, t),
                    p && !c && u.hasChanged(g) && (c = !0)),
                    e[i] = u;
                else if (x) {
                    if (a = e[i] = this._prepareModel(l, t),
                    !a)
                        continue;
                    v.push(a),
                    this._addReference(a, t)
                }
                a = u || a,
                !k || !a.isNew() && b[a.id] || k.push(a),
                b[a.id] = !0
            }
            if (_) {
                for (i = 0,
                o = this.length; o > i; ++i)
                    b[(a = this.models[i]).cid] || y.push(a);
                y.length && this.remove(y, t)
            }
            if (v.length || k && k.length)
                if (p && (c = !0),
                this.length += v.length,
                null != h)
                    for (i = 0,
                    o = v.length; o > i; i++)
                        this.models.splice(h + i, 0, v[i]);
                else {
                    k && (this.models.length = 0);
                    var S = k || v;
                    for (i = 0,
                    o = S.length; o > i; i++)
                        this.models.push(S[i])
                }
            if (c && this.sort({
                silent: !0
            }),
            !t.silent) {
                for (i = 0,
                o = v.length; o > i; i++)
                    (a = v[i]).trigger("add", a, this, t);
                (c || k && k.length) && this.trigger("sort", this, t)
            }
            return r ? e[0] : e
        },
        reset: function(e, t) {
            t || (t = {});
            for (var r = 0, i = this.models.length; i > r; r++)
                this._removeReference(this.models[r], t);
            return t.previousModels = this.models,
            this._reset(),
            e = this.add(e, n.extend({
                silent: !0
            }, t)),
            t.silent || this.trigger("reset", this, t),
            e
        },
        push: function(e, t) {
            return this.add(e, n.extend({
                at: this.length
            }, t))
        },
        pop: function(e) {
            var t = this.at(this.length - 1);
            return this.remove(t, e),
            t
        },
        unshift: function(e, t) {
            return this.add(e, n.extend({
                at: 0
            }, t))
        },
        shift: function(e) {
            var t = this.at(0);
            return this.remove(t, e),
            t
        },
        slice: function() {
            return s.apply(this.models, arguments)
        },
        get: function(e) {
            return null != e ? this._byId[e] || this._byId[e.id] || this._byId[e.cid] : void 0
        },
        at: function(e) {
            return this.models[e]
        },
        where: function(e, t) {
            return n.isEmpty(e) ? t ? void 0 : [] : this[t ? "find" : "filter"](function(t) {
                for (var n in e)
                    if (e[n] !== t.get(n))
                        return !1;
                return !0
            })
        },
        findWhere: function(e) {
            return this.where(e, !0)
        },
        sort: function(e) {
            if (!this.comparator)
                throw new Error("Cannot sort a set without a comparator");
            return e || (e = {}),
            n.isString(this.comparator) || 1 === this.comparator.length ? this.models = this.sortBy(this.comparator, this) : this.models.sort(n.bind(this.comparator, this)),
            e.silent || this.trigger("sort", this, e),
            this
        },
        pluck: function(e) {
            return n.invoke(this.models, "get", e)
        },
        fetch: function(e) {
            e = e ? n.clone(e) : {},
            void 0 === e.parse && (e.parse = !0);
            var t = e.success
              , r = this;
            return e.success = function(n) {
                var i = e.reset ? "reset" : "set";
                r[i](n, e),
                t && t(r, n, e),
                r.trigger("sync", r, n, e)
            }
            ,
            R(this, e),
            this.sync("read", this, e)
        },
        create: function(e, t) {
            if (t = t ? n.clone(t) : {},
            !(e = this._prepareModel(e, t)))
                return !1;
            t.wait || this.add(e, t);
            var r = this
              , i = t.success;
            return t.success = function(e, n) {
                t.wait && r.add(e, t),
                i && i(e, n, t)
            }
            ,
            e.save(null, t),
            e
        },
        parse: function(e, t) {
            return e
        },
        clone: function() {
            return new this.constructor(this.models)
        },
        _reset: function() {
            this.length = 0,
            this.models = [],
            this._byId = {}
        },
        _prepareModel: function(e, t) {
            if (e instanceof d)
                return e;
            t = t ? n.clone(t) : {},
            t.collection = this;
            var r = new this.model(e,t);
            return r.validationError ? (this.trigger("invalid", this, r.validationError, t),
            !1) : r
        },
        _addReference: function(e, t) {
            this._byId[e.cid] = e,
            null != e.id && (this._byId[e.id] = e),
            e.collection || (e.collection = this),
            e.on("all", this._onModelEvent, this)
        },
        _removeReference: function(e, t) {
            this === e.collection && delete e.collection,
            e.off("all", this._onModelEvent, this)
        },
        _onModelEvent: function(e, t, n, r) {
            ("add" !== e && "remove" !== e || n === this) && ("destroy" === e && this.remove(t, r),
            t && e === "change:" + t.idAttribute && (delete this._byId[t.previous(t.idAttribute)],
            null != t.id && (this._byId[t.id] = t)),
            this.trigger.apply(this, arguments))
        }
    });
    var v = ["forEach", "each", "map", "collect", "reduce", "foldl", "inject", "reduceRight", "foldr", "find", "detect", "filter", "select", "reject", "every", "all", "some", "any", "include", "contains", "invoke", "max", "min", "toArray", "size", "first", "head", "take", "initial", "rest", "tail", "drop", "last", "without", "difference", "indexOf", "shuffle", "lastIndexOf", "isEmpty", "chain", "sample"];
    n.each(v, function(e) {
        p.prototype[e] = function() {
            var t = s.call(arguments);
            return t.unshift(this.models),
            n[e].apply(n, t)
        }
    });
    var y = ["groupBy", "countBy", "sortBy", "indexBy"];
    n.each(y, function(e) {
        p.prototype[e] = function(t, r) {
            var i = n.isFunction(t) ? t : function(e) {
                return e.get(t)
            }
            ;
            return n[e](this.models, i, r)
        }
    });
    var b = t.View = function(e) {
        this.cid = n.uniqueId("view"),
        e || (e = {}),
        n.extend(this, n.pick(e, w)),
        this._ensureElement(),
        this.initialize.apply(this, arguments),
        this.delegateEvents()
    }
      , x = /^(\S+)\s*(.*)$/
      , w = ["model", "collection", "el", "id", "attributes", "className", "tagName", "events"];
    n.extend(b.prototype, a, {
        tagName: "div",
        $: function(e) {
            return this.$el.find(e)
        },
        initialize: function() {},
        render: function() {
            return this
        },
        remove: function() {
            return this.$el.remove(),
            this.stopListening(),
            this
        },
        setElement: function(e, n) {
            return this.$el && this.undelegateEvents(),
            this.$el = e instanceof t.$ ? e : t.$(e),
            this.el = this.$el[0],
            n !== !1 && this.delegateEvents(),
            this
        },
        delegateEvents: function(e) {
            if (!e && !(e = n.result(this, "events")))
                return this;
            this.undelegateEvents();
            for (var t in e) {
                var r = e[t];
                if (n.isFunction(r) || (r = this[e[t]]),
                r) {
                    var i = t.match(x)
                      , o = i[1]
                      , s = i[2];
                    r = n.bind(r, this),
                    o += ".delegateEvents" + this.cid,
                    "" === s ? this.$el.on(o, r) : this.$el.on(o, s, r)
                }
            }
            return this
        },
        undelegateEvents: function() {
            return this.$el.off(".delegateEvents" + this.cid),
            this
        },
        _ensureElement: function() {
            if (this.el)
                this.setElement(n.result(this, "el"), !1);
            else {
                var e = n.extend({}, n.result(this, "attributes"));
                this.id && (e.id = n.result(this, "id")),
                this.className && (e["class"] = n.result(this, "className"));
                var r = t.$("<" + n.result(this, "tagName") + ">").attr(e);
                this.setElement(r, !1)
            }
        }
    }),
    t.sync = function(e, r, i) {
        var o = k[e];
        n.defaults(i || (i = {}), {
            emulateHTTP: t.emulateHTTP,
            emulateJSON: t.emulateJSON
        });
        var s = {
            type: o,
            dataType: "json"
        };
        if (i.url || (s.url = n.result(r, "url") || H()),
        null != i.data || !r || "create" !== e && "update" !== e && "patch" !== e || (s.contentType = "application/json",
        s.data = JSON.stringify(i.attrs || r.toJSON(i))),
        i.emulateJSON && (s.contentType = "application/x-www-form-urlencoded",
        s.data = s.data ? {
            model: s.data
        } : {}),
        i.emulateHTTP && ("PUT" === o || "DELETE" === o || "PATCH" === o)) {
            s.type = "POST",
            i.emulateJSON && (s.data._method = o);
            var a = i.beforeSend;
            i.beforeSend = function(e) {
                return e.setRequestHeader("X-HTTP-Method-Override", o),
                a ? a.apply(this, arguments) : void 0
            }
        }
        "GET" === s.type || i.emulateJSON || (s.processData = !1),
        "PATCH" === s.type && _ && (s.xhr = function() {
            return new ActiveXObject("Microsoft.XMLHTTP")
        }
        );
        var l = i.xhr = t.ajax(n.extend(s, i));
        return r.trigger("request", r, l, i),
        l
    }
    ;
    var _ = !("undefined" == typeof window || !window.ActiveXObject || window.XMLHttpRequest && (new XMLHttpRequest).dispatchEvent)
      , k = {
        create: "POST",
        update: "PUT",
        patch: "PATCH",
        "delete": "DELETE",
        read: "GET"
    };
    t.ajax = function() {
        return t.$.ajax.apply(t.$, arguments)
    }
    ;
    var S = t.Router = function(e) {
        e || (e = {}),
        e.routes && (this.routes = e.routes),
        this._bindRoutes(),
        this.initialize.apply(this, arguments)
    }
      , C = /\((.*?)\)/g
      , T = /(\(\?)?:\w+/g
      , L = /\*\w+/g
      , E = /[\-{}\[\]+?.,\\\^$|#\s]/g;
    n.extend(S.prototype, a, {
        initialize: function() {},
        route: function(e, r, i) {
            n.isRegExp(e) || (e = this._routeToRegExp(e)),
            n.isFunction(r) && (i = r,
            r = ""),
            i || (i = this[r]);
            var o = this;
            return t.history.route(e, function(n) {
                var s = o._extractParameters(e, n);
                o.execute(i, s),
                o.trigger.apply(o, ["route:" + r].concat(s)),
                o.trigger("route", r, s),
                t.history.trigger("route", o, r, s)
            }),
            this
        },
        execute: function(e, t) {
            e && e.apply(this, t)
        },
        navigate: function(e, n) {
            return t.history.navigate(e, n),
            this
        },
        _bindRoutes: function() {
            if (this.routes) {
                this.routes = n.result(this, "routes");
                for (var e, t = n.keys(this.routes); null != (e = t.pop()); )
                    this.route(e, this.routes[e])
            }
        },
        _routeToRegExp: function(e) {
            return e = e.replace(E, "\\$&").replace(C, "(?:$1)?").replace(T, function(e, t) {
                return t ? e : "([^/?]+)"
            }).replace(L, "([^?]*?)"),
            new RegExp("^" + e + "(?:\\?([\\s\\S]*))?$")
        },
        _extractParameters: function(e, t) {
            var r = e.exec(t).slice(1);
            return n.map(r, function(e, t) {
                return t === r.length - 1 ? e || null : e ? decodeURIComponent(e) : null
            })
        }
    });
    var N = t.History = function() {
        this.handlers = [],
        n.bindAll(this, "checkUrl"),
        "undefined" != typeof window && (this.location = window.location,
        this.history = window.history)
    }
      , A = /^[#\/]|\s+$/g
      , M = /^\/+|\/+$/g
      , D = /msie [\w.]+/
      , O = /\/$/
      , I = /#.*$/;
    N.started = !1,
    n.extend(N.prototype, a, {
        interval: 50,
        atRoot: function() {
            return this.location.pathname.replace(/[^\/]$/, "$&/") === this.root
        },
        getHash: function(e) {
            var t = (e || this).location.href.match(/#(.*)$/);
            return t ? t[1] : ""
        },
        getFragment: function(e, t) {
            if (null == e)
                if (this._hasPushState || !this._wantsHashChange || t) {
                    e = decodeURI(this.location.pathname + this.location.search);
                    var n = this.root.replace(O, "");
                    e.indexOf(n) || (e = e.slice(n.length))
                } else
                    e = this.getHash();
            return e.replace(A, "")
        },
        start: function(e) {
            if (N.started)
                throw new Error("Backbone.history has already been started");
            N.started = !0,
            this.options = n.extend({
                root: "/"
            }, this.options, e),
            this.root = this.options.root,
            this._wantsHashChange = this.options.hashChange !== !1,
            this._wantsPushState = !!this.options.pushState,
            this._hasPushState = !!(this.options.pushState && this.history && this.history.pushState);
            var r = this.getFragment()
              , i = document.documentMode
              , o = D.exec(navigator.userAgent.toLowerCase()) && (!i || 7 >= i);
            if (this.root = ("/" + this.root + "/").replace(M, "/"),
            o && this._wantsHashChange) {
                var s = t.$('<iframe src="javascript:0" tabindex="-1">');
                this.iframe = s.hide().appendTo("body")[0].contentWindow,
                this.navigate(r)
            }
            this._hasPushState ? t.$(window).on("popstate", this.checkUrl) : this._wantsHashChange && "onhashchange"in window && !o ? t.$(window).on("hashchange", this.checkUrl) : this._wantsHashChange && (this._checkUrlInterval = setInterval(this.checkUrl, this.interval)),
            this.fragment = r;
            var a = this.location;
            if (this._wantsHashChange && this._wantsPushState) {
                if (!this._hasPushState && !this.atRoot())
                    return this.fragment = this.getFragment(null, !0),
                    this.location.replace(this.root + "#" + this.fragment),
                    !0;
                this._hasPushState && this.atRoot() && a.hash && (this.fragment = this.getHash().replace(A, ""),
                this.history.replaceState({}, document.title, this.root + this.fragment))
            }
            return this.options.silent ? void 0 : this.loadUrl()
        },
        stop: function() {
            t.$(window).off("popstate", this.checkUrl).off("hashchange", this.checkUrl),
            this._checkUrlInterval && clearInterval(this._checkUrlInterval),
            N.started = !1
        },
        route: function(e, t) {
            this.handlers.unshift({
                route: e,
                callback: t
            })
        },
        checkUrl: function(e) {
            var t = this.getFragment();
            return t === this.fragment && this.iframe && (t = this.getFragment(this.getHash(this.iframe))),
            t === this.fragment ? !1 : (this.iframe && this.navigate(t),
            void this.loadUrl())
        },
        loadUrl: function(e) {
            return e = this.fragment = this.getFragment(e),
            n.any(this.handlers, function(t) {
                return t.route.test(e) ? (t.callback(e),
                !0) : void 0
            })
        },
        navigate: function(e, t) {
            if (!N.started)
                return !1;
            t && t !== !0 || (t = {
                trigger: !!t
            });
            var n = this.root + (e = this.getFragment(e || ""));
            if (e = e.replace(I, ""),
            this.fragment !== e) {
                if (this.fragment = e,
                "" === e && "/" !== n && (n = n.slice(0, -1)),
                this._hasPushState)
                    this.history[t.replace ? "replaceState" : "pushState"]({}, document.title, n);
                else {
                    if (!this._wantsHashChange)
                        return this.location.assign(n);
                    this._updateHash(this.location, e, t.replace),
                    this.iframe && e !== this.getFragment(this.getHash(this.iframe)) && (t.replace || this.iframe.document.open().close(),
                    this._updateHash(this.iframe.location, e, t.replace))
                }
                return t.trigger ? this.loadUrl(e) : void 0
            }
        },
        _updateHash: function(e, t, n) {
            if (n) {
                var r = e.href.replace(/(javascript:|#).*$/, "");
                e.replace(r + "#" + t)
            } else
                e.hash = "#" + t
        }
    }),
    t.history = new N;
    var P = function(e, t) {
        var r, i = this;
        r = e && n.has(e, "constructor") ? e.constructor : function() {
            return i.apply(this, arguments)
        }
        ,
        n.extend(r, i, t);
        var o = function() {
            this.constructor = r
        };
        return o.prototype = i.prototype,
        r.prototype = new o,
        e && n.extend(r.prototype, e),
        r.__super__ = i.prototype,
        r
    };
    d.extend = p.extend = S.extend = b.extend = N.extend = P;
    var H = function() {
        throw new Error('A "url" property or function must be specified')
    }
      , R = function(e, t) {
        var n = t.error;
        t.error = function(r) {
            n && n(e, r, t),
            e.trigger("error", e, r, t)
        }
    };
    return t
}),
define("fiddle_backbone/models/OpenIDConnectProviders", ["./OpenIDMResource", "Backbone"], function(e, t) {
    return t.Collection.extend({
        fetch: function() {
            var n = this;
            return e.serviceCall({
                url: "/oidc"
            }).then(function(e) {
                return n.reset(_.map(e.resolvers, function(e) {
                    return new t.Model(e)
                })),
                n
            })
        }
    })
}),
define("fiddle_backbone/models/UsedFiddle", ["Backbone"], function(e) {
    var t = e.Model.extend({
        defaults: {
            fragment: "",
            favorite: !1,
            num_accesses: 0,
            full_name: "",
            ddl: "",
            sql: "",
            structure: [],
            sets: []
        },
        initialize: function() {
            this.get("last_used") || this.set("last_used", new Date)
        }
    });
    return t
}),
define("fiddle_backbone/models/MyFiddleHistory", ["Backbone", "./UsedFiddle"], function(e, t) {
    var n = e.Collection.extend({
        model: t,
        comparator: function(e, t) {
            return e.get("last_used") === t.get("last_used") ? 0 : e.get("last_used") > t.get("last_used") ? -1 : 1
        },
        insert: function(e) {
            var t = this.find(function(t) {
                return t.get("fragment") == e.get("fragment")
            });
            t ? (t.set("last_used", e.get("last_used")),
            this.sort()) : this.add(e),
            this.trigger("change")
        },
        initialize: function() {
            try {
                if (sessionStorage) {
                    var e = sessionStorage.getItem("fiddleHistory");
                    e && e.length && this.add($.parseJSON(e))
                }
            } catch (t) {}
        },
        sync: function() {
            try {
                sessionStorage && sessionStorage.setItem("fiddleHistory", JSON.stringify(this.toJSON()))
            } catch (e) {}
        }
    });
    return n
}),
define("fiddle_backbone/models/DBType", ["Backbone"], function(e) {
    return e.Model.extend({
        defaults: {
            sample_fragment: "",
            notes: "",
            simple_name: "",
            full_name: "",
            selected: !1,
            context: "host",
            classname: "",
            num_hosts: 0
        }
    })
}),
define("fiddle_backbone/models/DBTypesList", ["./OpenIDMResource", "Backbone", "./DBType"], function(e, t, n) {
    return t.Collection.extend({
        model: n,
        fetch: function() {
            var t = this;
            return e.serviceCall({
                url: "/dbTypes"
            }).then(function(e) {
                return t.reset(_.map(e.result, function(e) {
                    return e.id = e.db_type_id,
                    new n(e)
                })),
                t
            })
        },
        getLatestDBTypeForSimpleName: function(e) {
            return e = e || this.getSelectedType().get("simple_name"),
            this.filter(function(t) {
                return t.get("simple_name") === e && t.get("num_hosts") > 0
            }).sort(function(e, t) {
                return e.get("full_name") > t.get("full_name") ? -1 : 1
            })[0]
        },
        getSelectedType: function() {
            return this.find(function(e) {
                return e.get("selected")
            })
        },
        setSelectedType: function(e, t) {
            this.each(function(t) {
                t.set({
                    selected: t.id === e
                }, {
                    silent: !0
                })
            }),
            t || this.trigger("change")
        }
    })
}),
define("fiddle_backbone/models/SchemaDef", ["./OpenIDMResource", "Backbone"], function(e, t) {
    var n = t.Model.extend({
        defaults: {
            ddl: "",
            short_code: "",
            simple_name: "",
            full_name: "",
            valid: !0,
            errorMessage: "",
            loading: !1,
            ready: !1,
            schema_structure: [],
            statement_separator: ";",
            browserEngines: {}
        },
        reset: function() {
            this.set(this.defaults),
            this.trigger("reloaded")
        },
        build: function() {
            var t = this.get("dbType")
              , n = this;
            return e.serviceCall({
                type: "POST",
                url: "/createSchema?_action=create",
                data: {
                    statement_separator: this.get("statement_separator"),
                    db_type_id: this.get("dbType").id,
                    ddl: this.get("ddl")
                }
            }).then(function(e) {
                var r;
                e._id ? (r = e._id.split("_")[1],
                "browser" === t.get("context") ? n.get("browserEngines")[t.get("classname")].buildSchema({
                    short_code: r,
                    statement_separator: n.get("statement_separator"),
                    ddl: n.get("ddl"),
                    success: function() {
                        n.set({
                            short_code: r,
                            ready: !0,
                            valid: !0,
                            errorMessage: ""
                        }),
                        n.get("browserEngines")[t.get("classname")].getSchemaStructure({
                            callback: function(e) {
                                n.set({
                                    schema_structure: e
                                }),
                                n.trigger("built")
                            }
                        })
                    },
                    error: function(e) {
                        n.set({
                            short_code: r,
                            ready: !1,
                            valid: !1,
                            errorMessage: e,
                            schema_structure: []
                        }),
                        n.trigger("failed")
                    }
                }) : (n.set({
                    short_code: r,
                    ready: !0,
                    valid: !0,
                    errorMessage: "",
                    schema_structure: e.schema_structure
                }),
                n.trigger("built"))) : (n.set({
                    short_code: "",
                    ready: !1,
                    valid: !1,
                    errorMessage: e.error,
                    schema_structure: []
                }),
                n.trigger("failed"))
            }, function(e, t, r) {
                n.set({
                    short_code: "",
                    ready: !1,
                    valid: !1,
                    errorMessage: r,
                    schema_structure: []
                }),
                n.trigger("failed")
            })
        }
    });
    return n
}),
define("fiddle_backbone/models/Query", ["./OpenIDMResource", "Backbone"], function(e, t) {
    var n = t.Model.extend({
        defaults: {
            id: 0,
            sql: "",
            sets: [],
            pendingChanges: !1,
            statement_separator: ";"
        },
        reset: function() {
            this.set(this.defaults),
            this.trigger("reloaded")
        },
        execute: function() {
            var t = this;
            return this.has("schemaDef") && this.get("schemaDef").has("dbType") && this.get("schemaDef").get("ready") ? e.serviceCall({
                type: "POST",
                url: "/executeQuery?_action=query",
                data: {
                    db_type_id: this.get("schemaDef").get("dbType").id,
                    schema_short_code: this.get("schemaDef").get("short_code"),
                    statement_separator: this.get("statement_separator"),
                    sql: this.get("sql")
                }
            }).then(function(e, n, r) {
                "browser" === t.get("schemaDef").get("dbType").get("context") ? t.get("schemaDef").get("browserEngines")[t.get("schemaDef").get("dbType").get("classname")].executeQuery({
                    sql: t.get("sql"),
                    statement_separator: t.get("statement_separator"),
                    success: function(n) {
                        t.set({
                            id: e.ID,
                            sets: n
                        }),
                        t.trigger("executed")
                    },
                    error: function(e) {
                        t.set({
                            sets: [{
                                SUCCEEDED: !1,
                                ERRORMESSAGE: e
                            }]
                        }),
                        t.trigger("executed")
                    }
                }) : t.set({
                    id: e.ID,
                    sets: e.sets || []
                })
            }, function(e, n, r) {
                t.set({
                    sets: []
                })
            }).always(function(e, n) {
                t.trigger("executed")
            }) : !1
        }
    });
    return n
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("Handlebars", [], t) : "object" == typeof exports ? module.exports = t() : e.Handlebars = e.Handlebars || t()
}(this, function() {
    var e = function() {
        "use strict";
        function e(e) {
            this.string = e
        }
        var t;
        return e.prototype.toString = function() {
            return "" + this.string
        }
        ,
        t = e
    }()
      , t = function(e) {
        "use strict";
        function t(e) {
            return l[e]
        }
        function n(e) {
            for (var t = 1; t < arguments.length; t++)
                for (var n in arguments[t])
                    Object.prototype.hasOwnProperty.call(arguments[t], n) && (e[n] = arguments[t][n]);
            return e
        }
        function r(e) {
            return e instanceof a ? e.toString() : null == e ? "" : e ? (e = "" + e,
            c.test(e) ? e.replace(u, t) : e) : e + ""
        }
        function i(e) {
            return e || 0 === e ? f(e) && 0 === e.length ? !0 : !1 : !0
        }
        function o(e, t) {
            return (e ? e + "." : "") + t
        }
        var s = {}
          , a = e
          , l = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#x27;",
            "`": "&#x60;"
        }
          , u = /[&<>"'`]/g
          , c = /[&<>"'`]/;
        s.extend = n;
        var h = Object.prototype.toString;
        s.toString = h;
        var d = function(e) {
            return "function" == typeof e
        };
        d(/x/) && (d = function(e) {
            return "function" == typeof e && "[object Function]" === h.call(e)
        }
        );
        var d;
        s.isFunction = d;
        var f = Array.isArray || function(e) {
            return e && "object" == typeof e ? "[object Array]" === h.call(e) : !1
        }
        ;
        return s.isArray = f,
        s.escapeExpression = r,
        s.isEmpty = i,
        s.appendContextPath = o,
        s
    }(e)
      , n = function() {
        "use strict";
        function e(e, t) {
            var r;
            t && t.firstLine && (r = t.firstLine,
            e += " - " + r + ":" + t.firstColumn);
            for (var i = Error.prototype.constructor.call(this, e), o = 0; o < n.length; o++)
                this[n[o]] = i[n[o]];
            r && (this.lineNumber = r,
            this.column = t.firstColumn)
        }
        var t, n = ["description", "fileName", "lineNumber", "message", "name", "number", "stack"];
        return e.prototype = new Error,
        t = e
    }()
      , r = function(e, t) {
        "use strict";
        function n(e, t) {
            this.helpers = e || {},
            this.partials = t || {},
            r(this)
        }
        function r(e) {
            e.registerHelper("helperMissing", function() {
                if (1 !== arguments.length)
                    throw new s("Missing helper: '" + arguments[arguments.length - 1].name + "'")
            }),
            e.registerHelper("blockHelperMissing", function(t, n) {
                var r = n.inverse
                  , i = n.fn;
                if (t === !0)
                    return i(this);
                if (t === !1 || null == t)
                    return r(this);
                if (c(t))
                    return t.length > 0 ? (n.ids && (n.ids = [n.name]),
                    e.helpers.each(t, n)) : r(this);
                if (n.data && n.ids) {
                    var s = g(n.data);
                    s.contextPath = o.appendContextPath(n.data.contextPath, n.name),
                    n = {
                        data: s
                    }
                }
                return i(t, n)
            }),
            e.registerHelper("each", function(e, t) {
                if (!t)
                    throw new s("Must pass iterator to #each");
                var n, r, i = t.fn, a = t.inverse, l = 0, u = "";
                if (t.data && t.ids && (r = o.appendContextPath(t.data.contextPath, t.ids[0]) + "."),
                h(e) && (e = e.call(this)),
                t.data && (n = g(t.data)),
                e && "object" == typeof e)
                    if (c(e))
                        for (var d = e.length; d > l; l++)
                            n && (n.index = l,
                            n.first = 0 === l,
                            n.last = l === e.length - 1,
                            r && (n.contextPath = r + l)),
                            u += i(e[l], {
                                data: n
                            });
                    else
                        for (var f in e)
                            e.hasOwnProperty(f) && (n && (n.key = f,
                            n.index = l,
                            n.first = 0 === l,
                            r && (n.contextPath = r + f)),
                            u += i(e[f], {
                                data: n
                            }),
                            l++);
                return 0 === l && (u = a(this)),
                u
            }),
            e.registerHelper("if", function(e, t) {
                return h(e) && (e = e.call(this)),
                !t.hash.includeZero && !e || o.isEmpty(e) ? t.inverse(this) : t.fn(this)
            }),
            e.registerHelper("unless", function(t, n) {
                return e.helpers["if"].call(this, t, {
                    fn: n.inverse,
                    inverse: n.fn,
                    hash: n.hash
                })
            }),
            e.registerHelper("with", function(e, t) {
                h(e) && (e = e.call(this));
                var n = t.fn;
                if (o.isEmpty(e))
                    return t.inverse(this);
                if (t.data && t.ids) {
                    var r = g(t.data);
                    r.contextPath = o.appendContextPath(t.data.contextPath, t.ids[0]),
                    t = {
                        data: r
                    }
                }
                return n(e, t)
            }),
            e.registerHelper("log", function(t, n) {
                var r = n.data && null != n.data.level ? parseInt(n.data.level, 10) : 1;
                e.log(r, t)
            }),
            e.registerHelper("lookup", function(e, t) {
                return e && e[t]
            })
        }
        var i = {}
          , o = e
          , s = t
          , a = "2.0.0";
        i.VERSION = a;
        var l = 6;
        i.COMPILER_REVISION = l;
        var u = {
            1: "<= 1.0.rc.2",
            2: "== 1.0.0-rc.3",
            3: "== 1.0.0-rc.4",
            4: "== 1.x.x",
            5: "== 2.0.0-alpha.x",
            6: ">= 2.0.0-beta.1"
        };
        i.REVISION_CHANGES = u;
        var c = o.isArray
          , h = o.isFunction
          , d = o.toString
          , f = "[object Object]";
        i.HandlebarsEnvironment = n,
        n.prototype = {
            constructor: n,
            logger: p,
            log: m,
            registerHelper: function(e, t) {
                if (d.call(e) === f) {
                    if (t)
                        throw new s("Arg not supported with multiple helpers");
                    o.extend(this.helpers, e)
                } else
                    this.helpers[e] = t
            },
            unregisterHelper: function(e) {
                delete this.helpers[e]
            },
            registerPartial: function(e, t) {
                d.call(e) === f ? o.extend(this.partials, e) : this.partials[e] = t
            },
            unregisterPartial: function(e) {
                delete this.partials[e]
            }
        };
        var p = {
            methodMap: {
                0: "debug",
                1: "info",
                2: "warn",
                3: "error"
            },
            DEBUG: 0,
            INFO: 1,
            WARN: 2,
            ERROR: 3,
            level: 3,
            log: function(e, t) {
                if (p.level <= e) {
                    var n = p.methodMap[e];
                    "undefined" != typeof console && console[n] && console[n].call(console, t)
                }
            }
        };
        i.logger = p;
        var m = p.log;
        i.log = m;
        var g = function(e) {
            var t = o.extend({}, e);
            return t._parent = e,
            t
        };
        return i.createFrame = g,
        i
    }(t, n)
      , i = function(e, t, n) {
        "use strict";
        function r(e) {
            var t = e && e[0] || 1
              , n = d;
            if (t !== n) {
                if (n > t) {
                    var r = f[n]
                      , i = f[t];
                    throw new h("Template was precompiled with an older version of Handlebars than the current runtime. Please update your precompiler to a newer version (" + r + ") or downgrade your runtime to an older version (" + i + ").")
                }
                throw new h("Template was precompiled with a newer version of Handlebars than the current runtime. Please update your runtime to a newer version (" + e[1] + ").")
            }
        }
        function i(e, t) {
            if (!t)
                throw new h("No environment passed to template");
            if (!e || !e.main)
                throw new h("Unknown template object: " + typeof e);
            t.VM.checkRevision(e.compiler);
            var n = function(n, r, i, o, s, a, l, u, d) {
                s && (o = c.extend({}, o, s));
                var f = t.VM.invokePartial.call(this, n, i, o, a, l, u, d);
                if (null == f && t.compile) {
                    var p = {
                        helpers: a,
                        partials: l,
                        data: u,
                        depths: d
                    };
                    l[i] = t.compile(n, {
                        data: void 0 !== u,
                        compat: e.compat
                    }, t),
                    f = l[i](o, p)
                }
                if (null != f) {
                    if (r) {
                        for (var m = f.split("\n"), g = 0, v = m.length; v > g && (m[g] || g + 1 !== v); g++)
                            m[g] = r + m[g];
                        f = m.join("\n")
                    }
                    return f
                }
                throw new h("The partial " + i + " could not be compiled when running in runtime-only mode")
            }
              , r = {
                lookup: function(e, t) {
                    for (var n = e.length, r = 0; n > r; r++)
                        if (e[r] && null != e[r][t])
                            return e[r][t]
                },
                lambda: function(e, t) {
                    return "function" == typeof e ? e.call(t) : e
                },
                escapeExpression: c.escapeExpression,
                invokePartial: n,
                fn: function(t) {
                    return e[t]
                },
                programs: [],
                program: function(e, t, n) {
                    var r = this.programs[e]
                      , i = this.fn(e);
                    return t || n ? r = o(this, e, i, t, n) : r || (r = this.programs[e] = o(this, e, i)),
                    r
                },
                data: function(e, t) {
                    for (; e && t--; )
                        e = e._parent;
                    return e
                },
                merge: function(e, t) {
                    var n = e || t;
                    return e && t && e !== t && (n = c.extend({}, t, e)),
                    n
                },
                noop: t.VM.noop,
                compilerInfo: e.compiler
            }
              , i = function(t, n) {
                n = n || {};
                var o = n.data;
                i._setup(n),
                !n.partial && e.useData && (o = l(t, o));
                var s;
                return e.useDepths && (s = n.depths ? [t].concat(n.depths) : [t]),
                e.main.call(r, t, r.helpers, r.partials, o, s)
            };
            return i.isTop = !0,
            i._setup = function(n) {
                n.partial ? (r.helpers = n.helpers,
                r.partials = n.partials) : (r.helpers = r.merge(n.helpers, t.helpers),
                e.usePartial && (r.partials = r.merge(n.partials, t.partials)))
            }
            ,
            i._child = function(t, n, i) {
                if (e.useDepths && !i)
                    throw new h("must pass parent depths");
                return o(r, t, e[t], n, i)
            }
            ,
            i
        }
        function o(e, t, n, r, i) {
            var o = function(t, o) {
                return o = o || {},
                n.call(e, t, e.helpers, e.partials, o.data || r, i && [t].concat(i))
            };
            return o.program = t,
            o.depth = i ? i.length : 0,
            o
        }
        function s(e, t, n, r, i, o, s) {
            var a = {
                partial: !0,
                helpers: r,
                partials: i,
                data: o,
                depths: s
            };
            if (void 0 === e)
                throw new h("The partial " + t + " could not be found");
            return e instanceof Function ? e(n, a) : void 0
        }
        function a() {
            return ""
        }
        function l(e, t) {
            return t && "root"in t || (t = t ? p(t) : {},
            t.root = e),
            t
        }
        var u = {}
          , c = e
          , h = t
          , d = n.COMPILER_REVISION
          , f = n.REVISION_CHANGES
          , p = n.createFrame;
        return u.checkRevision = r,
        u.template = i,
        u.program = o,
        u.invokePartial = s,
        u.noop = a,
        u
    }(t, n, r)
      , o = function(e, t, n, r, i) {
        "use strict";
        var o, s = e, a = t, l = n, u = r, c = i, h = function() {
            var e = new s.HandlebarsEnvironment;
            return u.extend(e, s),
            e.SafeString = a,
            e.Exception = l,
            e.Utils = u,
            e.escapeExpression = u.escapeExpression,
            e.VM = c,
            e.template = function(t) {
                return c.template(t, e)
            }
            ,
            e
        }, d = h();
        return d.create = h,
        d["default"] = d,
        o = d
    }(r, e, n, t, i)
      , s = function(e) {
        "use strict";
        function t(e) {
            e = e || {},
            this.firstLine = e.first_line,
            this.firstColumn = e.first_column,
            this.lastColumn = e.last_column,
            this.lastLine = e.last_line
        }
        var n, r = e, i = {
            ProgramNode: function(e, n, r) {
                t.call(this, r),
                this.type = "program",
                this.statements = e,
                this.strip = n
            },
            MustacheNode: function(e, n, r, o, s) {
                if (t.call(this, s),
                this.type = "mustache",
                this.strip = o,
                null != r && r.charAt) {
                    var a = r.charAt(3) || r.charAt(2);
                    this.escaped = "{" !== a && "&" !== a
                } else
                    this.escaped = !!r;
                e instanceof i.SexprNode ? this.sexpr = e : this.sexpr = new i.SexprNode(e,n),
                this.id = this.sexpr.id,
                this.params = this.sexpr.params,
                this.hash = this.sexpr.hash,
                this.eligibleHelper = this.sexpr.eligibleHelper,
                this.isHelper = this.sexpr.isHelper
            },
            SexprNode: function(e, n, r) {
                t.call(this, r),
                this.type = "sexpr",
                this.hash = n;
                var i = this.id = e[0]
                  , o = this.params = e.slice(1);
                this.isHelper = !(!o.length && !n),
                this.eligibleHelper = this.isHelper || i.isSimple
            },
            PartialNode: function(e, n, r, i, o) {
                t.call(this, o),
                this.type = "partial",
                this.partialName = e,
                this.context = n,
                this.hash = r,
                this.strip = i,
                this.strip.inlineStandalone = !0
            },
            BlockNode: function(e, n, r, i, o) {
                t.call(this, o),
                this.type = "block",
                this.mustache = e,
                this.program = n,
                this.inverse = r,
                this.strip = i,
                r && !n && (this.isInverse = !0)
            },
            RawBlockNode: function(e, n, o, s) {
                if (t.call(this, s),
                e.sexpr.id.original !== o)
                    throw new r(e.sexpr.id.original + " doesn't match " + o,this);
                n = new i.ContentNode(n,s),
                this.type = "block",
                this.mustache = e,
                this.program = new i.ProgramNode([n],{},s)
            },
            ContentNode: function(e, n) {
                t.call(this, n),
                this.type = "content",
                this.original = this.string = e
            },
            HashNode: function(e, n) {
                t.call(this, n),
                this.type = "hash",
                this.pairs = e
            },
            IdNode: function(e, n) {
                t.call(this, n),
                this.type = "ID";
                for (var i = "", o = [], s = 0, a = "", l = 0, u = e.length; u > l; l++) {
                    var c = e[l].part;
                    if (i += (e[l].separator || "") + c,
                    ".." === c || "." === c || "this" === c) {
                        if (o.length > 0)
                            throw new r("Invalid path: " + i,this);
                        ".." === c ? (s++,
                        a += "../") : this.isScoped = !0
                    } else
                        o.push(c)
                }
                this.original = i,
                this.parts = o,
                this.string = o.join("."),
                this.depth = s,
                this.idName = a + this.string,
                this.isSimple = 1 === e.length && !this.isScoped && 0 === s,
                this.stringModeValue = this.string
            },
            PartialNameNode: function(e, n) {
                t.call(this, n),
                this.type = "PARTIAL_NAME",
                this.name = e.original
            },
            DataNode: function(e, n) {
                t.call(this, n),
                this.type = "DATA",
                this.id = e,
                this.stringModeValue = e.stringModeValue,
                this.idName = "@" + e.stringModeValue
            },
            StringNode: function(e, n) {
                t.call(this, n),
                this.type = "STRING",
                this.original = this.string = this.stringModeValue = e
            },
            NumberNode: function(e, n) {
                t.call(this, n),
                this.type = "NUMBER",
                this.original = this.number = e,
                this.stringModeValue = Number(e)
            },
            BooleanNode: function(e, n) {
                t.call(this, n),
                this.type = "BOOLEAN",
                this.bool = e,
                this.stringModeValue = "true" === e
            },
            CommentNode: function(e, n) {
                t.call(this, n),
                this.type = "comment",
                this.comment = e,
                this.strip = {
                    inlineStandalone: !0
                }
            }
        };
        return n = i
    }(n)
      , a = function() {
        "use strict";
        var e, t = function() {
            function e() {
                this.yy = {}
            }
            var t = {
                trace: function() {},
                yy: {},
                symbols_: {
                    error: 2,
                    root: 3,
                    program: 4,
                    EOF: 5,
                    program_repetition0: 6,
                    statement: 7,
                    mustache: 8,
                    block: 9,
                    rawBlock: 10,
                    partial: 11,
                    CONTENT: 12,
                    COMMENT: 13,
                    openRawBlock: 14,
                    END_RAW_BLOCK: 15,
                    OPEN_RAW_BLOCK: 16,
                    sexpr: 17,
                    CLOSE_RAW_BLOCK: 18,
                    openBlock: 19,
                    block_option0: 20,
                    closeBlock: 21,
                    openInverse: 22,
                    block_option1: 23,
                    OPEN_BLOCK: 24,
                    CLOSE: 25,
                    OPEN_INVERSE: 26,
                    inverseAndProgram: 27,
                    INVERSE: 28,
                    OPEN_ENDBLOCK: 29,
                    path: 30,
                    OPEN: 31,
                    OPEN_UNESCAPED: 32,
                    CLOSE_UNESCAPED: 33,
                    OPEN_PARTIAL: 34,
                    partialName: 35,
                    param: 36,
                    partial_option0: 37,
                    partial_option1: 38,
                    sexpr_repetition0: 39,
                    sexpr_option0: 40,
                    dataName: 41,
                    STRING: 42,
                    NUMBER: 43,
                    BOOLEAN: 44,
                    OPEN_SEXPR: 45,
                    CLOSE_SEXPR: 46,
                    hash: 47,
                    hash_repetition_plus0: 48,
                    hashSegment: 49,
                    ID: 50,
                    EQUALS: 51,
                    DATA: 52,
                    pathSegments: 53,
                    SEP: 54,
                    $accept: 0,
                    $end: 1
                },
                terminals_: {
                    2: "error",
                    5: "EOF",
                    12: "CONTENT",
                    13: "COMMENT",
                    15: "END_RAW_BLOCK",
                    16: "OPEN_RAW_BLOCK",
                    18: "CLOSE_RAW_BLOCK",
                    24: "OPEN_BLOCK",
                    25: "CLOSE",
                    26: "OPEN_INVERSE",
                    28: "INVERSE",
                    29: "OPEN_ENDBLOCK",
                    31: "OPEN",
                    32: "OPEN_UNESCAPED",
                    33: "CLOSE_UNESCAPED",
                    34: "OPEN_PARTIAL",
                    42: "STRING",
                    43: "NUMBER",
                    44: "BOOLEAN",
                    45: "OPEN_SEXPR",
                    46: "CLOSE_SEXPR",
                    50: "ID",
                    51: "EQUALS",
                    52: "DATA",
                    54: "SEP"
                },
                productions_: [0, [3, 2], [4, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [7, 1], [10, 3], [14, 3], [9, 4], [9, 4], [19, 3], [22, 3], [27, 2], [21, 3], [8, 3], [8, 3], [11, 5], [11, 4], [17, 3], [17, 1], [36, 1], [36, 1], [36, 1], [36, 1], [36, 1], [36, 3], [47, 1], [49, 3], [35, 1], [35, 1], [35, 1], [41, 2], [30, 1], [53, 3], [53, 1], [6, 0], [6, 2], [20, 0], [20, 1], [23, 0], [23, 1], [37, 0], [37, 1], [38, 0], [38, 1], [39, 0], [39, 2], [40, 0], [40, 1], [48, 1], [48, 2]],
                performAction: function(e, t, n, r, i, o, s) {
                    var a = o.length - 1;
                    switch (i) {
                    case 1:
                        return r.prepareProgram(o[a - 1].statements, !0),
                        o[a - 1];
                    case 2:
                        this.$ = new r.ProgramNode(r.prepareProgram(o[a]),{},this._$);
                        break;
                    case 3:
                        this.$ = o[a];
                        break;
                    case 4:
                        this.$ = o[a];
                        break;
                    case 5:
                        this.$ = o[a];
                        break;
                    case 6:
                        this.$ = o[a];
                        break;
                    case 7:
                        this.$ = new r.ContentNode(o[a],this._$);
                        break;
                    case 8:
                        this.$ = new r.CommentNode(o[a],this._$);
                        break;
                    case 9:
                        this.$ = new r.RawBlockNode(o[a - 2],o[a - 1],o[a],this._$);
                        break;
                    case 10:
                        this.$ = new r.MustacheNode(o[a - 1],null,"","",this._$);
                        break;
                    case 11:
                        this.$ = r.prepareBlock(o[a - 3], o[a - 2], o[a - 1], o[a], !1, this._$);
                        break;
                    case 12:
                        this.$ = r.prepareBlock(o[a - 3], o[a - 2], o[a - 1], o[a], !0, this._$);
                        break;
                    case 13:
                        this.$ = new r.MustacheNode(o[a - 1],null,o[a - 2],r.stripFlags(o[a - 2], o[a]),this._$);
                        break;
                    case 14:
                        this.$ = new r.MustacheNode(o[a - 1],null,o[a - 2],r.stripFlags(o[a - 2], o[a]),this._$);
                        break;
                    case 15:
                        this.$ = {
                            strip: r.stripFlags(o[a - 1], o[a - 1]),
                            program: o[a]
                        };
                        break;
                    case 16:
                        this.$ = {
                            path: o[a - 1],
                            strip: r.stripFlags(o[a - 2], o[a])
                        };
                        break;
                    case 17:
                        this.$ = new r.MustacheNode(o[a - 1],null,o[a - 2],r.stripFlags(o[a - 2], o[a]),this._$);
                        break;
                    case 18:
                        this.$ = new r.MustacheNode(o[a - 1],null,o[a - 2],r.stripFlags(o[a - 2], o[a]),this._$);
                        break;
                    case 19:
                        this.$ = new r.PartialNode(o[a - 3],o[a - 2],o[a - 1],r.stripFlags(o[a - 4], o[a]),this._$);
                        break;
                    case 20:
                        this.$ = new r.PartialNode(o[a - 2],void 0,o[a - 1],r.stripFlags(o[a - 3], o[a]),this._$);
                        break;
                    case 21:
                        this.$ = new r.SexprNode([o[a - 2]].concat(o[a - 1]),o[a],this._$);
                        break;
                    case 22:
                        this.$ = new r.SexprNode([o[a]],null,this._$);
                        break;
                    case 23:
                        this.$ = o[a];
                        break;
                    case 24:
                        this.$ = new r.StringNode(o[a],this._$);
                        break;
                    case 25:
                        this.$ = new r.NumberNode(o[a],this._$);
                        break;
                    case 26:
                        this.$ = new r.BooleanNode(o[a],this._$);
                        break;
                    case 27:
                        this.$ = o[a];
                        break;
                    case 28:
                        o[a - 1].isHelper = !0,
                        this.$ = o[a - 1];
                        break;
                    case 29:
                        this.$ = new r.HashNode(o[a],this._$);
                        break;
                    case 30:
                        this.$ = [o[a - 2], o[a]];
                        break;
                    case 31:
                        this.$ = new r.PartialNameNode(o[a],this._$);
                        break;
                    case 32:
                        this.$ = new r.PartialNameNode(new r.StringNode(o[a],this._$),this._$);
                        break;
                    case 33:
                        this.$ = new r.PartialNameNode(new r.NumberNode(o[a],this._$));
                        break;
                    case 34:
                        this.$ = new r.DataNode(o[a],this._$);
                        break;
                    case 35:
                        this.$ = new r.IdNode(o[a],this._$);
                        break;
                    case 36:
                        o[a - 2].push({
                            part: o[a],
                            separator: o[a - 1]
                        }),
                        this.$ = o[a - 2];
                        break;
                    case 37:
                        this.$ = [{
                            part: o[a]
                        }];
                        break;
                    case 38:
                        this.$ = [];
                        break;
                    case 39:
                        o[a - 1].push(o[a]);
                        break;
                    case 48:
                        this.$ = [];
                        break;
                    case 49:
                        o[a - 1].push(o[a]);
                        break;
                    case 52:
                        this.$ = [o[a]];
                        break;
                    case 53:
                        o[a - 1].push(o[a])
                    }
                },
                table: [{
                    3: 1,
                    4: 2,
                    5: [2, 38],
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    1: [3]
                }, {
                    5: [1, 4]
                }, {
                    5: [2, 2],
                    7: 5,
                    8: 6,
                    9: 7,
                    10: 8,
                    11: 9,
                    12: [1, 10],
                    13: [1, 11],
                    14: 16,
                    16: [1, 20],
                    19: 14,
                    22: 15,
                    24: [1, 18],
                    26: [1, 19],
                    28: [2, 2],
                    29: [2, 2],
                    31: [1, 12],
                    32: [1, 13],
                    34: [1, 17]
                }, {
                    1: [2, 1]
                }, {
                    5: [2, 39],
                    12: [2, 39],
                    13: [2, 39],
                    16: [2, 39],
                    24: [2, 39],
                    26: [2, 39],
                    28: [2, 39],
                    29: [2, 39],
                    31: [2, 39],
                    32: [2, 39],
                    34: [2, 39]
                }, {
                    5: [2, 3],
                    12: [2, 3],
                    13: [2, 3],
                    16: [2, 3],
                    24: [2, 3],
                    26: [2, 3],
                    28: [2, 3],
                    29: [2, 3],
                    31: [2, 3],
                    32: [2, 3],
                    34: [2, 3]
                }, {
                    5: [2, 4],
                    12: [2, 4],
                    13: [2, 4],
                    16: [2, 4],
                    24: [2, 4],
                    26: [2, 4],
                    28: [2, 4],
                    29: [2, 4],
                    31: [2, 4],
                    32: [2, 4],
                    34: [2, 4]
                }, {
                    5: [2, 5],
                    12: [2, 5],
                    13: [2, 5],
                    16: [2, 5],
                    24: [2, 5],
                    26: [2, 5],
                    28: [2, 5],
                    29: [2, 5],
                    31: [2, 5],
                    32: [2, 5],
                    34: [2, 5]
                }, {
                    5: [2, 6],
                    12: [2, 6],
                    13: [2, 6],
                    16: [2, 6],
                    24: [2, 6],
                    26: [2, 6],
                    28: [2, 6],
                    29: [2, 6],
                    31: [2, 6],
                    32: [2, 6],
                    34: [2, 6]
                }, {
                    5: [2, 7],
                    12: [2, 7],
                    13: [2, 7],
                    16: [2, 7],
                    24: [2, 7],
                    26: [2, 7],
                    28: [2, 7],
                    29: [2, 7],
                    31: [2, 7],
                    32: [2, 7],
                    34: [2, 7]
                }, {
                    5: [2, 8],
                    12: [2, 8],
                    13: [2, 8],
                    16: [2, 8],
                    24: [2, 8],
                    26: [2, 8],
                    28: [2, 8],
                    29: [2, 8],
                    31: [2, 8],
                    32: [2, 8],
                    34: [2, 8]
                }, {
                    17: 21,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    17: 27,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    4: 28,
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    28: [2, 38],
                    29: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    4: 29,
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    28: [2, 38],
                    29: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    12: [1, 30]
                }, {
                    30: 32,
                    35: 31,
                    42: [1, 33],
                    43: [1, 34],
                    50: [1, 26],
                    53: 24
                }, {
                    17: 35,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    17: 36,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    17: 37,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [1, 38]
                }, {
                    18: [2, 48],
                    25: [2, 48],
                    33: [2, 48],
                    39: 39,
                    42: [2, 48],
                    43: [2, 48],
                    44: [2, 48],
                    45: [2, 48],
                    46: [2, 48],
                    50: [2, 48],
                    52: [2, 48]
                }, {
                    18: [2, 22],
                    25: [2, 22],
                    33: [2, 22],
                    46: [2, 22]
                }, {
                    18: [2, 35],
                    25: [2, 35],
                    33: [2, 35],
                    42: [2, 35],
                    43: [2, 35],
                    44: [2, 35],
                    45: [2, 35],
                    46: [2, 35],
                    50: [2, 35],
                    52: [2, 35],
                    54: [1, 40]
                }, {
                    30: 41,
                    50: [1, 26],
                    53: 24
                }, {
                    18: [2, 37],
                    25: [2, 37],
                    33: [2, 37],
                    42: [2, 37],
                    43: [2, 37],
                    44: [2, 37],
                    45: [2, 37],
                    46: [2, 37],
                    50: [2, 37],
                    52: [2, 37],
                    54: [2, 37]
                }, {
                    33: [1, 42]
                }, {
                    20: 43,
                    27: 44,
                    28: [1, 45],
                    29: [2, 40]
                }, {
                    23: 46,
                    27: 47,
                    28: [1, 45],
                    29: [2, 42]
                }, {
                    15: [1, 48]
                }, {
                    25: [2, 46],
                    30: 51,
                    36: 49,
                    38: 50,
                    41: 55,
                    42: [1, 52],
                    43: [1, 53],
                    44: [1, 54],
                    45: [1, 56],
                    47: 57,
                    48: 58,
                    49: 60,
                    50: [1, 59],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [2, 31],
                    42: [2, 31],
                    43: [2, 31],
                    44: [2, 31],
                    45: [2, 31],
                    50: [2, 31],
                    52: [2, 31]
                }, {
                    25: [2, 32],
                    42: [2, 32],
                    43: [2, 32],
                    44: [2, 32],
                    45: [2, 32],
                    50: [2, 32],
                    52: [2, 32]
                }, {
                    25: [2, 33],
                    42: [2, 33],
                    43: [2, 33],
                    44: [2, 33],
                    45: [2, 33],
                    50: [2, 33],
                    52: [2, 33]
                }, {
                    25: [1, 61]
                }, {
                    25: [1, 62]
                }, {
                    18: [1, 63]
                }, {
                    5: [2, 17],
                    12: [2, 17],
                    13: [2, 17],
                    16: [2, 17],
                    24: [2, 17],
                    26: [2, 17],
                    28: [2, 17],
                    29: [2, 17],
                    31: [2, 17],
                    32: [2, 17],
                    34: [2, 17]
                }, {
                    18: [2, 50],
                    25: [2, 50],
                    30: 51,
                    33: [2, 50],
                    36: 65,
                    40: 64,
                    41: 55,
                    42: [1, 52],
                    43: [1, 53],
                    44: [1, 54],
                    45: [1, 56],
                    46: [2, 50],
                    47: 66,
                    48: 58,
                    49: 60,
                    50: [1, 59],
                    52: [1, 25],
                    53: 24
                }, {
                    50: [1, 67]
                }, {
                    18: [2, 34],
                    25: [2, 34],
                    33: [2, 34],
                    42: [2, 34],
                    43: [2, 34],
                    44: [2, 34],
                    45: [2, 34],
                    46: [2, 34],
                    50: [2, 34],
                    52: [2, 34]
                }, {
                    5: [2, 18],
                    12: [2, 18],
                    13: [2, 18],
                    16: [2, 18],
                    24: [2, 18],
                    26: [2, 18],
                    28: [2, 18],
                    29: [2, 18],
                    31: [2, 18],
                    32: [2, 18],
                    34: [2, 18]
                }, {
                    21: 68,
                    29: [1, 69]
                }, {
                    29: [2, 41]
                }, {
                    4: 70,
                    6: 3,
                    12: [2, 38],
                    13: [2, 38],
                    16: [2, 38],
                    24: [2, 38],
                    26: [2, 38],
                    29: [2, 38],
                    31: [2, 38],
                    32: [2, 38],
                    34: [2, 38]
                }, {
                    21: 71,
                    29: [1, 69]
                }, {
                    29: [2, 43]
                }, {
                    5: [2, 9],
                    12: [2, 9],
                    13: [2, 9],
                    16: [2, 9],
                    24: [2, 9],
                    26: [2, 9],
                    28: [2, 9],
                    29: [2, 9],
                    31: [2, 9],
                    32: [2, 9],
                    34: [2, 9]
                }, {
                    25: [2, 44],
                    37: 72,
                    47: 73,
                    48: 58,
                    49: 60,
                    50: [1, 74]
                }, {
                    25: [1, 75]
                }, {
                    18: [2, 23],
                    25: [2, 23],
                    33: [2, 23],
                    42: [2, 23],
                    43: [2, 23],
                    44: [2, 23],
                    45: [2, 23],
                    46: [2, 23],
                    50: [2, 23],
                    52: [2, 23]
                }, {
                    18: [2, 24],
                    25: [2, 24],
                    33: [2, 24],
                    42: [2, 24],
                    43: [2, 24],
                    44: [2, 24],
                    45: [2, 24],
                    46: [2, 24],
                    50: [2, 24],
                    52: [2, 24]
                }, {
                    18: [2, 25],
                    25: [2, 25],
                    33: [2, 25],
                    42: [2, 25],
                    43: [2, 25],
                    44: [2, 25],
                    45: [2, 25],
                    46: [2, 25],
                    50: [2, 25],
                    52: [2, 25]
                }, {
                    18: [2, 26],
                    25: [2, 26],
                    33: [2, 26],
                    42: [2, 26],
                    43: [2, 26],
                    44: [2, 26],
                    45: [2, 26],
                    46: [2, 26],
                    50: [2, 26],
                    52: [2, 26]
                }, {
                    18: [2, 27],
                    25: [2, 27],
                    33: [2, 27],
                    42: [2, 27],
                    43: [2, 27],
                    44: [2, 27],
                    45: [2, 27],
                    46: [2, 27],
                    50: [2, 27],
                    52: [2, 27]
                }, {
                    17: 76,
                    30: 22,
                    41: 23,
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [2, 47]
                }, {
                    18: [2, 29],
                    25: [2, 29],
                    33: [2, 29],
                    46: [2, 29],
                    49: 77,
                    50: [1, 74]
                }, {
                    18: [2, 37],
                    25: [2, 37],
                    33: [2, 37],
                    42: [2, 37],
                    43: [2, 37],
                    44: [2, 37],
                    45: [2, 37],
                    46: [2, 37],
                    50: [2, 37],
                    51: [1, 78],
                    52: [2, 37],
                    54: [2, 37]
                }, {
                    18: [2, 52],
                    25: [2, 52],
                    33: [2, 52],
                    46: [2, 52],
                    50: [2, 52]
                }, {
                    12: [2, 13],
                    13: [2, 13],
                    16: [2, 13],
                    24: [2, 13],
                    26: [2, 13],
                    28: [2, 13],
                    29: [2, 13],
                    31: [2, 13],
                    32: [2, 13],
                    34: [2, 13]
                }, {
                    12: [2, 14],
                    13: [2, 14],
                    16: [2, 14],
                    24: [2, 14],
                    26: [2, 14],
                    28: [2, 14],
                    29: [2, 14],
                    31: [2, 14],
                    32: [2, 14],
                    34: [2, 14]
                }, {
                    12: [2, 10]
                }, {
                    18: [2, 21],
                    25: [2, 21],
                    33: [2, 21],
                    46: [2, 21]
                }, {
                    18: [2, 49],
                    25: [2, 49],
                    33: [2, 49],
                    42: [2, 49],
                    43: [2, 49],
                    44: [2, 49],
                    45: [2, 49],
                    46: [2, 49],
                    50: [2, 49],
                    52: [2, 49]
                }, {
                    18: [2, 51],
                    25: [2, 51],
                    33: [2, 51],
                    46: [2, 51]
                }, {
                    18: [2, 36],
                    25: [2, 36],
                    33: [2, 36],
                    42: [2, 36],
                    43: [2, 36],
                    44: [2, 36],
                    45: [2, 36],
                    46: [2, 36],
                    50: [2, 36],
                    52: [2, 36],
                    54: [2, 36]
                }, {
                    5: [2, 11],
                    12: [2, 11],
                    13: [2, 11],
                    16: [2, 11],
                    24: [2, 11],
                    26: [2, 11],
                    28: [2, 11],
                    29: [2, 11],
                    31: [2, 11],
                    32: [2, 11],
                    34: [2, 11]
                }, {
                    30: 79,
                    50: [1, 26],
                    53: 24
                }, {
                    29: [2, 15]
                }, {
                    5: [2, 12],
                    12: [2, 12],
                    13: [2, 12],
                    16: [2, 12],
                    24: [2, 12],
                    26: [2, 12],
                    28: [2, 12],
                    29: [2, 12],
                    31: [2, 12],
                    32: [2, 12],
                    34: [2, 12]
                }, {
                    25: [1, 80]
                }, {
                    25: [2, 45]
                }, {
                    51: [1, 78]
                }, {
                    5: [2, 20],
                    12: [2, 20],
                    13: [2, 20],
                    16: [2, 20],
                    24: [2, 20],
                    26: [2, 20],
                    28: [2, 20],
                    29: [2, 20],
                    31: [2, 20],
                    32: [2, 20],
                    34: [2, 20]
                }, {
                    46: [1, 81]
                }, {
                    18: [2, 53],
                    25: [2, 53],
                    33: [2, 53],
                    46: [2, 53],
                    50: [2, 53]
                }, {
                    30: 51,
                    36: 82,
                    41: 55,
                    42: [1, 52],
                    43: [1, 53],
                    44: [1, 54],
                    45: [1, 56],
                    50: [1, 26],
                    52: [1, 25],
                    53: 24
                }, {
                    25: [1, 83]
                }, {
                    5: [2, 19],
                    12: [2, 19],
                    13: [2, 19],
                    16: [2, 19],
                    24: [2, 19],
                    26: [2, 19],
                    28: [2, 19],
                    29: [2, 19],
                    31: [2, 19],
                    32: [2, 19],
                    34: [2, 19]
                }, {
                    18: [2, 28],
                    25: [2, 28],
                    33: [2, 28],
                    42: [2, 28],
                    43: [2, 28],
                    44: [2, 28],
                    45: [2, 28],
                    46: [2, 28],
                    50: [2, 28],
                    52: [2, 28]
                }, {
                    18: [2, 30],
                    25: [2, 30],
                    33: [2, 30],
                    46: [2, 30],
                    50: [2, 30]
                }, {
                    5: [2, 16],
                    12: [2, 16],
                    13: [2, 16],
                    16: [2, 16],
                    24: [2, 16],
                    26: [2, 16],
                    28: [2, 16],
                    29: [2, 16],
                    31: [2, 16],
                    32: [2, 16],
                    34: [2, 16]
                }],
                defaultActions: {
                    4: [2, 1],
                    44: [2, 41],
                    47: [2, 43],
                    57: [2, 47],
                    63: [2, 10],
                    70: [2, 15],
                    73: [2, 45]
                },
                parseError: function(e, t) {
                    throw new Error(e)
                },
                parse: function(e) {
                    function t() {
                        var e;
                        return e = n.lexer.lex() || 1,
                        "number" != typeof e && (e = n.symbols_[e] || e),
                        e
                    }
                    var n = this
                      , r = [0]
                      , i = [null]
                      , o = []
                      , s = this.table
                      , a = ""
                      , l = 0
                      , u = 0
                      , c = 0;
                    this.lexer.setInput(e),
                    this.lexer.yy = this.yy,
                    this.yy.lexer = this.lexer,
                    this.yy.parser = this,
                    "undefined" == typeof this.lexer.yylloc && (this.lexer.yylloc = {});
                    var h = this.lexer.yylloc;
                    o.push(h);
                    var d = this.lexer.options && this.lexer.options.ranges;
                    "function" == typeof this.yy.parseError && (this.parseError = this.yy.parseError);
                    for (var f, p, m, g, v, y, b, x, w, _ = {}; ; ) {
                        if (m = r[r.length - 1],
                        this.defaultActions[m] ? g = this.defaultActions[m] : ((null === f || "undefined" == typeof f) && (f = t()),
                        g = s[m] && s[m][f]),
                        "undefined" == typeof g || !g.length || !g[0]) {
                            var k = "";
                            if (!c) {
                                w = [];
                                for (y in s[m])
                                    this.terminals_[y] && y > 2 && w.push("'" + this.terminals_[y] + "'");
                                k = this.lexer.showPosition ? "Parse error on line " + (l + 1) + ":\n" + this.lexer.showPosition() + "\nExpecting " + w.join(", ") + ", got '" + (this.terminals_[f] || f) + "'" : "Parse error on line " + (l + 1) + ": Unexpected " + (1 == f ? "end of input" : "'" + (this.terminals_[f] || f) + "'"),
                                this.parseError(k, {
                                    text: this.lexer.match,
                                    token: this.terminals_[f] || f,
                                    line: this.lexer.yylineno,
                                    loc: h,
                                    expected: w
                                })
                            }
                        }
                        if (g[0]instanceof Array && g.length > 1)
                            throw new Error("Parse Error: multiple actions possible at state: " + m + ", token: " + f);
                        switch (g[0]) {
                        case 1:
                            r.push(f),
                            i.push(this.lexer.yytext),
                            o.push(this.lexer.yylloc),
                            r.push(g[1]),
                            f = null,
                            p ? (f = p,
                            p = null) : (u = this.lexer.yyleng,
                            a = this.lexer.yytext,
                            l = this.lexer.yylineno,
                            h = this.lexer.yylloc,
                            c > 0 && c--);
                            break;
                        case 2:
                            if (b = this.productions_[g[1]][1],
                            _.$ = i[i.length - b],
                            _._$ = {
                                first_line: o[o.length - (b || 1)].first_line,
                                last_line: o[o.length - 1].last_line,
                                first_column: o[o.length - (b || 1)].first_column,
                                last_column: o[o.length - 1].last_column
                            },
                            d && (_._$.range = [o[o.length - (b || 1)].range[0], o[o.length - 1].range[1]]),
                            v = this.performAction.call(_, a, u, l, this.yy, g[1], i, o),
                            "undefined" != typeof v)
                                return v;
                            b && (r = r.slice(0, -1 * b * 2),
                            i = i.slice(0, -1 * b),
                            o = o.slice(0, -1 * b)),
                            r.push(this.productions_[g[1]][0]),
                            i.push(_.$),
                            o.push(_._$),
                            x = s[r[r.length - 2]][r[r.length - 1]],
                            r.push(x);
                            break;
                        case 3:
                            return !0
                        }
                    }
                    return !0
                }
            }
              , n = function() {
                var e = {
                    EOF: 1,
                    parseError: function(e, t) {
                        if (!this.yy.parser)
                            throw new Error(e);
                        this.yy.parser.parseError(e, t)
                    },
                    setInput: function(e) {
                        return this._input = e,
                        this._more = this._less = this.done = !1,
                        this.yylineno = this.yyleng = 0,
                        this.yytext = this.matched = this.match = "",
                        this.conditionStack = ["INITIAL"],
                        this.yylloc = {
                            first_line: 1,
                            first_column: 0,
                            last_line: 1,
                            last_column: 0
                        },
                        this.options.ranges && (this.yylloc.range = [0, 0]),
                        this.offset = 0,
                        this
                    },
                    input: function() {
                        var e = this._input[0];
                        this.yytext += e,
                        this.yyleng++,
                        this.offset++,
                        this.match += e,
                        this.matched += e;
                        var t = e.match(/(?:\r\n?|\n).*/g);
                        return t ? (this.yylineno++,
                        this.yylloc.last_line++) : this.yylloc.last_column++,
                        this.options.ranges && this.yylloc.range[1]++,
                        this._input = this._input.slice(1),
                        e
                    },
                    unput: function(e) {
                        var t = e.length
                          , n = e.split(/(?:\r\n?|\n)/g);
                        this._input = e + this._input,
                        this.yytext = this.yytext.substr(0, this.yytext.length - t - 1),
                        this.offset -= t;
                        var r = this.match.split(/(?:\r\n?|\n)/g);
                        this.match = this.match.substr(0, this.match.length - 1),
                        this.matched = this.matched.substr(0, this.matched.length - 1),
                        n.length - 1 && (this.yylineno -= n.length - 1);
                        var i = this.yylloc.range;
                        return this.yylloc = {
                            first_line: this.yylloc.first_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.first_column,
                            last_column: n ? (n.length === r.length ? this.yylloc.first_column : 0) + r[r.length - n.length].length - n[0].length : this.yylloc.first_column - t
                        },
                        this.options.ranges && (this.yylloc.range = [i[0], i[0] + this.yyleng - t]),
                        this
                    },
                    more: function() {
                        return this._more = !0,
                        this
                    },
                    less: function(e) {
                        this.unput(this.match.slice(e))
                    },
                    pastInput: function() {
                        var e = this.matched.substr(0, this.matched.length - this.match.length);
                        return (e.length > 20 ? "..." : "") + e.substr(-20).replace(/\n/g, "")
                    },
                    upcomingInput: function() {
                        var e = this.match;
                        return e.length < 20 && (e += this._input.substr(0, 20 - e.length)),
                        (e.substr(0, 20) + (e.length > 20 ? "..." : "")).replace(/\n/g, "")
                    },
                    showPosition: function() {
                        var e = this.pastInput()
                          , t = new Array(e.length + 1).join("-");
                        return e + this.upcomingInput() + "\n" + t + "^"
                    },
                    next: function() {
                        if (this.done)
                            return this.EOF;
                        this._input || (this.done = !0);
                        var e, t, n, r, i;
                        this._more || (this.yytext = "",
                        this.match = "");
                        for (var o = this._currentRules(), s = 0; s < o.length && (n = this._input.match(this.rules[o[s]]),
                        !n || t && !(n[0].length > t[0].length) || (t = n,
                        r = s,
                        this.options.flex)); s++)
                            ;
                        return t ? (i = t[0].match(/(?:\r\n?|\n).*/g),
                        i && (this.yylineno += i.length),
                        this.yylloc = {
                            first_line: this.yylloc.last_line,
                            last_line: this.yylineno + 1,
                            first_column: this.yylloc.last_column,
                            last_column: i ? i[i.length - 1].length - i[i.length - 1].match(/\r?\n?/)[0].length : this.yylloc.last_column + t[0].length
                        },
                        this.yytext += t[0],
                        this.match += t[0],
                        this.matches = t,
                        this.yyleng = this.yytext.length,
                        this.options.ranges && (this.yylloc.range = [this.offset, this.offset += this.yyleng]),
                        this._more = !1,
                        this._input = this._input.slice(t[0].length),
                        this.matched += t[0],
                        e = this.performAction.call(this, this.yy, this, o[r], this.conditionStack[this.conditionStack.length - 1]),
                        this.done && this._input && (this.done = !1),
                        e ? e : void 0) : "" === this._input ? this.EOF : this.parseError("Lexical error on line " + (this.yylineno + 1) + ". Unrecognized text.\n" + this.showPosition(), {
                            text: "",
                            token: null,
                            line: this.yylineno
                        })
                    },
                    lex: function() {
                        var e = this.next();
                        return "undefined" != typeof e ? e : this.lex()
                    },
                    begin: function(e) {
                        this.conditionStack.push(e)
                    },
                    popState: function() {
                        return this.conditionStack.pop()
                    },
                    _currentRules: function() {
                        return this.conditions[this.conditionStack[this.conditionStack.length - 1]].rules
                    },
                    topState: function() {
                        return this.conditionStack[this.conditionStack.length - 2]
                    },
                    pushState: function(e) {
                        this.begin(e)
                    }
                };
                return e.options = {},
                e.performAction = function(e, t, n, r) {
                    function i(e, n) {
                        return t.yytext = t.yytext.substr(e, t.yyleng - n)
                    }
                    switch (n) {
                    case 0:
                        if ("\\\\" === t.yytext.slice(-2) ? (i(0, 1),
                        this.begin("mu")) : "\\" === t.yytext.slice(-1) ? (i(0, 1),
                        this.begin("emu")) : this.begin("mu"),
                        t.yytext)
                            return 12;
                        break;
                    case 1:
                        return 12;
                    case 2:
                        return this.popState(),
                        12;
                    case 3:
                        return t.yytext = t.yytext.substr(5, t.yyleng - 9),
                        this.popState(),
                        15;
                    case 4:
                        return 12;
                    case 5:
                        return i(0, 4),
                        this.popState(),
                        13;
                    case 6:
                        return 45;
                    case 7:
                        return 46;
                    case 8:
                        return 16;
                    case 9:
                        return this.popState(),
                        this.begin("raw"),
                        18;
                    case 10:
                        return 34;
                    case 11:
                        return 24;
                    case 12:
                        return 29;
                    case 13:
                        return this.popState(),
                        28;
                    case 14:
                        return this.popState(),
                        28;
                    case 15:
                        return 26;
                    case 16:
                        return 26;
                    case 17:
                        return 32;
                    case 18:
                        return 31;
                    case 19:
                        this.popState(),
                        this.begin("com");
                        break;
                    case 20:
                        return i(3, 5),
                        this.popState(),
                        13;
                    case 21:
                        return 31;
                    case 22:
                        return 51;
                    case 23:
                        return 50;
                    case 24:
                        return 50;
                    case 25:
                        return 54;
                    case 26:
                        break;
                    case 27:
                        return this.popState(),
                        33;
                    case 28:
                        return this.popState(),
                        25;
                    case 29:
                        return t.yytext = i(1, 2).replace(/\\"/g, '"'),
                        42;
                    case 30:
                        return t.yytext = i(1, 2).replace(/\\'/g, "'"),
                        42;
                    case 31:
                        return 52;
                    case 32:
                        return 44;
                    case 33:
                        return 44;
                    case 34:
                        return 43;
                    case 35:
                        return 50;
                    case 36:
                        return t.yytext = i(1, 2),
                        50;
                    case 37:
                        return "INVALID";
                    case 38:
                        return 5
                    }
                }
                ,
                e.rules = [/^(?:[^\x00]*?(?=(\{\{)))/, /^(?:[^\x00]+)/, /^(?:[^\x00]{2,}?(?=(\{\{|\\\{\{|\\\\\{\{|$)))/, /^(?:\{\{\{\{\/[^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=[=}\s\/.])\}\}\}\})/, /^(?:[^\x00]*?(?=(\{\{\{\{\/)))/, /^(?:[\s\S]*?--\}\})/, /^(?:\()/, /^(?:\))/, /^(?:\{\{\{\{)/, /^(?:\}\}\}\})/, /^(?:\{\{(~)?>)/, /^(?:\{\{(~)?#)/, /^(?:\{\{(~)?\/)/, /^(?:\{\{(~)?\^\s*(~)?\}\})/, /^(?:\{\{(~)?\s*else\s*(~)?\}\})/, /^(?:\{\{(~)?\^)/, /^(?:\{\{(~)?\s*else\b)/, /^(?:\{\{(~)?\{)/, /^(?:\{\{(~)?&)/, /^(?:\{\{!--)/, /^(?:\{\{![\s\S]*?\}\})/, /^(?:\{\{(~)?)/, /^(?:=)/, /^(?:\.\.)/, /^(?:\.(?=([=~}\s\/.)])))/, /^(?:[\/.])/, /^(?:\s+)/, /^(?:\}(~)?\}\})/, /^(?:(~)?\}\})/, /^(?:"(\\["]|[^"])*")/, /^(?:'(\\[']|[^'])*')/, /^(?:@)/, /^(?:true(?=([~}\s)])))/, /^(?:false(?=([~}\s)])))/, /^(?:-?[0-9]+(?:\.[0-9]+)?(?=([~}\s)])))/, /^(?:([^\s!"#%-,\.\/;->@\[-\^`\{-~]+(?=([=~}\s\/.)]))))/, /^(?:\[[^\]]*\])/, /^(?:.)/, /^(?:$)/],
                e.conditions = {
                    mu: {
                        rules: [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38],
                        inclusive: !1
                    },
                    emu: {
                        rules: [2],
                        inclusive: !1
                    },
                    com: {
                        rules: [5],
                        inclusive: !1
                    },
                    raw: {
                        rules: [3, 4],
                        inclusive: !1
                    },
                    INITIAL: {
                        rules: [0, 1, 38],
                        inclusive: !0
                    }
                },
                e
            }();
            return t.lexer = n,
            e.prototype = t,
            t.Parser = e,
            new e
        }();
        return e = t
    }()
      , l = function(e) {
        "use strict";
        function t(e, t) {
            return {
                left: "~" === e.charAt(2),
                right: "~" === t.charAt(t.length - 3)
            }
        }
        function n(e, t, n, r, l, c) {
            if (e.sexpr.id.original !== r.path.original)
                throw new u(e.sexpr.id.original + " doesn't match " + r.path.original,e);
            var h = n && n.program
              , d = {
                left: e.strip.left,
                right: r.strip.right,
                openStandalone: o(t.statements),
                closeStandalone: i((h || t).statements)
            };
            if (e.strip.right && s(t.statements, null, !0),
            h) {
                var f = n.strip;
                f.left && a(t.statements, null, !0),
                f.right && s(h.statements, null, !0),
                r.strip.left && a(h.statements, null, !0),
                i(t.statements) && o(h.statements) && (a(t.statements),
                s(h.statements))
            } else
                r.strip.left && a(t.statements, null, !0);
            return l ? new this.BlockNode(e,h,t,d,c) : new this.BlockNode(e,t,h,d,c)
        }
        function r(e, t) {
            for (var n = 0, r = e.length; r > n; n++) {
                var l = e[n]
                  , u = l.strip;
                if (u) {
                    var c = i(e, n, t, "partial" === l.type)
                      , h = o(e, n, t)
                      , d = u.openStandalone && c
                      , f = u.closeStandalone && h
                      , p = u.inlineStandalone && c && h;
                    u.right && s(e, n, !0),
                    u.left && a(e, n, !0),
                    p && (s(e, n),
                    a(e, n) && "partial" === l.type && (l.indent = /([ \t]+$)/.exec(e[n - 1].original) ? RegExp.$1 : "")),
                    d && (s((l.program || l.inverse).statements),
                    a(e, n)),
                    f && (s(e, n),
                    a((l.inverse || l.program).statements))
                }
            }
            return e
        }
        function i(e, t, n) {
            void 0 === t && (t = e.length);
            var r = e[t - 1]
              , i = e[t - 2];
            return r ? "content" === r.type ? (i || !n ? /\r?\n\s*?$/ : /(^|\r?\n)\s*?$/).test(r.original) : void 0 : n
        }
        function o(e, t, n) {
            void 0 === t && (t = -1);
            var r = e[t + 1]
              , i = e[t + 2];
            return r ? "content" === r.type ? (i || !n ? /^\s*?\r?\n/ : /^\s*?(\r?\n|$)/).test(r.original) : void 0 : n
        }
        function s(e, t, n) {
            var r = e[null == t ? 0 : t + 1];
            if (r && "content" === r.type && (n || !r.rightStripped)) {
                var i = r.string;
                r.string = r.string.replace(n ? /^\s+/ : /^[ \t]*\r?\n?/, ""),
                r.rightStripped = r.string !== i
            }
        }
        function a(e, t, n) {
            var r = e[null == t ? e.length - 1 : t - 1];
            if (r && "content" === r.type && (n || !r.leftStripped)) {
                var i = r.string;
                return r.string = r.string.replace(n ? /\s+$/ : /[ \t]+$/, ""),
                r.leftStripped = r.string !== i,
                r.leftStripped
            }
        }
        var l = {}
          , u = e;
        return l.stripFlags = t,
        l.prepareBlock = n,
        l.prepareProgram = r,
        l
    }(n)
      , u = function(e, t, n, r) {
        "use strict";
        function i(e) {
            return e.constructor === a.ProgramNode ? e : (s.yy = c,
            s.parse(e))
        }
        var o = {}
          , s = e
          , a = t
          , l = n
          , u = r.extend;
        o.parser = s;
        var c = {};
        return u(c, l, a),
        o.parse = i,
        o
    }(a, s, l, t)
      , c = function(e, t) {
        "use strict";
        function n() {}
        function r(e, t, n) {
            if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode)
                throw new a("You must pass a string or Handlebars AST to Handlebars.precompile. You passed " + e);
            t = t || {},
            "data"in t || (t.data = !0),
            t.compat && (t.useDepths = !0);
            var r = n.parse(e)
              , i = (new n.Compiler).compile(r, t);
            return (new n.JavaScriptCompiler).compile(i, t)
        }
        function i(e, t, n) {
            function r() {
                var r = n.parse(e)
                  , i = (new n.Compiler).compile(r, t)
                  , o = (new n.JavaScriptCompiler).compile(i, t, void 0, !0);
                return n.template(o)
            }
            if (null == e || "string" != typeof e && e.constructor !== n.AST.ProgramNode)
                throw new a("You must pass a string or Handlebars AST to Handlebars.compile. You passed " + e);
            t = t || {},
            "data"in t || (t.data = !0),
            t.compat && (t.useDepths = !0);
            var i, o = function(e, t) {
                return i || (i = r()),
                i.call(this, e, t)
            };
            return o._setup = function(e) {
                return i || (i = r()),
                i._setup(e)
            }
            ,
            o._child = function(e, t, n) {
                return i || (i = r()),
                i._child(e, t, n)
            }
            ,
            o
        }
        function o(e, t) {
            if (e === t)
                return !0;
            if (l(e) && l(t) && e.length === t.length) {
                for (var n = 0; n < e.length; n++)
                    if (!o(e[n], t[n]))
                        return !1;
                return !0
            }
        }
        var s = {}
          , a = e
          , l = t.isArray
          , u = [].slice;
        return s.Compiler = n,
        n.prototype = {
            compiler: n,
            equals: function(e) {
                var t = this.opcodes.length;
                if (e.opcodes.length !== t)
                    return !1;
                for (var n = 0; t > n; n++) {
                    var r = this.opcodes[n]
                      , i = e.opcodes[n];
                    if (r.opcode !== i.opcode || !o(r.args, i.args))
                        return !1
                }
                for (t = this.children.length,
                n = 0; t > n; n++)
                    if (!this.children[n].equals(e.children[n]))
                        return !1;
                return !0
            },
            guid: 0,
            compile: function(e, t) {
                this.opcodes = [],
                this.children = [],
                this.depths = {
                    list: []
                },
                this.options = t,
                this.stringParams = t.stringParams,
                this.trackIds = t.trackIds;
                var n = this.options.knownHelpers;
                if (this.options.knownHelpers = {
                    helperMissing: !0,
                    blockHelperMissing: !0,
                    each: !0,
                    "if": !0,
                    unless: !0,
                    "with": !0,
                    log: !0,
                    lookup: !0
                },
                n)
                    for (var r in n)
                        this.options.knownHelpers[r] = n[r];
                return this.accept(e)
            },
            accept: function(e) {
                return this[e.type](e)
            },
            program: function(e) {
                for (var t = e.statements, n = 0, r = t.length; r > n; n++)
                    this.accept(t[n]);
                return this.isSimple = 1 === r,
                this.depths.list = this.depths.list.sort(function(e, t) {
                    return e - t
                }),
                this
            },
            compileProgram: function(e) {
                var t, n = (new this.compiler).compile(e, this.options), r = this.guid++;
                this.usePartial = this.usePartial || n.usePartial,
                this.children[r] = n;
                for (var i = 0, o = n.depths.list.length; o > i; i++)
                    t = n.depths.list[i],
                    2 > t || this.addDepth(t - 1);
                return r
            },
            block: function(e) {
                var t = e.mustache
                  , n = e.program
                  , r = e.inverse;
                n && (n = this.compileProgram(n)),
                r && (r = this.compileProgram(r));
                var i = t.sexpr
                  , o = this.classifySexpr(i);
                "helper" === o ? this.helperSexpr(i, n, r) : "simple" === o ? (this.simpleSexpr(i),
                this.opcode("pushProgram", n),
                this.opcode("pushProgram", r),
                this.opcode("emptyHash"),
                this.opcode("blockValue", i.id.original)) : (this.ambiguousSexpr(i, n, r),
                this.opcode("pushProgram", n),
                this.opcode("pushProgram", r),
                this.opcode("emptyHash"),
                this.opcode("ambiguousBlockValue")),
                this.opcode("append")
            },
            hash: function(e) {
                var t, n, r = e.pairs;
                for (this.opcode("pushHash"),
                t = 0,
                n = r.length; n > t; t++)
                    this.pushParam(r[t][1]);
                for (; t--; )
                    this.opcode("assignToHash", r[t][0]);
                this.opcode("popHash")
            },
            partial: function(e) {
                var t = e.partialName;
                this.usePartial = !0,
                e.hash ? this.accept(e.hash) : this.opcode("push", "undefined"),
                e.context ? this.accept(e.context) : (this.opcode("getContext", 0),
                this.opcode("pushContext")),
                this.opcode("invokePartial", t.name, e.indent || ""),
                this.opcode("append")
            },
            content: function(e) {
                e.string && this.opcode("appendContent", e.string)
            },
            mustache: function(e) {
                this.sexpr(e.sexpr),
                e.escaped && !this.options.noEscape ? this.opcode("appendEscaped") : this.opcode("append")
            },
            ambiguousSexpr: function(e, t, n) {
                var r = e.id
                  , i = r.parts[0]
                  , o = null != t || null != n;
                this.opcode("getContext", r.depth),
                this.opcode("pushProgram", t),
                this.opcode("pushProgram", n),
                this.ID(r),
                this.opcode("invokeAmbiguous", i, o)
            },
            simpleSexpr: function(e) {
                var t = e.id;
                "DATA" === t.type ? this.DATA(t) : t.parts.length ? this.ID(t) : (this.addDepth(t.depth),
                this.opcode("getContext", t.depth),
                this.opcode("pushContext")),
                this.opcode("resolvePossibleLambda")
            },
            helperSexpr: function(e, t, n) {
                var r = this.setupFullMustacheParams(e, t, n)
                  , i = e.id
                  , o = i.parts[0];
                if (this.options.knownHelpers[o])
                    this.opcode("invokeKnownHelper", r.length, o);
                else {
                    if (this.options.knownHelpersOnly)
                        throw new a("You specified knownHelpersOnly, but used the unknown helper " + o,e);
                    i.falsy = !0,
                    this.ID(i),
                    this.opcode("invokeHelper", r.length, i.original, i.isSimple)
                }
            },
            sexpr: function(e) {
                var t = this.classifySexpr(e);
                "simple" === t ? this.simpleSexpr(e) : "helper" === t ? this.helperSexpr(e) : this.ambiguousSexpr(e)
            },
            ID: function(e) {
                this.addDepth(e.depth),
                this.opcode("getContext", e.depth);
                var t = e.parts[0];
                t ? this.opcode("lookupOnContext", e.parts, e.falsy, e.isScoped) : this.opcode("pushContext")
            },
            DATA: function(e) {
                this.options.data = !0,
                this.opcode("lookupData", e.id.depth, e.id.parts)
            },
            STRING: function(e) {
                this.opcode("pushString", e.string)
            },
            NUMBER: function(e) {
                this.opcode("pushLiteral", e.number)
            },
            BOOLEAN: function(e) {
                this.opcode("pushLiteral", e.bool)
            },
            comment: function() {},
            opcode: function(e) {
                this.opcodes.push({
                    opcode: e,
                    args: u.call(arguments, 1)
                })
            },
            addDepth: function(e) {
                0 !== e && (this.depths[e] || (this.depths[e] = !0,
                this.depths.list.push(e)))
            },
            classifySexpr: function(e) {
                var t = e.isHelper
                  , n = e.eligibleHelper
                  , r = this.options;
                if (n && !t) {
                    var i = e.id.parts[0];
                    r.knownHelpers[i] ? t = !0 : r.knownHelpersOnly && (n = !1)
                }
                return t ? "helper" : n ? "ambiguous" : "simple"
            },
            pushParams: function(e) {
                for (var t = 0, n = e.length; n > t; t++)
                    this.pushParam(e[t])
            },
            pushParam: function(e) {
                this.stringParams ? (e.depth && this.addDepth(e.depth),
                this.opcode("getContext", e.depth || 0),
                this.opcode("pushStringParam", e.stringModeValue, e.type),
                "sexpr" === e.type && this.sexpr(e)) : (this.trackIds && this.opcode("pushId", e.type, e.idName || e.stringModeValue),
                this.accept(e))
            },
            setupFullMustacheParams: function(e, t, n) {
                var r = e.params;
                return this.pushParams(r),
                this.opcode("pushProgram", t),
                this.opcode("pushProgram", n),
                e.hash ? this.hash(e.hash) : this.opcode("emptyHash"),
                r
            }
        },
        s.precompile = r,
        s.compile = i,
        s
    }(n, t)
      , h = function(e, t) {
        "use strict";
        function n(e) {
            this.value = e
        }
        function r() {}
        var i, o = e.COMPILER_REVISION, s = e.REVISION_CHANGES, a = t;
        r.prototype = {
            nameLookup: function(e, t) {
                return r.isValidJavaScriptVariableName(t) ? e + "." + t : e + "['" + t + "']"
            },
            depthedLookup: function(e) {
                return this.aliases.lookup = "this.lookup",
                'lookup(depths, "' + e + '")'
            },
            compilerInfo: function() {
                var e = o
                  , t = s[e];
                return [e, t]
            },
            appendToBuffer: function(e) {
                return this.environment.isSimple ? "return " + e + ";" : {
                    appendToBuffer: !0,
                    content: e,
                    toString: function() {
                        return "buffer += " + e + ";"
                    }
                }
            },
            initializeBuffer: function() {
                return this.quotedString("")
            },
            namespace: "Handlebars",
            compile: function(e, t, n, r) {
                this.environment = e,
                this.options = t,
                this.stringParams = this.options.stringParams,
                this.trackIds = this.options.trackIds,
                this.precompile = !r,
                this.name = this.environment.name,
                this.isChild = !!n,
                this.context = n || {
                    programs: [],
                    environments: []
                },
                this.preamble(),
                this.stackSlot = 0,
                this.stackVars = [],
                this.aliases = {},
                this.registers = {
                    list: []
                },
                this.hashes = [],
                this.compileStack = [],
                this.inlineStack = [],
                this.compileChildren(e, t),
                this.useDepths = this.useDepths || e.depths.list.length || this.options.compat;
                var i, o, s, l = e.opcodes;
                for (o = 0,
                s = l.length; s > o; o++)
                    i = l[o],
                    this[i.opcode].apply(this, i.args);
                if (this.pushSource(""),
                this.stackSlot || this.inlineStack.length || this.compileStack.length)
                    throw new a("Compile completed with content left on stack");
                var u = this.createFunctionContext(r);
                if (this.isChild)
                    return u;
                var c = {
                    compiler: this.compilerInfo(),
                    main: u
                }
                  , h = this.context.programs;
                for (o = 0,
                s = h.length; s > o; o++)
                    h[o] && (c[o] = h[o]);
                return this.environment.usePartial && (c.usePartial = !0),
                this.options.data && (c.useData = !0),
                this.useDepths && (c.useDepths = !0),
                this.options.compat && (c.compat = !0),
                r || (c.compiler = JSON.stringify(c.compiler),
                c = this.objectLiteral(c)),
                c
            },
            preamble: function() {
                this.lastContext = 0,
                this.source = []
            },
            createFunctionContext: function(e) {
                var t = ""
                  , n = this.stackVars.concat(this.registers.list);
                n.length > 0 && (t += ", " + n.join(", "));
                for (var r in this.aliases)
                    this.aliases.hasOwnProperty(r) && (t += ", " + r + "=" + this.aliases[r]);
                var i = ["depth0", "helpers", "partials", "data"];
                this.useDepths && i.push("depths");
                var o = this.mergeSource(t);
                return e ? (i.push(o),
                Function.apply(this, i)) : "function(" + i.join(",") + ") {\n  " + o + "}"
            },
            mergeSource: function(e) {
                for (var t, n, r = "", i = !this.forceBuffer, o = 0, s = this.source.length; s > o; o++) {
                    var a = this.source[o];
                    a.appendToBuffer ? t = t ? t + "\n    + " + a.content : a.content : (t && (r ? r += "buffer += " + t + ";\n  " : (n = !0,
                    r = t + ";\n  "),
                    t = void 0),
                    r += a + "\n  ",
                    this.environment.isSimple || (i = !1))
                }
                return i ? (t || !r) && (r += "return " + (t || '""') + ";\n") : (e += ", buffer = " + (n ? "" : this.initializeBuffer()),
                r += t ? "return buffer + " + t + ";\n" : "return buffer;\n"),
                e && (r = "var " + e.substring(2) + (n ? "" : ";\n  ") + r),
                r
            },
            blockValue: function(e) {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var t = [this.contextName(0)];
                this.setupParams(e, 0, t);
                var n = this.popStack();
                t.splice(1, 0, n),
                this.push("blockHelperMissing.call(" + t.join(", ") + ")")
            },
            ambiguousBlockValue: function() {
                this.aliases.blockHelperMissing = "helpers.blockHelperMissing";
                var e = [this.contextName(0)];
                this.setupParams("", 0, e, !0),
                this.flushInline();
                var t = this.topStack();
                e.splice(1, 0, t),
                this.pushSource("if (!" + this.lastHelper + ") { " + t + " = blockHelperMissing.call(" + e.join(", ") + "); }")
            },
            appendContent: function(e) {
                this.pendingContent && (e = this.pendingContent + e),
                this.pendingContent = e
            },
            append: function() {
                this.flushInline();
                var e = this.popStack();
                this.pushSource("if (" + e + " != null) { " + this.appendToBuffer(e) + " }"),
                this.environment.isSimple && this.pushSource("else { " + this.appendToBuffer("''") + " }")
            },
            appendEscaped: function() {
                this.aliases.escapeExpression = "this.escapeExpression",
                this.pushSource(this.appendToBuffer("escapeExpression(" + this.popStack() + ")"))
            },
            getContext: function(e) {
                this.lastContext = e
            },
            pushContext: function() {
                this.pushStackLiteral(this.contextName(this.lastContext))
            },
            lookupOnContext: function(e, t, n) {
                var r = 0
                  , i = e.length;
                for (n || !this.options.compat || this.lastContext ? this.pushContext() : this.push(this.depthedLookup(e[r++])); i > r; r++)
                    this.replaceStack(function(n) {
                        var i = this.nameLookup(n, e[r], "context");
                        return t ? " && " + i : " != null ? " + i + " : " + n
                    })
            },
            lookupData: function(e, t) {
                e ? this.pushStackLiteral("this.data(data, " + e + ")") : this.pushStackLiteral("data");
                for (var n = t.length, r = 0; n > r; r++)
                    this.replaceStack(function(e) {
                        return " && " + this.nameLookup(e, t[r], "data")
                    })
            },
            resolvePossibleLambda: function() {
                this.aliases.lambda = "this.lambda",
                this.push("lambda(" + this.popStack() + ", " + this.contextName(0) + ")")
            },
            pushStringParam: function(e, t) {
                this.pushContext(),
                this.pushString(t),
                "sexpr" !== t && ("string" == typeof e ? this.pushString(e) : this.pushStackLiteral(e))
            },
            emptyHash: function() {
                this.pushStackLiteral("{}"),
                this.trackIds && this.push("{}"),
                this.stringParams && (this.push("{}"),
                this.push("{}"))
            },
            pushHash: function() {
                this.hash && this.hashes.push(this.hash),
                this.hash = {
                    values: [],
                    types: [],
                    contexts: [],
                    ids: []
                }
            },
            popHash: function() {
                var e = this.hash;
                this.hash = this.hashes.pop(),
                this.trackIds && this.push("{" + e.ids.join(",") + "}"),
                this.stringParams && (this.push("{" + e.contexts.join(",") + "}"),
                this.push("{" + e.types.join(",") + "}")),
                this.push("{\n    " + e.values.join(",\n    ") + "\n  }")
            },
            pushString: function(e) {
                this.pushStackLiteral(this.quotedString(e))
            },
            push: function(e) {
                return this.inlineStack.push(e),
                e
            },
            pushLiteral: function(e) {
                this.pushStackLiteral(e)
            },
            pushProgram: function(e) {
                null != e ? this.pushStackLiteral(this.programExpression(e)) : this.pushStackLiteral(null)
            },
            invokeHelper: function(e, t, n) {
                this.aliases.helperMissing = "helpers.helperMissing";
                var r = this.popStack()
                  , i = this.setupHelper(e, t)
                  , o = (n ? i.name + " || " : "") + r + " || helperMissing";
                this.push("((" + o + ").call(" + i.callParams + "))")
            },
            invokeKnownHelper: function(e, t) {
                var n = this.setupHelper(e, t);
                this.push(n.name + ".call(" + n.callParams + ")")
            },
            invokeAmbiguous: function(e, t) {
                this.aliases.functionType = '"function"',
                this.aliases.helperMissing = "helpers.helperMissing",
                this.useRegister("helper");
                var n = this.popStack();
                this.emptyHash();
                var r = this.setupHelper(0, e, t)
                  , i = this.lastHelper = this.nameLookup("helpers", e, "helper");
                this.push("((helper = (helper = " + i + " || " + n + ") != null ? helper : helperMissing" + (r.paramsInit ? "),(" + r.paramsInit : "") + "),(typeof helper === functionType ? helper.call(" + r.callParams + ") : helper))")
            },
            invokePartial: function(e, t) {
                var n = [this.nameLookup("partials", e, "partial"), "'" + t + "'", "'" + e + "'", this.popStack(), this.popStack(), "helpers", "partials"];
                this.options.data ? n.push("data") : this.options.compat && n.push("undefined"),
                this.options.compat && n.push("depths"),
                this.push("this.invokePartial(" + n.join(", ") + ")")
            },
            assignToHash: function(e) {
                var t, n, r, i = this.popStack();
                this.trackIds && (r = this.popStack()),
                this.stringParams && (n = this.popStack(),
                t = this.popStack());
                var o = this.hash;
                t && o.contexts.push("'" + e + "': " + t),
                n && o.types.push("'" + e + "': " + n),
                r && o.ids.push("'" + e + "': " + r),
                o.values.push("'" + e + "': (" + i + ")")
            },
            pushId: function(e, t) {
                "ID" === e || "DATA" === e ? this.pushString(t) : "sexpr" === e ? this.pushStackLiteral("true") : this.pushStackLiteral("null")
            },
            compiler: r,
            compileChildren: function(e, t) {
                for (var n, r, i = e.children, o = 0, s = i.length; s > o; o++) {
                    n = i[o],
                    r = new this.compiler;
                    var a = this.matchExistingProgram(n);
                    null == a ? (this.context.programs.push(""),
                    a = this.context.programs.length,
                    n.index = a,
                    n.name = "program" + a,
                    this.context.programs[a] = r.compile(n, t, this.context, !this.precompile),
                    this.context.environments[a] = n,
                    this.useDepths = this.useDepths || r.useDepths) : (n.index = a,
                    n.name = "program" + a)
                }
            },
            matchExistingProgram: function(e) {
                for (var t = 0, n = this.context.environments.length; n > t; t++) {
                    var r = this.context.environments[t];
                    if (r && r.equals(e))
                        return t
                }
            },
            programExpression: function(e) {
                var t = this.environment.children[e]
                  , n = (t.depths.list,
                this.useDepths)
                  , r = [t.index, "data"];
                return n && r.push("depths"),
                "this.program(" + r.join(", ") + ")"
            },
            useRegister: function(e) {
                this.registers[e] || (this.registers[e] = !0,
                this.registers.list.push(e))
            },
            pushStackLiteral: function(e) {
                return this.push(new n(e))
            },
            pushSource: function(e) {
                this.pendingContent && (this.source.push(this.appendToBuffer(this.quotedString(this.pendingContent))),
                this.pendingContent = void 0),
                e && this.source.push(e)
            },
            pushStack: function(e) {
                this.flushInline();
                var t = this.incrStack();
                return this.pushSource(t + " = " + e + ";"),
                this.compileStack.push(t),
                t
            },
            replaceStack: function(e) {
                var t, r, i, o = "";
                this.isInline();
                if (!this.isInline())
                    throw new a("replaceStack on non-inline");
                var s = this.popStack(!0);
                if (s instanceof n)
                    o = t = s.value,
                    i = !0;
                else {
                    r = !this.stackSlot;
                    var l = r ? this.incrStack() : this.topStackName();
                    o = "(" + this.push(l) + " = " + s + ")",
                    t = this.topStack()
                }
                var u = e.call(this, t);
                i || this.popStack(),
                r && this.stackSlot--,
                this.push("(" + o + u + ")")
            },
            incrStack: function() {
                return this.stackSlot++,
                this.stackSlot > this.stackVars.length && this.stackVars.push("stack" + this.stackSlot),
                this.topStackName()
            },
            topStackName: function() {
                return "stack" + this.stackSlot
            },
            flushInline: function() {
                var e = this.inlineStack;
                if (e.length) {
                    this.inlineStack = [];
                    for (var t = 0, r = e.length; r > t; t++) {
                        var i = e[t];
                        i instanceof n ? this.compileStack.push(i) : this.pushStack(i)
                    }
                }
            },
            isInline: function() {
                return this.inlineStack.length
            },
            popStack: function(e) {
                var t = this.isInline()
                  , r = (t ? this.inlineStack : this.compileStack).pop();
                if (!e && r instanceof n)
                    return r.value;
                if (!t) {
                    if (!this.stackSlot)
                        throw new a("Invalid stack pop");
                    this.stackSlot--
                }
                return r
            },
            topStack: function() {
                var e = this.isInline() ? this.inlineStack : this.compileStack
                  , t = e[e.length - 1];
                return t instanceof n ? t.value : t
            },
            contextName: function(e) {
                return this.useDepths && e ? "depths[" + e + "]" : "depth" + e
            },
            quotedString: function(e) {
                return '"' + e.replace(/\\/g, "\\\\").replace(/"/g, '\\"').replace(/\n/g, "\\n").replace(/\r/g, "\\r").replace(/\u2028/g, "\\u2028").replace(/\u2029/g, "\\u2029") + '"'
            },
            objectLiteral: function(e) {
                var t = [];
                for (var n in e)
                    e.hasOwnProperty(n) && t.push(this.quotedString(n) + ":" + e[n]);
                return "{" + t.join(",") + "}"
            },
            setupHelper: function(e, t, n) {
                var r = []
                  , i = this.setupParams(t, e, r, n)
                  , o = this.nameLookup("helpers", t, "helper");
                return {
                    params: r,
                    paramsInit: i,
                    name: o,
                    callParams: [this.contextName(0)].concat(r).join(", ")
                }
            },
            setupOptions: function(e, t, n) {
                var r, i, o, s = {}, a = [], l = [], u = [];
                s.name = this.quotedString(e),
                s.hash = this.popStack(),
                this.trackIds && (s.hashIds = this.popStack()),
                this.stringParams && (s.hashTypes = this.popStack(),
                s.hashContexts = this.popStack()),
                i = this.popStack(),
                o = this.popStack(),
                (o || i) && (o || (o = "this.noop"),
                i || (i = "this.noop"),
                s.fn = o,
                s.inverse = i);
                for (var c = t; c--; )
                    r = this.popStack(),
                    n[c] = r,
                    this.trackIds && (u[c] = this.popStack()),
                    this.stringParams && (l[c] = this.popStack(),
                    a[c] = this.popStack());
                return this.trackIds && (s.ids = "[" + u.join(",") + "]"),
                this.stringParams && (s.types = "[" + l.join(",") + "]",
                s.contexts = "[" + a.join(",") + "]"),
                this.options.data && (s.data = "data"),
                s
            },
            setupParams: function(e, t, n, r) {
                var i = this.objectLiteral(this.setupOptions(e, t, n));
                return r ? (this.useRegister("options"),
                n.push("options"),
                "options=" + i) : (n.push(i),
                "")
            }
        };
        for (var l = "break else new var case finally return void catch for switch while continue function this with default if throw delete in try do instanceof typeof abstract enum int short boolean export interface static byte extends long super char final native synchronized class float package throws const goto private transient debugger implements protected volatile double import public let yield".split(" "), u = r.RESERVED_WORDS = {}, c = 0, h = l.length; h > c; c++)
            u[l[c]] = !0;
        return r.isValidJavaScriptVariableName = function(e) {
            return !r.RESERVED_WORDS[e] && /^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)
        }
        ,
        i = r
    }(r, n)
      , d = function(e, t, n, r, i) {
        "use strict";
        var o, s = e, a = t, l = n.parser, u = n.parse, c = r.Compiler, h = r.compile, d = r.precompile, f = i, p = s.create, m = function() {
            var e = p();
            return e.compile = function(t, n) {
                return h(t, n, e)
            }
            ,
            e.precompile = function(t, n) {
                return d(t, n, e)
            }
            ,
            e.AST = a,
            e.Compiler = c,
            e.JavaScriptCompiler = f,
            e.Parser = l,
            e.parse = u,
            e
        };
        return s = m(),
        s.create = m,
        s["default"] = s,
        o = s
    }(o, s, u, c, h);
    return d
}),
define("text", ["module"], function(e) {
    "use strict";
    var t, n, r, i, o, s = ["Msxml2.XMLHTTP", "Microsoft.XMLHTTP", "Msxml2.XMLHTTP.4.0"], a = /^\s*<\?xml(\s)+version=[\'\"](\d)*.(\d)*[\'\"](\s)*\?>/im, l = /<body[^>]*>\s*([\s\S]+)\s*<\/body>/im, u = "undefined" != typeof location && location.href, c = u && location.protocol && location.protocol.replace(/\:/, ""), h = u && location.hostname, d = u && (location.port || void 0), f = {}, p = e.config && e.config() || {};
    return t = {
        version: "2.0.12",
        strip: function(e) {
            if (e) {
                e = e.replace(a, "");
                var t = e.match(l);
                t && (e = t[1])
            } else
                e = "";
            return e
        },
        jsEscape: function(e) {
            return e.replace(/(['\\])/g, "\\$1").replace(/[\f]/g, "\\f").replace(/[\b]/g, "\\b").replace(/[\n]/g, "\\n").replace(/[\t]/g, "\\t").replace(/[\r]/g, "\\r").replace(/[\u2028]/g, "\\u2028").replace(/[\u2029]/g, "\\u2029")
        },
        createXhr: p.createXhr || function() {
            var e, t, n;
            if ("undefined" != typeof XMLHttpRequest)
                return new XMLHttpRequest;
            if ("undefined" != typeof ActiveXObject)
                for (t = 0; 3 > t; t += 1) {
                    n = s[t];
                    try {
                        e = new ActiveXObject(n)
                    } catch (r) {}
                    if (e) {
                        s = [n];
                        break
                    }
                }
            return e
        }
        ,
        parseName: function(e) {
            var t, n, r, i = !1, o = e.indexOf("."), s = 0 === e.indexOf("./") || 0 === e.indexOf("../");
            return -1 !== o && (!s || o > 1) ? (t = e.substring(0, o),
            n = e.substring(o + 1, e.length)) : t = e,
            r = n || t,
            o = r.indexOf("!"),
            -1 !== o && (i = "strip" === r.substring(o + 1),
            r = r.substring(0, o),
            n ? n = r : t = r),
            {
                moduleName: t,
                ext: n,
                strip: i
            }
        },
        xdRegExp: /^((\w+)\:)?\/\/([^\/\\]+)/,
        useXhr: function(e, n, r, i) {
            var o, s, a, l = t.xdRegExp.exec(e);
            return l ? (o = l[2],
            s = l[3],
            s = s.split(":"),
            a = s[1],
            s = s[0],
            !(o && o !== n || s && s.toLowerCase() !== r.toLowerCase() || (a || s) && a !== i)) : !0
        },
        finishLoad: function(e, n, r, i) {
            r = n ? t.strip(r) : r,
            p.isBuild && (f[e] = r),
            i(r)
        },
        load: function(e, n, r, i) {
            if (i && i.isBuild && !i.inlineText)
                return void r();
            p.isBuild = i && i.isBuild;
            var o = t.parseName(e)
              , s = o.moduleName + (o.ext ? "." + o.ext : "")
              , a = n.toUrl(s)
              , l = p.useXhr || t.useXhr;
            return 0 === a.indexOf("empty:") ? void r() : void (!u || l(a, c, h, d) ? t.get(a, function(n) {
                t.finishLoad(e, o.strip, n, r)
            }, function(e) {
                r.error && r.error(e)
            }) : n([s], function(e) {
                t.finishLoad(o.moduleName + "." + o.ext, o.strip, e, r)
            }))
        },
        write: function(e, n, r, i) {
            if (f.hasOwnProperty(n)) {
                var o = t.jsEscape(f[n]);
                r.asModule(e + "!" + n, "define(function () { return '" + o + "';});\n")
            }
        },
        writeFile: function(e, n, r, i, o) {
            var s = t.parseName(n)
              , a = s.ext ? "." + s.ext : ""
              , l = s.moduleName + a
              , u = r.toUrl(s.moduleName + a) + ".js";
            t.load(l, r, function(n) {
                var r = function(e) {
                    return i(u, e)
                };
                r.asModule = function(e, t) {
                    return i.asModule(e, u, t)
                }
                ,
                t.write(e, l, r, o)
            }, o)
        }
    },
    "node" === p.env || !p.env && "undefined" != typeof process && process.versions && process.versions.node && !process.versions["node-webkit"] ? (n = require.nodeRequire("fs"),
    t.get = function(e, t, r) {
        try {
            var i = n.readFileSync(e, "utf8");
            0 === i.indexOf("\ufeff") && (i = i.substring(1)),
            t(i)
        } catch (o) {
            r && r(o)
        }
    }
    ) : "xhr" === p.env || !p.env && t.createXhr() ? t.get = function(e, n, r, i) {
        var o, s = t.createXhr();
        if (s.open("GET", e, !0),
        i)
            for (o in i)
                i.hasOwnProperty(o) && s.setRequestHeader(o.toLowerCase(), i[o]);
        p.onXhr && p.onXhr(s, e),
        s.onreadystatechange = function(t) {
            var i, o;
            4 === s.readyState && (i = s.status || 0,
            i > 399 && 600 > i ? (o = new Error(e + " HTTP status: " + i),
            o.xhr = s,
            r && r(o)) : n(s.responseText),
            p.onXhrComplete && p.onXhrComplete(s, e))
        }
        ,
        s.send(null)
    }
    : "rhino" === p.env || !p.env && "undefined" != typeof Packages && "undefined" != typeof java ? t.get = function(e, t) {
        var n, r, i = "utf-8", o = new java.io.File(e), s = java.lang.System.getProperty("line.separator"), a = new java.io.BufferedReader(new java.io.InputStreamReader(new java.io.FileInputStream(o),i)), l = "";
        try {
            for (n = new java.lang.StringBuffer,
            r = a.readLine(),
            r && r.length() && 65279 === r.charAt(0) && (r = r.substring(1)),
            null !== r && n.append(r); null !== (r = a.readLine()); )
                n.append(s),
                n.append(r);
            l = String(n.toString())
        } finally {
            a.close()
        }
        t(l)
    }
    : ("xpconnect" === p.env || !p.env && "undefined" != typeof Components && Components.classes && Components.interfaces) && (r = Components.classes,
    i = Components.interfaces,
    Components.utils["import"]("resource://gre/modules/FileUtils.jsm"),
    o = "@mozilla.org/windows-registry-key;1"in r,
    t.get = function(e, t) {
        var n, s, a, l = {};
        o && (e = e.replace(/\//g, "\\")),
        a = new FileUtils.File(e);
        try {
            n = r["@mozilla.org/network/file-input-stream;1"].createInstance(i.nsIFileInputStream),
            n.init(a, 1, 0, !1),
            s = r["@mozilla.org/intl/converter-input-stream;1"].createInstance(i.nsIConverterInputStream),
            s.init(n, "utf-8", n.available(), i.nsIConverterInputStream.DEFAULT_REPLACEMENT_CHARACTER),
            s.readString(n.available(), l),
            s.close(),
            n.close(),
            t(l.value)
        } catch (u) {
            throw new Error((a && a.path || "") + ": " + u)
        }
    }
    ),
    t
}),
define("text!fiddle_backbone/templates/dbTypes.html", [], function() {
    return '        <a class="dropdown-toggle" data-toggle="dropdown" href="#">\n            {{selectedFullName}} <b class="caret"></b>\n        </a>\n        <ul class="dropdown-menu">\n            {{#each dbTypes}}\n            <li db_type_id="{{this.id}}" class="{{this.classname}}{{#unless show}} hidden{{/unless}}"><a href="#"><i class="icon-tag"></i>{{this.full_name}}</a></li>\n            {{/each}}\n        </ul>\n'
}),
define("fiddle_backbone/views/DBTypesList", ["jquery", "Backbone", "Handlebars", "text!fiddle_backbone/templates/dbTypes.html"], function(e, t, n, r) {
    var i = t.View.extend({
        initialize: function(e) {
            this.options = e,
            this.compiledTemplate = n.compile(r)
        },
        events: {
            "click ul.dropdown-menu a": "clickDBType"
        },
        clickDBType: function(t) {
            t.preventDefault(),
            this.collection.setSelectedType(parseInt(e(t.currentTarget).parent("li").attr("db_type_id")))
        },
        render: function() {
            var t = this.collection.getSelectedType();
            return e(this.el).html(this.compiledTemplate({
                dbTypes: this.collection.map(function(e) {
                    var n = e.toJSON();
                    return n.classname = n.selected ? "active" : "",
                    n.show = "host" != n.context || n.num_hosts > 0 || n.id === t.get("id"),
                    n
                }),
                selectedFullName: t.get("full_name")
            })),
            e("#db_type_label_collapsed .navbar-text").text(t.get("full_name")),
            this
        }
    });
    return i
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("codemirror", t) : e.CodeMirror = t()
}(this, function() {
    "use strict";
    function e(e) {
        return new RegExp("(^|\\s)" + e + "(?:$|\\s)\\s*")
    }
    function t(e) {
        for (var t = e.childNodes.length; t > 0; --t)
            e.removeChild(e.firstChild);
        return e
    }
    function n(e, n) {
        return t(e).appendChild(n)
    }
    function r(e, t, n, r) {
        var i = document.createElement(e);
        if (n && (i.className = n),
        r && (i.style.cssText = r),
        "string" == typeof t)
            i.appendChild(document.createTextNode(t));
        else if (t)
            for (var o = 0; o < t.length; ++o)
                i.appendChild(t[o]);
        return i
    }
    function i(e, t, n, i) {
        var o = r(e, t, n, i);
        return o.setAttribute("role", "presentation"),
        o
    }
    function o(e, t) {
        if (3 == t.nodeType && (t = t.parentNode),
        e.contains)
            return e.contains(t);
        do
            if (11 == t.nodeType && (t = t.host),
            t == e)
                return !0;
        while (t = t.parentNode)
    }
    function s() {
        var e;
        try {
            e = document.activeElement
        } catch (t) {
            e = document.body || null
        }
        for (; e && e.shadowRoot && e.shadowRoot.activeElement; )
            e = e.shadowRoot.activeElement;
        return e
    }
    function a(t, n) {
        var r = t.className;
        e(n).test(r) || (t.className += (r ? " " : "") + n)
    }
    function l(t, n) {
        for (var r = t.split(" "), i = 0; i < r.length; i++)
            r[i] && !e(r[i]).test(n) && (n += " " + r[i]);
        return n
    }
    function u(e) {
        var t = Array.prototype.slice.call(arguments, 1);
        return function() {
            return e.apply(null, t)
        }
    }
    function c(e, t, n) {
        t || (t = {});
        for (var r in e)
            !e.hasOwnProperty(r) || n === !1 && t.hasOwnProperty(r) || (t[r] = e[r]);
        return t
    }
    function h(e, t, n, r, i) {
        null == t && (t = e.search(/[^\s\u00a0]/),
        -1 == t && (t = e.length));
        for (var o = r || 0, s = i || 0; ; ) {
            var a = e.indexOf("	", o);
            if (0 > a || a >= t)
                return s + (t - o);
            s += a - o,
            s += n - s % n,
            o = a + 1
        }
    }
    function d(e, t) {
        for (var n = 0; n < e.length; ++n)
            if (e[n] == t)
                return n;
        return -1
    }
    function f(e, t, n) {
        for (var r = 0, i = 0; ; ) {
            var o = e.indexOf("	", r);
            -1 == o && (o = e.length);
            var s = o - r;
            if (o == e.length || i + s >= t)
                return r + Math.min(s, t - i);
            if (i += o - r,
            i += n - i % n,
            r = o + 1,
            i >= t)
                return r
        }
    }
    function p(e) {
        for (; Bs.length <= e; )
            Bs.push(m(Bs) + " ");
        return Bs[e]
    }
    function m(e) {
        return e[e.length - 1]
    }
    function g(e, t) {
        for (var n = [], r = 0; r < e.length; r++)
            n[r] = t(e[r], r);
        return n
    }
    function v(e, t, n) {
        for (var r = 0, i = n(t); r < e.length && n(e[r]) <= i; )
            r++;
        e.splice(r, 0, t)
    }
    function y() {}
    function b(e, t) {
        var n;
        return Object.create ? n = Object.create(e) : (y.prototype = e,
        n = new y),
        t && c(t, n),
        n
    }
    function x(e) {
        return /\w/.test(e) || e > "" && (e.toUpperCase() != e.toLowerCase() || Ws.test(e))
    }
    function w(e, t) {
        return t ? t.source.indexOf("\\w") > -1 && x(e) ? !0 : t.test(e) : x(e)
    }
    function _(e) {
        for (var t in e)
            if (e.hasOwnProperty(t) && e[t])
                return !1;
        return !0
    }
    function k(e) {
        return e.charCodeAt(0) >= 768 && Us.test(e)
    }
    function S(e, t, n) {
        for (; (0 > n ? t > 0 : t < e.length) && k(e.charAt(t)); )
            t += n;
        return t
    }
    function C(e, t, n) {
        for (; ; ) {
            if (Math.abs(t - n) <= 1)
                return e(t) ? t : n;
            var r = Math.floor((t + n) / 2);
            e(r) ? n = r : t = r
        }
    }
    function T(e, t, n) {
        var o = this;
        this.input = n,
        o.scrollbarFiller = r("div", null, "CodeMirror-scrollbar-filler"),
        o.scrollbarFiller.setAttribute("cm-not-content", "true"),
        o.gutterFiller = r("div", null, "CodeMirror-gutter-filler"),
        o.gutterFiller.setAttribute("cm-not-content", "true"),
        o.lineDiv = i("div", null, "CodeMirror-code"),
        o.selectionDiv = r("div", null, null, "position: relative; z-index: 1"),
        o.cursorDiv = r("div", null, "CodeMirror-cursors"),
        o.measure = r("div", null, "CodeMirror-measure"),
        o.lineMeasure = r("div", null, "CodeMirror-measure"),
        o.lineSpace = i("div", [o.measure, o.lineMeasure, o.selectionDiv, o.cursorDiv, o.lineDiv], null, "position: relative; outline: none");
        var s = i("div", [o.lineSpace], "CodeMirror-lines");
        o.mover = r("div", [s], null, "position: relative"),
        o.sizer = r("div", [o.mover], "CodeMirror-sizer"),
        o.sizerWidth = null,
        o.heightForcer = r("div", null, null, "position: absolute; height: " + Rs + "px; width: 1px;"),
        o.gutters = r("div", null, "CodeMirror-gutters"),
        o.lineGutter = null,
        o.scroller = r("div", [o.sizer, o.heightForcer, o.gutters], "CodeMirror-scroll"),
        o.scroller.setAttribute("tabIndex", "-1"),
        o.wrapper = r("div", [o.scrollbarFiller, o.gutterFiller, o.scroller], "CodeMirror"),
        fs && 8 > ps && (o.gutters.style.zIndex = -1,
        o.scroller.style.paddingRight = 0),
        ms || us && Ss || (o.scroller.draggable = !0),
        e && (e.appendChild ? e.appendChild(o.wrapper) : e(o.wrapper)),
        o.viewFrom = o.viewTo = t.first,
        o.reportedViewFrom = o.reportedViewTo = t.first,
        o.view = [],
        o.renderedView = null,
        o.externalMeasured = null,
        o.viewOffset = 0,
        o.lastWrapHeight = o.lastWrapWidth = 0,
        o.updateLineNumbers = null,
        o.nativeBarWidth = o.barHeight = o.barWidth = 0,
        o.scrollbarsClipped = !1,
        o.lineNumWidth = o.lineNumInnerWidth = o.lineNumChars = null,
        o.alignWidgets = !1,
        o.cachedCharWidth = o.cachedTextHeight = o.cachedPaddingH = null,
        o.maxLine = null,
        o.maxLineLength = 0,
        o.maxLineChanged = !1,
        o.wheelDX = o.wheelDY = o.wheelStartX = o.wheelStartY = null,
        o.shift = !1,
        o.selForContextMenu = null,
        o.activeTouch = null,
        n.init(o)
    }
    function L(e, t) {
        if (t -= e.first,
        0 > t || t >= e.size)
            throw new Error("There is no line " + (t + e.first) + " in the document.");
        for (var n = e; !n.lines; )
            for (var r = 0; ; ++r) {
                var i = n.children[r]
                  , o = i.chunkSize();
                if (o > t) {
                    n = i;
                    break
                }
                t -= o
            }
        return n.lines[t]
    }
    function E(e, t, n) {
        var r = []
          , i = t.line;
        return e.iter(t.line, n.line + 1, function(e) {
            var o = e.text;
            i == n.line && (o = o.slice(0, n.ch)),
            i == t.line && (o = o.slice(t.ch)),
            r.push(o),
            ++i
        }),
        r
    }
    function N(e, t, n) {
        var r = [];
        return e.iter(t, n, function(e) {
            r.push(e.text)
        }),
        r
    }
    function A(e, t) {
        var n = t - e.height;
        if (n)
            for (var r = e; r; r = r.parent)
                r.height += n
    }
    function M(e) {
        if (null == e.parent)
            return null;
        for (var t = e.parent, n = d(t.lines, e), r = t.parent; r; t = r,
        r = r.parent)
            for (var i = 0; r.children[i] != t; ++i)
                n += r.children[i].chunkSize();
        return n + t.first
    }
    function D(e, t) {
        var n = e.first;
        e: do {
            for (var r = 0; r < e.children.length; ++r) {
                var i = e.children[r]
                  , o = i.height;
                if (o > t) {
                    e = i;
                    continue e
                }
                t -= o,
                n += i.chunkSize()
            }
            return n
        } while (!e.lines);
        for (var s = 0; s < e.lines.length; ++s) {
            var a = e.lines[s]
              , l = a.height;
            if (l > t)
                break;
            t -= l
        }
        return n + s
    }
    function O(e, t) {
        return t >= e.first && t < e.first + e.size
    }
    function I(e, t) {
        return String(e.lineNumberFormatter(t + e.firstLineNumber))
    }
    function P(e, t, n) {
        return void 0 === n && (n = null),
        this instanceof P ? (this.line = e,
        this.ch = t,
        void (this.sticky = n)) : new P(e,t,n)
    }
    function H(e, t) {
        return e.line - t.line || e.ch - t.ch
    }
    function R(e, t) {
        return e.sticky == t.sticky && 0 == H(e, t)
    }
    function q(e) {
        return P(e.line, e.ch)
    }
    function F(e, t) {
        return H(e, t) < 0 ? t : e
    }
    function $(e, t) {
        return H(e, t) < 0 ? e : t
    }
    function j(e, t) {
        return Math.max(e.first, Math.min(t, e.first + e.size - 1))
    }
    function B(e, t) {
        if (t.line < e.first)
            return P(e.first, 0);
        var n = e.first + e.size - 1;
        return t.line > n ? P(n, L(e, n).text.length) : W(t, L(e, t.line).text.length)
    }
    function W(e, t) {
        var n = e.ch;
        return null == n || n > t ? P(e.line, t) : 0 > n ? P(e.line, 0) : e
    }
    function U(e, t) {
        for (var n = [], r = 0; r < t.length; r++)
            n[r] = B(e, t[r]);
        return n
    }
    function z() {
        zs = !0
    }
    function V() {
        Vs = !0
    }
    function X(e, t, n) {
        this.marker = e,
        this.from = t,
        this.to = n
    }
    function Q(e, t) {
        if (e)
            for (var n = 0; n < e.length; ++n) {
                var r = e[n];
                if (r.marker == t)
                    return r
            }
    }
    function G(e, t) {
        for (var n, r = 0; r < e.length; ++r)
            e[r] != t && (n || (n = [])).push(e[r]);
        return n
    }
    function K(e, t) {
        e.markedSpans = e.markedSpans ? e.markedSpans.concat([t]) : [t],
        t.marker.attachLine(e)
    }
    function J(e, t, n) {
        var r;
        if (e)
            for (var i = 0; i < e.length; ++i) {
                var o = e[i]
                  , s = o.marker
                  , a = null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t);
                if (a || o.from == t && "bookmark" == s.type && (!n || !o.marker.insertLeft)) {
                    var l = null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                    (r || (r = [])).push(new X(s,o.from,l ? null : o.to))
                }
            }
        return r
    }
    function Y(e, t, n) {
        var r;
        if (e)
            for (var i = 0; i < e.length; ++i) {
                var o = e[i]
                  , s = o.marker
                  , a = null == o.to || (s.inclusiveRight ? o.to >= t : o.to > t);
                if (a || o.from == t && "bookmark" == s.type && (!n || o.marker.insertLeft)) {
                    var l = null == o.from || (s.inclusiveLeft ? o.from <= t : o.from < t);
                    (r || (r = [])).push(new X(s,l ? null : o.from - t,null == o.to ? null : o.to - t))
                }
            }
        return r
    }
    function Z(e, t) {
        if (t.full)
            return null;
        var n = O(e, t.from.line) && L(e, t.from.line).markedSpans
          , r = O(e, t.to.line) && L(e, t.to.line).markedSpans;
        if (!n && !r)
            return null;
        var i = t.from.ch
          , o = t.to.ch
          , s = 0 == H(t.from, t.to)
          , a = J(n, i, s)
          , l = Y(r, o, s)
          , u = 1 == t.text.length
          , c = m(t.text).length + (u ? i : 0);
        if (a)
            for (var h = 0; h < a.length; ++h) {
                var d = a[h];
                if (null == d.to) {
                    var f = Q(l, d.marker);
                    f ? u && (d.to = null == f.to ? null : f.to + c) : d.to = i
                }
            }
        if (l)
            for (var p = 0; p < l.length; ++p) {
                var g = l[p];
                if (null != g.to && (g.to += c),
                null == g.from) {
                    var v = Q(a, g.marker);
                    v || (g.from = c,
                    u && (a || (a = [])).push(g))
                } else
                    g.from += c,
                    u && (a || (a = [])).push(g)
            }
        a && (a = ee(a)),
        l && l != a && (l = ee(l));
        var y = [a];
        if (!u) {
            var b, x = t.text.length - 2;
            if (x > 0 && a)
                for (var w = 0; w < a.length; ++w)
                    null == a[w].to && (b || (b = [])).push(new X(a[w].marker,null,null));
            for (var _ = 0; x > _; ++_)
                y.push(b);
            y.push(l)
        }
        return y
    }
    function ee(e) {
        for (var t = 0; t < e.length; ++t) {
            var n = e[t];
            null != n.from && n.from == n.to && n.marker.clearWhenEmpty !== !1 && e.splice(t--, 1)
        }
        return e.length ? e : null
    }
    function te(e, t, n) {
        var r = null;
        if (e.iter(t.line, n.line + 1, function(e) {
            if (e.markedSpans)
                for (var t = 0; t < e.markedSpans.length; ++t) {
                    var n = e.markedSpans[t].marker;
                    !n.readOnly || r && -1 != d(r, n) || (r || (r = [])).push(n)
                }
        }),
        !r)
            return null;
        for (var i = [{
            from: t,
            to: n
        }], o = 0; o < r.length; ++o)
            for (var s = r[o], a = s.find(0), l = 0; l < i.length; ++l) {
                var u = i[l];
                if (!(H(u.to, a.from) < 0 || H(u.from, a.to) > 0)) {
                    var c = [l, 1]
                      , h = H(u.from, a.from)
                      , f = H(u.to, a.to);
                    (0 > h || !s.inclusiveLeft && !h) && c.push({
                        from: u.from,
                        to: a.from
                    }),
                    (f > 0 || !s.inclusiveRight && !f) && c.push({
                        from: a.to,
                        to: u.to
                    }),
                    i.splice.apply(i, c),
                    l += c.length - 3
                }
            }
        return i
    }
    function ne(e) {
        var t = e.markedSpans;
        if (t) {
            for (var n = 0; n < t.length; ++n)
                t[n].marker.detachLine(e);
            e.markedSpans = null
        }
    }
    function re(e, t) {
        if (t) {
            for (var n = 0; n < t.length; ++n)
                t[n].marker.attachLine(e);
            e.markedSpans = t
        }
    }
    function ie(e) {
        return e.inclusiveLeft ? -1 : 0
    }
    function oe(e) {
        return e.inclusiveRight ? 1 : 0
    }
    function se(e, t) {
        var n = e.lines.length - t.lines.length;
        if (0 != n)
            return n;
        var r = e.find()
          , i = t.find()
          , o = H(r.from, i.from) || ie(e) - ie(t);
        if (o)
            return -o;
        var s = H(r.to, i.to) || oe(e) - oe(t);
        return s ? s : t.id - e.id
    }
    function ae(e, t) {
        var n, r = Vs && e.markedSpans;
        if (r)
            for (var i = void 0, o = 0; o < r.length; ++o)
                i = r[o],
                i.marker.collapsed && null == (t ? i.from : i.to) && (!n || se(n, i.marker) < 0) && (n = i.marker);
        return n
    }
    function le(e) {
        return ae(e, !0)
    }
    function ue(e) {
        return ae(e, !1)
    }
    function ce(e, t, n, r, i) {
        var o = L(e, t)
          , s = Vs && o.markedSpans;
        if (s)
            for (var a = 0; a < s.length; ++a) {
                var l = s[a];
                if (l.marker.collapsed) {
                    var u = l.marker.find(0)
                      , c = H(u.from, n) || ie(l.marker) - ie(i)
                      , h = H(u.to, r) || oe(l.marker) - oe(i);
                    if (!(c >= 0 && 0 >= h || 0 >= c && h >= 0) && (0 >= c && (l.marker.inclusiveRight && i.inclusiveLeft ? H(u.to, n) >= 0 : H(u.to, n) > 0) || c >= 0 && (l.marker.inclusiveRight && i.inclusiveLeft ? H(u.from, r) <= 0 : H(u.from, r) < 0)))
                        return !0
                }
            }
    }
    function he(e) {
        for (var t; t = le(e); )
            e = t.find(-1, !0).line;
        return e
    }
    function de(e) {
        for (var t; t = ue(e); )
            e = t.find(1, !0).line;
        return e
    }
    function fe(e) {
        for (var t, n; t = ue(e); )
            e = t.find(1, !0).line,
            (n || (n = [])).push(e);
        return n
    }
    function pe(e, t) {
        var n = L(e, t)
          , r = he(n);
        return n == r ? t : M(r)
    }
    function me(e, t) {
        if (t > e.lastLine())
            return t;
        var n, r = L(e, t);
        if (!ge(e, r))
            return t;
        for (; n = ue(r); )
            r = n.find(1, !0).line;
        return M(r) + 1
    }
    function ge(e, t) {
        var n = Vs && t.markedSpans;
        if (n)
            for (var r = void 0, i = 0; i < n.length; ++i)
                if (r = n[i],
                r.marker.collapsed) {
                    if (null == r.from)
                        return !0;
                    if (!r.marker.widgetNode && 0 == r.from && r.marker.inclusiveLeft && ve(e, t, r))
                        return !0
                }
    }
    function ve(e, t, n) {
        if (null == n.to) {
            var r = n.marker.find(1, !0);
            return ve(e, r.line, Q(r.line.markedSpans, n.marker))
        }
        if (n.marker.inclusiveRight && n.to == t.text.length)
            return !0;
        for (var i = void 0, o = 0; o < t.markedSpans.length; ++o)
            if (i = t.markedSpans[o],
            i.marker.collapsed && !i.marker.widgetNode && i.from == n.to && (null == i.to || i.to != n.from) && (i.marker.inclusiveLeft || n.marker.inclusiveRight) && ve(e, t, i))
                return !0
    }
    function ye(e) {
        e = he(e);
        for (var t = 0, n = e.parent, r = 0; r < n.lines.length; ++r) {
            var i = n.lines[r];
            if (i == e)
                break;
            t += i.height
        }
        for (var o = n.parent; o; n = o,
        o = n.parent)
            for (var s = 0; s < o.children.length; ++s) {
                var a = o.children[s];
                if (a == n)
                    break;
                t += a.height
            }
        return t
    }
    function be(e) {
        if (0 == e.height)
            return 0;
        for (var t, n = e.text.length, r = e; t = le(r); ) {
            var i = t.find(0, !0);
            r = i.from.line,
            n += i.from.ch - i.to.ch
        }
        for (r = e; t = ue(r); ) {
            var o = t.find(0, !0);
            n -= r.text.length - o.from.ch,
            r = o.to.line,
            n += r.text.length - o.to.ch
        }
        return n
    }
    function xe(e) {
        var t = e.display
          , n = e.doc;
        t.maxLine = L(n, n.first),
        t.maxLineLength = be(t.maxLine),
        t.maxLineChanged = !0,
        n.iter(function(e) {
            var n = be(e);
            n > t.maxLineLength && (t.maxLineLength = n,
            t.maxLine = e)
        })
    }
    function we(e, t, n, r) {
        if (!e)
            return r(t, n, "ltr");
        for (var i = !1, o = 0; o < e.length; ++o) {
            var s = e[o];
            (s.from < n && s.to > t || t == n && s.to == t) && (r(Math.max(s.from, t), Math.min(s.to, n), 1 == s.level ? "rtl" : "ltr"),
            i = !0)
        }
        i || r(t, n, "ltr")
    }
    function _e(e, t, n) {
        var r;
        Xs = null;
        for (var i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.from < t && o.to > t)
                return i;
            o.to == t && (o.from != o.to && "before" == n ? r = i : Xs = i),
            o.from == t && (o.from != o.to && "before" != n ? r = i : Xs = i)
        }
        return null != r ? r : Xs
    }
    function ke(e, t) {
        var n = e.order;
        return null == n && (n = e.order = Qs(e.text, t)),
        n
    }
    function Se(e, t, n) {
        var r = S(e.text, t + n, n);
        return 0 > r || r > e.text.length ? null : r
    }
    function Ce(e, t, n) {
        var r = Se(e, t.ch, n);
        return null == r ? null : new P(t.line,r,0 > n ? "after" : "before")
    }
    function Te(e, t, n, r, i) {
        if (e) {
            var o = ke(n, t.doc.direction);
            if (o) {
                var s, a = 0 > i ? m(o) : o[0], l = 0 > i == (1 == a.level), u = l ? "after" : "before";
                if (a.level > 0) {
                    var c = Jt(t, n);
                    s = 0 > i ? n.text.length - 1 : 0;
                    var h = Yt(t, c, s).top;
                    s = C(function(e) {
                        return Yt(t, c, e).top == h
                    }, 0 > i == (1 == a.level) ? a.from : a.to - 1, s),
                    "before" == u && (s = Se(n, s, 1))
                } else
                    s = 0 > i ? a.to : a.from;
                return new P(r,s,u)
            }
        }
        return new P(r,0 > i ? n.text.length : 0,0 > i ? "before" : "after")
    }
    function Le(e, t, n, r) {
        var i = ke(t, e.doc.direction);
        if (!i)
            return Ce(t, n, r);
        n.ch >= t.text.length ? (n.ch = t.text.length,
        n.sticky = "before") : n.ch <= 0 && (n.ch = 0,
        n.sticky = "after");
        var o = _e(i, n.ch, n.sticky)
          , s = i[o];
        if ("ltr" == e.doc.direction && s.level % 2 == 0 && (r > 0 ? s.to > n.ch : s.from < n.ch))
            return Ce(t, n, r);
        var a, l = function(e, n) {
            return Se(t, e instanceof P ? e.ch : e, n)
        }, u = function(n) {
            return e.options.lineWrapping ? (a = a || Jt(e, t),
            vn(e, t, a, n)) : {
                begin: 0,
                end: t.text.length
            }
        }, c = u("before" == n.sticky ? l(n, -1) : n.ch);
        if ("rtl" == e.doc.direction || 1 == s.level) {
            var h = 1 == s.level == 0 > r
              , d = l(n, h ? 1 : -1);
            if (null != d && (h ? d <= s.to && d <= c.end : d >= s.from && d >= c.begin)) {
                var f = h ? "before" : "after";
                return new P(n.line,d,f)
            }
        }
        var p = function(e, t, r) {
            for (var o = function(e, t) {
                return t ? new P(n.line,l(e, 1),"before") : new P(n.line,e,"after")
            }; e >= 0 && e < i.length; e += t) {
                var s = i[e]
                  , a = t > 0 == (1 != s.level)
                  , u = a ? r.begin : l(r.end, -1);
                if (s.from <= u && u < s.to)
                    return o(u, a);
                if (u = a ? s.from : l(s.to, -1),
                r.begin <= u && u < r.end)
                    return o(u, a)
            }
        }
          , m = p(o + r, r, c);
        if (m)
            return m;
        var g = r > 0 ? c.end : l(c.begin, -1);
        return null == g || r > 0 && g == t.text.length || !(m = p(r > 0 ? 0 : i.length - 1, r, u(g))) ? null : m
    }
    function Ee(e, t) {
        return e._handlers && e._handlers[t] || Gs
    }
    function Ne(e, t, n) {
        if (e.removeEventListener)
            e.removeEventListener(t, n, !1);
        else if (e.detachEvent)
            e.detachEvent("on" + t, n);
        else {
            var r = e._handlers
              , i = r && r[t];
            if (i) {
                var o = d(i, n);
                o > -1 && (r[t] = i.slice(0, o).concat(i.slice(o + 1)))
            }
        }
    }
    function Ae(e, t) {
        var n = Ee(e, t);
        if (n.length)
            for (var r = Array.prototype.slice.call(arguments, 2), i = 0; i < n.length; ++i)
                n[i].apply(null, r)
    }
    function Me(e, t, n) {
        return "string" == typeof t && (t = {
            type: t,
            preventDefault: function() {
                this.defaultPrevented = !0
            }
        }),
        Ae(e, n || t.type, e, t),
        Re(t) || t.codemirrorIgnore
    }
    function De(e) {
        var t = e._handlers && e._handlers.cursorActivity;
        if (t)
            for (var n = e.curOp.cursorActivityHandlers || (e.curOp.cursorActivityHandlers = []), r = 0; r < t.length; ++r)
                -1 == d(n, t[r]) && n.push(t[r])
    }
    function Oe(e, t) {
        return Ee(e, t).length > 0
    }
    function Ie(e) {
        e.prototype.on = function(e, t) {
            Ks(this, e, t)
        }
        ,
        e.prototype.off = function(e, t) {
            Ne(this, e, t)
        }
    }
    function Pe(e) {
        e.preventDefault ? e.preventDefault() : e.returnValue = !1
    }
    function He(e) {
        e.stopPropagation ? e.stopPropagation() : e.cancelBubble = !0
    }
    function Re(e) {
        return null != e.defaultPrevented ? e.defaultPrevented : 0 == e.returnValue
    }
    function qe(e) {
        Pe(e),
        He(e)
    }
    function Fe(e) {
        return e.target || e.srcElement
    }
    function $e(e) {
        var t = e.which;
        return null == t && (1 & e.button ? t = 1 : 2 & e.button ? t = 3 : 4 & e.button && (t = 2)),
        Cs && e.ctrlKey && 1 == t && (t = 3),
        t
    }
    function je(e) {
        if (null == Ps) {
            var t = r("span", "​");
            n(e, r("span", [t, document.createTextNode("x")])),
            0 != e.firstChild.offsetHeight && (Ps = t.offsetWidth <= 1 && t.offsetHeight > 2 && !(fs && 8 > ps))
        }
        var i = Ps ? r("span", "​") : r("span", " ", null, "display: inline-block; width: 1px; margin-right: -1px");
        return i.setAttribute("cm-text", ""),
        i
    }
    function Be(e) {
        if (null != Hs)
            return Hs;
        var r = n(e, document.createTextNode("AخA"))
          , i = Ns(r, 0, 1).getBoundingClientRect()
          , o = Ns(r, 1, 2).getBoundingClientRect();
        return t(e),
        i && i.left != i.right ? Hs = o.right - i.right < 3 : !1
    }
    function We(e) {
        if (null != ta)
            return ta;
        var t = n(e, r("span", "x"))
          , i = t.getBoundingClientRect()
          , o = Ns(t, 0, 1).getBoundingClientRect();
        return ta = Math.abs(i.left - o.left) > 1
    }
    function Ue(e, t) {
        arguments.length > 2 && (t.dependencies = Array.prototype.slice.call(arguments, 2)),
        na[e] = t
    }
    function ze(e, t) {
        ra[e] = t
    }
    function Ve(e) {
        if ("string" == typeof e && ra.hasOwnProperty(e))
            e = ra[e];
        else if (e && "string" == typeof e.name && ra.hasOwnProperty(e.name)) {
            var t = ra[e.name];
            "string" == typeof t && (t = {
                name: t
            }),
            e = b(t, e),
            e.name = t.name
        } else {
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+xml$/.test(e))
                return Ve("application/xml");
            if ("string" == typeof e && /^[\w\-]+\/[\w\-]+\+json$/.test(e))
                return Ve("application/json")
        }
        return "string" == typeof e ? {
            name: e
        } : e || {
            name: "null"
        }
    }
    function Xe(e, t) {
        t = Ve(t);
        var n = na[t.name];
        if (!n)
            return Xe(e, "text/plain");
        var r = n(e, t);
        if (ia.hasOwnProperty(t.name)) {
            var i = ia[t.name];
            for (var o in i)
                i.hasOwnProperty(o) && (r.hasOwnProperty(o) && (r["_" + o] = r[o]),
                r[o] = i[o])
        }
        if (r.name = t.name,
        t.helperType && (r.helperType = t.helperType),
        t.modeProps)
            for (var s in t.modeProps)
                r[s] = t.modeProps[s];
        return r
    }
    function Qe(e, t) {
        var n = ia.hasOwnProperty(e) ? ia[e] : ia[e] = {};
        c(t, n)
    }
    function Ge(e, t) {
        if (t === !0)
            return t;
        if (e.copyState)
            return e.copyState(t);
        var n = {};
        for (var r in t) {
            var i = t[r];
            i instanceof Array && (i = i.concat([])),
            n[r] = i
        }
        return n
    }
    function Ke(e, t) {
        for (var n; e.innerMode && (n = e.innerMode(t),
        n && n.mode != e); )
            t = n.state,
            e = n.mode;
        return n || {
            mode: e,
            state: t
        }
    }
    function Je(e, t, n) {
        return e.startState ? e.startState(t, n) : !0
    }
    function Ye(e, t, n, r) {
        var i = [e.state.modeGen]
          , o = {};
        st(e, t.text, e.doc.mode, n, function(e, t) {
            return i.push(e, t)
        }, o, r);
        for (var s = n.state, a = function(r) {
            var s = e.state.overlays[r]
              , a = 1
              , l = 0;
            n.state = !0,
            st(e, t.text, s.mode, n, function(e, t) {
                for (var n = a; e > l; ) {
                    var r = i[a];
                    r > e && i.splice(a, 1, e, i[a + 1], r),
                    a += 2,
                    l = Math.min(e, r)
                }
                if (t)
                    if (s.opaque)
                        i.splice(n, a - n, e, "overlay " + t),
                        a = n + 2;
                    else
                        for (; a > n; n += 2) {
                            var o = i[n + 1];
                            i[n + 1] = (o ? o + " " : "") + "overlay " + t
                        }
            }, o)
        }, l = 0; l < e.state.overlays.length; ++l)
            a(l);
        return n.state = s,
        {
            styles: i,
            classes: o.bgClass || o.textClass ? o : null
        }
    }
    function Ze(e, t, n) {
        if (!t.styles || t.styles[0] != e.state.modeGen) {
            var r = et(e, M(t))
              , i = t.text.length > e.options.maxHighlightLength && Ge(e.doc.mode, r.state)
              , o = Ye(e, t, r);
            i && (r.state = i),
            t.stateAfter = r.save(!i),
            t.styles = o.styles,
            o.classes ? t.styleClasses = o.classes : t.styleClasses && (t.styleClasses = null),
            n === e.doc.highlightFrontier && (e.doc.modeFrontier = Math.max(e.doc.modeFrontier, ++e.doc.highlightFrontier))
        }
        return t.styles
    }
    function et(e, t, n) {
        var r = e.doc
          , i = e.display;
        if (!r.mode.startState)
            return new aa(r,!0,t);
        var o = at(e, t, n)
          , s = o > r.first && L(r, o - 1).stateAfter
          , a = s ? aa.fromSaved(r, s, o) : new aa(r,Je(r.mode),o);
        return r.iter(o, t, function(n) {
            tt(e, n.text, a);
            var r = a.line;
            n.stateAfter = r == t - 1 || r % 5 == 0 || r >= i.viewFrom && r < i.viewTo ? a.save() : null,
            a.nextLine()
        }),
        n && (r.modeFrontier = a.line),
        a
    }
    function tt(e, t, n, r) {
        var i = e.doc.mode
          , o = new oa(t,e.options.tabSize,n);
        for (o.start = o.pos = r || 0,
        "" == t && nt(i, n.state); !o.eol(); )
            rt(i, o, n.state),
            o.start = o.pos
    }
    function nt(e, t) {
        if (e.blankLine)
            return e.blankLine(t);
        if (e.innerMode) {
            var n = Ke(e, t);
            return n.mode.blankLine ? n.mode.blankLine(n.state) : void 0
        }
    }
    function rt(e, t, n, r) {
        for (var i = 0; 10 > i; i++) {
            r && (r[0] = Ke(e, n).mode);
            var o = e.token(t, n);
            if (t.pos > t.start)
                return o
        }
        throw new Error("Mode " + e.name + " failed to advance stream.")
    }
    function it(e, t, n, r) {
        var i, o = e.doc, s = o.mode;
        t = B(o, t);
        var a, l = L(o, t.line), u = et(e, t.line, n), c = new oa(l.text,e.options.tabSize,u);
        for (r && (a = []); (r || c.pos < t.ch) && !c.eol(); )
            c.start = c.pos,
            i = rt(s, c, u.state),
            r && a.push(new la(c,i,Ge(o.mode, u.state)));
        return r ? a : new la(c,i,u.state)
    }
    function ot(e, t) {
        if (e)
            for (; ; ) {
                var n = e.match(/(?:^|\s+)line-(background-)?(\S+)/);
                if (!n)
                    break;
                e = e.slice(0, n.index) + e.slice(n.index + n[0].length);
                var r = n[1] ? "bgClass" : "textClass";
                null == t[r] ? t[r] = n[2] : new RegExp("(?:^|s)" + n[2] + "(?:$|s)").test(t[r]) || (t[r] += " " + n[2])
            }
        return e
    }
    function st(e, t, n, r, i, o, s) {
        var a = n.flattenSpans;
        null == a && (a = e.options.flattenSpans);
        var l, u = 0, c = null, h = new oa(t,e.options.tabSize,r), d = e.options.addModeClass && [null];
        for ("" == t && ot(nt(n, r.state), o); !h.eol(); ) {
            if (h.pos > e.options.maxHighlightLength ? (a = !1,
            s && tt(e, t, r, h.pos),
            h.pos = t.length,
            l = null) : l = ot(rt(n, h, r.state, d), o),
            d) {
                var f = d[0].name;
                f && (l = "m-" + (l ? f + " " + l : f))
            }
            if (!a || c != l) {
                for (; u < h.start; )
                    u = Math.min(h.start, u + 5e3),
                    i(u, c);
                c = l
            }
            h.start = h.pos
        }
        for (; u < h.pos; ) {
            var p = Math.min(h.pos, u + 5e3);
            i(p, c),
            u = p
        }
    }
    function at(e, t, n) {
        for (var r, i, o = e.doc, s = n ? -1 : t - (e.doc.mode.innerMode ? 1e3 : 100), a = t; a > s; --a) {
            if (a <= o.first)
                return o.first;
            var l = L(o, a - 1)
              , u = l.stateAfter;
            if (u && (!n || a + (u instanceof sa ? u.lookAhead : 0) <= o.modeFrontier))
                return a;
            var c = h(l.text, null, e.options.tabSize);
            (null == i || r > c) && (i = a - 1,
            r = c)
        }
        return i
    }
    function lt(e, t) {
        if (e.modeFrontier = Math.min(e.modeFrontier, t),
        !(e.highlightFrontier < t - 10)) {
            for (var n = e.first, r = t - 1; r > n; r--) {
                var i = L(e, r).stateAfter;
                if (i && (!(i instanceof sa) || r + i.lookAhead < t)) {
                    n = r + 1;
                    break
                }
            }
            e.highlightFrontier = Math.min(e.highlightFrontier, n)
        }
    }
    function ut(e, t, n, r) {
        e.text = t,
        e.stateAfter && (e.stateAfter = null),
        e.styles && (e.styles = null),
        null != e.order && (e.order = null),
        ne(e),
        re(e, n);
        var i = r ? r(e) : 1;
        i != e.height && A(e, i)
    }
    function ct(e) {
        e.parent = null,
        ne(e)
    }
    function ht(e, t) {
        if (!e || /^\s*$/.test(e))
            return null;
        var n = t.addModeClass ? da : ha;
        return n[e] || (n[e] = e.replace(/\S+/g, "cm-$&"))
    }
    function dt(e, t) {
        var n = i("span", null, null, ms ? "padding-right: .1px" : null)
          , r = {
            pre: i("pre", [n], "CodeMirror-line"),
            content: n,
            col: 0,
            pos: 0,
            cm: e,
            trailingSpace: !1,
            splitSpaces: (fs || ms) && e.getOption("lineWrapping")
        };
        t.measure = {};
        for (var o = 0; o <= (t.rest ? t.rest.length : 0); o++) {
            var s = o ? t.rest[o - 1] : t.line
              , a = void 0;
            r.pos = 0,
            r.addToken = pt,
            Be(e.display.measure) && (a = ke(s, e.doc.direction)) && (r.addToken = gt(r.addToken, a)),
            r.map = [];
            var u = t != e.display.externalMeasured && M(s);
            yt(s, r, Ze(e, s, u)),
            s.styleClasses && (s.styleClasses.bgClass && (r.bgClass = l(s.styleClasses.bgClass, r.bgClass || "")),
            s.styleClasses.textClass && (r.textClass = l(s.styleClasses.textClass, r.textClass || ""))),
            0 == r.map.length && r.map.push(0, 0, r.content.appendChild(je(e.display.measure))),
            0 == o ? (t.measure.map = r.map,
            t.measure.cache = {}) : ((t.measure.maps || (t.measure.maps = [])).push(r.map),
            (t.measure.caches || (t.measure.caches = [])).push({}))
        }
        if (ms) {
            var c = r.content.lastChild;
            (/\bcm-tab\b/.test(c.className) || c.querySelector && c.querySelector(".cm-tab")) && (r.content.className = "cm-tab-wrap-hack")
        }
        return Ae(e, "renderLine", e, t.line, r.pre),
        r.pre.className && (r.textClass = l(r.pre.className, r.textClass || "")),
        r
    }
    function ft(e) {
        var t = r("span", "•", "cm-invalidchar");
        return t.title = "\\u" + e.charCodeAt(0).toString(16),
        t.setAttribute("aria-label", t.title),
        t
    }
    function pt(e, t, n, i, o, s, a) {
        if (t) {
            var l, u = e.splitSpaces ? mt(t, e.trailingSpace) : t, c = e.cm.state.specialChars, h = !1;
            if (c.test(t)) {
                l = document.createDocumentFragment();
                for (var d = 0; ; ) {
                    c.lastIndex = d;
                    var f = c.exec(t)
                      , m = f ? f.index - d : t.length - d;
                    if (m) {
                        var g = document.createTextNode(u.slice(d, d + m));
                        fs && 9 > ps ? l.appendChild(r("span", [g])) : l.appendChild(g),
                        e.map.push(e.pos, e.pos + m, g),
                        e.col += m,
                        e.pos += m
                    }
                    if (!f)
                        break;
                    d += m + 1;
                    var v = void 0;
                    if ("	" == f[0]) {
                        var y = e.cm.options.tabSize
                          , b = y - e.col % y;
                        v = l.appendChild(r("span", p(b), "cm-tab")),
                        v.setAttribute("role", "presentation"),
                        v.setAttribute("cm-text", "	"),
                        e.col += b
                    } else
                        "\r" == f[0] || "\n" == f[0] ? (v = l.appendChild(r("span", "\r" == f[0] ? "␍" : "␤", "cm-invalidchar")),
                        v.setAttribute("cm-text", f[0]),
                        e.col += 1) : (v = e.cm.options.specialCharPlaceholder(f[0]),
                        v.setAttribute("cm-text", f[0]),
                        fs && 9 > ps ? l.appendChild(r("span", [v])) : l.appendChild(v),
                        e.col += 1);
                    e.map.push(e.pos, e.pos + 1, v),
                    e.pos++
                }
            } else
                e.col += t.length,
                l = document.createTextNode(u),
                e.map.push(e.pos, e.pos + t.length, l),
                fs && 9 > ps && (h = !0),
                e.pos += t.length;
            if (e.trailingSpace = 32 == u.charCodeAt(t.length - 1),
            n || i || o || h || a) {
                var x = n || "";
                i && (x += i),
                o && (x += o);
                var w = r("span", [l], x, a);
                return s && (w.title = s),
                e.content.appendChild(w)
            }
            e.content.appendChild(l)
        }
    }
    function mt(e, t) {
        if (e.length > 1 && !/  /.test(e))
            return e;
        for (var n = t, r = "", i = 0; i < e.length; i++) {
            var o = e.charAt(i);
            " " != o || !n || i != e.length - 1 && 32 != e.charCodeAt(i + 1) || (o = " "),
            r += o,
            n = " " == o
        }
        return r
    }
    function gt(e, t) {
        return function(n, r, i, o, s, a, l) {
            i = i ? i + " cm-force-border" : "cm-force-border";
            for (var u = n.pos, c = u + r.length; ; ) {
                for (var h = void 0, d = 0; d < t.length && (h = t[d],
                !(h.to > u && h.from <= u)); d++)
                    ;
                if (h.to >= c)
                    return e(n, r, i, o, s, a, l);
                e(n, r.slice(0, h.to - u), i, o, null, a, l),
                o = null,
                r = r.slice(h.to - u),
                u = h.to
            }
        }
    }
    function vt(e, t, n, r) {
        var i = !r && n.widgetNode;
        i && e.map.push(e.pos, e.pos + t, i),
        !r && e.cm.display.input.needsContentAttribute && (i || (i = e.content.appendChild(document.createElement("span"))),
        i.setAttribute("cm-marker", n.id)),
        i && (e.cm.display.input.setUneditable(i),
        e.content.appendChild(i)),
        e.pos += t,
        e.trailingSpace = !1
    }
    function yt(e, t, n) {
        var r = e.markedSpans
          , i = e.text
          , o = 0;
        if (r)
            for (var s, a, l, u, c, h, d, f = i.length, p = 0, m = 1, g = "", v = 0; ; ) {
                if (v == p) {
                    l = u = c = h = a = "",
                    d = null,
                    v = 1 / 0;
                    for (var y = [], b = void 0, x = 0; x < r.length; ++x) {
                        var w = r[x]
                          , _ = w.marker;
                        "bookmark" == _.type && w.from == p && _.widgetNode ? y.push(_) : w.from <= p && (null == w.to || w.to > p || _.collapsed && w.to == p && w.from == p) ? (null != w.to && w.to != p && v > w.to && (v = w.to,
                        u = ""),
                        _.className && (l += " " + _.className),
                        _.css && (a = (a ? a + ";" : "") + _.css),
                        _.startStyle && w.from == p && (c += " " + _.startStyle),
                        _.endStyle && w.to == v && (b || (b = [])).push(_.endStyle, w.to),
                        _.title && !h && (h = _.title),
                        _.collapsed && (!d || se(d.marker, _) < 0) && (d = w)) : w.from > p && v > w.from && (v = w.from)
                    }
                    if (b)
                        for (var k = 0; k < b.length; k += 2)
                            b[k + 1] == v && (u += " " + b[k]);
                    if (!d || d.from == p)
                        for (var S = 0; S < y.length; ++S)
                            vt(t, 0, y[S]);
                    if (d && (d.from || 0) == p) {
                        if (vt(t, (null == d.to ? f + 1 : d.to) - p, d.marker, null == d.from),
                        null == d.to)
                            return;
                        d.to == p && (d = !1)
                    }
                }
                if (p >= f)
                    break;
                for (var C = Math.min(f, v); ; ) {
                    if (g) {
                        var T = p + g.length;
                        if (!d) {
                            var L = T > C ? g.slice(0, C - p) : g;
                            t.addToken(t, L, s ? s + l : l, c, p + L.length == v ? u : "", h, a)
                        }
                        if (T >= C) {
                            g = g.slice(C - p),
                            p = C;
                            break
                        }
                        p = T,
                        c = ""
                    }
                    g = i.slice(o, o = n[m++]),
                    s = ht(n[m++], t.cm.options)
                }
            }
        else
            for (var E = 1; E < n.length; E += 2)
                t.addToken(t, i.slice(o, o = n[E]), ht(n[E + 1], t.cm.options))
    }
    function bt(e, t, n) {
        this.line = t,
        this.rest = fe(t),
        this.size = this.rest ? M(m(this.rest)) - n + 1 : 1,
        this.node = this.text = null,
        this.hidden = ge(e, t)
    }
    function xt(e, t, n) {
        for (var r, i = [], o = t; n > o; o = r) {
            var s = new bt(e.doc,L(e.doc, o),o);
            r = o + s.size,
            i.push(s)
        }
        return i
    }
    function wt(e) {
        fa ? fa.ops.push(e) : e.ownsGroup = fa = {
            ops: [e],
            delayedCallbacks: []
        }
    }
    function _t(e) {
        var t = e.delayedCallbacks
          , n = 0;
        do {
            for (; n < t.length; n++)
                t[n].call(null);
            for (var r = 0; r < e.ops.length; r++) {
                var i = e.ops[r];
                if (i.cursorActivityHandlers)
                    for (; i.cursorActivityCalled < i.cursorActivityHandlers.length; )
                        i.cursorActivityHandlers[i.cursorActivityCalled++].call(null, i.cm)
            }
        } while (n < t.length)
    }
    function kt(e, t) {
        var n = e.ownsGroup;
        if (n)
            try {
                _t(n)
            } finally {
                fa = null,
                t(n)
            }
    }
    function St(e, t) {
        var n = Ee(e, t);
        if (n.length) {
            var r, i = Array.prototype.slice.call(arguments, 2);
            fa ? r = fa.delayedCallbacks : pa ? r = pa : (r = pa = [],
            setTimeout(Ct, 0));
            for (var o = function(e) {
                r.push(function() {
                    return n[e].apply(null, i)
                })
            }, s = 0; s < n.length; ++s)
                o(s)
        }
    }
    function Ct() {
        var e = pa;
        pa = null;
        for (var t = 0; t < e.length; ++t)
            e[t]()
    }
    function Tt(e, t, n, r) {
        for (var i = 0; i < t.changes.length; i++) {
            var o = t.changes[i];
            "text" == o ? At(e, t) : "gutter" == o ? Dt(e, t, n, r) : "class" == o ? Mt(e, t) : "widget" == o && Ot(e, t, r)
        }
        t.changes = null
    }
    function Lt(e) {
        return e.node == e.text && (e.node = r("div", null, null, "position: relative"),
        e.text.parentNode && e.text.parentNode.replaceChild(e.node, e.text),
        e.node.appendChild(e.text),
        fs && 8 > ps && (e.node.style.zIndex = 2)),
        e.node
    }
    function Et(e, t) {
        var n = t.bgClass ? t.bgClass + " " + (t.line.bgClass || "") : t.line.bgClass;
        if (n && (n += " CodeMirror-linebackground"),
        t.background)
            n ? t.background.className = n : (t.background.parentNode.removeChild(t.background),
            t.background = null);
        else if (n) {
            var i = Lt(t);
            t.background = i.insertBefore(r("div", null, n), i.firstChild),
            e.display.input.setUneditable(t.background)
        }
    }
    function Nt(e, t) {
        var n = e.display.externalMeasured;
        return n && n.line == t.line ? (e.display.externalMeasured = null,
        t.measure = n.measure,
        n.built) : dt(e, t)
    }
    function At(e, t) {
        var n = t.text.className
          , r = Nt(e, t);
        t.text == t.node && (t.node = r.pre),
        t.text.parentNode.replaceChild(r.pre, t.text),
        t.text = r.pre,
        r.bgClass != t.bgClass || r.textClass != t.textClass ? (t.bgClass = r.bgClass,
        t.textClass = r.textClass,
        Mt(e, t)) : n && (t.text.className = n)
    }
    function Mt(e, t) {
        Et(e, t),
        t.line.wrapClass ? Lt(t).className = t.line.wrapClass : t.node != t.text && (t.node.className = "");
        var n = t.textClass ? t.textClass + " " + (t.line.textClass || "") : t.line.textClass;
        t.text.className = n || ""
    }
    function Dt(e, t, n, i) {
        if (t.gutter && (t.node.removeChild(t.gutter),
        t.gutter = null),
        t.gutterBackground && (t.node.removeChild(t.gutterBackground),
        t.gutterBackground = null),
        t.line.gutterClass) {
            var o = Lt(t);
            t.gutterBackground = r("div", null, "CodeMirror-gutter-background " + t.line.gutterClass, "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px; width: " + i.gutterTotalWidth + "px"),
            e.display.input.setUneditable(t.gutterBackground),
            o.insertBefore(t.gutterBackground, t.text)
        }
        var s = t.line.gutterMarkers;
        if (e.options.lineNumbers || s) {
            var a = Lt(t)
              , l = t.gutter = r("div", null, "CodeMirror-gutter-wrapper", "left: " + (e.options.fixedGutter ? i.fixedPos : -i.gutterTotalWidth) + "px");
            if (e.display.input.setUneditable(l),
            a.insertBefore(l, t.text),
            t.line.gutterClass && (l.className += " " + t.line.gutterClass),
            !e.options.lineNumbers || s && s["CodeMirror-linenumbers"] || (t.lineNumber = l.appendChild(r("div", I(e.options, n), "CodeMirror-linenumber CodeMirror-gutter-elt", "left: " + i.gutterLeft["CodeMirror-linenumbers"] + "px; width: " + e.display.lineNumInnerWidth + "px"))),
            s)
                for (var u = 0; u < e.options.gutters.length; ++u) {
                    var c = e.options.gutters[u]
                      , h = s.hasOwnProperty(c) && s[c];
                    h && l.appendChild(r("div", [h], "CodeMirror-gutter-elt", "left: " + i.gutterLeft[c] + "px; width: " + i.gutterWidth[c] + "px"))
                }
        }
    }
    function Ot(e, t, n) {
        t.alignable && (t.alignable = null);
        for (var r = t.node.firstChild, i = void 0; r; r = i)
            i = r.nextSibling,
            "CodeMirror-linewidget" == r.className && t.node.removeChild(r);
        Pt(e, t, n)
    }
    function It(e, t, n, r) {
        var i = Nt(e, t);
        return t.text = t.node = i.pre,
        i.bgClass && (t.bgClass = i.bgClass),
        i.textClass && (t.textClass = i.textClass),
        Mt(e, t),
        Dt(e, t, n, r),
        Pt(e, t, r),
        t.node
    }
    function Pt(e, t, n) {
        if (Ht(e, t.line, t, n, !0),
        t.rest)
            for (var r = 0; r < t.rest.length; r++)
                Ht(e, t.rest[r], t, n, !1)
    }
    function Ht(e, t, n, i, o) {
        if (t.widgets)
            for (var s = Lt(n), a = 0, l = t.widgets; a < l.length; ++a) {
                var u = l[a]
                  , c = r("div", [u.node], "CodeMirror-linewidget");
                u.handleMouseEvents || c.setAttribute("cm-ignore-events", "true"),
                Rt(u, c, n, i),
                e.display.input.setUneditable(c),
                o && u.above ? s.insertBefore(c, n.gutter || n.text) : s.appendChild(c),
                St(u, "redraw")
            }
    }
    function Rt(e, t, n, r) {
        if (e.noHScroll) {
            (n.alignable || (n.alignable = [])).push(t);
            var i = r.wrapperWidth;
            t.style.left = r.fixedPos + "px",
            e.coverGutter || (i -= r.gutterTotalWidth,
            t.style.paddingLeft = r.gutterTotalWidth + "px"),
            t.style.width = i + "px"
        }
        e.coverGutter && (t.style.zIndex = 5,
        t.style.position = "relative",
        e.noHScroll || (t.style.marginLeft = -r.gutterTotalWidth + "px"))
    }
    function qt(e) {
        if (null != e.height)
            return e.height;
        var t = e.doc.cm;
        if (!t)
            return 0;
        if (!o(document.body, e.node)) {
            var i = "position: relative;";
            e.coverGutter && (i += "margin-left: -" + t.display.gutters.offsetWidth + "px;"),
            e.noHScroll && (i += "width: " + t.display.wrapper.clientWidth + "px;"),
            n(t.display.measure, r("div", [e.node], null, i))
        }
        return e.height = e.node.parentNode.offsetHeight
    }
    function Ft(e, t) {
        for (var n = Fe(t); n != e.wrapper; n = n.parentNode)
            if (!n || 1 == n.nodeType && "true" == n.getAttribute("cm-ignore-events") || n.parentNode == e.sizer && n != e.mover)
                return !0
    }
    function $t(e) {
        return e.lineSpace.offsetTop
    }
    function jt(e) {
        return e.mover.offsetHeight - e.lineSpace.offsetHeight
    }
    function Bt(e) {
        if (e.cachedPaddingH)
            return e.cachedPaddingH;
        var t = n(e.measure, r("pre", "x"))
          , i = window.getComputedStyle ? window.getComputedStyle(t) : t.currentStyle
          , o = {
            left: parseInt(i.paddingLeft),
            right: parseInt(i.paddingRight)
        };
        return isNaN(o.left) || isNaN(o.right) || (e.cachedPaddingH = o),
        o
    }
    function Wt(e) {
        return Rs - e.display.nativeBarWidth
    }
    function Ut(e) {
        return e.display.scroller.clientWidth - Wt(e) - e.display.barWidth
    }
    function zt(e) {
        return e.display.scroller.clientHeight - Wt(e) - e.display.barHeight
    }
    function Vt(e, t, n) {
        var r = e.options.lineWrapping
          , i = r && Ut(e);
        if (!t.measure.heights || r && t.measure.width != i) {
            var o = t.measure.heights = [];
            if (r) {
                t.measure.width = i;
                for (var s = t.text.firstChild.getClientRects(), a = 0; a < s.length - 1; a++) {
                    var l = s[a]
                      , u = s[a + 1];
                    Math.abs(l.bottom - u.bottom) > 2 && o.push((l.bottom + u.top) / 2 - n.top)
                }
            }
            o.push(n.bottom - n.top)
        }
    }
    function Xt(e, t, n) {
        if (e.line == t)
            return {
                map: e.measure.map,
                cache: e.measure.cache
            };
        for (var r = 0; r < e.rest.length; r++)
            if (e.rest[r] == t)
                return {
                    map: e.measure.maps[r],
                    cache: e.measure.caches[r]
                };
        for (var i = 0; i < e.rest.length; i++)
            if (M(e.rest[i]) > n)
                return {
                    map: e.measure.maps[i],
                    cache: e.measure.caches[i],
                    before: !0
                }
    }
    function Qt(e, t) {
        t = he(t);
        var r = M(t)
          , i = e.display.externalMeasured = new bt(e.doc,t,r);
        i.lineN = r;
        var o = i.built = dt(e, i);
        return i.text = o.pre,
        n(e.display.lineMeasure, o.pre),
        i
    }
    function Gt(e, t, n, r) {
        return Yt(e, Jt(e, t), n, r)
    }
    function Kt(e, t) {
        if (t >= e.display.viewFrom && t < e.display.viewTo)
            return e.display.view[Tn(e, t)];
        var n = e.display.externalMeasured;
        return n && t >= n.lineN && t < n.lineN + n.size ? n : void 0
    }
    function Jt(e, t) {
        var n = M(t)
          , r = Kt(e, n);
        r && !r.text ? r = null : r && r.changes && (Tt(e, r, n, wn(e)),
        e.curOp.forceUpdate = !0),
        r || (r = Qt(e, t));
        var i = Xt(r, t, n);
        return {
            line: t,
            view: r,
            rect: null,
            map: i.map,
            cache: i.cache,
            before: i.before,
            hasHeights: !1
        }
    }
    function Yt(e, t, n, r, i) {
        t.before && (n = -1);
        var o, s = n + (r || "");
        return t.cache.hasOwnProperty(s) ? o = t.cache[s] : (t.rect || (t.rect = t.view.text.getBoundingClientRect()),
        t.hasHeights || (Vt(e, t.view, t.rect),
        t.hasHeights = !0),
        o = tn(e, t, n, r),
        o.bogus || (t.cache[s] = o)),
        {
            left: o.left,
            right: o.right,
            top: i ? o.rtop : o.top,
            bottom: i ? o.rbottom : o.bottom
        }
    }
    function Zt(e, t, n) {
        for (var r, i, o, s, a, l, u = 0; u < e.length; u += 3)
            if (a = e[u],
            l = e[u + 1],
            a > t ? (i = 0,
            o = 1,
            s = "left") : l > t ? (i = t - a,
            o = i + 1) : (u == e.length - 3 || t == l && e[u + 3] > t) && (o = l - a,
            i = o - 1,
            t >= l && (s = "right")),
            null != i) {
                if (r = e[u + 2],
                a == l && n == (r.insertLeft ? "left" : "right") && (s = n),
                "left" == n && 0 == i)
                    for (; u && e[u - 2] == e[u - 3] && e[u - 1].insertLeft; )
                        r = e[(u -= 3) + 2],
                        s = "left";
                if ("right" == n && i == l - a)
                    for (; u < e.length - 3 && e[u + 3] == e[u + 4] && !e[u + 5].insertLeft; )
                        r = e[(u += 3) + 2],
                        s = "right";
                break
            }
        return {
            node: r,
            start: i,
            end: o,
            collapse: s,
            coverStart: a,
            coverEnd: l
        }
    }
    function en(e, t) {
        var n = ma;
        if ("left" == t)
            for (var r = 0; r < e.length && (n = e[r]).left == n.right; r++)
                ;
        else
            for (var i = e.length - 1; i >= 0 && (n = e[i]).left == n.right; i--)
                ;
        return n
    }
    function tn(e, t, n, r) {
        var i, o = Zt(t.map, n, r), s = o.node, a = o.start, l = o.end, u = o.collapse;
        if (3 == s.nodeType) {
            for (var c = 0; 4 > c; c++) {
                for (; a && k(t.line.text.charAt(o.coverStart + a)); )
                    --a;
                for (; o.coverStart + l < o.coverEnd && k(t.line.text.charAt(o.coverStart + l)); )
                    ++l;
                if (i = fs && 9 > ps && 0 == a && l == o.coverEnd - o.coverStart ? s.parentNode.getBoundingClientRect() : en(Ns(s, a, l).getClientRects(), r),
                i.left || i.right || 0 == a)
                    break;
                l = a,
                a -= 1,
                u = "right"
            }
            fs && 11 > ps && (i = nn(e.display.measure, i))
        } else {
            a > 0 && (u = r = "right");
            var h;
            i = e.options.lineWrapping && (h = s.getClientRects()).length > 1 ? h["right" == r ? h.length - 1 : 0] : s.getBoundingClientRect()
        }
        if (fs && 9 > ps && !a && (!i || !i.left && !i.right)) {
            var d = s.parentNode.getClientRects()[0];
            i = d ? {
                left: d.left,
                right: d.left + xn(e.display),
                top: d.top,
                bottom: d.bottom
            } : ma
        }
        for (var f = i.top - t.rect.top, p = i.bottom - t.rect.top, m = (f + p) / 2, g = t.view.measure.heights, v = 0; v < g.length - 1 && !(m < g[v]); v++)
            ;
        var y = v ? g[v - 1] : 0
          , b = g[v]
          , x = {
            left: ("right" == u ? i.right : i.left) - t.rect.left,
            right: ("left" == u ? i.left : i.right) - t.rect.left,
            top: y,
            bottom: b
        };
        return i.left || i.right || (x.bogus = !0),
        e.options.singleCursorHeightPerLine || (x.rtop = f,
        x.rbottom = p),
        x
    }
    function nn(e, t) {
        if (!window.screen || null == screen.logicalXDPI || screen.logicalXDPI == screen.deviceXDPI || !We(e))
            return t;
        var n = screen.logicalXDPI / screen.deviceXDPI
          , r = screen.logicalYDPI / screen.deviceYDPI;
        return {
            left: t.left * n,
            right: t.right * n,
            top: t.top * r,
            bottom: t.bottom * r
        }
    }
    function rn(e) {
        if (e.measure && (e.measure.cache = {},
        e.measure.heights = null,
        e.rest))
            for (var t = 0; t < e.rest.length; t++)
                e.measure.caches[t] = {}
    }
    function on(e) {
        e.display.externalMeasure = null,
        t(e.display.lineMeasure);
        for (var n = 0; n < e.display.view.length; n++)
            rn(e.display.view[n])
    }
    function sn(e) {
        on(e),
        e.display.cachedCharWidth = e.display.cachedTextHeight = e.display.cachedPaddingH = null,
        e.options.lineWrapping || (e.display.maxLineChanged = !0),
        e.display.lineNumChars = null
    }
    function an() {
        return vs && ks ? -(document.body.getBoundingClientRect().left - parseInt(getComputedStyle(document.body).marginLeft)) : window.pageXOffset || (document.documentElement || document.body).scrollLeft
    }
    function ln() {
        return vs && ks ? -(document.body.getBoundingClientRect().top - parseInt(getComputedStyle(document.body).marginTop)) : window.pageYOffset || (document.documentElement || document.body).scrollTop
    }
    function un(e, t, n, r, i) {
        if (!i && t.widgets)
            for (var o = 0; o < t.widgets.length; ++o)
                if (t.widgets[o].above) {
                    var s = qt(t.widgets[o]);
                    n.top += s,
                    n.bottom += s
                }
        if ("line" == r)
            return n;
        r || (r = "local");
        var a = ye(t);
        if ("local" == r ? a += $t(e.display) : a -= e.display.viewOffset,
        "page" == r || "window" == r) {
            var l = e.display.lineSpace.getBoundingClientRect();
            a += l.top + ("window" == r ? 0 : ln());
            var u = l.left + ("window" == r ? 0 : an());
            n.left += u,
            n.right += u
        }
        return n.top += a,
        n.bottom += a,
        n
    }
    function cn(e, t, n) {
        if ("div" == n)
            return t;
        var r = t.left
          , i = t.top;
        if ("page" == n)
            r -= an(),
            i -= ln();
        else if ("local" == n || !n) {
            var o = e.display.sizer.getBoundingClientRect();
            r += o.left,
            i += o.top
        }
        var s = e.display.lineSpace.getBoundingClientRect();
        return {
            left: r - s.left,
            top: i - s.top
        }
    }
    function hn(e, t, n, r, i) {
        return r || (r = L(e.doc, t.line)),
        un(e, r, Gt(e, r, t.ch, i), n)
    }
    function dn(e, t, n, r, i, o) {
        function s(t, s) {
            var a = Yt(e, i, t, s ? "right" : "left", o);
            return s ? a.left = a.right : a.right = a.left,
            un(e, r, a, n)
        }
        function a(e, t, n) {
            var r = l[t]
              , i = r.level % 2 != 0;
            return s(n ? e - 1 : e, i != n)
        }
        r = r || L(e.doc, t.line),
        i || (i = Jt(e, r));
        var l = ke(r, e.doc.direction)
          , u = t.ch
          , c = t.sticky;
        if (u >= r.text.length ? (u = r.text.length,
        c = "before") : 0 >= u && (u = 0,
        c = "after"),
        !l)
            return s("before" == c ? u - 1 : u, "before" == c);
        var h = _e(l, u, c)
          , d = Xs
          , f = a(u, h, "before" == c);
        return null != d && (f.other = a(u, d, "before" != c)),
        f
    }
    function fn(e, t) {
        var n = 0;
        t = B(e.doc, t),
        e.options.lineWrapping || (n = xn(e.display) * t.ch);
        var r = L(e.doc, t.line)
          , i = ye(r) + $t(e.display);
        return {
            left: n,
            right: n,
            top: i,
            bottom: i + r.height
        }
    }
    function pn(e, t, n, r, i) {
        var o = P(e, t, n);
        return o.xRel = i,
        r && (o.outside = !0),
        o
    }
    function mn(e, t, n) {
        var r = e.doc;
        if (n += e.display.viewOffset,
        0 > n)
            return pn(r.first, 0, null, !0, -1);
        var i = D(r, n)
          , o = r.first + r.size - 1;
        if (i > o)
            return pn(r.first + r.size - 1, L(r, o).text.length, null, !0, 1);
        0 > t && (t = 0);
        for (var s = L(r, i); ; ) {
            var a = yn(e, s, i, t, n)
              , l = ue(s)
              , u = l && l.find(0, !0);
            if (!l || !(a.ch > u.from.ch || a.ch == u.from.ch && a.xRel > 0))
                return a;
            i = M(s = u.to.line)
        }
    }
    function gn(e, t, n, r) {
        var i = function(r) {
            return un(e, t, Yt(e, n, r), "line")
        }
          , o = t.text.length
          , s = C(function(e) {
            return i(e - 1).bottom <= r
        }, o, 0);
        return o = C(function(e) {
            return i(e).top > r
        }, s, o),
        {
            begin: s,
            end: o
        }
    }
    function vn(e, t, n, r) {
        var i = un(e, t, Yt(e, n, r), "line").top;
        return gn(e, t, n, i)
    }
    function yn(e, t, n, r, i) {
        i -= ye(t);
        var o, s = 0, a = t.text.length, l = Jt(e, t), u = ke(t, e.doc.direction);
        if (u) {
            if (e.options.lineWrapping) {
                var c;
                c = gn(e, t, l, i),
                s = c.begin,
                a = c.end,
                c
            }
            o = new P(n,Math.floor(s + (a - s) / 2));
            var h, d, f = dn(e, o, "line", t, l).left, p = r > f ? 1 : -1, m = f - r, g = Math.ceil((a - s) / 4);
            e: do {
                h = m,
                d = o;
                for (var v = 0; g > v; ++v) {
                    var y = o;
                    if (o = Le(e, t, o, p),
                    null == o || o.ch < s || a <= ("before" == o.sticky ? o.ch - 1 : o.ch)) {
                        o = y;
                        break e
                    }
                }
                if (m = dn(e, o, "line", t, l).left - r,
                g > 1) {
                    var b = Math.abs(m - h) / g;
                    g = Math.min(g, Math.ceil(Math.abs(m) / b)),
                    p = 0 > m ? 1 : -1
                }
            } while (0 != m && (g > 1 || 0 > p != 0 > m && Math.abs(m) <= Math.abs(h)));
            if (Math.abs(m) > Math.abs(h)) {
                if (0 > m == 0 > h)
                    throw new Error("Broke out of infinite loop in coordsCharInner");
                o = d
            }
        } else {
            var x = C(function(n) {
                var o = un(e, t, Yt(e, l, n), "line");
                return o.top > i ? (a = Math.min(n, a),
                !0) : o.bottom <= i ? !1 : o.left > r ? !0 : o.right < r ? !1 : r - o.left < o.right - r
            }, s, a);
            x = S(t.text, x, 1),
            o = new P(n,x,x == a ? "before" : "after")
        }
        var w = dn(e, o, "line", t, l);
        return (i < w.top || w.bottom < i) && (o.outside = !0),
        o.xRel = r < w.left ? -1 : r > w.right ? 1 : 0,
        o
    }
    function bn(e) {
        if (null != e.cachedTextHeight)
            return e.cachedTextHeight;
        if (null == ca) {
            ca = r("pre");
            for (var i = 0; 49 > i; ++i)
                ca.appendChild(document.createTextNode("x")),
                ca.appendChild(r("br"));
            ca.appendChild(document.createTextNode("x"))
        }
        n(e.measure, ca);
        var o = ca.offsetHeight / 50;
        return o > 3 && (e.cachedTextHeight = o),
        t(e.measure),
        o || 1
    }
    function xn(e) {
        if (null != e.cachedCharWidth)
            return e.cachedCharWidth;
        var t = r("span", "xxxxxxxxxx")
          , i = r("pre", [t]);
        n(e.measure, i);
        var o = t.getBoundingClientRect()
          , s = (o.right - o.left) / 10;
        return s > 2 && (e.cachedCharWidth = s),
        s || 10
    }
    function wn(e) {
        for (var t = e.display, n = {}, r = {}, i = t.gutters.clientLeft, o = t.gutters.firstChild, s = 0; o; o = o.nextSibling,
        ++s)
            n[e.options.gutters[s]] = o.offsetLeft + o.clientLeft + i,
            r[e.options.gutters[s]] = o.clientWidth;
        return {
            fixedPos: _n(t),
            gutterTotalWidth: t.gutters.offsetWidth,
            gutterLeft: n,
            gutterWidth: r,
            wrapperWidth: t.wrapper.clientWidth
        }
    }
    function _n(e) {
        return e.scroller.getBoundingClientRect().left - e.sizer.getBoundingClientRect().left
    }
    function kn(e) {
        var t = bn(e.display)
          , n = e.options.lineWrapping
          , r = n && Math.max(5, e.display.scroller.clientWidth / xn(e.display) - 3);
        return function(i) {
            if (ge(e.doc, i))
                return 0;
            var o = 0;
            if (i.widgets)
                for (var s = 0; s < i.widgets.length; s++)
                    i.widgets[s].height && (o += i.widgets[s].height);
            return n ? o + (Math.ceil(i.text.length / r) || 1) * t : o + t
        }
    }
    function Sn(e) {
        var t = e.doc
          , n = kn(e);
        t.iter(function(e) {
            var t = n(e);
            t != e.height && A(e, t)
        })
    }
    function Cn(e, t, n, r) {
        var i = e.display;
        if (!n && "true" == Fe(t).getAttribute("cm-not-content"))
            return null;
        var o, s, a = i.lineSpace.getBoundingClientRect();
        try {
            o = t.clientX - a.left,
            s = t.clientY - a.top
        } catch (t) {
            return null
        }
        var l, u = mn(e, o, s);
        if (r && 1 == u.xRel && (l = L(e.doc, u.line).text).length == u.ch) {
            var c = h(l, l.length, e.options.tabSize) - l.length;
            u = P(u.line, Math.max(0, Math.round((o - Bt(e.display).left) / xn(e.display)) - c))
        }
        return u
    }
    function Tn(e, t) {
        if (t >= e.display.viewTo)
            return null;
        if (t -= e.display.viewFrom,
        0 > t)
            return null;
        for (var n = e.display.view, r = 0; r < n.length; r++)
            if (t -= n[r].size,
            0 > t)
                return r
    }
    function Ln(e) {
        e.display.input.showSelection(e.display.input.prepareSelection())
    }
    function En(e, t) {
        for (var n = e.doc, r = {}, i = r.cursors = document.createDocumentFragment(), o = r.selection = document.createDocumentFragment(), s = 0; s < n.sel.ranges.length; s++)
            if (t !== !1 || s != n.sel.primIndex) {
                var a = n.sel.ranges[s];
                if (!(a.from().line >= e.display.viewTo || a.to().line < e.display.viewFrom)) {
                    var l = a.empty();
                    (l || e.options.showCursorWhenSelecting) && Nn(e, a.head, i),
                    l || An(e, a, o)
                }
            }
        return r
    }
    function Nn(e, t, n) {
        var i = dn(e, t, "div", null, null, !e.options.singleCursorHeightPerLine)
          , o = n.appendChild(r("div", " ", "CodeMirror-cursor"));
        if (o.style.left = i.left + "px",
        o.style.top = i.top + "px",
        o.style.height = Math.max(0, i.bottom - i.top) * e.options.cursorHeight + "px",
        i.other) {
            var s = n.appendChild(r("div", " ", "CodeMirror-cursor CodeMirror-secondarycursor"));
            s.style.display = "",
            s.style.left = i.other.left + "px",
            s.style.top = i.other.top + "px",
            s.style.height = .85 * (i.other.bottom - i.other.top) + "px"
        }
    }
    function An(e, t, n) {
        function i(e, t, n, i) {
            0 > t && (t = 0),
            t = Math.round(t),
            i = Math.round(i),
            l.appendChild(r("div", null, "CodeMirror-selected", "position: absolute; left: " + e + "px;\n                             top: " + t + "px; width: " + (null == n ? h - e : n) + "px;\n                             height: " + (i - t) + "px"))
        }
        function o(t, n, r) {
            function o(n, r) {
                return hn(e, P(t, n), "div", u, r)
            }
            var s, l, u = L(a, t), d = u.text.length;
            return we(ke(u, a.direction), n || 0, null == r ? d : r, function(e, t, a) {
                var u, f, p, m = o(e, "left");
                if (e == t)
                    u = m,
                    f = p = m.left;
                else {
                    if (u = o(t - 1, "right"),
                    "rtl" == a) {
                        var g = m;
                        m = u,
                        u = g
                    }
                    f = m.left,
                    p = u.right
                }
                null == n && 0 == e && (f = c),
                u.top - m.top > 3 && (i(f, m.top, null, m.bottom),
                f = c,
                m.bottom < u.top && i(f, m.bottom, null, u.top)),
                null == r && t == d && (p = h),
                (!s || m.top < s.top || m.top == s.top && m.left < s.left) && (s = m),
                (!l || u.bottom > l.bottom || u.bottom == l.bottom && u.right > l.right) && (l = u),
                c + 1 > f && (f = c),
                i(f, u.top, p - f, u.bottom)
            }),
            {
                start: s,
                end: l
            }
        }
        var s = e.display
          , a = e.doc
          , l = document.createDocumentFragment()
          , u = Bt(e.display)
          , c = u.left
          , h = Math.max(s.sizerWidth, Ut(e) - s.sizer.offsetLeft) - u.right
          , d = t.from()
          , f = t.to();
        if (d.line == f.line)
            o(d.line, d.ch, f.ch);
        else {
            var p = L(a, d.line)
              , m = L(a, f.line)
              , g = he(p) == he(m)
              , v = o(d.line, d.ch, g ? p.text.length + 1 : null).end
              , y = o(f.line, g ? 0 : null, f.ch).start;
            g && (v.top < y.top - 2 ? (i(v.right, v.top, null, v.bottom),
            i(c, y.top, y.left, y.bottom)) : i(v.right, v.top, y.left - v.right, v.bottom)),
            v.bottom < y.top && i(c, v.bottom, null, y.top)
        }
        n.appendChild(l)
    }
    function Mn(e) {
        if (e.state.focused) {
            var t = e.display;
            clearInterval(t.blinker);
            var n = !0;
            t.cursorDiv.style.visibility = "",
            e.options.cursorBlinkRate > 0 ? t.blinker = setInterval(function() {
                return t.cursorDiv.style.visibility = (n = !n) ? "" : "hidden"
            }, e.options.cursorBlinkRate) : e.options.cursorBlinkRate < 0 && (t.cursorDiv.style.visibility = "hidden")
        }
    }
    function Dn(e) {
        e.state.focused || (e.display.input.focus(),
        In(e))
    }
    function On(e) {
        e.state.delayingBlurEvent = !0,
        setTimeout(function() {
            e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1,
            Pn(e))
        }, 100)
    }
    function In(e, t) {
        e.state.delayingBlurEvent && (e.state.delayingBlurEvent = !1),
        "nocursor" != e.options.readOnly && (e.state.focused || (Ae(e, "focus", e, t),
        e.state.focused = !0,
        a(e.display.wrapper, "CodeMirror-focused"),
        e.curOp || e.display.selForContextMenu == e.doc.sel || (e.display.input.reset(),
        ms && setTimeout(function() {
            return e.display.input.reset(!0)
        }, 20)),
        e.display.input.receivedFocus()),
        Mn(e))
    }
    function Pn(e, t) {
        e.state.delayingBlurEvent || (e.state.focused && (Ae(e, "blur", e, t),
        e.state.focused = !1,
        Ds(e.display.wrapper, "CodeMirror-focused")),
        clearInterval(e.display.blinker),
        setTimeout(function() {
            e.state.focused || (e.display.shift = !1)
        }, 150))
    }
    function Hn(e) {
        for (var t = e.display, n = t.lineDiv.offsetTop, r = 0; r < t.view.length; r++) {
            var i = t.view[r]
              , o = void 0;
            if (!i.hidden) {
                if (fs && 8 > ps) {
                    var s = i.node.offsetTop + i.node.offsetHeight;
                    o = s - n,
                    n = s
                } else {
                    var a = i.node.getBoundingClientRect();
                    o = a.bottom - a.top
                }
                var l = i.line.height - o;
                if (2 > o && (o = bn(t)),
                (l > .005 || -.005 > l) && (A(i.line, o),
                Rn(i.line),
                i.rest))
                    for (var u = 0; u < i.rest.length; u++)
                        Rn(i.rest[u])
            }
        }
    }
    function Rn(e) {
        if (e.widgets)
            for (var t = 0; t < e.widgets.length; ++t)
                e.widgets[t].height = e.widgets[t].node.parentNode.offsetHeight
    }
    function qn(e, t, n) {
        var r = n && null != n.top ? Math.max(0, n.top) : e.scroller.scrollTop;
        r = Math.floor(r - $t(e));
        var i = n && null != n.bottom ? n.bottom : r + e.wrapper.clientHeight
          , o = D(t, r)
          , s = D(t, i);
        if (n && n.ensure) {
            var a = n.ensure.from.line
              , l = n.ensure.to.line;
            o > a ? (o = a,
            s = D(t, ye(L(t, a)) + e.wrapper.clientHeight)) : Math.min(l, t.lastLine()) >= s && (o = D(t, ye(L(t, l)) - e.wrapper.clientHeight),
            s = l)
        }
        return {
            from: o,
            to: Math.max(s, o + 1)
        }
    }
    function Fn(e) {
        var t = e.display
          , n = t.view;
        if (t.alignWidgets || t.gutters.firstChild && e.options.fixedGutter) {
            for (var r = _n(t) - t.scroller.scrollLeft + e.doc.scrollLeft, i = t.gutters.offsetWidth, o = r + "px", s = 0; s < n.length; s++)
                if (!n[s].hidden) {
                    e.options.fixedGutter && (n[s].gutter && (n[s].gutter.style.left = o),
                    n[s].gutterBackground && (n[s].gutterBackground.style.left = o));
                    var a = n[s].alignable;
                    if (a)
                        for (var l = 0; l < a.length; l++)
                            a[l].style.left = o
                }
            e.options.fixedGutter && (t.gutters.style.left = r + i + "px")
        }
    }
    function $n(e) {
        if (!e.options.lineNumbers)
            return !1;
        var t = e.doc
          , n = I(e.options, t.first + t.size - 1)
          , i = e.display;
        if (n.length != i.lineNumChars) {
            var o = i.measure.appendChild(r("div", [r("div", n)], "CodeMirror-linenumber CodeMirror-gutter-elt"))
              , s = o.firstChild.offsetWidth
              , a = o.offsetWidth - s;
            return i.lineGutter.style.width = "",
            i.lineNumInnerWidth = Math.max(s, i.lineGutter.offsetWidth - a) + 1,
            i.lineNumWidth = i.lineNumInnerWidth + a,
            i.lineNumChars = i.lineNumInnerWidth ? n.length : -1,
            i.lineGutter.style.width = i.lineNumWidth + "px",
            Mr(e),
            !0
        }
        return !1
    }
    function jn(e, t) {
        if (!Me(e, "scrollCursorIntoView")) {
            var n = e.display
              , i = n.sizer.getBoundingClientRect()
              , o = null;
            if (t.top + i.top < 0 ? o = !0 : t.bottom + i.top > (window.innerHeight || document.documentElement.clientHeight) && (o = !1),
            null != o && !ws) {
                var s = r("div", "​", null, "position: absolute;\n                         top: " + (t.top - n.viewOffset - $t(e.display)) + "px;\n                         height: " + (t.bottom - t.top + Wt(e) + n.barHeight) + "px;\n                         left: " + t.left + "px; width: " + Math.max(2, t.right - t.left) + "px;");
                e.display.lineSpace.appendChild(s),
                s.scrollIntoView(o),
                e.display.lineSpace.removeChild(s)
            }
        }
    }
    function Bn(e, t, n, r) {
        null == r && (r = 0);
        var i;
        e.options.lineWrapping || t != n || (t = t.ch ? P(t.line, "before" == t.sticky ? t.ch - 1 : t.ch, "after") : t,
        n = "before" == t.sticky ? P(t.line, t.ch + 1, "before") : t);
        for (var o = 0; 5 > o; o++) {
            var s = !1
              , a = dn(e, t)
              , l = n && n != t ? dn(e, n) : a;
            i = {
                left: Math.min(a.left, l.left),
                top: Math.min(a.top, l.top) - r,
                right: Math.max(a.left, l.left),
                bottom: Math.max(a.bottom, l.bottom) + r
            };
            var u = Un(e, i)
              , c = e.doc.scrollTop
              , h = e.doc.scrollLeft;
            if (null != u.scrollTop && (Jn(e, u.scrollTop),
            Math.abs(e.doc.scrollTop - c) > 1 && (s = !0)),
            null != u.scrollLeft && (Zn(e, u.scrollLeft),
            Math.abs(e.doc.scrollLeft - h) > 1 && (s = !0)),
            !s)
                break
        }
        return i
    }
    function Wn(e, t) {
        var n = Un(e, t);
        null != n.scrollTop && Jn(e, n.scrollTop),
        null != n.scrollLeft && Zn(e, n.scrollLeft)
    }
    function Un(e, t) {
        var n = e.display
          , r = bn(e.display);
        t.top < 0 && (t.top = 0);
        var i = e.curOp && null != e.curOp.scrollTop ? e.curOp.scrollTop : n.scroller.scrollTop
          , o = zt(e)
          , s = {};
        t.bottom - t.top > o && (t.bottom = t.top + o);
        var a = e.doc.height + jt(n)
          , l = t.top < r
          , u = t.bottom > a - r;
        if (t.top < i)
            s.scrollTop = l ? 0 : t.top;
        else if (t.bottom > i + o) {
            var c = Math.min(t.top, (u ? a : t.bottom) - o);
            c != i && (s.scrollTop = c)
        }
        var h = e.curOp && null != e.curOp.scrollLeft ? e.curOp.scrollLeft : n.scroller.scrollLeft
          , d = Ut(e) - (e.options.fixedGutter ? n.gutters.offsetWidth : 0)
          , f = t.right - t.left > d;
        return f && (t.right = t.left + d),
        t.left < 10 ? s.scrollLeft = 0 : t.left < h ? s.scrollLeft = Math.max(0, t.left - (f ? 0 : 10)) : t.right > d + h - 3 && (s.scrollLeft = t.right + (f ? 0 : 10) - d),
        s
    }
    function zn(e, t) {
        null != t && (Gn(e),
        e.curOp.scrollTop = (null == e.curOp.scrollTop ? e.doc.scrollTop : e.curOp.scrollTop) + t)
    }
    function Vn(e) {
        Gn(e);
        var t = e.getCursor();
        e.curOp.scrollToPos = {
            from: t,
            to: t,
            margin: e.options.cursorScrollMargin
        }
    }
    function Xn(e, t, n) {
        (null != t || null != n) && Gn(e),
        null != t && (e.curOp.scrollLeft = t),
        null != n && (e.curOp.scrollTop = n)
    }
    function Qn(e, t) {
        Gn(e),
        e.curOp.scrollToPos = t
    }
    function Gn(e) {
        var t = e.curOp.scrollToPos;
        if (t) {
            e.curOp.scrollToPos = null;
            var n = fn(e, t.from)
              , r = fn(e, t.to);
            Kn(e, n, r, t.margin)
        }
    }
    function Kn(e, t, n, r) {
        var i = Un(e, {
            left: Math.min(t.left, n.left),
            top: Math.min(t.top, n.top) - r,
            right: Math.max(t.right, n.right),
            bottom: Math.max(t.bottom, n.bottom) + r
        });
        Xn(e, i.scrollLeft, i.scrollTop)
    }
    function Jn(e, t) {
        Math.abs(e.doc.scrollTop - t) < 2 || (us || Nr(e, {
            top: t
        }),
        Yn(e, t, !0),
        us && Nr(e),
        _r(e, 100))
    }
    function Yn(e, t, n) {
        t = Math.min(e.display.scroller.scrollHeight - e.display.scroller.clientHeight, t),
        (e.display.scroller.scrollTop != t || n) && (e.doc.scrollTop = t,
        e.display.scrollbars.setScrollTop(t),
        e.display.scroller.scrollTop != t && (e.display.scroller.scrollTop = t))
    }
    function Zn(e, t, n, r) {
        t = Math.min(t, e.display.scroller.scrollWidth - e.display.scroller.clientWidth),
        (!(n ? t == e.doc.scrollLeft : Math.abs(e.doc.scrollLeft - t) < 2) || r) && (e.doc.scrollLeft = t,
        Fn(e),
        e.display.scroller.scrollLeft != t && (e.display.scroller.scrollLeft = t),
        e.display.scrollbars.setScrollLeft(t))
    }
    function er(e) {
        var t = e.display
          , n = t.gutters.offsetWidth
          , r = Math.round(e.doc.height + jt(e.display));
        return {
            clientHeight: t.scroller.clientHeight,
            viewHeight: t.wrapper.clientHeight,
            scrollWidth: t.scroller.scrollWidth,
            clientWidth: t.scroller.clientWidth,
            viewWidth: t.wrapper.clientWidth,
            barLeft: e.options.fixedGutter ? n : 0,
            docHeight: r,
            scrollHeight: r + Wt(e) + t.barHeight,
            nativeBarWidth: t.nativeBarWidth,
            gutterWidth: n
        }
    }
    function tr(e, t) {
        t || (t = er(e));
        var n = e.display.barWidth
          , r = e.display.barHeight;
        nr(e, t);
        for (var i = 0; 4 > i && n != e.display.barWidth || r != e.display.barHeight; i++)
            n != e.display.barWidth && e.options.lineWrapping && Hn(e),
            nr(e, er(e)),
            n = e.display.barWidth,
            r = e.display.barHeight
    }
    function nr(e, t) {
        var n = e.display
          , r = n.scrollbars.update(t);
        n.sizer.style.paddingRight = (n.barWidth = r.right) + "px",
        n.sizer.style.paddingBottom = (n.barHeight = r.bottom) + "px",
        n.heightForcer.style.borderBottom = r.bottom + "px solid transparent",
        r.right && r.bottom ? (n.scrollbarFiller.style.display = "block",
        n.scrollbarFiller.style.height = r.bottom + "px",
        n.scrollbarFiller.style.width = r.right + "px") : n.scrollbarFiller.style.display = "",
        r.bottom && e.options.coverGutterNextToScrollbar && e.options.fixedGutter ? (n.gutterFiller.style.display = "block",
        n.gutterFiller.style.height = r.bottom + "px",
        n.gutterFiller.style.width = t.gutterWidth + "px") : n.gutterFiller.style.display = ""
    }
    function rr(e) {
        e.display.scrollbars && (e.display.scrollbars.clear(),
        e.display.scrollbars.addClass && Ds(e.display.wrapper, e.display.scrollbars.addClass)),
        e.display.scrollbars = new ya[e.options.scrollbarStyle](function(t) {
            e.display.wrapper.insertBefore(t, e.display.scrollbarFiller),
            Ks(t, "mousedown", function() {
                e.state.focused && setTimeout(function() {
                    return e.display.input.focus()
                }, 0)
            }),
            t.setAttribute("cm-not-content", "true")
        }
        ,function(t, n) {
            "horizontal" == n ? Zn(e, t) : Jn(e, t)
        }
        ,e),
        e.display.scrollbars.addClass && a(e.display.wrapper, e.display.scrollbars.addClass)
    }
    function ir(e) {
        e.curOp = {
            cm: e,
            viewChanged: !1,
            startHeight: e.doc.height,
            forceUpdate: !1,
            updateInput: null,
            typing: !1,
            changeObjs: null,
            cursorActivityHandlers: null,
            cursorActivityCalled: 0,
            selectionChanged: !1,
            updateMaxLine: !1,
            scrollLeft: null,
            scrollTop: null,
            scrollToPos: null,
            focus: !1,
            id: ++ba
        },
        wt(e.curOp)
    }
    function or(e) {
        var t = e.curOp;
        kt(t, function(e) {
            for (var t = 0; t < e.ops.length; t++)
                e.ops[t].cm.curOp = null;
            sr(e)
        })
    }
    function sr(e) {
        for (var t = e.ops, n = 0; n < t.length; n++)
            ar(t[n]);
        for (var r = 0; r < t.length; r++)
            lr(t[r]);
        for (var i = 0; i < t.length; i++)
            ur(t[i]);
        for (var o = 0; o < t.length; o++)
            cr(t[o]);
        for (var s = 0; s < t.length; s++)
            hr(t[s])
    }
    function ar(e) {
        var t = e.cm
          , n = t.display;
        Sr(t),
        e.updateMaxLine && xe(t),
        e.mustUpdate = e.viewChanged || e.forceUpdate || null != e.scrollTop || e.scrollToPos && (e.scrollToPos.from.line < n.viewFrom || e.scrollToPos.to.line >= n.viewTo) || n.maxLineChanged && t.options.lineWrapping,
        e.update = e.mustUpdate && new xa(t,e.mustUpdate && {
            top: e.scrollTop,
            ensure: e.scrollToPos
        },e.forceUpdate)
    }
    function lr(e) {
        e.updatedDisplay = e.mustUpdate && Lr(e.cm, e.update)
    }
    function ur(e) {
        var t = e.cm
          , n = t.display;
        e.updatedDisplay && Hn(t),
        e.barMeasure = er(t),
        n.maxLineChanged && !t.options.lineWrapping && (e.adjustWidthTo = Gt(t, n.maxLine, n.maxLine.text.length).left + 3,
        t.display.sizerWidth = e.adjustWidthTo,
        e.barMeasure.scrollWidth = Math.max(n.scroller.clientWidth, n.sizer.offsetLeft + e.adjustWidthTo + Wt(t) + t.display.barWidth),
        e.maxScrollLeft = Math.max(0, n.sizer.offsetLeft + e.adjustWidthTo - Ut(t))),
        (e.updatedDisplay || e.selectionChanged) && (e.preparedSelection = n.input.prepareSelection(e.focus))
    }
    function cr(e) {
        var t = e.cm;
        null != e.adjustWidthTo && (t.display.sizer.style.minWidth = e.adjustWidthTo + "px",
        e.maxScrollLeft < t.doc.scrollLeft && Zn(t, Math.min(t.display.scroller.scrollLeft, e.maxScrollLeft), !0),
        t.display.maxLineChanged = !1);
        var n = e.focus && e.focus == s() && (!document.hasFocus || document.hasFocus());
        e.preparedSelection && t.display.input.showSelection(e.preparedSelection, n),
        (e.updatedDisplay || e.startHeight != t.doc.height) && tr(t, e.barMeasure),
        e.updatedDisplay && Dr(t, e.barMeasure),
        e.selectionChanged && Mn(t),
        t.state.focused && e.updateInput && t.display.input.reset(e.typing),
        n && Dn(e.cm)
    }
    function hr(e) {
        var t = e.cm
          , n = t.display
          , r = t.doc;
        if (e.updatedDisplay && Er(t, e.update),
        null == n.wheelStartX || null == e.scrollTop && null == e.scrollLeft && !e.scrollToPos || (n.wheelStartX = n.wheelStartY = null),
        null != e.scrollTop && Yn(t, e.scrollTop, e.forceScroll),
        null != e.scrollLeft && Zn(t, e.scrollLeft, !0, !0),
        e.scrollToPos) {
            var i = Bn(t, B(r, e.scrollToPos.from), B(r, e.scrollToPos.to), e.scrollToPos.margin);
            jn(t, i)
        }
        var o = e.maybeHiddenMarkers
          , s = e.maybeUnhiddenMarkers;
        if (o)
            for (var a = 0; a < o.length; ++a)
                o[a].lines.length || Ae(o[a], "hide");
        if (s)
            for (var l = 0; l < s.length; ++l)
                s[l].lines.length && Ae(s[l], "unhide");
        n.wrapper.offsetHeight && (r.scrollTop = t.display.scroller.scrollTop),
        e.changeObjs && Ae(t, "changes", t, e.changeObjs),
        e.update && e.update.finish()
    }
    function dr(e, t) {
        if (e.curOp)
            return t();
        ir(e);
        try {
            return t()
        } finally {
            or(e)
        }
    }
    function fr(e, t) {
        return function() {
            if (e.curOp)
                return t.apply(e, arguments);
            ir(e);
            try {
                return t.apply(e, arguments)
            } finally {
                or(e)
            }
        }
    }
    function pr(e) {
        return function() {
            if (this.curOp)
                return e.apply(this, arguments);
            ir(this);
            try {
                return e.apply(this, arguments)
            } finally {
                or(this)
            }
        }
    }
    function mr(e) {
        return function() {
            var t = this.cm;
            if (!t || t.curOp)
                return e.apply(this, arguments);
            ir(t);
            try {
                return e.apply(this, arguments)
            } finally {
                or(t)
            }
        }
    }
    function gr(e, t, n, r) {
        null == t && (t = e.doc.first),
        null == n && (n = e.doc.first + e.doc.size),
        r || (r = 0);
        var i = e.display;
        if (r && n < i.viewTo && (null == i.updateLineNumbers || i.updateLineNumbers > t) && (i.updateLineNumbers = t),
        e.curOp.viewChanged = !0,
        t >= i.viewTo)
            Vs && pe(e.doc, t) < i.viewTo && yr(e);
        else if (n <= i.viewFrom)
            Vs && me(e.doc, n + r) > i.viewFrom ? yr(e) : (i.viewFrom += r,
            i.viewTo += r);
        else if (t <= i.viewFrom && n >= i.viewTo)
            yr(e);
        else if (t <= i.viewFrom) {
            var o = br(e, n, n + r, 1);
            o ? (i.view = i.view.slice(o.index),
            i.viewFrom = o.lineN,
            i.viewTo += r) : yr(e)
        } else if (n >= i.viewTo) {
            var s = br(e, t, t, -1);
            s ? (i.view = i.view.slice(0, s.index),
            i.viewTo = s.lineN) : yr(e)
        } else {
            var a = br(e, t, t, -1)
              , l = br(e, n, n + r, 1);
            a && l ? (i.view = i.view.slice(0, a.index).concat(xt(e, a.lineN, l.lineN)).concat(i.view.slice(l.index)),
            i.viewTo += r) : yr(e)
        }
        var u = i.externalMeasured;
        u && (n < u.lineN ? u.lineN += r : t < u.lineN + u.size && (i.externalMeasured = null))
    }
    function vr(e, t, n) {
        e.curOp.viewChanged = !0;
        var r = e.display
          , i = e.display.externalMeasured;
        if (i && t >= i.lineN && t < i.lineN + i.size && (r.externalMeasured = null),
        !(t < r.viewFrom || t >= r.viewTo)) {
            var o = r.view[Tn(e, t)];
            if (null != o.node) {
                var s = o.changes || (o.changes = []);
                -1 == d(s, n) && s.push(n)
            }
        }
    }
    function yr(e) {
        e.display.viewFrom = e.display.viewTo = e.doc.first,
        e.display.view = [],
        e.display.viewOffset = 0
    }
    function br(e, t, n, r) {
        var i, o = Tn(e, t), s = e.display.view;
        if (!Vs || n == e.doc.first + e.doc.size)
            return {
                index: o,
                lineN: n
            };
        for (var a = e.display.viewFrom, l = 0; o > l; l++)
            a += s[l].size;
        if (a != t) {
            if (r > 0) {
                if (o == s.length - 1)
                    return null;
                i = a + s[o].size - t,
                o++
            } else
                i = a - t;
            t += i,
            n += i
        }
        for (; pe(e.doc, n) != n; ) {
            if (o == (0 > r ? 0 : s.length - 1))
                return null;
            n += r * s[o - (0 > r ? 1 : 0)].size,
            o += r
        }
        return {
            index: o,
            lineN: n
        }
    }
    function xr(e, t, n) {
        var r = e.display
          , i = r.view;
        0 == i.length || t >= r.viewTo || n <= r.viewFrom ? (r.view = xt(e, t, n),
        r.viewFrom = t) : (r.viewFrom > t ? r.view = xt(e, t, r.viewFrom).concat(r.view) : r.viewFrom < t && (r.view = r.view.slice(Tn(e, t))),
        r.viewFrom = t,
        r.viewTo < n ? r.view = r.view.concat(xt(e, r.viewTo, n)) : r.viewTo > n && (r.view = r.view.slice(0, Tn(e, n)))),
        r.viewTo = n
    }
    function wr(e) {
        for (var t = e.display.view, n = 0, r = 0; r < t.length; r++) {
            var i = t[r];
            i.hidden || i.node && !i.changes || ++n
        }
        return n
    }
    function _r(e, t) {
        e.doc.highlightFrontier < e.display.viewTo && e.state.highlight.set(t, u(kr, e))
    }
    function kr(e) {
        var t = e.doc;
        if (!(t.highlightFrontier >= e.display.viewTo)) {
            var n = +new Date + e.options.workTime
              , r = et(e, t.highlightFrontier)
              , i = [];
            t.iter(r.line, Math.min(t.first + t.size, e.display.viewTo + 500), function(o) {
                if (r.line >= e.display.viewFrom) {
                    var s = o.styles
                      , a = o.text.length > e.options.maxHighlightLength ? Ge(t.mode, r.state) : null
                      , l = Ye(e, o, r, !0);
                    a && (r.state = a),
                    o.styles = l.styles;
                    var u = o.styleClasses
                      , c = l.classes;
                    c ? o.styleClasses = c : u && (o.styleClasses = null);
                    for (var h = !s || s.length != o.styles.length || u != c && (!u || !c || u.bgClass != c.bgClass || u.textClass != c.textClass), d = 0; !h && d < s.length; ++d)
                        h = s[d] != o.styles[d];
                    h && i.push(r.line),
                    o.stateAfter = r.save(),
                    r.nextLine()
                } else
                    o.text.length <= e.options.maxHighlightLength && tt(e, o.text, r),
                    o.stateAfter = r.line % 5 == 0 ? r.save() : null,
                    r.nextLine();
                return +new Date > n ? (_r(e, e.options.workDelay),
                !0) : void 0
            }),
            t.highlightFrontier = r.line,
            t.modeFrontier = Math.max(t.modeFrontier, r.line),
            i.length && dr(e, function() {
                for (var t = 0; t < i.length; t++)
                    vr(e, i[t], "text")
            })
        }
    }
    function Sr(e) {
        var t = e.display;
        !t.scrollbarsClipped && t.scroller.offsetWidth && (t.nativeBarWidth = t.scroller.offsetWidth - t.scroller.clientWidth,
        t.heightForcer.style.height = Wt(e) + "px",
        t.sizer.style.marginBottom = -t.nativeBarWidth + "px",
        t.sizer.style.borderRightWidth = Wt(e) + "px",
        t.scrollbarsClipped = !0)
    }
    function Cr(e) {
        if (e.hasFocus())
            return null;
        var t = s();
        if (!t || !o(e.display.lineDiv, t))
            return null;
        var n = {
            activeElt: t
        };
        if (window.getSelection) {
            var r = window.getSelection();
            r.anchorNode && r.extend && o(e.display.lineDiv, r.anchorNode) && (n.anchorNode = r.anchorNode,
            n.anchorOffset = r.anchorOffset,
            n.focusNode = r.focusNode,
            n.focusOffset = r.focusOffset)
        }
        return n
    }
    function Tr(e) {
        if (e && e.activeElt && e.activeElt != s() && (e.activeElt.focus(),
        e.anchorNode && o(document.body, e.anchorNode) && o(document.body, e.focusNode))) {
            var t = window.getSelection()
              , n = document.createRange();
            n.setEnd(e.anchorNode, e.anchorOffset),
            n.collapse(!1),
            t.removeAllRanges(),
            t.addRange(n),
            t.extend(e.focusNode, e.focusOffset)
        }
    }
    function Lr(e, n) {
        var r = e.display
          , i = e.doc;
        if (n.editorIsHidden)
            return yr(e),
            !1;
        if (!n.force && n.visible.from >= r.viewFrom && n.visible.to <= r.viewTo && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo) && r.renderedView == r.view && 0 == wr(e))
            return !1;
        $n(e) && (yr(e),
        n.dims = wn(e));
        var o = i.first + i.size
          , s = Math.max(n.visible.from - e.options.viewportMargin, i.first)
          , a = Math.min(o, n.visible.to + e.options.viewportMargin);
        r.viewFrom < s && s - r.viewFrom < 20 && (s = Math.max(i.first, r.viewFrom)),
        r.viewTo > a && r.viewTo - a < 20 && (a = Math.min(o, r.viewTo)),
        Vs && (s = pe(e.doc, s),
        a = me(e.doc, a));
        var l = s != r.viewFrom || a != r.viewTo || r.lastWrapHeight != n.wrapperHeight || r.lastWrapWidth != n.wrapperWidth;
        xr(e, s, a),
        r.viewOffset = ye(L(e.doc, r.viewFrom)),
        e.display.mover.style.top = r.viewOffset + "px";
        var u = wr(e);
        if (!l && 0 == u && !n.force && r.renderedView == r.view && (null == r.updateLineNumbers || r.updateLineNumbers >= r.viewTo))
            return !1;
        var c = Cr(e);
        return u > 4 && (r.lineDiv.style.display = "none"),
        Ar(e, r.updateLineNumbers, n.dims),
        u > 4 && (r.lineDiv.style.display = ""),
        r.renderedView = r.view,
        Tr(c),
        t(r.cursorDiv),
        t(r.selectionDiv),
        r.gutters.style.height = r.sizer.style.minHeight = 0,
        l && (r.lastWrapHeight = n.wrapperHeight,
        r.lastWrapWidth = n.wrapperWidth,
        _r(e, 400)),
        r.updateLineNumbers = null,
        !0
    }
    function Er(e, t) {
        for (var n = t.viewport, r = !0; (r && e.options.lineWrapping && t.oldDisplayWidth != Ut(e) || (n && null != n.top && (n = {
            top: Math.min(e.doc.height + jt(e.display) - zt(e), n.top)
        }),
        t.visible = qn(e.display, e.doc, n),
        !(t.visible.from >= e.display.viewFrom && t.visible.to <= e.display.viewTo))) && Lr(e, t); r = !1) {
            Hn(e);
            var i = er(e);
            Ln(e),
            tr(e, i),
            Dr(e, i),
            t.force = !1
        }
        t.signal(e, "update", e),
        (e.display.viewFrom != e.display.reportedViewFrom || e.display.viewTo != e.display.reportedViewTo) && (t.signal(e, "viewportChange", e, e.display.viewFrom, e.display.viewTo),
        e.display.reportedViewFrom = e.display.viewFrom,
        e.display.reportedViewTo = e.display.viewTo)
    }
    function Nr(e, t) {
        var n = new xa(e,t);
        if (Lr(e, n)) {
            Hn(e),
            Er(e, n);
            var r = er(e);
            Ln(e),
            tr(e, r),
            Dr(e, r),
            n.finish()
        }
    }
    function Ar(e, n, r) {
        function i(t) {
            var n = t.nextSibling;
            return ms && Cs && e.display.currentWheelTarget == t ? t.style.display = "none" : t.parentNode.removeChild(t),
            n
        }
        for (var o = e.display, s = e.options.lineNumbers, a = o.lineDiv, l = a.firstChild, u = o.view, c = o.viewFrom, h = 0; h < u.length; h++) {
            var f = u[h];
            if (f.hidden)
                ;
            else if (f.node && f.node.parentNode == a) {
                for (; l != f.node; )
                    l = i(l);
                var p = s && null != n && c >= n && f.lineNumber;
                f.changes && (d(f.changes, "gutter") > -1 && (p = !1),
                Tt(e, f, c, r)),
                p && (t(f.lineNumber),
                f.lineNumber.appendChild(document.createTextNode(I(e.options, c)))),
                l = f.node.nextSibling
            } else {
                var m = It(e, f, c, r);
                a.insertBefore(m, l)
            }
            c += f.size
        }
        for (; l; )
            l = i(l)
    }
    function Mr(e) {
        var t = e.display.gutters.offsetWidth;
        e.display.sizer.style.marginLeft = t + "px"
    }
    function Dr(e, t) {
        e.display.sizer.style.minHeight = t.docHeight + "px",
        e.display.heightForcer.style.top = t.docHeight + "px",
        e.display.gutters.style.height = t.docHeight + e.display.barHeight + Wt(e) + "px"
    }
    function Or(e) {
        var n = e.display.gutters
          , i = e.options.gutters;
        t(n);
        for (var o = 0; o < i.length; ++o) {
            var s = i[o]
              , a = n.appendChild(r("div", null, "CodeMirror-gutter " + s));
            "CodeMirror-linenumbers" == s && (e.display.lineGutter = a,
            a.style.width = (e.display.lineNumWidth || 1) + "px")
        }
        n.style.display = o ? "" : "none",
        Mr(e)
    }
    function Ir(e) {
        var t = d(e.gutters, "CodeMirror-linenumbers");
        -1 == t && e.lineNumbers ? e.gutters = e.gutters.concat(["CodeMirror-linenumbers"]) : t > -1 && !e.lineNumbers && (e.gutters = e.gutters.slice(0),
        e.gutters.splice(t, 1))
    }
    function Pr(e) {
        var t = e.wheelDeltaX
          , n = e.wheelDeltaY;
        return null == t && e.detail && e.axis == e.HORIZONTAL_AXIS && (t = e.detail),
        null == n && e.detail && e.axis == e.VERTICAL_AXIS ? n = e.detail : null == n && (n = e.wheelDelta),
        {
            x: t,
            y: n
        }
    }
    function Hr(e) {
        var t = Pr(e);
        return t.x *= _a,
        t.y *= _a,
        t
    }
    function Rr(e, t) {
        var n = Pr(t)
          , r = n.x
          , i = n.y
          , o = e.display
          , s = o.scroller
          , a = s.scrollWidth > s.clientWidth
          , l = s.scrollHeight > s.clientHeight;
        if (r && a || i && l) {
            if (i && Cs && ms)
                e: for (var u = t.target, c = o.view; u != s; u = u.parentNode)
                    for (var h = 0; h < c.length; h++)
                        if (c[h].node == u) {
                            e.display.currentWheelTarget = u;
                            break e
                        }
            if (r && !us && !ys && null != _a)
                return i && l && Jn(e, Math.max(0, s.scrollTop + i * _a)),
                Zn(e, Math.max(0, s.scrollLeft + r * _a)),
                (!i || i && l) && Pe(t),
                void (o.wheelStartX = null);
            if (i && null != _a) {
                var d = i * _a
                  , f = e.doc.scrollTop
                  , p = f + o.wrapper.clientHeight;
                0 > d ? f = Math.max(0, f + d - 50) : p = Math.min(e.doc.height, p + d + 50),
                Nr(e, {
                    top: f,
                    bottom: p
                })
            }
            20 > wa && (null == o.wheelStartX ? (o.wheelStartX = s.scrollLeft,
            o.wheelStartY = s.scrollTop,
            o.wheelDX = r,
            o.wheelDY = i,
            setTimeout(function() {
                if (null != o.wheelStartX) {
                    var e = s.scrollLeft - o.wheelStartX
                      , t = s.scrollTop - o.wheelStartY
                      , n = t && o.wheelDY && t / o.wheelDY || e && o.wheelDX && e / o.wheelDX;
                    o.wheelStartX = o.wheelStartY = null,
                    n && (_a = (_a * wa + n) / (wa + 1),
                    ++wa)
                }
            }, 200)) : (o.wheelDX += r,
            o.wheelDY += i))
        }
    }
    function qr(e, t) {
        var n = e[t];
        e.sort(function(e, t) {
            return H(e.from(), t.from())
        }),
        t = d(e, n);
        for (var r = 1; r < e.length; r++) {
            var i = e[r]
              , o = e[r - 1];
            if (H(o.to(), i.from()) >= 0) {
                var s = $(o.from(), i.from())
                  , a = F(o.to(), i.to())
                  , l = o.empty() ? i.from() == i.head : o.from() == o.head;
                t >= r && --t,
                e.splice(--r, 2, new Sa(l ? a : s,l ? s : a))
            }
        }
        return new ka(e,t)
    }
    function Fr(e, t) {
        return new ka([new Sa(e,t || e)],0)
    }
    function $r(e) {
        return e.text ? P(e.from.line + e.text.length - 1, m(e.text).length + (1 == e.text.length ? e.from.ch : 0)) : e.to
    }
    function jr(e, t) {
        if (H(e, t.from) < 0)
            return e;
        if (H(e, t.to) <= 0)
            return $r(t);
        var n = e.line + t.text.length - (t.to.line - t.from.line) - 1
          , r = e.ch;
        return e.line == t.to.line && (r += $r(t).ch - t.to.ch),
        P(n, r)
    }
    function Br(e, t) {
        for (var n = [], r = 0; r < e.sel.ranges.length; r++) {
            var i = e.sel.ranges[r];
            n.push(new Sa(jr(i.anchor, t),jr(i.head, t)))
        }
        return qr(n, e.sel.primIndex)
    }
    function Wr(e, t, n) {
        return e.line == t.line ? P(n.line, e.ch - t.ch + n.ch) : P(n.line + (e.line - t.line), e.ch)
    }
    function Ur(e, t, n) {
        for (var r = [], i = P(e.first, 0), o = i, s = 0; s < t.length; s++) {
            var a = t[s]
              , l = Wr(a.from, i, o)
              , u = Wr($r(a), i, o);
            if (i = a.to,
            o = u,
            "around" == n) {
                var c = e.sel.ranges[s]
                  , h = H(c.head, c.anchor) < 0;
                r[s] = new Sa(h ? u : l,h ? l : u)
            } else
                r[s] = new Sa(l,l)
        }
        return new ka(r,e.sel.primIndex)
    }
    function zr(e) {
        e.doc.mode = Xe(e.options, e.doc.modeOption),
        Vr(e)
    }
    function Vr(e) {
        e.doc.iter(function(e) {
            e.stateAfter && (e.stateAfter = null),
            e.styles && (e.styles = null)
        }),
        e.doc.modeFrontier = e.doc.highlightFrontier = e.doc.first,
        _r(e, 100),
        e.state.modeGen++,
        e.curOp && gr(e)
    }
    function Xr(e, t) {
        return 0 == t.from.ch && 0 == t.to.ch && "" == m(t.text) && (!e.cm || e.cm.options.wholeLineUpdateBefore)
    }
    function Qr(e, t, n, r) {
        function i(e) {
            return n ? n[e] : null
        }
        function o(e, n, i) {
            ut(e, n, i, r),
            St(e, "change", e, t)
        }
        function s(e, t) {
            for (var n = [], o = e; t > o; ++o)
                n.push(new ua(u[o],i(o),r));
            return n
        }
        var a = t.from
          , l = t.to
          , u = t.text
          , c = L(e, a.line)
          , h = L(e, l.line)
          , d = m(u)
          , f = i(u.length - 1)
          , p = l.line - a.line;
        if (t.full)
            e.insert(0, s(0, u.length)),
            e.remove(u.length, e.size - u.length);
        else if (Xr(e, t)) {
            var g = s(0, u.length - 1);
            o(h, h.text, f),
            p && e.remove(a.line, p),
            g.length && e.insert(a.line, g)
        } else if (c == h)
            if (1 == u.length)
                o(c, c.text.slice(0, a.ch) + d + c.text.slice(l.ch), f);
            else {
                var v = s(1, u.length - 1);
                v.push(new ua(d + c.text.slice(l.ch),f,r)),
                o(c, c.text.slice(0, a.ch) + u[0], i(0)),
                e.insert(a.line + 1, v)
            }
        else if (1 == u.length)
            o(c, c.text.slice(0, a.ch) + u[0] + h.text.slice(l.ch), i(0)),
            e.remove(a.line + 1, p);
        else {
            o(c, c.text.slice(0, a.ch) + u[0], i(0)),
            o(h, d + h.text.slice(l.ch), f);
            var y = s(1, u.length - 1);
            p > 1 && e.remove(a.line + 1, p - 1),
            e.insert(a.line + 1, y)
        }
        St(e, "change", e, t)
    }
    function Gr(e, t, n) {
        function r(e, i, o) {
            if (e.linked)
                for (var s = 0; s < e.linked.length; ++s) {
                    var a = e.linked[s];
                    if (a.doc != i) {
                        var l = o && a.sharedHist;
                        (!n || l) && (t(a.doc, l),
                        r(a.doc, e, l))
                    }
                }
        }
        r(e, null, !0)
    }
    function Kr(e, t) {
        if (t.cm)
            throw new Error("This document is already in use.");
        e.doc = t,
        t.cm = e,
        Sn(e),
        zr(e),
        Jr(e),
        e.options.lineWrapping || xe(e),
        e.options.mode = t.modeOption,
        gr(e)
    }
    function Jr(e) {
        ("rtl" == e.doc.direction ? a : Ds)(e.display.lineDiv, "CodeMirror-rtl")
    }
    function Yr(e) {
        dr(e, function() {
            Jr(e),
            gr(e)
        })
    }
    function Zr(e) {
        this.done = [],
        this.undone = [],
        this.undoDepth = 1 / 0,
        this.lastModTime = this.lastSelTime = 0,
        this.lastOp = this.lastSelOp = null,
        this.lastOrigin = this.lastSelOrigin = null,
        this.generation = this.maxGeneration = e || 1
    }
    function ei(e, t) {
        var n = {
            from: q(t.from),
            to: $r(t),
            text: E(e, t.from, t.to)
        };
        return ai(e, n, t.from.line, t.to.line + 1),
        Gr(e, function(e) {
            return ai(e, n, t.from.line, t.to.line + 1)
        }, !0),
        n
    }
    function ti(e) {
        for (; e.length; ) {
            var t = m(e);
            if (!t.ranges)
                break;
            e.pop()
        }
    }
    function ni(e, t) {
        return t ? (ti(e.done),
        m(e.done)) : e.done.length && !m(e.done).ranges ? m(e.done) : e.done.length > 1 && !e.done[e.done.length - 2].ranges ? (e.done.pop(),
        m(e.done)) : void 0
    }
    function ri(e, t, n, r) {
        var i = e.history;
        i.undone.length = 0;
        var o, s, a = +new Date;
        if ((i.lastOp == r || i.lastOrigin == t.origin && t.origin && ("+" == t.origin.charAt(0) && e.cm && i.lastModTime > a - e.cm.options.historyEventDelay || "*" == t.origin.charAt(0))) && (o = ni(i, i.lastOp == r)))
            s = m(o.changes),
            0 == H(t.from, t.to) && 0 == H(t.from, s.to) ? s.to = $r(t) : o.changes.push(ei(e, t));
        else {
            var l = m(i.done);
            for (l && l.ranges || si(e.sel, i.done),
            o = {
                changes: [ei(e, t)],
                generation: i.generation
            },
            i.done.push(o); i.done.length > i.undoDepth; )
                i.done.shift(),
                i.done[0].ranges || i.done.shift()
        }
        i.done.push(n),
        i.generation = ++i.maxGeneration,
        i.lastModTime = i.lastSelTime = a,
        i.lastOp = i.lastSelOp = r,
        i.lastOrigin = i.lastSelOrigin = t.origin,
        s || Ae(e, "historyAdded")
    }
    function ii(e, t, n, r) {
        var i = t.charAt(0);
        return "*" == i || "+" == i && n.ranges.length == r.ranges.length && n.somethingSelected() == r.somethingSelected() && new Date - e.history.lastSelTime <= (e.cm ? e.cm.options.historyEventDelay : 500)
    }
    function oi(e, t, n, r) {
        var i = e.history
          , o = r && r.origin;
        n == i.lastSelOp || o && i.lastSelOrigin == o && (i.lastModTime == i.lastSelTime && i.lastOrigin == o || ii(e, o, m(i.done), t)) ? i.done[i.done.length - 1] = t : si(t, i.done),
        i.lastSelTime = +new Date,
        i.lastSelOrigin = o,
        i.lastSelOp = n,
        r && r.clearRedo !== !1 && ti(i.undone)
    }
    function si(e, t) {
        var n = m(t);
        n && n.ranges && n.equals(e) || t.push(e)
    }
    function ai(e, t, n, r) {
        var i = t["spans_" + e.id]
          , o = 0;
        e.iter(Math.max(e.first, n), Math.min(e.first + e.size, r), function(n) {
            n.markedSpans && ((i || (i = t["spans_" + e.id] = {}))[o] = n.markedSpans),
            ++o
        })
    }
    function li(e) {
        if (!e)
            return null;
        for (var t, n = 0; n < e.length; ++n)
            e[n].marker.explicitlyCleared ? t || (t = e.slice(0, n)) : t && t.push(e[n]);
        return t ? t.length ? t : null : e
    }
    function ui(e, t) {
        var n = t["spans_" + e.id];
        if (!n)
            return null;
        for (var r = [], i = 0; i < t.text.length; ++i)
            r.push(li(n[i]));
        return r
    }
    function ci(e, t) {
        var n = ui(e, t)
          , r = Z(e, t);
        if (!n)
            return r;
        if (!r)
            return n;
        for (var i = 0; i < n.length; ++i) {
            var o = n[i]
              , s = r[i];
            if (o && s)
                e: for (var a = 0; a < s.length; ++a) {
                    for (var l = s[a], u = 0; u < o.length; ++u)
                        if (o[u].marker == l.marker)
                            continue e;
                    o.push(l)
                }
            else
                s && (n[i] = s)
        }
        return n
    }
    function hi(e, t, n) {
        for (var r = [], i = 0; i < e.length; ++i) {
            var o = e[i];
            if (o.ranges)
                r.push(n ? ka.prototype.deepCopy.call(o) : o);
            else {
                var s = o.changes
                  , a = [];
                r.push({
                    changes: a
                });
                for (var l = 0; l < s.length; ++l) {
                    var u = s[l]
                      , c = void 0;
                    if (a.push({
                        from: u.from,
                        to: u.to,
                        text: u.text
                    }),
                    t)
                        for (var h in u)
                            (c = h.match(/^spans_(\d+)$/)) && d(t, Number(c[1])) > -1 && (m(a)[h] = u[h],
                            delete u[h])
                }
            }
        }
        return r
    }
    function di(e, t, n, r) {
        if (r) {
            var i = e.anchor;
            if (n) {
                var o = H(t, i) < 0;
                o != H(n, i) < 0 ? (i = t,
                t = n) : o != H(t, n) < 0 && (t = n)
            }
            return new Sa(i,t)
        }
        return new Sa(n || t,t)
    }
    function fi(e, t, n, r, i) {
        null == i && (i = e.cm && (e.cm.display.shift || e.extend)),
        bi(e, new ka([di(e.sel.primary(), t, n, i)],0), r)
    }
    function pi(e, t, n) {
        for (var r = [], i = e.cm && (e.cm.display.shift || e.extend), o = 0; o < e.sel.ranges.length; o++)
            r[o] = di(e.sel.ranges[o], t[o], null, i);
        var s = qr(r, e.sel.primIndex);
        bi(e, s, n)
    }
    function mi(e, t, n, r) {
        var i = e.sel.ranges.slice(0);
        i[t] = n,
        bi(e, qr(i, e.sel.primIndex), r)
    }
    function gi(e, t, n, r) {
        bi(e, Fr(t, n), r)
    }
    function vi(e, t, n) {
        var r = {
            ranges: t.ranges,
            update: function(t) {
                var n = this;
                this.ranges = [];
                for (var r = 0; r < t.length; r++)
                    n.ranges[r] = new Sa(B(e, t[r].anchor),B(e, t[r].head))
            },
            origin: n && n.origin
        };
        return Ae(e, "beforeSelectionChange", e, r),
        e.cm && Ae(e.cm, "beforeSelectionChange", e.cm, r),
        r.ranges != t.ranges ? qr(r.ranges, r.ranges.length - 1) : t
    }
    function yi(e, t, n) {
        var r = e.history.done
          , i = m(r);
        i && i.ranges ? (r[r.length - 1] = t,
        xi(e, t, n)) : bi(e, t, n)
    }
    function bi(e, t, n) {
        xi(e, t, n),
        oi(e, e.sel, e.cm ? e.cm.curOp.id : NaN, n)
    }
    function xi(e, t, n) {
        (Oe(e, "beforeSelectionChange") || e.cm && Oe(e.cm, "beforeSelectionChange")) && (t = vi(e, t, n));
        var r = n && n.bias || (H(t.primary().head, e.sel.primary().head) < 0 ? -1 : 1);
        wi(e, ki(e, t, r, !0)),
        n && n.scroll === !1 || !e.cm || Vn(e.cm)
    }
    function wi(e, t) {
        t.equals(e.sel) || (e.sel = t,
        e.cm && (e.cm.curOp.updateInput = e.cm.curOp.selectionChanged = !0,
        De(e.cm)),
        St(e, "cursorActivity", e))
    }
    function _i(e) {
        wi(e, ki(e, e.sel, null, !1))
    }
    function ki(e, t, n, r) {
        for (var i, o = 0; o < t.ranges.length; o++) {
            var s = t.ranges[o]
              , a = t.ranges.length == e.sel.ranges.length && e.sel.ranges[o]
              , l = Ci(e, s.anchor, a && a.anchor, n, r)
              , u = Ci(e, s.head, a && a.head, n, r);
            (i || l != s.anchor || u != s.head) && (i || (i = t.ranges.slice(0, o)),
            i[o] = new Sa(l,u))
        }
        return i ? qr(i, t.primIndex) : t
    }
    function Si(e, t, n, r, i) {
        var o = L(e, t.line);
        if (o.markedSpans)
            for (var s = 0; s < o.markedSpans.length; ++s) {
                var a = o.markedSpans[s]
                  , l = a.marker;
                if ((null == a.from || (l.inclusiveLeft ? a.from <= t.ch : a.from < t.ch)) && (null == a.to || (l.inclusiveRight ? a.to >= t.ch : a.to > t.ch))) {
                    if (i && (Ae(l, "beforeCursorEnter"),
                    l.explicitlyCleared)) {
                        if (o.markedSpans) {
                            --s;
                            continue
                        }
                        break
                    }
                    if (!l.atomic)
                        continue;
                    if (n) {
                        var u = l.find(0 > r ? 1 : -1)
                          , c = void 0;
                        if ((0 > r ? l.inclusiveRight : l.inclusiveLeft) && (u = Ti(e, u, -r, u && u.line == t.line ? o : null)),
                        u && u.line == t.line && (c = H(u, n)) && (0 > r ? 0 > c : c > 0))
                            return Si(e, u, t, r, i)
                    }
                    var h = l.find(0 > r ? -1 : 1);
                    return (0 > r ? l.inclusiveLeft : l.inclusiveRight) && (h = Ti(e, h, r, h.line == t.line ? o : null)),
                    h ? Si(e, h, t, r, i) : null
                }
            }
        return t
    }
    function Ci(e, t, n, r, i) {
        var o = r || 1
          , s = Si(e, t, n, o, i) || !i && Si(e, t, n, o, !0) || Si(e, t, n, -o, i) || !i && Si(e, t, n, -o, !0);
        return s ? s : (e.cantEdit = !0,
        P(e.first, 0))
    }
    function Ti(e, t, n, r) {
        return 0 > n && 0 == t.ch ? t.line > e.first ? B(e, P(t.line - 1)) : null : n > 0 && t.ch == (r || L(e, t.line)).text.length ? t.line < e.first + e.size - 1 ? P(t.line + 1, 0) : null : new P(t.line,t.ch + n)
    }
    function Li(e) {
        e.setSelection(P(e.firstLine(), 0), P(e.lastLine()), Fs)
    }
    function Ei(e, t, n) {
        var r = {
            canceled: !1,
            from: t.from,
            to: t.to,
            text: t.text,
            origin: t.origin,
            cancel: function() {
                return r.canceled = !0
            }
        };
        return n && (r.update = function(t, n, i, o) {
            t && (r.from = B(e, t)),
            n && (r.to = B(e, n)),
            i && (r.text = i),
            void 0 !== o && (r.origin = o)
        }
        ),
        Ae(e, "beforeChange", e, r),
        e.cm && Ae(e.cm, "beforeChange", e.cm, r),
        r.canceled ? null : {
            from: r.from,
            to: r.to,
            text: r.text,
            origin: r.origin
        }
    }
    function Ni(e, t, n) {
        if (e.cm) {
            if (!e.cm.curOp)
                return fr(e.cm, Ni)(e, t, n);
            if (e.cm.state.suppressEdits)
                return
        }
        if (!(Oe(e, "beforeChange") || e.cm && Oe(e.cm, "beforeChange")) || (t = Ei(e, t, !0))) {
            var r = zs && !n && te(e, t.from, t.to);
            if (r)
                for (var i = r.length - 1; i >= 0; --i)
                    Ai(e, {
                        from: r[i].from,
                        to: r[i].to,
                        text: i ? [""] : t.text
                    });
            else
                Ai(e, t)
        }
    }
    function Ai(e, t) {
        if (1 != t.text.length || "" != t.text[0] || 0 != H(t.from, t.to)) {
            var n = Br(e, t);
            ri(e, t, n, e.cm ? e.cm.curOp.id : NaN),
            Oi(e, t, n, Z(e, t));
            var r = [];
            Gr(e, function(e, n) {
                n || -1 != d(r, e.history) || (qi(e.history, t),
                r.push(e.history)),
                Oi(e, t, null, Z(e, t))
            })
        }
    }
    function Mi(e, t, n) {
        if (!e.cm || !e.cm.state.suppressEdits || n) {
            for (var r, i = e.history, o = e.sel, s = "undo" == t ? i.done : i.undone, a = "undo" == t ? i.undone : i.done, l = 0; l < s.length && (r = s[l],
            n ? !r.ranges || r.equals(e.sel) : r.ranges); l++)
                ;
            if (l != s.length) {
                for (i.lastOrigin = i.lastSelOrigin = null; r = s.pop(),
                r.ranges; ) {
                    if (si(r, a),
                    n && !r.equals(e.sel))
                        return void bi(e, r, {
                            clearRedo: !1
                        });
                    o = r
                }
                var u = [];
                si(o, a),
                a.push({
                    changes: u,
                    generation: i.generation
                }),
                i.generation = r.generation || ++i.maxGeneration;
                for (var c = Oe(e, "beforeChange") || e.cm && Oe(e.cm, "beforeChange"), h = function(n) {
                    var i = r.changes[n];
                    if (i.origin = t,
                    c && !Ei(e, i, !1))
                        return s.length = 0,
                        {};
                    u.push(ei(e, i));
                    var o = n ? Br(e, i) : m(s);
                    Oi(e, i, o, ci(e, i)),
                    !n && e.cm && e.cm.scrollIntoView({
                        from: i.from,
                        to: $r(i)
                    });
                    var a = [];
                    Gr(e, function(e, t) {
                        t || -1 != d(a, e.history) || (qi(e.history, i),
                        a.push(e.history)),
                        Oi(e, i, null, ci(e, i))
                    })
                }, f = r.changes.length - 1; f >= 0; --f) {
                    var p = h(f);
                    if (p)
                        return p.v
                }
            }
        }
    }
    function Di(e, t) {
        if (0 != t && (e.first += t,
        e.sel = new ka(g(e.sel.ranges, function(e) {
            return new Sa(P(e.anchor.line + t, e.anchor.ch),P(e.head.line + t, e.head.ch))
        }),e.sel.primIndex),
        e.cm)) {
            gr(e.cm, e.first, e.first - t, t);
            for (var n = e.cm.display, r = n.viewFrom; r < n.viewTo; r++)
                vr(e.cm, r, "gutter")
        }
    }
    function Oi(e, t, n, r) {
        if (e.cm && !e.cm.curOp)
            return fr(e.cm, Oi)(e, t, n, r);
        if (t.to.line < e.first)
            return void Di(e, t.text.length - 1 - (t.to.line - t.from.line));
        if (!(t.from.line > e.lastLine())) {
            if (t.from.line < e.first) {
                var i = t.text.length - 1 - (e.first - t.from.line);
                Di(e, i),
                t = {
                    from: P(e.first, 0),
                    to: P(t.to.line + i, t.to.ch),
                    text: [m(t.text)],
                    origin: t.origin
                }
            }
            var o = e.lastLine();
            t.to.line > o && (t = {
                from: t.from,
                to: P(o, L(e, o).text.length),
                text: [t.text[0]],
                origin: t.origin
            }),
            t.removed = E(e, t.from, t.to),
            n || (n = Br(e, t)),
            e.cm ? Ii(e.cm, t, r) : Qr(e, t, r),
            xi(e, n, Fs)
        }
    }
    function Ii(e, t, n) {
        var r = e.doc
          , i = e.display
          , o = t.from
          , s = t.to
          , a = !1
          , l = o.line;
        e.options.lineWrapping || (l = M(he(L(r, o.line))),
        r.iter(l, s.line + 1, function(e) {
            return e == i.maxLine ? (a = !0,
            !0) : void 0
        })),
        r.sel.contains(t.from, t.to) > -1 && De(e),
        Qr(r, t, n, kn(e)),
        e.options.lineWrapping || (r.iter(l, o.line + t.text.length, function(e) {
            var t = be(e);
            t > i.maxLineLength && (i.maxLine = e,
            i.maxLineLength = t,
            i.maxLineChanged = !0,
            a = !1)
        }),
        a && (e.curOp.updateMaxLine = !0)),
        lt(r, o.line),
        _r(e, 400);
        var u = t.text.length - (s.line - o.line) - 1;
        t.full ? gr(e) : o.line != s.line || 1 != t.text.length || Xr(e.doc, t) ? gr(e, o.line, s.line + 1, u) : vr(e, o.line, "text");
        var c = Oe(e, "changes")
          , h = Oe(e, "change");
        if (h || c) {
            var d = {
                from: o,
                to: s,
                text: t.text,
                removed: t.removed,
                origin: t.origin
            };
            h && St(e, "change", e, d),
            c && (e.curOp.changeObjs || (e.curOp.changeObjs = [])).push(d)
        }
        e.display.selForContextMenu = null
    }
    function Pi(e, t, n, r, i) {
        if (r || (r = n),
        H(r, n) < 0) {
            var o = r;
            r = n,
            n = o
        }
        "string" == typeof t && (t = e.splitLines(t)),
        Ni(e, {
            from: n,
            to: r,
            text: t,
            origin: i
        })
    }
    function Hi(e, t, n, r) {
        n < e.line ? e.line += r : t < e.line && (e.line = t,
        e.ch = 0)
    }
    function Ri(e, t, n, r) {
        for (var i = 0; i < e.length; ++i) {
            var o = e[i]
              , s = !0;
            if (o.ranges) {
                o.copied || (o = e[i] = o.deepCopy(),
                o.copied = !0);
                for (var a = 0; a < o.ranges.length; a++)
                    Hi(o.ranges[a].anchor, t, n, r),
                    Hi(o.ranges[a].head, t, n, r)
            } else {
                for (var l = 0; l < o.changes.length; ++l) {
                    var u = o.changes[l];
                    if (n < u.from.line)
                        u.from = P(u.from.line + r, u.from.ch),
                        u.to = P(u.to.line + r, u.to.ch);
                    else if (t <= u.to.line) {
                        s = !1;
                        break
                    }
                }
                s || (e.splice(0, i + 1),
                i = 0)
            }
        }
    }
    function qi(e, t) {
        var n = t.from.line
          , r = t.to.line
          , i = t.text.length - (r - n) - 1;
        Ri(e.done, n, r, i),
        Ri(e.undone, n, r, i)
    }
    function Fi(e, t, n, r) {
        var i = t
          , o = t;
        return "number" == typeof t ? o = L(e, j(e, t)) : i = M(t),
        null == i ? null : (r(o, i) && e.cm && vr(e.cm, i, n),
        o)
    }
    function $i(e) {
        var t = this;
        this.lines = e,
        this.parent = null;
        for (var n = 0, r = 0; r < e.length; ++r)
            e[r].parent = t,
            n += e[r].height;
        this.height = n
    }
    function ji(e) {
        var t = this;
        this.children = e;
        for (var n = 0, r = 0, i = 0; i < e.length; ++i) {
            var o = e[i];
            n += o.chunkSize(),
            r += o.height,
            o.parent = t
        }
        this.size = n,
        this.height = r,
        this.parent = null
    }
    function Bi(e, t, n) {
        ye(t) < (e.curOp && e.curOp.scrollTop || e.doc.scrollTop) && zn(e, n)
    }
    function Wi(e, t, n, r) {
        var i = new Ca(e,n,r)
          , o = e.cm;
        return o && i.noHScroll && (o.display.alignWidgets = !0),
        Fi(e, t, "widget", function(t) {
            var n = t.widgets || (t.widgets = []);
            if (null == i.insertAt ? n.push(i) : n.splice(Math.min(n.length - 1, Math.max(0, i.insertAt)), 0, i),
            i.line = t,
            o && !ge(e, t)) {
                var r = ye(t) < e.scrollTop;
                A(t, t.height + qt(i)),
                r && zn(o, i.height),
                o.curOp.forceUpdate = !0
            }
            return !0
        }),
        St(o, "lineWidgetAdded", o, i, "number" == typeof t ? t : M(t)),
        i
    }
    function Ui(e, t, n, r, o) {
        if (r && r.shared)
            return zi(e, t, n, r, o);
        if (e.cm && !e.cm.curOp)
            return fr(e.cm, Ui)(e, t, n, r, o);
        var s = new La(e,o)
          , a = H(t, n);
        if (r && c(r, s, !1),
        a > 0 || 0 == a && s.clearWhenEmpty !== !1)
            return s;
        if (s.replacedWith && (s.collapsed = !0,
        s.widgetNode = i("span", [s.replacedWith], "CodeMirror-widget"),
        r.handleMouseEvents || s.widgetNode.setAttribute("cm-ignore-events", "true"),
        r.insertLeft && (s.widgetNode.insertLeft = !0)),
        s.collapsed) {
            if (ce(e, t.line, t, n, s) || t.line != n.line && ce(e, n.line, t, n, s))
                throw new Error("Inserting collapsed marker partially overlapping an existing one");
            V()
        }
        s.addToHistory && ri(e, {
            from: t,
            to: n,
            origin: "markText"
        }, e.sel, NaN);
        var l, u = t.line, h = e.cm;
        if (e.iter(u, n.line + 1, function(e) {
            h && s.collapsed && !h.options.lineWrapping && he(e) == h.display.maxLine && (l = !0),
            s.collapsed && u != t.line && A(e, 0),
            K(e, new X(s,u == t.line ? t.ch : null,u == n.line ? n.ch : null)),
            ++u
        }),
        s.collapsed && e.iter(t.line, n.line + 1, function(t) {
            ge(e, t) && A(t, 0)
        }),
        s.clearOnEnter && Ks(s, "beforeCursorEnter", function() {
            return s.clear()
        }),
        s.readOnly && (z(),
        (e.history.done.length || e.history.undone.length) && e.clearHistory()),
        s.collapsed && (s.id = ++Ta,
        s.atomic = !0),
        h) {
            if (l && (h.curOp.updateMaxLine = !0),
            s.collapsed)
                gr(h, t.line, n.line + 1);
            else if (s.className || s.title || s.startStyle || s.endStyle || s.css)
                for (var d = t.line; d <= n.line; d++)
                    vr(h, d, "text");
            s.atomic && _i(h.doc),
            St(h, "markerAdded", h, s)
        }
        return s
    }
    function zi(e, t, n, r, i) {
        r = c(r),
        r.shared = !1;
        var o = [Ui(e, t, n, r, i)]
          , s = o[0]
          , a = r.widgetNode;
        return Gr(e, function(e) {
            a && (r.widgetNode = a.cloneNode(!0)),
            o.push(Ui(e, B(e, t), B(e, n), r, i));
            for (var l = 0; l < e.linked.length; ++l)
                if (e.linked[l].isParent)
                    return;
            s = m(o)
        }),
        new Ea(o,s)
    }
    function Vi(e) {
        return e.findMarks(P(e.first, 0), e.clipPos(P(e.lastLine())), function(e) {
            return e.parent
        })
    }
    function Xi(e, t) {
        for (var n = 0; n < t.length; n++) {
            var r = t[n]
              , i = r.find()
              , o = e.clipPos(i.from)
              , s = e.clipPos(i.to);
            if (H(o, s)) {
                var a = Ui(e, o, s, r.primary, r.primary.type);
                r.markers.push(a),
                a.parent = r
            }
        }
    }
    function Qi(e) {
        for (var t = function(t) {
            var n = e[t]
              , r = [n.primary.doc];
            Gr(n.primary.doc, function(e) {
                return r.push(e)
            });
            for (var i = 0; i < n.markers.length; i++) {
                var o = n.markers[i];
                -1 == d(r, o.doc) && (o.parent = null,
                n.markers.splice(i--, 1))
            }
        }, n = 0; n < e.length; n++)
            t(n)
    }
    function Gi(e) {
        var t = this;
        if (Yi(t),
        !Me(t, e) && !Ft(t.display, e)) {
            Pe(e),
            fs && (Ma = +new Date);
            var n = Cn(t, e, !0)
              , r = e.dataTransfer.files;
            if (n && !t.isReadOnly())
                if (r && r.length && window.FileReader && window.File)
                    for (var i = r.length, o = Array(i), s = 0, a = function(e, r) {
                        if (!t.options.allowDropFileTypes || -1 != d(t.options.allowDropFileTypes, e.type)) {
                            var a = new FileReader;
                            a.onload = fr(t, function() {
                                var e = a.result;
                                if (/[\x00-\x08\x0e-\x1f]{2}/.test(e) && (e = ""),
                                o[r] = e,
                                ++s == i) {
                                    n = B(t.doc, n);
                                    var l = {
                                        from: n,
                                        to: n,
                                        text: t.doc.splitLines(o.join(t.doc.lineSeparator())),
                                        origin: "paste"
                                    };
                                    Ni(t.doc, l),
                                    yi(t.doc, Fr(n, $r(l)))
                                }
                            }),
                            a.readAsText(e)
                        }
                    }, l = 0; i > l; ++l)
                        a(r[l], l);
                else {
                    if (t.state.draggingText && t.doc.sel.contains(n) > -1)
                        return t.state.draggingText(e),
                        void setTimeout(function() {
                            return t.display.input.focus()
                        }, 20);
                    try {
                        var u = e.dataTransfer.getData("Text");
                        if (u) {
                            var c;
                            if (t.state.draggingText && !t.state.draggingText.copy && (c = t.listSelections()),
                            xi(t.doc, Fr(n, n)),
                            c)
                                for (var h = 0; h < c.length; ++h)
                                    Pi(t.doc, "", c[h].anchor, c[h].head, "drag");
                            t.replaceSelection(u, "around", "paste"),
                            t.display.input.focus()
                        }
                    } catch (e) {}
                }
        }
    }
    function Ki(e, t) {
        if (fs && (!e.state.draggingText || +new Date - Ma < 100))
            return void qe(t);
        if (!Me(e, t) && !Ft(e.display, t) && (t.dataTransfer.setData("Text", e.getSelection()),
        t.dataTransfer.effectAllowed = "copyMove",
        t.dataTransfer.setDragImage && !bs)) {
            var n = r("img", null, null, "position: fixed; left: 0; top: 0;");
            n.src = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
            ys && (n.width = n.height = 1,
            e.display.wrapper.appendChild(n),
            n._top = n.offsetTop),
            t.dataTransfer.setDragImage(n, 0, 0),
            ys && n.parentNode.removeChild(n)
        }
    }
    function Ji(e, t) {
        var i = Cn(e, t);
        if (i) {
            var o = document.createDocumentFragment();
            Nn(e, i, o),
            e.display.dragCursor || (e.display.dragCursor = r("div", null, "CodeMirror-cursors CodeMirror-dragcursors"),
            e.display.lineSpace.insertBefore(e.display.dragCursor, e.display.cursorDiv)),
            n(e.display.dragCursor, o)
        }
    }
    function Yi(e) {
        e.display.dragCursor && (e.display.lineSpace.removeChild(e.display.dragCursor),
        e.display.dragCursor = null)
    }
    function Zi(e) {
        if (document.getElementsByClassName)
            for (var t = document.getElementsByClassName("CodeMirror"), n = 0; n < t.length; n++) {
                var r = t[n].CodeMirror;
                r && e(r)
            }
    }
    function eo() {
        Da || (to(),
        Da = !0)
    }
    function to() {
        var e;
        Ks(window, "resize", function() {
            null == e && (e = setTimeout(function() {
                e = null,
                Zi(no)
            }, 100))
        }),
        Ks(window, "blur", function() {
            return Zi(Pn)
        })
    }
    function no(e) {
        var t = e.display;
        (t.lastWrapHeight != t.wrapper.clientHeight || t.lastWrapWidth != t.wrapper.clientWidth) && (t.cachedCharWidth = t.cachedTextHeight = t.cachedPaddingH = null,
        t.scrollbarsClipped = !1,
        e.setSize())
    }
    function ro(e) {
        var t = e.split(/-(?!$)/);
        e = t[t.length - 1];
        for (var n, r, i, o, s = 0; s < t.length - 1; s++) {
            var a = t[s];
            if (/^(cmd|meta|m)$/i.test(a))
                o = !0;
            else if (/^a(lt)?$/i.test(a))
                n = !0;
            else if (/^(c|ctrl|control)$/i.test(a))
                r = !0;
            else {
                if (!/^s(hift)?$/i.test(a))
                    throw new Error("Unrecognized modifier name: " + a);
                i = !0
            }
        }
        return n && (e = "Alt-" + e),
        r && (e = "Ctrl-" + e),
        o && (e = "Cmd-" + e),
        i && (e = "Shift-" + e),
        e
    }
    function io(e) {
        var t = {};
        for (var n in e)
            if (e.hasOwnProperty(n)) {
                var r = e[n];
                if (/^(name|fallthrough|(de|at)tach)$/.test(n))
                    continue;
                if ("..." == r) {
                    delete e[n];
                    continue
                }
                for (var i = g(n.split(" "), ro), o = 0; o < i.length; o++) {
                    var s = void 0
                      , a = void 0;
                    o == i.length - 1 ? (a = i.join(" "),
                    s = r) : (a = i.slice(0, o + 1).join(" "),
                    s = "...");
                    var l = t[a];
                    if (l) {
                        if (l != s)
                            throw new Error("Inconsistent bindings for " + a)
                    } else
                        t[a] = s
                }
                delete e[n]
            }
        for (var u in t)
            e[u] = t[u];
        return e
    }
    function oo(e, t, n, r) {
        t = uo(t);
        var i = t.call ? t.call(e, r) : t[e];
        if (i === !1)
            return "nothing";
        if ("..." === i)
            return "multi";
        if (null != i && n(i))
            return "handled";
        if (t.fallthrough) {
            if ("[object Array]" != Object.prototype.toString.call(t.fallthrough))
                return oo(e, t.fallthrough, n, r);
            for (var o = 0; o < t.fallthrough.length; o++) {
                var s = oo(e, t.fallthrough[o], n, r);
                if (s)
                    return s
            }
        }
    }
    function so(e) {
        var t = "string" == typeof e ? e : Oa[e.keyCode];
        return "Ctrl" == t || "Alt" == t || "Shift" == t || "Mod" == t
    }
    function ao(e, t, n) {
        var r = e;
        return t.altKey && "Alt" != r && (e = "Alt-" + e),
        (As ? t.metaKey : t.ctrlKey) && "Ctrl" != r && (e = "Ctrl-" + e),
        (As ? t.ctrlKey : t.metaKey) && "Cmd" != r && (e = "Cmd-" + e),
        !n && t.shiftKey && "Shift" != r && (e = "Shift-" + e),
        e
    }
    function lo(e, t) {
        if (ys && 34 == e.keyCode && e["char"])
            return !1;
        var n = Oa[e.keyCode];
        return null == n || e.altGraphKey ? !1 : ao(n, e, t)
    }
    function uo(e) {
        return "string" == typeof e ? Ra[e] : e
    }
    function co(e, t) {
        for (var n = e.doc.sel.ranges, r = [], i = 0; i < n.length; i++) {
            for (var o = t(n[i]); r.length && H(o.from, m(r).to) <= 0; ) {
                var s = r.pop();
                if (H(s.from, o.from) < 0) {
                    o.from = s.from;
                    break
                }
            }
            r.push(o)
        }
        dr(e, function() {
            for (var t = r.length - 1; t >= 0; t--)
                Pi(e.doc, "", r[t].from, r[t].to, "+delete");
            Vn(e)
        })
    }
    function ho(e, t) {
        var n = L(e.doc, t)
          , r = he(n);
        return r != n && (t = M(r)),
        Te(!0, e, r, t, 1)
    }
    function fo(e, t) {
        var n = L(e.doc, t)
          , r = de(n);
        return r != n && (t = M(r)),
        Te(!0, e, n, t, -1)
    }
    function po(e, t) {
        var n = ho(e, t.line)
          , r = L(e.doc, n.line)
          , i = ke(r, e.doc.direction);
        if (!i || 0 == i[0].level) {
            var o = Math.max(0, r.text.search(/\S/))
              , s = t.line == n.line && t.ch <= o && t.ch;
            return P(n.line, s ? 0 : o, n.sticky)
        }
        return n
    }
    function mo(e, t, n) {
        if ("string" == typeof t && (t = qa[t],
        !t))
            return !1;
        e.display.input.ensurePolled();
        var r = e.display.shift
          , i = !1;
        try {
            e.isReadOnly() && (e.state.suppressEdits = !0),
            n && (e.display.shift = !1),
            i = t(e) != qs
        } finally {
            e.display.shift = r,
            e.state.suppressEdits = !1
        }
        return i
    }
    function go(e, t, n) {
        for (var r = 0; r < e.state.keyMaps.length; r++) {
            var i = oo(t, e.state.keyMaps[r], n, e);
            if (i)
                return i
        }
        return e.options.extraKeys && oo(t, e.options.extraKeys, n, e) || oo(t, e.options.keyMap, n, e)
    }
    function vo(e, t, n, r) {
        var i = e.state.keySeq;
        if (i) {
            if (so(t))
                return "handled";
            Fa.set(50, function() {
                e.state.keySeq == i && (e.state.keySeq = null,
                e.display.input.reset())
            }),
            t = i + " " + t
        }
        var o = go(e, t, r);
        return "multi" == o && (e.state.keySeq = t),
        "handled" == o && St(e, "keyHandled", e, t, n),
        ("handled" == o || "multi" == o) && (Pe(n),
        Mn(e)),
        i && !o && /\'$/.test(t) ? (Pe(n),
        !0) : !!o
    }
    function yo(e, t) {
        var n = lo(t, !0);
        return n ? t.shiftKey && !e.state.keySeq ? vo(e, "Shift-" + n, t, function(t) {
            return mo(e, t, !0)
        }) || vo(e, n, t, function(t) {
            return ("string" == typeof t ? /^go[A-Z]/.test(t) : t.motion) ? mo(e, t) : void 0
        }) : vo(e, n, t, function(t) {
            return mo(e, t)
        }) : !1
    }
    function bo(e, t, n) {
        return vo(e, "'" + n + "'", t, function(t) {
            return mo(e, t, !0)
        })
    }
    function xo(e) {
        var t = this;
        if (t.curOp.focus = s(),
        !Me(t, e)) {
            fs && 11 > ps && 27 == e.keyCode && (e.returnValue = !1);
            var n = e.keyCode;
            t.display.shift = 16 == n || e.shiftKey;
            var r = yo(t, e);
            ys && ($a = r ? n : null,
            !r && 88 == n && !ea && (Cs ? e.metaKey : e.ctrlKey) && t.replaceSelection("", null, "cut")),
            18 != n || /\bCodeMirror-crosshair\b/.test(t.display.lineDiv.className) || wo(t)
        }
    }
    function wo(e) {
        function t(e) {
            18 != e.keyCode && e.altKey || (Ds(n, "CodeMirror-crosshair"),
            Ne(document, "keyup", t),
            Ne(document, "mouseover", t))
        }
        var n = e.display.lineDiv;
        a(n, "CodeMirror-crosshair"),
        Ks(document, "keyup", t),
        Ks(document, "mouseover", t)
    }
    function _o(e) {
        16 == e.keyCode && (this.doc.sel.shift = !1),
        Me(this, e)
    }
    function ko(e) {
        var t = this;
        if (!(Ft(t.display, e) || Me(t, e) || e.ctrlKey && !e.altKey || Cs && e.metaKey)) {
            var n = e.keyCode
              , r = e.charCode;
            if (ys && n == $a)
                return $a = null,
                void Pe(e);
            if (!ys || e.which && !(e.which < 10) || !yo(t, e)) {
                var i = String.fromCharCode(null == r ? n : r);
                "\b" != i && (bo(t, e, i) || t.display.input.onKeyPress(e))
            }
        }
    }
    function So(e, t) {
        var n = +new Date;
        return Ua && Ua.compare(n, e, t) ? (Wa = Ua = null,
        "triple") : Wa && Wa.compare(n, e, t) ? (Ua = new Ba(n,e,t),
        Wa = null,
        "double") : (Wa = new Ba(n,e,t),
        Ua = null,
        "single")
    }
    function Co(e) {
        var t = this
          , n = t.display;
        if (!(Me(t, e) || n.activeTouch && n.input.supportsTouch())) {
            if (n.input.ensurePolled(),
            n.shift = e.shiftKey,
            Ft(n, e))
                return void (ms || (n.scroller.draggable = !1,
                setTimeout(function() {
                    return n.scroller.draggable = !0
                }, 100)));
            if (!Oo(t, e)) {
                var r = Cn(t, e)
                  , i = $e(e)
                  , o = r ? So(r, i) : "single";
                window.focus(),
                1 == i && t.state.selectingText && t.state.selectingText(e),
                r && To(t, i, r, o, e) || (1 == i ? r ? Eo(t, r, o, e) : Fe(e) == n.scroller && Pe(e) : 2 == i ? (r && fi(t.doc, r),
                setTimeout(function() {
                    return n.input.focus()
                }, 20)) : 3 == i && (Ms ? Io(t, e) : On(t)))
            }
        }
    }
    function To(e, t, n, r, i) {
        var o = "Click";
        return "double" == r ? o = "Double" + o : "triple" == r && (o = "Triple" + o),
        o = (1 == t ? "Left" : 2 == t ? "Middle" : "Right") + o,
        vo(e, ao(o, i), i, function(t) {
            if ("string" == typeof t && (t = qa[t]),
            !t)
                return !1;
            var r = !1;
            try {
                e.isReadOnly() && (e.state.suppressEdits = !0),
                r = t(e, n) != qs
            } finally {
                e.state.suppressEdits = !1
            }
            return r
        })
    }
    function Lo(e, t, n) {
        var r = e.getOption("configureMouse")
          , i = r ? r(e, t, n) : {};
        if (null == i.unit) {
            var o = Ts ? n.shiftKey && n.metaKey : n.altKey;
            i.unit = o ? "rectangle" : "single" == t ? "char" : "double" == t ? "word" : "line"
        }
        return (null == i.extend || e.doc.extend) && (i.extend = e.doc.extend || n.shiftKey),
        null == i.addNew && (i.addNew = Cs ? n.metaKey : n.ctrlKey),
        null == i.moveOnDrag && (i.moveOnDrag = !(Cs ? n.altKey : n.ctrlKey)),
        i
    }
    function Eo(e, t, n, r) {
        fs ? setTimeout(u(Dn, e), 0) : e.curOp.focus = s();
        var i, o = Lo(e, n, r), a = e.doc.sel;
        e.options.dragDrop && Js && !e.isReadOnly() && "single" == n && (i = a.contains(t)) > -1 && (H((i = a.ranges[i]).from(), t) < 0 || t.xRel > 0) && (H(i.to(), t) > 0 || t.xRel < 0) ? No(e, r, t, o) : Mo(e, r, t, o)
    }
    function No(e, t, n, r) {
        var i = e.display
          , o = !1
          , s = fr(e, function(t) {
            ms && (i.scroller.draggable = !1),
            e.state.draggingText = !1,
            Ne(document, "mouseup", s),
            Ne(document, "mousemove", a),
            Ne(i.scroller, "dragstart", l),
            Ne(i.scroller, "drop", s),
            o || (Pe(t),
            r.addNew || fi(e.doc, n, null, null, r.extend),
            ms || fs && 9 == ps ? setTimeout(function() {
                document.body.focus(),
                i.input.focus()
            }, 20) : i.input.focus())
        })
          , a = function(e) {
            o = o || Math.abs(t.clientX - e.clientX) + Math.abs(t.clientY - e.clientY) >= 10
        }
          , l = function() {
            return o = !0
        };
        ms && (i.scroller.draggable = !0),
        e.state.draggingText = s,
        s.copy = !r.moveOnDrag,
        i.scroller.dragDrop && i.scroller.dragDrop(),
        Ks(document, "mouseup", s),
        Ks(document, "mousemove", a),
        Ks(i.scroller, "dragstart", l),
        Ks(i.scroller, "drop", s),
        On(e),
        setTimeout(function() {
            return i.input.focus()
        }, 20)
    }
    function Ao(e, t, n) {
        if ("char" == n)
            return new Sa(t,t);
        if ("word" == n)
            return e.findWordAt(t);
        if ("line" == n)
            return new Sa(P(t.line, 0),B(e.doc, P(t.line + 1, 0)));
        var r = n(e, t);
        return new Sa(r.from,r.to)
    }
    function Mo(e, t, n, r) {
        function i(t) {
            if (0 != H(v, t))
                if (v = t,
                "rectangle" == r.unit) {
                    for (var i = [], o = e.options.tabSize, s = h(L(u, n.line).text, n.ch, o), a = h(L(u, t.line).text, t.ch, o), l = Math.min(s, a), m = Math.max(s, a), g = Math.min(n.line, t.line), y = Math.min(e.lastLine(), Math.max(n.line, t.line)); y >= g; g++) {
                        var b = L(u, g).text
                          , x = f(b, l, o);
                        l == m ? i.push(new Sa(P(g, x),P(g, x))) : b.length > x && i.push(new Sa(P(g, x),P(g, f(b, m, o))))
                    }
                    i.length || i.push(new Sa(n,n)),
                    bi(u, qr(p.ranges.slice(0, d).concat(i), d), {
                        origin: "*mouse",
                        scroll: !1
                    }),
                    e.scrollIntoView(t)
                } else {
                    var w, _ = c, k = Ao(e, t, r.unit), S = _.anchor;
                    H(k.anchor, S) > 0 ? (w = k.head,
                    S = $(_.from(), k.anchor)) : (w = k.anchor,
                    S = F(_.to(), k.head));
                    var C = p.ranges.slice(0);
                    C[d] = new Sa(B(u, S),w),
                    bi(u, qr(C, d), $s)
                }
        }
        function o(t) {
            var n = ++b
              , a = Cn(e, t, !0, "rectangle" == r.unit);
            if (a)
                if (0 != H(a, v)) {
                    e.curOp.focus = s(),
                    i(a);
                    var c = qn(l, u);
                    (a.line >= c.to || a.line < c.from) && setTimeout(fr(e, function() {
                        b == n && o(t)
                    }), 150)
                } else {
                    var h = t.clientY < y.top ? -20 : t.clientY > y.bottom ? 20 : 0;
                    h && setTimeout(fr(e, function() {
                        b == n && (l.scroller.scrollTop += h,
                        o(t))
                    }), 50)
                }
        }
        function a(t) {
            e.state.selectingText = !1,
            b = 1 / 0,
            Pe(t),
            l.input.focus(),
            Ne(document, "mousemove", x),
            Ne(document, "mouseup", w),
            u.history.lastSelOrigin = null
        }
        var l = e.display
          , u = e.doc;
        Pe(t);
        var c, d, p = u.sel, m = p.ranges;
        if (r.addNew && !r.extend ? (d = u.sel.contains(n),
        c = d > -1 ? m[d] : new Sa(n,n)) : (c = u.sel.primary(),
        d = u.sel.primIndex),
        "rectangle" == r.unit)
            r.addNew || (c = new Sa(n,n)),
            n = Cn(e, t, !0, !0),
            d = -1;
        else {
            var g = Ao(e, n, r.unit);
            c = r.extend ? di(c, g.anchor, g.head, r.extend) : g
        }
        r.addNew ? -1 == d ? (d = m.length,
        bi(u, qr(m.concat([c]), d), {
            scroll: !1,
            origin: "*mouse"
        })) : m.length > 1 && m[d].empty() && "char" == r.unit && !r.extend ? (bi(u, qr(m.slice(0, d).concat(m.slice(d + 1)), 0), {
            scroll: !1,
            origin: "*mouse"
        }),
        p = u.sel) : mi(u, d, c, $s) : (d = 0,
        bi(u, new ka([c],0), $s),
        p = u.sel);
        var v = n
          , y = l.wrapper.getBoundingClientRect()
          , b = 0
          , x = fr(e, function(e) {
            $e(e) ? o(e) : a(e)
        })
          , w = fr(e, a);
        e.state.selectingText = w,
        Ks(document, "mousemove", x),
        Ks(document, "mouseup", w)
    }
    function Do(e, t, n, r) {
        var i, o;
        try {
            i = t.clientX,
            o = t.clientY
        } catch (t) {
            return !1
        }
        if (i >= Math.floor(e.display.gutters.getBoundingClientRect().right))
            return !1;
        r && Pe(t);
        var s = e.display
          , a = s.lineDiv.getBoundingClientRect();
        if (o > a.bottom || !Oe(e, n))
            return Re(t);
        o -= a.top - s.viewOffset;
        for (var l = 0; l < e.options.gutters.length; ++l) {
            var u = s.gutters.childNodes[l];
            if (u && u.getBoundingClientRect().right >= i) {
                var c = D(e.doc, o)
                  , h = e.options.gutters[l];
                return Ae(e, n, e, c, h, t),
                Re(t)
            }
        }
    }
    function Oo(e, t) {
        return Do(e, t, "gutterClick", !0)
    }
    function Io(e, t) {
        Ft(e.display, t) || Po(e, t) || Me(e, t, "contextmenu") || e.display.input.onContextMenu(t)
    }
    function Po(e, t) {
        return Oe(e, "gutterContextMenu") ? Do(e, t, "gutterContextMenu", !1) : !1
    }
    function Ho(e) {
        e.display.wrapper.className = e.display.wrapper.className.replace(/\s*cm-s-\S+/g, "") + e.options.theme.replace(/(^|\s)\s*/g, " cm-s-"),
        sn(e)
    }
    function Ro(e) {
        function t(t, r, i, o) {
            e.defaults[t] = r,
            i && (n[t] = o ? function(e, t, n) {
                n != za && i(e, t, n)
            }
            : i)
        }
        var n = e.optionHandlers;
        e.defineOption = t,
        e.Init = za,
        t("value", "", function(e, t) {
            return e.setValue(t)
        }, !0),
        t("mode", null, function(e, t) {
            e.doc.modeOption = t,
            zr(e)
        }, !0),
        t("indentUnit", 2, zr, !0),
        t("indentWithTabs", !1),
        t("smartIndent", !0),
        t("tabSize", 4, function(e) {
            Vr(e),
            sn(e),
            gr(e)
        }, !0),
        t("lineSeparator", null, function(e, t) {
            if (e.doc.lineSep = t,
            t) {
                var n = []
                  , r = e.doc.first;
                e.doc.iter(function(e) {
                    for (var i = 0; ; ) {
                        var o = e.text.indexOf(t, i);
                        if (-1 == o)
                            break;
                        i = o + t.length,
                        n.push(P(r, o))
                    }
                    r++
                });
                for (var i = n.length - 1; i >= 0; i--)
                    Pi(e.doc, t, n[i], P(n[i].line, n[i].ch + t.length))
            }
        }),
        t("specialChars", /[\u0000-\u001f\u007f-\u009f\u00ad\u061c\u200b-\u200f\u2028\u2029\ufeff]/g, function(e, t, n) {
            e.state.specialChars = new RegExp(t.source + (t.test("	") ? "" : "|	"),"g"),
            n != za && e.refresh()
        }),
        t("specialCharPlaceholder", ft, function(e) {
            return e.refresh()
        }, !0),
        t("electricChars", !0),
        t("inputStyle", Ss ? "contenteditable" : "textarea", function() {
            throw new Error("inputStyle can not (yet) be changed in a running editor")
        }, !0),
        t("spellcheck", !1, function(e, t) {
            return e.getInputField().spellcheck = t
        }, !0),
        t("rtlMoveVisually", !Ls),
        t("wholeLineUpdateBefore", !0),
        t("theme", "default", function(e) {
            Ho(e),
            qo(e)
        }, !0),
        t("keyMap", "default", function(e, t, n) {
            var r = uo(t)
              , i = n != za && uo(n);
            i && i.detach && i.detach(e, r),
            r.attach && r.attach(e, i || null)
        }),
        t("extraKeys", null),
        t("configureMouse", null),
        t("lineWrapping", !1, $o, !0),
        t("gutters", [], function(e) {
            Ir(e.options),
            qo(e)
        }, !0),
        t("fixedGutter", !0, function(e, t) {
            e.display.gutters.style.left = t ? _n(e.display) + "px" : "0",
            e.refresh()
        }, !0),
        t("coverGutterNextToScrollbar", !1, function(e) {
            return tr(e)
        }, !0),
        t("scrollbarStyle", "native", function(e) {
            rr(e),
            tr(e),
            e.display.scrollbars.setScrollTop(e.doc.scrollTop),
            e.display.scrollbars.setScrollLeft(e.doc.scrollLeft)
        }, !0),
        t("lineNumbers", !1, function(e) {
            Ir(e.options),
            qo(e)
        }, !0),
        t("firstLineNumber", 1, qo, !0),
        t("lineNumberFormatter", function(e) {
            return e
        }, qo, !0),
        t("showCursorWhenSelecting", !1, Ln, !0),
        t("resetSelectionOnContextMenu", !0),
        t("lineWiseCopyCut", !0),
        t("pasteLinesPerSelection", !0),
        t("readOnly", !1, function(e, t) {
            "nocursor" == t && (Pn(e),
            e.display.input.blur()),
            e.display.input.readOnlyChanged(t)
        }),
        t("disableInput", !1, function(e, t) {
            t || e.display.input.reset()
        }, !0),
        t("dragDrop", !0, Fo),
        t("allowDropFileTypes", null),
        t("cursorBlinkRate", 530),
        t("cursorScrollMargin", 0),
        t("cursorHeight", 1, Ln, !0),
        t("singleCursorHeightPerLine", !0, Ln, !0),
        t("workTime", 100),
        t("workDelay", 100),
        t("flattenSpans", !0, Vr, !0),
        t("addModeClass", !1, Vr, !0),
        t("pollInterval", 100),
        t("undoDepth", 200, function(e, t) {
            return e.doc.history.undoDepth = t
        }),
        t("historyEventDelay", 1250),
        t("viewportMargin", 10, function(e) {
            return e.refresh()
        }, !0),
        t("maxHighlightLength", 1e4, Vr, !0),
        t("moveInputWithCursor", !0, function(e, t) {
            t || e.display.input.resetPosition()
        }),
        t("tabindex", null, function(e, t) {
            return e.display.input.getField().tabIndex = t || ""
        }),
        t("autofocus", null),
        t("direction", "ltr", function(e, t) {
            return e.doc.setDirection(t)
        }, !0)
    }
    function qo(e) {
        Or(e),
        gr(e),
        Fn(e)
    }
    function Fo(e, t, n) {
        var r = n && n != za;
        if (!t != !r) {
            var i = e.display.dragFunctions
              , o = t ? Ks : Ne;
            o(e.display.scroller, "dragstart", i.start),
            o(e.display.scroller, "dragenter", i.enter),
            o(e.display.scroller, "dragover", i.over),
            o(e.display.scroller, "dragleave", i.leave),
            o(e.display.scroller, "drop", i.drop)
        }
    }
    function $o(e) {
        e.options.lineWrapping ? (a(e.display.wrapper, "CodeMirror-wrap"),
        e.display.sizer.style.minWidth = "",
        e.display.sizerWidth = null) : (Ds(e.display.wrapper, "CodeMirror-wrap"),
        xe(e)),
        Sn(e),
        gr(e),
        sn(e),
        setTimeout(function() {
            return tr(e)
        }, 100)
    }
    function jo(e, t) {
        var n = this;
        if (!(this instanceof jo))
            return new jo(e,t);
        this.options = t = t ? c(t) : {},
        c(Va, t, !1),
        Ir(t);
        var r = t.value;
        "string" == typeof r && (r = new Aa(r,t.mode,null,t.lineSeparator,t.direction)),
        this.doc = r;
        var i = new jo.inputStyles[t.inputStyle](this)
          , o = this.display = new T(e,r,i);
        o.wrapper.CodeMirror = this,
        Or(this),
        Ho(this),
        t.lineWrapping && (this.display.wrapper.className += " CodeMirror-wrap"),
        rr(this),
        this.state = {
            keyMaps: [],
            overlays: [],
            modeGen: 0,
            overwrite: !1,
            delayingBlurEvent: !1,
            focused: !1,
            suppressEdits: !1,
            pasteIncoming: !1,
            cutIncoming: !1,
            selectingText: !1,
            draggingText: !1,
            highlight: new Is,
            keySeq: null,
            specialChars: null
        },
        t.autofocus && !Ss && o.input.focus(),
        fs && 11 > ps && setTimeout(function() {
            return n.display.input.reset(!0)
        }, 20),
        Bo(this),
        eo(),
        ir(this),
        this.curOp.forceUpdate = !0,
        Kr(this, r),
        t.autofocus && !Ss || this.hasFocus() ? setTimeout(u(In, this), 20) : Pn(this);
        for (var s in Xa)
            Xa.hasOwnProperty(s) && Xa[s](n, t[s], za);
        $n(this),
        t.finishInit && t.finishInit(this);
        for (var a = 0; a < Qa.length; ++a)
            Qa[a](n);
        or(this),
        ms && t.lineWrapping && "optimizelegibility" == getComputedStyle(o.lineDiv).textRendering && (o.lineDiv.style.textRendering = "auto")
    }
    function Bo(e) {
        function t() {
            i.activeTouch && (o = setTimeout(function() {
                return i.activeTouch = null
            }, 1e3),
            s = i.activeTouch,
            s.end = +new Date)
        }
        function n(e) {
            if (1 != e.touches.length)
                return !1;
            var t = e.touches[0];
            return t.radiusX <= 1 && t.radiusY <= 1
        }
        function r(e, t) {
            if (null == t.left)
                return !0;
            var n = t.left - e.left
              , r = t.top - e.top;
            return n * n + r * r > 400
        }
        var i = e.display;
        Ks(i.scroller, "mousedown", fr(e, Co)),
        fs && 11 > ps ? Ks(i.scroller, "dblclick", fr(e, function(t) {
            if (!Me(e, t)) {
                var n = Cn(e, t);
                if (n && !Oo(e, t) && !Ft(e.display, t)) {
                    Pe(t);
                    var r = e.findWordAt(n);
                    fi(e.doc, r.anchor, r.head)
                }
            }
        })) : Ks(i.scroller, "dblclick", function(t) {
            return Me(e, t) || Pe(t)
        }),
        Ms || Ks(i.scroller, "contextmenu", function(t) {
            return Io(e, t)
        });
        var o, s = {
            end: 0
        };
        Ks(i.scroller, "touchstart", function(t) {
            if (!Me(e, t) && !n(t)) {
                i.input.ensurePolled(),
                clearTimeout(o);
                var r = +new Date;
                i.activeTouch = {
                    start: r,
                    moved: !1,
                    prev: r - s.end <= 300 ? s : null
                },
                1 == t.touches.length && (i.activeTouch.left = t.touches[0].pageX,
                i.activeTouch.top = t.touches[0].pageY)
            }
        }),
        Ks(i.scroller, "touchmove", function() {
            i.activeTouch && (i.activeTouch.moved = !0)
        }),
        Ks(i.scroller, "touchend", function(n) {
            var o = i.activeTouch;
            if (o && !Ft(i, n) && null != o.left && !o.moved && new Date - o.start < 300) {
                var s, a = e.coordsChar(i.activeTouch, "page");
                s = !o.prev || r(o, o.prev) ? new Sa(a,a) : !o.prev.prev || r(o, o.prev.prev) ? e.findWordAt(a) : new Sa(P(a.line, 0),B(e.doc, P(a.line + 1, 0))),
                e.setSelection(s.anchor, s.head),
                e.focus(),
                Pe(n)
            }
            t()
        }),
        Ks(i.scroller, "touchcancel", t),
        Ks(i.scroller, "scroll", function() {
            i.scroller.clientHeight && (Jn(e, i.scroller.scrollTop),
            Zn(e, i.scroller.scrollLeft, !0),
            Ae(e, "scroll", e))
        }),
        Ks(i.scroller, "mousewheel", function(t) {
            return Rr(e, t)
        }),
        Ks(i.scroller, "DOMMouseScroll", function(t) {
            return Rr(e, t)
        }),
        Ks(i.wrapper, "scroll", function() {
            return i.wrapper.scrollTop = i.wrapper.scrollLeft = 0
        }),
        i.dragFunctions = {
            enter: function(t) {
                Me(e, t) || qe(t)
            },
            over: function(t) {
                Me(e, t) || (Ji(e, t),
                qe(t))
            },
            start: function(t) {
                return Ki(e, t)
            },
            drop: fr(e, Gi),
            leave: function(t) {
                Me(e, t) || Yi(e)
            }
        };
        var a = i.input.getField();
        Ks(a, "keyup", function(t) {
            return _o.call(e, t)
        }),
        Ks(a, "keydown", fr(e, xo)),
        Ks(a, "keypress", fr(e, ko)),
        Ks(a, "focus", function(t) {
            return In(e, t)
        }),
        Ks(a, "blur", function(t) {
            return Pn(e, t)
        })
    }
    function Wo(e, t, n, r) {
        var i, o = e.doc;
        null == n && (n = "add"),
        "smart" == n && (o.mode.indent ? i = et(e, t).state : n = "prev");
        var s = e.options.tabSize
          , a = L(o, t)
          , l = h(a.text, null, s);
        a.stateAfter && (a.stateAfter = null);
        var u, c = a.text.match(/^\s*/)[0];
        if (r || /\S/.test(a.text)) {
            if ("smart" == n && (u = o.mode.indent(i, a.text.slice(c.length), a.text),
            u == qs || u > 150)) {
                if (!r)
                    return;
                n = "prev"
            }
        } else
            u = 0,
            n = "not";
        "prev" == n ? u = t > o.first ? h(L(o, t - 1).text, null, s) : 0 : "add" == n ? u = l + e.options.indentUnit : "subtract" == n ? u = l - e.options.indentUnit : "number" == typeof n && (u = l + n),
        u = Math.max(0, u);
        var d = ""
          , f = 0;
        if (e.options.indentWithTabs)
            for (var m = Math.floor(u / s); m; --m)
                f += s,
                d += "	";
        if (u > f && (d += p(u - f)),
        d != c)
            return Pi(o, d, P(t, 0), P(t, c.length), "+input"),
            a.stateAfter = null,
            !0;
        for (var g = 0; g < o.sel.ranges.length; g++) {
            var v = o.sel.ranges[g];
            if (v.head.line == t && v.head.ch < c.length) {
                var y = P(t, c.length);
                mi(o, g, new Sa(y,y));
                break
            }
        }
    }
    function Uo(e) {
        Ga = e
    }
    function zo(e, t, n, r, i) {
        var o = e.doc;
        e.display.shift = !1,
        r || (r = o.sel);
        var s = e.state.pasteIncoming || "paste" == i
          , a = Ys(t)
          , l = null;
        if (s && r.ranges.length > 1)
            if (Ga && Ga.text.join("\n") == t) {
                if (r.ranges.length % Ga.text.length == 0) {
                    l = [];
                    for (var u = 0; u < Ga.text.length; u++)
                        l.push(o.splitLines(Ga.text[u]))
                }
            } else
                a.length == r.ranges.length && e.options.pasteLinesPerSelection && (l = g(a, function(e) {
                    return [e]
                }));
        for (var c, h = r.ranges.length - 1; h >= 0; h--) {
            var d = r.ranges[h]
              , f = d.from()
              , p = d.to();
            d.empty() && (n && n > 0 ? f = P(f.line, f.ch - n) : e.state.overwrite && !s ? p = P(p.line, Math.min(L(o, p.line).text.length, p.ch + m(a).length)) : Ga && Ga.lineWise && Ga.text.join("\n") == t && (f = p = P(f.line, 0))),
            c = e.curOp.updateInput;
            var v = {
                from: f,
                to: p,
                text: l ? l[h % l.length] : a,
                origin: i || (s ? "paste" : e.state.cutIncoming ? "cut" : "+input")
            };
            Ni(e.doc, v),
            St(e, "inputRead", e, v)
        }
        t && !s && Xo(e, t),
        Vn(e),
        e.curOp.updateInput = c,
        e.curOp.typing = !0,
        e.state.pasteIncoming = e.state.cutIncoming = !1
    }
    function Vo(e, t) {
        var n = e.clipboardData && e.clipboardData.getData("Text");
        return n ? (e.preventDefault(),
        t.isReadOnly() || t.options.disableInput || dr(t, function() {
            return zo(t, n, 0, null, "paste")
        }),
        !0) : void 0
    }
    function Xo(e, t) {
        if (e.options.electricChars && e.options.smartIndent)
            for (var n = e.doc.sel, r = n.ranges.length - 1; r >= 0; r--) {
                var i = n.ranges[r];
                if (!(i.head.ch > 100 || r && n.ranges[r - 1].head.line == i.head.line)) {
                    var o = e.getModeAt(i.head)
                      , s = !1;
                    if (o.electricChars) {
                        for (var a = 0; a < o.electricChars.length; a++)
                            if (t.indexOf(o.electricChars.charAt(a)) > -1) {
                                s = Wo(e, i.head.line, "smart");
                                break
                            }
                    } else
                        o.electricInput && o.electricInput.test(L(e.doc, i.head.line).text.slice(0, i.head.ch)) && (s = Wo(e, i.head.line, "smart"));
                    s && St(e, "electricInput", e, i.head.line)
                }
            }
    }
    function Qo(e) {
        for (var t = [], n = [], r = 0; r < e.doc.sel.ranges.length; r++) {
            var i = e.doc.sel.ranges[r].head.line
              , o = {
                anchor: P(i, 0),
                head: P(i + 1, 0)
            };
            n.push(o),
            t.push(e.getRange(o.anchor, o.head))
        }
        return {
            text: t,
            ranges: n
        }
    }
    function Go(e, t) {
        e.setAttribute("autocorrect", "off"),
        e.setAttribute("autocapitalize", "off"),
        e.setAttribute("spellcheck", !!t)
    }
    function Ko() {
        var e = r("textarea", null, null, "position: absolute; bottom: -1em; padding: 0; width: 1px; height: 1em; outline: none")
          , t = r("div", [e], null, "overflow: hidden; position: relative; width: 3px; height: 0px;");
        return ms ? e.style.width = "1000px" : e.setAttribute("wrap", "off"),
        _s && (e.style.border = "1px solid black"),
        Go(e),
        t
    }
    function Jo(e, t, n, r, i) {
        function o() {
            var r = t.line + n;
            return r < e.first || r >= e.first + e.size ? !1 : (t = new P(r,t.ch,t.sticky),
            u = L(e, r))
        }
        function s(r) {
            var s;
            if (s = i ? Le(e.cm, u, t, n) : Ce(u, t, n),
            null == s) {
                if (r || !o())
                    return !1;
                t = Te(i, e.cm, u, t.line, n)
            } else
                t = s;
            return !0
        }
        var a = t
          , l = n
          , u = L(e, t.line);
        if ("char" == r)
            s();
        else if ("column" == r)
            s(!0);
        else if ("word" == r || "group" == r)
            for (var c = null, h = "group" == r, d = e.cm && e.cm.getHelper(t, "wordChars"), f = !0; !(0 > n) || s(!f); f = !1) {
                var p = u.text.charAt(t.ch) || "\n"
                  , m = w(p, d) ? "w" : h && "\n" == p ? "n" : !h || /\s/.test(p) ? null : "p";
                if (!h || f || m || (m = "s"),
                c && c != m) {
                    0 > n && (n = 1,
                    s(),
                    t.sticky = "after");
                    break
                }
                if (m && (c = m),
                n > 0 && !s(!f))
                    break
            }
        var g = Ci(e, t, a, l, !0);
        return R(a, g) && (g.hitSide = !0),
        g
    }
    function Yo(e, t, n, r) {
        var i, o = e.doc, s = t.left;
        if ("page" == r) {
            var a = Math.min(e.display.wrapper.clientHeight, window.innerHeight || document.documentElement.clientHeight)
              , l = Math.max(a - .5 * bn(e.display), 3);
            i = (n > 0 ? t.bottom : t.top) + n * l
        } else
            "line" == r && (i = n > 0 ? t.bottom + 3 : t.top - 3);
        for (var u; u = mn(e, s, i),
        u.outside; ) {
            if (0 > n ? 0 >= i : i >= o.height) {
                u.hitSide = !0;
                break
            }
            i += 5 * n
        }
        return u
    }
    function Zo(e, t) {
        var n = Kt(e, t.line);
        if (!n || n.hidden)
            return null;
        var r = L(e.doc, t.line)
          , i = Xt(n, r, t.line)
          , o = ke(r, e.doc.direction)
          , s = "left";
        if (o) {
            var a = _e(o, t.ch);
            s = a % 2 ? "right" : "left"
        }
        var l = Zt(i.map, t.ch, s);
        return l.offset = "right" == l.collapse ? l.end : l.start,
        l
    }
    function es(e) {
        for (var t = e; t; t = t.parentNode)
            if (/CodeMirror-gutter-wrapper/.test(t.className))
                return !0;
        return !1
    }
    function ts(e, t) {
        return t && (e.bad = !0),
        e
    }
    function ns(e, t, n, r, i) {
        function o(e) {
            return function(t) {
                return t.id == e
            }
        }
        function s() {
            c && (u += h,
            c = !1)
        }
        function a(e) {
            e && (s(),
            u += e)
        }
        function l(t) {
            if (1 == t.nodeType) {
                var n = t.getAttribute("cm-text");
                if (null != n)
                    return void a(n || t.textContent.replace(/\u200b/g, ""));
                var u, d = t.getAttribute("cm-marker");
                if (d) {
                    var f = e.findMarks(P(r, 0), P(i + 1, 0), o(+d));
                    return void (f.length && (u = f[0].find()) && a(E(e.doc, u.from, u.to).join(h)))
                }
                if ("false" == t.getAttribute("contenteditable"))
                    return;
                var p = /^(pre|div|p)$/i.test(t.nodeName);
                p && s();
                for (var m = 0; m < t.childNodes.length; m++)
                    l(t.childNodes[m]);
                p && (c = !0)
            } else
                3 == t.nodeType && a(t.nodeValue)
        }
        for (var u = "", c = !1, h = e.doc.lineSeparator(); l(t),
        t != n; )
            t = t.nextSibling;
        return u
    }
    function rs(e, t, n) {
        var r;
        if (t == e.display.lineDiv) {
            if (r = e.display.lineDiv.childNodes[n],
            !r)
                return ts(e.clipPos(P(e.display.viewTo - 1)), !0);
            t = null,
            n = 0
        } else
            for (r = t; ; r = r.parentNode) {
                if (!r || r == e.display.lineDiv)
                    return null;
                if (r.parentNode && r.parentNode == e.display.lineDiv)
                    break
            }
        for (var i = 0; i < e.display.view.length; i++) {
            var o = e.display.view[i];
            if (o.node == r)
                return is(o, t, n)
        }
    }
    function is(e, t, n) {
        function r(t, n, r) {
            for (var i = -1; i < (h ? h.length : 0); i++)
                for (var o = 0 > i ? c.map : h[i], s = 0; s < o.length; s += 3) {
                    var a = o[s + 2];
                    if (a == t || a == n) {
                        var l = M(0 > i ? e.line : e.rest[i])
                          , u = o[s] + r;
                        return (0 > r || a != t) && (u = o[s + (r ? 1 : 0)]),
                        P(l, u)
                    }
                }
        }
        var i = e.text.firstChild
          , s = !1;
        if (!t || !o(i, t))
            return ts(P(M(e.line), 0), !0);
        if (t == i && (s = !0,
        t = i.childNodes[n],
        n = 0,
        !t)) {
            var a = e.rest ? m(e.rest) : e.line;
            return ts(P(M(a), a.text.length), s)
        }
        var l = 3 == t.nodeType ? t : null
          , u = t;
        for (l || 1 != t.childNodes.length || 3 != t.firstChild.nodeType || (l = t.firstChild,
        n && (n = l.nodeValue.length)); u.parentNode != i; )
            u = u.parentNode;
        var c = e.measure
          , h = c.maps
          , d = r(l, u, n);
        if (d)
            return ts(d, s);
        for (var f = u.nextSibling, p = l ? l.nodeValue.length - n : 0; f; f = f.nextSibling) {
            if (d = r(f, f.firstChild, 0))
                return ts(P(d.line, d.ch - p), s);
            p += f.textContent.length
        }
        for (var g = u.previousSibling, v = n; g; g = g.previousSibling) {
            if (d = r(g, g.firstChild, -1))
                return ts(P(d.line, d.ch + v), s);
            v += g.textContent.length
        }
    }
    function os(e, t) {
        function n() {
            e.value = u.getValue()
        }
        if (t = t ? c(t) : {},
        t.value = e.value,
        !t.tabindex && e.tabIndex && (t.tabindex = e.tabIndex),
        !t.placeholder && e.placeholder && (t.placeholder = e.placeholder),
        null == t.autofocus) {
            var r = s();
            t.autofocus = r == e || null != e.getAttribute("autofocus") && r == document.body
        }
        var i;
        if (e.form && (Ks(e.form, "submit", n),
        !t.leaveSubmitMethodAlone)) {
            var o = e.form;
            i = o.submit;
            try {
                var a = o.submit = function() {
                    n(),
                    o.submit = i,
                    o.submit(),
                    o.submit = a
                }
            } catch (l) {}
        }
        t.finishInit = function(t) {
            t.save = n,
            t.getTextArea = function() {
                return e
            }
            ,
            t.toTextArea = function() {
                t.toTextArea = isNaN,
                n(),
                e.parentNode.removeChild(t.getWrapperElement()),
                e.style.display = "",
                e.form && (Ne(e.form, "submit", n),
                "function" == typeof e.form.submit && (e.form.submit = i))
            }
        }
        ,
        e.style.display = "none";
        var u = jo(function(t) {
            return e.parentNode.insertBefore(t, e.nextSibling)
        }, t);
        return u
    }
    function ss(e) {
        e.off = Ne,
        e.on = Ks,
        e.wheelEventPixels = Hr,
        e.Doc = Aa,
        e.splitLines = Ys,
        e.countColumn = h,
        e.findColumn = f,
        e.isWordChar = x,
        e.Pass = qs,
        e.signal = Ae,
        e.Line = ua,
        e.changeEnd = $r,
        e.scrollbarModel = ya,
        e.Pos = P,
        e.cmpPos = H,
        e.modes = na,
        e.mimeModes = ra,
        e.resolveMode = Ve,
        e.getMode = Xe,
        e.modeExtensions = ia,
        e.extendMode = Qe,
        e.copyState = Ge,
        e.startState = Je,
        e.innerMode = Ke,
        e.commands = qa,
        e.keyMap = Ra,
        e.keyName = lo,
        e.isModifierKey = so,
        e.lookupKey = oo,
        e.normalizeKeyMap = io,
        e.StringStream = oa,
        e.SharedTextMarker = Ea,
        e.TextMarker = La,
        e.LineWidget = Ca,
        e.e_preventDefault = Pe,
        e.e_stopPropagation = He,
        e.e_stop = qe,
        e.addClass = a,
        e.contains = o,
        e.rmClass = Ds,
        e.keyNames = Oa
    }
    var as = navigator.userAgent
      , ls = navigator.platform
      , us = /gecko\/\d/i.test(as)
      , cs = /MSIE \d/.test(as)
      , hs = /Trident\/(?:[7-9]|\d{2,})\..*rv:(\d+)/.exec(as)
      , ds = /Edge\/(\d+)/.exec(as)
      , fs = cs || hs || ds
      , ps = fs && (cs ? document.documentMode || 6 : +(ds || hs)[1])
      , ms = !ds && /WebKit\//.test(as)
      , gs = ms && /Qt\/\d+\.\d+/.test(as)
      , vs = !ds && /Chrome\//.test(as)
      , ys = /Opera\//.test(as)
      , bs = /Apple Computer/.test(navigator.vendor)
      , xs = /Mac OS X 1\d\D([8-9]|\d\d)\D/.test(as)
      , ws = /PhantomJS/.test(as)
      , _s = !ds && /AppleWebKit/.test(as) && /Mobile\/\w+/.test(as)
      , ks = /Android/.test(as)
      , Ss = _s || ks || /webOS|BlackBerry|Opera Mini|Opera Mobi|IEMobile/i.test(as)
      , Cs = _s || /Mac/.test(ls)
      , Ts = /\bCrOS\b/.test(as)
      , Ls = /win/i.test(ls)
      , Es = ys && as.match(/Version\/(\d*\.\d*)/);
    Es && (Es = Number(Es[1])),
    Es && Es >= 15 && (ys = !1,
    ms = !0);
    var Ns, As = Cs && (gs || ys && (null == Es || 12.11 > Es)), Ms = us || fs && ps >= 9, Ds = function(t, n) {
        var r = t.className
          , i = e(n).exec(r);
        if (i) {
            var o = r.slice(i.index + i[0].length);
            t.className = r.slice(0, i.index) + (o ? i[1] + o : "")
        }
    };
    Ns = document.createRange ? function(e, t, n, r) {
        var i = document.createRange();
        return i.setEnd(r || e, n),
        i.setStart(e, t),
        i
    }
    : function(e, t, n) {
        var r = document.body.createTextRange();
        try {
            r.moveToElementText(e.parentNode)
        } catch (i) {
            return r
        }
        return r.collapse(!0),
        r.moveEnd("character", n),
        r.moveStart("character", t),
        r
    }
    ;
    var Os = function(e) {
        e.select()
    };
    _s ? Os = function(e) {
        e.selectionStart = 0,
        e.selectionEnd = e.value.length
    }
    : fs && (Os = function(e) {
        try {
            e.select()
        } catch (t) {}
    }
    );
    var Is = function() {
        this.id = null
    };
    Is.prototype.set = function(e, t) {
        clearTimeout(this.id),
        this.id = setTimeout(t, e)
    }
    ;
    var Ps, Hs, Rs = 30, qs = {
        toString: function() {
            return "CodeMirror.Pass"
        }
    }, Fs = {
        scroll: !1
    }, $s = {
        origin: "*mouse"
    }, js = {
        origin: "+move"
    }, Bs = [""], Ws = /[\u00df\u0587\u0590-\u05f4\u0600-\u06ff\u3040-\u309f\u30a0-\u30ff\u3400-\u4db5\u4e00-\u9fcc\uac00-\ud7af]/, Us = /[\u0300-\u036f\u0483-\u0489\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u065e\u0670\u06d6-\u06dc\u06de-\u06e4\u06e7\u06e8\u06ea-\u06ed\u0711\u0730-\u074a\u07a6-\u07b0\u07eb-\u07f3\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0900-\u0902\u093c\u0941-\u0948\u094d\u0951-\u0955\u0962\u0963\u0981\u09bc\u09be\u09c1-\u09c4\u09cd\u09d7\u09e2\u09e3\u0a01\u0a02\u0a3c\u0a41\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a70\u0a71\u0a75\u0a81\u0a82\u0abc\u0ac1-\u0ac5\u0ac7\u0ac8\u0acd\u0ae2\u0ae3\u0b01\u0b3c\u0b3e\u0b3f\u0b41-\u0b44\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b82\u0bbe\u0bc0\u0bcd\u0bd7\u0c3e-\u0c40\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0cbc\u0cbf\u0cc2\u0cc6\u0ccc\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0d3e\u0d41-\u0d44\u0d4d\u0d57\u0d62\u0d63\u0dca\u0dcf\u0dd2-\u0dd4\u0dd6\u0ddf\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0eb1\u0eb4-\u0eb9\u0ebb\u0ebc\u0ec8-\u0ecd\u0f18\u0f19\u0f35\u0f37\u0f39\u0f71-\u0f7e\u0f80-\u0f84\u0f86\u0f87\u0f90-\u0f97\u0f99-\u0fbc\u0fc6\u102d-\u1030\u1032-\u1037\u1039\u103a\u103d\u103e\u1058\u1059\u105e-\u1060\u1071-\u1074\u1082\u1085\u1086\u108d\u109d\u135f\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b7-\u17bd\u17c6\u17c9-\u17d3\u17dd\u180b-\u180d\u18a9\u1920-\u1922\u1927\u1928\u1932\u1939-\u193b\u1a17\u1a18\u1a56\u1a58-\u1a5e\u1a60\u1a62\u1a65-\u1a6c\u1a73-\u1a7c\u1a7f\u1b00-\u1b03\u1b34\u1b36-\u1b3a\u1b3c\u1b42\u1b6b-\u1b73\u1b80\u1b81\u1ba2-\u1ba5\u1ba8\u1ba9\u1c2c-\u1c33\u1c36\u1c37\u1cd0-\u1cd2\u1cd4-\u1ce0\u1ce2-\u1ce8\u1ced\u1dc0-\u1de6\u1dfd-\u1dff\u200c\u200d\u20d0-\u20f0\u2cef-\u2cf1\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua66f-\ua672\ua67c\ua67d\ua6f0\ua6f1\ua802\ua806\ua80b\ua825\ua826\ua8c4\ua8e0-\ua8f1\ua926-\ua92d\ua947-\ua951\ua980-\ua982\ua9b3\ua9b6-\ua9b9\ua9bc\uaa29-\uaa2e\uaa31\uaa32\uaa35\uaa36\uaa43\uaa4c\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uabe5\uabe8\uabed\udc00-\udfff\ufb1e\ufe00-\ufe0f\ufe20-\ufe26\uff9e\uff9f]/, zs = !1, Vs = !1, Xs = null, Qs = function() {
        function e(e) {
            return 247 >= e ? n.charAt(e) : e >= 1424 && 1524 >= e ? "R" : e >= 1536 && 1785 >= e ? r.charAt(e - 1536) : e >= 1774 && 2220 >= e ? "r" : e >= 8192 && 8203 >= e ? "w" : 8204 == e ? "b" : "L"
        }
        function t(e, t, n) {
            this.level = e,
            this.from = t,
            this.to = n
        }
        var n = "bbbbbbbbbtstwsbbbbbbbbbbbbbbssstwNN%%%NNNNNN,N,N1111111111NNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNNNLLLLLLLLLLLLLLLLLLLLLLLLLLNNNNbbbbbbsbbbbbbbbbbbbbbbbbbbbbbbbbb,N%%%%NNNNLNNNNN%%11NLNNN1LNNNNNLLLLLLLLLLLLLLLLLLLLLLLNLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLN"
          , r = "nnnnnnNNr%%r,rNNmmmmmmmmmmmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmmmmmmmmmmmmmmmnnnnnnnnnn%nnrrrmrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrrmmmmmmmnNmmmmmmrrmmNmmmmrr1111111111"
          , i = /[\u0590-\u05f4\u0600-\u06ff\u0700-\u08ac]/
          , o = /[stwN]/
          , s = /[LRr]/
          , a = /[Lb1n]/
          , l = /[1n]/;
        return function(n, r) {
            var u = "ltr" == r ? "L" : "R";
            if (0 == n.length || "ltr" == r && !i.test(n))
                return !1;
            for (var c = n.length, h = [], d = 0; c > d; ++d)
                h.push(e(n.charCodeAt(d)));
            for (var f = 0, p = u; c > f; ++f) {
                var g = h[f];
                "m" == g ? h[f] = p : p = g
            }
            for (var v = 0, y = u; c > v; ++v) {
                var b = h[v];
                "1" == b && "r" == y ? h[v] = "n" : s.test(b) && (y = b,
                "r" == b && (h[v] = "R"))
            }
            for (var x = 1, w = h[0]; c - 1 > x; ++x) {
                var _ = h[x];
                "+" == _ && "1" == w && "1" == h[x + 1] ? h[x] = "1" : "," != _ || w != h[x + 1] || "1" != w && "n" != w || (h[x] = w),
                w = _
            }
            for (var k = 0; c > k; ++k) {
                var S = h[k];
                if ("," == S)
                    h[k] = "N";
                else if ("%" == S) {
                    var C = void 0;
                    for (C = k + 1; c > C && "%" == h[C]; ++C)
                        ;
                    for (var T = k && "!" == h[k - 1] || c > C && "1" == h[C] ? "1" : "N", L = k; C > L; ++L)
                        h[L] = T;
                    k = C - 1
                }
            }
            for (var E = 0, N = u; c > E; ++E) {
                var A = h[E];
                "L" == N && "1" == A ? h[E] = "L" : s.test(A) && (N = A)
            }
            for (var M = 0; c > M; ++M)
                if (o.test(h[M])) {
                    var D = void 0;
                    for (D = M + 1; c > D && o.test(h[D]); ++D)
                        ;
                    for (var O = "L" == (M ? h[M - 1] : u), I = "L" == (c > D ? h[D] : u), P = O == I ? O ? "L" : "R" : u, H = M; D > H; ++H)
                        h[H] = P;
                    M = D - 1
                }
            for (var R, q = [], F = 0; c > F; )
                if (a.test(h[F])) {
                    var $ = F;
                    for (++F; c > F && a.test(h[F]); ++F)
                        ;
                    q.push(new t(0,$,F))
                } else {
                    var j = F
                      , B = q.length;
                    for (++F; c > F && "L" != h[F]; ++F)
                        ;
                    for (var W = j; F > W; )
                        if (l.test(h[W])) {
                            W > j && q.splice(B, 0, new t(1,j,W));
                            var U = W;
                            for (++W; F > W && l.test(h[W]); ++W)
                                ;
                            q.splice(B, 0, new t(2,U,W)),
                            j = W
                        } else
                            ++W;
                    F > j && q.splice(B, 0, new t(1,j,F))
                }
            return 1 == q[0].level && (R = n.match(/^\s+/)) && (q[0].from = R[0].length,
            q.unshift(new t(0,0,R[0].length))),
            1 == m(q).level && (R = n.match(/\s+$/)) && (m(q).to -= R[0].length,
            q.push(new t(0,c - R[0].length,c))),
            "rtl" == r ? q.reverse() : q
        }
    }(), Gs = [], Ks = function(e, t, n) {
        if (e.addEventListener)
            e.addEventListener(t, n, !1);
        else if (e.attachEvent)
            e.attachEvent("on" + t, n);
        else {
            var r = e._handlers || (e._handlers = {});
            r[t] = (r[t] || Gs).concat(n)
        }
    }, Js = function() {
        if (fs && 9 > ps)
            return !1;
        var e = r("div");
        return "draggable"in e || "dragDrop"in e
    }(), Ys = 3 != "\n\nb".split(/\n/).length ? function(e) {
        for (var t = 0, n = [], r = e.length; r >= t; ) {
            var i = e.indexOf("\n", t);
            -1 == i && (i = e.length);
            var o = e.slice(t, "\r" == e.charAt(i - 1) ? i - 1 : i)
              , s = o.indexOf("\r");
            -1 != s ? (n.push(o.slice(0, s)),
            t += s + 1) : (n.push(o),
            t = i + 1)
        }
        return n
    }
    : function(e) {
        return e.split(/\r\n?|\n/)
    }
    , Zs = window.getSelection ? function(e) {
        try {
            return e.selectionStart != e.selectionEnd
        } catch (t) {
            return !1
        }
    }
    : function(e) {
        var t;
        try {
            t = e.ownerDocument.selection.createRange()
        } catch (n) {}
        return t && t.parentElement() == e ? 0 != t.compareEndPoints("StartToEnd", t) : !1
    }
    , ea = function() {
        var e = r("div");
        return "oncopy"in e ? !0 : (e.setAttribute("oncopy", "return;"),
        "function" == typeof e.oncopy)
    }(), ta = null, na = {}, ra = {}, ia = {}, oa = function(e, t, n) {
        this.pos = this.start = 0,
        this.string = e,
        this.tabSize = t || 8,
        this.lastColumnPos = this.lastColumnValue = 0,
        this.lineStart = 0,
        this.lineOracle = n
    };
    oa.prototype.eol = function() {
        return this.pos >= this.string.length
    }
    ,
    oa.prototype.sol = function() {
        return this.pos == this.lineStart
    }
    ,
    oa.prototype.peek = function() {
        return this.string.charAt(this.pos) || void 0
    }
    ,
    oa.prototype.next = function() {
        return this.pos < this.string.length ? this.string.charAt(this.pos++) : void 0
    }
    ,
    oa.prototype.eat = function(e) {
        var t, n = this.string.charAt(this.pos);
        return t = "string" == typeof e ? n == e : n && (e.test ? e.test(n) : e(n)),
        t ? (++this.pos,
        n) : void 0
    }
    ,
    oa.prototype.eatWhile = function(e) {
        for (var t = this.pos; this.eat(e); )
            ;
        return this.pos > t
    }
    ,
    oa.prototype.eatSpace = function() {
        for (var e = this, t = this.pos; /[\s\u00a0]/.test(this.string.charAt(this.pos)); )
            ++e.pos;
        return this.pos > t
    }
    ,
    oa.prototype.skipToEnd = function() {
        this.pos = this.string.length
    }
    ,
    oa.prototype.skipTo = function(e) {
        var t = this.string.indexOf(e, this.pos);
        return t > -1 ? (this.pos = t,
        !0) : void 0
    }
    ,
    oa.prototype.backUp = function(e) {
        this.pos -= e
    }
    ,
    oa.prototype.column = function() {
        return this.lastColumnPos < this.start && (this.lastColumnValue = h(this.string, this.start, this.tabSize, this.lastColumnPos, this.lastColumnValue),
        this.lastColumnPos = this.start),
        this.lastColumnValue - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
    }
    ,
    oa.prototype.indentation = function() {
        return h(this.string, null, this.tabSize) - (this.lineStart ? h(this.string, this.lineStart, this.tabSize) : 0)
    }
    ,
    oa.prototype.match = function(e, t, n) {
        if ("string" != typeof e) {
            var r = this.string.slice(this.pos).match(e);
            return r && r.index > 0 ? null : (r && t !== !1 && (this.pos += r[0].length),
            r)
        }
        var i = function(e) {
            return n ? e.toLowerCase() : e
        }
          , o = this.string.substr(this.pos, e.length);
        return i(o) == i(e) ? (t !== !1 && (this.pos += e.length),
        !0) : void 0
    }
    ,
    oa.prototype.current = function() {
        return this.string.slice(this.start, this.pos)
    }
    ,
    oa.prototype.hideFirstChars = function(e, t) {
        this.lineStart += e;
        try {
            return t()
        } finally {
            this.lineStart -= e
        }
    }
    ,
    oa.prototype.lookAhead = function(e) {
        var t = this.lineOracle;
        return t && t.lookAhead(e)
    }
    ;
    var sa = function(e, t) {
        this.state = e,
        this.lookAhead = t
    }
      , aa = function(e, t, n, r) {
        this.state = t,
        this.doc = e,
        this.line = n,
        this.maxLookAhead = r || 0
    };
    aa.prototype.lookAhead = function(e) {
        var t = this.doc.getLine(this.line + e);
        return null != t && e > this.maxLookAhead && (this.maxLookAhead = e),
        t
    }
    ,
    aa.prototype.nextLine = function() {
        this.line++,
        this.maxLookAhead > 0 && this.maxLookAhead--
    }
    ,
    aa.fromSaved = function(e, t, n) {
        return t instanceof sa ? new aa(e,Ge(e.mode, t.state),n,t.lookAhead) : new aa(e,Ge(e.mode, t),n)
    }
    ,
    aa.prototype.save = function(e) {
        var t = e !== !1 ? Ge(this.doc.mode, this.state) : this.state;
        return this.maxLookAhead > 0 ? new sa(t,this.maxLookAhead) : t
    }
    ;
    var la = function(e, t, n) {
        this.start = e.start,
        this.end = e.pos,
        this.string = e.current(),
        this.type = t || null,
        this.state = n
    }
      , ua = function(e, t, n) {
        this.text = e,
        re(this, t),
        this.height = n ? n(this) : 1
    };
    ua.prototype.lineNo = function() {
        return M(this)
    }
    ,
    Ie(ua);
    var ca, ha = {}, da = {}, fa = null, pa = null, ma = {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0
    }, ga = function(e, t, n) {
        this.cm = n;
        var i = this.vert = r("div", [r("div", null, null, "min-width: 1px")], "CodeMirror-vscrollbar")
          , o = this.horiz = r("div", [r("div", null, null, "height: 100%; min-height: 1px")], "CodeMirror-hscrollbar");
        e(i),
        e(o),
        Ks(i, "scroll", function() {
            i.clientHeight && t(i.scrollTop, "vertical")
        }),
        Ks(o, "scroll", function() {
            o.clientWidth && t(o.scrollLeft, "horizontal")
        }),
        this.checkedZeroWidth = !1,
        fs && 8 > ps && (this.horiz.style.minHeight = this.vert.style.minWidth = "18px")
    };
    ga.prototype.update = function(e) {
        var t = e.scrollWidth > e.clientWidth + 1
          , n = e.scrollHeight > e.clientHeight + 1
          , r = e.nativeBarWidth;
        if (n) {
            this.vert.style.display = "block",
            this.vert.style.bottom = t ? r + "px" : "0";
            var i = e.viewHeight - (t ? r : 0);
            this.vert.firstChild.style.height = Math.max(0, e.scrollHeight - e.clientHeight + i) + "px";
        } else
            this.vert.style.display = "",
            this.vert.firstChild.style.height = "0";
        if (t) {
            this.horiz.style.display = "block",
            this.horiz.style.right = n ? r + "px" : "0",
            this.horiz.style.left = e.barLeft + "px";
            var o = e.viewWidth - e.barLeft - (n ? r : 0);
            this.horiz.firstChild.style.width = Math.max(0, e.scrollWidth - e.clientWidth + o) + "px"
        } else
            this.horiz.style.display = "",
            this.horiz.firstChild.style.width = "0";
        return !this.checkedZeroWidth && e.clientHeight > 0 && (0 == r && this.zeroWidthHack(),
        this.checkedZeroWidth = !0),
        {
            right: n ? r : 0,
            bottom: t ? r : 0
        }
    }
    ,
    ga.prototype.setScrollLeft = function(e) {
        this.horiz.scrollLeft != e && (this.horiz.scrollLeft = e),
        this.disableHoriz && this.enableZeroWidthBar(this.horiz, this.disableHoriz, "horiz")
    }
    ,
    ga.prototype.setScrollTop = function(e) {
        this.vert.scrollTop != e && (this.vert.scrollTop = e),
        this.disableVert && this.enableZeroWidthBar(this.vert, this.disableVert, "vert")
    }
    ,
    ga.prototype.zeroWidthHack = function() {
        var e = Cs && !xs ? "12px" : "18px";
        this.horiz.style.height = this.vert.style.width = e,
        this.horiz.style.pointerEvents = this.vert.style.pointerEvents = "none",
        this.disableHoriz = new Is,
        this.disableVert = new Is
    }
    ,
    ga.prototype.enableZeroWidthBar = function(e, t, n) {
        function r() {
            var i = e.getBoundingClientRect()
              , o = "vert" == n ? document.elementFromPoint(i.right - 1, (i.top + i.bottom) / 2) : document.elementFromPoint((i.right + i.left) / 2, i.bottom - 1);
            o != e ? e.style.pointerEvents = "none" : t.set(1e3, r)
        }
        e.style.pointerEvents = "auto",
        t.set(1e3, r)
    }
    ,
    ga.prototype.clear = function() {
        var e = this.horiz.parentNode;
        e.removeChild(this.horiz),
        e.removeChild(this.vert)
    }
    ;
    var va = function() {};
    va.prototype.update = function() {
        return {
            bottom: 0,
            right: 0
        }
    }
    ,
    va.prototype.setScrollLeft = function() {}
    ,
    va.prototype.setScrollTop = function() {}
    ,
    va.prototype.clear = function() {}
    ;
    var ya = {
        "native": ga,
        "null": va
    }
      , ba = 0
      , xa = function(e, t, n) {
        var r = e.display;
        this.viewport = t,
        this.visible = qn(r, e.doc, t),
        this.editorIsHidden = !r.wrapper.offsetWidth,
        this.wrapperHeight = r.wrapper.clientHeight,
        this.wrapperWidth = r.wrapper.clientWidth,
        this.oldDisplayWidth = Ut(e),
        this.force = n,
        this.dims = wn(e),
        this.events = []
    };
    xa.prototype.signal = function(e, t) {
        Oe(e, t) && this.events.push(arguments)
    }
    ,
    xa.prototype.finish = function() {
        for (var e = this, t = 0; t < this.events.length; t++)
            Ae.apply(null, e.events[t])
    }
    ;
    var wa = 0
      , _a = null;
    fs ? _a = -.53 : us ? _a = 15 : vs ? _a = -.7 : bs && (_a = -1 / 3);
    var ka = function(e, t) {
        this.ranges = e,
        this.primIndex = t
    };
    ka.prototype.primary = function() {
        return this.ranges[this.primIndex]
    }
    ,
    ka.prototype.equals = function(e) {
        var t = this;
        if (e == this)
            return !0;
        if (e.primIndex != this.primIndex || e.ranges.length != this.ranges.length)
            return !1;
        for (var n = 0; n < this.ranges.length; n++) {
            var r = t.ranges[n]
              , i = e.ranges[n];
            if (!R(r.anchor, i.anchor) || !R(r.head, i.head))
                return !1
        }
        return !0
    }
    ,
    ka.prototype.deepCopy = function() {
        for (var e = this, t = [], n = 0; n < this.ranges.length; n++)
            t[n] = new Sa(q(e.ranges[n].anchor),q(e.ranges[n].head));
        return new ka(t,this.primIndex)
    }
    ,
    ka.prototype.somethingSelected = function() {
        for (var e = this, t = 0; t < this.ranges.length; t++)
            if (!e.ranges[t].empty())
                return !0;
        return !1
    }
    ,
    ka.prototype.contains = function(e, t) {
        var n = this;
        t || (t = e);
        for (var r = 0; r < this.ranges.length; r++) {
            var i = n.ranges[r];
            if (H(t, i.from()) >= 0 && H(e, i.to()) <= 0)
                return r
        }
        return -1
    }
    ;
    var Sa = function(e, t) {
        this.anchor = e,
        this.head = t
    };
    Sa.prototype.from = function() {
        return $(this.anchor, this.head)
    }
    ,
    Sa.prototype.to = function() {
        return F(this.anchor, this.head)
    }
    ,
    Sa.prototype.empty = function() {
        return this.head.line == this.anchor.line && this.head.ch == this.anchor.ch
    }
    ,
    $i.prototype = {
        chunkSize: function() {
            return this.lines.length
        },
        removeInner: function(e, t) {
            for (var n = this, r = e, i = e + t; i > r; ++r) {
                var o = n.lines[r];
                n.height -= o.height,
                ct(o),
                St(o, "delete")
            }
            this.lines.splice(e, t)
        },
        collapse: function(e) {
            e.push.apply(e, this.lines)
        },
        insertInner: function(e, t, n) {
            var r = this;
            this.height += n,
            this.lines = this.lines.slice(0, e).concat(t).concat(this.lines.slice(e));
            for (var i = 0; i < t.length; ++i)
                t[i].parent = r
        },
        iterN: function(e, t, n) {
            for (var r = this, i = e + t; i > e; ++e)
                if (n(r.lines[e]))
                    return !0
        }
    },
    ji.prototype = {
        chunkSize: function() {
            return this.size
        },
        removeInner: function(e, t) {
            var n = this;
            this.size -= t;
            for (var r = 0; r < this.children.length; ++r) {
                var i = n.children[r]
                  , o = i.chunkSize();
                if (o > e) {
                    var s = Math.min(t, o - e)
                      , a = i.height;
                    if (i.removeInner(e, s),
                    n.height -= a - i.height,
                    o == s && (n.children.splice(r--, 1),
                    i.parent = null),
                    0 == (t -= s))
                        break;
                    e = 0
                } else
                    e -= o
            }
            if (this.size - t < 25 && (this.children.length > 1 || !(this.children[0]instanceof $i))) {
                var l = [];
                this.collapse(l),
                this.children = [new $i(l)],
                this.children[0].parent = this
            }
        },
        collapse: function(e) {
            for (var t = this, n = 0; n < this.children.length; ++n)
                t.children[n].collapse(e)
        },
        insertInner: function(e, t, n) {
            var r = this;
            this.size += t.length,
            this.height += n;
            for (var i = 0; i < this.children.length; ++i) {
                var o = r.children[i]
                  , s = o.chunkSize();
                if (s >= e) {
                    if (o.insertInner(e, t, n),
                    o.lines && o.lines.length > 50) {
                        for (var a = o.lines.length % 25 + 25, l = a; l < o.lines.length; ) {
                            var u = new $i(o.lines.slice(l, l += 25));
                            o.height -= u.height,
                            r.children.splice(++i, 0, u),
                            u.parent = r
                        }
                        o.lines = o.lines.slice(0, a),
                        r.maybeSpill()
                    }
                    break
                }
                e -= s
            }
        },
        maybeSpill: function() {
            if (!(this.children.length <= 10)) {
                var e = this;
                do {
                    var t = e.children.splice(e.children.length - 5, 5)
                      , n = new ji(t);
                    if (e.parent) {
                        e.size -= n.size,
                        e.height -= n.height;
                        var r = d(e.parent.children, e);
                        e.parent.children.splice(r + 1, 0, n)
                    } else {
                        var i = new ji(e.children);
                        i.parent = e,
                        e.children = [i, n],
                        e = i
                    }
                    n.parent = e.parent
                } while (e.children.length > 10);
                e.parent.maybeSpill()
            }
        },
        iterN: function(e, t, n) {
            for (var r = this, i = 0; i < this.children.length; ++i) {
                var o = r.children[i]
                  , s = o.chunkSize();
                if (s > e) {
                    var a = Math.min(t, s - e);
                    if (o.iterN(e, a, n))
                        return !0;
                    if (0 == (t -= a))
                        break;
                    e = 0
                } else
                    e -= s
            }
        }
    };
    var Ca = function(e, t, n) {
        var r = this;
        if (n)
            for (var i in n)
                n.hasOwnProperty(i) && (r[i] = n[i]);
        this.doc = e,
        this.node = t
    };
    Ca.prototype.clear = function() {
        var e = this
          , t = this.doc.cm
          , n = this.line.widgets
          , r = this.line
          , i = M(r);
        if (null != i && n) {
            for (var o = 0; o < n.length; ++o)
                n[o] == e && n.splice(o--, 1);
            n.length || (r.widgets = null);
            var s = qt(this);
            A(r, Math.max(0, r.height - s)),
            t && (dr(t, function() {
                Bi(t, r, -s),
                vr(t, i, "widget")
            }),
            St(t, "lineWidgetCleared", t, this, i))
        }
    }
    ,
    Ca.prototype.changed = function() {
        var e = this
          , t = this.height
          , n = this.doc.cm
          , r = this.line;
        this.height = null;
        var i = qt(this) - t;
        i && (A(r, r.height + i),
        n && dr(n, function() {
            n.curOp.forceUpdate = !0,
            Bi(n, r, i),
            St(n, "lineWidgetChanged", n, e, M(r))
        }))
    }
    ,
    Ie(Ca);
    var Ta = 0
      , La = function(e, t) {
        this.lines = [],
        this.type = t,
        this.doc = e,
        this.id = ++Ta
    };
    La.prototype.clear = function() {
        var e = this;
        if (!this.explicitlyCleared) {
            var t = this.doc.cm
              , n = t && !t.curOp;
            if (n && ir(t),
            Oe(this, "clear")) {
                var r = this.find();
                r && St(this, "clear", r.from, r.to)
            }
            for (var i = null, o = null, s = 0; s < this.lines.length; ++s) {
                var a = e.lines[s]
                  , l = Q(a.markedSpans, e);
                t && !e.collapsed ? vr(t, M(a), "text") : t && (null != l.to && (o = M(a)),
                null != l.from && (i = M(a))),
                a.markedSpans = G(a.markedSpans, l),
                null == l.from && e.collapsed && !ge(e.doc, a) && t && A(a, bn(t.display))
            }
            if (t && this.collapsed && !t.options.lineWrapping)
                for (var u = 0; u < this.lines.length; ++u) {
                    var c = he(e.lines[u])
                      , h = be(c);
                    h > t.display.maxLineLength && (t.display.maxLine = c,
                    t.display.maxLineLength = h,
                    t.display.maxLineChanged = !0)
                }
            null != i && t && this.collapsed && gr(t, i, o + 1),
            this.lines.length = 0,
            this.explicitlyCleared = !0,
            this.atomic && this.doc.cantEdit && (this.doc.cantEdit = !1,
            t && _i(t.doc)),
            t && St(t, "markerCleared", t, this, i, o),
            n && or(t),
            this.parent && this.parent.clear()
        }
    }
    ,
    La.prototype.find = function(e, t) {
        var n = this;
        null == e && "bookmark" == this.type && (e = 1);
        for (var r, i, o = 0; o < this.lines.length; ++o) {
            var s = n.lines[o]
              , a = Q(s.markedSpans, n);
            if (null != a.from && (r = P(t ? s : M(s), a.from),
            -1 == e))
                return r;
            if (null != a.to && (i = P(t ? s : M(s), a.to),
            1 == e))
                return i
        }
        return r && {
            from: r,
            to: i
        }
    }
    ,
    La.prototype.changed = function() {
        var e = this
          , t = this.find(-1, !0)
          , n = this
          , r = this.doc.cm;
        t && r && dr(r, function() {
            var i = t.line
              , o = M(t.line)
              , s = Kt(r, o);
            if (s && (rn(s),
            r.curOp.selectionChanged = r.curOp.forceUpdate = !0),
            r.curOp.updateMaxLine = !0,
            !ge(n.doc, i) && null != n.height) {
                var a = n.height;
                n.height = null;
                var l = qt(n) - a;
                l && A(i, i.height + l)
            }
            St(r, "markerChanged", r, e)
        })
    }
    ,
    La.prototype.attachLine = function(e) {
        if (!this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            t.maybeHiddenMarkers && -1 != d(t.maybeHiddenMarkers, this) || (t.maybeUnhiddenMarkers || (t.maybeUnhiddenMarkers = [])).push(this)
        }
        this.lines.push(e)
    }
    ,
    La.prototype.detachLine = function(e) {
        if (this.lines.splice(d(this.lines, e), 1),
        !this.lines.length && this.doc.cm) {
            var t = this.doc.cm.curOp;
            (t.maybeHiddenMarkers || (t.maybeHiddenMarkers = [])).push(this)
        }
    }
    ,
    Ie(La);
    var Ea = function(e, t) {
        var n = this;
        this.markers = e,
        this.primary = t;
        for (var r = 0; r < e.length; ++r)
            e[r].parent = n
    };
    Ea.prototype.clear = function() {
        var e = this;
        if (!this.explicitlyCleared) {
            this.explicitlyCleared = !0;
            for (var t = 0; t < this.markers.length; ++t)
                e.markers[t].clear();
            St(this, "clear")
        }
    }
    ,
    Ea.prototype.find = function(e, t) {
        return this.primary.find(e, t)
    }
    ,
    Ie(Ea);
    var Na = 0
      , Aa = function(e, t, n, r, i) {
        if (!(this instanceof Aa))
            return new Aa(e,t,n,r,i);
        null == n && (n = 0),
        ji.call(this, [new $i([new ua("",null)])]),
        this.first = n,
        this.scrollTop = this.scrollLeft = 0,
        this.cantEdit = !1,
        this.cleanGeneration = 1,
        this.modeFrontier = this.highlightFrontier = n;
        var o = P(n, 0);
        this.sel = Fr(o),
        this.history = new Zr(null),
        this.id = ++Na,
        this.modeOption = t,
        this.lineSep = r,
        this.direction = "rtl" == i ? "rtl" : "ltr",
        this.extend = !1,
        "string" == typeof e && (e = this.splitLines(e)),
        Qr(this, {
            from: o,
            to: o,
            text: e
        }),
        bi(this, Fr(o), Fs)
    };
    Aa.prototype = b(ji.prototype, {
        constructor: Aa,
        iter: function(e, t, n) {
            n ? this.iterN(e - this.first, t - e, n) : this.iterN(this.first, this.first + this.size, e)
        },
        insert: function(e, t) {
            for (var n = 0, r = 0; r < t.length; ++r)
                n += t[r].height;
            this.insertInner(e - this.first, t, n)
        },
        remove: function(e, t) {
            this.removeInner(e - this.first, t)
        },
        getValue: function(e) {
            var t = N(this, this.first, this.first + this.size);
            return e === !1 ? t : t.join(e || this.lineSeparator())
        },
        setValue: mr(function(e) {
            var t = P(this.first, 0)
              , n = this.first + this.size - 1;
            Ni(this, {
                from: t,
                to: P(n, L(this, n).text.length),
                text: this.splitLines(e),
                origin: "setValue",
                full: !0
            }, !0),
            this.cm && Xn(this.cm, 0, 0),
            bi(this, Fr(t), Fs)
        }),
        replaceRange: function(e, t, n, r) {
            t = B(this, t),
            n = n ? B(this, n) : t,
            Pi(this, e, t, n, r)
        },
        getRange: function(e, t, n) {
            var r = E(this, B(this, e), B(this, t));
            return n === !1 ? r : r.join(n || this.lineSeparator())
        },
        getLine: function(e) {
            var t = this.getLineHandle(e);
            return t && t.text
        },
        getLineHandle: function(e) {
            return O(this, e) ? L(this, e) : void 0
        },
        getLineNumber: function(e) {
            return M(e)
        },
        getLineHandleVisualStart: function(e) {
            return "number" == typeof e && (e = L(this, e)),
            he(e)
        },
        lineCount: function() {
            return this.size
        },
        firstLine: function() {
            return this.first
        },
        lastLine: function() {
            return this.first + this.size - 1
        },
        clipPos: function(e) {
            return B(this, e)
        },
        getCursor: function(e) {
            var t, n = this.sel.primary();
            return t = null == e || "head" == e ? n.head : "anchor" == e ? n.anchor : "end" == e || "to" == e || e === !1 ? n.to() : n.from()
        },
        listSelections: function() {
            return this.sel.ranges
        },
        somethingSelected: function() {
            return this.sel.somethingSelected()
        },
        setCursor: mr(function(e, t, n) {
            gi(this, B(this, "number" == typeof e ? P(e, t || 0) : e), null, n)
        }),
        setSelection: mr(function(e, t, n) {
            gi(this, B(this, e), B(this, t || e), n)
        }),
        extendSelection: mr(function(e, t, n) {
            fi(this, B(this, e), t && B(this, t), n)
        }),
        extendSelections: mr(function(e, t) {
            pi(this, U(this, e), t)
        }),
        extendSelectionsBy: mr(function(e, t) {
            var n = g(this.sel.ranges, e);
            pi(this, U(this, n), t)
        }),
        setSelections: mr(function(e, t, n) {
            var r = this;
            if (e.length) {
                for (var i = [], o = 0; o < e.length; o++)
                    i[o] = new Sa(B(r, e[o].anchor),B(r, e[o].head));
                null == t && (t = Math.min(e.length - 1, this.sel.primIndex)),
                bi(this, qr(i, t), n)
            }
        }),
        addSelection: mr(function(e, t, n) {
            var r = this.sel.ranges.slice(0);
            r.push(new Sa(B(this, e),B(this, t || e))),
            bi(this, qr(r, r.length - 1), n)
        }),
        getSelection: function(e) {
            for (var t, n = this, r = this.sel.ranges, i = 0; i < r.length; i++) {
                var o = E(n, r[i].from(), r[i].to());
                t = t ? t.concat(o) : o
            }
            return e === !1 ? t : t.join(e || this.lineSeparator())
        },
        getSelections: function(e) {
            for (var t = this, n = [], r = this.sel.ranges, i = 0; i < r.length; i++) {
                var o = E(t, r[i].from(), r[i].to());
                e !== !1 && (o = o.join(e || t.lineSeparator())),
                n[i] = o
            }
            return n
        },
        replaceSelection: function(e, t, n) {
            for (var r = [], i = 0; i < this.sel.ranges.length; i++)
                r[i] = e;
            this.replaceSelections(r, t, n || "+input")
        },
        replaceSelections: mr(function(e, t, n) {
            for (var r = this, i = [], o = this.sel, s = 0; s < o.ranges.length; s++) {
                var a = o.ranges[s];
                i[s] = {
                    from: a.from(),
                    to: a.to(),
                    text: r.splitLines(e[s]),
                    origin: n
                }
            }
            for (var l = t && "end" != t && Ur(this, i, t), u = i.length - 1; u >= 0; u--)
                Ni(r, i[u]);
            l ? yi(this, l) : this.cm && Vn(this.cm)
        }),
        undo: mr(function() {
            Mi(this, "undo")
        }),
        redo: mr(function() {
            Mi(this, "redo")
        }),
        undoSelection: mr(function() {
            Mi(this, "undo", !0)
        }),
        redoSelection: mr(function() {
            Mi(this, "redo", !0)
        }),
        setExtending: function(e) {
            this.extend = e
        },
        getExtending: function() {
            return this.extend
        },
        historySize: function() {
            for (var e = this.history, t = 0, n = 0, r = 0; r < e.done.length; r++)
                e.done[r].ranges || ++t;
            for (var i = 0; i < e.undone.length; i++)
                e.undone[i].ranges || ++n;
            return {
                undo: t,
                redo: n
            }
        },
        clearHistory: function() {
            this.history = new Zr(this.history.maxGeneration)
        },
        markClean: function() {
            this.cleanGeneration = this.changeGeneration(!0)
        },
        changeGeneration: function(e) {
            return e && (this.history.lastOp = this.history.lastSelOp = this.history.lastOrigin = null),
            this.history.generation
        },
        isClean: function(e) {
            return this.history.generation == (e || this.cleanGeneration)
        },
        getHistory: function() {
            return {
                done: hi(this.history.done),
                undone: hi(this.history.undone)
            }
        },
        setHistory: function(e) {
            var t = this.history = new Zr(this.history.maxGeneration);
            t.done = hi(e.done.slice(0), null, !0),
            t.undone = hi(e.undone.slice(0), null, !0)
        },
        setGutterMarker: mr(function(e, t, n) {
            return Fi(this, e, "gutter", function(e) {
                var r = e.gutterMarkers || (e.gutterMarkers = {});
                return r[t] = n,
                !n && _(r) && (e.gutterMarkers = null),
                !0
            })
        }),
        clearGutter: mr(function(e) {
            var t = this;
            this.iter(function(n) {
                n.gutterMarkers && n.gutterMarkers[e] && Fi(t, n, "gutter", function() {
                    return n.gutterMarkers[e] = null,
                    _(n.gutterMarkers) && (n.gutterMarkers = null),
                    !0
                })
            })
        }),
        lineInfo: function(e) {
            var t;
            if ("number" == typeof e) {
                if (!O(this, e))
                    return null;
                if (t = e,
                e = L(this, e),
                !e)
                    return null
            } else if (t = M(e),
            null == t)
                return null;
            return {
                line: t,
                handle: e,
                text: e.text,
                gutterMarkers: e.gutterMarkers,
                textClass: e.textClass,
                bgClass: e.bgClass,
                wrapClass: e.wrapClass,
                widgets: e.widgets
            }
        },
        addLineClass: mr(function(t, n, r) {
            return Fi(this, t, "gutter" == n ? "gutter" : "class", function(t) {
                var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass";
                if (t[i]) {
                    if (e(r).test(t[i]))
                        return !1;
                    t[i] += " " + r
                } else
                    t[i] = r;
                return !0
            })
        }),
        removeLineClass: mr(function(t, n, r) {
            return Fi(this, t, "gutter" == n ? "gutter" : "class", function(t) {
                var i = "text" == n ? "textClass" : "background" == n ? "bgClass" : "gutter" == n ? "gutterClass" : "wrapClass"
                  , o = t[i];
                if (!o)
                    return !1;
                if (null == r)
                    t[i] = null;
                else {
                    var s = o.match(e(r));
                    if (!s)
                        return !1;
                    var a = s.index + s[0].length;
                    t[i] = o.slice(0, s.index) + (s.index && a != o.length ? " " : "") + o.slice(a) || null
                }
                return !0
            })
        }),
        addLineWidget: mr(function(e, t, n) {
            return Wi(this, e, t, n)
        }),
        removeLineWidget: function(e) {
            e.clear()
        },
        markText: function(e, t, n) {
            return Ui(this, B(this, e), B(this, t), n, n && n.type || "range")
        },
        setBookmark: function(e, t) {
            var n = {
                replacedWith: t && (null == t.nodeType ? t.widget : t),
                insertLeft: t && t.insertLeft,
                clearWhenEmpty: !1,
                shared: t && t.shared,
                handleMouseEvents: t && t.handleMouseEvents
            };
            return e = B(this, e),
            Ui(this, e, e, n, "bookmark")
        },
        findMarksAt: function(e) {
            e = B(this, e);
            var t = []
              , n = L(this, e.line).markedSpans;
            if (n)
                for (var r = 0; r < n.length; ++r) {
                    var i = n[r];
                    (null == i.from || i.from <= e.ch) && (null == i.to || i.to >= e.ch) && t.push(i.marker.parent || i.marker)
                }
            return t
        },
        findMarks: function(e, t, n) {
            e = B(this, e),
            t = B(this, t);
            var r = []
              , i = e.line;
            return this.iter(e.line, t.line + 1, function(o) {
                var s = o.markedSpans;
                if (s)
                    for (var a = 0; a < s.length; a++) {
                        var l = s[a];
                        null != l.to && i == e.line && e.ch >= l.to || null == l.from && i != e.line || null != l.from && i == t.line && l.from >= t.ch || n && !n(l.marker) || r.push(l.marker.parent || l.marker)
                    }
                ++i
            }),
            r
        },
        getAllMarks: function() {
            var e = [];
            return this.iter(function(t) {
                var n = t.markedSpans;
                if (n)
                    for (var r = 0; r < n.length; ++r)
                        null != n[r].from && e.push(n[r].marker)
            }),
            e
        },
        posFromIndex: function(e) {
            var t, n = this.first, r = this.lineSeparator().length;
            return this.iter(function(i) {
                var o = i.text.length + r;
                return o > e ? (t = e,
                !0) : (e -= o,
                void ++n)
            }),
            B(this, P(n, t))
        },
        indexFromPos: function(e) {
            e = B(this, e);
            var t = e.ch;
            if (e.line < this.first || e.ch < 0)
                return 0;
            var n = this.lineSeparator().length;
            return this.iter(this.first, e.line, function(e) {
                t += e.text.length + n
            }),
            t
        },
        copy: function(e) {
            var t = new Aa(N(this, this.first, this.first + this.size),this.modeOption,this.first,this.lineSep,this.direction);
            return t.scrollTop = this.scrollTop,
            t.scrollLeft = this.scrollLeft,
            t.sel = this.sel,
            t.extend = !1,
            e && (t.history.undoDepth = this.history.undoDepth,
            t.setHistory(this.getHistory())),
            t
        },
        linkedDoc: function(e) {
            e || (e = {});
            var t = this.first
              , n = this.first + this.size;
            null != e.from && e.from > t && (t = e.from),
            null != e.to && e.to < n && (n = e.to);
            var r = new Aa(N(this, t, n),e.mode || this.modeOption,t,this.lineSep,this.direction);
            return e.sharedHist && (r.history = this.history),
            (this.linked || (this.linked = [])).push({
                doc: r,
                sharedHist: e.sharedHist
            }),
            r.linked = [{
                doc: this,
                isParent: !0,
                sharedHist: e.sharedHist
            }],
            Xi(r, Vi(this)),
            r
        },
        unlinkDoc: function(e) {
            var t = this;
            if (e instanceof jo && (e = e.doc),
            this.linked)
                for (var n = 0; n < this.linked.length; ++n) {
                    var r = t.linked[n];
                    if (r.doc == e) {
                        t.linked.splice(n, 1),
                        e.unlinkDoc(t),
                        Qi(Vi(t));
                        break
                    }
                }
            if (e.history == this.history) {
                var i = [e.id];
                Gr(e, function(e) {
                    return i.push(e.id)
                }, !0),
                e.history = new Zr(null),
                e.history.done = hi(this.history.done, i),
                e.history.undone = hi(this.history.undone, i)
            }
        },
        iterLinkedDocs: function(e) {
            Gr(this, e)
        },
        getMode: function() {
            return this.mode
        },
        getEditor: function() {
            return this.cm
        },
        splitLines: function(e) {
            return this.lineSep ? e.split(this.lineSep) : Ys(e)
        },
        lineSeparator: function() {
            return this.lineSep || "\n"
        },
        setDirection: mr(function(e) {
            "rtl" != e && (e = "ltr"),
            e != this.direction && (this.direction = e,
            this.iter(function(e) {
                return e.order = null
            }),
            this.cm && Yr(this.cm))
        })
    }),
    Aa.prototype.eachLine = Aa.prototype.iter;
    for (var Ma = 0, Da = !1, Oa = {
        3: "Enter",
        8: "Backspace",
        9: "Tab",
        13: "Enter",
        16: "Shift",
        17: "Ctrl",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Esc",
        32: "Space",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "Left",
        38: "Up",
        39: "Right",
        40: "Down",
        44: "PrintScrn",
        45: "Insert",
        46: "Delete",
        59: ";",
        61: "=",
        91: "Mod",
        92: "Mod",
        93: "Mod",
        106: "*",
        107: "=",
        109: "-",
        110: ".",
        111: "/",
        127: "Delete",
        173: "-",
        186: ";",
        187: "=",
        188: ",",
        189: "-",
        190: ".",
        191: "/",
        192: "`",
        219: "[",
        220: "\\",
        221: "]",
        222: "'",
        63232: "Up",
        63233: "Down",
        63234: "Left",
        63235: "Right",
        63272: "Delete",
        63273: "Home",
        63275: "End",
        63276: "PageUp",
        63277: "PageDown",
        63302: "Insert"
    }, Ia = 0; 10 > Ia; Ia++)
        Oa[Ia + 48] = Oa[Ia + 96] = String(Ia);
    for (var Pa = 65; 90 >= Pa; Pa++)
        Oa[Pa] = String.fromCharCode(Pa);
    for (var Ha = 1; 12 >= Ha; Ha++)
        Oa[Ha + 111] = Oa[Ha + 63235] = "F" + Ha;
    var Ra = {};
    Ra.basic = {
        Left: "goCharLeft",
        Right: "goCharRight",
        Up: "goLineUp",
        Down: "goLineDown",
        End: "goLineEnd",
        Home: "goLineStartSmart",
        PageUp: "goPageUp",
        PageDown: "goPageDown",
        Delete: "delCharAfter",
        Backspace: "delCharBefore",
        "Shift-Backspace": "delCharBefore",
        Tab: "defaultTab",
        "Shift-Tab": "indentAuto",
        Enter: "newlineAndIndent",
        Insert: "toggleOverwrite",
        Esc: "singleSelection"
    },
    Ra.pcDefault = {
        "Ctrl-A": "selectAll",
        "Ctrl-D": "deleteLine",
        "Ctrl-Z": "undo",
        "Shift-Ctrl-Z": "redo",
        "Ctrl-Y": "redo",
        "Ctrl-Home": "goDocStart",
        "Ctrl-End": "goDocEnd",
        "Ctrl-Up": "goLineUp",
        "Ctrl-Down": "goLineDown",
        "Ctrl-Left": "goGroupLeft",
        "Ctrl-Right": "goGroupRight",
        "Alt-Left": "goLineStart",
        "Alt-Right": "goLineEnd",
        "Ctrl-Backspace": "delGroupBefore",
        "Ctrl-Delete": "delGroupAfter",
        "Ctrl-S": "save",
        "Ctrl-F": "find",
        "Ctrl-G": "findNext",
        "Shift-Ctrl-G": "findPrev",
        "Shift-Ctrl-F": "replace",
        "Shift-Ctrl-R": "replaceAll",
        "Ctrl-[": "indentLess",
        "Ctrl-]": "indentMore",
        "Ctrl-U": "undoSelection",
        "Shift-Ctrl-U": "redoSelection",
        "Alt-U": "redoSelection",
        fallthrough: "basic"
    },
    Ra.emacsy = {
        "Ctrl-F": "goCharRight",
        "Ctrl-B": "goCharLeft",
        "Ctrl-P": "goLineUp",
        "Ctrl-N": "goLineDown",
        "Alt-F": "goWordRight",
        "Alt-B": "goWordLeft",
        "Ctrl-A": "goLineStart",
        "Ctrl-E": "goLineEnd",
        "Ctrl-V": "goPageDown",
        "Shift-Ctrl-V": "goPageUp",
        "Ctrl-D": "delCharAfter",
        "Ctrl-H": "delCharBefore",
        "Alt-D": "delWordAfter",
        "Alt-Backspace": "delWordBefore",
        "Ctrl-K": "killLine",
        "Ctrl-T": "transposeChars",
        "Ctrl-O": "openLine"
    },
    Ra.macDefault = {
        "Cmd-A": "selectAll",
        "Cmd-D": "deleteLine",
        "Cmd-Z": "undo",
        "Shift-Cmd-Z": "redo",
        "Cmd-Y": "redo",
        "Cmd-Home": "goDocStart",
        "Cmd-Up": "goDocStart",
        "Cmd-End": "goDocEnd",
        "Cmd-Down": "goDocEnd",
        "Alt-Left": "goGroupLeft",
        "Alt-Right": "goGroupRight",
        "Cmd-Left": "goLineLeft",
        "Cmd-Right": "goLineRight",
        "Alt-Backspace": "delGroupBefore",
        "Ctrl-Alt-Backspace": "delGroupAfter",
        "Alt-Delete": "delGroupAfter",
        "Cmd-S": "save",
        "Cmd-F": "find",
        "Cmd-G": "findNext",
        "Shift-Cmd-G": "findPrev",
        "Cmd-Alt-F": "replace",
        "Shift-Cmd-Alt-F": "replaceAll",
        "Cmd-[": "indentLess",
        "Cmd-]": "indentMore",
        "Cmd-Backspace": "delWrappedLineLeft",
        "Cmd-Delete": "delWrappedLineRight",
        "Cmd-U": "undoSelection",
        "Shift-Cmd-U": "redoSelection",
        "Ctrl-Up": "goDocStart",
        "Ctrl-Down": "goDocEnd",
        fallthrough: ["basic", "emacsy"]
    },
    Ra["default"] = Cs ? Ra.macDefault : Ra.pcDefault;
    var qa = {
        selectAll: Li,
        singleSelection: function(e) {
            return e.setSelection(e.getCursor("anchor"), e.getCursor("head"), Fs)
        },
        killLine: function(e) {
            return co(e, function(t) {
                if (t.empty()) {
                    var n = L(e.doc, t.head.line).text.length;
                    return t.head.ch == n && t.head.line < e.lastLine() ? {
                        from: t.head,
                        to: P(t.head.line + 1, 0)
                    } : {
                        from: t.head,
                        to: P(t.head.line, n)
                    }
                }
                return {
                    from: t.from(),
                    to: t.to()
                }
            })
        },
        deleteLine: function(e) {
            return co(e, function(t) {
                return {
                    from: P(t.from().line, 0),
                    to: B(e.doc, P(t.to().line + 1, 0))
                }
            })
        },
        delLineLeft: function(e) {
            return co(e, function(e) {
                return {
                    from: P(e.from().line, 0),
                    to: e.from()
                }
            })
        },
        delWrappedLineLeft: function(e) {
            return co(e, function(t) {
                var n = e.charCoords(t.head, "div").top + 5
                  , r = e.coordsChar({
                    left: 0,
                    top: n
                }, "div");
                return {
                    from: r,
                    to: t.from()
                }
            })
        },
        delWrappedLineRight: function(e) {
            return co(e, function(t) {
                var n = e.charCoords(t.head, "div").top + 5
                  , r = e.coordsChar({
                    left: e.display.lineDiv.offsetWidth + 100,
                    top: n
                }, "div");
                return {
                    from: t.from(),
                    to: r
                }
            })
        },
        undo: function(e) {
            return e.undo()
        },
        redo: function(e) {
            return e.redo()
        },
        undoSelection: function(e) {
            return e.undoSelection()
        },
        redoSelection: function(e) {
            return e.redoSelection()
        },
        goDocStart: function(e) {
            return e.extendSelection(P(e.firstLine(), 0))
        },
        goDocEnd: function(e) {
            return e.extendSelection(P(e.lastLine()))
        },
        goLineStart: function(e) {
            return e.extendSelectionsBy(function(t) {
                return ho(e, t.head.line)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineStartSmart: function(e) {
            return e.extendSelectionsBy(function(t) {
                return po(e, t.head)
            }, {
                origin: "+move",
                bias: 1
            })
        },
        goLineEnd: function(e) {
            return e.extendSelectionsBy(function(t) {
                return fo(e, t.head.line)
            }, {
                origin: "+move",
                bias: -1
            })
        },
        goLineRight: function(e) {
            return e.extendSelectionsBy(function(t) {
                var n = e.charCoords(t.head, "div").top + 5;
                return e.coordsChar({
                    left: e.display.lineDiv.offsetWidth + 100,
                    top: n
                }, "div")
            }, js)
        },
        goLineLeft: function(e) {
            return e.extendSelectionsBy(function(t) {
                var n = e.charCoords(t.head, "div").top + 5;
                return e.coordsChar({
                    left: 0,
                    top: n
                }, "div")
            }, js)
        },
        goLineLeftSmart: function(e) {
            return e.extendSelectionsBy(function(t) {
                var n = e.charCoords(t.head, "div").top + 5
                  , r = e.coordsChar({
                    left: 0,
                    top: n
                }, "div");
                return r.ch < e.getLine(r.line).search(/\S/) ? po(e, t.head) : r
            }, js)
        },
        goLineUp: function(e) {
            return e.moveV(-1, "line")
        },
        goLineDown: function(e) {
            return e.moveV(1, "line")
        },
        goPageUp: function(e) {
            return e.moveV(-1, "page")
        },
        goPageDown: function(e) {
            return e.moveV(1, "page")
        },
        goCharLeft: function(e) {
            return e.moveH(-1, "char")
        },
        goCharRight: function(e) {
            return e.moveH(1, "char")
        },
        goColumnLeft: function(e) {
            return e.moveH(-1, "column")
        },
        goColumnRight: function(e) {
            return e.moveH(1, "column")
        },
        goWordLeft: function(e) {
            return e.moveH(-1, "word")
        },
        goGroupRight: function(e) {
            return e.moveH(1, "group")
        },
        goGroupLeft: function(e) {
            return e.moveH(-1, "group")
        },
        goWordRight: function(e) {
            return e.moveH(1, "word")
        },
        delCharBefore: function(e) {
            return e.deleteH(-1, "char")
        },
        delCharAfter: function(e) {
            return e.deleteH(1, "char")
        },
        delWordBefore: function(e) {
            return e.deleteH(-1, "word")
        },
        delWordAfter: function(e) {
            return e.deleteH(1, "word")
        },
        delGroupBefore: function(e) {
            return e.deleteH(-1, "group")
        },
        delGroupAfter: function(e) {
            return e.deleteH(1, "group")
        },
        indentAuto: function(e) {
            return e.indentSelection("smart")
        },
        indentMore: function(e) {
            return e.indentSelection("add")
        },
        indentLess: function(e) {
            return e.indentSelection("subtract")
        },
        insertTab: function(e) {
            return e.replaceSelection("	")
        },
        insertSoftTab: function(e) {
            for (var t = [], n = e.listSelections(), r = e.options.tabSize, i = 0; i < n.length; i++) {
                var o = n[i].from()
                  , s = h(e.getLine(o.line), o.ch, r);
                t.push(p(r - s % r))
            }
            e.replaceSelections(t)
        },
        defaultTab: function(e) {
            e.somethingSelected() ? e.indentSelection("add") : e.execCommand("insertTab")
        },
        transposeChars: function(e) {
            return dr(e, function() {
                for (var t = e.listSelections(), n = [], r = 0; r < t.length; r++)
                    if (t[r].empty()) {
                        var i = t[r].head
                          , o = L(e.doc, i.line).text;
                        if (o)
                            if (i.ch == o.length && (i = new P(i.line,i.ch - 1)),
                            i.ch > 0)
                                i = new P(i.line,i.ch + 1),
                                e.replaceRange(o.charAt(i.ch - 1) + o.charAt(i.ch - 2), P(i.line, i.ch - 2), i, "+transpose");
                            else if (i.line > e.doc.first) {
                                var s = L(e.doc, i.line - 1).text;
                                s && (i = new P(i.line,1),
                                e.replaceRange(o.charAt(0) + e.doc.lineSeparator() + s.charAt(s.length - 1), P(i.line - 1, s.length - 1), i, "+transpose"))
                            }
                        n.push(new Sa(i,i))
                    }
                e.setSelections(n)
            })
        },
        newlineAndIndent: function(e) {
            return dr(e, function() {
                for (var t = e.listSelections(), n = t.length - 1; n >= 0; n--)
                    e.replaceRange(e.doc.lineSeparator(), t[n].anchor, t[n].head, "+input");
                t = e.listSelections();
                for (var r = 0; r < t.length; r++)
                    e.indentLine(t[r].from().line, null, !0);
                Vn(e)
            })
        },
        openLine: function(e) {
            return e.replaceSelection("\n", "start")
        },
        toggleOverwrite: function(e) {
            return e.toggleOverwrite()
        }
    }
      , Fa = new Is
      , $a = null
      , ja = 400
      , Ba = function(e, t, n) {
        this.time = e,
        this.pos = t,
        this.button = n
    };
    Ba.prototype.compare = function(e, t, n) {
        return this.time + ja > e && 0 == H(t, this.pos) && n == this.button
    }
    ;
    var Wa, Ua, za = {
        toString: function() {
            return "CodeMirror.Init"
        }
    }, Va = {}, Xa = {};
    jo.defaults = Va,
    jo.optionHandlers = Xa;
    var Qa = [];
    jo.defineInitHook = function(e) {
        return Qa.push(e)
    }
    ;
    var Ga = null
      , Ka = function(e) {
        var t = e.optionHandlers
          , n = e.helpers = {};
        e.prototype = {
            constructor: e,
            focus: function() {
                window.focus(),
                this.display.input.focus()
            },
            setOption: function(e, n) {
                var r = this.options
                  , i = r[e];
                (r[e] != n || "mode" == e) && (r[e] = n,
                t.hasOwnProperty(e) && fr(this, t[e])(this, n, i),
                Ae(this, "optionChange", this, e))
            },
            getOption: function(e) {
                return this.options[e]
            },
            getDoc: function() {
                return this.doc
            },
            addKeyMap: function(e, t) {
                this.state.keyMaps[t ? "push" : "unshift"](uo(e))
            },
            removeKeyMap: function(e) {
                for (var t = this.state.keyMaps, n = 0; n < t.length; ++n)
                    if (t[n] == e || t[n].name == e)
                        return t.splice(n, 1),
                        !0
            },
            addOverlay: pr(function(t, n) {
                var r = t.token ? t : e.getMode(this.options, t);
                if (r.startState)
                    throw new Error("Overlays may not be stateful.");
                v(this.state.overlays, {
                    mode: r,
                    modeSpec: t,
                    opaque: n && n.opaque,
                    priority: n && n.priority || 0
                }, function(e) {
                    return e.priority
                }),
                this.state.modeGen++,
                gr(this)
            }),
            removeOverlay: pr(function(e) {
                for (var t = this, n = this.state.overlays, r = 0; r < n.length; ++r) {
                    var i = n[r].modeSpec;
                    if (i == e || "string" == typeof e && i.name == e)
                        return n.splice(r, 1),
                        t.state.modeGen++,
                        void gr(t)
                }
            }),
            indentLine: pr(function(e, t, n) {
                "string" != typeof t && "number" != typeof t && (t = null == t ? this.options.smartIndent ? "smart" : "prev" : t ? "add" : "subtract"),
                O(this.doc, e) && Wo(this, e, t, n)
            }),
            indentSelection: pr(function(e) {
                for (var t = this, n = this.doc.sel.ranges, r = -1, i = 0; i < n.length; i++) {
                    var o = n[i];
                    if (o.empty())
                        o.head.line > r && (Wo(t, o.head.line, e, !0),
                        r = o.head.line,
                        i == t.doc.sel.primIndex && Vn(t));
                    else {
                        var s = o.from()
                          , a = o.to()
                          , l = Math.max(r, s.line);
                        r = Math.min(t.lastLine(), a.line - (a.ch ? 0 : 1)) + 1;
                        for (var u = l; r > u; ++u)
                            Wo(t, u, e);
                        var c = t.doc.sel.ranges;
                        0 == s.ch && n.length == c.length && c[i].from().ch > 0 && mi(t.doc, i, new Sa(s,c[i].to()), Fs)
                    }
                }
            }),
            getTokenAt: function(e, t) {
                return it(this, e, t)
            },
            getLineTokens: function(e, t) {
                return it(this, P(e), t, !0)
            },
            getTokenTypeAt: function(e) {
                e = B(this.doc, e);
                var t, n = Ze(this, L(this.doc, e.line)), r = 0, i = (n.length - 1) / 2, o = e.ch;
                if (0 == o)
                    t = n[2];
                else
                    for (; ; ) {
                        var s = r + i >> 1;
                        if ((s ? n[2 * s - 1] : 0) >= o)
                            i = s;
                        else {
                            if (!(n[2 * s + 1] < o)) {
                                t = n[2 * s + 2];
                                break
                            }
                            r = s + 1
                        }
                    }
                var a = t ? t.indexOf("overlay ") : -1;
                return 0 > a ? t : 0 == a ? null : t.slice(0, a - 1)
            },
            getModeAt: function(t) {
                var n = this.doc.mode;
                return n.innerMode ? e.innerMode(n, this.getTokenAt(t).state).mode : n
            },
            getHelper: function(e, t) {
                return this.getHelpers(e, t)[0]
            },
            getHelpers: function(e, t) {
                var r = this
                  , i = [];
                if (!n.hasOwnProperty(t))
                    return i;
                var o = n[t]
                  , s = this.getModeAt(e);
                if ("string" == typeof s[t])
                    o[s[t]] && i.push(o[s[t]]);
                else if (s[t])
                    for (var a = 0; a < s[t].length; a++) {
                        var l = o[s[t][a]];
                        l && i.push(l)
                    }
                else
                    s.helperType && o[s.helperType] ? i.push(o[s.helperType]) : o[s.name] && i.push(o[s.name]);
                for (var u = 0; u < o._global.length; u++) {
                    var c = o._global[u];
                    c.pred(s, r) && -1 == d(i, c.val) && i.push(c.val)
                }
                return i
            },
            getStateAfter: function(e, t) {
                var n = this.doc;
                return e = j(n, null == e ? n.first + n.size - 1 : e),
                et(this, e + 1, t).state
            },
            cursorCoords: function(e, t) {
                var n, r = this.doc.sel.primary();
                return n = null == e ? r.head : "object" == typeof e ? B(this.doc, e) : e ? r.from() : r.to(),
                dn(this, n, t || "page")
            },
            charCoords: function(e, t) {
                return hn(this, B(this.doc, e), t || "page")
            },
            coordsChar: function(e, t) {
                return e = cn(this, e, t || "page"),
                mn(this, e.left, e.top)
            },
            lineAtHeight: function(e, t) {
                return e = cn(this, {
                    top: e,
                    left: 0
                }, t || "page").top,
                D(this.doc, e + this.display.viewOffset)
            },
            heightAtLine: function(e, t, n) {
                var r, i = !1;
                if ("number" == typeof e) {
                    var o = this.doc.first + this.doc.size - 1;
                    e < this.doc.first ? e = this.doc.first : e > o && (e = o,
                    i = !0),
                    r = L(this.doc, e)
                } else
                    r = e;
                return un(this, r, {
                    top: 0,
                    left: 0
                }, t || "page", n || i).top + (i ? this.doc.height - ye(r) : 0)
            },
            defaultTextHeight: function() {
                return bn(this.display)
            },
            defaultCharWidth: function() {
                return xn(this.display)
            },
            getViewport: function() {
                return {
                    from: this.display.viewFrom,
                    to: this.display.viewTo
                }
            },
            addWidget: function(e, t, n, r, i) {
                var o = this.display;
                e = dn(this, B(this.doc, e));
                var s = e.bottom
                  , a = e.left;
                if (t.style.position = "absolute",
                t.setAttribute("cm-ignore-events", "true"),
                this.display.input.setUneditable(t),
                o.sizer.appendChild(t),
                "over" == r)
                    s = e.top;
                else if ("above" == r || "near" == r) {
                    var l = Math.max(o.wrapper.clientHeight, this.doc.height)
                      , u = Math.max(o.sizer.clientWidth, o.lineSpace.clientWidth);
                    ("above" == r || e.bottom + t.offsetHeight > l) && e.top > t.offsetHeight ? s = e.top - t.offsetHeight : e.bottom + t.offsetHeight <= l && (s = e.bottom),
                    a + t.offsetWidth > u && (a = u - t.offsetWidth)
                }
                t.style.top = s + "px",
                t.style.left = t.style.right = "",
                "right" == i ? (a = o.sizer.clientWidth - t.offsetWidth,
                t.style.right = "0px") : ("left" == i ? a = 0 : "middle" == i && (a = (o.sizer.clientWidth - t.offsetWidth) / 2),
                t.style.left = a + "px"),
                n && Wn(this, {
                    left: a,
                    top: s,
                    right: a + t.offsetWidth,
                    bottom: s + t.offsetHeight
                })
            },
            triggerOnKeyDown: pr(xo),
            triggerOnKeyPress: pr(ko),
            triggerOnKeyUp: _o,
            triggerOnMouseDown: pr(Co),
            execCommand: function(e) {
                return qa.hasOwnProperty(e) ? qa[e].call(null, this) : void 0
            },
            triggerElectric: pr(function(e) {
                Xo(this, e)
            }),
            findPosH: function(e, t, n, r) {
                var i = this
                  , o = 1;
                0 > t && (o = -1,
                t = -t);
                for (var s = B(this.doc, e), a = 0; t > a && (s = Jo(i.doc, s, o, n, r),
                !s.hitSide); ++a)
                    ;
                return s
            },
            moveH: pr(function(e, t) {
                var n = this;
                this.extendSelectionsBy(function(r) {
                    return n.display.shift || n.doc.extend || r.empty() ? Jo(n.doc, r.head, e, t, n.options.rtlMoveVisually) : 0 > e ? r.from() : r.to()
                }, js)
            }),
            deleteH: pr(function(e, t) {
                var n = this.doc.sel
                  , r = this.doc;
                n.somethingSelected() ? r.replaceSelection("", null, "+delete") : co(this, function(n) {
                    var i = Jo(r, n.head, e, t, !1);
                    return 0 > e ? {
                        from: i,
                        to: n.head
                    } : {
                        from: n.head,
                        to: i
                    }
                })
            }),
            findPosV: function(e, t, n, r) {
                var i = this
                  , o = 1
                  , s = r;
                0 > t && (o = -1,
                t = -t);
                for (var a = B(this.doc, e), l = 0; t > l; ++l) {
                    var u = dn(i, a, "div");
                    if (null == s ? s = u.left : u.left = s,
                    a = Yo(i, u, o, n),
                    a.hitSide)
                        break
                }
                return a
            },
            moveV: pr(function(e, t) {
                var n = this
                  , r = this.doc
                  , i = []
                  , o = !this.display.shift && !r.extend && r.sel.somethingSelected();
                if (r.extendSelectionsBy(function(s) {
                    if (o)
                        return 0 > e ? s.from() : s.to();
                    var a = dn(n, s.head, "div");
                    null != s.goalColumn && (a.left = s.goalColumn),
                    i.push(a.left);
                    var l = Yo(n, a, e, t);
                    return "page" == t && s == r.sel.primary() && zn(n, hn(n, l, "div").top - a.top),
                    l
                }, js),
                i.length)
                    for (var s = 0; s < r.sel.ranges.length; s++)
                        r.sel.ranges[s].goalColumn = i[s]
            }),
            findWordAt: function(e) {
                var t = this.doc
                  , n = L(t, e.line).text
                  , r = e.ch
                  , i = e.ch;
                if (n) {
                    var o = this.getHelper(e, "wordChars");
                    "before" != e.sticky && i != n.length || !r ? ++i : --r;
                    for (var s = n.charAt(r), a = w(s, o) ? function(e) {
                        return w(e, o)
                    }
                    : /\s/.test(s) ? function(e) {
                        return /\s/.test(e)
                    }
                    : function(e) {
                        return !/\s/.test(e) && !w(e)
                    }
                    ; r > 0 && a(n.charAt(r - 1)); )
                        --r;
                    for (; i < n.length && a(n.charAt(i)); )
                        ++i
                }
                return new Sa(P(e.line, r),P(e.line, i))
            },
            toggleOverwrite: function(e) {
                (null == e || e != this.state.overwrite) && ((this.state.overwrite = !this.state.overwrite) ? a(this.display.cursorDiv, "CodeMirror-overwrite") : Ds(this.display.cursorDiv, "CodeMirror-overwrite"),
                Ae(this, "overwriteToggle", this, this.state.overwrite))
            },
            hasFocus: function() {
                return this.display.input.getField() == s()
            },
            isReadOnly: function() {
                return !(!this.options.readOnly && !this.doc.cantEdit)
            },
            scrollTo: pr(function(e, t) {
                Xn(this, e, t)
            }),
            getScrollInfo: function() {
                var e = this.display.scroller;
                return {
                    left: e.scrollLeft,
                    top: e.scrollTop,
                    height: e.scrollHeight - Wt(this) - this.display.barHeight,
                    width: e.scrollWidth - Wt(this) - this.display.barWidth,
                    clientHeight: zt(this),
                    clientWidth: Ut(this)
                }
            },
            scrollIntoView: pr(function(e, t) {
                null == e ? (e = {
                    from: this.doc.sel.primary().head,
                    to: null
                },
                null == t && (t = this.options.cursorScrollMargin)) : "number" == typeof e ? e = {
                    from: P(e, 0),
                    to: null
                } : null == e.from && (e = {
                    from: e,
                    to: null
                }),
                e.to || (e.to = e.from),
                e.margin = t || 0,
                null != e.from.line ? Qn(this, e) : Kn(this, e.from, e.to, e.margin)
            }),
            setSize: pr(function(e, t) {
                var n = this
                  , r = function(e) {
                    return "number" == typeof e || /^\d+$/.test(String(e)) ? e + "px" : e
                };
                null != e && (this.display.wrapper.style.width = r(e)),
                null != t && (this.display.wrapper.style.height = r(t)),
                this.options.lineWrapping && on(this);
                var i = this.display.viewFrom;
                this.doc.iter(i, this.display.viewTo, function(e) {
                    if (e.widgets)
                        for (var t = 0; t < e.widgets.length; t++)
                            if (e.widgets[t].noHScroll) {
                                vr(n, i, "widget");
                                break
                            }
                    ++i
                }),
                this.curOp.forceUpdate = !0,
                Ae(this, "refresh", this)
            }),
            operation: function(e) {
                return dr(this, e)
            },
            refresh: pr(function() {
                var e = this.display.cachedTextHeight;
                gr(this),
                this.curOp.forceUpdate = !0,
                sn(this),
                Xn(this, this.doc.scrollLeft, this.doc.scrollTop),
                Mr(this),
                (null == e || Math.abs(e - bn(this.display)) > .5) && Sn(this),
                Ae(this, "refresh", this)
            }),
            swapDoc: pr(function(e) {
                var t = this.doc;
                return t.cm = null,
                Kr(this, e),
                sn(this),
                this.display.input.reset(),
                Xn(this, e.scrollLeft, e.scrollTop),
                this.curOp.forceScroll = !0,
                St(this, "swapDoc", this, t),
                t
            }),
            getInputField: function() {
                return this.display.input.getField()
            },
            getWrapperElement: function() {
                return this.display.wrapper
            },
            getScrollerElement: function() {
                return this.display.scroller
            },
            getGutterElement: function() {
                return this.display.gutters
            }
        },
        Ie(e),
        e.registerHelper = function(t, r, i) {
            n.hasOwnProperty(t) || (n[t] = e[t] = {
                _global: []
            }),
            n[t][r] = i
        }
        ,
        e.registerGlobalHelper = function(t, r, i, o) {
            e.registerHelper(t, r, o),
            n[t]._global.push({
                pred: i,
                val: o
            })
        }
    }
      , Ja = function(e) {
        this.cm = e,
        this.lastAnchorNode = this.lastAnchorOffset = this.lastFocusNode = this.lastFocusOffset = null,
        this.polling = new Is,
        this.composing = null,
        this.gracePeriod = !1,
        this.readDOMTimeout = null
    };
    Ja.prototype.init = function(e) {
        function t(e) {
            if (!Me(i, e)) {
                if (i.somethingSelected())
                    Uo({
                        lineWise: !1,
                        text: i.getSelections()
                    }),
                    "cut" == e.type && i.replaceSelection("", null, "cut");
                else {
                    if (!i.options.lineWiseCopyCut)
                        return;
                    var t = Qo(i);
                    Uo({
                        lineWise: !0,
                        text: t.text
                    }),
                    "cut" == e.type && i.operation(function() {
                        i.setSelections(t.ranges, 0, Fs),
                        i.replaceSelection("", null, "cut")
                    })
                }
                if (e.clipboardData) {
                    e.clipboardData.clearData();
                    var n = Ga.text.join("\n");
                    if (e.clipboardData.setData("Text", n),
                    e.clipboardData.getData("Text") == n)
                        return void e.preventDefault()
                }
                var s = Ko()
                  , a = s.firstChild;
                i.display.lineSpace.insertBefore(s, i.display.lineSpace.firstChild),
                a.value = Ga.text.join("\n");
                var l = document.activeElement;
                Os(a),
                setTimeout(function() {
                    i.display.lineSpace.removeChild(s),
                    l.focus(),
                    l == o && r.showPrimarySelection()
                }, 50)
            }
        }
        var n = this
          , r = this
          , i = r.cm
          , o = r.div = e.lineDiv;
        Go(o, i.options.spellcheck),
        Ks(o, "paste", function(e) {
            Me(i, e) || Vo(e, i) || 11 >= ps && setTimeout(fr(i, function() {
                return n.updateFromDOM()
            }), 20)
        }),
        Ks(o, "compositionstart", function(e) {
            n.composing = {
                data: e.data,
                done: !1
            }
        }),
        Ks(o, "compositionupdate", function(e) {
            n.composing || (n.composing = {
                data: e.data,
                done: !1
            })
        }),
        Ks(o, "compositionend", function(e) {
            n.composing && (e.data != n.composing.data && n.readFromDOMSoon(),
            n.composing.done = !0)
        }),
        Ks(o, "touchstart", function() {
            return r.forceCompositionEnd()
        }),
        Ks(o, "input", function() {
            n.composing || n.readFromDOMSoon()
        }),
        Ks(o, "copy", t),
        Ks(o, "cut", t)
    }
    ,
    Ja.prototype.prepareSelection = function() {
        var e = En(this.cm, !1);
        return e.focus = this.cm.state.focused,
        e
    }
    ,
    Ja.prototype.showSelection = function(e, t) {
        e && this.cm.display.view.length && ((e.focus || t) && this.showPrimarySelection(),
        this.showMultipleSelections(e))
    }
    ,
    Ja.prototype.showPrimarySelection = function() {
        var e = window.getSelection()
          , t = this.cm
          , n = t.doc.sel.primary()
          , r = n.from()
          , i = n.to();
        if (t.display.viewTo == t.display.viewFrom || r.line >= t.display.viewTo || i.line < t.display.viewFrom)
            return void e.removeAllRanges();
        var o = rs(t, e.anchorNode, e.anchorOffset)
          , s = rs(t, e.focusNode, e.focusOffset);
        if (!o || o.bad || !s || s.bad || 0 != H($(o, s), r) || 0 != H(F(o, s), i)) {
            var a = t.display.view
              , l = r.line >= t.display.viewFrom && Zo(t, r) || {
                node: a[0].measure.map[2],
                offset: 0
            }
              , u = i.line < t.display.viewTo && Zo(t, i);
            if (!u) {
                var c = a[a.length - 1].measure
                  , h = c.maps ? c.maps[c.maps.length - 1] : c.map;
                u = {
                    node: h[h.length - 1],
                    offset: h[h.length - 2] - h[h.length - 3]
                }
            }
            if (!l || !u)
                return void e.removeAllRanges();
            var d, f = e.rangeCount && e.getRangeAt(0);
            try {
                d = Ns(l.node, l.offset, u.offset, u.node)
            } catch (p) {}
            d && (!us && t.state.focused ? (e.collapse(l.node, l.offset),
            d.collapsed || (e.removeAllRanges(),
            e.addRange(d))) : (e.removeAllRanges(),
            e.addRange(d)),
            f && null == e.anchorNode ? e.addRange(f) : us && this.startGracePeriod()),
            this.rememberSelection()
        }
    }
    ,
    Ja.prototype.startGracePeriod = function() {
        var e = this;
        clearTimeout(this.gracePeriod),
        this.gracePeriod = setTimeout(function() {
            e.gracePeriod = !1,
            e.selectionChanged() && e.cm.operation(function() {
                return e.cm.curOp.selectionChanged = !0
            })
        }, 20)
    }
    ,
    Ja.prototype.showMultipleSelections = function(e) {
        n(this.cm.display.cursorDiv, e.cursors),
        n(this.cm.display.selectionDiv, e.selection)
    }
    ,
    Ja.prototype.rememberSelection = function() {
        var e = window.getSelection();
        this.lastAnchorNode = e.anchorNode,
        this.lastAnchorOffset = e.anchorOffset,
        this.lastFocusNode = e.focusNode,
        this.lastFocusOffset = e.focusOffset
    }
    ,
    Ja.prototype.selectionInEditor = function() {
        var e = window.getSelection();
        if (!e.rangeCount)
            return !1;
        var t = e.getRangeAt(0).commonAncestorContainer;
        return o(this.div, t)
    }
    ,
    Ja.prototype.focus = function() {
        "nocursor" != this.cm.options.readOnly && (this.selectionInEditor() || this.showSelection(this.prepareSelection(), !0),
        this.div.focus())
    }
    ,
    Ja.prototype.blur = function() {
        this.div.blur()
    }
    ,
    Ja.prototype.getField = function() {
        return this.div
    }
    ,
    Ja.prototype.supportsTouch = function() {
        return !0
    }
    ,
    Ja.prototype.receivedFocus = function() {
        function e() {
            t.cm.state.focused && (t.pollSelection(),
            t.polling.set(t.cm.options.pollInterval, e))
        }
        var t = this;
        this.selectionInEditor() ? this.pollSelection() : dr(this.cm, function() {
            return t.cm.curOp.selectionChanged = !0
        }),
        this.polling.set(this.cm.options.pollInterval, e)
    }
    ,
    Ja.prototype.selectionChanged = function() {
        var e = window.getSelection();
        return e.anchorNode != this.lastAnchorNode || e.anchorOffset != this.lastAnchorOffset || e.focusNode != this.lastFocusNode || e.focusOffset != this.lastFocusOffset
    }
    ,
    Ja.prototype.pollSelection = function() {
        if (null == this.readDOMTimeout && !this.gracePeriod && this.selectionChanged()) {
            var e = window.getSelection()
              , t = this.cm;
            if (ks && vs && this.cm.options.gutters.length && es(e.anchorNode))
                return this.cm.triggerOnKeyDown({
                    type: "keydown",
                    keyCode: 8,
                    preventDefault: Math.abs
                }),
                this.blur(),
                void this.focus();
            if (!this.composing) {
                this.rememberSelection();
                var n = rs(t, e.anchorNode, e.anchorOffset)
                  , r = rs(t, e.focusNode, e.focusOffset);
                n && r && dr(t, function() {
                    bi(t.doc, Fr(n, r), Fs),
                    (n.bad || r.bad) && (t.curOp.selectionChanged = !0)
                })
            }
        }
    }
    ,
    Ja.prototype.pollContent = function() {
        null != this.readDOMTimeout && (clearTimeout(this.readDOMTimeout),
        this.readDOMTimeout = null);
        var e = this.cm
          , t = e.display
          , n = e.doc.sel.primary()
          , r = n.from()
          , i = n.to();
        if (0 == r.ch && r.line > e.firstLine() && (r = P(r.line - 1, L(e.doc, r.line - 1).length)),
        i.ch == L(e.doc, i.line).text.length && i.line < e.lastLine() && (i = P(i.line + 1, 0)),
        r.line < t.viewFrom || i.line > t.viewTo - 1)
            return !1;
        var o, s, a;
        r.line == t.viewFrom || 0 == (o = Tn(e, r.line)) ? (s = M(t.view[0].line),
        a = t.view[0].node) : (s = M(t.view[o].line),
        a = t.view[o - 1].node.nextSibling);
        var l, u, c = Tn(e, i.line);
        if (c == t.view.length - 1 ? (l = t.viewTo - 1,
        u = t.lineDiv.lastChild) : (l = M(t.view[c + 1].line) - 1,
        u = t.view[c + 1].node.previousSibling),
        !a)
            return !1;
        for (var h = e.doc.splitLines(ns(e, a, u, s, l)), d = E(e.doc, P(s, 0), P(l, L(e.doc, l).text.length)); h.length > 1 && d.length > 1; )
            if (m(h) == m(d))
                h.pop(),
                d.pop(),
                l--;
            else {
                if (h[0] != d[0])
                    break;
                h.shift(),
                d.shift(),
                s++
            }
        for (var f = 0, p = 0, g = h[0], v = d[0], y = Math.min(g.length, v.length); y > f && g.charCodeAt(f) == v.charCodeAt(f); )
            ++f;
        for (var b = m(h), x = m(d), w = Math.min(b.length - (1 == h.length ? f : 0), x.length - (1 == d.length ? f : 0)); w > p && b.charCodeAt(b.length - p - 1) == x.charCodeAt(x.length - p - 1); )
            ++p;
        if (1 == h.length && 1 == d.length && s == r.line)
            for (; f && f > r.ch && b.charCodeAt(b.length - p - 1) == x.charCodeAt(x.length - p - 1); )
                f--,
                p++;
        h[h.length - 1] = b.slice(0, b.length - p).replace(/^\u200b+/, ""),
        h[0] = h[0].slice(f).replace(/\u200b+$/, "");
        var _ = P(s, f)
          , k = P(l, d.length ? m(d).length - p : 0);
        return h.length > 1 || h[0] || H(_, k) ? (Pi(e.doc, h, _, k, "+input"),
        !0) : void 0
    }
    ,
    Ja.prototype.ensurePolled = function() {
        this.forceCompositionEnd()
    }
    ,
    Ja.prototype.reset = function() {
        this.forceCompositionEnd()
    }
    ,
    Ja.prototype.forceCompositionEnd = function() {
        this.composing && (clearTimeout(this.readDOMTimeout),
        this.composing = null,
        this.updateFromDOM(),
        this.div.blur(),
        this.div.focus())
    }
    ,
    Ja.prototype.readFromDOMSoon = function() {
        var e = this;
        null == this.readDOMTimeout && (this.readDOMTimeout = setTimeout(function() {
            if (e.readDOMTimeout = null,
            e.composing) {
                if (!e.composing.done)
                    return;
                e.composing = null
            }
            e.updateFromDOM()
        }, 80))
    }
    ,
    Ja.prototype.updateFromDOM = function() {
        var e = this;
        (this.cm.isReadOnly() || !this.pollContent()) && dr(this.cm, function() {
            return gr(e.cm)
        })
    }
    ,
    Ja.prototype.setUneditable = function(e) {
        e.contentEditable = "false"
    }
    ,
    Ja.prototype.onKeyPress = function(e) {
        0 != e.charCode && (e.preventDefault(),
        this.cm.isReadOnly() || fr(this.cm, zo)(this.cm, String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), 0))
    }
    ,
    Ja.prototype.readOnlyChanged = function(e) {
        this.div.contentEditable = String("nocursor" != e)
    }
    ,
    Ja.prototype.onContextMenu = function() {}
    ,
    Ja.prototype.resetPosition = function() {}
    ,
    Ja.prototype.needsContentAttribute = !0;
    var Ya = function(e) {
        this.cm = e,
        this.prevInput = "",
        this.pollingFast = !1,
        this.polling = new Is,
        this.inaccurateSelection = !1,
        this.hasSelection = !1,
        this.composing = null
    };
    Ya.prototype.init = function(e) {
        function t(e) {
            if (!Me(i, e)) {
                if (i.somethingSelected())
                    Uo({
                        lineWise: !1,
                        text: i.getSelections()
                    }),
                    r.inaccurateSelection && (r.prevInput = "",
                    r.inaccurateSelection = !1,
                    s.value = Ga.text.join("\n"),
                    Os(s));
                else {
                    if (!i.options.lineWiseCopyCut)
                        return;
                    var t = Qo(i);
                    Uo({
                        lineWise: !0,
                        text: t.text
                    }),
                    "cut" == e.type ? i.setSelections(t.ranges, null, Fs) : (r.prevInput = "",
                    s.value = t.text.join("\n"),
                    Os(s))
                }
                "cut" == e.type && (i.state.cutIncoming = !0)
            }
        }
        var n = this
          , r = this
          , i = this.cm
          , o = this.wrapper = Ko()
          , s = this.textarea = o.firstChild;
        e.wrapper.insertBefore(o, e.wrapper.firstChild),
        _s && (s.style.width = "0px"),
        Ks(s, "input", function() {
            fs && ps >= 9 && n.hasSelection && (n.hasSelection = null),
            r.poll()
        }),
        Ks(s, "paste", function(e) {
            Me(i, e) || Vo(e, i) || (i.state.pasteIncoming = !0,
            r.fastPoll())
        }),
        Ks(s, "cut", t),
        Ks(s, "copy", t),
        Ks(e.scroller, "paste", function(t) {
            Ft(e, t) || Me(i, t) || (i.state.pasteIncoming = !0,
            r.focus())
        }),
        Ks(e.lineSpace, "selectstart", function(t) {
            Ft(e, t) || Pe(t)
        }),
        Ks(s, "compositionstart", function() {
            var e = i.getCursor("from");
            r.composing && r.composing.range.clear(),
            r.composing = {
                start: e,
                range: i.markText(e, i.getCursor("to"), {
                    className: "CodeMirror-composing"
                })
            }
        }),
        Ks(s, "compositionend", function() {
            r.composing && (r.poll(),
            r.composing.range.clear(),
            r.composing = null)
        })
    }
    ,
    Ya.prototype.prepareSelection = function() {
        var e = this.cm
          , t = e.display
          , n = e.doc
          , r = En(e);
        if (e.options.moveInputWithCursor) {
            var i = dn(e, n.sel.primary().head, "div")
              , o = t.wrapper.getBoundingClientRect()
              , s = t.lineDiv.getBoundingClientRect();
            r.teTop = Math.max(0, Math.min(t.wrapper.clientHeight - 10, i.top + s.top - o.top)),
            r.teLeft = Math.max(0, Math.min(t.wrapper.clientWidth - 10, i.left + s.left - o.left))
        }
        return r
    }
    ,
    Ya.prototype.showSelection = function(e) {
        var t = this.cm
          , r = t.display;
        n(r.cursorDiv, e.cursors),
        n(r.selectionDiv, e.selection),
        null != e.teTop && (this.wrapper.style.top = e.teTop + "px",
        this.wrapper.style.left = e.teLeft + "px")
    }
    ,
    Ya.prototype.reset = function(e) {
        if (!this.contextMenuPending && !this.composing) {
            var t, n, r = this.cm, i = r.doc;
            if (r.somethingSelected()) {
                this.prevInput = "";
                var o = i.sel.primary();
                t = ea && (o.to().line - o.from().line > 100 || (n = r.getSelection()).length > 1e3);
                var s = t ? "-" : n || r.getSelection();
                this.textarea.value = s,
                r.state.focused && Os(this.textarea),
                fs && ps >= 9 && (this.hasSelection = s)
            } else
                e || (this.prevInput = this.textarea.value = "",
                fs && ps >= 9 && (this.hasSelection = null));
            this.inaccurateSelection = t
        }
    }
    ,
    Ya.prototype.getField = function() {
        return this.textarea
    }
    ,
    Ya.prototype.supportsTouch = function() {
        return !1
    }
    ,
    Ya.prototype.focus = function() {
        if ("nocursor" != this.cm.options.readOnly && (!Ss || s() != this.textarea))
            try {
                this.textarea.focus()
            } catch (e) {}
    }
    ,
    Ya.prototype.blur = function() {
        this.textarea.blur()
    }
    ,
    Ya.prototype.resetPosition = function() {
        this.wrapper.style.top = this.wrapper.style.left = 0
    }
    ,
    Ya.prototype.receivedFocus = function() {
        this.slowPoll()
    }
    ,
    Ya.prototype.slowPoll = function() {
        var e = this;
        this.pollingFast || this.polling.set(this.cm.options.pollInterval, function() {
            e.poll(),
            e.cm.state.focused && e.slowPoll()
        })
    }
    ,
    Ya.prototype.fastPoll = function() {
        function e() {
            var r = n.poll();
            r || t ? (n.pollingFast = !1,
            n.slowPoll()) : (t = !0,
            n.polling.set(60, e))
        }
        var t = !1
          , n = this;
        n.pollingFast = !0,
        n.polling.set(20, e)
    }
    ,
    Ya.prototype.poll = function() {
        var e = this
          , t = this.cm
          , n = this.textarea
          , r = this.prevInput;
        if (this.contextMenuPending || !t.state.focused || Zs(n) && !r && !this.composing || t.isReadOnly() || t.options.disableInput || t.state.keySeq)
            return !1;
        var i = n.value;
        if (i == r && !t.somethingSelected())
            return !1;
        if (fs && ps >= 9 && this.hasSelection === i || Cs && /[\uf700-\uf7ff]/.test(i))
            return t.display.input.reset(),
            !1;
        if (t.doc.sel == t.display.selForContextMenu) {
            var o = i.charCodeAt(0);
            if (8203 != o || r || (r = "​"),
            8666 == o)
                return this.reset(),
                this.cm.execCommand("undo")
        }
        for (var s = 0, a = Math.min(r.length, i.length); a > s && r.charCodeAt(s) == i.charCodeAt(s); )
            ++s;
        return dr(t, function() {
            zo(t, i.slice(s), r.length - s, null, e.composing ? "*compose" : null),
            i.length > 1e3 || i.indexOf("\n") > -1 ? n.value = e.prevInput = "" : e.prevInput = i,
            e.composing && (e.composing.range.clear(),
            e.composing.range = t.markText(e.composing.start, t.getCursor("to"), {
                className: "CodeMirror-composing"
            }))
        }),
        !0
    }
    ,
    Ya.prototype.ensurePolled = function() {
        this.pollingFast && this.poll() && (this.pollingFast = !1)
    }
    ,
    Ya.prototype.onKeyPress = function() {
        fs && ps >= 9 && (this.hasSelection = null),
        this.fastPoll()
    }
    ,
    Ya.prototype.onContextMenu = function(e) {
        function t() {
            if (null != s.selectionStart) {
                var e = i.somethingSelected()
                  , t = "​" + (e ? s.value : "");
                s.value = "⇚",
                s.value = t,
                r.prevInput = e ? "" : "​",
                s.selectionStart = 1,
                s.selectionEnd = t.length,
                o.selForContextMenu = i.doc.sel
            }
        }
        function n() {
            if (r.contextMenuPending = !1,
            r.wrapper.style.cssText = h,
            s.style.cssText = c,
            fs && 9 > ps && o.scrollbars.setScrollTop(o.scroller.scrollTop = l),
            null != s.selectionStart) {
                (!fs || fs && 9 > ps) && t();
                var e = 0
                  , n = function() {
                    o.selForContextMenu == i.doc.sel && 0 == s.selectionStart && s.selectionEnd > 0 && "​" == r.prevInput ? fr(i, Li)(i) : e++ < 10 ? o.detectingSelectAll = setTimeout(n, 500) : (o.selForContextMenu = null,
                    o.input.reset())
                };
                o.detectingSelectAll = setTimeout(n, 200)
            }
        }
        var r = this
          , i = r.cm
          , o = i.display
          , s = r.textarea
          , a = Cn(i, e)
          , l = o.scroller.scrollTop;
        if (a && !ys) {
            var u = i.options.resetSelectionOnContextMenu;
            u && -1 == i.doc.sel.contains(a) && fr(i, bi)(i.doc, Fr(a), Fs);
            var c = s.style.cssText
              , h = r.wrapper.style.cssText;
            r.wrapper.style.cssText = "position: absolute";
            var d = r.wrapper.getBoundingClientRect();
            s.style.cssText = "position: absolute; width: 30px; height: 30px;\n      top: " + (e.clientY - d.top - 5) + "px; left: " + (e.clientX - d.left - 5) + "px;\n      z-index: 1000; background: " + (fs ? "rgba(255, 255, 255, .05)" : "transparent") + ";\n      outline: none; border-width: 0; outline: none; overflow: hidden; opacity: .05; filter: alpha(opacity=5);";
            var f;
            if (ms && (f = window.scrollY),
            o.input.focus(),
            ms && window.scrollTo(null, f),
            o.input.reset(),
            i.somethingSelected() || (s.value = r.prevInput = " "),
            r.contextMenuPending = !0,
            o.selForContextMenu = i.doc.sel,
            clearTimeout(o.detectingSelectAll),
            fs && ps >= 9 && t(),
            Ms) {
                qe(e);
                var p = function() {
                    Ne(window, "mouseup", p),
                    setTimeout(n, 20)
                };
                Ks(window, "mouseup", p)
            } else
                setTimeout(n, 50)
        }
    }
    ,
    Ya.prototype.readOnlyChanged = function(e) {
        e || this.reset(),
        this.textarea.disabled = "nocursor" == e
    }
    ,
    Ya.prototype.setUneditable = function() {}
    ,
    Ya.prototype.needsContentAttribute = !1,
    Ro(jo),
    Ka(jo);
    var Za = "iter insert remove copy getEditor constructor".split(" ");
    for (var el in Aa.prototype)
        Aa.prototype.hasOwnProperty(el) && d(Za, el) < 0 && (jo.prototype[el] = function(e) {
            return function() {
                return e.apply(this.doc, arguments)
            }
        }(Aa.prototype[el]));
    return Ie(Aa),
    jo.inputStyles = {
        textarea: Ya,
        contenteditable: Ja
    },
    jo.defineMode = function(e) {
        jo.defaults.mode || "null" == e || (jo.defaults.mode = e),
        Ue.apply(this, arguments)
    }
    ,
    jo.defineMIME = ze,
    jo.defineMode("null", function() {
        return {
            token: function(e) {
                return e.skipToEnd()
            }
        }
    }),
    jo.defineMIME("text/plain", "null"),
    jo.defineExtension = function(e, t) {
        jo.prototype[e] = t
    }
    ,
    jo.defineDocExtension = function(e, t) {
        Aa.prototype[e] = t
    }
    ,
    jo.fromTextArea = os,
    ss(jo),
    jo.version = "5.27.4",
    jo
}),
function(e) {
    "object" == typeof exports && "object" == typeof module ? e(require("../../lib/codemirror")) : "function" == typeof define && define.amd ? define("codemirror_sql", ["../../lib/codemirror"], e) : e(CodeMirror)
}(function(e) {
    "use strict";
    e.defineMode("sql", function(t, n) {
        function r(e, t) {
            var n = e.next();
            if (p[n]) {
                var r = p[n](e, t);
                if (r !== !1)
                    return r
            }
            if (f.hexNumber && ("0" == n && e.match(/^[xX][0-9a-fA-F]+/) || ("x" == n || "X" == n) && e.match(/^'[0-9a-fA-F]+'/)))
                return "number";
            if (f.binaryNumber && (("b" == n || "B" == n) && e.match(/^'[01]+'/) || "0" == n && e.match(/^b[01]+/)))
                return "number";
            if (n.charCodeAt(0) > 47 && n.charCodeAt(0) < 58)
                return e.match(/^[0-9]*\.?[0-9]+([eE][-+]?[0-9]+)?/),
                f.decimallessFloat && e.eat("."),
                "number";
            if ("?" == n && (e.eatSpace() || e.eol() || e.eat(";")))
                return "variable-3";
            if ("'" == n || '"' == n && f.doubleQuote)
                return t.tokenize = i(n),
                t.tokenize(e, t);
            if ((f.nCharCast && ("n" == n || "N" == n) || f.charsetCast && "_" == n && e.match(/[a-z][a-z0-9]*/i)) && ("'" == e.peek() || '"' == e.peek()))
                return "keyword";
            if (/^[\(\),\;\[\]]/.test(n))
                return null;
            if (f.commentSlashSlash && "/" == n && e.eat("/"))
                return e.skipToEnd(),
                "comment";
            if (f.commentHash && "#" == n || "-" == n && e.eat("-") && (!f.commentSpaceRequired || e.eat(" ")))
                return e.skipToEnd(),
                "comment";
            if ("/" == n && e.eat("*"))
                return t.tokenize = o(1),
                t.tokenize(e, t);
            if ("." != n) {
                if (d.test(n))
                    return e.eatWhile(d),
                    null;
                if ("{" == n && (e.match(/^( )*(d|D|t|T|ts|TS)( )*'[^']*'( )*}/) || e.match(/^( )*(d|D|t|T|ts|TS)( )*"[^"]*"( )*}/)))
                    return "number";
                e.eatWhile(/^[_\w\d]/);
                var s = e.current().toLowerCase();
                return m.hasOwnProperty(s) && (e.match(/^( )+'[^']*'/) || e.match(/^( )+"[^"]*"/)) ? "number" : u.hasOwnProperty(s) ? "atom" : c.hasOwnProperty(s) ? "builtin" : h.hasOwnProperty(s) ? "keyword" : l.hasOwnProperty(s) ? "string-2" : null
            }
            return f.zerolessFloat && e.match(/^(?:\d+(?:e[+-]?\d+)?)/i) ? "number" : f.ODBCdotTable && e.match(/^[a-zA-Z_]+/) ? "variable-2" : void 0
        }
        function i(e) {
            return function(t, n) {
                for (var i, o = !1; null != (i = t.next()); ) {
                    if (i == e && !o) {
                        n.tokenize = r;
                        break
                    }
                    o = !o && "\\" == i
                }
                return "string"
            }
        }
        function o(e) {
            return function(t, n) {
                var i = t.match(/^.*?(\/\*|\*\/)/);
                return i ? "/*" == i[1] ? n.tokenize = o(e + 1) : e > 1 ? n.tokenize = o(e - 1) : n.tokenize = r : t.skipToEnd(),
                "comment"
            }
        }
        function s(e, t, n) {
            t.context = {
                prev: t.context,
                indent: e.indentation(),
                col: e.column(),
                type: n
            }
        }
        function a(e) {
            e.indent = e.context.indent,
            e.context = e.context.prev
        }
        var l = n.client || {}
          , u = n.atoms || {
            "false": !0,
            "true": !0,
            "null": !0
        }
          , c = n.builtin || {}
          , h = n.keywords || {}
          , d = n.operatorChars || /^[*+\-%<>!=&|~^]/
          , f = n.support || {}
          , p = n.hooks || {}
          , m = n.dateSQL || {
            date: !0,
            time: !0,
            timestamp: !0
        };
        return {
            startState: function() {
                return {
                    tokenize: r,
                    context: null
                }
            },
            token: function(e, t) {
                if (e.sol() && t.context && null == t.context.align && (t.context.align = !1),
                t.tokenize == r && e.eatSpace())
                    return null;
                var n = t.tokenize(e, t);
                if ("comment" == n)
                    return n;
                t.context && null == t.context.align && (t.context.align = !0);
                var i = e.current();
                return "(" == i ? s(e, t, ")") : "[" == i ? s(e, t, "]") : t.context && t.context.type == i && a(t),
                n
            },
            indent: function(n, r) {
                var i = n.context;
                if (!i)
                    return e.Pass;
                var o = r.charAt(0) == i.type;
                return i.align ? i.col + (o ? 0 : 1) : i.indent + (o ? 0 : t.indentUnit)
            },
            blockCommentStart: "/*",
            blockCommentEnd: "*/",
            lineComment: f.commentSlashSlash ? "//" : f.commentHash ? "#" : null
        }
    }),
    function() {
        function t(e) {
            for (var t; null != (t = e.next()); )
                if ("`" == t && !e.eat("`"))
                    return "variable-2";
            return e.backUp(e.current().length - 1),
            e.eatWhile(/\w/) ? "variable-2" : null
        }
        function n(e) {
            for (var t; null != (t = e.next()); )
                if ('"' == t && !e.eat('"'))
                    return "variable-2";
            return e.backUp(e.current().length - 1),
            e.eatWhile(/\w/) ? "variable-2" : null
        }
        function r(e) {
            return e.eat("@") && (e.match(/^session\./),
            e.match(/^local\./),
            e.match(/^global\./)),
            e.eat("'") ? (e.match(/^.*'/),
            "variable-2") : e.eat('"') ? (e.match(/^.*"/),
            "variable-2") : e.eat("`") ? (e.match(/^.*`/),
            "variable-2") : e.match(/^[0-9a-zA-Z$\.\_]+/) ? "variable-2" : null
        }
        function i(e) {
            return e.eat("N") ? "atom" : e.match(/^[a-zA-Z.#!?]/) ? "variable-2" : null
        }
        function o(e) {
            for (var t = {}, n = e.split(" "), r = 0; r < n.length; ++r)
                t[n[r]] = !0;
            return t
        }
        var s = "alter and as asc between by count create delete desc distinct drop from group having in insert into is join like not on or order select set table union update values where limit ";
        e.defineMIME("text/x-sql", {
            name: "sql",
            keywords: o(s + "begin"),
            builtin: o("bool boolean bit blob enum long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision real date datetime year unsigned signed decimal numeric"),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: o("date time timestamp"),
            support: o("ODBCdotTable doubleQuote binaryNumber hexNumber")
        }),
        e.defineMIME("text/x-mssql", {
            name: "sql",
            client: o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: o(s + "begin trigger proc view index for add constraint key primary foreign collate clustered nonclustered declare exec"),
            builtin: o("bigint numeric bit smallint decimal smallmoney int tinyint money float real char varchar text nchar nvarchar ntext binary varbinary image cursor timestamp hierarchyid uniqueidentifier sql_variant xml table "),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: o("date datetimeoffset datetime2 smalldatetime datetime time"),
            hooks: {
                "@": r
            }
        }),
        e.defineMIME("text/x-mysql", {
            name: "sql",
            client: o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: o(s + "accessible action add after algorithm all analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general get global grant grants group group_concat handler hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show signal slave slow smallint snapshot soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
            builtin: o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: o("date time timestamp"),
            support: o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
            hooks: {
                "@": r,
                "`": t,
                "\\": i
            }
        }),
        e.defineMIME("text/x-mariadb", {
            name: "sql",
            client: o("charset clear connect edit ego exit go help nopager notee nowarning pager print prompt quit rehash source status system tee"),
            keywords: o(s + "accessible action add after algorithm all always analyze asensitive at authors auto_increment autocommit avg avg_row_length before binary binlog both btree cache call cascade cascaded case catalog_name chain change changed character check checkpoint checksum class_origin client_statistics close coalesce code collate collation collations column columns comment commit committed completion concurrent condition connection consistent constraint contains continue contributors convert cross current current_date current_time current_timestamp current_user cursor data database databases day_hour day_microsecond day_minute day_second deallocate dec declare default delay_key_write delayed delimiter des_key_file describe deterministic dev_pop dev_samp deviance diagnostics directory disable discard distinctrow div dual dumpfile each elseif enable enclosed end ends engine engines enum errors escape escaped even event events every execute exists exit explain extended fast fetch field fields first flush for force foreign found_rows full fulltext function general generated get global grant grants group groupby_concat handler hard hash help high_priority hosts hour_microsecond hour_minute hour_second if ignore ignore_server_ids import index index_statistics infile inner innodb inout insensitive insert_method install interval invoker isolation iterate key keys kill language last leading leave left level limit linear lines list load local localtime localtimestamp lock logs low_priority master master_heartbeat_period master_ssl_verify_server_cert masters match max max_rows maxvalue message_text middleint migrate min min_rows minute_microsecond minute_second mod mode modifies modify mutex mysql_errno natural next no no_write_to_binlog offline offset one online open optimize option optionally out outer outfile pack_keys parser partition partitions password persistent phase plugin plugins prepare preserve prev primary privileges procedure processlist profile profiles purge query quick range read read_write reads real rebuild recover references regexp relaylog release remove rename reorganize repair repeatable replace require resignal restrict resume return returns revoke right rlike rollback rollup row row_format rtree savepoint schedule schema schema_name schemas second_microsecond security sensitive separator serializable server session share show shutdown signal slave slow smallint snapshot soft soname spatial specific sql sql_big_result sql_buffer_result sql_cache sql_calc_found_rows sql_no_cache sql_small_result sqlexception sqlstate sqlwarning ssl start starting starts status std stddev stddev_pop stddev_samp storage straight_join subclass_origin sum suspend table_name table_statistics tables tablespace temporary terminated to trailing transaction trigger triggers truncate uncommitted undo uninstall unique unlock upgrade usage use use_frm user user_resources user_statistics using utc_date utc_time utc_timestamp value variables varying view views virtual warnings when while with work write xa xor year_month zerofill begin do then else loop repeat"),
            builtin: o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text bigint int int1 int2 int3 int4 int8 integer float float4 float8 double char varbinary varchar varcharacter precision date datetime year unsigned signed numeric"),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^]/,
            dateSQL: o("date time timestamp"),
            support: o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber doubleQuote nCharCast charsetCast commentHash commentSpaceRequired"),
            hooks: {
                "@": r,
                "`": t,
                "\\": i
            }
        }),
        e.defineMIME("text/x-sqlite", {
            name: "sql",
            client: o("auth backup bail binary changes check clone databases dbinfo dump echo eqp exit explain fullschema headers help import imposter indexes iotrace limit lint load log mode nullvalue once open output print prompt quit read restore save scanstats schema separator session shell show stats system tables testcase timeout timer trace vfsinfo vfslist vfsname width"),
            keywords: o(s + "abort action add after all analyze attach autoincrement before begin cascade case cast check collate column commit conflict constraint cross current_date current_time current_timestamp database default deferrable deferred detach each else end escape except exclusive exists explain fail for foreign full glob if ignore immediate index indexed initially inner instead intersect isnull key left limit match natural no notnull null of offset outer plan pragma primary query raise recursive references regexp reindex release rename replace restrict right rollback row savepoint temp temporary then to transaction trigger unique using vacuum view virtual when with without"),
            builtin: o("bool boolean bit blob decimal double float long longblob longtext medium mediumblob mediumint mediumtext time timestamp tinyblob tinyint tinytext text clob bigint int int2 int8 integer float double char varchar date datetime year unsigned signed numeric real"),
            atoms: o("null current_date current_time current_timestamp"),
            operatorChars: /^[*+\-%<>!=&|/~]/,
            dateSQL: o("date time timestamp datetime"),
            support: o("decimallessFloat zerolessFloat"),
            identifierQuote: '"',
            hooks: {
                "@": r,
                ":": r,
                "?": r,
                $: r,
                '"': n,
                "`": t
            }
        }),
        e.defineMIME("text/x-cassandra", {
            name: "sql",
            client: {},
            keywords: o("add all allow alter and any apply as asc authorize batch begin by clustering columnfamily compact consistency count create custom delete desc distinct drop each_quorum exists filtering from grant if in index insert into key keyspace keyspaces level limit local_one local_quorum modify nan norecursive nosuperuser not of on one order password permission permissions primary quorum rename revoke schema select set storage superuser table three to token truncate ttl two type unlogged update use user users using values where with writetime"),
            builtin: o("ascii bigint blob boolean counter decimal double float frozen inet int list map static text timestamp timeuuid tuple uuid varchar varint"),
            atoms: o("false true infinity NaN"),
            operatorChars: /^[<>=]/,
            dateSQL: {},
            support: o("commentSlashSlash decimallessFloat"),
            hooks: {}
        }),
        e.defineMIME("text/x-plsql", {
            name: "sql",
            client: o("appinfo arraysize autocommit autoprint autorecovery autotrace blockterminator break btitle cmdsep colsep compatibility compute concat copycommit copytypecheck define describe echo editfile embedded escape exec execute feedback flagger flush heading headsep instance linesize lno loboffset logsource long longchunksize markup native newpage numformat numwidth pagesize pause pno recsep recsepchar release repfooter repheader serveroutput shiftinout show showmode size spool sqlblanklines sqlcase sqlcode sqlcontinue sqlnumber sqlpluscompatibility sqlprefix sqlprompt sqlterminator suffix tab term termout time timing trimout trimspool ttitle underline verify version wrap"),
            keywords: o("abort accept access add all alter and any array arraylen as asc assert assign at attributes audit authorization avg base_table begin between binary_integer body boolean by case cast char char_base check close cluster clusters colauth column comment commit compress connect connected constant constraint crash create current currval cursor data_base database date dba deallocate debugoff debugon decimal declare default definition delay delete desc digits dispose distinct do drop else elseif elsif enable end entry escape exception exception_init exchange exclusive exists exit external fast fetch file for force form from function generic goto grant group having identified if immediate in increment index indexes indicator initial initrans insert interface intersect into is key level library like limited local lock log logging long loop master maxextents maxtrans member minextents minus mislabel mode modify multiset new next no noaudit nocompress nologging noparallel not nowait number_base object of off offline on online only open option or order out package parallel partition pctfree pctincrease pctused pls_integer positive positiven pragma primary prior private privileges procedure public raise range raw read rebuild record ref references refresh release rename replace resource restrict return returning returns reverse revoke rollback row rowid rowlabel rownum rows run savepoint schema segment select separate session set share snapshot some space split sql start statement storage subtype successful synonym tabauth table tables tablespace task terminate then to trigger truncate type union unique unlimited unrecoverable unusable update use using validate value values variable view views when whenever where while with work"),
            builtin: o("abs acos add_months ascii asin atan atan2 average bfile bfilename bigserial bit blob ceil character chartorowid chr clob concat convert cos cosh count dec decode deref dual dump dup_val_on_index empty error exp false float floor found glb greatest hextoraw initcap instr instrb int integer isopen last_day least length lengthb ln lower lpad ltrim lub make_ref max min mlslabel mod months_between natural naturaln nchar nclob new_time next_day nextval nls_charset_decl_len nls_charset_id nls_charset_name nls_initcap nls_lower nls_sort nls_upper nlssort no_data_found notfound null number numeric nvarchar2 nvl others power rawtohex real reftohex round rowcount rowidtochar rowtype rpad rtrim serial sign signtype sin sinh smallint soundex sqlcode sqlerrm sqrt stddev string substr substrb sum sysdate tan tanh to_char text to_date to_label to_multi_byte to_number to_single_byte translate true trunc uid unlogged upper user userenv varchar varchar2 variance varying vsize xml"),
            operatorChars: /^[*+\-%<>!=~]/,
            dateSQL: o("date time timestamp"),
            support: o("doubleQuote nCharCast zerolessFloat binaryNumber hexNumber")
        }),
        e.defineMIME("text/x-hive", {
            name: "sql",
            keywords: o("select alter $elem$ $key$ $value$ add after all analyze and archive as asc before between binary both bucket buckets by cascade case cast change cluster clustered clusterstatus collection column columns comment compute concatenate continue create cross cursor data database databases dbproperties deferred delete delimited desc describe directory disable distinct distribute drop else enable end escaped exclusive exists explain export extended external false fetch fields fileformat first format formatted from full function functions grant group having hold_ddltime idxproperties if import in index indexes inpath inputdriver inputformat insert intersect into is items join keys lateral left like limit lines load local location lock locks mapjoin materialized minus msck no_drop nocompress not of offline on option or order out outer outputdriver outputformat overwrite partition partitioned partitions percent plus preserve procedure purge range rcfile read readonly reads rebuild recordreader recordwriter recover reduce regexp rename repair replace restrict revoke right rlike row schema schemas semi sequencefile serde serdeproperties set shared show show_database sort sorted ssl statistics stored streamtable table tables tablesample tblproperties temporary terminated textfile then tmp to touch transform trigger true unarchive undo union uniquejoin unlock update use using utc utc_tmestamp view when where while with"),
            builtin: o("bool boolean long timestamp tinyint smallint bigint int float double date datetime unsigned string array struct map uniontype"),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=]/,
            dateSQL: o("date timestamp"),
            support: o("ODBCdotTable doubleQuote binaryNumber hexNumber")
        }),
        e.defineMIME("text/x-pgsql", {
            name: "sql",
            client: o("source"),
            keywords: o(s + "a abort abs absent absolute access according action ada add admin after aggregate all allocate also always analyse analyze any are array array_agg array_max_cardinality asensitive assertion assignment asymmetric at atomic attribute attributes authorization avg backward base64 before begin begin_frame begin_partition bernoulli binary bit_length blob blocked bom both breadth c cache call called cardinality cascade cascaded case cast catalog catalog_name ceil ceiling chain characteristics characters character_length character_set_catalog character_set_name character_set_schema char_length check checkpoint class class_origin clob close cluster coalesce cobol collate collation collation_catalog collation_name collation_schema collect column columns column_name command_function command_function_code comment comments commit committed concurrently condition condition_number configuration conflict connect connection connection_name constraint constraints constraint_catalog constraint_name constraint_schema constructor contains content continue control conversion convert copy corr corresponding cost covar_pop covar_samp cross csv cube cume_dist current current_catalog current_date current_default_transform_group current_path current_role current_row current_schema current_time current_timestamp current_transform_group_for_type current_user cursor cursor_name cycle data database datalink datetime_interval_code datetime_interval_precision day db deallocate dec declare default defaults deferrable deferred defined definer degree delimiter delimiters dense_rank depth deref derived describe descriptor deterministic diagnostics dictionary disable discard disconnect dispatch dlnewcopy dlpreviouscopy dlurlcomplete dlurlcompleteonly dlurlcompletewrite dlurlpath dlurlpathonly dlurlpathwrite dlurlscheme dlurlserver dlvalue do document domain dynamic dynamic_function dynamic_function_code each element else empty enable encoding encrypted end end-exec end_frame end_partition enforced enum equals escape event every except exception exclude excluding exclusive exec execute exists exp explain expression extension external extract false family fetch file filter final first first_value flag float floor following for force foreign fortran forward found frame_row free freeze fs full function functions fusion g general generated get global go goto grant granted greatest grouping groups handler header hex hierarchy hold hour id identity if ignore ilike immediate immediately immutable implementation implicit import including increment indent index indexes indicator inherit inherits initially inline inner inout input insensitive instance instantiable instead integrity intersect intersection invoker isnull isolation k key key_member key_type label lag language large last last_value lateral lead leading leakproof least left length level library like_regex link listen ln load local localtime localtimestamp location locator lock locked logged lower m map mapping match matched materialized max maxvalue max_cardinality member merge message_length message_octet_length message_text method min minute minvalue mod mode modifies module month more move multiset mumps name names namespace national natural nchar nclob nesting new next nfc nfd nfkc nfkd nil no none normalize normalized nothing notify notnull nowait nth_value ntile null nullable nullif nulls number object occurrences_regex octets octet_length of off offset oids old only open operator option options ordering ordinality others out outer output over overlaps overlay overriding owned owner p pad parallel parameter parameter_mode parameter_name parameter_ordinal_position parameter_specific_catalog parameter_specific_name parameter_specific_schema parser partial partition pascal passing passthrough password percent percentile_cont percentile_disc percent_rank period permission placing plans pli policy portion position position_regex power precedes preceding prepare prepared preserve primary prior privileges procedural procedure program public quote range rank read reads reassign recheck recovery recursive ref references referencing refresh regr_avgx regr_avgy regr_count regr_intercept regr_r2 regr_slope regr_sxx regr_sxy regr_syy reindex relative release rename repeatable replace replica requiring reset respect restart restore restrict restricted result return returned_cardinality returned_length returned_octet_length returned_sqlstate returning returns revoke right role rollback rollup routine routine_catalog routine_name routine_schema row rows row_count row_number rule savepoint scale schema schema_name scope scope_catalog scope_name scope_schema scroll search second section security selective self sensitive sequence sequences serializable server server_name session session_user setof sets share show similar simple size skip snapshot some source space specific specifictype specific_name sql sqlcode sqlerror sqlexception sqlstate sqlwarning sqrt stable standalone start state statement static statistics stddev_pop stddev_samp stdin stdout storage strict strip structure style subclass_origin submultiset substring substring_regex succeeds sum symmetric sysid system system_time system_user t tables tablesample tablespace table_name temp template temporary then ties timezone_hour timezone_minute to token top_level_count trailing transaction transactions_committed transactions_rolled_back transaction_active transform transforms translate translate_regex translation treat trigger trigger_catalog trigger_name trigger_schema trim trim_array true truncate trusted type types uescape unbounded uncommitted under unencrypted unique unknown unlink unlisten unlogged unnamed unnest until untyped upper uri usage user user_defined_type_catalog user_defined_type_code user_defined_type_name user_defined_type_schema using vacuum valid validate validator value value_of varbinary variadic var_pop var_samp verbose version versioning view views volatile when whenever whitespace width_bucket window within work wrapper write xmlagg xmlattributes xmlbinary xmlcast xmlcomment xmlconcat xmldeclaration xmldocument xmlelement xmlexists xmlforest xmliterate xmlnamespaces xmlparse xmlpi xmlquery xmlroot xmlschema xmlserialize xmltable xmltext xmlvalidate year yes loop repeat attach path depends detach zone"),
            builtin: o("bigint int8 bigserial serial8 bit varying varbit boolean bool box bytea character char varchar cidr circle date double precision float8 inet integer int int4 interval json jsonb line lseg macaddr macaddr8 money numeric decimal path pg_lsn point polygon real float4 smallint int2 smallserial serial2 serial serial4 text time without zone with timetz timestamp timestamptz tsquery tsvector txid_snapshot uuid xml"),
            atoms: o("false true null unknown"),
            operatorChars: /^[*+\-%<>!=&|^\/#@?~]/,
            dateSQL: o("date time timestamp"),
            support: o("ODBCdotTable decimallessFloat zerolessFloat binaryNumber hexNumber nCharCast charsetCast")
        }),
        e.defineMIME("text/x-gql", {
            name: "sql",
            keywords: o("ancestor and asc by contains desc descendant distinct from group has in is limit offset on order select superset where"),
            atoms: o("false true"),
            builtin: o("blob datetime first key __key__ string integer double boolean null"),
            operatorChars: /^[*+\-%<>!=]/
        })
    }()
}),
define("utils/fiddleEditor", ["codemirror", "codemirror_sql", "jquery"], function(e, t, n) {
    var r = function(t, r, i, o) {
        return n.extend(this, e.fromTextArea(document.getElementById(t), {
            mode: "text/x-mysql",
            matchBrackets: !0,
            extraKeys: {
                Tab: "indentMore"
            },
            lineNumbers: !0
        })),
        n(this.getWrapperElement()).on("keypress", function(e) {
            13 == e.keyCode && e.ctrlKey && o && (e.preventDefault(),
            o())
        }),
        n(this.getWrapperElement()).on("change keyup", function(e) {
            r.call(i)
        }),
        this
    };
    return r.prototype = n.extend({}, e.prototype),
    r.prototype.isFullscreen = function() {
        return n(this.getScrollerElement()).hasClass("CodeMirror-fullscreen")
    }
    ,
    r.prototype.setFullscreen = function(e) {
        if (e) {
            var t = n(window).height() - 40;
            n(this.getScrollerElement()).addClass("CodeMirror-fullscreen").height(t),
            n(this.getGutterElement()).height(t)
        } else
            n(this.getScrollerElement()).removeClass("CodeMirror-fullscreen"),
            n(this.getGutterElement()).css("height", "auto"),
            n(this.getScrollerElement()).css("height", "200px")
    }
    ,
    r
}),
define("utils/renderTerminator", [], function() {
    var e = function(e, t) {
        var n = e.find(".terminator a.btn");
        n.html(n.html().replace(/\[ .+ \]/, "[ " + t + " ]")),
        e.find(".terminator").data("statement_separator", t)
    };
    return e
}),
define("text!fiddle_backbone/templates/schemaOutput.html", [], function() {
    return '        {{#if errorMessage}}\n        <div class="alert alert-error database-error database-messages"><i class="icon-remove"></i>{{errorMessage}}</div>\n        {{else}}\n        <div class="alert alert-success database-messages"><i class="icon-ok"></i>Schema Ready</div>\n        {{/if}}\n'
}),
define("text!fiddle_backbone/templates/schemaBrowser.html", [], function() {
    return '        <h3>Schema Browser</h3>\n        <ul class="tables">\n            {{#each objects}}\n            <li>\n                <a href="#{{this.table_name}}"><i class="icon-plus"></i> {{this.table_name}}</a> ({{this.table_type}})\n                <ul class="columns">\n                    {{#each this.columns}}\n                    <li>{{name}} {{type}}</li>\n                    {{/each}}\n                </ul>\n            </li>\n            {{/each}}\n        </ul>\n'
}),
define("fiddle_backbone/views/SchemaDef", ["jquery", "Backbone", "Handlebars", "utils/fiddleEditor", "utils/renderTerminator", "text!fiddle_backbone/templates/schemaOutput.html", "text!fiddle_backbone/templates/schemaBrowser.html"], function(e, t, n, r, i, o, s) {
    var a = t.View.extend({
        initialize: function(e) {
            this.options = e,
            this.editor = new r(this.id,this.handleSchemaChange,this,_.bind(function() {
                this.model.build()
            }, this)),
            this.compiledOutputTemplate = n.compile(o),
            this.compiledSchemaBrowserTemplate = n.compile(s)
        },
        handleSchemaChange: function() {
            (this.model.get("ddl") != this.editor.getValue() || this.model.get("statement_separator") != e(".panel.schema .terminator").data("statement_separator")) && (this.model.set({
                ddl: this.editor.getValue(),
                statement_separator: e(".panel.schema .terminator").data("statement_separator"),
                ready: !1
            }),
            e(".schema .helpTip").css("display", this.model.get("ddl").length ? "none" : "block"),
            e(".sql .helpTip").css("display", !this.model.get("ready") || this.model.get("loading") ? "none" : "block"))
        },
        render: function() {
            this.editor.setValue(this.model.get("ddl")),
            this.updateDependents(),
            i(e(".panel.schema"), this.model.get("statement_separator"))
        },
        renderOutput: function() {
            this.options.output_el.html(this.compiledOutputTemplate(this.model.toJSON()))
        },
        renderSchemaBrowser: function() {
            this.options.browser_el.html(this.compiledSchemaBrowserTemplate({
                objects: this.model.get("schema_structure")
            }))
        },
        refresh: function() {
            this.editor.refresh()
        },
        updateDependents: function() {
            this.model.get("ready") ? (e(".needsReadySchema").unblock(),
            e("#schemaBrowser").attr("disabled", !1),
            e(".schema .helpTip").css("display", "none")) : (e(".needsReadySchema").block({
                message: "Please build schema."
            }),
            e("#schemaBrowser").attr("disabled", !0),
            e(".schema .helpTip").css("display", this.model.get("loading") || this.model.get("ddl").length ? "none" : "block"))
        }
    });
    return a
}),
"undefined" == typeof QP || !QP)
    var QP = {};
!function() {
    function e(e) {
        var r = t(e)
          , i = r[0];
        null !== i.getContext && void 0 !== i.getContext && window.setTimeout(function() {
            var t = i.getContext("2d")
              , o = $(".qp-tr", e);
            i.width = o.outerWidth(!0),
            i.height = o.outerHeight(!0);
            var s = r.offset();
            $(".qp-tr", e).each(function() {
                var e = $("> * > .qp-node", $(this));
                $("> * > .qp-tr > * > .qp-node", $(this)).each(function() {
                    n(t, s, e, $(this))
                })
            }),
            t.stroke()
        }, 1)
    }
    function t(e) {
        var t = $("canvas", e);
        return 0 == t.length && (e.prepend($("<canvas></canvas>").css("position", "absolute").css("top", 0).css("left", 0)),
        t = $("canvas", e)),
        t
    }
    function n(e, t, n, r) {
        var i = n.offset();
        i.top += n.outerHeight() / 2,
        i.left += n.outerWidth();
        var o = r.offset();
        o.top += r.outerHeight() / 2;
        var s = i.left / 2 + o.left / 2;
        e.moveTo(i.left - t.left, i.top - t.top),
        e.lineTo(s - t.left, i.top - t.top),
        e.lineTo(s - t.left, o.top - t.top),
        e.lineTo(o.left - t.left, o.top - t.top)
    }
    QP.drawLines = function(t) {
        t = null === t || void 0 === t ? $(".qp-root").parent() : $(t),
        e(t)
    }
}(),
define("XPlans/mssql", function(e) {
    return function() {
        var t;
        return t || e.QP
    }
}(this)),
define("text!fiddle_backbone/templates/queryTabularOutput.html", [], function() {
    return '{{#each_with_index sets}}\n<div class="set" id="set_{{index}}">\n    {{#if this.RESULTS.DATA.length}}\n        <table class="results table table-bordered table-striped">\n            <tr>\n            {{#each this.RESULTS.COLUMNS}}\n            <th>{{this}}</th>\n            {{/each}}\n            </tr>\n            {{#each this.RESULTS.DATA}}\n            <tr>\n                {{#each this}}\n                <td>{{result_display this this}}</td>\n                {{/each}}\n            </tr>\n            {{/each}}\n        </table>\n    {{/if}}\n    {{#if this.SUCCEEDED}}\n        <div id="messages_{{index}}" class="alert alert-success database-messages">\n            <i class="icon-ok"></i>\n            Record Count: {{this.RESULTS.DATA.length}}; Execution Time: {{this.EXECUTIONTIME}}ms\n            {{#if this.EXECUTIONPLAN.DATA.length}}\n            <a href="#executionPlan" class="executionPlanLink"><i class="icon-plus"></i>View Execution Plan</a>\n            {{/if}}\n            <a href="#!{{../../schemaDef/dbType/id}}/{{../../schemaDef/short_code}}/{{../../id}}/{{index}}" class="setLink"><i class="icon-share-alt"></i> link</a>\n        </div>\n\n        {{#if this.EXECUTIONPLAN.DATA.length}}\n            <table class="executionPlan table table-bordered">\n                <tr>\n                {{#each this.EXECUTIONPLAN.COLUMNS}}\n                <th>{{this}}</th>\n                {{/each}}\n                </tr>\n                {{#each this.EXECUTIONPLAN.DATA}}\n                <tr>\n                    {{#each this}}\n                    <td><div style="position:relative">{{{this}}}</div></td>\n                    {{/each}}\n                </tr>\n                {{/each}}\n\n            {{#if ../../../schemaDef/dbType/isPostgreSQL}}\n                <tr>\n                    <td><form action="http://explain.depesz.com/" target="_new"><input type="hidden" name="title" value="{{../../schemaDef/dbType/id}}/{{../../schemaDef/short_code}}/{{../../id}}/{{index}}"><input type="hidden" name="plan" value=""><input type="submit" class="btn btn-info depesz" value="View on Depesz"></form></td>\n                </tr>\n            {{/if}}\n\n            </table>\n        {{/if}}\n\n    {{else}}\n        <div id="messages_{{index}}" class="alert alert-error database-messages"><i class="icon-remove"></i>{{this.ERRORMESSAGE}}</div>\n\n        {{#unless ../../schemaDef/dbType/num_hosts}}\n            <div id="messages_{{index}}" class="alert alert-warning database-messages convert-to-latest">\n                <i class="icon-random"></i>Click here to convert current fiddle to use the latest available ( {{../../../latestDBType/full_name}} )\n            </div>\n        {{/unless}}\n\n    {{/if}}\n</div>\n{{/each_with_index}}\n\n<span id="donationSuggestion">Did this query solve the problem? If so, consider donating $5 to help make sure SQL Fiddle will be here next time you need help with a database problem. Thanks!</span>\n'
}),
define("text!fiddle_backbone/templates/queryPlaintextOutput.html", [], function() {
    return '{{#each_with_index sets}}\n<div class="set" id="set_{{index}}">\n    {{#if this.RESULTS.DATA.length}}\n        <pre class="results">\n|{{#each_simple_value_with_index this.RESULTS.COLUMNS}} {{result_display_padded ../this/RESULTS/COLUMNWIDTHS}} |{{/each_simple_value_with_index}}\n|{{#each_simple_value_with_index this.RESULTS.COLUMNS}}{{divider_display ../this/RESULTS/COLUMNWIDTHS}}{{/each_simple_value_with_index}}{{#each this.RESULTS.DATA}}\n|{{#each_simple_value_with_index this}} {{result_display_padded ../../this/RESULTS/COLUMNWIDTHS}} |{{/each_simple_value_with_index}}{{/each}}\n        </pre>\n    {{/if}}\n    {{#if this.SUCCEEDED}}\n    <div id="messages_{{index}}" class="alert alert-success database-messages">\n        <i class="icon-ok"></i>\n        Record Count: {{this.RESULTS.DATA.length}}; Execution Time: {{this.EXECUTIONTIME}}ms\n        {{#if this.EXECUTIONPLAN.DATA.length}}\n        <a href="#executionPlan" class="executionPlanLink"><i class="icon-plus"></i>View Execution Plan</a>\n        {{/if}}\n        <a href="#!{{../../schemaDef/dbType/id}}/{{../../schemaDef/short_code}}/{{../../id}}/{{index}}" class="setLink"><i class="icon-share-alt"></i> link</a>\n    </div>\n\n    {{#if this.EXECUTIONPLAN.DATA.length}}\n        <table class="executionPlan table table-bordered">\n            <tr>\n            {{#each this.EXECUTIONPLAN.COLUMNS}}\n            <th>{{this}}</th>\n            {{/each}}\n            </tr>\n            {{#each this.EXECUTIONPLAN.DATA}}\n            <tr>\n                {{#each this}}\n                <td><div style="position:relative">{{{this}}}</div></td>\n                {{/each}}\n            </tr>\n            {{/each}}\n\n            {{#if ../../../schemaDef/dbType/isPostgreSQL}}\n                <tr>\n                    <td><form action="http://explain.depesz.com/" target="_new"><input type="hidden" name="title" value="{{../../schemaDef/dbType/id}}/{{../../schemaDef/short_code}}/{{../../id}}/{{index}}"><input type="hidden" name="plan" value=""><input type="submit" class="btn btn-info depesz" value="View on Depesz"></form></td>\n                </tr>\n            {{/if}}\n\n        </table>\n    {{/if}}\n\n    {{else}}\n    <div id="messages_{{index}}" class="alert alert-error database-error database-messages"><i class="icon-remove"></i>{{this.ERRORMESSAGE}}</div>\n    {{/if}}\n</div>\n{{/each_with_index}}\n\n<span id="donationSuggestion">Did this query solve the problem? If so, consider donating $5 to help make sure SQL Fiddle will be here next time you need help with a database problem. Thanks!</span>\n'
}),
define("text!fiddle_backbone/templates/queryMarkdownOutput.html", [], function() {
    return 'Markdown is useful for posting on sites like <a href="http://stackoverflow.com" target="_new">StackOverflow</a> and <a href="http://dba.stackexchange.com" target="_new">dba.se</a>. Also, those sites are great resources for getting help with database questions!\n<pre class="results">[SQL Fiddle][1]\n\n**{{schemaDef.dbType.full_name}} Schema Setup**:\n\n{{code_format schemaDef.ddl}}\n{{#each_with_index sets}}\n**Query {{add index 1}}**:\n\n{{code_format STATEMENT}}\n\n**[Results][{{add index 2}}]**:\n\n    {{#if this.RESULTS.DATA.length}}\n    |{{#each_simple_value_with_index this.RESULTS.COLUMNS}} {{result_display_padded ../this/RESULTS/COLUMNWIDTHS}} |{{/each_simple_value_with_index}}\n    |{{#each_simple_value_with_index this.RESULTS.COLUMNS}}{{divider_display ../this/RESULTS/COLUMNWIDTHS}}{{/each_simple_value_with_index}}{{#each this.RESULTS.DATA}}\n    |{{#each_simple_value_with_index this}} {{result_display_padded ../../this/RESULTS/COLUMNWIDTHS}} |{{/each_simple_value_with_index}}{{/each}}\n{{/if}}\n{{/each_with_index}}\n\n  [1]: http://sqlfiddle.com/#!{{schemaDef/dbType/id}}/{{schemaDef/short_code}}/{{id}}\n{{#each_with_index sets}}\n  [{{add index 2}}]: http://sqlfiddle.com/#!{{../schemaDef/dbType/id}}/{{../schemaDef/short_code}}/{{../id}}/{{index}}\n{{/each_with_index}}\n</pre>\n\n<span id="donationSuggestion">Did this query solve the problem? If so, consider donating $5 to help make sure SQL Fiddle will be here next time you need help with a database problem. Thanks!</span>\n'
}),
define("fiddle_backbone/views/Query", ["jquery", "underscore", "Backbone", "Handlebars", "utils/fiddleEditor", "utils/renderTerminator", "XPlans/mssql", "text!fiddle_backbone/templates/queryTabularOutput.html", "text!fiddle_backbone/templates/queryPlaintextOutput.html", "text!fiddle_backbone/templates/queryMarkdownOutput.html"], function(e, t, n, r, i, o, s, a, l, u) {
    var c = n.View.extend({
        initialize: function(e) {
            this.options = e,
            this.editor = new i(this.id,this.handleQueryChange,this,t.bind(function() {
                this.model.execute()
            }, this)),
            this.outputType = "tabular",
            this.compiledOutputTemplate = {},
            this.compiledOutputTemplate.tabular = r.compile(a),
            this.compiledOutputTemplate.plaintext = r.compile(l),
            this.compiledOutputTemplate.markdown = r.compile(u)
        },
        setOutputType: function(e) {
            this.outputType = e
        },
        handleQueryChange: function(t) {
            var n = this.model.get("schemaDef");
            this.model.set({
                sql: this.editor.getValue()
            }),
            e(".sql .helpTip").css("display", !n.get("ready") || n.get("loading") || this.model.get("sql").length ? "none" : "block")
        },
        render: function() {
            this.editor.setValue(this.model.get("sql")),
            this.model.id && this.renderOutput(),
            o(e(".panel.sql"), this.model.get("statement_separator"))
        },
        renderOutput: function() {
            var n = this.model
              , r = this.model.toJSON()
              , i = this.options.dbTypes.getLatestDBTypeForSimpleName();
            t.each(r.sets, function(e, n) {
                if (e.RESULTS) {
                    var i = t.map(e.RESULTS.COLUMNS, function(e) {
                        return e.length
                    });
                    t.each(e.RESULTS.DATA, function(n, r) {
                        n = t.map(n, function(e) {
                            return null === e ? "(null)" : e
                        }),
                        e.RESULTS.DATA[r] = n,
                        i = t.map(n, function(e, n) {
                            return t.max([e.toString().length, i[n]])
                        })
                    }),
                    r.sets[n].RESULTS.COLUMNWIDTHS = i
                }
            }),
            r.latestDBType = i ? i.toJSON() : null,
            r.schemaDef = this.model.get("schemaDef").toJSON(),
            r.schemaDef.dbType = this.model.get("schemaDef").get("dbType").toJSON(),
            r.schemaDef.dbType.isSQLServer = "SQL Server" == this.model.get("schemaDef").get("dbType").get("simple_name"),
            r.schemaDef.dbType.isPostgreSQL = "PostgreSQL" == this.model.get("schemaDef").get("dbType").get("simple_name"),
            this.options.output_el.html(this.compiledOutputTemplate[this.outputType](r)),
            this.options.output_el.find("a.executionPlanLink").click(function(t) {
                t.preventDefault(),
                e("i", this).toggleClass("icon-minus icon-plus"),
                e(this).closest(".set").find(".executionPlan").toggle(),
                e("i", this).hasClass("icon-minus") && "SQL Server" == n.get("schemaDef").get("dbType").get("simple_name") && s.drawLines(e(this).closest(".set").find(".executionPlan div"))
            }),
            this.options.output_el.find(".convert-to-latest").click(t.bind(function(e) {
                e.preventDefault(),
                this.options.dbTypes.setSelectedType(i.get("db_type_id")),
                this.model.get("schemaDef").set("dbType", i).build().then(t.bind(function() {
                    this.model.get("schemaDef").get("ready") && this.model.execute()
                }, this))
            }, this))
        },
        refresh: function() {
            this.editor.refresh()
        },
        checkForSelectedText: function() {
            this.editor.somethingSelected() ? this.model.set("sql", this.editor.getSelection()) : this.model.set("sql", this.editor.getValue())
        }
    });
    return c
}),
define("utils/openidconnect", ["underscore", "jquery", "fiddle_backbone/models/OpenIDMResource"], function(e, t, n) {
    return {
        getCookies: function() {
            var t = document.cookie.split(";");
            return e.chain(t).map(function(e) {
                return e.split("=")
            }).object().value()
        },
        getSessionJWT: function() {
            return this.getCookies()["session-jwt"]
        },
        getURLParams: function() {
            return e.chain(window.location.search.replace(/^\?/, "").split("&")).map(function(e) {
                return e.split("=")
            }).object().value()
        },
        getCode: function() {
            return this.getURLParams().code
        },
        getRedirectUri: function() {
            return window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/(\/index\.html)|(\/$)/, "/oauth.html")
        },
        getMainUri: function() {
            return window.location.protocol + "//" + window.location.host + window.location.pathname.replace(/(\/oauth\.html)|(\/$)/, "/")
        },
        getToken: function() {
            var e = this.getURLParams();
            return n.serviceCall({
                type: "POST",
                url: "/oidc?_action=getToken&code=" + e.code + "&name=" + e.state + "&redirect_uri=" + this.getRedirectUri()
            }).then(function(e) {
                return localStorage.setItem("oidcToken", JSON.stringify(e)),
                e
            })
        },
        getTokenClaims: function(e) {
            var t = e && e.split(".");
            return t && 3 === t.length ? JSON.parse(atob(t[1])) : null
        },
        getLoggedUserDetails: function() {
            var r, i = this.getSessionJWT(), o = localStorage.getItem("oidcToken"), s = {};
            return o ? (o = JSON.parse(o),
            s[o.header] = o.token,
            r = this.getTokenClaims(o.token),
            r = e.transform(r, function(e, t, n) {
                e[n] = encodeURIComponent(t)
            }),
            n.serviceCall({
                url: "/login",
                headers: void 0 === i ? s : {}
            }).then(function(e) {
                return e.authorization.id !== encodeURIComponent(r.iss) + ":" + encodeURIComponent(r.sub) ? (localStorage.removeItem("oidcToken"),
                null) : r
            }, function() {
                localStorage.removeItem("oidcToken")
            })) : t.Deferred().reject()
        },
        removeTokens: function() {
            document.cookie = "session-jwt=;expires=" + new Date(0).toUTCString() + ";path=/;domain=;",
            localStorage.removeItem("oidcToken")
        }
    }
}),
define("text!fiddle_backbone/templates/login.html", [], function() {
    return '    <form class="form-horizontal login">\n        <input type="hidden" name="hash" value="" id="hash">\n        <div class="modal-header">\n            <a class="close" data-dismiss="modal">x</a>\n            <h3>Login to SQL Fiddle</h3>\n        </div>\n        <div class="modal-body">\n            <div class="control-group">\n                <label class="control-label">Choose OpenID Connect Authentication Provider: </label>\n                <div class="controls">\n\n                    {{#each resolvers}}\n\n                        <input type="image" src="{{icon}}" value="{{name}}" />\n\n                    {{/each}}\n\n                </div>\n            </div>\n        </div>\n\n    </form>'
}),
define("fiddle_backbone/views/LoginDialog", ["jquery", "underscore", "Backbone", "Handlebars", "utils/openidconnect", "text!../templates/login.html"], function(e, t, n, r, i, o) {
    var s = n.View.extend({
        initialize: function(e) {
            this.options = e,
            this.compiledTemplate = r.compile(o)
        },
        events: {
            "click input[type=image]": "redirectToIDP"
        },
        render: function() {
            return e(this.el).html(this.compiledTemplate({
                resolvers: this.collection.toJSON()
            })),
            this
        },
        redirectToIDP: function(t) {
            t.preventDefault();
            var n = this.collection.find(function(n) {
                return n.get("name") === e(t.target).val()
            });
            window.location.href = n.get("authorization_endpoint") + "?response_type=code&scope=openid%20profile%20email&redirect_uri=" + i.getRedirectUri() + "&state=" + n.get("name") + "&client_id=" + n.get("client_id")
        }
    });
    return s
}),
function(e) {
    "use strict";
    function t(e, t) {
        var n = (65535 & e) + (65535 & t)
          , r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | 65535 & n
    }
    function n(e, t) {
        return e << t | e >>> 32 - t
    }
    function r(e, r, i, o, s, a) {
        return t(n(t(t(r, e), t(o, a)), s), i)
    }
    function i(e, t, n, i, o, s, a) {
        return r(t & n | ~t & i, e, t, o, s, a)
    }
    function o(e, t, n, i, o, s, a) {
        return r(t & i | n & ~i, e, t, o, s, a)
    }
    function s(e, t, n, i, o, s, a) {
        return r(t ^ n ^ i, e, t, o, s, a)
    }
    function a(e, t, n, i, o, s, a) {
        return r(n ^ (t | ~i), e, t, o, s, a)
    }
    function l(e, n) {
        e[n >> 5] |= 128 << n % 32,
        e[(n + 64 >>> 9 << 4) + 14] = n;
        var r, l, u, c, h, d = 1732584193, f = -271733879, p = -1732584194, m = 271733878;
        for (r = 0; r < e.length; r += 16)
            l = d,
            u = f,
            c = p,
            h = m,
            d = i(d, f, p, m, e[r], 7, -680876936),
            m = i(m, d, f, p, e[r + 1], 12, -389564586),
            p = i(p, m, d, f, e[r + 2], 17, 606105819),
            f = i(f, p, m, d, e[r + 3], 22, -1044525330),
            d = i(d, f, p, m, e[r + 4], 7, -176418897),
            m = i(m, d, f, p, e[r + 5], 12, 1200080426),
            p = i(p, m, d, f, e[r + 6], 17, -1473231341),
            f = i(f, p, m, d, e[r + 7], 22, -45705983),
            d = i(d, f, p, m, e[r + 8], 7, 1770035416),
            m = i(m, d, f, p, e[r + 9], 12, -1958414417),
            p = i(p, m, d, f, e[r + 10], 17, -42063),
            f = i(f, p, m, d, e[r + 11], 22, -1990404162),
            d = i(d, f, p, m, e[r + 12], 7, 1804603682),
            m = i(m, d, f, p, e[r + 13], 12, -40341101),
            p = i(p, m, d, f, e[r + 14], 17, -1502002290),
            f = i(f, p, m, d, e[r + 15], 22, 1236535329),
            d = o(d, f, p, m, e[r + 1], 5, -165796510),
            m = o(m, d, f, p, e[r + 6], 9, -1069501632),
            p = o(p, m, d, f, e[r + 11], 14, 643717713),
            f = o(f, p, m, d, e[r], 20, -373897302),
            d = o(d, f, p, m, e[r + 5], 5, -701558691),
            m = o(m, d, f, p, e[r + 10], 9, 38016083),
            p = o(p, m, d, f, e[r + 15], 14, -660478335),
            f = o(f, p, m, d, e[r + 4], 20, -405537848),
            d = o(d, f, p, m, e[r + 9], 5, 568446438),
            m = o(m, d, f, p, e[r + 14], 9, -1019803690),
            p = o(p, m, d, f, e[r + 3], 14, -187363961),
            f = o(f, p, m, d, e[r + 8], 20, 1163531501),
            d = o(d, f, p, m, e[r + 13], 5, -1444681467),
            m = o(m, d, f, p, e[r + 2], 9, -51403784),
            p = o(p, m, d, f, e[r + 7], 14, 1735328473),
            f = o(f, p, m, d, e[r + 12], 20, -1926607734),
            d = s(d, f, p, m, e[r + 5], 4, -378558),
            m = s(m, d, f, p, e[r + 8], 11, -2022574463),
            p = s(p, m, d, f, e[r + 11], 16, 1839030562),
            f = s(f, p, m, d, e[r + 14], 23, -35309556),
            d = s(d, f, p, m, e[r + 1], 4, -1530992060),
            m = s(m, d, f, p, e[r + 4], 11, 1272893353),
            p = s(p, m, d, f, e[r + 7], 16, -155497632),
            f = s(f, p, m, d, e[r + 10], 23, -1094730640),
            d = s(d, f, p, m, e[r + 13], 4, 681279174),
            m = s(m, d, f, p, e[r], 11, -358537222),
            p = s(p, m, d, f, e[r + 3], 16, -722521979),
            f = s(f, p, m, d, e[r + 6], 23, 76029189),
            d = s(d, f, p, m, e[r + 9], 4, -640364487),
            m = s(m, d, f, p, e[r + 12], 11, -421815835),
            p = s(p, m, d, f, e[r + 15], 16, 530742520),
            f = s(f, p, m, d, e[r + 2], 23, -995338651),
            d = a(d, f, p, m, e[r], 6, -198630844),
            m = a(m, d, f, p, e[r + 7], 10, 1126891415),
            p = a(p, m, d, f, e[r + 14], 15, -1416354905),
            f = a(f, p, m, d, e[r + 5], 21, -57434055),
            d = a(d, f, p, m, e[r + 12], 6, 1700485571),
            m = a(m, d, f, p, e[r + 3], 10, -1894986606),
            p = a(p, m, d, f, e[r + 10], 15, -1051523),
            f = a(f, p, m, d, e[r + 1], 21, -2054922799),
            d = a(d, f, p, m, e[r + 8], 6, 1873313359),
            m = a(m, d, f, p, e[r + 15], 10, -30611744),
            p = a(p, m, d, f, e[r + 6], 15, -1560198380),
            f = a(f, p, m, d, e[r + 13], 21, 1309151649),
            d = a(d, f, p, m, e[r + 4], 6, -145523070),
            m = a(m, d, f, p, e[r + 11], 10, -1120210379),
            p = a(p, m, d, f, e[r + 2], 15, 718787259),
            f = a(f, p, m, d, e[r + 9], 21, -343485551),
            d = t(d, l),
            f = t(f, u),
            p = t(p, c),
            m = t(m, h);
        return [d, f, p, m]
    }
    function u(e) {
        var t, n = "";
        for (t = 0; t < 32 * e.length; t += 8)
            n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
    }
    function c(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0,
        t = 0; t < n.length; t += 1)
            n[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8)
            n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
    }
    function h(e) {
        return u(l(c(e), 8 * e.length))
    }
    function d(e, t) {
        var n, r, i = c(e), o = [], s = [];
        for (o[15] = s[15] = void 0,
        i.length > 16 && (i = l(i, 8 * e.length)),
        n = 0; 16 > n; n += 1)
            o[n] = 909522486 ^ i[n],
            s[n] = 1549556828 ^ i[n];
        return r = l(o.concat(c(t)), 512 + 8 * t.length),
        u(l(s.concat(r), 640))
    }
    function f(e) {
        var t, n, r = "0123456789abcdef", i = "";
        for (n = 0; n < e.length; n += 1)
            t = e.charCodeAt(n),
            i += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
        return i
    }
    function p(e) {
        return unescape(encodeURIComponent(e))
    }
    function m(e) {
        return h(p(e))
    }
    function g(e) {
        return f(m(e))
    }
    function v(e, t) {
        return d(p(e), p(t))
    }
    function y(e, t) {
        return f(v(e, t))
    }
    function b(e, t, n) {
        return t ? n ? v(t, e) : y(t, e) : n ? m(e) : g(e)
    }
    "function" == typeof define && define.amd ? define("md5", [], function() {
        return b
    }) : e.md5 = b
}(this),
define("text!fiddle_backbone/templates/loginButton.html", [], function() {
    return '<li id="userInfo">\n    <a href="#loginModal" data-toggle="modal"><i class="icon-user"></i>Login</a>\n</li>\n<li>\n    <a href="#" data-toggle="modal" id="myFiddles"><i class="icon-book"></i>My Fiddles</a>\n</li>'
}),
define("text!fiddle_backbone/templates/authenticatedUserOptions.html", [], function() {
    return '<li id="userInfo">\n    <img id="gravatar" src="http://www.gravatar.com/avatar/{{gravatar}}" alt="{{email}}\'s Gravatar" title="Personal Options" />\n    {{email}}\n</li>\n<li>\n    <a href="#logout" id="logout"><i class="icon-remove-circle"></i>Logout</a>\n</li>\n<li>\n    <a href="#" data-toggle="modal" id="myFiddles"><i class="icon-book"></i>My Fiddles</a>\n</li>\n\n'
}),
define("fiddle_backbone/views/UserOptions", ["jquery", "Backbone", "Handlebars", "md5", "utils/openidconnect", "text!fiddle_backbone/templates/loginButton.html", "text!fiddle_backbone/templates/authenticatedUserOptions.html"], function(e, t, n, r, i, o, s) {
    var a = t.View.extend({
        initialize: function(e) {
            this.options = e,
            this.authCompiledTemplate = n.compile(s),
            this.loginButtonCompiledTemplate = n.compile(o)
        },
        events: {
            "click #logout": "logout",
            "click #myFiddles": "showMyFiddles"
        },
        renderAnonymous: function() {
            return e(this.el).html(this.loginButtonCompiledTemplate()),
            this.options.oidc.fetch(),
            this
        },
        renderAuthenticated: function(t) {
            return e(this.el).html(this.authCompiledTemplate({
                gravatar: r(decodeURIComponent(t.email).toLowerCase()).toLowerCase(),
                email: decodeURIComponent(t.email)
            })),
            this
        },
        showMyFiddles: function(e) {
            e.preventDefault(),
            this.options.myFiddleDialog.render(!0)
        },
        logout: function(e) {
            e.preventDefault(),
            this.options.myFiddleDialog.setAnonymous(!0),
            i.removeTokens(),
            this.renderAnonymous()
        }
    });
    return a
}),
define("fiddle_backbone/models/FavoritesList", ["./OpenIDMResource", "Backbone", "./UsedFiddle"], function(e, t, n) {
    return t.Collection.extend({
        fetch: function() {
            var t = this;
            return e.serviceCall({
                url: "/favorites?_queryId=myFavorites"
            }).then(function(e) {
                return t.reset(_.map(e.result, function(e) {
                    return new n({
                        id: e._id,
                        fragment: "!" + e.db_type_id + "/" + e.short_code + (null !== e.query_id ? "/" + e.query_id : ""),
                        favorite: e.favorite,
                        num_accesses: e.num_accesses,
                        last_used: e.last_accessed,
                        full_name: e.full_name,
                        ddl: e.ddl,
                        sql: e.sql,
                        structure: e.structure,
                        sets: e.sets
                    })
                })),
                t
            })
        }
    })
}),
define("text!fiddle_backbone/templates/myFiddles.html", [], function() {
    return '<form>\n\n    <div class="modal-body tab-content">\n    \n    {{#if fiddles.length}}\n        \n    <table class="table table-striped" id="fiddle_history_table">\n        <thead>\n            <th>Database Type</th>\n            <th>Identifier</th>\n            <th>My Last Access</th>\n            <th colspan="3">&nbsp;</th>\n        </thead>\n        <tbody>\n        \n        {{#each fiddles}}\n            <tr class="schemaLog" schemaGroup="{{schemaGroup}}">\n                <td>{{full_name}}</td>\n                <td><a class="fiddleLink" href="#{{schemaFragment}}">#{{schemaFragment}}</a></td>\n                <td>{{last_used}}</td>\n                <td>&nbsp;</td>\n                <td>\n                    {{#if structure}}\n                        \n                        <div class="schemaPreviewWrapper">\n        \n                                <ul class="tables">\n                                    \n                                    {{#each structure}}\n                                    <li>\n                                        {{table_name}} ({{table_type}})\n                                        <ul class="columns">\n                                            {{#each columns}}\n                                            <li>{{name}} {{type}}</li>\n                                            {{/each}}\n                                        </ul>\n                                    </li>\n                                    {{/each}}\n                                    \n                                </ul>\n                        </div>  \n                        <a data-container="#myFiddlesModal" href="#{{schemaFragment}}" class="fiddleLink label label-info preview-schema popover-anchor">{{structure.length}} tables</a>\n\n                    {{else}}\n\n                        <div class="schemaPreviewWrapper">\n                            <div class="schemaPreview">\n                                {{ddl}}\n                            </div>\n                        </div>\n                        <a data-container="#myFiddlesModal" href="#{{schemaFragment}}" class="fiddleLink label label-info preview-ddl popover-anchor">preview ddl</a>\n\n                    {{/if}}\n                    \n                </td>\n    \n                <td>\n                    <button class="btn btn-mini btn-warning forgetSchema" schemaFragment="{{schemaFragment}}" title="This will remove the schema and all related queries from your list.">Forget Schema</button>\n                    {{#if hasMultipleQueries}}\n                        <button class="btn btn-mini showAll">Show All {{queries.length}} Queries</button>\n                    {{/if}}\n                </td>\n    \n            </tr>\n\n\n            {{#each queries}}\n                <tr class="queryLog for-schema-{{../schemaGroup}}{{#unless displayByDefault}} queryLog-hidden{{/unless}}" schemaGroup="{{../schemaGroup}}" fragment="{{fragment}}">\n                    <td>&nbsp;</td>\n                    <td><a class="fiddleLink" href="#{{fragment}}">#{{fragment}}</a></td>\n                    <td>{{last_used}}</td>\n                    <td class="favoriteLink">\n                        {{#if ../../anonymous}}\n                            <i class="icon-star-empty"></i>\n                        {{else}}\n                            {{#if favorite}}\n                                <a href="#toggleFavorite" favorite="true" fragment="{{fragment}}" title="Remove from favorites"><i class="icon-star"></i></a>\n                            {{else}}\n                                <a href="#toggleFavorite" favorite="false" fragment="{{fragment}}" title="Add to favorites"><i class="icon-star-empty"></i></a>\n                            {{/if}}\n                        {{/if}}\n                    </td>\n                    <td>\n                        {{#if sets}}\n\n                            <div class="resultSetWrapper">\n                                <ol class="resultSetPreview">\n                                    {{#each sets}}\n                                        <li class="statement_preview"><pre>{{statement_sql}}</pre></li>\n                                        {{#if succeeded}}\n                                            <li class="alert alert-success">Rows: {{row_count}} {{#if columns.length}} Cols: {{columns}}{{/if}}</li>\n                                        {{else}}\n                                            <li class="alert alert-error">{{error_message}}</li>\n                                        {{/if}}\n                                    {{/each}}\n                                </ol>\n                            </div>\n                            <a data-container="#myFiddlesModal" href="#{{fragment}}" class="fiddleLink label label-info result-sets popover-anchor">{{sets.length}} result sets</a>\n\n                        {{else}}\n\n                            <div class="resultSetWrapper">\n                                <div class="resultSetPreview">\n                                    {{sql}}\n                                </div>\n                            </div>\n                            <a data-container="#myFiddlesModal" href="#{{fragment}}" class="fiddleLink label label-info preview-sql popover-anchor">preview sql</a>\n\n                        {{/if}}\n                    </td>\n                    <td><button class="btn btn-mini btn-warning forgetQuery" fragment="{{fragment}}" title="This will remove this query from your list.">Forget This Query</button>{{#if ../hasMultipleQueries}}<button class="btn btn-mini btn-warning forgetOtherQueries" fragment="{{fragment}}" schemaFragment="{{../schemaFragment}}" title="This will remove all other queries for this schema from your list.">Forget Others</button>{{/if}}</td>\n                </tr>\n            {{/each}}\n\n        {{/each}}\n        </tbody>\n    </table>\n\n        {{#if anonymous}}\n            <div class="alert">\n                <strong>Tip for anonymous users:</strong>\n                These fiddle links will only be bookmarked here until you close your browser. If you want to save them longer than that, you have to login and "favorite" them by clicking on the star.\n            </div>\n        {{/if}}\n\n    {{else}}\n\n        <div class="alert">\n          <h4 class="alert-heading">No Fiddles Found!</h4> Why not try a sample fiddle to get some wheels turning?\n        </div>\n\n    {{/if}}\n\n    </div>\n\n</form>'
}),
define("fiddle_backbone/views/MyFiddleDialog", ["jquery", "underscore", "Backbone", "Handlebars", "../models/FavoritesList", "text!../templates/myFiddles.html"], function(e, t, n, r, i, o) {
    var s = n.View.extend({
        initialize: function(e) {
            this.options = e,
            this.compiledMyFiddlesTemplate = r.compile(o)
        },
        groupHistory: function(e) {
            return t.chain(e).groupBy(function(e) {
                return /^(!\d+\/[^\/]+)/.exec(e.fragment)[0]
            }).pairs().map(function(e) {
                var n = t.chain(e[1]).sortBy(function(e) {
                    return -new Date(e.last_used).getTime()
                }).map(function(e) {
                    return e.dashFragment = e.fragment.replace(/\//g, "-"),
                    e.sql = e.sql.substring(0, 400),
                    e.last_used = new Date(e.last_used).format("mmm d, yyyy HH:MM:ss"),
                    e
                }).value()
                  , r = t.chain(n).filter(function(e) {
                    return 3 === e.fragment.split("/").length
                }).map(function(e, t) {
                    return e.displayByDefault = 0 === t || e.favorite,
                    e
                }).value();
                return t.extend({
                    schemaFragment: e[0],
                    schemaGroup: e[0].replace("!", "").replace(/\//g, "-"),
                    queries: r,
                    hasMultipleQueries: r.length > 1
                }, n[0])
            }).sortBy(function(e) {
                return -new Date(e.last_used).getTime()
            }).value()
        },
        events: {
            "click .showAll": "showAllFiddlesForSchema",
            "click a.fiddleLink": "showFiddle",
            "click .favoriteLink a": "toggleFavorite",
            "click button.forgetSchema": "forgetSchema",
            "click button.forgetQuery": "forgetQuery",
            "click button.forgetOtherQueries": "forgetOtherQueries"
        },
        render: function(t) {
            return this.$el.find("#fiddle_history").html(this.compiledMyFiddlesTemplate({
                fiddles: this.groupHistory(this.collection.toJSON()),
                anonymous: this.isAnonymous
            })),
            this.isAnonymous ? (this.$el.find("#favorites_tab").addClass("disabled"),
            this.$el.find("#favorites_tab a").removeAttr("data-toggle").removeAttr("href")) : (this.$el.find("#favorites_tab").removeClass("disabled"),
            this.$el.find("#favorites_tab a").attr("data-toggle", "tab").attr("href", "#favorites"),
            console.log(this.favoritesList.toJSON()),
            this.$el.find("#favorites").html(this.compiledMyFiddlesTemplate({
                fiddles: this.groupHistory(this.favoritesList.toJSON()),
                anonymous: !1
            }))),
            t && this.$el.modal("show"),
            e(".preview-schema", this.$el).popover({
                trigger: "hover",
                html: "true",
                placement: "left",
                title: "Schema Structure",
                content: function() {
                    return e(this).closest("td").find(".schemaPreviewWrapper").html()
                }
            }),
            e(".preview-ddl", this.$el).popover({
                trigger: "hover",
                html: "true",
                placement: "left",
                title: "Schema DDL",
                content: function() {
                    return e(this).closest("td").find(".schemaPreviewWrapper").html()
                }
            }),
            e(".result-sets", this.$el).popover({
                trigger: "hover",
                html: "true",
                placement: "left",
                title: "Query Results",
                content: function() {
                    return e(this).closest("td").find(".resultSetWrapper").html()
                }
            }),
            e(".preview-sql", this.$el).popover({
                trigger: "hover",
                html: "true",
                placement: "left",
                title: "SQL Statements",
                content: function() {
                    return e(this).closest("td").find(".resultSetWrapper").html()
                }
            }),
            this
        },
        showAllFiddlesForSchema: function(t) {
            t.preventDefault(),
            this.$el.find("tr.for-schema-" + e(t.target).closest("tr").attr("schemaGroup")).show("fast")
        },
        showFiddle: function(e) {
            this.$el.modal("hide")
        },
        forgetSchema: function(n) {
            n.preventDefault();
            var r = e(n.target).attr("schemaFragment")
              , i = this.collection.toJSON();
            this.collection.reset(t.reject(i, function(e) {
                return e.fragment.match(new RegExp(r + "(/[^/]+)?$"))
            })),
            this.render()
        },
        forgetQuery: function(n) {
            n.preventDefault();
            var r = e(n.target).attr("fragment")
              , i = this.collection.toJSON();
            this.collection.reset(t.reject(i, function(e) {
                return e.fragment === r
            })),
            this.render()
        },
        forgetOtherQueries: function(n) {
            n.preventDefault();
            var r = e(n.target).attr("fragment")
              , i = e(n.target).attr("schemaFragment")
              , o = this.collection.toJSON();
            this.collection.reset(t.reject(o, function(e) {
                return e.fragment.match(new RegExp(i + "/[^/]+$")) && e.fragment !== r
            })),
            this.render()
        },
        setAnonymous: function(e) {
            this.isAnonymous = e,
            e ? (delete this.favoritesList,
            this.render()) : (this.favoritesList = new i,
            this.favoritesList.fetch().then(t.bind(function() {
                this.render()
            }, this)))
        },
        toggleFavorite: function(t) {
            e(t.target).attr("fragment");
            t.preventDefault()
        }
    });
    return s
}),
define("fiddle_backbone/router", ["./models/OpenIDMResource", "jquery", "underscore", "Backbone", "utils/renderTerminator", "./models/UsedFiddle"], function(e, t, n, r, i, o) {
    var s = function(s, a, l, u, c) {
        var h = r.Router.extend({
            routes: {
                "!:db_type_id": "DBType",
                "!:db_type_id/:short_code": "SchemaDef",
                "!:db_type_id/:short_code/:query_id": "Query",
                "!:db_type_id/:short_code/:query_id/:set_id": "SetAnchor"
            },
            DBType: function(e) {
                s.setSelectedType(parseInt(e), !0),
                a.set({
                    dbType: s.getSelectedType()
                }),
                c.render()
            },
            SchemaDef: function(e, t) {
                this.loadContent(e, "!" + e + "/" + t)
            },
            Query: function(e, t, n) {
                this.loadContent(e, "!" + e + "/" + t + "/" + n)
            },
            SetAnchor: function(e, r, i, o) {
                var u = function() {
                    t("#set_" + o).length && (window.scrollTo(0, t("#set_" + o).offset().top - 50),
                    t("#set_" + o).addClass("highlight"))
                };
                s.getSelectedType() && s.getSelectedType().get("id") === e && a.get("short_code") === r && l.get("id") === i ? (t(".set").removeClass("highlight"),
                u()) : (l.bind("reloaded", n.once(u)),
                this.loadContent(e, "!" + e + "/" + r + "/" + i))
            },
            loadContent: function(r, c) {
                return this.DBType(r),
                l.get("pendingChanges") && !confirm("Warning! You have made changes to your query which will be lost. Continue?'") ? !1 : (a.set("loading", !0),
                t(".helpTip").css("display", "none"),
                t("body").block({
                    message: "Loading..."
                }),
                e.serviceCall({
                    url: "/loadContent/" + c.replace(/^!/, "")
                }).then(function(e) {
                    if (a.set("loading", !1),
                    e.short_code) {
                        var c = s.getSelectedType();
                        "browser" === c.get("context") ? a.get("browserEngines")[c.get("classname")].buildSchema({
                            short_code: t.trim(e.short_code),
                            statement_separator: e.schema_statement_separator,
                            ddl: e.ddl,
                            success: function() {
                                a.set({
                                    short_code: e.short_code,
                                    ddl: e.ddl,
                                    ready: !0,
                                    valid: !0,
                                    errorMessage: "",
                                    statement_separator: e.schema_statement_separator,
                                    dbType: s.getSelectedType()
                                }),
                                i(t(".panel.schema"), e.schema_statement_separator),
                                e.sql ? (u.insert(new o({
                                    fragment: "!" + r + "/" + e.short_code + "/" + e.id
                                })),
                                l.set({
                                    id: e.id,
                                    sql: e.sql,
                                    statement_separator: e.query_statement_separator
                                })) : u.insert(new o({
                                    fragment: "!" + r + "/" + e.short_code
                                })),
                                a.get("browserEngines")[c.get("classname")].getSchemaStructure({
                                    callback: function(n) {
                                        a.set({
                                            schema_structure: n
                                        }),
                                        a.trigger("reloaded"),
                                        e.sql ? a.get("browserEngines")[c.get("classname")].executeQuery({
                                            sql: e.sql,
                                            statement_separator: e.query_statement_separator,
                                            success: function(e) {
                                                l.set({
                                                    sets: e
                                                }),
                                                l.trigger("reloaded"),
                                                t("body").unblock()
                                            },
                                            error: function(e) {
                                                l.set({
                                                    sets: []
                                                }),
                                                l.trigger("reloaded"),
                                                t("body").unblock()
                                            }
                                        }) : t("body").unblock()
                                    }
                                })
                            },
                            error: function(n) {
                                a.set({
                                    short_code: e.short_code,
                                    ddl: e.ddl,
                                    ready: !0,
                                    valid: !1,
                                    errorMessage: n,
                                    dbType: s.getSelectedType(),
                                    statement_separator: e.schema_statement_separator,
                                    schema_structure: []
                                }),
                                i(t(".panel.schema"), e.schema_statement_separator),
                                e.sql && (l.set({
                                    id: e.id,
                                    sql: e.sql,
                                    statement_separator: e.query_statement_separator,
                                    schemaDef: a
                                }),
                                l.trigger("reloaded")),
                                a.trigger("failed"),
                                a.trigger("reloaded"),
                                t("body").unblock()
                            }
                        }) : (e.sets = e.sets || [],
                        a.set({
                            short_code: e.short_code,
                            ddl: e.ddl,
                            ready: !0,
                            valid: !0,
                            errorMessage: "",
                            statement_separator: e.schema_statement_separator,
                            schema_structure: e.schema_structure
                        }),
                        i(t(".panel.schema"), e.schema_statement_separator),
                        a.trigger("reloaded"),
                        e.sql ? (u.insert(new o({
                            fragment: "!" + r + "/" + e.short_code + "/" + e.id,
                            full_name: e.full_name,
                            structure: e.schema_structure,
                            sql: e.sql,
                            sets: n.map(e.sets, function(e) {
                                return {
                                    succeeded: e.SUCCEEDED,
                                    statement_sql: e.STATEMENT ? e.STATEMENT.substring(0, 400) : "",
                                    row_count: e.RESULTS ? e.RESULTS.DATA.length : null,
                                    columns: e.RESULTS ? e.RESULTS.COLUMNS.join(", ") : null,
                                    error_message: e.ERRORMESSAGE
                                }
                            })
                        })),
                        l.set({
                            id: e.id,
                            sql: e.sql,
                            sets: e.sets,
                            statement_separator: e.query_statement_separator
                        }),
                        l.trigger("reloaded")) : u.insert(new o({
                            fragment: "!" + r + "/" + e.short_code,
                            full_name: e.full_name,
                            structure: e.schema_structure
                        })),
                        t("body").unblock())
                    } else
                        t("body").unblock()
                }))
            }
        })
          , d = new h;
        return r.history.start({
            pushState: !1
        }),
        d
    };
    return {
        initialize: s
    }
}),
define("fiddle_backbone/app", ["utils/browserEngines/engines", "./models/OpenIDConnectProviders", "./models/UsedFiddle", "./models/MyFiddleHistory", "./models/DBTypesList", "./models/SchemaDef", "./models/Query", "./views/DBTypesList", "./views/SchemaDef", "./views/Query", "./views/LoginDialog", "./views/UserOptions", "./views/MyFiddleDialog", "./router", "utils/renderTerminator", "utils/openidconnect", "underscore", "jquery"], function(e, t, n, r, i, o, s, a, l, u, c, h, d, f, p, m, g, v) {
    var y = {
        initialize: function() {
            var t = {}
              , c = new r
              , h = new i
              , m = new o({
                browserEngines: e
            })
              , y = new s({
                schemaDef: m
            })
              , b = new a({
                el: v("#db_type_id")[0],
                collection: h
            })
              , x = new l({
                id: "schema_ddl",
                model: m,
                output_el: v("#output"),
                browser_el: v("#browser")
            })
              , w = new u({
                id: "sql",
                dbTypes: h,
                model: y,
                output_el: v("#output")
            });
            new d({
                el: v("#myFiddlesModal")[0],
                collection: c
            });
            h.on("change", function() {
                b.render(),
                m.has("dbType") && m.set("ready", m.get("short_code").length && m.get("dbType").id === this.getSelectedType().id)
            }),
            m.on("change", function() {
                this.hasChanged("ready") && x.updateDependents(),
                this.hasChanged("errorMessage") && x.renderOutput(),
                this.hasChanged("schema_structure") && x.renderSchemaBrowser()
            }),
            m.on("reloaded", function() {
                this.set("dbType", h.getSelectedType()),
                x.render()
            }),
            y.on("reloaded", function() {
                this.set({
                    pendingChanges: !1
                }, {
                    silent: !0
                }),
                w.render()
            }),
            m.on("built failed", function() {
                v("#buildSchema label").prop("disabled", !1),
                v("#buildSchema label").html(v("#buildSchema label").data("originalValue")),
                x.renderOutput(),
                x.renderSchemaBrowser()
            }),
            y.on("change", function() {
                !this.hasChanged("sql") && !this.hasChanged("statement_separator") || this.hasChanged("id") || this.get("pendingChanges") || this.set({
                    pendingChanges: !0
                }, {
                    silent: !0
                })
            }),
            y.on("executed", function() {
                var e = v(".runQuery");
                e.prop("disabled", !1),
                e.html(e.data("originalValue")),
                this.set({
                    pendingChanges: !1
                }, {
                    silent: !0
                }),
                w.renderOutput()
            }),
            v("#buildSchema").click(function(e) {
                var t = v("label", this);
                return e.preventDefault(),
                t.prop("disabled") ? !1 : (t.data("originalValue", t.html()),
                t.prop("disabled", !0).text("Building Schema..."),
                void m.build())
            });
            var _ = function(e) {
                var t = v(".runQuery");
                return e.preventDefault(),
                t.prop("disabled") ? !1 : (t.data("originalValue", t.html()),
                t.prop("disabled", !0).text("Executing SQL..."),
                w.checkForSelectedText(),
                void y.execute())
            };
            return v(".runQuery").click(_),
            v(document).keyup(function(e) {
                116 == e.keyCode && (e.preventDefault(),
                _(e))
            }),
            v("#runQueryOptions li a").click(function(e) {
                e.preventDefault(),
                w.setOutputType(this.id),
                w.renderOutput()
            }),
            v(".terminator .dropdown-menu a").on("click", function(e) {
                e.preventDefault(),
                p(v(this).closest(".panel"), v(this).attr("href")),
                v(this).closest(".panel").hasClass("schema") ? x.handleSchemaChange() : y.set({
                    pendingChanges: !0,
                    statement_separator: v(this).attr("href")
                }, {
                    silent: !0
                })
            }),
            v("#output").on("click", ".depesz", function(e) {
                var t = v(this).closest(".set").find(".executionPlan tr:not(:first)").text();
                v(this).closest("form").find("[name=plan]").val(t)
            }),
            v(window).bind("beforeunload", function() {
                return y.get("pendingChanges") ? "Warning! You have made changes to your query which will be lost. Continue?'" : void 0
            }),
            h.on("reset", function() {
                t = f.initialize(h, m, y, c, b),
                this.length && !this.getSelectedType() && this.setSelectedType(this.first().id, !0),
                m.set({
                    dbType: this.getSelectedType()
                }, {
                    silent: !0
                }),
                b.render(),
                x.render(),
                w.render()
            }),
            c.on("change reset remove", c.sync, c),
            v("#clear").click(function(e) {
                e.preventDefault(),
                m.reset(),
                y.reset(),
                v("body").unblock(),
                t.navigate("!" + h.getSelectedType().id, {
                    trigger: !0
                })
            }),
            v("#sample").click(function(e) {
                e.preventDefault(),
                t.navigate("!" + h.getSelectedType().get("sample_fragment"), {
                    trigger: !0
                })
            }),
            h.on("change", function() {
                b.render(),
                y.id && m.get("short_code").length && m.get("dbType").id === this.getSelectedType().id ? t.navigate("!" + this.getSelectedType().id + "/" + m.get("short_code") + "/" + y.id) : m.get("short_code").length && m.get("dbType").id == this.getSelectedType().id ? t.navigate("!" + this.getSelectedType().id + "/" + m.get("short_code")) : t.navigate("!" + this.getSelectedType().id),
                m.set("dbType", this.getSelectedType())
            }),
            m.on("built", function() {
                c.insert(new n({
                    fragment: "!" + this.get("dbType").id + "/" + this.get("short_code"),
                    full_name: this.get("dbType").get("full_name"),
                    structure: this.get("schema_structure")
                })),
                t.navigate("!" + this.get("dbType").id + "/" + this.get("short_code"))
            }),
            y.on("executed", function() {
                var e = this.get("schemaDef");
                this.id && (c.insert(new n({
                    fragment: "!" + e.get("dbType").id + "/" + e.get("short_code") + "/" + this.id,
                    full_name: e.get("dbType").get("full_name"),
                    structure: e.get("schema_structure"),
                    sql: this.get("sql"),
                    sets: g.map(this.get("sets"), function(e) {
                        return {
                            succeeded: e.SUCCEEDED,
                            statement_sql: e.STATEMENT.substring(0, 400),
                            row_count: e.RESULTS.DATA.length,
                            columns: e.RESULTS.COLUMNS.join(", "),
                            error_message: e.ERRORMESSAGE
                        }
                    })
                })),
                t.navigate("!" + e.get("dbType").id + "/" + e.get("short_code") + "/" + this.id))
            }),
            h.fetch(),
            g.extend(this, {
                dbTypes: h,
                schemaDef: m,
                schemaDefView: x,
                queryView: w
            }),
            this
        }
    };
    return y
});
var dateFormat = function() {
    var e = /d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g
      , t = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[-+]\d{4})?)\b/g
      , n = /[^-+\dA-Z]/g
      , r = function(e, t) {
        for (e = String(e),
        t = t || 2; e.length < t; )
            e = "0" + e;
        return e
    };
    return function(i, o, s) {
        var a = dateFormat;
        if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(i) || /\d/.test(i) || (o = i,
        i = void 0),
        i = i ? new Date(i) : new Date,
        isNaN(i))
            throw SyntaxError("invalid date");
        o = String(a.masks[o] || o || a.masks["default"]),
        "UTC:" == o.slice(0, 4) && (o = o.slice(4),
        s = !0);
        var l = s ? "getUTC" : "get"
          , u = i[l + "Date"]()
          , c = i[l + "Day"]()
          , h = i[l + "Month"]()
          , d = i[l + "FullYear"]()
          , f = i[l + "Hours"]()
          , p = i[l + "Minutes"]()
          , m = i[l + "Seconds"]()
          , g = i[l + "Milliseconds"]()
          , v = s ? 0 : i.getTimezoneOffset()
          , y = {
            d: u,
            dd: r(u),
            ddd: a.i18n.dayNames[c],
            dddd: a.i18n.dayNames[c + 7],
            m: h + 1,
            mm: r(h + 1),
            mmm: a.i18n.monthNames[h],
            mmmm: a.i18n.monthNames[h + 12],
            yy: String(d).slice(2),
            yyyy: d,
            h: f % 12 || 12,
            hh: r(f % 12 || 12),
            H: f,
            HH: r(f),
            M: p,
            MM: r(p),
            s: m,
            ss: r(m),
            l: r(g, 3),
            L: r(g > 99 ? Math.round(g / 10) : g),
            t: 12 > f ? "a" : "p",
            tt: 12 > f ? "am" : "pm",
            T: 12 > f ? "A" : "P",
            TT: 12 > f ? "AM" : "PM",
            Z: s ? "UTC" : (String(i).match(t) || [""]).pop().replace(n, ""),
            o: (v > 0 ? "-" : "+") + r(100 * Math.floor(Math.abs(v) / 60) + Math.abs(v) % 60, 4),
            S: ["th", "st", "nd", "rd"][u % 10 > 3 ? 0 : (u % 100 - u % 10 != 10) * u % 10]
        };
        return o.replace(e, function(e) {
            return e in y ? y[e] : e.slice(1, e.length - 1)
        })
    }
}();
dateFormat.masks = {
    "default": "ddd mmm dd yyyy HH:MM:ss",
    shortDate: "m/d/yy",
    mediumDate: "mmm d, yyyy",
    longDate: "mmmm d, yyyy",
    fullDate: "dddd, mmmm d, yyyy",
    shortTime: "h:MM TT",
    mediumTime: "h:MM:ss TT",
    longTime: "h:MM:ss TT Z",
    isoDate: "yyyy-mm-dd",
    isoTime: "HH:MM:ss",
    isoDateTime: "yyyy-mm-dd'T'HH:MM:ss",
    isoUtcDateTime: "UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"
},
dateFormat.i18n = {
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
},
Date.prototype.format = function(e, t) {
    return dateFormat(this, e, t)
}
,
define("DateFormat", function(e) {
    return function() {
        var t;
        return t || e.dateFormat
    }
}(this)),
define("text!DDLBuilder/templates/generic.sql", [], function() {
    return "CREATE TABLE {{{tablePrefix}}}{{tableName}}{{{tableSuffix}}}\n    ({{#each_with_index columns}}{{#if index}}, {{/if}}{{{../fieldPrefix}}}{{name}}{{{../fieldSuffix}}} {{db_type}}{{/each_with_index}})\n{{separator}}\n    \nINSERT INTO {{{tablePrefix}}}{{tableName}}{{{tableSuffix}}}\n    ({{#each_with_index columns}}{{#if index}}, {{/if}}{{{../fieldPrefix}}}{{name}}{{{../fieldSuffix}}}{{/each_with_index}})\nVALUES\n    {{#each_with_index data}}{{#if index}},\n    {{/if}}({{#each_with_index r}}{{#if index}}, {{/if}}{{formatted_field ../..}}{{/each_with_index}}){{/each_with_index}}\n{{separator}}\n"
}),
define("text!DDLBuilder/templates/oracle.sql", [], function() {
    return "CREATE TABLE {{{tablePrefix}}}{{tableName}}{{{tableSuffix}}}\n    ({{#each_with_index columns}}{{#if index}}, {{/if}}{{{../fieldPrefix}}}{{name}}{{{../fieldSuffix}}} {{db_type}}{{/each_with_index}})\n{{separator}}\n\nINSERT ALL {{#each_with_index data}}\n    INTO {{{../tablePrefix}}}{{../tableName}}{{{../tableSuffix}}} ({{#each_with_index r}}{{#if index}}, {{/if}}{{{../../fieldPrefix}}}{{column_name_for_index ../..}}{{{../../fieldSuffix}}}{{/each_with_index}})\n         VALUES ({{#each_with_index r}}{{#if index}}, {{/if}}{{formatted_field ../..}}{{/each_with_index}}){{/each_with_index}}\nSELECT * FROM dual\n{{separator}}"
}),
define("text!DDLBuilder/templates/sqlite.sql", [], function() {
    return "CREATE TABLE {{tablePrefix}}{{tableName}}{{tableSuffix}}\n    ({{#each_with_index columns}}{{#if index}}, {{/if}}{{{../fieldPrefix}}}{{name}}{{{../fieldSuffix}}} {{db_type}}{{/each_with_index}})\n{{separator}}\n\n{{#each_with_index data}}\nINSERT INTO {{tablePrefix}}{{../tableName}}{{tableSuffix}}\n    ({{#each_with_index ../columns}}{{#if index}}, {{/if}}{{{../../fieldPrefix}}}{{name}}{{{../../fieldSuffix}}}{{/each_with_index}})\nVALUES\n    ({{#each_with_index r}}{{#if index}}, {{/if}}{{formatted_field ../..}}{{/each_with_index}})\n{{../separator}}\n\n{{/each_with_index}}"
}),
define("DDLBuilder/ddl_builder", ["jquery", "Handlebars", "DateFormat", "text!./templates/generic.sql", "text!./templates/oracle.sql", "text!./templates/sqlite.sql"], function(e, t, n, r, i, o) {
    return ddl_builder = function(e) {
        return e || (e = {}),
        this.fieldPrefix = "",
        this.fieldSuffix = "",
        this.tablePrefix = "",
        this.tableSuffix = "",
        this.dateFormatMask = "yyyy-mm-dd HH:MM:ss",
        this.charType = "varchar",
        this.intType = "int",
        this.floatType = "numeric",
        this.dateType = "datetime",
        this.valueSeparator = "",
        this.column_count = 0,
        this.definition = {
            tableName: "Table1",
            columns: [],
            data: []
        },
        this.ddlTemplate = r,
        this.compiledTemplate = t.compile(this.ddlTemplate),
        this.setup(e),
        this
    }
    ,
    ddl_builder.prototype.setup = function(e) {
        for (var n in e)
            this[n] = e[n];
        return e.ddlTemplate && (this.compiledTemplate = t.compile(this.ddlTemplate)),
        e.tableName && (this.definition.tableName = e.tableName),
        this
    }
    ,
    ddl_builder.prototype.setupForDBType = function(e, t) {
        switch (e) {
        case "SQL Server":
            this.setup({
                statement_separator: t,
                fieldPrefix: "[",
                fieldSuffix: "]",
                tablePrefix: "[",
                tableSuffix: "]"
            });
            break;
        case "MySQL":
            this.setup({
                statement_separator: t,
                fieldPrefix: "`",
                fieldSuffix: "`",
                tablePrefix: "`",
                tableSuffix: "`"
            });
            break;
        case "PostgreSQL":
            this.setup({
                statement_separator: t,
                dateType: "timestamp",
                fieldPrefix: '"',
                fieldSuffix: '"'
            });
            break;
        case "Oracle":
            var n = i;
            this.setup({
                dateFormatMask: "dd-mmm-yyyy hh:MM:ss TT",
                statement_separator: t,
                ddlTemplate: n,
                dateType: "timestamp",
                charType: "varchar2",
                fieldPrefix: '"',
                fieldSuffix: '"'
            });
            break;
        case "SQLite":
            var n = o;
            this.setup({
                fieldPrefix: '"',
                fieldSuffix: '"',
                tablePrefix: '"',
                tableSuffix: '"',
                statement_separator: t,
                ddlTemplate: n,
                dateType: "DATE",
                charType: "TEXT",
                intType: "INTEGER",
                floatType: "REAL"
            })
        }
        return this
    }
    ,
    ddl_builder.prototype.populateDBTypes = function() {
        for (var e = 0; e < this.definition.columns.length; e++)
            "charType" == this.definition.columns[e].type ? this.definition.columns[e].db_type = this[this.definition.columns[e].type] + "(" + this.definition.columns[e].length + ")" : this.definition.columns[e].db_type = this[this.definition.columns[e].type];
        this.definition.dateFormatMask = this.dateFormatMask
    }
    ,
    ddl_builder.prototype.populateWrappers = function() {
        this.definition.fieldPrefix = this.fieldPrefix,
        this.definition.fieldSuffix = this.fieldSuffix
    }
    ,
    ddl_builder.prototype.guessValueSeparator = function(t) {
        for (var n = t.split("\n"), r = !1, i = 0, o = "", s = 0; s < n.length; s++)
            if (-1 == n[s].search(/[A-Z0-9_]/i) || r) {
                if (-1 != n[s].search(/[A-Z0-9_]/i) && e.trim(n[s]).split(o).length != i && (o.toString() != /\s\s+/.toString() || e.trim(n[s]).split(/\s+/).length != i))
                    return {
                        status: !1,
                        message: "Line " + s + ' does not have the same number of columns as the header, based on separator "' + o + '".'
                    }
            } else {
                var a = e.trim(n[s]).match(/([A-Z0-9_]+ ?)+([^A-Z0-9_]*)/gi);
                1 == a.length && (a = e.trim(n[s]).match(/([A-Z0-9_]+ ?)+?([^A-Z0-9_]*)/gi)),
                r = !0;
                for (var l = 0; l < a.length; l++) {
                    var u = a[l].match(/[A-Z0-9_]+([^A-Z0-9_]*)$/i).pop();
                    if (u = -1 != u.search(/^\s\s+$/) ? new RegExp("\\s\\s+") : -1 != u.search(/^\t+$/) ? new RegExp("\\t+") : -1 != u.search(/^\s+$/) ? new RegExp("\\s+") : e.trim(u),
                    u instanceof RegExp || u.length)
                        if (o instanceof RegExp || o.length) {
                            if (o.toString() != u.toString())
                                return {
                                    status: !1,
                                    message: "Unable to find consistent column separator in header row"
                                }
                        } else
                            o = u;
                    else
                        u instanceof RegExp || o instanceof RegExp || o.length || (o = "\n")
                }
                i = o instanceof RegExp || o.length ? e.trim(n[s]).split(o).length : 1
            }
        return {
            status: !0,
            separator: o,
            column_count: i
        }
    }
    ,
    ddl_builder.prototype.parse = function(t) {
        var n = /^(?!Jan)(?!Feb)(?!Mar)(?!Apr)(?!May)(?!Jun)(?!Jul)(?!Aug)(?!Sep)(?!Oct)(?!Nov)(?!Dec)[A-Za-z\ \-\_]+\d+\s*$/
          , r = {}
          , i = []
          , o = []
          , s = []
          , a = 0
          , l = 0
          , u = "";
        if (!this.valueSeparator.length) {
            if (r = this.guessValueSeparator(t),
            !r.status)
                return "ERROR! " + r.message;
            this.column_count = r.column_count,
            this.valueSeparator = r.separator
        }
        for (i = t.split("\n"),
        a = 0; a < i.length; a++)
            if (o = e.trim(i[a]).split(this.valueSeparator),
            e.trim(i[a]).length && (o.length == this.column_count || this.valueSeparator.toString() == /\s\s+/.toString() && (o = e.trim(i[a]).split(/\s+/)).length == this.column_count))
                if (this.definition.columns.length) {
                    for (s = [],
                    l = 0; l < o.length; l++)
                        this.definition.columns[l] !== !1 && (u = e.trim(o[l]).replace(/'/g, "''"),
                        isNaN(u) || "dateType" == this.definition.columns[l].type || "charType" == this.definition.columns[l].type ? "charType" == this.definition.columns[l].type || isNaN(Date.parse("UTC:" + u)) || u.match(n) ? this.definition.columns[l].type = "charType" : this.definition.columns[l].type = "dateType" : "floatType" != this.definition.columns[l].type && u % 1 != 0 ? this.definition.columns[l].type = "floatType" : this.definition.columns[l].type = "intType",
                        (!this.definition.columns[l].length || u.length > this.definition.columns[l].length) && (this.definition.columns[l].length = u.length),
                        s.push({
                            v: u
                        }));
                    this.definition.data.push({
                        r: s
                    })
                } else
                    for (l = 0; l < o.length; l++)
                        u = e.trim(o[l]),
                        u.length ? this.definition.columns.push({
                            name: u
                        }) : this.definition.columns.push(!1);
        return this.populateDBTypes(),
        this.populateWrappers(),
        this.render()
    }
    ,
    t.registerHelper("formatted_field", function(e) {
        for (var r = "", i = -1, o = 0; o < e.columns.length; o++)
            if (e.columns[o] && i++,
            i == this.index) {
                r = e.columns[o].type;
                break
            }
        return this.v.length && "NULL" != this.v.toUpperCase() ? "charType" == r ? new t.SafeString("'" + this.v + "'") : "dateType" == r ? new t.SafeString("'" + n("UTC:" + this.v, e.dateFormatMask) + "'") : this.v : "NULL"
    }),
    t.registerHelper("column_name_for_index", function(e) {
        return e.columns[this.index].name
    }),
    ddl_builder.prototype.render = function() {
        return this.compiledTemplate(e.extend(this.definition, {
            separator: this.statement_separator
        }))
    }
    ,
    ddl_builder
}),
!function(e) {
    "use strict";
    e(function() {
        e.support.transition = function() {
            var e = function() {
                var e, t = document.createElement("bootstrap"), n = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
                for (e in n)
                    if (void 0 !== t.style[e])
                        return n[e]
            }();
            return e && {
                end: e
            }
        }()
    })
}(window.jQuery),
!function(e) {
    "use strict";
    var t = '[data-dismiss="alert"]'
      , n = function(n) {
        e(n).on("click", t, this.close)
    };
    n.prototype.close = function(t) {
        function n() {
            r.trigger("closed").remove()
        }
        var r, i = e(this), o = i.attr("data-target");
        o || (o = i.attr("href"),
        o = o && o.replace(/.*(?=#[^\s]*$)/, "")),
        r = e(o),
        t && t.preventDefault(),
        r.length || (r = i.hasClass("alert") ? i : i.parent()),
        r.trigger(t = e.Event("close")),
        t.isDefaultPrevented() || (r.removeClass("in"),
        e.support.transition && r.hasClass("fade") ? r.on(e.support.transition.end, n) : n())
    }
    ;
    var r = e.fn.alert;
    e.fn.alert = function(t) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("alert");
            i || r.data("alert", i = new n(this)),
            "string" == typeof t && i[t].call(r)
        })
    }
    ,
    e.fn.alert.Constructor = n,
    e.fn.alert.noConflict = function() {
        return e.fn.alert = r,
        this
    }
    ,
    e(document).on("click.alert.data-api", t, n.prototype.close)
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, e.fn.button.defaults, n)
    };
    t.prototype.setState = function(e) {
        var t = "disabled"
          , n = this.$element
          , r = n.data()
          , i = n.is("input") ? "val" : "html";
        e += "Text",
        r.resetText || n.data("resetText", n[i]()),
        n[i](r[e] || this.options[e]),
        setTimeout(function() {
            "loadingText" == e ? n.addClass(t).attr(t, t) : n.removeClass(t).removeAttr(t)
        }, 0)
    }
    ,
    t.prototype.toggle = function() {
        var e = this.$element.closest('[data-toggle="buttons-radio"]');
        e && e.find(".active").removeClass("active"),
        this.$element.toggleClass("active")
    }
    ;
    var n = e.fn.button;
    e.fn.button = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("button")
              , o = "object" == typeof n && n;
            i || r.data("button", i = new t(this,o)),
            "toggle" == n ? i.toggle() : n && i.setState(n)
        })
    }
    ,
    e.fn.button.defaults = {
        loadingText: "loading..."
    },
    e.fn.button.Constructor = t,
    e.fn.button.noConflict = function() {
        return e.fn.button = n,
        this
    }
    ,
    e(document).on("click.button.data-api", "[data-toggle^=button]", function(t) {
        var n = e(t.target);
        n.hasClass("btn") || (n = n.closest(".btn")),
        n.button("toggle")
    })
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.$indicators = this.$element.find(".carousel-indicators"),
        this.options = n,
        "hover" == this.options.pause && this.$element.on("mouseenter", e.proxy(this.pause, this)).on("mouseleave", e.proxy(this.cycle, this))
    };
    t.prototype = {
        cycle: function(t) {
            return t || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval && !this.paused && (this.interval = setInterval(e.proxy(this.next, this), this.options.interval)),
            this
        },
        getActiveIndex: function() {
            return this.$active = this.$element.find(".item.active"),
            this.$items = this.$active.parent().children(),
            this.$items.index(this.$active)
        },
        to: function(t) {
            var n = this.getActiveIndex()
              , r = this;
            if (!(t > this.$items.length - 1 || 0 > t))
                return this.sliding ? this.$element.one("slid", function() {
                    r.to(t)
                }) : n == t ? this.pause().cycle() : this.slide(t > n ? "next" : "prev", e(this.$items[t]))
        },
        pause: function(t) {
            return t || (this.paused = !0),
            this.$element.find(".next, .prev").length && e.support.transition.end && (this.$element.trigger(e.support.transition.end),
            this.cycle(!0)),
            clearInterval(this.interval),
            this.interval = null,
            this
        },
        next: function() {
            return this.sliding ? void 0 : this.slide("next")
        },
        prev: function() {
            return this.sliding ? void 0 : this.slide("prev")
        },
        slide: function(t, n) {
            var r, i = this.$element.find(".item.active"), o = n || i[t](), s = this.interval, a = "next" == t ? "left" : "right", l = "next" == t ? "first" : "last", u = this;
            if (this.sliding = !0,
            s && this.pause(),
            o = o.length ? o : this.$element.find(".item")[l](),
            r = e.Event("slide", {
                relatedTarget: o[0],
                direction: a
            }),
            !o.hasClass("active")) {
                if (this.$indicators.length && (this.$indicators.find(".active").removeClass("active"),
                this.$element.one("slid", function() {
                    var t = e(u.$indicators.children()[u.getActiveIndex()]);
                    t && t.addClass("active")
                })),
                e.support.transition && this.$element.hasClass("slide")) {
                    if (this.$element.trigger(r),
                    r.isDefaultPrevented())
                        return;
                    o.addClass(t),
                    o[0].offsetWidth,
                    i.addClass(a),
                    o.addClass(a),
                    this.$element.one(e.support.transition.end, function() {
                        o.removeClass([t, a].join(" ")).addClass("active"),
                        i.removeClass(["active", a].join(" ")),
                        u.sliding = !1,
                        setTimeout(function() {
                            u.$element.trigger("slid")
                        }, 0)
                    })
                } else {
                    if (this.$element.trigger(r),
                    r.isDefaultPrevented())
                        return;
                    i.removeClass("active"),
                    o.addClass("active"),
                    this.sliding = !1,
                    this.$element.trigger("slid")
                }
                return s && this.cycle(),
                this
            }
        }
    };
    var n = e.fn.carousel;
    e.fn.carousel = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("carousel")
              , o = e.extend({}, e.fn.carousel.defaults, "object" == typeof n && n)
              , s = "string" == typeof n ? n : o.slide;
            i || r.data("carousel", i = new t(this,o)),
            "number" == typeof n ? i.to(n) : s ? i[s]() : o.interval && i.pause().cycle()
        })
    }
    ,
    e.fn.carousel.defaults = {
        interval: 5e3,
        pause: "hover"
    },
    e.fn.carousel.Constructor = t,
    e.fn.carousel.noConflict = function() {
        return e.fn.carousel = n,
        this
    }
    ,
    e(document).on("click.carousel.data-api", "[data-slide], [data-slide-to]", function(t) {
        var n, r, i = e(this), o = e(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")), s = e.extend({}, o.data(), i.data());
        o.carousel(s),
        (r = i.attr("data-slide-to")) && o.data("carousel").pause().to(r).cycle(),
        t.preventDefault()
    })
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, e.fn.collapse.defaults, n),
        this.options.parent && (this.$parent = e(this.options.parent)),
        this.options.toggle && this.toggle()
    };
    t.prototype = {
        constructor: t,
        dimension: function() {
            var e = this.$element.hasClass("width");
            return e ? "width" : "height"
        },
        show: function() {
            var t, n, r, i;
            if (!this.transitioning && !this.$element.hasClass("in")) {
                if (t = this.dimension(),
                n = e.camelCase(["scroll", t].join("-")),
                r = this.$parent && this.$parent.find("> .accordion-group > .in"),
                r && r.length) {
                    if (i = r.data("collapse"),
                    i && i.transitioning)
                        return;
                    r.collapse("hide"),
                    i || r.data("collapse", null)
                }
                this.$element[t](0),
                this.transition("addClass", e.Event("show"), "shown"),
                e.support.transition && this.$element[t](this.$element[0][n])
            }
        },
        hide: function() {
            var t;
            !this.transitioning && this.$element.hasClass("in") && (t = this.dimension(),
            this.reset(this.$element[t]()),
            this.transition("removeClass", e.Event("hide"), "hidden"),
            this.$element[t](0))
        },
        reset: function(e) {
            var t = this.dimension();
            return this.$element.removeClass("collapse")[t](e || "auto")[0].offsetWidth,
            this.$element[null !== e ? "addClass" : "removeClass"]("collapse"),
            this
        },
        transition: function(t, n, r) {
            var i = this
              , o = function() {
                "show" == n.type && i.reset(),
                i.transitioning = 0,
                i.$element.trigger(r)
            };
            this.$element.trigger(n),
            n.isDefaultPrevented() || (this.transitioning = 1,
            this.$element[t]("in"),
            e.support.transition && this.$element.hasClass("collapse") ? this.$element.one(e.support.transition.end, o) : o())
        },
        toggle: function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
    };
    var n = e.fn.collapse;
    e.fn.collapse = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("collapse")
              , o = e.extend({}, e.fn.collapse.defaults, r.data(), "object" == typeof n && n);
            i || r.data("collapse", i = new t(this,o)),
            "string" == typeof n && i[n]()
        })
    }
    ,
    e.fn.collapse.defaults = {
        toggle: !0
    },
    e.fn.collapse.Constructor = t,
    e.fn.collapse.noConflict = function() {
        return e.fn.collapse = n,
        this
    }
    ,
    e(document).on("click.collapse.data-api", "[data-toggle=collapse]", function(t) {
        var n, r = e(this), i = r.attr("data-target") || t.preventDefault() || (n = r.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""), o = e(i).data("collapse") ? "toggle" : r.data();
        r[e(i).hasClass("in") ? "addClass" : "removeClass"]("collapsed"),
        e(i).collapse(o)
    })
}(window.jQuery),
!function(e) {
    "use strict";
    function t() {
        e(".dropdown-backdrop").remove(),
        e(r).each(function() {
            n(e(this)).removeClass("open")
        })
    }
    function n(t) {
        var n, r = t.attr("data-target");
        return r || (r = t.attr("href"),
        r = r && /#/.test(r) && r.replace(/.*(?=#[^\s]*$)/, "")),
        n = r && e(r),
        n && n.length || (n = t.parent()),
        n
    }
    var r = "[data-toggle=dropdown]"
      , i = function(t) {
        var n = e(t).on("click.dropdown.data-api", this.toggle);
        e("html").on("click.dropdown.data-api", function() {
            n.parent().removeClass("open")
        })
    };
    i.prototype = {
        constructor: i,
        toggle: function(r) {
            var i, o, s = e(this);
            if (!s.is(".disabled, :disabled"))
                return i = n(s),
                o = i.hasClass("open"),
                t(),
                o || ("ontouchstart"in document.documentElement && e('<div class="dropdown-backdrop"/>').insertBefore(e(this)).on("click", t),
                i.toggleClass("open")),
                s.focus(),
                !1
        },
        keydown: function(t) {
            var i, o, s, a, l;
            if (/(38|40|27)/.test(t.keyCode) && (i = e(this),
            t.preventDefault(),
            t.stopPropagation(),
            !i.is(".disabled, :disabled"))) {
                if (s = n(i),
                a = s.hasClass("open"),
                !a || a && 27 == t.keyCode)
                    return 27 == t.which && s.find(r).focus(),
                    i.click();
                o = e("[role=menu] li:not(.divider):visible a", s),
                o.length && (l = o.index(o.filter(":focus")),
                38 == t.keyCode && l > 0 && l--,
                40 == t.keyCode && l < o.length - 1 && l++,
                ~l || (l = 0),
                o.eq(l).focus())
            }
        }
    };
    var o = e.fn.dropdown;
    e.fn.dropdown = function(t) {
        return this.each(function() {
            var n = e(this)
              , r = n.data("dropdown");
            r || n.data("dropdown", r = new i(this)),
            "string" == typeof t && r[t].call(n)
        })
    }
    ,
    e.fn.dropdown.Constructor = i,
    e.fn.dropdown.noConflict = function() {
        return e.fn.dropdown = o,
        this
    }
    ,
    e(document).on("click.dropdown.data-api", t).on("click.dropdown.data-api", ".dropdown form", function(e) {
        e.stopPropagation()
    }).on("click.dropdown.data-api", r, i.prototype.toggle).on("keydown.dropdown.data-api", r + ", [role=menu]", i.prototype.keydown)
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = n,
        this.$element = e(t).delegate('[data-dismiss="modal"]', "click.dismiss.modal", e.proxy(this.hide, this)),
        this.options.remote && this.$element.find(".modal-body").load(this.options.remote)
    };
    t.prototype = {
        constructor: t,
        toggle: function() {
            return this[this.isShown ? "hide" : "show"]()
        },
        show: function() {
            var t = this
              , n = e.Event("show");
            this.$element.trigger(n),
            this.isShown || n.isDefaultPrevented() || (this.isShown = !0,
            this.escape(),
            this.backdrop(function() {
                var n = e.support.transition && t.$element.hasClass("fade");
                t.$element.parent().length || t.$element.appendTo(document.body),
                t.$element.show(),
                n && t.$element[0].offsetWidth,
                t.$element.addClass("in").attr("aria-hidden", !1),
                t.enforceFocus(),
                n ? t.$element.one(e.support.transition.end, function() {
                    t.$element.focus().trigger("shown")
                }) : t.$element.focus().trigger("shown")
            }))
        },
        hide: function(t) {
            t && t.preventDefault();
            t = e.Event("hide"),
            this.$element.trigger(t),
            this.isShown && !t.isDefaultPrevented() && (this.isShown = !1,
            this.escape(),
            e(document).off("focusin.modal"),
            this.$element.removeClass("in").attr("aria-hidden", !0),
            e.support.transition && this.$element.hasClass("fade") ? this.hideWithTransition() : this.hideModal())
        },
        enforceFocus: function() {
            var t = this;
            e(document).on("focusin.modal", function(e) {
                t.$element[0] !== e.target && !t.$element.has(e.target).length && t.$element.focus()
            })
        },
        escape: function() {
            var e = this;
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.modal", function(t) {
                27 == t.which && e.hide()
            }) : this.isShown || this.$element.off("keyup.dismiss.modal")
        },
        hideWithTransition: function() {
            var t = this
              , n = setTimeout(function() {
                t.$element.off(e.support.transition.end),
                t.hideModal()
            }, 500);
            this.$element.one(e.support.transition.end, function() {
                clearTimeout(n),
                t.hideModal()
            })
        },
        hideModal: function() {
            var e = this;
            this.$element.hide(),
            this.backdrop(function() {
                e.removeBackdrop(),
                e.$element.trigger("hidden")
            })
        },
        removeBackdrop: function() {
            this.$backdrop && this.$backdrop.remove(),
            this.$backdrop = null
        },
        backdrop: function(t) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var r = e.support.transition && n;
                if (this.$backdrop = e('<div class="modal-backdrop ' + n + '" />').appendTo(document.body),
                this.$backdrop.click("static" == this.options.backdrop ? e.proxy(this.$element[0].focus, this.$element[0]) : e.proxy(this.hide, this)),
                r && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                !t)
                    return;
                r ? this.$backdrop.one(e.support.transition.end, t) : t()
            } else
                !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"),
                e.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(e.support.transition.end, t) : t()) : t && t()
        }
    };
    var n = e.fn.modal;
    e.fn.modal = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("modal")
              , o = e.extend({}, e.fn.modal.defaults, r.data(), "object" == typeof n && n);
            i || r.data("modal", i = new t(this,o)),
            "string" == typeof n ? i[n]() : o.show && i.show()
        })
    }
    ,
    e.fn.modal.defaults = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    },
    e.fn.modal.Constructor = t,
    e.fn.modal.noConflict = function() {
        return e.fn.modal = n,
        this
    }
    ,
    e(document).on("click.modal.data-api", '[data-toggle="modal"]', function(t) {
        var n = e(this)
          , r = n.attr("href")
          , i = e(n.attr("data-target") || r && r.replace(/.*(?=#[^\s]+$)/, ""))
          , o = i.data("modal") ? "toggle" : e.extend({
            remote: !/#/.test(r) && r
        }, i.data(), n.data());
        t.preventDefault(),
        i.modal(o).one("hide", function() {
            n.focus()
        })
    })
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("tooltip", e, t)
    };
    t.prototype = {
        constructor: t,
        init: function(t, n, r) {
            var i, o, s, a, l;
            for (this.type = t,
            this.$element = e(n),
            this.options = this.getOptions(r),
            this.enabled = !0,
            s = this.options.trigger.split(" "),
            l = s.length; l--; )
                a = s[l],
                "click" == a ? this.$element.on("click." + this.type, this.options.selector, e.proxy(this.toggle, this)) : "manual" != a && (i = "hover" == a ? "mouseenter" : "focus",
                o = "hover" == a ? "mouseleave" : "blur",
                this.$element.on(i + "." + this.type, this.options.selector, e.proxy(this.enter, this)),
                this.$element.on(o + "." + this.type, this.options.selector, e.proxy(this.leave, this)));
            this.options.selector ? this._options = e.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        },
        getOptions: function(t) {
            return t = e.extend({}, e.fn[this.type].defaults, this.$element.data(), t),
            t.delay && "number" == typeof t.delay && (t.delay = {
                show: t.delay,
                hide: t.delay
            }),
            t
        },
        enter: function(t) {
            var n, r = e.fn[this.type].defaults, i = {};
            return this._options && e.each(this._options, function(e, t) {
                r[e] != t && (i[e] = t)
            }, this),
            n = e(t.currentTarget)[this.type](i).data(this.type),
            n.options.delay && n.options.delay.show ? (clearTimeout(this.timeout),
            n.hoverState = "in",
            this.timeout = setTimeout(function() {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show),
            void 0) : n.show()
        },
        leave: function(t) {
            var n = e(t.currentTarget)[this.type](this._options).data(this.type);
            return this.timeout && clearTimeout(this.timeout),
            n.options.delay && n.options.delay.hide ? (n.hoverState = "out",
            void (this.timeout = setTimeout(function() {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide))) : n.hide()
        },
        show: function() {
            var t, n, r, i, o, s, a = e.Event("show");
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(a),
                a.isDefaultPrevented())
                    return;
                switch (t = this.tip(),
                this.setContent(),
                this.options.animation && t.addClass("fade"),
                o = "function" == typeof this.options.placement ? this.options.placement.call(this, t[0], this.$element[0]) : this.options.placement,
                t.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }),
                this.options.container ? t.appendTo(this.options.container) : t.insertAfter(this.$element),
                n = this.getPosition(),
                r = t[0].offsetWidth,
                i = t[0].offsetHeight,
                o) {
                case "bottom":
                    s = {
                        top: n.top + n.height,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;
                case "top":
                    s = {
                        top: n.top - i,
                        left: n.left + n.width / 2 - r / 2
                    };
                    break;
                case "left":
                    s = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left - r
                    };
                    break;
                case "right":
                    s = {
                        top: n.top + n.height / 2 - i / 2,
                        left: n.left + n.width
                    }
                }
                this.applyPlacement(s, o),
                this.$element.trigger("shown")
            }
        },
        applyPlacement: function(e, t) {
            var n, r, i, o, s = this.tip(), a = s[0].offsetWidth, l = s[0].offsetHeight;
            s.offset(e).addClass(t).addClass("in"),
            n = s[0].offsetWidth,
            r = s[0].offsetHeight,
            "top" == t && r != l && (e.top = e.top + l - r,
            o = !0),
            "bottom" == t || "top" == t ? (i = 0,
            e.left < 0 && (i = -2 * e.left,
            e.left = 0,
            s.offset(e),
            n = s[0].offsetWidth,
            r = s[0].offsetHeight),
            this.replaceArrow(i - a + n, n, "left")) : this.replaceArrow(r - l, r, "top"),
            o && s.offset(e)
        },
        replaceArrow: function(e, t, n) {
            this.arrow().css(n, e ? 50 * (1 - e / t) + "%" : "")
        },
        setContent: function() {
            var e = this.tip()
              , t = this.getTitle();
            e.find(".tooltip-inner")[this.options.html ? "html" : "text"](t),
            e.removeClass("fade in top bottom left right")
        },
        hide: function() {
            function t() {
                var t = setTimeout(function() {
                    n.off(e.support.transition.end).detach()
                }, 500);
                n.one(e.support.transition.end, function() {
                    clearTimeout(t),
                    n.detach()
                })
            }
            var n = this.tip()
              , r = e.Event("hide");
            return this.$element.trigger(r),
            r.isDefaultPrevented() ? void 0 : (n.removeClass("in"),
            e.support.transition && this.$tip.hasClass("fade") ? t() : n.detach(),
            this.$element.trigger("hidden"),
            this)
        },
        fixTitle: function() {
            var e = this.$element;
            (e.attr("title") || "string" != typeof e.attr("data-original-title")) && e.attr("data-original-title", e.attr("title") || "").attr("title", "")
        },
        hasContent: function() {
            return this.getTitle()
        },
        getPosition: function() {
            var t = this.$element[0];
            return e.extend({}, "function" == typeof t.getBoundingClientRect ? t.getBoundingClientRect() : {
                width: t.offsetWidth,
                height: t.offsetHeight
            }, this.$element.offset())
        },
        getTitle: function() {
            var e, t = this.$element, n = this.options;
            return e = t.attr("data-original-title") || ("function" == typeof n.title ? n.title.call(t[0]) : n.title)
        },
        tip: function() {
            return this.$tip = this.$tip || e(this.options.template)
        },
        arrow: function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        },
        validate: function() {
            this.$element[0].parentNode || (this.hide(),
            this.$element = null,
            this.options = null)
        },
        enable: function() {
            this.enabled = !0
        },
        disable: function() {
            this.enabled = !1
        },
        toggleEnabled: function() {
            this.enabled = !this.enabled
        },
        toggle: function(t) {
            var n = t ? e(t.currentTarget)[this.type](this._options).data(this.type) : this;
            n.tip().hasClass("in") ? n.hide() : n.show()
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    };
    var n = e.fn.tooltip;
    e.fn.tooltip = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("tooltip")
              , o = "object" == typeof n && n;
            i || r.data("tooltip", i = new t(this,o)),
            "string" == typeof n && i[n]()
        })
    }
    ,
    e.fn.tooltip.Constructor = t,
    e.fn.tooltip.defaults = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1
    },
    e.fn.tooltip.noConflict = function() {
        return e.fn.tooltip = n,
        this
    }
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(e, t) {
        this.init("popover", e, t)
    };
    t.prototype = e.extend({}, e.fn.tooltip.Constructor.prototype, {
        constructor: t,
        setContent: function() {
            var e = this.tip()
              , t = this.getTitle()
              , n = this.getContent();
            e.find(".popover-title")[this.options.html ? "html" : "text"](t),
            e.find(".popover-content")[this.options.html ? "html" : "text"](n),
            e.removeClass("fade top bottom left right in")
        },
        hasContent: function() {
            return this.getTitle() || this.getContent()
        },
        getContent: function() {
            var e, t = this.$element, n = this.options;
            return e = ("function" == typeof n.content ? n.content.call(t[0]) : n.content) || t.attr("data-content")
        },
        tip: function() {
            return this.$tip || (this.$tip = e(this.options.template)),
            this.$tip
        },
        destroy: function() {
            this.hide().$element.off("." + this.type).removeData(this.type)
        }
    });
    var n = e.fn.popover;
    e.fn.popover = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("popover")
              , o = "object" == typeof n && n;
            i || r.data("popover", i = new t(this,o)),
            "string" == typeof n && i[n]()
        })
    }
    ,
    e.fn.popover.Constructor = t,
    e.fn.popover.defaults = e.extend({}, e.fn.tooltip.defaults, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }),
    e.fn.popover.noConflict = function() {
        return e.fn.popover = n,
        this
    }
}(window.jQuery),
!function(e) {
    "use strict";
    function t(t, n) {
        var r, i = e.proxy(this.process, this), o = e(e(t).is("body") ? window : t);
        this.options = e.extend({}, e.fn.scrollspy.defaults, n),
        this.$scrollElement = o.on("scroll.scroll-spy.data-api", i),
        this.selector = (this.options.target || (r = e(t).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a",
        this.$body = e("body"),
        this.refresh(),
        this.process()
    }
    t.prototype = {
        constructor: t,
        refresh: function() {
            var t, n = this;
            this.offsets = e([]),
            this.targets = e([]),
            t = this.$body.find(this.selector).map(function() {
                var t = e(this)
                  , r = t.data("target") || t.attr("href")
                  , i = /^#\w/.test(r) && e(r);
                return i && i.length && [[i.position().top + (!e.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), r]] || null
            }).sort(function(e, t) {
                return e[0] - t[0]
            }).each(function() {
                n.offsets.push(this[0]),
                n.targets.push(this[1])
            })
        },
        process: function() {
            var e, t = this.$scrollElement.scrollTop() + this.options.offset, n = this.$scrollElement[0].scrollHeight || this.$body[0].scrollHeight, r = n - this.$scrollElement.height(), i = this.offsets, o = this.targets, s = this.activeTarget;
            if (t >= r)
                return s != (e = o.last()[0]) && this.activate(e);
            for (e = i.length; e--; )
                s != o[e] && t >= i[e] && (!i[e + 1] || t <= i[e + 1]) && this.activate(o[e])
        },
        activate: function(t) {
            var n, r;
            this.activeTarget = t,
            e(this.selector).parent(".active").removeClass("active"),
            r = this.selector + '[data-target="' + t + '"],' + this.selector + '[href="' + t + '"]',
            n = e(r).parent("li").addClass("active"),
            n.parent(".dropdown-menu").length && (n = n.closest("li.dropdown").addClass("active")),
            n.trigger("activate")
        }
    };
    var n = e.fn.scrollspy;
    e.fn.scrollspy = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("scrollspy")
              , o = "object" == typeof n && n;
            i || r.data("scrollspy", i = new t(this,o)),
            "string" == typeof n && i[n]()
        })
    }
    ,
    e.fn.scrollspy.Constructor = t,
    e.fn.scrollspy.defaults = {
        offset: 10
    },
    e.fn.scrollspy.noConflict = function() {
        return e.fn.scrollspy = n,
        this
    }
    ,
    e(window).on("load", function() {
        e('[data-spy="scroll"]').each(function() {
            var t = e(this);
            t.scrollspy(t.data())
        })
    })
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t) {
        this.element = e(t)
    };
    t.prototype = {
        constructor: t,
        show: function() {
            var t, n, r, i = this.element, o = i.closest("ul:not(.dropdown-menu)"), s = i.attr("data-target");
            s || (s = i.attr("href"),
            s = s && s.replace(/.*(?=#[^\s]*$)/, "")),
            i.parent("li").hasClass("active") || (t = o.find(".active:last a")[0],
            r = e.Event("show", {
                relatedTarget: t
            }),
            i.trigger(r),
            r.isDefaultPrevented() || (n = e(s),
            this.activate(i.parent("li"), o),
            this.activate(n, n.parent(), function() {
                i.trigger({
                    type: "shown",
                    relatedTarget: t
                })
            })))
        },
        activate: function(t, n, r) {
            function i() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"),
                t.addClass("active"),
                s ? (t[0].offsetWidth,
                t.addClass("in")) : t.removeClass("fade"),
                t.parent(".dropdown-menu") && t.closest("li.dropdown").addClass("active"),
                r && r()
            }
            var o = n.find("> .active")
              , s = r && e.support.transition && o.hasClass("fade");
            s ? o.one(e.support.transition.end, i) : i(),
            o.removeClass("in")
        }
    };
    var n = e.fn.tab;
    e.fn.tab = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("tab");
            i || r.data("tab", i = new t(this)),
            "string" == typeof n && i[n]()
        })
    }
    ,
    e.fn.tab.Constructor = t,
    e.fn.tab.noConflict = function() {
        return e.fn.tab = n,
        this
    }
    ,
    e(document).on("click.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function(t) {
        t.preventDefault(),
        e(this).tab("show")
    })
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.$element = e(t),
        this.options = e.extend({}, e.fn.typeahead.defaults, n),
        this.matcher = this.options.matcher || this.matcher,
        this.sorter = this.options.sorter || this.sorter,
        this.highlighter = this.options.highlighter || this.highlighter,
        this.updater = this.options.updater || this.updater,
        this.source = this.options.source,
        this.$menu = e(this.options.menu),
        this.shown = !1,
        this.listen()
    };
    t.prototype = {
        constructor: t,
        select: function() {
            var e = this.$menu.find(".active").attr("data-value");
            return this.$element.val(this.updater(e)).change(),
            this.hide()
        },
        updater: function(e) {
            return e
        },
        show: function() {
            var t = e.extend({}, this.$element.position(), {
                height: this.$element[0].offsetHeight
            });
            return this.$menu.insertAfter(this.$element).css({
                top: t.top + t.height,
                left: t.left
            }).show(),
            this.shown = !0,
            this
        },
        hide: function() {
            return this.$menu.hide(),
            this.shown = !1,
            this
        },
        lookup: function(t) {
            var n;
            return this.query = this.$element.val(),
            !this.query || this.query.length < this.options.minLength ? this.shown ? this.hide() : this : (n = e.isFunction(this.source) ? this.source(this.query, e.proxy(this.process, this)) : this.source,
            n ? this.process(n) : this)
        },
        process: function(t) {
            var n = this;
            return t = e.grep(t, function(e) {
                return n.matcher(e)
            }),
            t = this.sorter(t),
            t.length ? this.render(t.slice(0, this.options.items)).show() : this.shown ? this.hide() : this
        },
        matcher: function(e) {
            return ~e.toLowerCase().indexOf(this.query.toLowerCase())
        },
        sorter: function(e) {
            for (var t, n = [], r = [], i = []; t = e.shift(); )
                t.toLowerCase().indexOf(this.query.toLowerCase()) ? ~t.indexOf(this.query) ? r.push(t) : i.push(t) : n.push(t);
            return n.concat(r, i)
        },
        highlighter: function(e) {
            var t = this.query.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&");
            return e.replace(new RegExp("(" + t + ")","ig"), function(e, t) {
                return "<strong>" + t + "</strong>"
            })
        },
        render: function(t) {
            var n = this;
            return t = e(t).map(function(t, r) {
                return t = e(n.options.item).attr("data-value", r),
                t.find("a").html(n.highlighter(r)),
                t[0]
            }),
            t.first().addClass("active"),
            this.$menu.html(t),
            this
        },
        next: function(t) {
            var n = this.$menu.find(".active").removeClass("active")
              , r = n.next();
            r.length || (r = e(this.$menu.find("li")[0])),
            r.addClass("active")
        },
        prev: function(e) {
            var t = this.$menu.find(".active").removeClass("active")
              , n = t.prev();
            n.length || (n = this.$menu.find("li").last()),
            n.addClass("active")
        },
        listen: function() {
            this.$element.on("focus", e.proxy(this.focus, this)).on("blur", e.proxy(this.blur, this)).on("keypress", e.proxy(this.keypress, this)).on("keyup", e.proxy(this.keyup, this)),
            this.eventSupported("keydown") && this.$element.on("keydown", e.proxy(this.keydown, this)),
            this.$menu.on("click", e.proxy(this.click, this)).on("mouseenter", "li", e.proxy(this.mouseenter, this)).on("mouseleave", "li", e.proxy(this.mouseleave, this))
        },
        eventSupported: function(e) {
            var t = e in this.$element;
            return t || (this.$element.setAttribute(e, "return;"),
            t = "function" == typeof this.$element[e]),
            t
        },
        move: function(e) {
            if (this.shown) {
                switch (e.keyCode) {
                case 9:
                case 13:
                case 27:
                    e.preventDefault();
                    break;
                case 38:
                    e.preventDefault(),
                    this.prev();
                    break;
                case 40:
                    e.preventDefault(),
                    this.next()
                }
                e.stopPropagation()
            }
        },
        keydown: function(t) {
            this.suppressKeyPressRepeat = ~e.inArray(t.keyCode, [40, 38, 9, 13, 27]),
            this.move(t)
        },
        keypress: function(e) {
            this.suppressKeyPressRepeat || this.move(e)
        },
        keyup: function(e) {
            switch (e.keyCode) {
            case 40:
            case 38:
            case 16:
            case 17:
            case 18:
                break;
            case 9:
            case 13:
                if (!this.shown)
                    return;
                this.select();
                break;
            case 27:
                if (!this.shown)
                    return;
                this.hide();
                break;
            default:
                this.lookup()
            }
            e.stopPropagation(),
            e.preventDefault()
        },
        focus: function(e) {
            this.focused = !0
        },
        blur: function(e) {
            this.focused = !1,
            !this.mousedover && this.shown && this.hide()
        },
        click: function(e) {
            e.stopPropagation(),
            e.preventDefault(),
            this.select(),
            this.$element.focus()
        },
        mouseenter: function(t) {
            this.mousedover = !0,
            this.$menu.find(".active").removeClass("active"),
            e(t.currentTarget).addClass("active")
        },
        mouseleave: function(e) {
            this.mousedover = !1,
            !this.focused && this.shown && this.hide()
        }
    };
    var n = e.fn.typeahead;
    e.fn.typeahead = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("typeahead")
              , o = "object" == typeof n && n;
            i || r.data("typeahead", i = new t(this,o)),
            "string" == typeof n && i[n]()
        })
    }
    ,
    e.fn.typeahead.defaults = {
        source: [],
        items: 8,
        menu: '<ul class="typeahead dropdown-menu"></ul>',
        item: '<li><a href="#"></a></li>',
        minLength: 1
    },
    e.fn.typeahead.Constructor = t,
    e.fn.typeahead.noConflict = function() {
        return e.fn.typeahead = n,
        this
    }
    ,
    e(document).on("focus.typeahead.data-api", '[data-provide="typeahead"]', function(t) {
        var n = e(this);
        n.data("typeahead") || n.typeahead(n.data())
    })
}(window.jQuery),
!function(e) {
    "use strict";
    var t = function(t, n) {
        this.options = e.extend({}, e.fn.affix.defaults, n),
        this.$window = e(window).on("scroll.affix.data-api", e.proxy(this.checkPosition, this)).on("click.affix.data-api", e.proxy(function() {
            setTimeout(e.proxy(this.checkPosition, this), 1)
        }, this)),
        this.$element = e(t),
        this.checkPosition()
    };
    t.prototype.checkPosition = function() {
        if (this.$element.is(":visible")) {
            var t, n = e(document).height(), r = this.$window.scrollTop(), i = this.$element.offset(), o = this.options.offset, s = o.bottom, a = o.top, l = "affix affix-top affix-bottom";
            "object" != typeof o && (s = a = o),
            "function" == typeof a && (a = o.top()),
            "function" == typeof s && (s = o.bottom()),
            t = null != this.unpin && r + this.unpin <= i.top ? !1 : null != s && i.top + this.$element.height() >= n - s ? "bottom" : null != a && a >= r ? "top" : !1,
            this.affixed !== t && (this.affixed = t,
            this.unpin = "bottom" == t ? i.top - r : null,
            this.$element.removeClass(l).addClass("affix" + (t ? "-" + t : "")))
        }
    }
    ;
    var n = e.fn.affix;
    e.fn.affix = function(n) {
        return this.each(function() {
            var r = e(this)
              , i = r.data("affix")
              , o = "object" == typeof n && n;
            i || r.data("affix", i = new t(this,o)),
            "string" == typeof n && i[n]()
        })
    }
    ,
    e.fn.affix.Constructor = t,
    e.fn.affix.defaults = {
        offset: 0
    },
    e.fn.affix.noConflict = function() {
        return e.fn.affix = n,
        this
    }
    ,
    e(window).on("load", function() {
        e('[data-spy="affix"]').each(function() {
            var t = e(this)
              , n = t.data();
            n.offset = n.offset || {},
            n.offsetBottom && (n.offset.bottom = n.offsetBottom),
            n.offsetTop && (n.offset.top = n.offsetTop),
            t.affix(n)
        })
    })
}(window.jQuery),
define("Bootstrap", ["jquery"], function() {}),
function() {
    function e(e) {
        function t(t, r) {
            var o, m, g = t == window, v = r && void 0 !== r.message ? r.message : void 0;
            if (r = e.extend({}, e.blockUI.defaults, r || {}),
            !r.ignoreIfBlocked || !e(t).data("blockUI.isBlocked")) {
                if (r.overlayCSS = e.extend({}, e.blockUI.defaults.overlayCSS, r.overlayCSS || {}),
                o = e.extend({}, e.blockUI.defaults.css, r.css || {}),
                r.onOverlayClick && (r.overlayCSS.cursor = "pointer"),
                m = e.extend({}, e.blockUI.defaults.themedCSS, r.themedCSS || {}),
                v = void 0 === v ? r.message : v,
                g && f && n(window, {
                    fadeOut: 0
                }),
                v && "string" != typeof v && (v.parentNode || v.jquery)) {
                    var y = v.jquery ? v[0] : v
                      , b = {};
                    e(t).data("blockUI.history", b),
                    b.el = y,
                    b.parent = y.parentNode,
                    b.display = y.style.display,
                    b.position = y.style.position,
                    b.parent && b.parent.removeChild(y)
                }
                e(t).data("blockUI.onUnblock", r.onUnblock);
                var x, w, _, k, S = r.baseZ;
                x = e(c || r.forceIframe ? '<iframe class="blockUI" style="z-index:' + S++ + ';display:none;border:none;margin:0;padding:0;position:absolute;width:100%;height:100%;top:0;left:0" src="' + r.iframeSrc + '"></iframe>' : '<div class="blockUI" style="display:none"></div>'),
                w = e(r.theme ? '<div class="blockUI blockOverlay ui-widget-overlay" style="z-index:' + S++ + ';display:none"></div>' : '<div class="blockUI blockOverlay" style="z-index:' + S++ + ';display:none;border:none;margin:0;padding:0;width:100%;height:100%;top:0;left:0"></div>'),
                r.theme && g ? (k = '<div class="blockUI ' + r.blockMsgClass + ' blockPage ui-dialog ui-widget ui-corner-all" style="z-index:' + (S + 10) + ';display:none;position:fixed">',
                r.title && (k += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (r.title || "&nbsp;") + "</div>"),
                k += '<div class="ui-widget-content ui-dialog-content"></div>',
                k += "</div>") : r.theme ? (k = '<div class="blockUI ' + r.blockMsgClass + ' blockElement ui-dialog ui-widget ui-corner-all" style="z-index:' + (S + 10) + ';display:none;position:absolute">',
                r.title && (k += '<div class="ui-widget-header ui-dialog-titlebar ui-corner-all blockTitle">' + (r.title || "&nbsp;") + "</div>"),
                k += '<div class="ui-widget-content ui-dialog-content"></div>',
                k += "</div>") : k = g ? '<div class="blockUI ' + r.blockMsgClass + ' blockPage" style="z-index:' + (S + 10) + ';display:none;position:fixed"></div>' : '<div class="blockUI ' + r.blockMsgClass + ' blockElement" style="z-index:' + (S + 10) + ';display:none;position:absolute"></div>',
                _ = e(k),
                v && (r.theme ? (_.css(m),
                _.addClass("ui-widget-content")) : _.css(o)),
                r.theme || w.css(r.overlayCSS),
                w.css("position", g ? "fixed" : "absolute"),
                (c || r.forceIframe) && x.css("opacity", 0);
                var C = [x, w, _]
                  , T = e(g ? "body" : t);
                e.each(C, function() {
                    this.appendTo(T)
                }),
                r.theme && r.draggable && e.fn.draggable && _.draggable({
                    handle: ".ui-dialog-titlebar",
                    cancel: "li"
                });
                var L = d && (!e.support.boxModel || e("object,embed", g ? null : t).length > 0);
                if (h || L) {
                    if (g && r.allowBodyStretch && e.support.boxModel && e("html,body").css("height", "100%"),
                    (h || !e.support.boxModel) && !g)
                        var E = l(t, "borderTopWidth")
                          , N = l(t, "borderLeftWidth")
                          , A = E ? "(0 - " + E + ")" : 0
                          , M = N ? "(0 - " + N + ")" : 0;
                    e.each(C, function(e, t) {
                        var n = t[0].style;
                        if (n.position = "absolute",
                        2 > e)
                            g ? n.setExpression("height", "Math.max(document.body.scrollHeight, document.body.offsetHeight) - (jQuery.support.boxModel?0:" + r.quirksmodeOffsetHack + ') + "px"') : n.setExpression("height", 'this.parentNode.offsetHeight + "px"'),
                            g ? n.setExpression("width", 'jQuery.support.boxModel && document.documentElement.clientWidth || document.body.clientWidth + "px"') : n.setExpression("width", 'this.parentNode.offsetWidth + "px"'),
                            M && n.setExpression("left", M),
                            A && n.setExpression("top", A);
                        else if (r.centerY)
                            g && n.setExpression("top", '(document.documentElement.clientHeight || document.body.clientHeight) / 2 - (this.offsetHeight / 2) + (blah = document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + "px"'),
                            n.marginTop = 0;
                        else if (!r.centerY && g) {
                            var i = r.css && r.css.top ? parseInt(r.css.top, 10) : 0
                              , o = "((document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop) + " + i + ') + "px"';
                            n.setExpression("top", o)
                        }
                    })
                }
                if (v && (r.theme ? _.find(".ui-widget-content").append(v) : _.append(v),
                (v.jquery || v.nodeType) && e(v).show()),
                (c || r.forceIframe) && r.showOverlay && x.show(),
                r.fadeIn) {
                    var D = r.onBlock ? r.onBlock : u
                      , O = r.showOverlay && !v ? D : u
                      , I = v ? D : u;
                    r.showOverlay && w._fadeIn(r.fadeIn, O),
                    v && _._fadeIn(r.fadeIn, I)
                } else
                    r.showOverlay && w.show(),
                    v && _.show(),
                    r.onBlock && r.onBlock.bind(_)();
                if (i(1, t, r),
                g ? (f = _[0],
                p = e(r.focusableElements, f),
                r.focusInput && setTimeout(s, 20)) : a(_[0], r.centerX, r.centerY),
                r.timeout) {
                    var P = setTimeout(function() {
                        g ? e.unblockUI(r) : e(t).unblock(r)
                    }, r.timeout);
                    e(t).data("blockUI.timeout", P)
                }
            }
        }
        function n(t, n) {
            var o, s = t == window, a = e(t), l = a.data("blockUI.history"), u = a.data("blockUI.timeout");
            u && (clearTimeout(u),
            a.removeData("blockUI.timeout")),
            n = e.extend({}, e.blockUI.defaults, n || {}),
            i(0, t, n),
            null === n.onUnblock && (n.onUnblock = a.data("blockUI.onUnblock"),
            a.removeData("blockUI.onUnblock"));
            var c;
            c = s ? e("body").children().filter(".blockUI").add("body > .blockUI") : a.find(">.blockUI"),
            n.cursorReset && (c.length > 1 && (c[1].style.cursor = n.cursorReset),
            c.length > 2 && (c[2].style.cursor = n.cursorReset)),
            s && (f = p = null),
            n.fadeOut ? (o = c.length,
            c.stop().fadeOut(n.fadeOut, function() {
                0 === --o && r(c, l, n, t)
            })) : r(c, l, n, t)
        }
        function r(t, n, r, i) {
            var o = e(i);
            if (!o.data("blockUI.isBlocked")) {
                t.each(function(e, t) {
                    this.parentNode && this.parentNode.removeChild(this)
                }),
                n && n.el && (n.el.style.display = n.display,
                n.el.style.position = n.position,
                n.el.style.cursor = "default",
                n.parent && n.parent.appendChild(n.el),
                o.removeData("blockUI.history")),
                o.data("blockUI.static") && o.css("position", "static"),
                "function" == typeof r.onUnblock && r.onUnblock(i, r);
                var s = e(document.body)
                  , a = s.width()
                  , l = s[0].style.width;
                s.width(a - 1).width(a),
                s[0].style.width = l
            }
        }
        function i(t, n, r) {
            var i = n == window
              , s = e(n);
            if ((t || (!i || f) && (i || s.data("blockUI.isBlocked"))) && (s.data("blockUI.isBlocked", t),
            i && r.bindEvents && (!t || r.showOverlay))) {
                var a = "mousedown mouseup keydown keypress keyup touchstart touchend touchmove";
                t ? e(document).bind(a, r, o) : e(document).unbind(a, o)
            }
        }
        function o(t) {
            if ("keydown" === t.type && t.keyCode && 9 == t.keyCode && f && t.data.constrainTabKey) {
                var n = p
                  , r = !t.shiftKey && t.target === n[n.length - 1]
                  , i = t.shiftKey && t.target === n[0];
                if (r || i)
                    return setTimeout(function() {
                        s(i)
                    }, 10),
                    !1
            }
            var o = t.data
              , a = e(t.target);
            return a.hasClass("blockOverlay") && o.onOverlayClick && o.onOverlayClick(t),
            a.parents("div." + o.blockMsgClass).length > 0 ? !0 : 0 === a.parents().children().filter("div.blockUI").length
        }
        function s(e) {
            if (p) {
                var t = p[e === !0 ? p.length - 1 : 0];
                t && t.focus()
            }
        }
        function a(e, t, n) {
            var r = e.parentNode
              , i = e.style
              , o = (r.offsetWidth - e.offsetWidth) / 2 - l(r, "borderLeftWidth")
              , s = (r.offsetHeight - e.offsetHeight) / 2 - l(r, "borderTopWidth");
            t && (i.left = o > 0 ? o + "px" : "0"),
            n && (i.top = s > 0 ? s + "px" : "0")
        }
        function l(t, n) {
            return parseInt(e.css(t, n), 10) || 0
        }
        e.fn._fadeIn = e.fn.fadeIn;
        var u = e.noop || function() {}
          , c = /MSIE/.test(navigator.userAgent)
          , h = /MSIE 6.0/.test(navigator.userAgent) && !/MSIE 8.0/.test(navigator.userAgent)
          , d = (document.documentMode || 0,
        e.isFunction(document.createElement("div").style.setExpression));
        e.blockUI = function(e) {
            t(window, e)
        }
        ,
        e.unblockUI = function(e) {
            n(window, e)
        }
        ,
        e.growlUI = function(t, n, r, i) {
            var o = e('<div class="growlUI"></div>');
            t && o.append("<h1>" + t + "</h1>"),
            n && o.append("<h2>" + n + "</h2>"),
            void 0 === r && (r = 3e3);
            var s = function(t) {
                t = t || {},
                e.blockUI({
                    message: o,
                    fadeIn: "undefined" != typeof t.fadeIn ? t.fadeIn : 700,
                    fadeOut: "undefined" != typeof t.fadeOut ? t.fadeOut : 1e3,
                    timeout: "undefined" != typeof t.timeout ? t.timeout : r,
                    centerY: !1,
                    showOverlay: !1,
                    onUnblock: i,
                    css: e.blockUI.defaults.growlCSS
                })
            };
            s();
            o.css("opacity");
            o.mouseover(function() {
                s({
                    fadeIn: 0,
                    timeout: 3e4
                });
                var t = e(".blockMsg");
                t.stop(),
                t.fadeTo(300, 1)
            }).mouseout(function() {
                e(".blockMsg").fadeOut(1e3)
            })
        }
        ,
        e.fn.block = function(n) {
            if (this[0] === window)
                return e.blockUI(n),
                this;
            var r = e.extend({}, e.blockUI.defaults, n || {});
            return this.each(function() {
                var t = e(this);
                r.ignoreIfBlocked && t.data("blockUI.isBlocked") || t.unblock({
                    fadeOut: 0
                })
            }),
            this.each(function() {
                "static" == e.css(this, "position") && (this.style.position = "relative",
                e(this).data("blockUI.static", !0)),
                this.style.zoom = 1,
                t(this, n)
            })
        }
        ,
        e.fn.unblock = function(t) {
            return this[0] === window ? (e.unblockUI(t),
            this) : this.each(function() {
                n(this, t)
            })
        }
        ,
        e.blockUI.version = 2.7,
        e.blockUI.defaults = {
            message: "<h1>Please wait...</h1>",
            title: null,
            draggable: !0,
            theme: !1,
            css: {
                padding: 0,
                margin: 0,
                width: "30%",
                top: "40%",
                left: "35%",
                textAlign: "center",
                color: "#000",
                border: "3px solid #aaa",
                backgroundColor: "#fff",
                cursor: "wait"
            },
            themedCSS: {
                width: "30%",
                top: "40%",
                left: "35%"
            },
            overlayCSS: {
                backgroundColor: "#000",
                opacity: .6,
                cursor: "wait"
            },
            cursorReset: "default",
            growlCSS: {
                width: "350px",
                top: "10px",
                left: "",
                right: "10px",
                border: "none",
                padding: "5px",
                opacity: .6,
                cursor: "default",
                color: "#fff",
                backgroundColor: "#000",
                "-webkit-border-radius": "10px",
                "-moz-border-radius": "10px",
                "border-radius": "10px"
            },
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank",
            forceIframe: !1,
            baseZ: 1e3,
            centerX: !0,
            centerY: !0,
            allowBodyStretch: !0,
            bindEvents: !0,
            constrainTabKey: !0,
            fadeIn: 200,
            fadeOut: 400,
            timeout: 0,
            showOverlay: !0,
            focusInput: !0,
            focusableElements: ":input:enabled:visible",
            onBlock: null,
            onUnblock: null,
            onOverlayClick: null,
            quirksmodeOffsetHack: 4,
            blockMsgClass: "blockMsg",
            ignoreIfBlocked: !1
        };
        var f = null
          , p = []
    }
    "function" == typeof define && define.amd ? define("jqBlockUI", ["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(),
function(e) {
    "function" == typeof define && define.amd ? define("jqCookie", ["jquery"], e) : e("object" == typeof exports ? require("jquery") : jQuery)
}(function(e) {
    function t(e) {
        return a.raw ? e : encodeURIComponent(e)
    }
    function n(e) {
        return a.raw ? e : decodeURIComponent(e)
    }
    function r(e) {
        return t(a.json ? JSON.stringify(e) : String(e))
    }
    function i(e) {
        0 === e.indexOf('"') && (e = e.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
        try {
            return e = decodeURIComponent(e.replace(s, " ")),
            a.json ? JSON.parse(e) : e
        } catch (t) {}
    }
    function o(t, n) {
        var r = a.raw ? t : i(t);
        return e.isFunction(n) ? n(r) : r
    }
    var s = /\+/g
      , a = e.cookie = function(i, s, l) {
        if (void 0 !== s && !e.isFunction(s)) {
            if (l = e.extend({}, a.defaults, l),
            "number" == typeof l.expires) {
                var u = l.expires
                  , c = l.expires = new Date;
                c.setTime(+c + 864e5 * u)
            }
            return document.cookie = [t(i), "=", r(s), l.expires ? "; expires=" + l.expires.toUTCString() : "", l.path ? "; path=" + l.path : "", l.domain ? "; domain=" + l.domain : "", l.secure ? "; secure" : ""].join("")
        }
        for (var h = i ? void 0 : {}, d = document.cookie ? document.cookie.split("; ") : [], f = 0, p = d.length; p > f; f++) {
            var m = d[f].split("=")
              , g = n(m.shift())
              , v = m.join("=");
            if (i && i === g) {
                h = o(v, s);
                break
            }
            i || void 0 === (v = o(v)) || (h[g] = v)
        }
        return h
    }
    ;
    a.defaults = {},
    e.removeCookie = function(t, n) {
        return void 0 === e.cookie(t) ? !1 : (e.cookie(t, "", e.extend({}, n, {
            expires: -1
        })),
        !e.cookie(t))
    }
}),
define("utils/handlebarsHelpers/divider_display", ["Handlebars"], function(e) {
    e.registerHelper("divider_display", function(e) {
        var t = [];
        return t.length = e[this.index] + 3,
        t.join("-") + "|"
    })
}),
define("utils/handlebarsHelpers/each_simple_value_with_index", ["Handlebars"], function(e) {
    e.registerHelper("each_simple_value_with_index", function(e, t) {
        var n = "";
        k = 0;
        for (var r = 0, i = e.length; i > r; r++) {
            var o = {
                value: e[r]
            };
            o.index = k,
            o.first = 0 == k,
            o.last = k == e.length,
            n += t.fn(o),
            k++
        }
        return n
    })
}),
define("utils/handlebarsHelpers/each_with_index", ["Handlebars"], function(e) {
    e.registerHelper("each_with_index", function(e, t) {
        for (var n = "", r = 0, i = 0, o = e.length; o > i; i++)
            if (e[i]) {
                var s = e[i];
                s.index = r,
                s.first = 0 == r,
                s.last = r == e.length,
                n += t.fn(s),
                r++
            }
        return n
    })
}),
define("utils/handlebarsHelpers/result_display_padded", ["Handlebars"], function(e) {
    e.registerHelper("result_display_padded", function(e) {
        var t = [];
        return t.length = e[this.index] - this.value.toString().length + 1,
        t.join(" ") + this.value.toString()
    })
}),
define("utils/handlebarsHelpers/result_display", ["jquery", "Handlebars"], function(e, t) {
    t.registerHelper("result_display", function(n) {
        var r = /\b((?:https?:\/\/|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}\/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:'".,<>?������]))/gi;
        return e.isPlainObject(n) ? JSON.stringify(n, null, 4) : null == n ? "(null)" : n === !1 ? "false" : "string" == typeof n && n.match(r) && t.Utils.escapeExpression(n) == n ? new t.SafeString(n.replace(r, "<a href='$1' target='_new'>$1</a>")) : n
    })
}),
define("utils/handlebarsHelpers/code_format", ["Handlebars"], function(e) {
    e.registerHelper("code_format", function(e) {
        for (var t = [], n = e.split("\n"), r = 0; r < n.length; r++)
            t.push("    " + n[r]);
        return t.join("\n")
    })
}),
define("utils/handlebarsHelpers/add", ["Handlebars"], function(e) {
    e.registerHelper("add", function(e, t) {
        return e + t
    })
}),
requirejs.config({
    paths: {
        jquery: "../node_modules/jquery/dist/jquery",
        jqBlockUI: "../node_modules/block-ui/jquery.blockUI",
        jqCookie: "../node_modules/jquery.cookie/jquery.cookie",
        underscore: "../node_modules/lodash/index",
        text: "../node_modules/requirejs-text/text",
        codemirror: "../node_modules/codemirror/lib/codemirror",
        codemirror_sql: "../node_modules/codemirror/mode/sql/sql",
        Backbone: "../node_modules/backbone/backbone",
        Handlebars: "../node_modules/handlebars/dist/handlebars",
        md5: "../node_modules/blueimp-md5/js/md5",
        Bootstrap: "libs/bootstrap.min",
        DateFormat: "libs/date.format",
        XPlans: "libs/xplans",
        DDLBuilder: "libs/ddl_builder",
        utils: "fiddle_backbone/utils"
    },
    map: {
        "*": {
            "../../lib/codemirror": "codemirror"
        }
    },
    shim: {
        DateFormat: {
            exports: "dateFormat"
        },
        "XPlans/oracle/loadswf": {
            deps: ["XPlans/oracle/flashver"],
            exports: "loadswf"
        },
        "XPlans/mssql": {
            exports: "QP"
        },
        jqBlockUI: ["jquery"],
        jqCookie: ["jquery"],
        Bootstrap: ["jquery"]
    }
}),
require(["jquery", "underscore", "fiddle_backbone/app", "DDLBuilder/ddl_builder", "Bootstrap", "jqBlockUI", "jqCookie", "utils/handlebarsHelpers/divider_display", "utils/handlebarsHelpers/each_simple_value_with_index", "utils/handlebarsHelpers/each_with_index", "utils/handlebarsHelpers/result_display_padded", "utils/handlebarsHelpers/result_display", "utils/handlebarsHelpers/code_format", "utils/handlebarsHelpers/add"], function(e, t, n, r) {
    function i(t) {
        "none" == e("#exit_fullscreen").css("display") ? (e("body").css("overflow-y", "hidden"),
        e(".navbar-fixed-top").css("position", "fixed").css("margin", 0),
        e("#exit_fullscreen").css("display", "block"),
        e("#exit_fullscreen span").text("Exit Fullscreen " + t),
        e(".nav-collapse, .btn-navbar, #db_type_label_collapsed .navbar-text").css("display", "none")) : (e("body").css("overflow-y", "auto"),
        e("body").css("height", "100%"),
        e(".navbar-fixed-top").css("position", "").css("margin", ""),
        e("#exit_fullscreen").css("display", "none"),
        e(".nav-collapse, .btn-navbar, #db_type_label_collapsed .navbar-text").css("display", ""))
    }
    function o() {
        var t = e(window).height() - 210;
        if (t > 400) {
            e("#schema-output").width();
            e("#schema-output").height(.7 * (t - 10)),
            e("#output").css("min-height", .3 * (t - 10) + "px"),
            fiddleBackbone.schemaDefView.editor.isFullscreen() ? (e("#fiddleFormDDL .CodeMirror-scroll, #schema_ddl").css("height", e(window).height() + "px"),
            e("#fiddleFormDDL .CodeMirror-scroll .CodeMirror-gutter").height("height", e(window).height() + "px")) : (e("#fiddleFormDDL .CodeMirror-scroll").css("height", e("#fiddleFormDDL").height() - (5 + e("#fiddleFormDDL .action_buttons").height()) + "px"),
            e("#schema_ddl").css("height", e("#fiddleFormDDL").height() - (15 + e("#fiddleFormDDL .action_buttons").height()) + "px"),
            e("#fiddleFormDDL .CodeMirror-scroll .CodeMirror-gutter").height(e("#fiddleFormDDL .CodeMirror-scroll").height() - 2)),
            fiddleBackbone.queryView.editor.isFullscreen() ? (e("#fiddleFormSQL .CodeMirror-scroll, #sql").css("height", e(window).height() + "px"),
            e("#fiddleFormSQL .CodeMirror-scroll .CodeMirror-gutter").css("height", e(window).height() + "px")) : (e("#fiddleFormSQL .CodeMirror-scroll").css("height", e("#fiddleFormSQL").height() - (5 + e("#fiddleFormSQL .action_buttons").height()) + "px"),
            e("#sql").css("height", e("#fiddleFormSQL").height() - (15 + e("#fiddleFormSQL .action_buttons").height()) + "px"),
            e("#fiddleFormSQL .CodeMirror-scroll .CodeMirror-gutter").height(e("#fiddleFormSQL .CodeMirror-scroll").height() - 2)),
            e("#browser").height(e("#fiddleFormDDL .CodeMirror-scroll").height());
            var n = function(t) {
                var n = {
                    height: e(".blockMsg", t).height(),
                    width: e(".blockMsg", t).width()
                }
                  , r = {
                    height: e(t).height(),
                    width: e(t).width()
                };
                e(".blockMsg", t).css("top", (r.height - n.height) / 2).css("left", (r.width - n.width) / 2)
            };
            n(e("div.sql.panel")),
            n(e("#output")),
            fiddleBackbone.schemaDefView.refresh(),
            fiddleBackbone.queryView.refresh()
        }
    }
    e.blockUI.defaults.overlayCSS.cursor = "auto",
    e.blockUI.defaults.css.cursor = "auto",
    fiddleBackbone = n.initialize(),
    e("#textToDDLModal .btn").click(function(t) {
        t.preventDefault();
        var n = new r({
            tableName: e("#tableName").val()
        }).setupForDBType(fiddleBackbone.dbTypes.getSelectedType().get("simple_name"), fiddleBackbone.schemaDef.get("statement_separator"))
          , i = n.parse(e("#raw").val());
        e("#parseResults").text(i),
        "appendDDL" == e(this).attr("id") && (fiddleBackbone.schemaDef.set("ddl", fiddleBackbone.schemaDef.get("ddl") + "\n\n" + i),
        fiddleBackbone.schemaDef.trigger("reloaded"),
        e("#textToDDLModal").modal("hide"))
    }),
    e("#exit_fullscreen").on("click", function(e) {
        e.preventDefault(),
        fiddleBackbone.schemaDefView.editor.setFullscreen(!1),
        fiddleBackbone.queryView.editor.setFullscreen(!1),
        i(""),
        o()
    }),
    e("#schemaFullscreen").on("click", function(e) {
        e.preventDefault(),
        fiddleBackbone.schemaDefView.editor.setFullscreen(!0),
        i("Schema Editor")
    }),
    e("#queryFullscreen").on("click", function(e) {
        e.preventDefault(),
        fiddleBackbone.queryView.editor.setFullscreen(!0),
        i("Query Editor")
    }),
    e("#schemaBrowser").on("click", function(t) {
        t.preventDefault(),
        e(this).attr("disabled") || (e("#fiddleFormDDL .CodeMirror, .ddl_actions").css("display", "none"),
        e("#browser, .browser_actions").css("display", "block"))
    }),
    e("#browser").on("click", ".tables a", function(t) {
        t.preventDefault(),
        e("i", this).toggleClass("icon-minus icon-plus"),
        e(this).siblings(".columns").toggle()
    }),
    e("#ddlEdit").on("click", function(t) {
        t.preventDefault(),
        e("#fiddleFormDDL .CodeMirror, .ddl_actions").css("display", "block"),
        e("#browser, .browser_actions").css("display", "none")
    }),
    e(window).bind("resize", o),
    setTimeout(o, 1),
    e(".nav").on("click", "a", function(t) {
        "db_type_id" !== e(this).parent("li").attr("id") && "userOptions" !== e(this).parent("li").attr("id") ? e(".nav-collapse.in").collapse("hide") : e(this).parents("div.nav-collapse.in").css("height", "auto")
    })
}),
define("main", function() {});
//# sourceMappingURL=main_min.js.map
