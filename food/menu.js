//this module DEPENDS on Item
const Item = require("./Item");

module.exports.menu = 
    [
       new Item(1, 'Salad', {price: 15.00, currency: "MDL"}),
       new Item( 2, 'Soup', {price: 25.00, currency: "MDL"}),
       new Item(3,  'Bread', {price: 5.00, currency: "MDL"}),
    ]
