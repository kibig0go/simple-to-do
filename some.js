// let status;
// let option;
// function menu() {
//     const prompt = require('prompt-sync')();
//     option = prompt('Choose an option: 1 - for change status 2 - for add new task 3 - for delete task\n');
//     const ISOPTIONVALID = ( option == 1 || option == 2 || option == 3 );
//     if (!ISOPTIONVALID) {
//         option = prompt(`Choose a valid option:`);
//     } else {switch (option) {
//         case '1': 
//             console.log('change status');
//             break;
//         case '2':
//             console.log('add task');
//             break;
//         case '3':
//             console.log('delete task');
//             break;
//     }
// }
// menu();
let status;
const TODO = 'To Do';
const INPROGRESS = 'In Progress';
const DONE = 'Done';

function promptUserStatus() {
    const prompt = require('prompt-sync')();
    status = prompt('Status: ');
    let IS_STATUS_VALID = ( status === TODO || status === INPROGRESS || status == 'Done' );
    while (!IS_STATUS_VALID) {
        console.log(`Invalid status. Choose one of "To Do", "In Progress", "Done"`);
        status = prompt('Status: ');
        IS_STATUS_VALID = ( status === TODO || status === INPROGRESS || status == 'Done' );
        console.log(status);
    }
}

promptUserStatus();
console.log(status);

// function promptUser() {
//     const prompt = require('prompt-sync')();
 
//     task = prompt('Task: ');
//     stat = prompt('Status: ');
//     const ISSTATUSVALID = (stat === INPROGRESS || stat === DONE || stat === TODO || stat === '');
//     while (!ISSTATUSVALID) {
//         console.log('Invalid status');
//         stat = prompt('Status: ');
//     }
//     console.log('status is valid');
// }

// promptUser();