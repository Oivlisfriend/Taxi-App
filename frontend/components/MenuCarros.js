import { Text, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../contexts/authProvider';
import { useContext, useState, useEffect } from 'react'
import tw from 'tailwind-react-native-classnames';
import SetVeiculo from './setVeiculo';
import SetMotorista from './SetMotorista';
export const MenuCarros = () => {
    const navigation = useNavigation();
    const now = new Date();
    const {
        setCarrosProximos,
        carrosProximos,
        corrida,
        setCorrida,
        localOrigin,
        setLocalOrigin,
        localDestination,
        setLocalDestination,
        showMotorista,
        setShowMotorista } = useContext(AuthContext);

    return (
        <View style={{


            bottom: '30%',
        }}>

            <View style={{

                backgroundColor: '#fff',
                marginBottom: '5%',
                marginTop: '5%',
                borderRadius: 34,
                width: 34,
                height: 34,
                marginLeft: '3%',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                {showMotorista ?
                    <Ionicons name="arrow-back" size={24} color="black" onPress={() => { setCarrosProximos(!carrosProximos) }} />
                    : <Ionicons name="arrow-back" size={24} color="black" onPress={() => { setShowMotorista(!showMotorista) }} />
                }
            </View>

            <View style={{
                width: '100%',
                height: '60%',
                backgroundColor: '#fff',

                borderRadius: 34
            }}>

                <View style={[tw`border-b-2 pb-4`, { borderColor: '#eeeeee' }]}>
                    <View style={tw`flex-row`}>

                        <Text style={tw`font-bold text-2xl ml-4 mt-3`}>A verrificar carros nas proximidades</Text>
                        <View style={[tw` items-end  mt-3 `, { width: '30%' }]}>
                            <Text style={tw` text-base `}>{now.getHours()}:{now.getMinutes()}</Text>
                        </View>
                    </View>
                    <Text style={tw` text-base ml-4 mt-0`}>Que estão a ir na tua direcção</Text>
                </View>
                <View style={tw`flex-row mt-4 items-center`}>
                    {showMotorista ? <SetVeiculo /> : <SetMotorista />}
                </View>
                <View style={tw`flex-row ml-2  mb-4 items-center`}>
                    <View style={[tw`ml-1  items-center rounded-lg`, { backgroundColor: 'hotpink', width: 40, height: 40, padding: 10 }]}>
                        <Ionicons name='pin-outline' size={25} color={'#fff'} />
                    </View>
                    <View style={tw`ml-3 w-full`}>
                        <Text style={tw`text-gray-400 text-xs`}>Local de recolha</Text>
                        <Text style={tw`text-base`}>
                            {localOrigin}
                        </Text>

                    </View>

                </View>
                <View style={[tw`border-b-2 mb-3  ml-16 `, { marginTop: -12, color: 'black', borderColor: 'rgb(238, 238, 238)' }]}>

                </View>

                <View style={tw`flex-row ml-2 mt-2 mb-3 items-center`}>
                    <View>
                        <Ionicons style={[tw`border-b-2  ml-4 w-full`]} name='flag' size={22} color={'#111'} />
                    </View>

                    <View style={tw`ml-3 w-3/5`}>
                        <Text style={tw`text-gray-400 text-xs`}>Destino</Text>
                        <Text style={tw`text-base`}>
                            {localDestination}
                        </Text>
                    </View>
                    <View style={tw`bg-gray-200 rounded-3xl p-3 `}>
                        <Text>Paragem</Text>
                    </View>
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