import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import { Alarm, Refresh } from '@material-ui/icons';

export default class TimerButton extends Component {
  constructor(props) {
    super(props);

    this.state = {timeRemaining: props.initalSeconds};
    setTimeout(this.updateTimer, 1000, props.initalSeconds);
  }

  updateTimer = (passedRemaining) => {
    console.log(passedRemaining);
    if (passedRemaining <= 0) return;

    this.setState({timeRemaining: passedRemaining - 1});
    setTimeout(this.updateTimer, 1000, passedRemaining - 1);
  }

  handleClick = () => {
    if (this.props.onClick) this.props.onClick();
    if (this.props.respawnSeconds && this.state.timeRemaining <= 0) this.respawnTimer();
  }

  respawnTimer = () => {
    this.setState({timeRemaining: this.props.respawnSeconds});
    setTimeout(this.updateTimer, 1000, this.props.respawnSeconds);
  }

  render() {
    let timeLabel = this.state.timeRemaining;
    let buttonColor = "primary";
    let icon = <Alarm />
    if (this.state.timeRemaining <= 0) {
      timeLabel = 'READY!';
      buttonColor = 'secondary';
      icon = this.props.respawnSeconds ? <Refresh /> : ''
    }

    return (
      <Button
        variant="outlined"
        size="large"
        color={buttonColor}
        onClick={this.handleClick}
      >{icon} &nbsp; {
        this.props.name} - {timeLabel
      }</Button>
    );
  }
}

