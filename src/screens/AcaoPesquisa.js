import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const AcaoPesquisa = (props) => {

    // Recebe o objeto pesquisa vindo da navegação
    const { pesquisa } = props.route.params;

    const modificar = () => {
        // Envia os dados para a tela de modificação
        props.navigation.navigate('ModificarPesquisa', { pesquisa })
    }

    const coletar = () => {
        props.navigation.navigate('Coleta', { pesquisa })
    }
    
    const gerarRelatorio = () => {
        props.navigation.navigate('Relatorio', { pesquisa })
    }

    return (
        <View style={estilos.container}>
            <View style={{ flexDirection: 'row', width: '90%', justifyContent: 'space-between' }}>
                <TouchableOpacity style={estilos.card} onPress={modificar} activeOpacity={0.7}>
                    <Icon name="edit-note" size={70} color='#FFFFFF' />
                    <Text style={estilos.descricao}>Modificar</Text>  
                </TouchableOpacity>

                <TouchableOpacity style={estilos.card} onPress={coletar} activeOpacity={0.7}>
                    <Icon name="library-add-check" size={70} color='#FFFFFF' />
                    <Text style={estilos.descricao}>Coletar dados</Text>    
                </TouchableOpacity> 

                <TouchableOpacity style={estilos.card} onPress={gerarRelatorio} activeOpacity={0.7}>
                    <Icon name="donut-large" size={70} color='#FFFFFF' />
                    <Text style={estilos.descricao}>Relatório</Text>    
                </TouchableOpacity> 
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: { backgroundColor: '#372775', flex: 1, alignItems: 'center', justifyContent: 'center' },
    card: { backgroundColor: '#312464', width: 170, height: 150, justifyContent: 'center', alignItems: 'center', borderRadius: 5, padding: 5 },
    descricao: { fontFamily: 'AveriaLibre-Regular', color: "#FFFFFF", fontSize: 20, margin: 2 }
})

export default AcaoPesquisa