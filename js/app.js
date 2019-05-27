// init
const customer = document.getElementById('customer');
const arrow = document.getElementById('arrow');
const plan = document.getElementById('plan');

// additem
const additem = document.getElementById("additem");

console.log(additem);

if (additem.addEventListener) {
	additem.addEventListener("submit", function(event) {
		event.preventDefault();
		window.history.back();
	}, true);
}
else {
	additem.attachEvent('onsubmit', function(event){
		event.preventDefault();
		//window.history.back();
	});
}

