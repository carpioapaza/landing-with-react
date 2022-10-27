import styles from './Hero.module.scss';
import { Card } from './icons/Card';
import { Message } from './icons/Message';
import { Menu } from './icons/Menu';
export function Hero() {
  return (
    <section className={styles.Hero}>
      <div className={styles.Container}>
        <div className={styles.Texts}>
          <img
            src='https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=302323&theme=dark'
            alt='featured image'
            className={styles.Image}
          />
          <h1 className={styles.Title}>
            <span>Hardcoded</span> strings into <span>editable</span>{' '}
            <span>content</span> for the whole team
          </h1>
          <p className={styles.Paragraph}>
            Discharge developers from editing the wording: with Dico, everyone
            in your team can update the hardcoded string of web apps.
          </p>
          <div className={styles.Cta}>
            <a href='#' className={styles.CtaHero}>
              <span>Create a Dico -></span>
            </a>
            <a href='#' className={styles.CtaHero}>
              Documentation
            </a>
          </div>
        </div>
        <figure className={styles.Figures}>
          {/* <Card />
          <Message />
          <Menu /> */}
        </figure>
      </div>
    </section>
  );
}
