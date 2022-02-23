const { response } = require('express');
const bcryptjs = require('bcryptjs');

const AuthServices = require('../services/auth.services');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { token, user } = await AuthServices.auth(email, password);
    return res.status(200).json({
      status: 200,
      user,
      token,
      message: 'Login Correcto',
    });
  } catch (e) {
    return res.status(401).json({ status: 401, message: e.message });
  }
};

module.exports = {
  login,
};
