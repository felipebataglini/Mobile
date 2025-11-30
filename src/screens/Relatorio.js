import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { db } from '../firebase/config'
import { doc, onSnapshot } from "firebase/firestore"

const Relatorio = (props) => {

    const pesquisa = props.route.params?.pesquisa || {};

    const [dadosBrutos, setDadosBrutos] = useState([0, 0, 0, 0, 0])
    
    // Cores fixas: [Péssimo, Ruim, Neutro, Bom, Excelente]
    const coresFixas = ['#D16D6D', '#D1946D', '#D1C86D', '#A7D16D', '#6AD16D']

    useEffect(() => {
        if (pesquisa.id) {
            const unsub = onSnapshot(doc(db, "pesquisas", pesquisa.id), (doc) => {
                if (doc.exists()) {
                    const data = doc.data();
                    const pessimo = data.pessimo || 0;
                    const ruim = data.ruim || 0;
                    const neutro = data.neutro || 0;
                    const bom = data.bom || 0;
                    const excelente = data.excelente || 0;

                    setDadosBrutos([pessimo, ruim, neutro, bom, excelente]);
                }
            });
            return () => unsub();
        }
    }, [pesquisa.id]);

    // Filtra valores 0 para evitar erro no gráfico
    const seriesFiltrada = [];
    const coresFiltradas = [];

    dadosBrutos.forEach((valor, index) => {
        if (valor > 0) {
            seriesFiltrada.push(valor);
            coresFiltradas.push(coresFixas[index]);
        }
    });

    const totalVotos = dadosBrutos.reduce((a, b) => a + b, 0);

    return (
        <View style={estilos.container}>
            {totalVotos > 0 ? (
                // MUDANÇA: flexDirection 'row' para colocar lado a lado
                <View style={estilos.chartContainer}>
                    <PieChart
                        widthAndHeight={250}
                        series={seriesFiltrada}
                        sliceColor={coresFiltradas}
                        coverRadius={0}
                        coverFill={'#FFF'}
                    />
                    
                    {/* Legenda */}
                    <View style={estilos.legendaContainer}>
                        <LegendaItem cor="#D1C86D" texto="Neutro" />
                        <LegendaItem cor="#D1946D" texto="Ruim" />
                        <LegendaItem cor="#D16D6D" texto="Péssimo" />
                        <LegendaItem cor="#A7D16D" texto="Bom" />
                        <LegendaItem cor="#6AD16D" texto="Excelente" />
                    </View>
                </View>
            ) : (
                <Text style={estilos.textoAviso}>Essa pesquisa ainda não possui dados coletados.</Text>
            )}
        </View>
    )
}

const LegendaItem = ({ cor, texto }) => (
    <View style={estilos.itemLegenda}>
        <View style={[estilos.quadradoCor, { backgroundColor: cor }]} />
        <Text style={estilos.textoLegenda}>{texto}</Text>
    </View>
)

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    chartContainer: {
        flexDirection: 'row', // <--- MUDANÇA PRINCIPAL: Alinha horizontalmente
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        paddingHorizontal: 10
    },
    legendaContainer: {
        marginLeft: 20, // <--- Adiciona espaço entre o gráfico e a legenda
        justifyContent: 'center'
    },
    itemLegenda: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10 // Aumentei um pouco o espaço entre os itens
    },
    quadradoCor: {
        width: 20,
        height: 20,
        borderRadius: 5,
        marginRight: 10
    },
    textoLegenda: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 18
    },
    textoAviso: {
        color: '#FFFFFF',
        fontFamily: 'AveriaLibre-Regular',
        fontSize: 20,
        textAlign: 'center',
        padding: 20
    }
})

export default Relatorio