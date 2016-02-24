
// given a CSS Property, get all HTML elements with that property

(function () {
	console.log("panel.js imported ayeee");

	var getMethodList = function() {
		var methodList = [];
	  var CF_DISPLAY = {
	    name: 'display clearfix',
	    cssSpec: {
	      'display': /table-cell|table-caption|inline-block|inline-table/g
	    }
	  };

	  var CF_MICRO = {
	    name: 'micro clearfix',
	    pseudoEl: [
	      {
	        pseudoClass: 'after',
	        cssSpec: {
	          'content': /(?:^$)|\w|./,
	          'display': /block|table/,
	          'clear': /both/
	        }
	      }
	    ],
	    cssSpec: {}
	  };

	  methodList.push(CF_DISPLAY);
	  methodList.push(CF_MICRO);

	  return methodList;
	}
	var methodList = getMethodList();

	// given an element and an array of properties, retrieve their corresponding values
	// from the element's computed styles
	

	var getElementStyleValues = function (styleKeysArr, el, pseudo) {
		var pseudoSelector = pseudo || '';
		var styleObj = window.getComputedStyle(el, pseudoSelector);
		var valuesObj = {};
		var currentStyle;

		for (var i = 0; i < styleKeysArr.length; i++) {
			currentStyle = styleKeysArr[i];
			valuesObj[currentStyle] = styleObj[currentStyle];
		}

		return valuesObj;
	}

	//just for clearfix 
	var findClearFix = function(methodList) {
		if (typeof document.getElementsByClassName("clearfix")[0] != typeof undefined){
			var el = document.getElementsByClassName("clearfix")[0];
		} else {
			var el = document.getElementsByClassName("cf")[0];
		}
		
		for (var i = 0; i < methodList.length; i++) {
			var name = methodList[i]["name"];
			var keys = 	Object.keys(methodList[i]);



			if (methodList[i]['pseudoEl']){
				console.log('did i get here?');
				var pseudoEl = methodList[i]['pseudoEl'];
				console.log(pseudoEl);
				var styleKeys = methodList[i]['cssSpec'];
				var values = getElementStyleValues(styleKeys, el, pseudoEl);
				console.log(values[0]);
			} else {
				var styleKeys = methodList[i]['cssSpec'];
				var values = getElementStyleValues(styleKeys, el);
				console.log(values);

			}

			if (typeof values != typeof undefined) {
				console.log('found an example of ' + name);
				console.log(values);
				return values
				
			} else {
				console.log('nothing found sry try again bye');
			}
			
		}

	}

	findClearFix(methodList);

	// determine whether to include a node based on its
	// class/id names and/or children
	var traverseChildren = function (el, fn) {
		fn(el);

		if(el.children.length > 0){
			for (var i = 0; i < el.children.length; i++) {
				traverseChildren(el.children[i], fn); 
			}
		}

	}

	/*traverseChildren(document.querySelector("body"), function(){
		if(){

		}else{
			var re = /[clearfix|clr|cf]/g;
			clearfix
			clr
			cf
			re.match
		}
	});
*/
//introJs().start();

	// write higher level functions that include all the ways to check HTML attributes, all the CSS attributes, look through HTML children for structural attributes
	
	

})();