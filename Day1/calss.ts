class Engine{
    //default access modifre in typescript is public
    engineType: String;
    private power : string;

    constructor(etype : string , power:string){
        this.engineType = etype;
        this.power = power;
    }

    start(){
        console.log("Engine Started");
    }

    getPwer(){
        return this.power;
    }
}

// let e1 = new Engine("Person","1000cc");
// console.log(e1.engineType);
// console.log(e1.start());
// console.log(e1.getPwer());

class Vehicle{
    private _engi = 
}