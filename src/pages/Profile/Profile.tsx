import React from 'react';
import { translate } from '~/utils';
import { Title, Wrapper } from './styles';

type Props = {
  todo?: unknown;
};

const Profile: React.FC<Props> = () => (
  <Wrapper>
    <Title>{translate('profile')}</Title>
  </Wrapper>
);

export default Profile;
