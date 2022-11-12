import { hashSync } from 'bcryptjs';
import { AppDataSource } from '../../data-source';
import { User } from '../../entities/user.entity';
import { IUserUpdate } from '../../interfaces/users';
import { userRepository } from '../../repositories';
import { NotFoundError } from './../../helpers/api.errors';

export const userUpdateService = async (
  id: string,
  { name, email, password }: IUserUpdate
) => {
  const foundUser = await userRepository.findOneBy({ id });

  if (!foundUser) {
    throw new NotFoundError('User not found');
  }

  const dataUser = {
    name,
    email,
    password: password ? hashSync(password, 10) : foundUser.password,
  };

  AppDataSource.createQueryBuilder()
    .update(User)
    .set(dataUser)
    .where('id=:id', { id: id })
    .execute();

  const userRes = {
    ...dataUser,
    password: undefined,
    message: 'User updated with sucess',
  };
  return userRes;
};
