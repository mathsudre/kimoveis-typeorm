import 'express-async-errors';
import express from 'express';
import 'reflect-metadata';
import { errorMiddleware } from './middlewares/errors.middleware';

import {
  categoryRoute,
  loginRoute,
  propertyRoutes,
  schedulesRoutes,
  userRoutes,
} from './router';

const app = express();
app.use(express.json());
app.use('/users', userRoutes);
app.use('/login', loginRoute);
app.use('/categories', categoryRoute);
app.use('/properties', propertyRoutes);
app.use('/schedules', schedulesRoutes);

app.use(errorMiddleware);

export default app;
