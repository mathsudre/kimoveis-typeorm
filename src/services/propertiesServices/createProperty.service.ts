import { BadRequestError, NotFoundError } from '../../helpers/api.errors';
import { IAddressRequest, IPropertyRequest } from '../../interfaces/properties';
import {
  addressRepository,
  categoryRepository,
  propertyRepository,
} from '../../repositories';

export const createPropertyService = async (
  prop: IPropertyRequest,
  address: IAddressRequest
) => {
  const findZipCode = await addressRepository.findOneBy({
    zipCode: address.zipCode,
  });
  const findCategory = await categoryRepository.findOneBy({
    id: prop.categoryId,
  });

  if (!findCategory) {
    throw new NotFoundError('Category not exists');
  }

  if (findZipCode) {
    throw new BadRequestError('Address is already been used');
  }

  const newAddress = addressRepository.create(address);

  await addressRepository.save(newAddress);

  const property = {
    value: prop.value,
    size: prop.size,
    address: newAddress,
    categoryId: findCategory.id,
  };

  const newProperty = propertyRepository.create(property);

  newProperty.category = findCategory;

  const dataProp = await propertyRepository.save(newProperty);

  return { ...dataProp };
};
