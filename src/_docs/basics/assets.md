---
title: Assets
---

# Assets

The Gruntfile is configured to export all asset files such as CSS, JS, Images and Fonts into a dedicated **assets/** directory. All paths in the prototype site are root relative, pointing to the **/assets** directory and assuming it's in the root.

If you experience images or font icons failing to load in your own environment, it's most likely an issue with the paths. Simply move the **/assets** directory so it's local to the root.


## Stylesheets
---

The Master layout defines three standalone CSS files that are compromised of multiple files. On build, these get crunched down and minified into a single file. 

You'll notice below that all stylesheets are wrapped inside of commented build flags which get picked up by a Grunt task called [grunt-usemin](https://github.com/yeoman/grunt-usemin) on build. 

The `{{ page.site_type }}` template variable (you'll see further down) translates into *"checkpoint"* or *"westlaw"* depending on the page. This mirrors the directory in which to output on build.

For example, you'll find the following inside **/assets**:

```
dist/
  |--assets/
  |   |--css/
  |      |--checkpoint/
  |         |--app.css
  |         |--foundation.css
  |         |--legacy-core.css
  |      |--westlaw/
  |         |--app.css
  |         |--foundation.css
  |         |--legacy-core.css
  |   |--fonts/
  |   |--img/
  |   |--scripts/
```


### Foundation Styles

This defines the standalone stylesheet for [Foundation](http://foundation.zurb.com). Foundation comes with clean defaults for typography, spacing, forms and other base components.

```html
<!-- build:css({src,.tmp}) /assets/css/{{ page.site_type }}/foundation.css -->
    <link rel="stylesheet" href="/css/{{ page.site_type }}/foundation/app.css">
<!-- endbuild -->
```

### Legacy Core

This stylesheet is made up of a number of specifically selected CSS files from the original Checkpoint and/or Westlaw application. These CSS files were absorbed into the prototype's codebase and converted to Sass (.scss) files. 

These files were very carefully selected and audited - they mostly target *Search Results* and *Documents* which are too involved to re-style from the ground up. These files were also tidied up of small compatibility hacks left over from IE6-7 - which would cause the Sass compiler to throw an error.

It is recommended that any further Document or Result styles in future are carried out in the current Sass environment, so everything is kept together.

```html
<!-- build:css({src,.tmp}) /assets/css/{{ page.site_type }}/legacy-core.css -->
    <link rel="stylesheet" href="/css/{{ page.site_type }}/app/legacy/original/all.css">
<!-- endbuild -->
```

### App Styles

Finally this stylesheet is one that contains all of the unique styling for app specific pages, layouts and components.

```html
<!-- build:css({src,.tmp}) /assets/css/{{ page.site_type }}/app.css -->
    <link rel="stylesheet" href="/_bower_components/animate.css/animate.min.css">
    <link rel="stylesheet" href="/_bower_components/footable/css/footable.core.css">
    <link rel="stylesheet" href="/css/{{ page.site_type }}/liquidvisual/liquidvisual.css">
    <link rel="stylesheet" href="/css/{{ page.site_type }}/main.css">
<!-- endbuild -->
```

### Why Are These Separated?

It turns out that IE6-9 have a very significant shortcoming. These browsers have a soft limit of 4095 selectors. Once this limit is reached, subsequent styles simply fail silently. Keeping stylesheets separated reduces the chance of running into this limit. You can read more about this in [Troubleshooting](/docs/miscellaneous/troubleshooting/).


## JavaScript
---

JavaScript is set out in the same way. You'll find a similar process right before the closing body. The build flags are much the same:

```html
 <!-- build:js(src) /assets/scripts/{{ page.site_type }}/app.js -->
     /path/to/scripts.js
 <!-- endbuild -->
 ```
 
### Adhoc JavaScript

Aside from the main **app.js** there is a second JavaScript file that gets exported on build. It's called **adhoc-only.js**. This file contains code that's merely for simulation purposes in the prototype. Keeping it separate allows you to easily exclude it from your own environment.

```html
 <!-- build:js(src) /assets/scripts/{{ page.site_type }}/adhoc-only.js -->
    <script src="/scripts/common/adhoc/adhoc-datepicker.js"></script>
    <script src="/scripts/common/adhoc/adhoc-export-options.js"></script>
    <script src="/scripts/common/adhoc/adhoc-filter-toc.js"></script>
    <script src="/scripts/common/adhoc/adhoc-list-delete.js"></script>
    <script src="/scripts/common/adhoc/adhoc-toc.js"></script>
<!-- endbuild -->
```

## Images
---

Images are fairly straight forward. There is a Grunt task called [grunt-cdnify](https://github.com/callumlocke/grunt-cdnify) that runs through the templates and appends **/assets/** to file paths on build.

For example when **serving** the image of a logo locally, the path might be:

```
/img/westlaw/template/logo-type@2x.png
```

On build, CDN-ify will append **/assets/** making it:

```
/assets/img/westlaw/template/logo-type@2x.png
```

### CSS Background Images

Though seldom used, the paths of these images don't change from local to remote. Take the following:

```
background: url(../../img/common/ui/search-icon.svg);
```

Since image paths are relative to the stylesheet, this holds true in both environments where the css is in the same folder as the img directory. The key to this working is: `../../`

**dist** example:

```
dist/
  |--assets/
  |   |--css/
  |      |--checkpoint/
  |      |--westlaw/
  |   |--fonts/
  |   |--img/
  |   |--scripts/
```

**src** example

```
src/
  |--css/
  |  |--checkpoint/
  |  |--westlaw/
  |--fonts/
  |--img/
  |--scripts/
```

## Fonts
---

All fonts are common to both prototypes. There are three types which get called upon:

1. Open Sans
2. Font Awesome Icon Fonts
3. Foundation Icon Fonts

### Open Sans

Open Sans is loaded from a Google's Font Foundry CDN. You'll find this in the Master.

```
<!-- Google Fonts CDN -->
<link rel="stylesheet" href="http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,700italic,400,300,700">
```

### Font Awesome Icon Fonts

This is a comprehensive library of every icon you could think of. [Cheatsheet here](http://fontawesome.io/cheatsheet/)

Basic use is as follows:

```
<i class="fa fa-[icon-name]"></i>
```

### Foundation Icon Fonts

This is the main library used by prototypes as the icons are well sized and consistent. Only use Font Awesome if Foundation doesn't have what you're looking for. Usage is pretty similar.

```
<i class="fi-[icon-name]"></i>
```

Let's say I wanted to create an icon of a star, I would consult the [Foundation Icons Cheatsheet](http://zurb.com/playground/foundation-icon-fonts-3), grab the name of the icon and write:

```
<i class="fi-star"></i>
```

### Font Icons Are Better Than Image Icons

Fonts are much easier to scale. They also display better on retina screens with double pixel density. The need for sprite-sheets is also unnecessary now because you can control hover states by styling the icon directly.






























