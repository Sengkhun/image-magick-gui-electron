import React, { PureComponent } from 'react';
import classNames from "classnames";
import { 
  Icon,
  withStyles 
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex',
    padding: `${theme.spacing(.3)}px ${theme.spacing(.8)}px`,
    borderRadius: 4,
    cursor: 'pointer'
  },
  selected: {
    backgroundColor: '#383838',
  },
  hover: {
    '&:hover': {
      backgroundColor: '#454545'
    }
  },
  icon: {
    color: '#dddddd',
    fontSize: 20
  }
});

class IconButton extends PureComponent {
  render() {

    const { classes, selected } = this.props;

    return (
      <div className={classNames(
        classes.root,
        selected ? classes.selected : classes.hover
      )}>
        <Icon className={classes.icon}>
          rotate_left
        </Icon>
      </div>
    )
  }
}

export default withStyles(styles)(IconButton);