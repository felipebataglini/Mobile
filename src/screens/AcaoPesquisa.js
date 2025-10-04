import { View, Text } from 'react-native'
import Botao from '../components/Botao'

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
        <View>
            <Text>Tela de Ações Pesquisa</Text>
            <Botao texto="Modificar" funcao={modificar} />
            <Botao texto="Coletar dados" funcao={coletar} />
            <Botao texto="Relatório" funcao={gerarRelatorio} />
        </View>
    )
}

export default AcaoPesquisa