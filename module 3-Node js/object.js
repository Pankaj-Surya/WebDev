// empty obj
let obj={};
console.log(obj);


let objAman={
    "Name":"Aman",
    "Age":45,
    "Phone No":80807486,
    //Key is default string so even u dont write 
    // it will work
    Phone_no2:475122225,
    lastName:"suryavanshi"
}

console.log(objAman);

let CaptainAmerica={
    Name: 'Steve',
    Age:9999,
    Friends:["Toony","Hulk","Bruce"],
    address:{
        city:"kalyan",
        state:"Maharastra"
    },
    sayHi:function(){
        console.log("Captain America say Hello");
    },
    Movies:[]
}

console.log(CaptainAmerica);

//address obj
console.log(CaptainAmerica.address.city);

// call for sayHi
CaptainAmerica.sayHi();

// add new key to object
console.log("object before update : ",CaptainAmerica);
CaptainAmerica.Movies=["End Game","ENd Game 2"];
console.log("object after update : ",CaptainAmerica);

// delete a key
delete CaptainAmerica.Movies;

//change state
CaptainAmerica.address.state="Delhi";
console.log(CaptainAmerica);

//second method to access key
console.log(CaptainAmerica.Name);
console.log(CaptainAmerica["Name"]);

