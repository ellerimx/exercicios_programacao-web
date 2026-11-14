'use client';

import { useState } from 'react';
import styles from './Counter.module.css';

export default function Counter() {
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('');

  function handleChange(e) {
    setInputValue(e.target.value);
  }

  return (
    <div className={styles.counter}>
      <button onClick={() => setCount(count + 1)}>Cliques: {count}</button>

      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Texto digitado: {inputValue}</p>
    </div>
  );
}
