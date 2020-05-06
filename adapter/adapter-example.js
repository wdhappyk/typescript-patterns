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
var AdapterExample;
(function (Adapter) {
    var RoundHole = /** @class */ (function () {
        function RoundHole(radius) {
            if (radius === void 0) { radius = 0; }
            this.radius = radius;
        }
        RoundHole.prototype.getRadius = function () {
            return this.radius;
        };
        RoundHole.prototype.fits = function (peg) {
            return this.getRadius() >= peg.getRadius();
        };
        return RoundHole;
    }());
    var RoundPeg = /** @class */ (function () {
        function RoundPeg(radius) {
            if (radius === void 0) { radius = 0; }
            this.radius = radius;
        }
        RoundPeg.prototype.getRadius = function () {
            return this.radius;
        };
        return RoundPeg;
    }());
    var SquarePeg = /** @class */ (function () {
        function SquarePeg(width) {
            if (width === void 0) { width = 0; }
            this.width = width;
        }
        SquarePeg.prototype.getWidth = function () {
            return this.width;
        };
        return SquarePeg;
    }());
    var SquarePegAdapter = /** @class */ (function (_super) {
        __extends(SquarePegAdapter, _super);
        function SquarePegAdapter(peg) {
            var _this = _super.call(this) || this;
            _this.peg = peg;
            return _this;
        }
        SquarePegAdapter.prototype.getRadius = function () {
            return Math.sqrt(2 * Math.pow(this.peg.getWidth(), 2)) / 2;
        };
        return SquarePegAdapter;
    }(RoundPeg));
    var hole = new RoundHole(5);
    var rpeg = new RoundPeg(5);
    console.log(hole.fits(rpeg)); // true
    var smallSqpeg = new SquarePeg(5);
    var largeSqpeg = new SquarePeg(10);
    // console.log(hole.fits(smallSqpeg)); // error compile
    // console.log(hole.fits(largeSqpeg)); // error compile
    var smallSqpegAdapter = new SquarePegAdapter(smallSqpeg);
    var largeSqpegAdapter = new SquarePegAdapter(largeSqpeg);
    console.log(hole.fits(smallSqpegAdapter)); // true
    console.log(hole.fits(largeSqpegAdapter)); // false
})(AdapterExample || (AdapterExample = {}));
