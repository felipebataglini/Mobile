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

    const recuperar = () => {
        props.navigation.goBack()
        //Lógica recuperação conta futuramente (parte 2)
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{width: '70%', height: '50%', justifyContent: 'space-between', marginTop: 170}}>
                    <CampoTexto texto="E-mail" value={email} onChangeText={setEmail} tipoTeclado="email-address" secure={false} />
                    <Botao texto="RECUPERAR" funcao={recuperar} cor='#37BD6D' />
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