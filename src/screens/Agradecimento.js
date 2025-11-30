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

    useEffect(() => {
        const timer = setTimeout(() => {
            // Retorna para o Drawer (menu principal) após 3 segundos
            props.navigation.navigate('Drawer');
        }, 3000);

        return () => clearTimeout(timer);
    }, []); 

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
        fontFamily: 'AveriaLibre-Regular', // Certifique-se que o nome da fonte está correto no seu projeto
        fontWeight: '400',
        fontSize: 24,
        textAlign: 'center',
        lineHeight: 48,
    }
});

export default Agradecimento;