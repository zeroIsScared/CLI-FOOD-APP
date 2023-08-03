
let {menu, printMenu, printMessage} = require('./food')


function mainLoop() {
    option = printMenu(menu, (option)=>{
        console.log(`You've chosen ${option}`);
        if( option != ''){

            //hw4: !! string input -> integer number
            // check error -> inexistent option
            setTimeout(mainLoop, 500);
        }        
    });
}
  

mainLoop();


