const sass = require("sass");

const branding = sass.compile("sass/popoyoko-branding.scss");

console.log(branding);

module.exports = {
  branding: branding,
};
