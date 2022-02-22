const bcryptjs = require('bcryptjs');
const { response } = require('express');
const UserModel = require('../models/user.models');
const axios = require('axios');
const { paginate } = require('../helpers/validators');
const logger = require('../helpers/logger');
const getUsers = async (req = request, res = response) => {
  const { limit = 5, from = 0 } = req.query;
  const query = { estado: true };

  const [total, users] = await Promise.all([
    UserModel.countDocuments(query),
    UserModel.find(query).skip(Number(from)).limit(Number(limit)),
  ]);

  res.json({
    total,
    users,
  });
};

const postUser = async (req, res = response) => {
  const { firstName, lastName, email, password, rol } = req.body;
  const user = new UserModel({ firstName, lastName, email, password, rol });
  const salt = bcryptjs.genSaltSync();
  user.password = bcryptjs.hashSync(password, salt);

  await user.save();
  logger.info(`El usuario con correo ${email} fue creado correctamente`);

  res.json({
    msg: 'post API - postUser',
    user,
  });
};

const putUser = async (req, res = response) => {
  const { id } = req.params;
  const { _id, password, email, ...userUpdate } = req.body;
  if (password) {
    // Encriptar la contraseña
    const salt = bcryptjs.genSaltSync();
    userUpdate.password = bcryptjs.hashSync(password, salt);
  }
  const user = await UserModel.findByIdAndUpdate(id, userUpdate, { new: true });
  res.json(user);
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
