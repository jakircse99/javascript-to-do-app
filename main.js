/*
* Title: JavaScript To-Do Application
* Descripttion: This is a to-do application, users can create, delete, and update tasks. Technology used in this application Vanilla JavaScript, HTML and CSS.
* Author: Jakir Hossain
* Date: 01/03/2023
* Website: www.jakircse.com
*
*/

//import module
import addTask from "./module/add-task.js";

addTask();

// dark mode
let darkModeBtn = document.getElementById('dark-mode');
let body = document.body;
let darkMode = localStorage.getItem('darkmode');

function enableDarkMode() {
    darkModeBtn.classList.replace('fa-moon', 'fa-sun');
    body.classList.add('dark');
    localStorage.setItem('darkmode', 'enable');
}

function disableDarkMode() {
    darkModeBtn.classList.replace('fa-sun', 'fa-moon');
    body.classList.remove('dark');
    localStorage.setItem('darkmode', 'disable');
}

if(darkMode == 'enable') {
    enableDarkMode();
}

darkModeBtn.addEventListener('click', ()=> {
    let darkMode = localStorage.getItem('darkmode');
    if(darkMode === 'disable') {
        enableDarkMode();
        console.log('test ok');
    }else {
        disableDarkMode();
    }
})




