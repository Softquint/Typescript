let mult = function (x: number, y: number) {
    return x * y;
}

mult(3, 6);

let mutlarrow = (a, b) => a * b;

function Display(arg: (x: number, y: number) => number) {
    console.log(arg(3, 4))
}

function myfun(a: number, b: number) {
    return a * b;
}
Display(myfun);
Display(function (a, b) { return a + b });
Display((a, b) => a - b);