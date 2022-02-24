const logger = require('../helpers/logger');
const axios = require('axios');

const getPosts = async (page) => {
  try {
    const url = process.env.URL_POSTS;
    const { data } = await axios.get(`${url}/api/posts?_page=${page}`);
    return data;
  } catch (error) {
    logger.error(`Problemas en la peticion`);
    throw Error(error);
  }
};

module.exports = { getPosts };
