const axios = require('axios');

const Dev = require('../models/Dev');

module.exports = {
  async store(request, response) {
    const { github, techs, latitude, longitude } = request.body;

    let dev = await Dev.findOne({ github });

    if (!dev) {
      // TODO: Change axios for a safe package
      const { data } = await axios.get(`https://api.github.com/users/${github}`);

      const { name = login, avatar_url, bio } = data;

      const techsArray = techs.split(',').map((tech) => tech.trim());

      const location = {
        type: 'Point',
        coordinates: [longitude, latitude]
      };

      // TODO: Add error catcher
      dev = await Dev.create({
        github,
        name,
        avatar_url,
        bio,
        techs: techsArray,
        location
      });
    }

    return response.status(200).json(dev);
  }
};
