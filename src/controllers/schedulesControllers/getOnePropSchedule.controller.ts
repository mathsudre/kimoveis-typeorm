import { RequestHandler } from 'express';
import { getOnePropScheduleService } from './../../services/schedulesServices/getOnePropSchedule.service';

export const getOnePropScheduleController: RequestHandler = async (
  request,
  response
) => {
  const { id } = request.params;

  const schedulesProperties = await getOnePropScheduleService(id);

  return response.status(200).json(schedulesProperties);
};
