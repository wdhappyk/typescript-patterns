// example with copy all params
namespace PrototypeExample {

  abstract class Shape {
    private x: number;
    private y: number;
    private color: string;

    protected constructor(source: Shape = null) {
      if (source !== null) {
        this.x = source.x;
        this.y = source.y;
        this.color = source.color;
      }
    }

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

    abstract clone(): Shape;
  }

  class Rectangle extends Shape {
    private width: number;
    private height: number;

    constructor(source: Rectangle = null) {
      super(source);
      if (source !== null) {
        this.width = source.width;
        this.height = source.height;
      }
    }

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

    clone() {
      return new Rectangle(this);
    }
  }

  class Circle extends Shape {
    private radius: number;

    constructor(source: Circle = null) {
      super(source);
      if (source !== null) {
        this.radius = source.radius;
      }
    }

    clone() {
      return new Circle(this);
    }
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

  console.log(app.getShapes());
  console.log(app.getCopyAllShapes());

}
