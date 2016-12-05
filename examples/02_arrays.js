// If variables are like boxes, arrays are like shelves
// You can put many variables (or their contents) inside
// of them, and then refer to them by their position
// Let's begin by reusing our variable from last time:
var myStartup = "Twitter for cats";

// And now let's imagine we were really successful and have
// founded many others since then, and want to store them
// together in an array.
var myNewStartup = "Tripadvisor for flowers";
var myStartups = [myStartup, myNewStartup, "Accenture for food"];
// Arrays can hold values that don't belong to any variable
// too, in this case all items are strings, but they don't
// have to be the same type. Arrays can even contain
// other arrays!
// Let's see what's inside of myStartups now.
console.log(myStartups);
// Success!

// Now we have neaty stored each of our startups in a nice
// place and we can get them through their location.
// To do this we refer to the position (we'll call it "index")
// of the element in our array.
// Note: Array positions start at number 0
console.log(myStartups[0]);
console.log(myStartups[1]);
console.log(myStartups[2]);
console.log(myStartups[7]);
