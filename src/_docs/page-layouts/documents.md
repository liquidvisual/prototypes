---
title: Documents
---

<h1>Documents <span class="subheader"> (Warning: this page is still in progress)</span></h1>

## Ensure Documents Have a background

Most documents have a wrapping container with an id of "documentContainer". This provides the hook to which we can create a container with appropriate padding and a white background. If a document doesn't display correctly, ensure the wrapping div is in place.

```html
<div id="documentContainer">
	// Contents here
</div>
```

## Addressing Diagrams in Workflow

Workflow documents are problematic since they utilise interactive image maps for their diagrams. Image maps cannot be made responsive so there's two ways we could go about handling this:

1. Add a `width="100%"` on the diagram `img` element. The image map will fail once it changes size but the user will still be able to see it and save it to their device.
2. Allow the user to 'pinch and zoom'.

With the latter we can trigger a page-based 'pinch and zoom' behavior by altering a meta tag in the master layout. You can find this tag in **src/layouts/common/master.html** on line 10.

```
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

The key attribute above is `user-scalable=no`. By default all pages are locked and **not** user-scalable unless specifically requested by a page. In Westlaw, the Workflow document passes a front-matter variable `user-scalable: true` which gets picked up by the template logic in the master, changing it to: `user-scalable="yes"`

The result is a page that can essentially be **"unresponsive" by design**. With the current [workflow document](http://localhost:9292/pages/westlaw/workflow/documents/document-01/) I've implemented options **both 1 and 2**. The image is 100% but the page can be 'pinch and zoomed'. The assumption is if you were to leave a diagram in place, the width would remain fixed and a user *may* be able to interact with the image map on a smaller device if they scale the document with their thumbs.

---

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

<br>

<p class="text-center medium-text-right">
  <a href="/docs/page-layouts/alerts/"><b>Next Up:</b> Alerts →</a>
</p>