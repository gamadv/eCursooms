import React from 'react';
import { Text, View, TouchableOpacity, ImageBackground, Image } from 'react-native';

import { AntDesign } from '@expo/vector-icons';
import cursesST from './cursesST'

const Curses = ({ navigation, route }) => {

    const { item } = route.params

    function navigateBack() {
        navigation.goBack()
    }

    return (
        <View style={cursesST.container}>
            <ImageBackground
                style={cursesST.header}
                source={{ uri: item.imgSplash }}>

                <View style={cursesST.headerMenu}>
                    <Image source={require("../../assets/gears.png")} />
                    <Image source={require("../../assets/menu.png")} />
                </View>

                <TouchableOpacity
                    style={cursesST.headerButton}
                    onPress={navigateBack}>
                    <Text>
                        <AntDesign name="leftcircleo" size={40} color="white" />
                    </Text>
                </TouchableOpacity>

                <View style={cursesST.headerLabels}>
                    <Text style={cursesST.headerLabel}> {item.title} </Text>
                </View>
            </ImageBackground>

            <View style={cursesST.curseDesc}>
                <Text style={cursesST.texts}> {item.describe.about}  </Text>

                <View style={cursesST.curseIMGcontainer}>
                    <Image
                        style={cursesST.curseIMG}
                        source={{ uri: item.describe.img1 }} />
                    <Image
                        style={cursesST.curseIMG}
                        source={{ uri: item.describe.img2 }} />
                </View>

            </View>

        </View>
    )
}

export default Curses