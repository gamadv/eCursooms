import React from 'react';
import { Text, View, TouchableOpacity, FlatList, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native'

import * as cursesDB from '../../database/curses.json'

import homeST from './homeST'

const Home = () => {

    const navigation = useNavigation()

    function navigateToCurses(propRaj) {
        navigation.navigate('Curses')
    }

    return (
        <View style={homeST.container}>

            <ImageBackground
                source={require("../../assets/bg.png")}
                style={homeST.header}>

                <View style={homeST.headerMenu}>
                    <Image source={require("../../assets/gears.png")}
                        styled={homeST.img1} />
                    <Image source={require("../../assets/menu.png")}
                        styled={homeST.img1} />
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
                    <View>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('Curses', { item })}
                            style={homeST.curse}>
                            <Text> {item.title}</Text>

                            <ImageBackground 
                                style={homeST.curseIMG}
                                source={{uri: item.describe.img1}}></ImageBackground>
                        <Image
                        style={homeST.curseIMG} 
                        source={{ uri: item.describe.img1 }} />
                        </TouchableOpacity>
                        
                    </View>
                )}
            />
        </View>
    )
}

export default Home