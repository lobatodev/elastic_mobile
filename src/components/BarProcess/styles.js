import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ebebeb;
  border-radius: 10px;
  height: 225px;
  width: 110px;
  max-height: 300px;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  margin-top: 10px;
`;

export const Bar = styled.View`
  background-color: #ff005d;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 110px;
  height: ${({value}) => (value ? value : 0)}%;
`;

export const ValueBox = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 60px;
  height: 100px;
  z-index: 1;
  position: absolute;
  width: 100%;
  height: 100%;
`;
