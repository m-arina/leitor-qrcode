import { StyleSheet } from "react-native";
export default StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center'
  },

  ilustracao:{
    alignSelf: 'center',
    width: 320,
    height: 320,
    marginTop: -50
  },

  titulo: {
    flex: 0.4,
    width: '100%',
  },

  destaque: {
    textAlign: 'left', 
    fontSize: 30, 
    marginTop: 50,
    marginLeft: 30,
    fontWeight: 700,
  },

  conteudo: {
    flex: 2,
    backgroundColor: '#006FCB',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center'
  },

  corpo: {
    textAlign: 'justify',
    fontSize: 18,
    marginTop: 30,
    fontWeight: 500,
    color: 'white',
    marginRight: 25,
    marginLeft: 25
  },

  botoesRow:{
    width: 400,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center'
  },

  botao:{
    width: '40%',
    height: 45,
    marginRight: 15,
    borderRadius: 3,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  },

});