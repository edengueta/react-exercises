import React, { Component } from 'react';
import './Tasks.scss';

class Tasks extends Component {
	constructor(props) {
		super(props)
		this.state = {
			task:'',
			tasks: []
		}
	}

	taskChanged(e) {
        this.setState({
            task: e.target.value,
		});
	}

	submit(e) {
		e.preventDefault();
		let newTask = this.state.task;
		this.setState({
			tasks: [...this.state.tasks, newTask]
		});
        this.setState({
            task: ''
		})	
	}

	render() {
		return (
			<div className="Tasks">
				<h3>Tasks:</h3>
				<p>Make a Todo list (add only):</p>

				<form onSubmit={this.submit.bind(this)}>
					<input
						placeholder="Your task..."
						value={this.state.task}
						onChange={this.taskChanged.bind(this)}
					/>
					<button>Add task</button>
				</form>
				 
				<ul>
					{this.state.tasks.map((task, index) => {
						return <li key={index}>{task}</li>
					})}
				</ul>
			</div>
		)
	}
}

export default Tasks;
