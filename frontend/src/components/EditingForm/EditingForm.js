import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import style from './EditingForm.module.scss';
import classNames from 'classnames';
import { PreDeleteModal } from '../PreDeleteModal';
import { createNewHero, updateHero } from '../../api/heroesApi';
import { useAppContext } from '../../AppContet';
import { LoaderButton } from '../LoaderButton';
export const EditingForm = ({ currentHero, isEditWindowOpen, setIsEditWindowOpen, creating }) => {
    const { nickname, real_name, origin_description, superpowers, catch_phrase, id } = currentHero;
    const [preDeleteModal, setPreDeleteModal] = useState(false);
    const { heroes, setHeroes } = useAppContext();
    const [isButtonLoading, setIsButtonLoading] = useState(false);
    const [heroState, setHeroState] = useState({
        id,
        nickname,
        real_name,
        origin_description,
        superpowers,
        catch_phrase,
    });
    const handleSubmitChanges = () => {
        setIsButtonLoading(true);
        if (creating) {
            createNewHero(heroState)
                .then((newHero) => {
                const newHeroes = heroes && [...heroes, newHero];
                if (newHeroes) {
                    setHeroes(newHeroes);
                    setIsEditWindowOpen(false);
                }
            })
                .catch((err) => console.log(err))
                .finally(() => setIsButtonLoading(false))
                .finally(() => window.location.reload());
        }
        else {
            updateHero(id, heroState)
                .then((updatedHero) => {
                const newHeroes = heroes?.map(hero => hero.id === id ? updatedHero : hero);
                if (newHeroes) {
                    setHeroes(newHeroes);
                    setIsEditWindowOpen(false);
                }
            })
                .catch((err) => console.log(err))
                .finally(() => setIsButtonLoading(false))
                .finally(() => window.location.reload());
        }
    };
    return (_jsxs("div", { className: classNames(style.block, { [style['block--open']]: !isEditWindowOpen }), children: [_jsxs("div", { className: style.top, children: [!creating && (_jsx("button", { type: 'button', className: style.close, onClick: () => setPreDeleteModal(true), children: _jsx("svg", { className: style.svg, children: _jsx("use", { href: '/sprite.svg#icon-bin' }) }) })), _jsx("h3", { className: style.title, children: creating ? 'Create new hero' : 'Edit hero info' }), _jsx("button", { type: 'button', className: style.close, onClick: () => setIsEditWindowOpen(false), children: _jsx("svg", { className: style.svg, children: _jsx("use", { href: '/sprite.svg#icon-cross' }) }) })] }), _jsxs("form", { className: style.form, onSubmit: handleSubmitChanges, children: [_jsxs("label", { className: style.label, children: ["Nickname:", _jsx("input", { type: "text", className: style.input, value: heroState.nickname, onChange: (e) => setHeroState({ ...heroState, nickname: e.target.value }) })] }), _jsxs("label", { className: style.label, children: ["Real name:", _jsx("input", { type: "text", className: style.input, value: heroState.real_name, onChange: (e) => setHeroState({ ...heroState, real_name: e.target.value }) })] }), _jsxs("label", { className: style.label, children: ["Description:", _jsx("input", { type: "text", className: style.input, value: heroState.origin_description, onChange: (e) => setHeroState({ ...heroState, origin_description: e.target.value }) })] }), _jsxs("label", { className: style.label, children: ["Superpowers:", _jsx("input", { type: "text", className: style.input, value: heroState.superpowers, onChange: (e) => setHeroState({ ...heroState, superpowers: e.target.value }) })] }), _jsxs("label", { className: style.label, children: ["Catch phrase:", _jsx("input", { type: "text", className: style.input, value: heroState.catch_phrase, onChange: (e) => setHeroState({ ...heroState, catch_phrase: e.target.value }) })] }), !isButtonLoading ? (_jsx("button", { type: 'submit', className: style.button, children: creating ? 'Create new hero?' : 'Confirm changes?' })) : (_jsx(LoaderButton, {})), _jsx("button", { type: 'button', className: `${style.button} ${style['button--cancel']}`, onClick: () => setIsEditWindowOpen(false), children: creating ? 'Cancel creating' : 'Cancel changes?' })] }), preDeleteModal && _jsx(PreDeleteModal, { setPreDeleteModal: setPreDeleteModal, currentHero: currentHero })] }));
};
