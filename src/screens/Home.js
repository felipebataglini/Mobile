import React, { useState, useEffect } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Botao from '../components/Botao'
import { TextInput } from 'react-native-paper'
import CardPesquisa from '../components/CardPesquisa'
import { db } from '../firebase/config'
import { collection, onSnapshot, query } from "firebase/firestore";

const Home = (props) => {

    const[texto, setTexto] = useState('');
    const[listaPesquisas, setListaPesquisas] = useState([]);

    useEffect(() => {
        // Cria a query para buscar na coleção 'pesquisas'
        const q = query(collection(db, "pesquisas"));
        
        // Inscreve um listener para atualizações em tempo real
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            const pesquisas = [];
            querySnapshot.forEach((doc) => {
                pesquisas.push({
                    id: doc.id,
                    ...doc.data()
                });
            });
            setListaPesquisas(pesquisas);
        });

        return () => unsubscribe();
    }, []);

    const cadastrarPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    // Passa o objeto pesquisa inteiro para a próxima tela
    const irParaAcoes = (pesquisa) => {
        props.navigation.navigate('AcaoPesquisa', { pesquisa })
    }

    return (
        <View style={estilos.container}>
            <View style={{ height: '20%', width: '90%', justifyContent: 'center', marginVertical: 2 }}>
                <TextInput mode='outlined' placeholder='Insira o termo de busca...' value={texto} onChangeText={setTexto} placeholderTextColor={'#8B8B8B'}
                    left={<TextInput.Icon icon="magnify" color="#8B8B8B" />} style={estilos.input} activeOutlineColor='#2B1D62' 
                />
            </View>
            <View style={{ height: '55%', width: '90%', marginTop: 10}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
                    {listaPesquisas.map((item) => (
                        <CardPesquisa 
                            key={item.id}
                            // Assume que imagem é uma URL.
                            imagem={{ uri: item.imagem }} 
                            titulo={item.nome} 
                            subtitulo={item.data} 
                            funcao={() => irParaAcoes(item)} 
                        />
                    ))}
                </ScrollView>
            </View>
            <View style={{ height: '25%', width: '90%', marginTop: 5}}>
                <Botao texto='NOVA PESQUISA' funcao={cadastrarPesquisa} cor='#37BD6D' altura={25}></Botao>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: { backgroundColor: '#372775', alignItems: 'center', flex: 1 },
    input: { fontSize: 14, backgroundColor: '#FFFFFF', height: 25 }
});

export default Home