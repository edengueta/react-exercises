import React, { Component } from 'react';
import './Filter.scss';

class Filter extends Component {

	constructor(props) {
		super(props);
		this.state = {
			items: [
				'Big fox',
				'Small elephant',
				'Big ant',
				'Small dinosaur',
				'Medium dog'
			],
			filter: "",
		};
	}
	handleChange(e){
		let value = e.target.value
		this.setState({
			filter: value.toLowerCase(),
		})
	}

	render() {
		let filteredItems = this.state.items.filter((item)=> {
			let lowerCaseItem = item.toLowerCase();
			return lowerCaseItem.includes(this.state.filter)
		})
		return (
			<div className="Filter">
				<p>Filter the list as you type.</p>
				<input placeholder="Search..." className="Filter__textbox" onChange={this.handleChange.bind(this)} />
				<ul>
					{filteredItems.map((item, index) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Filter;
