// import module
import completeTask from "./complete-task.js";
import editDisplayPopup from "./edit-popup.js";
import deleteTask from "./delete-task.js";


// complete task list to incomplete task list
function incompleteTask () {
    let incompleteList = document.querySelector("#incomplete-tasks");
    let taskItem = this.closest('.task');
    let taskActionBtn = taskItem.querySelector(".task-action");

    // create new complete button
    let completeBtn = document.createElement("button");
        completeBtn.classList.add("default-btn", "complete-btn");
        completeBtn.innerText = "Complete";

    // create new edit button
    let editBtn = document.createElement("button");
        editBtn.classList.add("default-btn", "edit-btn");
        editBtn.innerText = "Edit";

        // adding complete, edit, and delete
        taskActionBtn.replaceChild(completeBtn, taskActionBtn.firstElementChild);
        taskActionBtn.insertBefore(editBtn, taskActionBtn.lastElementChild);
        incompleteList.appendChild(taskItem);

    // binding complete , edit , delete
    bindInComplete(taskItem, completeTask);
    bindEditTask(taskItem, editDisplayPopup);
    bindDeleteTask(taskItem, deleteTask);

    // binding incomplete to complete
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


}

export default incompleteTask;