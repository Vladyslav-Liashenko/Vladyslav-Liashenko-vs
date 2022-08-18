const inputTaskName = document.querySelector("input[type='text']");
const inputTaskState = document.querySelector("select[class='btn btn-light']");
const ol = document.querySelector("ol.taskValue");
let toDo = [
    {
        "nameTask": "dfsdf",
        "state": "active",
        "id": 1660830161982
    },
    {
        "nameTask": "dfsdsf",
        "state": "active",
        "id": 1660830164699
    },
    {
        "nameTask": "dsfd",
        "state": "active",
        "id": 1660830166999
    }
];


function addTask () {
    if (inputTaskName.value !== ''){
         // Создаем обьект
        let taskObject = {
            nameTask: inputTaskName.value,
            state: inputTaskState.value,
            id: new Date().valueOf(),
        };
                               
        // добавляем в начало массива [toDo] содержимое (addTask)
            toDo.push(taskObject);
            console.log(toDo);
            inputTaskName.value = '';
    } else {
        alert('Fill in the task fields')
    }
}

//Вывод массива путем перебора элементов
let outTodo = document.querySelector('.taskValue');

// let str = '';
for ( let i = 0; i < toDo.length; i++ ) {
    // if (toDo[i] !== undefined) str += i+toDo[i] + '<br>' ;
    let li = document.createElement('li');
    let span = document.createElement('span');
    span.classList.add('ontaskText');
    span.innerText = toDo[i].nameTask;
    let select = document.createElement('select');
    // select.classList.add('btn btn-light')
    li.appendChild(span);
    outTodo.appendChild(li);




    // <li><span class="ontaskText">Hello amigos</span><span>
    //                 <select class="btn btn-light">
    //                     <option id="option" value="active">Active</option>
    //                     <option id="option" value="completed">Completed</option>
    //                     <option id="option" value="deleted">Deleted</option>
    //                 </select>
    //             </span></li>
}
outTodo.innerHTML= str;

//  function addTask () {
//     let li = document.createElement('li');

//     let taskValue = document.createElement('span');
//     let taskCheck = document.createElement('select');
//         li.innerHTML = inputTaskName.value;
//         li.appendChild(taskValue, taskCheck);
//         ol.appendChild(li);

//         if (inputTaskName.value == inputTaskName.value) {
//             inputTaskName.value = '';
//         }

//  }
    // let taskValue = {

    //     span : "Create new todo list",
    // };

    //     id: new Date().valueOf(), title : "Create new todo list", Option : "active", 
    // };
