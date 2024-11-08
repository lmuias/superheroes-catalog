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
  }

  return (
    <section className={style.container}>
      <div className={style.text}>
        <h1 className={style.title}>Superheroes Catalog: Discover Your Favorite Heroes</h1>
        <p className={style.description}>
          Welcome to the Superheroes Catalog! This is the ultimate directory where you can explore an ever-growing list of legendary superheroes from all corners of the universe. 
          Each entry in this catalog includes a hero’s nickname, their unique superpowers, and fascinating origin stories that have captivated fans for generations. 
          Whether you're a lifelong fan or new to the world of superheroes, this catalog is your gateway to learning about the strengths, catchphrases, and histories of each hero. 
          Dive in and find out what makes each superhero a true icon!
        </p>
      </div>
      <button type='button' className={style.button} onClick={() => setIsEditWindowOpen(!isEditWindowOpen)}>Create new hero</button>
      <EditingForm 
        isEditWindowOpen={isEditWindowOpen} 
        currentHero={hero} 
        setIsEditWindowOpen={setIsEditWindowOpen}
        creating={true}
      />
      <HeroList />
    </section>
  );
};