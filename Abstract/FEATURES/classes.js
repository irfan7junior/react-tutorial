"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(color) {
        this.color = color;
    }
    Vehicle.prototype.drive = function () {
        console.log('chugga chugga');
    };
    Vehicle.prototype.honk = function () {
        console.log('beep');
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
var vehicle = new Vehicle('orange');
console.log(vehicle.color);
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car(wheels, color) {
        var _this = _super.call(this, color) || this;
        _this.wheels = wheels;
        return _this;
    }
    Car.prototype.drive = function () {
        console.log('vroom');
    };
    Car.prototype.startDrivingProcess = function () {
        this.honk();
    };
    return Car;
}(Vehicle));
var car = new Car(4, 'red');
console.log(car.color);
console.log(car.wheels);
