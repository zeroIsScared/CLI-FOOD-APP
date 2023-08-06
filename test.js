
import {Food} from './food/Food1.js';
import {save, load} from './persistance/index.js';

 save( new Food('Salad', 1000),'./persistance/data/food.json');

let data= await load('./persistance/data/food.json');


console.log(data)
//console.log(data.print())


