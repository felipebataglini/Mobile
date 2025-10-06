import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Botao from '../components/Botao'
import CampoTexto from '../components/CampoTexto'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
}



const Recuperacao = (props) => {

    const[email, setEmail] = React.useState("")
    const[erroEmail, setErroEmail] = React.useState("")

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

    const recuperar = () => {
        if(erroEmail==="") {
            props.navigation.goBack()
        }
        //Lógica recuperação conta futuramente (parte 2)
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{width: '70%', height: '55%', justifyContent: 'space-between', marginTop: 65}}>
                    <CampoTexto texto="E-mail" value={email} funcao={validarEmail} tipoTeclado="email-address" secure={false} erro={erroEmail} />
                    <Botao texto="RECUPERAR" funcao={recuperar} cor='#37BD6D' altura="25" />
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        alignItems: 'center',
        flex: 1
    }
})

export default Recuperacao