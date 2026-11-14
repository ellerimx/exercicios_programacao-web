# Meu Primeiro App Next.js — Blog

Blog desenvolvido nas aulas de Programação Web, usando **React** e **Next.js** (App Router)

## Como rodar

Pré-requisito: [Node.js](https://nodejs.org) instalado.

```bash
cd meu-primeiro-app-next
npm install      # só na primeira vez
npm run dev
```

Depois abra [http://localhost:3000](http://localhost:3000) no navegador

### Páginas

| Rota | Conteúdo |
|------|----------|
| `/` | Home: lista de posts, contador, seção de comentários e sidebar |
| `/sobre` | Página "Sobre Nós" |
| `/contato` | Página de contato com e-mail |


## Estrutura

```
src/
├── app/
│   ├── layout.jsx          # molde principal: Header + {children} + Footer
│   ├── page.jsx            # homepage (artigo + sidebar)
│   ├── page.module.css
│   ├── globals.css
│   ├── sobre/page.jsx      # rota /sobre
│   └── contato/page.jsx    # rota /contato
└── components/
    ├── Header.jsx          # navegação com <Link>
    ├── Footer.jsx
    ├── PostCard.jsx        # recebe titulo e resumo via props
    ├── Counter.jsx         # useState + input controlado
    ├── CommentSection.jsx  # busca comentários na API e permite adicionar novos
    └── Sidebar.jsx         # busca os 3 posts mais recentes na API
```

cada componente tem seu próprio arquivo `.module.css`.

## O que foi visto em cada aula

### Aula 8: Introdução ao React e Next.js
- Abordagem imperativa (JS puro) × declarativa (React)
- Componentes e sintaxe JSX
- Criação do projeto com `create-next-app` e estrutura de pastas

### Aula 9: Construindo interfaces com Next.js
- Componentes reutilizáveis (`Header`, `Footer`) usados no `layout.jsx`
- Navegação com o componente `<Link>` de `next/link`
- **Props** e listas com `.map()` e a prop `key` (`PostCard`)
- Estilos isolados com **CSS Modules**
- Novas rotas criando pastas no App Router (`/sobre`, `/contato`)

### Aula 10: Hooks e gerenciamento de estado
- `useState` para dar memória aos componentes (`Counter`)
- Diretiva `'use client'` para componentes interativos
- **Componentes controlados**: `value` + `onChange` na `<textarea>`
- Adicionar comentários sem modificar o estado diretamente (`[...comments, novo]`)

### Aula 11: Consumindo APIs no front-end
- `fetch` com `async/await` e tratamento de erros com `try/catch`
- `useEffect` com array de dependências vazio (`[]`) para buscar dados na montagem
- Três estados para a interface: `loading`, `error` e dados
- Desafio: `Sidebar` buscando posts de `https://jsonplaceholder.typicode.com/posts?_limit=3`

## Scripts

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Gera a versão de produção |
| `npm run start` | Roda a versão de produção (depois do build) |
| `npm run lint` | Verifica o código com ESLint |
