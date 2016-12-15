function add(x: number, y: number): number {
    return x + y;
}

let add2 = function (x: number, y: number): number {
    return x + y;
}

let add3: (x: number, y: number) => number;
add3 = function (x: number, y: number): number {
    return x + y;
}

let add4: (x: number, y: number) => number = function (x: number, y: number): number {
    return x + y;
}

function M1(cb: () => void) {
    cb();
}

M1(function () {
    console.log("sds")
})

//Optional Parameter
function Hello(f: string, l?: string) {
    console.log(f + l);
}
Hello("ab", "cd");
Hello("as");

//Area
var obj1 = { h: 10, w: 20 };
var area = function (rect: { h: number, w: number }) {
    return rect.h * rect.w;
}
console.log(area(obj1))

// Default Argument

function fun(f: string, l = "sds"): string {
    return f + l;
}
console.log(fun("asa"))

// Method Overloading
function addover(x: number, y: number): number;
function addover(x: number, y: number, z: number): number;

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
            throw "asdas"
    }

}
addover(1, 2)
addover(1, 2, 3)

//ArrowFunction