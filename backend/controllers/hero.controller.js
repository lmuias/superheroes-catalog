import * as heroService from '../services/heroes.service.js';

export const get = async (req, res) => {
  const heroes = await heroService.getAll();
  res.send(heroes);
};

export const getOne = async (req, res) => {
  const { id } = req.params;
  
  const hero = await heroService.getById(id);

  if (!hero) {
    res.sendStatus(404);
    return;
  }

  res.send(hero);
}

export const create = async (req, res) => {
  const { nickname, real_name, origin_description, catch_phrase, superpowers} = req.body;

  if (!nickname || !real_name || !origin_description || !catch_phrase) {
    res.sendStatus(422);
  }

  const hero = await heroService.createHero(nickname, real_name, origin_description, catch_phrase, superpowers)
  res.statusCode = 201;
  res.send(hero);
}

export const remove = async (req, res) => {
  const { id } = req.params;

  if (!heroService.getById(id)) {
    res.sendStatus(404);

    return;
  }

  heroService.deleteHero(id);

  res.sendStatus(204);
  return;
}

export const update = async (req, res) => {
  const { id } = req.params;
  const { nickname, real_name, origin_description, catch_phrase, superpowers } = req.body;

  if (!nickname || !real_name || !origin_description || !catch_phrase || !superpowers) {
    res.sendStatus(422);
    return;
  }

  let hero = await heroService.getById(id);

  if (!hero) {
    res.sendStatus(404);
    return;
  }

  const updatedHero = await heroService.updateHero({
    id,
    nickname,
    real_name,
    origin_description,
    catch_phrase,
    superpowers
  });

  res.send(updatedHero);
}