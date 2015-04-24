---
title: Templates
---

# Templates

## How Templating Works

**NOTE:** All of these folders live inside **/src** directory

### /_layouts

Layouts are stored in the **/_layouts** folder and have 3 levels of heirarchy. This is to help maintenance. They inherit from the bottom up (starting from #3).

1. master.html
2. internal.html
3. leaf template (eg. dashboard.html or login.html)

### /_includes

Some templates will draw on partials, which are just small HTML chunks inside the **/_includes** folder. These includes will sometimes use global template variables from their parent template.

### /_data

Some templates and includes will draw data (such as the navigation and locations listing) from YAML files located inside **/_data**. This keeps things external and templates are able to use basic loops and conditionals to interact with it, similiar to the logic in the back-end. This is for prototype purposes only - you would of course use your own data.


### /pages

Each Jekyll page is initiated with a single MARKDOWN file (leaf) acting as the point of entry. These files contain meta data, permalinks and page specific variables which get passed into the layouts. They also contain body text which is stored as:

    {{ content }}

In the YAML front matter - these leaf pages will specify a template to use, eg. /public/login.html which will start at the leaf template and inherit up the chain.

__IMPORTANT TO NOTE:__

During the early stages of this prototype, leaf templates stored in /pages will contain a minified HTML dump of content **sourced directly from the DOM output** of the BigRedSky application. This is to ensure (and test) that most existing content can simply be dropped into the new responsive application frame without breaking. Although it probably will.

As these leaf templates are recreated from the ground up to be responsive, they will start to omit their data dump from being inherited into its self. The **/page** data will become redundant.

Eg. leaf templates (in **/layout**) will stop including:

    {{ content }}

 but the data will still exist in **/pages**, though it will no longer be used.

### Front Matter

Every layout and markdown file (except the master) contain front matter in the form of YAML at the head of the document. This is used to specify layouts and page variables. Some data is stubbed inside the actual layout - for hinting and quick access.

As a general rule of thumb; if variables are in the front-matter, they're page variables and user editable. If they're inside the actual layout - it's for layout logic.