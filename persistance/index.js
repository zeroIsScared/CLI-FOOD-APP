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

export const load = ()=> {

   let data = JSON.parse(
    fs.readFileSync(
        './persistance/data/food.json'
    ).toString()
   )

  console.log(CLAZZ);
   const Clazz = require (map[data["type"]]);
   let obj = new CLAZZ (data.name);
   return obj;     
}
