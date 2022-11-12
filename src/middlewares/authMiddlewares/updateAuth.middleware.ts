import { RequestHandler } from 'express';
import { UnauthorizedError } from '../../helpers/api.errors';

export const updateAuthMiddleware: RequestHandler = async (
  request,
  response,
  next
) => {
  const { id } = request.params;
  const { isAdm, idUser } = request.user;

  if (!isAdm && id !== idUser) {
    throw new UnauthorizedError('Invalid credentials');
  }

  return next();
};
