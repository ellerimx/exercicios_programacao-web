'use client';

import { useState, useEffect } from 'react';
import styles from './CommentSection.module.css';

export default function CommentSection() {
  // estados da busca na API: dados, carregamento e erro
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // estado do input controlado (textarea)
  const [newCommentText, setNewCommentText] = useState('');

  // busca os comentários uma única vez, quando o componente monta ([])
  useEffect(() => {
    async function fetchComments() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments?postId=1');

        if (!response.ok) {
          throw new Error('Falha ao buscar os comentários.');
        }

        const data = await response.json();
        setComments(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }

    fetchComments();
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    const texto = newCommentText.trim();
    if (texto === '') {
      return;
    }

    const newCommentObject = {
      id: Date.now(),
      name: 'Visitante',
      body: texto,
    };


    setComments([...comments, newCommentObject]);
    setNewCommentText('');
  }

  return (
    <section className={styles.commentSection}>
      <h2>Comentários</h2>

      <form className={styles.commentForm} onSubmit={handleSubmit}>
        <label htmlFor="comment">Deixe seu comentário:</label>

        <textarea
          id="comment"
          name="comment"
          rows={4}
          value={newCommentText}
          onChange={(event) => setNewCommentText(event.target.value)}
          placeholder="Escreva seu comentário..."
        />

        <button type="submit">Enviar</button>
      </form>

      {loading && <p>Carregando comentários...</p>}

      {error && <p className={styles.error}>Erro: {error}</p>}

      {!loading && !error && (
        <div className={styles.commentList}>
          {comments.map((comment) => (
            <div key={comment.id} className={styles.comment}>
              <p className={styles.commentAuthor}>{comment.name} diz:</p>
              <p className={styles.commentText}>{comment.body}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
