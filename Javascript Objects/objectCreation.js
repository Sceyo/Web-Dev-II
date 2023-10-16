// #1
const person = {
    name: "Francis",
    age: 22,
    occupation: "Student", 
};

// #2
console.log(person.age);

// #3
person.hobbies = ["Basketball","Badminton","Gaming","Cycling"];
person.occupation = "Unemployed";

// #4
const calculator = {
    num1: 13,
    num2: 27,

    add: function(){
        return this.num1 + this.num2;
    },

    multiply: function(){
        return this.num1 * this.num2;
    }
};

console.log(calculator.add());
console.log(calculator.multiply());

// #5
const student = {
    name: "Louis",
    age: 22,
    grades: [87,80,91,92,79],
};

let total = 0;
let avg = 0;

for(let i = 0; i < student.grades.length; i++){
    total += student.grades[i];
}
avg = total/student.grades.length;
console.log(avg);

// #6

const Vehicle = {
  /*  constructor(make,model){
        this.make = make;
        this.model = model;
    },
*/
    make: " ",
    model: " ",

    getDetails: function(){
        return "Make: " + this.make + " Model: " + this.model;
    },
};

const car = Object.create(Vehicle);
car.year = 0;

car.getDetails = function(){
    return ("Make: " + this.make + " Model: " + this.model + " Year: " + this.year
    );
};

Vehicle.make = "Nissan";
Vehicle.model = "Skyline GT-R";

car.year = 1990;

console.log(car.getDetails());
console.log(Vehicle.getDetails());

// #7

function calculateTotal(cart){
    let overallCost = 0;

    for(const item in cart){
        if(cart.hasOwnProperty (item)){
            const price = cart[item].price;
            const quantity = cart[item].quantity;
            overallCost = price * quantity;
        }
    }
    return overallCost;
}

const shoppingCart = {
    Item1: {
        name: "Cloud 9",
        price: 10,
        quantity: 5
    },
    Item2: {
        name: "Presto Chocolate",
        price: 8,
        quantity: 14
    },
    Item3: {
        name: "Nature Spring 500ml",
        price: 20,
        quantity: 20
    }
};


let cost = calculateTotal(shoppingCart);
console.log(cost);

// #8

const Address = {
    street: " ",
    city: " ",
    state: " ",
    zip: " ",

};

const Person = {
    name: "Francis Aliser",
    address: "Mirasol St. Capitol Site, Cebu City, Cebu, 6000",
};

function breakItDown(Person){
    const components = Person.address.split(", ");
    Address.street = components[0];
    Address.city = components[1];
    Address.state = components[2];
    Address.zip = components[3];
};

breakItDown(Person);
console.log(Address);