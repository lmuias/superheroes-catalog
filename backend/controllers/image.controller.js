import * as imageService from '../services/images.service.js';

export const get = async (req, res) => {
  const { id } = req.params;
  const heroImages = await imageService.getHeroImages(id);
  
  if (heroImages) {
    res.json(heroImages);
  } else {
    res.sendStatus(404);
  }
}

export const getOne = async (req, res) => {
  const { id, imageUrl } = req.params;
  const specificImage = await imageService.getSpecificImage(id, imageUrl);
  
  if (specificImage) {
    res.json({ image: specificImage });
  } else {
    res.sendStatus(404);
  }
}

export const add = async (req, res) => {
  const { id } = req.params;
  const { newImageUrl } = req.body;

  await imageService.addImageToHero(id, newImageUrl);
  res.sendStatus(204);
};

export const uploadMainImage = async (req, res) => {
  const { id } = req.params;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const imageUrl = `/uploads/images/${req.file.filename}`;
  await imageService.addMainImageToHero(id, imageUrl);

  res.status(201).json({ imageUrl });
}

export const remove = async (req, res) => {
  const { id } = req.params;
  const { imageUrl } = req.body;
  await imageService.deleteImageFromHero(id, imageUrl);
  res.sendStatus(204);
}
export const uploadImage = async (req, res) => {
  const { id } = req.params;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ error: 'No file uploaded' });
  }

  const imageUrl = `/uploads/images/${req.file.filename}`;
  await imageService.addImageToHero(id, imageUrl);

  res.status(201).json({ imageUrl });
};