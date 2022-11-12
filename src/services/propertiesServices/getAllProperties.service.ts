import { propertyRepository } from '../../repositories';

export const getAllPropertiesServices = async () => {
  const properties = await propertyRepository.find();

  return properties;
};