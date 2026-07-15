/* Larissa da Matta — interações mínimas */
(function () {
  "use strict";

  var nav = document.getElementById("nav");
  var toggle = document.getElementById("navToggle");
  var links = document.getElementById("navLinks");

  /* Fundo da nav ao rolar */
  function onScroll() {
    if (window.scrollY > 40) nav.classList.add("is-scrolled");
    else nav.classList.remove("is-scrolled");
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* Menu mobile */
  if (toggle) {
    toggle.addEventListener("click", function () {
      links.classList.toggle("is-open");
      nav.classList.toggle("is-menu-open");
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        links.classList.remove("is-open");
        nav.classList.remove("is-menu-open");
      });
    });
  }

  /* Revelar seções ao entrar na viewport */
  var revealEls = document.querySelectorAll(
    ".section__head, .sobre__bio, .sobre__meta, .work, .reel__frame, .contato__grid, .hero__text, .hero__media"
  );
  revealEls.forEach(function (el) { el.classList.add("reveal"); });

  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }

  /* Toggle de idioma (protótipo — a implementar) */
  document.querySelectorAll(".nav__lang button").forEach(function (b) {
    b.addEventListener("click", function () {
      document.querySelectorAll(".nav__lang button").forEach(function (x) {
        x.classList.remove("is-active");
      });
      b.classList.add("is-active");
    });
  });
})();
