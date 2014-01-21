var chai = require('chai'),
    path = require('path'),
    fs   = require('fs'),
    Git  = require('git-wrapper2'),
    exec = require('child_process').exec;

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should;

function repoPath(name) { return path.join(__dirname, '../dummy', name); }

function createTestRepo (name, options, callback) {
  var gitPath = path.join(repoPath(name), '.git');
  var git = new Git({'git-dir': gitPath});
  fs.exists(gitPath, function (exists) {
    if(exists) {
      destroyTestRepo(name, function (error, stdout, stderr) {
        initRepo(git, options, callback);
      });
    } else {
      initRepo(git, options, callback);
    }
  });
}

function initRepo (git, options, callback) {
  var initString = options.bare ? 'init --bare' : 'init';
  git.exec(initString, function (error, message) {
    callback(git, error, message);
  });
}

function destroyTestRepo (name, callback) {
  exec('rm -rf ' + path.join(repoPath(name), '.git'), callback);
}

describe('Project', function () {
  beforeEach(function () {
    createTestRepo('upstream', {bare: true}, function (upstream, error, message) {
      upstream.add('hello', function (error, message) {
        upstream.commit('Added hello', function (error, message) {
          createTestRepo('deployedOld', {}, function (old, error, message) {
            // old.exec('remote add upstream path://')
          });
        });
      });   
    });
  });

  describe('#deploy()', function () {
    it('gets diff between upstream and deployed code', function () {
      var git = new Git({'git-dir': path.join(repo, '.git')});

      git.exec('diff upstream master', function (error, message) {
        expect(message).to.equal(true);
      });
    });

    it('has current code deployed');
    it('has older code code deployed');
    it('fails deploy with bad repo');
    it('deploys via git');
    it('sets latest deploy timestamp');
  });
  describe('#report()', function () {
    it('shows a deploy is needed');
    it('shows a deploy is not needed');
    it('shows the last commit info');
    it('shows the last deploy timestamp');
  });
  describe('#rollback()', function () {});
});
