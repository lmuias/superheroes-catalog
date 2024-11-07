import { client } from './db.js';

export const getHeroImages = async (heroId) => {
  const result = await client.query(`
    SELECT main_image
    FROM heroes
    WHERE id = $1
  `, [heroId]);

  return result.rows[0];
};

export const getSpecificImage = async (heroId, imageUrl) => {
  const result = await client.query(`
    SELECT images
    FROM heroes
    WHERE id = $1
  `, [heroId]);

  const hero = result.rows[0];
  if (hero && hero.images.includes(imageUrl)) {
    return imageUrl;
  } else {
    return null;
  }
};

export const addImageToHero = async (heroId, newImageUrl) => {
  await client.query(`
    UPDATE heroes
    SET images = array_append(images, $1)
    WHERE id = $2
  `, [newImageUrl, heroId]);
};

export const addMainImageToHero = async (heroId, newMainImageUrl) => {
  await client.query(`
    UPDATE heroes
    SET main_image = $1
    WHERE id = $2
  `, [newMainImageUrl, heroId]);
};

export const deleteImageFromHero = async (heroId, imageUrl) => {
  await client.query(`
    UPDATE heroes
    SET images = array_remove(images, $1)
    WHERE id = $2
  `, [imageUrl, heroId]);
};