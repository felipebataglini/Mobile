import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Botao from '../components/Botao'
import { TextInput, PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import CampoTexto from '../components/CampoTexto'

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
}

const NovaPesquisa = (props) => {

    const[nome, setNome] = React.useState("")
    const[data, setData] = React.useState("")
    const[imagem, setImagem] = React.useState("")

    const cadastrar = () => {
        props.navigation.goBack()
        //Lógica cadastro de novas pesquisas futuramente (parte 2)
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{ width: '80%', height: '90%', justifyContent: 'space-between', margin: 'auto'}}>
                    <View>
                        <CampoTexto texto="Nome" value={nome} onChangeText={setNome} secure={false} />
                    </View>
                    <View>
                        <Text style={estilos.tituloCampo}>Data</Text>
                        <TextInput value={data} onChangeText={setData} style={{ height: 50, justifyContent: 'center'}} 
                            right={<TextInput.Icon icon="calendar-month" color="#939393" />}
                        />
                    </View>
                    <View>
                        <Text style={estilos.tituloCampo}>Imagem</Text>
                        <TextInput value={imagem} onChangeText={setImagem} style={{ height: 100, alignItems: 'center' }} placeholder='Câmera/Galeria de imagens' placeholderTextColor={'#939393'} 
                            theme={{
                                fonts: {
                                    bodyLarge: { fontFamily: 'AveriaLibre-Regular'},
                                    bodyMedium: { fontFamily: 'AveriaLibre-Regular'}
                                }
                            }}
                        />
                    </View>
                    <View>
                        <Botao texto="CADASTRAR" funcao={cadastrar} cor='#37BD6D'/> 
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
        fontSize: 16,
        marginBottom: 2,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular'
    }
})

export default NovaPesquisa