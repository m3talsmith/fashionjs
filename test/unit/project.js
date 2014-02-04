var chai = require('chai'),
    path = require('path'),
    fs   = require('fs'),
    exec = require('child_process').exec;

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should;

var Project = require(path.join(__dirname, '../../model/project'));

describe('Project', function () {
  var project,
      projectPath = path.join(__dirname, '../../project');

  beforeEach(function () {
    project = new Project('test');
  });

  describe('#recipe()', function () {
    it('finds project recipe', function () {
      assert(project.recipe.path === path.join(projectPath, 'recipe'));
      assert(fs.existsSync(project.recipe.path));
    });

    it('returns a project recipe');
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
