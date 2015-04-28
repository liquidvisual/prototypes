---
title: Troubleshooting
---

# Troubleshooting

## Too Many Opened Files (EMFILE error)

Due to the large number of files shared between the prototypes, a common error to run into (at least on Mac) is:

```shell
Fatal error: EMFILE: Too many opened files.
```

This relates to the hard limits set by the operating system and the ability for browsersync to watch files. If the limit exceeds, the terminal will throw this error. A way around this is to set a higher limit inside each session. Simply use the following and you're good to go:

```shell
ulimit -n 10240
```

## CSS Styles Randomly Stop Firing

There's a lesser known restriction in Internet Explorer where stylehsheets hit a soft limit of 4095 selectors. Reaching this number will cause IE6, IE7, IE8 and IE9 to simply ignore all subsequent rules past that limit. The best course of action is to break files down into multiple files which is a reason behind why Foundation is included as a separate stylesheet in the head of the Master template.