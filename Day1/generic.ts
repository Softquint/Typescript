//Generic data type
class CommanData<T>{
    data:T;
}

let d =new CommanData<number>();
d.data = 123;

let d1 =new CommanData<string>();
d1.data = "sdf";

var names:Array<string>;

//Repository allow to hold any data type
//Array<T>
//Array Add(T item)
//T Find (function)