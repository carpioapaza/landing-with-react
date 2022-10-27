import styles from './Header.module.scss';
import { Logo } from './icons/Logo';
export function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.Container}>
        <a href='#' className={styles.Logo}>
          <Logo />
        </a>
        <nav className={`${styles.Navbar} ${styles.Show}`}>
          <a href='#' className={styles.Link}>
            Pricing
          </a>
          <a href='#' className={styles.Link}>
            Documentation
          </a>
          <a href='#' className={styles.Link}>
            Blog
          </a>
          <a href='#' className={styles.Link}>
            Login
          </a>
          <a href='#' className={`${styles.Link} ${styles.Mod}`}>
            SignUp
          </a>
        </nav>
        <div className={styles.Menu}>
          Menu
          <svg
            fill='none'
            width='25'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
            class='h-5 w-5'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M4 6h16M4 12h16M4 18h16'
            ></path>
          </svg>
        </div>
      </div>
      {/* <h2 className={`${styles.mensaje} ${styles.mensaje2}`}>Hola</h2> */}
    </div>
  );
}
