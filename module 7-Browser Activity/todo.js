
//button
let button=document.querySelector("button");

//iput
let input = document.querySelector("input");



//ul
let ul = document.querySelector("ul");

//to listen to an event -->and run our logic after that

button.addEventListener("click",fn);

// function fn(){
//     // alert("clicked");
//     let task = input.value;
//     if(task){
//         taskCreater();
//         let li=document.createElement("li");
//         li.textContent = task;
//         ul.appendChild(li);
//         input.value = "";
//     }else{
//         alert("Enter some task");
//     }
// }

function fn() {
    let task = input.value;
    if (task) {
        taskCreator(task);

        input.value = "";
    } else {
        alert("Enter some task");
    }
}


function taskCreator(task) {
    let div = document.createElement("div");
    let li = document.createElement("li");
    let button = document.createElement("button");
    li.textContent = task;
    button.textContent = "X";
    div.appendChild(li);
    div.appendChild(button);
    ul.appendChild(div);
    // when button is created ;
    button.addEventListener("click", function () {
        div.remove();
    })
}


// function taskCreater(task){
//      let div = document.createElement("div");
//      let li =document.createElement("li");
//      let button =document.createElement("button");

//      li.textContent = task;
//      li.textContent = "X";
//      div.appendChild(li);
//      div.appendChild(button);

//      ul.appendChild(div);

//      //when button is created
//      button.addEventListener("click",function(){
//         div.remove();
//      })


// }
//  button.addEventListener("click", fn);
// function fn() {
//     let task = input.value;
//     if (task) {
//         let li = document.createElement("li");
//         li.textContent = task;
//         ul.appendChild(li);

//         input.value = "";
//     } else {
//         alert("Enter some task");
//     }
// }


