import { RequestHandler } from 'express';
import { userLoginService } from '../../services/sessions/userLogin.service';

export const userLoginController: RequestHandler = async (
  request,
  response,
  next
) => {
  const { email, password } = request.body;

  const userLogin = await userLoginService({ email, password });
  return response.status(200).json(userLogin);
};
