import React, { Component} from 'react';
import './App.css';

class Clock extends Component
{
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0

    }
  }
componentWillMount(){
  this.getTimeUntil(this.props.deadline);
}
  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000) % 60);
    const minutes = Math.floor((time/1000/60) % 60);
    const hours = Math.floor(time/(1000*60*60) % 24);
    const days = Math.floor(time/(1000*60*60*24));
    this.setState({seconds: seconds});

  }
  render()
  {

    return (
    <div>
      <div className="Clock-days"> {this.state.days} </div>
      <div className= "Clock-hours"> {this.state.hours} </div>
      <div className="Clock-minutes"> {this.state.minutes} </div>
      <div className="Clock-seconds">{this.state.seconds} </div>
    </div>
  )
  }

}

export default Clock;
