import React from 'react';
import { FormikProps, useFormikContext } from '~/libs';
import { translate } from '~/utils';
import { FormValues } from './form';
import {
  BottomText,
  BottomTextWrapper,
  Button,
  TextInput,
  TextInputWrapper,
  Title,
  Wrapper,
} from './styles';

type Props = {
  goToLogin: () => void;
};

const SignUp: React.FC<Props> = ({ goToLogin }) => {
  const { values, submitForm, handleChange, errors }: FormikProps<FormValues> =
    useFormikContext();

  return (
    <Wrapper showBackButton suppressTitle>
      <Title>{translate('createYourAccount')}</Title>

      <TextInputWrapper>
        <TextInput
          label={translate('firstName')}
          placeholder={translate('firstNamePlaceholder')}
          value={values.firstName}
          onChangeText={handleChange('firstName')}
        />
        {!!errors.firstName && <BottomText red>{errors.firstName}</BottomText>}
      </TextInputWrapper>

      <TextInputWrapper>
        <TextInput
          label={translate('lastName')}
          placeholder={translate('lastNamePlaceholder')}
          value={values.lastName}
          onChangeText={handleChange('lastName')}
        />
        {!!errors.lastName && <BottomText red>{errors.lastName}</BottomText>}
      </TextInputWrapper>

      <TextInputWrapper>
        <TextInput
          label={translate('email')}
          placeholder={translate('emailPlaceholder')}
          value={values.email}
          onChangeText={handleChange('email')}
        />
        {!!errors.email && <BottomText red>{errors.email}</BottomText>}
      </TextInputWrapper>

      <TextInputWrapper>
        <TextInput
          label={translate('password')}
          placeholder={translate('passwordPlaceholder')}
          value={values.password}
          onChangeText={handleChange('password')}
          secureTextEntry
        />
        {!!errors.password && <BottomText red>{errors.password}</BottomText>}
      </TextInputWrapper>

      <Button
        type="primary"
        label={translate('createAccount')}
        onPress={submitForm}
      />

      <BottomTextWrapper>
        <BottomText>{translate('alreadyHaveAccount')}</BottomText>
        <BottomText underline onPress={goToLogin}>
          {translate('login')} {translate('here')}
        </BottomText>
      </BottomTextWrapper>
    </Wrapper>
  );
};

export default SignUp;
