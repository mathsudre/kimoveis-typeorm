import { NotFoundError } from '../../helpers/api.errors';
import { IScheduleRequest } from '../../interfaces/schedules';
import { BadRequestError } from './../../helpers/api.errors';
import {
  propertyRepository,
  schedulesRepository,
  userRepository,
} from './../../repositories';

export const createScheduleService = async (
  idUser: string,
  schedule: IScheduleRequest
) => {
  const schedulesProperty = await schedulesRepository.findOneBy({
    date: schedule.date,
  });

  const invalidProperty = await propertyRepository.findOneBy({
    id: schedule.propertyId,
  });

  if (!invalidProperty) {
    throw new NotFoundError('Property not found');
  }

  if (schedulesProperty?.hour === schedule.hour) {
    throw new BadRequestError('Schedules already exists');
  }

  const userLogin = await userRepository.findOneBy({ id: idUser });

  const newSchedule = schedulesRepository.create(schedule);
  newSchedule.user = userLogin!;
  newSchedule.property = invalidProperty;

  const responseNew = await schedulesRepository.save(newSchedule);

  return { ...responseNew, message: 'Visit scheduled with sucess ' };
};
