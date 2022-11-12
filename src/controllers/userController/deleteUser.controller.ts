import { RequestHandler } from 'express';
import { userDeleteService } from '../../services/userService/deleteUser.service';

export const userDeleteController: RequestHandler = async (
  request,
  response
) => {
  const { id } = request.params;
  const softDelete = await userDeleteService(id);
  return response.status(204).json(softDelete);
};
