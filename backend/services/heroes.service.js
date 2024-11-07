import { client } from './db.js';

export const getAll = async () => {
  const result = await client.query(`
    SELECT * FROM heroes
    `);

  return result.rows;
};

export const getById = async (heroId) => {
  const result = await client.query(`
    SELECT * FROM heroes
    WHERE id = $1
    `, [heroId]);

  return result.rows[0];
}

export const createHero = async (nickname, real_name, origin_description, catch_phrase, superpowers) => {
  const result = await client.query(`
    INSERT INTO heroes (nickname, real_name, origin_description, catch_phrase, superpowers)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING id, nickname, real_name, origin_description, catch_phrase, superpowers
  `, [nickname, real_name, origin_description, catch_phrase, superpowers]);

  const createdHero = result.rows[0];

  return createdHero;
};

export const deleteHero = async (id) => {
  await client.query(`
    DELETE from heroes
    WHERE id= $1
    `, [id])
};

export const updateHero = async ({ id, nickname, real_name, origin_description, catch_phrase, superpowers }) => {
  const result = await client.query(`
    UPDATE heroes
    SET nickname=$1, real_name=$2, origin_description=$3, catch_phrase=$4, superpowers=$5
    WHERE id = $6
    RETURNING id, nickname, real_name, origin_description, catch_phrase, superpowers
  `, [nickname, real_name, origin_description, catch_phrase, superpowers, id]);

  return result.rows[0];
};