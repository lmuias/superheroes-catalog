/* eslint-disable react-refresh/only-export-components */
/* eslint-disable @typescript-eslint/no-empty-object-type */
import React, { createContext, useContext, useEffect, useState } from "react";
import { HeroModel } from "./types/HeroModel";
import { getAllHeroes } from "./api/heroesApi";

interface AppContextInterface {
  heroes: HeroModel[] | null;
  setHeroes: (hero: HeroModel[] | null) => void;
}

const AppContext = createContext<AppContextInterface | undefined>(undefined);

export const AppProvider: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {

  const [heroes, setHeroes] = useState<HeroModel[] | null>(null);

  useEffect(() => {
    getAllHeroes()
      .then((res) => {
        setHeroes(res as HeroModel[]);
      })
  }, []);

  return (
    <AppContext.Provider
      value={{
        heroes,
        setHeroes,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }

  return context;
};
