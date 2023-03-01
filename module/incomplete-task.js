// incomplete task
import completeTask from "./complete-task.js";
import editDisplayPopup from "./edit-popup.js";
// import editAction from "./edit-task.js";

function incompleteTask () {
    let incompleteList = document.querySelector("#incomplete-tasks");
    let taskItem = this.closest('.task');
    let taskActionBtn = taskItem.querySelector(".task-action");


    let completeBtn = document.createElement("button");
        completeBtn.classList.add("default-btn", "complete-btn");
        completeBtn.innerText = "Complete";

    let editBtn = document.createElement("button");
        editBtn.classList.add("default-btn", "edit-btn");
        editBtn.innerText = "Edit";

        taskActionBtn.replaceChild(completeBtn, taskActionBtn.firstElementChild);
        taskActionBtn.insertBefore(editBtn, taskActionBtn.lastElementChild);



    incompleteList.appendChild(taskItem);

    bindInComplete(taskItem, completeTask);
    bindEditTask(taskItem, editDisplayPopup);

    // binding incomplete
    function bindInComplete(taskItem, completeTask) {
        
        let completBtn = taskItem.querySelector(".complete-btn");
        completBtn.onclick = completeTask;

    }

    // binding edit
    function bindEditTask(taskItem, editDisplayPopup) {
        let editBtn = taskItem.querySelector(".edit-btn");
        editBtn.onclick = editDisplayPopup;
    }


}

export default incompleteTask;