'use strict';

var assert = require('power-assert');
var web2app = require('../../lib/web2app');

describe('lib/web2app', function() {

  beforeEach(function() {
    this.conf = require('../config/single.json');
  });

  it('should return all data', function() {
    var conf = this.conf;
    var result = require('../config/single_result.json');
    var output = web2app(conf.url, conf.ios_scheme, conf.android_scheme, conf.store, conf.package);
    assert.deepEqual(output.data, result);
  });

});
