import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './MainPage.module.scss';
import { HeroList } from '../../components/HeroList';
import { EditingForm } from '../../components/EditingForm';
import { useState } from 'react';
export const MainPage = () => {
    const [isEditWindowOpen, setIsEditWindowOpen] = useState(false);
    const hero = {
        id: '',
        nickname: '',
        real_name: '',
        origin_description: '',
        superpowers: '',
        catch_phrase: '',
    };
    return (_jsxs("section", { className: style.container, children: [_jsxs("div", { className: style.text, children: [_jsx("h1", { className: style.title, children: "Superheroes Catalog: Discover Your Favorite Heroes" }), _jsx("p", { className: style.description, children: "Welcome to the Superheroes Catalog! This is the ultimate directory where you can explore an ever-growing list of legendary superheroes from all corners of the universe. Each entry in this catalog includes a hero\u2019s nickname, their unique superpowers, and fascinating origin stories that have captivated fans for generations. Whether you're a lifelong fan or new to the world of superheroes, this catalog is your gateway to learning about the strengths, catchphrases, and histories of each hero. Dive in and find out what makes each superhero a true icon!" })] }), _jsx("button", { type: 'button', className: style.button, onClick: () => setIsEditWindowOpen(!isEditWindowOpen), children: "Create new hero" }), _jsx(EditingForm, { isEditWindowOpen: isEditWindowOpen, currentHero: hero, setIsEditWindowOpen: setIsEditWindowOpen, creating: true }), _jsx(HeroList, {})] }));
};
