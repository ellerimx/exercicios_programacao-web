
// src/app/api/comentarios/route.js
//rota limpa: chama o controller e devolve o JSON

import { obterComentarios } from '@/controllers/commentController';
import { NextResponse } from 'next/server';

export async function GET() {
  const comentarios = obterComentarios();
  return NextResponse.json(comentarios, { status: 200 });
}
