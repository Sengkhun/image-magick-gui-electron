import React, { PureComponent } from 'react';

import { withStyles } from '@material-ui/core';

import { IconButton } from '../Button';

// 383838
// dddddd

const styles = theme => ({
  root: {
    display: 'flex',
    flexFlow: 'column',
    backgroundColor: '#535353',
    padding: `${theme.spacing(1)}px ${theme.spacing(.5)}px`
  }
});

class Toolbar extends PureComponent {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <IconButton/>
      </div>
    )
  }
}

export default withStyles(styles)(Toolbar);