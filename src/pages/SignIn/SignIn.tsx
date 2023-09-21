import React from 'react';
import { Title, Wrapper } from './styles';

type Props = {
  todo?: unknown;
};

const SignIn: React.FC<Props> = () => (
  <Wrapper>
    <Title>SignIn</Title>
  </Wrapper>
);

export default SignIn;
