import React, { FC } from 'react';
import { CardView } from './styles';

type Props = {
  children?: React.ReactNode;
  onPress?: () => void;
};

const Card: FC<Props> = ({ children, onPress, ...rest }) => {
  return (
    <CardView disabled={!onPress} onPress={onPress} {...rest}>
      {children}
    </CardView>
  );
};

export default Card;
