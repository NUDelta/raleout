'use strict';

window.onload = function() {
  var techniqueLibrary = [{
  'name': 'clearfix',
  'id': 'clearfix'
}, {
  'name': 'sticky footer',
  'id': 'stickyFooter'
}, {
  'name': 'image hover effect',
  'id': 'imgHover'
}, {
  'name': 'carousel',
  'id': 'carousel'
}, {
  'name': 'social media icons',
  'id': 'socialMediaIcons'
}];

var model = [{
  'name': 'clearfix',
  'id': 'clearfix'
}, {
  'name': 'sticky footer',
  'id': 'stickyFooter'
}, {
  'name': 'image hover effect',
  'id': 'imgHover'
}];

var LearnerView = React.createClass({
  displayName: 'LearnerView',


  getInitialState: function getInitialState() {
    return {
      watchedItems: this.props.data
    };
  },

  updateWatchedItems: function updateWatchedItems(arr) {
    this.setState({ watchedItems: arr });
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'watchlist' },
      React.createElement(
        'div',
        { className: 'well clearfix' },
        React.createElement(
          'h4',
          null,
          'Watchlist'
        ),
        React.createElement(ItemSearchField, {
          data: this.props.library }),
        React.createElement(WatchedItemList, {
          data: this.state.watchedItems,
          dataChange: this.updateWatchedItems })
      )
    );
  }
});

var ItemSearchField = React.createClass({
  displayName: 'ItemSearchField',

  render: function render() {
    return React.createElement('input', {
      type: 'text',
      id: 'searchField',
      className: 'form-control watchlist__searchField',
      'data-provide': 'typeahead',
      placeholder: 'Search for techniques'
    });
  }
});

var WatchedItemList = React.createClass({
  displayName: 'WatchedItemList',


  updateParent: function updateParent(index) {
    this.props.data.splice(index, 1);
    var updatedData = this.props.data;

    // Pass updated data to parent
    this.props.dataChange(updatedData);
  },

  render: function render() {
    var parentLinkFn = this.updateParent;
    return React.createElement(
      'ul',
      { className: 'watchedItemList list-unstyled' },
      React.createElement(
        'li',
        null,
        this.props.data.map(function (item, index) {
          return React.createElement(WatchedItem, { name: item.name, id: item.id, index: index, parentLink: parentLinkFn });
        })
      )
    );
  }
});

var WatchedItem = React.createClass({
  displayName: 'WatchedItem',


  deleteItem: function deleteItem() {
    // Pass own index to parent
    this.props.parentLink(this.props.index);
  },

  addItem: function addItem() {
    /* render: function () {
    return <input type = "text" onKeyPress = {this._handleKeyPress} />;
    },
    _handleKeyPress: function(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
    }
    */
  },

  viewItemExamples: function viewItemExamples() {
    // Implement this later lol
  },

  render: function render() {
    return React.createElement(
      'div',
      { className: 'watchedItem clearfix' },
      React.createElement(
        'div',
        { className: 'watchedItem__name' },
        this.props.name
      ),
      React.createElement(
        'div',
        { className: 'watchedItem__btn-group' },
        React.createElement(
          'button',
          { className: 'btn btn-default', type: 'submit' },
          'Examples'
        ),
        React.createElement(
          'button',
          { className: 'btn btn-danger', type: 'submit', onClick: this.deleteItem },
          'Remove'
        )
      )
    );
  }
});

ReactDOM.render(React.createElement(LearnerView, { data: model, library: techniqueLibrary }), document.getElementById('content'));

// Typeahead.js

$('.watchlist__searchField').typeahead({
  source: techniqueLibrary
});
};