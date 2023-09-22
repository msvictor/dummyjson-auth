import styled from 'styled-components/native';
import { getTheme } from '~/core/theme';

const background900 = getTheme('colors.background.900');
const borderRadiusLg = getTheme('borderRadius.lg');
const spacingSm = getTheme('spacing.sm');
const spacingLg = getTheme('spacing.lg');

// @ts-ignore
const boxShadow = getTheme('boxShadow.xs');

export const CardView = styled.TouchableOpacity`
  background-color: ${background900};
  border-radius: ${borderRadiusLg}px;
  width: 100%;
  padding: ${spacingSm}px ${spacingLg}px;
  ${boxShadow}
`;
