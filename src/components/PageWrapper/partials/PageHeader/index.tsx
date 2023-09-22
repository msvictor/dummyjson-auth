import React from 'react';
import { useNavigation } from '~/core/navigation';
import {
  ContentWrapper,
  Icon,
  IconWrapper,
  Subtitle,
  SuppressBadge,
  SuppressWrapper,
  Title,
  Wrapper,
} from './styles';

type Props = {
  title: string;
  subtitle: string;
  showBackButton: boolean;
  suppressTitle: boolean;
  onGoBack?(): void;
};

const PageHeader: React.FC<Props> = ({
  title,
  subtitle,
  showBackButton,
  suppressTitle,
  onGoBack,
}) => {
  const { navigation } = useNavigation();

  return (
    <Wrapper>
      <IconWrapper>
        {showBackButton && (
          <Icon name="arrowLeft" onPress={onGoBack ?? navigation.goBack} />
        )}
      </IconWrapper>

      {suppressTitle && (
        <SuppressWrapper>
          <SuppressBadge />
          <SuppressBadge />
          <SuppressBadge />
        </SuppressWrapper>
      )}

      {!suppressTitle && (
        <ContentWrapper>
          <Title>{title}</Title>
          {subtitle && <Subtitle>{subtitle}</Subtitle>}
        </ContentWrapper>
      )}

      <IconWrapper />
    </Wrapper>
  );
};

export default PageHeader;
