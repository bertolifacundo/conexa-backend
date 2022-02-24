const logger = require('../helpers/logger');
const axios = require('axios');
const { paginate } = require('../helpers/paginate');

const getPhotos = async (page) => {
  try {
    const url = process.env.URL_PHOTOS;
    const { data } = await axios.get(
      page ? `${url}/api/photos?_page=${page}` : process.env.URL_PHOTOS
    );
    totalPhotos = data.length;
    result = await paginate(data, page);
    return result;
  } catch (error) {
    logger.error(`Problemas en la peticion`);
    throw Error(error);
  }
};

module.exports = { getPhotos };
