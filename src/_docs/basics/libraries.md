---
title: Assets
---

# Libraries

The Prototypes share many external libraries and dependancies. These are all open source and can be updated through [Bower](http://bower.io), a Node based package manager, by running:

```
bower install
```

<div class="panel">
    <strong>NOTE:</strong>
    <p>Not everything listed in the <b>bower.json</b> is included in the final app. All extraneous library references are just for  potential future purposes.</p>
</div>

---

## Bower Components
<br>

### [Animate.css](http://daneden.github.io/animate.css/)

A small library for CSS animations.

### [FastClick](https://github.com/ftlabs/fastclick)

A tiny library for eliminating the 300ms delay between a physical tap and the firing of a click event on mobile browsers.

### [Font Awesome Icons](http://fontawesome.io/cheatsheet/)

Not used often, included more for future use. [Cheatsheet here](http://fontawesome.io/cheatsheet/)

### [FooTable](http://fooplugins.com/plugins/footable-jquery/)

Responsive Tables. Used for Alerts and Folders. Possibly History also.

### [Foundation 5](http://foundation.zurb.com/)

Perhaps the most important. This is the front-end framework that runs most aspects of the prototypes from the responsive grid to typography. No JS components are used though, due to non-existing IE8 compatibility.

### [Foundation Font Icons](http://zurb.com/playground/foundation-icon-fonts-3)

This is the dominating icon set that the protoypes use. You can find the [cheatsheet here](http://zurb.com/playground/foundation-icon-fonts-3).

### [JQuery 1.11.1](http://dimsemenov.com/plugins/magnific-popup/)

Last version of JQuery before 2.0 (which isn't IE8 compatible)

### [JQuery UI 1.11.2](https://jqueryui.com/)

Used for the DatePicker widget and Tabs. This was already present in the real apps.

### [JQuery scrollTo](https://github.com/flesler/jquery.scrollTo)

Used on the collapsed Sidebar to whip the page back up to the top when an icon tab is clicked.

### [Magnific Popup](http://dimsemenov.com/plugins/magnific-popup/)

The responsive modal that displays extended hints and info. Can also be used to display message prompts. Eg. 'Do you want to log out?'

### [Modernizr](http://modernizr.com/)

CSS3 Feature detection. Used for determining touch devices, and providing HTML5 awareness to IE8.

### [NProgress](http://mmenu.frebsite.nl/)

A CSS3 driven cosmetic load bar to indicate progress.

### [Transit](http://ricostacruz.com/jquery.transit/)

A CSS3 animation library used for the collapsing of panels in the Application Frame. Built-in JQuery fallbacks.

<br>

<p class="text-center medium-text-right">
  <a href="/docs/basics/css-components/"><b>Next Up:</b> CSS Components →</a>
</p>