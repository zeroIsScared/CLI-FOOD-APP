//hw: add field 'id'
//hw2: make price object {value: 1.00, currency: USD}
//hw3: remake print alogn

//1. Salad            15.00MDL
//2. Soup             25.00MDL

export class Item {
    constructor (id, name, {price, currency} ) {
        this.id = id;    
        this.name = name;
        this._price = {
            value : price,
            currency : currency
        };
        this.ids = [];
        this.addId = () => {
         this.ids.push(id);
        }        
    }

    get price () {
        const price = this._price.value < 10 ? `0${this._price.value}.00` : `${this._price.value}.00`;
           return  price;
    }


    print() {
        return  `${`${this.id}. ${this.name}`.padEnd(15)} ${this.price}${this._price.currency}\n`  
               
     }
 }
