#!/usr/bin/env node

'use strict';

// load modules
var path = require('path');
var web2app = require('../lib/web2app');
var program = require('commander');
var pkg = require('../package.json');

// arg settings
program
  .version(pkg.version)
  .option('--url <url>', 'web URLs')
  .option('--ios_scheme <ios-scheme>', 'iOS scheme')
  .option('--android_scheme <android-scheme>', 'android Scheme')
  .option('--store <store>', 'app store ID')
  .option('--package <package>', 'android package name')
  .option('--config <path>', 'config JSON path')
  .option('--format <format>', 'output format: plain, csv or json')
  .parse(process.argv);

// get args
var args = program;
if (program.config) {
  args = require(path.resolve(process.cwd(), program.config));
}
var webs;
if (typeof args.url === 'string') {
  webs = args.url.split(',');
} else if (typeof args.url === 'undefined') {
  webs = '';
} else {
  webs = args.url;
}
var iosScheme = args.ios_scheme;
var androidScheme = args.android_scheme;
var store = args.store;
var packageName = args.package;
var formatType = program.format || 'plain'; // always use command line arg
var format = require('../lib/formats/');

// begin to log
if (formatType === 'plain') {
  logPlain();
} else if (formatType === 'csv') {
  logCsv();
} else if (formatType === 'json') {
  logJson();
} else if (formatType === 'html') {
  logHtml();
}

// formats
function logPlain() {
  var ret = '';
  webs.forEach(function(w, i) {
    var info = web2app(w, iosScheme, androidScheme, store, packageName);
    format.toPlain(info, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        ret += result;
        ret += (i !== webs.length - 1) ? '\n' : '';
      }
    });
  });
  console.log(ret);
}

function logCsv() {
  var ret = { data: [] };
  webs.forEach(function(w) {
    var info = web2app(w, iosScheme, androidScheme, store, packageName);
    ret.data = ret.data.concat(info.data);
  });
  format.toCsv(ret, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}

function logJson() {
  var ret = [];
  webs.forEach(function(w) {
    var info = web2app(w, iosScheme, androidScheme, store, packageName);
    format.toJson(info, function(err, result) {
      if (err) {
        console.log(err);
      } else {
        ret.push(JSON.parse(result));
      }
    });
  });
  console.log(JSON.stringify(ret, null, '  '));
}

function logHtml() {
  var ret = { data: [] };
  webs.forEach(function(w) {
    var info = web2app(w, iosScheme, androidScheme, store, packageName);
    ret.data = ret.data.concat(info.data);
  });
  format.toHtml(ret, function(err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
    }
  });
}
