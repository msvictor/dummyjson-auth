import { AxiosResponse } from '~/libs';

class InterceptResponse {
  private async preventPerformanceLogger(
    response: AxiosResponse | any,
  ): Promise<void> {
    try {
      const { httpMetric } = response.config.metadata;
      if (httpMetric) {
        const responseType =
          response.headers['content-type'] || response.config.headers['Accept'];
        httpMetric.setHttpResponseCode(response.status || 0);
        httpMetric.setResponseContentType(responseType);
        await httpMetric.stop();
      }
    } catch (error) {
      console.log(error);
    }
  }

  public async execute(response: AxiosResponse | any): Promise<AxiosResponse> {
    await this.preventPerformanceLogger(response);
    return response;
  }
}

export default new InterceptResponse().execute;
