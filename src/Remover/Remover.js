import React, { Component } from 'react';
import './Remover.scss';

class Remover extends Component {

	constructor(props) {
		super(props);
		this.state = {
			students: [
				'Abby Mecoil',
				'Toni Zuck',
				'Peter Hanshfield',
				'Rose Tobernak'
			]
		};
	}
	handleRemove(index) {

		let newArr = this.state.students;
		newArr.splice(index, 1);

		this.setState({
			students: newArr
		})
	}
	render() {
		return (
			<div className="Remover">
				<h3>Remover:</h3>
				<p>Add a delete button for each student to remove it from the list.</p>
				<ul className="Remover__list">
					{this.state.students.map((student, index) => {
						return <li key={index}>{student} <button onClick={this.handleRemove.bind(this, index)}>X</button></li>;
					})}
				</ul>
			</div>
		)
	}
}

export default Remover;
