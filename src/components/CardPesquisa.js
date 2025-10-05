import { Text, Image, StyleSheet, TouchableOpacity } from 'react-native'

const CardPesquisa = ({ imagem, titulo, subtitulo, funcao }) => {
    return (
        <TouchableOpacity style={estilos.card} onPress={funcao} activeOpacity={0.7}>
            <Image source={imagem} style={estilos.imagem}/>
            <Text style={estilos.titulo}>{titulo}</Text>
            <Text style={estilos.subtitulo}>{subtitulo}</Text>
        </TouchableOpacity>
    )
};

const estilos = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        height: 120,
        width: 150,
        marginHorizontal: 10,
        alignItems: 'center',
        borderRadius: 10,
        padding: 10
    },
    imagem: {
        width: '100%',
        height: '60%',
        marginVertical: 5
    },
    titulo: {
        fontSize: 16,
        color: '#3F92C5',
        fontFamily: 'AveriaLibre-Regular'
    },
    subtitulo: {
        fontSize: 12,
        color: '#8B8B8B',
        fontFamily: 'AveriaLibre-Regular'
    }
});

export default CardPesquisa;