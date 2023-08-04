
import {menu, printMenu} from './food'



function mainLoop() {
    let option = printMenu(menu, (option)=>{
       
        const dishIds = menu.map(element => element.id )    
                   
        
        if( option != ''){

            //hw4: !! string input -> integer number
            // check error -> inexistent option
            
                setTimeout(mainLoop, 500); 
           
            if(dishIds.includes(Number(option)) ){

                console.log(`You've chosen ${option}`);

            } else{

                console.log(`You've chosen an inexistent option!`);                
            }       
        }        
    });
}
  

mainLoop();


