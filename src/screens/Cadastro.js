import { View, Text } from 'react-native'
import Botao from '../components/Botao'

const Cadastro = (props) => {

    const cadastrar = () => {
        props.navigation.goBack()
        //Lógica cadastro futuramente (parte 2)
    }

    return (
        <View>
            <Text>Tela Cadastro</Text>
            <Botao texto="CADASTRAR" funcao={cadastrar} />
        </View>
    )
}

export default Cadastro