import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF'
  },

  devInfo: {
    width: '90%',
    alignItems: 'center',
    marginHorizontal: '8%',
    marginVertical: '8%',
    backgroundColor: 'white',
    borderRadius: 15,
    height: 260,
    borderColor: '#006FCB',
    borderWidth: 1,
    borderBottomColor:'#006FCB',
    borderBottomWidth: 3,
    borderRightColor: '#006FCB',
    borderRightWidth: 2,
  },
  
  iconContainer:{
    position: 'relative',
    top: -36,
  },

  icon:{
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: '#006FCB',
    borderBottomColor:'#006FCB',
    borderBottomWidth: 3,
    borderRightColor: '#006FCB',
    borderRightWidth: 2,
    resizeMode: 'cover'
  },

  devDesc:{
    color:'black',
    fontSize: 18,
    fontWeight: 600
  },

  devName: {
    color: 'black',
    marginTop: 5,
    fontSize: 22,
    fontWeight: 700
  },

  containerSocial: {
    marginVertical: 20,
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: 175,
  },

  botaoSocial: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderWidth: 2,
    borderColor: '#006FCB',
    borderRadius: 24,
  },

  botao:{
    width: '40%',
    height: 45,
    marginRight: 15,
    borderRadius: 3,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#2CB9CA',
    justifyContent: 'center'
  },
});