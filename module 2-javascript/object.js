// it is non primitive datatype
// collection of key val pair
// 


let cap = {
      fName: "Steeve",
      lName: "Roger",
      friends: ["tony", "peter", "bruce"],
      address: {
          city: "manhattan",
          state: "NY"
      },
      age: 34,
      isAvenger: true

}

//console.log(cap);
// console.log(cap.fName);
// console.log(cap.friends[0]);


// for(let fr : cap.friends){

// }

//get 
let varName = "fName";
console.log(cap[varName]); // store in variable in case of space in key throw error

console.log(cap["lName"]);

let varAdd ="address";
console.log(cap[varAdd["city"]]);





