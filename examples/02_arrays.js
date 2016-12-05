// If variables are like boxes, arrays are like shelves
// You can put many variables (or their contents) inside
// of them, and then refer to them by their position
// Let's begin by reusing our startup from last time,
// and let's give it a startupy name this time:
var purrter = "Twitter for cats";

// And now let's imagine we were really successful and have
// founded many others since then, and want to store them
// together in an array.
var petalvidsor = "Tripadvisor for flowers";
var myStartups = [purrter, petalvidsor, "Accenture for food"];

// Arrays can hold values that don't belong to any variable
// too, in this case all items are strings, but they don't
// have to be the same type. Arrays can even contain
// other arrays!
// Let's see what's inside of myStartups now.
console.log(myStartups);

// Success! Can you see our three startups printed nicely
// next to each other in the order we created them?

// Now we have neaty stored each of our startups in a nice
// place and we can get them through their location.
// To do this we refer to the position (we'll call it "index")
// of the element in our array.
// Note: Array positions start at number 0
console.log(myStartups[0]);
console.log(myStartups[1]);
console.log(myStartups[2]);
console.log(myStartups[7]); // This will print 'undefined'

// Success! When we asked for each of our startups in order
// we got their name, and when we asked for an index
// in our array that doesn't have anything in it, we
// got 'undefined', meaning that JavaScript didn't know
// what should be there.
