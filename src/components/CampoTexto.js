import { View, StyleSheet, Text } from "react-native";
import { TextInput } from "react-native-paper";

const CampoTexto = (props) => {

    return (
            <View style={estilos.container}>
                <Text style={estilos.tituloCampo}>{props.texto}</Text>
                <TextInput value={props.valor} onChangeText={props.funcao} keyboardType={props.tipoTeclado} secureTextEntry={props.secure} style={{height: 50}}/>
            </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        width: '100%',
    },
    tituloCampo: {
        fontSize: 16,
        marginBottom: 2,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular'
    }
})

export default CampoTexto