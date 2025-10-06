import { View, StyleSheet, Text } from "react-native";
import { HelperText, TextInput } from "react-native-paper";

const CampoTexto = (props) => {
    return (
        <View style={estilos.container}>
            <Text style={estilos.tituloCampo}>{props.texto}</Text>
            <View style={estilos.inputWrapper}>
                <TextInput
                    value={props.valor}
                    onChangeText={props.funcao}
                    keyboardType={props.tipoTeclado}
                    secureTextEntry={props.secure}
                    style={estilos.input}
                    theme={{
                        //Se for necessário em algum momento será alterado o theme para adequar ao figma referência
                        colors: { text: "white", placeholder: "#aaa", primary: "#aaa" }, //theme genérico
                    }}
                />
                <HelperText
                    type="error"
                    visible={!!props.erro}
                    style={estilos.helper}
                    padding="none"
                >
                    {props.erro}
                </HelperText>
            </View>
        </View>
    );
};

const estilos = StyleSheet.create({
    container: {
        width: "100%",
    },
    tituloCampo: {
        fontSize: 14,
        marginBottom: 2,
        color: "#FFFFFF",
        fontFamily: "AveriaLibre-Regular",
    },
    inputWrapper: {
        flexDirection: "column",
    },
    input: {
        height: 25,
        marginBottom: 0,
    },
    helper: {
        fontFamily: "AveriaLibre-Regular",
        color: "#FD7979",
        paddingTop: 0,
        marginTop: 0,
        lineHeight: 14,
        fontSize: 10
    },
});

export default CampoTexto;
