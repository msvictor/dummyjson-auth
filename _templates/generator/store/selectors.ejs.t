---
to: src/core/stores/<%= h.changeCase.lower(name) %>/selectors.ts
---
import { ThemeType } from '~/core/theme';
import { createSelector } from '~/libs';

const selector = (
  state: ApplicationState<ThemeType>,
): ApplicationState<ThemeType> => state;

export const <%= h.changeCase.camel(name) %>Selector = createSelector(selector, (state) => state.<%= h.changeCase.camel(name) %>);
