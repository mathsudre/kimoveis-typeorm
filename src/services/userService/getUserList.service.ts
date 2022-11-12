import { userRepository } from '../../repositories';
import { getUsersSerializer } from '../../serializers/user.serializer';

export const getUserListService = async () => {
  const users = await userRepository.find();

  return await getUsersSerializer.validate(users, { stripUnknown: true });
};