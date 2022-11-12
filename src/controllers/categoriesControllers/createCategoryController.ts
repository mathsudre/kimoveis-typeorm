import { RequestHandler } from 'express';
import { createCategoryService } from '../../services/categoriesService/createCategory.service';


export const createCategoryController: RequestHandler = async (
  request,
  response
) => {
  const { name } = request.body;

  const createCategory = await createCategoryService({ name });
  return response.status(201).json(createCategory);
};