import './App.scss';
import React, { Component } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import Announce from './Announce';
// import { render } from 'node-sass';


export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {alert: null};
  }

  handleButtonClick = () => {
    setTimeout(this.announceTimeoutComplete, 2 * 1000);
  }

  announceTimeoutComplete = () => {
    this.setState({alert: 'foo bar'});
  }

  clearAlert = () => {
    this.setState({alert: null});
  }

  render() {
    let dialog;
     if (this.state.alert) {
      dialog = <Announce name={this.state.alert} onClose={this.clearAlert} />
     }

    return (
      <div className="App">
        {dialog}
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
        >
          <Paper elevation={3}>
            <Button color="primary" onClick={this.handleButtonClick}>Start Timer</Button>
          </Paper>
        </Grid>

      </div>
    );
  }
}
