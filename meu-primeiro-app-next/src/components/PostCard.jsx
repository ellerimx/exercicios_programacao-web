import styles from './PostCard.module.css';

export default function PostCard({ titulo, resumo }) {
  return (
    <article className={styles.card}>
      <h3>{titulo}</h3>
      <p>{resumo}</p>
    </article>
  );
}
