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

    const IS_STATUS_VALID = (stat == INPROGRESS || stat == DONE || stat == TODO);

    if (isTaskInList && IS_STATUS_VALID) {
        list[task] = stat;
    } else if (!IS_STATUS_VALID) {
        console.log('Invalid status');
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
    
    let a = 1;
    let b = 1;
    let c = 1;
    
    if ( stat == 'del' ) {
        deleteTask(task);
    } else if ( task  && stat ) {
        changeStatus(task, stat);
    } else if ( task  && !stat ) {
        addTask(task);
    }

    console.log('To Do: ');

    for (task in list) {
        if (list[task] === TODO) {
            console.log(task);
            a = 0;
        } 
    }
    if (a == 1) {
            console.log('---');
        }
    
    console.log('In Progress: ');

    for (task in list) {
        if (list[task] === INPROGRESS) {
            console.log(task);
            b = 0;
        }
    }
    if (b == 1) {
        console.log('---');
    }

    console.log('Done: ');

    for (task in list) {
        if (list[task] === DONE) {
            console.log(task);
            c = 0;
        } 
    }
    if (c == 1) {
        console.log('---');
    }
}    

printList();
promptUser();
showList();
