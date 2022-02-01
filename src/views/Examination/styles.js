import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #ff005d;
  flex-direction: column;
`;

export const Header = styled.View`
  flex-direction: column;
  padding: 5px 25px 0px 25px;
`;

export const SubHeader = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
export const TitlesHeader = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const PatientName = styled.Text`
  font-size: 14px;
  font-weight: normal;
  color: #fff;
`;

export const ExerciseName = styled.Text`
  color: #fff;
  width: 90%;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const ValuesBox = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 80px;
`;
export const ValueBox = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
`;

export const Content = styled.View`
  background-color: #fff;
  padding: 3px 25px 25px 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  justify-content: space-around;
  align-items: center;
`;

export const BoxButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;

export const DataBox = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0px 25px;
  align-items: center;
  margin-top: 10px;
  width: 100%;
`;

export const Data = styled.View`
  justify-content: center;
  align-items: center;
`;
