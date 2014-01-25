var chai = require('chai'),
    path = require('path'),
    fs   = require('fs'),
    exec = require('child_process').exec;

var assert = chai.assert,
    expect = chai.expect,
    should = chai.should;

describe('Project', function () {
  beforeEach(function () {});

  describe('#config()', function () {});
  describe('#deploy()');
  describe('#report()', function () {
    it('shows a deploy is needed');
    it('shows a deploy is not needed');
    it('shows the last commit info');
    it('shows the last deploy timestamp');
  });
  describe('#rollback()');
});
