<web2app>

  <style>
    web2app {
      color: #333;
      display: block;
      font-family: sans-serif;
      height: 500px; /* fallback */
      height: 100vh;
      overflow-x: hidden;
      overflow-y: auto;
      -webkit-perspective: 300px;
      -moz-perspective: 300px;
      -ms-perspective: 300px;
      perspective: 300px;
    }

    /* global classes */
    .hidden {
      visibility: hidden;
    }
    /* parallax classes */
    .plx-layer {
      bottom: 0;
      left: 0;
      position: absolute;
      top: 0;
      right: 0;
    }
    .plx-base {
      -webkit-transform: translateZ(0);
      -moz-transform: translateZ(0);
      -ms-transform: translateZ(0);
      transform: translateZ(0);
      z-index: 4;
    }
    .plx-back {
      -webkit-transform: translateZ(-300px) scale(2);
      -moz-transform: translateZ(-300px) scale(2);
      -ms-transform: translateZ(-300px) scale(2);
      transform: translateZ(-300px) scale(2);
      z-index: 3;
    }
    .plx-front {
      -webkit-transform: translateZ(90px) scale(.7);
      -moz-transform: translateZ(90px) scale(.7);
      -ms-transform: translateZ(90px) scale(.7);
      transform: translateZ(90px) scale(.7);
      z-index: 1;
    }
    .plx-item {
      left: 50%;
      position: absolute;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    .plx-frame {
      display: block;
      height: 100vh;
      position: relative;
      -webkit-transition: -webkit-transform 0.5s;
      -moz-transition: -moz-transform 0.5s;
      -ms-transition: -ms-transform 0.5s;
      transition: transform 0.5s;
      -webkit-transform-style: preserve-3d;
      -moz-transform-style: preserve-3d;
      -ms-transform-style: preserve-3d;
      transform-style: preserve-3d;
    }

    /* contents classes */
    .plx-frame:nth-child(1) {
      background: url("public/images/bg_logo.jpg") no-repeat;
      background-size: cover;
      z-index: 5;
    }
    .plx-frame:nth-child(1) .plx-layer {
      background: rgba(66, 132, 244, .9);
    }
    .plx-frame:nth-child(2) {
      background: rgba(255, 215, 50, .9);
      z-index: 3;
    }
    .plx-frame:nth-child(2) .plx-back {
      background: url("public/images/night.jpg") no-repeat;
      background-size: cover;
      height: 100vh;
      width: 100%;
    }
    .plx-frame:nth-child(3) {
      background: url("public/images/ball.jpg") no-repeat;
      background-size: cover;
      z-index: 4;
    }
    .plx-frame:nth-child(3) .plx-base {
      background: rgba(47, 243, 216, .9);
    }

    .overlay {
      background: rgba(0, 0, 0, .2);
    }

    params {
      width: 80%;
    }

    result {
      background: rgba(255, 255, 255, .95);
      border: 6px solid rgb(255, 164, 0);
      border-radius: 50px;
      box-sizing: border-box;
      line-height: 1.4;
      opacity: 0;
      padding: 40px;
      -webkit-transform: translate(-50%, -10%) scale(.2);
      -moz-transform: translate(-50%, -10%) scale(.2);
      -ms-transform: translate(-50%, -10%) scale(.2);
      transform: translate(-50%, -10%) scale(.2);
      -webkit-transition: opacity .25s ease-out .2s, -webkit-transform .25s ease-out .2s;
      -moz-transition: opacity .25s ease-out .2s, -moz-transform .25s ease-out .2s;
      -ms-transition: opacity .25s ease-out .2s, -ms-transform .25s ease-out .2s;
      transition: opacity .25s ease-out .2s, transform .25s ease-out .2s;
      visibility: hidden;
      width: 85%;
      z-index: 10;
    }
    result.action {
      opacity: 1;
      -webkit-transform: translate(-50%, -70%) scale(1);
      -moz-transform: translate(-50%, -70%) scale(1);
      -ms-transform: translate(-50%, -70%) scale(1);
      transform: translate(-50%, -70%) scale(1);
      visibility: visible;
    }

    info {
      text-align: center;
    }

    /* animetions */
    @-webkit-keyframes logo {
        0% { opacity: 0; top: -10px; }
        100% { opacity: 1; top: 0; }
    }
    @-moz-keyframes logo {
        0% { opacity: 0; top: -10px; }
        100% { opacity: 1; top: 0; }
    }
    @-ms-keyframes logo {
        0% { opacity: 0; top: -10px; }
        100% { opacity: 1; top: 0; }
    }
    @keyframes logo {
        0% { opacity: 0; top: -10px; }
        100% { opacity: 1; top: 0; }
    }

  </style>

  <div class="plx-frame">
    <header class="plx-layer plx-base">
      <logo class="plx-item"></logo>
      <a href="https://github.com/herablog/web2app"><img style="position: absolute; top: 0; right: 0; border: 0;" src="https://camo.githubusercontent.com/38ef81f8aca64bb9a64448d0d70f1308ef5341ab/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f6769746875622f726962626f6e732f666f726b6d655f72696768745f6461726b626c75655f3132313632312e706e67" alt="Fork me on GitHub" data-canonical-src="https://s3.amazonaws.com/github/ribbons/forkme_right_darkblue_121621.png"></a>
    </header>
  </div>

  <div class="plx-frame">
    <section class="plx-layer plx-base">
      <params
        class="plx-item"
        weburl={ webUrl }
        iosscheme={ iosScheme }
        store={ store }
        androidscheme={ androidScheme }
        packagename={ packageName }
      >
      </params>
    </section>
    <div class="plx-layer plx-base overlay" show={ canShowResult } onclick={ toggleResult }></div>
    <result
      class="result plx-item { action: canShowResult }"
      uris={ uris }
    >
    </result>
    <section class="plx-layer plx-back"></section>
  </div>

  <div class="plx-frame">
    <section class="plx-layer plx-front">
      <info class="plx-item"></info>
    </section>
    <div class="plx-layer plx-base"></div>
  </div>


  <script>
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

    onSubmit() {
      this.uris = this.generateUris();
      this.toggleResult();
      this.save();
      this.update();
      return false;
    }

    toggleResult() {
      this.canShowResult = !this.canShowResult;
    }

    generateUris() {
      var data = web2app(
        this.webUrl,
        this.iosScheme,
        this.androidScheme,
        this.store,
        this.packageName
      ).data;
      return data;
    }

    save() {
      var data = {
        webUrl: this.webUrl,
        iosScheme: this.iosScheme,
        store: this.store,
        androidScheme: this.androidScheme,
        packageName: this.packageName
      };
      localStorage.setItem('web2app', JSON.stringify(data));
    }

  </script>

</web2app>
