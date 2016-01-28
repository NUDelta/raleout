(function() {
	console.log("panel.js imported ayeee");
	var url = window.location.href;
	console.log(url);

	html = document.getElementsByClassName('ng-scope');
	console.log(html);


/* $.get(url, function(data) {
		var $log = $( "#log" ),
		html = $.parseHTML( data ),

  		nodeNames = [];
  		console.log(data);
  		console.log(html);
			//if it's a ng-directive
			if(html.match(/(ng)/)){
				nodeNames.push(name);
				console.log('hello');
			}

		console.log(nodeNames);
		
	});
*/

})();