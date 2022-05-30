function getFirstName(firstname){
    let a= 10;
    console.log("firstName",firstname);
    return function getLastName(lastname){
        console.log("lastName",lastname);
        return function printFullName(){
            console.log("My Name is",firstname,lastname );
            console.log("a",a);
        }
    }
}


let getLastName = getFirstName("Jasbir");
console.log("get firstB=")