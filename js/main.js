/* BakingSlim — bakingslim-us.vercel.app */
(function () {
  "use strict";

  /* Mobile navigation */
  var btn = document.querySelector(".menu-btn");
  var list = document.getElementById("menu-list");
  if (btn && list) {
    btn.addEventListener("click", function () {
      var open = list.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    list.addEventListener("click", function (e) {
      if (e.target.tagName === "A") {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && list.classList.contains("open")) {
        list.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
        btn.focus();
      }
    });
  }

  /* Order dock: appears once the hero buttons scroll away,
     hides again over the pricing staircase so it never covers it. */
  var dock = document.querySelector(".dock");
  if (dock && "IntersectionObserver" in window) {
    var gone = false;
    var atPrices = false;
    function refresh() {
      dock.classList.toggle("show", gone && !atPrices);
    }
    var heroGos = document.getElementById("hero-gos");
    if (heroGos) {
      new IntersectionObserver(
        function (entries) {
          gone =
            !entries[0].isIntersecting && entries[0].boundingClientRect.top < 0;
          refresh();
        },
        { threshold: 0 }
      ).observe(heroGos);
    }
    var prices = document.getElementById("prices");
    if (prices) {
      new IntersectionObserver(
        function (entries) {
          atPrices = entries[0].isIntersecting;
          refresh();
        },
        { threshold: 0 }
      ).observe(prices);
    }
  }
})();
