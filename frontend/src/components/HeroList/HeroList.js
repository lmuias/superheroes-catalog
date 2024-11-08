import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './HeroList.module.scss';
import { HeroCard } from "../HeroCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import 'swiper/css';
import { SwiperNavigation } from "../swiperNavigation";
import { useAppContext } from "../../AppContet";
export const HeroList = () => {
    const { heroes } = useAppContext();
    return (_jsx("div", { className: style.list, children: _jsxs(Swiper, { modules: [Autoplay], spaceBetween: 20, slidesPerView: 1, loop: true, breakpoints: {
                744: {
                    slidesPerView: 3
                },
                1024: {
                    slidesPerView: 5
                }
            }, autoplay: {
                delay: 3000,
            }, children: [heroes && heroes.map(hero => (_jsx(SwiperSlide, { children: _jsx(HeroCard, { hero: hero }) }, hero.nickname))), _jsx(SwiperNavigation, {})] }) }));
};
