import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Categories from '../pages/Categories';
import Dish from '../pages/Dish';
import Details from '../pages/Details';
import Basket from '../pages/Basket';
import Infos from '../pages/Infos';

import { basket, categoryBaseRoute, dishBaseRoute, detailsBaseRoute } from '~/services/api/pages';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" component={SignUp} />

      <Route
        path={`${categoryBaseRoute}/:restaurant/:chair`}
        exact
        component={Categories}
        isPrivate
      />
      <Route
        path={`${dishBaseRoute}/:restaurant/:category`}
        exact
        component={Dish}
        isPrivate
      />
      <Route
        path={`${detailsBaseRoute}/:restaurant/:dish`}
        exact
        component={Details}
        isPrivate
      />
      <Route path={basket} exact component={Basket} isPrivate />
      <Route path="/informacoes/" exact component={Infos} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
