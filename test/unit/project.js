var chai = require('chai'),
    path = require('path'),
    fs   = require('fs');

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should;

function createTestRepo (name) {
  var repoPath = path.join(__dirname, '../dummy', name);
  if(fs.existsSync(repoPath)) { destroyTestRepo(name); }
  fs.mkdirSync(repoPath);
  return repoPath;
}

function destroyTestRepo (name) {
  var repoPath = path.join(__dirname, '../dummy', name);
  if(fs.existsSync(repoPath)) { fs.rmdirSync(repoPath); };
  return repoPath;
}

describe('Project', function () {
  beforeEach(function () {
    this.deployedRepo = createTestRepo('test');
    this.upstreamRepo = createTestRepo('test2');
  });

  afterEach(function () {
    destroyTestRepo('deployedRepo');
    destroyTestRepo('upstreamRepo');
  });

  describe('#report()', function () {
    it('shows a deploy is needed', function () {});
    it('shows a deploy is not needed', function () {});
    it('shows the last commit info', function () {});
    it('shows the last deploy timestamp', function () {});
  });
  describe('#deploy()', function () {
    it('gets diff between upstream and deployed code', function () {});
    it('has current code deployed', function () {});
    it('has older code code deployed', function () {});
    it('fails deploy with bad repo', function () {});
    it('deploys via git', function () {});
    it('sets latest deploy timestamp', function () {});
  });
  describe('#rollback()', function () {});
});
