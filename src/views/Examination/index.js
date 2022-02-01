import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, StatusBar} from 'react-native';
import {
  Container,
  Content,
  Header,
  SubHeader,
  TitlesHeader,
  ExerciseName,
  PatientName,
  ValuesBox,
  ValueBox,
  BoxButton,
  DataBox,
  Data,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import BarProcess from '../../components/BarProcess';
import Timer from '../../components/Timer';
import ButtonInput from '../../components/ButtonInput';

Icon.loadFont();
Icon2.loadFont();

const Examination = ({route, navigation}) => {
  const params = route.params || {
    patient: {id: -1, name: 'Nome do paciente'},
    exercise: {id: -1, name: 'Nome do exercício'},
  };

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [weight, setWeight] = useState(0);
  const [weightMax, setWeightMax] = useState(0);
  const [sets, setSets] = useState(0);
  const [repeats, setRepeats] = useState(0);
  const [repeatsListData] = useState([]);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime(time => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    setTimeout(() => {
      getRandomInt(20, 100);
    }, 500);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    navigation.navigate('Report', {
      patient: params.patient,
      exercise: params.exercise,
      data: repeatsListData,
    });
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    function primeNumbers(num) {
      let numbers = new Array();
      for (var i = 0; i <= num; i++) {
        if (isPrime(i)) {
          numbers.push(i);
        }
      }
      return numbers;
    }
    function isPrime(num) {
      for (let i = 2; i < num; i++)
        if (num % i === 0) {
          return false;
        }
      return num > 1;
    }
    const numberss = primeNumbers(
      Math.floor(Math.random() * (max - min + 1)) + min,
    );
    const minu = ('0' + Math.floor((time / 60000) % 60)).slice(-2);
    const seg = ('0' + Math.floor((time / 1000) % 60)).slice(-2);
    const milseg = ('0' + ((time / 10) % 100)).slice(-2);
    const timeCompl = seg + ':' + milseg;

    repeatsListData.push({
      exercise: params.exercise,
      patient: params.patient,
      weight: Math.max(...numberss),
      time: timeCompl,
    });
    if (repeats === params.exercise.reps) {
      setRepeats(0);
      setSets(sets + 1);
    } else {
      setRepeats(repeats + 1);
    }
    setWeightMax(Math.max(...repeatsListData.map(item => item.weight)));
    numberss.forEach(element => {
      setTimeout(() => {
        setWeight(element);
      }),
        1000;
    });
  }

  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <SafeAreaView>
          <Header>
            <SubHeader>
              <Icon
                name="arrow-back-circle"
                size={40}
                color="#fff"
                onPress={() => navigation.goBack()}
              />
              <TitlesHeader>
                <ExerciseName>{params.exercise.name}</ExerciseName>
                <PatientName>{params.patient.name}</PatientName>
              </TitlesHeader>
            </SubHeader>
            <ValuesBox>
              <ValueBox>
                <Text
                  style={{fontSize: 14, fontWeight: 'normal', color: '#fff'}}>
                  Meta
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                  {params.exercise.target}
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                    kg
                  </Text>
                </Text>
              </ValueBox>
              <Icon2 name="weight-lifter" size={35} color="#fff" />
              <ValueBox>
                <Text
                  style={{fontSize: 14, fontWeight: 'normal', color: '#fff'}}>
                  Maxímo
                </Text>
                <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                  {weightMax}
                  <Text
                    style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
                    kg
                  </Text>
                </Text>
              </ValueBox>
            </ValuesBox>
          </Header>
          <Content>
            <Timer reset={handleReset} hiddenMilleSecound={false} time={time} />
            <BarProcess value={weight} />
            <DataBox>
              <Data>
                <Icon2 name="flag" size={30} color="#ff005d" />
                <Text style={{color: '#ff005d', fontSize: 12}}>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>
                    {sets}/{params.exercise.set}
                  </Text>
                  Series
                </Text>
              </Data>
              <Data>
                <Icon2 name="replay" size={30} color="#ff005d" />
                <Text style={{color: '#ff005d', fontSize: 12}}>
                  <Text style={{fontWeight: 'bold', fontSize: 12}}>
                    {repeats}/{params.exercise.reps}
                  </Text>{' '}
                  Repetições
                </Text>
              </Data>
            </DataBox>
            <BoxButton>
              <ButtonInput
                icon={
                  <Icon2
                    name={repeats ? 'replay' : 'play'}
                    size={25}
                    color="#ff005d"
                  />
                }
                outline
                onPress={handleStart}>
                {repeats ? 'Repetir' : 'Iniciar'}
              </ButtonInput>
              <ButtonInput
                icon={<Icon name="checkmark-circle" size={25} color="#fff" />}
                onPress={handlePauseResume}>
                Finalizar
              </ButtonInput>
            </BoxButton>
          </Content>
        </SafeAreaView>
      </Container>
    </>
  );
};

export default Examination;
