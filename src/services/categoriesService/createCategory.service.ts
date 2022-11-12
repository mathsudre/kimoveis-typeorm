import { categoryRepository } from '../../repositories';
import { BadRequestError } from './../../helpers/api.errors';
import { ICategoryRequest } from './../../interfaces/categories/index';

export const createCategoryService = async ({ name }: ICategoryRequest) => {
  const categories = await categoryRepository.findOneBy({ name });

  if (categories) {
    throw new BadRequestError('Category already exists');
  }

  const category = categoryRepository.create({ name });

  return await categoryRepository.save(category);
};
