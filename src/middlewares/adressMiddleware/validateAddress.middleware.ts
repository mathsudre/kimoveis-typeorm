import { NextFunction, Request, Response } from 'express';
import { BadRequestError } from './../../helpers/api.errors';

export const validateAddressMiddleware =
  (serializer: {
    validate: (
      arg0: Request,
      arg1: { stripUnknown: boolean; abortEarly: boolean }
    ) => any;
  }) =>
  async (request: Request, response: Response, next: NextFunction) => {
    const { address } = request.body;
    try {
      const validatedBody = await serializer.validate(address, {
        stripUnknown: true,
        abortEarly: false,
      });

      request.addressBody = validatedBody;

      return next();
    } catch (err) {
      throw new BadRequestError((<any>err).message);
    }
  };
