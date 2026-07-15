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

  /* Revelar ao entrar na viewport */
  var revealEls = document.querySelectorAll(
    ".section__head, .sobre__bio, .sobre__meta, .work, .intro-line, .media-grid, .cards, .card, .contato__grid, .form, .hero__text, .hero__media"
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
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" }
    );
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add("is-in"); });
  }
})();
