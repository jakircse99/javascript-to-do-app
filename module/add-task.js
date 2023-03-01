import displayPopup from "./add-popup.js";
import completeTask from "./complete-task.js";

let defaultIncTask = document.querySelector(".incitem");

// create task with popup

function addTask () {
    // declare necessary variable
    let taskName = document.querySelector("#task-name");
    let taskDescription = document.querySelector("#task-description");
    let addTaskBtn = document.querySelector("#add-task");
    let incompleteList = document.querySelector("#incomplete-tasks");


    // function for create task
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

    let addTaskItem = function (ev) {
        ev.preventDefault();
        let taskItem = createTask(taskName.value, taskDescription.value);
        incompleteList.appendChild(taskItem);
        taskName.value = "";
        taskDescription.value = "";

        // bind incomplete task with completetask
        bindInComplete(taskItem, completeTask);
    }
    // binding incomplete
    function bindInComplete(taskItem, completeTask) {
        
        let completBtn = taskItem.querySelector(".complete-btn");
        completBtn.onclick = completeTask;

    }
    // for default task
    bindInComplete(defaultIncTask, completeTask);

    displayPopup();

    if(displayPopup) {
        addTaskBtn.addEventListener("click", addTaskItem);
    }else {
        alert("Open pop-up to add-task");
    }
}

export default addTask;