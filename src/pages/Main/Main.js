import React, { PureComponent } from 'react';
import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    height: '100%',
    padding: theme.spacing(1),
    backgroundColor: 'red'
  }
});

class Main extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        Main
      </div>
    )
  }
}

export default withStyles(styles)(Main);
