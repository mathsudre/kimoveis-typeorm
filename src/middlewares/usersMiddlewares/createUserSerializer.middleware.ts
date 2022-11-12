import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from './../../helpers/api.errors';

export const createUserSerializerMiddleware =
  (serializer: {
    validate: (
      arg0: Request,
      arg1: { stripUnknown: boolean; abortEarly: boolean }
    ) => any;
  }) =>
  async (request: Request, response: Response, next: NextFunction) => {
    try {
      const validatedBody = await serializer.validate(request.body, {
        stripUnknown: true,
        abortEarly: false,
      });

      request.validatedBody = validatedBody;

      return next();
    } catch (err) {
      throw new BadRequestError((<any>err).message);
    }
  };
