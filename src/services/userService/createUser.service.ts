import { hashSync } from 'bcryptjs';
import { IUser } from '../../interfaces/users';
import { BadRequestError } from './../../helpers/api.errors';

import { userRepository } from '../../repositories';

export const createUserService = async (userData: IUser) => {
  const { email } = userData;

  const users = await userRepository.findOneBy({ email });

  if (users) {
    throw new BadRequestError('This email is already been used');
  }

  userData.password = hashSync(userData.password, 10);

  const user = userRepository.create(userData);

  const { password, ...newUserRes } = await userRepository.save(user);

  return newUserRes;
};
