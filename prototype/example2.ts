// example with Object.create() method
namespace PrototypeExample2 {

  abstract class Shape {
    private x: number;
    private y: number;
    private color: string;

    getCoordinates() {
      return { x: this.x, y: this.y };
    }

    setCoordinates(x: number, y: number) {
      this.x = x;
      this.y = y;
    }

    getColor() {
      return this.color;
    }

    setColor(color: string) {
      this.color = color;
    }

    clone(): this {
      return Object.create(this);
    }
  }

  class Rectangle extends Shape {
    private width: number;
    private height: number;

    setWidth(width: number) {
      this.width = width;
    }

    setHeight(height: number) {
      this.height = height;
    }

    setSize(width: number, height: number) {
      this.setWidth(width);
      this.setHeight(height);
    }
  }
  class Circle extends Shape {
    private radius: number;
  }

  class ApplicationPrototypeExample {
    private shapes: Shape[] = [];

    constructor() {
      const circle = new Circle();
      circle.setCoordinates(10, 20);
      this.shapes.push(circle);

      const anotherCircle = circle.clone();
      this.shapes.push(anotherCircle);

      const rect = new Rectangle();
      rect.setSize(10, 20);
      this.shapes.push(rect);
    }

    getCopyAllShapes() {
      return this.shapes.map((s) => s.clone());
    }

    getShapes() {
      return this.shapes;
    }
  }

  const app = new ApplicationPrototypeExample();

  const shapes = app.getShapes();
  const copyShapes = app.getCopyAllShapes();

  console.log(shapes);
  console.log(copyShapes);

  console.log(shapes[0].getColor() === copyShapes[0].getColor()); // true
}


