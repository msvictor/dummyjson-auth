import React from 'react';
import { useNavigation } from '~/core/navigation';
import SignIn from './SignIn';

const SignInContainer: React.FC = () => {
  const { navigation, routes } = useNavigation();

  const goToSignUp = (): void => navigation.navigate(routes.PROFILE);

  return <SignIn goToSignUp={goToSignUp} />;
};

export default SignInContainer;
