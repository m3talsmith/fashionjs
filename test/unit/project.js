var chai = require('chai'),
    path = require('path'),
    fs   = require('fs'),
    exec = require('child_process').exec;

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should;

var appRoot     = path.join(__dirname, '../..');
var Project = require(path.join(appRoot, 'lib/project'));

describe('Project', function () {
  var project,
      projectPath = path.join(appRoot, '/recipe');

  beforeEach(function () {
    project = new Project('test');
    fs.symlinkSync(
      path.join(appRoot, 'test/dummy/recipe/test'),
      path.join(projectPath, 'test')
    );
  });

  afterEach(function () {
    fs.unlink(path.join(projectPath, 'test'));
  });

  describe('#recipe()', function () {
    it('returns a project recipe', function () {
      expect(project.recipe).to.be;
    });

    it('has project recipe', function () {
      assert(project.recipe.path == path.join(projectPath, 'test'));
    });
  });

  describe('#deploy()', function () {
    it('loads a project recipe');
    it('creates a timestamped release');
    it('symlinks the latest release to current');
    it('executes a project recipe');
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
