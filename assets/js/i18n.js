/* Larissa da Matta — internacionalização (PT / EN / ES)
   Créditos/filmografia (nomes, títulos, papéis) ficam no original.
   Traduções EN/ES são uma 1ª versão para revisão da cliente. */
(function () {
  "use strict";

  var I18N = {
    pt: {
      "nav.sobre": "Sobre", "nav.atriz": "Atriz", "nav.dancarina": "Dançarina",
      "nav.modelo": "Modelo", "nav.aulas": "Aulas", "nav.galeria": "Galeria",
      "nav.imprensa": "Imprensa", "nav.contato": "Contato", "nav.cv": "Currículo (PDF)",
      "hero.eyebrow": "Atriz · Dançarina · Modelo",
      "hero.lead": "<em>Entre a cena, o corpo e a imagem —<br>uma artista latino-americana.</em>",
      "hero.cta": "Ver trabalhos", "hero.index": "Retrato", "hero.scroll": "rolar",
      "tag.teatro": "Teatro", "tag.tv": "TV",
      "sobre.title": "Sobre",
      "sobre.lead": "Larissa da Matta é atriz, dançarina, modelo e artista-pesquisadora.",
      "sobre.p1": "Bacharel em Artes Cênicas e pós-graduada em Direção e Atuação pela Escola Superior de Artes Célia Helena. Trabalha entre teatro, TV, dança e moda, no Brasil e em festivais na América Latina e na Rússia.",
      "sobre.p2": "Na pesquisa Dramaturgias do Corpo, investigou a vida e a obra de mais de 40 mulheres artistas, do século XVI ao XXI. Foi desse trabalho que nasceu seu solo sobre Zelda Fitzgerald.",
      "sobre.langs.title": "Idiomas", "sobre.langs.pt": "Português — nativo",
      "sobre.langs.es": "Espanhol — fluente (DELE C1)", "sobre.langs.en": "Inglês — fluente (FCE · IELTS)",
      "sobre.langs.it": "Italiano — básico", "sobre.langs.ru": "Russo — básico",
      "sobre.fisico.title": "Características",
      "sobre.fisico.1": "Altura — 1,67 m",
      "sobre.fisico.2": "Olhos castanho-claros",
      "sobre.fisico.3": "Cabelo preto, liso e longo",
      "sobre.fisico.4": "Manequim 38 · Calçado 37",
      "sobre.fisico.5": "DRT 0054773/SP",
      "sobre.form.title": "Formação",
      "sobre.form.1": "Bacharel em Artes Cênicas — Célia Helena (2018)",
      "sobre.form.2": "Pós-graduação em Direção e Atuação — Célia Helena (2021)",
      "sobre.form.3": "Atuação cênica — Teatro de Arte de Moscou, Rússia (2020)",
      "sobre.form.4": "Interpretação para câmera — Academia Internacional de Cinema",
      "sobre.form.5": "Danças urbanas — Centro de Artes Lílian Gumieiro",
      "sobre.form.6": "História da Arte — Prof. Dr. Rodrigo Naves",
      "sobre.form.7": "Licenciatura em Teatro — Célia Helena (2025)",
      "atriz.title": "Atriz", "atriz.sub": "Teatro · TV",
      "atriz.note": "Uma seleção dos trabalhos.",
      "atriz.feat.tag": "Destaque · Solo",
      "atriz.feat.desc": "Solo autoral sobre Zelda Fitzgerald — escritora, pintora e bailarina, para além do mito de musa dos anos 1920. Nasce da pesquisa Dramaturgias do Corpo, sobre mais de 40 mulheres artistas apagadas pela história.",
      "atriz.feat.credit": "Concepção e atuação: Larissa da Matta · Dramaturgia: Larissa da Matta e Pedro Amaral · Espaço º Andar (São Paulo), 2026",
      "danc.title": "Dançarina", "danc.sub": "Formação · Vídeos",
      "danc.lead": "Da dança urbana às danças populares brasileiras.",
      "danc.p1": "Formada em danças urbanas pelo Centro de Artes Lílian Gumieiro. Estudou danças folclóricas brasileiras e combate cênico no Teatro de Arte de Moscou.",
      "danc.p2": "Em 2021, integrou como dançarina e performer o projeto de live-painting Corpo e Cor., do Estúdio Thiago Drummond.",
      "danc.form.title": "Formação em dança",
      "danc.form.1": "Danças Urbanas — Lílian Gumieiro",
      "danc.form.2": "Danças folclóricas brasileiras",
      "danc.form.3": "Combate cênico — Teatro de Arte de Moscou",
      "danc.video": "Vídeos de dança — em breve",
      "modelo.title": "Modelo", "modelo.sub": "Trabalhos com marcas",
      "modelo.lead": "Trabalhos como modelo para marcas e campanhas.",
      "modelo.soon": "Portfólio em breve",
      "modelo.credit": "Fashion film “Mujeres al borde de un ataque de nervios” (2023) — Fotografia Dela · Rayssa Zago.",
      "aulas.title": "Aulas", "aulas.sub": "Cursos e serviços",
      "aulas.lead": "Aulas particulares e cursos, presenciais e online.",
      "aulas.c1.t": "Espanhol", "aulas.c1.d": "Espanhol para iniciantes e para quem quer destravar a conversação.",
      "aulas.c2.t": "Inglês — Conversação", "aulas.c2.d": "Conversação em inglês para praticar sem travar.",
      "aulas.c3.t": "Curso livre de Teatro", "aulas.c3.d": "Curso livre de teatro para iniciantes e atores em formação.",
      "aulas.cta": "Quero agendar uma aula",
      "galeria.title": "Galeria", "galeria.sub": "Fotos & Vídeos",
      "galeria.soon": "Foto — em breve", "galeria.video": "Videobook — em breve",
      "imprensa.title": "Na mídia", "imprensa.sub": "Imprensa",
      "imprensa.read": "Ler matéria →",
      "imprensa.note": "Matérias sobre o trabalho dela.",
      "contato.title": "Contato", "contato.headline": "Vamos<br>conversar.",
      "contato.rep.title": "Representação",
      "contato.direct.title": "Direto",
      "skills.title": "Habilidades",
      "atriz.bts.title": "Também nos bastidores",
      "skc.danca": "Dança", "skc.corpo": "Corpo & Interpretação", "skc.canto": "Canto", "skc.musica": "Música", "skc.pilota": "Direção & Pilotagem", "skc.esporte": "Esporte",
      "sk.street": "Street Dance", "sk.expr": "Expressão corporal", "sk.contemp": "Contemporânea", "sk.jazz": "Jazz", "sk.samba": "Samba", "sk.salao": "Dança de salão", "sk.folk": "Danças folclóricas", "sk.hiphop": "Hip Hop", "sk.valsa": "Valsa",
      "sk.improv": "Improviso", "sk.combate": "Combate cênico", "sk.viewpoints": "Viewpoints", "sk.meisner": "Meisner", "sk.feldenkrais": "Feldenkrais", "sk.clown": "Palhaço / Clown", "sk.comedia": "Comédia",
      "sk.mezzo": "Mezzosoprano", "sk.mpb": "MPB", "sk.sertanejo": "Sertanejo", "sk.popular": "Popular", "sk.raiz": "Regional / Raiz",
      "sk.pandeiro": "Pandeiro", "sk.chocalho": "Chocalho", "sk.caxixi": "Caxixi", "sk.berrante": "Berrante",
      "sk.carro": "Carro", "sk.moto": "Moto", "sk.cavalo": "Cavalo", "sk.bike": "Bicicleta",
      "sk.yoga": "Yoga", "sk.pilates": "Pilates", "sk.natacao": "Natação", "sk.corrida": "Corrida", "sk.ciclismo": "Ciclismo", "sk.volei": "Vôlei", "sk.muscul": "Musculação", "sk.paddle": "Stand-up paddle",
      "contato.rep.body": "Acervo de Atores<br>Patricia Blanco<br><a href=\"tel:+5511991094535\">+55 11 99109-4535</a><br><a href=\"mailto:pat.acervodeatores@gmail.com\">pat.acervodeatores@gmail.com</a>",
      "contato.social.title": "Redes",
      "form.name": "Nome", "form.email": "E-mail", "form.msg": "Mensagem",
      "form.send": "Enviar", "form.note": "Envio será ativado na publicação.",
      "wa.label": "Falar no WhatsApp",
      "wa.link": "https://wa.me/5511941220402?text=Ol%C3%A1%2C%20Larissa!%20Vim%20pelo%20seu%20site%20e%20gostaria%20de%20falar%20com%20voc%C3%AA."
    },
    en: {
      "nav.sobre": "About", "nav.atriz": "Actress", "nav.dancarina": "Dancer",
      "nav.modelo": "Model", "nav.aulas": "Classes", "nav.galeria": "Gallery",
      "nav.imprensa": "Press", "nav.contato": "Contact", "nav.cv": "Résumé (PDF)",
      "hero.eyebrow": "Actress · Dancer · Model",
      "hero.lead": "<em>Between the stage, the body and the image —<br>a Latin American artist.</em>",
      "hero.cta": "View work", "hero.index": "Portrait", "hero.scroll": "scroll",
      "tag.teatro": "Theatre", "tag.tv": "TV",
      "sobre.title": "About",
      "sobre.lead": "Larissa da Matta is an actress, dancer, model and artist-researcher.",
      "sobre.p1": "With a bachelor's in Performing Arts and a postgraduate degree in Directing and Acting from Escola Superior de Artes Célia Helena, she works across theatre, TV, dance and fashion — in Brazil and at festivals in Latin America and Russia.",
      "sobre.p2": "In her research Dramaturgias do Corpo, she investigated the lives and work of more than 40 women artists, from the 16th to the 21st century. Her solo on Zelda Fitzgerald came out of this work.",
      "sobre.langs.title": "Languages", "sobre.langs.pt": "Portuguese — native",
      "sobre.langs.es": "Spanish — fluent (DELE C1)", "sobre.langs.en": "English — fluent (FCE · IELTS)",
      "sobre.langs.it": "Italian — basic", "sobre.langs.ru": "Russian — basic",
      "sobre.fisico.title": "Attributes",
      "sobre.fisico.1": "Height — 1.67 m",
      "sobre.fisico.2": "Light brown eyes",
      "sobre.fisico.3": "Black hair, straight and long",
      "sobre.fisico.4": "Dress 38 · Shoe 37 (EU)",
      "sobre.fisico.5": "DRT 0054773/SP",
      "sobre.form.title": "Training",
      "sobre.form.1": "BA in Performing Arts — Célia Helena (2018)",
      "sobre.form.2": "Postgraduate in Directing and Acting — Célia Helena (2021)",
      "sobre.form.3": "Stage acting — Moscow Art Theatre, Russia (2020)",
      "sobre.form.4": "Screen acting — Academia Internacional de Cinema",
      "sobre.form.5": "Urban dance — Centro de Artes Lílian Gumieiro",
      "sobre.form.6": "Art History — Prof. Dr. Rodrigo Naves",
      "sobre.form.7": "Teaching degree in Theatre — Célia Helena (2025)",
      "atriz.title": "Actress", "atriz.sub": "Theatre · TV",
      "atriz.note": "A selection of her work.",
      "atriz.feat.tag": "Featured · Solo",
      "atriz.feat.desc": "An authorial solo on Zelda Fitzgerald — writer, painter and dancer, beyond the 1920s myth of the muse. It springs from her research Dramaturgias do Corpo, on more than 40 women artists erased by history.",
      "atriz.feat.credit": "Concept and performance: Larissa da Matta · Dramaturgy: Larissa da Matta and Pedro Amaral · Espaço º Andar (São Paulo), 2026",
      "danc.title": "Dancer", "danc.sub": "Training · Videos",
      "danc.lead": "From urban dance to Brazilian folk dance.",
      "danc.p1": "Trained in urban dance at Centro de Artes Lílian Gumieiro. She has studied Brazilian folk dances and stage combat at the Moscow Art Theatre.",
      "danc.p2": "In 2021, she took part as a dancer and performer in the live-painting project Corpo e Cor., by Estúdio Thiago Drummond.",
      "danc.form.title": "Dance training",
      "danc.form.1": "Urban Dance — Lílian Gumieiro",
      "danc.form.2": "Brazilian folk dances",
      "danc.form.3": "Stage combat — Moscow Art Theatre",
      "danc.video": "Dance videos — coming soon",
      "modelo.title": "Model", "modelo.sub": "Brand work",
      "modelo.lead": "Modelling work for brands and campaigns.",
      "modelo.soon": "Portfolio coming soon",
      "modelo.credit": "Fashion film “Mujeres al borde de un ataque de nervios” (2023) — Fotografia Dela · Rayssa Zago.",
      "aulas.title": "Classes", "aulas.sub": "Courses and services",
      "aulas.lead": "Private lessons and courses, in person and online.",
      "aulas.c1.t": "Spanish", "aulas.c1.d": "Spanish for beginners and for getting your conversation flowing.",
      "aulas.c2.t": "English — Conversation", "aulas.c2.d": "English conversation practice, without freezing up.",
      "aulas.c3.t": "Theatre — Open Course", "aulas.c3.d": "Open theatre course for beginners and actors in training.",
      "aulas.cta": "Book a class",
      "galeria.title": "Gallery", "galeria.sub": "Photos & Video",
      "galeria.soon": "Photo — coming soon", "galeria.video": "Videobook — coming soon",
      "imprensa.title": "In the media", "imprensa.sub": "Press",
      "imprensa.read": "Read article →",
      "imprensa.note": "Press about her work.",
      "contato.title": "Contact", "contato.headline": "Let's<br>talk.",
      "contato.rep.title": "Representation",
      "contato.direct.title": "Direct",
      "skills.title": "Skills",
      "atriz.bts.title": "Also behind the scenes",
      "skc.danca": "Dance", "skc.corpo": "Body & Acting", "skc.canto": "Singing", "skc.musica": "Music", "skc.pilota": "Driving & Riding", "skc.esporte": "Sports",
      "sk.street": "Street Dance", "sk.expr": "Body expression", "sk.contemp": "Contemporary", "sk.jazz": "Jazz", "sk.samba": "Samba", "sk.salao": "Ballroom", "sk.folk": "Folk dances", "sk.hiphop": "Hip Hop", "sk.valsa": "Waltz",
      "sk.improv": "Improvisation", "sk.combate": "Stage combat", "sk.viewpoints": "Viewpoints", "sk.meisner": "Meisner", "sk.feldenkrais": "Feldenkrais", "sk.clown": "Clown", "sk.comedia": "Comedy",
      "sk.mezzo": "Mezzo-soprano", "sk.mpb": "MPB", "sk.sertanejo": "Sertanejo", "sk.popular": "Popular", "sk.raiz": "Regional / Roots",
      "sk.pandeiro": "Pandeiro", "sk.chocalho": "Chocalho", "sk.caxixi": "Caxixi", "sk.berrante": "Berrante",
      "sk.carro": "Car", "sk.moto": "Motorcycle", "sk.cavalo": "Horse", "sk.bike": "Bicycle",
      "sk.yoga": "Yoga", "sk.pilates": "Pilates", "sk.natacao": "Swimming", "sk.corrida": "Running", "sk.ciclismo": "Cycling", "sk.volei": "Volleyball", "sk.muscul": "Weight training", "sk.paddle": "Stand-up paddle",
      "contato.rep.body": "Acervo de Atores<br>Patricia Blanco<br><a href=\"tel:+5511991094535\">+55 11 99109-4535</a><br><a href=\"mailto:pat.acervodeatores@gmail.com\">pat.acervodeatores@gmail.com</a>",
      "contato.social.title": "Social",
      "form.name": "Name", "form.email": "Email", "form.msg": "Message",
      "form.send": "Send", "form.note": "Sending will be enabled on launch.",
      "wa.label": "Chat on WhatsApp",
      "wa.link": "https://wa.me/5511941220402?text=Hi%2C%20Larissa!%20I%20found%20your%20website%20and%20would%20like%20to%20talk."
    },
    es: {
      "nav.sobre": "Sobre", "nav.atriz": "Actriz", "nav.dancarina": "Bailarina",
      "nav.modelo": "Modelo", "nav.aulas": "Clases", "nav.galeria": "Galería",
      "nav.imprensa": "Prensa", "nav.contato": "Contacto", "nav.cv": "Currículum (PDF)",
      "hero.eyebrow": "Actriz · Bailarina · Modelo",
      "hero.lead": "<em>Entre la escena, el cuerpo y la imagen —<br>una artista latinoamericana.</em>",
      "hero.cta": "Ver trabajos", "hero.index": "Retrato", "hero.scroll": "desplázate",
      "tag.teatro": "Teatro", "tag.tv": "TV",
      "sobre.title": "Sobre",
      "sobre.lead": "Larissa da Matta es actriz, bailarina, modelo y artista-investigadora.",
      "sobre.p1": "Licenciada en Artes Escénicas y posgraduada en Dirección y Actuación por la Escola Superior de Artes Célia Helena. Trabaja entre teatro, TV, danza y moda, en Brasil y en festivales de América Latina y Rusia.",
      "sobre.p2": "En su investigación Dramaturgias do Corpo, investigó la vida y la obra de más de 40 mujeres artistas, del siglo XVI al XXI. De ese trabajo nació su solo sobre Zelda Fitzgerald.",
      "sobre.langs.title": "Idiomas", "sobre.langs.pt": "Portugués — nativo",
      "sobre.langs.es": "Español — fluido (DELE C1)", "sobre.langs.en": "Inglés — fluido (FCE · IELTS)",
      "sobre.langs.it": "Italiano — básico", "sobre.langs.ru": "Ruso — básico",
      "sobre.fisico.title": "Características",
      "sobre.fisico.1": "Altura — 1,67 m",
      "sobre.fisico.2": "Ojos castaño claro",
      "sobre.fisico.3": "Cabello negro, liso y largo",
      "sobre.fisico.4": "Talla 38 · Calzado 37",
      "sobre.fisico.5": "DRT 0054773/SP",
      "sobre.form.title": "Formación",
      "sobre.form.1": "Licenciatura en Artes Escénicas — Célia Helena (2018)",
      "sobre.form.2": "Posgrado en Dirección y Actuación — Célia Helena (2021)",
      "sobre.form.3": "Actuación escénica — Teatro de Arte de Moscú, Rusia (2020)",
      "sobre.form.4": "Interpretación para cámara — Academia Internacional de Cinema",
      "sobre.form.5": "Danza urbana — Centro de Artes Lílian Gumieiro",
      "sobre.form.6": "Historia del Arte — Prof. Dr. Rodrigo Naves",
      "sobre.form.7": "Licenciatura en Teatro — Célia Helena (2025)",
      "atriz.title": "Actriz", "atriz.sub": "Teatro · TV",
      "atriz.note": "Una selección de sus trabajos.",
      "atriz.feat.tag": "Destacado · Solo",
      "atriz.feat.desc": "Un solo autoral sobre Zelda Fitzgerald — escritora, pintora y bailarina, más allá del mito de musa de los años 1920. Nace de su investigación Dramaturgias do Corpo, sobre más de 40 mujeres artistas borradas por la historia.",
      "atriz.feat.credit": "Concepción y actuación: Larissa da Matta · Dramaturgia: Larissa da Matta y Pedro Amaral · Espaço º Andar (São Paulo), 2026",
      "danc.title": "Bailarina", "danc.sub": "Formación · Videos",
      "danc.lead": "De la danza urbana a las danzas populares brasileñas.",
      "danc.p1": "Formada en danzas urbanas en el Centro de Artes Lílian Gumieiro. Estudió danzas folclóricas brasileñas y combate escénico en el Teatro de Arte de Moscú.",
      "danc.p2": "En 2021, participó como bailarina y performer en el proyecto de live-painting Corpo e Cor., del Estúdio Thiago Drummond.",
      "danc.form.title": "Formación en danza",
      "danc.form.1": "Danzas Urbanas — Lílian Gumieiro",
      "danc.form.2": "Danzas folclóricas brasileñas",
      "danc.form.3": "Combate escénico — Teatro de Arte de Moscú",
      "danc.video": "Videos de danza — próximamente",
      "modelo.title": "Modelo", "modelo.sub": "Trabajos con marcas",
      "modelo.lead": "Trabajos como modelo para marcas y campañas.",
      "modelo.soon": "Portafolio próximamente",
      "modelo.credit": "Fashion film “Mujeres al borde de un ataque de nervios” (2023) — Fotografia Dela · Rayssa Zago.",
      "aulas.title": "Clases", "aulas.sub": "Cursos y servicios",
      "aulas.lead": "Clases particulares y cursos, presenciales y online.",
      "aulas.c1.t": "Español", "aulas.c1.d": "Español para principiantes y para soltar la conversación.",
      "aulas.c2.t": "Inglés — Conversación", "aulas.c2.d": "Conversación en inglés para practicar sin trabarse.",
      "aulas.c3.t": "Curso libre de Teatro", "aulas.c3.d": "Curso libre de teatro para principiantes y actores en formación.",
      "aulas.cta": "Quiero agendar una clase",
      "galeria.title": "Galería", "galeria.sub": "Fotos & Videos",
      "galeria.soon": "Foto — próximamente", "galeria.video": "Videobook — próximamente",
      "imprensa.title": "En los medios", "imprensa.sub": "Prensa",
      "imprensa.read": "Leer nota →",
      "imprensa.note": "Prensa sobre su trabajo.",
      "contato.title": "Contacto", "contato.headline": "Hablemos.",
      "contato.rep.title": "Representación",
      "contato.direct.title": "Directo",
      "skills.title": "Habilidades",
      "atriz.bts.title": "También detrás de escena",
      "skc.danca": "Danza", "skc.corpo": "Cuerpo & Actuación", "skc.canto": "Canto", "skc.musica": "Música", "skc.pilota": "Conducción & Monta", "skc.esporte": "Deporte",
      "sk.street": "Street Dance", "sk.expr": "Expresión corporal", "sk.contemp": "Contemporánea", "sk.jazz": "Jazz", "sk.samba": "Samba", "sk.salao": "Baile de salón", "sk.folk": "Danzas folclóricas", "sk.hiphop": "Hip Hop", "sk.valsa": "Vals",
      "sk.improv": "Improvisación", "sk.combate": "Combate escénico", "sk.viewpoints": "Viewpoints", "sk.meisner": "Meisner", "sk.feldenkrais": "Feldenkrais", "sk.clown": "Payaso / Clown", "sk.comedia": "Comedia",
      "sk.mezzo": "Mezzosoprano", "sk.mpb": "MPB", "sk.sertanejo": "Sertanejo", "sk.popular": "Popular", "sk.raiz": "Regional / Raíz",
      "sk.pandeiro": "Pandeiro", "sk.chocalho": "Chocalho", "sk.caxixi": "Caxixi", "sk.berrante": "Berrante",
      "sk.carro": "Coche", "sk.moto": "Moto", "sk.cavalo": "Caballo", "sk.bike": "Bicicleta",
      "sk.yoga": "Yoga", "sk.pilates": "Pilates", "sk.natacao": "Natación", "sk.corrida": "Carrera", "sk.ciclismo": "Ciclismo", "sk.volei": "Vóley", "sk.muscul": "Musculación", "sk.paddle": "Stand-up paddle",
      "contato.rep.body": "Acervo de Atores<br>Patricia Blanco<br><a href=\"tel:+5511991094535\">+55 11 99109-4535</a><br><a href=\"mailto:pat.acervodeatores@gmail.com\">pat.acervodeatores@gmail.com</a>",
      "contato.social.title": "Redes",
      "form.name": "Nombre", "form.email": "Correo", "form.msg": "Mensaje",
      "form.send": "Enviar", "form.note": "El envío se activará en la publicación.",
      "wa.label": "Hablar por WhatsApp",
      "wa.link": "https://wa.me/5511941220402?text=%C2%A1Hola%2C%20Larissa!%20Vi%20tu%20sitio%20y%20me%20gustar%C3%ADa%20hablar%20contigo."
    }
  };

  var HTML_LANG = { pt: "pt-BR", en: "en", es: "es" };
  var STORAGE_KEY = "larissa_lang";

  function apply(lang) {
    var dict = I18N[lang] || I18N.pt;
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var k = el.getAttribute("data-i18n");
      if (dict[k] != null) el.textContent = dict[k];
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-html");
      if (dict[k] != null) el.innerHTML = dict[k];
    });
    document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
      var k = el.getAttribute("data-i18n-href");
      if (dict[k] != null) el.setAttribute("href", dict[k]);
    });
    document.documentElement.setAttribute("lang", HTML_LANG[lang] || "pt-BR");
    document.querySelectorAll("#langSwitch button").forEach(function (b) {
      b.classList.toggle("is-active", b.getAttribute("data-lang") === lang);
    });
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
  }

  function init() {
    var stored = "pt";
    try { stored = localStorage.getItem(STORAGE_KEY) || "pt"; } catch (e) {}
    if (!I18N[stored]) stored = "pt";
    apply(stored);
    document.querySelectorAll("#langSwitch button").forEach(function (b) {
      b.addEventListener("click", function () { apply(b.getAttribute("data-lang")); });
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
