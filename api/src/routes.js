import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import UserController from './app/controllers/User/UserController';
import ClientSessionController from './app/controllers/Session/ClientSessionController';
import ProfessionalAccountSessionController from './app/controllers/Session/ProfessionalAccountSessionController';
import ProfessionalAccountController from './app/controllers/ProfessionalAccount/ProfessionalAccountController';
import RestaurantController from './app/controllers/Restaurant/RestaurantController';
import RestaurantDetailsController from './app/controllers/Restaurant/RestaurantDetailsController';
import CategoryController from './app/controllers/Category/CategoryController';
import CategoryFileController from './app/controllers/CategoryFile/CategoryFileController';
import DishController from './app/controllers/Dish/DishController';
import DishDetailsController from './app/controllers/Dish/DishDetailsController';
import OrderController from './app/controllers/Order/OrderController';

import UserAuthMiddleware from './app/middlewares/authUser';
import ProfessionalAccountAuthMiddleware from './app/middlewares/authProfessionalAccount';

const routes = new Router();
const upload = multer(multerConfig);

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

routes.get('/restaurant/:restaurant_id', RestaurantDetailsController.index);

routes.post(
  '/category',
  ProfessionalAccountAuthMiddleware,
  CategoryController.store
);

routes.post(
  '/category/image',
  upload.single('file'),
  CategoryFileController.store
);
routes.get('/category/:restaurant_id', CategoryController.index);

routes.get('/dish/:category_id', DishController.index);
routes.post('/dish', ProfessionalAccountAuthMiddleware, DishController.store);
routes.post('/dishes-details/', DishDetailsController.indexAllById);
routes.get('/dish-details/:dish_id', DishDetailsController.index);

routes.post('/order', UserAuthMiddleware, OrderController.store);
routes.get('/order/', UserAuthMiddleware, OrderController.index);

routes.use(UserAuthMiddleware);

export default routes;
