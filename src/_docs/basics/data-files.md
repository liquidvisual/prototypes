---
title: Data Files
---

# Data Files

At the time of writing, there are only two data files the site draws from.

1. data/westlaw/settings.yml
2. data/checkpoint/settings.yml

The settings file makes it possible to share the majority of code. For example the 'Application Frame' draws its top menu navigation from a partial:

```
src/includes/common/menus/top_menu.html
```

That partial is then able to access Checkpoint **or** Westlaw data and render the menu based on the values. The data looks like this:


```yaml
top_menu:
  - title: Dashboard
    url: /pages/checkpoint/
    icon: fi-home
    visibility:

  - title: Research
    url: /pages/checkpoint/research/search-templates/basic/
    icon: fi-magnifying-glass
    visibility:

  - title: Workflow
    url: /pages/checkpoint/workflow/
    icon: fi-graph-bar
    visibility: show-for-large-up

etc...
```

The template logic is then able to loop through these values like so:

```
{% raw %}
{% assign settings = site.data.checkpoint.settings %}

{% for item in settings.top_menu %}
    <a href="{{ item.url }}">{{ item.title }}</a>
{% endfor %}
{% endraw %}
```

This would then output:

```
<a href="/pages/checkpoint/">Dashboard</a>
<a href="/pages/checkpoint/research/search-templates/basic/">Research</a>
<a href="/pages/checkpoint/workflow/">Workflow</a>
```

Most of the partials that make up the 'Application Frame' work this way with the exception of the **header.html** which is too specific to be shared.

<br>

<p class="text-center medium-text-right">
  <a href="/docs/basics/assets/"><b>Next Up:</b> Assets →</a>
</p>