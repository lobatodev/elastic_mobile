import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  background-color: ${({color}) => (color ? color : '#F4F6FA')};
  border-radius: 25px;
  padding: 5px;
  width: 100%;
  height: ${({height}) => (height ? height : 'fit-content')};
  justify-content: center;
  align-items: flex-start;
`;
export const Content = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 10px;
`;
