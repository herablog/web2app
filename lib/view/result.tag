<result style="display:block;font-family:sans-serif;margin:40px 0 100px;padding:0;">

  <table style="border-collapse:collapse;margin:0 auto;width:96%;">
    <caption style="font-size:1.5rem;margin:0 0 10px;">Web &amp; App URIs <span style="color:#999;font-size:0.8rem;"> by web2app</span></caption>
    <thead style="background:#f8f8f8;padding:2px;">
      <tr>
        <th style="padding:4px;">Name</th>
        <th style="padding:4px;">URI</th>
        <th style="padding:4px;width:160px;">QR to Check</th>
      </tr>
    </thead>
    <tbody>
      <tr each={ d, i in opts.data } style={ (i + 1) % 6 === 0 ? 'border-bottom: 2px solid #ccc;': 'border-bottom: 1px solid #eee;' }>
        <td style="color:#666;padding:4px 8px;">{ d.name }</td>
        <td style="color:#666;padding:4px 8px;">{ d.uri }</td>
        <td style="padding:20px;text-align:center;"><img src="data:image/png;base64,{ d.base64 }" alt="QRCode" width="100" height="100" title={ d.qrUri }></td>
      </tr>
    </tbody>
  </table>

</result>
