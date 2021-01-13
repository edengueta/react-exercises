import React, { Component } from 'react';
import './Counter.scss';

class Counter extends Component {
	constructor(props) {
		super(props);
		this.state = {
			myCounter: 0
		}
	}

	increaseByOne() {
		this.setState({
			myCounter: this.state.myCounter + 1
		})
	}

	render() {
		return (
			<div className="Counter">
				<p>Make the button increase the value:</p>
				<button onClick={this.increaseByOne.bind(this)}>Increase</button>
				<div className="Counter__value">{this.state.myCounter}</div>
			</div>
		)
	}
}

export default Counter;
