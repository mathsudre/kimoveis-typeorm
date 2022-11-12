import { RequestHandler } from 'express';
import { UnauthorizedError } from './../../helpers/api.errors';

export const cannotUpdateDataMiddleware: RequestHandler = (
  request,
  response,
  next
) => {
  const user = request.body;

  const keys = ['id', 'isAdm', 'isActive'];

  const verify = keys.some((key) => key in user);

  if (verify) {
    throw new UnauthorizedError(
      'Id, isAdm and isActive from user cannot be updated'
    );
  }

  return next();
};
