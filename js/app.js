// init
const customer = document.getElementById('customer');
const arrow = document.getElementById('arrow');
const plan = document.getElementById('plan');

// additem
const additem = document.getElementById("additem");

console.log(additem);

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

additem.addEventListener("submit", function (event) {
	//if (event.key === 'Enter') voegNaamToe();
	event.preventDefault();
//	console.log(event);
	console.log(customer.innerHTML);

//	console.log(document.getElementById('customer').children);

	var childs = customer.children;
	console.log(childs);
	for (var i=0; i < childs.length; i++) {
		console.log(childs[i]);
	}

});


