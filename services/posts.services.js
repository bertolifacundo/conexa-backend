const logger = require('../helpers/logger');
const axios = require('axios');
const { paginate } = require('../helpers/paginate');

const getPosts = async (page) => {
  try {
    const url = process.env.URL_POSTS;
    const { data } = await axios.get(
      page ? `${url}/api/posts?_page=${page}` : process.env.URL_POSTS
    );
    totalPosts = data.length;
    result = await paginate(data, page);
    return result;
  } catch (error) {
    logger.error(`Problemas en la peticion`);
    throw Error(error);
  }
};

module.exports = { getPosts };
