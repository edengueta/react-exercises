import React, { Component } from 'react';
import './Weather.scss';

class Weather extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hottestDay: 0,
			coldestDay: 0
		}
	}
	componentDidMount() {
		fetch('https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json')
			.then(res => res.json())
			.then(days => {
				this.setState({
					hottestDay: this.getHottest(days),
					coldestDay: this.getColdest(days)
				})
			})
	}

	getHottest(days) {
		let hottestTemp = 0;
		let hottestDay;
		days.forEach(day => {
			if (day.temperature > hottestTemp) {
				hottestTemp = day.temperature;
				hottestDay = day.day;
			}
		});
		return hottestDay
	}
	getColdest(days) {
		let coldestTemp = 100;
		let coldestDay;
		days.forEach(day => {
			if (day.temperature < coldestTemp) {
				coldestTemp = day.temperature;
				coldestDay = day.day;
			}
		});
		return coldestDay
	}



	render() {
		return (
			<div className="Weather">
				<p>
					Use the following API to display the hottest and coldest days:<br />
					<code>https://netcraft2.s3-eu-west-1.amazonaws.com/weather.json</code>
				</p>
				<div className="Weather__stats">
					<strong>Hottest day is:</strong> {this.state.hottestDay}
				</div>
				<div className="Weather__stats">
					<strong>Coldest day is:</strong> {this.state.coldestDay}
				</div>
			</div>
		)
	}
}

export default Weather;
