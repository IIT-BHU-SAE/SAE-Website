import React from 'react';
import styles  from '../styles/HomeCards.module.css';
import Link from 'next/link';



const HomeCard = () => {
  return (
    <div className={styles.blog_slider}>
      <div className={`${styles.blog_slider__wrp} ${styles.swiper_wrapper}`}>
        <div className={`${styles.blog_slider__item} ${styles.swiper_slide}`}>
          <div className={styles.blog_slider__img}>
          <img src="/images/car.webp" alt="" />
          </div>
          <div className={styles.blog_slider__content}>
            <div className={styles.blog_slider__title}>The Culture of SAE</div>
            <div className={styles.blog_slider__text}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Recusandae voluptate repellendus magni illo ea animi? </div>
            <Link href="/events" className={styles.blog_slider__button}>Read More</Link>
          </div>
        </div>     
      </div>
      <div className={styles.blog_slider__pagination}></div>
    </div>
  );
};

export default HomeCard;