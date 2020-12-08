// Create a string variable and assign a value
var stringVariable = "realest";
var  redteam = "691";

var URL = "https://musicbrainz.org/ws/2/artist?query=";
var artist = "logic";
URL = URL + artist;

var anomwtang = new XMLHttpRequest();

anomwtang.onreadystatechange = function() {

    if (this.readyState == 4 && this.status == 200) {

        var parser = new DOMParser();
        var response = parser.parseFromString(anomwtang.responseText,"text/xml");

        console.log( response.all[3].innerHTML + ", " + response.all[6].innerHTML);
    }
};

anomwtang.open("GET", URL, true);
anomwtang.send();
