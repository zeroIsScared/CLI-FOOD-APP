export  class Food {
    constructor (name, price ) {            
        this.name = name; 
        this.price = price;         
    }
    print() {
        return  `${{...this.name}}  ${this.price}\n`  
               
     }
}