import React from 'react'
import { View, Text, StyleSheet} from 'react-native'
import Botao from '../components/Botao'
import { HelperText, TextInput, PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'


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
    const [erroEmail, setErroEmail] = React.useState("")
    const [erroSenha, setErroSenha] = React.useState("")

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

    const comparaSenhas1 = (texto) => {

        setSenha(texto);

        if(texto != verificaSenha) {
            setErroSenha("O campo repetir senha difere da senha.")
        } else {
            setErroSenha("")
        }
    }

    const comparaSenhas2 = (texto) => {

        setVerificaSenha(texto);

        if(texto != senha) {
            setErroSenha("O campo repetir senha difere da senha.")
        } else {
            setErroSenha("")
        }
    }

    const cadastrar = () => {

        if(erroSenha === "") {
            props.navigation.goBack()
        }
        //Lógica cadastro futuramente (parte 2)
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{width: '60%', height: '90%', justifyContent: 'space-between', margin: 'auto'}}>
                    <View style={{ height: 50 }}>
                        <Text style={estilos.tituloCampo}>E-mail</Text>
                        <TextInput
                            value={email}
                            onChangeText={validarEmail}
                            keyboardType="email-adress"
                            secureTextEntry={false}
                            style={{height: 25}}
                        />
                        <HelperText type="error" visible={!!erroEmail} style={estilos.helper} padding='none'>
                            {erroEmail}
                        </HelperText>
                    </View>
                    <View style={{ height: 50 }}>
                        <Text style={estilos.tituloCampo}>Senha</Text>
                        <TextInput
                            value={senha}
                            onChangeText={comparaSenhas1}
                            secureTextEntry={true}
                            style={{height: 25}}
                        />
                    </View>
                    <View style={{ height: 50 }}>  
                        <Text style={estilos.tituloCampo}>Repetir Senha</Text>
                        <TextInput
                            value={verificaSenha}
                            onChangeText={comparaSenhas2}
                            secureTextEntry={true}
                            style={{height: 25}}
                        />
                        <HelperText type="error" visible={!!erroSenha} style={estilos.helper} padding='none'>
                            {erroSenha}
                        </HelperText>
                    </View>
                    <View style={{ marginTop: 10 }}>
                        <Botao texto="CADASTRAR" funcao={cadastrar} cor='#37BD6D' altura={25}/>
                    </View>
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
    },
    tituloCampo: {
        fontSize: 13,
        marginBottom: 2,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular'
    },
    helper: {
        fontFamily: 'AveriaLibre-Regular',
        color: '#FD7979',
        fontSize: 10,
        paddingTop: 0,
        marginTop: 0,
        lineHeight: 14
    }
})

export default Cadastro