//hw: add field 'id'
//hw2: make price object {value: 1.00, currency: USD}
//hw3: remake print alogn

//1. Salad            15.00MDL
//2. Soup             25.00MDL

module.exports = class Item {
    constructor (id, name, {price, currency} ) {
        this.id = id;    
        this.name = name;
        this.price = {
            value : price,
            currency : currency
        };
    }


    print() {
        return  `${this.id}.  ${this.name.padEnd(10)} ${this.price.value < 10 ? this.price.value =  `0${this.price.value}.00` : `${this.price.value}.00`}${this.price.currency}\n`  
               
            }
        }
