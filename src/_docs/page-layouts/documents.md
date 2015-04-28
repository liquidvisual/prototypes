---
title: Documents
---

# Documents (A.K.A Document View)

The Document template is quite a difficult piece to get right. Due to its complexity and legacy we'll need to include the existing stylesheets from the app so we don't risk breaking aything.

There is a special document stylesheet which overrides the current one with some sensible defaults - like better typography and white space. This looks fine on desktop and tablets but mobile presents some problems, particularly with tables.

There's a few ways we can go about presenting a view that is readable and functional although we'd probably need to have these user tested as their effectiveness may vary with individual.

### Potential Solution #1

On mobile we restrict the width of the document container to the width of the phone's viewport and evoke horizontal scrollbars. This keeps the interface responsive but the content would require more effort to consume. Elements are stripped of their floats, padding and margins with media queries and forced to follow the "flow" on mobile. Offending elements such as tables and images that can't adapt will extend past the container where the user can then thumb across to read more.

### Potential Solution #1

It's possible the sheer amount of content could be best consumed in a non-responsive way, where users are able to pinch and zoom their way across a very long document. To do this we could remove an important meta tag from the Master layout on document templates.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
```

Removing this tag from the head will instantly remove responsive appearance on mobile.