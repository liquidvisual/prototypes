---
title: Basic Usage
---

# Basic Usage

Checkpoint & Westlaw share the same 'Application Frame' and reside in the same codebase. As a result each prototype will follow the same rules and behavior. Anything you do in Checkpoint can be done in Westlaw and vice versa (mostly). This includes navigation, mobile viewing and the interaction of components.

## Using the Guide

Each prototype has a dynamically generated Guide which lists all of the pages you can access within that prototype. Alongside you will also find, in tiny print, the path of the **layout** the page uses.

The Guide is built into both prototype's main navigation bar, allowing you to return to it quickly.

<div class="panel">
    <strong>TIP: Return to the Lobby</strong>
    <p>If you feel lost or need to locate these docs later, you can return to the lobby screen by clicking the site logo in the top bar throughout any page of the app.</p>
</div>

## Simulated Workflows

To simulate the effect of using the app, each page comes with a built-in "destination" variable which tells it where to go next. Due to the static nature of the prototypes this is rather restrictive, forcing you along a linear path like a powerpoint slideshow. It should be enough to get the job done though. These simulated workflows have been built around the documents that were originally submitted at the start of the project. You can find them here:

* [Westlaw Workflows Doc](https://cloudup.com/c1OlESVlUdJ)
* [Checkpoint Workflows Doc](https://cloudup.com/cARHOODXUQ0)

### How Simulation Works

Prototypes use a lot of raw code dropped in from their real counterparts. Because of this, many links throughout the app will be dead. To overcome this, all link hrefs are replaced with paths passed from the current page's destination variable. This **may** lead to some undesirable or otherwise glitchy behavior in places. If something goes wrong, refresh the page or return to the Guide to find your place.

Please also report any dead links through email.

---

## Why Do Some Parts Look Better Than Others?

Due to the complexity and sheer size of what's being handled inside these two prototypes, you may notice some pieces end up looking "wonky" or that some elements look better than others. Particularly across prototypes.

This mostly has to do with how we're retro-actively styling existing (DOM) content. In places markup is very difficult to style and override. A good example of this, is the comparison of the Context Menu (RHS) in the Basic search results for Checkpoint [(see here)](/pages/westlaw/research/search-results/basic-results-01/) and Westlaw [(see here)](/pages/checkpoint/research/search-results/tax-exempt-commentary/). This content is raw code from the existing TR apps.

You'll notice that Checkpoint looks much cleaner where as Westlaw appears broken. This comes down to a broader issue that has to do with how markup is written. In Checkpoint, the text is part of the anchor element so can be styled easily. Westlaw on the other hand, has a slight change where the text is **outside** of the anchor - making it close to impossible to style as desired.

Similiar cases like this are found throughout both prototypes where the smallest change in expected markup will break the styling and this adds up quite a bit.

### How Do We Fix It?

At some point it might be worth while re-writing those legacy overrides from the ground up, knowing what I know now. The current way legacy content is styled has become quite tangled and hard to maintain. Either those styles need to be revised and coded better, or the markup needs to change.

<br>

<p class="text-center medium-text-right">
	<a href="/docs/getting-started/directory-structure/"><b>Next Up:</b> Directory Structure →</a>
</p>