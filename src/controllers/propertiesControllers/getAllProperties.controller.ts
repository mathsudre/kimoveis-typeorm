import { getAllPropertiesServices } from './../../services/propertiesServices/getAllProperties.service';

import { RequestHandler } from 'express';

export const getAllPropertiesController: RequestHandler = async (
  request,
  response
) => {
  const createProperty = await getAllPropertiesServices();
  return response.status(200).json(createProperty);
};
