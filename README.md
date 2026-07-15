# Larissa da Matta — Site profissional

Site portfólio da **Larissa da Matta** — atriz, dançarina e modelo (+ professora).
Objetivo: portfólio para trabalhos/casting + divulgação de serviços.

> **Status:** estrutura completa (v1). Design finalizado; aguardando materiais reais
> (fotos, vídeos, videobook) e confirmação de conteúdo pela artista.

## Direção de design

- **Estética:** artística-autoral, minimalista, editorial (ref.: Elisabete Finger, Janaína Leite).
- **Paleta terrosa** (do ensaio fotográfico): Espresso `#241B15` · Umber `#3B2A1E` · Caramelo `#9C6F47` · Ocre `#C39A5E` · Areia `#E9E0D2` · Creme `#F5F0E7`.
- **Tipografia (auto-hospedada):** Fraunces (títulos) + Inter (texto).

## Idiomas

Site trilíngue **PT / EN / ES** com seletor no topo (`assets/js/i18n.js`).
As traduções EN/ES são uma **1ª versão** para revisão da artista.
O texto padrão (PT) fica no próprio HTML — se o JS não carregar, o site continua legível.

## Estrutura

```
index.html                 Página única com âncoras (nav = "abas")
  ├─ Início (hero)
  ├─ Sobre (bio · idiomas · formação)
  ├─ Atriz (Teatro · TV · Cinema)
  ├─ Dançarina (formação · vídeos)
  ├─ Modelo (trabalhos com marcas)
  ├─ Aulas (Espanhol · Inglês · Pilates · Curso livre de Teatro)
  ├─ Galeria (Fotos & Videobook)
  └─ Contato (agência · redes · formulário)
assets/
  css/style.css            Estilos + tokens da identidade
  js/i18n.js               Traduções PT/EN/ES + seletor
  js/main.js               Nav, menu mobile, animações
  fonts/                   Fraunces + Inter (woff2)
  images/                  Fotos (larissa-01.jpg = hero/galeria)
```

## Como visualizar

Abra `index.html` em qualquer navegador. (`preview-larissa.html` é uma cópia
autocontida gerada para envio — não versionada.)

## Pendências (a completar com a cliente)

- [ ] Fotos em alta (ensaios, cena) → seções Galeria, Modelo, Dançarina
- [ ] Reel / vídeos de dança / videobook
- [ ] Trabalhos com marcas (Modelo)
- [ ] Confirmar/ajustar filmografia (nomes, anos, papéis, direção)
- [ ] Revisar traduções EN/ES
- [ ] Detalhes das Aulas (formato, valores, online/presencial)
- [ ] Currículo em PDF (link do botão)
- [ ] Domínio + hospedagem final; ativar formulário de contato

## Créditos

Representação: Acervo de Atores — Patricia Blanco.
