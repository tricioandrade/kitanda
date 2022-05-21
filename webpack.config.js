const path = require('path');

module.exports = {
  entry: './resources/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public/js/'),
    filename: 'app.js',
  },
};