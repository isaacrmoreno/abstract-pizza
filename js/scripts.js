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
// small: $7, medium: $10, large: $13

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
let basil = {topping: "basil"}

let topping = {topping: [pepperoni, mozzarellaCheese, blackOlives, jalapenos, basil]}

let pizza = [size, topping]
console.log(pizza) // returns undefined whenever I want to add .notation after pizza to nest deeper into array? // rename topping variable or name within {} to avoid confusion. 


// User Interface Logic 

$(document).ready(function({
  event.preventDefault()
  
}))