import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 5px 20px 0px 20px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ContentText = styled.View`
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;

export const Salutation = styled.Text`
  font-size: 18px;
  text-align: left;
  margin-bottom: -6px;
  color: #000;
`;

export const Name = styled.Text`
  font-size: 28px;
  font-weight: bold;
  text-align: left;
  color: #000;
`;

export const Avatar = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const Content = styled.ScrollView`
  padding-top: 20px;
  height: 90%;
`;

export const Title = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: #000;
`;

export const ImgCard = styled.View`
  align-self: flex-start;
  padding-right: 20px;
`;

export const InfoCard = styled.View`
  padding-bottom: 10px;
  flex-direction: column;
  justify-content: center;
`;

export const TitleCard = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${({color}) => (color ? color : '#000')};
`;

export const PatientCard = styled.Text`
  font-size: 16px;
  color: #8892ac;
`;

export const DescriptionCard = styled.Text`
  font-size: 12px;
  color: #8892ac;
`;

export const PatientList = styled.FlatList`
  margin-top: 20px;
  height: 70%;
  background-color: #fff;
  border-radius: 25px;
  padding: 5px 0px 15px 5px;
`;
