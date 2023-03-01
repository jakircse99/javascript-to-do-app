// complete task
import incompleteTask from "./incomplete-task.js";

let defaultTask = document.querySelector("#com-task");

    function completeTask () {
        let completeList = document.querySelector("#complete-tasks");
        let taskItem = this.closest(".task");
        

        // removing complete and edit button and insert mark incomplete button

        let taskActionBtn = taskItem.querySelector(".task-action");
        let incompleteBtn = document.createElement("button");
        incompleteBtn.classList.add("default-btn", "incomplete-btn");
        incompleteBtn.innerText = "Mark Incomplete";

            taskActionBtn.replaceChild(incompleteBtn, taskActionBtn.firstElementChild);
            taskActionBtn.removeChild(taskActionBtn.firstElementChild.nextElementSibling);
            completeList.appendChild(taskItem);

            // bind complete task with incomplete action
            bindCompleteTask(taskItem, incompleteTask);
            
            
            
    }
    
    
    // binding complete
    function bindCompleteTask(taskItem, incompleteTask) {
        let incompleteBtn = taskItem.querySelector(".incomplete-btn");
        incompleteBtn.onclick = incompleteTask;
    }

    // default task
    bindCompleteTask(defaultTask, incompleteTask);

    


    


export default completeTask;