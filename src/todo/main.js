// declaring variables
const todo = document.createElement("div");
const todoDiv = document.createElement("div");
const inProgress = document.createElement("div");
const done = document.createElement("div");

// style
todo.style.backgroundColor = "white";
inProgress.style.backgroundColor = "white";
done.style.backgroundColor = "white";


// appending vars
todo.appendChild(todoDiv);
todo.appendChild(inProgress);
todo.appendChild(done);
document.body.appendChild(todo);

// events

// functions
function additem(){
    const addtotodo = document.createElement("div");
    addtotodo.innerHTML = "hi";
    done.appendChild(addtotodo);
}