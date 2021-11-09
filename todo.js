const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

let task;
let stat;
const TODO = 'To Do';
const InProgress = 'In Progress';
const Done = 'Done';

function promptUser() {
    const prompt = require('prompt-sync')();
 
    task = prompt('Task: ');
    stat = prompt('Status: ');
}

function changeStatus(task, stat) {

    const Is_Status_Valid = (stat == InProgress || stat == Done || stat == TODO);

    if (isTaskInList && Is_Status_Valid) {
        list[task] = stat;
    }
        
}

function addTask(task) {
    
    if (!isTaskInList){
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
    
    console.log('To Do: ');

    for (task in list) {
        if (list[task] == TODO) {
            console.log(task);
        } 
    }
    
    console.log('In Progress: ');

    for (task in list) {
        if (list[task] == InProgress) {
            console.log(task);
        }
    }
    console.log('Done: ');

    for (task in list) {
        if (list[task] == Done) {
            console.log(task);
        }
    }
}    

printList();
promptUser();
 


if ( stat == 'del' ) {
    deleteTask(task);
} else if ( task  && stat ) {
    changeStatus(task, stat);
} else if ( task  && !stat ) {
    addTask(task);
}


showList();
