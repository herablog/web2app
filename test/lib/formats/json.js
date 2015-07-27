'use strict';

var fs = require('fs');
var assert = require('power-assert');
var web2app = require('../../../lib/web2app');
var json = require('../../../lib/formats/json');

describe('lib/formats/json', function() {

  beforeEach(function() {
    this.conf = require('../../config/single.json');
  });

  it('should return json format data', function(done) {
    var conf = this.conf;
    var expectation = fs.readFileSync('test/config/single_result.json', 'utf-8');
    var data = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
    json(data, function(err, output) {
      if (err) {
        console.error(err);
      } else {
        // console.log(output, '\n', expectation)
        assert.equal(output + '\n', expectation);
      }
      done();
    });
  });

});
