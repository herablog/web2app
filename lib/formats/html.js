'use strict';

var riot = require('riot');
var result = require('../view/result.tag');
var qr = require('qr-image');
var base64 = require('base64');

module.exports = function(info, callback) {
  info.data.forEach(function(d) {
    var checkUri = d.uri;
    if (d.uri.match(/[android|ios]-app/)) {
      checkUri = 'https://applinktest.appspot.com/app-link.html?url=';
      checkUri += encodeURIComponent(d.uri);
    }
    d.qrUri = checkUri;
    var buffer = qr.imageSync(checkUri, { margin: 0 });
    d.base64 = base64.encode(buffer);
  });
  var html = riot.render(result, info);
  callback(null, html);
};
