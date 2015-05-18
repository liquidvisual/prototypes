---
title: Results
---

# Warning: This page is still in progress

# Results

The "Search Results" template is probably one of the most problematic due to the large amount of varying content and styles. This prototype's template consists of existing app DOM output and has not been re-written in anyway. The idea is to try and re-style the existing markup so these templates don't have to be written.

### Concerns

The markup differs considerably between Checkpoint and Westlaw. The latter is much harder to override since it's overly dependant on a long list of styles. Checkpoint has more consistent and predictable markup, Eg. each search result is contained within a separate ```<div class="result"></div>``` making it easy to target and create show/hide functionality with a JavaScript inserted snippet on mobile (see [JavaScript](/docs/basics/javascript/)).

Checkpoint's styles are able to be rewritten - however Westlaw **requires** the existing CSS to really function properly. This makes it extremely hard to work with and override.

Westlaw at present, incorporates the existing stylesheet from the app. An overriding stylesheet is then placed after it which targets only mobile through a media query - this then performs a blanket reset which strips margins, floats, margins and padding that would otherwise cause alignment issues with the responsive application frame.

Curiously the headings of the results in Westlaw are **NOT** anchor links. I suspect these may function as links with some sort of JavaScript intervening. Checkpoint on the other hand, has anchors as headings - which is more predicatble.

### Partial View and Westlaw Limitations

As mentioned above, this template utilises a JavaScript snippet which inserts a show/hide button on device views. On Checkpoint this works fine, although given the problematic markup of Westlaw with results not being wrapped predictably, this feature has been omitted. At present the mobile view of results is mostly unreadable on mobile because of the wrapping issue which causes excessive scrolling - a fix would require appropriate wrapping of the result elements. Right now, each result is split into multiple result divs, which makes it impossible to target correctly.