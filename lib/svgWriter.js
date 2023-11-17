// lib/svgWriter.js
const fs = require('fs');

function writeSvgFile(shapeContent) {
  // Construct the full SVG content with the specified shape
  const svgContent = `
    <svg width="300" height="200" xmlns="http://www.w3.org/2000/svg">
      ${shapeContent}
    </svg>
  `;

  fs.writeFileSync('./examples/logo.svg', svgContent);
  console.log('Generated logo.svg');
}

module.exports = { writeSvgFile };