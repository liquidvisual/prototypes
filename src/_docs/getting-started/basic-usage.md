---
title: Basic Usage
---

# Basic Usage

## How to Implement

Both prototypes (Checkpoint and Westlaw) share the same Application Frame.

```
	<meta name="viewport" content="width=device-width, initial-scale=1">
```

## Responsive Analysis

1. Search Templates
2. Search Results
3. Documents
4. Module Pages

etc

## Media Queries

<div class="table-responsive">
        <table>
    <thead>
        <tr>
            <th class="highlight">Key</th>
            <th class="highlight">CSS Media Query</th>
            <th>Applies</th>
            <th>Classname</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td class="highlight"><i>None</i></td>
            <td class="highlight"><i>None</i></td>
            <td><i>Always</i></td>
            <td><code>.pure-u-*</code></td>
        </tr>


        <tr>
            <td class="highlight"><b><code>sm</code></b></td>
            <td class="mq-table-mq highlight"><code>@media screen and (min-width: 35.5em)</code></td>
            <td>≥ <b>568px</b></td>
            <td><code>.pure-u-<b>sm</b>-*</code></td>
        </tr>

        <tr>
            <td class="highlight"><b><code>md</code></b></td>
            <td class="mq-table-mq highlight"><code>@media screen and (min-width: 48em)</code></td>
            <td>≥ <b>768px</b></td>
            <td><code>.pure-u-<b>md</b>-*</code></td>
        </tr>

        <tr>
            <td class="highlight"><b><code>lg</code></b></td>
            <td class="mq-table-mq highlight"><code>@media screen and (min-width: 64em)</code></td>
            <td>≥ <b>1024px</b></td>
            <td><code>.pure-u-<b>lg</b>-*</code></td>
        </tr>

        <tr>
            <td class="highlight"><b><code>xl</code></b></td>
            <td class="mq-table-mq highlight"><code>@media screen and (min-width: 80em)</code></td>
            <td>≥ <b>1280px</b></td>
            <td><code>.pure-u-<b>xl</b>-*</code></td>
        </tr>

    </tbody>
</table>

    </div>

## Libraries

Animate.css
FastClick
Font Awesome Icons
Footable: Responsive Tables JQuery Plugin
Foundation 5 CSS Framework
Foundation Font Icons
JQuery 1.11.1
JQuery UI 1.11.2
JQuery scrollTo
JQuery Transit
Magnific Popup Responsive Lightbox
Modernizr
MMenu (phased out in new codebase)
NProgress Load Bar
