import { ErrorRequestHandler } from 'express';
import { ApiError } from '../helpers/api.errors';

export const errorMiddleware: ErrorRequestHandler = (
  error: Error & Partial<ApiError>,
  request,
  response,
  next
) => {
  const statusCode = error.statusCode ?? 500;
  const message = error.statusCode ? error.message : 'Internal Server Error';
  return response.status(statusCode).json({ message });
};
