const { response } = require('express');
const PostService = require('../services/post.services');

const getPosts = async (req = request, res = response) => {
  const { perPage, page } = req.query;
  try {
    const { result } = await PostService.getPosts(perPage, page);
    return res
      .status(200)
      .json({ status: 200, result, message: 'Listado finalizado' });
  } catch (e) {
    return res.status(404).json({ status: 404, message: e.message });
  }
};

module.exports = {
  getPosts,
};
