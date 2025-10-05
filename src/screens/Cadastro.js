import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Botao from '../components/Botao'
import CampoTexto from '../components/CampoTexto'
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { useState } from 'react'


const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
}

const Cadastro = (props) => {

    const [email, setEmail] = React.useState("")
    const [senha, setSenha] = React.useState("")
    const [verificaSenha, setVerificaSenha] = React.useState("")

    const cadastrar = () => {
        props.navigation.goBack()
        //Lógica cadastro futuramente (parte 2)
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{width: '70%', height: '90%', justifyContent: 'space-between', marginVertical: 20}}>
                    <CampoTexto texto="E-mail" value={email} onChangeText={setEmail} tipoTeclado="email-address" secure={false} />
                    <CampoTexto texto="Senha" value={senha} onChangeText={setSenha} secure={true} />
                    <CampoTexto texto="Repetir Senha" value={verificaSenha} onChangeText={setVerificaSenha} secure={true} />
                    <Botao texto="CADASTRAR" funcao={cadastrar} cor='#37BD6D'/>
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

export default Cadastro