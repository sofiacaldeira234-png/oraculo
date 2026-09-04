# A Voz da Alma — Oráculo de Maria Madalena

Pequena aplicação web que simula um oráculo inspirado nas mensagens de "A Voz da Alma". Permite tirar uma carta e ler a mensagem, a voz de Maria Madalena, um ritual e sugestões para o diário.

## Estrutura do repositório
- index.html         — aplicação web (HTML/CSS/JS)
- deck.json          — (opcional) dados das cartas em JSON
- assets/            — imagens e recursos estáticos
- README.md          — documentação (este ficheiro)

## Como usar
1. Clone o repositório:
   git clone https://github.com/sofiacaldeira234-png/oraculo.git
2. Abra `index.html` no navegador ou publique com GitHub Pages.
3. Clique em "Escutar a Alma" para tirar uma carta.

## Notas técnicas e melhorias sugeridas
- O ficheiro `index.html` inclui uma pequena amostra de cartas. Recomenda-se mover o deck completo para `deck.json` e carregar com fetch() para facilitar a manutenção.
- Substituir os URLs de exemplo por imagens finais com permissão/atribuição (colocar as imagens em `assets/`).
- Verificar direitos de autor se o conteúdo textual provém de um livro ou PDF. Incluir atribuições quando necessário.
- Melhorar acessibilidade (contraste, ARIA extras) e testes (lint / ESLint).
- Internacionalização: manter strings separadas para facilitar traduções.

## Licença
Adicione aqui a licença do projeto (por exemplo MIT) e informações de atribuição das imagens e textos, se aplicável.
