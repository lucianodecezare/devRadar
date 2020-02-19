const axios = require('axios');

const Dev = require('../models/Dev');
const parseStringAsArray = require('../utils/parseStringAsArray');

module.exports = {
  /**
   * Search for all `Devs`.
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @returns {Object} All the devs
   */
  async index(request, response) {
    const devs = await Dev.find();

    return response.status(200).json(devs);
  },
  /**
   * Create a new `Dev`.
   *
   * @param {Object} request
   * @param {Object} response
   *
   * @returns {Object} The new `Dev`
   */
  async store(request, response) {
    const { github, techs, latitude, longitude } = request.body;

    try {
      let dev = await Dev.findOne({ github });

      if (!dev) {
        const { data } = await axios.get(`https://api.github.com/users/${github}`);

        const { name = login, avatar_url, bio } = data;

        const techsArray = parseStringAsArray(techs);

        const location = {
          type: 'Point',
          coordinates: [longitude, latitude]
        };

        dev = await Dev.create({
          github,
          name,
          avatar_url,
          bio,
          techs: techsArray,
          location
        }).catch((error) => {
          throw new Error(error);
        });
      }

      return response.status(200).json(dev);
    } catch (error) {
      return response.status(400).json({ message: error.message });
    }
  }
};
