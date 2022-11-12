import { categoryRepository } from './../../repositories';

export const getAllCategoriesService = async () => {
  const categories = await categoryRepository.find();
  return categories;
};
