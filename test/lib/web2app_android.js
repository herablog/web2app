'use strict';

var _ = require('lodash');
var assert = require('power-assert');
var web2appAndroid = require('../../lib/web2app_android');

describe('lib/web2app_android', function() {

  beforeEach(function() {
    this.conf = require('../config/single.json');
  });

  it('should return Android data', function() {
    var conf = this.conf;
    var result = _.filter(require('../config/single_result.json'), { platform: 'Android' });
    var output = web2appAndroid(conf.url, conf.android_scheme, conf.package);
    assert.deepEqual(output, result);
  });

});
