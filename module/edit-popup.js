import displayPopup from "./add-popup.js";

// edit task with display popup

function editDisplayPopup () {
    // declare necessary variable
    let createTaskPopup = document.getElementById("creat-task-popup"); 
    let editTaskPopup = document.getElementById("edit-task-popup");
    let pupupCloseBtn = document.getElementById("edit-close-popup");
    let editTaskName = document.querySelector("#edit-task-name");
    let editTaskDescription = document.querySelector("#edit-task-description");
    let editTaskBtn = document.querySelector("#edit-task");
    let taskItem = this.closest(".task");
    let taskDetails = taskItem.firstElementChild;
    
    // retaining value form current task item
    editTaskName.value = taskDetails.firstElementChild.innerText;
    editTaskDescription.value = taskDetails.lastElementChild.innerText;
    
    // popup display show
    function displayBlock() {
        let displayBlock = new Promise(function(resolve, reject){
            // turn off create task popup for edit popup, if create task popup open
            if(displayPopup()) {
                createTaskPopup.style.display = "none";
            }
            editTaskPopup.style.display = "block";

            // update edited value
            editTaskBtn.onclick = function() {
                taskDetails.firstElementChild.innerText= editTaskName.value;
                taskDetails.lastElementChild.innerText = editTaskDescription.value;
                editTaskPopup.classList.remove("show-edit");
                
                // for display opacity animation
                setTimeout(()=>{
                    editTaskPopup.style.display = "none";
                },200);
            }
            resolve();
        });
        return displayBlock;
    }

    // display opacity animation
    function displayShow() {
        let displayShow = new Promise(function() {
            setTimeout(function(){
                editTaskPopup.classList.add("show-edit");
            },1);
        });
        return displayShow;
    }

    // full animate function
    async function displayAnimate() {
        try {
            await displayBlock();
            await displayShow();
        } catch (error){
            console.log(error);
        }
    }

    displayAnimate();

    // popup close function
    pupupCloseBtn.onclick = () => {
    function displayHide () {
        let popupClose = new Promise(function(res) {
                editTaskPopup.classList.remove("show-edit");
                res();
        });
        return popupClose;
    }

    function displayNone () {
        let displayNone = new Promise(function(res) {
            setTimeout(()=>{
                editTaskPopup.style.display = "none";
                res();
            },200);
        });
        return displayNone;
    }

    // first animate then display none
    async function popupClose () {
        try {
            await displayHide();
            await displayNone();
        } catch (err) {
            console.log(err);
        }
    }
    
    popupClose();
    
    }
}

export default editDisplayPopup;


// edit task popup end