const inputTaskName = document.querySelector("input[type='text']");
var ol = document.querySelector("ol.taskValue");
let toDo = [];
var statys = ['Active', 'Completed', 'Deleted'];


function addTask () {
    if (inputTaskName.value !== ''){
         // Создаем обьект
        let taskObject = {
            nameTask: inputTaskName.value,
            id: new Date().valueOf(),
        };
                               
        // добавляем в конец массива [toDo] содержимое (addTask)
            // toDo.shift(taskObject);
            toDo.push(taskObject);
            console.log(toDo);
            inputTaskName.value = '';

            //Вывод массива путем перебора элементов
                let outTodo = document.querySelector('.taskValue');

                // for ( let i = 0; i < toDo.length; i++ ) {
                        let task = toDo[toDo.length - 1];
                        let li = document.createElement('li');
                        let span = document.createElement('span');
                        span.classList.add('ontaskText');
                        span.innerText = task.nameTask;
                        let select = document.createElement('select');
                        select.classList = ("btn btn-light");
                        select.id = ("select");
                        select.onchange="send(this)";

                        for (const val of statys) {
                            var option = document.createElement('option');
                            option.value = val;
                            option.text = val.charAt(0).toUpperCase() + val.slice(1);
                            select.appendChild(option);
                        };

                    ol.appendChild(li);
                    li.appendChild(span);
                    span.appendChild(select);
                    outTodo.appendChild(li);
                // };
    
    } else {
        alert('Fill in the task fields')
    }
};


// Task Complate
/* <select onchange="send(this)"></select> */
// select.onchange = "send(this)"; // Всунуть в свойства SELECT

let stateTask = document.getElementById("select");
console.log(stateTask);



// function stateTask() {
//     if (option.value == 'Active') {
//         console.log('pause');
//     } else if (statys[i] == 'Completed') {
//         console.log('true');
//     } else {
//         console.log('fals');
//     }
//  };
