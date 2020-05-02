import { Router } from 'express';

import validateUserStore from './app/validators/UserStore';
import UserController from './app/controllers/UserController';

const routes = new Router();

routes.post('/users', validateUserStore, UserController.store);

export default routes;
