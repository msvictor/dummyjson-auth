import React from 'react';
import { ScrollView } from 'react-native';
import { EDGES } from '~/utils';
import { PageHeader } from './partials';
import { ContentWrapper, Wrapper } from './styles';

type Props = {
  children?: React.ReactNode;
  title?: string;
  subtitle?: string;
  fullWidth?: boolean;
  showBackButton?: boolean;
  suppressTitle?: boolean;
  customHeaderComponent?: React.ReactNode;
  onGoBack?(): void;
};

const PageWrapper: React.FC<Props> = ({
  children,
  title = '',
  subtitle = '',
  fullWidth = false,
  showBackButton = false,
  suppressTitle = false,
  customHeaderComponent,
  onGoBack,
}) => (
  <Wrapper edges={[EDGES.TOP]}>
    <ScrollView>
      {customHeaderComponent || (
        <PageHeader
          title={title}
          subtitle={subtitle}
          showBackButton={showBackButton}
          suppressTitle={suppressTitle}
          onGoBack={onGoBack}
        />
      )}
      <ContentWrapper fullWidth={fullWidth}>{children}</ContentWrapper>
    </ScrollView>
  </Wrapper>
);

export default PageWrapper;
