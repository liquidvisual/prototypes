---
title: Troubleshooting
---

# Troubleshooting

## Too Many Opened Files (EMFILE error)

Due to the large number of files shared between the prototypes, a common error to run into (at least on Mac) is:

```shell
Fatal error: EMFILE: Too many opened files.
```

This relates to the hard limits set by the operating system and the ability for browserSync to watch files. If the limit exceeds, the terminal will throw this error. A way around this is to set a higher limit inside each session. Simply use the following and you're good to go:

```shell
ulimit -n 10240
```

## CSS Styles Randomly Stop Firing

There's a lesser known restriction in Internet Explorer where stylehsheets hit a soft limit of 4095 selectors. Reaching this number will cause IE6, IE7, IE8 and IE9 to simply ignore all subsequent rules past that limit. The best course of action is to break files down into multiple files which is a reason behind why Foundation is included as a separate stylesheet in the head of the Master template.

Another way around this can be found in "Blessing" files. [Source](http://blesscss.com)

## Images and/or Fonts Aren't Loading In

All paths in the prototype site are **root relative**, pointing to an **/assets** directory and assuming everything resides in the root.

If images or font icons fail to load in your own environment, it's most likely an issue with the paths. Make sure the **assets/** folder is in the root. For more information see [Assets](/docs/basics/assets/).

## 'npm install' Fails

In many cases a failure with `npm install` is to do with user permissions. On Mac I use sudo which takes care of it:

```
sudo npm install
```

Failing that, you might want to clear npm's cache - as some files can get corrupted if downloaded incorrectly.

Delete the `node-modules/` and then run:

```
sudo npm cache clean
sudo npm install
```

<!-- # # IE8 compatibility and hitting the hard limit -->
