
import { Text, View, StyleSheet, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Card = function () {
    return (
        <View style={styles.container}>
            <View>
                <Text>
                    {distance}m
                </Text>
                {price && <Text>
                    {price} Akz
                </Text>}
                local && <Text>
                    {local[0].address_components[1].long_name}
                </Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        width: '100%',
    },
    text: {
        width: '100%',
        marginLeft: '55%',
    },
    textDecontos: {
        width: '100%',
        marginLeft: '45%',
    },
    textDecontosI: {
        width: '100%',
        fontSize: 10,
        color: '#888'
    },
    seta: {
        textAlign: 'right',
        fontWeight: '900',
        width: '100%',
        marginRight: '55%',

    },
    setaDesconta: {
        textAlign: 'right',
        fontWeight: '900',
        width: '100%',
        marginRight: '25%',

    },
    menu: {
        justifyContent: 'space-around',
        alignItems: 'center',
        height: 70,
        width: '100%',
        borderBottomWidth: 1,
        borderColor: '#EEEEEE',
        flexDirection: 'row',
    }
});

export default Card;


