import { View, Text, Image, StyleSheet } from 'react-native';
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons';

const User = ({ img, name, desc }) => {
    return (
        <View style={styles.upperSection}>
            <Image
                style={styles.profileImage}
                source={img}
            />
            <View style={styles.userInfo}>
                <Text style={styles.userName}>{name}</Text>
                <Text style={styles.userTitle}>{desc}</Text>
            <View style={styles.techs}>
                <AntDesign name="linkedin-square" size={24} color="black" />
                <AntDesign name="github" size={24} color="black" />
                <MaterialCommunityIcons name="gmail" size={24} color="black" />
            </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    upperSection: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
        marginTop: 10,
        backgroundColor: '#3c3c3c',
      },
      profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
      },
      userInfo: {
        marginLeft: 20,
      },
      userName: {
        fontSize: 20,
        fontWeight: 'bold',
      },
      userTitle: {
        fontSize: 16,
        color: '#b5b5b5'
      }, techs: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
        padding: 10,
    },
});

export default User;