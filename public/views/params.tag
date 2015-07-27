<params>

  <style scoped>
    :scope {

    }
    input {
      appearance: none;
      border: 1px solid rgb(255, 206, 0);
      border-radius: 6px;
      box-sizing: border-box;
      font-size: 1rem;
      outline: none;
      padding: 8px;
      width: 100%;
    }
    label {
      display: inline-block;
      font-size: .8rem;
      padding: 0 0 4px 4px;
    }
    ul {
      display: -webkit-flex;
      display: flex;
      margin: 0 0 15px;
    }
    ul:last-of-type {
      margin-bottom: 40px;
    }
    ul:nth-of-type(2) li:first-child,
    ul:last-of-type li:first-child {
      padding: 0 5px 0 0;
    }
    ul:nth-of-type(2) li:last-child,
    ul:last-of-type li:last-child {
      padding: 0 0 0 5px;
    }
    li {
      width: 100%;
    }
    button {
      appearance: none;
      background: rgb(255, 165, 50);
      border: none;
      border-radius: 2px;
      color: #fff;
      cursor: pointer;
      font-size: 1.2rem;
      height: 50px;
      line-height: 50px;
      outline: none;
      text-align: center;
      -webkit-transition: font-size .2s ease-out;
      -moz-transition: font-size .2s ease-out;
      -ms-transition: font-size .2s ease-out;
      transition: font-size .2s ease-out;
      width: 100%;
    }
    button:hover {
      background: rgb(255, 164, 0);
      font-size: 1.4rem;
    }
  </style>

  <form>
    <ul>
      <li>
        <label for="webUrl">Web URL</label>
        <input type="url" id="webUrl" value={ opts.weburl } required>
      </li>
    </ul>

    <ul>
      <li>
        <label for="iosScheme">iOS URI Scheme</label>
        <input type="url" id="iosScheme" value={ opts.iosscheme } required>
      </li>
      <li>
        <label for="store">iOS App Store ID</label>
        <input type="number" id="store" value={ opts.store } required>
      </li>
    </ul>

    <ul>
      <li>
        <label for="androidScheme">Android URI Scheme</label>
        <input type="url" id="androidScheme" value={ opts.androidscheme } required>
      </li>

      <li>
        <label for="packageName">Android Package Name</label>
        <input type="text" id="packageName" value={ opts.packagename } required>
      </li>
    </ul>

    <button onclick={ onSubmit } type="submit">Generate!</button>

  </form>


  <script>

    onSubmit() {
      this.attachValue();
      this.parent.onSubmit();
      return false;
    }

    attachValue() {
      this.parent.webUrl = this.webUrl.value;
      this.parent.iosScheme = this.iosScheme.value;
      this.parent.store = this.store.value;
      this.parent.androidScheme = this.androidScheme.value;
      this.parent.packageName = this.packageName.value;
    }

  </script>

</params>
