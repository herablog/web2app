'use strict';

var url = require('url');

module.exports = function(webUrl, scheme, packageName) {
	var o = url.parse(webUrl);
  var pathname = o.pathname || '';
  var search = o.search || '';
  var hash = o.hash || '';
	var path = o.host + pathname + search + hash;
	var ret = [
		{
			name: 'Custom URL Scheme for Android',
			uri: scheme + path,
      platform: 'Android'
		},
		{
			name: 'App Indexing for Android (http)',
			uri: 'android-app://' + packageName + '/' + o.protocol.replace(':', '') + '/' + path,
      platform: 'Android'
		},
		{
			name: 'App Indexing for Android (custom scheme)',
			uri: 'android-app://' + packageName + '/' + scheme.replace('://', '') + '/' + path,
      platform: 'Android'
		}
	];
	return ret;
};
