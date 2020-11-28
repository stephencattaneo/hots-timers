import './App.scss';
import React, { Component } from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import TimerButton from './TimerButton';
// import { render } from 'node-sass';

// https://www.reddit.com/r/heroesofthestorm/comments/bmb5dk/camps_and_objective_timer_cheatsheet/
const mapList = {
  gardenOfTerror: [{
      name: 'Seige (Giants)',
      initalSeconds: 10,
      respawnSeconds: 5,
    }, {
      name: 'Bruiser (Knights)',
      initalSeconds: 10,
      respawnSeconds: 10,
    }, {
      name: 'Objective (Seed)',
      initalSeconds: 10,
      respawnSeconds: 12,
    }
  ]
}

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {gameStarted: false};
  }

  startGame = () => {
    this.setState({gameStarted: true})
  }

  renderButtons = () => {
    if (this.state.gameStarted) {
      return mapList.gardenOfTerror.map(timer =>
        <TimerButton key={timer.name} {...timer} />
      );
    }

    return <Button variant="contained" size="large" color='primary' onClick={this.startGame}>
            Game has started
           </Button>;

  }

  render() {
    return (
      <div className="App">
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="flex-start"
          spacing={3}
        >
          <Paper elevation={3}>{this.renderButtons()}</Paper>
        </Grid>

      </div>
    );
  }
}
