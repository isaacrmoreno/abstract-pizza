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
    } else if (this.size === "3"); { 
        this.price += 15;
    } 
    for (let i = 0; i < this.topping.length; i++) {
      this.price += 1; 
    }
    return this.price;
  }
  
// User Interface Logic 
$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault()

    let size = parseInt($("#size").val()); 
    let topping = $("input:checkbox[name=toppings]:checked").map(function() {
      return this.value; 
    }).get();

      let newPizza = new Pizza(size, topping);
      let totalPrice = newPizza.calculatePrice(); 

      $("#totalPrice").text(`$${totalPrice}.00`)

  });
});