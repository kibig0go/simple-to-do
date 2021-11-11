let list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

let task;
let stat;
const TODO = 'To Do';
const INPROGRESS = 'In Progress';
const DONE = 'Done';
const IS_STATUS_VALID = (stat == INPROGRESS || stat == DONE || stat == TODO);
// const IS_STATUS_VALID_2 = (stat === INPROGRESS || stat === DONE || stat === TODO || stat === undefined);

function promptUser() {
    const prompt = require('prompt-sync')();
 
    task = prompt('Task: ');
    stat = prompt('Status: ');

    while (!(stat === INPROGRESS || stat === DONE || stat === TODO || stat === '')) {
        console.log('Invalid status');
        stat = prompt('Status: ');
    }
    console.log('status is valid');
}

function changeStatus(task, stat) {



    if (isTaskInList(task) && IS_STATUS_VALID) {
        list[task] = stat;
    } else if (!IS_STATUS_VALID) {
        console.log('Invalid status');
    } else if (!isTaskInList(task)) {
        console.log(`you only can change the status of an existing task`)
    }
        
}

function addTask(task, stat = TODO) {
    
    // if (!isTaskInList(task)){
       list[task] = stat; 
    // } else {
    //     console.log('Task already in List');
    // }

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
    
    // if ( stat == 'del' ) {
    //     deleteTask(task);
    // } else if ( isTaskInList(task) && IS_STATUS_VALID ) {
    //     changeStatus(task, stat);
    // } else if ( !isTaskInList(task) ) {
    //     addTask(task, stat);
    // }
    if ( stat == 'del' ) {
        deleteTask(task);
    } else if ( task  && IS_STATUS_VALID ) {
        changeStatus(task, stat);
    } else if ( !isTaskInList(task)  && (stat === INPROGRESS || stat === DONE || stat === TODO || stat === undefined) ) {
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
// console.log(isTaskInList(task));
showList();

