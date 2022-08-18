const inputTaskName = document.querySelector("input[type='text']");
const ol = document.querySelector("ol.taskValue");
let toDo = [];

 function addTask () {
    let li = document.createElement('li');

    let taskValue = document.createElement('span');
    let taskCheck = document.createElement('select');
        li.innerHTML = inputTaskName.value;
        li.appendChild(taskValue, taskCheck);
        ol.appendChild(li);

        if (inputTaskName.value == inputTaskName.value) {
            inputTaskName.value = '';
        }

 }
    // let taskValue = {

    //     span : "Create new todo list",
    // };

    //     id: new Date().valueOf(), title : "Create new todo list", Option : "active", 
    // };
