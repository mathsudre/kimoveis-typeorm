import { Addresses } from '../entities/addresses.entity';
import { Categories } from '../entities/categories.entity';
import { Properties } from '../entities/properties.entity';
import { Schedules } from '../entities/schedules.entity';
import { User } from '../entities/user.entity';
import { AppDataSource } from './../data-source';

const addressRepository = AppDataSource.getRepository(Addresses);
const categoryRepository = AppDataSource.getRepository(Categories);
const propertyRepository = AppDataSource.getRepository(Properties);
const userRepository = AppDataSource.getRepository(User);
const schedulesRepository = AppDataSource.getRepository(Schedules);

export {
  categoryRepository,
  addressRepository,
  propertyRepository,
  userRepository,
  schedulesRepository,
};
