---
title: Welcome
permalink: /docs/
---

# Welcome

Last updated: **24.04.15**

The public facing site is currently located at:
[http://prototypes.uat.liquidvisual.net](http://prototypes.uat.liquidvisual.net)

---

The purpose of this project is to test and assess the impact of a responsive retro-fitting of both Checkpoint and Westlaw. The original goal was to design and create a responsive user interface (referred to as the 'Application Frame' throughout this document) that could accomodate large portions of existing code without too much modification.

This has been successful **to a point**, so far. The complexity of search templates across both applications require a re-write of those form elements to be responsive - these cannot be retro-fitted. I have however devised a simple way to generate templates with little effort using a series of includes and variables which I will explain later on.

Mostly everything else is using markup directly output from the DOM. The premise of this working hinges on the fact that all CSS is essentially left behind - save for what is included with the prototype. JavaScript will carry over from the apps, but this is expected to conflict at certain points.

