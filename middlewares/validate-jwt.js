const { response, request } = require('express');
const jwt = require('jsonwebtoken');

const UserModel = require('../models/user.models');

const validateJWT = async (req = request, res = response, next) => {
  const token = req.header('x-token');

  if (!token) {
    return res.status(401).json({
      msg: 'No hay token en la petición',
    });
  }

  try {
    const { _id } = jwt.verify(token, process.env.SECRETORPRIVATEKEY);

    // leer el usuario que corresponde al id
    const user = await UserModel.findById(_id);

    if (!user) {
      return res.status(401).json({
        msg: 'Token no válido - usuario no existe DB',
      });
    }

    // Verificar si el uid tiene estado true
    if (!user.enabled) {
      return res.status(401).json({
        msg: 'Token no válido - usuario con estado: false',
      });
    }

    req.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json({
      msg: 'Token no válido',
    });
  }
};

const checkToken = (req, res) => {
  var isExpiredToken = false;

  var dateNow = new Date();

  if (jwt.decode().exp < dateNow.getTime() / 1000) {
    isExpiredToken = true;
  }
};

module.exports = {
  validateJWT,
};
