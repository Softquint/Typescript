"use strict";
function Person(a) {
    this.age = a;
    this.grow = function () {
        this.age += 1;
    };
}
//This poeinting to Window object.
var p1 = new Person(20);
setInterval(p1.grow, 1000);
setInterval(function () {
    console.log(p1.age);
}, 1000);
function PersonSelf(a) {
    this.age = a;
    var self = this;
    this.grow = function () {
        self.age += 1;
    };
}
//This poeinting to Window object.
var ps1 = new PersonSelf(20);
setInterval(ps1.grow, 1000);
setInterval(function () {
    console.log(ps1.age);
}, 1000);
//Typescript
function Persontype(a) {
    var _this = this;
    this.age = a;
    this.grow = function () {
        _this.age += 1;
    };
}
var pt1 = new Persontype(20);
setInterval(pt1.grow, 1000);
setInterval(function () {
    console.log(pt1.age);
}, 1000);
