import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #ff005d;
  padding-top: 20px;
  justify-content: center;
`;

export const Header = styled.View`
  justify-content: center;
  align-items: center;
`;

export const Logo = styled.Image.attrs({
  source: require('../../assets/elastic-logo-rodape-branco.png'),
})`
  width: 60%;
  align-self: center;
`;

export const Title = styled.Text`
  font-size: 45px;
  color: #fff;
  font-weight: bold;
  text-align: center;
  padding-bottom: 20px;
`;

export const Box = styled.View`
  height: 78%;
`;
export const Content = styled.View`
  align-self: center;
  background-color: #fff;
  width: 100%;
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
  height: 100%;
  padding: 25px;
`;

export const InfoLogin = styled.Text`
  font-size: 18px;
  color: #5d5d5d;
  text-align: center;
  padding-bottom: 5px;
`;

export const ButtonLogin = styled.View`
  background-color: #ff005d;
  border-radius: 50px;
  height: 75px;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
`;
