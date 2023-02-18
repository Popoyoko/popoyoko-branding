# Popoyoko Branding

All the assets form the popoyoko'branding.

## Installation :

`npm i git@github.com:Popoyoko/branding.git`

## Usage with sass:

In you `package.json` in the script section, add `--load-path=node_modules/popoyoko-branding/` to the to `sass` script.

Exemple : `"sass": "sass --load-path=node_modules/popoyoko-branding/ src/ -w"`

In your main scss file import colors and texts :

`@use "colors.scss" as popoyokoColors;`
`@use "texts.scss" as popoyokoTexts;`

Then you can use the popoyoko's stylesheet like this exemple:

`background-color: popoyokoColors.$light;`
