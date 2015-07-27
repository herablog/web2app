describe('params view', function() {

	var opts = {
		weburl: 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
		iosscheme: 'youtube://',
		store: '544007664',
		androidscheme: 'youtube://',
		packagename: 'com.google.android.youtube'
	};

  var params = riot.mount(document.body, 'params', opts)[0];
  params.parent = {};

  it('should return initialized values', function() {
    expect(params.webUrl.value).to.equal(opts.weburl);
    expect(params.iosScheme.value).to.equal(opts.iosscheme);
    expect(params.store.value).to.equal(opts.store);
    expect(params.androidScheme.value).to.equal(opts.androidscheme);
    expect(params.packageName.value).to.equal(opts.packagename);
  });

  it('should fire parent method', function(done) {
    params.parent.onSubmit = function() {
      expect(true).to.be.ok;
      done();
    };
    params.onSubmit();
  });

  it('should return inputed values', function() {
    var newStore = '12345';
    params.store.value = newStore;
    params.attachValue();
    expect(params.parent.webUrl).to.equal(params.webUrl.value);
    expect(params.parent.iosScheme).to.equal(params.iosScheme.value);
    expect(params.parent.store).to.equal(params.store.value);
    expect(params.parent.androidScheme).to.equal(params.androidScheme.value);
    expect(params.parent.packageName).to.equal(params.packageName.value);
  });



});
