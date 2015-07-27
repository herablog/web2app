'use strict';

module.exports = function(info, callback) {
  callback(!info, JSON.stringify(info.data, null, '  '));
};
