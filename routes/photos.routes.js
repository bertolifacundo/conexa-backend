const { Router } = require('express');
const { getPhotos } = require('../controllers/photos.controller');

const router = Router();
/**
 * @swagger
 * /api/photos:
 *  get:
 *    summary: Obtener lista de photos de la api https://jsonplaceholder.typicode.com/photos. Por defecto trae los primeros 10
 *    tags: [Photos]
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

router.get('/', getPhotos);

module.exports = router;
