import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';
// import { useNavigation } from '@react-navigation/native'

import * as cursesDB from '../../database/curses.json'

import { AntDesign } from '@expo/vector-icons';
import cursesST from './cursesST'

const Curses = ({navigation, route}) => {

    const {item} = route.params 

    // const navigation = useNavigation()

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <>
            <View style={cursesST.container}>
                <ImageBackground

                    //PUXAR DO JSON
                    source={require("../../assets/bg.png")}
                    style={cursesST.header}>

                    <View style={cursesST.headerMenu}>
                        <Image source={require("../../assets/gears.png")}
                            styled={cursesST.img1} />
                        <Image source={require("../../assets/menu.png")}
                            styled={cursesST.img2} />
                    </View>

                    <TouchableOpacity
                            style={cursesST.headerButton}
                            onPress={navigateBack}>
                            <Text>
                                <AntDesign name="leftcircleo" size={40} color="white" />
                            </Text>
                        </TouchableOpacity>

                    <View style={cursesST.headerLabels}>
                        {/* PUXAR DO JSON */}
                        <Text style={cursesST.headerLabel}> {item.title} </Text>
                    </View>
                </ImageBackground>

                <View style={cursesST.curseDesc}>
                    <Text> {item.describe.about}  </Text>

                    <View style={cursesST.curseIMGcontainer}>
                        <Text> IMG1 </Text>
                        <Text> IMG 2 </Text>
                    </View>

                </View>

            </View>
        </>
    )
}

export default Curses