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
    const [erroEmail, setErroEmail] = React.useState("");
    const [erroSenha, setErroSenha] = React.useState("");

    const validarEmail = (texto) => {

        setEmail(texto);

        if(texto.trim() === '') {
            setErroEmail("O campo e-mail não pode ficar vazio") ;
        } else if(!texto.includes('@')) {
            setErroEmail("Digite um e-mail válido")
        } else {
            setErroEmail('');
        }
    }

    const validarSenha = (texto) => {
        setSenha(texto);

        if(texto.trim() === '') {
            setErroSenha("O campo senha não pode ficar vazio") ;
        } else {
            setErroSenha('');
        }
    }

    const logar = () => {
        
        if (erroEmail ==="" && erroSenha==="") {
            props.navigation.navigate("Drawer");
        }
    };

    const cadastrar = () => {
        props.navigation.navigate('Cadastro')
    }
    const recuperar = () => {
        props.navigation.navigate('Recuperacao')
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{height: '15%', flexDirection: 'row', alignItems: 'center', marginTop: 10}}>
                    <Text style={estilos.titulo}>Satisfying.you</Text>
                    <Icon name="sentiment-satisfied-alt" size={35} color='#FFFFFF' />
                </View>
                <View style={{height: '55%', width: '60%', justifyContent: 'space-between'}}>
                    <CampoTexto texto="E-mail" value={email} funcao={validarEmail} tipoTeclado="email-address" secure={false} erro={erroEmail} />
                    <CampoTexto texto="Senha" value={senha} funcao={validarSenha} secure={true}  erro={erroSenha} />
                    <Botao texto='Entrar' funcao={logar} cor='#37BD6D' altura={25} />
                </View>
                <View style={{height: '20%', width: '60%', marginVertical: 20, justifyContent: 'center'}}>
                    <Botao texto='Criar minha conta' funcao={cadastrar} cor='#419ED7' altura={20} />
                    <Botao texto='Esqueci minha senha' funcao={recuperar} cor='#B0CCDE' altura={20}/>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    titulo: {
        fontSize: 28,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        marginRight: 15
    },
    container: {
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    }
})

export default Login