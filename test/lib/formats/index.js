'use strict';

var fs = require('fs');
var assert = require('power-assert');
var web2app = require('../../../lib/web2app');

describe('lib/formats/index', function() {

  beforeEach(function() {
    this.conf = require('../../config/single.json');
  });

  it('should return plain format data', function(done) {
    var conf = this.conf;
    var result = fs.readFileSync('test/config/single_result.txt', 'utf-8');
    var data = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
     web2app.format.toPlain(data, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(output + '\n', result);
      }
      done();
    });
  });

  it('should return csv format data', function(done) {
    var conf = this.conf;
    var result = fs.readFileSync('test/config/single_result.csv', 'utf-8');
    var data = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
    web2app.format.toCsv(data, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(output + '\n', result);
      }
      done();
    });
  });

  it('should return json format data', function(done) {
    var conf = this.conf;
    var result = fs.readFileSync('test/config/single_result.json', 'utf-8');
    var data = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
     web2app.format.toJson(data, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(output + '\n', result);
      }
      done();
    });
  });

  it('should return html format data', function(done) {
    var conf = this.conf;
    var result = fs.readFileSync('test/config/single_result.html', 'utf-8');
    var data = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
     web2app.format.toHtml(data, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(output + '\n', result);
      }
      done();
    });
  });

});
