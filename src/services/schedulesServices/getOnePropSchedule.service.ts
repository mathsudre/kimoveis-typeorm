import { NotFoundError } from '../../helpers/api.errors';
import { propertyRepository } from './../../repositories';

export const getOnePropScheduleService = async (id: string) => {
  const schedulesProperty = await propertyRepository.findOne({
    where: { id },
    relations: {
      schedules: {
        user: true,
      },
    },
  });

  if (!schedulesProperty) {
    throw new NotFoundError('Property not found');
  }

  return schedulesProperty;
};
