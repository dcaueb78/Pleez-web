import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ClientSessionController from './app/controllers/ClientSessionController';
import ProfessionalAccountSessionController from './app/controllers/ProfessionalAccountSessionController';
import ProfessionalAccountController from './app/controllers/ProfessionalAccountController';
import RestaurantController from './app/controllers/RestaurantController';
import CategoryController from './app/controllers/CategoryController';
import DishController from './app/controllers/DishController';
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

routes.post(
  '/category',
  ProfessionalAccountAuthMiddleware,
  CategoryController.store
);
routes.get(
  '/category',
  ProfessionalAccountAuthMiddleware,
  CategoryController.index
);

routes.get(
  '/dish',
  ProfessionalAccountAuthMiddleware,
  DishController.index
);
routes.post(
  '/dish',
  ProfessionalAccountAuthMiddleware,
  DishController.store
);

routes.post(
  '/order',
  ProfessionalAccountAuthMiddleware,
  OrderController.store
);

routes.use(UserAuthMiddleware);

export default routes;
