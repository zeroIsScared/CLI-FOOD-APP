
import {menu, printMenu} from './food'


function mainLoop() {
    let option = printMenu(menu, (option)=>{
       
            //
                   
        
        if( option != ''){

            //hw4: !! string input -> integer number
            // check error -> inexistent option
            console.log(typeof option )
            console.log( Number(option) )
            if(typeof Number(option) !== 'number' ){
                console.log(`You've chosen an inexistent option!`);
            } else{

                console.log(`You've chosen ${option}`);
                setTimeout(mainLoop, 500);
            }       
        }        
    });
}
  

mainLoop();


