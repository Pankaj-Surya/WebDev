// // empty array
// let arr=[];
// console.log(arr);

// //array with elements
// let elearr=[1,2,'c',"I am string",false,4.5];
// console.log(elearr);

// console.log("Element at the 4th index :"+elearr[3]);

// elearr[3]="Nothing";
// console.log(elearr);

// console.log("#######################")
// // Array Method
 
// //1. push

// console.log("Array before the push :"+elearr)

// // Add item at end of array
// elearr.push("new item");
// console.log("Array after push :"+elearr);

// console.log("=====================");
// //2. pop
// console.log("Array before the pop :"+elearr)

// // remove item at end of array
// elearr.pop();
// console.log("Array after pop :"+elearr);

// console.log("=====================");
// //3. shift
// console.log("Array before the shift :"+elearr)

// // remove item at start of array
// elearr.shift();
// console.log("Array after shift :"+elearr);

// console.log("=====================");
// //4. unshift
// console.log("Array before the unshift :"+elearr)

// // add item at start of array
// elearr.unshift("newly added item");
// console.log("Array after shift :"+elearr);

// //lemgth of arrya
// console.log("Length of array :"+elearr.length);


//=================================================
//        Array Methods
//===============================================


let cities = ["Hydrebad","Mumbai","Delhi","Kolkata","Mysure"];
let num = [1,2,"s","sssss",true,["Hydrebad","Mumbai"]]

//1 
// console.log("indexof Method",cities.indexOf("Hydrebad"));

//2
// console.log("includes Method cities",cities.includes("Delhi"));
// console.log("includes Method ",num.includes(2));


let nested = ["Hydrebad","Mumbai",[1,[2,3,[4,5]]]];
//3 flaten nested arrays to single array = one level
// console.log("flat Method",cities.flat())
// console.log("flat Method",nested.flat())


// console.log("sort Method",cities.sort())
// console.log("sort Method",num.sort())

let number = [1,2,3,4,5]
console.log("findIndex Method",cities.findIndex((currVal)=>{
    return currVal > 2
}))
console.log("findIndex Method",num.findIndex((currVal)=>{
    return currVal > 2
}))