var path = require('path');

module.exports = function (name) {
  return {
    name: name,
    design: {
      path: path.join(__dirname, '../designs', name)
    }
  };
};
