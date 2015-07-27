riot.tag('info', '<pre> <code>npm install web2app\n web2app --config config.json --format csv</code> </pre> <aside> <a href="https://github.com/herablog/web2app"><p><img src="public/images/GitHub-Mark-120px-plus.png"></p> <p>More information is available on GitHub.</p></a> </aside>', 'info , [riot-tag="info"] {} info pre , [riot-tag="info"] pre { margin: 0 0 20px; } info code , [riot-tag="info"] code { border-radius: 2px; font-size: 1rem; } info aside a , [riot-tag="info"] aside a { color: #333; text-decoration: none; } info aside img , [riot-tag="info"] aside img { -webkit-transition: -webkit-transform .1s ease-out; -moz-transition: -moz-transform .1s ease-out; -ms-transition: -ms-transform .1s ease-out; transition: transform .1s ease-out; } info aside a:hover img , [riot-tag="info"] aside a:hover img { -webkit-transform: scale(1.1) rotate(3deg); -moz-transform: scale(1.1) rotate(3deg); -ms-transform: scale(1.1) rotate(3deg); transform: scale(1.1) rotate(3deg); }', function(opts) {
    this.on('mount', function() {
      var codes = this.root.querySelectorAll('code');
      for (var i = 0, len = codes.length; i < len; i++) {
        hljs.highlightBlock(codes[i]);
      }
    });
  
});

riot.tag('logo', '<h1>web2app</h1> <p>Easy to Convert from Web URL to App URI</p>', 'logo , [riot-tag="logo"] { color: #fff; text-align: center; } logo h1 , [riot-tag="logo"] h1 { -webkit-animation: logo .24s ease-out .4s forwards; -moz-animation: logo .24s ease-out .4s forwards; -ms-animation: logo .24s ease-out .4s forwards; animation: logo .24s ease-out .4s forwards; font-family: \'Comfortaa\', cursive; font-size: 4rem; font-weight: 700; margin: 0; opacity: 0; position: relative; } logo p , [riot-tag="logo"] p { font-size: .9rem; }', function(opts) {


});

riot.tag('params', '<form> <ul> <li> <label for="webUrl">Web URL</label> <input type="url" id="webUrl" value="{ opts.weburl }" required> </li> </ul> <ul> <li> <label for="iosScheme">iOS URI Scheme</label> <input type="url" id="iosScheme" value="{ opts.iosscheme }" required> </li> <li> <label for="store">iOS App Store ID</label> <input type="number" id="store" value="{ opts.store }" required> </li> </ul> <ul> <li> <label for="androidScheme">Android URI Scheme</label> <input type="url" id="androidScheme" value="{ opts.androidscheme }" required> </li> <li> <label for="packageName">Android Package Name</label> <input type="text" id="packageName" value="{ opts.packagename }" required> </li> </ul> <button onclick="{ onSubmit }" type="submit">Generate!</button> </form>', 'params , [riot-tag="params"] { } params input , [riot-tag="params"] input { appearance: none; border: 1px solid rgb(255, 206, 0); border-radius: 6px; box-sizing: border-box; font-size: 1rem; outline: none; padding: 8px; width: 100%; } params label , [riot-tag="params"] label { display: inline-block; font-size: .8rem; padding: 0 0 4px 4px; } params ul , [riot-tag="params"] ul { display: -webkit-flex; display: flex; margin: 0 0 15px; } params ul:last-of-type , [riot-tag="params"] ul:last-of-type { margin-bottom: 40px; } params ul:nth-of-type(2) li:first-child, [riot-tag="params"] ul:nth-of-type(2) li:first-child,params ul:last-of-type li:first-child , [riot-tag="params"] ul:last-of-type li:first-child { padding: 0 5px 0 0; } params ul:nth-of-type(2) li:last-child, [riot-tag="params"] ul:nth-of-type(2) li:last-child,params ul:last-of-type li:last-child , [riot-tag="params"] ul:last-of-type li:last-child { padding: 0 0 0 5px; } params li , [riot-tag="params"] li { width: 100%; } params button , [riot-tag="params"] button { appearance: none; background: rgb(255, 165, 50); border: none; border-radius: 2px; color: #fff; cursor: pointer; font-size: 1.2rem; height: 50px; line-height: 50px; outline: none; text-align: center; -webkit-transition: font-size .2s ease-out; -moz-transition: font-size .2s ease-out; -ms-transition: font-size .2s ease-out; transition: font-size .2s ease-out; width: 100%; } params button:hover , [riot-tag="params"] button:hover { background: rgb(255, 164, 0); font-size: 1.4rem; }', function(opts) {

    this.onSubmit = function() {
      this.attachValue();
      this.parent.onSubmit();
      return false;
    }.bind(this);

    this.attachValue = function() {
      this.parent.webUrl = this.webUrl.value;
      this.parent.iosScheme = this.iosScheme.value;
      this.parent.store = this.store.value;
      this.parent.androidScheme = this.androidScheme.value;
      this.parent.packageName = this.packageName.value;
    }.bind(this);

  
});

riot.tag('result', '<table> <thead> <tr> <th>Name</th> <th>URI</th> </tr> </thead> <tbody> <tr each="{ u in opts.uris }"> <td>{ u.name }</td> <td onmouseover="{ parent.onMouseover }" onmouseout="{ parent.onMouseout }">{ u.uri }</td> </tr> </tbody> </table> <figure><p>Over the URIs, and check this QR on your phone</p></figure>', 'result , [riot-tag="result"] { position: relative; } result table , [riot-tag="result"] table { line-height: 1.6; margin: 0 auto 15px; width: 96%; } result thead , [riot-tag="result"] thead { display: none; } result td:first-child , [riot-tag="result"] td:first-child { color: #666; font-size: .7rem; margin: 0 1em 0 0; } result td:nth-child(2) , [riot-tag="result"] td:nth-child(2) { cursor: pointer; word-break: break-all; } result td:nth-child(2):hover , [riot-tag="result"] td:nth-child(2):hover { color: #666; } result figure , [riot-tag="result"] figure { margin: 0 auto; text-align: center; } result figure p , [riot-tag="result"] figure p { font-size: .8rem; margin: 0 0 4px; } result figure img , [riot-tag="result"] figure img { display: block; height: 100px; margin: 0 auto; width: 100px; }', function(opts) {
    this.qrcode;
    this.on('mount', function() {
      this.qrcode = new QRCode(this.root.querySelector('figure'), {
        text: 'https://example.com',
        width: 100,
        height: 100,
      });
    });

    this.onMouseover = function(e) {
      var uri = e.target.innerText || e.target.textContent;
      if (uri.match(/[android|ios]-app/)) {
        uri = 'https://applinktest.appspot.com/app-link.html?url=' + encodeURI(uri);
      }
      this.qrcode.makeCode(uri);
    }.bind(this);
    this.onMouseout = function(e) {
      this.qrcode.clear();
    }.bind(this);
  
});

riot.tag('web2app', '<div class="plx-frame"> <header class="plx-layer plx-base"> <logo class="plx-item"></logo> <a href="https://github.com/you"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a> </header> </div> <div class="plx-frame"> <section class="plx-layer plx-base"> <params class="plx-item" weburl="{ webUrl }" iosscheme="{ iosScheme }" store="{ store }" androidscheme="{ androidScheme }" packagename="{ packageName }" > </params> </section> <div class="plx-layer plx-base overlay" show="{ canShowResult }" onclick="{ toggleResult }"></div> <result class="result plx-item { action: canShowResult }" uris="{ uris }" > </result> <section class="plx-layer plx-back"></section> </div> <div class="plx-frame"> <section class="plx-layer plx-front"> <info class="plx-item"></info> </section> <div class="plx-layer plx-base"></div> </div>', 'web2app { color: #333; display: block; font-family: sans-serif; height: 500px; /* fallback */ height: 100vh; overflow-x: hidden; overflow-y: auto; -webkit-perspective: 300px; -moz-perspective: 300px; -ms-perspective: 300px; perspective: 300px; } /* global classes */ .hidden { visibility: hidden; } /* parallax classes */ .plx-layer { bottom: 0; left: 0; position: absolute; top: 0; right: 0; } .plx-base { -webkit-transform: translateZ(0); -moz-transform: translateZ(0); -ms-transform: translateZ(0); transform: translateZ(0); z-index: 4; } .plx-back { -webkit-transform: translateZ(-300px) scale(2); -moz-transform: translateZ(-300px) scale(2); -ms-transform: translateZ(-300px) scale(2); transform: translateZ(-300px) scale(2); z-index: 3; } .plx-front { -webkit-transform: translateZ(90px) scale(.7); -moz-transform: translateZ(90px) scale(.7); -ms-transform: translateZ(90px) scale(.7); transform: translateZ(90px) scale(.7); z-index: 1; } .plx-item { left: 50%; position: absolute; top: 50%; -webkit-transform: translate(-50%, -50%); -moz-transform: translate(-50%, -50%); -ms-transform: translate(-50%, -50%); transform: translate(-50%, -50%); } .plx-frame { display: block; height: 100vh; position: relative; -webkit-transition: -webkit-transform 0.5s; -moz-transition: -moz-transform 0.5s; -ms-transition: -ms-transform 0.5s; transition: transform 0.5s; -webkit-transform-style: preserve-3d; -moz-transform-style: preserve-3d; -ms-transform-style: preserve-3d; transform-style: preserve-3d; } /* contents classes */ .plx-frame:nth-child(1) { background: url("public/images/bg_logo.jpg") no-repeat; background-size: cover; z-index: 5; } .plx-frame:nth-child(1) .plx-layer { background: rgba(66, 132, 244, .9); } .plx-frame:nth-child(2) { background: rgba(255, 215, 50, .9); z-index: 3; } .plx-frame:nth-child(2) .plx-back { background: url("public/images/night.jpg") no-repeat; background-size: cover; height: 100vh; width: 100%; } .plx-frame:nth-child(3) { background: url("public/images/ball.jpg") no-repeat; background-size: cover; z-index: 4; } .plx-frame:nth-child(3) .plx-base { background: rgba(47, 243, 216, .9); } .overlay { background: rgba(0, 0, 0, .2); } params { width: 80%; } result { background: rgba(255, 255, 255, .95); border: 6px solid rgb(255, 164, 0); border-radius: 50px; box-sizing: border-box; line-height: 1.4; opacity: 0; padding: 40px; -webkit-transform: translate(-50%, -10%) scale(.2); -moz-transform: translate(-50%, -10%) scale(.2); -ms-transform: translate(-50%, -10%) scale(.2); transform: translate(-50%, -10%) scale(.2); -webkit-transition: opacity .25s ease-out .2s, -webkit-transform .25s ease-out .2s; -moz-transition: opacity .25s ease-out .2s, -moz-transform .25s ease-out .2s; -ms-transition: opacity .25s ease-out .2s, -ms-transform .25s ease-out .2s; transition: opacity .25s ease-out .2s, transform .25s ease-out .2s; visibility: hidden; width: 85%; z-index: 10; } result.action { opacity: 1; -webkit-transform: translate(-50%, -70%) scale(1); -moz-transform: translate(-50%, -70%) scale(1); -ms-transform: translate(-50%, -70%) scale(1); transform: translate(-50%, -70%) scale(1); visibility: visible; } info { text-align: center; } /* animetions */ @-webkit-keyframes logo { 0% { opacity: 0; top: -10px; } 100% { opacity: 1; top: 0; } } @-moz-keyframes logo { 0% { opacity: 0; top: -10px; } 100% { opacity: 1; top: 0; } } @-ms-keyframes logo { 0% { opacity: 0; top: -10px; } 100% { opacity: 1; top: 0; } } @keyframes logo { 0% { opacity: 0; top: -10px; } 100% { opacity: 1; top: 0; } }', function(opts) {
    var KEYCODE_ESC = 27;
    var setResultFlg = function(e) {
      if (e.keyCode === KEYCODE_ESC) {
        this.canShowResult = false;
        this.update();
        document.removeEventListener('keyup', setResultFlg.bind(this), false);
      }
    };

    this.webUrl = opts.webUrl || 'https://';
    this.iosScheme = opts.iosScheme;
    this.store = opts.store;
    this.androidScheme = opts.androidScheme;
    this.packageName = opts.packageName;
    this.uris = [];

    this.canShowResult = false;

    this.on('update', function() {
      var self = this;
      if (this.canShowResult) {
        document.addEventListener('keyup', function setResultFlg(e) {
          if (e.keyCode !== KEYCODE_ESC) {
            return;
          }
          self.canShowResult = false;
          self.update();
          document.removeEventListener('keyup', setResultFlg, false);
        }, false);
      }
    });

    this.onSubmit = function() {
      this.uris = this.generateUris();
      this.toggleResult();
      this.save();
      this.update();
      return false;
    }.bind(this);

    this.toggleResult = function() {
      this.canShowResult = !this.canShowResult;
    }.bind(this);

    this.generateUris = function() {
      var data = web2app(
        this.webUrl,
        this.iosScheme,
        this.androidScheme,
        this.store,
        this.packageName
      ).data;
      return data;
    }.bind(this);

    this.save = function() {
      var data = {
        webUrl: this.webUrl,
        iosScheme: this.iosScheme,
        store: this.store,
        androidScheme: this.androidScheme,
        packageName: this.packageName
      };
      localStorage.setItem('web2app', JSON.stringify(data));
    }.bind(this);

  
});
