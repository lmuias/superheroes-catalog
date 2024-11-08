import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import style from './PreDeleteModal.module.scss';
import { deleteHero } from '../../api/heroesApi';
import { useAppContext } from '../../AppContet';
import { useNavigate } from 'react-router-dom';
export const PreDeleteModal = ({ setPreDeleteModal, currentHero }) => {
    const { heroes, setHeroes } = useAppContext();
    const navigate = useNavigate();
    const handleConfirmDelete = () => {
        deleteHero(currentHero.id)
            .then(() => {
            const filteredHeroes = heroes && heroes.filter(hero => hero.id !== currentHero.id);
            setHeroes(filteredHeroes);
        })
            .finally(() => navigate('/'));
    };
    const handleCancelDelete = () => {
        setPreDeleteModal(false);
    };
    return (_jsxs("div", { className: style.block, children: [_jsx("p", { className: style.title, children: "Are you sure you want to delete this hero?" }), _jsxs("div", { className: style.buttons, children: [_jsx("button", { type: "button", className: `${style.button} ${style['button--confirm']}`, onClick: handleConfirmDelete, children: "Yes" }), _jsx("button", { type: "button", className: `${style.button} ${style['button--cancel']}`, onClick: handleCancelDelete, children: "No" })] })] }));
};
