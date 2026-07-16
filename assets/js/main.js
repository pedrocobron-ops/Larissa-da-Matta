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
  function setMenu(open) {
    links.classList.toggle("is-open", open);
    nav.classList.toggle("is-menu-open", open);
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      setMenu(!links.classList.contains("is-open"));
    });
    links.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () { setMenu(false); });
    });
  }

  /* Revelar ao entrar na viewport */
  var revealEls = document.querySelectorAll(
    ".section__head, .sobre__bio, .sobre__meta, .feature, .work, .press__item, .intro-line, .media-grid, .cards, .card, .contato__grid, .form, .hero__text, .hero__media"
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

  /* Scrollspy — destaca no menu a seção atual */
  var navMap = {};
  if (links) {
    links.querySelectorAll('a[href^="#"]').forEach(function (a) {
      var id = a.getAttribute("href").slice(1);
      if (id) navMap[id] = a;
    });
  }
  if ("IntersectionObserver" in window && Object.keys(navMap).length) {
    var currentLink = null;
    var spy = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (e) {
          if (e.isIntersecting) {
            var a = navMap[e.target.id];
            if (a && a !== currentLink) {
              if (currentLink) currentLink.classList.remove("is-current");
              a.classList.add("is-current");
              currentLink = a;
            }
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    Object.keys(navMap).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) spy.observe(el);
    });
  }

  /* Vídeos — carrega o YouTube só no clique (mais leve/privado) */
  document.querySelectorAll(".video-facade").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-embed");
      if (!id) return;
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      f.title = "Vídeo — Larissa da Matta";
      f.allow = "autoplay; encrypted-media; fullscreen";
      f.setAttribute("allowfullscreen", "");
      var wrap = document.createElement("div");
      wrap.className = "video-embed";
      wrap.appendChild(f);
      btn.replaceWith(wrap);
    });
  });

  /* Lightbox da galeria */
  var lb = document.getElementById("lightbox");
  if (lb) {
    var lbImg = document.getElementById("lightboxImg");
    var lbClose = document.getElementById("lightboxClose");
    var lbPrev = document.getElementById("lightboxPrev");
    var lbNext = document.getElementById("lightboxNext");
    var items = [].slice.call(document.querySelectorAll(".gallery__item img"));
    var idx = 0, lastFocus = null;

    function lbShow(i) {
      idx = (i + items.length) % items.length;
      lbImg.setAttribute("src", items[idx].getAttribute("src"));
      lbImg.setAttribute("alt", items[idx].getAttribute("alt") || "");
    }
    function lbOpen(i) {
      lastFocus = document.activeElement;
      lbShow(i);
      lb.hidden = false;
      requestAnimationFrame(function () { lb.classList.add("is-open"); });
      document.body.style.overflow = "hidden";
      lbClose.focus();
    }
    function lbHide() {
      lb.classList.remove("is-open");
      document.body.style.overflow = "";
      setTimeout(function () { lb.hidden = true; lbImg.setAttribute("src", ""); }, 260);
      if (lastFocus && lastFocus.focus) lastFocus.focus();
    }
    document.querySelectorAll(".gallery__item").forEach(function (btn, i) {
      btn.addEventListener("click", function () { lbOpen(i); });
    });
    lbClose.addEventListener("click", lbHide);
    lbPrev.addEventListener("click", function () { lbShow(idx - 1); });
    lbNext.addEventListener("click", function () { lbShow(idx + 1); });
    lb.addEventListener("click", function (e) { if (e.target === lb) lbHide(); });
    document.addEventListener("keydown", function (e) {
      if (lb.hidden) return;
      if (e.key === "Escape") lbHide();
      else if (e.key === "ArrowLeft") lbShow(idx - 1);
      else if (e.key === "ArrowRight") lbShow(idx + 1);
    });
  }
})();
