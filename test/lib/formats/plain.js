'use strict';

var fs = require('fs');
var assert = require('power-assert');
var web2app = require('../../../lib/web2app');
var plain = require('../../../lib/formats/plain');

describe('lib/formats/plain', function() {

  beforeEach(function() {
    this.conf = require('../../config/single.json');
  });

  it('should return plain format data', function(done) {
    var conf = this.conf;
    var result = fs.readFileSync('test/config/single_result.txt', 'utf-8');
    var data = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
    plain(data, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        assert.equal(output + '\n', result);
      }
      done();
    });
  });

});
