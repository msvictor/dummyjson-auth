import React from 'react';
import { translate } from '~/utils';
import { Title, Wrapper } from './styles';

type Props = {
  todo?: unknown;
};

const SignIn: React.FC<Props> = () => (
  <Wrapper>
    <Title>{translate('signIn')}</Title>
  </Wrapper>
);

export default SignIn;
