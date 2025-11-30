import React, { useState } from 'react'
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native'
import Botao from '../components/Botao'
import { TextInput, PaperProvider } from 'react-native-paper'
import IconePopUp from "../components/IconePopUp"
import { db, storage } from '../firebase/config'
import { doc, updateDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { launchImageLibrary } from 'react-native-image-picker';

const theme = { colors: { primary: '#372775' } }

const ModificarPesquisa = (props) => {
    const params = props.route.params || {};
    const pesquisa = params.pesquisa || {};

    const [nome, setNome] = useState(pesquisa.nome || "") 
    const [data, setData] = useState(pesquisa.data || "")
    const [imagemUri, setImagemUri] = useState(pesquisa.imagem || "") // URL do banco ou URI local
    const [novaFoto, setNovaFoto] = useState(null) // Se o usuário trocou a foto

    const selecionarImagem = () => {
        launchImageLibrary({ mediaType: 'photo' }, (response) => {
            if (response.didCancel) return;
            if (response.assets && response.assets.length > 0) {
                const asset = response.assets[0];
                setImagemUri(asset.uri);
                setNovaFoto(asset); // Marca que houve alteração
            }
        });
    }

    const uriToBlob = async (uri) => {
        const response = await fetch(uri);
        return await response.blob();
    }

    const salvar = async () => {
        if (!pesquisa.id) return;

        try {
            let finalImageUrl = imagemUri;

            // Se houve alteração, faz upload da nova imagem
            if (novaFoto) {
                const blob = await uriToBlob(imagemUri);
                const filename = `images/${Date.now()}.jpg`;
                const storageRef = ref(storage, filename);
                await uploadBytes(storageRef, blob);
                finalImageUrl = await getDownloadURL(storageRef);
            }

            const docRef = doc(db, "pesquisas", pesquisa.id);
            await updateDoc(docRef, {
                nome: nome,
                data: data,
                imagem: finalImageUrl 
            });
            
            props.navigation.navigate('Drawer'); 
        } catch (error) {
            console.error("Erro ao atualizar: ", error);
        }
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
                        <TextInput mode="outlined" theme={theme} value={data} onChangeText={setData} textColor="#3F92C5" style={estilos.input} right={<TextInput.Icon icon="calendar-month" color="#939393" />}/>
                    </View>
                    
                    <View style={{ marginBottom: 20 }}>
                        <Text style={estilos.tituloCampo}>Imagem</Text>
                        <TouchableOpacity style={estilos.boxImagem} onPress={selecionarImagem}>
                            {imagemUri ? (
                                <Image source={{ uri: imagemUri }} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
                            ) : (
                                <Text style={{ color: '#939393' }}>Alterar imagem</Text>
                            )}
                        </TouchableOpacity>
                    </View>
                    
                    <View style={{ flexDirection:'row'}}>
                        <View style={{ width: 383 }}>
                            <Botao texto="SALVAR" funcao={salvar} cor='#37BD6D' altura={25}/> 
                        </View>
                        <View style={{ marginLeft: 75}}>
                            <IconePopUp navigation={props.navigation} idPesquisa={pesquisa?.id} />
                        </View>
                    </View>
                </View>
            </View>
        </PaperProvider>
    )
}

const estilos = StyleSheet.create({
    container: { backgroundColor: '#372775', alignItems: 'center', flex: 1 },
    tituloCampo: { fontSize: 14, marginBottom: 2, color: '#FFFFFF', fontFamily: 'AveriaLibre-Regular' },
    input: { height: 25, justifyContent: 'center', backgroundColor: '#FFFFFF', fontSize: 14 },
    boxImagem: { backgroundColor: '#FFFFFF', height: 60, width: 230, justifyContent: 'center', alignItems: 'center' }
})

export default ModificarPesquisa