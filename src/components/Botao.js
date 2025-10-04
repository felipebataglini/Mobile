import {TouchableOpacity, Text, StyleSheet} from "react-native";

const Botao = (props) => {

    const texto = props.texto

    return (
        <TouchableOpacity style={estilos.fundo} onPress={props.funcao}>
                <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    fundo: {
        backgroundColor: 'green',
        alignItems: 'center',
        margin: 5
    },
    texto: {
        fontSize: 24,
        color: 'white',
    }
})
export default Botao