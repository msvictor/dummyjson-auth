import React, { useEffect } from 'react';
import { useNavigation } from '~/core/navigation';
import { getUserData, useAppDispatch, userSelector } from '~/core/stores';
import { useSelector } from '~/libs';
import Profile from './Profile';

const ProfileContainer: React.FC = () => {
  const dispatch = useAppDispatch();
  const user = useSelector(userSelector);

  const { navigation, routes, stacks } = useNavigation();

  const onGoBack = (): void =>
    navigation.replace(stacks.PUBLIC, {
      screen: routes.SIGN_IN,
    });

  useEffect(() => {
    dispatch(getUserData(user.id));
  }, [dispatch, user.id]);

  return <Profile user={user} onGoBack={onGoBack} />;
};

export default ProfileContainer;
