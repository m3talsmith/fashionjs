var path = require('path');

module.exports = function (name) {
  return {
    name: name,
    recipe: {
      path: path.join(__dirname, '../project', name + 'Recipe')
    }
  };
};
