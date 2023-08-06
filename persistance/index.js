import fs  from 'fs';
import {map} from './map.js';
//import * as CLAZZ from 'cLAZZ';

//Save to file
export const save = (object, path)=> {
    object.type = object.constructor.name 

    fs.writeFileSync(
        path,
         JSON.stringify(object));
}

// //Load to file

export const load = async(path)=> {

   let data = JSON.parse(
    fs.readFileSync(
        path
    ).toString()
   )

  
   const module= await import (map[data["type"]]);
   const CLAZZ = module[data["type"]];
   console.log(module)
   //pass all the properties
   let obj = new CLAZZ ({...data});
   return obj;    
}
