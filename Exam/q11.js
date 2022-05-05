// Description: Find output of the following:

// let obj = {"concept":""};

// console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept );

// Options: A) Error

// B) undefined

// C) JSON

// D) [Object Object]

let obj = {"concept":""};
console.log("1==="+JSON.stringify(obj).slice(0, 12));
console.log("2==="+JSON.stringify(obj).slice(12));
// console.log(JSON.parse( JSON.stringify(obj).slice(0, 12)));

console.log( JSON.parse( JSON.stringify(obj).slice(0, 12) + "JSON" + JSON.stringify(obj).slice(12) ).concept ); //{"concept":"JSON"};

