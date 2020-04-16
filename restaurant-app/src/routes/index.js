import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';

import Restaurants from '~/pages/Restaurants';
import CreateRestaurant from '~/pages/CreateRestaurant';

import CreateCategory from '~/pages/CreateCategory';
import Categories from '~/pages/Categories';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={SignIn} />
      <Route path="/registro" exact component={SignUp} />

      <Route path="/dashboard" exact component={Dashboard} isPrivate />
      <Route path="/perfil" exact component={Profile} isPrivate />

      <Route path="/restaurantes" exact component={Restaurants} isPrivate />
      <Route path="/novo-restaurante" exact component={CreateRestaurant} isPrivate />

      <Route path="/categorias" exact component={Categories} isPrivate />
      <Route path="/criar-categoria" exact component={CreateCategory} isPrivate />

      <Route path="/" component={() => <h1>Erro 404</h1>} />
    </Switch>
  );
}
