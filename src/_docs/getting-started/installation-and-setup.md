---
title: Installation & Setup
---

# Installation &  Setup

This project is built with [Jekyll 2.5.3](http://jekyllrb.com) - a static site generator. It also uses [Grunt.js](http://gruntjs.com) - a JavaScript task runner and [Bower](http://bower.io) for package management. This workflow was scaffolded with a [Yeoman](http://yeoman.io) generator called [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) which simply automates the process of setting it all up.

The repo for all the source files are found here:

[https://github.com/liquidvisual/prototypes](https://github.com/liquidvisual/prototypes)

### On Mac:

You may need to install Ruby, Ruby Gems, NodeJS & Git. There are detailed instructions on the [Jekyll](http://jekyllrb.com/docs/installation/) website.

```shell
git clone git@github.com:liquidvisual/prototypes.git
cd prototypes
bundle install
npm install
bower install
ulimit -n 10240 # => increase limit on files watched
grunt serve
# => Now browse to http://localhost:9292
```

<div class="panel">
	<strong>More about 'ulimit' on OSX</strong>
	<p>Given the large amount of files being watched by BrowserSync (an NPM grunt task) - you'll probably need to set the higher limit each session since it's quite small by default on OSX (Windows is known to be fine). See <a href="/docs/miscellaneous/troubleshooting/">Troubleshooting</a> for more info.</p>
</div>

Build for production:

    grunt build # => to concat and minify etc. Creates './dist' folder.

### On Windows:

Jekyll is very easy to set up on Mac OS X or Linux. On Windows, not so much. These resources should help:

[Jekyll Docs on Windows](http://jekyllrb.com/docs/windows/#installation)
[Step by Step Guide](http://jekyll-windows.juthilo.com)

---

## Referencing the Build Folder

The repo that stores the build folder named **/dist** (generated from **/src**) can be found on a separate repo - under the **gh-pages** branch. The public facing preview website renders from this compiled directory:

[https://github.com/liquidvisual/prototypes/tree/gh-pages](https://github.com/liquidvisual/prototypes/tree/gh-pages)

Feel free to use it as a reference if things get hairy. Once you get the hang of the static Jekyll environment and its [Liquid templates](http://docs.shopify.com/themes/liquid-documentation/basics) - you'll be able to copy/paste mostly everything and substitute the basic templating syntax for your own.

So to summarise:

1. [/src](https://github.com/liquidvisual/prototypes) - for un-compiled templates, includes, Sass etc (human readable)
2. [/dist](https://github.com/liquidvisual/prototypes/tree/gh-pages) - stored on the **gh-pages** branch. Is minified and compiled. (not human readable)

**NOTE**: If you want to see what the code is compiled, *view source* on the [public facing website](http://prototypes.uat.liquidvisual.net). The **/dist** folder is not meant to be human readable.

---

## Setting Up Your Local Environment

**NOTE:** If you happen to use [Sublime Text](http://www.sublimetext.com/3) for a code IDE - it has a really handy plugin for syntax highlighting Jekyll templates. You can grab the [Jekyll package](https://sublime.wbond.net/packages/Jekyll) via [package control](https://sublime.wbond.net).

### 01. Copy Over /assets Directory

Jump into the [dist folder](https://github.com/liquidvisual/prototypes/tree/gh-pages) and grab the *entire* **/assets** folder. Put it into your project's root directory. This contains all the compiled CSS, fonts, images and JavaScript. This is important as all paths are root relative to the **/assets** folder.

That's all you'll need from the **/dist** directory. From this point on, all the action is in the **/src**.

### 02. Access /_layouts/master.html

Start with this master layout and substitute the template logic for your own as you build out the page in your own environment. When it comes to the assets, they compile into **/assets** on build so you'll only need to do a bit of substitution.

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

The same applies to JavaScript. That's probably the trickiest bit since it's not so obvious. The end result will look like this:

```html
<script src="/scripts/priority-minified.js"></script> <!-- In the head -->

<script src="/scripts/minified.js"></script> <!-- Before closing body -->
```

If in doubt, cross-check the compiled markup by viewing the source of the [public facing website](http://prototypes.uat.liquidvisual.net).

### 03. Copy Over Partials in /_includes

Templates reference partials from this folder to keep things modular and easy to maintain. If possible, I'd recommend retaining these files as separate chunks to your main templates.