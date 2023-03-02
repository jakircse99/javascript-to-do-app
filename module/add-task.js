// import module
import displayPopup from "./add-popup.js";
import completeTask from "./complete-task.js";
import editDisplayPopup from "./edit-popup.js";
import deleteTask from "./delete-task.js";

// default incomplete task
let defaultIncTask = document.querySelector(".incitem");


// create task with popup display

function addTask () {
    // declare necessary variable
    let taskName = document.querySelector("#task-name");
    let taskDescription = document.querySelector("#task-description");
    let addTaskBtn = document.querySelector("#add-task");
    let incompleteList = document.querySelector("#incomplete-tasks");


    // function for create new task
    let createTask = function (name, description) {
        let newTaskItem = document.createElement("div");
        newTaskItem.classList.add('task');
        newTaskItem.innerHTML = `<div class="task-details">
            <p>${name}</p>
            <p>${description}</p>
        </div>
        <div class="task-action">
            <button class="default-btn complete-btn">Complete</button>
            <button class="default-btn edit-btn">Edit</button>
            <button class="default-btn delete-btn">Delete</button>
        </div>`;
    return newTaskItem;
    }

    // add task item to incomplete list
    let addTaskItem = function (ev) {
        ev.preventDefault();
        let taskItem = createTask(taskName.value, taskDescription.value);
        incompleteList.appendChild(taskItem);
        taskName.value = "";
        taskDescription.value = "";

        // bind complete , edit, delete 
        bindInComplete(taskItem, completeTask);
        bindEditTask(taskItem, editDisplayPopup);
        bindDeleteTask(taskItem, deleteTask);

    }

    // binding incomplete and complete
    function bindInComplete(taskItem, completeTask) {
        
        let completBtn = taskItem.querySelector(".complete-btn");
        completBtn.onclick = completeTask;

    }
    // binding edit
    function bindEditTask(taskItem, editDisplayPopup) {
        
        let editBtn = taskItem.querySelector(".edit-btn");
        editBtn.onclick = editDisplayPopup;

    }

    // binding delete 
    function bindDeleteTask(taskItem, deleteTask) {
        
        let deleteBtn = taskItem.querySelector(".delete-btn");
        deleteBtn.onclick = deleteTask;

    }


    // for default task binding
    bindInComplete(defaultIncTask, completeTask);
    bindEditTask(defaultIncTask, editDisplayPopup);
    bindDeleteTask(defaultIncTask, deleteTask);


    // add task
    if(displayPopup()) {
        addTaskBtn.addEventListener("click", addTaskItem);
    }else {
        alert("Open pop-up to add-task");
    }
}

export default addTask;