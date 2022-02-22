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

const paginate = async (items, page, perPage) => {
  const validPageAndPerPage = perPage && page;
  if (!validPageAndPerPage) {
    perPage = items.length;
    page = 1;
  }
  const offset = perPage * (page - 1);
  const totalPages = Math.ceil(items.length / perPage);
  const paginatedItems = items.slice(offset, perPage * page);
  return {
    previousPage: page - 1 ? page - 1 : null,
    nextPage: totalPages > page ? page + 1 : null,
    total: items.length,
    totalPages: totalPages,
    items: paginatedItems,
  };
};

module.exports = { validateUserRol, validateEmail, existUserById, paginate };
