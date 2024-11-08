import React, { useState } from 'react';
import { HeroModel } from '../../types/HeroModel';
import style from './EditingForm.module.scss';
import classNames from 'classnames';
import { PreDeleteModal } from '../PreDeleteModal';
import { createNewHero, updateHero } from '../../api/heroesApi';
import { useAppContext } from '../../AppContet';
import { LoaderButton } from '../LoaderButton';

interface Props {
  creating?: boolean;
  currentHero: HeroModel;
  isEditWindowOpen: boolean;
  setIsEditWindowOpen: (e: boolean) => void;
}

export const EditingForm: React.FC<Props> = ({ currentHero, isEditWindowOpen, setIsEditWindowOpen, creating }) => {
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
          const newHeroes = heroes &&  [...heroes, newHero as HeroModel];

          if (newHeroes) {
            setHeroes(newHeroes);
            setIsEditWindowOpen(false);
          }
        })
        .catch((err) => console.log(err))
        .finally(() => setIsButtonLoading(false))
        .finally(() => window.location.reload());

    } else {
      updateHero(id, heroState)
      .then((updatedHero) => {
        const newHeroes = heroes?.map(hero => hero.id === id ? updatedHero as HeroModel : hero);
  
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


  return (
    <div className={classNames(style.block, { [style['block--open']]: !isEditWindowOpen })}>
      <div className={style.top}>
        {!creating && (
          <button
            type='button' 
            className={style.close}
            onClick={() => setPreDeleteModal(true)}
          >
            <svg
              className={style.svg}
            >
              <use href='/sprite.svg#icon-bin'></use>
            </svg>
          </button>
        )}
        <h3 className={style.title}>{creating ? 'Create new hero' : 'Edit hero info'}</h3>
        <button
          type='button' 
          className={style.close}
          onClick={() => setIsEditWindowOpen(false)}
        >
          <svg
            className={style.svg}
          >
            <use href='/sprite.svg#icon-cross'></use>
          </svg>
        </button>
      </div>
      <form className={style.form} onSubmit={handleSubmitChanges}>
        <label className={style.label}>
          Nickname: 
          <input 
            type="text" 
            className={style.input} 
            value={heroState.nickname} 
            onChange={(e) => setHeroState({...heroState, nickname: e.target.value})}
          />
        </label>
        <label className={style.label}>
          Real name: 
          <input 
            type="text" 
            className={style.input} 
            value={heroState.real_name} 
            onChange={(e) => setHeroState({...heroState, real_name: e.target.value})}
          />
        </label>
        <label className={style.label}>
          Description: 
          <input 
            type="text" 
            className={style.input} 
            value={heroState.origin_description} 
            onChange={(e) => setHeroState({...heroState, origin_description: e.target.value})}
          />
        </label>
        <label className={style.label}>
          Superpowers: 
          <input 
            type="text" 
            className={style.input} 
            value={heroState.superpowers} 
            onChange={(e) => setHeroState({...heroState, superpowers: e.target.value})}
          />
        </label>
        <label className={style.label}>
          Catch phrase: 
          <input 
            type="text" 
            className={style.input} 
            value={heroState.catch_phrase} 
            onChange={(e) => setHeroState({...heroState, catch_phrase: e.target.value})}
          />
        </label>

        {!isButtonLoading ? (
          <button type='submit' className={style.button}>{creating ? 'Create new hero?' : 'Confirm changes?'}</button>
        ) : (
          <LoaderButton />
        )}
        <button 
          type='button' 
          className={`${style.button} ${style['button--cancel']}`}
          onClick={() => setIsEditWindowOpen(false)}
        >
          {creating ? 'Cancel creating' : 'Cancel changes?'}
        </button>
      </form>

      {preDeleteModal && <PreDeleteModal setPreDeleteModal={setPreDeleteModal} currentHero={currentHero} />}
    </div>
  );
};