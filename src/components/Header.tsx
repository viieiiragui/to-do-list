import styles from './Header.module.css';
import rocket from '../assets/rocket.svg';

function Header() {
  return (
    <header className={styles.header}>
      <img src={rocket} alt="rocket" />
      <h1 className={styles.to}>to</h1>
      <h1 className={styles.do}>do</h1>
    </header>
  );
}

export default Header;
