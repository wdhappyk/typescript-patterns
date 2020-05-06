var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var PrototypeExample2;
(function (PrototypeExample2) {
    var Shape = /** @class */ (function () {
        function Shape() {
        }
        Shape.prototype.getCoordinates = function () {
            return { x: this.x, y: this.y };
        };
        Shape.prototype.setCoordinates = function (x, y) {
            this.x = x;
            this.y = y;
        };
        Shape.prototype.getColor = function () {
            return this.color;
        };
        Shape.prototype.setColor = function (color) {
            this.color = color;
        };
        Shape.prototype.clone = function () {
            return Object.create(this);
        };
        return Shape;
    }());
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Rectangle.prototype.setWidth = function (width) {
            this.width = width;
        };
        Rectangle.prototype.setHeight = function (height) {
            this.height = height;
        };
        Rectangle.prototype.setSize = function (width, height) {
            this.setWidth(width);
            this.setHeight(height);
        };
        return Rectangle;
    }(Shape));
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        return Circle;
    }(Shape));
    var ApplicationPrototypeExample = /** @class */ (function () {
        function ApplicationPrototypeExample() {
            this.shapes = [];
            var circle = new Circle();
            circle.setCoordinates(10, 20);
            this.shapes.push(circle);
            var anotherCircle = circle.clone();
            this.shapes.push(anotherCircle);
            var rect = new Rectangle();
            rect.setSize(10, 20);
            this.shapes.push(rect);
        }
        ApplicationPrototypeExample.prototype.getCopyAllShapes = function () {
            return this.shapes.map(function (s) { return s.clone(); });
        };
        ApplicationPrototypeExample.prototype.getShapes = function () {
            return this.shapes;
        };
        return ApplicationPrototypeExample;
    }());
    var app = new ApplicationPrototypeExample();
    var shapes = app.getShapes();
    var copyShapes = app.getCopyAllShapes();
    console.log(shapes);
    console.log(copyShapes);
    console.log(shapes[0].getColor() === copyShapes[0].getColor()); // true
})(PrototypeExample2 || (PrototypeExample2 = {}));
