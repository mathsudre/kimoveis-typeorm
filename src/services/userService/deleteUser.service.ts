import { userRepository } from '../../repositories';
import { BadRequestError, NotFoundError } from './../../helpers/api.errors';

export const userDeleteService = async (id: string) => {
  const userActive = await userRepository.findOneBy({ id });

  if (!userActive) {
    throw new NotFoundError('User not found');
  }

  if (!userActive.isActive) {
    throw new BadRequestError('User is already deactivated');
  }

  userActive.isActive = false;

  await userRepository.save(userActive);

  return {};
};
