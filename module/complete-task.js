// import module
import incompleteTask from "./incomplete-task.js";
import deleteTask from "./delete-task.js";

// default complete task
let defaultTask = document.querySelector("#com-task");

// incomplete list to complete list
function completeTask () {
    let completeList = document.querySelector("#complete-tasks");
    let taskItem = this.closest(".task"); // receive this onclick item
    
    // removing complete and edit button and insert mark incomplete button
    let taskActionBtn = taskItem.querySelector(".task-action");
    let incompleteBtn = document.createElement("button"); // create new incomplte button
    incompleteBtn.classList.add("default-btn", "incomplete-btn");
    incompleteBtn.innerText = "Mark Incomplete";

    taskActionBtn.replaceChild(incompleteBtn, taskActionBtn.firstElementChild);
    taskActionBtn.removeChild(taskActionBtn.firstElementChild.nextElementSibling);
    completeList.appendChild(taskItem);

    // bind complete task with mark incomplete action
    bindCompleteTask(taskItem, incompleteTask);
    bindDeleteTask(taskItem, deleteTask);

}
    
    
// binding complete with incomplete 
function bindCompleteTask(taskItem, incompleteTask) {
    let incompleteBtn = taskItem.querySelector(".incomplete-btn");
    incompleteBtn.onclick = incompleteTask;
}

// binding delete
function bindDeleteTask(taskItem, deleteTask) {
    let deleteBtn = taskItem.querySelector(".delete-btn");
    deleteBtn.onclick = deleteTask;
}

// default task binding
bindCompleteTask(defaultTask, incompleteTask);
bindDeleteTask(defaultTask, deleteTask);

export default completeTask;