// Array to hold quotes
var quotes = [
   'I love you the more in that i believe you had liked me for my own sake and for nothing else',
   'But man is not made for defeat. A man can be destroyed but not defeated',
   'When you reach the end of your rope, tie a knot in it and hang on',
   'There is nothing permanent except change',
   'You cannot shake hands with a clenched fist',
   'Let us sacrifice our today so that our children can have a better tomorrow',
   'It is better to be feared than loved, if you cannot be both',
   'Learning never exhausts the mind',
   'There is no charm equal to the tenderness of heart',
   'All that we see or seem is but a dream within a dream'
]

// Generate first random quote before pressing button
var randomQuote = Math.floor(Math.random() * (quotes.length));
document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote];

// Pull quote from array by generating a randomnumber and adding pulled quote to div
function newQuote() {
   // Generate a random number depending on the length of the quotes array
   var randomQuote = Math.floor(Math.random() * (quotes.length));
   // Pass retrieved quote from array to div
   document.getElementById('quoteDisplay').innerHTML = quotes[randomQuote];
}

// Array with image paths
var images = [
   '<img src="img/quoteimage1.jpg" alt="quote image">',
   '<img src="img/quoteimage2.jpg" alt="quote image">',
   '<img src="img/quoteimage3.jpg" alt="quote image">',
   '<img src="img/quoteimage4.jpg" alt="quote image">',
   '<img src="img/quoteimage5.jpg" alt="quote image">'
]

// Pull quote from array by generating a randomnumber and adding pulled quote to div
function newIMG() {
   // Generate a random number depending on the length of the quotes array
   var randomImage = Math.floor(Math.random() * (images.length));
   // Pass retrieved quote from array to div
   document.getElementById('quoteIMG').innerHTML = images[randomImage];
}
