import React from 'react';
import { InfoSet } from '~/components';
import { translate } from '~/utils';
import {
  Avatar,
  Card,
  CardTitle,
  CardWrapper,
  DefaultIcon,
  InfoWrapper,
  Photo,
  Row,
  Subtitle,
  Title,
  Wrapper,
} from './styles';

type Props = {
  user: UserData;
  onGoBack?(): void;
};

const Profile: React.FC<Props> = ({ user, onGoBack }) => (
  <Wrapper fullWidth suppressTitle showBackButton onGoBack={onGoBack}>
    <CardWrapper>
      <Title>{translate('profile')}</Title>
      <Avatar>
        {user?.image ? (
          <Photo source={{ uri: user?.image }} />
        ) : (
          <DefaultIcon />
        )}
      </Avatar>
      <Subtitle>
        {user?.firstName} {user?.maidenName} {user?.lastName}
      </Subtitle>
    </CardWrapper>

    <InfoWrapper>
      <Card>
        <CardTitle>{translate('personalInfo')}</CardTitle>
        <Row>
          <InfoSet label={translate('email')} caption={user.email ?? ''} />
          <InfoSet label={translate('age')} caption={user.age ?? ''} />
        </Row>
        <Row>
          <InfoSet label={translate('gender')} caption={user.gender ?? ''} />
          <InfoSet label={translate('phone')} caption={user.phone ?? ''} />
        </Row>
      </Card>

      <Card>
        <CardTitle>{translate('addressInfo')}</CardTitle>
        <Row>
          <InfoSet
            label={translate('address')}
            caption={user.address?.address ?? ''}
          />
          <InfoSet
            label={translate('postalCode')}
            caption={user.address?.postalCode ?? ''}
          />
        </Row>
        <Row>
          <InfoSet
            label={translate('city')}
            caption={user.address?.city ?? ''}
          />
          <InfoSet
            label={translate('state')}
            caption={user.address?.state ?? ''}
          />
        </Row>
      </Card>

      <Card>
        <CardTitle>{translate('bankInfo')}</CardTitle>
        <Row>
          <InfoSet
            label={translate('cardType')}
            caption={user.bank?.cardType ?? ''}
          />
          <InfoSet
            label={translate('cardExpire')}
            caption={user.bank?.cardExpire ?? ''}
          />
          <InfoSet
            label={translate('currency')}
            caption={user.bank?.currency ?? ''}
          />
        </Row>
      </Card>

      <Card>
        <CardTitle>{translate('companyInfo')}</CardTitle>
        <Row>
          <InfoSet
            label={translate('companyName')}
            caption={user.company?.name ?? ''}
          />
          <InfoSet
            label={translate('companyDepartment')}
            caption={user.company?.department ?? ''}
          />
        </Row>
        <Row>
          <InfoSet
            label={translate('companyTitle')}
            caption={user.company?.title ?? ''}
          />
        </Row>
      </Card>
    </InfoWrapper>
  </Wrapper>
);

export default Profile;
