var chai = require('chai'),
    path = require('path'),
    fs   = require('fs'),
    exec = require('child_process').exec;

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should;

describe('Project', function () {
  beforeEach(function () {});

  describe('#recipe()', function () {
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
