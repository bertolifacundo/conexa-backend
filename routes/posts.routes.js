const { Router } = require('express');
const { getPosts } = require('../controllers/posts.controller');

const router = Router();

router.get('/', getPosts);

module.exports = router;
