const { Router } = require('express');
const { check } = require('express-validator');

const { validateFields } = require('../middlewares/validate-fields');

const { login } = require('../controllers/auth.controller');

const router = Router();
/**
 * @swagger
 * components:
 *  schemas:
 *    Login:
 *      type: object
 *      properties:
 *        email:
 *          type: string
 *          description: Correo del usuario
 *        password:
 *          type: string
 *          description: Clave para ingresar
 *      required:
 *        - email
 *        - password
 *      example:
 *         "email": "admin@admin.com"
 *         "password": "123465"
 */

/**
 * @swagger
 * /api/auth/login:
 *  post:
 *    summary: Iniciar sesion
 *    tags: [Login]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/Login'
 *    responses:
 *      200:
 *        description: Login correcto
 */
router.post(
  '/login',
  [
    check('email', 'El correo es obligatorio').isEmail(),
    check('password', 'La contraseña es obligatoria').not().isEmpty(),
    validateFields,
  ],
  login
);

module.exports = router;
