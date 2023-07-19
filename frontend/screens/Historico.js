import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Ionicons from '@expo/vector-icons/Ionicons';
import axios from 'axios';

const Historico = () => {
    const viagens = [
        {
            id: '1',
            origem: 'X , y',
            destino: 'X , Y',
            preco: 'kz 7500,00',
            estado: 'Confirmado',
        },
        {
            id: '2',
            origem: 'X , y',
            destino: 'X , Y',
            preco: 'kz 7500,00',
            estado: 'Confirmado',
        },
        {
            id: '3',
            origem: 'X , y',
            destino: 'X , Y',
            preco: 'kz 7500,00',
            estado: 'Confirmado',
        },
        {
            id: '4',
            origem: 'X , y',
            destino: 'X , Y',
            preco: 'kz 7500,00',
            estado: 'Confirmado',
        },
        {
            id: '5',
            origem: 'X , y',
            destino: 'X , Y',
            preco: 'kz 7500,00',
            estado: 'Confirmado',
        },
    ];

    const [viagem, setViagem] = useState(null);
    const renderItem = ({ item }) => (
        <View style={styles.item}>
            <View style={styles.header}>
                <View style={styles.itemOrde}>
                    <Ionicons name="navigate" size={20} color="black" />
                    <Text style={styles.origem}>{item.origem}</Text>
                </View>
                <View style={styles.itemOrde}>
                    <Ionicons name="pin" size={20} color="black" />
                    <Text style={styles.destino}>{item.destino}</Text>
                </View>
            </View>
            <View style={styles.footer}>
                <Text style={styles.destino}>{item.preco_pago}</Text>
                <Text style={styles.destino}>{item.estado}</Text>
            </View>
        </View>
    );
    const navigation = useNavigation();
    useEffect(() => {
        (async () => {
            axios.get('http://192.168.18.2:3000/viagem').then((res) => {
                setViagem(res.data);

            }).catch((e) => {
                console.log(e.message);
            })

        })();
    }, []);
    return (
        <>
            <View style={styles.container}>
                <Pressable onPress={() => navigation.goBack()}>
                    <Text style={styles.btnvoltar}><Ionicons name="arrow-back-circle-outline" size={40} color="black" /></Text>
                </Pressable>
                <FlatList
                    data={viagem}
                    renderItem={renderItem}
                    keyExtractor={(item) => console.log(item.id_viagem)}
                />

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        marginTop: '15%',
        width: '100%',
    },

    btnvoltar: {
        margin: 5,
        fontWeight: 300,
        fontSize: 20,
        marginRight: '10%',
    },
    itemOrde: {
        flexDirection: 'row',
        margin: 10
        ,
    },
    item: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 6,
        paddingRight: 12,
        marginBottom: 8,
        borderRadius: 8,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowRadius: 4,
        elevation: 2,
    },
    origem: {
        fontSize: 16,
        fontWeight: 'bold',
        marginLeft: 5,
    },
    destino: {
        fontSize: 14,
        color: '#888',
        marginBottom: 15,
    },
    footer: {
        flex: 1,
        flexDirection: 'column',
        width: '54%',
        alignItems: 'flex-end',
        marginTop: 10,
        marginBottom: 10,
    },
});

export default Historico;
