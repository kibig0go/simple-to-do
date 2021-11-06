const list = {
    "create a task": "In Progress",
    "make a bed": "Done",
    "write a post": "To Do",
};

function changeStatus(task, stat) {
    list[task] = stat;
}

function addTask(task) {
    list[task] = 'To Do';
}

function deleteTask() {
    delete list[task];
}


function printList() {
    for ( key in list) {
    console.log(key + ": " + list[key]);
    }
}

function showList() {
    let InProgress = [];
    let ToDo = [];
    let Done = [];
    sort(InProgress, ToDo, Done);
    console.log('ToDo:');
    for (task in ToDo) {
        console.log(`"${ToDo[task]}"`);
    }

    console.log('In Progress:');
    for (task in InProgress) {
        console.log(`"${InProgress[task]}"`);
    }

    console.log('Done:');
    for (task in Done) {
        console.log(`"${Done[task]}"`);
    }
}

function sort(InProgress, ToDo, Done) {
    for (const [task, stat] of Object.entries(list)) {
        if (stat === 'In Progress') {
          InProgress.push(task);
        } else if (stat === 'Done') {
          Done.push(task);
        } else if (stat === 'To Do') {
          ToDo.push(task);
        }
      }    
}

printList();

    const prompt = require('prompt-sync')();
 
    let task = prompt('Task: ');
    let stat = prompt('Status: ');


if ( task !== '' && stat == 'del' ) {
    deleteTask(task);
} else if ( task !== '' && stat !== '') {
    changeStatus(task, stat);
} else if ( task !== '' && stat == '') {
    addTask(task);
}

printList();
showList();