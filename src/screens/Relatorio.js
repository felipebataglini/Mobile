import { View, Image, StyleSheet } from 'react-native'

const Relatorio = () => {
    return (
        <View style={estilos.container}>
            <Image source={require("../../assets/images/graficoRelatorio.png")} style={estilos.imagem}/>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    imagem: {
        width: "70%",
        height: "85%"
    }
})

export default Relatorio