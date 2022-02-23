const { response } = require('express');
const PostServices = require('../services/posts.services');

const getPosts = async (req = request, res = response) => {
  try {
    const { perPage, page } = req.query;
    result = await PostServices.getPosts(page, perPage);
    res.json({
      result,
    });
  } catch (e) {
    return res.status(404).json({ status: 404, message: e.message });
  }
};

module.exports = {
  getPosts,
};