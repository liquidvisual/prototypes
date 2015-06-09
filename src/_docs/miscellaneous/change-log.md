---
title: Change Log
---

# CHANGELOG

## 03.06.15 - Checkpoint
---

* Fixed mistyped class causing radios to stack on 'Basic' search templates.

## 03.06.15 - Westlaw
---

* Documents for 'Newsroom' and 'Research' given white containers [see documents](http://localhost:9292/docs/page-layouts/documents/)
* Newsroom - removed *partial-view* class from form (displays correctly now)
* Tools - removed *partial-view* class from form (displays correctly now)
* Logic updated in JS snippet that controls interaction flow. Previously User Menu and Nav Menu were accidently overriden on Tablets and mobile.

## 01.06.15 - Westlaw
---

* Context Menu fonts made darker (#111 in theme.scss)
* Tidied up some Docs styling

## 19.05.15 - Westlaw
---

* Context Menu fonts made darker (#222)
* Radio buttons centered on mobile in 'Basic Search Templates'
* Context Menu expander reverted to previous behavior (pushes content right)
* Reduced size of form input fonts to 12px

## 19.05.15 - Checkpoint + Westlaw
---

* Body fonts made darker (#444)
* Arial reverted back to Open Sans
* Context Menu resize functionality improved. Button moved to right.
* Context Menu when resized is 50% of viewport down from 70%
* Main navigation (topbar) fonts darkened

## 18.05.15 - Westlaw
---

* Added zoom feature for Workflows. Info [here](/docs/page-layouts/documents/#addressing-diagrams-in-workflow).
* Form inputs made shorter
* Show/hide more removed from Results View
* Branding colours updated for tables and active states
* Context Menu headers made **bold**
* Main font switched to Arial
* Flows introduced back into prototype
* Context Menu resize functionality introduced

## 14.05.15 - Checkpoint
---

<div class="panel">
    <strong>Note:</strong>
    <p>This following list of changes is only relevant to Checkpoint at this stage since it's the first documented release of the Westlaw prototype.</p>
</div>

#### Codebase Overhauled

Checkpoint has been merged into Westlaw to share common content. Directories have been been shuffled around to accommodate this - hopefully they will be more obvious than before.

The most important change is the Master template, Internal template and its partials which make up the overall 'Application Frame'. Page layouts have been updated and revised to be easier to work with.

#### New Context Menu (MMenu lib Removed)

Removal of MMenu dependancy has fixed multiple unresolvable issues with the previous codebase including the bug where the page would jump to the top when invoking the mobile menu. Off-canvas behaviour has been hand-coded eliminating the need for a third-party library and standardised. Eg. all off-canvas behaviour works in the same way now.

The only drawback is search templates cannot be drilled into from the main menu - which was mostly redundant anyway. Search templates can be accessed via the Context Menu (LHS) as normal.

#### New Touch Menu

A new touch menu has been added to the bottom of the app. This can now summon the 'passive content' from the Sidebar tabs (RHS) such as hints and links. Prior to now, this content was inaccessible on mobile.

#### Mobile Tooltips Removed

Mobile tooltip links are no longer necessary due to the new Touch Menu and have been removed from all individual page templates.

#### Page Headers Moved to Internal Template

Headers are no longer stored in page templates, cutting down on duplication. They are controllable site-wide through the parent internal template.

#### Seed Pages Refactored

All point-of-entry Markdown files in **src/pages/** have been refactored to store all their own variables. This will improve clarity as page layouts no longer randomly store variables.

#### Simulated Workflows Improved

This has been re-written to eliminate the need of including multiple snippets of JavaScript across all the page layouts. Now there is only a single piece of JavaScript in the internal template that controls where pages go. This will also eliminate those dead links. See [Simulated Workflows](/docs/getting-started/basic-usage/#simulated-workflows) for more.

#### Improved Stability

Everything is more robust with re-factored code, particularly in the Sass which improves responsive performance.

#### Improved Footer

The technical issue of the sticky footer on tablets has been solved.

#### Dashboard

This hasn't really changed but the surrounding layout has - which makes the Dashboard display differently to before. You'll notice the Context Menu (LHS) and Sidebar (RHS) are now visible. This is **only temporary** though, and I'm currently looking into ways to make this display like the [original](http://cpbeta.uat.liquidvisual.net) using the new structure.

#### Documents Improved

Existing CSS from Checkpoint has been absorbed into the Sass environment and refactored for more reliability. Documents generally display much better now.

#### Search Templates Broken Down

Search Templates are now comprised of micro partials that make up the forms using template logic. This standardises the way to quickly build out these complex layouts. See [Search Templates](/docs/page-layouts/search-templates/) for more info.

#### Search Results Updated

The gaps in search result panels have been removed in favour of one long scrolling results panel. This is to do with a technical issue.

<div class="panel">
    <strong>Caution:</strong>
    <p>Current show/hide functionality of the search results has been compromised. A more standardised method will be introduced shortly to accomodate both Checkpoint and Westlaw.</p>
</div>

#### Folders Added

For demonstration purposes, the Folders layout from Westlaw has been placed into Checkpoint (unaltered). This now provides a very basic implementation of dealing with responsive tables using a third party library called FooTable. See [libraries](/docs/basics/libraries/) for more info.

#### Alerts Added

Alerts have been added in the same way as Folders above.

#### Dist Folder More Useful

The dist folder that powers the public facing website now has a dedicated *pages/** directory that stores all compiled static HTML files relating to Checkpoint and Westlaw. These were originally strewn across the root. This will make referencing the compiled directories easier (eg. Assets), as they're better organised.

<br>

<p class="text-center medium-text-right">
  <a href="/docs/miscellaneous/upgrading/"><b>Next Up:</b> Upgrading →</a>
</p>