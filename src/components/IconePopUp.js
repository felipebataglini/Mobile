import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Modal } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'

const IconePopUp = ({ props }) => {
  const [visivel, setVisivel] = useState(false);

  return (
    <View style={estilos.container}>
      <TouchableOpacity
        style={estilos.botaoIcone}
        onPress={() => setVisivel(true)}
        activeOpacity={0.7}
      >
        <Icon name="delete-outline" size={28} color="#FFFFFF" />
        <Text style={estilos.titulo}>Apagar</Text>
      </TouchableOpacity>

      <Modal
        visible={visivel}
        transparent
        animationType="fade"
        onRequestClose={() => setVisivel(false)}
      >
        <View style={estilos.overlay}>
          <View style={estilos.popup}>
            <Text style={estilos.textoPopup}>
              Tem certeza de apagar essa pesquisa?
            </Text>

            <View style={estilos.linhaBotoes}>
              <TouchableOpacity
                style={[estilos.botao, estilos.botaoApagar]}
                onPress={() => {
                  setVisivel(false);
                  props.navigation.navigate("Drawer");
                }}
              >
                <Text style={estilos.textoBotao}>SIM</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={[estilos.botao, estilos.botaoCancelar]}
                onPress={() => setVisivel(false)}
              >
                <Text style={estilos.textoBotao}>CANCELAR</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  botaoIcone: {
    alignItems: "center",
  },
  titulo: {
    color: "#fff",
    fontSize: 14,
    fontFamily: "AveriaLibre-Regular",
  },
  overlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  popup: {
    width: "40%",
    backgroundColor: "#2B1F5C",
    padding: 15,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 10,
  },
  textoPopup: {
    color: "#fff",
    fontSize: 14,
    marginBottom: 20,
    fontFamily: "AveriaLibre-Regular",
    textAlign: "center",
  },
  linhaBotoes: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  botao: {
    flex: 1,
    paddingVertical: 5,
    alignItems: "center",
  },
  botaoApagar: {
    backgroundColor: "#FF8383",
    marginRight: 8,
  },
  botaoCancelar: {
    backgroundColor: "#3F92C5",
  },
  textoBotao: {
    color: "#FFFFFF",
    fontFamily: "AveriaLibre-Regular",
    fontSize: 18
  },
});

export default IconePopUp;
