(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [931],
  {
    2872: function (e, s, a) {
      Promise.resolve().then(a.bind(a, 404));
    },
    404: function (e, s, a) {
      "use strict";
      a.d(s, {
        default: function () {
          return A;
        },
      });
      var t = a(7437),
        l = a(2265),
        i = a(9582),
        n = a(1204),
        r = a(19),
        o = a(6648),
        c = a(4398);
      let m = "/img/logos/2025/paypalventures.png",
        d = "/img/logos/2025/walletconnect.png",
        x = "/img/logos/2025/naver.png",
        h = "/img/logos/2025/polymarket.png",
        p = "/img/logos/2025/immutable.png",
        u = "/img/logos/2025/polygon.png",
        g = "/img/logos/2025/helium.png";
      function f() {
        let e = (0, l.useRef)(null),
          [s, a] = (0, l.useState)(!1),
          [n, f] = (0, l.useState)(!1);
        return (
          (0, l.useEffect)(() => {
            n || (c.tq && a(!0), f(!0));
          }, [n]),
          (0, r.V)(
            () => {
              s &&
                i.p8.to(".boxes", {
                  duration: 35,
                  ease: "none",
                  x: "-=200vw",
                  repeat: -1,
                });
            },
            { dependencies: [s], scope: e, revertOnUpdate: !0 }
          ),
          (0, t.jsxs)("section", {
            className: "",
            ref: e,
            style: { position: "relative" },
            suppressHydrationWarning: !0,
            children: [
              (0, t.jsxs)("div", {
                id: "logos",
                className:
                  "logos mt-[5rem] md:mt-[10rem] mx-auto max-w-full xl:max-w-[1000px]",
                style: { position: "relative", zIndex: 1 },
                children: [
                  (0, t.jsx)("div", {
                    className: "text-center mb-5 sm:mb-10",
                    children: (0, t.jsxs)("div", {
                      className: "flex justify-center items-center",
                      children: [
                        (0, t.jsx)("div", {
                          className: "trusted-line trusted-line-left",
                        }),
                        (0, t.jsx)("div", {
                          className:
                            "text-center uppercase text-[.5rem] md:text-[.75rem] px-2",
                          children: "MAGIC IS BACKED & TRUSTED BY",
                        }),
                        (0, t.jsx)("div", {
                          className: "trusted-line trusted-line-right",
                        }),
                      ],
                    }),
                  }),
                  s
                    ? (0, t.jsxs)(t.Fragment, {
                        children: [
                          (0, t.jsx)("div", {
                            className: "logos-shadow logos-shadow-left",
                          }),
                          (0, t.jsx)("div", {
                            className: "logos-shadow logos-shadow-right",
                          }),
                        ],
                      })
                    : (0, t.jsx)(t.Fragment, {}),
                  (0, t.jsx)("div", {
                    className: "boxes flex justify-around align-middle",
                    style: { width: s ? "400vw" : "100%" },
                    children: s
                      ? [void 0, void 0].map(() =>
                          (0, t.jsxs)(t.Fragment, {
                            children: [
                              (0, t.jsx)("div", {
                                className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                                children: (0, t.jsx)(o.default, {
                                  src: m,
                                  alt: "Paypal",
                                  width: 465,
                                  height: 71,
                                  className: "w-full h-auto max-h-[40px]",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                                children: (0, t.jsx)(o.default, {
                                  src: d,
                                  alt: "WalletConnect",
                                  width: 747,
                                  height: 128,
                                  className: "w-full h-auto max-h-[40px]",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                                children: (0, t.jsx)(o.default, {
                                  src: h,
                                  alt: "Polymarket",
                                  width: 721,
                                  height: 219,
                                  className: "w-full h-auto max-h-[40px]",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                                children: (0, t.jsx)(o.default, {
                                  src: x,
                                  alt: "Naver",
                                  width: 482,
                                  height: 128,
                                  className: "w-full h-auto max-h-[40px]",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                                children: (0, t.jsx)(o.default, {
                                  src: p,
                                  alt: "Immutable",
                                  width: 506,
                                  height: 128,
                                  className: "w-full h-auto max-h-[40px]",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                                children: (0, t.jsx)(o.default, {
                                  src: u,
                                  alt: "Polygon",
                                  width: 500,
                                  height: 116,
                                  className: "w-full h-auto max-h-[40px]",
                                }),
                              }),
                              (0, t.jsx)("div", {
                                className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                                children: (0, t.jsx)(o.default, {
                                  src: g,
                                  alt: "Helium",
                                  width: 538,
                                  height: 176,
                                  className: "w-full h-auto max-h-[40px]",
                                }),
                              }),
                            ],
                          })
                        )
                      : (0, t.jsxs)(t.Fragment, {
                          children: [
                            (0, t.jsx)("div", {
                              className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                              children: (0, t.jsx)(o.default, {
                                src: m,
                                alt: "Paypal",
                                width: 465,
                                height: 71,
                                className: "w-full h-auto max-h-[40px]",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                              children: (0, t.jsx)(o.default, {
                                src: d,
                                alt: "WalletConnect",
                                width: 747,
                                height: 128,
                                className: "w-full h-auto max-h-[40px]",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                              children: (0, t.jsx)(o.default, {
                                src: h,
                                alt: "Polymarket",
                                width: 721,
                                height: 219,
                                className: "w-full h-auto max-h-[40px]",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                              children: (0, t.jsx)(o.default, {
                                src: x,
                                alt: "Naver",
                                width: 482,
                                height: 128,
                                className: "w-full h-auto max-h-[40px]",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                              children: (0, t.jsx)(o.default, {
                                src: p,
                                alt: "Immutable",
                                width: 506,
                                height: 128,
                                className: "w-full h-auto max-h-[40px]",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                              children: (0, t.jsx)(o.default, {
                                src: u,
                                alt: "Polygon",
                                width: 500,
                                height: 116,
                                className: "w-full h-auto max-h-[40px]",
                              }),
                            }),
                            (0, t.jsx)("div", {
                              className: "logo px-2 md:px-4 lg:px-6 xl:px-6",
                              children: (0, t.jsx)(o.default, {
                                src: g,
                                alt: "Helium",
                                width: 538,
                                height: 176,
                                className: "w-full h-auto max-h-[40px]",
                              }),
                            }),
                          ],
                        }),
                  }),
                ],
              }),
              (0, t.jsxs)("section", {
                className:
                  "flex justify-center gap-2 mt-3 sm:mt-8 mb-[5rem] md:mb-[10rem]",
                children: [
                  (0, t.jsx)("div", {
                    className: "max-w-[200px]",
                    children: (0, t.jsx)("img", {
                      src: "assets.magiclabs.com/assets/angel-naval.png",
                      alt: "Naval Ravikant",
                    }),
                  }),
                  (0, t.jsx)("div", {
                    className: "max-w-[200px]",
                    children: (0, t.jsx)("img", {
                      src: "assets.magiclabs.com/assets/angel-balaji.png",
                      alt: "Balaji Srinivasan",
                    }),
                  }),
                ],
              }),
            ],
          })
        );
      }
      let j = "/img/home-2025/icoNewWindow.svg",
        w = "/img/home-2025/icoNewWindowBlk.svg",
        N = "/img/home-2025/icoDiscord.png",
        b = "/img/home-2025/icoX.png",
        v = "assets.magiclabs.com/assets/Guardrails-mobile.png",
        y = "assets.magiclabs.com/assets/Verifiable-mobile.png",
        k = "assets.magiclabs.com/assets/Reputation-mobile.png",
        _ =
          "assets.magiclabs.com/assets/Magic_Newton_Genesis_Horizontal_720p.mp4",
        B = "assets.magiclabs.com/assets/472x592.mp4",
        E = "assets.magiclabs.com/assets/619x592.mp4";
      function A() {
        let e = (0, l.useRef)(null),
          [s, a] = (0, l.useState)(!1),
          [m, d] = (0, l.useState)(""),
          [x, h] = (0, l.useState)(""),
          [p, u] = (0, l.useState)(!1),
          [g, A] = (0, l.useState)(""),
          [P, S] = (0, l.useState)(""),
          [I, M] = (0, l.useState)(""),
          [C, L] = (0, l.useState)(""),
          [G, D] = (0, l.useState)(!0),
          R = (0, l.useRef)(null),
          W = (0, l.useRef)(null),
          z = (0, l.useRef)(null);
        return (
          (0, l.useEffect)(() => {
            D(window.innerWidth >= 1920);
          }, []),
          (0, l.useEffect)(() => {
            G ? A(E) : A(B);
          }, [G]),
          (0, l.useEffect)(() => {
            if (W && "" !== m && s) {
              var e;
              null === (e = W.current) || void 0 === e || e.play();
            }
          }, [W, m, s]),
          (0, l.useEffect)(() => {
            if (z && E && B && s) {
              var e;
              null === (e = z.current) || void 0 === e || e.play();
            }
          }, [z, E, B, s]),
          (0, l.useEffect)(() => {
            s || a(!0);
          }, [s]),
          (0, l.useEffect)(() => {
            s &&
              (c.tq &&
                (d(
                  "assets.magiclabs.com/assets/Magic_Newton_Genesis_Launch_Vertical_720p.mp4"
                ),
                h(
                  "assets.magiclabs.com/assets/Magic_Newton_Genesis_Launch_Thumbnail_Verical.jpg"
                ),
                S(v),
                M(y),
                L(k)),
              c.Em && (d(_), h(_), S(v), M(y), L(k)),
              c.nI &&
                (d(_),
                h(
                  "assets.magiclabs.com/assets/Magic_Newton_Genesis_Thumbnail_Horizontal.jpg"
                ),
                S("assets.magiclabs.com/assets/Guardrails-Desktop.png"),
                M("assets.magiclabs.com/assets/Verifiable-Desktop.png"),
                L("assets.magiclabs.com/assets/Reputation-Desktop.png")));
          }, [c.tq, c.Em, c.nI, s]),
          (0, l.useEffect)(() => {
            if (!p) {
              let e = !1,
                s = () => {
                  e ||
                    ((e = !0),
                    window.removeEventListener("scroll", a),
                    u(!0),
                    console.log("timer expired"));
                },
                a = () => {
                  clearTimeout(t), s();
                },
                t = setTimeout(s, 500);
              return (
                window.addEventListener("scroll", a, { once: !0 }),
                () => {
                  clearTimeout(t), window.removeEventListener("scroll", a);
                }
              );
            }
          }, [p]),
          (0, r.V)(
            () => {
              if (
                window.matchMedia("(prefers-reduced-motion: reduce)").matches
              ) {
                i.p8.set(
                  ".genesis-launch-panel-1, .genesis-launch-panel-2, .feature-card",
                  { clearProps: "all" }
                );
                return;
              }
              i.p8.registerPlugin(n.i),
                n.i.defaults({ markers: !1 }),
                p
                  ? i.p8
                      .timeline({
                        defaults: { ease: "power4.out", duration: 1 },
                      })
                      .to(".genesis-launch-panel-1", {
                        transform: "translateY(0px)",
                        opacity: 1,
                      })
                      .to(".genesis-launch-panel-2", {
                        transform: "translateY(0px)",
                        opacity: 1,
                        delay: -0.75,
                      })
                  : i.p8
                      .timeline({
                        defaults: { ease: "power4.out" },
                        scrollTrigger: {
                          trigger: ".genesis-launch-panel",
                          pin: !1,
                          start: "top 100%",
                          end: "top center",
                          scrub: 0,
                        },
                      })
                      .to(".genesis-launch-panel-1", {
                        transform: "translateY(0px)",
                        opacity: 1,
                      })
                      .to(".genesis-launch-panel-2", {
                        transform: "translateY(0px)",
                        opacity: 1,
                        delay: -0.75,
                      }),
                document.querySelectorAll(".feature-card").forEach((e) => {
                  i.p8.timeline({
                    defaults: { ease: "none" },
                    scrollTrigger: {
                      trigger: e,
                      pin: !1,
                      start: "top center",
                      end: "top top",
                      scrub: 0,
                      toggleClass: { targets: e, className: "active" },
                    },
                  });
                });
            },
            { dependencies: [s, p], scope: e, revertOnUpdate: !0 }
          ),
          (0, t.jsxs)("main", {
            className: "pageContainer position-relative w-full pb-[8rem]",
            ref: e,
            suppressHydrationWarning: !0,
            children: [
              (0, t.jsxs)("div", {
                className:
                  "pageContainer-video-background opacity-1 video-container",
                style: { pointerEvents: "none" },
                children: [
                  (0, t.jsx)("div", {
                    className: "pageContainer-video-gradient",
                  }),
                  (0, t.jsx)("div", {
                    className: "pageContainer-video-radial-gradient",
                  }),
                  "" !== m && "" !== x
                    ? (0, t.jsxs)("video", {
                        className: "",
                        ref: W,
                        poster: "",
                        controls: !1,
                        autoPlay: !1,
                        loop: !0,
                        muted: !0,
                        playsInline: !0,
                        children: [
                          (0, t.jsx)("source", {
                            src: "assets.magiclabs.com/assets/1440x800.mp4",
                          }),
                          "Your browser does not support the video tag.",
                        ],
                      })
                    : (0, t.jsx)(t.Fragment, {}),
                ],
              }),
              (0, t.jsxs)("section", {
                className: "px-[1rem] relative z-10",
                children: [
                  (0, t.jsxs)("section", {
                    className:
                      "hero min-h-[90dvh] flex flex-col justify-center ",
                    children: [
                      (0, t.jsx)("div", {
                        className:
                          "my-[4rem] w-[3rem] mx-auto justify-self-start",
                        children: (0, t.jsx)(o.default, {
                          src: "/img/home-2025/newton-logo.svg",
                          alt: "Newton",
                          width: 42,
                          height: 48,
                          layout: "responsive",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className: "text-center mt-auto",
                        children: [
                          (0, t.jsx)("h1", {
                            className: "mb-[1.75rem]",
                            children: "Newton sets you free.",
                          }),
                          (0, t.jsx)("h3", {
                            className: "text-[#9A9A9A]",
                            children:
                              "Simpler crypto UX with verifiable AI agents.",
                          }),
                        ],
                      }),
                      (0, t.jsx)("div", {
                        className: "flex justify-center mt-[2.5rem]",
                        children: (0, t.jsxs)("a", {
                          href: "https://newton.xyz",
                          className: "button-shiny",
                          target: "_blank",
                          "aria-label": "Launch Newton.xyz",
                          children: [
                            "Launch Newton.xyz ",
                            (0, t.jsx)(o.default, {
                              src: j,
                              alt: "New Window",
                              width: 16,
                              height: 16,
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "flex justify-center gap-2 mt-[2.5rem] mb-auto pb-[2.5rem]",
                        children: [
                          (0, t.jsx)("a", {
                            href: "https://x.com/MagicNewton",
                            target: "_blank",
                            className: "button-shiny flat-border",
                            "aria-label": "Visit Newton's X page",
                            children: (0, t.jsx)(o.default, {
                              src: b,
                              alt: "X",
                              width: 16,
                              height: 16,
                            }),
                          }),
                          (0, t.jsx)("a", {
                            href: "https://discord.gg/magicnewton",
                            target: "_blank",
                            className: "button-shiny flat-border",
                            "aria-label": "Join Newton's Discord server",
                            children: (0, t.jsx)(o.default, {
                              src: N,
                              alt: "Discord",
                              width: 16,
                              height: 16,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("section", {
                    className:
                      "flex flex-col md:flex-row justify-center gap-6 mt-[0rem] mx-auto max-w-[1000px] " +
                      (s ? "opacity-100" : "opacity-0"),
                    children: [
                      (0, t.jsxs)("div", {
                        className:
                          "genesis-launch-panel genesis-launch-panel-1 content-box w-full md:w-[50%] flex flex-col",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "text-[#77767A] ",
                            children: "Crypto UX is broken.",
                          }),
                          (0, t.jsx)("h2", {
                            className: "mb-[1.5rem]",
                            children: "Newton is here to fix it.",
                          }),
                          (0, t.jsxs)("div", {
                            className: "text-[#B6B4BA] flex flex-col gap-5",
                            children: [
                              (0, t.jsx)("p", {
                                children:
                                  "Magic Newton is designed to put users first by automating crypto and putting your financial freedom on autopilot. You can set Newton to do all the work for you, executing the strategies you choose 24/7.",
                              }),
                              (0, t.jsx)("p", {
                                children:
                                  "Join our Genesis launch to try Newton on Base ahead of the upcoming debut of Newton Protocol.",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "mt-auto",
                            children: (0, t.jsx)("div", {
                              className: "w-auto mt-[2rem]",
                              children: (0, t.jsxs)("a", {
                                href: "https://newton.xyz",
                                target: "_blank",
                                className: "button-white",
                                "aria-label": "Launch Newton.xyz",
                                children: [
                                  "Launch Newton.xyz ",
                                  (0, t.jsx)(o.default, {
                                    src: w,
                                    alt: "New Window",
                                    width: 16,
                                    height: 16,
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "genesis-launch-panel genesis-launch-panel-2 content-box video-container w-full md:w-[50%]",
                        style: { padding: 0 },
                        children: [
                          G
                            ? (0, t.jsx)("img", {
                                src: "/img/home-2025/genesis-video-placeholder-desktop.png",
                                alt: "UI",
                              })
                            : (0, t.jsx)("img", {
                                src: "/img/home-2025/genesis-video-placeholder-mobile.png",
                                alt: "UI",
                              }),
                          g
                            ? (0, t.jsxs)("video", {
                                className: "",
                                ref: z,
                                poster: "",
                                controls: !1,
                                autoPlay: !1,
                                loop: !0,
                                muted: !0,
                                playsInline: !0,
                                children: [
                                  (0, t.jsx)("source", { src: g }),
                                  "Your browser does not support the video tag.",
                                ],
                              })
                            : (0, t.jsx)(t.Fragment, {}),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("section", {
                    children: [
                      (0, t.jsxs)("section", {
                        className: "text-center my-[5rem] md:my-[10rem]",
                        children: [
                          (0, t.jsx)("h2", {
                            className: "opacity-80 text-[#77767A]",
                            children: "AI can't be trusted.",
                          }),
                          (0, t.jsx)("h2", {
                            className: "mb-[2.5rem]",
                            children: "Newton gives it verifiable guardrails.",
                          }),
                          (0, t.jsx)("p", {
                            className: "text-[#B6B4BA] max-w-[380px] mx-auto",
                            children:
                              "Newton Protocol will establish a secure rollup for AI-driven strategies, automated trading and a marketplace for AI developers—built for trust.",
                          }),
                        ],
                      }),
                      (0, t.jsx)("section", {
                        className:
                          "feature-card feature-card-guardrails max-w-[600px] mx-auto",
                        children: (0, t.jsxs)("div", {
                          className:
                            "content-box flex flex-col gap-6 bg-[#19191a]",
                          children: [
                            (0, t.jsx)("h4", { children: "Guardrails" }),
                            (0, t.jsx)("p", {
                              className: "text-[#B6B4BA]",
                              children:
                                "Guardrails give you proactive control so that AI agents follow your permissions.",
                            }),
                            (0, t.jsx)("img", { src: P, alt: "Guardrails" }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("section", {
                        className:
                          "feature-card feature-card-verifiable max-w-[600px] mx-auto mt-[2rem]",
                        children: (0, t.jsxs)("div", {
                          className:
                            "content-box flex flex-col gap-6 bg-[#19191a]",
                          children: [
                            (0, t.jsx)("h4", { children: "Verifiable" }),
                            (0, t.jsx)("p", {
                              className: "text-[#B6B4BA]",
                              children:
                                "Offchain automations can be audited and enforced using zero-knowledge proofs and trusted execution environments (TEEs), bringing offchain automation onchain, like Chainlink does for data.",
                            }),
                            (0, t.jsx)("img", { src: I, alt: "Guardrails" }),
                          ],
                        }),
                      }),
                      (0, t.jsx)("section", {
                        className:
                          "feature-card feature-card-reputation max-w-[600px] mx-auto mt-[2rem]",
                        children: (0, t.jsxs)("div", {
                          className:
                            "content-box flex flex-col gap-6 bg-[#19191a]",
                          children: [
                            (0, t.jsx)("h4", { children: "Reputation" }),
                            (0, t.jsx)("p", {
                              className: "text-[#B6B4BA]",
                              children:
                                "To ensure agents act in your best interests, Newton will implement a reputation system that enforces trust through incentive alignment.",
                            }),
                            (0, t.jsx)("img", { src: C, alt: "Guardrails" }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, t.jsxs)("section", {
                    className:
                      "flex flex-col-reverse md:flex-row justify-center gap-6 mt-[5rem] md:mt-[10rem] mx-auto max-w-[1000px]",
                    children: [
                      (0, t.jsx)("div", {
                        className: "w-full md:w-[50%]",
                        children: (0, t.jsx)("img", {
                          src: "assets.magiclabs.com/assets/magic-panel.png",
                          alt: "Magic",
                        }),
                      }),
                      (0, t.jsxs)("div", {
                        className:
                          "content-box w-full md:w-[50%] flex flex-col",
                        children: [
                          (0, t.jsxs)("h2", {
                            className:
                              "text-[#77767A] mb-[1.5rem] sm:mb-[.5rem]",
                            children: [
                              "From the pioneers of",
                              (0, t.jsx)("br", {
                                className: "hidden sm:inline",
                              }),
                              " simpler crypto UX,",
                              " ",
                              (0, t.jsx)("span", {
                                className: "text-white sm:hidden",
                                children: "Magic Labs.",
                              }),
                            ],
                          }),
                          (0, t.jsx)("h2", {
                            className: "mb-[1.5rem] hidden sm:block",
                            children: "Magic Labs.",
                          }),
                          (0, t.jsxs)("div", {
                            className: "text-[#B6B4BA] flex flex-col gap-5",
                            children: [
                              (0, t.jsx)("p", {
                                children:
                                  "Magic created embedded wallets in 2018. Our SDK is used by applications like Polymarket, WalletConnect, Helium, Forbes and Naver to scale and succeed.",
                              }),
                              (0, t.jsx)("p", {
                                children:
                                  "Magic has raised approximately $90 million from investors including Placeholder, PayPal Ventures, DCG, Volt Capital, Polygon, Naval Ravikant, Balaji Srinivasan and others.",
                              }),
                            ],
                          }),
                          (0, t.jsx)("div", {
                            className: "mt-auto",
                            children: (0, t.jsx)("div", {
                              className: "w-auto mt-[1.5rem]",
                              children: (0, t.jsxs)("a", {
                                href: "https://magic.link",
                                className: "button-white",
                                "aria-label": "Learn more about Magic Labs",
                                children: [
                                  "More about magic labs ",
                                  (0, t.jsx)(o.default, {
                                    src: w,
                                    alt: "New Window",
                                    width: 16,
                                    height: 16,
                                  }),
                                ],
                              }),
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsx)(f, {}),
                  (0, t.jsxs)("section", {
                    children: [
                      (0, t.jsx)("section", {
                        className:
                          "flex flex-col md:flex-row justify-center gap-6 mt-[0rem] mx-auto max-w-[1000px]",
                        children: (0, t.jsx)("div", {
                          className: "w-full",
                          style: {
                            border: "1px solid #4E4D52",
                            borderRadius: "32px",
                            overflow: "hidden",
                          },
                          children:
                            "" !== m && "" !== x
                              ? (0, t.jsxs)("video", {
                                  className: "",
                                  ref: R,
                                  poster: x,
                                  controls: !0,
                                  autoPlay: !1,
                                  loop: !0,
                                  playsInline: !0,
                                  children: [
                                    (0, t.jsx)("source", { src: m }),
                                    "Your browser does not support the video tag.",
                                  ],
                                })
                              : (0, t.jsx)(t.Fragment, {}),
                        }),
                      }),
                      (0, t.jsx)("section", {
                        className: "flex justify-center mt-[2.5rem]",
                        children: (0, t.jsxs)("a", {
                          href: "https://magicnewton.com/portal",
                          className: "button-shiny",
                          target: "_blank",
                          "aria-label": "Launch Newton Portal",
                          children: [
                            "Looking for Portal? ",
                            (0, t.jsx)(o.default, {
                              src: j,
                              alt: "New Window",
                              width: 16,
                              height: 16,
                            }),
                          ],
                        }),
                      }),
                      (0, t.jsxs)("section", {
                        className: "flex justify-center gap-2 mt-[2.5rem]",
                        children: [
                          (0, t.jsx)("a", {
                            href: "https://x.com/MagicNewton",
                            target: "_blank",
                            className: "button-shiny flat-border",
                            "aria-label": "Visit Newton's X page",
                            children: (0, t.jsx)(o.default, {
                              src: b,
                              alt: "X",
                              width: 16,
                              height: 16,
                            }),
                          }),
                          (0, t.jsx)("a", {
                            href: "https://discord.gg/magicnewton",
                            target: "_blank",
                            className: "button-shiny flat-border",
                            "aria-label": "Join Newton's Discord server",
                            children: (0, t.jsx)(o.default, {
                              src: N,
                              alt: "Discord",
                              width: 16,
                              height: 16,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, t.jsxs)("footer", {
                    className:
                      "mt-[8rem] md:mt-[16rem] max-w-[450px] mx-auto flex flex-col align-middle justify-center text-center",
                    children: [
                      (0, t.jsx)("div", {
                        className: "mx-auto mb-[1rem]",
                        children: (0, t.jsx)(o.default, {
                          src: "/img/home-2025/newton-logo-full.png",
                          alt: "Newton",
                          width: 166,
                          height: 34,
                        }),
                      }),
                      (0, t.jsx)("div", {
                        className: "text-[.75rem] text-[#B6B4BA]",
                        children: (0, t.jsxs)("p", {
                          children: [
                            "\xa9 2025 Magic Newton, Inc. 548 Market St., PMB 31387",
                            (0, t.jsx)("br", {}),
                            " San Francisco, California 94104-5401",
                          ],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          })
        );
      }
    },
  },
  function (e) {
    e.O(0, [922, 717, 971, 23, 744], function () {
      return e((e.s = 2872));
    }),
      (_N_E = e.O());
  },
]);
