import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'


const homeST = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10 + Constants.statusBarHeight,
  },
  teste: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 10 + Constants.statusBarHeight,
  },

  header: {
    // flex: 1,
    // alignItems: "center",
    width: "100%",
    overflow: 'hidden',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15
  },

  headerImg:{
    width: "100%",
    height: "100%",
    resizeMode: "contain"
  },

  headerMenu:{
    flexDirection:"row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 100,
  },

  img1:{
    width: 50,
    height: 50
  },

  headerLabels:{
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
    flexDirection: "row",
    padding: 60,
    borderRadius: 3,
    backgroundColor: '#FFF',
    marginBottom: 1
  },

  curseIMG: {
    width: 90,
    height: 45,
    resizeMode: 'cover',
  }
})

export default homeST