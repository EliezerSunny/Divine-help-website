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
} else if (currentDate == "4-2-2026") {
    document.getElementById("greetings").innerHTML = "Happy Birthday, Mr. Emmanuel Adetunji!!! &#127881;&#x1F389;";
} else if (currentDate == "8-3-2026") {
    document.getElementById("greetings").innerHTML = "Happy Mother's Day!!! &#127881;&#x1F389;";
} else if (currentDate == "18-3-2026") {
    document.getElementById("greetings").innerHTML = "Happy Birthday, Mrs Rachael Adetunji!!! &#127881;&#x1F389;";
    
} else if(currentDate == "9-4-2025") {
    document.getElementById("greetings").innerHTML = "Happy Birthday, Prophet Ezra Adetunji!!! &#127881;&#x1F389;";
} else if (currentDate == "20-4-2025") {
    document.getElementById("greetings").innerHTML = "Happy Easter Sunday!!! &#127881;&#x1F389;";
} else if (currentDate == "21-4-2025") {
    document.getElementById("greetings").innerHTML = "Happy Easter Monday!!! &#127881;&#x1F389;";
} else if (currentDate == "27-5-2025") {
    document.getElementById("greetings").innerHTML = "Happy Children's Day!!! &#127881;&#x1F389;";
} else if (currentDate == "18-6-2025") {
    document.getElementById("greetings").innerHTML = "Happy Father's Day!!! &#127881;&#x1F389;";
} else if (currentDate == "9-9-2025") {
    document.getElementById("greetings").innerHTML = "Happy Birthday, Mr. Eliazer Adetunji !!! &#127881;&#x1F389;";
} else if (currentDate == "8-12-2025") {
    document.getElementById("greetings").innerHTML = "Happy Birthday, Mr. Elijah Adetunji !!! &#127881;&#x1F389;";
}

}

myEvent();




// 
    
    // Get the current count from localStorage
let visitCount = localStorage.getItem('visitCount');

// Check if there's a previous count
if (visitCount) {
  visitCount = parseInt(visitCount, 10) + 1; // Increment the count
} else {
  visitCount = 1; // Initialize if no count exists
}

// Save the updated count back to localStorage
localStorage.setItem('visitCount', visitCount);

// Display the visit count
document.querySelectorAll('.count').forEach(element => {
  element.textContent = visitCount;
});

// Add reset button functionality
const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', () => {
  // Clear visitCount from localStorage
  localStorage.removeItem('visitCount');

  // Reset displayed count to 0
  document.querySelectorAll('.count').forEach(element => {
    element.textContent = 0;
  });

  console.log("Visit count reset successfully!");
});
 
  
  
  
  // f2oxGYpuLkw 👉 praise 
// 6CP08HOcWGY

// YouTube video ID (from the YouTube video URL, e.g., https://www.youtube.com/watch?v=dQw4w9WgXcQ)
var videoId = "f2oxGYpuLkw"; // Replace with the ID of the video you want to embed

// Create an iframe element
var iframe = document.createElement("iframe");

// Set the iframe attributes
iframe.setAttribute("width", "560");
iframe.setAttribute("height", "315");
iframe.setAttribute("src", "https://www.youtube.com/embed/" + videoId + "?autoplay=1"); // Add autoplay=1 to the URL
iframe.setAttribute("frameborder", "0");
iframe.setAttribute("allow", "autoplay; encrypted-media"); // Allow autoplay
iframe.setAttribute("allowfullscreen", "true");

// Append the iframe to the container
document.getElementById("video-container").appendChild(iframe);
  
  
