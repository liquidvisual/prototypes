---
layout: common/internal
title: Guide
---

<!--- This child document initializes the page in Jekyll. -->

<style>
    ul, ol {
        margin-bottom: 15px;
        font-size: 14px;
    }

    ul {
        list-style: none;
    }

    ol > li {
        margin-bottom: 15px;
    }

    .lv-content-block {
        padding: 30px;
    }

    .page-index > li > a {
        font-weight: bold;
    }

    .disabled {
        color: #ddd;
        font-weight: normal !important;
    }

    .panel p {
        margin-bottom: 0;
        font-size: 14px;
        color: grey;
    }
</style>

<div class="lv-content-block">

    <h1>Checkpoint Guide</h1>
    <hr>

    <h3 class="panel">Global Pages</h3>
    <p><strong><a href="/"><i class="fi-layout"></i>&nbsp; LOBBY</a></strong><br><strong>Tip:</strong> launch from any page by clicking the top left "Westlaw AU" Logo.</p>
    <p><strong><a href="/docs/"><i class="fi-book"></i>&nbsp; DOCS</a></strong></p>
    <p><strong><a href="https://github.com/liquidvisual/prototypes"><i class="fi-social-github"></i>&nbsp; REPO</a></strong></p>

    <h3 class="panel">Main Pages</h3>

    <ol>
        {% assign pages = site.pages | where: "site_type", "checkpoint" | sort: "url" %}
        {% for item in pages %}
            <li><a href="{{ item.url }}">{{ item.title }}</a> - <small>{{ item.url }}</small></li>
        {% endfor %}
    </ol>

    {% comment %}
    <ol class="page-index">
        {% for item in site.data.checkpoint.settings.top_menu %}
            <li><a href="{{ item.url }}">{{ item.title }}</a> - <small>{{ item.url }}</small></li>
        {% endfor %}
        {% for item in site.data.checkpoint.settings.user_menu %}
            <li><a href="{{ item.url }}">{{ item.title }}</a> - <small>{{ item.url }}</small></li>
        {% endfor %}
    </ol>
    {% endcomment %}

    <!-- <ol class="page-index">
        <li><a href="/westlaw/">Home</a> <small>(Redirect to /research on production)</small></li>
        <li><a href="/westlaw/research/">Research</a> <small>(equivilent to root)</small></li>
        <li><a href="/westlaw/workflow/">Workflow</a>
            <ul>
                <li><a href="/westlaw/workflow/document-01/">Ending a Relationship (WA) Flowchart</a></li>
            </ul>
        </li>
        <li><a href="/westlaw/tools/">Tools</a></li>
        <li><a href="/westlaw/newsroom/">Newsroom</a>
            <ul>
                <li><a href="/westlaw/newsroom/newsroom-results-01/">Most Recent News</a> <small>(Results)</small>
                    <ul>
                        <li><a href="/westlaw/newsroom/document-01/">Market Grows in Confidence</a> <small>(Document)</small></li>
                    </ul>
                </li>
            </ul>
        </li>
        <li><a href="/westlaw/alerts/">Alerts</a></li>
        <li><a href="/westlaw/folders/">Folders</a> <small style="color: red;">In Progress</small></li>
        <li><a href="/westlaw/preferences/">User Preferences</a></li>
        <li><a href="/westlaw/history/" class="disabled">User History</a></li>
    </ol> -->
    <br>

    <h3 class="panel">Search Templates</h3>

    <ol class="page-index">
        <li><a href="/westlaw/research/">Search Template - Basic</a>
            <ul>
                <li><a href="/westlaw/research/basic-results-01/">Search: Confidentiality Agreement</a></li>
            </ul>
        </li>
        <li><a href="/westlaw/research/cases/">Search Template - Cases</a></li>
    </ol>
    <br>

    <div class="panel">
        <h3>Document Samples for Testing</h3>
        <p><b>Please note:</b> Context Menu (LHS) content has been intentionally excluded - as we already know how they display. The focus with these links is purely on the document body itself.</p>
    </div>

    <ol class="page-index">
        <li>Large tables: <a href="/westlaw/research/sample-01/">Table of Amending Legislation</a> <small>(<a href="http://www.westlaw.com.au/maf/wlau/app/document?docguid=Ib5692f3f9ff411e0a942f53c5c101aad&isTocNav=true&tocDs=AUNZ_AU_LEGCOMM_TOC&startChunk=1&endChunk=1">Original</a>)</small></li>
        <li>Alt Style <a href="/westlaw/research/sample-02/">[136.0104] Table of CGT Events That Can Happen to "Necessary Connection" Assets</a> <small>(<a href="http://www.westlaw.com.au/maf/wlau/app/document?docguid=Ifaf90c04fd6311e0b498f51455fed0bd&isTocNav=true&tocDs=AUNZ_AU_LEGCOMM_TOC&startChunk=1&endChunk=1">Original</a>)</small></li>
        <li>Long Document <a href="/westlaw/research/sample-03/">YA 1 Definitions</a> <small>(<a href="http://www.westlaw.com.au/maf/wlau/app/document?docguid=If44c8fc7011e11e18eefa443f89988a0&isTocNav=true&tocDs=AUNZ_NZ_LEGCOMM_TOC&startChunk=1&endChunk=1">Original</a>)</small></li>
    </ol>

</div>