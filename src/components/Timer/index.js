import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {Container, Time} from './styles';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
Icon.loadFont();

const Timer = ({time, reset, hiddenMilleSecound, ...rest}) => {
  return (
    <Container {...rest}>
      <Text onPress={() => reset()}>{time ? 'Zerar' : ''}</Text>
      <Icon name="timer" size={32} color="#FF005D" />
      <Time>
        {('0' + Math.floor((time / 60000) % 60)).slice(-2)}:
        {('0' + Math.floor((time / 1000) % 60)).slice(-2)}
        {!hiddenMilleSecound && ':' + ('0' + ((time / 10) % 100)).slice(-2)}
      </Time>
    </Container>
  );
};

export default Timer;
