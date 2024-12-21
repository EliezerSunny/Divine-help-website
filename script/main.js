


function myFunction() {
    // body...
var date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();

let currentDate = day + "-" + month + "-" + year;

if (month == "12" || month == "1") {
    // LOGO
var img = document.createElement("img");
img.src = "img/divine-help-logo2.png";
var src = document.getElementById("logo");
src.appendChild(img);

// LOGO END
} else {
    // LOGO
var img = document.createElement("img");
img.src = "img/divine-help-logo3.png";
var src = document.getElementById("logo");
src.appendChild(img);

// LOGO END
}


if (month == "12" || month == "1") {
// LOGO FOOTER
var img = document.createElement("img");
img.src = "img/divine-help-logo2.png";
var src = document.getElementById("logo2");
src.appendChild(img);

// LOGO FOOTER END
} else {
    // LOGO FOOTER
var img = document.createElement("img");
img.src = "img/divine-help-logo3.png";
var src = document.getElementById("logo2");
src.appendChild(img);

// LOGO FOOTER END
}
}






myFunction();








document.getElementById('date').innerHTML = date;


function openNav() {
		// body...
		document.getElementById("mySidenav").style.width = "200px";
	}

	function closeNav() {
		// body...
		document.getElementById("mySidenav").style.width = "0";
	}

	var open = document.querySelector(".nav-menu");

	open.addEventListener("click", function() {
		// body...
		document.querySelector("body").classList.toggle("active");
	})





	
