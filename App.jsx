import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import User from './components/User';
import Card from './components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <User img={require('./assets/profile.jpg')} name={'Pablo Daniel Couto'} desc={'Aluno 3TDS2'}/>
      <Card 
      title={'Resumo da atuação'} 
      desc={'Há um ano, iniciei meus estudos em programação no SENAI Valinhos. Tenho dedicado tempo e esforço, desenvolvendo sólidos conhecimentos em HTML5, CSS3, JavaScript, React, NodeJs e Git, utilizando frameworks React como Expo e Next. Destaco-me pelo comprometimento e participação ativa nas atividades do curso.'} 
      projetos={'Projetos'}
      card1Img={require('./assets/jujutsu.jpg')}
      card1Title={'Jujutsu Kaisen - Front End'}
      card2Img={require('./assets/jujutsu.jpg')}
      card2Title={'Jujutsu Kaisen - Back End'}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
});