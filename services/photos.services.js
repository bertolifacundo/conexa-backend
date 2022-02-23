const axios = require('axios');
const { paginate } = require('../helpers/paginate');

const getPhotos = async (page, perPage) => {
  try {
    const { data } = await axios.get(process.env.URL_POSTS);
    photos = [];
    photos = data;
    totalPhotos = photos.length;
    result = await paginate(photos, page, perPage);
    return result;
  } catch (error) {
    logger.error(`Problemas en la peticion`);
    throw Error(error);
  }
};

module.exports = { getPhotos };
