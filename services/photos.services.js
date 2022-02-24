const logger = require('../helpers/logger');
const axios = require('axios');
const { paginate } = require('../helpers/paginate');

const getPhotos = async (page) => {
  try {
    const url = process.env.URL_PHOTOS;

    const { data } = await axios.get(`${url}/api/photos?_page=${page}`);
    photos = [];
    photos = data;
    totalPhotos = photos.length;
    result = await paginate(photos, page);
    return result;
  } catch (error) {
    logger.error(`Problemas en la peticion`);
    throw Error(error);
  }
};

module.exports = { getPhotos };
