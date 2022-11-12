import { RequestHandler } from 'express';
import { userUpdateService } from '../../services/userService/userUpdate.service';

export const userUpdateController: RequestHandler = async (
  request,
  response
) => {
  const { id } = request.params;
  const { name, email, password } = request.updatedBody;

  const userUpdate = await userUpdateService(id, { name, email, password });
  return response.status(200).json(userUpdate);
};
