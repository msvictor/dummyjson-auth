import { AxiosRequestConfig } from '~/libs';

class InterceptRequest {
  public async execute(
    config: AxiosRequestConfig,
  ): Promise<AxiosRequestConfig | any> {
    return {
      ...config,
      headers: {
        ...config.headers,
      },
    };
  }
}

export default new InterceptRequest().execute;
