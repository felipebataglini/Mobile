import { View, Text } from 'react-native'
import Botao from '../components/Botao'

const Recuperacao = (props) => {

    const recuperar = () => {
        props.navigation.goBack()
        //Lógica recuperação conta futuramente (parte 2)
    }

    return (
        <View>
            <Text>Tela Recuperacao Conta</Text>
            <Botao texto="RECUPERAR" funcao={recuperar} />
        </View>
    )
}

export default Recuperacao