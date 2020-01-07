const input = document.getElementById("input");
const button = document.getElementById("btn");
const todolist = document.getElementById("todo_items");
const donelist = document.getElementById("done_items");
const check = document.getElementById("check");
const icon = document.getElementById("icon");

button.addEventListener("click", addFunc);
/*todolist.addEventListener("click", moveItem); */

function addFunc(event){
    event.preventDefault();
    let save = input.value;
    if(save.length != 0){
    const additem = document.createElement("li");
    const breakline = document.createElement("hr");
    additem.innerHTML = input.value;
    additem.style.listStyleType = "none";
    additem.style.color = "white";
    breakline.style.borderTop = "1px solid white";
    todolist.appendChild(additem);
    todolist.appendChild(breakline);
    } else {
        alert("Input field is undefined")
    }
};

function removeItem(event){
    const li = event;
    const ul = li.parentNode;
    const hr = li.nextSibling;
    ul.removeChild(li);
    ul.removeChild(hr);
};

function moveItem(event){
    if(event.target.matches("li")){
        const ul = event.parentNode;
        const hr = event.nextSibling;
        donelist.appendChild(event);
        ul.removeChild(hr); 
    }
}

let ifchecked = 0;
let trigger = 0;
function markasdone(){
    if(ifchecked === 0){
        check.removeChild(check.firstElementChild);
        const newicon = document.createElement("i");
        newicon.setAttribute("id", "icon");
        newicon.setAttribute("onclick","markasdone()");
        newicon.setAttribute("class", "fa fa-times my-float");
        check.appendChild(newicon);
        check.style.backgroundColor = "white";
        ifchecked = 1;
        trigger = 1;
    } else if(ifchecked === 1){
        check.removeChild(check.firstElementChild);
        const newicon = document.createElement("i");
        newicon.setAttribute("id", "icon");
        newicon.setAttribute("onclick","markasdone()");
        newicon.setAttribute("class", "fa fa-check my-float");
        check.appendChild(newicon);
        check.style.backgroundColor = "#6C757D";
        ifchecked = 0; 
        trigger = 0;
    }
}

function removeSelected(){
    if(trigger === 1){
        console.log(target.id);
    }
}