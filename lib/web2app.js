'use strict';

var web = require('./web2app_web');
var ios = require('./web2app_ios');
var android = require('./web2app_android');
var format = require('./formats');


module.exports = function(webUrl, iosScheme, androidScheme, store, packageName) {
  if (!webUrl || !iosScheme || !androidScheme || !store || !packageName) {
    return false;
  }
  var webData = web(webUrl);
  var androidData = android(webUrl, androidScheme, packageName);
  var iosData = ios(webUrl, iosScheme, store);
  var data = webData.concat(androidData.concat(iosData));
  var ret = {
    data: data
  };
  return ret;
};

module.exports.format = format;
