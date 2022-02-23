const { response } = require('express');
const UserService = require('../services/user.services');
const logger = require('../helpers/logger');

const getUsers = async (req = request, res = response) => {
  try {
    const { limit = 5, from = 0 } = req.query;
    const usersList = await UserService.getUsers(limit, from);
    return res.status(200).json({
      status: 200,
      message: 'Lista de usuarios',
      usersList,
    });
  } catch (e) {
    return res.status(404).json({ status: 404, message: e.message });
  }
};

const postUser = async (req, res = response) => {
  try {
    const { firstName, lastName, email, password, rol } = req.body;
    await UserService.postUser(firstName, lastName, email, password, rol);
    return res.status(201).json({
      status: 201,
      message: 'Usuario creado satisfactoriamente',
    });
  } catch (e) {
    logger.error(`El usuario no pudo ser creado`);
    return res.status(404).json({ status: 404, message: e.message });
  }
};

const putUser = async (req, res = response) => {
  try {
    const { id } = req.params;
    const { _id, ...user } = req.body;
    const userUpdate = await UserService.putUser(id, user);
    return res.status(200).json({
      status: 200,
      message: 'Usuario actualizado',
      userUpdate,
    });
  } catch (e) {
    return res.status(500).json({ status: 500, message: e.message });
  }
};

const deleteUser = function (req, res = response) {
  const { id } = req.params;
  res.send(`Delete record with id ${id}`);
};

const patchUser = (req, res = response) => {
  res.send('PATCH request to the homepage - controller');
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
  patchUser,
};
