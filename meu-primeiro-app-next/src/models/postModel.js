
// src/models/postModel.js
// model: só sabe onde estão os dados e como buscar eles

const mockPosts = [
  { id: 1, titulo: "o poder do next.js", resumo: "aprenda a criar APIs...", status: "publicado" },
  { id: 2, titulo: "entendendo APIs", resumo: "como o JSON funciona...", status: "publicado" },
  { id: 3, titulo: "MVC no Next.js", resumo: "separando as responsabilidades...", status: "rascunho" },
];

export const PostModel = {
  buscarTodos: () => {
    return mockPosts; // No futuro, isso será um "SELECT * FROM posts"
  },
};
