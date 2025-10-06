import React from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Botao from '../components/Botao'
import { TextInput, PaperProvider } from 'react-native-paper'
import IconePopUp from "../components/IconePopUp"

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
                <View style={{ width: '60%', height: '95%', justifyContent: 'space-between', margin: 'auto'}}>
                    <View>
                        <Text style={estilos.tituloCampo}>Nome</Text>
                        <TextInput mode="outlined" theme={theme} value={nome} onChangeText={setNome} textColor="#3F92C5" style={estilos.input} />
                    </View>
                    <View>
                        <Text style={estilos.tituloCampo}>Data</Text>
                        <TextInput mode="outlined" theme={theme} value={data} onChangeText={setData} textColor="#3F92C5" style={estilos.input} 
                            right={<TextInput.Icon icon="calendar-month" color="#939393" />}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={estilos.tituloCampo}>Imagem</Text>
                        <Image source={require("../../assets/images/carnaval.png")} style={{height: 50, width: 230}}/>
                    </View>
                    <View style={{ flexDirection:'row'}}>
                        <View style={{ width: 383 }}>
                            <Botao texto="SALVAR" funcao={salvar} cor='#37BD6D' altura={25}/> 
                        </View>
                        <View style={{ marginLeft: 75}}>
                            <IconePopUp props={props} />
                        </View>
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
        fontSize: 14,
        marginBottom: 2,
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular'
    },
    input: { 
        height: 25,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        fontSize: 14
    }
})

export default ModificarPesquisa