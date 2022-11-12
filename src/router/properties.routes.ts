import { Router } from 'express';
import {
  admAuthMiddleware,
  authMiddleware,
} from '../middlewares/authMiddlewares';
import {
  createPropertyController,
  getAllPropertiesController,
} from './../controllers/propertiesControllers';
import { validateAddressMiddleware } from './../middlewares/adressMiddleware/validateAddress.middleware';
import { addressSerializer } from './../serializers/property.serializer';

export const propertyRoutes = Router();

propertyRoutes.post(
  '',
  authMiddleware,
  admAuthMiddleware,
  validateAddressMiddleware(addressSerializer),
  createPropertyController
);

propertyRoutes.get('', getAllPropertiesController);
