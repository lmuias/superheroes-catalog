import React from "react";
import { useSwiper } from "swiper/react";
import style from './SwiperNavigation.module.scss';

export const SwiperNavigation: React.FC = () => {
  const swiper = useSwiper();

  return (
    <div className={style['swiper-navigation']}>
      <button
        type="button"
        className={`${style["swiper-navigation__button"]} ${style['swiper-navigation__button--prev']}`}
        onClick={() => swiper.slidePrev()}
      >
        <svg className={style.navigation}>
          <use href='/sprite.svg#icon-point-left'></use>
        </svg>
      </button>
      <button
        type="button"
        className={`${style["swiper-navigation__button"]} ${style['swiper-navigation__button--next']}`}
        onClick={() => swiper.slideNext()}
      >
        <svg className={style.navigation}>
          <use href='/sprite.svg#icon-point-right'></use>
        </svg>
      </button>
    </div>
  );
};
