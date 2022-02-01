import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({outline}) => (outline ? 'transparent' : '#ff005d')};
  border: ${({outline}) =>
    outline ? '2px solid #ff005d' : '0px solid #ff005d'};
  color: ${({outline}) => (outline ? '#ff005d' : '#fff')};
  border-radius: 10px;
  height: 50px;
  flex-direction: column;
  justify-content: center;
  width: 120px;
  align-items: center;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 14px;
  color: ${({outline}) => (outline ? '#ff005d' : '#fff')};
  font-weight: bold;
`;

export const IconBox = styled.View``;
