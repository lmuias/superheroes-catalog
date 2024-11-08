import { client } from "./fetchClient";
export const getAllHeroes = () => {
    return client.get('/heroes');
};
export const getHero = (heroId) => {
    return client.get(`/heroes/${heroId}`);
};
export const createNewHero = (data) => {
    return client.post('/heroes', data);
};
export const deleteHero = (heroId) => {
    return client.delete(`/heroes/${heroId}`);
};
export const updateHero = (heroId, updatedHero) => {
    return client.put(`/heroes/${heroId}`, updatedHero);
};
