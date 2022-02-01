import styled from 'styled-components/native';

export const Container = styled.View`
  padding-top: 15px;
`;

export const Label = styled.Text`
  font-size: 20px;
  color: #5d5d5d;
  text-align: left;
`;

export const InputContainer = styled.TextInput.attrs({
  placeholderTextColor: '#adadad',
})`
  border: 1px solid ${({focus}) => (focus ? '#ff005d' : '#adadad')};
  border-radius: 10px;
  font-size: 20px;
  height: 60px;
  padding: 2px 10px;
`;
