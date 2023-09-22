import React from 'react';
import { FormikProps, useFormikContext } from '~/libs';
import { translate } from '~/utils';
import { FormValues } from './form';
import {
  BottomText,
  Button,
  TextInput,
  TextInputWrapper,
  Title,
  Wrapper,
} from './styles';

type Props = {
  loading: boolean;
};

const SignIn: React.FC<Props> = ({ loading }) => {
  const { values, submitForm, handleChange, errors }: FormikProps<FormValues> =
    useFormikContext();

  return (
    <Wrapper>
      <Title>{translate('login')}</Title>

      <TextInputWrapper>
        <TextInput
          label={translate('username')}
          placeholder={translate('usernamePlaceholder')}
          value={values.user}
          onChangeText={handleChange('user')}
        />
        {!!errors.user && <BottomText red>{errors.user}</BottomText>}
      </TextInputWrapper>

      <TextInputWrapper>
        <TextInput
          label={translate('password')}
          placeholder={translate('passwordPlaceholder')}
          secureTextEntry
          value={values.pass}
          onChangeText={handleChange('pass')}
        />
        {!!errors.pass && <BottomText red>{errors.pass}</BottomText>}
      </TextInputWrapper>

      <Button
        type="primary"
        loading={loading}
        disabled={loading}
        onPress={submitForm}
        label={translate('login')}
      />
    </Wrapper>
  );
};

export default SignIn;
