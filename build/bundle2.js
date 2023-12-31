!(function (e) {
    function t(n) {
        if (r[n]) return r[n].exports;
        var o = (r[n] = { i: n, l: !1, exports: {} });
        return e[n].call(o.exports, o, o.exports, t), (o.l = !0), o.exports;
    }
    var r = {};
    (t.m = e),
        (t.c = r),
        (t.d = function (e, r, n) {
            t.o(e, r) || Object.defineProperty(e, r, { configurable: !1, enumerable: !0, get: n });
        }),
        (t.n = function (e) {
            var r =
                e && e.__esModule
                    ? function () {
                          return e.default;
                      }
                    : function () {
                          return e;
                      };
            return t.d(r, "a", r), r;
        }),
        (t.o = function (e, t) {
            return Object.prototype.hasOwnProperty.call(e, t);
        }),
        (t.p = ""),
        t((t.s = 33));
})([
    function (e, t, r) {
        var n = r(41),
            o = r(44),
            i = r(50),
            a = r(59),
            c = r(23),
            s = r(24);
        e.exports = { diff: n, patch: o, h: i, create: a, VNode: c, VText: s };
    },
    function (e, t) {
        function r(e) {
            return e && "Widget" === e.type;
        }
        e.exports = r;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            e in d.a || (Object(v.d)("warn", "There is no level " + e + "."), (e = 0)), p.a.dispatch({ type: h.a, levelNumber: e });
        }
        function o(e, t) {
            var r = p.a.getState(),
                n = r.playerPosition;
            i(n.row + e, n.column + t);
        }
        function i(e, t) {
            var r = p.a.getState();
            if (Object(m.a)(r, e, t)) {
                1 !== Object(m.b)(r, e, t) || (p.a.dispatch({ type: h.c, row: e, column: t }), Object(v.e)(b.b), c());
            }
        }
        function a() {
            n(p.a.getState().currentLevelNumber);
        }
        function c() {
            var e = p.a.getState();
            Object(m.d)(e) ? f() : Object(m.c)(e) && u();
        }
        function s() {
            var e = p.a.getState(),
                t = e.currentLevelNumber,
                r = t + 1;
            setTimeout(function () {
                return n(r);
            }, g.a);
        }
        function u() {
            p.a.dispatch({ type: h.b }), Object(v.e)(b.a), l();
        }
        function l() {
            setTimeout(a, g.a);
        }
        function f() {
            var e = p.a.getState(),
                t = e.moveCount;
            Object(v.d)("info", "Completed in " + t + " moves."), p.a.dispatch({ type: h.d }), Object(v.e)(b.c), s();
        }
        (t.a = n), (t.b = o), (t.c = i), (t.d = a);
        var d = r(14),
            p = r(25),
            m = r(80),
            v = r(12),
            h = r(32),
            b = r(81),
            g = r(6);
    },
    function (e, t) {
        e.exports = "2";
    },
    function (e, t, r) {
        function n(e) {
            return e && "VirtualNode" === e.type && e.version === o;
        }
        var o = r(3);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n;
        }),
            r.d(t, "c", function () {
                return o;
            }),
            r.d(t, "b", function () {
                return i;
            });
        var n = "EASY",
            o = "MEDIUM",
            i = "HARD";
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n;
        }),
            r.d(t, "b", function () {
                return o;
            }),
            r.d(t, "c", function () {
                return i;
            });
        var n = 2e3,
            o = 1.1,
            i = 10;
    },
    function (e, t, r) {
        function n(e) {
            return e && "VirtualText" === e.type && e.version === o;
        }
        var o = r(3);
        e.exports = n;
    },
    function (e, t) {
        function r(e) {
            return e && "Thunk" === e.type;
        }
        e.exports = r;
    },
    function (e, t) {
        function r(e) {
            return e && (("function" == typeof e.hook && !e.hasOwnProperty("hook")) || ("function" == typeof e.unhook && !e.hasOwnProperty("unhook")));
        }
        e.exports = r;
    },
    function (e, t) {
        var r;
        r = (function () {
            return this;
        })();
        try {
            r = r || Function("return this")() || (0, eval)("this");
        } catch (e) {
            "object" == typeof window && (r = window);
        }
        e.exports = r;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }
        r.d(t, "a", function () {
            return c;
        }),
            r.d(t, "b", function () {
                return s;
            });
        var o,
            i,
            a = r(5),
            c = ((o = {}), n(o, a.a, "Easy"), n(o, a.c, "Medium"), n(o, a.b, "Hard"), o),
            s = ((i = {}), n(i, a.a, 0), n(i, a.c, 10), n(i, a.b, 20), i);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            return function () {
                var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : e,
                    n = arguments[1],
                    o = t[n.type];
                return o ? o(r, n) : r;
            };
        }
        function o(e, t) {
            return Math.abs(e.row - t.row) + Math.abs(e.column - t.column);
        }
        function i(e) {
            var t = [];
            switch (e) {
                case u.a:
                    t = f.slice(0, 10);
                    break;
                case u.c:
                    t = f.slice(10, 20);
                    break;
                case u.b:
                    t = f.slice(20, 30);
            }
            return t;
        }
        function a(e) {
            var t;
            if (l.b) {
                for (var r = arguments.length, n = Array(r > 1 ? r - 1 : 0), o = 1; o < r; o++) n[o - 1] = arguments[o];
                (t = console)[e].apply(t, n);
            }
        }
        function c(e) {
            l.a || (d && (e.pause(), (e.currentTime = 0), e.play()));
        }
        (t.a = n), (t.b = o), (t.c = i), (t.d = a), (t.e = c);
        var s = r(14),
            u = r(5),
            l = r(31),
            f = s.a.map(function (e, t) {
                return t;
            }),
            d = navigator.userAgent.toLowerCase().includes("chrome");
    },
    function (e, t) {
        function r(e) {
            return "[object Array]" === o.call(e);
        }
        var n = Array.isArray,
            o = Object.prototype.toString;
        e.exports = n || r;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return e.map(function (e) {
                return e.split("");
            });
        }
        var o = [
            { maxMoves: 3, playerPosition: { row: 0, column: 1 }, tiles: n(["0_", "00"]) },
            { maxMoves: 4, playerPosition: { row: 1, column: 0 }, tiles: n(["_0", "0x"]) },
            { maxMoves: 8, playerPosition: { row: 2, column: 0 }, tiles: n(["_00", "00x", "0_0"]) },
            { maxMoves: 8, playerPosition: { row: 0, column: 1 }, tiles: n(["_00", "0x0", "_00"]) },
            { maxMoves: 6, playerPosition: { row: 1, column: 1 }, tiles: n(["_0x", "0_0", "x_0"]) },
            { maxMoves: 7, playerPosition: { row: 2, column: 2 }, tiles: n(["_x0", "000", "_x0"]) },
            { maxMoves: 8, playerPosition: { row: 2, column: 1 }, tiles: n(["00_", "0x_", "_x0"]) },
            { maxMoves: 10, playerPosition: { row: 1, column: 1 }, tiles: n(["00x", "0_0", "0x0"]) },
            { maxMoves: 12, playerPosition: { row: 0, column: 2 }, tiles: n(["x0_", "0x_", "___"]) },
            { maxMoves: 12, playerPosition: { row: 0, column: 2 }, tiles: n(["0_0", "_x_", "0_0"]) },
            { maxMoves: 12, playerPosition: { row: 0, column: 2 }, tiles: n(["_0__", "x_x_", "0_00", "0000"]) },
            { maxMoves: 13, playerPosition: { row: 3, column: 3 }, tiles: n(["__x0", "x___", "0_x0", "_x00"]) },
            { maxMoves: 10, playerPosition: { row: 2, column: 1 }, tiles: n(["_x00", "0_0_", "x_0_", "_0__"]) },
            { maxMoves: 11, playerPosition: { row: 2, column: 3 }, tiles: n(["x00x", "_000", "x_0x", "0_xx"]) },
            { maxMoves: 12, playerPosition: { row: 3, column: 0 }, tiles: n(["000_", "0x_0", "00_0", "_x__"]) },
            { maxMoves: 9, playerPosition: { row: 1, column: 2 }, tiles: n(["__0_", "x000", "_00_", "_0__"]) },
            { maxMoves: 17, playerPosition: { row: 0, column: 1 }, tiles: n(["00__", "x_x_", "x_x0", "x0x0"]) },
            { maxMoves: 20, playerPosition: { row: 2, column: 1 }, tiles: n(["00x0", "x000", "00x0", "00x0"]) },
            { maxMoves: 13, playerPosition: { row: 2, column: 1 }, tiles: n(["_x00", "00_0", "_x0x", "000_"]) },
            { maxMoves: 12, playerPosition: { row: 2, column: 2 }, tiles: n(["0_00", "_0_0", "____", "0___"]) },
            { maxMoves: 17, playerPosition: { row: 3, column: 4 }, tiles: n(["__0__", "_xx_x", "0_0_0", "x0xxx", "_0000"]) },
            { maxMoves: 21, playerPosition: { row: 2, column: 3 }, tiles: n(["00000", "x_0_0", "0_0_0", "0_x_0", "00000"]) },
            { maxMoves: 27, playerPosition: { row: 2, column: 0 }, tiles: n(["x0000", "00x00", "x0_00", "0__00", "00000"]) },
            { maxMoves: 27, playerPosition: { row: 2, column: 1 }, tiles: n(["00000", "x0x00", "x000_", "00x00", "_0000"]) },
            { maxMoves: 21, playerPosition: { row: 4, column: 2 }, tiles: n(["___00", "0x0x0", "_x_x0", "_x0x0", "0__00"]) },
            { maxMoves: 20, playerPosition: { row: 2, column: 2 }, tiles: n(["00_00", "0_0_0", "000__", "___00", "x__00"]) },
            { maxMoves: 24, playerPosition: { row: 2, column: 2 }, tiles: n(["00_00", "0x_x0", "__000", "0x_x_", "0_0__"]) },
            { maxMoves: 23, playerPosition: { row: 1, column: 3 }, tiles: n(["00x00", "00_x0", "0x_0_", "000_0", "x____"]) },
            { maxMoves: 17, playerPosition: { row: 3, column: 3 }, tiles: n(["00_xx", "0___x", "____0", "_00x0", "_00_x"]) },
            { maxMoves: 23, playerPosition: { row: 2, column: 3 }, tiles: n(["___00", "0000_", "0x0x_", "00x__", "_00_0"]) },
        ];
        t.a = o;
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n;
        }),
            r.d(t, "b", function () {
                return o;
            }),
            r.d(t, "c", function () {
                return i;
            }),
            r.d(t, "d", function () {
                return a;
            });
        var n = "LOST",
            o = "MAIN_MENU",
            i = "PLAYING",
            a = "WON";
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "b", function () {
            return n;
        }),
            r.d(t, "c", function () {
                return o;
            }),
            r.d(t, "a", function () {
                return i;
            });
        var n = "_",
            o = "0",
            i = "x";
    },
    function (e, t, r) {
        function n(e, t, r) {
            (this.type = Number(e)), (this.vNode = t), (this.patch = r);
        }
        var o = r(3);
        (n.NONE = 0), (n.VTEXT = 1), (n.VNODE = 2), (n.WIDGET = 3), (n.PROPS = 4), (n.ORDER = 5), (n.INSERT = 6), (n.REMOVE = 7), (n.THUNK = 8), (e.exports = n), (n.prototype.version = o), (n.prototype.type = "VirtualPatch");
    },
    function (e, t, r) {
        function n(e, t) {
            var r = e,
                n = t;
            return s(t) && (n = o(t, e)), s(e) && (r = o(e, null)), { a: r, b: n };
        }
        function o(e, t) {
            var r = e.vnode;
            if ((r || (r = e.vnode = e.render(t)), !(i(r) || a(r) || c(r)))) throw new Error("thunk did not return a valid node");
            return r;
        }
        var i = r(4),
            a = r(7),
            c = r(1),
            s = r(8);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        e.exports = function (e) {
            return "object" == typeof e && null !== e;
        };
    },
    function (e, t, r) {
        (function (t) {
            var n,
                o = void 0 !== t ? t : "undefined" != typeof window ? window : {},
                i = r(46);
            "undefined" != typeof document ? (n = document) : (n = o["__GLOBAL_DOCUMENT_CACHE@4"]) || (n = o["__GLOBAL_DOCUMENT_CACHE@4"] = i), (e.exports = n);
        }.call(t, r(10)));
    },
    function (e, t, r) {
        function n(e, t) {
            var r = t ? t.document || o : o,
                l = t ? t.warn : null;
            if (((e = u(e).a), s(e))) return e.init();
            if (c(e)) return r.createTextNode(e.text);
            if (!a(e)) return l && l("Item is not a valid virtual dom node", e), null;
            var f = null === e.namespace ? r.createElement(e.tagName) : r.createElementNS(e.namespace, e.tagName),
                d = e.properties;
            i(f, d);
            for (var p = e.children, m = 0; m < p.length; m++) {
                var v = n(p[m], t);
                v && f.appendChild(v);
            }
            return f;
        }
        var o = r(20),
            i = r(22),
            a = r(4),
            c = r(7),
            s = r(1),
            u = r(18);
        e.exports = n;
    },
    function (e, t, r) {
        function n(e, t, r) {
            for (var n in t) {
                var a = t[n];
                void 0 === a ? o(e, n, a, r) : s(a) ? (o(e, n, a, r), a.hook && a.hook(e, n, r ? r[n] : void 0)) : c(a) ? i(e, t, r, n, a) : (e[n] = a);
            }
        }
        function o(e, t, r, n) {
            if (n) {
                var o = n[t];
                if (s(o)) o.unhook && o.unhook(e, t, r);
                else if ("attributes" === t) for (var i in o) e.removeAttribute(i);
                else if ("style" === t) for (var a in o) e.style[a] = "";
                else e[t] = "string" == typeof o ? "" : null;
            }
        }
        function i(e, t, r, n, o) {
            var i = r ? r[n] : void 0;
            if ("attributes" !== n) {
                if (i && c(i) && a(i) !== a(o)) return void (e[n] = o);
                c(e[n]) || (e[n] = {});
                var s = "style" === n ? "" : void 0;
                for (var u in o) {
                    var l = o[u];
                    e[n][u] = void 0 === l ? s : l;
                }
            } else
                for (var f in o) {
                    var d = o[f];
                    void 0 === d ? e.removeAttribute(f) : e.setAttribute(f, d);
                }
        }
        function a(e) {
            return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0;
        }
        var c = r(19),
            s = r(9);
        e.exports = n;
    },
    function (e, t, r) {
        function n(e, t, r, n, o) {
            (this.tagName = e), (this.properties = t || u), (this.children = r || l), (this.key = null != n ? String(n) : void 0), (this.namespace = "string" == typeof o ? o : null);
            var f,
                d = (r && r.length) || 0,
                p = 0,
                m = !1,
                v = !1,
                h = !1;
            for (var b in t)
                if (t.hasOwnProperty(b)) {
                    var g = t[b];
                    s(g) && g.unhook && (f || (f = {}), (f[b] = g));
                }
            for (var y = 0; y < d; y++) {
                var x = r[y];
                i(x)
                    ? ((p += x.count || 0), !m && x.hasWidgets && (m = !0), !v && x.hasThunks && (v = !0), h || (!x.hooks && !x.descendantHooks) || (h = !0))
                    : !m && a(x)
                    ? "function" == typeof x.destroy && (m = !0)
                    : !v && c(x) && (v = !0);
            }
            (this.count = d + p), (this.hasWidgets = m), (this.hasThunks = v), (this.hooks = f), (this.descendantHooks = h);
        }
        var o = r(3),
            i = r(4),
            a = r(1),
            c = r(8),
            s = r(9);
        e.exports = n;
        var u = {},
            l = [];
        (n.prototype.version = o), (n.prototype.type = "VirtualNode");
    },
    function (e, t, r) {
        function n(e) {
            this.text = String(e);
        }
        var o = r(3);
        (e.exports = n), (n.prototype.version = o), (n.prototype.type = "VirtualText");
    },
    function (e, t, r) {
        "use strict";
        var n = r(63),
            o = r(79),
            i = Object(n.a)(o);
        t.a = Object(n.b)(i);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            function i() {
                b === h && (b = h.slice());
            }
            function s() {
                return v;
            }
            function u(e) {
                if ("function" != typeof e) throw new Error("Expected listener to be a function.");
                var t = !0;
                return (
                    i(),
                    b.push(e),
                    function () {
                        if (t) {
                            (t = !1), i();
                            var r = b.indexOf(e);
                            b.splice(r, 1);
                        }
                    }
                );
            }
            function l(e) {
                if (!Object(o.a)(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
                if (void 0 === e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
                if (g) throw new Error("Reducers may not dispatch actions.");
                try {
                    (g = !0), (v = m(v, e));
                } finally {
                    g = !1;
                }
                for (var t = (h = b), r = 0; r < t.length; r++) {
                    (0, t[r])();
                }
                return e;
            }
            function f(e) {
                if ("function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
                (m = e), l({ type: c.INIT });
            }
            function d() {
                var e,
                    t = u;
                return (
                    (e = {
                        subscribe: function (e) {
                            function r() {
                                e.next && e.next(s());
                            }
                            if ("object" != typeof e) throw new TypeError("Expected the observer to be an object.");
                            return r(), { unsubscribe: t(r) };
                        },
                    }),
                    (e[a.a] = function () {
                        return this;
                    }),
                    e
                );
            }
            var p;
            if (("function" == typeof t && void 0 === r && ((r = t), (t = void 0)), void 0 !== r)) {
                if ("function" != typeof r) throw new Error("Expected the enhancer to be a function.");
                return r(n)(e, t);
            }
            if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
            var m = e,
                v = t,
                h = [],
                b = h,
                g = !1;
            return l({ type: c.INIT }), (p = { dispatch: l, subscribe: u, getState: s, replaceReducer: f }), (p[a.a] = d), p;
        }
        r.d(t, "a", function () {
            return c;
        }),
            (t.b = n);
        var o = r(27),
            i = r(72),
            a = r.n(i),
            c = { INIT: "@@redux/INIT" };
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (!Object(a.a)(e) || Object(o.a)(e) != c) return !1;
            var t = Object(i.a)(e);
            if (null === t) return !0;
            var r = f.call(t, "constructor") && t.constructor;
            return "function" == typeof r && r instanceof r && l.call(r) == d;
        }
        var o = r(64),
            i = r(69),
            a = r(71),
            c = "[object Object]",
            s = Function.prototype,
            u = Object.prototype,
            l = s.toString,
            f = u.hasOwnProperty,
            d = l.call(Object);
        t.a = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(65),
            o = n.a.Symbol;
        t.a = o;
    },
    function (e, t, r) {
        "use strict";
    },
    function (e, t, r) {
        "use strict";
        function n() {
            for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return 0 === t.length
                ? function (e) {
                      return e;
                  }
                : 1 === t.length
                ? t[0]
                : t.reduce(function (e, t) {
                      return function () {
                          return e(t.apply(void 0, arguments));
                      };
                  });
        }
        t.a = n;
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n;
        }),
            r.d(t, "b", function () {
                return o;
            });
        var n = "true" === localStorage.getItem("audioDisabled"),
            o = "true" === localStorage.getItem("devMode");
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n;
        }),
            r.d(t, "b", function () {
                return o;
            }),
            r.d(t, "c", function () {
                return i;
            }),
            r.d(t, "d", function () {
                return a;
            });
        var n = "LOAD_LEVEL",
            o = "LOSE",
            i = "MOVE",
            a = "WIN";
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }
        function o() {
            var e = l.a.getState();
            Object(u.a)(e);
        }
        Object.defineProperty(t, "__esModule", { value: !0 });
        var i,
            a = r(34),
            c = (r.n(a), r(39)),
            s = r.n(c),
            u = r(40),
            l = r(25),
            f = r(2),
            d = r(15),
            p = r(91),
            m =
                ((i = {}),
                n(i, p.b, function () {
                    return Object(f.b)(0, -1);
                }),
                n(i, p.e, function () {
                    return Object(f.b)(-1, 0);
                }),
                n(i, p.d, function () {
                    return Object(f.b)(0, 1);
                }),
                n(i, p.a, function () {
                    return Object(f.b)(1, 0);
                }),
                n(i, p.c, f.d),
                i),
            v = new Set();
        document.addEventListener("keydown", function (e) {
            var t = e.keyCode;
            if (!v.has(t)) {
                if (l.a.getState().status === d.c) {
                    var r = m[t];
                    r && (r(), v.add(t), e.preventDefault(), e.stopPropagation());
                }
            }
        }),
            document.addEventListener("keyup", function (e) {
                v.delete(e.keyCode);
            }),
            s.a.attach(document.body),
            l.a.subscribe(o),
            o();
    },
    function (e, t, r) {
        var n = r(35);
        "string" == typeof n && (n = [[e.i, n, ""]]);
        var o = { hmr: !0 };
        o.transform = void 0;
        r(37)(n, o);
        n.locals && (e.exports = n.locals);
    },
    function (e, t, r) {
        (t = e.exports = r(36)(void 0)),
            t.push([
                e.i,
                '@-webkit-keyframes breathe{50%{-webkit-transform:translateZ(8rem) scale(.95);transform:translateZ(8rem) scale(.95)}}@keyframes breathe{50%{-webkit-transform:translateZ(8rem) scale(.95);transform:translateZ(8rem) scale(.95)}}@-webkit-keyframes player-bob{50%{-webkit-transform:translateZ(14rem);transform:translateZ(14rem)}}@keyframes player-bob{50%{-webkit-transform:translateZ(14rem);transform:translateZ(14rem)}}*,:after,:before{-webkit-box-sizing:border-box;box-sizing:border-box;outline:none}body,html{height:100%;margin:0;padding:0;width:100%}html{font-size:62.5%}body{background-color:#433c38;background-image:radial-gradient(circle,#433c38,#000);display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;font-family:-apple-system,Helvetica Neue,Helvetica,Arial,sans-serif;opacity:1;overflow:hidden;padding:0;-webkit-transition:opacity 1s;transition:opacity 1s}button{cursor:pointer}header{background-color:#00b3c5;border:2px solid #fff;border:.2rem solid #fff;border-radius:2rem;height:20px;height:2rem;margin:0 auto;margin-top:20px;margin-top:2rem;overflow:hidden}footer,header{-ms-flex-negative:0;flex-shrink:0;opacity:.95}footer{color:#fff;display:block;font-size:12px;font-size:1.2rem;font-weight:300;margin-bottom:20px;margin-bottom:2rem;margin-top:auto;text-align:center}footer a{color:#fff;border-bottom:2px solid transparent;border-bottom:.2rem solid transparent;font-weight:500;text-decoration:none;-webkit-transition:border-bottom-color .1s;transition:border-bottom-color .1s}footer a:hover{border-bottom-color:#fff}main{-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;position:relative}nav{-webkit-box-orient:horizontal;-ms-flex-direction:row;flex-direction:row;-ms-flex-negative:0;flex-shrink:0;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;margin-bottom:10px;margin-bottom:1rem;margin-left:auto;margin-right:auto;opacity:.95;text-align:center}#game,nav{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-direction:normal}#game{-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-orient:vertical;-ms-flex-direction:column;flex-direction:column;-webkit-box-flex:1;-ms-flex-positive:1;flex-grow:1;-webkit-box-pack:justify;-ms-flex-pack:justify;justify-content:space-between;-webkit-transition:-webkit-filter .5s;transition:-webkit-filter .5s;transition:filter .5s;transition:filter .5s,-webkit-filter .5s}#game.won{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="4.8" /></filter></svg>#filter\');-webkit-filter:blur(3px);filter:blur(3px);-webkit-filter:blur(.3rem);filter:blur(.3rem)}#game.lost{filter:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg"><filter id="filter"><feGaussianBlur stdDeviation="4.8" /><feColorMatrix type="matrix" color-interpolation-filters="sRGB" values="0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0.2126 0.7152 0.0722 0 0 0 0 0 1 0" /></filter></svg>#filter\');-webkit-filter:blur(3px) grayscale(100%);filter:blur(3px) grayscale(100%);-webkit-filter:blur(.3rem) grayscale(100%);filter:blur(.3rem) grayscale(100%)}.cell,.cell:after,.cell:before{-webkit-box-shadow:inset 0 0 0 .2rem #fff;box-shadow:inset 0 0 0 .2rem #fff;content:"";height:90px;height:9rem;opacity:.95;position:absolute;-ms-touch-action:manipulation;touch-action:manipulation;-webkit-transition:all .1s;transition:all .1s;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;width:90px;width:9rem}.cell{margin:10px;margin:1rem;-webkit-transform:translateZ(5rem);transform:translateZ(5rem);-webkit-transform-style:preserve-3d;transform-style:preserve-3d}.cell:after{-webkit-transform:rotateX(-90deg) translateY(9rem);transform:rotateX(-90deg) translateY(9rem);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.cell:before{-webkit-transform:rotateY(90deg) translateX(9rem);transform:rotateY(90deg) translateX(9rem);-webkit-transform-origin:100% 0;transform-origin:100% 0}.cell.pressed{background-color:#00b3c5}.cell.pressed:after{background-color:#12b8c9}.cell.pressed:before{background-color:#24becd}.cell.unpressed{-webkit-animation:breathe 2s ease-in-out infinite;animation:breathe 2s ease-in-out infinite;background-color:#d32d8f;-webkit-transform:translateZ(8rem);transform:translateZ(8rem)}.cell.unpressed:after{background-color:#d63c97}.cell.unpressed:before{background-color:#d94a9f}.cell.broken{background-color:#ccb6a0}.cell.broken:after{background-color:#d0bba7}.cell.broken:before{background-color:#d3c0ad}.difficulty-buttons{-webkit-animation:breathe 2s ease-in-out infinite;animation:breathe 2s ease-in-out infinite;margin:auto;opacity:.95;padding:20px;padding:2rem;text-align:center}.difficulty-buttons:hover{-webkit-animation-play-state:paused;animation-play-state:paused}.difficulty-button{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:#00b3c5;border:2px solid #fff;border:.2rem solid #fff;border-radius:2.5rem;color:#fff;display:block;padding:10px 60px;padding:1rem 6rem;font-size:20px;font-size:2rem;font-weight:500;height:50px;height:5rem;margin-bottom:10px;margin-bottom:1rem;-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s;width:100%}.difficulty-button:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.difficulty-button:first-child{background-color:#6ebd4b}.difficulty-button:nth-child(2){background-color:#00b3c5}.difficulty-button:nth-child(3){background-color:#d32d8f}.difficulty-button:last-child{margin-bottom:0}.difficulty-row{-ms-flex-negative:0;flex-shrink:0;white-space:nowrap}.difficulty-selector{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:transparent;border:2px solid #fff;border:.2rem solid #fff;border-radius:1rem;color:#fff;-ms-flex-negative:0;flex-shrink:0;font-weight:500;height:20px;height:2rem;margin:0 4px;margin:0 .4rem;margin-bottom:10px;margin-bottom:1rem;padding:0 10px;padding:0 1rem;-webkit-transition:-webkit-transform .1s;transition:-webkit-transform .1s;transition:transform .1s;transition:transform .1s,-webkit-transform .1s}.difficulty-selector:hover{-webkit-transform:scale(1.1);transform:scale(1.1)}.level{left:50%;margin:auto;position:absolute;top:50%;-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg);-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transition:all .2s;transition:all .2s}.level-button{background-color:transparent;border:2px solid #fff;border:.2rem solid #fff;border-radius:50%;cursor:default;height:20px;height:2rem;padding:0;margin:0 4px;margin:0 .4rem;margin-bottom:10px;margin-bottom:1rem;-webkit-transition:all .1s;transition:all .1s;width:20px;width:2rem;text-indent:100%;overflow:hidden;white-space:nowrap}.level-button.complete{background-color:#00b3c5}.level-button.current{background-color:#d32d8f}.level-button.complete,.level-button.current{cursor:pointer}.level-button.complete:hover,.level-button.current:hover{-webkit-transform:scale(1.2);transform:scale(1.2)}.player,.player:after,.player:before{-webkit-box-shadow:inset 0 0 0 .2rem #fff;box-shadow:inset 0 0 0 .2rem #fff;content:"";height:40px;height:4rem;opacity:.95;position:absolute;-webkit-transition:all .1s;transition:all .1s;width:40px;width:4rem}.player{-webkit-animation:player-bob 2s ease-in-out infinite;animation:player-bob 2s ease-in-out infinite;background-color:#6ebd4b;margin:35px;margin:3.5rem;pointer-events:none;-webkit-transform-style:preserve-3d;transform-style:preserve-3d;-webkit-transform:translateZ(12rem);transform:translateZ(12rem);-webkit-transition:all .2s;transition:all .2s}.player:after{background-color:#66b046;-webkit-transform:rotateX(-90deg) translateY(4rem);transform:rotateX(-90deg) translateY(4rem);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.player:before{background-color:#5fa341;-webkit-transform:rotateY(90deg) translateX(4rem);transform:rotateY(90deg) translateX(4rem);-webkit-transform-origin:100% 0;transform-origin:100% 0}.progress{background-color:#d32d8f;height:100%;-webkit-transition:width .1s;transition:width .1s}@media (max-height:700px){#game:not(.main-menu)+footer{display:none}.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.92,.92,.92);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.92,.92,.92)}}@media (max-width:700px){.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.84,.84,.84);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.84,.84,.84)}}@media (max-height:600px){.medium .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.88,.88,.88);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.88,.88,.88)}.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.74,.74,.74);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.74,.74,.74)}}@media (max-width:600px){.medium .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.88,.88,.88);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.88,.88,.88)}.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.7,.7,.7);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.7,.7,.7)}}@media (max-height:500px){.easy .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.83,.83,.83);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.83,.83,.83)}.medium .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.66,.66,.66);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.66,.66,.66)}.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.55,.55,.55);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.55,.55,.55)}}@media (max-width:500px){.easy .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.94,.94,.94);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.94,.94,.94)}.medium .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.7,.7,.7);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.7,.7,.7)}.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.56,.56,.56);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.56,.56,.56)}}@media (max-width:400px){.easy .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.7,.7,.7);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.7,.7,.7)}.medium .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.53,.53,.53);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.53,.53,.53)}.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.42,.42,.42);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.42,.42,.42)}}@media (max-height:400px){.easy .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.55,.55,.55);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.55,.55,.55)}.medium .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.44,.44,.44);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.44,.44,.44)}.hard .level{-webkit-transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.37,.37,.37);transform:translate(-50%,-50%) rotateX(45deg) rotate(45deg) scale3d(.37,.37,.37)}}',
                "",
            ]);
    },
    function (e, t) {
        function r(e, t) {
            var r = e[1] || "",
                o = e[3];
            if (!o) return r;
            if (t && "function" == typeof btoa) {
                var i = n(o);
                return [r]
                    .concat(
                        o.sources.map(function (e) {
                            return "/*# sourceURL=" + o.sourceRoot + e + " */";
                        })
                    )
                    .concat([i])
                    .join("\n");
            }
            return [r].join("\n");
        }
        function n(e) {
            return "/*# sourceMappingURL=data:application/json;charset=utf-8;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(e)))) + " */";
        }
        e.exports = function (e) {
            var t = [];
            return (
                (t.toString = function () {
                    return this.map(function (t) {
                        var n = r(t, e);
                        return t[2] ? "@media " + t[2] + "{" + n + "}" : n;
                    }).join("");
                }),
                (t.i = function (e, r) {
                    "string" == typeof e && (e = [[null, e, ""]]);
                    for (var n = {}, o = 0; o < this.length; o++) {
                        var i = this[o][0];
                        "number" == typeof i && (n[i] = !0);
                    }
                    for (o = 0; o < e.length; o++) {
                        var a = e[o];
                        ("number" == typeof a[0] && n[a[0]]) || (r && !a[2] ? (a[2] = r) : r && (a[2] = "(" + a[2] + ") and (" + r + ")"), t.push(a));
                    }
                }),
                t
            );
        };
    },
    function (e, t, r) {
        function n(e, t) {
            for (var r = 0; r < e.length; r++) {
                var n = e[r],
                    o = m[n.id];
                if (o) {
                    o.refs++;
                    for (var i = 0; i < o.parts.length; i++) o.parts[i](n.parts[i]);
                    for (; i < n.parts.length; i++) o.parts.push(l(n.parts[i], t));
                } else {
                    for (var a = [], i = 0; i < n.parts.length; i++) a.push(l(n.parts[i], t));
                    m[n.id] = { id: n.id, refs: 1, parts: a };
                }
            }
        }
        function o(e, t) {
            for (var r = [], n = {}, o = 0; o < e.length; o++) {
                var i = e[o],
                    a = t.base ? i[0] + t.base : i[0],
                    c = i[1],
                    s = i[2],
                    u = i[3],
                    l = { css: c, media: s, sourceMap: u };
                n[a] ? n[a].parts.push(l) : r.push((n[a] = { id: a, parts: [l] }));
            }
            return r;
        }
        function i(e, t) {
            var r = h(e.insertInto);
            if (!r) throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
            var n = y[y.length - 1];
            if ("top" === e.insertAt) n ? (n.nextSibling ? r.insertBefore(t, n.nextSibling) : r.appendChild(t)) : r.insertBefore(t, r.firstChild), y.push(t);
            else if ("bottom" === e.insertAt) r.appendChild(t);
            else {
                if ("object" != typeof e.insertAt || !e.insertAt.before)
                    throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
                var o = h(e.insertInto + " " + e.insertAt.before);
                r.insertBefore(t, o);
            }
        }
        function a(e) {
            if (null === e.parentNode) return !1;
            e.parentNode.removeChild(e);
            var t = y.indexOf(e);
            t >= 0 && y.splice(t, 1);
        }
        function c(e) {
            var t = document.createElement("style");
            return (e.attrs.type = "text/css"), u(t, e.attrs), i(e, t), t;
        }
        function s(e) {
            var t = document.createElement("link");
            return (e.attrs.type = "text/css"), (e.attrs.rel = "stylesheet"), u(t, e.attrs), i(e, t), t;
        }
        function u(e, t) {
            Object.keys(t).forEach(function (r) {
                e.setAttribute(r, t[r]);
            });
        }
        function l(e, t) {
            var r, n, o, i;
            if (t.transform && e.css) {
                if (!(i = t.transform(e.css))) return function () {};
                e.css = i;
            }
            if (t.singleton) {
                var u = g++;
                (r = b || (b = c(t))), (n = f.bind(null, r, u, !1)), (o = f.bind(null, r, u, !0));
            } else
                e.sourceMap && "function" == typeof URL && "function" == typeof URL.createObjectURL && "function" == typeof URL.revokeObjectURL && "function" == typeof Blob && "function" == typeof btoa
                    ? ((r = s(t)),
                      (n = p.bind(null, r, t)),
                      (o = function () {
                          a(r), r.href && URL.revokeObjectURL(r.href);
                      }))
                    : ((r = c(t)),
                      (n = d.bind(null, r)),
                      (o = function () {
                          a(r);
                      }));
            return (
                n(e),
                function (t) {
                    if (t) {
                        if (t.css === e.css && t.media === e.media && t.sourceMap === e.sourceMap) return;
                        n((e = t));
                    } else o();
                }
            );
        }
        function f(e, t, r, n) {
            var o = r ? "" : n.css;
            if (e.styleSheet) e.styleSheet.cssText = w(t, o);
            else {
                var i = document.createTextNode(o),
                    a = e.childNodes;
                a[t] && e.removeChild(a[t]), a.length ? e.insertBefore(i, a[t]) : e.appendChild(i);
            }
        }
        function d(e, t) {
            var r = t.css,
                n = t.media;
            if ((n && e.setAttribute("media", n), e.styleSheet)) e.styleSheet.cssText = r;
            else {
                for (; e.firstChild; ) e.removeChild(e.firstChild);
                e.appendChild(document.createTextNode(r));
            }
        }
        function p(e, t, r) {
            var n = r.css,
                o = r.sourceMap,
                i = void 0 === t.convertToAbsoluteUrls && o;
            (t.convertToAbsoluteUrls || i) && (n = x(n)), o && (n += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(o)))) + " */");
            var a = new Blob([n], { type: "text/css" }),
                c = e.href;
            (e.href = URL.createObjectURL(a)), c && URL.revokeObjectURL(c);
        }
        var m = {},
            v = (function (e) {
                var t;
                return function () {
                    return void 0 === t && (t = e.apply(this, arguments)), t;
                };
            })(function () {
                return window && document && document.all && !window.atob;
            }),
            h = (function (e) {
                var t = {};
                return function (r) {
                    if (void 0 === t[r]) {
                        var n = e.call(this, r);
                        if (n instanceof window.HTMLIFrameElement)
                            try {
                                n = n.contentDocument.head;
                            } catch (e) {
                                n = null;
                            }
                        t[r] = n;
                    }
                    return t[r];
                };
            })(function (e) {
                return document.querySelector(e);
            }),
            b = null,
            g = 0,
            y = [],
            x = r(38);
        e.exports = function (e, t) {
            if ("undefined" != typeof DEBUG && DEBUG && "object" != typeof document) throw new Error("The style-loader cannot be used in a non-browser environment");
            (t = t || {}), (t.attrs = "object" == typeof t.attrs ? t.attrs : {}), t.singleton || (t.singleton = v()), t.insertInto || (t.insertInto = "head"), t.insertAt || (t.insertAt = "bottom");
            var r = o(e, t);
            return (
                n(r, t),
                function (e) {
                    for (var i = [], a = 0; a < r.length; a++) {
                        var c = r[a],
                            s = m[c.id];
                        s.refs--, i.push(s);
                    }
                    if (e) {
                        n(o(e, t), t);
                    }
                    for (var a = 0; a < i.length; a++) {
                        var s = i[a];
                        if (0 === s.refs) {
                            for (var u = 0; u < s.parts.length; u++) s.parts[u]();
                            delete m[s.id];
                        }
                    }
                }
            );
        };
        var w = (function () {
            var e = [];
            return function (t, r) {
                return (e[t] = r), e.filter(Boolean).join("\n");
            };
        })();
    },
    function (e, t) {
        e.exports = function (e) {
            var t = "undefined" != typeof window && window.location;
            if (!t) throw new Error("fixUrls requires window.location");
            if (!e || "string" != typeof e) return e;
            var r = t.protocol + "//" + t.host,
                n = r + t.pathname.replace(/\/[^\/]*$/, "/");
            return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                var o = t
                    .trim()
                    .replace(/^"(.*)"$/, function (e, t) {
                        return t;
                    })
                    .replace(/^'(.*)'$/, function (e, t) {
                        return t;
                    });
                if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)) return e;
                var i;
                return (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? r + o : n + o.replace(/^\.\//, "")), "url(" + JSON.stringify(i) + ")";
            });
        };
    },
    function (e, t, r) {
        var n;
        !(function () {
            "use strict"
            /**
             * @preserve FastClick: polyfill to remove click delays on browsers with touch UIs.
             *
             * @codingstandard ftlabs-jsv2
             * @copyright The Financial Times Limited [All Rights Reserved]
             * @license MIT License (see LICENSE.txt)
             */;
            function o(e, t) {
                var r;
                if (
                    ((t = t || {}),
                    (this.trackingClick = !1),
                    (this.trackingClickStart = 0),
                    (this.targetElement = null),
                    (this.touchStartX = 0),
                    (this.touchStartY = 0),
                    (this.lastTouchIdentifier = 0),
                    (this.touchBoundary = t.touchBoundary || 10),
                    (this.layer = e),
                    (this.tapDelay = t.tapDelay || 200),
                    (this.tapTimeout = t.tapTimeout || 700),
                    !o.notNeeded(e))
                ) {
                    for (var n = ["onMouse", "onClick", "onTouchStart", "onTouchMove", "onTouchEnd", "onTouchCancel"], i = this, c = 0, s = n.length; c < s; c++)
                        i[n[c]] = (function (e, t) {
                            return function () {
                                return e.apply(t, arguments);
                            };
                        })(i[n[c]], i);
                    a && (e.addEventListener("mouseover", this.onMouse, !0), e.addEventListener("mousedown", this.onMouse, !0), e.addEventListener("mouseup", this.onMouse, !0)),
                        e.addEventListener("click", this.onClick, !0),
                        e.addEventListener("touchstart", this.onTouchStart, !1),
                        e.addEventListener("touchmove", this.onTouchMove, !1),
                        e.addEventListener("touchend", this.onTouchEnd, !1),
                        e.addEventListener("touchcancel", this.onTouchCancel, !1),
                        Event.prototype.stopImmediatePropagation ||
                            ((e.removeEventListener = function (t, r, n) {
                                var o = Node.prototype.removeEventListener;
                                "click" === t ? o.call(e, t, r.hijacked || r, n) : o.call(e, t, r, n);
                            }),
                            (e.addEventListener = function (t, r, n) {
                                var o = Node.prototype.addEventListener;
                                "click" === t
                                    ? o.call(
                                          e,
                                          t,
                                          r.hijacked ||
                                              (r.hijacked = function (e) {
                                                  e.propagationStopped || r(e);
                                              }),
                                          n
                                      )
                                    : o.call(e, t, r, n);
                            })),
                        "function" == typeof e.onclick &&
                            ((r = e.onclick),
                            e.addEventListener(
                                "click",
                                function (e) {
                                    r(e);
                                },
                                !1
                            ),
                            (e.onclick = null));
                }
            }
            var i = navigator.userAgent.indexOf("Windows Phone") >= 0,
                a = navigator.userAgent.indexOf("Android") > 0 && !i,
                c = /iP(ad|hone|od)/.test(navigator.userAgent) && !i,
                s = c && /OS 4_\d(_\d)?/.test(navigator.userAgent),
                u = c && /OS [6-7]_\d/.test(navigator.userAgent),
                l = navigator.userAgent.indexOf("BB10") > 0;
            (o.prototype.needsClick = function (e) {
                switch (e.nodeName.toLowerCase()) {
                    case "button":
                    case "select":
                    case "textarea":
                        if (e.disabled) return !0;
                        break;
                    case "input":
                        if ((c && "file" === e.type) || e.disabled) return !0;
                        break;
                    case "label":
                    case "iframe":
                    case "video":
                        return !0;
                }
                return /\bneedsclick\b/.test(e.className);
            }),
                (o.prototype.needsFocus = function (e) {
                    switch (e.nodeName.toLowerCase()) {
                        case "textarea":
                            return !0;
                        case "select":
                            return !a;
                        case "input":
                            switch (e.type) {
                                case "button":
                                case "checkbox":
                                case "file":
                                case "image":
                                case "radio":
                                case "submit":
                                    return !1;
                            }
                            return !e.disabled && !e.readOnly;
                        default:
                            return /\bneedsfocus\b/.test(e.className);
                    }
                }),
                (o.prototype.sendClick = function (e, t) {
                    var r, n;
                    document.activeElement && document.activeElement !== e && document.activeElement.blur(),
                        (n = t.changedTouches[0]),
                        (r = document.createEvent("MouseEvents")),
                        r.initMouseEvent(this.determineEventType(e), !0, !0, window, 1, n.screenX, n.screenY, n.clientX, n.clientY, !1, !1, !1, !1, 0, null),
                        (r.forwardedTouchEvent = !0),
                        e.dispatchEvent(r);
                }),
                (o.prototype.determineEventType = function (e) {
                    return a && "select" === e.tagName.toLowerCase() ? "mousedown" : "click";
                }),
                (o.prototype.focus = function (e) {
                    var t;
                    c && e.setSelectionRange && 0 !== e.type.indexOf("date") && "time" !== e.type && "month" !== e.type ? ((t = e.value.length), e.setSelectionRange(t, t)) : e.focus();
                }),
                (o.prototype.updateScrollParent = function (e) {
                    var t, r;
                    if (!(t = e.fastClickScrollParent) || !t.contains(e)) {
                        r = e;
                        do {
                            if (r.scrollHeight > r.offsetHeight) {
                                (t = r), (e.fastClickScrollParent = r);
                                break;
                            }
                            r = r.parentElement;
                        } while (r);
                    }
                    t && (t.fastClickLastScrollTop = t.scrollTop);
                }),
                (o.prototype.getTargetElementFromEventTarget = function (e) {
                    return e.nodeType === Node.TEXT_NODE ? e.parentNode : e;
                }),
                (o.prototype.onTouchStart = function (e) {
                    var t, r, n;
                    if (e.targetTouches.length > 1) return !0;
                    if (((t = this.getTargetElementFromEventTarget(e.target)), (r = e.targetTouches[0]), c)) {
                        if (((n = window.getSelection()), n.rangeCount && !n.isCollapsed)) return !0;
                        if (!s) {
                            if (r.identifier && r.identifier === this.lastTouchIdentifier) return e.preventDefault(), !1;
                            (this.lastTouchIdentifier = r.identifier), this.updateScrollParent(t);
                        }
                    }
                    return (
                        (this.trackingClick = !0),
                        (this.trackingClickStart = e.timeStamp),
                        (this.targetElement = t),
                        (this.touchStartX = r.pageX),
                        (this.touchStartY = r.pageY),
                        e.timeStamp - this.lastClickTime < this.tapDelay && e.preventDefault(),
                        !0
                    );
                }),
                (o.prototype.touchHasMoved = function (e) {
                    var t = e.changedTouches[0],
                        r = this.touchBoundary;
                    return Math.abs(t.pageX - this.touchStartX) > r || Math.abs(t.pageY - this.touchStartY) > r;
                }),
                (o.prototype.onTouchMove = function (e) {
                    return !this.trackingClick || ((this.targetElement !== this.getTargetElementFromEventTarget(e.target) || this.touchHasMoved(e)) && ((this.trackingClick = !1), (this.targetElement = null)), !0);
                }),
                (o.prototype.findControl = function (e) {
                    return void 0 !== e.control ? e.control : e.htmlFor ? document.getElementById(e.htmlFor) : e.querySelector("button, input:not([type=hidden]), keygen, meter, output, progress, select, textarea");
                }),
                (o.prototype.onTouchEnd = function (e) {
                    var t,
                        r,
                        n,
                        o,
                        i,
                        l = this.targetElement;
                    if (!this.trackingClick) return !0;
                    if (e.timeStamp - this.lastClickTime < this.tapDelay) return (this.cancelNextClick = !0), !0;
                    if (e.timeStamp - this.trackingClickStart > this.tapTimeout) return !0;
                    if (
                        ((this.cancelNextClick = !1),
                        (this.lastClickTime = e.timeStamp),
                        (r = this.trackingClickStart),
                        (this.trackingClick = !1),
                        (this.trackingClickStart = 0),
                        u && ((i = e.changedTouches[0]), (l = document.elementFromPoint(i.pageX - window.pageXOffset, i.pageY - window.pageYOffset) || l), (l.fastClickScrollParent = this.targetElement.fastClickScrollParent)),
                        "label" === (n = l.tagName.toLowerCase()))
                    ) {
                        if ((t = this.findControl(l))) {
                            if ((this.focus(l), a)) return !1;
                            l = t;
                        }
                    } else if (this.needsFocus(l))
                        return e.timeStamp - r > 100 || (c && window.top !== window && "input" === n)
                            ? ((this.targetElement = null), !1)
                            : (this.focus(l), this.sendClick(l, e), (c && "select" === n) || ((this.targetElement = null), e.preventDefault()), !1);
                    return !(!c || s || !(o = l.fastClickScrollParent) || o.fastClickLastScrollTop === o.scrollTop) || (this.needsClick(l) || (e.preventDefault(), this.sendClick(l, e)), !1);
                }),
                (o.prototype.onTouchCancel = function () {
                    (this.trackingClick = !1), (this.targetElement = null);
                }),
                (o.prototype.onMouse = function (e) {
                    return (
                        !this.targetElement ||
                        !!e.forwardedTouchEvent ||
                        !e.cancelable ||
                        !(!this.needsClick(this.targetElement) || this.cancelNextClick) ||
                        (e.stopImmediatePropagation ? e.stopImmediatePropagation() : (e.propagationStopped = !0), e.stopPropagation(), e.preventDefault(), !1)
                    );
                }),
                (o.prototype.onClick = function (e) {
                    var t;
                    return this.trackingClick ? ((this.targetElement = null), (this.trackingClick = !1), !0) : ("submit" === e.target.type && 0 === e.detail) || ((t = this.onMouse(e)), t || (this.targetElement = null), t);
                }),
                (o.prototype.destroy = function () {
                    var e = this.layer;
                    a && (e.removeEventListener("mouseover", this.onMouse, !0), e.removeEventListener("mousedown", this.onMouse, !0), e.removeEventListener("mouseup", this.onMouse, !0)),
                        e.removeEventListener("click", this.onClick, !0),
                        e.removeEventListener("touchstart", this.onTouchStart, !1),
                        e.removeEventListener("touchmove", this.onTouchMove, !1),
                        e.removeEventListener("touchend", this.onTouchEnd, !1),
                        e.removeEventListener("touchcancel", this.onTouchCancel, !1);
                }),
                (o.notNeeded = function (e) {
                    var t, r, n;
                    if (void 0 === window.ontouchstart) return !0;
                    if ((r = +(/Chrome\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1])) {
                        if (!a) return !0;
                        if ((t = document.querySelector("meta[name=viewport]"))) {
                            if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                            if (r > 31 && document.documentElement.scrollWidth <= window.outerWidth) return !0;
                        }
                    }
                    if (l && ((n = navigator.userAgent.match(/Version\/([0-9]*)\.([0-9]*)/)), n[1] >= 10 && n[2] >= 3 && (t = document.querySelector("meta[name=viewport]")))) {
                        if (-1 !== t.content.indexOf("user-scalable=no")) return !0;
                        if (document.documentElement.scrollWidth <= window.outerWidth) return !0;
                    }
                    return (
                        "none" === e.style.msTouchAction ||
                        "manipulation" === e.style.touchAction ||
                        !!(
                            +(/Firefox\/([0-9]+)/.exec(navigator.userAgent) || [, 0])[1] >= 27 &&
                            (t = document.querySelector("meta[name=viewport]")) &&
                            (-1 !== t.content.indexOf("user-scalable=no") || document.documentElement.scrollWidth <= window.outerWidth)
                        ) ||
                        "none" === e.style.touchAction ||
                        "manipulation" === e.style.touchAction
                    );
                }),
                (o.attach = function (e, t) {
                    return new o(e, t);
                }),
                void 0 !==
                    (n = function () {
                        return o;
                    }.call(t, r, t, e)) && (e.exports = n);
        })();
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            (u = Object(a.create)(e)), document.body.insertBefore(u, document.body.firstChild);
        }
        function o(e) {
            var t = Object(a.diff)(s, e);
            u = Object(a.patch)(u, t);
        }
        function i(e) {
            var t = Object(c.a)(e);
            u ? o(t) : n(t), (s = t);
        }
        t.a = i;
        var a = r(0),
            c = (r.n(a), r(60)),
            s = null,
            u = null;
    },
    function (e, t, r) {
        var n = r(42);
        e.exports = n;
    },
    function (e, t, r) {
        function n(e, t) {
            var r = { a: e };
            return o(e, t, r, 0), r;
        }
        function o(e, t, r, n) {
            if (e !== t) {
                var o = r[n],
                    c = !1;
                if (w(e) || w(t)) s(e, t, r, n);
                else if (null == t) x(e) || (a(e, r, n), (o = r[n])), (o = v(o, new b(b.REMOVE, e, t)));
                else if (g(t))
                    if (g(e))
                        if (e.tagName === t.tagName && e.namespace === t.namespace && e.key === t.key) {
                            var u = _(e.properties, t.properties);
                            u && (o = v(o, new b(b.PROPS, e, u))), (o = i(e, t, r, o, n));
                        } else (o = v(o, new b(b.VNODE, e, t))), (c = !0);
                    else (o = v(o, new b(b.VNODE, e, t))), (c = !0);
                else y(t) ? (y(e) ? e.text !== t.text && (o = v(o, new b(b.VTEXT, e, t))) : ((o = v(o, new b(b.VTEXT, e, t))), (c = !0))) : x(t) && (x(e) || (c = !0), (o = v(o, new b(b.WIDGET, e, t))));
                o && (r[n] = o), c && a(e, r, n);
            }
        }
        function i(e, t, r, n, i) {
            for (var a = e.children, c = d(a, t.children), s = c.children, u = a.length, l = s.length, f = u > l ? u : l, p = 0; p < f; p++) {
                var m = a[p],
                    h = s[p];
                (i += 1), m ? o(m, h, r, i) : h && (n = v(n, new b(b.INSERT, null, h))), g(m) && m.count && (i += m.count);
            }
            return c.moves && (n = v(n, new b(b.ORDER, e, c.moves))), n;
        }
        function a(e, t, r) {
            l(e, t, r), c(e, t, r);
        }
        function c(e, t, r) {
            if (x(e)) "function" == typeof e.destroy && (t[r] = v(t[r], new b(b.REMOVE, e, null)));
            else if (g(e) && (e.hasWidgets || e.hasThunks))
                for (var n = e.children, o = n.length, i = 0; i < o; i++) {
                    var a = n[i];
                    (r += 1), c(a, t, r), g(a) && a.count && (r += a.count);
                }
            else w(e) && s(e, null, t, r);
        }
        function s(e, t, r, o) {
            var i = k(e, t),
                a = n(i.a, i.b);
            u(a) && (r[o] = new b(b.THUNK, null, a));
        }
        function u(e) {
            for (var t in e) if ("a" !== t) return !0;
            return !1;
        }
        function l(e, t, r) {
            if (g(e)) {
                if ((e.hooks && (t[r] = v(t[r], new b(b.PROPS, e, f(e.hooks)))), e.descendantHooks || e.hasThunks))
                    for (var n = e.children, o = n.length, i = 0; i < o; i++) {
                        var a = n[i];
                        (r += 1), l(a, t, r), g(a) && a.count && (r += a.count);
                    }
            } else w(e) && s(e, null, t, r);
        }
        function f(e) {
            var t = {};
            for (var r in e) t[r] = void 0;
            return t;
        }
        function d(e, t) {
            var r = m(t),
                n = r.keys,
                o = r.free;
            if (o.length === t.length) return { children: t, moves: null };
            var i = m(e),
                a = i.keys;
            if (i.free.length === e.length) return { children: t, moves: null };
            for (var c = [], s = 0, u = o.length, l = 0, f = 0; f < e.length; f++) {
                var d,
                    v = e[f];
                v.key ? (n.hasOwnProperty(v.key) ? ((d = n[v.key]), c.push(t[d])) : ((d = f - l++), c.push(null))) : s < u ? ((d = o[s++]), c.push(t[d])) : ((d = f - l++), c.push(null));
            }
            for (var h = s >= o.length ? t.length : o[s], b = 0; b < t.length; b++) {
                var g = t[b];
                g.key ? a.hasOwnProperty(g.key) || c.push(g) : b >= h && c.push(g);
            }
            for (var y, x = c.slice(), w = 0, k = [], _ = [], O = 0; O < t.length; ) {
                var E = t[O];
                for (y = x[w]; null === y && x.length; ) k.push(p(x, w, null)), (y = x[w]);
                y && y.key === E.key
                    ? (w++, O++)
                    : E.key
                    ? (y && y.key && n[y.key] !== O + 1 ? (k.push(p(x, w, y.key)), (y = x[w]), y && y.key === E.key ? w++ : _.push({ key: E.key, to: O })) : _.push({ key: E.key, to: O }), O++)
                    : y && y.key && k.push(p(x, w, y.key));
            }
            for (; w < x.length; ) (y = x[w]), k.push(p(x, w, y && y.key));
            return k.length !== l || _.length ? { children: c, moves: { removes: k, inserts: _ } } : { children: c, moves: null };
        }
        function p(e, t, r) {
            return e.splice(t, 1), { from: t, key: r };
        }
        function m(e) {
            for (var t = {}, r = [], n = e.length, o = 0; o < n; o++) {
                var i = e[o];
                i.key ? (t[i.key] = o) : r.push(o);
            }
            return { keys: t, free: r };
        }
        function v(e, t) {
            return e ? (h(e) ? e.push(t) : (e = [e, t]), e) : t;
        }
        var h = r(13),
            b = r(17),
            g = r(4),
            y = r(7),
            x = r(1),
            w = r(8),
            k = r(18),
            _ = r(43);
        e.exports = n;
    },
    function (e, t, r) {
        function n(e, t) {
            var r;
            for (var c in e) {
                c in t || ((r = r || {}), (r[c] = void 0));
                var s = e[c],
                    u = t[c];
                if (s !== u)
                    if (i(s) && i(u))
                        if (o(u) !== o(s)) (r = r || {}), (r[c] = u);
                        else if (a(u)) (r = r || {}), (r[c] = u);
                        else {
                            var l = n(s, u);
                            l && ((r = r || {}), (r[c] = l));
                        }
                    else (r = r || {}), (r[c] = u);
            }
            for (var f in t) f in e || ((r = r || {}), (r[f] = t[f]));
            return r;
        }
        function o(e) {
            return Object.getPrototypeOf ? Object.getPrototypeOf(e) : e.__proto__ ? e.__proto__ : e.constructor ? e.constructor.prototype : void 0;
        }
        var i = r(19),
            a = r(9);
        e.exports = n;
    },
    function (e, t, r) {
        var n = r(45);
        e.exports = n;
    },
    function (e, t, r) {
        function n(e, t, r) {
            return (r = r || {}), (r.patch = r.patch && r.patch !== n ? r.patch : o), (r.render = r.render || u), r.patch(e, t, r);
        }
        function o(e, t, r) {
            var n = a(t);
            if (0 === n.length) return e;
            var o = l(e, t.a, n),
                s = e.ownerDocument;
            r.document || s === c || (r.document = s);
            for (var u = 0; u < n.length; u++) {
                var f = n[u];
                e = i(e, o[f], t[f], r);
            }
            return e;
        }
        function i(e, t, r, n) {
            if (!t) return e;
            var o;
            if (s(r)) for (var i = 0; i < r.length; i++) (o = f(r[i], t, n)), t === e && (e = o);
            else (o = f(r, t, n)), t === e && (e = o);
            return e;
        }
        function a(e) {
            var t = [];
            for (var r in e) "a" !== r && t.push(Number(r));
            return t;
        }
        var c = r(20),
            s = r(13),
            u = r(21),
            l = r(47),
            f = r(48);
        e.exports = n;
    },
    function (e, t) {},
    function (e, t) {
        function r(e, t, r, o) {
            return r && 0 !== r.length ? (r.sort(i), n(e, t, r, o, 0)) : {};
        }
        function n(e, t, r, i, c) {
            if (((i = i || {}), e)) {
                o(r, c, c) && (i[c] = e);
                var s = t.children;
                if (s)
                    for (var u = e.childNodes, l = 0; l < t.children.length; l++) {
                        c += 1;
                        var f = s[l] || a,
                            d = c + (f.count || 0);
                        o(r, c, d) && n(u[l], f, r, i, c), (c = d);
                    }
            }
            return i;
        }
        function o(e, t, r) {
            if (0 === e.length) return !1;
            for (var n, o, i = 0, a = e.length - 1; i <= a; ) {
                if (((n = ((a + i) / 2) >> 0), (o = e[n]), i === a)) return o >= t && o <= r;
                if (o < t) i = n + 1;
                else {
                    if (!(o > r)) return !0;
                    a = n - 1;
                }
            }
            return !1;
        }
        function i(e, t) {
            return e > t ? 1 : -1;
        }
        var a = {};
        e.exports = r;
    },
    function (e, t, r) {
        function n(e, t, r) {
            var n = e.type,
                u = e.vNode,
                p = e.patch;
            switch (n) {
                case m.REMOVE:
                    return o(t, u);
                case m.INSERT:
                    return i(t, p, r);
                case m.VTEXT:
                    return a(t, u, p, r);
                case m.WIDGET:
                    return c(t, u, p, r);
                case m.VNODE:
                    return s(t, u, p, r);
                case m.ORDER:
                    return l(t, p), t;
                case m.PROPS:
                    return d(t, p, u.properties), t;
                case m.THUNK:
                    return f(t, r.patch(t, p, r));
                default:
                    return t;
            }
        }
        function o(e, t) {
            var r = e.parentNode;
            return r && r.removeChild(e), u(e, t), null;
        }
        function i(e, t, r) {
            var n = r.render(t, r);
            return e && e.appendChild(n), e;
        }
        function a(e, t, r, n) {
            var o;
            if (3 === e.nodeType) e.replaceData(0, e.length, r.text), (o = e);
            else {
                var i = e.parentNode;
                (o = n.render(r, n)), i && o !== e && i.replaceChild(o, e);
            }
            return o;
        }
        function c(e, t, r, n) {
            var o,
                i = v(t, r);
            o = i ? r.update(t, e) || e : n.render(r, n);
            var a = e.parentNode;
            return a && o !== e && a.replaceChild(o, e), i || u(e, t), o;
        }
        function s(e, t, r, n) {
            var o = e.parentNode,
                i = n.render(r, n);
            return o && i !== e && o.replaceChild(i, e), i;
        }
        function u(e, t) {
            "function" == typeof t.destroy && p(t) && t.destroy(e);
        }
        function l(e, t) {
            for (var r, n, o, i = e.childNodes, a = {}, c = 0; c < t.removes.length; c++) (n = t.removes[c]), (r = i[n.from]), n.key && (a[n.key] = r), e.removeChild(r);
            for (var s = i.length, u = 0; u < t.inserts.length; u++) (o = t.inserts[u]), (r = a[o.key]), e.insertBefore(r, o.to >= s++ ? null : i[o.to]);
        }
        function f(e, t) {
            return e && t && e !== t && e.parentNode && e.parentNode.replaceChild(t, e), t;
        }
        var d = r(22),
            p = r(1),
            m = r(17),
            v = r(49);
        e.exports = n;
    },
    function (e, t, r) {
        function n(e, t) {
            return !(!o(e) || !o(t)) && ("name" in e && "name" in t ? e.id === t.id : e.init === t.init);
        }
        var o = r(1);
        e.exports = n;
    },
    function (e, t, r) {
        var n = r(51);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            var n,
                a,
                s,
                u,
                l = [];
            return (
                !r && c(t) && ((r = t), (a = {})),
                (a = a || t || {}),
                (n = g(e, a)),
                a.hasOwnProperty("key") && ((s = a.key), (a.key = void 0)),
                a.hasOwnProperty("namespace") && ((u = a.namespace), (a.namespace = void 0)),
                "INPUT" !== n || u || !a.hasOwnProperty("value") || void 0 === a.value || h(a.value) || (a.value = y(a.value)),
                i(a),
                void 0 !== r && null !== r && o(r, l, n, a),
                new f(n, a, l, s, u)
            );
        }
        function o(e, t, r, n) {
            if ("string" == typeof e) t.push(new d(e));
            else if ("number" == typeof e) t.push(new d(String(e)));
            else if (a(e)) t.push(e);
            else {
                if (!l(e)) {
                    if (null === e || void 0 === e) return;
                    throw s({ foreignObject: e, parentVnode: { tagName: r, properties: n } });
                }
                for (var i = 0; i < e.length; i++) o(e[i], t, r, n);
            }
        }
        function i(e) {
            for (var t in e)
                if (e.hasOwnProperty(t)) {
                    var r = e[t];
                    if (h(r)) continue;
                    "ev-" === t.substr(0, 3) && (e[t] = x(r));
                }
        }
        function a(e) {
            return p(e) || m(e) || v(e) || b(e);
        }
        function c(e) {
            return "string" == typeof e || l(e) || a(e);
        }
        function s(e) {
            var t = new Error();
            return (
                (t.type = "virtual-hyperscript.unexpected.virtual-element"),
                (t.message = "Unexpected virtual child passed to h().\nExpected a VNode / Vthunk / VWidget / string but:\ngot:\n" + u(e.foreignObject) + ".\nThe parent vnode is:\n" + u(e.parentVnode)),
                (t.foreignObject = e.foreignObject),
                (t.parentVnode = e.parentVnode),
                t
            );
        }
        function u(e) {
            try {
                return JSON.stringify(e, null, "    ");
            } catch (t) {
                return String(e);
            }
        }
        var l = r(13),
            f = r(23),
            d = r(24),
            p = r(4),
            m = r(7),
            v = r(1),
            h = r(9),
            b = r(8),
            g = r(52),
            y = r(54),
            x = r(55);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            if (!e) return "DIV";
            var r = !t.hasOwnProperty("id"),
                n = o(e, i),
                c = null;
            a.test(n[1]) && (c = "DIV");
            var s, u, l, f;
            for (f = 0; f < n.length; f++) (u = n[f]) && ((l = u.charAt(0)), c ? ("." === l ? ((s = s || []), s.push(u.substring(1, u.length))) : "#" === l && r && (t.id = u.substring(1, u.length))) : (c = u));
            return s && (t.className && s.push(t.className), (t.className = s.join(" "))), t.namespace ? c : c.toUpperCase();
        }
        var o = r(53),
            i = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/,
            a = /^\.|#/;
        e.exports = n;
    },
    function (e, t) {
        /*!
         * Cross-Browser Split 1.1.1
         * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
         * Available under the MIT License
         * ECMAScript compliant, uniform cross-browser split method
         */
        e.exports = (function (e) {
            var t = String.prototype.split,
                r = /()??/.exec("")[1] === e;
            return function (n, o, i) {
                if ("[object RegExp]" !== Object.prototype.toString.call(o)) return t.call(n, o, i);
                var a,
                    c,
                    s,
                    u,
                    l = [],
                    f = (o.ignoreCase ? "i" : "") + (o.multiline ? "m" : "") + (o.extended ? "x" : "") + (o.sticky ? "y" : ""),
                    d = 0,
                    o = new RegExp(o.source, f + "g");
                for (
                    n += "", r || (a = new RegExp("^" + o.source + "$(?!\\s)", f)), i = i === e ? -1 >>> 0 : i >>> 0;
                    (c = o.exec(n)) &&
                    !(
                        (s = c.index + c[0].length) > d &&
                        (l.push(n.slice(d, c.index)),
                        !r &&
                            c.length > 1 &&
                            c[0].replace(a, function () {
                                for (var t = 1; t < arguments.length - 2; t++) arguments[t] === e && (c[t] = e);
                            }),
                        c.length > 1 && c.index < n.length && Array.prototype.push.apply(l, c.slice(1)),
                        (u = c[0].length),
                        (d = s),
                        l.length >= i)
                    );

                )
                    o.lastIndex === c.index && o.lastIndex++;
                return d === n.length ? (!u && o.test("")) || l.push("") : l.push(n.slice(d)), l.length > i ? l.slice(0, i) : l;
            };
        })();
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (!(this instanceof n)) return new n(e);
            this.value = e;
        }
        (e.exports = n),
            (n.prototype.hook = function (e, t) {
                e[t] !== this.value && (e[t] = this.value);
            });
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (!(this instanceof n)) return new n(e);
            this.value = e;
        }
        var o = r(56);
        (e.exports = n),
            (n.prototype.hook = function (e, t) {
                o(e)[t.substr(3)] = this.value;
            }),
            (n.prototype.unhook = function (e, t) {
                o(e)[t.substr(3)] = void 0;
            });
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e[i];
            return t || (t = e[i] = {}), t;
        }
        var o = r(57);
        o("ev-store", "7");
        var i = "__EV_STORE_KEY@7";
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            var n = "__INDIVIDUAL_ONE_VERSION_" + e,
                i = n + "_ENFORCE_SINGLETON",
                a = o(i, t);
            if (a !== t) throw new Error("Can only have one copy of " + e + ".\nYou already have version " + a + " installed.\nThis means you cannot install version " + t);
            return o(n, r);
        }
        var o = r(58);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        (function (t) {
            function r(e, t) {
                return e in n ? n[e] : ((n[e] = t), t);
            }
            var n = "undefined" != typeof window ? window : void 0 !== t ? t : {};
            e.exports = r;
        }.call(t, r(10)));
    },
    function (e, t, r) {
        var n = r(21);
        e.exports = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.currentDifficulty,
                r = e.status,
                n = r === u.b ? [Object(i.a)(e)] : [Object(s.a)(e), Object(a.a)(e), Object(c.a)(e)];
            return Object(o.h)("div#game", { className: [t, r].join(" ").toLowerCase().replace("_", "-") }, n);
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(61)),
            a = r(82),
            c = r(85),
            s = r(90),
            u = r(15);
    },
    function (e, t, r) {
        "use strict";
        function n() {
            return Object(o.h)(
                "div.difficulty-buttons",
                [a.a, a.c, a.b].map(function (e) {
                    return Object(i.a)({ difficulty: e });
                })
            );
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(62)),
            a = r(5);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.difficulty;
            return Object(o.h)(
                "button.difficulty-button",
                {
                    key: t,
                    onclick: function () {
                        return Object(a.a)(i.b[t]);
                    },
                },
                i.a[t]
            );
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(11)),
            a = r(2);
    },
    function (e, t, r) {
        "use strict";
        var n = r(26),
            o = r(76);
        r(77), r(78), r(30), r(29);
        r.d(t, "b", function () {
            return n.b;
        }),
            r.d(t, "a", function () {
                return o.a;
            });
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return null == e ? (void 0 === e ? s : c) : u && u in Object(e) ? Object(i.a)(e) : Object(a.a)(e);
        }
        var o = r(28),
            i = r(67),
            a = r(68),
            c = "[object Null]",
            s = "[object Undefined]",
            u = o.a ? o.a.toStringTag : void 0;
        t.a = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(66),
            o = "object" == typeof self && self && self.Object === Object && self,
            i = n.a || o || Function("return this")();
        t.a = i;
    },
    function (e, t, r) {
        "use strict";
        (function (e) {
            var r = "object" == typeof e && e && e.Object === Object && e;
            t.a = r;
        }.call(t, r(10)));
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = a.call(e, s),
                r = e[s];
            try {
                e[s] = void 0;
                var n = !0;
            } catch (e) {}
            var o = c.call(e);
            return n && (t ? (e[s] = r) : delete e[s]), o;
        }
        var o = r(28),
            i = Object.prototype,
            a = i.hasOwnProperty,
            c = i.toString,
            s = o.a ? o.a.toStringTag : void 0;
        t.a = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return i.call(e);
        }
        var o = Object.prototype,
            i = o.toString;
        t.a = n;
    },
    function (e, t, r) {
        "use strict";
        var n = r(70),
            o = Object(n.a)(Object.getPrototypeOf, Object);
        t.a = o;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            return function (r) {
                return e(t(r));
            };
        }
        t.a = n;
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            return null != e && "object" == typeof e;
        }
        t.a = n;
    },
    function (e, t, r) {
        e.exports = r(73);
    },
    function (e, t, r) {
        "use strict";
        (function (e, n) {
            Object.defineProperty(t, "__esModule", { value: !0 });
            var o,
                i = r(75),
                a = (function (e) {
                    return e && e.__esModule ? e : { default: e };
                })(i);
            o = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== e ? e : n;
            var c = (0, a.default)(o);
            t.default = c;
        }.call(t, r(10), r(74)(e)));
    },
    function (e, t) {
        e.exports = function (e) {
            return (
                e.webpackPolyfill ||
                    ((e.deprecate = function () {}),
                    (e.paths = []),
                    e.children || (e.children = []),
                    Object.defineProperty(e, "loaded", {
                        enumerable: !0,
                        get: function () {
                            return e.l;
                        },
                    }),
                    Object.defineProperty(e, "id", {
                        enumerable: !0,
                        get: function () {
                            return e.i;
                        },
                    }),
                    (e.webpackPolyfill = 1)),
                e
            );
        };
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t,
                r = e.Symbol;
            return "function" == typeof r ? (r.observable ? (t = r.observable) : ((t = r("observable")), (r.observable = t))) : (t = "@@observable"), t;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }), (t.default = n);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t) {
            var r = t && t.type;
            return (
                "Given action " +
                ((r && '"' + r.toString() + '"') || "an action") +
                ', reducer "' +
                e +
                '" returned undefined. To ignore an action, you must explicitly return the previous state. If you want this reducer to hold no value, you can return null instead of undefined.'
            );
        }
        function o(e) {
            Object.keys(e).forEach(function (t) {
                var r = e[t];
                if (void 0 === r(void 0, { type: a.a.INIT }))
                    throw new Error(
                        'Reducer "' +
                            t +
                            "\" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined. If you don't want to set a value for this reducer, you can use null instead of undefined."
                    );
                if (void 0 === r(void 0, { type: "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".") }))
                    throw new Error(
                        'Reducer "' +
                            t +
                            "\" returned undefined when probed with a random type. Don't try to handle " +
                            a.a.INIT +
                            ' or other actions in "redux/*" namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined, but can be null.'
                    );
            });
        }
        function i(e) {
            for (var t = Object.keys(e), r = {}, i = 0; i < t.length; i++) {
                var a = t[i];
                "function" == typeof e[a] && (r[a] = e[a]);
            }
            var c = Object.keys(r),
                s = void 0;
            try {
                o(r);
            } catch (e) {
                s = e;
            }
            return function () {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments[1];
                if (s) throw s;
                for (var o = !1, i = {}, a = 0; a < c.length; a++) {
                    var u = c[a],
                        l = r[u],
                        f = e[u],
                        d = l(f, t);
                    if (void 0 === d) {
                        var p = n(u, t);
                        throw new Error(p);
                    }
                    (i[u] = d), (o = o || d !== f);
                }
                return o ? i : e;
            };
        }
        t.a = i;
        var a = r(26);
        r(27), r(29);
    },
    function (e, t, r) {
        "use strict";
    },
    function (e, t, r) {
        "use strict";
        r(30), Object.assign;
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }
        Object.defineProperty(t, "__esModule", { value: !0 }),
            r.d(t, "currentDifficulty", function () {
                return v;
            }),
            r.d(t, "currentLevelNumber", function () {
                return h;
            }),
            r.d(t, "maxLevelReached", function () {
                return b;
            }),
            r.d(t, "maxMoves", function () {
                return g;
            }),
            r.d(t, "moveCount", function () {
                return y;
            }),
            r.d(t, "playerPosition", function () {
                return x;
            }),
            r.d(t, "status", function () {
                return w;
            }),
            r.d(t, "tiles", function () {
                return k;
            });
        var o,
            i,
            a,
            c,
            s = r(14),
            u = r(12),
            l = r(32),
            f = r(11),
            d = r(5),
            p = r(15),
            m = r(16),
            v = Object(u.a)(
                d.a,
                n({}, l.a, function (e, t) {
                    var r = t.levelNumber;
                    return r < f.b[d.c] ? d.a : r < f.b[d.b] ? d.c : d.b;
                })
            ),
            h = Object(u.a)(
                0,
                n({}, l.a, function (e, t) {
                    return t.levelNumber;
                })
            ),
            b = Object(u.a)(
                0,
                n({}, l.a, function (e, t) {
                    var r = t.levelNumber;
                    return Math.max(e, r);
                })
            ),
            g = Object(u.a)(
                1 / 0,
                n({}, l.a, function (e, t) {
                    var r = t.levelNumber;
                    return s.a[r].maxMoves;
                })
            ),
            y = Object(u.a)(
                0,
                ((o = {}),
                n(o, l.a, function () {
                    return 0;
                }),
                n(o, l.c, function (e) {
                    return e + 1;
                }),
                o)
            ),
            x = Object(u.a)(
                { row: 0, column: 0 },
                ((i = {}),
                n(i, l.a, function (e, t) {
                    var r = t.levelNumber,
                        n = s.a[r],
                        o = n.playerPosition;
                    return { row: o.row, column: o.column };
                }),
                n(i, l.c, function (e, t) {
                    return { row: t.row, column: t.column };
                }),
                i)
            ),
            w = Object(u.a)(
                p.b,
                ((a = {}),
                n(a, l.a, function () {
                    return p.c;
                }),
                n(a, l.b, function () {
                    return p.a;
                }),
                n(a, l.d, function () {
                    return p.d;
                }),
                a)
            ),
            k = Object(u.a)(
                [[]],
                ((c = {}),
                n(c, l.a, function (e, t) {
                    var r = t.levelNumber;
                    return s.a[r].tiles.map(function (e) {
                        return e.slice();
                    });
                }),
                n(c, l.c, function (e, t) {
                    var r = t.row,
                        n = t.column,
                        o = e[r][n],
                        i = o === m.b ? m.c : m.b;
                    return (
                        (e = e.map(function (e) {
                            return e.slice();
                        })),
                        (e[r][n] = i),
                        e
                    );
                }),
                c)
            );
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            if (c(e, t, r)) return !1;
            var n = e.tiles[t][r];
            return n === u.b || n === u.c;
        }
        function o(e, t, r) {
            return Object(s.b)(e.playerPosition, { row: t, column: r });
        }
        function i(e) {
            var t = e.maxMoves;
            return e.moveCount >= t;
        }
        function a(e) {
            return !e.tiles
                .reduce(function (e, t) {
                    return e.concat(t);
                }, [])
                .some(function (e) {
                    return e === u.c;
                });
        }
        function c(e, t, r) {
            var n = e.tiles;
            return t < 0 || r < 0 || t >= n.length || r >= n[0].length;
        }
        (t.a = n), (t.b = o), (t.c = i), (t.d = a);
        var s = r(12),
            u = r(16);
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "a", function () {
            return n;
        }),
            r.d(t, "b", function () {
                return o;
            }),
            r.d(t, "c", function () {
                return i;
            });
        var n = document.querySelector("audio.lose"),
            o = document.querySelector("audio.move"),
            i = document.querySelector("audio.win");
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            if (Array.isArray(e)) {
                for (var t = 0, r = Array(e.length); t < e.length; t++) r[t] = e[t];
                return r;
            }
            return Array.from(e);
        }
        function o(e) {
            var t = e.playerPosition,
                r = e.tiles,
                o = r.reduce(function (e, t, r) {
                    var n = t.map(function (e, t) {
                        return Object(c.a)({ column: t, row: r, tile: e });
                    });
                    return e.concat(n);
                }, []);
            return Object(i.h)("main", Object(i.h)("div.level", { style: { height: r.length * a.c + "rem", width: r[0].length * a.c + "rem" } }, [Object(s.a)(t)].concat(n(o))));
        }
        t.a = o;
        var i = r(0),
            a = (r.n(i), r(6)),
            c = r(83),
            s = r(84);
        r(2);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            return t in e ? Object.defineProperty(e, t, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = r), e;
        }
        function o(e) {
            var t = e.column,
                r = e.row,
                n = e.tile;
            return Object(a.h)("div.cell", {
                className: l[n],
                key: r + " " + t,
                onclick: function () {
                    return Object(u.c)(r, t);
                },
                style: { top: r * c.c + "rem", left: t * c.c + "rem" },
            });
        }
        t.a = o;
        var i,
            a = r(0),
            c = (r.n(a), r(6)),
            s = r(16),
            u = r(2),
            l = ((i = {}), n(i, s.a, "broken"), n(i, s.b, "pressed"), n(i, s.c, "unpressed"), i);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.column,
                r = e.row;
            return Object(o.h)("div.player", { key: "player", style: { top: r * i.c + "rem", left: t * i.c + "rem" } });
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(6));
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.currentDifficulty,
                r = e.currentLevelNumber,
                n = e.maxLevelReached;
            return Object(o.h)("nav", [Object(a.a)({ currentDifficulty: t }), Object(i.a)({ currentDifficulty: t, currentLevelNumber: r, maxLevelReached: n })]);
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(86)),
            a = r(88);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.currentDifficulty,
                r = e.currentLevelNumber,
                n = e.maxLevelReached,
                c = Object(a.c)(t);
            return Object(o.h)(
                "div.difficulty-row",
                c.map(function (e) {
                    return Object(i.a)({ currentLevelNumber: r, levelNumber: e, maxLevelReached: n });
                })
            );
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(87)),
            a = r(12);
    },
    function (e, t, r) {
        "use strict";
        function n(e, t, r) {
            return e === t ? "current" : e <= r ? "complete" : "";
        }
        function o(e) {
            var t = e.currentLevelNumber,
                r = e.levelNumber,
                o = e.maxLevelReached,
                s = a.b || r <= o;
				console.log("================");
				if (localStorage.getItem("levelNumber") == "undefined" ||
					localStorage.getItem("levelNumber") < o
				) {
					localStorage.setItem("levelNumber", o);
				}
				console.log("================");
            return Object(i.h)(
                "button.level-button",
                {
                    className: n(r, t, o),
                    key: r,
                    onclick: s
                        ? function () {
                              return Object(c.a)(r);
                          }
                        : null,
                    title: "Level " + r,
                    type: "button",
                },
                r
            );
        }
        t.a = o;
        var i = r(0),
            a = (r.n(i), r(31)),
            c = r(2);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.currentDifficulty;
            return Object(o.h)(
                "select.difficulty-selector",
                {
                    onchange: function (e) {
                        var t = e.target.value,
                            r = c.b[t];
                        Object(s.a)(r);
                    },
                    title: "Difficulty",
                },
                [a.a, a.c, a.b].map(function (e) {
                    return Object(i.a)({ currentDifficulty: t, difficulty: e });
                })
            );
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(89)),
            a = r(5),
            c = r(11),
            s = r(2);
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.currentDifficulty,
                r = e.difficulty;
            return Object(o.h)("option.difficulty-option", { key: r, selected: t === r, value: r }, i.a[r]);
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(11));
    },
    function (e, t, r) {
        "use strict";
        function n(e) {
            var t = e.maxMoves,
                r = e.moveCount;
            return Object(o.h)("header", { style: { width: t * i.b + "rem" }, title: "Move " + r + " of " + t }, [Object(o.h)("div.progress", { style: { width: r * i.b + "rem" } })]);
        }
        t.a = n;
        var o = r(0),
            i = (r.n(o), r(6));
    },
    function (e, t, r) {
        "use strict";
        r.d(t, "b", function () {
            return n;
        }),
            r.d(t, "e", function () {
                return o;
            }),
            r.d(t, "d", function () {
                return i;
            }),
            r.d(t, "a", function () {
                return a;
            }),
            r.d(t, "c", function () {
                return c;
            });
        var n = 37,
            o = 38,
            i = 39,
            a = 40,
            c = 82;
    },
]);
