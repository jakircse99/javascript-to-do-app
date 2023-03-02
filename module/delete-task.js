
// delete task from list

function deleteTask() {
    let taskItem = this.closest(".task");
    let parent = taskItem.parentNode;
    parent.removeChild(taskItem);
}

export default deleteTask;