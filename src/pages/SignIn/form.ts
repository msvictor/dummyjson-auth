import { FormValidator } from '~/libs';

export type FormValues = {
  user: string;
  pass: string;
};

export const initialValues = {
  user: '',
  pass: '',
};

export const validationSchema = FormValidator.object({
  user: FormValidator.string().required(),
  pass: FormValidator.string().min(6).required(),
});
