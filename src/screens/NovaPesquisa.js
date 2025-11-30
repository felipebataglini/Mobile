import React, { useState } from 'react'
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native'
import Botao from '../components/Botao'
import { HelperText, TextInput, PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper'
import { db, storage } from '../firebase/config'
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { launchImageLibrary } from 'react-native-image-picker';

const theme = {
    ...DefaultTheme,
    colors: { ...DefaultTheme.colors, primary: '#FFFFFF', secondary: 'black' }
}

const NovaPesquisa = (props) => {

    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [imagemUri, setImagemUri] = useState("") 
    const [foto, setFoto] = useState(null) 
    const [erroNome, setErroNome] = useState("")
    const [erroData, setErroData] = useState("")
    const [erroImagem, setErroImagem] = useState("")

    const validarNome = (texto) => {
        setNome(texto);
        if(texto.trim() === '') setErroNome("Preencha o nome");
        else setErroNome('');
    }

    const validarData = (texto) => {
        setData(texto);
        if(texto.trim() === '') setErroData("Preencha a data");
        else setErroData('');
    }

    const selecionarImagem = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) return;
            if (response.errorMessage) return;
            
            if (response.assets && response.assets.length > 0) {
                const asset = response.assets[0];
                setImagemUri(asset.uri);
                setFoto(asset);
                setErroImagem('');
            }
        });
    }

    const uriToBlob = async (uri) => {
        const response = await fetch(uri);
        const blob = await response.blob();
        return blob;
    }

    const cadastrar = async () => {
        if(nome && data && imagemUri && !erroNome && !erroData) {
            try {
                let imageUrl = "";
                if (foto) {
                    const blob = await uriToBlob(imagemUri);
                    const filename = `images/${Date.now()}.jpg`;
                    const storageRef = ref(storage, filename);
                    
                    await uploadBytes(storageRef, blob);
                    imageUrl = await getDownloadURL(storageRef);
                }

                await addDoc(collection(db, "pesquisas"), {
                    nome: nome,
                    data: data,
                    imagem: imageUrl 
                });
                
                props.navigation.goBack();
            } catch (e) {
                console.error("Erro ao cadastrar: ", e);
            }
        } else {
            if(!nome) setErroNome("Campo obrigatório")
            if(!data) setErroData("Campo obrigatório")
            if(!imagemUri) setErroImagem("Selecione uma imagem")
        }
    }

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                {/* ScrollView tela pequena */}
                <ScrollView contentContainerStyle={estilos.scrollContainer} showsVerticalScrollIndicator={false}>
                    
                    <View style={estilos.inputContainer}>
                        <Text style={estilos.tituloCampo}>Nome</Text>
                        <TextInput value={nome} onChangeText={validarNome} style={estilos.input} />
                        <HelperText type="error" visible={!!erroNome} padding='none'>{erroNome}</HelperText>
                    </View>

                    <View style={estilos.inputContainer}>
                        <Text style={estilos.tituloCampo}>Data</Text>
                        <TextInput value={data} onChangeText={validarData} style={estilos.input} right={<TextInput.Icon icon="calendar-month" color="#939393" />}/>
                        <HelperText type="error" visible={!!erroData} padding='none'>{erroData}</HelperText>
                    </View>

                    <View style={estilos.inputContainer}>
                        <Text style={estilos.tituloCampo}>Imagem</Text>
                        <TouchableOpacity style={estilos.boxImagem} onPress={selecionarImagem}>
                            {imagemUri ? (
                                <Image source={{ uri: imagemUri }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                            ) : (
                                <Text style={{ color: '#939393' }}>Toque para selecionar imagem</Text>
                            )}
                        </TouchableOpacity>
                        <HelperText type="error" visible={!!erroImagem} padding='none'>{erroImagem}</HelperText>
                    </View>

                    <View style={estilos.botaoContainer}>
                        <Botao texto="CADASTRAR" funcao={cadastrar} cor='#37BD6D' altura={20} /> 
                    </View>

                </ScrollView>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    container: { 
        backgroundColor: '#372775', 
        flex: 1 
    },
    scrollContainer: {
        alignItems: 'center',
        paddingTop: 30,
        paddingBottom: 20
    },
    inputContainer: {
        width: '75%',
        marginBottom: 20
    },
    botaoContainer: {
        width: '75%',
        marginTop: 10
    },
    tituloCampo: { 
        fontSize: 16, 
        marginBottom: 5, 
        color: '#FFFFFF', 
        fontFamily: 'AveriaLibre-Regular' 
    },
    input: {
        height: 40,
        backgroundColor: '#FFFFFF',
        fontSize: 14
    },
    boxImagem: { 
        backgroundColor: '#FFFFFF', 
        height: 80, 
        width: '100%',
        justifyContent: 'center', 
        alignItems: 'center' 
    }
})

export default NovaPesquisa