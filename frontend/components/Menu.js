import { Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/authProvider';
import { useContext } from 'react'
export const Menu = () => {
    const navigation = useNavigation();
    const { corrida, setCorrida } = useContext(AuthContext);

    return (
        <View style={styles.container}>
            <View style={{ justifyContent: 'space-between', alignItems: 'center', width: '100%', height: '80%', marginTop: -40 }}>
                <TouchableOpacity style={styles.destination} onPress={() => { setCorrida(false) }}>
                    <View style={styles.where}>
                        <Text style={{ fontWeight: 600, fontSize: 16, marginLeft: 20 }}>Para onde?</Text>
                    </View>
                    <Ionicons name='arrow-forward-outline' width={50} color={'#000'} />
                </TouchableOpacity>
                <View style={styles.blocks}>

                    <TouchableOpacity
                        style={styles.block}
                        onPress={() => navigation.navigate('Historico')}>
                        <Text style={styles.blockText1}>Histórico</Text>


                    </TouchableOpacity>
                    <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('SetVeiculo')}>
                        <Text style={styles.blockText1}>Viagem</Text>
                        <Text>15 min</Text>
                        <Text>
                            <Ionicons name='pin-outline' width={50} color={'#000'} />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.block} onPress={() => navigation.navigate('SetVeiculo')}>
                        <Text style={styles.blockText1}>Definições</Text>

                    </TouchableOpacity>
                </View>

                <View style={styles.bottomBlocks} >
                    <TouchableOpacity style={styles.bigBlock} onPress={() => navigation.navigate('Maps')}>
                        <Text style={styles.blockText1}>Igreja Católica</Text>
                        <Text>8min</Text>
                        <Text>
                            <Ionicons name='pin-outline' width={50} color={'#000'} />
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.block, { backgroundColor: '#FED190' }]}>
                        <Text style={styles.blockText1}>Poupa 50%</Text>
                        <Text>Numa viagem</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        height: '55%',
        bottom: '45%',
        position: 'absolute',
        zIndex: 1,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        borderRadius: 10,
        shadowColor: '#000',
        shadowOpacity: 0.025,
        backgroundColor: '#fff'
    },
    destination: {
        width: '95%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 15,
        backgroundColor: '#EEEEEE',
        height: 60,
    },
    where: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    blocks: {
        width: '95%',
        marginTop: 8,
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    block: {
        height: '90%',
        width: '30%',
        backgroundColor: '#eee',
        borderRadius: 15,
        justifyContent: 'center',
        alignItems: 'center'
    },
    blockText1: {
        fontSize: 16,
        fontWeight: 600
    },
    bottomBlocks: {
        width: '93%',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    bigBlock: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '66%',
        height: '90%',
        borderRadius: 15,
        backgroundColor: '#eee'
    }


})