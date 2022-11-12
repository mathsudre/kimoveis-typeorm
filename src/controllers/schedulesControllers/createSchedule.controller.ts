import { RequestHandler } from 'express';
import { createScheduleService } from './../../services/schedulesServices/createSchedules.service';

export const createScheduleController: RequestHandler = async (
  request,
  response
) => {
  const scheduleBody = request.body;
  const {idUser} = request.user

  const schedulesProperties = await createScheduleService(idUser,scheduleBody);
  

  return response.status(201).json(schedulesProperties);
};
