// Ok, inventing startups is difficult
// let's put things together and get a computer
// to do the job for us.

// First, let's define some seeds for our startups
var startups = ["Facebook", "Twitter", "Foursquare", "Yelp", "Snapchat", "Instagram", "Vivino", "Accenture", "Trustpilot", "Tripadvisor", "Tinder"];
var targets = ["Cats", "Foodies", "Fintech", "Books", "Bicycles", "Water", "Coffee", "Hipsters", "Designers", "Pizza", "Baby boomers"];
// We can define variables without values too.
// It's like buying boxes before you get stuff to put in them
// It might look silly, but it becomes super useful later.
var startup;
var target;

function printResultToConsole(startup, target) {
  console.log("I have a great idea for a startup! It's like " + startup + " but for " + target);
}

printResultToConsole(startups[3], targets[7]);

// This isn't very useful, let's make a function to get
// a random startup from our startups array
function getStartup() {
  var rng = Math.floor(Math.random() * startups.length);
  return startups[rng];
}

console.log(getStartup());

// Whoa, that was cool!
// Did you notice the return keyword? Functions are
// useful because they can perform a lot of operations and
// then just respond with the final result when they're done:
// we call this "a return value"
// Back to the recipe analogy it is like making broth,
// makeBroth(chicken, carrots, celery) would be a function
// that takes a bunch of ingredients and then does stuff
// with them until it returns a nice, warm, broth.

// Ok, enough food.
// Let's make another function to get a random target
// for our pitch.
function getTarget() {
  var rng = Math.floor(Math.random() * targets.length);
  return targets[rng];
}

console.log(getTarget());

// Remember that printResultToConsole function we
// defined before? Let's use it together with our
// new functions
printResultToConsole(getStartup(), getTarget());
