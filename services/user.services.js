const UserModel = require('../models/user.models');
const bcryptjs = require('bcryptjs');
const logger = require('../helpers/logger');

const getUsers = async (limit, from) => {
  try {
    const query = { enabled: true };
    const [total, users] = await Promise.all([
      UserModel.countDocuments(query),
      UserModel.find(query).skip(Number(from)).limit(Number(limit)),
    ]);
    return total, users;
  } catch (error) {
    throw Error(error);
  }
};

const postUser = async (firstName, lastName, email, password, rol) => {
  try {
    const user = new UserModel({ firstName, lastName, email, password, rol });
    const salt = bcryptjs.genSaltSync();
    user.password = bcryptjs.hashSync(password, salt);
    await user.save();
    logger.info(`El usuario con correo ${email} fue creado correctamente`);
  } catch (error) {
    logger.error(`El usuario ${email} no pudo ser creado`);
    throw Error(error);
  }
};

const putUser = async (id, userUpdate) => {
  try {
    if (userUpdate.password) {
      const salt = bcryptjs.genSaltSync();
      userUpdate.password = bcryptjs.hashSync(userUpdate.password, salt);
    }
    const user = await UserModel.findByIdAndUpdate(id, userUpdate, {
      new: true,
    });
    logger.info(
      `El usuario con correo ${userUpdate.email} fue actualizado correctamente`
    );

    return user;
  } catch (error) {
    logger.error(`El usuario no pudo ser actualizado`);
    throw Error(error);
  }
};

const deleteUser = async (id) => {
  try {
    const userDelete = await UserModel.findByIdAndUpdate(
      id,
      { enabled: false },
      { new: true }
    );
    logger.info(`El usuario ha sido eliminado`);
    return userDelete;
  } catch (error) {
    logger.error(`El usuario no pudo ser eliminado`);
    throw Error(error);
  }
};

module.exports = {
  getUsers,
  postUser,
  putUser,
  deleteUser,
};
