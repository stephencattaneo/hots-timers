import React, { Component } from 'react';
import {
  Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions
} from '@material-ui/core';

export default class Announce extends Component {
  constructor(props) {
    super(props);

    this.state = {open: true};
  }


  closeDialog = () => {
    this.setState({open: false});
    this.props.onClose();
  }

  render() {
    // <Dialog onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={true}>
    return (
      <Dialog onClose={ this.closeDialog } aria-labelledby="simple-dialog-title" open={this.state.open}>
        <DialogTitle>Timer complete</DialogTitle>

        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Timer {this.props.name} is up!
          </DialogContentText>
        </DialogContent>

        <DialogActions>
          <Button onClick={ this.closeDialog } color="primary" autoFocus>
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    )
  }
}
