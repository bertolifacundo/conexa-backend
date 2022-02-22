const bcryptjs = require('bcryptjs');

const UserModel = require('../models/user.models');

const { generateToken } = require('../helpers/generate-token');

const auth = async (email, password) => {
  try {
    // Verificar si el email existe
    const user = await UserModel.findOne({ email });
    if (!user) {
      throw new Error('Usuario / Password no son correctos ');
    }

    if (!user.enabled) {
      throw new Error('Usuario / Password no son correctos');
    }

    const validPassword = bcryptjs.compareSync(password, user.password);
    if (!validPassword) {
      throw new Error('Usuario / Password no son correctos - password');
    }

    const token = await generateToken(user.id);
    return { token, user };
  } catch (error) {
    throw Error(error);
  }
};
module.exports = {
  auth,
};
