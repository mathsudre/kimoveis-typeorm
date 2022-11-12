import { Router } from 'express';
import {
  admAuthMiddleware,
  authMiddleware,
} from '../middlewares/authMiddlewares';
import { createScheduleController } from './../controllers/schedulesControllers/createSchedule.controller';
import { getOnePropScheduleController } from './../controllers/schedulesControllers/getOnePropSchedule.controller';
import { dateHourMiddleware } from './../middlewares';

export const schedulesRoutes = Router();

schedulesRoutes.post(
  '',
  authMiddleware,
  dateHourMiddleware,
  createScheduleController
);
schedulesRoutes.get(
  '/properties/:id',
  authMiddleware,
  admAuthMiddleware,
  getOnePropScheduleController
);
