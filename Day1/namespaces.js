"use strict";
var Syn;
(function (Syn) {
    var Point = (function () {
        function Point(x, y) {
            this.x = x;
            this.y = y;
        }
        Point.prototype.getDistance = function () {
            return Math.sqrt(this.x * this.x + this.y * this.y);
        };
        return Point;
    }());
    Syn.Point = Point;
})(Syn || (Syn = {}));
var Usage;
(function (Usage) {
    var point1 = new Syn.Point(1, 2);
    console.log(point1.getDistance());
    $(document).ready(function () {
    });
})(Usage || (Usage = {}));
//chrome.exe --allow-file-access-from-files 
