// empty array
let arr=[];
console.log(arr);

//array with elements
let elearr=[1,2,'c',"I am string",false,4.5];
console.log(elearr);

console.log("Element at the 4th index :"+elearr[3]);

elearr[3]="Nothing";
console.log(elearr);

console.log("#######################")
// Array Method
 
//1. push

console.log("Array before the push :"+elearr)

// Add item at end of array
elearr.push("new item");
console.log("Array after push :"+elearr);

console.log("=====================");
//2. pop
console.log("Array before the pop :"+elearr)

// remove item at end of array
elearr.pop();
console.log("Array after pop :"+elearr);

console.log("=====================");
//3. shift
console.log("Array before the shift :"+elearr)

// remove item at start of array
elearr.shift();
console.log("Array after shift :"+elearr);

console.log("=====================");
//4. unshift
console.log("Array before the unshift :"+elearr)

// add item at start of array
elearr.unshift("newly added item");
console.log("Array after shift :"+elearr);

//lemgth of arrya
console.log("Length of array :"+elearr.length);