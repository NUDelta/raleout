
// given a CSS Property, get all HTML elements with that property

(function () {
	console.log("panel.js imported ayeee");
	// given an element and an array of properties, retrieve their corresponding values
	// from the element's computed styles
	var getElementStyleValues = function (el, pseudo, styleKeysArr) {
		var styleObj = window.getComputedStyle(el, pseudo);
		var valuesObj = {};
		var currentStyle;

		for (var i = 0; i < styleKeysArr.length; i++) {
			currentStyle = styleKeysArr[i];
			values[currentStyle] = styleObj[currentStyle];
		}

		return valuesObj;
	}

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
introJs().start();

	// write higher level functions that include all the ways to check HTML attributes, all the CSS attributes, look through HTML children for structural attributes
	
	

})();