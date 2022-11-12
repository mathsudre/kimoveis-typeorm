import {
  admAuthMiddleware,
  authMiddleware,
} from '../middlewares/authMiddlewares';

import { Router } from 'express';
import {
  createCategoryController,
  getAllCategoriesController,
  getOneCategoryController,
} from '../controllers/categoriesControllers';

export const categoryRoute = Router();

categoryRoute.post(
  '',
  authMiddleware,
  admAuthMiddleware,
  createCategoryController
);

categoryRoute.get('', getAllCategoriesController);

categoryRoute.get('/:id/properties', getOneCategoryController);
