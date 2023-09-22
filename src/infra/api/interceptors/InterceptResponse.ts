import { AxiosResponse } from '~/libs';

class InterceptResponse {
  public async execute(response: AxiosResponse | any): Promise<AxiosResponse> {
    return response;
  }
}

export default new InterceptResponse().execute;
