import React from 'react';
import { translate } from '~/utils';
import { Title, Wrapper } from './styles';

type Props = {
  userId?: number;
};

const Profile: React.FC<Props> = ({ userId }) => (
  <Wrapper>
    <Title>
      {translate('profile')}
      {userId}
    </Title>
  </Wrapper>
);

export default Profile;
