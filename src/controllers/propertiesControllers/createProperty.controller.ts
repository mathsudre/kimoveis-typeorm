import { RequestHandler } from 'express';
import { createPropertyService } from '../../services/propertiesServices/createProperty.service';

export const createPropertyController: RequestHandler = async (
  request,
  response
) => {
  const property = request.body;
  const address = request.addressBody;

  const createProperty = await createPropertyService(property,address);
  return response.status(201).json(createProperty);
};
