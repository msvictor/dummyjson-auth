import React from 'react';
import { useRoute } from '~/core/navigation/hooks';
import Profile from './Profile';

const ProfileContainer: React.FC = () => {
  const { params } = useRoute();

  const { userId } = params as ProfileParams;

  return <Profile userId={userId} />;
};

export default ProfileContainer;
