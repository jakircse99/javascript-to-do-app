// create task popup

function displayPopup () {
    let createTaskBtn = document.getElementById("create-task");
    let createTaskPopup = document.getElementById("creat-task-popup");
    let pupupCloseBtn = document.getElementById("close-popup");

createTaskBtn.onclick = ()=> {
    
    function displayBlock() {
        let displayBlock = new Promise(function(resolve, reject){
            createTaskPopup.style.display = "block";
            resolve();
        });
        return displayBlock;
    }

    function displayShow() {
        let displayShow = new Promise(function() {
            setTimeout(function(){
                createTaskPopup.classList.add("show");
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
}

pupupCloseBtn.onclick = () => {
    function displayHide () {
        let popupClose = new Promise(function(res) {
                createTaskPopup.classList.remove("show");
                res();
        });
        return popupClose;
    }

    function displayNone () {
        let displayNone = new Promise(function(res) {
            setTimeout(()=>{
                createTaskPopup.style.display = "none";
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
return true;
}

export default displayPopup;


// creat task popup end