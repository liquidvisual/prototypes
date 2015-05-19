---
title: Compatibility
---

# Compatibility

<div class="panel">
  <strong>NOTE:</strong>
  <p>Cross browser testing has been performed with IE8, IE9 and IE10 in addition to all modern browsers.</p>
</div>

## IE8

One major hurdle with compatibility is catering for IE8, one of the last browsers to lack support for Media Queries - which everything is built around. **Everything**.

For IE8 support we'll need to depend on:

1. IE Conditionals
2. Polyfills
2. A Grunt generated IE8 stylesheet

### IE Conditionals

IE Conditionals are found throughout the Master layout but the most important are at the very top.

```
<!DOCTYPE html>
<!--[if lt IE 8]>       <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if lt IE 9]>       <html class="no-js lt-ie9"> <![endif]-->
<!--[if IE 9]>          <html class="no-js lt-ie10"> <![endif]-->
<!--[if gt IE 9]><!-->  <html class="no-js"> <!--<![endif]-->
```
This allows us to target "versions" of IE in CSS and JS by using a **.lt-ie[x]** class selector.

### Polyfills

All polyfills are found in the **master.html** in the **/layouts** folder. The order of these items in that Master layout is extremely important. Let's run through them.

```html
<!-- Priority Scripts -->
<script src="//cdnjs.cloudflare.com/ajax/libs/modernizr/2.7.1/modernizr.min.js"></script>
```

[Modernizr](http://modernizr.com) is loaded in the head via CDN (right below JQuery). Modernizr is a JavaScript library that detects HTML5 and CSS3 features. IE8 will NOT recognise HTML5 elements such as `<article>` or `<header>` by default. Fortunately Modernizr patches this for us.

The next set of Polyfills are used to restore absent CSS3 functionality such as media queries, CSS3 selectors and more.

```html
<!--[if lt IE 9]>
    <script src="//s3.amazonaws.com/nwapi/nwmatcher/nwmatcher-1.2.5-min.js"></script>
    <script src="//html5base.googlecode.com/svn-history/r38/trunk/js/selectivizr-1.0.3b.js"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/respond.js/1.1.0/respond.min.js"></script>
<![endif]-->
```

### A Grunt Generated IE8 Stylesheet

<div class="panel">
  <strong>WARNING:</strong>
  <p>Extreme pain up ahead.</p>
</div>

The final piece of the puzzle is generating an overriding IE8 stylesheet. The sole purpose of this file is to include pixel fallbacks to REM units - which is used throughout the application. Unfortunately there isn't a more succinct way to achieve this in Sass through Foundation - so we need to rely on post processing.

On around line 400 of the **Gruntfile.js** you'll find the following to make this happen:

```
pixrem: {
  options: {
    rootvalue: '16px'
  },
  dist: {
    src: '<%= yeoman.assets %>/css/*.css',
    dest: '<%= yeoman.assets %>/css/minified-ie8.css'
  }
},
```

Unfortunately, this process is only able to cover **ONE** stylesheet (Westlaw). You would need to generate these manually (and one at a time) by changing the paths and building again. It's really confusing, and yes it sucks - but this is the only way that I've found.

This conditional is what gives IE8 users what they need:

```
<!--[if lt IE 9]>
<link rel="stylesheet" href="/assets/css/{{page.site_type}}/minified-ie8.css">
<![endif]-->
```

You'd be right in that they download the CSS twice. It's not ideal, but it's *easier*. I suppose you could opt to use the IE8 generated sheet over the default one - but then you run the risk of mistakenly outputting the wrong one.

## CDNs

Leveraging content delivery networks is much easier for these polyfills. We don't have to worry about minifying or maintaining local files. Business networks **may** have an issue if they have some crazy firewall in place - but in that case they wouldn't be able to load fonts from Google either. Best to keep in mind.

## How to Test in IE8

It's a very laborious task to actually test with IE8. In order to do it locally, follow these steps.

1. `grunt build`
2. Once **dist/** has been created; CD into the folder via the terminal `cd dist`
3. Run it as a virtual server. This is what I use: `python -m SimpleHTTPServer 8000`
4. Fire up IE8 compatibility mode and navigate to: `http://localhost:8000`

Right now, as mentioned above this will only work one prototype at a time. It's currently configured to output an IE8 file for Westlaw. To generate a Checkpoint one, you need to edit the Gruntfile and reproduce like so:

```
pixrem: {
  options: {
    rootvalue: '16px'
  },
  dist: {
    src: '<%= yeoman.assets %>/css/checkpoint/*.css',
    dest: '<%= yeoman.assets %>/css/checkpoint/minified-ie8.css'
  }
},
```
For production, you would want to go through these steps so you have copies of IE8 stylesheets for both Westlaw and Checkpoint. This isn't really maintainable though, since with every change - you need to jump through all these hoops again to produce the code for one browser. And then you risk running into the dreaded selector limit - [see troubleshooting](/docs/miscellaneous/troubleshooting/).

There's a chance a better process could be created to handle this post processing separately - but at the moment I'm not sure how to go about doing it. The current Grunt task works by collecting all files and generating one big one. It doesn't work with exporting multiple sources. Oh, and it recently became unsupported making this all insanely difficult.


## Performance

In honesty, IE8 performance is pretty lackluster. It does work but we're **really** stretching the limits of what we can do with all of these responsive frameworks by catering for IE8. Pages will sometimes freeze and feel really sluggish - but I'm unsure if that's just a rendering issue with how much JavaScript is trying to process in accordance with the sizeable raw DOM dumps. I guess we'll find out.

Please remember that Microsoft will be dropping support for IE8 AND IE9 in early 2016 - so we should really be concentrating our efforts on better educating and warning our customer base instead of spending additional time on waning legacy support.

<br>

<p class="text-center medium-text-right">
  <a href="/docs/basics/templates/"><b>Next Up:</b> Templates →</a>
</p>