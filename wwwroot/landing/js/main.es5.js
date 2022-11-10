"use strict";

!(function () {
  "use strict";var e = document.getElementsByClassName("accordion-header");function t(e, t) {
    e.classList.add("is-active"), t.style.maxHeight = t.scrollHeight + "px";
  }function n(e, t) {
    e.classList.remove("is-active"), t.style.maxHeight = null;
  }if (e.length > 0) {
    var _loop = function (i) {
      var s = e[i],
          a = s.parentNode,
          l = s.nextElementSibling;a.classList.contains("is-active") && t(a, l), s.addEventListener("click", function () {
        a.classList.contains("is-active") ? n(a, l) : t(a, l);
      });
    };

    for (var i = 0; i < e.length; i++) {
      _loop(i);
    }
  }
})(), (function () {
  "use strict";var e = { touchStartX: 0, touchEndX: 0, minSwipePixels: 30, detectionZone: void 0, swipeCallback: function swipeCallback() {}, init: function init(t, n) {
      e.swipeCallback = n, t.addEventListener("touchstart", function (t) {
        e.touchStartX = t.changedTouches[0].screenX;
      }, !1), t.addEventListener("touchend", function (t) {
        e.touchEndX = t.changedTouches[0].screenX, e.handleSwipeGesture();
      }, !1);
    }, handleSwipeGesture: function handleSwipeGesture() {
      var t = undefined,
          n = undefined;e.touchEndX <= e.touchStartX && (n = e.touchStartX - e.touchEndX, t = "left"), e.touchEndX >= e.touchStartX && (n = e.touchEndX - e.touchStartX, t = "right"), n > e.minSwipePixels && "undefined" !== t && e.swipe(t, n);
    }, swipe: function swipe(t, n) {
      var i = {};i.direction = t, i.movedPixels = n, e.swipeCallback(i);
    } };var t = document.getElementsByClassName("carousel-items");function n(e, t) {
    void 0 === t && (t = "next");var n = e.getElementsByClassName("carousel-item is-active")[0],
        i = "next" === t ? n.nextElementSibling : n.previousElementSibling,
        s = n.getAttribute("data-carousel"),
        a = e.parentNode.getElementsByClassName("carousel-bullet")[s],
        l = "next" === t ? a.nextElementSibling : a.previousElementSibling;n.classList.remove("is-active"), a.classList.remove("is-active"), i ? (i.classList.add("is-active"), l.classList.add("is-active")) : "next" === t ? (e.firstElementChild.classList.add("is-active"), e.parentNode.getElementsByClassName("carousel-bullets")[0].firstElementChild.classList.add("is-active")) : (e.lastElementChild.classList.add("is-active"), e.parentNode.getElementsByClassName("carousel-bullets")[0].lastElementChild.classList.add("is-active"));
  }function i(e, t) {
    var n = undefined,
        i = 0;for (var _e = 0; _e < t.length; _e++) {
      t[0].parentNode.style.minHeight = i + "px", t[_e].classList.add("is-loading"), n = t[_e].offsetHeight, t[_e].classList.remove("is-loading"), n > i && (i = n);
    }t[0].parentNode.style.minHeight = i + "px";
  }function s(e) {
    e && clearInterval(e);
  }if (t.length > 0) {
    var _loop2 = function (a) {
      var l = t[a],
          c = l.getElementsByClassName("carousel-item"),
          r = 0,
          o = l.getAttribute("data-autorotate");var d = document.createElement("div");d.className = "carousel-bullets", l.parentNode.insertBefore(d, l.nextSibling);for (var _e2 = 0; _e2 < c.length; _e2++) {
        c[_e2].setAttribute("data-carousel", _e2), c[_e2].classList.contains("is-active") && (r = _e2);var _t = document.createElement("button");_t.className = "carousel-bullet", _t.setAttribute("data-bullet", _e2), l.parentNode.getElementsByClassName("carousel-bullets")[0].appendChild(_t);
      }c[r].classList.add("is-active");var u = l.parentNode.getElementsByClassName("carousel-bullet");u[r].classList.add("is-active"), i(0, c), window.addEventListener("resize", function () {
        i(0, c);
      });var m = !1;o && (m = setInterval(function () {
        n(l, "next");
      }, o));
      var _loop3 = function (_e3) {
        var t = u[_e3];t.addEventListener("click", function (e) {
          if ((e.preventDefault(), t.classList.contains("is-active"))) return;for (var _e4 = 0; _e4 < u.length; _e4++) {
            u[_e4].classList.remove("is-active");
          }for (var _e5 = 0; _e5 < c.length; _e5++) {
            c[_e5].classList.remove("is-active");
          }var n = this.getAttribute("data-bullet");c[n].classList.add("is-active"), this.classList.add("is-active"), s(m);
        });
      };

      for (var _e3 = 0; _e3 < u.length; _e3++) {
        _loop3(_e3);
      }e.init(l, function (e) {
        "left" === e.direction ? n(l, "next") : "right" === e.direction && n(l, "prev"), s(m);
      });
    };

    for (var a = 0; a < t.length; a++) {
      _loop2(a);
    }
  }
})(), (function () {
  "use strict";document.documentElement.classList.remove("no-js"), document.documentElement.classList.add("js"), window.addEventListener("load", function () {
    document.body.classList.add("is-loaded");
  });
})(), (function () {
  "use strict";var e = document.getElementById("header-nav-toggle"),
      t = document.getElementById("header-nav");e && (e.addEventListener("click", function () {
    document.body.classList.toggle("off-nav-is-active"), t.classList.toggle("is-active"), t.style.maxHeight ? t.style.maxHeight = null : t.style.maxHeight = t.scrollHeight + "px", "true" === this.getAttribute("aria-expanded") ? this.setAttribute("aria-expanded", "false") : this.setAttribute("aria-expanded", "true");
  }), document.addEventListener("click", function (n) {
    n.target === t || n.target === e || t.contains(n.target) || (document.body.classList.remove("off-nav-is-active"), t.classList.remove("is-active"), t.style.maxHeight = null, e.setAttribute("aria-expanded", "false"));
  }));
})(), (function () {
  "use strict";var e = document.getElementsByClassName("modal"),
      t = document.getElementsByClassName("modal-trigger");function n() {
    document.body.classList.remove("modal-is-active");for (var _t2 = 0; _t2 < e.length; _t2++) {
      e[_t2].classList.remove("is-active");
    }
  }if (e.length > 0 && t.length > 0) {
    var _loop4 = function (_e6) {
      var n = t[_e6],
          i = document.getElementById(n.getAttribute("aria-controls"));i && (n.hasAttribute("data-video") && (null !== i.querySelector("iframe") ? i.querySelector("iframe").setAttribute("src", n.getAttribute("data-video")) : null !== i.querySelector("video") && i.querySelector("video").setAttribute("src", n.getAttribute("data-video"))), n.addEventListener("click", function (e) {
        var t;e.preventDefault(), n.hasAttribute("aria-controls") && (t = i) && (document.body.classList.add("modal-is-active"), t.classList.add("is-active"));
      }));
    };

    for (var _e6 = 0; _e6 < t.length; _e6++) {
      _loop4(_e6);
    }
  }document.addEventListener("click", function (e) {
    (e.target.classList.contains("modal") || e.target.classList.contains("modal-close-trigger")) && (e.preventDefault(), n());
  }), document.addEventListener("keydown", function (e) {
    27 === (e || window.event).keyCode && n();
  });
})(), (function () {
  "use strict";var e = document.querySelectorAll(".pricing-slider");if (e.length > 0) {
    var _loop5 = function (n) {
      var i = e[n],
          s = { el: i.querySelector("input") };s.data = JSON.parse(s.el.getAttribute("data-price-input")), s.currentValEl = i.querySelector(".pricing-slider-value"), s.thumbSize = parseInt(window.getComputedStyle(s.currentValEl).getPropertyValue("--thumb-size"), 10);var a = i.parentNode.querySelectorAll(".pricing-item-price"),
          l = [];for (var _e7 = 0; _e7 < a.length; _e7++) {
        var _t3 = a[_e7],
            _n = {};_n.currency = _t3.parentNode.querySelector(".pricing-item-price-currency"), _n.amount = _t3.parentNode.querySelector(".pricing-item-price-amount"), _n.after = _t3.parentNode.querySelector(".pricing-item-price-after"), _n.data = JSON.parse(_t3.getAttribute("data-price-output")), l.push(_n);
      }s.el.setAttribute("min", 0), s.el.setAttribute("max", Object.keys(s.data).length - 1), !s.el.getAttribute("value") && s.el.setAttribute("value", 0), t(s, l), window.addEventListener("input", function () {
        t(s, l);
      });
    };

    for (var n = 0; n < e.length; n++) {
      _loop5(n);
    }
  }function t(e, t) {
    e.currentValEl && (e.currentValEl.innerHTML = e.data[e.el.value]);for (var _n2 = 0; _n2 < t.length; _n2++) {
      var i = t[_n2];i.currency && (i.currency.innerHTML = i.data[e.el.value][0]), i.amount && (i.amount.innerHTML = i.data[e.el.value][1]), i.after && (i.after.innerHTML = i.data[e.el.value][2]);
    }!(function (e) {
      var t = e.el.value / e.el.max,
          n = e.thumbSize * t,
          i = (e.thumbSize - e.currentValEl.clientWidth) / 2;e.currentValEl.style.left = e.el.clientWidth * t - n + i + "px";
    })(e);
  }
})(), (function () {
  "use strict";var e = document.querySelectorAll(".pricing-switcher");if (e.length > 0) {
    var _loop6 = function (n) {
      var i = e[n],
          s = i.querySelector("input"),
          a = i.parentNode.querySelectorAll(".pricing-item-price"),
          l = [];for (var _e8 = 0; _e8 < a.length; _e8++) {
        var _t4 = a[_e8],
            _n3 = {};_n3.currency = _t4.parentNode.querySelector(".pricing-item-price-currency"), _n3.amount = _t4.parentNode.querySelector(".pricing-item-price-amount"), _n3.after = _t4.parentNode.querySelector(".pricing-item-price-after"), _n3.data = JSON.parse(_t4.getAttribute("data-price-output")), l.push(_n3);
      }t(s, l), window.addEventListener("change", function () {
        t(s, l);
      });
    };

    for (var n = 0; n < e.length; n++) {
      _loop6(n);
    }
  }function t(e, t) {
    for (var _n4 = 0; _n4 < t.length; _n4++) {
      var i = t[_n4],
          s = e.checked ? 1 : 0;i.currency && (i.currency.innerHTML = i.data[s][0]), i.amount && (i.amount.innerHTML = i.data[s][1]), i.after && (i.after.innerHTML = i.data[s][2]);
    }
  }
})(), (function () {
  "use strict";var e = document.querySelectorAll("[class*=reveal-]");var t = window.innerHeight;function n(e, t) {
    var n = 0;return function () {
      var i = new Date().getTime();if (!(i - n < e)) return n = i, t.apply(void 0, arguments);
    };
  }function i() {
    var _loop7 = function (_i) {
      var s = e[_i],
          a = s.getAttribute("data-reveal-delay"),
          l = s.getAttribute("data-reveal-offset") ? s.getAttribute("data-reveal-offset") : "200",
          c = s.getAttribute("data-reveal-container") ? s.closest(s.getAttribute("data-reveal-container")) : s;n = l, c.getBoundingClientRect().top <= t - n && !s.classList.contains("is-revealed") && (a && 0 !== a ? setTimeout(function () {
        s.classList.add("is-revealed");
      }, a) : s.classList.add("is-revealed"));
    };

    for (var _i = 0; _i < e.length; _i++) {
      _loop7(_i);
    }var n;!(function () {
      if (e.length > document.querySelectorAll("[class*=reveal-].is-revealed").length) return;window.removeEventListener("load", i), window.removeEventListener("scroll", s), window.removeEventListener("resize", a);
    })();
  }function s() {
    n(30, i());
  }function a() {
    t = window.innerHeight, n(30, i());
  }e.length > 0 && document.body.classList.contains("has-animations") && (window.addEventListener("load", i), window.addEventListener("scroll", s), window.addEventListener("resize", a));
})(), (function () {
  "use strict";var e = document.getElementsByClassName("smooth-scroll"),
      t = function t(e, n, i, s, a) {
    var l = n - e;var c = l / i;var r = (function (e) {
      return e < .5 ? 2 * e * e : (4 - 2 * e) * e - 1;
    })(c = Math.min(c, 1));window.scroll(0, a + s * r), l < i && window.requestAnimationFrame(function (n) {
      var l = n || new Date().getTime();t(e, l, i, s, a);
    });
  };if (e.length > 0) for (var n = 0; n < e.length; n++) {
    e[n].addEventListener("click", function (e) {
      e.preventDefault();var n = e.target.closest(".smooth-scroll"),
          i = n.href.split("#")[1],
          s = document.getElementById(i),
          a = n.getAttribute("data-duration") || 1e3;s && window.requestAnimationFrame(function (e) {
        var n = e || new Date().getTime(),
            i = n,
            l = window.pageYOffset,
            c = s.getBoundingClientRect().top;t(i, n, a, c, l);
      });
    });
  }
})(), (function () {
  "use strict";var e = document.getElementsByClassName("tab");function t(e) {
    var t = e.getAttribute("aria-controls");document.getElementById(t).classList.add("is-active"), e.classList.add("is-active");
  }if (e.length > 0) for (var n = 0; n < e.length; n++) {
    var i = e[n];i.addEventListener("click", function (n) {
      n.preventDefault();var i = this.closest(".tabs").getElementsByClassName("tab-panel");if (!this.classList.contains("is-active")) {
        for (var _t5 = 0; _t5 < e.length; _t5++) {
          e[_t5].classList.remove("is-active");
        }for (var _e9 = 0; _e9 < i.length; _e9++) {
          i[_e9].classList.remove("is-active");
        }t(this);
      }
    }), i.classList.contains("is-active") && t(i);
  }
})();

