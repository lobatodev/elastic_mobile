import React from 'react';
import {Text} from 'react-native';
import {Container, Bar, ValueBox} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const BarProcess = ({value}) => {
  const styleBar = {fontSize: 16, fontWeight: 'normal', color: '#fff'};
  return (
    <Container>
      <ValueBox>
        <Icon name="weight-lifter" size={35} color="#fff" />
        <Text style={styleBar}>Peso</Text>
        <Text style={{fontSize: 30, fontWeight: 'bold', color: '#fff'}}>
          {value}
          <Text style={styleBar}>kg</Text>
        </Text>
      </ValueBox>
      <Bar value={value}></Bar>
    </Container>
  );
};
export default BarProcess;
