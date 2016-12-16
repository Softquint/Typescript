namespace Syn{

export interface IPoint{
    getDistance():number;
}

export class Point implements IPoint{
    constructor(public x:number, public y:number){

    }

    getDistance(){
        return Math.sqrt(this.x*this.x + this.y*this.y)
    }
}
}

namespace Usage{
        var point1: Syn.IPoint = new Syn.Point(1,2);
    	console.log(point1.getDistance());

        $(document).ready(function(){

        })
}

//chrome.exe --allow-file-access-from-files

//https://onedrive.live.com/redir?resid=B799ADB9BA789C8F!689&authkey=!AIBzis3B48cnMsg&ithint=folder%2c