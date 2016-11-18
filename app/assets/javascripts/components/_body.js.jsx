var Body = React.createClass({ 

	getInitialState() { 
		return { items: [] }
	},

	componentDidMount() { 
		//console.log('Component mounted');
		$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
	}, 

  // New item
	handleSubmit(item) {
    //console.log(item);
    var newState = this.state.items.concat(item); 
    this.setState({ items: newState })
  },

  // Update item
  handleUpdate(item) { 
  	$.ajax({ 
  		url: `/api/v1/items/${item.id}`, 
  		type: 'PUT', 
  		data: { item: item }, 
  		success: () => { 
  			//console.log('you did it!!!'); 
  			this.updateItems(item); 
  			// callback to swap objects 
  		} 
  	} 
  )},

  // update item
  updateItems(item) { 
  	var items = this.state.items.filter((i) => { return i.id != item.id }); 
  	items.push(item); this.setState({items: items }); 
  },


  // Delete item
  handleDelete(id) { 
  	$.ajax({ 
  		url: `/api/v1/items/${id}`, 
  		type: 'DELETE', 
  		//success(response) { 
  			//console.log('successfully removed item') 
  		success:() => { 
  			this.removeItemClient(id);
  		} 
  	}); 
  },

  removeItemClient(id) { 
  	var newItems = this.state.items.filter((item) => { 
  		return item.id != id; 
  	}); 

  	this.setState({ items: newItems }); 
  },


  // renders the AllItems and NewItem component
	render() { 
		return ( 
			<div> 
				<NewItem handleSubmit={this.handleSubmit}/>
				<AllItems items={this.state.items} handleDelete={this.handleDelete} onUpdate={this.handleUpdate}/> 
			</div> 
		) 
	} 
});
