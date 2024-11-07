import express from 'express';
import * as heroController from '../controllers/hero.controller.js';
import * as imageController from '../controllers/image.controller.js';
import { upload } from '../config/multer.js';

const router  = express.Router();


router.get('/', heroController.get)

router.get('/:id', heroController.getOne)

router.post('/', heroController.create)

router.delete('/:id',heroController.remove);

router.put('/:id', heroController.update);

// image-router

router.get('/:id/images/main-image', imageController.get);

router.get('/:imageUrl', imageController.getOne);

router.post('/', imageController.add);

router.post('/:id/upload', upload.single('image'), imageController.uploadImage);

router.post('/:id/upload/main-image', upload.single('image'), imageController.uploadMainImage);

router.delete('/:id/images', imageController.remove);





export { router }