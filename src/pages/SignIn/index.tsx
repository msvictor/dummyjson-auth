import React, { useCallback } from 'react';
import { Alert } from 'react-native';
import { FormContainer } from '~/components';
import { useNavigation } from '~/core/navigation';
import { authSelector, signIn, useAppDispatch } from '~/core/stores';
import { isRejected, useSelector } from '~/libs';
import { translate } from '~/utils';
import { FormValues, initialValues, validationSchema } from './form';
import SignIn from './SignIn';

const SignInContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading } = useSelector(authSelector);
  const { navigation, routes, stacks } = useNavigation();

  const onSubmit = useCallback(
    async (values: FormValues): Promise<void> => {
      const response = await dispatch(
        signIn({
          username: values.user,
          password: values.pass,
        }),
      );

      if (isRejected(response)) {
        Alert.alert(translate('error'), response?.error.message);
        return;
      }

      const data = response.payload as AuthResponse;
      if (data) {
        navigation.replace(stacks.PRIVATE, {
          screen: routes.PROFILE,
        });
      }
    },
    [dispatch, stacks, routes, navigation],
  );

  return (
    <FormContainer
      enableReinitialize
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <SignIn loading={loading} />
    </FormContainer>
  );
};

export default SignInContainer;
