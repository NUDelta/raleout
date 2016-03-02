var findTechnique = function(methodList) {
	if (typeof document.getElementsByClassName("clearfix")[0] != typeof undefined){
		var el = document.getElementsByClassName("clearfix")[0];
	} else {
		var el = document.getElementsByClassName("cf")[0];
	}
	
	for (var i = 0; i < methodList.length; i++) {
		var name = methodList[i]["name"];
		var keys = 	Object.keys(methodList[i]);

		if (methodList[i]['pseudoEl']){
			var pseudoEl = methodList[i]['pseudoEl']["0"]["pseudoClass"];
			var styleKeys = Object.keys(methodList[i]['pseudoEl']["0"]['cssSpec']);
			var match = methodList[i]['pseudoEl']["0"]['cssSpec'];
			var values = getElementStyleValues(styleKeys, el, pseudoEl);

			var contentr =values['content'];
			var displayr = values['display'];
			var clearr = values['clear'];


			if (match['content'].test(contentr) && 
				match['display'].test(displayr) &&
				match['clear'].test(clearr) ){

				alert('found an example of ' + name);
				console.log(values);
				return values
			}
		} else {
			var styleKeys = Object.keys(methodList[i]['cssSpec']);
			var match = methodList[i]['cssSpec'];
			var values = getElementStyleValues(styleKeys, el);
			var displayr = values['display'];
			if (match['display'].test(displayr)) {
				alert('found an example of ' + name);
				console.log(values);
				return values;
			}
		}	
		
	}

	console.log("clearfix isn't found");

}