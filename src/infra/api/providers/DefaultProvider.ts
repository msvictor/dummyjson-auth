import { AxiosInstance, ENV, axios } from '~/libs';
import {
  InterceptRequest,
  InterceptRequestError,
  InterceptResponse,
  InterceptResponseError,
} from '../interceptors';

class DefaultProvider {
  config: AxiosInstance;

  constructor() {
    this.config = axios.create({
      baseURL: ENV.API_URL,
      timeout: 30000,
    });
    this.addInterceptors();
  }

  private addInterceptors(): void {
    this.config.interceptors.request.use(
      InterceptRequest,
      InterceptRequestError,
    );

    this.config.interceptors.response.use(
      InterceptResponse,
      InterceptResponseError,
    );
  }
}

export default new DefaultProvider().config;
