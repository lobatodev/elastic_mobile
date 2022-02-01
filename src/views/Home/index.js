import React, {useState, useLayoutEffect} from 'react';
import {StatusBar, SafeAreaView, Image, Platform, Text} from 'react-native';
import Card from '../../components/Card';
import Modal from '../../components/Modal';
import {
  Container,
  Header,
  ContentText,
  Avatar,
  Name,
  Salutation,
  Content,
  Title,
  ImgCard,
  InfoCard,
  TitleCard,
  PatientCard,
  DescriptionCard,
  PatientList,
} from './styles';

const HomeScreen = ({navigation}) => {
  const exerciseDB = [
    {id: 1, name: 'Abdominal', target: 20, set: 3, reps: 5},
    {id: 2, name: 'Flexão do cotovelo', target: 30, set: 2, reps: 10},
    {id: 3, name: 'Extensão do cotovelo direito', target: 15, set: 3, reps: 7},
    {id: 4, name: 'Extensão do cotovelo esquerdo', target: 15, set: 3, reps: 7},
  ];
  const patientDB = [
    {id: 1, name: 'Lucas Carneiro'},
    {id: 2, name: 'Romulo Thiago'},
    {id: 3, name: 'Vinicius Muniz'},
    {id: 4, name: 'Bruno Rossato'},
    {id: 5, name: 'Lucas Carneiro'},
    {id: 6, name: 'Romulo Thiago'},
    {id: 7, name: 'Vinicius Muniz'},
    {id: 8, name: 'Bruno Rossato'},
    {id: 9, name: 'Lucas Carneiro'},
    {id: 10, name: 'Romulo Thiago'},
    {id: 11, name: 'Vinicius Muniz'},
    {id: 12, name: 'Bruno Rossato'},
  ];

  const [modalTitle, setModalTitle] = useState('');
  const [modalExercise, setModalExercise] = useState(false);
  const [modalPatient, setModalPatinet] = useState(false);
  const [paramModal, setParamModal] = useState('');
  const [exercise, setExercise] = useState(false);
  const [exerciseData, setExerciseData] = useState(exerciseDB);
  const [exerciseList, setExerciseList] = useState(null);

  const [patient, setPatient] = useState(false);
  const [patientData, setPatientData] = useState(patientDB);

  function handleExercise() {
    setExerciseList(
      exerciseData.map(item => {
        return (
          <Card
            key={item.id}
            color="#fff"
            height="60px"
            style={{marginTop: 15, alignItems: 'center'}}
            onPress={() =>
              navigation.navigate('Examination', {
                patient: patient,
                exercise: item,
              })
            }>
            <TitleCard color="#5D5D5D" style={{fontSize: 16}}>
              {item.name || 'Exercício'}
            </TitleCard>
          </Card>
        );
      }),
    );
  }
  function handleModal(param) {
    if (param === 'exercise') {
      setPatient('');
      setModalExercise(false);
      setModalPatinet(true);
    } else if (param === 'patient') {
      setExercise('');
      setModalExercise(false);
      setModalPatinet(false);
    }
  }

  useLayoutEffect(() => {
    if (modalPatient && !patient) {
      setModalExercise(false);
      setModalPatinet(true);
      setModalTitle('Escolha um paciente');
      setParamModal('patient');
    } else if (patient) {
      handleExercise();
      setModalPatinet(false);
      setModalExercise(true);
      setParamModal('exercise');
      setModalTitle('Escolha um exercício');
    }
  }, [modalExercise, modalPatient, patient]);

  return (
    <>
      <StatusBar
        barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
      />
      <Container>
        <SafeAreaView>
          <Header>
            <ContentText>
              <Salutation>Olá,</Salutation>
              <Name>Marcus</Name>
            </ContentText>
            <Avatar source={require('../../assets/avatar.png')} />
          </Header>
          <Content>
            <Card color="#F4F6FA" height="150px" style={{marginBottom: 15}}>
              <ImgCard>
                <Avatar source={require('../../assets/avatar.png')} />
              </ImgCard>
              <InfoCard>
                <TitleCard>Última Avaliação</TitleCard>
                <PatientCard>Vinicius Muniz</PatientCard>
                <DescriptionCard>Extensão do cotovelo direto</DescriptionCard>
              </InfoCard>
            </Card>
            <Title>Menu</Title>
            <Card
              color="#FF005D"
              height="110px"
              style={{marginTop: 15}}
              onPress={() => setModalPatinet(true)}>
              <ImgCard>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('../../assets/secure-data-pana.png')}
                />
              </ImgCard>
              <InfoCard>
                <TitleCard color="#fff">Avaliar</TitleCard>
              </InfoCard>
            </Card>
            <Card
              color="#F4F6FA"
              height="110px"
              style={{marginTop: 15}}
              onPress={() => setModalPatinet(true)}>
              <InfoCard>
                <TitleCard color="#5D5D5D">Pacientes</TitleCard>
              </InfoCard>
              <ImgCard>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('../../assets/health-professional-team-pana.png')}
                />
              </ImgCard>
            </Card>
            <Card
              color="#5D5D5D"
              height="110px"
              style={{marginTop: 15, marginBottom: 25}}
              onPress={() => navigation.navigate('Report')}>
              <ImgCard>
                <Image
                  style={{width: 100, height: 100}}
                  source={require('../../assets/analytics-pana.png')}
                />
              </ImgCard>
              <InfoCard>
                <TitleCard color="#fff">Relatórios</TitleCard>
              </InfoCard>
            </Card>
          </Content>
        </SafeAreaView>
      </Container>
      {modalExercise && (
        <Modal title={modalTitle} back={handleModal} param={paramModal}>
          {exerciseList}
        </Modal>
      )}
      {modalPatient && (
        <Modal title={modalTitle} back={handleModal} param={paramModal}>
          <PatientList
            data={patientData}
            renderItem={({item}) => (
              <Text
                style={{
                  padding: 15,
                  fontSize: 14,
                  height: 55,
                  fontWeight: 'bold',
                  borderBottomColor: '#5D5D5D',
                  borderBottomWidth: 0.5,
                  color: '#5D5D5D',
                }}
                className="item"
                onPress={() =>
                  setPatient(item) &
                  setModalPatinet(false) &
                  setModalExercise(false)
                }>
                {item.name}
              </Text>
            )}
          />
        </Modal>
      )}
    </>
  );
};
export default HomeScreen;
