import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import PieChart from 'react-native-pie-chart'
import { db } from '../firebase/config'
import { doc, onSnapshot } from "firebase/firestore"

const Relatorio = (props) => {

    const pesquisa = props.route.params?.pesquisa || {};
    const [series, setSeries] = useState([0, 0, 0, 0, 0]);
    const [sliceColor, setSliceColor] = useState([]);

    // Ordem dos dados: [Excelente, Bom, Neutro, Ruim, Péssimo] para bater com a legenda
    const coresPadrao = ['#F1CE7E', '#6994FE', '#5FCDA4', '#EA7288', '#53D8D8'];

    useEffect(() => {
        if (pesquisa.id) {
            const unsub = onSnapshot(doc(db, "pesquisas", pesquisa.id), (doc) => {
                if (doc.exists()) {
                    const data = doc.data();
                    
                    // Mapeia os dados do banco
                    const valoresBrutos = [
                        data.excelente || 0,
                        data.bom || 0,
                        data.neutro || 0,
                        data.ruim || 0,
                        data.pessimo || 0
                    ];

                    // Filtra apenas valores maiores que 0 para não quebrar o gráfico
                    const seriesFiltrada = [];
                    const coresFiltradas = [];

                    valoresBrutos.forEach((valor, index) => {
                        if (valor > 0) {
                            seriesFiltrada.push(valor);
                            coresFiltradas.push(coresPadrao[index]);
                        }
                    });

                    setSeries(seriesFiltrada);
                    setSliceColor(coresFiltradas);
                }
            });
            return () => unsub();
        }
    }, [pesquisa.id]);

    const totalVotos = series.reduce((a, b) => a + b, 0);

    return (
        <View style={estilos.container}>
            {totalVotos > 0 ? (
                <View style={estilos.contentRow}>
                    <PieChart
                        widthAndHeight={250}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0}
                        coverFill={'#FFF'}
                    />
                    <View style={estilos.legendaContainer}>
                        <View style={estilos.itemLegenda}>
                            <View style={[estilos.quadradoCor, { backgroundColor: '#F1CE7E' }]} />
                            <Text style={estilos.textoLegenda}>Excelente</Text>
                        </View>
                        <View style={estilos.itemLegenda}>
                            <View style={[estilos.quadradoCor, { backgroundColor: '#6994FE' }]} />
                            <Text style={estilos.textoLegenda}>Bom</Text>
                        </View>
                        <View style={estilos.itemLegenda}>
                            <View style={[estilos.quadradoCor, { backgroundColor: '#5FCDA4' }]} />
                            <Text style={estilos.textoLegenda}>Neutro</Text>
                        </View>
                        <View style={estilos.itemLegenda}>
                            <View style={[estilos.quadradoCor, { backgroundColor: '#EA7288' }]} />
                            <Text style={estilos.textoLegenda}>Ruim</Text>
                        </View>
                        <View style={estilos.itemLegenda}>
                            <View style={[estilos.quadradoCor, { backgroundColor: '#53D8D8' }]} />
                            <Text style={estilos.textoLegenda}>Péssimo</Text>
                        </View>
                    </View>
                </View>
            ) : (
                <Text style={estilos.textoAviso}>Não há dados para esta pesquisa.</Text>
            )}
        </View>
    )
}

const estilos = StyleSheet.create({
    container: {
        backgroundColor: '#372775',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    contentRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    legendaContainer: {
        marginLeft: 20
    },
    itemLegenda: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },
    quadradoCor: {
        width: 20,
        height: 20,
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
        fontSize: 20
    }
})

export default Relatorio