import React, { Component } from 'react';
import './President.scss';

class President extends Component {

	constructor(props) {
		super(props);
		this.state = {
			selectedPresident: null,
			presidents: [
				{
					firstName: 'Bill',
					lastName: 'Clinton',
					image: 'bill.jpeg'
				},
				{
					firstName: 'George',
					lastName: 'Bush',
					image: 'george.jpeg'
				},
				{
					firstName: 'Barack',
					lastName: 'Obama',
					image: 'barack.jpeg'
				}
			]
		};
	}
	handleClick(index) {
		this.setState({
			selectedPresident: `${this.state.presidents[index].firstName} ${this.state.presidents[index].lastName}`,
		});




	}
	render() {
		return (
			<div className="President">
				<p>When clicking on a president, display his <strong>full</strong> name below.</p>
				<div className="president-list">
					{this.state.presidents.map((president, index) => {
						return <img key={index} src={require('./images/' + president.image)} alt={"Photo of " + president.firstName + " " + president.lastName} onClick={this.handleClick.bind(this, index)} />
					})}
				</div>
				<div>
					<strong>You selected: </strong>{this.state.selectedPresident}

				</div>
			</div>
		)
	}
}

export default President;
