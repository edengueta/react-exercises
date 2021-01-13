import React, { Component } from 'react';
import './Timer.scss';

class Timer extends Component {
	constructor (props){
		super(props);
		this.state = {
			timerValue:0,
		}
	}

	componentWillUnmount() {
		clearInterval(this.startInterval);
	}
	play(){
		this.startInterval = setInterval(()=>{
			this.setState({
				timerValue: this.state.timerValue + 1,
			})
		}, 1000)
	}
	pause(){
		this.componentWillUnmount();	
	}
	reset(){
		this.componentWillUnmount();
		this.setState({
			timerValue:0,
		 })
	}

	render() {
		return (
			<div className="Timer">
				<h3>Timer</h3>
				<ul className="Timer__explanation">
					<li><b>Play:</b> the timer should count the seconds and keep updating</li>
					<li><b>Pause:</b> the timer freeze the timer</li>
					<li><b>Reset:</b> should set the timer to 0</li>
				</ul>
				<div className="Timer__actions">
					<button onClick={this.play.bind(this)}>Play</button>
					<button onClick={this.pause.bind(this)}>Pause</button>
					<button onClick={this.reset.bind(this)}>Reset</button>
				</div>
				<div className="Timer__value">{this.state.timerValue}</div>
			</div>
		)
	}
}

export default Timer;
