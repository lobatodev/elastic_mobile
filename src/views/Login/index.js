import React from 'react';
import {
  KeyboardAvoidingView,
  Text,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  StatusBar,
} from 'react-native';
import {
  Container,
  Header,
  Logo,
  Title,
  Box,
  Content,
  InfoLogin,
  ButtonLogin,
} from './styles';
import Input from '../../components/Input';

const Login = ({signedIn, navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
        style={{flex: 1, backgroundColor: 'transparent'}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <Container>
            <Header>
              <Logo />
            </Header>
            <Box>
              <Title>Login</Title>
              <Content>
                <InfoLogin>Email: admin@mail.com</InfoLogin>
                <InfoLogin>Senha: admin</InfoLogin>
                <Input
                  type="email"
                  label="Email"
                  placeholder="Digite seu email.."
                />
                <Input
                  type="password"
                  label="Senha"
                  secureTextEntry={true}
                  placeholder="*******"
                />
                <ButtonLogin onPress={() => signedIn(true)}>
                  <Text
                    style={{fontSize: 30, color: '#fff', fontWeight: 'bold'}}>
                    Entrar
                  </Text>
                </ButtonLogin>
              </Content>
            </Box>
          </Container>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </>
  );
};

export default Login;
