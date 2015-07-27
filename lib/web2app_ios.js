'use strict';

var url = require('url');

module.exports = function(webUrl, scheme, store) {
	var o = url.parse(webUrl);
  var pathname = o.pathname || '';
  var search = o.search || '';
  var hash = o.hash || '';
	var path = o.host + pathname + search + hash;
  var ret = [
		{
			name: 'Custom URL Scheme for iOS',
			uri: scheme + path,
      platform: 'iOS'
		},
		{
			name: 'App Indexing for iOS',
			uri: 'ios-app://' + store + '/' + scheme.replace('://', '') + '/' + path,
      platform: 'iOS'
		}
	];
	return ret;
};
