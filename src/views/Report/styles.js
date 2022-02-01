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

export const ReportName = styled.Text`
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

export const Content = styled.View`
  background-color: #fff;
  padding: 15px 25px 25px 25px;
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  justify-content: center;
  align-items: center;
`;

export const BoxButton = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
`;
