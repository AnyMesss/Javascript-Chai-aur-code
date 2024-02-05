//   Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100 //JavaScript is a dynamically typed language, which means that data types of variables are determined by the value they hold at runtime and can change throughout the program as we assign different values to them.
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

const bigNumber = 288882838222n

// Reference (Non Primitive)

// Array, Objects, Functions


const heros = ["shaktiman","naagraj","doga"]
let obj = {
    name:"Animesh",
    age: 22,

}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof bigNumber);