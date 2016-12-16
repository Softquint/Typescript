"use strict";
var Engine = (function () {
    function Engine(etype, power) {
        this.engineType = etype;
        this.power = power;
    }
    Engine.prototype.start = function () {
        console.log("Engine Started");
    };
    Engine.prototype.getPwer = function () {
        return this.power;
    };
    return Engine;
}());
// let e1 = new Engine("Person","1000cc");
// console.log(e1.engineType);
// console.log(e1.start());
// console.log(e1.getPwer());
var Vehicle = (function () {
    function Vehicle() {
        this._engi = ;
    }
    return Vehicle;
}());
