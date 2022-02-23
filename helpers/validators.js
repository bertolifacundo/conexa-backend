const Role = require('../models/rol.model');
const UserModel = require('../models/user.models');

const validateUserRol = async (rol = '') => {
  const existRol = await Role.findOne({ rol });
  if (!existRol) {
    throw new Error('El role no es valido');
  }
};

const validateEmail = async (email = '') => {
  const existMail = await UserModel.findOne({ email });

  if (existMail) {
    throw new Error('El email ingresado ya existe');
  }
};

const existUserById = async (id) => {
  // Verificar si el correo existe
  const existUser = await UserModel.findById(id);
  if (!existUser) {
    throw new Error(`El id no existe ${id}`);
  }
};

module.exports = { validateUserRol, validateEmail, existUserById };
