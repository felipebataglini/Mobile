import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

// Tema consistente com as outras telas
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
};

const Agradecimento = (props) => {

    // Função para navegar para a tela 'Ações Pesquisa' ao pressionar
    const navegarParaAcoes = () => {
        props.navigation.navigate('AcoesPesquisa');
    };

    return (
        <PaperProvider theme={theme}>
            <TouchableOpacity style={estilos.container} onPress={navegarParaAcoes}>
                <Text style={estilos.texto}>
                    {'Obrigado por participar da pesquisa!\nAguardamos você no próximo ano!'}
                </Text>
            </TouchableOpacity>
        </PaperProvider>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775', //
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#FFFFFF', //
        fontFamily: 'Averia Libre', //
        fontWeight: '400', //
        fontSize: 48, //
        textAlign: 'center', //
        lineHeight: 48, //
    }
});

export default Agradecimento;