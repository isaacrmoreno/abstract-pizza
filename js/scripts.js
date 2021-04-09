// Business logic for pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

// function Pizza() {
//   this.size = [];
//   this.toppings = [];
// }

let testPizza = new Pizza("large", "pepperoni") 
console.log("I would like a " + testPizza.size + " " + "pizza with " + testPizza.toppings + " please.")

// use size to define cost


// size 
let small = {size: "small"}
let medium = {size: "medium"}
let large = {size: "large"}

let size = {size: [small, medium, large]}

// toppings
let pepperoni = {topping: "pepperoni"}
let mozzarellaCheese = {topping: "mozzarella cheese"}
let blackOlives = {topping: "black olives"}
let jalapenos = {topping: "jalapenos"}
let basil = {topping: "sausage"}

let toppings = {toppings: [pepperoni, mozzarellaCheese, blackOlives, jalapenos, basil]}

let pizza = [size, toppings]

console.log(pizza)
