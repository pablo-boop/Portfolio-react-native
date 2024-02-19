import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';
import { FontAwesome, FontAwesome5 } from '@expo/vector-icons';

const Card = ({ title, desc, projetos, card1Img, card1Title, card2Img, card2Title }) => {
  return (
    <View style={styles.border}>
      <View style={styles.lowerSection}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <View style={styles.technologies}>
          <ScrollView horizontal={true}>
          <FontAwesome style={styles.icons} name="html5" size={50} color="black" />
          <FontAwesome style={styles.icons} name="css3" size={50} color="black" />
          <FontAwesome5 style={styles.icons}  name="js" size={50} color="black" />
          <FontAwesome5 style={styles.icons}  name="react" size={50} color="black" />
          <FontAwesome5 style={styles.icons}  name="node-js" size={50} color="black" />
          </ScrollView>
        </View>
        <Text style={styles.sectionText}>
          {desc}
        </Text>
        <Text style={styles.sectionTitle}>{projetos}</Text>
        <View style={styles.cardsContainer}>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={card1Img}
            />
            <Text style={styles.cardName}>{card1Title}</Text>
          </View>
          <View style={styles.card}>
            <Image
              style={styles.cardImage}
              source={card2Img}
            />
            <Text style={styles.cardName}>{card2Title}</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  border: {
    backgroundColor: '#3c3c3c',
    borderRadius: 10,
    padding: 2,
    height: 'auto'
  },
  techs: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    padding: 10,
  },
  iconTechs: {
    flex: 1,
    width: 30,
    height: 30,
    resizeMode: 'contain'
  },
  technologies: {
    justifyContent: 'center',
    alignItems: 'center',
    gap: 30,
    padding: 15,
  },
  icons: {
    margin: 10
  },
  lowerSection: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 10,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: '600',
    margin: 15,
    textAlign: 'center',
  },
  sectionTitleJu: {
    fontSize: 22,
    fontWeight: '600',
    margin: 15,
    textAlign: 'center',
    color: '#fff',
  },
  sectionText: {
    fontSize: 16,
    marginBottom: 25,
    textAlign: 'justify',
  },
  cardsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginHorizontal: 5,
  },
  cardImage: {
    width: 150,
    height: 100,
    borderRadius: 25,
    resizeMode: 'contain',
  },
  cardName: {
    fontSize: 15,
    fontWeight: '600',
    textAlign: 'center',
    margin: 10,
  },
});
export default Card;