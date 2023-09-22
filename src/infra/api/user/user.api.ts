import { ResponseError } from '~/infra';
import { request } from '../providers';

export const getUser = async (id: number): Promise<UserData> => {
  try {
    const { data } = await request.get(`/users/${id}`);

    return data;
  } catch (error) {
    throw new ResponseError(error);
  }
};
