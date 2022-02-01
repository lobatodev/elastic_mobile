import React from 'react';
import {Container, Title, IconBox} from './styles';

const ButtonInput = ({children, outline, icon, ...rest}) => {
  return (
    <Container outline={outline} {...rest}>
      <IconBox>{icon}</IconBox>
      <Title outline={outline}>{children}</Title>
    </Container>
  );
};
export default ButtonInput;
