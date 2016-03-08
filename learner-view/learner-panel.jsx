var techniqueLibrary = [
  {
    'name': 'clearfix',
    'id': 'clearfix'
  },
  {
    'name': 'sticky footer',
    'id': 'stickyFooter'
  },
  {
    'name': 'image hover effect',
    'id': 'imgHover'
  },
  {
    'name': 'carousel',
    'id': 'carousel'
  },
  {
    'name': 'social media icons',
    'id': 'socialMediaIcons'
  }
];

var model = [
  {
    'name': 'clearfix',
    'id': 'clearfix'
  },
  {
    'name': 'sticky footer',
    'id': 'stickyFooter'
  },
  {
    'name': 'image hover effect',
    'id': 'imgHover'
  }
];

var LearnerView = React.createClass({

  getInitialState: function () {
    return {
      watchedItems: this.props.data
    };
  },
  
  updateWatchedItems: function (arr) {
    this.setState({ watchedItems: arr });
  },
  
  render: function() {
    return (
      <div className="watchlist">
        <div className="well clearfix">
          <h4>Watchlist</h4>
          <ItemSearchField
            data={this.props.library} />
          <WatchedItemList
            data={this.state.watchedItems}
            dataChange={this.updateWatchedItems} />
        </div>
      </div>
    );
  }
});

var ItemSearchField = React.createClass({
  render: function () {
    return (
      <input
        type="text"
        id="searchField"
        className="form-control watchlist__searchField"
        data-provide="typeahead"
        placeholder="Search for techniques"
       />
    );
  }
});

var WatchedItemList = React.createClass({

  updateParent: function (index) {
    this.props.data.splice(index, 1);
    var updatedData = this.props.data;
    
    // Pass updated data to parent
    this.props.dataChange(updatedData);
  },
  
  render: function () {
    var parentLinkFn = this.updateParent;
    return (
      <ul className="watchedItemList list-unstyled">
        <li>
          {this.props.data.map(function (item, index) {
            return <WatchedItem name={item.name} id={item.id} index={index} parentLink={parentLinkFn} />
          })}
        </li>
      </ul>
    );
  }
});

var WatchedItem = React.createClass({

  deleteItem: function () {
    // Pass own index to parent
    this.props.parentLink(this.props.index);
  },
  
  addItem: function () {
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
  
  viewItemExamples: function () {
    // Implement this later lol
  },
  
  render: function () {
    return (
      <div className="watchedItem clearfix">
        <div className="watchedItem__name">
          {this.props.name}
        </div>
        <div className="watchedItem__btn-group">
          <button className="btn btn-default" type="submit">Examples</button>
          <button className="btn btn-danger" type="submit" onClick={this.deleteItem}>Remove</button>
        </div>
      </div>
    );
  }
});

ReactDOM.render(
  <LearnerView data={model} library={techniqueLibrary} />,
  document.getElementById('content')
);




// Typeahead.js

$('.watchlist__searchField').typeahead({
  source: techniqueLibrary
});