/* Larissa da Matta — navegação em abas (capa + menu) e interações */
(function () {
  "use strict";

  var topbar = document.getElementById("topbar");
  var toggle = document.getElementById("menuToggle");
  var menu = document.getElementById("menu");
  var menuLinks = menu ? [].slice.call(menu.querySelectorAll(".menu__links a")) : [];

  /* ---------------------------------------------------------
     ROTEADOR DE VISTAS — cada seção é uma "aba"/página
     --------------------------------------------------------- */
  var views = {};
  [].slice.call(document.querySelectorAll(".view")).forEach(function (el) {
    if (el.id) views[el.id] = el;
  });
  var HOME = "top";
  var started = false;

  function showView(id) {
    if (!views[id]) id = HOME;
    Object.keys(views).forEach(function (k) {
      views[k].classList.toggle("is-active", k === id);
    });
    // Barra sólida fora da capa
    setTopbar(id);
    // Link ativo no menu
    menuLinks.forEach(function (a) {
      a.classList.toggle("is-current", a.getAttribute("href") === "#" + id);
    });
    // Reexecuta a animação de revelação da vista ativa
    var v = views[id];
    var rev = v.querySelectorAll(".reveal");
    rev.forEach(function (e) { e.classList.remove("is-in"); });
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        rev.forEach(function (e) { e.classList.add("is-in"); });
      });
    });
    window.scrollTo(0, 0);
    // Foco na vista (acessibilidade) — só quando o utilizador navega
    if (started) {
      v.setAttribute("tabindex", "-1");
      v.focus({ preventScroll: true });
    }
  }

  function route() {
    var h = (location.hash || "").replace(/^#/, "");
    showView(views[h] ? h : HOME);
    closeMenu();
    started = true;
  }
  window.addEventListener("hashchange", route);

  /* ---------------------------------------------------------
     BARRA SUPERIOR — transparente na capa, sólida nas abas
     --------------------------------------------------------- */
  function setTopbar(id) {
    var solid = id !== HOME || window.scrollY > 40;
    topbar.classList.toggle("is-solid", solid);
  }
  window.addEventListener("scroll", function () {
    var cur = document.querySelector(".view.is-active");
    setTopbar(cur ? cur.id : HOME);
  }, { passive: true });

  /* ---------------------------------------------------------
     MENU (abas) — abrir / fechar
     --------------------------------------------------------- */
  function openMenu() {
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Fechar menu");
    topbar.classList.add("is-menu-open");
    document.body.style.overflow = "hidden";
    var first = menu.querySelector(".menu__links a");
    if (first) first.focus();
  }
  function closeMenu() {
    if (!menu.classList.contains("is-open")) return;
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Abrir menu");
    topbar.classList.remove("is-menu-open");
    document.body.style.overflow = "";
  }
  if (toggle) {
    toggle.addEventListener("click", function () {
      if (menu.classList.contains("is-open")) closeMenu();
      else openMenu();
    });
  }
  // Fecha o menu ao clicar num link (o roteador cuida da navegação)
  menuLinks.forEach(function (a) {
    a.addEventListener("click", function () {
      // Se o destino já é a vista atual, o hashchange não dispara: fecha manualmente
      if (a.getAttribute("href") === "#" + (document.querySelector(".view.is-active") || {}).id) {
        closeMenu();
      }
    });
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && menu.classList.contains("is-open")) {
      closeMenu();
      toggle.focus();
    }
  });
  // Retém o foco dentro do menu enquanto aberto
  menu.addEventListener("keydown", function (e) {
    if (e.key !== "Tab" || !menu.classList.contains("is-open")) return;
    var f = [toggle].concat([].slice.call(menu.querySelectorAll("a, button")));
    var i = f.indexOf(document.activeElement);
    var n = e.shiftKey ? (i <= 0 ? f.length - 1 : i - 1) : (i >= f.length - 1 ? 0 : i + 1);
    e.preventDefault();
    f[n].focus();
  });

  /* ---------------------------------------------------------
     Revelar ao entrar na viewport (dentro de cada vista)
     --------------------------------------------------------- */
  var revealEls = document.querySelectorAll(
    ".section__head, .sobre__bio, .sobre__meta, .feature, .projgroup, .work, .press__item, .intro-line, .media-grid, .cards, .card, .contato__grid, .pesquisa__text, .skills, .bts"
  );
  revealEls.forEach(function (el) { el.classList.add("reveal"); });

  /* ---------------------------------------------------------
     Vídeos — carrega o YouTube só no clique (mais leve/privado)
     --------------------------------------------------------- */
  document.querySelectorAll(".video-facade").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = btn.getAttribute("data-embed");
      if (!id) return;
      var f = document.createElement("iframe");
      f.src = "https://www.youtube-nocookie.com/embed/" + id + "?autoplay=1&rel=0";
      f.title = "Vídeo de Larissa da Matta";
      f.allow = "autoplay; encrypted-media; fullscreen";
      f.setAttribute("allowfullscreen", "");
      var wrap = document.createElement("div");
      wrap.className = "video-embed";
      wrap.appendChild(f);
      btn.replaceWith(wrap);
    });
  });

  /* ---------------------------------------------------------
     Lightbox da galeria
     --------------------------------------------------------- */
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
      btn.setAttribute("aria-label", "Ampliar foto " + (i + 1) + " de " + items.length);
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
      else if (e.key === "Tab") {
        var f = [lbClose, lbPrev, lbNext];
        var i = f.indexOf(document.activeElement);
        e.preventDefault();
        var n = e.shiftKey ? (i <= 0 ? f.length - 1 : i - 1) : (i >= f.length - 1 ? 0 : i + 1);
        f[n].focus();
      }
    });
  }

  /* Arranca o roteador */
  route();
})();
