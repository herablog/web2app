'use strict';

var _ = require('lodash');
var assert = require('power-assert');
var web2appiOS = require('../../lib/web2app_ios');

describe('lib/web2app_ios', function() {

  beforeEach(function() {
    this.conf = require('../config/single.json');
  });

  it('should return iOS data', function() {
    var conf = this.conf;
    var result = _.filter(require('../config/single_result.json'), { platform: 'iOS' });
    var output = web2appiOS(conf.url, conf.ios_scheme, conf.store);
    assert.deepEqual(output, result);
  });

});
