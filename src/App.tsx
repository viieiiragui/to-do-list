import { PlusCircle } from 'phosphor-react';
import Header from './components/Header';
import Tasks from './components/Tasks';

import styles from './App.module.css';
import './global.css';

function App() {
  return (
    <div>
      <Header />

      <main className={styles.wrapper}>
        <Tasks />
      </main>
    </div>
  );
}

export default App;
