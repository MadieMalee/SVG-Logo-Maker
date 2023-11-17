// index.js
const { promptUser } = require('./lib/prompts')
const { Triangle, Circle, Square } = require('./lib/shapes')
const { writeSvgFile } = require('./lib/svgWriter')

async function run() {
  const userInput = await promptUser();

  let shape;
  switch (userInput.shape) {
    case 'circle':
      shape = new Circle();
      break;
    case 'triangle':
      shape = new Triangle();
      break;
    case 'square':
      shape = new Square();
      break;
    default:
      console.error('Invalid shape');
      return;
  }

  shape.setColor(userInput.shapeColor);
  shape.setText(userInput.text, userInput.textColor); // Set text properties
  const svgContent = shape.render();
  writeSvgFile(svgContent);
}

run();