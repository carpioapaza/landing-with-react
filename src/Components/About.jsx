import styles from './About.module.scss';

export function About() {
  return (
    <div className={styles.About}>
      <div className={styles.Container}>
        <div className={styles.Texts}>
          <h2 className={styles.Title}>
            Developers won't be in charge of editing the wording anymore
          </h2>
          <h3 className={styles.Paragraph}>
            Replace <span>hardcoded strings</span> by <span>Dico keys</span>{' '}
            from the code. Values are then <span>editable </span>by anyone from
            Dico UI.
          </h3>
        </div>
        <figure className={styles.Figure}>
          <iframe
            className={styles.Video}
            // width='560'
            // height='315'
            src='https://www.youtube.com/embed/UT8h69WbT18'
            title='YouTube video player'
            frameborder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            allowfullscreen
          ></iframe>
        </figure>
      </div>
    </div>
  );
}
