// src/controllers/postController.js
//controller: aplica a regra de negócio sobre os dados do Model

import { PostModel } from '@/models/postModel';

export const obterPostsPublicados = () => {
  const todosOsPosts = PostModel.buscarTodos();

  //a regra de negócio fica no Controller
  const apenasPublicados = todosOsPosts.filter((post) => post.status === "publicado");

  return apenasPublicados;
};
