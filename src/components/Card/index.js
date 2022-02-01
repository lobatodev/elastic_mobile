import React from 'react';
import {Container, Content} from './styles';

const Card = ({children, color, height, ...rest}) => {
  return (
    <Container color={color} height={height} {...rest}>
      <Content>{children}</Content>
    </Container>
  );
};
export default Card;
