const axios = require('axios');
const { paginate } = require('../helpers/paginate');

const getPosts = async (page, perPage) => {
  try {
    const { data } = await axios.get(process.env.URL_POSTS);
    posts = [];
    posts = data;
    totalPosts = posts.length;
    result = await paginate(posts, page, perPage);
    return result;
  } catch (error) {
    logger.error(`Problemas en la peticion`);
    throw Error(error);
  }
};

module.exports = { getPosts };
