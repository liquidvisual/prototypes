---
title: CSS Components
---

<h1>CSS Components <span class="subheader"> (Warning: this page is still in progress)</span></h1>

## Sass

This project leverages Sass - a CSS pre-processor that helps with maintaining large amounts of files. Sass pre-processing is done through [grunt-sass](https://github.com/sindresorhus/grunt-sass) a grunt task that utilises the C++ implementation of the Ruby based compiler.

<div class="panel">
    <strong>NOTE:</strong>
    <p>The C++ implementation of Sass is actually named <b>libsass</b></p></p>
</div>

## How Legacy Content is Styled
*Coming soon*

## Breakpoints

<table>
    <thead>
        <tr>
        	<th>Sass Variable</th>
            <th>Sizes</th>
        </tr>
    </thead>
    <tbody>
        <tr>
        	<td><code>$small-range</code></td>
            <td>0-640px</td>
        </tr>
        <tr>
        	<td><code>$medium-range</code></td>
            <td>641-1024px</td>
        </tr>
        <tr>
        	<td><code>$large-up</code></td>
            <td>1025-1280px</td>
        </tr>
        <tr>
        	<td><code>$xlarge-range</code></td>
            <td>1281-1440px</td>
        </tr>
        <tr>
        	<td><code>$xxlarge-range</code></td>
            <td>1441px</td>
        </tr>
        <tr>
        	<td><code>$devices-only</code></td>
            <td>0-1024px</td>
        </tr>
    </tbody>
</table>

### How These Work

*Coming soon*
<!-- The small-range targets mobiles and phablets. At this narrow screen size -->

## TOC

*Coming soon*

In both prototypes TOC information is carried through partials. These files live inside a **toc_output/** directory. Since this is an **output** marked folder all partials contain minified snapshots of the existing apps' current DOM output only with no modification to the contents.

You can find these files in the following locations:

`src/_includes/checkpoint/toc_output/`
`src/_includes/westlaw/toc_output/`

## Breadcrumbs

*Coming soon*


## Export Options

*Coming soon*

<br>

<p class="text-center medium-text-right">
  <a href="/docs/basics/javascript/"><b>Next Up:</b> JavaScript →</a>
</p>
