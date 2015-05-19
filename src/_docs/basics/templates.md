---
title: Templates
---

# Templates

## How Templating Works

<div class="panel">
	<strong>NOTE:</strong>
	<p>All the following folders live inside the <b>/src</b> directory</p>
</div>

### /_layouts

Layouts are stored in the **/_layouts** folder and have three levels of hierarchy. This is to help with maintenance. Each template will inherit from the **bottom up** (starting from #3).

1. master.html
2. internal.html
3. Page Layout (eg. workflow.html)

### /_includes

Some templates will draw on partials, which are just small HTML chunks inside the **/_includes** folder. These includes will sometimes use global template variables from their parent template to change their function or appearance.

### /_data

Some templates and includes will draw data (such as the navigation and locations listing) from YAML files located inside **/_data**. This keeps things external and templates are able to use basic loops and conditionals to interact with it, similiar to the logic in the back-end. This is for prototype purposes only - you would of course use your own data.


### /pages

Each Jekyll page is initiated with a single Markdown file acting as the point of entry. These files contain meta data, permalinks and page specific variables which get passed into the layouts. They also contain body text which is stored as:

```
{% raw %}{{ content }}{% endraw %}
```

In the YAML front matter - these Markdown files will specify a template to use. For example:

```
layout: "westlaw/workflow/workflow.html"
```

This will start at the page layout and inherit up the chain until it stops at the Master.

```
workflow.html => internal.html => master.html
```

__DOM Output Dump:__

Pages also sometimes contain raw DOM output copied directly from the existing application. You'll know if it's DOM output when you see a large chunk of minified code. This code is inserted into page templates through the template variable {% raw %}`{{ content }}`{% endraw %}.


### Front Matter

Each layout and Markdown file (except the Master) contain front matter in the form of YAML at the head of the document. This is used to specify layouts and page variables.

<br>

<p class="text-center medium-text-right">
  <a href="/docs/basics/data-files/"><b>Next Up:</b> Data Files →</a>
</p>