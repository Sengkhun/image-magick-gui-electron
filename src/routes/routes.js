import React, { PureComponent } from 'react';
import { Switch } from 'react-router-dom';

import AppRoute from './AppRoute';
import url from './url';

import { MainLayout } from '../layouts';
import { Main } from '../pages';

class App extends PureComponent {

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

export default App;
