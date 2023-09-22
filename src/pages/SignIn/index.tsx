import React, { useCallback } from 'react';
import { FormContainer } from '~/components';
import { useNavigation } from '~/core/navigation';
import { authSelector, signIn, useAppDispatch } from '~/core/stores';
import { useSelector } from '~/libs';
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

      const data = response.payload as AuthResponse;
      if (data) {
        navigation.replace(stacks.PRIVATE, {
          screen: routes.PROFILE,
          params: { userId: data.id },
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
