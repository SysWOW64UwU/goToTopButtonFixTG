// ==UserScript==
// @name         Telegram.org - Go Up (BackToTop) Button Fix
// @namespace    https://core.telegram.org/
// @version      1.0.0
// @description  Shrinks the huge [⌃ Go Up] sidebar on telegram blog and documentation pages
// @match        https://telegram.org/
// @match        https://telegram.org/*
// @match        https://core.telegram.org/
// @match        https://core.telegram.org/*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(() => {
    'use strict';

    // Override the cursor: pointer rule.
    const style = document.createElement('style');
    style.textContent = `
        .back_to_top {
            cursor: pointer !important;
        }
        .back_to_top_wrap.back_to_top_shown {
            cursor: default !important;
        }
    `;

    function installStyle() {
        if (!document.getElementById('telegram-go-up-fix-style')) {
            style.id = 'telegram-go-up-fix-style';
            (document.head || document.documentElement).appendChild(style);
        }
    }

    function fixGoUpButton() {
        document
            .querySelectorAll('a.back_to_top_wrap.back_to_top_shown')
            .forEach(anchor => {
                const button = anchor.querySelector(':scope > .back_to_top');

                if (!button) {
                    return;
                }

                // Move onclick from <a> to the inner <div>.
                if (anchor.getAttribute('onclick') === 'backToTopGo()') {
                    anchor.removeAttribute('onclick');
                    button.setAttribute('onclick', 'backToTopGo()');
                }
            });
    }

    function enforce() {
        installStyle();
        fixGoUpButton();
    }

    // Initial application.
    enforce();

    // Keep fixing it if Telegram changes the DOM.
    const observer = new MutationObserver(enforce);

    observer.observe(document.documentElement, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeFilter: ['class', 'onclick']
    });

    // Extra fallback in case the site restores the element.
    setInterval(enforce, 1000);
})();