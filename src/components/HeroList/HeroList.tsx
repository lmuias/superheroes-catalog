import React from "react";
import style from './HeroList.module.scss';
import { HeroCard } from "../HeroCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { SwiperNavigation } from "../swiperNavigation";
import { useAppContext } from "../../AppContet";

export const HeroList: React.FC = () => {
  const { heroes } = useAppContext();

  return (
    <div className={style.list}>
      <Swiper 
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        breakpoints={{
          744: {
            slidesPerView: 3
          },
          1024: {
            slidesPerView: 5
          }
        }}
        autoplay={{
          delay: 3000,
        }}
      >
        {heroes && heroes.map(hero => (
          <SwiperSlide  key={hero.nickname}>
            <HeroCard hero={hero} /> 
          </SwiperSlide>
        ))}
        <SwiperNavigation />
      </Swiper>
    </div>
  );
};