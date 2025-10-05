import { View, TouchableOpacity, StyleSheet } from 'react-native'
import { Text } from 'react-native-gesture-handler'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AcaoPesquisa = (props) => {

    const modificar = () => {
        props.navigation.navigate('ModificarPesquisa')
    }

    const coletar = () => {
        props.navigation.navigate('Coleta')
    }
    
    const gerarRelatorio = () => {
        props.navigation.navigate('Relatorio')
    }

    return (
        <View style={estilos.container}>
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                <TouchableOpacity style={estilos.card} onPress={modificar} activeOpacity={0.7}>
                    <Icon name="edit-note" size={30} color='#FFFFFF' />
                    <Text style={estilos.descricao}>Modificar</Text>  
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={coletar} activeOpacity={0.7}>
                    <Icon name="library-add-check" size={30} color='#FFFFFF' />
                    <Text style={estilos.descricao}>Coletar dados</Text>    
                </TouchableOpacity> 

                <TouchableOpacity style={estilos.card} onPress={gerarRelatorio} activeOpacity={0.7}>
                    <Icon name="donut-large" size={30} color='#FFFFFF' />
                    <Text style={estilos.descricao}>Relatório</Text>    
                </TouchableOpacity> 

            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        backgroundColor: '#312464',
        width: 90,
        height: 100,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        padding: 5
    },
    descricao: {
        fontFamily: 'AveriaLibre-Regular',
        color: "#FFFFFF",
        fontSize: 12,
        margin: 2
    }
})


export default AcaoPesquisa