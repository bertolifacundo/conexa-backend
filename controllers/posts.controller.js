const { response } = require('express');
const PostServices = require('../services/posts.services');

const getPosts = async (req = request, res = response) => {
  try {
    const { _page, _limit } = req.query;
    result = await PostServices.getPosts(_page, _limit);
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
