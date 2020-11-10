"use strict";
var character = "mario";
console.log(character);
var inputs = document.querySelectorAll("input");
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circumference = function (radius) {
    return 2 * radius * Math.PI;
};
console.log(circumference(2.5));
var mixed = ["aa", 10, "bb", 4];
mixed.push("3");
mixed = ["3", "human", 32];
var randomObject = {
    type: "yay?",
    name: "not applicable",
    color: false,
};
console.log(randomObject);
var greet = function (name) {
    console.log("Hello, " + name + "!");
};
greet("KK");
greet(12);
//Function signature (prototype in C++ speak)
var arithmetic;
//Now actually define the function
arithmetic = function (a, b, operation) {
    if (operation === "add") {
        return a + b;
    }
    else {
        return a - b;
    }
};
