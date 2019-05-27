import React, { PureComponent } from 'react';

import { 
  CssBaseline, 
  withStyles 
} from '@material-ui/core';

const styles = theme => ({
  root: {
    display: 'flex'
  },
  content: {
    flexGrow: 1
  },
});

class MainLayout extends PureComponent {

  render() {

    const { 
      children, 
      classes
    } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline/>

        <main className={classes.content}>
          { children }
        </main>
      </div>
    );
  }

}

export default withStyles(styles)(MainLayout);