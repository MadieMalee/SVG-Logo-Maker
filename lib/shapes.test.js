// Importing the required shapes
const { Triangle, Circle, Square } = require('../lib/shapes.js');

// Testing rendering functionality 
test('Triangle render', () => {
  const shape = new Triangle();
  shape.setColor("blue");
  // Verifying if the rendered output matches the result
  expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
});

// Testing rendering functionality 
test('Circle render', () => {
  const shape = new Circle();
  shape.setColor("red");
  // Verifying if the rendered output matches the result
  expect(shape.render()).toEqual('<circle cx="150" cy="100" r="80" fill="red" />');
});

// Testing rendering functionality 
test('Square render', () => {
  const shape = new Square();
  shape.setColor("green");
  // Verifying if the rendered output matches the result
  expect(shape.render()).toEqual('<rect width="200" height="200" fill="green" />');
});