const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

let task;
let stat;
const TODO = 'To Do';
const INPROGRESS = 'In Progress';
const DONE = 'Done';

function promptUser() {
    const prompt = require('prompt-sync')();
 
    task = prompt('Task: ');
    stat = prompt('Status: ');
}

function changeStatus(task, stat) {

    const Is_Status_Valid = (stat == INPROGRESS || stat == DONE || stat == TODO);

    if (isTaskInList && Is_Status_Valid) {
        list[task] = stat;
    }
        
}

function addTask(task) {
    
    if (!isTaskInList(task)){
       list[task] = TODO; 
    } else {
        console.log('Task already in List');
    }

}

function deleteTask() {
    
    if (isTaskInList) {
        delete list[task];
    } else {
        console.log('no such task');
    }

}


function printList() {
    for ( key in list) {
    console.log(key + ": " + list[key]);
    }
}

function isTaskInList(task) {
    return task in list;
}

function showList() {
    
    if ( stat == 'del' ) {
        deleteTask(task);
    } else if ( task  && stat ) {
        changeStatus(task, stat);
    } else if ( task  && !stat ) {
        addTask(task);
    }

    console.log('To Do: ');

    for (task in list) {
        if (list[task] == TODO) {
            console.log(task);
        } 
    }
    
    console.log('In Progress: ');

    for (task in list) {
        if (list[task] == INPROGRESS) {
            console.log(task);
        }
    }
    console.log('Done: ');

    for (task in list) {
        if (list[task] === DONE) {
            console.log(task);
        } 
    }
}    

printList();
promptUser();
showList();
