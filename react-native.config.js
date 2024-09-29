const path = require('path');
const pak = require('./package.json');

module.exports = {
  dependencies: {
    [pak.name]: {
      root: path.join(__dirname, '..'),
    },
    'vision-camera-realtime-object-detection': {
      platforms: {
        ios: null,
      },
    },
  },
  assets: ['./assets/model/'],
};
