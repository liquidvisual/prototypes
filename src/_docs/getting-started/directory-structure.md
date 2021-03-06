---
title: Directory Structure
---

# Directory Structure

## Root

```
prototypes/
  |--node_modules/
  |
  |--src/
  |  |--[Everything]
  |
  |--dist/
  |  |--[Compiled Directory]
  |
  |--Gruntfile.js
  |--bower.json
  |--package.json
  |--README.md
  |--_config.build.yml
  |--_config.yml
  |--Gemfile
```

<div class="panel">
  <strong>NOTE:</strong>
  <p>The <b>dist/</b> folder is not included by default when running locally. You need to run <b>grunt build</b> to generate it.</p>
</div>

### config.yml

This file instructs Jekyll what to do on compile. Currently the config sets up some global variables for pages inside the Westlaw and Checkpoint directories (see below). Most variables are passed through front-matter YAML from page to page in the markdown files. **config.yml** however establishes those variables in one place.

```
defaults:
  -
    scope:
      path: "pages/westlaw"
    values:
      site_type: "westlaw"
  -
    scope:
      path: "pages/checkpoint"
    values:
      site_type: "checkpoint"
```

The result is we're able to determine paths based on the page we're on by using the template variable:

`{% raw %}{{ page.site_type }}{% endraw %}`

 For instance, the index from **pages/checkpoint/index.html** will store a **page_type** variable of *"checkpoint"* and be accessible throughout all subsequent pages. This variable then goes to define paths and is ultimately how we share the codebases between the two.

## SRC

As you'll see below, most directories have subfolders which point towards Checkpoint or Westlaw specific data. In cases where files are shared eg. top layouts, these will reside in a **common/** folder.

```
src/
  |--_bower_components/
  |
  |--data/
  |  |--checkpoint/
  |  |--westlaw/
  |  |--common/
  |
  |--_docs/
  |  |--[Documention files]
  |
  |--_includes/
  |  |--checkpoint/
  |  |--westlaw/
  |  |--common/
  |
  |--_layouts/
  |  |--checkpoint/
  |  |--westlaw/
  |  |--common/
  |
  |--_scss/
  |  |--checkpoint/
  |  |--westlaw/
  |  |--common/
  |
  |--fonts/
  |
  |--img/
  |  |--checkpoint/
  |  |--westlaw/
  |  |--common/
  |
  |--modal_output/
  |  |--checkpoint/
  |  |--westlaw/
  |
  |--pages/
  |--scripts/
  |--README.md
  |--robots.txt
  |--CNAME
```

## It All Starts with the Pages Directory

The way Jekyll processes everything begins with Markdown files (.md) stored inside the **pages/** directory. These files contain front-matter YAML which tell the page what layout to use and the page title. They also pass other data, such as strings - which tell the layout to include certain HTML partials.

## In a Nutshell

The two prototypes are controlled by data variables stored inside of **src/data/[name]**. These variables govern colours, navigation and other information that differ between sites.

<br>

<p class="text-center medium-text-right">
  <a href="/docs/getting-started/compatibility/"><b>Next Up:</b> Compatibility →</a>
</p>