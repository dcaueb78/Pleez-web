import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ClientSessionController from './app/controllers/ClientSessionController';
import ProfessionalAccountController from './app/controllers/ProfessionalAccountController';
import ProfessionalAccountSessionController from './app/controllers/ProfessionalAccountSessionController';
import RestaurantController from './app/controllers/RestaurantController';

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

routes.use(UserAuthMiddleware);

export default routes;
