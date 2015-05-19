---
title: Welcome
permalink: /docs/
---

<h1>Welcome <span class="subheader"> (Warning: Docs still in progress)</span></h1>

Last updated: **19.05.15**

The public facing site is currently located at:
[http://prototypes.uat.liquidvisual.net](http://prototypes.uat.liquidvisual.net)

<div class="panel">
    <strong>NOTE:</strong>
    <p>The <b>old</b> public facing website for Checkpoint can still be <a href="http://cpbeta.uat.liquidvisual.net">accessed here</a>. But I urge you to discontinue using it in favor of this new combined codebase.</p>
</div>

---

## Purpose

The purpose of this project is to test and assess the impact of a responsive retro-fitting of both Checkpoint and Westlaw. The original goal was to design and create a responsive user interface (referred to as the 'Application Frame' throughout this document) that could accommodate large portions of existing code without too much modification.

## Result

This has been successful **to a point**. Most content has worked fine being dropped in directly, for example the *Search Results* templates and *Document* templates have posed few issues except in special cases, where as others will need significant re-working to function correctly. *Search Templates* fall into the latter category as do smaller components such as the delivery options, search boxes and document navigation buttons.

The premise of this working hinges on the fact that all CSS is essentially left behind - except for what is included with the prototype, and some of those files (namely document styles) have been refactored back into a modular Sass environment.

## Just a Prototype

The strategies laid out in these prototypes are in no way bullet-proof and there will be great challenges in the final implementation. All examples here are to be used as suggestions for best application with final judgement being reserved to the back-end developers' discretion.

<br>

<p class="text-center medium-text-right"><a href="/docs/getting-started/installation-and-setup/"><b>Next Up:</b> Installation &amp; Setup →</a></p>