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

/**
 * @swagger
 * /api/users:
 *  get:
 *    summary: Obtener lista de usuarios. Por defecto trae los primeros 10
 *    tags: [Users]
 *    parameters:
 *      - in: query
 *        name: perPage
 *        schema:
 *          type: integer
 *        required: false
 *        description: Parametro correpondiente a la cantidad de registros por pagina
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
router.get('/', getUsers);

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *          description: Primer nombre del usuario
 *        lastName:
 *          type: string
 *          description: Apellido del usuario
 *        email:
 *          type: string
 *          description: Correo de contacto del usuario
 *        password:
 *          type: string
 *          description: Clave del usuario
 *        rol:
 *          type: string
 *          description: Roles permitidos ADMIN_ROLE , USER_ROLE
 *        enabled:
 *          type: boolean
 *          description: Estado del usuario, habilitado o deshabilitado. Por defecto cuando es true cuando se crea
 *      required:
 *        - firstName
 *        - lastName
 *        - email
 *        - password
 *        - rol
 *      example:
 *         "firstName": "Facundo"
 *         "lastName": "Bértoli"
 *         "email": "bertolifacundo@gmail.com"
 *         "password": "123456"
 *         "rol": "USER_ROLE"
 */

/**
 * @swagger
 * /api/users:
 *  post:
 *    summary: creacion de un usuarios
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    responses:
 *      201:
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

/**
 * @swagger
 * components:
 *  schemas:
 *    User:
 *      type: object
 *      properties:
 *        firstName:
 *          type: string
 *          description: Primer nombre del usuario
 *        lastName:
 *          type: string
 *          description: Apellido del usuario
 *        email:
 *          type: string
 *          description: Correo de contacto del usuario
 *        password:
 *          type: string
 *          description: Clave del usuario
 *        rol:
 *          type: string
 *          description: Roles permitidos ADMIN_ROLE , USER_ROLE
 *        enabled:
 *          type: boolean
 *          description: Estado del usuario, habilitado o deshabilitado. Por defecto cuando es true cuando se crea
 *      required:
 *        - firstName
 *        - lastName
 *        - email
 *        - password
 *        - rol
 *      example:
 *         "firstName": "Facundo"
 *         "lastName": "Bértoli"
 *         "email": "bertolifacundo@gmail.com"
 *         "password": "123456"
 *         "rol": "USER_ROLE"
 *         "enabled": true
 */

/**
 * @swagger
 * /api/users/{id}:
 *  put:
 *    summary: Edicion de un usuario
 *    tags: [Users]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            $ref: '#/components/schemas/User'
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: Parametro correpondiente al id del usuario
 *    responses:
 *      200:
 *        description: Usuario modificado correctamente
 */
router.put(
  '/:id',
  [
    validateJWT,
    check('id', 'No es un ID válido').isMongoId(),
    check('id').custom(existUserById),
    check('email').custom(validateEmail),
    check('rol').custom(validateUserRol),
    validateFields,
  ],
  putUser
);
router.delete('/:id', deleteUser);

module.exports = router;
