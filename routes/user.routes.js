const { Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const {
  validateUserRol,
  validateEmail,
  existUserById,
} = require('../helpers/validators');
const {
  getUsers,
  postUser,
  putUser,
  deleteUser,
} = require('../controllers/user.controller');
const { validateJWT } = require('../middlewares/validate-jwt');
const router = Router();

router.get('/', getUsers);

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        firstNanme:
 *          type: string
 *          description: Primer nombre del usuario
 *        lastName:
 *          type: string
 *          description: Apellido del usuario
 *        mail:
 *          type: string
 *          description: Correo de contacto del usuario
 *        rol:
 *          type: string
 *          description: Roles permitidos ADMIN_ROLE , USER_ROLE
 *        enabled:
 *          type: boolean
 *          description: Estado del usuario, habilitado o deshabilitado
 *      required:
 *        - firstName
 *        - lastName
 *        - rol
 *      example:
 *         "firstName": "Facundo"
 *         "lastName": "Bértoli"
 *         "email": "bertolifacundo@gmail.com"
 *         "rol": "USER_ROLE"
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: creacion de un usuarios
 *    tags: [User]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      200:
 *        description: El nuevo usuario fue creado
 */
router.post(
  '/',
  [
    validateJWT,
    check('firstName', 'Debe ingresar su nombre').not().isEmpty(),
    check('lastName', 'Debe ingresar su apellido').not().isEmpty(),
    check(
      'password',
      'Debe ingresar una clave mayor a 6 caracteres para generar su usuario'
    ).isLength(6),
    check('email', 'Correo no valido').isEmail(),
    check('email').custom(validateEmail),
    // check('rol', 'No es un rol valido').isIn(['ADMIN_ROLE', 'USER_ROLE']),
    check('rol').custom(validateUserRol),
    validateFields,
  ],
  postUser
);
router.put(
  '/:id',
  [
    validateJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUserById),
    check('rol').custom(validateUserRol),
    validateFields,
  ],
  putUser
);
router.delete('/:id', deleteUser);

module.exports = router;
