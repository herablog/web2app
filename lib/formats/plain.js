'use strict';

module.exports = function(info, callback) {
  var ret = info.data.map(function(d) {
    return d.uri;
  });
  callback(!info, ret.join('\n'));
};
