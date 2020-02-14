import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ClientSessionController from './app/controllers/ClientSessionController';
import ProfessionalAccountSessionController from './app/controllers/ProfessionalAccountSessionController';
import ProfessionalAccountController from './app/controllers/ProfessionalAccountController';
import RestaurantController from './app/controllers/RestaurantController';
import UserRestaurantController from './app/controllers/UserRestaurantController';
import CategoryController from './app/controllers/CategoryController';
import DishController from './app/controllers/DishController';
import DishDetailsController from './app/controllers/DishDetailsController';
import OrderController from './app/controllers/OrderController';

import UserAuthMiddleware from './app/middlewares/authUser';
import ProfessionalAccountAuthMiddleware from './app/middlewares/authProfessionalAccount';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', ClientSessionController.store);

routes.post('/professional-account', ProfessionalAccountController.store);
routes.post(
  '/professional-account/session',
  ProfessionalAccountSessionController.store
);

routes.put('/users', UserAuthMiddleware, UserController.update);

routes.post(
  '/restaurant',
  ProfessionalAccountAuthMiddleware,
  RestaurantController.store
);
routes.get(
  '/restaurant',
  ProfessionalAccountAuthMiddleware,
  RestaurantController.index
);

routes.get(
  '/restaurant/:restaurant_id',
  UserRestaurantController.index
);

routes.post(
  '/category',
  ProfessionalAccountAuthMiddleware,
  CategoryController.store
);
routes.get(
  '/category/:restaurant_id',
  CategoryController.index
);

routes.get(
  '/dish/:category_id',
  DishController.index
);
routes.post(
  '/dish',
  ProfessionalAccountAuthMiddleware,
  DishController.store
);
routes.post(
  '/dishes-details/',
  DishDetailsController.indexAllById
);
routes.post(
  '/dish-details/:dish_id',
  DishDetailsController.index
);

routes.post(
  '/order',
  OrderController.store
);
routes.get(
  '/order/:userId',
  UserAuthMiddleware,
  OrderController.index
);

routes.use(UserAuthMiddleware);

export default routes;
