window.onload = function () {
    //always start with console output to see if it's working
    //unless you've done it 100 times and 100% sure it is.
    console.log('hello mfker');
	bind_ui_actions();
}

function bind_ui_actions() {
	// Adding events for focus & unfocus
	document.getElementById("calc").addEventListener("focus", calc_of_wages);
}

function calc_of_wages() {
	// Getting money per hour and how much this guy is worked today
	let money_input = document.getElementById("money_ph").value;
	let hours_input = document.getElementById("hours").value;
	
	// Calculating his salary
	let salary = Math.abs(money_input * hours_input);
	
	// Print his 'big' salary
	let span = document.getElementById("wages");
	span.innerHTML = salary;
}