# Telegram.org - Go Up (BackToTop) Button Fix

A lightweight Tampermonkey / Violentmonkey userscript that fixes and shrinks the excessively large, misconfigured **[⌃ Go Up]** sidebar button layout on Telegram's blog and core documentation pages.

## Preview
https://github.com/user-attachments/assets/71bc8b98-7312-4131-ba92-b1b03728a9fc



## The Problem
By default, the entire vertical wrap container (`a.back_to_top_wrap`) on Telegram's site acts as a giant clickable button stretching up the screen. This causes accidental clicks, unwanted scrolling behavior, and overrides the native `cursor: pointer` logic across a massive blank zone of the page layout.

## The Fix
This script restructures the layout interaction dynamically:
* Restores `cursor: default` to the wrapping container.
* Keeps the clickable `cursor: pointer` area constrained strictly to the actual `[⌃ Go Up]` inner button.
* Re-routes the `backToTopGo()` onclick execution trigger safely from the macro-wrapper to the inner button block.
* Actively watches the page using a `MutationObserver` and periodic intervals to prevent the website from overriding or breaking the fix during dynamic page loads.

## Installation

### Prerequisites
First, make sure you have a userscript manager extension installed in your browser:
* [Tampermonkey](https://tampermonkey.net)
* [Violentmonkey](https://violentmonkey.github.io/get-it)

### How to Install
1. Click on the **`telegram-go-up-fix.user.js`** file inside this repository.
2. Click the **Raw** button in the top right corner of the file view.
3. Your userscript manager extension will automatically open and prompt you with an **Install** button.
4. Click install and refresh any open Telegram pages!

## Supported Domains
The script activates on the following URLs:
* `https://telegram.org/*`
* `https://core.telegram.org/*`

## License
This project is licensed under the **WTFPL** (Do What The Fuck You Want To Public License). See below for details:

```text
        DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
                    Version 2, December 2004 

 Copyright (C) 2004 Sam Hocevar <sam@hocevar.net> 

 Everyone is permitted to copy and distribute verbatim or modified 
 copies of this license document, and changing it is allowed as long 
 as the name is changed. 

            DO WHAT THE FUCK YOU WANT TO PUBLIC LICENSE 
   TERMS AND CONDITIONS FOR COPYING, DISTRIBUTION AND MODIFICATION 

  0. You just DO WHAT THE FUCK YOU WANT TO.
```
