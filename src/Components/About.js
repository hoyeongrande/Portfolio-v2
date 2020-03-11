import React from "react";
import styles from "./About.module.css";

export default () => (
  <body className={styles.body}>
    <main className={styles.main}>
      <section className={styles.gallery}>
        <div className={styles.gallery__wrapper}>
          <div className={styles.gallery__item}></div>
          <div className={styles.gallery__item}></div>
          <div className={styles.gallery__item}></div>
        </div>
      </section>

      <section class={styles.content}>
        <div class={styles.content__column}>
          <span>
            <h2 class={styles.content__title}>About Me</h2>
            <ul class={styles.content__datalist}>
              <li class={styles.datalist__item}>
                <span class={styles.datalist__name}>Born in</span>
                <span class={styles.datalist__value}>1996</span>
              </li>
              <li class={styles.datalist__item}>
                <span class={styles.datalist__name}>Major</span>
                <span class={styles.datalist__value}>Computer Engineering</span>
              </li>
              <li class={styles.datalist__item}>
                <span class={styles.datalist__name}>Favourite</span>
                <div className={styles.favourite}>
                  <span class={styles.datalist__value}>Web Development</span>
                  <span class={styles.datalist__value}>DJing</span>
                  <span class={styles.datalist__value}>Cat</span>
                </div>
              </li>
            </ul>
            <p class={styles.content__description}>
              미래의 웹 개발자, 장기적으로는 해외 취업 및 디지털 노마드를 목표로
              열심히 공부하고 있습니다.
            </p>
          </span>
        </div>

        <div class={styles.content__column}>
          <div class={styles.content__row}>
            <h2 class={styles.content__title}>my Skills</h2>
            <div className={styles.elementBox}>
              <div className={styles.element}></div>
              <div className={styles.element}></div>
              <div className={styles.element}></div>
              <div className={styles.element}></div>
              <div className={styles.element}></div>
              <div className={styles.element}></div>
            </div>
          </div>
          <div class={styles.content__row}>
            <h2 class={styles.content__title}>Challenge</h2>
            <p class={styles.content__description}>
              독학으로 웹 프로그래밍을 공부중이며, HTML/CSS를 시작으로
              Javascript 이후 framework인 React.js를 공부중입니다.
            </p>
          </div>
          <div class={styles.content__row}>
            <h2 class={styles.content__title}>Strength</h2>
            <p class={styles.content__description}>
              둥글둥글한 성격과 소통 능력, 많은 교내외 활동(동아리, 국제캡스톤,
              해외연수, 인턴 등)이 저의 강점입니다. 윗사람과 아랫사람을 어우르는
              커뮤니케이션도 강점이라 생각합니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  </body>
);
