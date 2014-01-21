var chai = require('chai'),
    path = require('path'),
    fs   = require('fs'),
    Git  = require('git-wrapper2'),
    exec = require('child_process').exec;

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should;

function repoPath(name) { return path.join(__dirname, '../dummy', name); }

function createTestRepo (name) {
  var git = new Git({'git-dir': path.join(repoPath(name), '.git')});

  console.log('Exists? ' + fs.existsSync(repoPath(name)));

  if(fs.existsSync(repoPath(name))) {
    console.log('File exist');
    destroyTestRepo(name, function () {
      console.log('OK,,,Making Directory!');
      fs.mkdir(repoPath(name), function () {
        console.log('Git Init Directory');
        git.exec('init', function (error, message) {});
      });
    });
  } else {
    console.log('File Does NOT exist');
    fs.mkdir(repoPath(name), function () {
      console.log('Git Init the New Directory');
      git.exec('init', function (error, message) {});
    });
  }
}

function destroyTestRepo (name) {
  console.log('Removing ' + repoPath(name));
  if(fs.existsSync(repoPath(name))) {
    exec('rm -rf ' + repoPath(name), function (error, output) {
      console.log('Removed? ' + !fs.existsSync(repoPath(name)));
      console.log(output);
    });
  }
}

function diff (repo, callback) {
  var git = new Git({'git-dir': path.join(repo, '.git')});

  git.exec('diff upstream master', function (error, message) {
    if(error != undefined) console.log(error);
    callback(message);
  });
}

describe('Project', function () {
  beforeEach(function () {
    createTestRepo('deployed');
    createTestRepo('upstream');
  });

  describe('#deploy()', function () {
    it('gets diff between upstream and deployed code', function () {
      diff(repoPath('deployed'), function (diff) { expect(diff).to.equal(true); });
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
