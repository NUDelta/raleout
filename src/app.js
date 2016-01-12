var cheerio = require('cheerio');

import {Person} from './model/Person';

global.app = function () {
    var christoph = new Person('Christoph', 'Burgdorf');
    console.log(christoph.fullName);
};


function cheeriod (html) {
	if(!error) {
		console.log('do we get here?');
    	var name;
            //obj where key = tag, val = tag count
        var directives = [];   
    	$ = cheerio.load(html);
    	//returns all elements between html tags as nodes  
    	data = $("html *");
        
        //traverse DOM to get name of each node/element
        for (i = 0; i < data.length; i++) { 
			name = data.get(i).name;

			//if it's a ng-directive
			if(name.substring(0,2).match(/(ng)/)){
				directives.push(name) ;
			}
		}

		return directives;

    }

}