const { Router } = require('express');
const { getPhotos } = require('../controllers/photos.controller');

const router = Router();

router.get('/', getPhotos);

module.exports = router;
