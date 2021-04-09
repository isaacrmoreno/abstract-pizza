function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

let testPizza = new Pizza("Large", "Pepperoni") 
console.log('I would like a ' + testPizza.size + " " + testPizza.toppings + ' please.')

