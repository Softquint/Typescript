"use strict";
var Startup = (function () {
    function Startup() {
    }
    Startup.main = function (name) {
        console.log('Hello' + name);
        console.log('sdfsdsd' + name);
    };
    return Startup;
}());
Startup.main("Fareed");
