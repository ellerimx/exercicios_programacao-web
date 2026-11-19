
// src/controllers/commentController.js
// controller de comentários: busca os dados no Model

import { CommentModel } from '@/models/commentModel';

export const obterComentarios = () => {
  return CommentModel.buscarTodos();
};
