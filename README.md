# Popoyoko Branding

All the assets form the popoyoko'branding.

## Installation :

`npm i git@github.com:Popoyoko/branding.git`

## Usage with sass:

In you `package.json` in the script section, add `--load-path=node_modules/popoyoko-branding/` to the to `sass` script.

Exemple : `"sass": "sass --load-path=node_modules/popoyoko-branding/ src/ -w"`

## Usage with JS:

Import :

`const branding = require("popoyoko-branding");`

Usage :

`branding.getColors()` => Return an object with colors and write it to the console.
