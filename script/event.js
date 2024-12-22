document.getElementById('year').innerHTML = new Date().getFullYear(); // Year only

function myEvent() {
    // body...
var date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = day + "-" + month + "-" + year;


if (month == "12" || month == "1") {
    document.getElementById("greetings").innerHTML = "Happy Anniversary!!! 🎉, Merry Christmas & Happy New Year!!! 🎇🧑‍🎄🎄";
} else if (month == "11") {
    document.getElementById("greetings").innerHTML = "Anniversary! LOADING... &#127881;&#x1F389;";
} else if (currentDate == "08-03-2025") {
    document.getElementById("greetings").innerHTML = "Happy Mother's Day!!! &#127881;&#x1F389;";
}  else if (currentDate == "09-04-2025") {
    document.getElementById("greetings").innerHTML = "Happy Easter Sunday!!! &#127881;&#x1F389;";
} else if (currentDate == "10-04-2025") {
    document.getElementById("greetings").innerHTML = "Happy Easter Monday!!! &#127881;&#x1F389;";
} else if (currentDate == "27-05-2025") {
    document.getElementById("greetings").innerHTML = "Happy Children's Day!!! &#127881;&#x1F389;";
} else if (currentDate == "18-06-2025") {
    document.getElementById("greetings").innerHTML = "Happy Father's Day!!! &#127881;&#x1F389;";
} else if (currentDate == "09-09-2025") {
    document.getElementById("greetings").innerHTML = "Happy Birthday, Eliazer!!! &#127881;&#x1F389;";
}

}

myEvent();




// YouTube video IDs
  var firstVideoId = "6CP08HOcWGY";
  var secondVideoId = "Fw-0wFkVhWk";

  // Function to create and append an iframe
  function createAndAppendIframe(videoId, containerId, autoplay = false) {
    // Create an iframe element
    var iframe = document.createElement("iframe");

    // Set the iframe attributes
    iframe.setAttribute("width", "560");
    iframe.setAttribute("height", "315");
    iframe.setAttribute(
      "src",
      `https://www.youtube.com/embed/${videoId}${autoplay ? "?autoplay=1" : ""}`
    );
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute("allowfullscreen", "true");

    // Append the iframe to the container
    document.getElementById(containerId).appendChild(iframe);
  }

  // Create and append iframes
  createAndAppendIframe(firstVideoId, "video-container", true);
  createAndAppendIframe(secondVideoId, "video-containerr");


