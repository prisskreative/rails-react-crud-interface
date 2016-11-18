// Use getInitialState and then componentDidMount because we making a request to the server

var AllItems = React.createClass({ 


	handleEdit() {

	},

	onUpdate(item) {
    this.props.onUpdate(item);
	},

	handleDelete(id) {
  //console.log('delete item clicked');
  	this.props.handleDelete(id);
  },

  // We’re going to iterate through them in our render() method.
	render() { 
		//var items= this.state.items.map - change state to props
		var items= this.props.items.map((item) => { 
			return (
			// A way to identify each item into the component’s DOM. 
			// Unique attribute of each item, also known as key
				<div key={item.id}> 
					{/* <h3>{item.name}</h3>*/} 
					{/* <p>{item.description}</p>*/} 
					<Item item={item}
            handleDelete={this.handleDelete.bind(this, item.id)}
            //handleEdit={this.handleEdit}/>
            handleUpdate={this.onUpdate}/>
				</div> 
			) 
		}); 

		return( 
			<div> 
				{items} 
			</div> 
		) 
}

});
