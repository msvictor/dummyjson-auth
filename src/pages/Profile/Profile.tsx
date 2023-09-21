import React from 'react';
import { Title, Wrapper } from './styles';

type Props = {
  todo?: unknown;
};

const Profile: React.FC<Props> = () => (
  <Wrapper>
    <Title>Profile</Title>
  </Wrapper>
);

export default Profile;
