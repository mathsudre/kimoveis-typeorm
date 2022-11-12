import { Router } from 'express';
import {
  admAuthMiddleware,
  authMiddleware,
  cannotUpdateDataMiddleware,
  createUserSerializerMiddleware,
  updateAuthMiddleware,
  updateUserSerializerMiddleware,
} from './../middlewares';

import {
  createUserController,
  getUserListController,
  userDeleteController,
  userUpdateController,
} from '../controllers/userController';

import {
  userCreateSerializer,
  userUpdateSerializer,
} from '../serializers/user.serializer';

export const userRoutes = Router();

userRoutes.post(
  '',
  createUserSerializerMiddleware(userCreateSerializer),
  createUserController
);
userRoutes.get('', authMiddleware, admAuthMiddleware, getUserListController);
userRoutes.patch(
  '/:id',
  authMiddleware,
  updateAuthMiddleware,
  cannotUpdateDataMiddleware,
  updateUserSerializerMiddleware(userUpdateSerializer),
  userUpdateController
);
userRoutes.delete(
  '/:id',
  authMiddleware,
  admAuthMiddleware,
  userDeleteController
);
