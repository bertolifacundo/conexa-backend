const { response } = require('express');
const PhotosServices = require('../services/photos.services');

const getPhotos = async (req = request, res = response) => {
  try {
    const { _page, _limit } = req.query;
    result = await PhotosServices.getPhotos(_page, _limit);
    res.json({
      result,
    });
  } catch (e) {
    return res.status(404).json({ status: 404, message: e.message });
  }
};

module.exports = {
  getPhotos,
};
