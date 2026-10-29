# Laboratório de Matemática · UFFS

Materiais didáticos de matemática para imprimir, projetar e usar no navegador: jogos, applets 3D, geradores de cartelas e resoluções comentadas de olimpíadas. O site é publicado com **Jekyll** (GitHub Pages) e cada material é um HTML autossuficiente dentro do seu diretório.

## Diretórios

| Diretório | O que reúne |
| --- | --- |
| `geometria/` | Applets 3D (cilindros, cones, pirâmides), laboratório visual de geometria espacial, quiz gamificado e bingo geométrico |
| `pibid/` | Jogos lúdicos do PIBID: dominós (álgebra e área/perímetro), Super Trunfo das Missões, Mercadinho Padre Traezel, Pizzaria das Frações e Trilha Sistema Solar |
| `jogos/` | Portal dos jogos do laboratório (com portal próprio em `jogos/index.html`): Batalha Naval Cartesiana & Algébrica, Triominó Matemático, UNO Matemático e Mico Matemático |
| `libras/` | Bingo de números e baralhos (pôquer e UNO) com numerais e alfabeto em Libras |
| `obmep/` | Resoluções passo a passo de questões da OBMEP Nível 1 (6º e 7º ano) |
| `outros_materiais/` | Oficinas, cadernos e atividades de apoio à formação docente |
| `editor_pdf/` | PDF Workspace: editor de PDF que roda no navegador (juntar, girar, recortar, reordenar, montar 2 ou 4 páginas por folha) |
| `_includes/` | Trechos compartilhados — hoje, o `analytics.html` (Google Analytics) |

## Materiais e habilidades da BNCC

As habilidades listadas são as que cada material efetivamente exercita. Elas aparecem no front matter de cada página (campo `habilidades`) e são exibidas automaticamente nos cards dos portais.

| Material | Uso | Habilidades |
| --- | --- | --- |
| Pizzaria das Frações (`pibid/kit_fracoes.html`) | impresso + painel projetável | EF06MA07 |
| Mercadinho Padre Traezel (`pibid/mercadinho.html`) | impresso + PDV projetável | EF06MA13 |
| Trilha Sistema Solar (`pibid/trilha_matematica.html`) | impresso (4 folhas A4) | EF06MA03, EF06MA05, EF06MA07, EF06MA08, EF06MA09, EF06MA10, EF06MA11, EF06MA13, EF06MA17, EF06MA18, EF06MA24 |
| Super Trunfo das Missões (`pibid/super_trunfo.html`) | impresso (cartas) | EF06MA09, EF06MA11, EF07MA04, EF07MA12 |
| Dominó Algébrico (`pibid/domino_algebra.html`) | impresso (peças) | EF07MA18 |
| Dominó Área e Perímetro (`pibid/domino_perimetro_area.html`) | impresso (peças) | EF07MA31, EF07MA32 |
| Applet: Cilindros (`geometria/applet_cilindros.html`) | digital/projetado | EM13MAT504, EM13MAT309 |
| Applet: Cones (`geometria/applet_cones.html`) | digital/projetado | EM13MAT504, EM13MAT309, EM13MAT307 |
| Applet: Pirâmides (`geometria/applet_piramides.html`) | digital/projetado | EF09MA13, EF04MA17 |
| Laboratório Visual de Geometria (`geometria/laboratorio_geometria_visual.html`) | digital/projetado | EF09MA17, EF09MA19 |
| Quiz de Geometria Espacial (`geometria/quiz.html`) | digital (multiplayer) | EM13MAT309 |
| Bingo Geométrico (`geometria/bingo.html`) | impresso + sorteador | EM13MAT309 |
| Bingo & Baralhos em Libras (`libras/cartas.html`) | impresso + sorteador | EF01MA01 |
| Batalha Naval Cartesiana & Algébrica (`jogos/batalha_naval_cartesiana.html`) | impresso + projeção | EF06MA16, EF06MA03, EF07MA04, EF07MA19, EF07MA20, EF08MA07, EF08MA08, EF09MA06, EF09MA09, EF09MA16 |
| Triominó Matemático (`jogos/triomino_matematico.html`) | impresso (peças) | EF06MA03, EF06MA09, EF06MA24, EF07MA18, EF07MA23, EF08MA01, EF08MA06, EF08MA19, EF09MA03, EF09MA09, EF09MA13 |
| UNO Matemático (`jogos/uno_matematico.html`) | impresso (cartas) | EF06MA03, EF06MA07, EF06MA09, EF06MA11, EF06MA13, EF07MA04, EF07MA12, EF08MA01, EF08MA02, EF08MA05, EF09MA03, EF09MA04, EF09MA09 |
| Mico Matemático (`jogos/mico_matematico.html`) | impresso (43 cartas) | EF06MA03, EF06MA07, EF06MA08, EF06MA09, EF06MA11, EF06MA13, EF07MA03, EF07MA04, EF08MA01, EF08MA02, EF09MA03, EF09MA04 |
| OBMEP 2016 — Questão 15 (`obmep/2016_q15_n1.html`) | digital/projetado | EF06MA24 |
| OBMEP 2026 — Questão 20 (`obmep/2026_q20_n1.html`) | digital/projetado | EF06MA17, EF07MA21 |
| Caderno da Oficina (`outros_materiais/material_oficina_completo.html`) | impresso (formação docente) | EF06MA07, EF06MA13, EF04CI01, EF04CI03, EF04CI04 |
| PDF Workspace (`editor_pdf/index.html`) | ferramenta digital | — |

## Rodando o site localmente

```bash
# instalar as dependências (uma vez)
gem install jekyll

# gerar o site em _site/
jekyll build

# servir em http://localhost:4000 com recarga automática
jekyll serve
```

Cada material também pode ser aberto direto no navegador, sem build — as páginas que usam `{% include analytics.html %}` e o front matter simplesmente ignoram essas linhas quando abertas como arquivo.

## Criando um material novo

1. Coloque o HTML na pasta do portal correspondente (`pibid/`, `geometria/`, `libras/`, `obmep/`, `outros_materiais/`).
2. Abra o arquivo com o front matter do Jekyll:

```yaml
---
titulo: "Nome do material"
icone: "🎲"
descricao: "Uma ou duas frases explicando o que o aluno faz."
habilidades:
  - EF06MA07
  - EF06MA13
---
```

3. No `<head>`, inclua o analytics logo após o `<meta charset="UTF-8">`:

```liquid
{% include analytics.html %}
```

4. No fim da página, inclua o botão de volta ao portal — sempre com o texto dizendo para onde ele leva — e esconda-o na impressão:

```html
<a id="btn-voltar" href="index.html">← Voltar ao portal do PIBID</a>
<style>@media print { #btn-voltar, .voltar, [id*="voltar"] { display: none !important; } }</style>
```

O portal lista os materiais automaticamente: basta que o arquivo esteja na pasta e tenha `titulo` no front matter.

## Convenções dos materiais impressos

- **Peças encostadas**: cartas, tiras e cartelas são desenhadas sem espaço entre as bordas de recorte, para facilitar o corte.
- **Manual do professor + gabarito** em folha separada do material do aluno.
- **Nada de botão na impressão**: botões de navegação, controles e barras ficam ocultos em `@media print`.
- **Tamanho real**: as peças usam medidas em milímetros para sair no tamanho certo em folha A4, impressa a 100%, sem margens quando possível.
- **Sem tinta desnecessária**: evite rodapés e blocos de instruções repetidos em cada folha.

## Créditos

Materiais desenvolvidos como PIBIDiano e durante minha graduação em Matemática ne UFFS.
