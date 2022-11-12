import { RequestHandler } from 'express';
import { getAllCategoriesService } from './../../services/categoriesService/getAllCategories.service';

export const getAllCategoriesController: RequestHandler = async (
  request,
  response
) => {
  const createCategory = await getAllCategoriesService();
  return response.status(200).json(createCategory);
};
