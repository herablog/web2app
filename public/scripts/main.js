(function() {

	var defaultOpts = {
		webUrl: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
		iosScheme: 'youtube://',
		store: '544007664',
		androidScheme: 'youtube://',
		packageName: 'com.google.android.youtube'
	};
	var opts = storage('web2app') || defaultOpts;

	riot.mount('web2app', opts);


	function storage(key, value) {
		if (key && value) {
			return localStorage.setItem(key, JSON.stringify(value));
		}
		if (key) {
			return JSON.parse(localStorage.getItem(key));
		}
		return false;
	}

})();
