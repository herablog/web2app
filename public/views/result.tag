<result>

  <style scoped>
    :scope {
      position: relative;
    }
    table {
      line-height: 1.6;
      margin: 0 auto 15px;
      width: 96%;
    }
    thead {
      display: none;
    }
    td:first-child {
      color: #666;
      font-size: .7rem;
      margin: 0 1em 0 0;
    }
    td:nth-child(2) {
      cursor: pointer;
      word-break: break-all;
    }
    td:nth-child(2):hover {
      color: #666;
    }
    figure {
      margin: 0 auto;
      text-align: center;
    }
    figure p {
      font-size: .8rem;
      margin: 0 0 4px;
    }
    figure img {
      display: block;
      height: 100px;
      margin: 0 auto;
      width: 100px;
    }
  </style>

  <table>
    <thead>
      <tr>
        <th>Name</th>
        <th>URI</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ u in opts.uris }>
        <td>{ u.name }</td>
        <td onmouseover={ parent.onMouseover }>{ u.uri }</td>
      </tr>
    </tbody>
  </table>

  <figure><p>Over the URIs, and check this QR on your phone</p></figure>

  <script>
    this.qrcode;
    this.on('mount', function() {
      this.qrcode = new QRCode(this.root.querySelector('figure'), {
        text: 'https://example.com',
        width: 100,
        height: 100,
      });
    });

    onMouseover(e) {
      var uri = e.target.innerText || e.target.textContent;
      if (uri.match(/[android|ios]-app/)) {
        uri = 'https://applinktest.appspot.com/app-link.html?url=' + encodeURI(uri);
      }
      this.qrcode.makeCode(uri);
    }
  </script>

</result>
