const fs = require("fs");
const colors = require("./colors.json");
const texts = require("./texts.json");

const exportSassColors = () => {
  let sass = "";
  for (const colorName in colors) {
    sass += `$${colorName}: ${colors[colorName]};\n`;
  }
  fs.writeFileSync("colors.scss", sass);
  console.log("\x1b[33m\x1b[1m%s\x1b[0m", "colors.scss generated");
};

const exportSassTexts = () => {
  let sass = "";
  for (const familyName in texts.families) {
    sass += `@import url("${texts.families[familyName]}");\n`;
  }
  sass += "\n";
  for (const textStyle in texts.typeSystem) {
    console.log(textStyle);
    sass += `${textStyle} {\n    font-family: "${texts.typeSystem[textStyle].family}", ${texts.typeSystem[textStyle].familyFallback};\n    font-size: ${texts.typeSystem[textStyle].fontSize};\n    font-weight: ${texts.typeSystem[textStyle].fontWeight};\n}\n\n`;
  }
  fs.writeFileSync("texts.scss", sass);
  console.log("\x1b[33m\x1b[1m%s\x1b[0m", "texts.scss generated");
};

exportSassColors();
exportSassTexts();
