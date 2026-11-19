// src/app/api/posts/route.js
//rota limpa: só recebe a requisição e devolve a resposta do Controller

import { obterPostsPublicados } from '@/controllers/postController';
import { NextResponse } from 'next/server';

export async function GET() {
  const posts = obterPostsPublicados();
  return NextResponse.json(posts, { status: 200 });
}
