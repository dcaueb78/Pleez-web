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

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" component={SignUp} />

      <Route path="/categorias/:id" exact component={Categories} isPrivate />
      <Route path="/pratos/:id/:categoria" exact component={Dish} isPrivate />
      <Route path="/detalhes/:id/:prato" exact component={Details} isPrivate />
      <Route path="/basket/" exact component={Basket} isPrivate />
      <Route path="/informacoes/" exact component={Infos} isPrivate />

      <Route path="/" component={() => <h1>404</h1>} />
    </Switch>
  );
}
