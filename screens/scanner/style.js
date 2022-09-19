import { StyleSheet } from "react-native";

export default StyleSheet.create({
  tela: {
    flex: 1,
  },
  conteudo: {
    flex: 0.97,
    backgroundColor: "#2CB9CA",
    alignItems: "center",
    justifyContent: "center",
    borderBottomEndRadius: 20,
    borderBottomStartRadius: 20,
  },

  titulo: {
    marginBottom: 30,
    fontSize: 30,
    color: "white",
    fontWeight: "bold"
  },
  subTitulo: {
    marginBottom: 30,
    fontSize: 20,
    color: "white",
    fontWeight: "bold"
  },
  input: {
    backgroundColor: "white",
    width: "50%",
    paddingStart: 15,
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 15,
    height: "6%",
    marginTop: 25,
    borderColor: "#8557B2",
    color:"black"
  },
  

  botaoCalc:{
    width: '40%',
    height: 45,
    borderRadius: 3,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#8557B2',
    justifyContent: 'center'
  },

  botao:{
    width: '40%',
    height: 45,
   
    borderRadius: 3,
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: '#8557B2',
    justifyContent: 'center'
  },
});
