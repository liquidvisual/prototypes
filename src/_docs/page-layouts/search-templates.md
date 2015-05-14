---
title: Search Templates
---

# Search Templates

As we know, Search Templates cannot be responsively retro-fitted. These templates would need to be re-built using the [Foundation grid](http://foundation.zurb.com/docs/components/grid.html).

I've provided two examples of Search Templates in the prototype in the form of:

1. Basic Search Template
2. Cases Search Template

Basic isn't too involved, as it's just a single search field, TOC and some delivery options. The complexity arises when building Search Templates that include lots of inputs types.


## Building Templates with Micro-Partials
---

Fortunately I've devised a simple way to build out these templates through the use of micro-partials and basic template logic. The result is code which can be compiled, copied and built upon. The idea of these templates is to remain generic and simple as possible. You can check out the meat of these simple partials (or includes) in the **src** directory.

```
src/
  |--includes/
  |  |--common/
  |     |--components/
  |        |--dash_block.html
  |         |--form_checkbox_input.html
  |         |--form_date_input.html
  |         |--form_select_input.html
  |         |--form_submit_clear_input.html
  |         |--form_submit_input.html
  |         |--form_text_input.html
  
```

### Search Form Example

In the case of Checkpoint the code for *Cases* is as follows:

```
<form class="lv-search-form lv-partial-view collapsed" action="#" method="post" novalidate>
    <div class="row">
        <div class="medium-11 large-10 columns">
            
            <!--*** Inputs happen inside here ***-->
            
        </div>
    </div>
</form>
```

### Render Text Fields

To render a number of standard input fields in succession, we can create a (somewhat hacky) array.

```
<!-- Create Field Names -->
{% assign text_fields = "Keywords|Case Title / Party Name|Citation|Catchwords|Judge(s)|Court" | split: "|" %}
```

We then loop through these word strings calling the micro-partial to write each time.

```
<!-- Draw Fields -->
{% for item in text_fields %}
    {% include common/components/form_text_input.html %}
{% endfor %}
```

### Render Select Input

In this example we're passing a string directly to the partial. The title "Jurisdiction" is then captured inside the partial - and uses the value to display the name of the field in the left column - next to the select field.

```
<!-- Draw Select Field -->
{% include common/components/form_select_input.html title="Jurisdiction" %}
```

### Render TO/FROM Dates

Same as above. This will generate what you need with included JQuery UI Calendar functionality.

```
<!-- Draw Date Fields -->
{% include common/components/form_date_input.html title="Judgement Date" %}
```

### Render Checkbox

```
<!-- Draw Checkbox -->
{% include common/components/form_checkbox_input.html title="FirstPoint Verified Data Only" %}
```

### Render Submit Button

```
<!-- Draw Submit Fields -->
{% include common/components/form_submit_input.html path="#SEND-PATH-TO-DEMO-LOCATION" %}
```

### Render Submit Button and Clear Button

```
<!-- Draw Submit Fields -->
{% include common/components/form_submit_clear_input.html path="#SEND-PATH-TO-DEMO-LOCATION" %}
```

## Westlaw and 'Research'
---

**Research** isn't part of the existing Westlaw it's only in Checkpoint. In merging the codebases I've needed to keep paths sane and directory structures similar to ensure everything works consistently. In production this 'research' tab would simply be replaced with 'home' but for technical reasons related to these prototypes - it's necessary Search Templates are accessed through **/research/**.

## Workflow Templates
---

Workflow is a slightly problematic [CONT'D]

















