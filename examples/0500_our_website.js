// This time we'll introduce two new technologies: HTML and CSS
// Open the files with those extensions to learn more about them and come back

// Have you finished with the HTML and CSS files? Cool! Let's make stuff happen
// First, let's bring back our variables, arrays and functions from the past
// examples

var startups = ["Facebook", "Twitter", "Foursquare", "Yelp", "Snapchat",
                "Instagram", "Vivino", "Accenture", "Trustpilot", "Tripadvisor",
                "Tinder", "Tumblr", "YouTube", "Netflix", "Ebay"];
var targets = [ "Cats", "Foodies", "Books", "Bicycles", "Board Games", "Coffee",
                "Hipsters", "Designers", "Pizza", "Baby Boomers", "Knitting",
                "Nerds", "Cool People", "Artists"];
var startup;
var target;

function getStartup() {
  var rng = Math.floor(Math.random() * startups.length);
  return startups[rng];
}

function getTarget() {
  var rng = Math.floor(Math.random() * targets.length);
  return targets[rng];
}

// You might have noticed that we ignored printResultToConsole() this time
// That's because we won't be printing stuff to the console, instead we will
// Display it in our website

function displayRandomStartup(startup, target) {
  // document refers to the current html document loaded into the browser
  // querySelector is a function that allows to get an element by describing it
  // this time we're only using a class name.
  // innerHTML is a property of an element that refers to all its contents in
  // HTML. By equaling it to something else we're replacing everything inside it
  document.querySelector('.rsg__result__startup').innerHTML = startup;
  document.querySelector('.rsg__result__target').innerHTML = target;
}

// Now let's make our generate a new startup every time we click it, and display
// it in the browser using our displayRandomStartup function.
// addEventListener is a function that allows us to tell an element what to do
// when an event happens to them.
// It takes two parameters: An event name 'click' this time, and a function to
// execute whenever that event happens.
// In this case we want it to get a new random startup, a new random target and
// then display both in our website. We'll use the functions we defined before
// to do this.
document.querySelector('.rsg__actions__generate').addEventListener('click', function() {
  startup = getStartup();
  target = getTarget();
  displayRandomStartup(startup, target);
});

// Congratulations!! 🎉 You just finished writing your first web application
// Maybe you even got a startup idea to keep working on it 😉.
// Thank you for participating.
// - The gals and guys at Codher and Accenture.
