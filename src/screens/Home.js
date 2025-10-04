import { View, Text } from 'react-native'
import Botao from '../components/Botao'

const Home = (props) => {

    const cadastrarPesquisa = () => {
        props.navigation.navigate('NovaPesquisa')
    }

    const opcoesPesquisa = () => {
        props.navigation.navigate('AcaoPesquisa')
    }

    return (

        <View>
            <Botao texto="BOTÃO TEMPORÁRIO (simula ícones pesquisa)" funcao={opcoesPesquisa} />
            <Botao texto='NOVA PESQUISA' funcao={cadastrarPesquisa}></Botao>
        </View>
    )
}

export default Home