import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';
import { UnauthorizedError } from '../../helpers/api.errors';

export const authMiddleware: RequestHandler = async (
  request,
  response,
  next
) => {
  const { authorization } = request.headers;

  if (!authorization) {
    throw new UnauthorizedError('Missing authorization header');
  }

  const [, token] = authorization.split(' ');

  jwt.verify(token, process.env.SECRET_KEY, (error, decoded) => {
    if (!decoded) {
      throw new UnauthorizedError('Invalid Token');
    }

    request.user = {
      idUser: (<any>decoded).sub,
      isAdm: (<any>decoded).isAdm,
    };

    return next();
  });
};
