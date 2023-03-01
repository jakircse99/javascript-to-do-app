// edit task popup

function editDisplayPopup () {
    let editTaskPopup = document.getElementById("edit-task-popup");
    let pupupCloseBtn = document.getElementById("edit-close-popup");

    let editTaskName = document.querySelector("#edit-task-name");
    let editTaskDescription = document.querySelector("#edit-task-description");
    let editTaskBtn = document.querySelector("#edit-task");
    let taskItem = this.closest(".task");
    let taskDetails = taskItem.firstElementChild;
    
    editTaskName.value = taskDetails.firstElementChild.innerText;
    editTaskDescription.value = taskDetails.lastElementChild.innerText;
    
    function displayBlock() {
        let displayBlock = new Promise(function(resolve, reject){
            editTaskPopup.style.display = "block";
            
            editTaskBtn.onclick = function() {
                taskDetails.firstElementChild.innerText= editTaskName.value;
                taskDetails.lastElementChild.innerText = editTaskDescription.value;
                editTaskPopup.classList.remove("show-edit");
                setTimeout(()=>{
                    editTaskPopup.style.display = "none";
                    res();
                },200);
            }
            resolve();
        });
        return displayBlock;
    }

    function displayShow() {
        let displayShow = new Promise(function() {
            setTimeout(function(){
                editTaskPopup.classList.add("show-edit");
            },1);
        });
        return displayShow;
    }

    async function displayAnimate() {
        try {
            await displayBlock();
            await displayShow();
        } catch (error){
            console.log(error);
        }
    }

    displayAnimate();

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