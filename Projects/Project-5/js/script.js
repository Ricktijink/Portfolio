// Listen for form submit
document.getElementById('myform').addEventListener('submit', saveBookmark);

// Save bookmarks
function saveBookmark(e){
   // Get form values and store in variables
   var siteName = document.getElementById("siteName").value;
   var siteUrl = document.getElementById("siteUrl").value;

   // Assign variables with input values to a bookmark object
   var bookmark = {
      name: siteName,
      url: siteUrl
   }

   // Check if form fields are filled + give alert if one is empty
   if (!siteName || !siteUrl) {
      alert("Please fill in both form fields before pressing the submit button!")
      return false;
   }

   // Check if bookmark is NULL
   if (localStorage.getItem('bookmarks') === null) {
      // Init an empty array
      var bookmarks = [];
      // Adds to the array
      bookmarks.push(bookmark);
      // Add to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   } else {
      // Get bookmarks from localStorage
      var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
      // Add bookmark to array
      bookmarks.push(bookmark);
      // Re set back to localStorage
      localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
   }

   // Re-fetch Bookmarks
   fetchBookmarks();

   // Prevent form from submitting and refeshing the page
   e.preventDefault();
}



// Fetch the bookmarks
function fetchBookmarks(){
   // Get bookmarks from localStorage
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   // Get bookmarksResults element
   var Results = document.getElementById('bookmarksResults');

   Results.innerHTML = '';

   // Output the data from localStorage with a for loop
   for (var i = 0; i < bookmarks.length; i++) {
      // Store name and url data in seperate variables
      var name = bookmarks[i].name;
      var url = bookmarks[i].url;

      // Delete link has an onclick that refers to the deleteBookmark function and passes the url of the clicked delete button bookmark
      Results.innerHTML += '<div class="well">' +
                              '<h3>' + name +
                              '</h3>' +
                              '<a class="btn btn-default" target="_blank" href="'+url+'">Visit</a> ' +
                              '<a onclick="deleteBookmark(\''+url+'\')" class="btn btn-danger"  href="#">Delete</a> ' +
                              '</div>';
   }
}

// Delete bookmarks function with the url passed with it as parameter to know which bookmark needs to be deleted
function deleteBookmark(url){
   // Get bookmarks from localStorage
   var bookmarks = JSON.parse(localStorage.getItem('bookmarks'));
   // Loop through bookmarks
   for (var i = 0; i < bookmarks.length; i++) {
      if (bookmarks[i].url == url) {
         // Remove bookmark
         bookmarks.splice(i, 1);
      }
   }
   // Re set back to localStorage
   localStorage.setItem('bookmarks', JSON.stringify(bookmarks));

   // Re fetchBookmarks
   fetchBookmarks();
}
