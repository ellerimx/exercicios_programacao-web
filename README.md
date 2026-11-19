# Exercícios de Programação Web

Exercícios e exemplos feitos em sala nas aulas de Programação Web :D

## Aulas

| Aula | Assunto | Onde está |
|------|---------|-----------|
| 01 | Fundamentos da web: modelo cliente-servidor, HTTP | Só teoria |
| 02 | HTML: estrutura de um documento HTML5, tags semânticas, receita e formulário | [`receita/`](receita/) |
| 03 | CSS: seletores, cores, textos e estilização do blog | [`css/blog/`](css/blog/) |
| 04 | CSS: Box Model, `box-sizing` e layouts com Flexbox (navbar e conteúdo + sidebar) | [`css/blog/`](css/blog/) |
| 05 | JavaScript: variáveis, funções, DOM e eventos de clique | [`css/blog/script.js`](css/blog/script.js) |
| 06 | JavaScript: parâmetros, `return`, mais eventos, formulário de comentários com `preventDefault` | [`css/blog/`](css/blog/) e desafio em [`calculadora/`](calculadora/) |
| 07 | JavaScript moderno (ES6+): arrow functions, template literals, destructuring, `.map()` e `.filter()` | Usado no projeto Next.js |
| 08 | Introdução ao React e Next.js: componentes, JSX e criação do projeto | [`meu-primeiro-app-next/`](meu-primeiro-app-next/) |
| 09 | Next.js: componentes reutilizáveis, props, CSS Modules e rotas com App Router | [`meu-primeiro-app-next/`](meu-primeiro-app-next/) |
| 10 | Hooks: `useState`, Client Components e componentes controlados | [`meu-primeiro-app-next/`](meu-primeiro-app-next/) |
| 11 | Consumo de APIs: `fetch`, `async/await`, `useEffect`, estados de loading e erro | [`meu-primeiro-app-next/`](meu-primeiro-app-next/) |
| 12 | Introdução ao back-end e Node.js: REPL, módulos CommonJS, `fs` e npm | [`aula-node/`](aula-node/) |

## Pastas

| Pasta | Conteúdo | Tecnologias |
|-------|----------|-------------|
| [`receita/`](receita/) | Primeira página, receita de homus e formulário de comentário | HTML, CSS |
| [`css/blog/`](css/blog/) | "Meu Blog de Tecnologia": HTML semântico, estilos, layout Flexbox, DOM e formulário de comentários | HTML, CSS, JavaScript |
| [`calculadora/`](calculadora/) | Desafio da aula 6: calculadora com histórico de contas | HTML, CSS, JavaScript |
| [`meu-primeiro-app-next/`](meu-primeiro-app-next/) | Blog em Next.js com componentes, props, CSS Modules, rotas, `useState`, `useEffect` e consumo de API | React, Next.js |
| [`aula-node/`](aula-node/) | Calculadora modular no terminal, criação de arquivos com `fs` e uso do npm | Node.js |

## Como abrir

- **Projetos HTML/CSS/JS** (`receita`, `css/blog`, `calculadora`): basta abrir o arquivo `.html` no navegador (ou usar a extensão Live Server do VS Code).
- **Projeto Next.js** (`meu-primeiro-app-next`): veja as instruções no [README do projeto](meu-primeiro-app-next/README.md). Em resumo:

  ```bash
  cd meu-primeiro-app-next
  npm install
  npm run dev
  ```

  e abra [http://localhost:3000](http://localhost:3000).
- **Projeto Node.js** (`aula-node`): roda no terminal, veja o [README da aula](aula-node/README.md):

  ```bash
  cd aula-node
  npm install
  npm start
  ```
