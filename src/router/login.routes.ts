import { Router } from 'express';
import { userLoginController } from '../controllers/sessions/userLogin.controller';

export const loginRoute = Router();

loginRoute.post('', userLoginController);
