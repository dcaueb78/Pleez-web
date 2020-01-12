import React from 'react';
import { Switch, Route } from 'react-router-dom';

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

import Categories from '../pages/Categories';
import Dish from '../pages/Dish';
import Details from '../pages/Details';
import Basket from '../pages/Basket';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" component={SignUp} />

      <Route path="/categorias/:id" exact component={Categories} />
      <Route path="/pratos/:id/:categoria" exact component={Dish} />
      <Route path="/detalhes/:id/:prato" exact component={Details} />
      <Route path="/basket/" exact component={Basket} />
    </Switch>
  );
}
