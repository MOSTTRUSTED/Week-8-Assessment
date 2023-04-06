function validate() {
	var firstName = document.forms["myForm"]["firstname"].value;
	var middleName = document.forms["myForm"]["middlename"].value;
	var lastName = document.forms["myForm"]["lastname"].value;
	var email = document.forms["myForm"]["email"].value;
	var password = document.forms["myForm"]["password"].value;

	// Name validation
	var nameRegex = /^[a-zA-Z]+$/;
    if (!nameRegex.test(firstName)) {
		alert("Please enter a valid first name.");
		document.getElementById("firstname").style.backgroundColor = "red";
	} else {
		document.getElementById("firstname").style.backgroundColor = "white";
	}

	if (!nameRegex.test(middleName)) {
		alert("Please enter a valid middle name.");
		document.getElementById("middlename").style.backgroundColor = "red";
	} else {
		document.getElementById("middlename").style.backgroundColor = "white";
	}

	if (!nameRegex.test(lastName)) {
		alert("Please enter a valid last name.");
		document.getElementById("lastname").style.backgroundColor = "red";
	} else {
		document.getElementById("lastname").style.backgroundColor = "white";
	}
	// Email validation
	var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (!emailRegex.test(email)) {
		alert("Please enter a valid email address.");
		document.getElementById("email").style.backgroundColor = "red";
		return false;
	} else {
		document.getElementById("email").style.backgroundColor = "white";
	}

	// Password validation
	var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-zA-Z]).{8,}$/;
    if (!passwordRegex.test(password)) {
		alert("Please enter a password that is at least 8 characters long and contains a number and a special character.");
		document.getElementById("password").style.backgroundColor = "red";
		return false;
	} else {
		document.getElementById("password").style.backgroundColor = "white";
	}

	// If all input is valid, return true to submit the form
	return true;
}