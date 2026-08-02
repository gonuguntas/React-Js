HTML works in browser (Browser Rendering Engine ) Blink: google chrome, MS Edge  WebKit: Appl Safari
1) Parsing: The browser reads HTML text and converts it into a structural tree map called the DOM (Document Object Model).
2) Styling: It reads CSS to build a style map called the CSSOM
3) Combining: It merges the DOM and CSSOM to create a Render Tree of visible elements.
4) Layout: It calculates the exact size and position of each element on the screen.
5) Painting: It draws pixels, colors, text, and images onto your screen.

HTML 5

HTML semantic tags like <article> and <section> tell search engines how a web page is built. They separate the main story from side parts, helping Google read content fast, index it correctly, and show it to users looking for those exact topics



Improved Accessibility (A11y): Assistive tools and screen readers use semantic tags as landmarks. They help people with visual impairments jump straight to the main text or navigation menu



Semantic elements tell browsers what kind of content is inside them, like text, a menu, or a main story. This helps small mobile phones and other devices show the page correctly without breaking the layout.



Clear Meaning:    Tags like <article>, <nav>, and <footer> explain the role of the code to the browser.

Easy Reading on Mobile:    Small screens use these clear tags to fit text and menus onto tiny displays.

Better Speed:     Devices waste less time guessing how to show the page.

Helpful for All Users:    Screen readers for blind users work much better with clear tags.



Native validation:             Fields like type="email" or type="url" automatically check if text fits the correct format without extra code.

Smart mobile keypads:          Mobile phones show specific key layouts, like a number pad for type="number" or type="tel", and an @ symbol key for type="email".

Built-in visual pickers:        Browsers provide ready-to-use tools like calendar pop-ups for type="date" and color selection boxes for type="color"







JAVASCRIPT CLOSURE :   A closure in JavaScript is a function that remembers and accesses variables from its outer scope, even after the outer function has finished executing



function createCounter() {

&#x20; let count = 0; // Outer variable



&#x20; // This inner function creates a closure

&#x20; return function() {

&#x20;   count++; // Accesses outer variable

&#x20;   return count;

&#x20; };

}



const counter = createCounter();



// Call the inner function

console.log(counter()); // Output: 1

console.log(counter()); // Output: 2

console.log(counter()); // Output: 3



Advantages:  Data privacy: Closures allow you to create private variables that cannot be accessed or modified directly from outside the function



State preservation in programming is a function's ability to save data internally so it can remember past runs without using messy global variables



A function factory is a function that builds and returns other custom-made functions. You give a setting or rule to the outer function, and it outputs a brand new inner function tailored to that specific setting





function currying in JavaScript



Currying is a technique that changes a function taking multiple arguments all at once into a chain of functions that each take exactly one argument at a time.

function regularMultiply(a, b, c) {

 return a \* b \* c;

}

console.log(regularMultiply(2, 3, 4)); // Output: 24



// Curried Function

function curriedMultiply(a) {

&#x20; return function(b) {

&#x20;   return function(c) {

&#x20;     return a \* b \* c;

&#x20;   };

&#x20; };

}

console.log(curriedMultiply(2)(3)(4)); // Output: 24



Modern syntax

const arrowMultiply = a => b => c => a \* b \* c;

console.log(arrowMultiply(2)(3)(4)); // Output: 24



Why Use Currying? Code reusability: It allows you to create specialized, partial functions (partial application) by locking in the first few arguments.Separation of concerns: You can pass arguments at different times or from different parts of your application as they become available.



Recursive function

A recursive function is a function that calls itself until it reaches a specific stopping point. It is used to break down complex, repetitive problems into smaller, identical tasks



function factorial(n) {

&#x20; // 1. Base Case: Stop when n drops to 1 (or 0)

&#x20; if (n <= 1) {

&#x20;   return 1;

&#x20; }  

&#x20; // 2. Recursive Case: Call itself with a smaller number (n - 1)

&#x20; return n \* factorial(n - 1);

}

console.log(factorial(5));





Deep Copy :  A deep copy means creating a brand-new object or array where all nested values, arrays, or objects are also completely duplicated. Changes made to the cloned copy will never affect the original data structure.



&#x20;Spread Operator (...) ------- The spread operator only creates a shallow copy. It duplicates the top-level properties, but any nested objects or arrays still point to their original memory addresses.

&#x20;**Use this only if your data object is completely flat (contains no nested arrays or objects).**



JSON.parse(JSON.stringify())   :   It corrupts complex data types. It drops JavaScript functions, drops undefined values, turns Date objects into plain ISO strings, and crashes entirely on circular references.

**Use only for quick, simple data objects containing strictly strings, numbers, booleans, and nulls.**





Native structuredClone()    :  This is the modern, native JavaScript standard API for deep cloning. It properly clones complex types (like nested arrays, objects, Date, Map, Set, RegEx) and handles circular items seamlessly.

**It cannot copy JavaScript functions or DOM nodes.**



**Custom Recursive Function**  :  A custom function loops through properties manually. If it finds a nested object, it calls itself recursively to clone it down the tree.


var let  const 
1) scope - var - function level/global level   let - block level   const - block level
2) Reassignment   - var-allowed   let - allowed    const - not allowed
3) Redeclaration  - var - allowed   let - No   const - No
4) Hoisted Value    - var - undefined     let/const  - Uninitialized (TDZ)
5) Initial Value Required  -   var - No   let - No   const - Yes
6) The Temporal Dead Zone (TDZ)  - var - No TDZ  let/const - Yes it enters into TDZ
7) Behavior in Loops   -   var - maintains a single shared variable instance across loop iterations, which frequently causes bugs in asynchronous code.  let - let creates a brand-new variable binding for every single iteration of a loop.











