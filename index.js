const fs = require("fs");
const colors = require("./colors.json");

const exportSassColors = () => {
  let sass = "";
  for (const colorName in colors) {
    sass += `$${colorName}: ${colors[colorName]};\n`;
  }
  fs.writeFileSync("colors.scss", sass);
  console.log("\x1b[33m\x1b[1m%s\x1b[0m", "colors.scss generated");
};

exportSassColors();
