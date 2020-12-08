// Create some variables for creating the address we will send a message to
var baseUrl = "https://musicbrainz.org/ws/2/artist?query=";

// Create a variable (object) for connections to planet Earth to be used later
var anomwtang = new XMLHttpRequest();
// Define the function that is called when the connection object has new information
anomwtang.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) { // We got a good response
        var parser = new DOMParser(); // Used to translate the response into an object in javascript 
        var response = parser.parseFromString(anomwtang.responseText,"text/xml");
        // Put together the output string
        var output = response.all[3].innerHTML + ", " + response.all[6].innerHTML;
        // Show the output in the console
        console.log(output);
        // Update the HTML element text with the output 
        document.getElementById("artistOutput").innerHTML = output;
    }
};

// Function used when a key is pressed on <input>
function sendRequest(event) {
  if (event.keyCode === 13) { // If key pressed was the Enter key
    var artist = document.getElementById("artistInput").value;
    anomwtang.open("GET", baseUrl + artist, true);
    anomwtang.send();
  }
}