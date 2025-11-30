import React, { useState } from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'
import Botao from '../components/Botao'
import { TextInput, PaperProvider } from 'react-native-paper'
import IconePopUp from "../components/IconePopUp"
import { db } from '../firebase/config'
import { doc, updateDoc } from "firebase/firestore";

const theme = {
    colors: { primary: '#372775' },
    fonts: { bodyLarge: { fontFamily: 'AveriaLibre-Regular' } }
}

const ModificarPesquisa = (props) => {
    // Garante que não ocorra erro se os parâmetros vierem vazios
    const params = props.route.params || {};
    const pesquisa = params.pesquisa || {};

    const [nome, setNome] = useState(pesquisa.nome || "") 
    const [data, setData] = useState(pesquisa.data || "")
    const [imagem, setImagem] = useState(pesquisa.imagem || "")

    const salvar = async () => {
        // Verificação de segurança: precisa ter o ID para atualizar
        if (!pesquisa.id) {
            console.error("Erro: ID da pesquisa não encontrado.");
            return;
        }

        try {
            const docRef = doc(db, "pesquisas", pesquisa.id);
            
            await updateDoc(docRef, {
                nome: nome,
                data: data,
                imagem: imagem || "" 
            });
            
            // CORREÇÃO: Navega para 'Drawer' para retornar ao contexto principal corretamente
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
                        <TextInput mode="outlined" theme={theme} value={data} onChangeText={setData} textColor="#3F92C5" style={estilos.input} 
                            right={<TextInput.Icon icon="calendar-month" color="#939393" />}
                        />
                    </View>
                    <View style={{ marginBottom: 20 }}>
                        <Text style={estilos.tituloCampo}>Imagem (URL)</Text>
                        <TextInput mode="outlined" theme={theme} value={imagem} onChangeText={setImagem} textColor="#3F92C5" style={estilos.input} />
                        {imagem ? <Image source={{ uri: imagem }} style={{height: 50, width: 230, marginTop: 5}} resizeMode='contain'/> : null}
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
    input: { height: 25, justifyContent: 'center', backgroundColor: '#FFFFFF', fontSize: 14 }
})

export default ModificarPesquisa