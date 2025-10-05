import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Botao from '../components/Botao'
import { TextInput } from 'react-native-paper'
import React from 'react'
import CardPesquisa from '../components/CardPesquisa'


const Home = (props) => {

    const[texto, setTexto] = React.useState('');

    const cadastrarPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const opcoesPesquisa = () => {
        props.navigation.navigate('AcaoPesquisa')
    }

    return (
        <View style={estilos.container}>
            <View style={{ height: '20%', width: '90%', justifyContent: 'center' }}>
                <TextInput mode='outlined' placeholder='Insira o termo de busca...' value={texto} onChangeText={setTexto}
                    left={<TextInput.Icon icon="magnify" color="#8B8B8B" />} style={estilos.input} activeOutlineColor='#2B1D62' 
                    theme={{
                        colors: {
                            text: 'black',
                            placeholder: '#8B8B8B'
                        }}}
                />
            </View>
            <View style={{ height: '35%', width: '90%'}}>
                <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 10 }}>
                    <CardPesquisa imagem={require('../../assets/images/secomp.png')} titulo="SECOMP 2023" subtitulo="10/10/2023" funcao={opcoesPesquisa} />
                    <CardPesquisa imagem={require('../../assets/images/ubuntu.png')} titulo="UBUNTU 2022" subtitulo="05/06/2022" funcao={opcoesPesquisa} />
                    <CardPesquisa imagem={require('../../assets/images/meninasCPU.png')} titulo="MENINAS CPU" subtitulo="01/04/2022" funcao={opcoesPesquisa} />
                    <CardPesquisa imagem={require('../../assets/images/COTB.png')} titulo="COTB" subtitulo="01/04/2022" funcao={opcoesPesquisa} />
                    <CardPesquisa imagem={require('../../assets/images/carnaval.png')} titulo="CARNAVAL" subtitulo="15/02/2020" funcao={opcoesPesquisa} />
                </ScrollView>
            </View>
            <View style={{ height: '25%', width: '90%'}}>
                <Botao texto='NOVA PESQUISA' funcao={cadastrarPesquisa} cor='#37BD6D'></Botao>
            </View>
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1
    },
    input: {
        fontSize: 14,
        backgroundColor: '#FFFFFF',
        height: 40
    }
});

export default Home