'use strict';

var converter = require('json-2-csv');

module.exports = function(info, callback) {
  converter.json2csv(info.data, callback);
};
