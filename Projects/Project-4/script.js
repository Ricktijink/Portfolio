var theHeadline = document.getElementById("headline"); // Gets the h1 headline and stores it in a variable
var theButton = document.getElementById("button"); // Gets the button and stores it in a variable
var theList = document.querySelector("#the-list"); // Gets the UL and stores it in a variable
var listItems = document.querySelectorAll("#the-list li"); // Gets the li's from the UL and stores it in a variable
var itemNumber = 5; // Variable used for numbering items, starts at 5 because the UL has 4 items already

// Adds a click eventlistener to the UL and starts activeItem function on click
theList.addEventListener("click", activeItem);


function activeItem(e) {
   // Checks if the clicked item is a li and if true runs code inside
   if (e.target.nodeName == "LI") {
      // Changes h1 content to clicked li content
      theHeadline.innerHTML = e.target.innerHTML;

      // For loop runs through all children of UL (the li's)
      for (i = 0; i < e.target.parentNode.children.length; i++) {
         // Removes the active class from each child
         e.target.parentNode.children[i].classList.remove("active");
      }
      // Adds the active class for the clicked target
      e.target.classList.add("active")
   }
}

// Adds a click evenlistener to the button and starts the addNewItem function on click
theButton.addEventListener("click", addNewItem);

function addNewItem() {
   // Adds a list item entry "+=" and the itemNumber variable gets used here and incremented
   theList.innerHTML += "<li>Item " + itemNumber + "</li>";
   itemNumber++;
}
