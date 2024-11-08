import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './HeroCard.module.scss';
import { Link } from 'react-router-dom';
export const HeroCard = ({ hero }) => {
    const { nickname, main_image, real_name } = hero;
    const imageUrl = main_image ? `http://localhost:8080${main_image.replace(/{|}/g, '')}` : null;
    return (_jsxs(Link, { to: `/heroes/${real_name}`, className: style.item, children: [_jsx("div", { className: style.image, style: { backgroundImage: `url(${imageUrl})` } }), _jsx("h3", { className: style.nickname, children: nickname })] }));
};
