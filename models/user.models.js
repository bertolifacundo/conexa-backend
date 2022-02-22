const { Schema, model } = require('mongoose');

const UserSchema = Schema({
  firstName: {
    type: String,
    required: [true, 'El nombre es obligatorio'],
  },
  lastName: {
    type: String,
    required: [true, 'El apellido es obligatorio'],
  },
  email: {
    // type: String,
    // required: [true, 'El correo es obligatorio'],
    // unique: true,
    type: String,
    required: [true, 'El correo es obligatorio'],
    index: true,
    unique: true,
    sparse: true,
  },
  password: {
    type: String,
    required: [true, 'La clave es obligatoria'],
  },
  image: {
    type: String,
  },
  rol: {
    type: String,
    required: [true, 'El rol es requerido'],
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});

UserSchema.methods.toJSON = function () {
  const { __v, password, ...user } = this.toObject();

  return user;
};
module.exports = model('Users', UserSchema);
