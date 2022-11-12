import { RequestHandler } from 'express';
import { BadRequestError } from './../../helpers/api.errors';

export const dateHourMiddleware: RequestHandler = (request, response, next) => {
  const { hour, date } = request.body;

  const newDate = new Date(`${date} ${hour}`);

  const day = newDate.getDay();

  const hours = newDate.getHours();

  const utilsDays = [1, 2, 3, 4, 5];

  if (!utilsDays.includes(day)) {
    throw new BadRequestError('Service only between Monday and Friday');
  }

  if (hours < 8 || hours >= 18) {
    throw new BadRequestError('Invalid hour, 8h - 18h');
  }

  return next();
};
