import React, { PureComponent } from 'react';

import { withStyles } from '@material-ui/core';

const styles = theme => ({
  root: {
    height: '100%',
    backgroundColor: 'black'
  }
});

class Toolbar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        Toolbar
      </div>
    )
  }
}

export default withStyles(styles)(Toolbar);