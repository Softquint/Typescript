var fname = "Synechron";
var n = 10;

function Add(n1, n2) {
    var result = n1 + n2;
    var msg = "Sum is " + result;
    console.log(msg);
}

function AddCon(n1, n2) {
    var result = n1 + n2;
    var msg = "Sum is " + result;
    console.log(msg);
}

function AddType(n1: number, n2: number) {
    var result = n1 + n2;
    var msg = "Sum is " + result;
    console.log(msg);
}

Add(4, 3);
AddCon(4, "ABC");
AddType(4, 5);

// Let vs var

var obj = 10;
var obj = 20;

let num = 10;
//let num = 20;

function fn(inp) {
    var x = 20;
    if (inp) {
        x = 100;
    }
    return x;
}

console.log(fn(20));
console.log(fn(100));

function fnlet(inp) {
    let x = 20;
    if (inp) {
        let x = 100;
    }
    return x;
}

console.log(fnlet(20));
console.log(fnlet(100));


for (var i = 0; i < 10; i++) {
    (function (a) {
        setTimeout(function () {
            console.log(a)
        }, 100 * a)
    } (i))
}

//Declaring array
let list = ["a", 1, 3, 4, false];
let mylist: number[] = [1, 2, 3, 4, 5];
let x: [string, number];
x = ["sdfsasd", 6];

enum Color { Red, Green, Blue }
let color: Color = Color.Red;
console.log(color);

//TypeCasting == Type Assertions
let data: any = "My Work";
let l = (<string>data).length;
console.log(l)