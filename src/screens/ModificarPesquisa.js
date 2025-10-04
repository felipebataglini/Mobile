import { View, Text } from 'react-native'
import Botao from '../components/Botao'

const ModificarPesquisa = (props) => {

    const salvar = () => {
        props.navigation.navigate('Drawer')
    }

    return (
        <View>
            <Text>Tela Modificar Pesquisa</Text>
            <Botao texto="SALVAR" funcao={salvar} />
        </View>
    )
}

export default ModificarPesquisa