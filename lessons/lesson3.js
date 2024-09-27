//Objects

var customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Volvo", "Toyota", "Tesla"]
}
//Dot Notation
customer.firstName = "Mike"
//Bracket Notation
customer["lastName"] = "Silver"
console.log(`${customer.firstName} ${customer.lastName}`) //Interpolation

//Arrays
var car = ["Volvo", "Toyota", "Tesla"]
car[1] = "BMW" //changing/replacing index/position one with another value
console.log(car[0]) //reference index and position 1 on the list
console.log(car[1]) //reference index and position 2 on the list
console.log(customer.cars[0])