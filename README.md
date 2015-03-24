# DOCUMENTATION

Last updated: **25.03.15**

The public facing site is currently located at:
[http://prototypes.uat.liquidvisual.net](http://prototypes.uat.liquidvisual.net)
[http://prototypes.uat.liquidvisual.net/westlaw/](http://prototypes.uat.liquidvisual.net/westlaw/)

---

## Installation &  Setup

This project is built with [Jekyll 2.5.3](http://jekyllrb.com) - a static site generator. It also uses [Grunt.js](http://gruntjs.com) - a JavaScript task runner and [Bower](http://bower.io) for package management. This workflow was scaffolded with a [Yeoman](http://yeoman.io) generator called [generator-jekyllrb](https://github.com/robwierzbowski/generator-jekyllrb) which simply automates the process of setting it all up.

The repo for all the source files are found here:

[https://github.com/liquidvisual/prototypes](https://github.com/liquidvisual/prototypes)

### On Mac:

You may need to install Ruby, Ruby Gems, NodeJS & Git. There are detailed instructions on the [Jekyll](http://jekyllrb.com/docs/installation/) website.

    git clone git@github.com:liquidvisual/prototypes.git
    cd prototypes
    bundle install
    npm install
    bower install
    grunt serve
    # => Now browse to http://localhost:9292

For production:

    grunt build # => to concat and minify etc. Creates './dist' folder.

### On Windows:

Jekyll is very easy to set up on Mac OS X or Linux. On Windows, not so much. These resources should help:

[Jekyll Docs on Windows](http://jekyllrb.com/docs/windows/#installation)
[Step by Step Guide](http://jekyll-windows.juthilo.com)

---

## Referencing the Build Folder

The online repo that stores the build folder named **/dist** (generated from /src) can be found on a separate repo - under the **gh-pages** branch. Link below.

[https://github.com/liquidvisual/prototypes/tree/gh-pages](https://github.com/liquidvisual/prototypes/tree/gh-pages)

Feel free to use it as a reference if things get hairy. Once you get the hang of the static Jekyll environment and its [Liquid templates](http://docs.shopify.com/themes/liquid-documentation/basics) - you'll be able to copy/paste mostly everything and substitute the basic templating syntax for your own.

So to summarise:

1. [/src](https://github.com/liquidvisual/prototypes) - for uncompiled templates, includes, Sass etc (human readable)
2. [/dist](https://github.com/liquidvisual/prototypes/tree/gh-pages) - stored on the gh-pages branch. Is minified and compiled. (not human readable)

Note: If you want to see what the code is compiled, *view source* on the [public facing website](http://bigredsky.uat.liquidvisual.net). The /dist folder is not meant to be human readable.

---

## Quick Start

**NOTE:** If you happen to use [Sublime Text](http://www.sublimetext.com/3) for a code IDE - it has a really handy plugin for syntax highlighting Jekyll templates. You can grab the [Jekyll package](https://sublime.wbond.net/packages/Jekyll) via [package control](https://sublime.wbond.net).

### 01. Copy Over /assets Directory

Jump into the [dist folder](https://github.com/liquidvisual/cp-beta/tree/gh-pages) and grab the *entire* **/assets** folder. Put it into your project's root directory. This contains all the compiled CSS, fonts, images and JavaScript. This is important as all paths are root relative to the **/assets** folder.

That's all you'll need from the **/dist** directory. From this point on, all the action is in the **/src**.

### 02. Access /_layouts/master.html

Start with this and substitute the template logic for your own as you build your page. When it comes to the assets, they compile into **/assets** on build so you'll only need to do a bit of substitution.

You can replace all of this:

    <!-- build:css /assets/css/minified.css -->
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
      <link rel="stylesheet" href="/css/some-css-file.css">
    <!-- endbuild -->

With this:

    <link rel="stylesheet" href="/assets/css/minified.css">

The same applies to Javascript. That's probably the trickiest bit since it's not so obvious. The end result will look like this:

    <script src="/scripts/priority-minified.js"></script> <!-- In the head -->

    <script src="/scripts/minified.js"></script> <!-- Before closing body -->

### 03. Copy Over Partials in /_includes

Templates reference partials from this folder to keep things modular and easy to maintain. If possible, I'd recommend retaining these files as separate chunks to your main templates.

---

## How Templating Works

**NOTE:** All of these folders live inside **/src** directory

### /_layouts

Layouts are stored in the **/_layouts** folder and have 3 levels of heirarchy. This is to help maintenance. They inherit from the bottom up (starting from #3).

1. master.html
2. internal.html
3. leaf template (eg. dashboard.html or login.html)

### /_includes

Some templates will draw on partials, which are just small HTML chunks inside the **/_includes** folder. These includes will sometimes use global template variables from their parent template.

### /_data

Some templates and includes will draw data (such as the navigation and locations listing) from YAML files located inside **/_data**. This keeps things external and templates are able to use basic loops and conditionals to interact with it, similiar to the logic in the back-end. This is for prototype purposes only - you would of course use your own data.


### /pages

Each Jekyll page is initiated with a single MARKDOWN file (leaf) acting as the point of entry. These files contain meta data, permalinks and page specific variables which get passed into the layouts. They also contain body text which is stored as:

    {{ content }}

In the YAML front matter - these leaf pages will specify a template to use, eg. /public/login.html which will start at the leaf template and inherit up the chain.

__IMPORTANT TO NOTE:__

During the early stages of this prototype, leaf templates stored in /pages will contain a minified HTML dump of content **sourced directly from the DOM output** of the BigRedSky application. This is to ensure (and test) that most existing content can simply be dropped into the new responsive application frame without breaking. Although it probably will.

As these leaf templates are recreated from the ground up to be responsive, they will start to omit their data dump from being inherited into its self. The **/page** data will become redundant.

Eg. leaf templates (in **/layout**) will stop including:

    {{ content }}

 but the data will still exist in **/pages**, though it will no longer be used.

### Front Matter

Every layout and markdown file (except the master) contain front matter in the form of YAML at the head of the document. This is used to specify layouts and page variables. Some data is stubbed inside the actual layout - for hinting and quick access.

As a general rule of thumb; if variables are in the front-matter, they're page variables and user editable. If they're inside the actual layout - it's for layout logic.

---

## Updating Compiled Assets

### The Quick Way

Simply create a new stylesheet or Javascript and link to it in the master.html. These files can store quick fixes and time sensitive updates. At a later time, they can be absorbed into the Sass files and recompiled with a **grunt build**.

In future, when updates are made relating to CSS, JS, fonts or images - one only needs to copy over the **dist/assets** folder from the remote repo to receive the updates.