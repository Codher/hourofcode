// So far we've written and read our code from top to bottom
// and only used it once. This is very useful to explain
// basic concepts, but would become really hard to reason
// about if we had to write it like that all the time.
//
// Introducing: Functions to the rescue!
// Functions are a super important concept in programming
// they are pieces of code with a name, that you can call
// from anywhere in your application.
//
// They are very similar to the cooking techniques section
// of recipe books.
//
// Functions have four parts:
// The keyword function
// The function name, in this case sayHello
// The arguments, in this case name
// The functiom block, everything between curly braces {}
function sayHello(friend) {
  console.log('Hello, ' + friend);
}

// As you can see, this hasn't printed anything yet.
// That is because functions aren't executed until you
// call them. Let's do that now:
sayHello("Adele");

// When you call a function, you should replace the arguments
// with the values you wan't the function to use.
// You can think of them as variables that only exist
// inside the function block (everything between {})
console.log('Hello, ' + friend);
// So if we try to use name afterwards, it will not be defined
// and that will cause errors, so let's go back and
// delete that line

// Functions are super useful because they allow us to isolate
// pieces of code that we can reuse in our application

// Let's make something more useful for our application
function sayPitch(startup, friend) {
  console.log("Hey " + friend + "! I'm looking for a cofounder for a new startup. It is like " + startup);
}

// Programming languages come with a ton of useful features
// A very common one is called a for loop, it is really
// useful because it allows us to execute the same piece
// of code many times while changing values without
// having to write a lot of code

// Let's bring our startups array back for this example
var purrter = "Twitter for cats";
var petalvidsor = "Tripadvisor for flowers";
var myStartups = [purrter, petalvidsor, "Accenture for food"];

for (var i = 0; i < myStartups.length; i++) {
  sayPitch(myStartups[i], "Mark");
}

// sayPitch is a very simple function, so it doesn't seem
// like it's saving a lot of effort. But next time we'll
// see the power of functions more clearly.
