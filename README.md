# Larissa da Matta — Site profissional

Site portfólio da **Larissa da Matta** — atriz, dançarina e modelo (+ professora).
Objetivo: portfólio para trabalhos/casting + divulgação de serviços.

> **Status:** v1 completa. Design finalizado; conteúdo real integrado (bio,
> filmografia, habilidades, idiomas, imprensa, vídeos, fotos). Aguardando novos
> materiais da artista (reel/videobook, mais fotos) e o domínio para publicar.

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

## Como publicar

O site é estático — sobe em qualquer hospedagem de arquivos:

1. **Netlify / Vercel / Cloudflare Pages** — arraste a pasta do projeto (ou
   conecte o repositório). Sem passo de build; a raiz é a própria pasta.
2. **GitHub Pages** — habilite Pages apontando para a branch/raiz.
3. **Domínio** — aponte o domínio comprado para a hospedagem escolhida.

Ao publicar, atualizar as URLs absolutas de `og:image`/`twitter:image` no
`<head>` (hoje relativas) melhora o preview em redes sociais.

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
