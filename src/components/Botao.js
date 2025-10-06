import {TouchableOpacity, Text, StyleSheet} from "react-native";

const Botao = (props) => {

    const texto = props.texto

    return (
        <TouchableOpacity style={{backgroundColor: props.cor, alignItems: 'center', justifyContent: 'center', marginVertical: 5, height: props.altura}} onPress={props.funcao}>
                <Text style={estilos.texto}>{texto}</Text>
        </TouchableOpacity>
    )
}

const estilos = StyleSheet.create({
    texto: {
        fontSize: 16,
        color: 'white',
        fontFamily: 'AveriaLibre-Regular'
    }
})
export default Botao