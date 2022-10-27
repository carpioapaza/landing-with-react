import styles from './Footer.module.scss';
import { Logo } from './icons/Logo';

export function Footer() {
  return (
    <footer className={styles.Footer}>
      <div className={styles.Container}>
        <div className={styles.Left}>
          <Logo />
          <div className={styles.About}>
            <p className={styles.Slogan}>
              Dynamize the static content of your webapp.
            </p>
            <span className={styles.Copyright}>
              2021 Dico SAS - All rights reserved.
            </span>
          </div>
        </div>
        <div className={styles.Right}>
          <div className={styles.Table}>
            <ul className={styles.Column}>
              <li className={styles.RowTitle}>Disco</li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Pricing
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Documentation
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={`${styles.Link} ${styles.CtaLogin}`}>
                  Login
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={`${styles.Link} ${styles.CtaSignup}`}>
                  Signup
                </a>
              </li>
            </ul>
            <ul className={styles.Column}>
              <li className={styles.RowTitle}>Company</li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Legals
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Privacy Policy
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Terms of service
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Contact
                </a>
              </li>
            </ul>
            <ul className={styles.Column}>
              <li className={styles.RowTitle}>Socials</li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Twitter
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Blog
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  Forum
                </a>
              </li>
              <li className={styles.RowContent}>
                <a href='#' className={styles.Link}>
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
