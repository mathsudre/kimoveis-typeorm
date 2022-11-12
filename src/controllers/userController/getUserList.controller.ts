import { RequestHandler } from 'express';
import { getUserListService } from '../../services/userService/getUserList.service';

export const getUserListController: RequestHandler = async (
  request,
  response
) => {
  const users = await getUserListService();

  return response.status(200).json(users);
};
