import React, { PureComponent } from 'react';
import { withRouter, Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import history from './history';
import url from './url';

import { MainLayout } from '../layouts';
import { Main } from '../pages';

class Route extends PureComponent {

  componentDidMount() {
    history.push(url.main.index);
  }

  render() {
    return (
      <Switch>

        <AppRoute
          exact
          path={url.main.index}
          layout={MainLayout}
          component={Main}
        />

      </Switch>
    );
  }
}

export default withRouter(Route);
