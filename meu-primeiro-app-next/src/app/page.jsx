
'use client';

import { useState, useEffect } from 'react';

import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import CommentSection from '@/components/CommentSection';
import Counter from '@/components/Counter';
import styles from './page.module.css';

const meusPosts = [
  { id: 1, titulo: 'Aprenda React', resumo: 'Os conceitos básicos de componentes, props e estado.' },
  { id: 2, titulo: 'Next.js e o App Router', resumo: 'Como criar páginas apenas criando pastas.' },
  { id: 3, titulo: 'CSS Modules', resumo: 'Estilos isolados e seguros para cada componente.' },
];

export default function Home() {

  const[meusPosts, setMeusPosts] = useState([]);

  useEffect(() => {
    const buscarPosts = async () => {
      try {
        const resposta = await fetch('/api/posts');
        const dados = await resposta.json();
        setMeusPosts(dados);
      } catch (erro) {
        console.error('Erro ao buscar posts:', erro);
      }
    };

    buscarPosts();
  }, []);

  return (
    <main className={styles.container}>
      <article className={styles.mainContent}>
        <h1>Meu Blog</h1>

        <h2>Últimos Posts</h2>
        {meusPosts.map((post) => (
          <PostCard key={post.id} titulo={post.titulo} resumo={post.resumo} />
        ))}

        <Counter />

        <CommentSection />
      </article>

      <Sidebar />
    </main>
  );
}
