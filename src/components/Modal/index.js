import React from 'react';
import {Container, Box, Content, Title} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';

const Modal = ({children, title, back, param, ...rest}) => {
  return (
    <Container {...rest}>
      <Box>
        <Content>
          <Title>{title || 'test'}</Title>
          {children}
        </Content>
        <Icon
          name="arrow-back-circle"
          size={45}
          color="#fff"
          onPress={() => back(param)}
        />
      </Box>
    </Container>
  );
};
export default Modal;
