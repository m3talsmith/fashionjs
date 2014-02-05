var chai   = require('chai'),
    path   = require('path'),
    assert = require('assert'),
    fs     = require('fs'),
    exec   = require('child_process').exec;

var appRoot = path.join(__dirname, '../..');
var Project = require(path.join(appRoot, 'lib/project'));

describe('Project', function () {
  var project,
      designPath = path.join(appRoot, '/designs');

  beforeEach(function () {
    project = new Project('test');
    fs.symlinkSync(
      path.join(appRoot, 'test/dummy/designs/test'),
      path.join(designPath, 'test')
    );
  });

  afterEach(function () {
    fs.unlink(path.join(designPath, 'test'));
  });

  describe('#design()', function () {
    it('returns a project design', function () {
      assert.equal(project.design.path, path.join(designPath, 'test'));
    });
  });

  describe('#deploy()', function () {
    it('loads a project design');
    it('creates a timestamped release');
    it('symlinks the latest release to current');
    it('executes a project design');
    it('triggers a report');
  });

  describe('#report()', function () {
    it('shows the last deploy timestamp');
    it('shows the status of a deploy');
  });

  describe('#rollback()', function () {
    it('copies previous release to a new timestamped release');
    it('symlinks the latest release to current');
  });
});
