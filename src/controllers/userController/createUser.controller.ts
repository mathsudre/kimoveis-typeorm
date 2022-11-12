import { RequestHandler } from 'express';
import { createUserService } from '../../services/userService/createUser.service';

export const createUserController: RequestHandler = async (
  request,
  response
) => {
  const { name, email, password, isAdm } = request.validatedBody;
  const user = {
    name,
    email,
    password,
    isAdm,
  };
  const createdUser = await createUserService(user);
  return response.status(201).json(createdUser);
};
