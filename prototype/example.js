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
var PrototypeExample;
(function (PrototypeExample) {
    var Shape = /** @class */ (function () {
        function Shape(source) {
            if (source === void 0) { source = null; }
            if (source !== null) {
                this.x = source.x;
                this.y = source.y;
                this.color = source.color;
            }
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
        return Shape;
    }());
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(source) {
            if (source === void 0) { source = null; }
            var _this = _super.call(this, source) || this;
            if (source !== null) {
                _this.width = source.width;
                _this.height = source.height;
            }
            return _this;
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
        Rectangle.prototype.clone = function () {
            return new Rectangle(this);
        };
        return Rectangle;
    }(Shape));
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(source) {
            if (source === void 0) { source = null; }
            var _this = _super.call(this, source) || this;
            if (source !== null) {
                _this.radius = source.radius;
            }
            return _this;
        }
        Circle.prototype.clone = function () {
            return new Circle(this);
        };
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
    console.log(app.getShapes());
    console.log(app.getCopyAllShapes());
})(PrototypeExample || (PrototypeExample = {}));
