const fs = require("fs");
const colors = require("./colors.json");

const getColors = () => {
  console.log("Here are the colors from Popoyoko :\n");
  for (colorName in colors) {
    console.log(`${colorName}: ${colors[colorName]}`);
  }
  console.log("\n");
  return colors;
};

const exportSassColors = () => {
  let sass = "";
  for (const colorName in colors) {
    sass += `$${colorName}: ${colors[colorName]};\n`;
  }
  fs.writeFileSync("colors.scss", sass);
  console.log("\x1b[33m\x1b[1m%s\x1b[0m", "colors.scss generated");
};

module.exports = {
  getColors: getColors(),
  exportSassColors: exportSassColors(),
};
