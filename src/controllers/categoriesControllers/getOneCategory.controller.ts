import { getOneCategoryService } from './../../services/categoriesService/getOneCategory.service';

import { RequestHandler } from 'express';

export const getOneCategoryController: RequestHandler = async (
  request,
  response
) => {
  const { id } = request.params;
 
  const getOneCategory = await getOneCategoryService(id);

  return response.status(200).json(getOneCategory);
};
