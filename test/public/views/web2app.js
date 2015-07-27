describe('web2app view', function() {

	var opts = {
		webUrl: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
		iosScheme: 'youtube://',
		store: '544007664',
		androidScheme: 'youtube://',
		packageName: 'com.google.android.youtube'
	};
  var app = riot.mount(document.body, 'web2app', opts)[0];

  it('should return initialized values', function() {
    expect(app.webUrl).to.equal(opts.webUrl);
    expect(app.iosScheme).to.equal(opts.iosScheme);
    expect(app.store).to.equal(opts.store);
    expect(app.androidScheme).to.equal(opts.androidScheme);
    expect(app.packageName).to.equal(opts.packageName);
    expect(app.canShowResult).to.equal(false);
  });

  it('should return taggled values', function() {
    app.toggleResult();
    expect(app.canShowResult).to.equal(true);
    app.toggleResult();
    expect(app.canShowResult).to.equal(false);
  });

  it('should return generated uris', function() {
    var result = app.generateUris();
    var expectation = web2app(opts.webUrl, opts.iosScheme, opts.androidScheme, opts.store, opts.packageName).data;
    expect(result).to.deep.equal(expectation);
  });

  it('should return saved object in local storage', function() {
    app.save();
    var result = JSON.parse(localStorage.getItem('web2app'));
    expect(result).to.deep.equal(opts);
  });

});
