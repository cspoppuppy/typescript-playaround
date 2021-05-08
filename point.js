"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(_x, _y) {
        var _this = this;
        this._x = _x;
        this._y = _y;
        this.drawPoint = function () {
            console.log("x: ", _this._x, " y: ", _this._y);
        };
        this.getDistances = function (p) {
            return Math.pow(p.x - _this._x, 2) + Math.pow(p.y - _this._y, 2);
        };
    }
    Object.defineProperty(Point.prototype, "x", {
        get: function () {
            return this._x;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value no less than 0");
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Point.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("value no less than 0");
            }
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    return Point;
}());
exports.Point = Point;
