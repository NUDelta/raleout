(function() {
	console.log("panel.js imported ayeee");
	var url = window.location.href;
	console.log(url);
	var html;
	$.get(url, function(data) {
		html = data 
	});

	/*$.get("http://localhost:3000/", {html: html}).done(function( data ) {
		console.log(data);
	});
*/

})();