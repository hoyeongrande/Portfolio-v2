import React from "react";
import styles from "./Portfolio.module.css";

export default () => (
  <body>
    <h2 className={styles.title}>Portfolio.</h2>
    <section className={styles.list}>
      <div className={styles.wrapper}>
        <a
          href="https://epic-davinci-c120d5.netlify.com"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>React Movie App</div>
        </a>

        <a
          href="https://github.com/hoyeongrande/catch-mind-2020"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Real-Time Drawing(Catch Mind)</div>
        </a>
        <a
          href="https://hoyeongrande.github.io/kokoa-clone-v2/friends.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>KakaoTalk Clowning</div>
        </a>
        <a
          href="https://github.com/hoyeongrande/wetub-v2"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>
            Youtube Clowning Web Application
          </div>
        </a>
        <a
          href="https://hoyeongrande.github.io/myPortfolio/blueprint/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Mobile UI Design</div>
        </a>
        <a
          href="https://hoyeongrande.github.io/myPortfolio/blueprint%20(1)/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Mobile UI Design</div>
        </a>
        <a
          href="css-grid-practice/one/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Web Page UI Design</div>
        </a>
        <a
          href="css-grid-practice/two/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Web Page UI Design</div>
        </a>
        <a
          href="css-grid-practice/three/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Web Page UI Design</div>
        </a>
        <a
          href="css-grid-practice/four/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Web Page UI Design</div>
        </a>
        <a
          href="css-grid-practice/five/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Web Page UI Design</div>
        </a>
        <a
          href="css-grid-practice/six/index.html"
          className={styles.box}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className={styles.image}></div>
          <div className={styles.paragraph}>Web Page UI Design</div>
        </a>
      </div>
    </section>
  </body>
);
