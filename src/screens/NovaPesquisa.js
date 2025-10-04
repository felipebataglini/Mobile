import { View, Text } from 'react-native'
import Botao from '../components/Botao'

const NovaPesquisa = (props) => {

    const cadastrar = () => {
        props.navigation.goBack()
        //Lógica cadastro de novas pesquisas futuramente (parte 2)
    }

    return (
        <View>
            <Text>Tela Nova Pesquisa</Text>
            <Botao texto="CADASTRAR" funcao={cadastrar} /> 
        </View>
    )
}

export default NovaPesquisa