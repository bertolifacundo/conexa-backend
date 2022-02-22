const mongoose = require('mongoose');

const dbConection = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CNN, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.info('Base de datos conectada');
  } catch (error) {
    console.error(error);
    throw new Error('Error al conectarse a la base de datos');
  }
};

module.exports = {
  dbConection,
};
