// init
const customer = document.getElementById('customer');
const arrow = document.getElementById('arrow');
const plan = document.getElementById('plan');

// additem
const additem = document.getElementById("additem");

//console.log(additem);

additem.addEventListener("submit", function (event) {

	event.preventDefault();

	var childs = customer.children;
//	console.log(childs);
	for (var i=0; i < childs.length; i++) {
		console.log(childs[i]);
	}

});


// add items to basket
arrow.addEventListener("click", function (event) {
	var items = customer.children;
//	console.log(childs);
	for (var i=0; i < items.length; i++) {
		console.log(items[i]);
	}
});


/*
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
*/

