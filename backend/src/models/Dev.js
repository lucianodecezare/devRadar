const mongoose = require('mongoose');

const PointSchema = require('./utils/PointSchema');

const DevSchema = new mongoose.Schema({
  name: String,
  github: String,
  bio: String,
  avatar_url: String,
  techs: [String],
  // This is how mongodb deal with geolocation
  location: {
    type: PointSchema,
    index: '2dsphere'
  }
});

module.exports = mongoose.model('Dev', DevSchema);
