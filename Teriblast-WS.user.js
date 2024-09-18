// ==UserScript==
// @name        Teriblast for Whatsapp Web
// @version     1.0.1
// @description Customizable theme for Whatsapp Web.
// @author      Teriyaki
// @icon        https://i.imgur.com/14f9VD4.png
// @match       *://*.whatsapp.com/
// @namespace   Blazing Spark
// @grant       GM_addStyle
// ==/UserScript==
GM_addStyle ( `
    /* General theme colors */
    :root {
        --blast-background: #321330;
        --blast-accent: #60365d;
        --blast-border: #89919f;
    }

    /* Replace the imgur link with your desired background image link */
    /* Defaults to accent color if link is invalid */
    [data-asset-chat-background-dark] {
        background: url(https://i.imgur.com/12ThblS.png) !important;
        background-size: cover !important;
        object-fit: fill;
    }

    /* Hides the Download from Microsoft Store button */
    ._al_t { display: none;}

    /* Background color elements */
    div.x13mwh8y:nth-child(1), div.x13mwh8y:nth-child(2), div.x13mwh8y:nth-child(3), div.x13mwh8y:nth-child(4), div.x13mwh8y:nth-child(5), div.x13mwh8y:nth-child(6), div.x13mwh8y:nth-child(7) { background-color: var(--blast-background); }

    #main, .x1l1ennw, .x1qyhdoi, ._ahyp, .xdiz9cm, .xcbkimw, ._alhs, .xvue9z, ._ak82, .x67bb7w, .xwvwv9b, .x1v8jjaa, .x1l7klhg, .x1qjc9v5, div.x1c4vz4f:nth-child(5) { background-color: var(--blast-background) !important; }

    .statusList > div:nth-child(1) > span:nth-child(1) > div:nth-child(1), div.x1qughib:nth-child(1), div.xajqne3:nth-child(2), div.x3psx0u:nth-child(1) { background-color: var(--blast-background); }

    .x78zum5.x8hhl5t.x13a6bvl.x13crsa5.x1mpkggp.x18d9i69.x1t2a60a.xp4054r.xuxw1ft { background-color: var(--blast-background) !important; }

    .x1n2onr6.xhtitgo.x9f619.x78zum5.x6s0dn4.xl56j7k.x5sx7kw.xexx8yu.xc73u3c.x10b6aqq.x5ib6vp.x1m8r95a { background-color: var(--blast-background) !important; }

    .x9f619.x78zum5.x1okw0bk.x6s0dn4.xl2dz39.xexx8yu.xc73u3c.x18d9i69.x9mfa4r.xoj7uri.xpxdjtz { background-color: var(--blast-background) !important; }

    ._amkg, ._amki { background-color: #000 !important; }

    section.x2lah0s, .xyw6214, .xajqne3 { background-color: #220020; }

    /* Accent color elements */
    .x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.xz9dl7a.xn6708d.xsag5q8.x1ye3gou.xjv05ge.x8vdgqj.x1gja9t.x1amiio9.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c { background-color: #60365d !important; }

    ._ak4w { background-color: #6d0666 !important; }

    ._ahyg, .x86nts4, ._aju5, .x13crsa5, .x1ba4aug { background-color: var(--blast-accent) !important; }

    /* Button elements */
    .x1gfkgh9 { background-color: #b454ad !important; }

    /* Border elements */
    ._amkb { border: 6px double; }

    .xkh2ocl {
        background-color: var(--blast-background);
        border: 2px inset var(--blast-border);
    }

    .xzqyx8i {
        background-color: var(--blast-background);
        border: 2px inset var(--blast-border);
    }

    ._aka5 {
        background-color: var(--blast-background) !important;
        border: 2px inset var(--blast-border);
    }

    header.xa1v5g2:nth-child(1) {
        background-color: var(--blast-background);
        border-right: 2px inset;
        border-left: 2px inset;
        border-color: var(--blast-border);
    }

    ._ai03._ai01._akmh, ._al_c {
        border-top: 2px inset;
        border-right: 2px inset;
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    .x9f619.x78zum5.x1okw0bk.x6s0dn4.x7j6532.xc73u3c.x9mfa4r.xzwifym.x150wa6m {
        border-top: 2px inset;
        border-right: 2px inset;
        border-color: var(--blast-border);
    }

    .xa1v5g2.x1n2onr6.x9f619.x78zum5.x6s0dn4.xl56j7k.xbyj736.x5yr21d.x1ye3gou.xn6708d.x1acz5yr.xm81vs4.xu3j5b3.x1a0jr7w {
        border-top: 2px inset;
        border-bottom: 2px inset;
        border-left: 2px inset;
        border-color: var(--blast-border);
    }

    ._amid._aqbz {
        border: 2px inset var(--blast-border);
    }

    ._ak1k {
        border-top: 2px inset;
        border-bottom: 2px inset;
        border-right: 2px inset;
        border-color: var(--blast-border);
    }

    ._ajyl._ahmw.copyable-area, ._amm9 {
        border-right: 2px inset;
        border-color: var(--blast-border);
    }

    ._amm8, .xuk3077 {
        border-right: 2px inset;
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    div.xyw6214:nth-child(2), .xmbbrlm.x1c4vz4f.x2lah0s.xdl72j9.xso031l.x1q0q8m5.xa93pmm {
        border-left: 2px inset;
        border-right: 2px inset;
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    .x67bb7w > header:nth-child(1), #pane-side {
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    ._amm2 {
        border-left: 2px inset;
        border-right: 2px inset;
        border-color: var(--blast-border);
    }

    ._ahyp {
        border-left: 2px inset;
        border-right: 2px inset;
        border-color: var(--blast-border);
    }

    .xyw6214 {
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    .x78zum5.xdt5ytf.x5yr21d.x17qophe.x6ikm8r.x10wlt62.x67bb7w.x10l6tqk.x13vifvy.xh8yej3.x15ozvti._ahmw.copyable-area {
        border-top: 2px inset;
        border-color: var(--blast-border);
    }

    div.x13vifvy:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) {
        border-left: 1.5px inset;
        border-right: 3px inset;
        border-color: var(--blast-border);
    }

    ._ak4w._ak52._ak59, .x1l1ennw,
    ._ak7p > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    ._ak7p > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.xh8yej3:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x1g42fcv:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x1g42fcv:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x1g42fcv:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(5) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(6) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(7) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(8) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(9) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(10) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(11) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(12) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(13) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(14) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(15) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(16) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(17) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(18) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(19) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1),
    div.x10l6tqk:nth-child(20) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) {
        border-radius: 50px !important;
    }

    /* You may tweak this for a less opaque bg picture but it'll mess the opacity of other elements */
    /* div.x13vifvy:nth-child(1) { */
        /* opacity: 0.5 !important; */
        /* background-color: #321330 !important; */
    /* } */

    /* Additional colors can also be added/edited directly here */
    .dark {
        --app-background: #140617 !important;
        --link: #17ce22 !important;
        --primary: #ffc107 !important;
        --navbar-background: var(--blast-background) !important;
        --navbar-separator: rgba(187, 184, 184, 0.92) !important;
        --navbar-border: rgba(134, 150, 160, 0.9) !important;
        --intro-background: var(--blast-background) !important;
        --background-default: var(--blast-background) !important;
        --background-default-hover: var(--blast-accent) !important;
        --search-input-container-background: var(--blast-background) !important;
        --search-input-background: var(--blast-accent) !important;
        --butterbar-default-background: var(--blast-background) !important;
        --butterbar-update-background: var(--blast-accent) !important;
        --filters-container-background: var(--blast-background) !important;
        --search-input-container-background-active: var(--blast-background) !important;
        --background-default-active: var(--blast-accent) !important;
        --panel-header-background: var(--blast-background) !important;
        --rich-text-panel-background: var(--blast-background) !important;
        --compose-input-background: var(--blast-accent) !important;
        --incoming-background: #0c1055 !important;
        --incoming-background-deeper: #1a0b80 !important;
        --incoming-background-rgb: 12,16,85 !important;
        --incoming-primary: #ffc107 !important;
        --outgoing-background: #c11e63 !important;
        --outgoing-background-deeper: #5b002b !important;
        --outgoing-background-rgb: 193,30,99 !important;
        --system-message-background: #000 !important;
        --system-message-text: #0fb6dd !important;
        --dropdown-background-hover: #800000 !important;
    }

    /* Merry star icon */
    /* Can also be modified as explained above */
    ._al_n > img:nth-child(1) {
        content: url(https://i.imgur.com/5cBWVO9.gif) !important;
    }
` );

// Function to replace welcome text
function replaceContent(className, newContent) {
    const element = document.querySelector(className);
    if (element) {
        element.innerHTML = newContent;
    } else {
        //console.error('Element with class ' + className + ' not found. Retrying in 2 seconds...');
        setTimeout(function() {
        replaceContent(className, newContent);
      }, 2000);
   }
}

/* You can add more classes here */
replaceContent('h1._al_e', 'Teriblast for Whatsapp Web');
replaceContent('div.xqui205', 'Made by Teriyaki');