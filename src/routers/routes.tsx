import { Switch, Route } from 'react-router-dom';

import { Repository } from '../pages/Repositories';
import { UserPage } from '../pages/UserPage';

export function Routes () {
  return (
    <Switch>
      <Route path="/" exact component={UserPage} />
      <Route path="/repositories" component={Repository} />
    </Switch>
  );
};

