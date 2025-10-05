import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Botao from '../components/Botao'
import { TextInput, PaperProvider } from 'react-native-paper'

const theme = {
    colors: {
        primary: '#372775',
    },
    fonts: {
        bodyLarge: { fontFamily: 'AveriaLibre-Regular' }
    }

}

const ModificarPesquisa = (props) => {

    
    // Na parte 2 com a persistência dos dados implementados, será utilizado dados referentes a pesquisa especifica escolhida
    const[nome, setNome] = React.useState("Carnaval 2024") 
    const[data, setData] = React.useState("16/02/2024")

    const salvar = () => {
        props.navigation.navigate('Drawer')
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{ width: '80%', height: '90%', justifyContent: 'space-between', margin: 'auto'}}>
                    <View>
                        <Text style={estilos.tituloCampo}>Nome</Text>
                        <TextInput mode="outlined" theme={theme} value={nome} onChangeText={setNome} textColor="#3F92C5" style={{ height: 50, justifyContent: 'center', backgroundColor: '#FFFFFF', fontSize: 14}} />
                    </View>
                    <View>
                        <Text style={estilos.tituloCampo}>Data</Text>
                        <TextInput mode="outlined" theme={theme} value={data} onChangeText={setData} textColor="#3F92C5" style={{ height: 50, justifyContent: 'center', backgroundColor: '#FFFFFF', fontSize: 14}} 
                            right={<TextInput.Icon icon="calendar-month" color="#939393" />}
                        />
                    </View>
                    <View>
                        <Text style={estilos.tituloCampo}>Imagem</Text>
                        <Image source={require("../../assets/images/carnaval.png")} style={{height: 70, width: "70%"}}/>
                    </View>
                    <View>
                        <Botao texto="SALVAR" funcao={salvar} cor='#37BD6D'/> 
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

export default ModificarPesquisa