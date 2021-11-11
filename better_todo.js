let status;
let task;

const TODO = 'To Do';
const INPROGRESS = 'In Progress';
const DONE = 'Done';
let IS_STATUS_VALID = ( status === TODO || status === INPROGRESS || status === DONE )

let list = {
    "create a task": INPROGRESS,
    "make a bed": DONE,
    "write a post": TODO,
}

function promptUserTask() {
    const prompt = require('prompt-sync')();
    task = prompt('Task: ');
    console.log(task);
}

function promptUserStatus() {
    const prompt = require('prompt-sync')();
    status = prompt('Status: ');
    while (!IS_STATUS_VALID) {
        console.log(`Invalid status. Choose one of "To Do", "In Progress", "Done"`);
        status = prompt('Status:\n');
        IS_STATUS_VALID = ( status === TODO || status === INPROGRESS || status == DONE );
    }
    console.log('Status valid');
}

function menu() {
    const prompt = require('prompt-sync')();
    let option = prompt('Choose an option: 1 - for change status 2 - for add new task 3 - for delete task\n');
    let IS_OPTION_VALID = ( option == 1 || option == 2 || option == 3 );
    while (!IS_OPTION_VALID) {
        option = prompt(`Choose a valid option:`);
        IS_OPTION_VALID = ( option == 1 || option == 2 || option == 3 );
    } 
    switch (option) {
        case '1':
            promptUserTask();
            promptUserStatus(); 
            changeStatus();
            break;
        case '2':
            promptUserTask();
            addTask();
            break;
        case '3':
            promptUserTask();
            deleteTask();
            break;
    }    
}

function changeStatus(task, status) {
    while (!isTaskInList(task)) {
        console.log('This task doeas not exists');
        promptUserTask();
    }
    list[task] = status;
}

function addTask(task) {
    while (isTaskInList(task)) {
        console.log('This task already exists');
        promptUserTask();
    }
    list[task] = TODO;
    console.log('TASK ADDED');
}

function deleteTask(task) {
    while (!isTaskInList(task)) {
        console.log('This task does not exists');
        promptUserTask();
    }
    delete list[task];
    console.log('TASK DELETED');
}

function showList() {
    let a = 1;
    let b = 1;
    let c = 1;
    menu();
    console.log(TODO + ': ');

    for (task in list) {
        if (list[task] === TODO) {
            console.log(task);
            a = 0;
        } 
    }
    if (a == 1) {
        console.log('---');
    }

    console.log(INPROGRESS + ': ');

    for (task in list) {
        if (list[task] === INPROGRESS) {
            console.log(task);
            b = 0;
        } 
    }
    if (b == 1) {
        console.log('---');
    }

    console.log(DONE + ': ');

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

function printList() {
    for (task in list) {
        console.log( task + ': ' + list[task]);
    }
}

function isTaskInList(task) {
    return task in list;
}

printList();
showList();
console.log(task + status);
printList();