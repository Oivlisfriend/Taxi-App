import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Hamburger = () => {
    const navigation = useNavigation();
    return( 
        <View style={styles.container}>
            <TouchableOpacity 
            style={styles.hamurger}
            onPress={() => navigation.navigate('SiderMenu')}
            >
                <Ionicons name='menu-outline' size={40} color={'#000'} />
            </TouchableOpacity>
            <View style={styles.logo}>
                <Text style={styles.logoText}>Parar é morrer!</Text>
            </View>
        </View>
        )
}


const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        top: -90,
        flex: 1,
        width: '90%',
        height: '40%',
        position: 'absolute',
        zIndex: 1,
    },
    hamburger: {

    },
    logoText: {
        fontSize: 24,
        fontWeight: 600
    }
})