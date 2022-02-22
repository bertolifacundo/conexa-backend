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
  patchUser,
} = require('../controllers/user.controller');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get('/', getUsers);
router.post(
  '/',
  [
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
router.delete('/user/:id', deleteUser);
router.patch('/user/:id', patchUser);

module.exports = router;
