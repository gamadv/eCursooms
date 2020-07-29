import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


const cursesST = StyleSheet.create({
    container: {
        // flex: 1,
        paddingTop: 10 + Constants.statusBarHeight,
    },

    header: {
        width: "100%",
        overflow: 'hidden',
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15
    },

    headerMenu: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 15,
        marginBottom: 30,
    },

    headerButton:{
        alignItems: "center",
    },

    headerLabels: {
        padding: 30,
        alignItems: "center",
        // flexDirection: "column",
        // justifyContent: "space-between",
    },
    headerLabel: {
        color: "#fb7100",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 60
    },

    headerSub: {
        color: "white",
        fontSize: 15,
    },

    curseDesc: {
        backgroundColor: "#ffffff",
        padding: 32,
        marginTop: 15,
        marginBottom: 20,
        margin: 30
    },

    curseIMGcontainer: {
        flexDirection: "row",
        justifyContent: "space-between"
    },

    curseIMG: {
        width: 90,
        height: 45,
        resizeMode: 'cover',
    }
})

export default cursesST