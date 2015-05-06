---
layout: common/public/lobby
title: Choose Prototype
permalink: /
---

<style>
    html, body {
        background: #26272E;
        height: 100%;
    }

    .table-wrapper {
        display: table;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100%;
        width: 100%;
    }

    .cell-wrapper {
        display: table-cell;
        vertical-align: middle;
    }

    .row {
        max-width: 600px;
    }

    .logo-cp,
    .logo-wl {
        display: block;
        border-radius: 10px;
        text-align: center;
        /*margin: 100px;*/
    }

    .logo-cp:hover,
    .logo-wl:hover {
        /*background: black;*/
    }

    .logo-cp {
        background: #FF8000;
    }

    .logo-wl {
        background: #1C6084;
    }

    .button {
        width: 100%;
        border-radius: 10px;
        padding: 15px;
        font-size: 20px;
        background: #212128;
        /*border: 2px solid #212128;*/
        color: #6789A9;
    }

    .button:hover {
        background: black !important;
    }

    h1 {
        color: #eee;
    }
</style>

<section class="table-wrapper animated fadeIn">
    <div class="cell-wrapper">
        <div class="row">
            <div class="columns">
                <h1>Choose Prototype...</h1>
                <br>
                <ul class="small-block-grid-2">
                    <li>
                        <a class="logo-cp" href="/pages/checkpoint/guide/">
                            <img width="100%" src="/img/common/template/cp-logo@2x.png" alt="Checkpoint">
                        </a>
                    </li>
                    <li>
                        <a class="logo-wl" href="/pages/westlaw/guide/">
                            <img width="100%" src="/img/common/template/wl-logo@2x.png" alt="Westlaw">
                        </a>
                    </li>
                </ul>
                <br>
                <a class="button" href="/docs/"><i class="fi-book"></i>&nbsp; Docs</a>
                <a class="button" href="https://github.com/liquidvisual/prototypes"><i class="fi-social-github"></i>&nbsp; Repo</a>
            </div>
        </div>
    </div>
</section>
