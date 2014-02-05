var chai   = require('chai'),
    path   = require('path'),
    assert = require('assert'),
    fs     = require('fs'),
    exec   = require('child_process').exec;

var appRoot = path.join(__dirname, '../..');
var Project = require(path.join(appRoot, 'lib/project'));

describe('Project', function () {
  var project,
      projectPath = path.join(appRoot, 'projects'),
      designPath  = path.join(appRoot, 'designs');

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

  describe('#exists(path)', function () {
    it('does not have project');
    it('does have project');
  });

  describe('#deploy()', function () {
    var releasePath = path.join(projectPath, 'releases');

    beforeEach(function () {
      project.deploy();
    });

    it('has a release for the project', function () {
      var listing = fs.readdirSync(projectPath);
      assert.notEqual(listing.indexOf(project.name), -1);
    });

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
