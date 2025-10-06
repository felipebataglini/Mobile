import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
};

const Agradecimento = (props) => {

    // useEffect é executado uma vez quando o componente é montado
    useEffect(() => {
        // Inicia um timer de 3000 milissegundos (3 segundos)
        const timer = setTimeout(() => {
            // Após 3 segundos, navega para a tela 'Coleta'
            props.navigation.replace('Coleta');
        }, 3000);

        // Função de limpeza: cancela o timer se o componente for desmontado
        return () => clearTimeout(timer);
    }, []); // O array vazio [] garante que o efeito rode apenas uma vez

    return (
        <PaperProvider theme={theme}>
            <View style={estilos.container}>
                <Text style={estilos.texto}>
                    {'Obrigado por participar da pesquisa!\nAguardamos você no próximo ano!'}
                </Text>
            </View>
        </PaperProvider>
    );
};

const estilos = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
    },
    texto: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontWeight: '400',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 48,
    }
});

export default Agradecimento;