// Shapes
class Shape {
  constructor(type) {
    this.type = type;
    this.color = "";
    this.text = "";
    this.textColor = "";
  }
  
  // Methods to set text color and shape color
  setColor(color) {
    this.color = color;
  }

  setText(text, color) {
    this.text = text;
    this.textColor = color;
  }
}
  
// Triangle, circle, and square classes extending their Shape
  class Triangle extends Shape {
    render() {
      return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" /> <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Circle extends Shape {
    render() {
      return `<circle cx="150" cy="100" r="80" fill="${this.color}" /> <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  class Square extends Shape {
    render() {
      return `<rect width="200" height="200" fill="${this.color}" /> <text x="50%" y="50%" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`;
    }
  }
  
  module.exports = { Shape, Triangle, Circle, Square };