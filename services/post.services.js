const { paginate } = require('../helpers/validators');
const axios = require('axios');
const getPosts = async (perPage, page) => {
  try {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    posts = [];
    posts = data;
    totalPosts = posts.length;
    result = await paginate(posts, page, perPage);
    return { result };
  } catch (error) {
    throw Error(error);
  }
};

module.exports = {
  getPosts,
};
