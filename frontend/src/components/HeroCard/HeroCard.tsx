import React  from 'react';
import { HeroModel } from '../../types/HeroModel';
import style from './HeroCard.module.scss';
import { Link } from 'react-router-dom';

interface Props {
  hero: HeroModel;
}

export const HeroCard: React.FC<Props> = ({ hero }) => {
  const { nickname, main_image, real_name } = hero;

  const imageUrl = main_image ? `http://localhost:8080${main_image.replace(/{|}/g, '')}` : null;
  
  return (
    <Link 
      to={`/heroes/${real_name}`} 
      className={style.item}
    >
      <div className={style.image} style={{ backgroundImage: `url(${imageUrl})` }}   />
      <h3 className={style.nickname}>{nickname}</h3>
    </Link>
  );
};