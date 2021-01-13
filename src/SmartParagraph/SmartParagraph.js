import React, { Component } from 'react';
import './SmartParagraph.scss';

class SmartParagraph extends Component {

	constructor(props) {
		super(props);
		this.state = {
			limit: false,
			buttonText: 'Read Less',
			text: 'I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound the actual teachings of great explorers.'
		};
	}
	toggle(){
		this.setState({
			limit: !this.state.limit,
			buttonText: !this.state.limit ? 'Read More' : 'Read Less',
		})
	}
	limitText(text) {
		let i;
		for (i=99; text[i] !==" "; i--);
		return text.slice(0, i);
	}
	render() {
		const isLimit = this.state.limit;
		const textToDisplay =this.state.text;
		return (
			<div className="SmartParagraph">
				<p className="SmartParagraph__explanation">
					When clicking on "Toggle" button,
					the following paragraph should display only 100 characters.
					The challenge is cutting between words!
					Clicking again should show all of the text back.
				</p>
				<p className="SmartParagraph__value">
					{isLimit ? this.limitText(textToDisplay.slice(0, 100)) + '...' : textToDisplay }
				</p>
				<button onClick={this.toggle.bind(this)}>{this.state.buttonText}</button>
			</div>
		)
	}
}

export default SmartParagraph;
