# Uberspace Receipt Downloader
A minimal script which helps you download ALL of your receipts.

## Requirements
Since the script is using the [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) and the [ES6 feature "Object Shorthand property names"](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Property_definitions) you need a modern browser.

E.g. Chrome >= 48, Firefox >= 39
See:
* https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API#Browser_compatibility
* https://developer.mozilla.org/en-US/docs/Web/API/Body/blob#Browser_compatibility
* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer#Browser_compatibility

## Usage
1. [Log-in](https://uberspace.de/login) to your Uberspace account
2. Navigate to [accounting](https://uberspace.de/dashboard/accounting) page (https://uberspace.de/dashboard/accounting)
3. Edit the `receipt_address` in [`index.js`](./index.js) script which should be printed on your receipt. **IMPORTANT:** You cannot change the address once you run the script!
4. Open the developer tools of your browser (windows: `F12`, maxOS: `CMD + SHIFT + I`)
5. Copy the script in the `Console` tab of the developer tools
6. Finally: run the script by pressing the `RETURN` key

## Disclaimer
Use on your own risk!

This script might break in the future if Uberspace changes its accounting page.

## License
Unlicense, public domain (see [UNLICENSE](./UNLICENSE))
