// ==UserScript==
// @name        Teriblast for Whatsapp Web
// @version     2.4.3
// @description Customizable theme for Whatsapp Web.
// @author      Teriyaki
// @icon        https://i.imgur.com/n9WkFwh.gif
// @match       *://*.whatsapp.com/
// @namespace   Blazing Spark
// @grant       GM_addStyle
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_deleteValue
// @grant       unsafeWindow
// ==/UserScript==
// General purpose variables
var selectMain, flairPicker, newBgURL, inputField, hideBtn, hideBtnPos;
var browser = detectBrowserEngine();
var menuCreated = false;
var buttonCreated = false;
// Extremely long class names
var inputClass = "x9f619 x12lumcd x1qrby5j xeuugli xisnujt x6prxxf x1fcty0u x1fc57z9 xe7vic5 x1716072 xgde2yp x89wmna xbjl0o0 x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x178xt8z xm81vs4 xso031l xy80clv x1lq5wgf xgqcy7u x30kzoy x9jhf4c x1a2a7pz x13w7htt x78zum5 x96k8nx xdvlbce x1ye3gou xn6708d x1ok221b xu06os2 x1i64zmx x1emribx";
var mainBtnClass = "x889kno x1a8lsjc xbbxn1n xxbr6pl x1n2onr6 x1rg5ohu xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1v8p93f xogb00i x16stqrj x1ftr3km x1hl8ikr xfagghw x9dyr19 x9lcvmn xbtce8p x14v0smp xo8ufso xcjl5na x1k3x3db xuxw1ft xv52azi"
var secondaryBtnClass = "x889kno x1a8lsjc xbbxn1n xxbr6pl x1n2onr6 x1rg5ohu xk50ysn x1f6kntn xyesn5m x1z11no5 xjy5m1g x1mnwbp6 x4pb5v6 x178xt8z xm81vs4 xso031l xy80clv x13fuv20 xu3j5b3 x1q0q8m5 x26u7qi x1hl8ikr xfagghw x9dyr19 x9lcvmn x1jrnqrx xiuubft xa2vszz xx5tys9 x5iuykv xlwc9sh x12bbwn8 xcjl5na xnk0c1z x4b7akx x1ao7u56 xhsoqjx x1kwr8ib xuxw1ft xv52azi";
// Load saved colors using localStorage or set default values directly
var blastBackground = localStorage.getItem('blastBackground') || "#321330";
var blastAccent = localStorage.getItem('blastAccent') || "#60365d";
var blastBorder = localStorage.getItem('blastBorder') || "#89919f";
var bgURL = localStorage.getItem('bgURL') || getBackgroundURL();
// Interval functions
const intervalMenu = setInterval(createBlastMenu, 1000);
const intervalHide = setInterval(hideFriends, 200);
const intervalGH = setInterval(insertGithubButton,200);
// Function to reset local stored values to defaults
function resetColors() {
    localStorage.removeItem('blastBackground');
    localStorage.removeItem('blastAccent');
    localStorage.removeItem('blastBorder');
    localStorage.removeItem('bgURL');
    // Reload values from localStorage (will return defaults if not set)
    blastBackground = localStorage.getItem('blastBackground') || "#321330";
    blastAccent = localStorage.getItem('blastAccent') || "#60365d";
    blastBorder = localStorage.getItem('blastBorder') || "#89919f";
    bgURL = localStorage.getItem('bgURL') || getBackgroundURL();
}

// Append Google Material Icons
document.head.appendChild(Object.assign(document.createElement('link'), {
    href: "https://fonts.googleapis.com/icon?family=Material+Symbols+Outlined",
    rel: "stylesheet"
}));

// Custom function to create elements
function createElement(tag, className, attributes = {}, textContent = '') {
    const element = document.createElement(tag);
    element.className = className;

    for (const [key, value] of Object.entries(attributes)) {
        element.setAttribute(key, value);
    }

    if (textContent) {
        element.textContent = textContent;
    }

    return element;
}

function updateCSSVariable(variableName, value) {
    document.documentElement.style.setProperty(variableName, value);
}

// Function to detect the browser engine
function detectBrowserEngine() {
    const userAgent = navigator.userAgent;
    let browserEngine;
    if (userAgent.includes("Chrome") || userAgent.includes("Chromium") || userAgent.includes("Blink")) {
        browserEngine = "Chrome/Chromium";
    } else if (userAgent.includes("Firefox") || userAgent.includes("Gecko")) {
        browserEngine = "Firefox";
    } else {
        browserEngine = "Other engine";
    }
    console.log("You are using: " + browserEngine);
    return browserEngine;
}

// Determine the background URL based on the browser
function getBackgroundURL() {
    if (browser.includes("Chromium")) {
        return "https://media1.tenor.com/m/geSwyeUoonUAAAAC/aesthetic-anime.gif"; // URL for Chrome
    } else if (browser.includes("Firefox")) {
        return "https://i.imgur.com/12ThblS.png"; // URL for Firefox
    } else {
        return "https://media1.tenor.com/m/geSwyeUoonUAAAAC/aesthetic-anime.gif"; // Default URL
    }
}

// Function to hide friend list
function hideFriends() {
      const chatList = document.querySelector('div._aigw:nth-child(4)');
      hideBtnPos = document.querySelector('div#main._ajx_ > header._amid > div._ami8 > div._ajv2._ajv1');
      // Check if hideBtnPos exists
      if (hideBtnPos) {
          // Check if the button has already been created
          if (!buttonCreated) {
              // Create the button
              hideBtn = createElement('div','_ajv6 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha', {});
              hideBtn.setAttribute('aria-disabled', 'false');
              hideBtn.setAttribute('role', 'button');
              hideBtn.setAttribute('tabindex', '0');
              hideBtn.setAttribute('data-tab', '2');
              hideBtn.setAttribute('title', 'Blast Menu');
              hideBtn.setAttribute('aria-label', 'Blast Menu');

              // Set the inner HTML
              hideBtn.innerHTML = `<span class="material-symbols-outlined" aria-disabled="false" role="button" tabindex="0" data-tab="2" title="Blast Menu" aria-label="Blast Menu">first_page</span>`;

              hideBtn.addEventListener('click', function() {
                  if (!chatList.classList.contains('hidden')) {
                      chatList.classList.add('hidden'); // Start hiding animation
                      setTimeout(() => {
                          chatList.style.display = 'none'; // Hide element after animation
                          // Change icon to last_page when hidden
                          hideBtn.innerHTML = `<span class="material-symbols-outlined" aria-disabled="false" role="button" tabindex="0" data-tab="2" title="Blast Menu" aria-label="Blast Menu">last_page</span>`;
                      }, 300); // Match this time with the CSS transition duration
                  } else {
                      chatList.style.display = 'block'; // Show immediately
                      setTimeout(() => {
                          chatList.classList.remove('hidden'); // Start showing animation
                          // Change icon back to first_page when visible
                          hideBtn.innerHTML = `<span class="material-symbols-outlined" aria-disabled="false" role="button" tabindex="0" data-tab="2" title="Blast Menu" aria-label="Blast Menu">first_page</span>`;
                      }, 300); // Trigger the animation
                  }
              });

              hideBtnPos.appendChild(hideBtn);
              buttonCreated = true; // Set the flag to true after creating the button
          } else if (!hideBtnPos.contains(hideBtn)) {
              // If hideBtn exists but is not in hideBtnPos, reappend it
              hideBtnPos.appendChild(hideBtn);
          }
      } else if (buttonCreated) {
          // If hideBtnPos no longer exists, reset the buttonCreated flag
          buttonCreated = false;
          hideBtn = null; // Reset hideBtn to allow for re-creation
      }
}

function insertGithubButton() {
    const targetDiv = document.querySelector('div._al_t');
    if (targetDiv) {
        const button = document.createElement('button');
        button.textContent = 'Check my GitHub for updates!';
        button.className = mainBtnClass;
        button.addEventListener('click', function() {
            window.open('https://github.com/Teriyaki812/teriblast-whatsapp', '_blank');
        });
        targetDiv.appendChild(button);
        clearInterval(intervalGH);
    }
}

// Function to create the Teriblast Menu
function createBlastMenu() {
    const targetDiv = document.querySelector('span.xdt5ytf:nth-child(1) > div:nth-child(1) > div:nth-child(1)');
    if (targetDiv && !menuCreated) {
        const newDiv = document.createElement('div');
        newDiv.className = '_ajv6 x1y1aw1k x1sxyh0 xwib8y2 xurb0ha';
        newDiv.setAttribute('aria-disabled', 'false');
        newDiv.setAttribute('role', 'button');
        newDiv.setAttribute('tabindex', '0');
        newDiv.setAttribute('data-tab', '2');
        newDiv.setAttribute('title', 'Blast Menu');
        newDiv.setAttribute('aria-label', 'Blast Menu');
        newDiv.innerHTML = `
          <img src="https://media.tenor.com/h5F7PZhXNisAAAAi/star.gif" alt="Your GIF" style="width: 30px; height: 30px;">
        `;
        // Invoke the Menu on click
         newDiv.addEventListener('click', function() {
            // External elements for the menu popup
            const backdropDiv = createElement('div', 'xixxii4 x13vifvy x17qophe x9f619 xh8yej3 x5yr21d x1bpt9pm xw2csxc x1odjw0f xa03szm xnpuxes copyable-area', { 'data-animate-modal-backdrop': 'true', style: 'opacity: 1;' });
            const dialogDiv = createElement('div', 'x9f619 x78zum5 xdt5ytf x6s0dn4 xl56j7k xh8yej3 xpb48g7 x1jn0hjm x1us19tq', { role: 'dialog' });
            const modalDiv = createElement('div', 'x9f619 x78zum5 x1c4vz4f x2lah0s xdl72j9 xdt5ytf xvue9z x1xy6bms xxbr6pl xx6bls6 xbbxn1n x1v8jjaa xkwfhqy x17e6fzg x15dh256 x1t7u3xy x1shw4ur x6ikm8r x10wlt62 modal-zoom-in', { 'data-animate-modal-popup': 'true', style: 'opacity: 1; transform: scaleX(1) scaleY(1);' });
            const modalBodyDiv = createElement('div', 'x1n2onr6 x1iyjqo2 xs83m0k x1l7klhg x1mzt3pk xeaf4i8', { 'data-animate-modal-body': 'true' });
            // Inner menu elements
            const titleDiv = createElement('div', 'x1603h9y xk50ysn x37zpob x2b8uid x1p5oq8j', { role: 'heading', 'aria-level': '2', style: 'transform: translateY(-5px);' }, 'Teriblast Menu');
            const linkMenuDiv = createElement('div', 'x1n2onr6 x78zum5 x6s0dn4 xhgddhk x1nxh6w3 x1sy10c2', {});
            const mainColorDiv = createElement('div', 'x1n2onr6 x78zum5 x6s0dn4 xhgddhk x1nxh6w3 x1sy10c2', {});
            const confirmBtn = createElement('div', 'x1n2onr6 x78zum5 x6s0dn4 xhgddhk x1nxh6w3 x1sy10c2', {});
            // Background link input setting
            linkMenuDiv.appendChild((() => {
                const div = document.createElement('div');
                div.appendChild(Object.assign(createElement('div', 'x1lkfr7t xdbd6k5 x1fcty0u xw2npq5', { style: 'transform: translateX(12px);' }, 'Background Image:')));
                inputField = Object.assign(createElement('input', inputClass, {
                    style: 'color: #fff; width:11cm;',
                    placeholder: bgURL
                }));
                div.appendChild(inputField);
                inputField.addEventListener('input', () => {
                    newBgURL = inputField.value.trim();
                    if (newBgURL && newBgURL.startsWith('http')) {
                        bgURL = newBgURL;
                        updateCSSVariable('--blast-bgURL', `url(${bgURL})`);
                    }
                });
                if (browser.includes("Chromium")) {
                div.appendChild(Object.assign(createElement('span', '_ao3e', { style: 'transform: translateX(12px); display: block; width: 400px; height: 25px;' }, 'Note: Only images/gifs from tenor.com and giphy.com are supported in your browser.')));
                }
                return div;
            })());
            // Theme color settings
            mainColorDiv.appendChild((() => {
                const div = document.createElement('div');
                // 1st Element: Theme Colors Label
                div.appendChild(Object.assign(createElement('div', 'x1lkfr7t xdbd6k5 x1fcty0u xw2npq5', { style: 'transform: translateX(12px);' }, 'Theme Colors:'))); /*1st*/
                // Create a wrapper for the select and flair picker
                const rowDiv = document.createElement('div');
                rowDiv.style.display = 'flex';
                rowDiv.style.alignItems = 'center';
                // 2nd Element: Select Dropdown
                selectMain = document.createElement('select');
                Object.assign(selectMain, { className: inputClass, style: 'color: #fff; width:9.5cm' });
                // Adding options to the select
                selectMain.appendChild(Object.assign(createElement('option', inputClass, { style: 'color: #fff;', value: 'Blast Background' }, 'Blast Background')));
                selectMain.appendChild(Object.assign(createElement('option', inputClass, { style: 'color: #fff;', value: 'Blast Accent' }, 'Blast Accent')));
                selectMain.appendChild(Object.assign(createElement('option', inputClass, { style: 'color: #fff;', value: 'Blast Border' }, 'Blast Borders')));
                rowDiv.appendChild(selectMain);
                // 3rd Element: Flair Color Picker
                flairPicker = document.createElement('input');
                Object.assign(flairPicker, {
                    type: 'color',
                    className: "",
                    style: 'margin-left: 10px; width: 40px; height: 40px;'
                });
                // Set the initial value based on the first option
                flairPicker.value = blastBackground; // Default to background color
                flairPicker.style.backgroundColor = flairPicker.value; // Set initial background color
                // Function to update flairPicker based on selected option
                function updateFlairPicker(selectedOption) {
                    if (selectedOption === 'Blast Background') {
                        flairPicker.value = blastBackground;
                    } else if (selectedOption === 'Blast Accent') {
                        flairPicker.value = blastAccent;
                    } else if (selectedOption === 'Blast Border') {
                        flairPicker.value = blastBorder;
                    }
                    flairPicker.style.backgroundColor = flairPicker.value; // Update background color of picker
                }
                window.updateFlairPicker = updateFlairPicker;
                // Initialize flairPicker based on the selected option
                updateFlairPicker(selectMain.value);
                // Event listener to handle changes in the select dropdown
                selectMain.addEventListener('change', function() {
                    const selectedOption = selectMain.value;
                    updateFlairPicker(selectedOption); // Update picker when option changes
                    flairPicker.style.backgroundColor = flairPicker.value; // Update background color of flair picker
                });
                // Show quick color changes without saving
                flairPicker.addEventListener('input', function() {
                    flairPicker.style.backgroundColor = flairPicker.value; // Update input background color
                    const selectedOption = selectMain.value;
                    // Update the corresponding color variable
                    if (selectedOption === 'Blast Background') {
                        blastBackground = flairPicker.value;
                    } else if (selectedOption === 'Blast Accent') {
                        blastAccent = flairPicker.value;
                    } else if (selectedOption === 'Blast Border') {
                        blastBorder = flairPicker.value;
                    }
                    updateCSSVariable('--blast-background', blastBackground);
                    updateCSSVariable('--blast-accent', blastAccent);
                    updateCSSVariable('--blast-border', blastBorder);
                });
                rowDiv.appendChild(flairPicker);
                div.appendChild(rowDiv);
                return div;
            })());
           // Save changes & Restore defaults buttons
           confirmBtn.appendChild((() => {
              const div = document.createElement('div');
              div.style.display = 'flex';
              div.style.justifyContent = 'space-between';
              div.style.width = '100%';
              div.appendChild(Object.assign(createElement('button', secondaryBtnClass,  {}, 'Restore defaults'))).addEventListener('click', function() {
                  const confirmRestore = confirm('Are you sure you want to restore default values?');
                  if (confirmRestore) {
                      resetColors();
                      inputField.placeholder = bgURL;
                      updateCSSVariable('--blast-background', blastBackground);
                      updateCSSVariable('--blast-accent', blastAccent);
                      updateCSSVariable('--blast-border', blastBorder);
                      updateCSSVariable('--blast-bgURL', `url(${bgURL})`);
                      updateFlairPicker(selectMain.value);
                      alert('Defaults restored!');
                  }
              });
              div.appendChild(Object.assign(createElement('button', mainBtnClass,  {}, 'Save Changes'))).addEventListener('click', function() {
                localStorage.setItem('blastBackground', blastBackground);
                localStorage.setItem('blastAccent', blastAccent);
                localStorage.setItem('blastBorder', blastBorder);
                if (newBgURL && newBgURL.startsWith('http')) { localStorage.setItem('bgURL', newBgURL); }
                alert('Changes saved successfully! :D');
            });
              return div;
            })());

            // Append inner menu items to menu popup
            modalBodyDiv.appendChild(titleDiv);
            modalBodyDiv.appendChild(linkMenuDiv);
            modalBodyDiv.appendChild(mainColorDiv);
            modalBodyDiv.appendChild(confirmBtn);

            // Append external elements to the popup
            modalDiv.appendChild(modalBodyDiv);
            dialogDiv.appendChild(modalDiv);
            backdropDiv.appendChild(dialogDiv);
            document.body.appendChild(backdropDiv);

           // Removes the popup if clicked outside it
            backdropDiv.addEventListener('click', function(event) {
                if (!modalDiv.contains(event.target)) {
                    document.body.removeChild(backdropDiv);
                }
            });
        });

        // Append the finished menu
        targetDiv.appendChild(newDiv);

        // Clear the interval since the menu has been created
        clearInterval(intervalMenu);
        menuCreated = true;
    }
}

GM_addStyle ( `
    /* General theme colors */
    :root {
        --blast-background: ${blastBackground};
        --blast-accent: ${blastAccent};
        --blast-border: ${blastBorder};
        --blast-bgURL: url("${bgURL}");
    }

    /* Replace the imgur link with your desired background image link */
    /* Defaults to accent color if link is invalid */
    [data-asset-chat-background-dark] {
        background: var(--blast-bgURL) !important;
        background-size: cover !important;
        object-fit: fill;
    }

    /* Merry star icon */
    /* Can also be modified as explained above */
    ._al_n > img:nth-child(1) {
        content: url(https://media.tenor.com/h5F7PZhXNisAAAAi/star.gif) !important;
    }

    /* Hides the Download from Microsoft Store button */
    ._al_t > button.x889kno:nth-child(1) { display: none !important  }

    /* Animations */
    @keyframes zoomIn {
        0% {
            transform: scale(0.5);
            opacity: 0;
        }
        100% {
            transform: scale(1);
            opacity: 1;
        }
    }

    .modal-zoom-in {
        animation: zoomIn 0.3s ease forwards;
    }

    ._aigw:nth-child(4) {
    transition: transform 0.3s ease, opacity 0.3s ease;
    opacity: 1; /* Fully visible */
    }

    ._aigw:nth-child(4).hidden {
        transform: translateX(-100%); /* Move out of view to the left */
        opacity: 0; /* Fade out */
    }

    .x10l6tqk.x46vnbo.x11daxxc.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c.x178xt8z.xm81vs4.xso031l.xy80clv.x13fuv20.xu3j5b3.x1q0q8m5.x26u7qi.x14rkfp4.x64bvqu.xolcn3t.xbh63j1.x6ikm8r.x10wlt62.xiy17q3.x1xsqp64.x18d0r48.x1emribx { transform: translateY(40px); } /* You're welcome */

    :not(.selectable-text) > :not(.selectable-text) > :not(.selectable-text)::selection { background-color: #007BFF; !important }

    /* Background color elements */
    div.x13mwh8y:nth-child(1), div.x13mwh8y:nth-child(2), div.x13mwh8y:nth-child(3), div.x13mwh8y:nth-child(4), div.x13mwh8y:nth-child(5), div.x13mwh8y:nth-child(6), div.x13mwh8y:nth-child(7) { background-color: var(--blast-background); }

    #main, .x1l1ennw, .x1qyhdoi, ._ahyp, .xdiz9cm, .xcbkimw, ._alhs, .xvue9z, ._ak82, .x67bb7w, .xwvwv9b, .x1v8jjaa, .x1l7klhg, .x1qjc9v5, .xyblb0s, .x1l90r2v, div.x1c4vz4f:nth-child(5), div.x1a02dak:nth-child(1) { background-color: var(--blast-background) !important; }

    .statusList > div:nth-child(1) > span:nth-child(1) > div:nth-child(1), div.x1qughib:nth-child(1), div.xajqne3:nth-child(2), div.x3psx0u:nth-child(1), .two._aigs { background-color: var(--blast-background); !important }

    .x78zum5.x8hhl5t.x13a6bvl.x13crsa5.x1mpkggp.x18d9i69.x1t2a60a.xp4054r.xuxw1ft, .x1sfzahb.x1w4ip6v.x1046ku7 { background-color: var(--blast-background) !important; }

    .x1n2onr6.xhtitgo.x9f619.x78zum5.x6s0dn4.xl56j7k.x5sx7kw.xexx8yu.xc73u3c.x10b6aqq.x5ib6vp.x1m8r95a { background-color: var(--blast-background) !important; }

    .x9f619.x78zum5.x1okw0bk.x6s0dn4.xl2dz39.xexx8yu.xc73u3c.x18d9i69.x9mfa4r.xoj7uri.xpxdjtz { background-color: var(--blast-background) !important; }

    .x78zum5.x1op4030.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.xxymvpz.x10l6tqk.x13vifvy.x17qophe.xg01cxk.xvh3i5d.xfh8nwu.xoqspk4.x12v9rci.x138vmkv.x19991ni.x1wsgiic.x1so62im.x1omtkq1 { background-color: var(--blast-background) !important; }

    .x10l6tqk.x1ey2m1c.x17qophe.xfo81ep.x9f619.x78zum5.x6s0dn4.xl56j7k.xh8yej3.x12659sl.x1q7yeco.xvpee5o.x1pi30zi { background-color: var(--blast-background) !important; }

    ._amkg, ._amki { background-color: #000 !important; }

    section.x2lah0s, .xyw6214, .xajqne3 { background-color: #220020; }

    /* Accent color elements */
    .x1c4vz4f.xs83m0k.xdl72j9.x1g77sc7.x78zum5.xozqiw3.x1oa3qoh.x12fk4p8.xeuugli.x2lwn1j.x1nhvcw1.x1q0g3np.x6s0dn4.xz9dl7a.xn6708d.xsag5q8.x1ye3gou.xjv05ge.x8vdgqj.x1gja9t.x1amiio9.x1lq5wgf.xgqcy7u.x30kzoy.x9jhf4c { background-color: #60365d !important; }

    .x972fbf.xcfux6l.x1qhh985.xm0m39n.x78zum5.x6s0dn4.xl56j7k.x1lcm9me.x1yr5g0i.xrt01vj.x10y3i5r.x1y1aw1k.x1sxyh0.xwib8y2.xurb0ha.x1ypdohk.xxymvpz.xfs2ol5.xw4jnvo.x1qx5ct2.x1afcbsf.x1um8urf.xa7slc5.x1hc1fzr { background-color: var(--blast-accent) !important; }

    ._ak4w { background-color: #6d0666 !important; }

    ._ahyg, .x86nts4, ._aju5, .x13crsa5, .x1ba4aug { background-color: var(--blast-accent) !important; }

    /* Button elements */
    .x1gfkgh9, button.x17qophe, button.xk390pu:nth-child(3), button.xds687c { background-color: #b454ad !important; }

    span.xzwifym { color: #89919f !important; }

    /*button.xk390pu:nth-child(2) > span:nth-child(1) {
        display: block;
        width: 28px;
        height: 25px;
    }*/

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

    div#main._ajx_ > footer._ak1i {
        background-color: var(--blast-background);
        border: 2px inset var(--blast-border);
    }

    ._aka5 {
        background-color: var(--blast-background) !important;
        border: 2px inset var(--blast-border);
    }

    /* canvas.x10l6tqk {
        border: 2px inset var(--blast-border);
    }*/

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
        border-color: var(--blast-border);
    }

    .xa1v5g2.x1n2onr6.x9f619.x78zum5.x6s0dn4.xl56j7k.xbyj736.x5yr21d.x1ye3gou.xn6708d.x1acz5yr.xm81vs4.xu3j5b3.x1a0jr7w {
        border-top: 2px inset;
        border-bottom: 2px inset;
        border-left: 2px inset;
        border-color: var(--blast-border);
    }

    ._amid {
		    border-top: 2px inset;
		    border-right: 2px inset;
        border-left: 2px inset;
        border-color: var(--blast-border);
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

    .x1n2onr6.xhtitgo.x9f619.x78zum5.x1q0g3np.xuk3077.x193iq5w.x122xwht.x1bmpntp.xy80clv.xgkeump.x26u7qi.xs9asl8.x1swvt13.x1pi30zi.xnpuxes.copyable-area,
    .x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x1hc1fzr.x6ikm8r.x10wlt62.x1tkvqr7 {
		    border-top: 2px inset;
        border-right: 2px inset;
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    .x1n2onr6.xyw6214.x78zum5.x1r8uery.x1iyjqo2.xdt5ytf.x6ikm8r.x1odjw0f.x1hc1fzr.x1tkvqr7, .xmbbrlm.x1c4vz4f.x2lah0s.xdl72j9.xso031l.x1q0q8m5.xa93pmm {
        border-left: 2px inset;
        border-right: 2px inset;
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    ._ai07._ai01._akmh {
        border-right: 2px inset;
        border-left: 2px inset;
        border-color: var(--blast-border);
    }

    .x1n2onr6.xzkaem6.x9f619.x78zum5.x6s0dn4.xl56j7k.x5sx7kw.xexx8yu.x10b6aqq.x5ib6vp.xc73u3c {
      border-left: 2px inset;
      border-color: var(--blast-border);
    }

    #pane-side {
        border-bottom: 2px inset;
        border-color: var(--blast-border);
    }

    .x67bb7w > header:nth-child(1) {
        border: 2px inset;
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
        /*border: 2px inset;*/
        /*border-color: var(--blast-border);*/
    }

    .x78zum5.xdt5ytf.x5yr21d.x17qophe.x6ikm8r.x10wlt62.x67bb7w.x10l6tqk.x13vifvy.xh8yej3.x15ozvti._ahmw.copyable-area {
        border-top: 2px inset;
        border-color: var(--blast-border);
    }

    div.x13vifvy:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) {
        border-top: 2px inset;
        border-left: 1.5px inset;
        border-right: 3px inset;
        border-color: var(--blast-border);
    }

    ._amm8, ._aj-s._aj-r._aj-q._aj-_, button.x889kno:nth-child(1), button.x889kno:nth-child(2), button.x889kno:nth-child(3), button.x17qophe, button.xk390pu:nth-child(3), button.xds687c,
    .x10l6tqk.x1ey2m1c.x17qophe.xfo81ep.x9f619.x78zum5.x6s0dn4.xl56j7k.xh8yej3.x12659sl.x1q7yeco.xvpee5o.x1pi30zi,
    .x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.xvue9z.x1xy6bms.xxbr6pl.xx6bls6.xbbxn1n.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.modal-zoom-in,
    .x9f619.x78zum5.x1c4vz4f.x2lah0s.xdl72j9.xdt5ytf.x1v8jjaa.xkwfhqy.x17e6fzg.x15dh256.x1t7u3xy.x1shw4ur.x6ikm8r.x10wlt62.xr6pica.x1p5oq8j.xljvro7.x84yb8i.x1xfsgkm
    { border: 2px inset var(--blast-border); }

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
        --dropdown-background-hover: var(--blast-background) !important;
    }
` );

// Function to replace welcome text
function replaceContent(className, newContent) {
    const element = document.querySelector(className);
    if (element) {
        element.innerHTML = newContent;
    } else {
        setTimeout(function() {
        replaceContent(className, newContent);
      }, 2000);
   }
}

replaceContent('h1._al_e', 'Teriblast for Whatsapp Web');
replaceContent('div.xqui205', 'Made by Teriyaki');