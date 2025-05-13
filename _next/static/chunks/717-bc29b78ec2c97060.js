(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [717],
  {
    19: function (e, t, r) {
      "use strict";
      r.d(t, {
        V: function () {
          return c;
        },
      });
      var n = r(2265),
        i = r(9582);
      let o = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
        a = (e) => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        l = {},
        u = i.ZP,
        c = (e, t = s) => {
          let r = l;
          a(e)
            ? ((r = e),
              (e = null),
              (t = "dependencies" in r ? r.dependencies : s))
            : a(t) && (t = "dependencies" in (r = t) ? r.dependencies : s),
            e &&
              "function" != typeof e &&
              console.warn(
                "First parameter must be a function or config object"
              );
          let { scope: i, revertOnUpdate: c } = r,
            f = (0, n.useRef)(!1),
            d = (0, n.useRef)(u.context(() => {}, i)),
            p = (0, n.useRef)((e) => d.current.add(null, e)),
            h = t && t.length && !c;
          return (
            o(() => {
              if ((e && d.current.add(e, i), !h || !f.current))
                return () => d.current.revert();
            }, t),
            h && o(() => ((f.current = !0), () => d.current.revert()), s),
            { context: d.current, contextSafe: p.current }
          );
        };
      (c.register = (e) => {
        u = e;
      }),
        (c.headless = !0);
    },
    1204: function (e, t, r) {
      "use strict";
      r.d(t, {
        i: function () {
          return t0;
        },
      });
      var n,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        p,
        h,
        g,
        m = function () {
          return (
            n ||
            ("undefined" != typeof window &&
              (n = window.gsap) &&
              n.registerPlugin &&
              n)
          );
        },
        v = 1,
        b = [],
        w = [],
        y = [],
        x = Date.now,
        _ = function (e, t) {
          return t;
        },
        k = function () {
          var e = f.core,
            t = e.bridge || {},
            r = e._scrollers,
            n = e._proxies;
          r.push.apply(r, w),
            n.push.apply(n, y),
            (w = r),
            (y = n),
            (_ = function (e, r) {
              return t[e](r);
            });
        },
        S = function (e, t) {
          return ~y.indexOf(e) && y[y.indexOf(e) + 1][t];
        },
        P = function (e) {
          return !!~d.indexOf(e);
        },
        O = function (e, t, r, n, i) {
          return e.addEventListener(t, r, { passive: !1 !== n, capture: !!i });
        },
        C = function (e, t, r, n) {
          return e.removeEventListener(t, r, !!n);
        },
        M = "scrollLeft",
        E = "scrollTop",
        T = function () {
          return (p && p.isPressed) || w.cache++;
        },
        A = function (e, t) {
          var r = function r(n) {
            if (n || 0 === n) {
              v && (o.history.scrollRestoration = "manual");
              var i = p && p.isPressed;
              e((n = r.v = Math.round(n) || (p && p.iOS ? 1 : 0))),
                (r.cacheID = w.cache),
                i && _("ss", n);
            } else
              (t || w.cache !== r.cacheID || _("ref")) &&
                ((r.cacheID = w.cache), (r.v = e()));
            return r.v + r.offset;
          };
          return (r.offset = 0), e && r;
        },
        z = {
          s: M,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: A(function (e) {
            return arguments.length
              ? o.scrollTo(e, I.sc())
              : o.pageXOffset || a[M] || s[M] || l[M] || 0;
          }),
        },
        I = {
          s: E,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: z,
          sc: A(function (e) {
            return arguments.length
              ? o.scrollTo(z.sc(), e)
              : o.pageYOffset || a[E] || s[E] || l[E] || 0;
          }),
        },
        R = function (e, t) {
          return (
            ((t && t._ctx && t._ctx.selector) || n.utils.toArray)(e)[0] ||
            ("string" == typeof e && !1 !== n.config().nullTargetWarn
              ? console.warn("Element not found:", e)
              : null)
          );
        },
        B = function (e, t) {
          var r = t.s,
            i = t.sc;
          P(e) && (e = a.scrollingElement || s);
          var o = w.indexOf(e),
            l = i === I.sc ? 1 : 2;
          ~o || (o = w.push(e) - 1), w[o + l] || O(e, "scroll", T);
          var u = w[o + l],
            c =
              u ||
              (w[o + l] =
                A(S(e, r), !0) ||
                (P(e)
                  ? i
                  : A(function (t) {
                      return arguments.length ? (e[r] = t) : e[r];
                    })));
          return (
            (c.target = e),
            u || (c.smooth = "smooth" === n.getProperty(e, "scrollBehavior")),
            c
          );
        },
        j = function (e, t, r) {
          var n = e,
            i = e,
            o = x(),
            a = o,
            s = t || 50,
            l = Math.max(500, 3 * s),
            u = function (e, t) {
              var l = x();
              t || l - o > s
                ? ((i = n), (n = e), (a = o), (o = l))
                : r
                ? (n += e)
                : (n = i + ((e - i) / (l - a)) * (o - a));
            };
          return {
            update: u,
            reset: function () {
              (i = n = r ? 0 : n), (a = o = 0);
            },
            getVelocity: function (e) {
              var t = a,
                s = i,
                c = x();
              return (
                (e || 0 === e) && e !== n && u(e),
                o === a || c - a > l
                  ? 0
                  : ((n + (r ? s : -s)) / ((r ? c : o) - t)) * 1e3
              );
            },
          };
        },
        F = function (e, t) {
          return (
            t && !e._gsapAllow && e.preventDefault(),
            e.changedTouches ? e.changedTouches[0] : e
          );
        },
        D = function (e) {
          var t = Math.max.apply(Math, e),
            r = Math.min.apply(Math, e);
          return Math.abs(t) >= Math.abs(r) ? t : r;
        },
        N = function () {
          (f = n.core.globals().ScrollTrigger) && f.core && k();
        },
        Y = function (e) {
          return (
            (n = e || m()),
            !i &&
              n &&
              "undefined" != typeof document &&
              document.body &&
              ((o = window),
              (s = (a = document).documentElement),
              (l = a.body),
              (d = [o, a, s, l]),
              n.utils.clamp,
              (g = n.core.context || function () {}),
              (c = "onpointerenter" in l ? "pointer" : "mouse"),
              (u = X.isTouch =
                o.matchMedia &&
                o.matchMedia("(hover: none), (pointer: coarse)").matches
                  ? 1
                  : "ontouchstart" in o ||
                    navigator.maxTouchPoints > 0 ||
                    navigator.msMaxTouchPoints > 0
                  ? 2
                  : 0),
              (h = X.eventTypes =
                (
                  "ontouchstart" in s
                    ? "touchstart,touchmove,touchcancel,touchend"
                    : "onpointerdown" in s
                    ? "pointerdown,pointermove,pointercancel,pointerup"
                    : "mousedown,mousemove,mouseup,mouseup"
                ).split(",")),
              setTimeout(function () {
                return (v = 0);
              }, 500),
              N(),
              (i = 1)),
            i
          );
        };
      (z.op = I), (w.cache = 0);
      var X = (function () {
        function e(e) {
          this.init(e);
        }
        return (
          (e.prototype.init = function (e) {
            i || Y(n) || console.warn("Please gsap.registerPlugin(Observer)"),
              f || N();
            var t = e.tolerance,
              r = e.dragMinimum,
              d = e.type,
              m = e.target,
              v = e.lineHeight,
              w = e.debounce,
              y = e.preventDefault,
              _ = e.onStop,
              k = e.onStopDelay,
              S = e.ignore,
              M = e.wheelSpeed,
              E = e.event,
              A = e.onDragStart,
              X = e.onDragEnd,
              q = e.onDrag,
              L = e.onPress,
              U = e.onRelease,
              W = e.onRight,
              V = e.onLeft,
              H = e.onUp,
              G = e.onDown,
              $ = e.onChangeX,
              Z = e.onChangeY,
              K = e.onChange,
              J = e.onToggleX,
              Q = e.onToggleY,
              ee = e.onHover,
              et = e.onHoverEnd,
              er = e.onMove,
              en = e.ignoreCheck,
              ei = e.isNormalizer,
              eo = e.onGestureStart,
              ea = e.onGestureEnd,
              es = e.onWheel,
              el = e.onEnable,
              eu = e.onDisable,
              ec = e.onClick,
              ef = e.scrollSpeed,
              ed = e.capture,
              ep = e.allowClicks,
              eh = e.lockAxis,
              eg = e.onLockAxis;
            (this.target = m = R(m) || s),
              (this.vars = e),
              S && (S = n.utils.toArray(S)),
              (t = t || 1e-9),
              (r = r || 0),
              (M = M || 1),
              (ef = ef || 1),
              (d = d || "wheel,touch,pointer"),
              (w = !1 !== w),
              v || (v = parseFloat(o.getComputedStyle(l).lineHeight) || 22);
            var em,
              ev,
              eb,
              ew,
              ey,
              ex,
              e_,
              ek = this,
              eS = 0,
              eP = 0,
              eO = e.passive || !y,
              eC = B(m, z),
              eM = B(m, I),
              eE = eC(),
              eT = eM(),
              eA =
                ~d.indexOf("touch") &&
                !~d.indexOf("pointer") &&
                "pointerdown" === h[0],
              ez = P(m),
              eI = m.ownerDocument || a,
              eR = [0, 0, 0],
              eB = [0, 0, 0],
              ej = 0,
              eF = function () {
                return (ej = x());
              },
              eD = function (e, t) {
                return (
                  ((ek.event = e) && S && ~S.indexOf(e.target)) ||
                  (t && eA && "touch" !== e.pointerType) ||
                  (en && en(e, t))
                );
              },
              eN = function () {
                var e = (ek.deltaX = D(eR)),
                  r = (ek.deltaY = D(eB)),
                  n = Math.abs(e) >= t,
                  i = Math.abs(r) >= t;
                K && (n || i) && K(ek, e, r, eR, eB),
                  n &&
                    (W && ek.deltaX > 0 && W(ek),
                    V && ek.deltaX < 0 && V(ek),
                    $ && $(ek),
                    J && ek.deltaX < 0 != eS < 0 && J(ek),
                    (eS = ek.deltaX),
                    (eR[0] = eR[1] = eR[2] = 0)),
                  i &&
                    (G && ek.deltaY > 0 && G(ek),
                    H && ek.deltaY < 0 && H(ek),
                    Z && Z(ek),
                    Q && ek.deltaY < 0 != eP < 0 && Q(ek),
                    (eP = ek.deltaY),
                    (eB[0] = eB[1] = eB[2] = 0)),
                  (ew || eb) &&
                    (er && er(ek), eb && (q(ek), (eb = !1)), (ew = !1)),
                  ex && ((ex = !1), 1) && eg && eg(ek),
                  ey && (es(ek), (ey = !1)),
                  (em = 0);
              },
              eY = function (e, t, r) {
                (eR[r] += e),
                  (eB[r] += t),
                  ek._vx.update(e),
                  ek._vy.update(t),
                  w ? em || (em = requestAnimationFrame(eN)) : eN();
              },
              eX = function (e, t) {
                eh &&
                  !e_ &&
                  ((ek.axis = e_ = Math.abs(e) > Math.abs(t) ? "x" : "y"),
                  (ex = !0)),
                  "y" !== e_ && ((eR[2] += e), ek._vx.update(e, !0)),
                  "x" !== e_ && ((eB[2] += t), ek._vy.update(t, !0)),
                  w ? em || (em = requestAnimationFrame(eN)) : eN();
              },
              eq = function (e) {
                if (!eD(e, 1)) {
                  var t = (e = F(e, y)).clientX,
                    n = e.clientY,
                    i = t - ek.x,
                    o = n - ek.y,
                    a = ek.isDragging;
                  (ek.x = t),
                    (ek.y = n),
                    (a ||
                      Math.abs(ek.startX - t) >= r ||
                      Math.abs(ek.startY - n) >= r) &&
                      (q && (eb = !0),
                      a || (ek.isDragging = !0),
                      eX(i, o),
                      a || (A && A(ek)));
                }
              },
              eL = (ek.onPress = function (e) {
                eD(e, 1) ||
                  (e && e.button) ||
                  ((ek.axis = e_ = null),
                  ev.pause(),
                  (ek.isPressed = !0),
                  (e = F(e)),
                  (eS = eP = 0),
                  (ek.startX = ek.x = e.clientX),
                  (ek.startY = ek.y = e.clientY),
                  ek._vx.reset(),
                  ek._vy.reset(),
                  O(ei ? m : eI, h[1], eq, eO, !0),
                  (ek.deltaX = ek.deltaY = 0),
                  L && L(ek));
              }),
              eU = (ek.onRelease = function (e) {
                if (!eD(e, 1)) {
                  C(ei ? m : eI, h[1], eq, !0);
                  var t = !isNaN(ek.y - ek.startY),
                    r = ek.isDragging,
                    i =
                      r &&
                      (Math.abs(ek.x - ek.startX) > 3 ||
                        Math.abs(ek.y - ek.startY) > 3),
                    a = F(e);
                  !i &&
                    t &&
                    (ek._vx.reset(),
                    ek._vy.reset(),
                    y &&
                      ep &&
                      n.delayedCall(0.08, function () {
                        if (x() - ej > 300 && !e.defaultPrevented) {
                          if (e.target.click) e.target.click();
                          else if (eI.createEvent) {
                            var t = eI.createEvent("MouseEvents");
                            t.initMouseEvent(
                              "click",
                              !0,
                              !0,
                              o,
                              1,
                              a.screenX,
                              a.screenY,
                              a.clientX,
                              a.clientY,
                              !1,
                              !1,
                              !1,
                              !1,
                              0,
                              null
                            ),
                              e.target.dispatchEvent(t);
                          }
                        }
                      })),
                    (ek.isDragging = ek.isGesturing = ek.isPressed = !1),
                    _ && r && !ei && ev.restart(!0),
                    X && r && X(ek),
                    U && U(ek, i);
                }
              }),
              eW = function (e) {
                return (
                  e.touches &&
                  e.touches.length > 1 &&
                  (ek.isGesturing = !0) &&
                  eo(e, ek.isDragging)
                );
              },
              eV = function () {
                return (ek.isGesturing = !1), ea(ek);
              },
              eH = function (e) {
                if (!eD(e)) {
                  var t = eC(),
                    r = eM();
                  eY((t - eE) * ef, (r - eT) * ef, 1),
                    (eE = t),
                    (eT = r),
                    _ && ev.restart(!0);
                }
              },
              eG = function (e) {
                if (!eD(e)) {
                  (e = F(e, y)), es && (ey = !0);
                  var t =
                    (1 === e.deltaMode
                      ? v
                      : 2 === e.deltaMode
                      ? o.innerHeight
                      : 1) * M;
                  eY(e.deltaX * t, e.deltaY * t, 0), _ && !ei && ev.restart(!0);
                }
              },
              e$ = function (e) {
                if (!eD(e)) {
                  var t = e.clientX,
                    r = e.clientY,
                    n = t - ek.x,
                    i = r - ek.y;
                  (ek.x = t),
                    (ek.y = r),
                    (ew = !0),
                    _ && ev.restart(!0),
                    (n || i) && eX(n, i);
                }
              },
              eZ = function (e) {
                (ek.event = e), ee(ek);
              },
              eK = function (e) {
                (ek.event = e), et(ek);
              },
              eJ = function (e) {
                return eD(e) || (F(e, y) && ec(ek));
              };
            (ev = ek._dc =
              n
                .delayedCall(k || 0.25, function () {
                  ek._vx.reset(), ek._vy.reset(), ev.pause(), _ && _(ek);
                })
                .pause()),
              (ek.deltaX = ek.deltaY = 0),
              (ek._vx = j(0, 50, !0)),
              (ek._vy = j(0, 50, !0)),
              (ek.scrollX = eC),
              (ek.scrollY = eM),
              (ek.isDragging = ek.isGesturing = ek.isPressed = !1),
              g(this),
              (ek.enable = function (e) {
                return (
                  !ek.isEnabled &&
                    (O(ez ? eI : m, "scroll", T),
                    d.indexOf("scroll") >= 0 &&
                      O(ez ? eI : m, "scroll", eH, eO, ed),
                    d.indexOf("wheel") >= 0 && O(m, "wheel", eG, eO, ed),
                    ((d.indexOf("touch") >= 0 && u) ||
                      d.indexOf("pointer") >= 0) &&
                      (O(m, h[0], eL, eO, ed),
                      O(eI, h[2], eU),
                      O(eI, h[3], eU),
                      ep && O(m, "click", eF, !0, !0),
                      ec && O(m, "click", eJ),
                      eo && O(eI, "gesturestart", eW),
                      ea && O(eI, "gestureend", eV),
                      ee && O(m, c + "enter", eZ),
                      et && O(m, c + "leave", eK),
                      er && O(m, c + "move", e$)),
                    (ek.isEnabled = !0),
                    e && e.type && eL(e),
                    el && el(ek)),
                  ek
                );
              }),
              (ek.disable = function () {
                ek.isEnabled &&
                  (b.filter(function (e) {
                    return e !== ek && P(e.target);
                  }).length || C(ez ? eI : m, "scroll", T),
                  ek.isPressed &&
                    (ek._vx.reset(),
                    ek._vy.reset(),
                    C(ei ? m : eI, h[1], eq, !0)),
                  C(ez ? eI : m, "scroll", eH, ed),
                  C(m, "wheel", eG, ed),
                  C(m, h[0], eL, ed),
                  C(eI, h[2], eU),
                  C(eI, h[3], eU),
                  C(m, "click", eF, !0),
                  C(m, "click", eJ),
                  C(eI, "gesturestart", eW),
                  C(eI, "gestureend", eV),
                  C(m, c + "enter", eZ),
                  C(m, c + "leave", eK),
                  C(m, c + "move", e$),
                  (ek.isEnabled = ek.isPressed = ek.isDragging = !1),
                  eu && eu(ek));
              }),
              (ek.kill = ek.revert =
                function () {
                  ek.disable();
                  var e = b.indexOf(ek);
                  e >= 0 && b.splice(e, 1), p === ek && (p = 0);
                }),
              b.push(ek),
              ei && P(m) && (p = ek),
              ek.enable(E);
          }),
          (function (e, t) {
            for (var r = 0; r < t.length; r++) {
              var n = t[r];
              (n.enumerable = n.enumerable || !1),
                (n.configurable = !0),
                "value" in n && (n.writable = !0),
                Object.defineProperty(e, n.key, n);
            }
          })(e.prototype, [
            {
              key: "velocityX",
              get: function () {
                return this._vx.getVelocity();
              },
            },
            {
              key: "velocityY",
              get: function () {
                return this._vy.getVelocity();
              },
            },
          ]),
          e
        );
      })();
      (X.version = "3.12.5"),
        (X.create = function (e) {
          return new X(e);
        }),
        (X.register = Y),
        (X.getAll = function () {
          return b.slice();
        }),
        (X.getById = function (e) {
          return b.filter(function (t) {
            return t.vars.id === e;
          })[0];
        }),
        m() && n.registerPlugin(X);
      var q,
        L,
        U,
        W,
        V,
        H,
        G,
        $,
        Z,
        K,
        J,
        Q,
        ee,
        et,
        er,
        en,
        ei,
        eo,
        ea,
        es,
        el,
        eu,
        ec,
        ef,
        ed,
        ep,
        eh,
        eg,
        em,
        ev,
        eb,
        ew,
        ey,
        ex,
        e_,
        ek,
        eS,
        eP,
        eO = 1,
        eC = Date.now,
        eM = eC(),
        eE = 0,
        eT = 0,
        eA = function (e, t, r) {
          var n =
            eW(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return (r["_" + t + "Clamp"] = n), n ? e.substr(6, e.length - 7) : e;
        },
        ez = function (e, t) {
          return t && (!eW(e) || "clamp(" !== e.substr(0, 6))
            ? "clamp(" + e + ")"
            : e;
        },
        eI = function () {
          return (et = 1);
        },
        eR = function () {
          return (et = 0);
        },
        eB = function (e) {
          return e;
        },
        ej = function (e) {
          return Math.round(1e5 * e) / 1e5 || 0;
        },
        eF = function () {
          return "undefined" != typeof window;
        },
        eD = function () {
          return q || (eF() && (q = window.gsap) && q.registerPlugin && q);
        },
        eN = function (e) {
          return !!~G.indexOf(e);
        },
        eY = function (e) {
          return (
            ("Height" === e ? eb : U["inner" + e]) ||
            V["client" + e] ||
            H["client" + e]
          );
        },
        eX = function (e) {
          return (
            S(e, "getBoundingClientRect") ||
            (eN(e)
              ? function () {
                  return (tH.width = U.innerWidth), (tH.height = eb), tH;
                }
              : function () {
                  return tn(e);
                })
          );
        },
        eq = function (e, t, r) {
          var n = r.d,
            i = r.d2,
            o = r.a;
          return (o = S(e, "getBoundingClientRect"))
            ? function () {
                return o()[n];
              }
            : function () {
                return (t ? eY(i) : e["client" + i]) || 0;
              };
        },
        eL = function (e, t) {
          var r = t.s,
            n = t.d2,
            i = t.d,
            o = t.a;
          return Math.max(
            0,
            (o = S(e, (r = "scroll" + n)))
              ? o() - eX(e)()[i]
              : eN(e)
              ? (V[r] || H[r]) - eY(n)
              : e[r] - e["offset" + n]
          );
        },
        eU = function (e, t) {
          for (var r = 0; r < ea.length; r += 3)
            (!t || ~t.indexOf(ea[r + 1])) && e(ea[r], ea[r + 1], ea[r + 2]);
        },
        eW = function (e) {
          return "string" == typeof e;
        },
        eV = function (e) {
          return "function" == typeof e;
        },
        eH = function (e) {
          return "number" == typeof e;
        },
        eG = function (e) {
          return "object" == typeof e;
        },
        e$ = function (e, t, r) {
          return e && e.progress(t ? 0 : 1) && r && e.pause();
        },
        eZ = function (e, t) {
          if (e.enabled) {
            var r = e._ctx
              ? e._ctx.add(function () {
                  return t(e);
                })
              : t(e);
            r && r.totalTime && (e.callbackAnimation = r);
          }
        },
        eK = Math.abs,
        eJ = "left",
        eQ = "right",
        e0 = "bottom",
        e1 = "width",
        e2 = "height",
        e3 = "Right",
        e6 = "Left",
        e4 = "Bottom",
        e5 = "padding",
        e9 = "margin",
        e8 = "Width",
        e7 = "Height",
        te = function (e) {
          return U.getComputedStyle(e);
        },
        tt = function (e) {
          var t = te(e).position;
          e.style.position = "absolute" === t || "fixed" === t ? t : "relative";
        },
        tr = function (e, t) {
          for (var r in t) r in e || (e[r] = t[r]);
          return e;
        },
        tn = function (e, t) {
          var r =
              t &&
              "matrix(1, 0, 0, 1, 0, 0)" !== te(e)[er] &&
              q
                .to(e, {
                  x: 0,
                  y: 0,
                  xPercent: 0,
                  yPercent: 0,
                  rotation: 0,
                  rotationX: 0,
                  rotationY: 0,
                  scale: 1,
                  skewX: 0,
                  skewY: 0,
                })
                .progress(1),
            n = e.getBoundingClientRect();
          return r && r.progress(0).kill(), n;
        },
        ti = function (e, t) {
          var r = t.d2;
          return e["offset" + r] || e["client" + r] || 0;
        },
        to = function (e) {
          var t,
            r = [],
            n = e.labels,
            i = e.duration();
          for (t in n) r.push(n[t] / i);
          return r;
        },
        ta = function (e) {
          var t = q.utils.snap(e),
            r =
              Array.isArray(e) &&
              e.slice(0).sort(function (e, t) {
                return e - t;
              });
          return r
            ? function (e, n, i) {
                var o;
                if ((void 0 === i && (i = 0.001), !n)) return t(e);
                if (n > 0) {
                  for (e -= i, o = 0; o < r.length; o++)
                    if (r[o] >= e) return r[o];
                  return r[o - 1];
                }
                for (o = r.length, e += i; o--; ) if (r[o] <= e) return r[o];
                return r[0];
              }
            : function (r, n, i) {
                void 0 === i && (i = 0.001);
                var o = t(r);
                return !n || Math.abs(o - r) < i || o - r < 0 == n < 0
                  ? o
                  : t(n < 0 ? r - e : r + e);
              };
        },
        ts = function (e, t, r, n) {
          return r.split(",").forEach(function (r) {
            return e(t, r, n);
          });
        },
        tl = function (e, t, r, n, i) {
          return e.addEventListener(t, r, { passive: !n, capture: !!i });
        },
        tu = function (e, t, r, n) {
          return e.removeEventListener(t, r, !!n);
        },
        tc = function (e, t, r) {
          (r = r && r.wheelHandler) && (e(t, "wheel", r), e(t, "touchmove", r));
        },
        tf = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal",
        },
        td = { toggleActions: "play", anticipatePin: 0 },
        tp = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
        th = function (e, t) {
          if (eW(e)) {
            var r = e.indexOf("="),
              n = ~r ? +(e.charAt(r - 1) + 1) * parseFloat(e.substr(r + 1)) : 0;
            ~r &&
              (e.indexOf("%") > r && (n *= t / 100), (e = e.substr(0, r - 1))),
              (e =
                n +
                (e in tp
                  ? tp[e] * t
                  : ~e.indexOf("%")
                  ? (parseFloat(e) * t) / 100
                  : parseFloat(e) || 0));
          }
          return e;
        },
        tg = function (e, t, r, n, i, o, a, s) {
          var l = i.startColor,
            u = i.endColor,
            c = i.fontSize,
            f = i.indent,
            d = i.fontWeight,
            p = W.createElement("div"),
            h = eN(r) || "fixed" === S(r, "pinType"),
            g = -1 !== e.indexOf("scroller"),
            m = h ? H : r,
            v = -1 !== e.indexOf("start"),
            b = v ? l : u,
            w =
              "border-color:" +
              b +
              ";font-size:" +
              c +
              ";color:" +
              b +
              ";font-weight:" +
              d +
              ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return (
            (w += "position:" + ((g || s) && h ? "fixed;" : "absolute;")),
            (g || s || !h) &&
              (w += (n === I ? eQ : e0) + ":" + (o + parseFloat(f)) + "px;"),
            a &&
              (w +=
                "box-sizing:border-box;text-align:left;width:" +
                a.offsetWidth +
                "px;"),
            (p._isStart = v),
            p.setAttribute(
              "class",
              "gsap-marker-" + e + (t ? " marker-" + t : "")
            ),
            (p.style.cssText = w),
            (p.innerText = t || 0 === t ? e + "-" + t : e),
            m.children[0] ? m.insertBefore(p, m.children[0]) : m.appendChild(p),
            (p._offset = p["offset" + n.op.d2]),
            tm(p, 0, n, v),
            p
          );
        },
        tm = function (e, t, r, n) {
          var i = { display: "block" },
            o = r[n ? "os2" : "p2"],
            a = r[n ? "p2" : "os2"];
          (e._isFlipped = n),
            (i[r.a + "Percent"] = n ? -100 : 0),
            (i[r.a] = n ? "1px" : 0),
            (i["border" + o + e8] = 1),
            (i["border" + a + e8] = 0),
            (i[r.p] = t + "px"),
            q.set(e, i);
        },
        tv = [],
        tb = {},
        tw = function () {
          return eC() - eE > 34 && (e_ || (e_ = requestAnimationFrame(tD)));
        },
        ty = function () {
          (ec && ec.isPressed && !(ec.startX > H.clientWidth)) ||
            (w.cache++,
            ec ? e_ || (e_ = requestAnimationFrame(tD)) : tD(),
            eE || tO("scrollStart"),
            (eE = eC()));
        },
        tx = function () {
          (ep = U.innerWidth), (ed = U.innerHeight);
        },
        t_ = function () {
          w.cache++,
            !(
              !ee &&
              !eu &&
              !W.fullscreenElement &&
              !W.webkitFullscreenElement &&
              (!ef ||
                ep !== U.innerWidth ||
                Math.abs(U.innerHeight - ed) > 0.25 * U.innerHeight)
            ) || $.restart(!0);
        },
        tk = {},
        tS = [],
        tP = function e() {
          return tu(t0, "scrollEnd", e) || tB(!0);
        },
        tO = function (e) {
          return (
            (tk[e] &&
              tk[e].map(function (e) {
                return e();
              })) ||
            tS
          );
        },
        tC = [],
        tM = function (e) {
          for (var t = 0; t < tC.length; t += 5)
            (!e || (tC[t + 4] && tC[t + 4].query === e)) &&
              ((tC[t].style.cssText = tC[t + 1]),
              tC[t].getBBox && tC[t].setAttribute("transform", tC[t + 2] || ""),
              (tC[t + 3].uncache = 1));
        },
        tE = function (e, t) {
          var r;
          for (en = 0; en < tv.length; en++)
            (r = tv[en]) &&
              (!t || r._ctx === t) &&
              (e ? r.kill(1) : r.revert(!0, !0));
          (ew = !0), t && tM(t), t || tO("revert");
        },
        tT = function (e, t) {
          w.cache++,
            (t || !ek) &&
              w.forEach(function (e) {
                return eV(e) && e.cacheID++ && (e.rec = 0);
              }),
            eW(e) && (U.history.scrollRestoration = em = e);
        },
        tA = 0,
        tz = function () {
          if (eS !== tA) {
            var e = (eS = tA);
            requestAnimationFrame(function () {
              return e === tA && tB(!0);
            });
          }
        },
        tI = function () {
          H.appendChild(ev),
            (eb = (!ec && ev.offsetHeight) || U.innerHeight),
            H.removeChild(ev);
        },
        tR = function (e) {
          return Z(
            ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end"
          ).forEach(function (t) {
            return (t.style.display = e ? "none" : "block");
          });
        },
        tB = function (e, t) {
          if (eE && !e && !ew) {
            tl(t0, "scrollEnd", tP);
            return;
          }
          tI(),
            (ek = t0.isRefreshing = !0),
            w.forEach(function (e) {
              return eV(e) && ++e.cacheID && (e.rec = e());
            });
          var r = tO("refreshInit");
          es && t0.sort(),
            t || tE(),
            w.forEach(function (e) {
              eV(e) &&
                (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0));
            }),
            tv.slice(0).forEach(function (e) {
              return e.refresh();
            }),
            (ew = !1),
            tv.forEach(function (e) {
              if (e._subPinOffset && e.pin) {
                var t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                  r = e.pin[t];
                e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - r), e.refresh();
              }
            }),
            (ey = 1),
            tR(!0),
            tv.forEach(function (e) {
              var t = eL(e.scroller, e._dir),
                r = "max" === e.vars.end || (e._endClamp && e.end > t),
                n = e._startClamp && e.start >= t;
              (r || n) &&
                e.setPositions(
                  n ? t - 1 : e.start,
                  r ? Math.max(n ? t : e.start + 1, t) : e.end,
                  !0
                );
            }),
            tR(!1),
            (ey = 0),
            r.forEach(function (e) {
              return e && e.render && e.render(-1);
            }),
            w.forEach(function (e) {
              eV(e) &&
                (e.smooth &&
                  requestAnimationFrame(function () {
                    return (e.target.style.scrollBehavior = "smooth");
                  }),
                e.rec && e(e.rec));
            }),
            tT(em, 1),
            $.pause(),
            tA++,
            (ek = 2),
            tD(2),
            tv.forEach(function (e) {
              return eV(e.vars.onRefresh) && e.vars.onRefresh(e);
            }),
            (ek = t0.isRefreshing = !1),
            tO("refresh");
        },
        tj = 0,
        tF = 1,
        tD = function (e) {
          if (2 === e || (!ek && !ew)) {
            (t0.isUpdating = !0), eP && eP.update(0);
            var t = tv.length,
              r = eC(),
              n = r - eM >= 50,
              i = t && tv[0].scroll();
            if (
              ((tF = tj > i ? -1 : 1),
              ek || (tj = i),
              n &&
                (eE && !et && r - eE > 200 && ((eE = 0), tO("scrollEnd")),
                (J = eM),
                (eM = r)),
              tF < 0)
            ) {
              for (en = t; en-- > 0; ) tv[en] && tv[en].update(0, n);
              tF = 1;
            } else for (en = 0; en < t; en++) tv[en] && tv[en].update(0, n);
            t0.isUpdating = !1;
          }
          e_ = 0;
        },
        tN = [
          eJ,
          "top",
          e0,
          eQ,
          e9 + e4,
          e9 + e3,
          e9 + "Top",
          e9 + e6,
          "display",
          "flexShrink",
          "float",
          "zIndex",
          "gridColumnStart",
          "gridColumnEnd",
          "gridRowStart",
          "gridRowEnd",
          "gridArea",
          "justifySelf",
          "alignSelf",
          "placeSelf",
          "order",
        ],
        tY = tN.concat([
          e1,
          e2,
          "boxSizing",
          "max" + e8,
          "max" + e7,
          "position",
          e9,
          e5,
          e5 + "Top",
          e5 + e3,
          e5 + e4,
          e5 + e6,
        ]),
        tX = function (e, t, r) {
          tU(r);
          var n = e._gsap;
          if (n.spacerIsNative) tU(n.spacerState);
          else if (e._gsap.swappedIn) {
            var i = t.parentNode;
            i && (i.insertBefore(e, t), i.removeChild(t));
          }
          e._gsap.swappedIn = !1;
        },
        tq = function (e, t, r, n) {
          if (!e._gsap.swappedIn) {
            for (var i, o = tN.length, a = t.style, s = e.style; o--; )
              a[(i = tN[o])] = r[i];
            (a.position = "absolute" === r.position ? "absolute" : "relative"),
              "inline" === r.display && (a.display = "inline-block"),
              (s[e0] = s[eQ] = "auto"),
              (a.flexBasis = r.flexBasis || "auto"),
              (a.overflow = "visible"),
              (a.boxSizing = "border-box"),
              (a[e1] = ti(e, z) + "px"),
              (a[e2] = ti(e, I) + "px"),
              (a[e5] = s[e9] = s.top = s[eJ] = "0"),
              tU(n),
              (s[e1] = s["max" + e8] = r[e1]),
              (s[e2] = s["max" + e7] = r[e2]),
              (s[e5] = r[e5]),
              e.parentNode !== t &&
                (e.parentNode.insertBefore(t, e), t.appendChild(e)),
              (e._gsap.swappedIn = !0);
          }
        },
        tL = /([A-Z])/g,
        tU = function (e) {
          if (e) {
            var t,
              r,
              n = e.t.style,
              i = e.length,
              o = 0;
            for ((e.t._gsap || q.core.getCache(e.t)).uncache = 1; o < i; o += 2)
              (r = e[o + 1]),
                (t = e[o]),
                r
                  ? (n[t] = r)
                  : n[t] &&
                    n.removeProperty(t.replace(tL, "-$1").toLowerCase());
          }
        },
        tW = function (e) {
          for (var t = tY.length, r = e.style, n = [], i = 0; i < t; i++)
            n.push(tY[i], r[tY[i]]);
          return (n.t = e), n;
        },
        tV = function (e, t, r) {
          for (var n, i = [], o = e.length, a = r ? 8 : 0; a < o; a += 2)
            (n = e[a]), i.push(n, n in t ? t[n] : e[a + 1]);
          return (i.t = e.t), i;
        },
        tH = { left: 0, top: 0 },
        tG = function (e, t, r, n, i, o, a, s, l, u, c, f, d, p) {
          eV(e) && (e = e(s)),
            eW(e) &&
              "max" === e.substr(0, 3) &&
              (e = f + ("=" === e.charAt(4) ? th("0" + e.substr(3), r) : 0));
          var h,
            g,
            m,
            v = d ? d.time() : 0;
          if ((d && d.seek(0), isNaN(e) || (e = +e), eH(e)))
            d &&
              (e = q.utils.mapRange(
                d.scrollTrigger.start,
                d.scrollTrigger.end,
                0,
                f,
                e
              )),
              a && tm(a, r, n, !0);
          else {
            eV(t) && (t = t(s));
            var b,
              w,
              y,
              x,
              _ = (e || "0").split(" ");
            (b = tn((m = R(t, s) || H)) || {}).left ||
              b.top ||
              "none" !== te(m).display ||
              ((x = m.style.display),
              (m.style.display = "block"),
              (b = tn(m)),
              x ? (m.style.display = x) : m.style.removeProperty("display")),
              (w = th(_[0], b[n.d])),
              (y = th(_[1] || "0", r)),
              (e = b[n.p] - l[n.p] - u + w + i - y),
              a && tm(a, y, n, r - y < 20 || (a._isStart && y > 20)),
              (r -= r - y);
          }
          if ((p && ((s[p] = e || -0.001), e < 0 && (e = 0)), o)) {
            var k = e + r,
              S = o._isStart;
            (h = "scroll" + n.d2),
              tm(
                o,
                k,
                n,
                (S && k > 20) ||
                  (!S && (c ? Math.max(H[h], V[h]) : o.parentNode[h]) <= k + 1)
              ),
              c &&
                ((l = tn(a)),
                c && (o.style[n.op.p] = l[n.op.p] - n.op.m - o._offset + "px"));
          }
          return (
            d &&
              m &&
              ((h = tn(m)),
              d.seek(f),
              (g = tn(m)),
              (d._caScrollDist = h[n.p] - g[n.p]),
              (e = (e / d._caScrollDist) * f)),
            d && d.seek(v),
            d ? e : Math.round(e)
          );
        },
        t$ = /(webkit|moz|length|cssText|inset)/i,
        tZ = function (e, t, r, n) {
          if (e.parentNode !== t) {
            var i,
              o,
              a = e.style;
            if (t === H) {
              for (i in ((e._stOrig = a.cssText), (o = te(e))))
                +i ||
                  t$.test(i) ||
                  !o[i] ||
                  "string" != typeof a[i] ||
                  "0" === i ||
                  (a[i] = o[i]);
              (a.top = r), (a.left = n);
            } else a.cssText = e._stOrig;
            (q.core.getCache(e).uncache = 1), t.appendChild(e);
          }
        },
        tK = function (e, t, r) {
          var n = t,
            i = n;
          return function (t) {
            var o = Math.round(e());
            return (
              o !== n &&
                o !== i &&
                Math.abs(o - n) > 3 &&
                Math.abs(o - i) > 3 &&
                ((t = o), r && r()),
              (i = n),
              (n = t),
              t
            );
          };
        },
        tJ = function (e, t, r) {
          var n = {};
          (n[t.p] = "+=" + r), q.set(e, n);
        },
        tQ = function (e, t) {
          var r = B(e, t),
            n = "_scroll" + t.p2,
            i = function t(i, o, a, s, l) {
              var u = t.tween,
                c = o.onComplete,
                f = {};
              a = a || r();
              var d = tK(r, a, function () {
                u.kill(), (t.tween = 0);
              });
              return (
                (l = (s && l) || 0),
                (s = s || i - a),
                u && u.kill(),
                (o[n] = i),
                (o.inherit = !1),
                (o.modifiers = f),
                (f[n] = function () {
                  return d(a + s * u.ratio + l * u.ratio * u.ratio);
                }),
                (o.onUpdate = function () {
                  w.cache++, t.tween && tD();
                }),
                (o.onComplete = function () {
                  (t.tween = 0), c && c.call(u);
                }),
                (u = t.tween = q.to(e, o))
              );
            };
          return (
            (e[n] = r),
            (r.wheelHandler = function () {
              return i.tween && i.tween.kill() && (i.tween = 0);
            }),
            tl(e, "wheel", r.wheelHandler),
            t0.isTouch && tl(e, "touchmove", r.wheelHandler),
            i
          );
        },
        t0 = (function () {
          function e(t, r) {
            L ||
              e.register(q) ||
              console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
              eg(this),
              this.init(t, r);
          }
          return (
            (e.prototype.init = function (t, r) {
              if (
                ((this.progress = this.start = 0),
                this.vars && this.kill(!0, !0),
                !eT)
              ) {
                this.update = this.refresh = this.kill = eB;
                return;
              }
              var n,
                i,
                o,
                a,
                s,
                l,
                u,
                c,
                f,
                d,
                p,
                h,
                g,
                m,
                v,
                b,
                x,
                _,
                k,
                P,
                O,
                C,
                M,
                E,
                T,
                A,
                j,
                F,
                D,
                N,
                Y,
                X,
                L,
                G,
                $,
                Q,
                er,
                ei,
                eo,
                ea,
                eu,
                ec = (t = tr(
                  eW(t) || eH(t) || t.nodeType ? { trigger: t } : t,
                  td
                )),
                ef = ec.onUpdate,
                ed = ec.toggleClass,
                ep = ec.id,
                eh = ec.onToggle,
                eg = ec.onRefresh,
                em = ec.scrub,
                ev = ec.trigger,
                eb = ec.pin,
                ew = ec.pinSpacing,
                e_ = ec.invalidateOnRefresh,
                eS = ec.anticipatePin,
                eM = ec.onScrubComplete,
                eI = ec.onSnapComplete,
                eR = ec.once,
                eF = ec.snap,
                eD = ec.pinReparent,
                eY = ec.pinSpacer,
                eU = ec.containerAnimation,
                eJ = ec.fastScrollEnd,
                eQ = ec.preventOverlaps,
                e0 =
                  t.horizontal || (t.containerAnimation && !1 !== t.horizontal)
                    ? z
                    : I,
                ts = !em && 0 !== em,
                tc = R(t.scroller || U),
                tp = q.core.getCache(tc),
                tm = eN(tc),
                tw =
                  ("pinType" in t
                    ? t.pinType
                    : S(tc, "pinType") || (tm && "fixed")) === "fixed",
                tx = [t.onEnter, t.onLeave, t.onEnterBack, t.onLeaveBack],
                tk = ts && t.toggleActions.split(" "),
                tS = "markers" in t ? t.markers : td.markers,
                tO = tm ? 0 : parseFloat(te(tc)["border" + e0.p2 + e8]) || 0,
                tC = this,
                tM =
                  t.onRefreshInit &&
                  function () {
                    return t.onRefreshInit(tC);
                  },
                tE = eq(tc, tm, e0),
                tT =
                  !tm || ~y.indexOf(tc)
                    ? eX(tc)
                    : function () {
                        return tH;
                      },
                tA = 0,
                tI = 0,
                tR = 0,
                tB = B(tc, e0);
              if (
                ((tC._startClamp = tC._endClamp = !1),
                (tC._dir = e0),
                (eS *= 45),
                (tC.scroller = tc),
                (tC.scroll = eU ? eU.time.bind(eU) : tB),
                (l = tB()),
                (tC.vars = t),
                (r = r || t.animation),
                "refreshPriority" in t &&
                  ((es = 1), -9999 === t.refreshPriority && (eP = tC)),
                (tp.tweenScroll = tp.tweenScroll || {
                  top: tQ(tc, I),
                  left: tQ(tc, z),
                }),
                (tC.tweenTo = o = tp.tweenScroll[e0.p]),
                (tC.scrubDuration = function (e) {
                  ($ = eH(e) && e)
                    ? G
                      ? G.duration(e)
                      : (G = q.to(r, {
                          ease: "expo",
                          totalProgress: "+=0",
                          inherit: !1,
                          duration: $,
                          paused: !0,
                          onComplete: function () {
                            return eM && eM(tC);
                          },
                        }))
                    : (G && G.progress(1).kill(), (G = 0));
                }),
                r &&
                  ((r.vars.lazy = !1),
                  (r._initted && !tC.isReverted) ||
                    (!1 !== r.vars.immediateRender &&
                      !1 !== t.immediateRender &&
                      r.duration() &&
                      r.render(0, !0, !0)),
                  (tC.animation = r.pause()),
                  (r.scrollTrigger = tC),
                  tC.scrubDuration(em),
                  (X = 0),
                  ep || (ep = r.vars.id)),
                eF &&
                  ((!eG(eF) || eF.push) && (eF = { snapTo: eF }),
                  "scrollBehavior" in H.style &&
                    q.set(tm ? [H, V] : tc, { scrollBehavior: "auto" }),
                  w.forEach(function (e) {
                    return (
                      eV(e) &&
                      e.target === (tm ? W.scrollingElement || V : tc) &&
                      (e.smooth = !1)
                    );
                  }),
                  (s = eV(eF.snapTo)
                    ? eF.snapTo
                    : "labels" === eF.snapTo
                    ? ((n = r),
                      function (e) {
                        return q.utils.snap(to(n), e);
                      })
                    : "labelsDirectional" === eF.snapTo
                    ? ((i = r),
                      function (e, t) {
                        return ta(to(i))(e, t.direction);
                      })
                    : !1 !== eF.directional
                    ? function (e, t) {
                        return ta(eF.snapTo)(
                          e,
                          eC() - tI < 500 ? 0 : t.direction
                        );
                      }
                    : q.utils.snap(eF.snapTo)),
                  (Q = eG((Q = eF.duration || { min: 0.1, max: 2 }))
                    ? K(Q.min, Q.max)
                    : K(Q, Q)),
                  (er = q
                    .delayedCall(eF.delay || $ / 2 || 0.1, function () {
                      var e = tB(),
                        t = eC() - tI < 500,
                        n = o.tween;
                      if (
                        (t || 10 > Math.abs(tC.getVelocity())) &&
                        !n &&
                        !et &&
                        tA !== e
                      ) {
                        var i,
                          a,
                          l = (e - c) / b,
                          u = r && !ts ? r.totalProgress() : l,
                          d = t ? 0 : ((u - L) / (eC() - J)) * 1e3 || 0,
                          p = q.utils.clamp(-l, 1 - l, (eK(d / 2) * d) / 0.185),
                          h = l + (!1 === eF.inertia ? 0 : p),
                          g = eF,
                          m = g.onStart,
                          v = g.onInterrupt,
                          w = g.onComplete;
                        if (
                          (eH((i = s(h, tC))) || (i = h),
                          (a = Math.round(c + i * b)),
                          e <= f && e >= c && a !== e)
                        ) {
                          if (n && !n._initted && n.data <= eK(a - e)) return;
                          !1 === eF.inertia && (p = i - l),
                            o(
                              a,
                              {
                                duration: Q(
                                  eK(
                                    (0.185 * Math.max(eK(h - u), eK(i - u))) /
                                      d /
                                      0.05 || 0
                                  )
                                ),
                                ease: eF.ease || "power3",
                                data: eK(a - e),
                                onInterrupt: function () {
                                  return er.restart(!0) && v && v(tC);
                                },
                                onComplete: function () {
                                  tC.update(),
                                    (tA = tB()),
                                    r &&
                                      (G
                                        ? G.resetTo(
                                            "totalProgress",
                                            i,
                                            r._tTime / r._tDur
                                          )
                                        : r.progress(i)),
                                    (X = L =
                                      r && !ts
                                        ? r.totalProgress()
                                        : tC.progress),
                                    eI && eI(tC),
                                    w && w(tC);
                                },
                              },
                              e,
                              p * b,
                              a - e - p * b
                            ),
                            m && m(tC, o.tween);
                        }
                      } else tC.isActive && tA !== e && er.restart(!0);
                    })
                    .pause())),
                ep && (tb[ep] = tC),
                (eu =
                  (ev = tC.trigger = R(ev || (!0 !== eb && eb))) &&
                  ev._gsap &&
                  ev._gsap.stRevert) && (eu = eu(tC)),
                (eb = !0 === eb ? ev : R(eb)),
                eW(ed) && (ed = { targets: ev, className: ed }),
                eb &&
                  (!1 === ew ||
                    ew === e9 ||
                    (ew =
                      (!!ew ||
                        !eb.parentNode ||
                        !eb.parentNode.style ||
                        "flex" !== te(eb.parentNode).display) &&
                      e5),
                  (tC.pin = eb),
                  (a = q.core.getCache(eb)).spacer
                    ? (x = a.pinState)
                    : (eY &&
                        ((eY = R(eY)) &&
                          !eY.nodeType &&
                          (eY = eY.current || eY.nativeElement),
                        (a.spacerIsNative = !!eY),
                        eY && (a.spacerState = tW(eY))),
                      (a.spacer = P = eY || W.createElement("div")),
                      P.classList.add("pin-spacer"),
                      ep && P.classList.add("pin-spacer-" + ep),
                      (a.pinState = x = tW(eb))),
                  !1 !== t.force3D && q.set(eb, { force3D: !0 }),
                  (tC.spacer = P = a.spacer),
                  (A = (Y = te(eb))[ew + e0.os2]),
                  (C = q.getProperty(eb)),
                  (M = q.quickSetter(eb, e0.a, "px")),
                  tq(eb, P, Y),
                  (k = tW(eb))),
                tS)
              ) {
                (m = eG(tS) ? tr(tS, tf) : tf),
                  (h = tg("scroller-start", ep, tc, e0, m, 0)),
                  (g = tg("scroller-end", ep, tc, e0, m, 0, h)),
                  (O = h["offset" + e0.op.d2]);
                var tj = R(S(tc, "content") || tc);
                (d = this.markerStart = tg("start", ep, tj, e0, m, O, 0, eU)),
                  (p = this.markerEnd = tg("end", ep, tj, e0, m, O, 0, eU)),
                  eU && (ea = q.quickSetter([d, p], e0.a, "px")),
                  tw ||
                    (y.length && !0 === S(tc, "fixedMarkers")) ||
                    (tt(tm ? H : tc),
                    q.set([h, g], { force3D: !0 }),
                    (F = q.quickSetter(h, e0.a, "px")),
                    (N = q.quickSetter(g, e0.a, "px")));
              }
              if (eU) {
                var tD = eU.vars.onUpdate,
                  tN = eU.vars.onUpdateParams;
                eU.eventCallback("onUpdate", function () {
                  tC.update(0, 0, 1), tD && tD.apply(eU, tN || []);
                });
              }
              if (
                ((tC.previous = function () {
                  return tv[tv.indexOf(tC) - 1];
                }),
                (tC.next = function () {
                  return tv[tv.indexOf(tC) + 1];
                }),
                (tC.revert = function (e, t) {
                  if (!t) return tC.kill(!0);
                  var n = !1 !== e || !tC.enabled,
                    i = ee;
                  n !== tC.isReverted &&
                    (n &&
                      ((ei = Math.max(tB(), tC.scroll.rec || 0)),
                      (tR = tC.progress),
                      (eo = r && r.progress())),
                    d &&
                      [d, p, h, g].forEach(function (e) {
                        return (e.style.display = n ? "none" : "block");
                      }),
                    n && ((ee = tC), tC.update(n)),
                    !eb ||
                      (eD && tC.isActive) ||
                      (n ? tX(eb, P, x) : tq(eb, P, te(eb), j)),
                    n || tC.update(n),
                    (ee = i),
                    (tC.isReverted = n));
                }),
                (tC.refresh = function (n, i, a, s) {
                  if ((!ee && tC.enabled) || i) {
                    if (eb && n && eE) {
                      tl(e, "scrollEnd", tP);
                      return;
                    }
                    !ek && tM && tM(tC),
                      (ee = tC),
                      o.tween && !a && (o.tween.kill(), (o.tween = 0)),
                      G && G.pause(),
                      e_ && r && r.revert({ kill: !1 }).invalidate(),
                      tC.isReverted || tC.revert(!0, !0),
                      (tC._subPinOffset = !1);
                    var m,
                      w,
                      y,
                      S,
                      O,
                      M,
                      A,
                      F,
                      N,
                      Y,
                      X,
                      L,
                      U,
                      $ = tE(),
                      Z = tT(),
                      K = eU ? eU.duration() : eL(tc, e0),
                      J = b <= 0.01,
                      Q = 0,
                      et = s || 0,
                      en = eG(a) ? a.end : t.end,
                      ea = t.endTrigger || ev,
                      es = eG(a)
                        ? a.start
                        : t.start ||
                          (0 !== t.start && ev ? (eb ? "0 0" : "0 100%") : 0),
                      eu = (tC.pinnedContainer =
                        t.pinnedContainer && R(t.pinnedContainer, tC)),
                      ec = (ev && Math.max(0, tv.indexOf(tC))) || 0,
                      ef = ec;
                    for (
                      tS &&
                      eG(a) &&
                      ((L = q.getProperty(h, e0.p)),
                      (U = q.getProperty(g, e0.p)));
                      ef--;

                    )
                      (M = tv[ef]).end || M.refresh(0, 1) || (ee = tC),
                        (A = M.pin) &&
                          (A === ev || A === eb || A === eu) &&
                          !M.isReverted &&
                          (Y || (Y = []), Y.unshift(M), M.revert(!0, !0)),
                        M !== tv[ef] && (ec--, ef--);
                    for (
                      eV(es) && (es = es(tC)),
                        c =
                          tG(
                            (es = eA(es, "start", tC)),
                            ev,
                            $,
                            e0,
                            tB(),
                            d,
                            h,
                            tC,
                            Z,
                            tO,
                            tw,
                            K,
                            eU,
                            tC._startClamp && "_startClamp"
                          ) || (eb ? -0.001 : 0),
                        eV(en) && (en = en(tC)),
                        eW(en) &&
                          !en.indexOf("+=") &&
                          (~en.indexOf(" ")
                            ? (en = (eW(es) ? es.split(" ")[0] : "") + en)
                            : ((Q = th(en.substr(2), $)),
                              (en = eW(es)
                                ? es
                                : (eU
                                    ? q.utils.mapRange(
                                        0,
                                        eU.duration(),
                                        eU.scrollTrigger.start,
                                        eU.scrollTrigger.end,
                                        c
                                      )
                                    : c) + Q),
                              (ea = ev))),
                        en = eA(en, "end", tC),
                        f =
                          Math.max(
                            c,
                            tG(
                              en || (ea ? "100% 0" : K),
                              ea,
                              $,
                              e0,
                              tB() + Q,
                              p,
                              g,
                              tC,
                              Z,
                              tO,
                              tw,
                              K,
                              eU,
                              tC._endClamp && "_endClamp"
                            )
                          ) || -0.001,
                        Q = 0,
                        ef = ec;
                      ef--;

                    )
                      (A = (M = tv[ef]).pin) &&
                        M.start - M._pinPush <= c &&
                        !eU &&
                        M.end > 0 &&
                        ((m =
                          M.end -
                          (tC._startClamp ? Math.max(0, M.start) : M.start)),
                        ((A === ev && M.start - M._pinPush < c) || A === eu) &&
                          isNaN(es) &&
                          (Q += m * (1 - M.progress)),
                        A === eb && (et += m));
                    if (
                      ((c += Q),
                      (f += Q),
                      tC._startClamp && (tC._startClamp += Q),
                      tC._endClamp &&
                        !ek &&
                        ((tC._endClamp = f || -0.001),
                        (f = Math.min(f, eL(tc, e0)))),
                      (b = f - c || ((c -= 0.01) && 0.001)),
                      J &&
                        (tR = q.utils.clamp(0, 1, q.utils.normalize(c, f, ei))),
                      (tC._pinPush = et),
                      d &&
                        Q &&
                        (((m = {})[e0.a] = "+=" + Q),
                        eu && (m[e0.p] = "-=" + tB()),
                        q.set([d, p], m)),
                      eb && !(ey && tC.end >= eL(tc, e0)))
                    )
                      (m = te(eb)),
                        (S = e0 === I),
                        (y = tB()),
                        (E = parseFloat(C(e0.a)) + et),
                        !K &&
                          f > 1 &&
                          ((X = {
                            style: (X = (tm ? W.scrollingElement || V : tc)
                              .style),
                            value: X["overflow" + e0.a.toUpperCase()],
                          }),
                          tm &&
                            "scroll" !==
                              te(H)["overflow" + e0.a.toUpperCase()] &&
                            (X.style["overflow" + e0.a.toUpperCase()] =
                              "scroll")),
                        tq(eb, P, m),
                        (k = tW(eb)),
                        (w = tn(eb, !0)),
                        (F = tw && B(tc, S ? z : I)()),
                        ew
                          ? (((j = [ew + e0.os2, b + et + "px"]).t = P),
                            (ef = ew === e5 ? ti(eb, e0) + b + et : 0) &&
                              (j.push(e0.d, ef + "px"),
                              "auto" !== P.style.flexBasis &&
                                (P.style.flexBasis = ef + "px")),
                            tU(j),
                            eu &&
                              tv.forEach(function (e) {
                                e.pin === eu &&
                                  !1 !== e.vars.pinSpacing &&
                                  (e._subPinOffset = !0);
                              }),
                            tw && tB(ei))
                          : (ef = ti(eb, e0)) &&
                            "auto" !== P.style.flexBasis &&
                            (P.style.flexBasis = ef + "px"),
                        tw &&
                          (((O = {
                            top: w.top + (S ? y - c : F) + "px",
                            left: w.left + (S ? F : y - c) + "px",
                            boxSizing: "border-box",
                            position: "fixed",
                          })[e1] = O["max" + e8] =
                            Math.ceil(w.width) + "px"),
                          (O[e2] = O["max" + e7] = Math.ceil(w.height) + "px"),
                          (O[e9] =
                            O[e9 + "Top"] =
                            O[e9 + e3] =
                            O[e9 + e4] =
                            O[e9 + e6] =
                              "0"),
                          (O[e5] = m[e5]),
                          (O[e5 + "Top"] = m[e5 + "Top"]),
                          (O[e5 + e3] = m[e5 + e3]),
                          (O[e5 + e4] = m[e5 + e4]),
                          (O[e5 + e6] = m[e5 + e6]),
                          (_ = tV(x, O, eD)),
                          ek && tB(0)),
                        r
                          ? ((N = r._initted),
                            el(1),
                            r.render(r.duration(), !0, !0),
                            (T = C(e0.a) - E + b + et),
                            (D = Math.abs(b - T) > 1),
                            tw && D && _.splice(_.length - 2, 2),
                            r.render(0, !0, !0),
                            N || r.invalidate(!0),
                            r.parent || r.totalTime(r.totalTime()),
                            el(0))
                          : (T = b),
                        X &&
                          (X.value
                            ? (X.style["overflow" + e0.a.toUpperCase()] =
                                X.value)
                            : X.style.removeProperty("overflow-" + e0.a));
                    else if (ev && tB() && !eU)
                      for (w = ev.parentNode; w && w !== H; )
                        w._pinOffset &&
                          ((c -= w._pinOffset), (f -= w._pinOffset)),
                          (w = w.parentNode);
                    Y &&
                      Y.forEach(function (e) {
                        return e.revert(!1, !0);
                      }),
                      (tC.start = c),
                      (tC.end = f),
                      (l = u = ek ? ei : tB()),
                      eU || ek || (l < ei && tB(ei), (tC.scroll.rec = 0)),
                      tC.revert(!1, !0),
                      (tI = eC()),
                      er && ((tA = -1), er.restart(!0)),
                      (ee = 0),
                      r &&
                        ts &&
                        (r._initted || eo) &&
                        r.progress() !== eo &&
                        r.progress(eo || 0, !0).render(r.time(), !0, !0),
                      (J || tR !== tC.progress || eU || e_) &&
                        (r &&
                          !ts &&
                          r.totalProgress(
                            eU && c < -0.001 && !tR
                              ? q.utils.normalize(c, f, 0)
                              : tR,
                            !0
                          ),
                        (tC.progress = J || (l - c) / b === tR ? 0 : tR)),
                      eb && ew && (P._pinOffset = Math.round(tC.progress * T)),
                      G && G.invalidate(),
                      isNaN(L) ||
                        ((L -= q.getProperty(h, e0.p)),
                        (U -= q.getProperty(g, e0.p)),
                        tJ(h, e0, L),
                        tJ(d, e0, L - (s || 0)),
                        tJ(g, e0, U),
                        tJ(p, e0, U - (s || 0))),
                      J && !ek && tC.update(),
                      !eg || ek || v || ((v = !0), eg(tC), (v = !1));
                  }
                }),
                (tC.getVelocity = function () {
                  return ((tB() - u) / (eC() - J)) * 1e3 || 0;
                }),
                (tC.endAnimation = function () {
                  e$(tC.callbackAnimation),
                    r &&
                      (G
                        ? G.progress(1)
                        : r.paused()
                        ? ts || e$(r, tC.direction < 0, 1)
                        : e$(r, r.reversed()));
                }),
                (tC.labelToScroll = function (e) {
                  return (
                    (r &&
                      r.labels &&
                      (c || tC.refresh() || c) +
                        (r.labels[e] / r.duration()) * b) ||
                    0
                  );
                }),
                (tC.getTrailing = function (e) {
                  var t = tv.indexOf(tC),
                    r =
                      tC.direction > 0
                        ? tv.slice(0, t).reverse()
                        : tv.slice(t + 1);
                  return (
                    eW(e)
                      ? r.filter(function (t) {
                          return t.vars.preventOverlaps === e;
                        })
                      : r
                  ).filter(function (e) {
                    return tC.direction > 0 ? e.end <= c : e.start >= f;
                  });
                }),
                (tC.update = function (e, t, n) {
                  if (!eU || n || e) {
                    var i,
                      a,
                      s,
                      d,
                      p,
                      g,
                      m,
                      v = !0 === ek ? ei : tC.scroll(),
                      w = e ? 0 : (v - c) / b,
                      y = w < 0 ? 0 : w > 1 ? 1 : w || 0,
                      x = tC.progress;
                    if (
                      (t &&
                        ((u = l),
                        (l = eU ? tB() : v),
                        eF &&
                          ((L = X), (X = r && !ts ? r.totalProgress() : y))),
                      eS &&
                        eb &&
                        !ee &&
                        !eO &&
                        eE &&
                        (!y && c < v + ((v - u) / (eC() - J)) * eS
                          ? (y = 1e-4)
                          : 1 === y &&
                            f > v + ((v - u) / (eC() - J)) * eS &&
                            (y = 0.9999)),
                      y !== x && tC.enabled)
                    ) {
                      if (
                        ((d =
                          (p =
                            (i = tC.isActive = !!y && y < 1) !=
                            (!!x && x < 1)) || !!y != !!x),
                        (tC.direction = y > x ? 1 : -1),
                        (tC.progress = y),
                        d &&
                          !ee &&
                          ((a = y && !x ? 0 : 1 === y ? 1 : 1 === x ? 2 : 3),
                          ts &&
                            ((s =
                              (!p && "none" !== tk[a + 1] && tk[a + 1]) ||
                              tk[a]),
                            (m =
                              r &&
                              ("complete" === s || "reset" === s || s in r)))),
                        eQ &&
                          (p || m) &&
                          (m || em || !r) &&
                          (eV(eQ)
                            ? eQ(tC)
                            : tC.getTrailing(eQ).forEach(function (e) {
                                return e.endAnimation();
                              })),
                        !ts &&
                          (!G || ee || eO
                            ? r && r.totalProgress(y, !!(ee && (tI || e)))
                            : (G._dp._time - G._start !== G._time &&
                                G.render(G._dp._time - G._start),
                              G.resetTo
                                ? G.resetTo(
                                    "totalProgress",
                                    y,
                                    r._tTime / r._tDur
                                  )
                                : ((G.vars.totalProgress = y),
                                  G.invalidate().restart()))),
                        eb)
                      ) {
                        if ((e && ew && (P.style[ew + e0.os2] = A), tw)) {
                          if (d) {
                            if (
                              ((g =
                                !e &&
                                y > x &&
                                f + 1 > v &&
                                v + 1 >= eL(tc, e0)),
                              eD)
                            ) {
                              if (!e && (i || g)) {
                                var S = tn(eb, !0),
                                  O = v - c;
                                tZ(
                                  eb,
                                  H,
                                  S.top + (e0 === I ? O : 0) + "px",
                                  S.left + (e0 === I ? 0 : O) + "px"
                                );
                              } else tZ(eb, P);
                            }
                            tU(i || g ? _ : k),
                              (D && y < 1 && i) ||
                                M(E + (1 !== y || g ? 0 : T));
                          }
                        } else M(ej(E + T * y));
                      }
                      !eF || o.tween || ee || eO || er.restart(!0),
                        ed &&
                          (p || (eR && y && (y < 1 || !ex))) &&
                          Z(ed.targets).forEach(function (e) {
                            return e.classList[i || eR ? "add" : "remove"](
                              ed.className
                            );
                          }),
                        !ef || ts || e || ef(tC),
                        d && !ee
                          ? (ts &&
                              (m &&
                                ("complete" === s
                                  ? r.pause().totalProgress(1)
                                  : "reset" === s
                                  ? r.restart(!0).pause()
                                  : "restart" === s
                                  ? r.restart(!0)
                                  : r[s]()),
                              ef && ef(tC)),
                            (p || !ex) &&
                              (eh && p && eZ(tC, eh),
                              tx[a] && eZ(tC, tx[a]),
                              eR && (1 === y ? tC.kill(!1, 1) : (tx[a] = 0)),
                              !p && tx[(a = 1 === y ? 1 : 3)] && eZ(tC, tx[a])),
                            eJ &&
                              !i &&
                              Math.abs(tC.getVelocity()) >
                                (eH(eJ) ? eJ : 2500) &&
                              (e$(tC.callbackAnimation),
                              G
                                ? G.progress(1)
                                : e$(r, "reverse" === s ? 1 : !y, 1)))
                          : ts && ef && !ee && ef(tC);
                    }
                    if (N) {
                      var C = eU
                        ? (v / eU.duration()) * (eU._caScrollDist || 0)
                        : v;
                      F(C + (h._isFlipped ? 1 : 0)), N(C);
                    }
                    ea && ea((-v / eU.duration()) * (eU._caScrollDist || 0));
                  }
                }),
                (tC.enable = function (t, r) {
                  tC.enabled ||
                    ((tC.enabled = !0),
                    tl(tc, "resize", t_),
                    tm || tl(tc, "scroll", ty),
                    tM && tl(e, "refreshInit", tM),
                    !1 !== t && ((tC.progress = tR = 0), (l = u = tA = tB())),
                    !1 !== r && tC.refresh());
                }),
                (tC.getTween = function (e) {
                  return e && o ? o.tween : G;
                }),
                (tC.setPositions = function (e, t, r, n) {
                  if (eU) {
                    var i = eU.scrollTrigger,
                      o = eU.duration(),
                      a = i.end - i.start;
                    (e = i.start + (a * e) / o), (t = i.start + (a * t) / o);
                  }
                  tC.refresh(
                    !1,
                    !1,
                    {
                      start: ez(e, r && !!tC._startClamp),
                      end: ez(t, r && !!tC._endClamp),
                    },
                    n
                  ),
                    tC.update();
                }),
                (tC.adjustPinSpacing = function (e) {
                  if (j && e) {
                    var t = j.indexOf(e0.d) + 1;
                    (j[t] = parseFloat(j[t]) + e + "px"),
                      (j[1] = parseFloat(j[1]) + e + "px"),
                      tU(j);
                  }
                }),
                (tC.disable = function (t, r) {
                  if (
                    tC.enabled &&
                    (!1 !== t && tC.revert(!0, !0),
                    (tC.enabled = tC.isActive = !1),
                    r || (G && G.pause()),
                    (ei = 0),
                    a && (a.uncache = 1),
                    tM && tu(e, "refreshInit", tM),
                    er &&
                      (er.pause(), o.tween && o.tween.kill() && (o.tween = 0)),
                    !tm)
                  ) {
                    for (var n = tv.length; n--; )
                      if (tv[n].scroller === tc && tv[n] !== tC) return;
                    tu(tc, "resize", t_), tm || tu(tc, "scroll", ty);
                  }
                }),
                (tC.kill = function (e, n) {
                  tC.disable(e, n), G && !n && G.kill(), ep && delete tb[ep];
                  var i = tv.indexOf(tC);
                  i >= 0 && tv.splice(i, 1),
                    i === en && tF > 0 && en--,
                    (i = 0),
                    tv.forEach(function (e) {
                      return e.scroller === tC.scroller && (i = 1);
                    }),
                    i || ek || (tC.scroll.rec = 0),
                    r &&
                      ((r.scrollTrigger = null),
                      e && r.revert({ kill: !1 }),
                      n || r.kill()),
                    d &&
                      [d, p, h, g].forEach(function (e) {
                        return e.parentNode && e.parentNode.removeChild(e);
                      }),
                    eP === tC && (eP = 0),
                    eb &&
                      (a && (a.uncache = 1),
                      (i = 0),
                      tv.forEach(function (e) {
                        return e.pin === eb && i++;
                      }),
                      i || (a.spacer = 0)),
                    t.onKill && t.onKill(tC);
                }),
                tv.push(tC),
                tC.enable(!1, !1),
                eu && eu(tC),
                r && r.add && !b)
              ) {
                var tY = tC.update;
                (tC.update = function () {
                  (tC.update = tY), c || f || tC.refresh();
                }),
                  q.delayedCall(0.01, tC.update),
                  (b = 0.01),
                  (c = f = 0);
              } else tC.refresh();
              eb && tz();
            }),
            (e.register = function (t) {
              return (
                L ||
                  ((q = t || eD()),
                  eF() && window.document && e.enable(),
                  (L = eT)),
                L
              );
            }),
            (e.defaults = function (e) {
              if (e) for (var t in e) td[t] = e[t];
              return td;
            }),
            (e.disable = function (e, t) {
              (eT = 0),
                tv.forEach(function (r) {
                  return r[t ? "kill" : "disable"](e);
                }),
                tu(U, "wheel", ty),
                tu(W, "scroll", ty),
                clearInterval(Q),
                tu(W, "touchcancel", eB),
                tu(H, "touchstart", eB),
                ts(tu, W, "pointerdown,touchstart,mousedown", eI),
                ts(tu, W, "pointerup,touchend,mouseup", eR),
                $.kill(),
                eU(tu);
              for (var r = 0; r < w.length; r += 3)
                tc(tu, w[r], w[r + 1]), tc(tu, w[r], w[r + 2]);
            }),
            (e.enable = function () {
              if (
                ((U = window),
                (V = (W = document).documentElement),
                (H = W.body),
                q &&
                  ((Z = q.utils.toArray),
                  (K = q.utils.clamp),
                  (eg = q.core.context || eB),
                  (el = q.core.suppressOverwrites || eB),
                  (em = U.history.scrollRestoration || "auto"),
                  (tj = U.pageYOffset),
                  q.core.globals("ScrollTrigger", e),
                  H))
              ) {
                (eT = 1),
                  ((ev = document.createElement("div")).style.height = "100vh"),
                  (ev.style.position = "absolute"),
                  tI(),
                  (function e() {
                    return eT && requestAnimationFrame(e);
                  })(),
                  X.register(q),
                  (e.isTouch = X.isTouch),
                  (eh =
                    X.isTouch &&
                    /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
                  (ef = 1 === X.isTouch),
                  tl(U, "wheel", ty),
                  (G = [U, W, V, H]),
                  q.matchMedia
                    ? ((e.matchMedia = function (e) {
                        var t,
                          r = q.matchMedia();
                        for (t in e) r.add(t, e[t]);
                        return r;
                      }),
                      q.addEventListener("matchMediaInit", function () {
                        return tE();
                      }),
                      q.addEventListener("matchMediaRevert", function () {
                        return tM();
                      }),
                      q.addEventListener("matchMedia", function () {
                        tB(0, 1), tO("matchMedia");
                      }),
                      q.matchMedia("(orientation: portrait)", function () {
                        return tx(), tx;
                      }))
                    : console.warn("Requires GSAP 3.11.0 or later"),
                  tx(),
                  tl(W, "scroll", ty);
                var t,
                  r,
                  n = H.style,
                  i = n.borderTopStyle,
                  o = q.core.Animation.prototype;
                for (
                  o.revert ||
                    Object.defineProperty(o, "revert", {
                      value: function () {
                        return this.time(-0.01, !0);
                      },
                    }),
                    n.borderTopStyle = "solid",
                    t = tn(H),
                    I.m = Math.round(t.top + I.sc()) || 0,
                    z.m = Math.round(t.left + z.sc()) || 0,
                    i
                      ? (n.borderTopStyle = i)
                      : n.removeProperty("border-top-style"),
                    Q = setInterval(tw, 250),
                    q.delayedCall(0.5, function () {
                      return (eO = 0);
                    }),
                    tl(W, "touchcancel", eB),
                    tl(H, "touchstart", eB),
                    ts(tl, W, "pointerdown,touchstart,mousedown", eI),
                    ts(tl, W, "pointerup,touchend,mouseup", eR),
                    er = q.utils.checkPrefix("transform"),
                    tY.push(er),
                    L = eC(),
                    $ = q.delayedCall(0.2, tB).pause(),
                    ea = [
                      W,
                      "visibilitychange",
                      function () {
                        var e = U.innerWidth,
                          t = U.innerHeight;
                        W.hidden
                          ? ((ei = e), (eo = t))
                          : (ei !== e || eo !== t) && t_();
                      },
                      W,
                      "DOMContentLoaded",
                      tB,
                      U,
                      "load",
                      tB,
                      U,
                      "resize",
                      t_,
                    ],
                    eU(tl),
                    tv.forEach(function (e) {
                      return e.enable(0, 1);
                    }),
                    r = 0;
                  r < w.length;
                  r += 3
                )
                  tc(tu, w[r], w[r + 1]), tc(tu, w[r], w[r + 2]);
              }
            }),
            (e.config = function (t) {
              "limitCallbacks" in t && (ex = !!t.limitCallbacks);
              var r = t.syncInterval;
              (r && clearInterval(Q)) || ((Q = r) && setInterval(tw, r)),
                "ignoreMobileResize" in t &&
                  (ef = 1 === e.isTouch && t.ignoreMobileResize),
                "autoRefreshEvents" in t &&
                  (eU(tu) || eU(tl, t.autoRefreshEvents || "none"),
                  (eu = -1 === (t.autoRefreshEvents + "").indexOf("resize")));
            }),
            (e.scrollerProxy = function (e, t) {
              var r = R(e),
                n = w.indexOf(r),
                i = eN(r);
              ~n && w.splice(n, i ? 6 : 2),
                t && (i ? y.unshift(U, t, H, t, V, t) : y.unshift(r, t));
            }),
            (e.clearMatchMedia = function (e) {
              tv.forEach(function (t) {
                return t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0);
              });
            }),
            (e.isInViewport = function (e, t, r) {
              var n = (eW(e) ? R(e) : e).getBoundingClientRect(),
                i = n[r ? e1 : e2] * t || 0;
              return r
                ? n.right - i > 0 && n.left + i < U.innerWidth
                : n.bottom - i > 0 && n.top + i < U.innerHeight;
            }),
            (e.positionInViewport = function (e, t, r) {
              eW(e) && (e = R(e));
              var n = e.getBoundingClientRect(),
                i = n[r ? e1 : e2],
                o =
                  null == t
                    ? i / 2
                    : t in tp
                    ? tp[t] * i
                    : ~t.indexOf("%")
                    ? (parseFloat(t) * i) / 100
                    : parseFloat(t) || 0;
              return r
                ? (n.left + o) / U.innerWidth
                : (n.top + o) / U.innerHeight;
            }),
            (e.killAll = function (e) {
              if (
                (tv.slice(0).forEach(function (e) {
                  return "ScrollSmoother" !== e.vars.id && e.kill();
                }),
                !0 !== e)
              ) {
                var t = tk.killAll || [];
                (tk = {}),
                  t.forEach(function (e) {
                    return e();
                  });
              }
            }),
            e
          );
        })();
      (t0.version = "3.12.5"),
        (t0.saveStyles = function (e) {
          return e
            ? Z(e).forEach(function (e) {
                if (e && e.style) {
                  var t = tC.indexOf(e);
                  t >= 0 && tC.splice(t, 5),
                    tC.push(
                      e,
                      e.style.cssText,
                      e.getBBox && e.getAttribute("transform"),
                      q.core.getCache(e),
                      eg()
                    );
                }
              })
            : tC;
        }),
        (t0.revert = function (e, t) {
          return tE(!e, t);
        }),
        (t0.create = function (e, t) {
          return new t0(e, t);
        }),
        (t0.refresh = function (e) {
          return e ? t_() : (L || t0.register()) && tB(!0);
        }),
        (t0.update = function (e) {
          return ++w.cache && tD(!0 === e ? 2 : 0);
        }),
        (t0.clearScrollMemory = tT),
        (t0.maxScroll = function (e, t) {
          return eL(e, t ? z : I);
        }),
        (t0.getScrollFunc = function (e, t) {
          return B(R(e), t ? z : I);
        }),
        (t0.getById = function (e) {
          return tb[e];
        }),
        (t0.getAll = function () {
          return tv.filter(function (e) {
            return "ScrollSmoother" !== e.vars.id;
          });
        }),
        (t0.isScrolling = function () {
          return !!eE;
        }),
        (t0.snapDirectional = ta),
        (t0.addEventListener = function (e, t) {
          var r = tk[e] || (tk[e] = []);
          ~r.indexOf(t) || r.push(t);
        }),
        (t0.removeEventListener = function (e, t) {
          var r = tk[e],
            n = r && r.indexOf(t);
          n >= 0 && r.splice(n, 1);
        }),
        (t0.batch = function (e, t) {
          var r,
            n = [],
            i = {},
            o = t.interval || 0.016,
            a = t.batchMax || 1e9,
            s = function (e, t) {
              var r = [],
                n = [],
                i = q
                  .delayedCall(o, function () {
                    t(r, n), (r = []), (n = []);
                  })
                  .pause();
              return function (e) {
                r.length || i.restart(!0),
                  r.push(e.trigger),
                  n.push(e),
                  a <= r.length && i.progress(1);
              };
            };
          for (r in t)
            i[r] =
              "on" === r.substr(0, 2) && eV(t[r]) && "onRefreshInit" !== r
                ? s(r, t[r])
                : t[r];
          return (
            eV(a) &&
              ((a = a()),
              tl(t0, "refresh", function () {
                return (a = t.batchMax());
              })),
            Z(e).forEach(function (e) {
              var t = {};
              for (r in i) t[r] = i[r];
              (t.trigger = e), n.push(t0.create(t));
            }),
            n
          );
        });
      var t1,
        t2 = function (e, t, r, n) {
          return (
            t > n ? e(n) : t < 0 && e(0),
            r > n ? (n - t) / (r - t) : r < 0 ? t / (t - r) : 1
          );
        },
        t3 = function e(t, r) {
          !0 === r
            ? t.style.removeProperty("touch-action")
            : (t.style.touchAction =
                !0 === r
                  ? "auto"
                  : r
                  ? "pan-" + r + (X.isTouch ? " pinch-zoom" : "")
                  : "none"),
            t === V && e(H, r);
        },
        t6 = { auto: 1, scroll: 1 },
        t4 = function (e) {
          var t,
            r = e.event,
            n = e.target,
            i = e.axis,
            o = (r.changedTouches ? r.changedTouches[0] : r).target,
            a = o._gsap || q.core.getCache(o),
            s = eC();
          if (!a._isScrollT || s - a._isScrollT > 2e3) {
            for (
              ;
              o &&
              o !== H &&
              ((o.scrollHeight <= o.clientHeight &&
                o.scrollWidth <= o.clientWidth) ||
                !(t6[(t = te(o)).overflowY] || t6[t.overflowX]));

            )
              o = o.parentNode;
            (a._isScroll =
              o &&
              o !== n &&
              !eN(o) &&
              (t6[(t = te(o)).overflowY] || t6[t.overflowX])),
              (a._isScrollT = s);
          }
          (a._isScroll || "x" === i) &&
            (r.stopPropagation(), (r._gsapAllow = !0));
        },
        t5 = function (e, t, r, n) {
          return X.create({
            target: e,
            capture: !0,
            debounce: !1,
            lockAxis: !0,
            type: t,
            onWheel: (n = n && t4),
            onPress: n,
            onDrag: n,
            onScroll: n,
            onEnable: function () {
              return r && tl(W, X.eventTypes[0], t8, !1, !0);
            },
            onDisable: function () {
              return tu(W, X.eventTypes[0], t8, !0);
            },
          });
        },
        t9 = /(input|label|select|textarea)/i,
        t8 = function (e) {
          var t = t9.test(e.target.tagName);
          (t || t1) && ((e._gsapAllow = !0), (t1 = t));
        },
        t7 = function (e) {
          eG(e) || (e = {}),
            (e.preventDefault = e.isNormalizer = e.allowClicks = !0),
            e.type || (e.type = "wheel,touch"),
            (e.debounce = !!e.debounce),
            (e.id = e.id || "normalizer");
          var t,
            r,
            n,
            i,
            o,
            a,
            s,
            l,
            u = e,
            c = u.normalizeScrollX,
            f = u.momentum,
            d = u.allowNestedScroll,
            p = u.onRelease,
            h = R(e.target) || V,
            g = q.core.globals().ScrollSmoother,
            m = g && g.get(),
            v =
              eh &&
              ((e.content && R(e.content)) ||
                (m && !1 !== e.content && !m.smooth() && m.content())),
            b = B(h, I),
            y = B(h, z),
            x = 1,
            _ =
              (X.isTouch && U.visualViewport
                ? U.visualViewport.scale * U.visualViewport.width
                : U.outerWidth) / U.innerWidth,
            k = 0,
            S = eV(f)
              ? function () {
                  return f(t);
                }
              : function () {
                  return f || 2.8;
                },
            P = t5(h, e.type, !0, d),
            O = function () {
              return (i = !1);
            },
            C = eB,
            M = eB,
            E = function () {
              (r = eL(h, I)),
                (M = K(eh ? 1 : 0, r)),
                c && (C = K(0, eL(h, z))),
                (n = tA);
            },
            T = function () {
              (v._gsap.y = ej(parseFloat(v._gsap.y) + b.offset) + "px"),
                (v.style.transform =
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                  parseFloat(v._gsap.y) +
                  ", 0, 1)"),
                (b.offset = b.cacheID = 0);
            },
            A = function () {
              if (i) {
                requestAnimationFrame(O);
                var e = ej(t.deltaY / 2),
                  r = M(b.v - e);
                if (v && r !== b.v + b.offset) {
                  b.offset = r - b.v;
                  var n = ej((parseFloat(v && v._gsap.y) || 0) - b.offset);
                  (v.style.transform =
                    "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
                    n +
                    ", 0, 1)"),
                    (v._gsap.y = n + "px"),
                    (b.cacheID = w.cache),
                    tD();
                }
                return !0;
              }
              b.offset && T(), (i = !0);
            },
            j = function () {
              E(),
                o.isActive() &&
                  o.vars.scrollY > r &&
                  (b() > r ? o.progress(1) && b(r) : o.resetTo("scrollY", r));
            };
          return (
            v && q.set(v, { y: "+=0" }),
            (e.ignoreCheck = function (e) {
              return (
                (eh && "touchmove" === e.type && A(e)) ||
                (x > 1.05 && "touchstart" !== e.type) ||
                t.isGesturing ||
                (e.touches && e.touches.length > 1)
              );
            }),
            (e.onPress = function () {
              i = !1;
              var e = x;
              (x = ej(((U.visualViewport && U.visualViewport.scale) || 1) / _)),
                o.pause(),
                e !== x && t3(h, x > 1.01 || (!c && "x")),
                (a = y()),
                (s = b()),
                E(),
                (n = tA);
            }),
            (e.onRelease = e.onGestureStart =
              function (e, t) {
                if ((b.offset && T(), t)) {
                  w.cache++;
                  var n,
                    i,
                    a = S();
                  c &&
                    ((i = (n = y()) + -(0.05 * a * e.velocityX) / 0.227),
                    (a *= t2(y, n, i, eL(h, z))),
                    (o.vars.scrollX = C(i))),
                    (i = (n = b()) + -(0.05 * a * e.velocityY) / 0.227),
                    (a *= t2(b, n, i, eL(h, I))),
                    (o.vars.scrollY = M(i)),
                    o.invalidate().duration(a).play(0.01),
                    ((eh && o.vars.scrollY >= r) || n >= r - 1) &&
                      q.to({}, { onUpdate: j, duration: a });
                } else l.restart(!0);
                p && p(e);
              }),
            (e.onWheel = function () {
              o._ts && o.pause(), eC() - k > 1e3 && ((n = 0), (k = eC()));
            }),
            (e.onChange = function (e, t, r, i, o) {
              if (
                (tA !== n && E(),
                t &&
                  c &&
                  y(C(i[2] === t ? a + (e.startX - e.x) : y() + t - i[1])),
                r)
              ) {
                b.offset && T();
                var l = o[2] === r,
                  u = l ? s + e.startY - e.y : b() + r - o[1],
                  f = M(u);
                l && u !== f && (s += f - u), b(f);
              }
              (r || t) && tD();
            }),
            (e.onEnable = function () {
              t3(h, !c && "x"),
                t0.addEventListener("refresh", j),
                tl(U, "resize", j),
                b.smooth &&
                  ((b.target.style.scrollBehavior = "auto"),
                  (b.smooth = y.smooth = !1)),
                P.enable();
            }),
            (e.onDisable = function () {
              t3(h, !0),
                tu(U, "resize", j),
                t0.removeEventListener("refresh", j),
                P.kill();
            }),
            (e.lockAxis = !1 !== e.lockAxis),
            ((t = new X(e)).iOS = eh),
            eh && !b() && b(1),
            eh && q.ticker.add(eB),
            (l = t._dc),
            (o = q.to(t, {
              ease: "power4",
              paused: !0,
              inherit: !1,
              scrollX: c ? "+=0.1" : "+=0",
              scrollY: "+=0.1",
              modifiers: {
                scrollY: tK(b, b(), function () {
                  return o.pause();
                }),
              },
              onUpdate: tD,
              onComplete: l.vars.onComplete,
            })),
            t
          );
        };
      (t0.sort = function (e) {
        return tv.sort(
          e ||
            function (e, t) {
              return (
                -1e6 * (e.vars.refreshPriority || 0) +
                e.start -
                (t.start + -1e6 * (t.vars.refreshPriority || 0))
              );
            }
        );
      }),
        (t0.observe = function (e) {
          return new X(e);
        }),
        (t0.normalizeScroll = function (e) {
          if (void 0 === e) return ec;
          if (!0 === e && ec) return ec.enable();
          if (!1 === e) {
            ec && ec.kill(), (ec = e);
            return;
          }
          var t = e instanceof X ? e : t7(e);
          return (
            ec && ec.target === t.target && ec.kill(),
            eN(t.target) && (ec = t),
            t
          );
        }),
        (t0.core = {
          _getVelocityProp: j,
          _inputObserver: t5,
          _scrollers: w,
          _proxies: y,
          bridge: {
            ss: function () {
              eE || tO("scrollStart"), (eE = eC());
            },
            ref: function () {
              return ee;
            },
          },
        }),
        eD() && q.registerPlugin(t0);
    },
    9582: function (e, t, r) {
      "use strict";
      r.d(t, {
        ZP: function () {
          return eS;
        },
        p8: function () {
          return eS;
        },
      });
      var n,
        i,
        o,
        a,
        s,
        l,
        u,
        c,
        f,
        d,
        p,
        h = r(9244),
        g = {},
        m = 180 / Math.PI,
        v = Math.PI / 180,
        b = Math.atan2,
        w = /([A-Z])/g,
        y = /(left|right|width|margin|padding|x)/i,
        x = /[\s,\(]\S/,
        _ = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity",
        },
        k = function (e, t) {
          return t.set(
            t.t,
            t.p,
            Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        S = function (e, t) {
          return t.set(
            t.t,
            t.p,
            1 === e ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
            t
          );
        },
        P = function (e, t) {
          return t.set(
            t.t,
            t.p,
            e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
            t
          );
        },
        O = function (e, t) {
          var r = t.s + t.c * e;
          t.set(t.t, t.p, ~~(r + (r < 0 ? -0.5 : 0.5)) + t.u, t);
        },
        C = function (e, t) {
          return t.set(t.t, t.p, e ? t.e : t.b, t);
        },
        M = function (e, t) {
          return t.set(t.t, t.p, 1 !== e ? t.b : t.e, t);
        },
        E = function (e, t, r) {
          return (e.style[t] = r);
        },
        T = function (e, t, r) {
          return e.style.setProperty(t, r);
        },
        A = function (e, t, r) {
          return (e._gsap[t] = r);
        },
        z = function (e, t, r) {
          return (e._gsap.scaleX = e._gsap.scaleY = r);
        },
        I = function (e, t, r, n, i) {
          var o = e._gsap;
          (o.scaleX = o.scaleY = r), o.renderTransform(i, o);
        },
        R = function (e, t, r, n, i) {
          var o = e._gsap;
          (o[t] = r), o.renderTransform(i, o);
        },
        B = "transform",
        j = B + "Origin",
        F = function e(t, r) {
          var n = this,
            i = this.target,
            o = i.style,
            a = i._gsap;
          if (t in g && o) {
            if (((this.tfm = this.tfm || {}), "transform" === t))
              return _.transform.split(",").forEach(function (t) {
                return e.call(n, t, r);
              });
            if (
              (~(t = _[t] || t).indexOf(",")
                ? t.split(",").forEach(function (e) {
                    return (n.tfm[e] = et(i, e));
                  })
                : (this.tfm[t] = a.x ? a[t] : et(i, t)),
              t === j && (this.tfm.zOrigin = a.zOrigin),
              this.props.indexOf(B) >= 0)
            )
              return;
            a.svg &&
              ((this.svgo = i.getAttribute("data-svg-origin")),
              this.props.push(j, r, "")),
              (t = B);
          }
          (o || r) && this.props.push(t, r, o[t]);
        },
        D = function (e) {
          e.translate &&
            (e.removeProperty("translate"),
            e.removeProperty("scale"),
            e.removeProperty("rotate"));
        },
        N = function () {
          var e,
            t,
            r = this.props,
            n = this.target,
            i = n.style,
            o = n._gsap;
          for (e = 0; e < r.length; e += 3)
            r[e + 1]
              ? (n[r[e]] = r[e + 2])
              : r[e + 2]
              ? (i[r[e]] = r[e + 2])
              : i.removeProperty(
                  "--" === r[e].substr(0, 2)
                    ? r[e]
                    : r[e].replace(w, "-$1").toLowerCase()
                );
          if (this.tfm) {
            for (t in this.tfm) o[t] = this.tfm[t];
            o.svg &&
              (o.renderTransform(),
              n.setAttribute("data-svg-origin", this.svgo || "")),
              ((e = d()) && e.isStart) ||
                i[B] ||
                (D(i),
                o.zOrigin &&
                  i[j] &&
                  ((i[j] += " " + o.zOrigin + "px"),
                  (o.zOrigin = 0),
                  o.renderTransform()),
                (o.uncache = 1));
          }
        },
        Y = function (e, t) {
          var r = { target: e, props: [], revert: N, save: F };
          return (
            e._gsap || h.p8.core.getCache(e),
            t &&
              t.split(",").forEach(function (e) {
                return r.save(e);
              }),
            r
          );
        },
        X = function (e, t) {
          var r = s.createElementNS
            ? s.createElementNS(
                (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
                e
              )
            : s.createElement(e);
          return r && r.style ? r : s.createElement(e);
        },
        q = function e(t, r, n) {
          var i = getComputedStyle(t);
          return (
            i[r] ||
            i.getPropertyValue(r.replace(w, "-$1").toLowerCase()) ||
            i.getPropertyValue(r) ||
            (!n && e(t, U(r) || r, 1)) ||
            ""
          );
        },
        L = "O,Moz,ms,Ms,Webkit".split(","),
        U = function (e, t, r) {
          var n = (t || c).style,
            i = 5;
          if (e in n && !r) return e;
          for (
            e = e.charAt(0).toUpperCase() + e.substr(1);
            i-- && !(L[i] + e in n);

          );
          return i < 0 ? null : (3 === i ? "ms" : i >= 0 ? L[i] : "") + e;
        },
        W = function () {
          "undefined" != typeof window &&
            window.document &&
            ((l = (s = window.document).documentElement),
            (c = X("div") || { style: {} }),
            X("div"),
            (j = (B = U(B)) + "Origin"),
            (c.style.cssText =
              "border-width:0;line-height:0;position:absolute;padding:0"),
            (p = !!U("perspective")),
            (d = h.p8.core.reverting),
            (u = 1));
        },
        V = function e(t) {
          var r,
            n = X(
              "svg",
              (this.ownerSVGElement &&
                this.ownerSVGElement.getAttribute("xmlns")) ||
                "http://www.w3.org/2000/svg"
            ),
            i = this.parentNode,
            o = this.nextSibling,
            a = this.style.cssText;
          if (
            (l.appendChild(n),
            n.appendChild(this),
            (this.style.display = "block"),
            t)
          )
            try {
              (r = this.getBBox()),
                (this._gsapBBox = this.getBBox),
                (this.getBBox = e);
            } catch (e) {}
          else this._gsapBBox && (r = this._gsapBBox());
          return (
            i && (o ? i.insertBefore(this, o) : i.appendChild(this)),
            l.removeChild(n),
            (this.style.cssText = a),
            r
          );
        },
        H = function (e, t) {
          for (var r = t.length; r--; )
            if (e.hasAttribute(t[r])) return e.getAttribute(t[r]);
        },
        G = function (e) {
          var t;
          try {
            t = e.getBBox();
          } catch (r) {
            t = V.call(e, !0);
          }
          return (
            (t && (t.width || t.height)) ||
              e.getBBox === V ||
              (t = V.call(e, !0)),
            !t || t.width || t.x || t.y
              ? t
              : {
                  x: +H(e, ["x", "cx", "x1"]) || 0,
                  y: +H(e, ["y", "cy", "y1"]) || 0,
                  width: 0,
                  height: 0,
                }
          );
        },
        $ = function (e) {
          return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && G(e));
        },
        Z = function (e, t) {
          if (t) {
            var r,
              n = e.style;
            t in g && t !== j && (t = B),
              n.removeProperty
                ? (("ms" === (r = t.substr(0, 2)) ||
                    "webkit" === t.substr(0, 6)) &&
                    (t = "-" + t),
                  n.removeProperty(
                    "--" === r ? t : t.replace(w, "-$1").toLowerCase()
                  ))
                : n.removeAttribute(t);
          }
        },
        K = function (e, t, r, n, i, o) {
          var a = new h.Fo(e._pt, t, r, 0, 1, o ? M : C);
          return (e._pt = a), (a.b = n), (a.e = i), e._props.push(r), a;
        },
        J = { deg: 1, rad: 1, turn: 1 },
        Q = { grid: 1, flex: 1 },
        ee = function e(t, r, n, i) {
          var o,
            a,
            l,
            u,
            f = parseFloat(n) || 0,
            d = (n + "").trim().substr((f + "").length) || "px",
            p = c.style,
            m = y.test(r),
            v = "svg" === t.tagName.toLowerCase(),
            b = (v ? "client" : "offset") + (m ? "Width" : "Height"),
            w = "px" === i,
            x = "%" === i;
          if (i === d || !f || J[i] || J[d]) return f;
          if (
            ("px" === d || w || (f = e(t, r, n, "px")),
            (u = t.getCTM && $(t)),
            (x || "%" === d) && (g[r] || ~r.indexOf("adius")))
          )
            return (
              (o = u ? t.getBBox()[m ? "width" : "height"] : t[b]),
              (0, h.Pr)(x ? (f / o) * 100 : (f / 100) * o)
            );
          if (
            ((p[m ? "width" : "height"] = 100 + (w ? d : i)),
            (a =
              ~r.indexOf("adius") || ("em" === i && t.appendChild && !v)
                ? t
                : t.parentNode),
            u && (a = (t.ownerSVGElement || {}).parentNode),
            (a && a !== s && a.appendChild) || (a = s.body),
            (l = a._gsap) &&
              x &&
              l.width &&
              m &&
              l.time === h.xr.time &&
              !l.uncache)
          )
            return (0, h.Pr)((f / l.width) * 100);
          if (x && ("height" === r || "width" === r)) {
            var _ = t.style[r];
            (t.style[r] = 100 + i), (o = t[b]), _ ? (t.style[r] = _) : Z(t, r);
          } else
            (x || "%" === d) &&
              !Q[q(a, "display")] &&
              (p.position = q(t, "position")),
              a === t && (p.position = "static"),
              a.appendChild(c),
              (o = c[b]),
              a.removeChild(c),
              (p.position = "absolute");
          return (
            m && x && (((l = (0, h.DY)(a)).time = h.xr.time), (l.width = a[b])),
            (0, h.Pr)(w ? (o * f) / 100 : o && f ? (100 / o) * f : 0)
          );
        },
        et = function (e, t, r, n) {
          var i;
          return (
            u || W(),
            t in _ &&
              "transform" !== t &&
              ~(t = _[t]).indexOf(",") &&
              (t = t.split(",")[0]),
            g[t] && "transform" !== t
              ? ((i = ep(e, n)),
                (i =
                  "transformOrigin" !== t
                    ? i[t]
                    : i.svg
                    ? i.origin
                    : eh(q(e, j)) + " " + i.zOrigin + "px"))
              : (!(i = e.style[t]) ||
                  "auto" === i ||
                  n ||
                  ~(i + "").indexOf("calc(")) &&
                (i =
                  (ea[t] && ea[t](e, t, r)) ||
                  q(e, t) ||
                  (0, h.Ok)(e, t) ||
                  ("opacity" === t ? 1 : 0)),
            r && !~(i + "").trim().indexOf(" ") ? ee(e, t, i, r) + r : i
          );
        },
        er = function (e, t, r, n) {
          if (!r || "none" === r) {
            var i = U(t, e, 1),
              o = i && q(e, i, 1);
            o && o !== r
              ? ((t = i), (r = o))
              : "borderColor" === t && (r = q(e, "borderTopColor"));
          }
          var a,
            s,
            l,
            u,
            c,
            f,
            d,
            p,
            g,
            m,
            v,
            b = new h.Fo(this._pt, e.style, t, 0, 1, h.Ks),
            w = 0,
            y = 0;
          if (
            ((b.b = r),
            (b.e = n),
            (r += ""),
            "auto" == (n += "") &&
              ((f = e.style[t]),
              (e.style[t] = n),
              (n = q(e, t) || n),
              f ? (e.style[t] = f) : Z(e, t)),
            (a = [r, n]),
            (0, h.kr)(a),
            (r = a[0]),
            (n = a[1]),
            (l = r.match(h.d4) || []),
            (n.match(h.d4) || []).length)
          ) {
            for (; (s = h.d4.exec(n)); )
              (d = s[0]),
                (g = n.substring(w, s.index)),
                c
                  ? (c = (c + 1) % 5)
                  : ("rgba(" === g.substr(-5) || "hsla(" === g.substr(-5)) &&
                    (c = 1),
                d !== (f = l[y++] || "") &&
                  ((u = parseFloat(f) || 0),
                  (v = f.substr((u + "").length)),
                  "=" === d.charAt(1) && (d = (0, h.cy)(u, d) + v),
                  (p = parseFloat(d)),
                  (m = d.substr((p + "").length)),
                  (w = h.d4.lastIndex - m.length),
                  m ||
                    ((m = m || h.Fc.units[t] || v),
                    w !== n.length || ((n += m), (b.e += m))),
                  v !== m && (u = ee(e, t, f, m) || 0),
                  (b._pt = {
                    _next: b._pt,
                    p: g || 1 === y ? g : ",",
                    s: u,
                    c: p - u,
                    m: (c && c < 4) || "zIndex" === t ? Math.round : 0,
                  }));
            b.c = w < n.length ? n.substring(w, n.length) : "";
          } else b.r = "display" === t && "none" === n ? M : C;
          return h.bQ.test(n) && (b.e = 0), (this._pt = b), b;
        },
        en = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%",
        },
        ei = function (e) {
          var t = e.split(" "),
            r = t[0],
            n = t[1] || "50%";
          return (
            ("top" === r || "bottom" === r || "left" === n || "right" === n) &&
              ((e = r), (r = n), (n = e)),
            (t[0] = en[r] || r),
            (t[1] = en[n] || n),
            t.join(" ")
          );
        },
        eo = function (e, t) {
          if (t.tween && t.tween._time === t.tween._dur) {
            var r,
              n,
              i,
              o = t.t,
              a = o.style,
              s = t.u,
              l = o._gsap;
            if ("all" === s || !0 === s) (a.cssText = ""), (n = 1);
            else
              for (i = (s = s.split(",")).length; --i > -1; )
                g[(r = s[i])] &&
                  ((n = 1), (r = "transformOrigin" === r ? j : B)),
                  Z(o, r);
            n &&
              (Z(o, B),
              l &&
                (l.svg && o.removeAttribute("transform"),
                ep(o, 1),
                (l.uncache = 1),
                D(a)));
          }
        },
        ea = {
          clearProps: function (e, t, r, n, i) {
            if ("isFromStart" !== i.data) {
              var o = (e._pt = new h.Fo(e._pt, t, r, 0, 0, eo));
              return (
                (o.u = n), (o.pr = -10), (o.tween = i), e._props.push(r), 1
              );
            }
          },
        },
        es = [1, 0, 0, 1, 0, 0],
        el = {},
        eu = function (e) {
          return "matrix(1, 0, 0, 1, 0, 0)" === e || "none" === e || !e;
        },
        ec = function (e) {
          var t = q(e, B);
          return eu(t) ? es : t.substr(7).match(h.SI).map(h.Pr);
        },
        ef = function (e, t) {
          var r,
            n,
            i,
            o,
            a = e._gsap || (0, h.DY)(e),
            s = e.style,
            u = ec(e);
          return a.svg && e.getAttribute("transform")
            ? "1,0,0,1,0,0" ===
              (u = [
                (i = e.transform.baseVal.consolidate().matrix).a,
                i.b,
                i.c,
                i.d,
                i.e,
                i.f,
              ]).join(",")
              ? es
              : u
            : (u !== es ||
                e.offsetParent ||
                e === l ||
                a.svg ||
                ((i = s.display),
                (s.display = "block"),
                ((r = e.parentNode) && e.offsetParent) ||
                  ((o = 1), (n = e.nextElementSibling), l.appendChild(e)),
                (u = ec(e)),
                i ? (s.display = i) : Z(e, "display"),
                o &&
                  (n
                    ? r.insertBefore(e, n)
                    : r
                    ? r.appendChild(e)
                    : l.removeChild(e))),
              t && u.length > 6 ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u);
        },
        ed = function (e, t, r, n, i, o) {
          var a,
            s,
            l,
            u,
            c = e._gsap,
            f = i || ef(e, !0),
            d = c.xOrigin || 0,
            p = c.yOrigin || 0,
            h = c.xOffset || 0,
            g = c.yOffset || 0,
            m = f[0],
            v = f[1],
            b = f[2],
            w = f[3],
            y = f[4],
            x = f[5],
            _ = t.split(" "),
            k = parseFloat(_[0]) || 0,
            S = parseFloat(_[1]) || 0;
          r
            ? f !== es &&
              (s = m * w - v * b) &&
              ((l = (w / s) * k + (-b / s) * S + (b * x - w * y) / s),
              (u = (-v / s) * k + (m / s) * S - (m * x - v * y) / s),
              (k = l),
              (S = u))
            : ((k =
                (a = G(e)).x + (~_[0].indexOf("%") ? (k / 100) * a.width : k)),
              (S =
                a.y +
                (~(_[1] || _[0]).indexOf("%") ? (S / 100) * a.height : S))),
            n || (!1 !== n && c.smooth)
              ? ((y = k - d),
                (x = S - p),
                (c.xOffset = h + (y * m + x * b) - y),
                (c.yOffset = g + (y * v + x * w) - x))
              : (c.xOffset = c.yOffset = 0),
            (c.xOrigin = k),
            (c.yOrigin = S),
            (c.smooth = !!n),
            (c.origin = t),
            (c.originIsAbsolute = !!r),
            (e.style[j] = "0px 0px"),
            o &&
              (K(o, c, "xOrigin", d, k),
              K(o, c, "yOrigin", p, S),
              K(o, c, "xOffset", h, c.xOffset),
              K(o, c, "yOffset", g, c.yOffset)),
            e.setAttribute("data-svg-origin", k + " " + S);
        },
        ep = function (e, t) {
          var r = e._gsap || new h.l1(e);
          if ("x" in r && !t && !r.uncache) return r;
          var n,
            i,
            o,
            a,
            s,
            l,
            u,
            c,
            f,
            d,
            g,
            w,
            y,
            x,
            _,
            k,
            S,
            P,
            O,
            C,
            M,
            E,
            T,
            A,
            z,
            I,
            R,
            F,
            D,
            N,
            Y,
            X,
            L = e.style,
            U = r.scaleX < 0,
            W = getComputedStyle(e),
            V = q(e, j) || "0";
          return (
            (n = i = o = l = u = c = f = d = g = 0),
            (a = s = 1),
            (r.svg = !!(e.getCTM && $(e))),
            W.translate &&
              (("none" !== W.translate ||
                "none" !== W.scale ||
                "none" !== W.rotate) &&
                (L[B] =
                  ("none" !== W.translate
                    ? "translate3d(" +
                      (W.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                      ") "
                    : "") +
                  ("none" !== W.rotate ? "rotate(" + W.rotate + ") " : "") +
                  ("none" !== W.scale
                    ? "scale(" + W.scale.split(" ").join(",") + ") "
                    : "") +
                  ("none" !== W[B] ? W[B] : "")),
              (L.scale = L.rotate = L.translate = "none")),
            (x = ef(e, r.svg)),
            r.svg &&
              (r.uncache
                ? ((z = e.getBBox()),
                  (V = r.xOrigin - z.x + "px " + (r.yOrigin - z.y) + "px"),
                  (A = ""))
                : (A = !t && e.getAttribute("data-svg-origin")),
              ed(e, A || V, !!A || r.originIsAbsolute, !1 !== r.smooth, x)),
            (w = r.xOrigin || 0),
            (y = r.yOrigin || 0),
            x !== es &&
              ((P = x[0]),
              (O = x[1]),
              (C = x[2]),
              (M = x[3]),
              (n = E = x[4]),
              (i = T = x[5]),
              6 === x.length
                ? ((a = Math.sqrt(P * P + O * O)),
                  (s = Math.sqrt(M * M + C * C)),
                  (l = P || O ? b(O, P) * m : 0),
                  (f = C || M ? b(C, M) * m + l : 0) &&
                    (s *= Math.abs(Math.cos(f * v))),
                  r.svg &&
                    ((n -= w - (w * P + y * C)), (i -= y - (w * O + y * M))))
                : ((X = x[6]),
                  (N = x[7]),
                  (R = x[8]),
                  (F = x[9]),
                  (D = x[10]),
                  (Y = x[11]),
                  (n = x[12]),
                  (i = x[13]),
                  (o = x[14]),
                  (u = (_ = b(X, D)) * m),
                  _ &&
                    ((A = E * (k = Math.cos(-_)) + R * (S = Math.sin(-_))),
                    (z = T * k + F * S),
                    (I = X * k + D * S),
                    (R = -(E * S) + R * k),
                    (F = -(T * S) + F * k),
                    (D = -(X * S) + D * k),
                    (Y = -(N * S) + Y * k),
                    (E = A),
                    (T = z),
                    (X = I)),
                  (c = (_ = b(-C, D)) * m),
                  _ &&
                    ((A = P * (k = Math.cos(-_)) - R * (S = Math.sin(-_))),
                    (z = O * k - F * S),
                    (I = C * k - D * S),
                    (Y = M * S + Y * k),
                    (P = A),
                    (O = z),
                    (C = I)),
                  (l = (_ = b(O, P)) * m),
                  _ &&
                    ((A = P * (k = Math.cos(_)) + O * (S = Math.sin(_))),
                    (z = E * k + T * S),
                    (O = O * k - P * S),
                    (T = T * k - E * S),
                    (P = A),
                    (E = z)),
                  u &&
                    Math.abs(u) + Math.abs(l) > 359.9 &&
                    ((u = l = 0), (c = 180 - c)),
                  (a = (0, h.Pr)(Math.sqrt(P * P + O * O + C * C))),
                  (s = (0, h.Pr)(Math.sqrt(T * T + X * X))),
                  (f = Math.abs((_ = b(E, T))) > 2e-4 ? _ * m : 0),
                  (g = Y ? 1 / (Y < 0 ? -Y : Y) : 0)),
              r.svg &&
                ((A = e.getAttribute("transform")),
                (r.forceCSS = e.setAttribute("transform", "") || !eu(q(e, B))),
                A && e.setAttribute("transform", A))),
            Math.abs(f) > 90 &&
              270 > Math.abs(f) &&
              (U
                ? ((a *= -1),
                  (f += l <= 0 ? 180 : -180),
                  (l += l <= 0 ? 180 : -180))
                : ((s *= -1), (f += f <= 0 ? 180 : -180))),
            (t = t || r.uncache),
            (r.x =
              n -
              ((r.xPercent =
                n &&
                ((!t && r.xPercent) ||
                  (Math.round(e.offsetWidth / 2) === Math.round(-n) ? -50 : 0)))
                ? (e.offsetWidth * r.xPercent) / 100
                : 0) +
              "px"),
            (r.y =
              i -
              ((r.yPercent =
                i &&
                ((!t && r.yPercent) ||
                  (Math.round(e.offsetHeight / 2) === Math.round(-i)
                    ? -50
                    : 0)))
                ? (e.offsetHeight * r.yPercent) / 100
                : 0) +
              "px"),
            (r.z = o + "px"),
            (r.scaleX = (0, h.Pr)(a)),
            (r.scaleY = (0, h.Pr)(s)),
            (r.rotation = (0, h.Pr)(l) + "deg"),
            (r.rotationX = (0, h.Pr)(u) + "deg"),
            (r.rotationY = (0, h.Pr)(c) + "deg"),
            (r.skewX = f + "deg"),
            (r.skewY = d + "deg"),
            (r.transformPerspective = g + "px"),
            (r.zOrigin =
              parseFloat(V.split(" ")[2]) || (!t && r.zOrigin) || 0) &&
              (L[j] = eh(V)),
            (r.xOffset = r.yOffset = 0),
            (r.force3D = h.Fc.force3D),
            (r.renderTransform = r.svg ? ew : p ? eb : em),
            (r.uncache = 0),
            r
          );
        },
        eh = function (e) {
          return (e = e.split(" "))[0] + " " + e[1];
        },
        eg = function (e, t, r) {
          var n = (0, h.Wy)(t);
          return (
            (0, h.Pr)(parseFloat(t) + parseFloat(ee(e, "x", r + "px", n))) + n
          );
        },
        em = function (e, t) {
          (t.z = "0px"),
            (t.rotationY = t.rotationX = "0deg"),
            (t.force3D = 0),
            eb(e, t);
        },
        ev = "0deg",
        eb = function (e, t) {
          var r = t || this,
            n = r.xPercent,
            i = r.yPercent,
            o = r.x,
            a = r.y,
            s = r.z,
            l = r.rotation,
            u = r.rotationY,
            c = r.rotationX,
            f = r.skewX,
            d = r.skewY,
            p = r.scaleX,
            h = r.scaleY,
            g = r.transformPerspective,
            m = r.force3D,
            b = r.target,
            w = r.zOrigin,
            y = "",
            x = ("auto" === m && e && 1 !== e) || !0 === m;
          if (w && (c !== ev || u !== ev)) {
            var _,
              k = parseFloat(u) * v,
              S = Math.sin(k),
              P = Math.cos(k);
            (o = eg(b, o, -(S * (_ = Math.cos((k = parseFloat(c) * v))) * w))),
              (a = eg(b, a, -(-Math.sin(k) * w))),
              (s = eg(b, s, -(P * _ * w) + w));
          }
          "0px" !== g && (y += "perspective(" + g + ") "),
            (n || i) && (y += "translate(" + n + "%, " + i + "%) "),
            (x || "0px" !== o || "0px" !== a || "0px" !== s) &&
              (y +=
                "0px" !== s || x
                  ? "translate3d(" + o + ", " + a + ", " + s + ") "
                  : "translate(" + o + ", " + a + ") "),
            l !== ev && (y += "rotate(" + l + ") "),
            u !== ev && (y += "rotateY(" + u + ") "),
            c !== ev && (y += "rotateX(" + c + ") "),
            (f !== ev || d !== ev) && (y += "skew(" + f + ", " + d + ") "),
            (1 !== p || 1 !== h) && (y += "scale(" + p + ", " + h + ") "),
            (b.style[B] = y || "translate(0, 0)");
        },
        ew = function (e, t) {
          var r,
            n,
            i,
            o,
            a,
            s = t || this,
            l = s.xPercent,
            u = s.yPercent,
            c = s.x,
            f = s.y,
            d = s.rotation,
            p = s.skewX,
            g = s.skewY,
            m = s.scaleX,
            b = s.scaleY,
            w = s.target,
            y = s.xOrigin,
            x = s.yOrigin,
            _ = s.xOffset,
            k = s.yOffset,
            S = s.forceCSS,
            P = parseFloat(c),
            O = parseFloat(f);
          (d = parseFloat(d)),
            (p = parseFloat(p)),
            (g = parseFloat(g)) && ((p += g = parseFloat(g)), (d += g)),
            d || p
              ? ((d *= v),
                (p *= v),
                (r = Math.cos(d) * m),
                (n = Math.sin(d) * m),
                (i = -(Math.sin(d - p) * b)),
                (o = Math.cos(d - p) * b),
                p &&
                  ((g *= v),
                  (i *= a = Math.sqrt(1 + (a = Math.tan(p - g)) * a)),
                  (o *= a),
                  g &&
                    ((r *= a = Math.sqrt(1 + (a = Math.tan(g)) * a)),
                    (n *= a))),
                (r = (0, h.Pr)(r)),
                (n = (0, h.Pr)(n)),
                (i = (0, h.Pr)(i)),
                (o = (0, h.Pr)(o)))
              : ((r = m), (o = b), (n = i = 0)),
            ((P && !~(c + "").indexOf("px")) ||
              (O && !~(f + "").indexOf("px"))) &&
              ((P = ee(w, "x", c, "px")), (O = ee(w, "y", f, "px"))),
            (y || x || _ || k) &&
              ((P = (0, h.Pr)(P + y - (y * r + x * i) + _)),
              (O = (0, h.Pr)(O + x - (y * n + x * o) + k))),
            (l || u) &&
              ((a = w.getBBox()),
              (P = (0, h.Pr)(P + (l / 100) * a.width)),
              (O = (0, h.Pr)(O + (u / 100) * a.height))),
            (a =
              "matrix(" +
              r +
              "," +
              n +
              "," +
              i +
              "," +
              o +
              "," +
              P +
              "," +
              O +
              ")"),
            w.setAttribute("transform", a),
            S && (w.style[B] = a);
        },
        ey = function (e, t, r, n, i) {
          var o,
            a,
            s = (0, h.r9)(i),
            l = parseFloat(i) * (s && ~i.indexOf("rad") ? m : 1) - n,
            u = n + l + "deg";
          return (
            s &&
              ("short" === (o = i.split("_")[1]) &&
                (l %= 360) != l % 180 &&
                (l += l < 0 ? 360 : -360),
              "cw" === o && l < 0
                ? (l = ((l + 36e9) % 360) - 360 * ~~(l / 360))
                : "ccw" === o &&
                  l > 0 &&
                  (l = ((l - 36e9) % 360) - 360 * ~~(l / 360))),
            (e._pt = a = new h.Fo(e._pt, t, r, n, l, S)),
            (a.e = u),
            (a.u = "deg"),
            e._props.push(r),
            a
          );
        },
        ex = function (e, t) {
          for (var r in t) e[r] = t[r];
          return e;
        },
        e_ = function (e, t, r) {
          var n,
            i,
            o,
            a,
            s,
            l,
            u,
            c = ex({}, r._gsap),
            f = r.style;
          for (i in (c.svg
            ? ((o = r.getAttribute("transform")),
              r.setAttribute("transform", ""),
              (f[B] = t),
              (n = ep(r, 1)),
              Z(r, B),
              r.setAttribute("transform", o))
            : ((o = getComputedStyle(r)[B]),
              (f[B] = t),
              (n = ep(r, 1)),
              (f[B] = o)),
          g))
            (o = c[i]) !== (a = n[i]) &&
              0 > "perspective,force3D,transformOrigin,svgOrigin".indexOf(i) &&
              ((s =
                (0, h.Wy)(o) !== (u = (0, h.Wy)(a))
                  ? ee(r, i, o, u)
                  : parseFloat(o)),
              (l = parseFloat(a)),
              (e._pt = new h.Fo(e._pt, n, i, s, l - s, k)),
              (e._pt.u = u || 0),
              e._props.push(i));
          ex(n, c);
        };
      (0, h.fS)("padding,margin,Width,Radius", function (e, t) {
        var r = "Right",
          n = "Bottom",
          i = "Left",
          o = (
            t < 3 ? ["Top", r, n, i] : ["Top" + i, "Top" + r, n + r, n + i]
          ).map(function (r) {
            return t < 2 ? e + r : "border" + r + e;
          });
        ea[t > 1 ? "border" + e : e] = function (e, t, r, n, i) {
          var a, s;
          if (arguments.length < 4)
            return 5 ===
              (s = (a = o.map(function (t) {
                return et(e, t, r);
              })).join(" ")).split(a[0]).length
              ? a[0]
              : s;
          (a = (n + "").split(" ")),
            (s = {}),
            o.forEach(function (e, t) {
              return (s[e] = a[t] = a[t] || a[((t - 1) / 2) | 0]);
            }),
            e.init(t, s, i);
        };
      });
      var ek = {
        name: "css",
        register: W,
        targetTest: function (e) {
          return e.style && e.nodeType;
        },
        init: function (e, t, r, n, i) {
          var o,
            a,
            s,
            l,
            c,
            f,
            d,
            p,
            m,
            v,
            b,
            w,
            y,
            S,
            C,
            M,
            E = this._props,
            T = e.style,
            A = r.vars.startAt;
          for (d in (u || W(),
          (this.styles = this.styles || Y(e)),
          (M = this.styles.props),
          (this.tween = r),
          t))
            if (
              "autoRound" !== d &&
              ((a = t[d]), !(h.$i[d] && (0, h.if)(d, t, r, n, e, i)))
            ) {
              if (
                ((c = typeof a),
                (f = ea[d]),
                "function" === c && (c = typeof (a = a.call(r, n, e, i))),
                "string" === c && ~a.indexOf("random(") && (a = (0, h.UI)(a)),
                f)
              )
                f(this, e, d, a, r) && (C = 1);
              else if ("--" === d.substr(0, 2))
                (o = (getComputedStyle(e).getPropertyValue(d) + "").trim()),
                  (a += ""),
                  (h.GN.lastIndex = 0),
                  h.GN.test(o) || ((p = (0, h.Wy)(o)), (m = (0, h.Wy)(a))),
                  m ? p !== m && (o = ee(e, d, o, m) + m) : p && (a += p),
                  this.add(T, "setProperty", o, a, n, i, 0, 0, d),
                  E.push(d),
                  M.push(d, 0, T[d]);
              else if ("undefined" !== c) {
                if (
                  (A && d in A
                    ? ((o =
                        "function" == typeof A[d]
                          ? A[d].call(r, n, e, i)
                          : A[d]),
                      (0, h.r9)(o) &&
                        ~o.indexOf("random(") &&
                        (o = (0, h.UI)(o)),
                      (0, h.Wy)(o + "") ||
                        "auto" === o ||
                        (o += h.Fc.units[d] || (0, h.Wy)(et(e, d)) || ""),
                      "=" === (o + "").charAt(1) && (o = et(e, d)))
                    : (o = et(e, d)),
                  (l = parseFloat(o)),
                  (v =
                    "string" === c && "=" === a.charAt(1) && a.substr(0, 2)) &&
                    (a = a.substr(2)),
                  (s = parseFloat(a)),
                  d in _ &&
                    ("autoAlpha" === d &&
                      (1 === l &&
                        "hidden" === et(e, "visibility") &&
                        s &&
                        (l = 0),
                      M.push("visibility", 0, T.visibility),
                      K(
                        this,
                        T,
                        "visibility",
                        l ? "inherit" : "hidden",
                        s ? "inherit" : "hidden",
                        !s
                      )),
                    "scale" !== d &&
                      "transform" !== d &&
                      ~(d = _[d]).indexOf(",") &&
                      (d = d.split(",")[0])),
                  (b = d in g))
                ) {
                  if (
                    (this.styles.save(d),
                    w ||
                      (((y = e._gsap).renderTransform && !t.parseTransform) ||
                        ep(e, t.parseTransform),
                      (S = !1 !== t.smoothOrigin && y.smooth),
                      ((w = this._pt =
                        new h.Fo(
                          this._pt,
                          T,
                          B,
                          0,
                          1,
                          y.renderTransform,
                          y,
                          0,
                          -1
                        )).dep = 1)),
                    "scale" === d)
                  )
                    (this._pt = new h.Fo(
                      this._pt,
                      y,
                      "scaleY",
                      y.scaleY,
                      (v ? (0, h.cy)(y.scaleY, v + s) : s) - y.scaleY || 0,
                      k
                    )),
                      (this._pt.u = 0),
                      E.push("scaleY", d),
                      (d += "X");
                  else if ("transformOrigin" === d) {
                    M.push(j, 0, T[j]),
                      (a = ei(a)),
                      y.svg
                        ? ed(e, a, 0, S, 0, this)
                        : ((m = parseFloat(a.split(" ")[2]) || 0) !==
                            y.zOrigin && K(this, y, "zOrigin", y.zOrigin, m),
                          K(this, T, d, eh(o), eh(a)));
                    continue;
                  } else if ("svgOrigin" === d) {
                    ed(e, a, 1, S, 0, this);
                    continue;
                  } else if (d in el) {
                    ey(this, y, d, l, v ? (0, h.cy)(l, v + a) : a);
                    continue;
                  } else if ("smoothOrigin" === d) {
                    K(this, y, "smooth", y.smooth, a);
                    continue;
                  } else if ("force3D" === d) {
                    y[d] = a;
                    continue;
                  } else if ("transform" === d) {
                    e_(this, a, e);
                    continue;
                  }
                } else d in T || (d = U(d) || d);
                if (
                  b ||
                  ((s || 0 === s) && (l || 0 === l) && !x.test(a) && d in T)
                )
                  (p = (o + "").substr((l + "").length)),
                    s || (s = 0),
                    (m = (0, h.Wy)(a) || (d in h.Fc.units ? h.Fc.units[d] : p)),
                    p !== m && (l = ee(e, d, o, m)),
                    (this._pt = new h.Fo(
                      this._pt,
                      b ? y : T,
                      d,
                      l,
                      (v ? (0, h.cy)(l, v + s) : s) - l,
                      b || ("px" !== m && "zIndex" !== d) || !1 === t.autoRound
                        ? k
                        : O
                    )),
                    (this._pt.u = m || 0),
                    p !== m &&
                      "%" !== m &&
                      ((this._pt.b = o), (this._pt.r = P));
                else if (d in T) er.call(this, e, d, o, v ? v + a : a);
                else if (d in e) this.add(e, d, o || e[d], v ? v + a : a, n, i);
                else if ("parseTransform" !== d) {
                  (0, h.lC)(d, a);
                  continue;
                }
                b || (d in T ? M.push(d, 0, T[d]) : M.push(d, 1, o || e[d])),
                  E.push(d);
              }
            }
          C && (0, h.JV)(this);
        },
        render: function (e, t) {
          if (t.tween._time || !d())
            for (var r = t._pt; r; ) r.r(e, r.d), (r = r._next);
          else t.styles.revert();
        },
        get: et,
        aliases: _,
        getSetter: function (e, t, r) {
          var n = _[t];
          return (
            n && 0 > n.indexOf(",") && (t = n),
            t in g && t !== j && (e._gsap.x || et(e, "x"))
              ? r && f === r
                ? "scale" === t
                  ? z
                  : A
                : ((f = r || {}), "scale" === t ? I : R)
              : e.style && !(0, h.m2)(e.style[t])
              ? E
              : ~t.indexOf("-")
              ? T
              : (0, h.S5)(e, t)
          );
        },
        core: { _removeProperty: Z, _getMatrix: ef },
      };
      (h.p8.utils.checkPrefix = U),
        (h.p8.core.getStyleSaver = Y),
        (n = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent"),
        (i = "rotation,rotationX,rotationY,skewX,skewY"),
        (o =
          "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY"),
        (a = (0, h.fS)(
          n +
            "," +
            i +
            ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
          function (e) {
            g[e] = 1;
          }
        )),
        (0, h.fS)(i, function (e) {
          (h.Fc.units[e] = "deg"), (el[e] = 1);
        }),
        (_[a[13]] = n + "," + i),
        (0, h.fS)(o, function (e) {
          var t = e.split(":");
          _[t[1]] = a[t[0]];
        }),
        (0, h.fS)(
          "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
          function (e) {
            h.Fc.units[e] = "px";
          }
        ),
        h.p8.registerPlugin(ek);
      var eS = h.p8.registerPlugin(ek) || h.p8;
      eS.core.Tween;
    },
    6648: function (e, t, r) {
      "use strict";
      r.d(t, {
        default: function () {
          return i.a;
        },
      });
      var n = r(5601),
        i = r.n(n);
    },
    8173: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "Image", {
          enumerable: !0,
          get: function () {
            return w;
          },
        });
      let n = r(9920),
        i = r(1452),
        o = r(7437),
        a = i._(r(2265)),
        s = n._(r(4887)),
        l = n._(r(8321)),
        u = r(497),
        c = r(7103),
        f = r(3938);
      r(2301);
      let d = r(291),
        p = n._(r(1241)),
        h = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          dangerouslyAllowSVG: !1,
          unoptimized: !1,
        };
      function g(e, t, r, n, i, o, a) {
        let s = null == e ? void 0 : e.src;
        e &&
          e["data-loaded-src"] !== s &&
          ((e["data-loaded-src"] = s),
          ("decode" in e ? e.decode() : Promise.resolve())
            .catch(() => {})
            .then(() => {
              if (e.parentElement && e.isConnected) {
                if (("empty" !== t && i(!0), null == r ? void 0 : r.current)) {
                  let t = new Event("load");
                  Object.defineProperty(t, "target", {
                    writable: !1,
                    value: e,
                  });
                  let n = !1,
                    i = !1;
                  r.current({
                    ...t,
                    nativeEvent: t,
                    currentTarget: e,
                    target: e,
                    isDefaultPrevented: () => n,
                    isPropagationStopped: () => i,
                    persist: () => {},
                    preventDefault: () => {
                      (n = !0), t.preventDefault();
                    },
                    stopPropagation: () => {
                      (i = !0), t.stopPropagation();
                    },
                  });
                }
                (null == n ? void 0 : n.current) && n.current(e);
              }
            }));
      }
      function m(e) {
        return a.use ? { fetchPriority: e } : { fetchpriority: e };
      }
      "undefined" == typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
      let v = (0, a.forwardRef)((e, t) => {
        let {
          src: r,
          srcSet: n,
          sizes: i,
          height: s,
          width: l,
          decoding: u,
          className: c,
          style: f,
          fetchPriority: d,
          placeholder: p,
          loading: h,
          unoptimized: v,
          fill: b,
          onLoadRef: w,
          onLoadingCompleteRef: y,
          setBlurComplete: x,
          setShowAltText: _,
          sizesInput: k,
          onLoad: S,
          onError: P,
          ...O
        } = e;
        return (0, o.jsx)("img", {
          ...O,
          ...m(d),
          loading: h,
          width: l,
          height: s,
          decoding: u,
          "data-nimg": b ? "fill" : "1",
          className: c,
          style: f,
          sizes: i,
          srcSet: n,
          src: r,
          ref: (0, a.useCallback)(
            (e) => {
              t &&
                ("function" == typeof t
                  ? t(e)
                  : "object" == typeof t && (t.current = e)),
                e &&
                  (P && (e.src = e.src), e.complete && g(e, p, w, y, x, v, k));
            },
            [r, p, w, y, x, P, v, k, t]
          ),
          onLoad: (e) => {
            g(e.currentTarget, p, w, y, x, v, k);
          },
          onError: (e) => {
            _(!0), "empty" !== p && x(!0), P && P(e);
          },
        });
      });
      function b(e) {
        let { isAppRouter: t, imgAttributes: r } = e,
          n = {
            as: "image",
            imageSrcSet: r.srcSet,
            imageSizes: r.sizes,
            crossOrigin: r.crossOrigin,
            referrerPolicy: r.referrerPolicy,
            ...m(r.fetchPriority),
          };
        return t && s.default.preload
          ? (s.default.preload(r.src, n), null)
          : (0, o.jsx)(l.default, {
              children: (0, o.jsx)(
                "link",
                { rel: "preload", href: r.srcSet ? void 0 : r.src, ...n },
                "__nimg-" + r.src + r.srcSet + r.sizes
              ),
            });
      }
      let w = (0, a.forwardRef)((e, t) => {
        let r = (0, a.useContext)(d.RouterContext),
          n = (0, a.useContext)(f.ImageConfigContext),
          i = (0, a.useMemo)(() => {
            let e = h || n || c.imageConfigDefault,
              t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
              r = e.deviceSizes.sort((e, t) => e - t);
            return { ...e, allSizes: t, deviceSizes: r };
          }, [n]),
          { onLoad: s, onLoadingComplete: l } = e,
          g = (0, a.useRef)(s);
        (0, a.useEffect)(() => {
          g.current = s;
        }, [s]);
        let m = (0, a.useRef)(l);
        (0, a.useEffect)(() => {
          m.current = l;
        }, [l]);
        let [w, y] = (0, a.useState)(!1),
          [x, _] = (0, a.useState)(!1),
          { props: k, meta: S } = (0, u.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: i,
            blurComplete: w,
            showAltText: x,
          });
        return (0, o.jsxs)(o.Fragment, {
          children: [
            (0, o.jsx)(v, {
              ...k,
              unoptimized: S.unoptimized,
              placeholder: S.placeholder,
              fill: S.fill,
              onLoadRef: g,
              onLoadingCompleteRef: m,
              setBlurComplete: y,
              setShowAltText: _,
              sizesInput: e.sizes,
              ref: t,
            }),
            S.priority
              ? (0, o.jsx)(b, { isAppRouter: !r, imgAttributes: k })
              : null,
          ],
        });
      });
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    2901: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "AmpStateContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(9920)._(r(2265)).default.createContext({});
    },
    687: function (e, t) {
      "use strict";
      function r(e) {
        let {
          ampFirst: t = !1,
          hybrid: r = !1,
          hasQuery: n = !1,
        } = void 0 === e ? {} : e;
        return t || (r && n);
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "isInAmpMode", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    497: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImgProps", {
          enumerable: !0,
          get: function () {
            return s;
          },
        }),
        r(2301);
      let n = r(1564),
        i = r(7103);
      function o(e) {
        return void 0 !== e.default;
      }
      function a(e) {
        return void 0 === e
          ? e
          : "number" == typeof e
          ? Number.isFinite(e)
            ? e
            : NaN
          : "string" == typeof e && /^[0-9]+$/.test(e)
          ? parseInt(e, 10)
          : NaN;
      }
      function s(e, t) {
        var r;
        let s,
          l,
          u,
          {
            src: c,
            sizes: f,
            unoptimized: d = !1,
            priority: p = !1,
            loading: h,
            className: g,
            quality: m,
            width: v,
            height: b,
            fill: w = !1,
            style: y,
            overrideSrc: x,
            onLoad: _,
            onLoadingComplete: k,
            placeholder: S = "empty",
            blurDataURL: P,
            fetchPriority: O,
            layout: C,
            objectFit: M,
            objectPosition: E,
            lazyBoundary: T,
            lazyRoot: A,
            ...z
          } = e,
          { imgConf: I, showAltText: R, blurComplete: B, defaultLoader: j } = t,
          F = I || i.imageConfigDefault;
        if ("allSizes" in F) s = F;
        else {
          let e = [...F.deviceSizes, ...F.imageSizes].sort((e, t) => e - t),
            t = F.deviceSizes.sort((e, t) => e - t);
          s = { ...F, allSizes: e, deviceSizes: t };
        }
        if (void 0 === j)
          throw Error(
            "images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"
          );
        let D = z.loader || j;
        delete z.loader, delete z.srcSet;
        let N = "__next_img_default" in D;
        if (N) {
          if ("custom" === s.loader)
            throw Error(
              'Image with src "' +
                c +
                '" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader'
            );
        } else {
          let e = D;
          D = (t) => {
            let { config: r, ...n } = t;
            return e(n);
          };
        }
        if (C) {
          "fill" === C && (w = !0);
          let e = {
            intrinsic: { maxWidth: "100%", height: "auto" },
            responsive: { width: "100%", height: "auto" },
          }[C];
          e && (y = { ...y, ...e });
          let t = { responsive: "100vw", fill: "100vw" }[C];
          t && !f && (f = t);
        }
        let Y = "",
          X = a(v),
          q = a(b);
        if ("object" == typeof (r = c) && (o(r) || void 0 !== r.src)) {
          let e = o(c) ? c.default : c;
          if (!e.src)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received " +
                JSON.stringify(e)
            );
          if (!e.height || !e.width)
            throw Error(
              "An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received " +
                JSON.stringify(e)
            );
          if (
            ((l = e.blurWidth),
            (u = e.blurHeight),
            (P = P || e.blurDataURL),
            (Y = e.src),
            !w)
          ) {
            if (X || q) {
              if (X && !q) {
                let t = X / e.width;
                q = Math.round(e.height * t);
              } else if (!X && q) {
                let t = q / e.height;
                X = Math.round(e.width * t);
              }
            } else (X = e.width), (q = e.height);
          }
        }
        let L = !p && ("lazy" === h || void 0 === h);
        (!(c = "string" == typeof c ? c : Y) ||
          c.startsWith("data:") ||
          c.startsWith("blob:")) &&
          ((d = !0), (L = !1)),
          s.unoptimized && (d = !0),
          N && c.endsWith(".svg") && !s.dangerouslyAllowSVG && (d = !0),
          p && (O = "high");
        let U = a(m),
          W = Object.assign(
            w
              ? {
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  left: 0,
                  top: 0,
                  right: 0,
                  bottom: 0,
                  objectFit: M,
                  objectPosition: E,
                }
              : {},
            R ? {} : { color: "transparent" },
            y
          ),
          V =
            B || "empty" === S
              ? null
              : "blur" === S
              ? 'url("data:image/svg+xml;charset=utf-8,' +
                (0, n.getImageBlurSvg)({
                  widthInt: X,
                  heightInt: q,
                  blurWidth: l,
                  blurHeight: u,
                  blurDataURL: P || "",
                  objectFit: W.objectFit,
                }) +
                '")'
              : 'url("' + S + '")',
          H = V
            ? {
                backgroundSize: W.objectFit || "cover",
                backgroundPosition: W.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: V,
              }
            : {},
          G = (function (e) {
            let {
              config: t,
              src: r,
              unoptimized: n,
              width: i,
              quality: o,
              sizes: a,
              loader: s,
            } = e;
            if (n) return { src: r, srcSet: void 0, sizes: void 0 };
            let { widths: l, kind: u } = (function (e, t, r) {
                let { deviceSizes: n, allSizes: i } = e;
                if (r) {
                  let e = /(^|\s)(1?\d?\d)vw/g,
                    t = [];
                  for (let n; (n = e.exec(r)); n) t.push(parseInt(n[2]));
                  if (t.length) {
                    let e = 0.01 * Math.min(...t);
                    return {
                      widths: i.filter((t) => t >= n[0] * e),
                      kind: "w",
                    };
                  }
                  return { widths: i, kind: "w" };
                }
                return "number" != typeof t
                  ? { widths: n, kind: "w" }
                  : {
                      widths: [
                        ...new Set(
                          [t, 2 * t].map(
                            (e) => i.find((t) => t >= e) || i[i.length - 1]
                          )
                        ),
                      ],
                      kind: "x",
                    };
              })(t, i, a),
              c = l.length - 1;
            return {
              sizes: a || "w" !== u ? a : "100vw",
              srcSet: l
                .map(
                  (e, n) =>
                    s({ config: t, src: r, quality: o, width: e }) +
                    " " +
                    ("w" === u ? e : n + 1) +
                    u
                )
                .join(", "),
              src: s({ config: t, src: r, quality: o, width: l[c] }),
            };
          })({
            config: s,
            src: c,
            unoptimized: d,
            width: X,
            quality: U,
            sizes: f,
            loader: D,
          });
        return {
          props: {
            ...z,
            loading: L ? "lazy" : h,
            fetchPriority: O,
            width: X,
            height: q,
            decoding: "async",
            className: g,
            style: { ...W, ...H },
            sizes: G.sizes,
            srcSet: G.srcSet,
            src: x || G.src,
          },
          meta: { unoptimized: d, priority: p, placeholder: S, fill: w },
        };
      }
    },
    8321: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return g;
          },
          defaultHead: function () {
            return f;
          },
        });
      let n = r(9920),
        i = r(1452),
        o = r(7437),
        a = i._(r(2265)),
        s = n._(r(5960)),
        l = r(2901),
        u = r(6590),
        c = r(687);
      function f(e) {
        void 0 === e && (e = !1);
        let t = [(0, o.jsx)("meta", { charSet: "utf-8" })];
        return (
          e ||
            t.push(
              (0, o.jsx)("meta", {
                name: "viewport",
                content: "width=device-width",
              })
            ),
          t
        );
      }
      function d(e, t) {
        return "string" == typeof t || "number" == typeof t
          ? e
          : t.type === a.default.Fragment
          ? e.concat(
              a.default.Children.toArray(t.props.children).reduce(
                (e, t) =>
                  "string" == typeof t || "number" == typeof t
                    ? e
                    : e.concat(t),
                []
              )
            )
          : e.concat(t);
      }
      r(2301);
      let p = ["name", "httpEquiv", "charSet", "itemProp"];
      function h(e, t) {
        let { inAmpMode: r } = t;
        return e
          .reduce(d, [])
          .reverse()
          .concat(f(r).reverse())
          .filter(
            (function () {
              let e = new Set(),
                t = new Set(),
                r = new Set(),
                n = {};
              return (i) => {
                let o = !0,
                  a = !1;
                if (
                  i.key &&
                  "number" != typeof i.key &&
                  i.key.indexOf("$") > 0
                ) {
                  a = !0;
                  let t = i.key.slice(i.key.indexOf("$") + 1);
                  e.has(t) ? (o = !1) : e.add(t);
                }
                switch (i.type) {
                  case "title":
                  case "base":
                    t.has(i.type) ? (o = !1) : t.add(i.type);
                    break;
                  case "meta":
                    for (let e = 0, t = p.length; e < t; e++) {
                      let t = p[e];
                      if (i.props.hasOwnProperty(t)) {
                        if ("charSet" === t) r.has(t) ? (o = !1) : r.add(t);
                        else {
                          let e = i.props[t],
                            r = n[t] || new Set();
                          ("name" !== t || !a) && r.has(e)
                            ? (o = !1)
                            : (r.add(e), (n[t] = r));
                        }
                      }
                    }
                }
                return o;
              };
            })()
          )
          .reverse()
          .map((e, t) => {
            let n = e.key || t;
            if (
              !r &&
              "link" === e.type &&
              e.props.href &&
              [
                "https://fonts.googleapis.com/css",
                "https://use.typekit.net/",
              ].some((t) => e.props.href.startsWith(t))
            ) {
              let t = { ...(e.props || {}) };
              return (
                (t["data-href"] = t.href),
                (t.href = void 0),
                (t["data-optimized-fonts"] = !0),
                a.default.cloneElement(e, t)
              );
            }
            return a.default.cloneElement(e, { key: n });
          });
      }
      let g = function (e) {
        let { children: t } = e,
          r = (0, a.useContext)(l.AmpStateContext),
          n = (0, a.useContext)(u.HeadManagerContext);
        return (0, o.jsx)(s.default, {
          reduceComponentsToState: h,
          headManager: n,
          inAmpMode: (0, c.isInAmpMode)(r),
          children: t,
        });
      };
      ("function" == typeof t.default ||
        ("object" == typeof t.default && null !== t.default)) &&
        void 0 === t.default.__esModule &&
        (Object.defineProperty(t.default, "__esModule", { value: !0 }),
        Object.assign(t.default, t),
        (e.exports = t.default));
    },
    1564: function (e, t) {
      "use strict";
      function r(e) {
        let {
            widthInt: t,
            heightInt: r,
            blurWidth: n,
            blurHeight: i,
            blurDataURL: o,
            objectFit: a,
          } = e,
          s = n ? 40 * n : t,
          l = i ? 40 * i : r,
          u = s && l ? "viewBox='0 0 " + s + " " + l + "'" : "";
        return (
          "%3Csvg xmlns='http://www.w3.org/2000/svg' " +
          u +
          "%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='" +
          (u
            ? "none"
            : "contain" === a
            ? "xMidYMid"
            : "cover" === a
            ? "xMidYMid slice"
            : "none") +
          "' style='filter: url(%23b);' href='" +
          o +
          "'/%3E%3C/svg%3E"
        );
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "getImageBlurSvg", {
          enumerable: !0,
          get: function () {
            return r;
          },
        });
    },
    3938: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "ImageConfigContext", {
          enumerable: !0,
          get: function () {
            return o;
          },
        });
      let n = r(9920)._(r(2265)),
        i = r(7103),
        o = n.default.createContext(i.imageConfigDefault);
    },
    7103: function (e, t) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          VALID_LOADERS: function () {
            return r;
          },
          imageConfigDefault: function () {
            return n;
          },
        });
      let r = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
          deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
          imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
          path: "/_next/image",
          loader: "default",
          loaderFile: "",
          domains: [],
          disableStaticImages: !1,
          minimumCacheTTL: 60,
          formats: ["image/webp"],
          dangerouslyAllowSVG: !1,
          contentSecurityPolicy:
            "script-src 'none'; frame-src 'none'; sandbox;",
          contentDispositionType: "inline",
          remotePatterns: [],
          unoptimized: !1,
        };
    },
    5601: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        (function (e, t) {
          for (var r in t)
            Object.defineProperty(e, r, { enumerable: !0, get: t[r] });
        })(t, {
          default: function () {
            return l;
          },
          getImageProps: function () {
            return s;
          },
        });
      let n = r(9920),
        i = r(497),
        o = r(8173),
        a = n._(r(1241));
      function s(e) {
        let { props: t } = (0, i.getImgProps)(e, {
          defaultLoader: a.default,
          imgConf: {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !1,
          },
        });
        for (let [e, r] of Object.entries(t)) void 0 === r && delete t[e];
        return { props: t };
      }
      let l = o.Image;
    },
    1241: function (e, t) {
      "use strict";
      function r(e) {
        let { config: t, src: r, width: n, quality: i } = e;
        return r;
      }
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return n;
          },
        }),
        (r.__next_img_default = !0);
      let n = r;
    },
    291: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "RouterContext", {
          enumerable: !0,
          get: function () {
            return n;
          },
        });
      let n = r(9920)._(r(2265)).default.createContext(null);
    },
    5960: function (e, t, r) {
      "use strict";
      Object.defineProperty(t, "__esModule", { value: !0 }),
        Object.defineProperty(t, "default", {
          enumerable: !0,
          get: function () {
            return s;
          },
        });
      let n = r(2265),
        i = "undefined" == typeof window,
        o = i ? () => {} : n.useLayoutEffect,
        a = i ? () => {} : n.useEffect;
      function s(e) {
        let { headManager: t, reduceComponentsToState: r } = e;
        function s() {
          if (t && t.mountedInstances) {
            let i = n.Children.toArray(
              Array.from(t.mountedInstances).filter(Boolean)
            );
            t.updateHead(r(i, e));
          }
        }
        if (i) {
          var l;
          null == t || null == (l = t.mountedInstances) || l.add(e.children),
            s();
        }
        return (
          o(() => {
            var r;
            return (
              null == t ||
                null == (r = t.mountedInstances) ||
                r.add(e.children),
              () => {
                var r;
                null == t ||
                  null == (r = t.mountedInstances) ||
                  r.delete(e.children);
              }
            );
          }),
          o(
            () => (
              t && (t._pendingUpdate = s),
              () => {
                t && (t._pendingUpdate = s);
              }
            )
          ),
          a(
            () => (
              t &&
                t._pendingUpdate &&
                (t._pendingUpdate(), (t._pendingUpdate = null)),
              () => {
                t &&
                  t._pendingUpdate &&
                  (t._pendingUpdate(), (t._pendingUpdate = null));
              }
            )
          ),
          null
        );
      }
    },
    4398: function (e, t, r) {
      "use strict";
      var n,
        i,
        o,
        a,
        s,
        l,
        u = r(2265);
      u && "object" == typeof u && "default" in u && u.default;
      var c = r(7914),
        f = new c(),
        d = f.getBrowser(),
        p = f.getCPU(),
        h = f.getDevice(),
        g = f.getEngine(),
        m = f.getOS(),
        v = f.getUA(),
        b = {
          Mobile: "mobile",
          Tablet: "tablet",
          SmartTv: "smarttv",
          Console: "console",
          Wearable: "wearable",
          Embedded: "embedded",
          Browser: void 0,
        },
        w = {
          Chrome: "Chrome",
          Firefox: "Firefox",
          Opera: "Opera",
          Yandex: "Yandex",
          Safari: "Safari",
          InternetExplorer: "Internet Explorer",
          Edge: "Edge",
          Chromium: "Chromium",
          Ie: "IE",
          MobileSafari: "Mobile Safari",
          MIUI: "MIUI Browser",
          SamsungBrowser: "Samsung Browser",
        },
        y = function (e) {
          var t =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : "none";
          return e || t;
        },
        x = function () {
          return (
            !!(
              "undefined" != typeof window &&
              (window.navigator || navigator)
            ) &&
            (window.navigator || navigator)
          );
        },
        _ = function (e) {
          var t = x();
          return (
            t &&
            t.platform &&
            (-1 !== t.platform.indexOf(e) ||
              ("MacIntel" === t.platform &&
                t.maxTouchPoints > 1 &&
                !window.MSStream))
          );
        },
        k = function (e) {
          return e.type === b.Browser;
        },
        S = function (e) {
          return e.name === w.Edge;
        },
        P = function (e) {
          return "string" == typeof e && -1 !== e.indexOf("Edg/");
        },
        O = function () {
          return _("iPad");
        };
      h.type,
        b.SmartTv,
        h.type,
        b.Console,
        h.type,
        b.Wearable,
        h.type,
        b.Embedded,
        d.name === w.MobileSafari || O(),
        d.name,
        w.Chromium;
      var C = (n = h.type) === b.Mobile || n === b.Tablet || O(),
        M = (h.type, b.Mobile, h.type === b.Tablet || O()),
        E = (k(h), k(h));
      m.name,
        m.name,
        "iOS" === m.name || O(),
        d.name,
        w.Chrome,
        d.name,
        w.Firefox,
        (i = d.name) === w.Safari || w.MobileSafari,
        d.name,
        w.Opera,
        (o = d.name) === w.InternetExplorer || w.Ie,
        y(m.version),
        y(m.name),
        y(d.version),
        y(d.major),
        y(d.name),
        y(h.vendor),
        y(h.model),
        y(g.name),
        y(g.version),
        y(v),
        S(d) || P(v),
        d.name,
        w.Yandex,
        y(h.type, "browser"),
        (a = x()) &&
          (/iPad|iPhone|iPod/.test(a.platform) ||
            ("MacIntel" === a.platform && a.maxTouchPoints > 1)) &&
          window.MSStream,
        O(),
        _("iPhone"),
        _("iPod"),
        "string" ==
          typeof (l = (s = x()) && s.userAgent && s.userAgent.toLowerCase()) &&
          /electron/.test(l),
        P(v),
        S(d) && P(v),
        m.name,
        m.name,
        d.name,
        w.MIUI,
        d.name,
        w.SamsungBrowser,
        (t.nI = E),
        (t.tq = C),
        (t.Em = M);
    },
    7914: function (e, t, r) {
      var n;
      !(function (i, o) {
        "use strict";
        var a = "function",
          s = "undefined",
          l = "object",
          u = "string",
          c = "major",
          f = "model",
          d = "name",
          p = "type",
          h = "vendor",
          g = "version",
          m = "architecture",
          v = "console",
          b = "mobile",
          w = "tablet",
          y = "smarttv",
          x = "wearable",
          _ = "embedded",
          k = "Amazon",
          S = "Apple",
          P = "ASUS",
          O = "BlackBerry",
          C = "Browser",
          M = "Chrome",
          E = "Firefox",
          T = "Google",
          A = "Huawei",
          z = "Microsoft",
          I = "Motorola",
          R = "Opera",
          B = "Samsung",
          j = "Sharp",
          F = "Sony",
          D = "Xiaomi",
          N = "Zebra",
          Y = "Facebook",
          X = "Chromium OS",
          q = "Mac OS",
          L = " Browser",
          U = function (e, t) {
            var r = {};
            for (var n in e)
              t[n] && t[n].length % 2 == 0
                ? (r[n] = t[n].concat(e[n]))
                : (r[n] = e[n]);
            return r;
          },
          W = function (e) {
            for (var t = {}, r = 0; r < e.length; r++)
              t[e[r].toUpperCase()] = e[r];
            return t;
          },
          V = function (e, t) {
            return typeof e === u && -1 !== H(t).indexOf(H(e));
          },
          H = function (e) {
            return e.toLowerCase();
          },
          G = function (e, t) {
            if (typeof e === u)
              return (
                (e = e.replace(/^\s\s*/, "")),
                typeof t === s ? e : e.substring(0, 500)
              );
          },
          $ = function (e, t) {
            for (var r, n, i, s, u, c, f = 0; f < t.length && !u; ) {
              var d = t[f],
                p = t[f + 1];
              for (r = n = 0; r < d.length && !u && d[r]; )
                if ((u = d[r++].exec(e)))
                  for (i = 0; i < p.length; i++)
                    (c = u[++n]),
                      typeof (s = p[i]) === l && s.length > 0
                        ? 2 === s.length
                          ? typeof s[1] == a
                            ? (this[s[0]] = s[1].call(this, c))
                            : (this[s[0]] = s[1])
                          : 3 === s.length
                          ? typeof s[1] !== a || (s[1].exec && s[1].test)
                            ? (this[s[0]] = c ? c.replace(s[1], s[2]) : void 0)
                            : (this[s[0]] = c
                                ? s[1].call(this, c, s[2])
                                : void 0)
                          : 4 === s.length &&
                            (this[s[0]] = c
                              ? s[3].call(this, c.replace(s[1], s[2]))
                              : void 0)
                        : (this[s] = c || o);
              f += 2;
            }
          },
          Z = function (e, t) {
            for (var r in t)
              if (typeof t[r] === l && t[r].length > 0) {
                for (var n = 0; n < t[r].length; n++)
                  if (V(t[r][n], e)) return "?" === r ? o : r;
              } else if (V(t[r], e)) return "?" === r ? o : r;
            return t.hasOwnProperty("*") ? t["*"] : e;
          },
          K = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2e3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            8.1: "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM",
          },
          J = {
            browser: [
              [/\b(?:crmo|crios)\/([\w\.]+)/i],
              [g, [d, "Chrome"]],
              [/edg(?:e|ios|a)?\/([\w\.]+)/i],
              [g, [d, "Edge"]],
              [
                /(opera mini)\/([-\w\.]+)/i,
                /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i,
                /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i,
              ],
              [d, g],
              [/opios[\/ ]+([\w\.]+)/i],
              [g, [d, R + " Mini"]],
              [/\bop(?:rg)?x\/([\w\.]+)/i],
              [g, [d, R + " GX"]],
              [/\bopr\/([\w\.]+)/i],
              [g, [d, R]],
              [/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i],
              [g, [d, "Baidu"]],
              [
                /(kindle)\/([\w\.]+)/i,
                /(lunascape|maxthon|netfront|jasmine|blazer|sleipnir)[\/ ]?([\w\.]*)/i,
                /(avant|iemobile|slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i,
                /(?:ms|\()(ie) ([\w\.]+)/i,
                /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|duckduckgo|klar|helio)\/([-\w\.]+)/i,
                /(heytap|ovi)browser\/([\d\.]+)/i,
                /(weibo)__([\d\.]+)/i,
              ],
              [d, g],
              [/quark(?:pc)?\/([-\w\.]+)/i],
              [g, [d, "Quark"]],
              [/\bddg\/([\w\.]+)/i],
              [g, [d, "DuckDuckGo"]],
              [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
              [g, [d, "UC" + C]],
              [
                /microm.+\bqbcore\/([\w\.]+)/i,
                /\bqbcore\/([\w\.]+).+microm/i,
                /micromessenger\/([\w\.]+)/i,
              ],
              [g, [d, "WeChat"]],
              [/konqueror\/([\w\.]+)/i],
              [g, [d, "Konqueror"]],
              [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
              [g, [d, "IE"]],
              [/ya(?:search)?browser\/([\w\.]+)/i],
              [g, [d, "Yandex"]],
              [/slbrowser\/([\w\.]+)/i],
              [g, [d, "Smart Lenovo " + C]],
              [/(avast|avg)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1 Secure " + C], g],
              [/\bfocus\/([\w\.]+)/i],
              [g, [d, E + " Focus"]],
              [/\bopt\/([\w\.]+)/i],
              [g, [d, R + " Touch"]],
              [/coc_coc\w+\/([\w\.]+)/i],
              [g, [d, "Coc Coc"]],
              [/dolfin\/([\w\.]+)/i],
              [g, [d, "Dolphin"]],
              [/coast\/([\w\.]+)/i],
              [g, [d, R + " Coast"]],
              [/miuibrowser\/([\w\.]+)/i],
              [g, [d, "MIUI " + C]],
              [/fxios\/([-\w\.]+)/i],
              [g, [d, E]],
              [/\bqihu|(qi?ho?o?|360)browser/i],
              [[d, "360" + L]],
              [/\b(qq)\/([\w\.]+)/i],
              [[d, /(.+)/, "$1Browser"], g],
              [/(oculus|sailfish|huawei|vivo|pico)browser\/([\w\.]+)/i],
              [[d, /(.+)/, "$1" + L], g],
              [/samsungbrowser\/([\w\.]+)/i],
              [g, [d, B + " Internet"]],
              [/(comodo_dragon)\/([\w\.]+)/i],
              [[d, /_/g, " "], g],
              [/metasr[\/ ]?([\d\.]+)/i],
              [g, [d, "Sogou Explorer"]],
              [/(sogou)mo\w+\/([\d\.]+)/i],
              [[d, "Sogou Mobile"], g],
              [
                /(electron)\/([\w\.]+) safari/i,
                /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i,
                /m?(qqbrowser|2345Explorer)[\/ ]?([\w\.]+)/i,
              ],
              [d, g],
              [/(lbbrowser|rekonq)/i, /\[(linkedin)app\]/i],
              [d],
              [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
              [[d, Y], g],
              [
                /(Klarna)\/([\w\.]+)/i,
                /(kakao(?:talk|story))[\/ ]([\w\.]+)/i,
                /(naver)\(.*?(\d+\.[\w\.]+).*\)/i,
                /safari (line)\/([\w\.]+)/i,
                /\b(line)\/([\w\.]+)\/iab/i,
                /(alipay)client\/([\w\.]+)/i,
                /(twitter)(?:and| f.+e\/([\w\.]+))/i,
                /(chromium|instagram|snapchat)[\/ ]([-\w\.]+)/i,
              ],
              [d, g],
              [/\bgsa\/([\w\.]+) .*safari\//i],
              [g, [d, "GSA"]],
              [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
              [g, [d, "TikTok"]],
              [/headlesschrome(?:\/([\w\.]+)| )/i],
              [g, [d, M + " Headless"]],
              [/ wv\).+(chrome)\/([\w\.]+)/i],
              [[d, M + " WebView"], g],
              [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
              [g, [d, "Android " + C]],
              [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
              [d, g],
              [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
              [g, [d, "Mobile Safari"]],
              [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
              [g, d],
              [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
              [
                d,
                [
                  g,
                  Z,
                  {
                    "1.0": "/8",
                    1.2: "/1",
                    1.3: "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/",
                  },
                ],
              ],
              [/(webkit|khtml)\/([\w\.]+)/i],
              [d, g],
              [/(navigator|netscape\d?)\/([-\w\.]+)/i],
              [[d, "Netscape"], g],
              [/(wolvic)\/([\w\.]+)/i],
              [d, g],
              [/mobile vr; rv:([\w\.]+)\).+firefox/i],
              [g, [d, E + " Reality"]],
              [
                /ekiohf.+(flow)\/([\w\.]+)/i,
                /(swiftfox)/i,
                /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror)[\/ ]?([\w\.\+]+)/i,
                /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i,
                /(firefox)\/([\w\.]+)/i,
                /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i,
                /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i,
                /(links) \(([\w\.]+)/i,
              ],
              [d, [g, /_/g, "."]],
              [/(cobalt)\/([\w\.]+)/i],
              [d, [g, /master.|lts./, ""]],
            ],
            cpu: [
              [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
              [[m, "amd64"]],
              [/(ia32(?=;))/i],
              [[m, H]],
              [/((?:i[346]|x)86)[;\)]/i],
              [[m, "ia32"]],
              [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
              [[m, "arm64"]],
              [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
              [[m, "armhf"]],
              [/windows (ce|mobile); ppc;/i],
              [[m, "arm"]],
              [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
              [[m, /ower/, "", H]],
              [/(sun4\w)[;\)]/i],
              [[m, "sparc"]],
              [
                /((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i,
              ],
              [[m, H]],
            ],
            device: [
              [
                /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
              ],
              [f, [h, B], [p, w]],
              [
                /\b((?:s[cgp]h|gt|sm)-(?![lr])\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
                /samsung[- ]((?!sm-[lr])[-\w]+)/i,
                /sec-(sgh\w+)/i,
              ],
              [f, [h, B], [p, b]],
              [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
              [f, [h, S], [p, b]],
              [
                /\((ipad);[-\w\),; ]+apple/i,
                /applecoremedia\/[\w\.]+ \((ipad)/i,
                /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
              ],
              [f, [h, S], [p, w]],
              [/(macintosh);/i],
              [f, [h, S]],
              [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
              [f, [h, j], [p, b]],
              [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
              [f, [h, A], [p, w]],
              [
                /(?:huawei|honor)([-\w ]+)[;\)]/i,
                /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
              ],
              [f, [h, A], [p, b]],
              [
                /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i,
                /\b; (\w+) build\/hm\1/i,
                /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i,
                /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i,
                /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i,
                /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite|pro)?)(?: bui|\))/i,
              ],
              [
                [f, /_/g, " "],
                [h, D],
                [p, b],
              ],
              [
                /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i,
                /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i,
              ],
              [
                [f, /_/g, " "],
                [h, D],
                [p, w],
              ],
              [
                /; (\w+) bui.+ oppo/i,
                /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
              ],
              [f, [h, "OPPO"], [p, b]],
              [/\b(opd2\d{3}a?) bui/i],
              [f, [h, "OPPO"], [p, w]],
              [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
              [f, [h, "Vivo"], [p, b]],
              [/\b(rmx[1-3]\d{3})(?: bui|;|\))/i],
              [f, [h, "Realme"], [p, b]],
              [
                /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
                /\bmot(?:orola)?[- ](\w*)/i,
                /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
              ],
              [f, [h, I], [p, b]],
              [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
              [f, [h, I], [p, w]],
              [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
              [f, [h, "LG"], [p, w]],
              [
                /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
                /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
                /\blg-?([\d\w]+) bui/i,
              ],
              [f, [h, "LG"], [p, b]],
              [
                /(ideatab[-\w ]+)/i,
                /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
              ],
              [f, [h, "Lenovo"], [p, w]],
              [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
              [
                [f, /_/g, " "],
                [h, "Nokia"],
                [p, b],
              ],
              [/(pixel c)\b/i],
              [f, [h, T], [p, w]],
              [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
              [f, [h, T], [p, b]],
              [
                /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
              ],
              [f, [h, F], [p, b]],
              [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
              [
                [f, "Xperia Tablet"],
                [h, F],
                [p, w],
              ],
              [
                / (kb2005|in20[12]5|be20[12][59])\b/i,
                /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
              ],
              [f, [h, "OnePlus"], [p, b]],
              [
                /(alexa)webm/i,
                /(kf[a-z]{2}wi|aeo(?!bc)\w\w)( bui|\))/i,
                /(kf[a-z]+)( bui|\)).+silk\//i,
              ],
              [f, [h, k], [p, w]],
              [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
              [
                [f, /(.+)/g, "Fire Phone $1"],
                [h, k],
                [p, b],
              ],
              [/(playbook);[-\w\),; ]+(rim)/i],
              [f, h, [p, w]],
              [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
              [f, [h, O], [p, b]],
              [
                /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
              ],
              [f, [h, P], [p, w]],
              [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
              [f, [h, P], [p, b]],
              [/(nexus 9)/i],
              [f, [h, "HTC"], [p, w]],
              [
                /(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i,
                /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i,
                /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i,
              ],
              [h, [f, /_/g, " "], [p, b]],
              [
                /droid [\w\.]+; ((?:8[14]9[16]|9(?:0(?:48|60|8[01])|1(?:3[27]|66)|2(?:6[69]|9[56])|466))[gqswx])\w*(\)| bui)/i,
              ],
              [f, [h, "TCL"], [p, w]],
              [/(itel) ((\w+))/i],
              [
                [h, H],
                f,
                [p, Z, { tablet: ["p10001l", "w7001"], "*": "mobile" }],
              ],
              [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
              [f, [h, "Acer"], [p, w]],
              [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
              [f, [h, "Meizu"], [p, b]],
              [/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i],
              [f, [h, "Ulefone"], [p, b]],
              [/droid.+; (a(?:015|06[35]|142p?))/i],
              [f, [h, "Nothing"], [p, b]],
              [
                /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron|infinix|tecno)[-_ ]?([-\w]*)/i,
                /(hp) ([\w ]+\w)/i,
                /(asus)-?(\w+)/i,
                /(microsoft); (lumia[\w ]+)/i,
                /(lenovo)[-_ ]?([-\w]+)/i,
                /(jolla)/i,
                /(oppo) ?([\w ]+) bui/i,
              ],
              [h, f, [p, b]],
              [
                /(kobo)\s(ereader|touch)/i,
                /(archos) (gamepad2?)/i,
                /(hp).+(touchpad(?!.+tablet)|tablet)/i,
                /(kindle)\/([\w\.]+)/i,
                /(nook)[\w ]+build\/(\w+)/i,
                /(dell) (strea[kpr\d ]*[\dko])/i,
                /(le[- ]+pan)[- ]+(\w{1,9}) bui/i,
                /(trinity)[- ]*(t\d{3}) bui/i,
                /(gigaset)[- ]+(q\w{1,9}) bui/i,
                /(vodafone) ([\w ]+)(?:\)| bui)/i,
              ],
              [h, f, [p, w]],
              [/(surface duo)/i],
              [f, [h, z], [p, w]],
              [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
              [f, [h, "Fairphone"], [p, b]],
              [/(u304aa)/i],
              [f, [h, "AT&T"], [p, b]],
              [/\bsie-(\w*)/i],
              [f, [h, "Siemens"], [p, b]],
              [/\b(rct\w+) b/i],
              [f, [h, "RCA"], [p, w]],
              [/\b(venue[\d ]{2,7}) b/i],
              [f, [h, "Dell"], [p, w]],
              [/\b(q(?:mv|ta)\w+) b/i],
              [f, [h, "Verizon"], [p, w]],
              [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
              [f, [h, "Barnes & Noble"], [p, w]],
              [/\b(tm\d{3}\w+) b/i],
              [f, [h, "NuVision"], [p, w]],
              [/\b(k88) b/i],
              [f, [h, "ZTE"], [p, w]],
              [/\b(nx\d{3}j) b/i],
              [f, [h, "ZTE"], [p, b]],
              [/\b(gen\d{3}) b.+49h/i],
              [f, [h, "Swiss"], [p, b]],
              [/\b(zur\d{3}) b/i],
              [f, [h, "Swiss"], [p, w]],
              [/\b((zeki)?tb.*\b) b/i],
              [f, [h, "Zeki"], [p, w]],
              [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
              [[h, "Dragon Touch"], f, [p, w]],
              [/\b(ns-?\w{0,9}) b/i],
              [f, [h, "Insignia"], [p, w]],
              [/\b((nxa|next)-?\w{0,9}) b/i],
              [f, [h, "NextBook"], [p, w]],
              [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
              [[h, "Voice"], f, [p, b]],
              [/\b(lvtel\-)?(v1[12]) b/i],
              [[h, "LvTel"], f, [p, b]],
              [/\b(ph-1) /i],
              [f, [h, "Essential"], [p, b]],
              [/\b(v(100md|700na|7011|917g).*\b) b/i],
              [f, [h, "Envizen"], [p, w]],
              [/\b(trio[-\w\. ]+) b/i],
              [f, [h, "MachSpeed"], [p, w]],
              [/\btu_(1491) b/i],
              [f, [h, "Rotor"], [p, w]],
              [/(shield[\w ]+) b/i],
              [f, [h, "Nvidia"], [p, w]],
              [/(sprint) (\w+)/i],
              [h, f, [p, b]],
              [/(kin\.[onetw]{3})/i],
              [
                [f, /\./g, " "],
                [h, z],
                [p, b],
              ],
              [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
              [f, [h, N], [p, w]],
              [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
              [f, [h, N], [p, b]],
              [/smart-tv.+(samsung)/i],
              [h, [p, y]],
              [/hbbtv.+maple;(\d+)/i],
              [
                [f, /^/, "SmartTV"],
                [h, B],
                [p, y],
              ],
              [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
              [
                [h, "LG"],
                [p, y],
              ],
              [/(apple) ?tv/i],
              [h, [f, S + " TV"], [p, y]],
              [/crkey/i],
              [
                [f, M + "cast"],
                [h, T],
                [p, y],
              ],
              [/droid.+aft(\w+)( bui|\))/i],
              [f, [h, k], [p, y]],
              [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
              [f, [h, j], [p, y]],
              [/(bravia[\w ]+)( bui|\))/i],
              [f, [h, F], [p, y]],
              [/(mitv-\w{5}) bui/i],
              [f, [h, D], [p, y]],
              [/Hbbtv.*(technisat) (.*);/i],
              [h, f, [p, y]],
              [
                /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i,
                /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i,
              ],
              [
                [h, G],
                [f, G],
                [p, y],
              ],
              [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
              [[p, y]],
              [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
              [h, f, [p, v]],
              [/droid.+; (shield) bui/i],
              [f, [h, "Nvidia"], [p, v]],
              [/(playstation [345portablevi]+)/i],
              [f, [h, F], [p, v]],
              [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
              [f, [h, z], [p, v]],
              [/\b(sm-[lr]\d\d[05][fnuw]?s?)\b/i],
              [f, [h, B], [p, x]],
              [/((pebble))app/i],
              [h, f, [p, x]],
              [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
              [f, [h, S], [p, x]],
              [/droid.+; (glass) \d/i],
              [f, [h, T], [p, x]],
              [/droid.+; (wt63?0{2,3})\)/i],
              [f, [h, N], [p, x]],
              [/(quest( \d| pro)?)/i],
              [f, [h, Y], [p, x]],
              [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
              [h, [p, _]],
              [/(aeobc)\b/i],
              [f, [h, k], [p, _]],
              [
                /droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i,
              ],
              [f, [p, b]],
              [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
              [f, [p, w]],
              [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
              [[p, w]],
              [
                /(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i,
              ],
              [[p, b]],
              [/(android[-\w\. ]{0,9});.+buil/i],
              [f, [h, "Generic"]],
            ],
            engine: [
              [/windows.+ edge\/([\w\.]+)/i],
              [g, [d, "EdgeHTML"]],
              [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
              [g, [d, "Blink"]],
              [
                /(presto)\/([\w\.]+)/i,
                /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i,
                /ekioh(flow)\/([\w\.]+)/i,
                /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i,
                /(icab)[\/ ]([23]\.[\d\.]+)/i,
                /\b(libweb)/i,
              ],
              [d, g],
              [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
              [g, d],
            ],
            os: [
              [/microsoft (windows) (vista|xp)/i],
              [d, g],
              [/(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i],
              [d, [g, Z, K]],
              [
                /windows nt 6\.2; (arm)/i,
                /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
                /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
              ],
              [
                [g, Z, K],
                [d, "Windows"],
              ],
              [
                /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i,
                /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
                /cfnetwork\/.+darwin/i,
              ],
              [
                [g, /_/g, "."],
                [d, "iOS"],
              ],
              [
                /(mac os x) ?([\w\. ]*)/i,
                /(macintosh|mac_powerpc\b)(?!.+haiku)/i,
              ],
              [
                [d, q],
                [g, /_/g, "."],
              ],
              [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
              [g, d],
              [
                /(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i,
                /(blackberry)\w*\/([\w\.]*)/i,
                /(tizen|kaios)[\/ ]([\w\.]+)/i,
                /\((series40);/i,
              ],
              [d, g],
              [/\(bb(10);/i],
              [g, [d, O]],
              [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
              [g, [d, "Symbian"]],
              [
                /mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i,
              ],
              [g, [d, E + " OS"]],
              [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
              [g, [d, "webOS"]],
              [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
              [g, [d, "watchOS"]],
              [/crkey\/([\d\.]+)/i],
              [g, [d, M + "cast"]],
              [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
              [[d, X], g],
              [
                /panasonic;(viera)/i,
                /(netrange)mmh/i,
                /(nettv)\/(\d+\.[\w\.]+)/i,
                /(nintendo|playstation) ([wids345portablevuch]+)/i,
                /(xbox); +xbox ([^\);]+)/i,
                /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i,
                /(mint)[\/\(\) ]?(\w*)/i,
                /(mageia|vectorlinux)[; ]/i,
                /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
                /(hurd|linux) ?([\w\.]*)/i,
                /(gnu) ?([\w\.]*)/i,
                /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i,
                /(haiku) (\w+)/i,
              ],
              [d, g],
              [/(sunos) ?([\w\.\d]*)/i],
              [[d, "Solaris"], g],
              [
                /((?:open)?solaris)[-\/ ]?([\w\.]*)/i,
                /(aix) ((\d)(?=\.|\)| )[\w\.])*/i,
                /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i,
                /(unix) ?([\w\.]*)/i,
              ],
              [d, g],
            ],
          },
          Q = function (e, t) {
            if ((typeof e === l && ((t = e), (e = o)), !(this instanceof Q)))
              return new Q(e, t).getResult();
            var r = typeof i !== s && i.navigator ? i.navigator : o,
              n = e || (r && r.userAgent ? r.userAgent : ""),
              v = r && r.userAgentData ? r.userAgentData : o,
              y = t ? U(J, t) : J,
              x = r && r.userAgent == n;
            return (
              (this.getBrowser = function () {
                var e,
                  t = {};
                return (
                  (t[d] = o),
                  (t[g] = o),
                  $.call(t, n, y.browser),
                  (t[c] =
                    typeof (e = t[g]) === u
                      ? e.replace(/[^\d\.]/g, "").split(".")[0]
                      : o),
                  x &&
                    r &&
                    r.brave &&
                    typeof r.brave.isBrave == a &&
                    (t[d] = "Brave"),
                  t
                );
              }),
              (this.getCPU = function () {
                var e = {};
                return (e[m] = o), $.call(e, n, y.cpu), e;
              }),
              (this.getDevice = function () {
                var e = {};
                return (
                  (e[h] = o),
                  (e[f] = o),
                  (e[p] = o),
                  $.call(e, n, y.device),
                  x && !e[p] && v && v.mobile && (e[p] = b),
                  x &&
                    "Macintosh" == e[f] &&
                    r &&
                    typeof r.standalone !== s &&
                    r.maxTouchPoints &&
                    r.maxTouchPoints > 2 &&
                    ((e[f] = "iPad"), (e[p] = w)),
                  e
                );
              }),
              (this.getEngine = function () {
                var e = {};
                return (e[d] = o), (e[g] = o), $.call(e, n, y.engine), e;
              }),
              (this.getOS = function () {
                var e = {};
                return (
                  (e[d] = o),
                  (e[g] = o),
                  $.call(e, n, y.os),
                  x &&
                    !e[d] &&
                    v &&
                    v.platform &&
                    "Unknown" != v.platform &&
                    (e[d] = v.platform
                      .replace(/chrome os/i, X)
                      .replace(/macos/i, q)),
                  e
                );
              }),
              (this.getResult = function () {
                return {
                  ua: this.getUA(),
                  browser: this.getBrowser(),
                  engine: this.getEngine(),
                  os: this.getOS(),
                  device: this.getDevice(),
                  cpu: this.getCPU(),
                };
              }),
              (this.getUA = function () {
                return n;
              }),
              (this.setUA = function (e) {
                return (
                  (n = typeof e === u && e.length > 500 ? G(e, 500) : e), this
                );
              }),
              this.setUA(n),
              this
            );
          };
        (Q.VERSION = "1.0.39"),
          (Q.BROWSER = W([d, g, c])),
          (Q.CPU = W([m])),
          (Q.DEVICE = W([f, h, p, v, b, y, w, x, _])),
          (Q.ENGINE = Q.OS = W([d, g])),
          typeof t !== s
            ? (e.exports && (t = e.exports = Q), (t.UAParser = Q))
            : r.amdO
            ? o !==
                (n = function () {
                  return Q;
                }.call(t, r, t, e)) && (e.exports = n)
            : typeof i !== s && (i.UAParser = Q);
        var ee = typeof i !== s && (i.jQuery || i.Zepto);
        if (ee && !ee.ua) {
          var et = new Q();
          (ee.ua = et.getResult()),
            (ee.ua.get = function () {
              return et.getUA();
            }),
            (ee.ua.set = function (e) {
              et.setUA(e);
              var t = et.getResult();
              for (var r in t) ee.ua[r] = t[r];
            });
        }
      })("object" == typeof window ? window : this);
    },
  },
]);
