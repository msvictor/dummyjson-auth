import { GENERIC_ERRORS, translate } from '~/utils';

export default class ResponseError {
  code: number;

  message: string;

  constructor({ response }: any) {
    this.code = response?.status || 0;
    this.message =
      response?.data.message || translate(GENERIC_ERRORS.UNEXPECTED_ERROR);
  }
}
