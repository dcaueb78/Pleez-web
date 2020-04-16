import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Profile from '~/pages/Profile';
import Dashboard from '~/pages/Dashboard';

import Restaurants from '~/pages/Restaurants';
import CreateRestaurant from '~/pages/CreateRestaurant';

import Categories from '~/pages/Categories';
import CreateCategory from '~/pages/CreateCategory';

import Dishes from '~/pages/Dishes';
import CreateDish from '~/pages/CreateDish';


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

      <Route path="/pratos/:category_id" exact component={Dishes} isPrivate />
      <Route path="/criar-prato/:category_id" exact component={CreateDish} isPrivate />

      <Route path="/" component={() => <h1>Erro 404</h1>} />
    </Switch>
  );
}
