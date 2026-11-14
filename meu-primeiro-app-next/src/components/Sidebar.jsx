'use client';

import { useState, useEffect } from 'react';
import styles from './Sidebar.module.css';

export default function Sidebar() {
  // 1 - estados: dados, carregamento e erro
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // 2 - efeito: busca os posts apenas uma vez, quando o componente monta ([])
  useEffect(() => {
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');

        if (!response.ok) {
          throw new Error('Falha ao buscar os posts.');
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchPosts();
  }, []);

  // 3 - renderização condicional para os 3 estados
  return (
    <aside className={styles.sidebar}>
      <h3>Posts Recentes</h3>

      {loading && <p>Carregando posts...</p>}

      {error && <p className={styles.error}>Erro: {error}</p>}

      {!loading && !error && (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`https://jsonplaceholder.typicode.com/posts/${post.id}`} target="_blank" rel="noreferrer">
                {post.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
