
// scope of var variable
//a=undefined/10//20(local)
 
var a = 10;
function fn() {
    var a = 20;
    console.log("4", a);//20
    a++;//21
    if (true) {
        var a = 30;
        a++;//31
        console.log("9", a);//31
    }
    a++;//22
    console.log("13", a);//22
}
console.log("15", a);//10
fn();
console.log("17", a);

// var variable --> Reassign it , redeclare it

//reassign
var a=10;
a=20;
console.log("27",a);


//redeclare
var a=30;
console.log("37",a);

// for var variable --> memeory alocation is done onece per exection context,
//                      var is function scope