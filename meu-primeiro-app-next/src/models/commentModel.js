
// src/models/commentModel.js
// model de comentários: dados fictícios

const mockComentarios = [
  { id: 1, postId: 1, name: "Ana", body: "Ótimo post, me ajudou muito!" },
  { id: 2, postId: 1, name: "Bruno", body: "Não sabia que dava pra criar APIs no Next." },
  { id: 3, postId: 2, name: "Carla", body: "Agora entendi como o JSON funciona." },
];

export const CommentModel = {
  buscarTodos: () => {
    return mockComentarios; // No futuro: "SELECT * FROM comentarios"
  },
};
