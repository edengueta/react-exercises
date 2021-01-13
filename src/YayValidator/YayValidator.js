import React, { Component } from 'react';
import './YayValidator.scss';

class YayValidator extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isYay: false
		}
	}

	handleChange(e) {
		if (e.target.value === 'yay') {
			this.setState({
				isYay: true
			});
		} else {
			this.setState({
				isYay: false
			});
		}

	}
	render() {
		return (
			<div className="YayValidator">
				<p>
					When the input contains the value "yay",
					change the input's background color to <span className="YayValidator__sample">green</span>:
				</p>
				<input onChange={this.handleChange.bind(this)} type="text" className={this.state.isYay === true ? 'text-box green' : 'text-box'} />
			</div>
		)
	}
}

export default YayValidator;
