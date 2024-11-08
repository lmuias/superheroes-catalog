import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useSwiper } from "swiper/react";
import style from './SwiperNavigation.module.scss';
export const SwiperNavigation = () => {
    const swiper = useSwiper();
    return (_jsxs("div", { className: style['swiper-navigation'], children: [_jsx("button", { type: "button", className: `${style["swiper-navigation__button"]} ${style['swiper-navigation__button--prev']}`, onClick: () => swiper.slidePrev(), children: _jsx("svg", { className: style.navigation, children: _jsx("use", { href: '/sprite.svg#icon-point-left' }) }) }), _jsx("button", { type: "button", className: `${style["swiper-navigation__button"]} ${style['swiper-navigation__button--next']}`, onClick: () => swiper.slideNext(), children: _jsx("svg", { className: style.navigation, children: _jsx("use", { href: '/sprite.svg#icon-point-right' }) }) })] }));
};
