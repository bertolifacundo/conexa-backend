const logger = require('../helpers/logger');
const axios = require('axios');

const getPhotos = async (page) => {
  try {
    const url = process.env.URL_PHOTOS;
    const { data } = await axios.get(`${url}/api/photos?_page=${page}`);
    return data;
  } catch (error) {
    logger.error(`Problemas en la peticion`);
    throw Error(error);
  }
};

module.exports = { getPhotos };
