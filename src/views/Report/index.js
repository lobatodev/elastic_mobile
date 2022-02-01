import React from 'react';
import {SafeAreaView, StatusBar, Dimensions, Text} from 'react-native';
const screenWidth = Dimensions.get('window').width;
import {
  Container,
  Content,
  Header,
  SubHeader,
  TitlesHeader,
  ExerciseName,
  ReportName,
} from './styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';

import {BarChart} from 'react-native-chart-kit';

Icon.loadFont();
Icon2.loadFont();

const Report = ({route, navigation}) => {
  const params = route.params || {
    patient: {id: -1, name: 'Nome do paciente'},
    exercise: {id: -1, name: 'Nome do exercício'},
    data: {time: 0, weight: 0, repetitions: 0, series: 0},
  };
  const data = {
    labels: params.data.length > 0 && [...params.data.map(item => item.time)],
    datasets: [
      {
        data: params.data.length > 0 && [
          ...params.data.map(item => item.weight),
        ],
      },
    ],
  };
  const chartConfig = {
    backgroundColor: '#ffffff',
    backgroundGradientFrom: '#ffffff',
    backgroundGradientTo: '#ffffff',
    color: (opacity = 1) => `rgb(255, 0, 93, ${opacity})`,
    barPercentage: 0.5,
  };
  return (
    <>
      <StatusBar barStyle="light-content" />
      <Container>
        <SafeAreaView>
          <Header>
            <SubHeader>
              <Icon
                name="home"
                size={30}
                color="#fff"
                onPress={() => navigation.navigate('Home')}
              />
              <TitlesHeader>
                <ReportName>Relatorio</ReportName>
                <ExerciseName>{params.patient.name}</ExerciseName>
                <ReportName>{params.exercise.name}</ReportName>
              </TitlesHeader>
            </SubHeader>
          </Header>
          <Content>
            {params.data.length > 0 ? (
              <BarChart
                style={{paddingTop: 20}}
                data={data}
                width={screenWidth - 20}
                height={250}
                yAxisLabel="kg "
                chartConfig={chartConfig}
                verticalLabelRotation={30}
              />
            ) : (
              <Text>Não há dados suficientes.</Text>
            )}
          </Content>
        </SafeAreaView>
      </Container>
    </>
  );
};

export default Report;
