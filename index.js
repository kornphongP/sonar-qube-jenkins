function sayHello() {
    console.log("Hello from lab branch!");
}
sayHello();

// ------------------------------
// Code Smells / Warnings
// 1. Unused variable
const unusedVar = 42;

// 2. Using var instead of let/const (considered legacy)
var legacyVar = "I am old style";

// 3. Function without proper return (SonarQube might warn if function could return something)
function unusedFunction(a, b) {
    return a + b; // but never called
}
