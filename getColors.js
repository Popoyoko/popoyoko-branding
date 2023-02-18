const colors = require("./colors.json");

const getColors = () => {
  console.log("Here are the colors from Popoyoko :\n");
  for (colorName in colors) {
    console.log(`${colorName}: ${colors[colorName]}`);
  }
  console.log("\n");
  return colors;
};

module.exports = {
  getColors: getColors(),
};
