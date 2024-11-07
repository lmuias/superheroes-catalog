import { client } from './db.js';

let heroes = [
  {
    id: '1',
    nickname: "Superman",
    real_name: "Clark_Kent",
    origin_description: "he was born Kal-El on the planet Krypton, before being rocketed to Earth as an infant by his scientist father Jor-El, moments before Krypton's destruction",
    superpowers: "solar energy absorption and healing factor, solar flare and heat vision, solar invulnerability, flight",
    catch_phrase: "Look, up in the sky, it's a bird, it's a plane, it's Superman!",
    images: [
      "/superheroes/superman.webp"
    ]
  },
  {
    id: '2',
    nickname: "Batman",
    real_name: "Bruce_Wayne",
    origin_description: "after witnessing his parents' murder as a child, billionaire Bruce Wayne trains himself to the peak of human condition and becomes the vigilante Batman to protect Gotham City.",
    superpowers: "exceptional martial artist, peak human physical and mental conditioning, brilliant detective, access to advanced technology and gadgets",
    catch_phrase: "I am vengeance. I am the night. I am Batman!",
    images: [
      "/superheroes/Batman.webp"
    ]
  },
  {
    id: '3',
    nickname: "Wonder Woman",
    real_name: "Diana_Prince",
    origin_description: "Daughter of the Queen of the Amazons on the hidden island of Themyscira, she is gifted with superhuman abilities by the gods to protect humanity.",
    superpowers: "superhuman strength, agility, flight, combat skills, magical equipment like the Lasso of Truth, indestructible bracelets",
    catch_phrase: "In the name of all that is good, your wrath upon this world is over.",
    images: [
      "/superheroes/Wonder_Woman.webp"
    ]
  },
  {
    id: '4',
    nickname: "Spider-Man",
    real_name: "Peter_Parker",
    origin_description: "After being bitten by a radioactive spider, high school student Peter Parker gains spider-like abilities and uses them to fight crime in New York City.",
    superpowers: "wall-crawling, spider-sense, superhuman agility and strength, web-shooting",
    catch_phrase: "With great power comes great responsibility.",
    images: [
      "/superheroes/spider_man.webp"
    ]
  }, 
  {
    id: '5',
    nickname: "Iron Man",
    real_name: "Tony_Stark",
    origin_description: "A billionaire genius inventor, Tony Stark builds a powered suit of armor to save his life and later uses it to protect the world as Iron Man.",
    superpowers: "genius intellect, powered armor suit with flight, super strength, energy blasts, and advanced weapons",
    catch_phrase: "I am Iron Man.",
    images: [
      "/superheroes/iron_man.jpg"
    ]
  },
  {
    id: '6',
    nickname: "Hulk",
    real_name: "Bruce_Banner",
    origin_description: "Scientist Bruce Banner transforms into the Hulk, a massive, incredibly strong being, whenever his anger reaches extreme levels.",
    superpowers: "superhuman strength, endurance, and regeneration, becomes stronger the angrier he gets",
    catch_phrase: "Hulk smash!",
    images: [
      "/superheroes/hulk.jpg"
    ]
  }
]

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