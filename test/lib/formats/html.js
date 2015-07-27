'use strict';

var fs = require('fs');
var assert = require('power-assert');
var web2app = require('../../../lib/web2app');
var html = require('../../../lib/formats/html');

describe('lib/formats/html', function() {

  beforeEach(function() {
    this.conf = require('../../config/single.json');
  });

  it('should return html format data', function(done) {
    var conf = this.conf;
    var expectation = fs.readFileSync('test/config/single_result.html', 'utf-8');
    var data = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
    html(data, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(output + '\n', expectation);
      }
      done();
    });
  });

});
