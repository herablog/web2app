'use strict';

var _ = require('lodash');
var assert = require('power-assert');
var web2appWeb = require('../../lib/web2app_web');

describe('lib/web2app_web', function() {

  beforeEach(function() {
    this.conf = require('../config/single.json');
  });

  it('should return web data', function() {
    var conf = this.conf;
    var result = _.filter(require('../config/single_result.json'), { platform: 'Web' });
    var output = web2appWeb(conf.url);
    assert.deepEqual(output, result);
  });

});
