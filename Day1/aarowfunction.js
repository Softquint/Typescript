"use strict";
var mult = function (x, y) {
    return x * y;
};
mult(3, 6);
var mutlarrow = function (a, b) { return a * b; };
function Display(arg) {
    console.log(arg(3, 4));
}
function myfun(a, b) {
    return a * b;
}
Display(myfun);
Display(function (a, b) { return a + b; });
Display(function (a, b) { return a - b; });
