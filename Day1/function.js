"use strict";
function add(x, y) {
    return x + y;
}
var add2 = function (x, y) {
    return x + y;
};
var add3;
add3 = function (x, y) {
    return x + y;
};
var add4 = function (x, y) {
    return x + y;
};
function M1(cb) {
    cb();
}
M1(function () {
    console.log("sds");
});
//Optional Parameter
function Hello(f, l) {
    console.log(f + l);
}
Hello("ab", "cd");
Hello("as");
//Area
var obj1 = { h: 10, w: 20 };
var area = function (rect) {
    return rect.h * rect.w;
};
console.log(area(obj1));
// Default Argument
function fun(f, l) {
    if (l === void 0) { l = "sds"; }
    return f + l;
}
console.log(fun("asa"));
function addover() {
    function M1(x, y) {
        return x + y;
    }
    function M2(x, y, z) {
        return x + y + z;
    }
    switch (arguments.length) {
        case 2:
            return M1(arguments[0], arguments[1]);
        case 3:
            return M2(arguments[0], arguments[1], arguments[2]);
        default:
            throw "asdas";
    }
}
addover(1, 2);
addover(1, 2, 3);
//ArrowFunction 
