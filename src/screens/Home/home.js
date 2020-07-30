import React from 'react';
import { Text, View, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as cursesDB from '../../database/curses.json'

import homeST from './homeST'

const Home = () => {

    const navigation = useNavigation()

    return (
        <View style={homeST.container}>
            <ImageBackground
                source={require("../../assets/bg.png")}
                style={homeST.header}>

                <View style={homeST.headerMenu}>
                    <Image source={require("../../assets/gears.png")} />
                    <Image source={require("../../assets/menu.png")} />
                </View>

                <View style={homeST.headerLabels}>
                    <Text style={homeST.headerLabel}> CURSOS E TREINAMENTOS</Text>
                    <Text style={homeST.headerSub}> Selecione o curso ou treinamento
                    que deseja.</Text>
                </View>
            </ImageBackground>

            <FlatList
                style={homeST.curseList}
                data={cursesDB.curses}
                keyExtractor={curses => String(curses.id)}
                renderItem={({ item }) => (

                    <TouchableOpacity
                        style={homeST.curse}
                        onPress={() => navigation.navigate('Curses', { item })}>
                        <Text style={homeST.texts}> {item.title}</Text>
                        <Image
                            style={homeST.curseIMG}
                            source={{ uri: item.icoLogo }} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

export default Home