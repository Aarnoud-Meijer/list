// init
const customer = document.getElementById('customer');
const arrow = document.getElementById('arrow');
const plan = document.getElementById('plan');

// additem
const additem = document.getElementById("additem");

//console.log(additem);
const collection = []; // array for items

// add items to list
additem.addEventListener("submit", function (event) {
	event.preventDefault();
//	console.log(additem.value);
	let childs = customer.children;
//	console.log(childs[0].value);
	let iteminput = document.getElementById("iteminput");
	console.log(iteminput.value);
	for (var i=0; i < childs.length; i++) {
		console.log(childs[i]);
	}
	collection.push(iteminput.value);
	customer.innerHTML +="<li>"+iteminput.value+"</li>";
	iteminput.value="";
	console.log(collection);
});


// add items to basket
arrow.addEventListener("click", function (event) {
	var items = customer.children;
//	console.log(childs);
	for (var i=0; i < items.length; i++) {
		console.log(items[i]);
	}
});
