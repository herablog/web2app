<info>

  <style scoped>
    :scope {}
    pre {
      margin: 0 0 20px;
    }
    code {
      border-radius: 2px;
      font-size: 1rem;
    }
    aside a {
      color: #333;
      text-decoration: none;
    }
    aside img {
      -webkit-transition: -webkit-transform .1s ease-out;
      -moz-transition: -moz-transform .1s ease-out;
      -ms-transition: -ms-transform .1s ease-out;
      transition: transform .1s ease-out;
    }
    aside a:hover img {
      -webkit-transform: scale(1.1) rotate(3deg);
      -moz-transform: scale(1.1) rotate(3deg);
      -ms-transform: scale(1.1) rotate(3deg);
      transform: scale(1.1) rotate(3deg);
    }
  </style>

  <pre>
    <code>npm install web2app\n
      web2app --config config.json --format csv</code>
  </pre>
  <aside>
    <a href="https://github.com/herablog/web2app"><p><img src="public/images/GitHub-Mark-120px-plus.png"></p>
    <p>More information is available on GitHub.</p></a>
  </aside>

  <script>
    this.on('mount', function() {
      var codes = this.root.querySelectorAll('code');
      for (var i = 0, len = codes.length; i < len; i++) {
        hljs.highlightBlock(codes[i]);
      }
    });
  </script>

</info>
