import React from 'react';
import { View, Text, StyleSheet} from 'react-native'
import Botao from '../components/Botao'
import { PaperProvider, MD3LightTheme as DefaultTheme} from 'react-native-paper'
import CampoTexto from '../components/CampoTexto'
import Icon from 'react-native-vector-icons/MaterialIcons'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
}

const Login = (props) => {

    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")

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
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{height: '20%', flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={estilos.titulo}>Satisfying.you</Text>
                    <Icon name="sentiment-satisfied-alt" size={30} color='#FFFFFF' />
                </View>
                <View style={{height: '45%', width: '70%', justifyContent: 'space-between'}}>
                    <CampoTexto texto="E-mail" value={email} onChangeText={setEmail} tipoTeclado="email-address" secure={false} />
                    <CampoTexto texto="Senha" value={senha} onChangeText={setSenha} secure={true} />
                    <Botao texto='Entrar' funcao={logar} cor='#37bd6d' />
                </View>
                <View style={{height: '25%', width: '70%', marginTop: 5, justifyContent: 'flex-end'}}>
                    <Botao texto='Criar minha conta' funcao={cadastrar} cor='#419ED7' />
                    <Botao texto='Esqueci minha senha' funcao={recuperar} cor='#B0CCDE' />
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 24,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        marginRight: 15
    },
    container: {
        backgroundColor: '#372775',
        alignItems: 'center',
        flex: 1
    }
})

export default Login