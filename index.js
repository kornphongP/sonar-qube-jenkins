function sayHello() {
    console.log("Hello from lab branch!");
}
sayHello();

// Code Smells / Warnings
const unusedVar = 42;

var legacyVar = "I am old style";

function unusedFunction(a, b) {
    return a + b;
}

function unusedFunction() {
  let a = 1;
}