import { ThemeType } from '~/core/theme';
import { createSelector } from '~/libs';

const selector = (
  state: ApplicationState<ThemeType>,
): ApplicationState<ThemeType> => state;

export const userSelector = createSelector(selector, (state) => state.user);
