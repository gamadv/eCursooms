import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


const homeST = StyleSheet.create({
  container: {
    flex: 1,
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
    marginBottom: 100,
  },

  headerLabels: {
    paddingBottom: 90,
    alignItems: "center",
  },
  headerLabel: {
    color: "#fb7100",
    fontSize: 25,
    fontWeight: "bold",
  },

  headerSub: {
    color: "white",
    fontSize: 15,
  },

  curseList: {
    padding: 32,
    marginTop: 15,
    marginBottom: 20

  },

  curse: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 50,
    backgroundColor: '#FFF',
    marginBottom: 1
  },

  texts: {
    color: "grey",
    fontSize: 15,
    fontWeight: "bold"
  },
  
  curseIMG: {
    width: 60,
    height: 60,
    borderRadius: 20
  }
})

export default homeST