import { HeroModel } from "../types/HeroModel";
import { client } from "./fetchClient";

export const getAllHeroes = () => {
  return client.get('/heroes');
};

export const getHero = (heroId: string) => {
  return client.get(`/heroes/${heroId}`);
}

export const createNewHero = (data: HeroModel) => {
  return client.post('/heroes', data);
};

export const deleteHero = (heroId: string) => {
  return client.delete(`/heroes/${heroId}`);
};

export const updateHero = (heroId: string, updatedHero: HeroModel) => {
  return client.put(`/heroes/${heroId}`, updatedHero);
};