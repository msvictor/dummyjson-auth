import React, { useContext, useRef } from 'react';
import {
  NavigationContainer,
  NavigationContainerRef,
  NavigationState,
  ParamListBase,
  ThemeContext,
  createNativeStackNavigator,
  useSelector,
} from '~/libs';
import { authSelector } from '../stores/auth/selectors';
import { ROUTES_STACKS } from './enums';
import { PrivateStack, PublicStack } from './routes';
import { getActiveRouteName } from './services';

type Props = {
  setNavigator: (navigatorRef: NavigationContainerRef<ParamListBase>) => void;
};

const MainStack = createNativeStackNavigator();

const NavigationProvider: React.FC<Props> = ({ setNavigator }) => {
  const routeNameRef = useRef<any>();
  const { colors } = useContext(ThemeContext);
  const { token } = useSelector(authSelector);

  const initialRoute = token ? ROUTES_STACKS.PRIVATE : ROUTES_STACKS.PUBLIC;

  const themeContext = {
    dark: false,
    colors: {
      background: colors.background[100],
      primary: colors.primary[500],
      card: colors.background[100],
      text: colors.text[900],
      border: colors.primary[500],
      notification: colors.primary[500],
    },
  };

  const onNavigationStateChange = (state?: NavigationState): void => {
    if (state) {
      const currentRouteName = getActiveRouteName(state);
      routeNameRef.current = currentRouteName;
    }
  };

  return (
    <NavigationContainer
      ref={setNavigator}
      theme={themeContext}
      onStateChange={onNavigationStateChange}
    >
      <MainStack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{
          header: () => <></>,
        }}
      >
        <MainStack.Screen name={ROUTES_STACKS.PUBLIC} component={PublicStack} />
        <MainStack.Screen
          name={ROUTES_STACKS.PRIVATE}
          component={PrivateStack}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default NavigationProvider;
