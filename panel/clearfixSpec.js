(function () {
  // List of methods for achieving the outcome
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
})();