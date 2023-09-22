import React from 'react';
import { Text, Wrapper } from './styles';

type Props = {
  label: string;
  caption: string | number;
};

const InfoSet: React.FC<Props> = ({ label, caption }) => (
  <Wrapper>
    <Text small>{label}</Text>
    <Text black>{caption}</Text>
  </Wrapper>
);

export default InfoSet;
