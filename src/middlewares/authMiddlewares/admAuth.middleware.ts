import { RequestHandler } from 'express';
import { ForbiddenError } from '../../helpers/api.errors';

export const admAuthMiddleware: RequestHandler = (request, response, next) => {
  const { isAdm } = request.user;

  if (!isAdm) {
    throw new ForbiddenError('Only admin can access');
  }

  return next();
};
