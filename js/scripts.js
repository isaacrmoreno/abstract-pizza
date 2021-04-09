// Business logic for pizza

function Pizza() {
  this.topping = {};
}

Pizza.prototype.addTopping = function(topping) {
  this.topping[topping.pepperoni] = topping;
};

function Topping(toppingOne, toppingTwo, toppingThree) {
  this.toppingOne = toppingOne;
  this.toppingTwo = toppingTwo;
  this.toppingThree = toppingThree;
}

// function Topping(pepperoni, mozzarellaCheese, blackOlives, jalapenos, basil) {
//   this.pepperoni = pepperoni;
//   this.mozzarellaCheese = mozzarellaCheese;
//   this.blackOlives = blackOlives;
//   this.jalapenos = jalapenos;
//   this.basil = basil;
// }















// function Pizza() {
//   this.size = {};
//   this.topping = {};
// }

Pizza.prototype.chooseTopping = function(topping) {
  this.topping[topping.zzzz] = topping
}

// Pizza.prototype.chooseSize = function(size) {
//   this.size[size.xxxxx] = size
// }

function Pizza(size, topping) { 
  this.size = size;
  this.topping = topping;
}

let testpizza1 = new Pizza("small", "pepperoni")


























// test pizza 1?
// let pizza = {}

// pizza.topping = ["Pepperoni", "Mozzarella Cheese", "Black Olives", "Jalapenos", "Basil"]  

// console.log(pizza.topping[0])

// test pizza 2
// let testPizza = new Pizza("large", "pepperoni") 

// test pizza 3
// let testPizza2 = new Pizza("medium", ["pepperoni,", "mozzarella cheese", "black olives"])

// function pizzaSize(size) {
//   return `I would like a ${size} pizza`
// }

// function pizzaTopping(topping) {
//   return `with ${topping} please.`
// }

// size 
// let small = {size: "small"}
// let medium = {size: "medium"}
// let large = {size: "large"}

// let size = {size: [small, medium, large]}

// topping
// let pepperoni = {topping: "pepperoni"}
// let mozzarellaCheese = {topping: "mozzarella cheese"}
// let blackOlives = {topping: "black olives"}
// let jalapenos = {topping: "jalapenos"}
// let basil = {topping: "basil"}

// let topping = {topping: [pepperoni, mozzarellaCheese, blackOlives, jalapenos, basil]}

// let pizza = [size, topping]
// console.log(pizza) -- returns undefined whenever I want to add dot notation after (pizza) to nest deeper into array? // rename topping variable or name within {} to avoid confusion. 


// User Interface Logic 
// $(document).ready(function(){
//   event.preventDefault()
// })