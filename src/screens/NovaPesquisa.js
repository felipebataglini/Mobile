import React, { useState } from 'react'
import { View, StyleSheet, Text } from 'react-native'
import Botao from '../components/Botao'
import { HelperText, TextInput, PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { db } from '../firebase/config' // Importar banco
import { collection, addDoc } from "firebase/firestore"; // Importar funções do Firestore

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
}

const NovaPesquisa = (props) => {

    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [imagem, setImagem] = useState("")
    const [erroNome, setErroNome] = useState("")
    const [erroData, setErroData] = useState("")
    const [erroImagem, setErroImagem] = useState("")

    // Funções de validação mantidas iguais...
    const validarNome = (texto) => {
        setNome(texto);
        if(texto.trim() === '') setErroNome("O campo Nome não pode ficar vazio");
        else setErroNome('');
    }

    const validarData = (texto) => {
        setData(texto);
        if(texto.trim() === '') setErroData("O campo Data não pode ficar vazio");
        else setErroData('');
    }

    const validarImagem = (texto) => {
        setImagem(texto);
        if(texto.trim() === '') setErroImagem("O campo Imagem não pode ficar vazio");
        else setErroImagem('');
    }

    const cadastrar = async () => {
        if(nome && data && imagem && erroNome==="" && erroData==="" && erroImagem==="") {
            try {
                const docRef = await addDoc(collection(db, "pesquisas"), {
                    nome: nome,
                    data: data,
                    imagem: imagem // Armazenando a string/URL da imagem
                });
                console.log("Documento cadastrado com ID: ", docRef.id);
                props.navigation.goBack();
            } catch (e) {
                console.error("Erro ao adicionar documento: ", e);
            }
        }
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <View style={{ width: '55%', height: '90%', justifyContent: 'space-between', marginTop: 10}}>
                    {/* Campos de input mantidos iguais */}
                    <View>
                        <Text style={estilos.tituloCampo}>Nome</Text>
                        <TextInput value={nome} onChangeText={validarNome} style={{ height: 25 }} />
                        <HelperText type="error" visible={!!erroNome} style={estilos.helper} padding='none'>{erroNome}</HelperText>
                    </View>
                    <View>
                        <Text style={estilos.tituloCampo}>Data</Text>
                        <TextInput value={data} onChangeText={validarData} style={{ height: 25, justifyContent: 'center'}} right={<TextInput.Icon icon="calendar-month" color="#939393" />}/>
                        <HelperText type="error" visible={!!erroData} style={estilos.helper} padding='none'>{erroData}</HelperText>
                    </View>
                    <View>
                        <Text style={estilos.tituloCampo}>Imagem</Text>
                        <TextInput value={imagem} onChangeText={validarImagem} style={{ height: 50, alignItems: 'center', width: 230 }} placeholder='URL da Imagem' placeholderTextColor={'#939393'} />
                        <HelperText type="error" visible={!!erroImagem} style={estilos.helper} padding='none'>{erroImagem}</HelperText>
                    </View>
                    <View style={{ marginTop: 5 }}>
                        <Botao texto="CADASTRAR" funcao={cadastrar} cor='#37BD6D' altura={20} /> 
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    container: { backgroundColor: '#372775', alignItems: 'center', flex: 1 },
    tituloCampo: { fontSize: 14, marginBottom: 2, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular' },
    helper: { fontFamily: 'AveriaLibre-Regular', color: '#FD7979', fontSize: 10, paddingTop: 0, marginTop: 0, lineHeight: 14 }
})

export default NovaPesquisa