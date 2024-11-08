import { Outlet } from 'react-router-dom';
import style from './App.module.scss';
import React from 'react';

export const App: React.FC = () => {
  return (
    <main className={style.main}>
      <Outlet />
    </main>
  )
}
