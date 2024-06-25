import React from 'react';
import styles from './App.module.css';
import { FirstTask } from './FirstTask/FirstTask';
import { SecondTask } from './SecondTask/SecondTask';

function App() {
  return (
    <div className={styles.container}>
      <h1 className={styles.header}>Задание для фронтенд разработчика</h1>
      <h2>Задание 1. HTTP-запросы</h2>
      <FirstTask/>
      <h2>Задание 2. Исправить ошибку</h2>
      <SecondTask/>
    </div>
  );
}

export default App;
