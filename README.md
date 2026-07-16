# Larissa da Matta — Site profissional

Site portfólio da **Larissa da Matta** — atriz, dançarina e modelo (+ professora).
Objetivo: portfólio para trabalhos/casting + divulgação de serviços.

> **Status:** v1 no ar. Design finalizado; conteúdo real integrado (bio,
> filmografia, habilidades, idiomas, imprensa, vídeos, fotos). Aguardando novos
> materiais da artista (reel/videobook, mais fotos) e um domínio próprio.
>
> **🔗 No ar:** https://pedrocobron-ops.github.io/Larissa-da-Matta/ (GitHub Pages)

## Direção de design

- **Estética:** artística-autoral, minimalista, editorial (ref.: Elisabete Finger, Janaína Leite).
- **Paleta terrosa** (do ensaio fotográfico): Espresso `#241B15` · Umber `#3B2A1E` · Caramelo `#9C6F47` · Ocre `#C39A5E` · Areia `#E9E0D2` · Creme `#F5F0E7`.
- **Tipografia (auto-hospedada):** Cinzel (nome/logo) · Fraunces (títulos) · Inter (texto).
- Textura de grão, sombras suaves entre blocos e gradientes quentes nas seções escuras.

## Idiomas

Site trilíngue **PT / EN / ES** com seletor no topo (`assets/js/i18n.js`).
O texto padrão (PT) fica no próprio HTML — se o JS não carregar, o site continua legível.

## Estrutura

```
index.html                 Página única com âncoras (nav = "abas")
  ├─ Início (hero)
  ├─ Sobre (bio · idiomas · características · habilidades)
  ├─ Atriz (Teatro · TV · Cinema · bastidores)
  ├─ Dançarina (formação · vídeos)
  ├─ Modelo (trabalhos com marcas)
  ├─ Aulas (Espanhol · Inglês · Curso livre de Teatro)
  ├─ Galeria (Fotos & Videobook)
  ├─ Imprensa (matérias e artigo)
  └─ Contato (WhatsApp · e-mail · portfólio PDF · agência · formulário)
assets/
  css/style.css                    Estilos + tokens da identidade
  js/i18n.js                       Traduções PT/EN/ES + seletor
  js/main.js                       Nav, menu mobile, animações
  fonts/                           Cinzel + Fraunces + Inter (woff2)
  images/                          Fotos + og-cover.jpg (social share)
  favicon.svg                      Ícone (monograma "L")
  larissa-da-matta-portfolio.pdf   Portfólio (botão "Currículo (PDF)")
```

## Como visualizar

Abra `index.html` em qualquer navegador. Como o site é 100% estático (sem
build), qualquer servidor de arquivos serve. Para testar local com o PDF/OG
funcionando:

```
python3 -m http.server 8000   # depois abra http://localhost:8000
```

(`preview-larissa.html` é uma cópia autocontida gerada para envio — não versionada.)

## Hospedagem

Atualmente publicado via **GitHub Pages** (branch do site, raiz), com o arquivo
`.nojekyll` para servir os assets sem processamento:

**https://pedrocobron-ops.github.io/Larissa-da-Matta/**

Sendo estático, também roda em Netlify / Vercel / Cloudflare Pages (arraste a
pasta ou conecte o repositório; sem passo de build).

**Domínio próprio:** ao comprar o domínio, aponte-o para o GitHub Pages
(Settings → Pages → Custom domain) e atualize as URLs absolutas de
`og:image` / `twitter:image` no `<head>` para melhorar o preview em redes sociais.

> Os arquivos também estão espelhados num bucket público do Supabase
> (projeto `larissa-da-matta`), útil como CDN e para futuramente ativar o
> formulário de contato.

## Pendências (a completar com a cliente)

- [ ] Reel / vídeos de dança / videobook em alta
- [ ] Mais fotos (cena, ensaios recentes)
- [ ] Trabalhos com marcas (Modelo) — nomes/campanhas
- [ ] Revisar traduções EN/ES com a artista
- [ ] Detalhes das Aulas (formato, valores, online/presencial)
- [ ] Domínio + hospedagem final
- [ ] Ativar formulário de contato (backend / Supabase)

## Créditos

Representação: Acervo de Atores — Patricia Blanco.
