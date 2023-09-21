import { ResponseError } from '~/infra';
import { request } from '../providers';

export const login = async ({
  username,
  password,
}: AuthCredentials): Promise<AuthResponse> => {
  try {
    const { data } = await request.post('/auth/login', {
      username,
      password,
    });
    return data;
  } catch (error) {
    throw new ResponseError(error);
  }
};
