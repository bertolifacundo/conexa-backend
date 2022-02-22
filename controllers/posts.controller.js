const { response } = require('express');
const axios = require('axios');
const { paginate } = require('../helpers/validators');

const getPosts = async (req = request, res = response) => {
  try {
    const { perPage, page } = req.query;
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/posts'
    );
    posts = [];
    posts = data;
    totalPosts = posts.length;
    result = await paginate(posts, page, perPage);
    res.json({
      result,
    });
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  getPosts,
};
