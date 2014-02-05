var path = require('path'),
    fs   = require('fs');

module.exports = function (name) {
  return {
    name: name,
    design: {
      path: path.join(__dirname, '../designs', name)
    },
    deploy: function () {
    },
    exists: function (path) {
      try {
        fs.readdirSync(path);
        return true;
      } catch (error) {
        return false;
      }
    }
  };
};
