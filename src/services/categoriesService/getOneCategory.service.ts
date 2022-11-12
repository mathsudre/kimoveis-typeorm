import { NotFoundError } from '../../helpers/api.errors';
import { categoryRepository } from './../../repositories';

export const getOneCategoryService = async (id: string) => {
  const propertySearch = await categoryRepository.findOne({
    where: {
      id,
    },
    relations: {
      properties: true,
    },
  });

  if (!propertySearch) {
    throw new NotFoundError('Category not found');
  }

  return propertySearch;
};
