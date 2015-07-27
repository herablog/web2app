'use strict';

var assert = require('power-assert');
var fs = require('fs');
var exec = require('child_process').exec;

describe('bin/web2app', function() {

  beforeEach(function() {
    var confSingleWebUrl = require('../config/single.json');
    var confMultiWebUrl = require('../config/multi.json');
    var argsSingle = Object.keys(confSingleWebUrl).map(function(key) {
      return '--' + key + ' ' + confSingleWebUrl[key];
    });
    var argsMulti = Object.keys(confMultiWebUrl).map(function(key) {
      return '--' + key + ' ' + confMultiWebUrl[key];
    });
    this.baseCmds = ['node ./bin/web2app.js'];
    this.cmdsSingle = this.baseCmds.concat(argsSingle);
    this.cmdsMulti = this.baseCmds.concat(argsMulti);
  });

  describe('with config file', function() {
    it('should return single plain data when format param is not set', function(done) {
      var result = fs.readFileSync('test/config/single_result.txt', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/single.json');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi plain data when format param is not set', function(done) {
      var result = fs.readFileSync('test/config/multi_result.txt', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/multi.json');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single plain data', function(done) {
      var result = fs.readFileSync('test/config/single_result.txt', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/single.json', '--format', 'plain');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi plain data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.txt', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/multi.json', '--format', 'plain');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single csv data', function(done) {
      var result = fs.readFileSync('test/config/single_result.csv', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/single.json', '--format', 'csv');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi csv data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.csv', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/multi.json', '--format', 'csv');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single json data', function(done) {
      var result = fs.readFileSync('test/config/single_result_cli.json', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/single.json', '--format', 'json');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi json data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.json', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/multi.json', '--format', 'json');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single html data', function(done) {
      var result = fs.readFileSync('test/config/single_result.html', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/single.json', '--format', 'html');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi html data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.html', 'utf-8');
      var cmd = this.baseCmds;
      cmd.push('--config', 'test/config/multi.json', '--format', 'html');
      cmd = cmd.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
  });

  describe('with command line args', function() {
    it('should return single plain data when format param is not set', function(done) {
      var result = fs.readFileSync('test/config/single_result.txt', 'utf-8');
      var cmd = this.cmdsSingle.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi plain data when format param is not set', function(done) {
      var result = fs.readFileSync('test/config/multi_result.txt', 'utf-8');
      var cmd = this.cmdsMulti.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single plain data', function(done) {
      var result = fs.readFileSync('test/config/single_result.txt', 'utf-8');
      this.cmdsSingle.push('--format', 'plain');
      var cmd = this.cmdsSingle.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi plain data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.txt', 'utf-8');
      this.cmdsMulti.push('--format', 'plain');
      var cmd = this.cmdsMulti.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single csv data', function(done) {
      var result = fs.readFileSync('test/config/single_result.csv', 'utf-8');
      this.cmdsSingle.push('--format', 'csv');
      var cmd = this.cmdsSingle.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi csv data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.csv', 'utf-8');
      this.cmdsMulti.push('--format', 'csv');
      var cmd = this.cmdsMulti.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single json data', function(done) {
      var result = fs.readFileSync('test/config/single_result_cli.json', 'utf-8');
      this.cmdsSingle.push('--format', 'json');
      var cmd = this.cmdsSingle.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi json data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.json', 'utf-8');
      this.cmdsMulti.push('--format', 'json');
      var cmd = this.cmdsMulti.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return single html data', function(done) {
      var result = fs.readFileSync('test/config/single_result.html', 'utf-8');
      this.cmdsSingle.push('--format', 'html');
      var cmd = this.cmdsSingle.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
    it('should return multi html data', function(done) {
      var result = fs.readFileSync('test/config/multi_result.html', 'utf-8');
      this.cmdsMulti.push('--format', 'html');
      var cmd = this.cmdsMulti.join(' ');
      exec(cmd, function(error, stdout) {
        assert.equal(stdout, result);
        done();
      });
    });
  });

});
