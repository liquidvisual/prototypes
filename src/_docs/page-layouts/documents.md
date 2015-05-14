---
title: Documents
---

# Documents

## Document View

The Document template is a tricky piece to get right. By default, documents have extensive styling which differs from document to document. The main issue is these styles are necessary but introduce changes to the box-model; applying margins, fixed widths, padding and borders to the content. The problem lies in the mobile view, where existing styles break content out from the Application Frame.

## Addressing Mobile View

Perhaps the best way around this, is with CSS Media Queries. We essentially strip off all box-model related properties and floats once the screen enters 640px or below. This results in content stacking naturally with the flow.

In some cases this may not be ideal and obscure content where it otherwise would have displayed fine on desktop - however this is the best we can do without re-writing documents from the ground up.

## Legacy Stylesheets

During testing, all existing stylesheets were taken from the app and placed into the Sass environment. An audit was performed to determine the inclusion of **only key files** related to legacy content. We don't include all previous legacy stylesheets because we don't want to override the Application Frame or typographical defaults set by Foundation. So we only opt to include those which are useful. I'll demonstrate what this looks like in both apps:

[CONT'D]

```html
Path: src/_scss/checkpoint/app/legacy/original/all.scss
```

```sass
// @import "base";
// @import "basic-novus-params";
// @import "checkpoint"; // updated - problematic
// @import "contacts";
// @import "delivery";
// @import "doc_note";
// @import "doc_view";
// @import "documentstyling";
// @import "highlights";
// @import "jquery-ui-1";
// @import "jstree";
// @import "layout";
// @import "newsfeed";
// @import "print";
// @import "rspace_002";
// @import "rspace";
// @import "rspacebar";
```