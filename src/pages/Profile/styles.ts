import {
  Card as CardBase,
  Icon,
  InfoSet as InfoSetBase,
  PageWrapper,
} from '~/components';
import { getTheme } from '~/core/theme';
import { FastImage, styled } from '~/libs';

const spacingSm = getTheme('spacing.sm');
const spacingMd = getTheme('spacing.md');
const spacingLg = getTheme('spacing.lg');
const fontSizesXl = getTheme('fontSizes.xl');
const fontSizesMd = getTheme('fontSizes.md');
const primary500 = getTheme('colors.primary.500');
const secondary500 = getTheme('colors.secondary.500');
const background500 = getTheme('colors.background.900');
const text100 = getTheme('colors.text.100');
const text500 = getTheme('colors.text.500');
const borderWidthSm = getTheme('borderWidth.sm');

export const Wrapper = styled(PageWrapper)``;
export const Card = styled(CardBase)``;
export const InfoSet = styled(InfoSetBase)``;

export const CardWrapper = styled.View`
  background-color: ${primary500};
  padding: ${spacingMd}px;
  align-items: center;
  margin-bottom: ${spacingMd}px;
`;

export const Avatar = styled.View`
  background-color: ${background500};
  border-color: ${secondary500};
  border-width: ${borderWidthSm}px;
  border-radius: 60px;
  height: 120px;
  width: 120px;
  overflow: hidden;
  align-items: center;
  justify-content: center;
`;

export const DefaultIcon = styled(Icon).attrs((props) => ({
  name: 'user',
  color: primary500(props),
  height: 50,
}))``;

export const Photo = styled(FastImage)`
  width: 100%;
  height: 100%;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: ${fontSizesXl}px;
  margin-bottom: ${spacingSm}px;
  text-align: center;
  color: ${text100};
`;

export const Subtitle = styled.Text`
  font-size: ${fontSizesMd}px;
  margin-top: ${spacingSm}px;
  text-align: center;
  color: ${text100};
`;

export const InfoWrapper = styled.View`
  width: 100%;
  padding: ${spacingMd}px;
  gap: ${spacingLg}px;
`;

export const CardTitle = styled.Text`
  font-weight: bold;
  font-size: ${fontSizesMd}px;
  margin-bottom: ${spacingSm}px;
  text-align: center;
  color: ${text500};
`;

export const Row = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${spacingMd}px;
`;
