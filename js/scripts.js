// Business logic for pizza

function Pizza(size, topping) { 
  this.size = size;
  this.topping = topping;
  this.price = 0;
}

  Pizza.prototype.calculatePrice = function () {

    if (this.size === "1") {
        this.price += 8;
    } else if (this.size === "2") {
        this.price += 12;
    } else (this.size === "3") {
        this.price += 15;
    }
    return this.price
  }
  console.log(this.price)



// User Interface Logic 
$(document).ready(function(event) {
  event.preventDefault()


})