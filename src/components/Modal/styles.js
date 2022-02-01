import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #5d5d5d7e;
  position: absolute;
  width: 100%;
  height: 100%;
  bottom: 0;
  z-index: 1;
  justify-content: flex-end;
`;

export const Box = styled.View`
  height: 75%;
  background-color: #ff005d;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  padding: 20px;
  justify-content: space-around;
`;
export const Content = styled.View``;

export const Title = styled.Text`
  font-size: 20px;
  padding-bottom: 10px;
  color: #fff;
  font-weight: bold;
`;
