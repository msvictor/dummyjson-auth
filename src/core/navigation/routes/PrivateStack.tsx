import React from 'react';
import { createNativeStackNavigator } from '~/libs';
import * as Pages from '~/pages';
import { ROUTES } from '../enums';

const Private = createNativeStackNavigator<PrivateStackParams>();

const PrivateStack = (): JSX.Element => (
  <Private.Navigator
    initialRouteName={ROUTES.PROFILE}
    screenOptions={{
      header: () => <></>,
    }}
  >
    <Private.Screen name={ROUTES.PROFILE} component={Pages.Profile} />s{' '}
  </Private.Navigator>
);

export default PrivateStack;
