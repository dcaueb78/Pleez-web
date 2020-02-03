import { Router } from 'express';

import UserController from './app/controllers/UserController';
import ClientSessionController from './app/controllers/ClientSessionController';
import ProfessionalAccount from './app/controllers/ProfessionalAccountController';
import Restaurant from './app/controllers/RestaurantController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);
routes.post('/sessions', ClientSessionController.store);

routes.post('/professional-account', ProfessionalAccount.store);

routes.use(authMiddleware);

routes.post('/restaurant', Restaurant.store);

routes.put('/users', UserController.update);

export default routes;
