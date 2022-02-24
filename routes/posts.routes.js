const { Router } = require('express');
const { getPosts } = require('../controllers/posts.controller');

const router = Router();
/**
 * @swagger
 * /api/posts:
 *  get:
 *    summary: Obtener lista de posts de la api https://jsonplaceholder.typicode.com/posts. Por defecto trae los primeros 10
 *    tags: [Posts]
 *    parameters:
 *      - in: query
 *        name: page
 *        schema:
 *          type: integer
 *        required: false
 *        description: Parametro correspondiente al numero de pagina
 *    responses:
 *      200:
 *        description: Lista cargada correctamente
 */
router.get('/', getPosts);

module.exports = router;
