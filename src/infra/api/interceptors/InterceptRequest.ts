import { AxiosRequestConfig } from '~/libs';

class InterceptRequest {
  public async execute(
    config: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig | any> {
    return config;
  }
}

export default new InterceptRequest().execute;
