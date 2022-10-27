import styles from './Reviews.module.scss';

export function Reviews() {
  return (
    <section className={styles.Services}>
      <div className={styles.Container}>
        <div className={styles.Texts}>
          <h3 className={styles.Title}>Easy translations</h3>

          <p className={styles.Paragraph}>
            Discover early user's feedbacks on
            <span>Dico integration within their workflows.</span>
          </p>
        </div>
        <div className={styles.Cards}>
          <div className={styles.Card}>
            <img
              src='https://images.prismic.io/dico-apex/b0c511b2-111a-4e8a-b636-09b1457fb94f_Martin.png?auto=compress,format&rect=0,0,240,240&w=64&h=64'
              alt='He'
              className={styles.CardImg}
            />
            <div className={styles.CardContent}>
              <p className={styles.CardName}>Martin Goutry</p>
              <p className={styles.CardRol}>
                Creative Developer at Diesdas.digital
              </p>
              <p className={styles.CardComment}>
                Cool to see a useful tool and not a new iteration of the same
                proposition. Will stay curious about Dico!
              </p>
              <div className={styles.CardInfo}>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-4 h-auto'
                  data-v-1f4049d4=''
                  data-v-f501703a=''
                >
                  <path
                    d='M0 16.5A2.51 2.51 0 012.522 14H16v5H2.522A2.51 2.51 0 010 16.5z'
                    fill='#6284FF'
                  ></path>
                  <path
                    d='M16 12H2.522A2.51 2.51 0 010 9.5 2.51 2.51 0 012.522 7H16v5z'
                    fill='#ED5572'
                  ></path>
                  <path
                    d='M3 0H16.636A2.354 2.354 0 0119 2.344v.312A2.354 2.354 0 0116.636 5H3V0z'
                    fill='#FFB21D'
                  ></path>
                </svg>
                <span className={styles.CardDate}>Dico user, 2021.04.08</span>
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <img
              src='https://images.prismic.io/dico-apex/2b3a9062-f250-486e-8c59-1b35d5306096_Agnes.png?auto=compress,format&rect=0,0,240,240&w=64&h=64'
              alt='He'
              className={styles.CardImg}
            />
            <div className={styles.CardContent}>
              <p className={styles.CardName}>Agnès Remi</p>
              <p className={styles.CardRol}>Back-end developper at MyDodow</p>
              <p className={styles.CardComment}>
                Dico is finally addressing a long time problem we had when
                building UIs. It's ease of use and workflow seems really
                intuitive. Promising!
              </p>
              <div className={styles.CardInfo}>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-4 h-auto'
                  data-v-1f4049d4=''
                  data-v-f501703a=''
                >
                  <path
                    d='M0 16.5A2.51 2.51 0 012.522 14H16v5H2.522A2.51 2.51 0 010 16.5z'
                    fill='#6284FF'
                  ></path>
                  <path
                    d='M16 12H2.522A2.51 2.51 0 010 9.5 2.51 2.51 0 012.522 7H16v5z'
                    fill='#ED5572'
                  ></path>
                  <path
                    d='M3 0H16.636A2.354 2.354 0 0119 2.344v.312A2.354 2.354 0 0116.636 5H3V0z'
                    fill='#FFB21D'
                  ></path>
                </svg>
                <span className={styles.CardDate}>Dico user, 2021.03.02</span>
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <img
              src='https://images.prismic.io/dico-apex/591360de-4e9e-4f2f-acbc-8fa1fadcb280_Romain.png?auto=compress,format&rect=0,0,240,240&w=64&h=64'
              alt='He'
              className={styles.CardImg}
            />
            <div className={styles.CardContent}>
              <p className={styles.CardName}>Romain Le Quellec</p>
              <p className={styles.CardRol}>Front-end developper at Owkin</p>
              <p className={styles.CardComment}>
                Dico feels like quite an exciting new tool. Can't wait to try it
                for real and integrate it in my workflow!
              </p>
              <div className={styles.CardInfo}>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-4 h-auto'
                  data-v-1f4049d4=''
                  data-v-f501703a=''
                >
                  <path
                    d='M0 16.5A2.51 2.51 0 012.522 14H16v5H2.522A2.51 2.51 0 010 16.5z'
                    fill='#6284FF'
                  ></path>
                  <path
                    d='M16 12H2.522A2.51 2.51 0 010 9.5 2.51 2.51 0 012.522 7H16v5z'
                    fill='#ED5572'
                  ></path>
                  <path
                    d='M3 0H16.636A2.354 2.354 0 0119 2.344v.312A2.354 2.354 0 0116.636 5H3V0z'
                    fill='#FFB21D'
                  ></path>
                </svg>
                <span className={styles.CardDate}>Dico user, 2021.04.22</span>
              </div>
            </div>
          </div>
          {/* iomg */}

          <div className={styles.Card}>
            <img
              src='https://images.prismic.io/dico-apex/1517852f-9ed0-49c3-b819-e99a3198af58_Olivier.png?auto=compress,format&rect=0,0,240,240&w=64&h=64'
              alt='He'
              className={styles.CardImg}
            />
            <div className={styles.CardContent}>
              <p className={styles.CardName}>Olivier Rabot</p>
              <p className={styles.CardRol}>
                Back-end developper at SuperSpace
              </p>
              <p className={styles.CardComment}>
                As a back-end developer, I'm impressed by the ease of the
                integration of Dico. My front won't need me anymore, giving me
                more time for fine-tuning and optimization: awesome!
              </p>
              <div className={styles.CardInfo}>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-4 h-auto'
                  data-v-1f4049d4=''
                  data-v-f501703a=''
                >
                  <path
                    d='M0 16.5A2.51 2.51 0 012.522 14H16v5H2.522A2.51 2.51 0 010 16.5z'
                    fill='#6284FF'
                  ></path>
                  <path
                    d='M16 12H2.522A2.51 2.51 0 010 9.5 2.51 2.51 0 012.522 7H16v5z'
                    fill='#ED5572'
                  ></path>
                  <path
                    d='M3 0H16.636A2.354 2.354 0 0119 2.344v.312A2.354 2.354 0 0116.636 5H3V0z'
                    fill='#FFB21D'
                  ></path>
                </svg>
                <span className={styles.CardDate}>Dico user, 2021.03.18</span>
              </div>
            </div>
          </div>

          <div className={styles.Card}>
            <img
              src='https://images.prismic.io/dico-apex/c4cafe94-1491-450a-85c8-323280b003fd_Theo.png?auto=compress,format&rect=0,0,240,240&w=64&h=64'
              alt='He'
              className={styles.CardImg}
            />
            <div className={styles.CardContent}>
              <p className={styles.CardName}>Theo Champion</p>
              <p className={styles.CardRol}>Founder & CTO at Zigg</p>
              <p className={styles.CardComment}>
                It took me a minute to get the impact of Dico, but once in the
                dashboard, you can really see in which use cases it can be
                helpful!
              </p>
              <div className={styles.CardInfo}>
                <svg
                  width='19'
                  height='19'
                  viewBox='0 0 19 19'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                  class='w-4 h-auto'
                  data-v-1f4049d4=''
                  data-v-f501703a=''
                >
                  <path
                    d='M0 16.5A2.51 2.51 0 012.522 14H16v5H2.522A2.51 2.51 0 010 16.5z'
                    fill='#6284FF'
                  ></path>
                  <path
                    d='M16 12H2.522A2.51 2.51 0 010 9.5 2.51 2.51 0 012.522 7H16v5z'
                    fill='#ED5572'
                  ></path>
                  <path
                    d='M3 0H16.636A2.354 2.354 0 0119 2.344v.312A2.354 2.354 0 0116.636 5H3V0z'
                    fill='#FFB21D'
                  ></path>
                </svg>
                <span className={styles.CardDate}>Dico user, 2021.04.15</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
