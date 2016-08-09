if (typeof window === 'undefined') {
  module.exports = require('parse/node');
} else {
  module.exports = require('parse');
}