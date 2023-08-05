
import {Food} from './food/Food1.js';
import {save, load} from './persistance/index.js';

save( new Food('Salad'), "Food");

let data= load();


console.log(data)
//console.log(data.print())