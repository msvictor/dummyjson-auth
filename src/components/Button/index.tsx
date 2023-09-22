import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { Loader, Text, Wrapper } from './styles';

type Props = TouchableOpacityProps & {
  type: ButtonType;
  label: string;
  loading?: boolean;
};

const Button: React.FC<Props> = ({ type, label, loading, ...rest }) => (
  <Wrapper type={type} {...rest}>
    <Text type={type}>
      {label}
      {loading && <Loader />}
    </Text>
  </Wrapper>
);

export default Button;
