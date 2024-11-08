import React from 'react';
import style from './PreDeleteModal.module.scss';
import { HeroModel } from '../../types/HeroModel';
import { deleteHero } from '../../api/heroesApi';
import { useAppContext } from '../../AppContet';
import { useNavigate } from 'react-router-dom';

interface Props {
  currentHero: HeroModel;
  setPreDeleteModal: (e: boolean) => void;
}

export const PreDeleteModal: React.FC<Props> = ({ setPreDeleteModal, currentHero }) => {
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
  
  return (
    <div className={style.block}>
    <p className={style.title}>
      Are you sure you want to delete this hero?
    </p>
    <div className={style.buttons}>
      <button
        type="button"
        className={`${style.button} ${style['button--confirm']}`}
        onClick={handleConfirmDelete}
      >
        Yes
      </button>
      <button
        type="button"
        className={`${style.button} ${style['button--cancel']}`}
        onClick={handleCancelDelete}
      >
        No
      </button>
    </div>
  </div>
  );
};
