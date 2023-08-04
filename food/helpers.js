//menu functionality
import readline from 'readline'
//const  readline = require('readline');

const rl = readline.createInterface ({
    input: process.stdin,
    output: process.stdout
});

const printMenu = ( menu , cb) => {
    menu.forEach(element => console.log(element.print()));
   
    rl.question(`Choose >> `, (option) =>{
        cb(option);
    })
}

const printMessage = ( message ) => {
   console.log(`${message} >> `)
}

export {printMenu, printMessage};