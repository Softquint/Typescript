interface Irect {
    h: number;
    w: number;
}

var area = function (rect: Irect) {
    return rect.h * rect.w;
}
var obj1: Irect = { h: 10, w: 20 };
console.log(area(obj1))

//interface with function
interface IPerson {
    name: string;
    age?: number;
    kids: number;
    calPets: () => number;
    makeYonger: (years: number) => void;
    greet: (msg: string) => string;
}

let p :IPerson = {
    name:"asd",
    age:33,
    kids:2,
    calPets:function(){
        return this.kids*2;
    },
    makeYonger:function(y:number){
        this.age -=y;
    },
    greet:function(m:string){
        return "Hello " + m
    }
}

console.log(p.name);
console.log(p.calPets());