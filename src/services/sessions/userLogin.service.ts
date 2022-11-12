import * as bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { ForbiddenError } from '../../helpers/api.errors';
import { IUserLogin } from '../../interfaces/users';
import { userRepository } from '../../repositories';

export const userLoginService = async ({ email, password }: IUserLogin) => {
  const accountSearch = await userRepository.findOneBy({ email });

  if (!accountSearch) {
    throw new ForbiddenError('Invalid email or password');
  }

  if (!bcrypt.compareSync(password, accountSearch.password)) {
    throw new ForbiddenError('Invalid email or password');
  }

  const token = jwt.sign(
    { isAdm: accountSearch.isAdm },
    process.env.SECRET_KEY,
    { expiresIn: '24h', subject: accountSearch.id }
  );

  return { token: token };
};
