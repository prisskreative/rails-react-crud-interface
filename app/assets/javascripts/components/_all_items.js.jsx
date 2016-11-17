// Use getInitialState and then componentDidMount because we making a request to the server

var AllItems = React.createClass({ 

	getInitialState() { 
		return { items: [] }
	},

	componentDidMount() { 
		//console.log('Component mounted');
		$.getJSON('/api/v1/items.json', (response) => { this.setState({ items: response }) });
	}, 


  // We’re going to iterate through them in our render() method.
	render() { 
		var items= this.state.items.map((item) => { 
			return (
			// A way to identify each item into the component’s DOM. 
			// Unique attribute of each item, also known as key
				<div key={item.id}> 
					<h3>{item.name}</h3> 
					<p>{item.description}</p> 
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
