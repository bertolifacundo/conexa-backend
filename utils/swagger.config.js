const path = require('path');

const swaggerConfig = {
  definition: {
    openapi: '3.0.3',
    info: {
      title: 'API Conexa',
      version: '1.1',
      contact: {
        name: 'Facundo A. Bértoli',
        email: 'bertolifacundo@gmail.com',
        url: 'https://www.linkedin.com/in/facundo-bertoli-2197b344/',
      },
    },
    servers: [
      {
        url: `http://localhost:${process.env.PORTLOCAL}/`,
        description: 'Server localhost',
      },
      {
        url: 'https://backend-conexa.herokuapp.com/',
        description: 'Server Heroku',
      },
    ],
  },
  apis: [`${path.join(__dirname, '../routes/*.js')}`],
};

module.exports = { swaggerConfig };
