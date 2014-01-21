module.exports = {
  before: function () {
    // We should spin up a couple of dummy git repositories
    // to test git-diff against
  },
  'Project': {
    '#report()': {
      'shows a deploy is needed': function () {},
      'shows a deploy is not needed': function () {},
      'shows the last commit info': function () {},
      'shows the last deploy timestamp': function () {}
    }
  }
};
