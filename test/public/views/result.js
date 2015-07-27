describe('result view', function() {

	var opts = {
		uris: [
      {
        'name': 'Web URL',
        'uri': 'http://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'platform': 'Web'
      },
      {
        'name': 'Custom URL Scheme for Android',
        'uri': 'youtube://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'platform': 'Android'
      },
      {
        'name': 'App Indexing for Android (http)',
        'uri': 'android-app://com.google.android.youtube/http/www.youtube.com/watch?v=dQw4w9WgXcQ',
        'platform': 'Android'
      },
      {
        'name': 'App Indexing for Android (custom scheme)',
        'uri': 'android-app://com.google.android.youtube/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ',
        'platform': 'Android'
      },
      {
        'name': 'Custom URL Scheme for iOS',
        'uri': 'youtube://www.youtube.com/watch?v=dQw4w9WgXcQ',
        'platform': 'iOS'
      },
      {
        'name': 'App Indexing for iOS',
        'uri': 'ios-app://544007664/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ',
        'platform': 'iOS'
      }
    ]
	};

  var result = riot.mount(document.body, 'result', opts)[0];
  var root = result.root;
  var figure = root.querySelector('figure');
  var qr = root.querySelector('figure img');
  var trs = root.querySelectorAll('tbody tr');

  it('should return initialized values', function() {
    expect(figure.title).to.equal('https://example.com');
    expect(qr.src.indexOf('data:image/png;base64') === 0).to.be.ok;
  });

  it('should return list count the same as opts data', function() {
    expect(trs.length).to.equal(opts.uris.length);
  });

  it('should return changed uri when the url in list is hovered', function() {
    var uri = 'http://www.youtube.com/watch?v=dQw4w9WgXcQ';
    var event = {
      target: {
        innerText: uri
      }
    };
    result.onMouseover(event);
    expect(figure.title).to.equal(uri);
  });

});
