"use strict";
var area = function (rect) {
    return rect.h * rect.w;
};
var obj1 = { h: 10, w: 20 };
console.log(area(obj1));
var p = {
    name: "asd",
    age: 33,
    kids: 2,
    calPets: function () {
        return this.kids * 2;
    },
    makeYonger: function (y) {
        this.age -= y;
    },
    greet: function (m) {
        return "Hello " + m;
    }
};
console.log(p.name);
console.log(p.calPets());
