import {
  Button as ButtonBase,
  PageWrapper,
  TextInput as TextInputBase,
} from '~/components';
import { getTheme } from '~/core/theme';
import { css, styled } from '~/libs';

type Props = {
  underline?: boolean;
  red?: boolean;
};

const text500 = getTheme('colors.text.500');
const text900 = getTheme('colors.text.900');
const fontWeightsRegular = getTheme('fontWeights.regular');
const fontWeightsSemiBold = getTheme('fontWeights.semiBold');
const fontSizesXs = getTheme('fontSizes.xs');
const fontSizesMd = getTheme('fontSizes.md');
const fontSizesXl = getTheme('fontSizes.xl');
const fontSizesXxl = getTheme('fontSizes.xxl');
const spacingMd = getTheme('spacing.md');
const spacingXxl = getTheme('spacing.xxl');
const danger300 = getTheme('colors.danger.300');

export const Wrapper = styled(PageWrapper)``;

export const Title = styled.Text`
  text-align: center;
  color: ${text900};
  font-weight: ${fontWeightsSemiBold};
  font-size: ${fontSizesXl}px;
  line-height: ${fontSizesXxl}px;
  margin-bottom: ${spacingXxl}px;
`;

export const TextInputWrapper = styled.View`
  margin: ${spacingMd}px 0;
`;
export const TextInput = styled(TextInputBase)``;

export const Button = styled(ButtonBase)`
  margin-top: ${spacingXxl}px;
`;

export const BottomTextWrapper = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

export const BottomText = styled.Text<Props>`
  text-align: center;
  color: ${text500};
  font-weight: ${fontWeightsRegular};
  font-size: ${fontSizesXs}px;
  line-height: ${fontSizesMd}px;
  margin-top: ${spacingMd}px;
  margin-left: 4px;
  text-decoration: ${(props) => (props.underline ? 'underline' : 'none')};
  ${(props) =>
    props.red &&
    css`
      color: ${danger300};
    `};
`;
