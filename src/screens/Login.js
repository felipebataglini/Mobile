import { View, Text } from 'react-native'
import Botao from '../components/Botao'

const Login = (props) => {

    const logar = () => {
        props.navigation.navigate('Drawer')
    }

    const cadastrar = () => {
        props.navigation.navigate('Cadastro')
    }

    const recuperar = () => {
        props.navigation.navigate('Recuperacao')
    }

    return (
        <View>
            <Text>Tela Login</Text>
            <Botao texto='Entrar' funcao={logar} />
            <Botao texto='Criar minha conta' funcao={cadastrar} />
            <Botao texto='Esqueci minha senha' funcao={recuperar} />
        </View>
    )
}

export default Login