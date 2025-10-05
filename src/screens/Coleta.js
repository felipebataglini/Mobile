import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Tema consistente com as outras telas
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
};

const Coleta = (props) => {

    // Navega para a tela de Agradecimento ao selecionar um sentimento
    const handleSelectOption = () => {
        props.navigation.replace('Agradecimento'); 
    };

    // NOVA FUNÇÃO: Navega para Ações Pesquisa ao clicar no canto superior direito
    const navigateToAcoesPesquisa = () => {
        props.navigation.replace('AcaoPesquisa');
    };

    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>

                {/* NOVO BOTÃO: Área clicável invisível no canto superior direito */}
                <TouchableOpacity 
                    style={styles.hiddenButton} 
                    onPress={navigateToAcoesPesquisa} 
                />

                <Text style={styles.questionText}>
                    O que você achou do Carnaval 2024?
                </Text>

                <View style={styles.optionsContainer}>
                    {/* Opção Péssimo */}
                    <TouchableOpacity style={styles.optionButton} onPress={handleSelectOption}>
                        <Icon name="sentiment-very-dissatisfied" size={100} color="#D16D6D" />
                        <Text style={styles.labelText}>Péssimo</Text>
                    </TouchableOpacity>

                    {/* Opção Ruim */}
                    <TouchableOpacity style={styles.optionButton} onPress={handleSelectOption}>
                        <Icon name="sentiment-dissatisfied" size={100} color="#D1946D" />
                        <Text style={styles.labelText}>Ruim</Text>
                    </TouchableOpacity>

                    {/* Opção Neutro */}
                    <TouchableOpacity style={styles.optionButton} onPress={handleSelectOption}>
                        <Icon name="sentiment-neutral" size={100} color="#D1C86D" />
                        <Text style={styles.labelText}>Neutro</Text>
                    </TouchableOpacity>

                    {/* Opção Bom */}
                    <TouchableOpacity style={styles.optionButton} onPress={handleSelectOption}>
                        <Icon name="sentiment-satisfied" size={100} color="#A7D16D" />
                        <Text style={styles.labelText}>Bom</Text>
                    </TouchableOpacity>

                    {/* Opção Excelente */}
                    <TouchableOpacity style={styles.optionButton} onPress={handleSelectOption}>
                        <Icon name="sentiment-very-satisfied" size={100} color="#6AD16D" />
                        <Text style={styles.labelText}>Excelente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </PaperProvider>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#372775',
        justifyContent: 'center',
        padding: 20,
    },
    // NOVO ESTILO: Para o botão invisível
    hiddenButton: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 100, 
        height: 50,
        zIndex: 1,
    },
    questionText: {
        color: '#FFFFFF',
        fontFamily: 'Averia Libre',
        fontSize: 24,
        fontWeight: '400',
        textAlign: 'center',
        marginBottom: 60,
    },
    optionsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    optionButton: {
        alignItems: 'center',
    },
    labelText: {
        color: '#FFFFFF',
        fontFamily: 'Averia Libre',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 10,
    }
});

export default Coleta;