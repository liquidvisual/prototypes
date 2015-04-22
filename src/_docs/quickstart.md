---
layout: common/public/docs
title: Quickstart
permalink: /docs/quickstart/
---

# Quick Start

**NOTE:** If you happen to use [Sublime Text](http://www.sublimetext.com/3) for a code IDE - it has a really handy plugin for syntax highlighting Jekyll templates. You can grab the [Jekyll package](https://sublime.wbond.net/packages/Jekyll) via [package control](https://sublime.wbond.net).

### 01. Copy Over /assets Directory

Jump into the [dist folder](https://github.com/liquidvisual/cp-beta/tree/gh-pages) and grab the *entire* **/assets** folder. Put it into your project's root directory. This contains all the compiled CSS, fonts, images and JavaScript. This is important as all paths are root relative to the **/assets** folder.

That's all you'll need from the **/dist** directory. From this point on, all the action is in the **/src**.

### 02. Access /_layouts/master.html

Start with this and substitute the template logic for your own as you build your page. When it comes to the assets, they compile into **/assets** on build so you'll only need to do a bit of substitution.

You can replace all of this:

```html
<!-- build:css /assets/css/minified.css -->
  <link rel="stylesheet" href="/css/some-css-file.css">
  <link rel="stylesheet" href="/css/some-css-file.css">
  <link rel="stylesheet" href="/css/some-css-file.css">
  <link rel="stylesheet" href="/css/some-css-file.css">
  <link rel="stylesheet" href="/css/some-css-file.css">
<!-- endbuild -->
```

With this:

```html
<link rel="stylesheet" href="/assets/css/minified.css">
```

The same applies to Javascript. That's probably the trickiest bit since it's not so obvious. The end result will look like this:

```html
<script src="/scripts/priority-minified.js"></script> <!-- In the head -->

<script src="/scripts/minified.js"></script> <!-- Before closing body -->
```

### 03. Copy Over Partials in /_includes

Templates reference partials from this folder to keep things modular and easy to maintain. If possible, I'd recommend retaining these files as separate chunks to your main templates.