# web2app

web2app is an easily converter from Web URLs to App URIs.

![web2app](https://raw.githubusercontent.com/herablog/web2app/master/screenshots/home.png)

## What's the app URI?
Google recently released App Indexing. They said this:

> App Indexing helps you get your app found in Google Search. Once your app is indexed, mobile users who search for content related to your app can see an install button to your Android app in Search results. This helps you increase your install base.

Google is beginning to index within native apps using URI structure the same as web platform. For example, if the web URL is `http://example.com/info/`, the app URI become `android-app://http/example.com/info/`.

App URI format is:

```
android-app://{package_id}/{scheme}/{host_path}
```

If you want to learn about App Indexing, please access [the official document](https://developers.google.com/app-indexing/).

## The Two Ways To Open An App From The Web or Other Apps
There are two ways to open native app from the web or other apps.

#### Custom URL Scheme

```html
<a href="example://path?name=value">Open in App</a>
```

#### App Indexing
```
android-app://http/path?name=value
android-app://example/path?name=value
```

## Why It Is Important To Have The Same Format
Three URL formats, `Web URL`, `Custom URL Scheme`, `App Indexing`, tend to fall apart, because there is no rule in Custom URL Scheme. For example.

- `http://example.com/article?id=12345` (Web)
- `example://article/12345` (Custom URL Scheme)
- `android-app://example.com/article?id=12345` (App Indexing)

The more you generate App URL, the more difficult it becomes to remember the original rule. This application helps you to generate App URIs from Web URL automatically.

## Installation

### Web Version
If you want to use this application right now, please access [the Web Version](https://herablog.github.io/web2app/).

### CLI Version
CLI Version has more features: multiple URLs and several format styles.

```
npm install -g web2app
```

## Usuage

```
web2app --config youtube.json --format csv
```

### Options
- `config` Configration JSON file. Example is [here](https://github.com/herablog/web2app/blob/master/examples/youtube_config.json).
- `url` Web URL. You can connect multiple URLs with `,`.
- `ios_scheme` Custom URL Scheme for iOS. e.g. `youtube://`
- `android_scheme` Custom URL Scheme for Android.
- `store` App Store ID (Only for iOS.) e.g. `544007664`
- `package` Package Name (Only for Android.) e.g. `com.google.android.youtube`
- `format` Output format styles. `plain`(default), `csv`, `json`, `html`

If you want to save as file, you can change the command below.

```
web2app --config youtube.json --format csv > youtube.cvs
```

### Format Styles
#### plain
```
http://www.youtube.com/watch?v=dQw4w9WgXcQ
youtube://www.youtube.com/watch?v=dQw4w9WgXcQ
android-app://com.google.android.youtube/http/www.youtube.com/watch?v=dQw4w9WgXcQ
android-app://com.google.android.youtube/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ
youtube://www.youtube.com/watch?v=dQw4w9WgXcQ
ios-app://544007664/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ
```

#### csv
```csv
name,uri,platform
Web URL,http://www.youtube.com/watch?v=dQw4w9WgXcQ,Web
Custom URL Scheme for Android,youtube://www.youtube.com/watch?v=dQw4w9WgXcQ,Android
App Indexing for Android (http),android-app://com.google.android.youtube/http/www.youtube.com/watch?v=dQw4w9WgXcQ,Android
App Indexing for Android (custom scheme),android-app://com.google.android.youtube/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ,Android
Custom URL Scheme for iOS,youtube://www.youtube.com/watch?v=dQw4w9WgXcQ,iOS
App Indexing for iOS,ios-app://544007664/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ,iOS
```

#### json
```json
[
  [
    {
      "name": "Web URL",
      "uri": "http://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "platform": "Web"
    },
    {
      "name": "Custom URL Scheme for Android",
      "uri": "youtube://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "platform": "Android"
    },
    {
      "name": "App Indexing for Android (http)",
      "uri": "android-app://com.google.android.youtube/http/www.youtube.com/watch?v=dQw4w9WgXcQ",
      "platform": "Android"
    },
    {
      "name": "App Indexing for Android (custom scheme)",
      "uri": "android-app://com.google.android.youtube/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ",
      "platform": "Android"
    },
    {
      "name": "Custom URL Scheme for iOS",
      "uri": "youtube://www.youtube.com/watch?v=dQw4w9WgXcQ",
      "platform": "iOS"
    },
    {
      "name": "App Indexing for iOS",
      "uri": "ios-app://544007664/youtube/www.youtube.com/watch?v=dQw4w9WgXcQ",
      "platform": "iOS"
    }
  ]
]
```

#### html
I recommend html format! It shows the QR Code of each URL, so you can check whether the url is valid or not on your phone.

![HTML Format](https://raw.githubusercontent.com/herablog/web2app/master/screenshots/html.png)
