// Business logic for pizza
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = toppings;
}

let testPizza = new Pizza("large", "pepperoni") 
// console.log("I would like a " + testPizza.size + " " + testPizza.toppings + " please.")










// Pizza.prototype.addToppings = function(topping) {
//   this.topping[topping.firstTopping] = topping;
// };

// // Business logic for toppings

//   function Toppings(firstTopping, secondTopping, thirdTopping) {
//     this.firstTopping = firstTopping;
//     this.secondTopping = secondTopping;
//     this.thirdTopping = thirdTopping;
//   }

//   let pizza = new Pizza();
//   let isaacPizza = new Toppings("sausage", "black olives")

//   Pizza.addToppings(isaacPizza);

// Business Logic for AddressBook ---------
function AddressBook() {
  this.contacts = {};
}

AddressBook.prototype.addContact = function(contact) {
  this.contacts[contact.firstName] = contact;
};

// Business Logic for Contacts ---------
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};