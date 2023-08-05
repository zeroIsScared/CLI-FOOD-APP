import fs  from 'fs';
import {map} from './map.js';
//import * as CLAZZ from 'cLAZZ';

//Save to file
export const save = (data, type)=> {
    data.type = type

    fs.writeFileSync(
        './persistance/data/food.json',
         JSON.stringify(data));
}

//Load to file

export const load = async()=> {

   let data = JSON.parse(
    fs.readFileSync(
        './persistance/data/food.json'
    ).toString()
   )

  
   const CLAZZ = await import (map[data["type"]]);
   console.log(CLAZZ)
   let obj = new CLAZZ (data.name);
   return obj;    
}
