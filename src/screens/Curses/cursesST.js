import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


const cursesST = StyleSheet.create({
    container: {
        paddingTop: Constants.statusBarHeight,
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

    headerButton: {
        alignItems: "center",
    },

    headerLabels: {
        padding: 30,
        alignItems: "center",
    },
    headerLabel: {
        color: "#fb7100",
        fontSize: 25,
        fontWeight: "bold",
        marginBottom: 60
    },

    texts: {
        color: "grey",
        fontSize: 15,
        fontWeight: "bold",
        padding: 5
    },

    curseDesc: {
        backgroundColor: "#ffffff",
        borderRadius: 13,
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