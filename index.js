const { json } = require('micro');
const NodeGeocoder = require('node-geocoder');
const { API_KEY } = process.env;

const options = {
  provider: 'google',
  httpAdapter: 'https',
  apiKey: API_KEY,
  formatter: null
};

var geocoder = NodeGeocoder(options);

module.exports = async (req, res) => {
  try {
    const data = await json(req);
    const result = await geocoder.geocode(data.address);

    const response = {
      lat: result[0].latitude,
      lng: result[0].longitude,
      address: result[0].formattedAddress
    };

    res.end(JSON.stringify(response));
  } catch (err) {
    console.log(err);
    res.end('error');
  }
};
