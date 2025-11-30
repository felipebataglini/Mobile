import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PaperProvider, MD3LightTheme as DefaultTheme } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { db } from '../firebase/config';
import { doc, updateDoc, increment } from "firebase/firestore";

const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#FFFFFF',
        secondary: 'black'
    }
};

const Coleta = (props) => {

    // Recupera o objeto pesquisa passado pela navegação
    // Se não houver (ex: teste direto), usa um objeto padrão para não quebrar
    const pesquisa = props.route.params?.pesquisa || { nome: "Pesquisa", id: null };

    // Função para registrar o voto no banco e navegar
    const votar = async (sentimento) => {
        
        // Se tivermos um ID válido, atualizamos o banco
        if (pesquisa.id) {
            try {
                const docRef = doc(db, "pesquisas", pesquisa.id);
                
                // Atualiza o documento incrementando em 1 o campo do sentimento escolhido
                // Ex: se sentimento for 'bom', vai fazer { bom: increment(1) }
                await updateDoc(docRef, {
                    [sentimento]: increment(1)
                });
            } catch (error) {
                console.error("Erro ao computar voto: ", error);
            }
        } else {
            console.log("Modo teste: Voto não salvo pois não há ID da pesquisa.");
        }

        // Independente de erro ou sucesso no banco, agradece ao usuário
        props.navigation.navigate('Agradecimento'); 
    };

    const navigateToDrawer = () => {
        props.navigation.navigate('Drawer');
    };

    return (
        <PaperProvider theme={theme}>
            <View style={styles.container}>

                {/* Área clicável invisível no canto superior direito para sair */}
                <TouchableOpacity 
                    style={styles.botaoEscondido} 
                    onPress={navigateToDrawer} 
                />

                <Text style={styles.questionText}>
                    {/* Título dinâmico usando o nome da pesquisa */}
                    O que você achou do {pesquisa.nome}?
                </Text>

                <View style={styles.optionsContainer}>
                    {/* Opção Péssimo */}
                    <TouchableOpacity style={styles.optionButton} onPress={() => votar('pessimo')}>
                        <Icon name="sentiment-very-dissatisfied" size={100} color="#D16D6D" />
                        <Text style={styles.labelText}>Péssimo</Text>
                    </TouchableOpacity>

                    {/* Opção Ruim */}
                    <TouchableOpacity style={styles.optionButton} onPress={() => votar('ruim')}>
                        <Icon name="sentiment-dissatisfied" size={100} color="#D1946D" />
                        <Text style={styles.labelText}>Ruim</Text>
                    </TouchableOpacity>

                    {/* Opção Neutro */}
                    <TouchableOpacity style={styles.optionButton} onPress={() => votar('neutro')}>
                        <Icon name="sentiment-neutral" size={100} color="#D1C86D" />
                        <Text style={styles.labelText}>Neutro</Text>
                    </TouchableOpacity>

                    {/* Opção Bom */}
                    <TouchableOpacity style={styles.optionButton} onPress={() => votar('bom')}>
                        <Icon name="sentiment-satisfied" size={100} color="#A7D16D" />
                        <Text style={styles.labelText}>Bom</Text>
                    </TouchableOpacity>

                    {/* Opção Excelente */}
                    <TouchableOpacity style={styles.optionButton} onPress={() => votar('excelente')}>
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
    botaoEscondido: {
        position: 'absolute',
        top: 0,
        right: 0,
        width: 100, 
        height: 50,
        zIndex: 1,
    },
    questionText: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 32, // Ajustei levemente o tamanho para caber nomes maiores
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
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18,
        fontWeight: '400',
        marginTop: 10,
    }
});

export default Coleta;