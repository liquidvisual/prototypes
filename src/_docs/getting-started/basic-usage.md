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

[Westlaw Workflows Doc](https://cloudup.com/c1OlESVlUdJ)
[Checkpoint Workflows Doc](https://cloudup.com/cARHOODXUQ0)

### How Simulation Works

Prototypes use a lot of raw code dropped in from their real counterparts. Because of this, many links throughout the app will be dead. To overcome this, all link hrefs are replaced with paths passed from the current page's destination variable. This **may** lead to some undesirable or otherwise glitchy behavior in places. If something goes wrong, refresh the page or return to the Guide to find your place.