# A Voz da Alma — Oráculo de Maria Madalena

Este repositório contém uma versão estática do pequeno oráculo "A Voz da Alma" inspirado no material fornecido.

Nota rápida
- O conteúdo textual mantém-se em Português conforme o original.
- As imagens em assets/images são placeholders SVG para um demo local reproduzível. Substitua-as por imagens reais (ex.: Unsplash) e acrescente respetiva atribuição quando fizer o deploy.

Demo
- Abra index.html localmente (duplo clique) ou execute um servidor estático (ex.: `python -m http.server 8000`) e visite `http://localhost:8000`.

O que foi feito nesta PR
- README.md: convertido para Markdown com instruções e créditos.
- index.html: HTML limpo e acessível extraído do README original.
- assets/css/styles.css: estilos extraídos do bloco <style> original.
- assets/js/deck.js: base de dados `voiceOfSoulDeck` corrigida (objetos separados por vírgulas, array fechado) e imagens apontando para placeholders locais.
- assets/images/*.svg: imagens placeholder (um SVG simples por carta).
- LICENSE: MIT (padrão sugerido).

Estrutura recomendada do projeto

- index.html          — app principal
- assets/css/styles.css
- assets/js/deck.js
- assets/images/       — placeholders (substituir por imagens reais)
- README.md
- LICENSE

Como correr localmente
1. Clone o repositório
2. Troque para a branch `feature/split-readme` ou abra os ficheiros localmente
3. Abra `index.html` no navegador ou execute:
   ```bash
   python -m http.server 8000
   ```
   e visite http://localhost:8000

Atribuições e imagens
- As imagens actuais são placeholders criadas para demo. Se substituir por imagens do Unsplash, por favor inclua atribuição do autor e link no README.

Contribuições
- Corrigir/estender o deck (textos, traduções ou imagens reais)
- Melhorar acessibilidade (keyboard navigation, focus states)
- Implementar testes ou automações de build

Licença
MIT — ver LICENSE
