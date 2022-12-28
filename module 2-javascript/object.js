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
//console.log(cap[varName]); // store in variable in case of space in key throw error

//console.log(cap["lName"]);

let varAdd ="address";
//console.log(cap[varAdd["city"]]);

//========================================= 
products = [
    {
        title :"puma tshirt",
        desc : "test",
        img : "text",
        categories : ["AD","Pant"],
        size : "M",
        color : "blue",
        price : 250,
        createdAt : 2022-12-27,
        updatedAt : 2022-12-27,
    },
    {
        title :"puma tshirt",
        desc : "test",
        img : "text",
        categories : ["AD","Pant"],
        size : "M",
        color : "green",
        price : 300,
        createdAt : 2022-12-27,
        updatedAt : 2022-12-27,
    },
     {
        title :"puma tshirt",
        desc : "test",
        img : "text",
        categories : ["Puma","Pant"],
        size : "S",
        color : "blue",
        price : 200,
        createdAt : 2022-12-27,
        updatedAt : 2022-12-27,
    },
     {
        title :"puma tshirt",
        desc : "test",
        img : "text",
        categories : ["Nike","pant"],
        size : "XL",
        color : "yellow",
        price : 100,
        createdAt : 2022-12-27,
        updatedAt : 2022-12-27,
    },
   ]

const filters = {color: 'blue', size: 'M'}

const filterProducts = products.filter((item) =>
Object.entries(filters).every(([key, value]) =>
  item[key].includes(value)
)
)



console.log(filterProducts)



const foundItem = products.find((item)=> {
    return item.desc == "test" // return only first find item
})
//console.log(foundItem)

const forEachItem = products.forEach((item)=> {
  // console.log(item)
})

//any val is <= 100 return true -> OR operator
const hasExpensiveItems = products.some((item)=> {
    return item.price <= 100  // return only boolena val
})
//console.log(hasExpensiveItems)

// And Operator
const hasExpensiveItemsEv = products.every((item)=> {
    return item.price <= 100  // return only boolena val
})
// console.log(hasExpensiveItemsEv)

const totalSum = products.reduce((totalPrice, item)=>{
    return totalPrice + item.price
},0)
//console.log(totalSum)

// Q. filter the products array on the basis given filters array


//console.log(products)

const filterProduct = products.filter((item)=> item.price >=200)
//console.log(filterProduct);

const objtoArrys = Object.entries(filters)
//console.log(objtoArrys); // [ [ 'color', 'blue' ], [ 'size', 'M' ] ]

const objtoArrysEv= Object.entries(filters).every(([key,value])=>{
   // console.log(key, value) // color blue
})

